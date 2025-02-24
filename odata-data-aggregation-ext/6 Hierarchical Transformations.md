
-------

# ##sec Hierarchical Transformations

The transformations defined in this section are called hierarchical, because they make use of a recursive hierarchy and are defined in terms of hierarchy functions introduced in the previous section.

The transformations `ancestors` and `descendants` do not define an order on the output set. An order can be imposed by a subsequent `orderby` or `traverse` transformation or a `$orderby`. The output set of `traverse` is in preorder or postorder.

The algorithmic descriptions of the transformations make use of a _union_ of collections, this is defined as an unordered collection containing the items from all these collections and from which duplicates have been removed.

The notation $u[t]$ is used to denote the value of a property $t$, possibly preceded by a type-cast segment, in an instance $u$. It is also used to denote the value of a single-valued data aggregation path $t$, evaluated relative to $u$. The value of a collection-valued [data aggregation path](#DataAggregationPath) is denoted in the [$\Gamma$ notation](#EvaluationofDataAggregationPaths) by $γ(u,t)$.

The notations introduced here are used throughout the following subsections.

## ##subsec Common Parameters for Hierarchical Transformations

The parameter lists defined in the following subsections have three mandatory parameters in common.

The recursive hierarchy is defined by a parameter pair $(H,Q)$, where $H$ and $Q$ MUST be specified as the first and second parameter. Here, $H$ MUST be an expression of type `Collection(Edm.EntityType)` starting with `$root` that has no multiple occurrences of the same entity. $H$ identifies the collection of node entities forming a recursive hierarchy based on an annotation of their common entity type with term `RecursiveHierarchy` with a `Qualifier` attribute whose value MUST be provided in $Q$. The property paths referenced by `NodeProperty` and `ParentNavigationProperty` in the `RecursiveHierarchy` annotation must be evaluable for the nodes in the recursive hierarchy, otherwise the service MUST reject the request. The `NodeProperty` is denoted by $q$ in this section.

The third parameter MUST be a data aggregation path $p$ with single- or collection-valued segments whose last segment MUST be a primitive property. The node identifier(s) of an instance $u$ in the input set are the primitive values in $γ(u,p)$, they are reached via $p$ starting from $u$. Let $p=p_1/…/p_k/r$ with $k≥0$ be the concatenation where each sub-path $p_1,…,p_k$ consists of a collection-valued segment that is preceded by zero or more single-valued segments, and either $r$ consists of one or more single-valued segments or $k≥1$ and ${}/r$ is absent. Each segment can be prefixed with a type cast.

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
where $y_1,…,y_k$ denote `lambdaVariableExpr`s as defined in [OData-ABNF](#ODataABNF) and ${}/r$ may be absent.

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

🚧 It is only allowed in a recursive hierarchy where `RecursiveHierarchy/ParentNavigationProperty` is single-valued.

$H$, $Q$ and $p$ are the first three parameters defined [above](#CommonParametersforHierarchicalTransformations).

The fourth parameter $h$ of the `traverse` transformation is either `preorder` or `postorder`. Let $H'$ be the collection of root nodes in the recursive hierarchy $(H,Q)$. Nodes in $H'$ are called start nodes in this subsection (see [example ##weight]).

All following parameters are optional and form a list $o$ of expressions that could also be passed as a `$orderby` system query option. If $o$ is present, the transformation [stable-sorts](#SamenessandOrder) $H'$ by $o$.

🚧 Future versions of this specification MAY allow an optional fifth parameter that is a non-empty sequence of transformations which change the definition of $H'$. Until then a fifth parameter that could not be passed as `$orderby` does not belong to the list $o$ and MUST be ignored by the service.

The instances in the input set are related to one node (if $p$ is single-valued) or multiple nodes (if $p$ is collection-valued) in the recursive hierarchy. Given a node $x$, denote by $\hat F(x)$ the collection of all instances in the input set that are related to $x$; these collections can overlap. For each $u$ in $\hat F(x)$, the output set contains one instance that comprises the properties of $u$ and additional properties that identify the node $x$. These additional properties are independent of $u$ and are bundled into an instance called $σ(x)$. For example, if a sale $u$ is related to two sales organizations and hence contained in both $\hat F(x_1)$ and $\hat F(x_2)$, the output set will contain two instances $(u,σ(x_1))$ and $(u,σ(x_2))$ and $σ(x_i)$ contributes a navigation property `SalesOrganization`.

A transformation $F(x)$ is defined below such that $\hat F(x)$ is the output set of $F(x)$ applied to the input set of the `traverse` transformation.

Given a node $x$, the formulas below contain the transformation $\Pi_G(σ(x))$ in order to inject the properties of $σ(x)$ into the instances in $\hat F(x)$; this uses the function $\Pi_G$ that is defined in the [simple grouping](#SimpleGrouping) section. Further, $G$ is a list of [data aggregation paths](#DataAggregationPath) that shall be present in the output set, and $σ$ is a function that maps each hierarchy node $x$ to an instance of the [input type](#TypeStructureandContextURL) containing the paths from $G$. As a consequence of the following definitions, only single-valued properties and "final segments from $G$" are nested into $σ(x)$, therefore the behavior of $\Pi_G(σ(x))$ is well-defined.

The definition of $σ(x)$ makes use of a function $a(ε,t,x)$, which returns a sparsely populated instance $u$ in which only the path $t$ has a value, namely $u[t]=x$.

Three cases are distinguished:
1. _Case where the recursive hierarchy is defined on the input set_  
   This case applies if the paths $p$ and $q$ are equal. Let $σ(x)=x$ and let $G$ be a list containing all structural and navigation properties of the entity type of $H$.  
   In this case $\Pi_G(σ(x))$ injects all properties of $x$ into the instances of the output set.
2. _Case where the recursive hierarchy is defined on the related entity type addressed by a navigation property path_  
   This case applies if $p'$ is a non-empty navigation property path and $p''$ an optional type-cast segment such that $p$ equals the concatenated path $p'/p''/q$. Let $σ(x)=a(ε,p'/p'',x)$ and let $G=(p')$.  
   In this case $\Pi_G(σ(x))$ injects the whole related entity $x$ into the instances of the output set. The navigation property path $p'$ is expanded by default.
3. _Case where the recursive hierarchy is related to the input set only through equality of node identifiers, not through navigation_  
   If neither case 1 nor case 2 applies, let $σ(x)=a(ε,p,x[q])$ and let $G=(p)$.  
   In this case $\Pi_G(σ(x))$ injects only the node identifier of $x$ into the instances of the output set.

Here paths are considered equal if their non-type-cast segments refer to the same model elements when evaluated relative to the input set.

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

Since start nodes are root nodes, $σ(x)$ is computed exactly once for every node $x$, as part of the recursive formula for $R(x)$ given below.

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
