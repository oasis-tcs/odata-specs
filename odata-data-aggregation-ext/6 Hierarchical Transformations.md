
-------

# ##sec Hierarchical Transformations

The transformations and the `rolluprecursive` operator defined in this section are called hierarchical, because they make use of a recursive hierarchy and are defined in terms of hierarchy functions introduced in the previous section.

The transformations `ancestors` and `descendants` do not define an order on the output set. An order can be imposed by a subsequent `orderby` or `traverse` transformation or a `$orderby`. The output set of `traverse` is in preorder or postorder, and grouping with `rolluprecursive` orders its output set in analogy with [simple grouping](#SimpleGrouping).

The algorithmic descriptions of the transformations make use of a _union_ of collections, this is defined as an unordered collection containing the items from all these collections and from which duplicates have been removed.

The notation $u[t]$ is used to denote the value of a property $t$, possibly preceded by a type-cast segment, in an instance $u$. It is also used to denote the value of a single-valued data aggregation path $t$, evaluated relative to $u$. The value of a collection-valued [data aggregation path](#DataAggregationPath) is denoted in the [$\Gamma$ notation](#EvaluationofDataAggregationPaths) by $γ(u,t)$.

The notations introduced here are used throughout the following subsections.

## ##subsec Common Parameters for Hierarchical Transformations

The parameter lists defined in the following subsections have three mandatory parameters in common.

The recursive hierarchy is defined by a parameter pair $(H,Q)$, where $H$ and $Q$ MUST be specified as the first and second parameter. Here, $H$ MUST be an expression of type `Collection(Edm.EntityType)` starting with `$root` that has no multiple occurrences of the same entity. $H$ identifies the collection of node entities forming a recursive hierarchy based on an annotation of their common entity type with term `RecursiveHierarchy` with a `Qualifier` attribute whose value MUST be provided in $Q$. The property paths referenced by `NodeProperty` and `ParentNavigationProperty` in the `RecursiveHierarchy` annotation must be evaluable for the nodes in the recursive hierarchy, otherwise the service MUST reject the request. The `NodeProperty` is denoted by $q$ in this section.

The third parameter MUST be a data aggregation path $p$ with single- or collection-valued segments whose last segment MUST be a primitive property. The node identifier(s) of an instance $u$ in the input set are the primitive values in $γ(u,p)$, they are reached via $p$ starting from $u$. Let $p=p_1/…/p_k/r$ with $k≥0$ be the concatenation where each sub-path $p_1,…,p_k$ consists of a collection-valued segment that is preceded by zero or more single-valued segments, and either $r$ consists of one or more single-valued segments or $k≥1$ and ${}/r$ is absent. Each segment can be prefixed with a type cast.

Some parameter lists allow as optional fourth or fifth parameter a non-empty sequence $S$ of transformations. The transformation sequence $S$ will be applied to the node collection $H$. It MUST consist of transformations listed in [section ##TransformationsProducingaSubset] or [section ##HierarchicalTransformationsProducingaSubset] or service-defined bound functions whose output set is a subset of their input set.

## ##subsec Hierarchical Transformations Producing a Subset

These transformations produce an output set that consists of certain instances from their input set, possibly with repetitions or in a different order.

### ##subsubsec Transformations `ancestors` and `descendants`

In the simple case, the `ancestors` transformation takes an input set consisting of instances that belong to a recursive hierarchy $(H,Q)$. It determines a subset $A$ of the input set and then determines the set of ancestors of $A$ that were already contained in the input set. Its output set is the ancestors set, optionally including $A$.

In the more complex case, the instances in the input set are instead related to nodes in a recursive hierarchy. Then the `ancestors` transformation determines a subset $A$ of the input set consisting of instances that are related to certain nodes in the hierarchy, called start nodes. The ancestors of these start nodes are then determined, and the output set consists of instances of the input set that are related to the ancestors, or optionally to the start nodes.

The `descendants` transformation works analogously, but with descendants.

$H$, $Q$ and $p$ are the first three parameters defined [above](#CommonParametersforHierarchicalTransformations).

The fourth parameter is a transformation sequence $T$ composed of transformations listed [section ##TransformationsProducingaSubset] or [section ##Transformationsancestorsanddescendants] and of service-defined bound functions whose output set is a subset of their input set. $A$ is the output set of this sequence applied to the input set.

The fifth parameter $d$ is optional and takes an integer greater than or equal to 1 that specifies the maximum distance between start nodes and ancestors or descendants to be considered. An optional final `keep start` parameter drives the optional inclusion of the subset or start nodes.

The output set of the transformation ${\tt ancestors}(H,Q,p,T,d,{\tt keep\ start})$ or ${\tt descendants}(H,Q,p,T,d,{\tt keep\ start})$ is defined as the [union](#HierarchicalTransformations) of the output sets of transformations $F(u)$ applied to the input set for all $u$ in $A$. For a given instance $u$, the transformation $F(u)$ determines all instances of the input set whose node identifier is an ancestor or descendant of the node identifier of $u$:

If $p$ contains only single-valued segments, then, for `ancestors`,
$$\matrix{
F(u)={\tt filter}(\hbox{\tt Aggregation.isancestor}(\hfill\\
\quad {\tt HierarchyNodes}=H,\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\
\quad {\tt Node}=p,\;{\tt Descendant}=u[p],\;{\tt MaxDistance}=d,\;{\tt IncludeSelf}={\tt true}))\hfill
}$$
or, for `descendants`,
$$\matrix{
F(u)={\tt filter}(\hbox{\tt Aggregation.isdescendant}(\hfill\\
\quad {\tt HierarchyNodes}=H,\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\
\quad {\tt Node}=p,\;{\tt Ancestor}=u[p],\;{\tt MaxDistance}=d,\;{\tt IncludeSelf}={\tt true})).\hfill
}$$

Otherwise $p=p_1/…/p_k/r$ with $k≥1$, in this case the output set of the transformation $F(u)$ is defined as the [union](#HierarchicalTransformations) of the output sets of transformations $G(n)$ applied to the input set for all $n$ in $γ(u,p)$. The output set of $G(n)$ consists of the instances of the input set whose node identifier is an ancestor or descendant of the node identifier $n$:

For `ancestors`,
$$\matrix{
G(n)={\tt filter}(\hfill\\
\hskip1pc p_1/{\tt any}(y_1:\hfill\\
\hskip2pc y_1/p_2/{\tt any}(y_2:\hfill\\
\hskip3pc ⋱\hfill\\
\hskip4pc y_{k-1}/p_k/{\tt any}(y_k:\hfill\\
\hskip5pc \hbox{\tt Aggregation.isancestor}(\hfill\\
\hskip6pc {\tt HierarchyNodes}=H,\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\
\hskip6pc {\tt Node}=y_k/r,\;{\tt Descendant}=n,\;{\tt MaxDistance}=d,\;{\tt IncludeSelf}={\tt true}\hfill\\
\hskip5pc )\hfill\\
\hskip4pc )\hfill\\
\hskip3pc ⋰\hfill\\
\hskip2pc )\hfill\\
\hskip1pc )\hfill\\
)\hfill
}$$
or, for `descendants`,
$$\matrix{
G(n)={\tt filter}(\hfill\\
\hskip1pc p_1/{\tt any}(y_1:\hfill\\
\hskip2pc y_1/p_2/{\tt any}(y_2:\hfill\\
\hskip3pc ⋱\hfill\\
\hskip4pc y_{k-1}/p_k/{\tt any}(y_k:\hfill\\
\hskip5pc \hbox{\tt Aggregation.isdescendant}(\hfill\\
\hskip6pc {\tt HierarchyNodes}=H,\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\
\hskip6pc {\tt Node}=y_k/r,\;{\tt Ancestor}=n,\;{\tt MaxDistance}=d,\;{\tt IncludeSelf}={\tt true}\hfill\\
\hskip5pc )\hfill\\
\hskip4pc )\hfill\\
\hskip3pc ⋰\hfill\\
\hskip2pc )\hfill\\
\hskip1pc )\hfill\\
)\hfill
}$$
where $y_1,…,y_k$ denote [lambdaVariableExpr]{.abnf}s as defined in [OData-ABNF](#ODataABNF) and ${}/r$ may be absent.

If parameter $d$ is absent, the parameter ${\tt MaxDistance}=d$ is omitted. If `keep start` is absent, the parameter ${\tt IncludeSelf}={\tt true}$ is omitted.

Since the output set of `ancestors` is constructed as a union, no instance from the input set will occur more than once in it, even if, for example, a sale is related to both a sales organization and one of its ancestor organizations. For `descendants`, analogously.

::: example
Example ##ex: Request based on the `SalesOrgHierarchy` defined in [Hierarchy Examples](#HierarchyExamples), with `Superordinate/$ref` expanded to illustrate the hierarchy relation
```
GET /service/SalesOrganizations?$apply=
    ancestors($root/SalesOrganizations,SalesOrgHierarchy,ID,
              filter(contains(Name,'East') or contains(Name,'Central')))
  &$expand=Superordinate/$ref
```
results in
```json
{
  "@context": "$metadata#SalesOrganizations",
  "value": [
    { "ID": "EMEA",  "Name": "EMEA",
      "Superordinate": { "@id": "SalesOrganizations('Sales')" } },
    { "ID": "US",    "Name": "US",
      "Superordinate": { "@id": "SalesOrganizations('Sales')" } },
    { "ID": "Sales", "Name": "Sales",
      "Superordinate": null }
  ]
}
```
:::

::: example
Example ##ex: Request based on the `SalesOrgHierarchy` defined in [Hierarchy Examples](#HierarchyExamples), with `Superordinate/$ref` expanded to illustrate the hierarchy relation
```
GET /service/SalesOrganizations?$apply=
    descendants($root/SalesOrganizations,SalesOrgHierarchy,ID,
                filter(Name eq 'US'),keep start)
  &$expand=Superordinate/$ref
```
results in
```json
{
  "@context": "$metadata#SalesOrganizations",
  "value": [
    { "ID": "US West", "Name": "US West",
      "Superordinate": { "@id": "SalesOrganizations('US')" } },
    { "ID": "US",      "Name": "US",
      "Superordinate": { "@id": "SalesOrganizations('Sales')" } },
    { "ID": "US East", "Name": "US East",
      "Superordinate": { "@id": "SalesOrganizations('US')" } }
  ]
}
```
:::

::: example
⚠ Example ##ex: Input set and recursive hierarchy from two different entity sets
```
GET /service/Sales?$apply=
    ancestors($root/SalesOrganizations,
              SalesOrgHierarchy,
              SalesOrganization/ID,
              filter(contains(SalesOrganization/Name,'East')
                  or contains(SalesOrganization/Name,'Central')),
              keep start)
```
results in
```json
{
  "@context": "$metadata#Sales",
  "value": [
    { "ID": "4", "Amount": 8,
      "SalesOrganization": { "ID": "US East",      "Name": "US East" } },
    { "ID": "5", "Amount": 4,
      "SalesOrganization": { "ID": "US East",      "Name": "US East" } },
    { "ID": "6", "Amount": 2,
      "SalesOrganization": { "ID": "EMEA Central", "Name": "EMEA Central" } },
    { "ID": "7", "Amount": 1,
      "SalesOrganization": { "ID": "EMEA Central", "Name": "EMEA Central" } },
    { "ID": "8", "Amount": 2,
      "SalesOrganization": { "ID": "EMEA Central", "Name": "EMEA Central" } }
  ]
}
```
:::

### ##subsubsec Transformation `traverse`

The `traverse` transformation returns instances of the input set that are or are related to nodes of a given recursive hierarchy in a specified tree order.

$H$, $Q$ and $p$ are the first three parameters defined [above](#CommonParametersforHierarchicalTransformations).

The fourth parameter $h$ of the `traverse` transformation is either `preorder` or `postorder`. $S$ is an optional fifth parameter as defined [above](#CommonParametersforHierarchicalTransformations). Let $H'$ be the output set of the transformation sequence $S$ applied to $H$, or let $H'$ be the collection of root nodes in the recursive hierarchy $(H,Q)$ if $S$ is not specified. Nodes in $H'$ are called start nodes in this subsection (see [example ##weight]).

All following parameters are optional and form a list $o$ of expressions that could also be passed as a `$orderby` system query option. If $o$ is present, the transformation [stable-sorts](#SamenessandOrder) $H'$ by $o$.

The instances in the input set are related to one node (if $p$ is single-valued) or multiple nodes (if $p$ is collection-valued) in the recursive hierarchy. Given a node $x$, denote by $\hat F(x)$ the collection of all instances in the input set that are related to $x$; these collections can overlap. For each $u$ in $\hat F(x)$, the output set contains one instance that comprises the properties of $u$ and additional properties that identify the node $x$. These additional properties are independent of $u$ and are bundled into an instance called $σ(x)$. For example, if a sale $u$ is related to two sales organizations and hence contained in both $\hat F(x_1)$ and $\hat F(x_2)$, the output set will contain two instances $(u,σ(x_1))$ and $(u,σ(x_2))$ and $σ(x_i)$ contributes a navigation property `SalesOrganization`.

A transformation $F(x)$ is defined below such that $\hat F(x)$ is the output set of $F(x)$ applied to the input set of the `traverse` transformation.

Given a node $x$, the formulas below contain the transformation $\Pi_G(σ(x))$ in order to inject the properties of $σ(x)$ into the instances in $\hat F(x)$; this uses the function $\Pi_G$ that is defined in the [simple grouping](#SimpleGrouping) section. Further, $G$ is a list of [data aggregation paths](#DataAggregationPath) that shall be present in the output set, and $σ$ is a function that maps each hierarchy node $x$ to an instance of the [input type](#TypeStructureandContextURL) containing the paths from $G$. As a consequence of the following definitions, only single-valued properties and "final segments from $G$" are nested into $σ(x)$, therefore the behavior of $\Pi_G(σ(x))$ is well-defined.

The definition of $σ(x)$ makes use of a function $a(ε,t,x)$, which returns a sparsely populated instance $u$ in which only the path $t$ has a value, namely $u[t]=x$.

Three cases are distinguished:
1. _Case where the recursive hierarchy is defined on the input set_  
   This case applies if the paths $p$ and $q$ are equal. Let $σ(x)=x$ and let $G$ be a list containing all structural and navigation properties of the entity type of $H$.  
   In this case $\Pi_G(σ(x))$ injects all properties of $x$ into the instances of the output set. (See [example ##caseone].)
2. _Case where the recursive hierarchy is defined on the related entity type addressed by a navigation property path_  
   This case applies if $p'$ is a non-empty navigation property path and $p''$ an optional type-cast segment such that $p$ equals the concatenated path $p'/p''/q$. Let $σ(x)=a(ε,p'/p'',x)$ and let $G=(p')$.  
   In this case $\Pi_G(σ(x))$ injects the whole related entity $x$ into the instances of the output set. The navigation property path $p'$ is expanded by default. (See [example ##rollupnode].)
3. _Case where the recursive hierarchy is related to the input set only through equality of node identifiers, not through navigation_  
   If neither case 1 nor case 2 applies, let $σ(x)=a(ε,p,x[q])$ and let $G=(p)$.  
   In this case $\Pi_G(σ(x))$ injects only the node identifier of $x$ into the instances of the output set.

Here paths are considered equal if their non-type-cast segments refer to the same model elements when evaluated relative to the input set (see [example ##pathequals]).

The function $a(u,t,x)$ takes an instance, a path and another instance as arguments and is defined recursively as follows:
1. If $u$ equals the special symbol $ε$, set $u$ to a new instance of the [input type](#TypeStructureandContextURL) without properties and without entity-id.
2. If $t$ contains only one segment other than a type cast, let $t_1=t$, and let $x'=x$, then go to step 6.
3. Otherwise, let $t_1$ be the first property segment in $t$, possibly together with a preceding type-cast segment, let $t_2$ be any type-cast segment that immediately follows, and let $t_3$ be the remainder such that $t$ equals the concatenated path $t_1/t_2/t_3$ where ${}/t_2$ may be absent.
4. Let $u'$ be an instance of the type of $t_1/t_2$ without properties and without entity-id.
5. Let $x'=a(u',t_3,x)$.
6. If $t_1$ is single-valued, let $u[t_1]=x'$.
7. If $t_1$ is collection-valued, let $u[t_1]$ be a collection consisting of one item $x'$.
8. Return $u$.

(See [example ##traversecoll].)

#### ##subsubsubsec Standard Case of `traverse`

The algorithm is first given for the standard case where `RecursiveHierarchy/ParentNavigationProperty` is single-valued and the optional parameter $S$ is not specified. In this standard case, start nodes are root nodes and $σ(x)$ is computed exactly once for every node $x$, as part of the recursive formula for $R(x)$ given below. The general case follows [later](#GeneralCaseoftraverse).

Let $r_1,…,r_n$ be a sequence of the start nodes in $H'$ [preserving the order](#SamenessandOrder) of $H'$ stable-sorted by $o$. Then the transformation ${\tt traverse}(H,Q,p,h,o)$ is defined as equivalent to
$${\tt concat}(R(r_1),…,R(r_n)).$$

$R(x)$ is a transformation producing the specified tree order for a sub-hierarchy of $H$ with root node $x$. Let $c_1,…,c_m$ with $m≥0$ be an [order-preserving sequence](#SamenessandOrder) of the [children](#RecursiveHierarchy) of $x$ in $(H,Q)$. The _recursive formula for $R(x)$_ is as follows:

If $h={\tt preorder}$, then
$$R(x)={\tt concat}(F(x)/\Pi_G(σ(x)),R(c_1),…,R(c_m)).$$

If $h={\tt postorder}$, then
$$R(x)={\tt concat}(R(c_1),…,R(c_m),F(x)/\Pi_G(σ(x))).$$

The absence of cycles guarantees that the recursion terminates.

$F(x)$ is a transformation that determines for the specified node $x$ the instances of the input set having the same node identifier as $x$.

If $p$ contains only single-valued segments, then
$$F(x)={\tt filter}(p{\tt\ eq\ }x[q]).$$

Otherwise $p=p_1/…/p_k/r$ with $k≥1$ and
$$\matrix{
F(x)={\tt filter}(\hfill\\
\hskip1pc p_1/{\tt any}(y_1:\hfill\\
\hskip2pc y_1/p_2/{\tt any}(y_2:\hfill\\
\hskip3pc ⋱\hfill\\
\hskip4pc y_{k-1}/p_k/{\tt any}(y_k:\hfill\\
\hskip5pc y_k/r{\tt\ eq\ }x[q]\hfill\\
\hskip4pc )\hfill\\
\hskip3pc ⋰\hfill\\
\hskip2pc )\hfill\\
\hskip1pc )\hfill\\
)\hfill
}$$
where $y_1,…,y_k$ denote `lambdaVariableExpr`s and ${}/r$ may be absent.

::: example
Example ##ex: Based on the `SalesOrgHierarchy` defined in [Hierarchy Examples](#HierarchyExamples)
```
GET /service/SalesOrganizations?$apply=
    descendants($root/SalesOrganizations,SalesOrgHierarchy,ID,
                Name eq 'US',keep start)
    /ancestors($root/SalesOrganizations,SalesOrgHierarchy,ID,
                contains(Name,'East'),keep start)
    /traverse($root/SalesOrganizations,SalesOrgHierarchy,ID,preorder)
  &$expand=Superordinate/$ref
```
results in
```json
{
  "@context": "$metadata#SalesOrganizations",
  "value": [
    { "ID": "US",      "Name": "US",
      "Superordinate": { "@id": "SalesOrganizations('Sales')" } },
    { "ID": "US East", "Name": "US East",
      "Superordinate": { "@id": "SalesOrganizations('US')" } }
  ]
}
```
:::

#### ##subsubsubsec General Case of `traverse`

In the general case, the recursive algorithm can reach a node $x$ multiple times, via different parents or ancestors, or because $x$ is a start node and a descendant of another start node. Then the algorithm computes $R(x)$ and hence $σ(x)$ multiple times. In order to distinguish these computation results, information about the ancestors up to the start node is injected into each $σ(x)$ by annotating $x$ differently before each $σ(x)$ is computed. On the other hand, certain nodes can be unreachable from any start node, these are called orphans of the traversal (see [example ##weight]).

More precisely, in the general case every node $y$ is annotated with the term `UpPath` from the [`Aggregation` vocabulary]($$$OData-VocAggr$$$#UpPath). The annotation has $Q$ as qualifier and the annotation value is a collection of string values of node identifiers. The first member of that collection is the node identifier of the parent node $x$ such that $R(y)$ appears on the right-hand side of the recursive formula for $R(x)$. The following members are the members of the `Aggregation.UpPath` collection of $x$. Every instance in the output set of `traverse` is related to one node with `Aggregation.UpPath` annotation. Start nodes appear annotated with an empty collection.

::: example
⚠ Example ##ex: A sales organization [Atlantis](#weight) with two parents US and EMEA would occur twice in the result of a `traverse` transformation:
```
GET /service/SalesOrganizations?$apply=
    traverse($root/SalesOrganizations,MultiParentHierarchy,ID,preorder)
```
results in
```json
{
  "@context": "$metadata#SalesOrganizations",
  "value": [
    …
    { "ID": "Atlantis", "Name": "Atlantis",
      "@Aggregation.UpPath#MultiParentHierarchy":
        [ "US", "Sales" ] },
    { "ID": "AtlantisChild", "Name": "Child of Atlantis",
      "@Aggregation.UpPath#MultiParentHierarchy":
         [ "Atlantis", "US", "Sales" ] },
    …
    { "ID": "Atlantis", "Name": "Atlantis",
      "@Aggregation.UpPath#MultiParentHierarchy":
        [ "EMEA", "Sales" ] },
    { "ID": "AtlantisChild", "Name": "Child of Atlantis",
      "@Aggregation.UpPath#MultiParentHierarchy":
        [ "Atlantis", "EMEA", "Sales" ] },
    …
  ]
}
```
:::

Given a start node $x$, let $ρ_0(x)$ be the node $x$ with the annotation $ρ_0(x)/@\hbox{\tt Aggregation.UpPath}\#Q=[]$ set to an empty collection.

Given a node $x$ annotated with $x/@\hbox{\tt Aggregation.UpPath}\#Q=[x_1,…,x_d]$, where $d≥0$, and given a child $y$ of $x$, let $ρ(y,x)$ be the node $y$ with the annotation
$$ρ(y,x)/@\hbox{\tt Aggregation.UpPath}\#Q=[{\tt cast}(x[q],\hbox{\tt Edm.String}),x_1,…,x_d].$$

Like structural and navigation properties, these instance annotations are considered part of the node $x$ and are copied over to $σ(x)$. For them to be included in the transformation $\Pi_G(σ(x))$, an additional step is inserted between steps 2 and 3 of the function $a_G(u,s,p)$ as defined in the [simple grouping section](#SimpleGrouping):
- If $s$ is annotated with `Aggregation.UpPath` and qualifier $Q$, copy this annotation from $s$ to $u$.

Recall that instance annotations never appear in [data aggregation paths](#DataAggregationPath) or [aggregatable expressions](#AggregatableExpression). They are not considered when determining whether instances of structured types are [the same](#SamenessandOrder), they do not cause conflicting representations and are absent from merged representations.

Let $r_1,…,r_n$ be the start nodes in $H'$ as above, then the transformation ${\tt traverse}(H,Q,p,h,S,o)$ is defined as equivalent to
$${\tt concat}(R(ρ_0(r_1)),…,R(ρ_0(r_n))$$
where the function $R(x)$ takes as argument a node with `Aggregation.UpPath` annotation. With $F(x)$ and $c_1,…,c_m$ as above, if $h={\tt preorder}$, then
$$R(x)={\tt concat}(F(x)/\Pi_G(σ(x)),R(ρ(c_1,x)),…,R(ρ(c_m,x))),$$
and if $h={\tt postorder}$, then
$$R(x)={\tt concat}(R(ρ(c_1,x)),…,R(ρ(c_m,x)),F(x)/\Pi_G(σ(x))).$$

The absence of cycles guarantees that the recursion terminates.

In the general case, servers MUST include the `Aggregation.UpPath` annotations in the result of `$apply` but MAY omit them if `RecursiveHierarchy/ParentNavigationProperty` is single-valued and all start nodes are root nodes.

If `RecursiveHierarchy/ParentNavigationProperty` is collection-valued but the parent collection never contains more than one parent and the optional parameter $S$ is not specified, then the result is effectively like in the standard case, except for the presence of the `Aggregation.UpPath` annotations.

## ##subsec Grouping with `rolluprecursive`

Recall that simple grouping partitions the input set and applies a transformation sequence to each partition. By contrast, grouping with `rolluprecursive`, informally speaking, transforms the input set into overlapping portions (like "US" and "US East"), one for each node $x$ of a [recursive hierarchy](#RecursiveHierarchy). The transformation $F(x)$, defined below, outputs the portion whose node identifiers are among the descendants of $x$ (including $x$ itself). A transformation sequence is then applied to each portion, and they are made distinguishable in the output set through injection of information about the node $x$, which is achieved through the transformation $\Pi_G(σ(x))$ defined in the [`traverse`](#Transformationtraverse) section.

As defined [above](#CommonParametersforHierarchicalTransformations), $H$, $Q$ and $p$ are the first three parameters of `rolluprecursive`, $S$ is an optional fourth parameter. Let $H'$ be the output set of the transformation sequence $S$ applied to $H$, or $H'=H$ if $S$ is not specified.

Navigation properties specified in $p$ are expanded by default.

Let $T$ be a transformation sequence, $P_1$ stand in for zero or more property paths and $P_2$ for zero or more `rollup` or `rolluprecursive` operators or property paths. The transformation ${\tt groupby}((P_1,{\tt rolluprecursive}(H,Q,p,S),P_2),T)$ is computed by the following algorithm, which invokes itself recursively if the number of `rolluprecursive` operators in the first argument of the `groupby` transformation, which is called $M$, is greater than one. Let $N$ be the recursion depth of the algorithm, starting with 1.

_The `rolluprecursive` algorithm:_

A property $χ_N$ appears in the algorithm, but is not present in the output set. It is explained later (see [example ##rollupnode]). $Z_N$ is a transformation whose output set is its input set with property $χ_N$ removed.

Let $x_1,…,x_n$ be the nodes in $H'$, possibly with repetitions. If the optional transformation sequence $S$ ends with a [`traverse`](#Transformationtraverse) transformation, as in [example ##weighted], the sequence $x_1,…,x_n$ MUST have the preorder or postorder established by that traversal, and the transformation ${\tt groupby}((P_1,{\tt rolluprecursive}(H,Q,p,S),P_2),T)$ is defined as equivalent to
$${\tt concat}(R(x_1),…,R(x_n)).$$

Otherwise, if $S$ is not specified or does not end with a `traverse` transformation, the output set of the transformation ${\tt groupby}((P_1,{\tt rolluprecursive}(H,Q,p,S),P_2),T)$ is the concatenation of $R(x_1),…,R(x_n)$. The order of occurrences from the same $R(x_i)$ remains the same, and no order is defined between occurrences from different $R(x_i)$ and $R(x_j)$.

$R(x)$ is a transformation that processes the entire sub-hierarchy rooted at $x$, which is the output set of $F(x)$. The output set of $R(x)$ is a collection of aggregated instances for all rollup results.

If at least one of $P_1$ or $P_2$ is non-empty, then
$$R(x)=F(x)/{\tt compute}(x{\tt\ as\ }χ_N)/{\tt groupby}((P_1,P_2),T/Z_N/\Pi_G(σ(x))).$$

The property $χ_N=x$ is present during the evaluation of $T$, but not afterwards. If $P_2$ contains a `rolluprecursive` operator, the evaluation of the formula involves a recursive invocation (with $N$ increased by 1) of the `rolluprecursive` algorithm.

Otherwise if $P_1$ and $P_2$ are empty, then
$$R(x)=F(x)/{\tt compute}(x{\tt\ as\ }χ_N)/T/Z_N/\Pi_G(σ(x)).$$

$F(x)$ is defined as follows: If $p$ contains only single-valued segments, then
$$\matrix{
F(x)={\tt filter}(\hbox{\tt Aggregation.isdescendant}(\hfill\\
\quad {\tt HierarchyNodes}=H,\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\
\quad {\tt Node}=p,\;{\tt Ancestor}=x[q],\;{\tt IncludeSelf}={\tt true})).\hfill
}$$

Otherwise $p=p_1/…/p_k/r$ with $k≥1$ and
$$\matrix{
F(x)={\tt filter}(\hfill\\
\hskip1pc p_1/{\tt any}(y_1:\hfill\\
\hskip2pc y_1/p_2/{\tt any}(y_2:\hfill\\
\hskip3pc ⋱\hfill\\
\hskip4pc y_{k-1}/p_k/{\tt any}(y_k:\hfill\\
\hskip5pc \hbox{\tt Aggregation.isdescendant}(\hfill\\
\hskip6pc {\tt HierarchyNodes}=H,\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\
\hskip6pc {\tt Node}=y_k/r,\;{\tt Ancestor}=x[q],\;{\tt IncludeSelf}={\tt true}\hfill\\
\hskip5pc )\hfill\\
\hskip4pc )\hfill\\
\hskip3pc ⋰\hfill\\
\hskip2pc )\hfill\\
\hskip1pc )\hfill\\
)\hfill
}$$
where $y_1,…,y_k$ denote `lambdaVariableExpr`s and ${}/r$ may be absent. (See [example ##rollupcoll] for a case with $k=1$.)

Informatively speaking, the effect of the algorithm can be summarized as follows: If $M≥1$ and $\hat F_N(x)$ denotes the collection of all instances that are related to a node $x$ as determined by $F(x)$ in the recursive hierarchy of the $N$-th `rolluprecursive` operator, then $T$ is applied to each of the intersections of $\hat F_1(χ_1),…,\hat F_M(χ_M)$, as $χ_N$ runs over all nodes of the $N$-th recursive hierarchy for $1≤N≤M$. Into the instances of the resulting output sets the $\Pi_G$ transformations inject information about the nodes $χ_1,…,χ_M$.

::: example
Example ##ex_caseone: Total number of sub-organizations for all organizations in the hierarchy defined in [Hierarchy Examples](#HierarchyExamples) with $p=q={\tt ID}$ (case 1 of the [definition](#Transformationtraverse) of $σ(x)$). In this case $\Pi_G(σ(x))$ writes back the entire node into the output set of $T$, aggregates must have an alias to avoid overwriting by a property of the node with the same name.
```
GET /service/SalesOrganizations?$apply=
    groupby((rolluprecursive(
                 $root/SalesOrganizations,SalesOrgHierarchy,ID)),
             aggregate($count as OrgCnt)/compute(OrgCnt sub 1 as SubOrgCnt))
  &$select=ID,Name,SubOrgCnt
  &$expand=Superordinate($select=ID)
```
results in
```json
{
  "@context":
      "$metadata#SalesOrganizations(ID,Name,SubOrgCnt,Superordinate(ID))",
  "value": [
    { "ID": "US West",      "Name": "US West",
      "SubOrgCount": 0, "Superordinate": { "ID": "US" } },
    { "ID": "US East",      "Name": "US East",
      "SubOrgCount": 0, "Superordinate": { "ID": "US" } },
    { "ID": "US",           "Name": "US",
      "SubOrgCount": 2, "Superordinate": { "ID": "Sales" } },
    { "ID": "EMEA Central", "Name": "EMEA Central",
      "SubOrgCount": 0, "Superordinate": { "ID": "EMEA" } },
    { "ID": "EMEA",         "Name": "EMEA",
      "SubOrgCount": 1, "Superordinate": { "ID": "Sales" } },
    { "ID": "Sales",        "Name": "Sales",
      "SubOrgCount": 5, "Superordinate": null }
  ]
}
```
:::

The value of the property $χ_N$ in the `rolluprecursive` algorithm is the node $x$ at recursion level $N$. In a common expression, $χ_N$ cannot be accessed by its name, but can only be read as the return value of the unbound function ${\tt rollupnode}({\tt Position}=N)$ defined in the [`Aggregation` vocabulary]($$$OData-VocAggr$$$#rollupnode), with $1≤N≤M$, and only during the application of the transformation sequence $T$ in the formula for $R(x)$ above (the function is undefined otherwise). If $N=1$, the `Position` parameter can be omitted.

::: example
⚠ Example ##ex_rollupnode: Total sales amounts per organization, both including and excluding sub-organizations, in the US sub-hierarchy defined in [Hierarchy Examples](#HierarchyExamples) with $p=p'/q={\tt SalesOrganization}/{\tt ID}$ and $p'={\tt SalesOrganization}$ (case 2 of the [definition](#Transformationtraverse) of $σ(x)$). The Boolean expression $p'\hbox{\tt\ eq Aggregation.rollupnode}()$ is true for sales in the organization for which the aggregate is computed, but not for sales in sub-organizations.
```
GET /service/Sales?$apply=groupby(
    (rolluprecursive(
      $root/SalesOrganizations,
      SalesOrgHierarchy,
      SalesOrganization/ID,
      descendants($root/SalesOrganizations,
                  SalesOrgHierarchy,
                  ID, filter(ID eq 'US'), keep start))),
    compute(case(SalesOrganization eq Aggregation.rollupnode():Amount)
            as AmountExcl)
    /aggregate(Amount with sum as TotalAmountIncl,
               AmountExcl with sum as TotalAmountExcl))
```
results in
```json
{
  "@context": "$metadata#Sales(SalesOrganization(),
                               TotalAmountIncl,TotalAmountExcl)",
  "value": [
    { "SalesOrganization": { "ID": "US West", "Name": "US West" },
      "TotalAmountIncl@type": "Decimal", "TotalAmountIncl":  7,
      "TotalAmountExcl@type": "Decimal" ,"TotalAmountExcl":  7 },
    { "SalesOrganization": { "ID": "US",      "Name": "US" },
      "TotalAmountIncl@type": "Decimal", "TotalAmountIncl": 19,
      "TotalAmountExcl": null },
    { "SalesOrganization": { "ID": "US East", "Name": "US East" },
      "TotalAmountIncl@type": "Decimal", "TotalAmountIncl": 12,
      "TotalAmountExcl@type": "Decimal", "TotalAmountExcl": 12 }
  ]
}
```
:::

::: example
⚠ Example ##ex: When requesting a sub-hierarchy consisting of the US East sales organization and its ancestors, the total sales amounts can either include the descendants outside this sub-hierarchy ("actual totals") or can exclude them ("visual totals").

Actual totals are computed when `rolluprecursive` is restricted to the sub-hierarchy by setting the optional parameter $S$ to an `ancestors` transformation:
```
GET /service/Sales?$apply=groupby((rolluprecursive(
    $root/SalesOrganizations,SalesOrgHierarchy,SalesOrganization/ID,
    ancestors($root/SalesOrganizations,SalesOrgHierarchy,ID,
              filter(ID eq 'US East'),keep start))),
  aggregate(Amount with sum as Total))
```
results in
```json
{
  "@context": "$metadata#Sales(SalesOrganization(),Total)",
  "value": [
    { "SalesOrganization": { "ID": "US East", "Name": "US East" },
      "Total@type": "Decimal", "Total": 12 },
    { "SalesOrganization": { "ID": "US",      "Name": "US" },
      "Total@type": "Decimal", "Total": 19 },
    { "SalesOrganization": { "ID": "Sales",   "Name": "Sales" },
      "Total@type": "Decimal", "Total": 24 }
  ]
}
```

Visual totals are computed when the `ancestors` transformation is additionally carried out before the `rolluprecursive`:
```
GET /service/Sales?$apply=
  ancestors($root/SalesOrganizations,SalesOrgHierarchy,SalesOrganization/ID,
    filter(SalesOrganization/ID eq 'US East'),keep start))),
  /groupby((rolluprecursive(
    $root/SalesOrganizations,SalesOrgHierarchy,SalesOrganization/ID,
    ancestors($root/SalesOrganizations,SalesOrgHierarchy,ID,
              filter(ID eq 'US East'),keep start))),
  aggregate(Amount with sum as Total))
```
results in
```json
{
  "@context": "$metadata#Sales(SalesOrganization(),Total)",
  "value": [
    { "SalesOrganization": { "ID": "US East", "Name": "US East" },
      "Total@type": "Decimal", "Total": 12 },
    { "SalesOrganization": { "ID": "US",      "Name": "US" },
      "Total@type": "Decimal", "Total": 12 },
    { "SalesOrganization": { "ID": "Sales",   "Name": "Sales" },
      "Total@type": "Decimal", "Total": 12 }
  ]
}
```
:::

::: example
⚠ Example ##ex_pathequals: Although $p={\tt ID}$ and $q={\tt ID}$, they are not equal in the sense of case 1, because they are evaluated relative to different entity sets. Hence, this is an example of case 3 of the [definition](#Transformationtraverse) of $σ(x)$, where no `Sales/ID` matches a `SalesOrganizations/ID`, that is, all $F(x)$ have empty output sets.
```
GET /service/Sales?$apply=
    groupby((rolluprecursive(
                 $root/SalesOrganizations,SalesOrgHierarchy,ID))),
             aggregate(Amount with sum as TotalAmount))
```
results in
```json
{
  "@context": "$metadata#Sales(SalesOrganization(),TotalAmount)",
  "value": [
    { "SalesOrganization": { "ID": "Sales", "Name": "Corporate Sales" },
      "TotalAmount": null },
    { "SalesOrganization": { "ID": "EMEA",  "Name": "EMEA" },
      "TotalAmount": null },
    { "SalesOrganization": { "ID": "US",    "Name": "US" },
      "TotalAmount": null },
    …
  ]
}
```
:::

