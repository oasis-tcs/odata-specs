-------

# ##sec Hierarchical Transformations

The transformations and the `rolluprecursive` operator defined in this section are called hierarchical, because they make use of a recursive hierarchy and are defined in terms of hierarchy functions introduced in the previous section.

With the exception of `traverse`, the hierarchical transformations do not define an order on the output set. An order can be reinstated by a subsequent `orderby` or `traverse` transformation or a `$orderby`.

The algorithmic descriptions of the transformations make use of a _union_ of collections, this is defined as an unordered collection containing the items from all these collections and from which duplicates have been removed.

The notation $u[v]$ is used to denote the value of a property $v$, possibly preceded by a type-cast segment, in an instance $u$. It is also used to denote the value of a single-valued data aggregation path $v$, evaluated relative to $u$. The value of a collection-valued [data aggregation path](#DataAggregationPath) is denoted in the [$\Gamma$ notation](#EvaluationofDataAggregationPaths) by $γ(u,v)$.

The notations introduced here are used throughout the following subsections.

## ##subsec Common Parameters for Hierarchical Transformations

The parameter lists defined in the following subsections have three mandatory parameters and one optional parameter in common.

The recursive hierarchy is defined by a parameter pair $(H,Q)$, where $H$ and $Q$ MUST be specified as the first and second parameter. Here, $H$ MUST be an expression of type `Collection(Edm.EntityType)` starting with `$root` that has no multiple occurrences of the same entity. $H$ identifies the collection of node entities forming a recursive hierarchy based on an annotation of their common entity type with term `RecursiveHierarchy` with a `Qualifier` attribute whose value MUST be provided in $Q$. The property paths referenced by `NodeProperty` and `ParentNavigationProperty` in the `RecursiveHierarchy` annotation must be evaluable for the nodes in the recursive hierarchy, otherwise the service MUST reject the request. The `NodeProperty` is denoted by $q$ in this section.

The third parameter MUST be a data aggregation path $p$ with single- or collection-valued segments whose last segment MUST be a primitive property. The node identifier(s) of an instance $u$ in the input set are the primitive values in $γ(u,p)$ reached via $p$ starting from $u$. Let $p=p_1/…/p_k/s$ with $k≥0$ be the concatenation where each sub-path $p_1,…,p_k$ consists of a collection-valued segment that is optionally followed by a type-cast segment and preceded by zero or more single-valued segments, and either $s$ consists of one or more single-valued segments or $k≥1$ and ${}/s$ is absent.

The recursive hierarchy to be processed can also be a subset $H'$ of $H$. For this case a non-empty sequence $S$ of transformations MAY be specified as an optional parameter whose position varies from transformation to transformation and is given below. In general, let $H'$ be the output set of the transformation sequence $S$ applied to $H$, or $H'=H$ if $S$ is not specified. The transformations in $S$ MUST be listed in the section on [Transformations Preserving the Input Set Structure](#TransformationsPreservingtheInputSetStructure) or in the section on [Hierarchical Transformations Preserving the Input Set Structure](#HierarchicalTransformationsPreservingtheInputSetStructure) or be service-defined bound functions whose output set is a subset of the input set.

## ##subsec Hierarchical Transformations Preserving the Input Set Structure

These transformations produce an output set that is a subset of their input set.

Using the mechanism explained in the preamble of the `$apply` section, services can define bound functions that serve as additional hierarchical transformations preserving the input set structure.

### ##subsubsec Transformations `ancestors` and `descendants`

In the simple case, the `ancestors` transformation takes an input set whose members belong to a recursive hierarchy $(H',Q)$. It determines a subset $U$ of the input set and then determines the set of ancestors of $U$ that were already contained in the input set. Its output set is the ancestors set, optionally including $U$.

In the more complex case, the members of the input set are instead related to nodes in a recursive hierarchy. Then the `ancestors` transformation determines a subset $U$ of the input set, whose members are related to certain nodes in the hierarchy, called start nodes. The ancestors of these start nodes are then determined, and the output set consists of instances of the input set that are related to the ancestors, or optionally to the start nodes.

The `descendants` transformation works analogously, but with descendants.

$H$, $Q$ and $p$ are the first three parameters defined [above](#CommonParametersforHierarchicalTransformations),

The fourth parameter is a transformation sequence $T$ composed of transformations listed in the section on [Transformations Preserving the Input Set Structure](#TransformationsPreservingtheInputSetStructure) or in the section on [Hierarchical Transformations Preserving the Input Set Structure](#HierarchicalTransformationsPreservingtheInputSetStructure) and of service-defined bound functions whose output set is a subset of the input set. $U$ is the output set of this sequence applied to the input set.

$S$ is an optional fifth parameter as defined [above](#CommonParametersforHierarchicalTransformations) that restricts $H$ to a subset $H'$. The following parameter $d$ is optional and takes an integer greater than or equal to 1 that specifies the maximum distance between start nodes and ancestors or descendants to be considered. An optional final `keep start` parameter drives the optional inclusion of the subset or start nodes.

The output set of the transformation ${\tt ancestors}(H,Q,p,T,S,d,{\tt keep\ start})$ or ${\tt descendants}(H,Q,p,T,S,d,{\tt keep\ start})$ is defined as the [union](#HierarchicalTransformations) of the output sets of transformations $F(u)$ applied to the input set for all $u$ in $U$. For a given instance $u$, the transformation $F(u)$ determines all instances of the input set whose node identifier is an ancestor or descendant of the node identifier of $u$:

If $p$ contains only single-valued segments, then, for `ancestors`,
$$\matrix{ 
F(u)={\tt filter}(\hbox{\tt Aggregation.isancestor}(\hfill\\ 
\quad {\tt HierarchyNodes}=H',\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\ 
\quad {\tt Node}=p,\;{\tt Descendant}=u[p],\;{\tt MaxDistance}=d,\;{\tt IncludeSelf}={\tt true}))\hfill 
}$$
or, for `descendants`,
$$\matrix{ 
F(u)={\tt filter}(\hbox{\tt Aggregation.isdescendant}(\hfill\\ 
\quad {\tt HierarchyNodes}=H',\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\ 
\quad {\tt Node}=p,\;{\tt Ancestor}=u[p],\;{\tt MaxDistance}=d,\;{\tt IncludeSelf}={\tt true})).\hfill 
}$$

Otherwise $p=p_1/…/p_k/s$ with $k≥1$, in this case the output set of the transformation $F(u)$ is defined as the [union](#HierarchicalTransformations) of the output sets of transformations $G(n)$ applied to the input set for all $n$ in $γ(u,p)$. The output set of $G(n)$ consists of the instances of the input set whose node identifier is an ancestor or descendant of the node identifier $n$:

For `ancestors`,
$$\matrix{ 
G(n)={\tt filter}(\hfill\\ 
\hskip1pc p_1/{\tt any}(y_1:\hfill\\ 
\hskip2pc y_1/p_2/{\tt any}(y_2:\hfill\\ 
\hskip3pc ⋱\hfill\\ 
\hskip4pc y_{k-1}/p_k/{\tt any}(y_k:\hfill\\ 
\hskip5pc \hbox{\tt Aggregation.isancestor}(\hfill\\ 
\hskip6pc {\tt HierarchyNodes}=H',\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\ 
\hskip6pc {\tt Node}=y_k/s,\;{\tt Descendant}=n,\;{\tt MaxDistance}=d,\;{\tt IncludeSelf}={\tt true}\hfill\\ 
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
\hskip6pc {\tt HierarchyNodes}=H',\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\ 
\hskip6pc {\tt Node}=y_k/s,\;{\tt Ancestor}=n,\;{\tt MaxDistance}=d,\;{\tt IncludeSelf}={\tt true}\hfill\\ 
\hskip5pc )\hfill\\ 
\hskip4pc )\hfill\\ 
\hskip3pc ⋰\hfill\\ 
\hskip2pc )\hfill\\ 
\hskip1pc )\hfill\\ 
)\hfill 
}$$
where $y_1,…,y_k$ denote `lambdaVariableExpr`s and ${}/s$ may be absent.

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
  "@odata.context": "$metadata#SalesOrganizations",
  "value": [
    { "ID": "EMEA",  "Name": "EMEA",
      "Superordinate": { "@odata.id": "SalesOrganizations('Sales')" } },
    { "ID": "US",    "Name": "US",
      "Superordinate": { "@odata.id": "SalesOrganizations('Sales')" } },
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
  "@odata.context": "$metadata#SalesOrganizations",
  "value": [
    { "ID": "US West", "Name": "US West",
      "Superordinate": { "@odata.id": "SalesOrganizations('US')" } },
    { "ID": "US",      "Name": "US",
      "Superordinate": { "@odata.id": "SalesOrganizations('Sales')" } },
    { "ID": "US East", "Name": "US East",
      "Superordinate": { "@odata.id": "SalesOrganizations('US')" } }
  ]
}
```
:::

### ##subsubsec Transformation `traverse`

The traverse transformation returns instances of the input set that are or are related to nodes of a given recursive hierarchy in a specified tree order.

$H$, $Q$ and $p$ are the first three parameters defined [above](#CommonParametersforHierarchicalTransformations).

The fourth parameter $h$ of the `traverse` transformation is either `preorder` or `postorder`. $S$ is an optional fifth parameter as defined [above](#CommonParametersforHierarchicalTransformations) that restricts $H$ to a subset $H'$. All following parameters are optional and form a list $o$ of expressions that could also be passed as a `$orderby` system query option. If $o$ is present, the transformation [stable-sorts](#SamenessandPrecedence) $H'$ by $o$.

The instances in the input set are related to one node (if $p$ is single-valued) or multiple nodes (if $p$ is collection-valued) in the recursive hierarchy. Given a node $x$, denote by $\hat F(x)$ the collection of all instances in the input set that are related to $x$; these collections can overlap. For each $w$ in $\hat F(x)$, the output set contains one instance that comprises the properties of $w$ and additional properties that identify the node $x$. These additional properties are independent of $w$ and are bundled into an instance called $σ(x)$. For example, if a sale $w$ is related to two sales organizations and hence contained in both $\hat F(x_1)$ and $\hat F(x_2)$, the output set will contain two instances $(w,σ(x_1))$ and $(w,σ(x_2))$ and $σ(x_i)$ contributes a navigation property `SalesOrganization`.

A transformation $F(x)$ is defined below such that $\hat F(x)$ is the output set of $F(x)$ applied to the input set of the `traverse` transformation.

Given a node $x$, the formulas below contain the transformation $\Pi_G(σ(x))$ in order to inject the properties of $σ(x)$ into the instances in $\hat F(x)$; this uses the function $\Pi_G$ that is defined in the [simple grouping](#SimpleGrouping) section. Further, $G$ is a list of [data aggregation paths](#DataAggregationPath) that shall be present in the output set, and $σ$ is a function that maps each hierarchy node $x$ to an instance of the [input type](#TypeStructureandContextURL) containing the paths from $G$. As a consequence of the following definitions, only single-valued properties and "final segments from $G$" are nested into $σ(x)$, therefore $\Pi_G(σ(x))$ is well-defined.

The definition of $σ(x)$ makes use of a function $a(ε,v,x)$, which returns a sparsely populated instance $u$ in which only the path $v$ has a value, namely $u[v]=x$.

Three cases are distinguished:
1. _Case where the recursive hierarchy is defined on the input set_  
   This case applies if the paths $p$ and $q$ are equal. Let $σ(x)=x$ and let $G$ be a list containing all structural and navigation properties of the entity type of $H$.  
   In this case $\Pi_G(σ(x))$ injects all properties of $x$ into the instances of the output set. (See [Example ##caseone].)
2. _Case where the recursive hierarchy is defined on the related entity type addressed by a navigation property path_  
   This case applies if $p'$ is a non-empty navigation property path and $p''$ an optional type-cast segment such that $p$ equals the concatenated path $p'/p''/q$. Let $σ(x)=a(ε,p'/p'',x)$ and let $G=(p')$.  
   In this case $\Pi_G(σ(x))$ injects the whole related entity $x$ into the instances of the output set. The navigation property path $p'$ is expanded by default. (See [Example ##rollupnode].)
3. _Case where the recursive hierarchy is related to the input set only through equality of node identifiers, not through navigation_  
   If neither case 1 nor case 2 applies, let $σ(x)=a(ε,p,x[q])$ and let $G=(p)$.  
   In this case $\Pi_G(σ(x))$ injects only the node identifier of $x$ into the instances of the output set.

Here paths are considered equal if their non-type-cast segments refer to the same model elements when evaluated relative to the input set (see [Example ##pathequals]).

The function $a(u,v,x)$ takes an instance, a path and another instance as arguments and is defined recursively as follows:
1. If $u$ equals the special symbol $ε$, set $u$ to a new instance of the [input type](#TypeStructureandContextURL) without properties and without entity-id.
2. If $v$ contains only one segment other than a type cast, let $v_1=v$, and let $x'=x$, then go to step 6.
3. Otherwise, let $v_1$ be the first property segment in $v$, possibly together with a preceding type-cast segment, let $v_2$ be any type-cast segment that immediately follows, and let $v_3$ be the remainder such that $v$ equals the concatenated path $v_1/v_2/v_3$ where ${}/v_2$ may be absent.
4. Let $u'$ be an instance of the type of $v_1/v_2$ without properties and without entity-id.
5. Let $x'=a(u',v_3,x)$.
6. If $v_1$ is single-valued, let $u[v_1]=x'$.
7. If $v_1$ is collection-valued, let $u[v_1]$ be a collection consisting of one item $x'$.
8. Return $u$.

(See [Example ##traversecoll].)

Let $r_1,…,r_n$ be a sequence of the root nodes of the recursive hierarchy $(H',Q)$ [preserving the order](#SamenessandPrecedence) of $H'$ stable-sorted by $o$. Then the transformation ${\tt traverse}(H,Q,p,h,S,o)$ is defined as equivalent to
$${\tt concat}(R(r_1),…,R(r_n)).$$
$R(x)$ is a transformation producing the specified tree order for a sub-hierarchy of $H'$ with root node $x$. Let $c_1,…,c_m$ with $m≥0$ be an [order-preserving sequence](#SamenessandPrecedence) of the children of $x$ in $(H',Q)$. The _recursive formula for $R(x)$_ is as follows:

If $h={\tt preorder}$, then
$$R(x)={\tt concat}(F(x)/\Pi_G(σ(x)),R(c_1),…,R(c_m)).$$

If $h={\tt postorder}$, then
$$R(x)={\tt concat}(R(c_1),…,R(c_m),F(x)/\Pi_G(σ(x))).$$
$F(x)$ is a transformation that determines for the specified node $x$ the instances of the input set having the same node identifier as $x$.

If $p$ contains only single-valued segments, then
$$F(x)={\tt filter}(p{\tt\ eq\ }x[q]).$$

Otherwise $p=p_1/…/p_k/s$ with $k≥1$ and
$$\matrix{ 
F(x)={\tt filter}(\hfill\\ 
\hskip1pc p_1/{\tt any}(y_1:\hfill\\ 
\hskip2pc y_1/p_2/{\tt any}(y_2:\hfill\\ 
\hskip3pc ⋱\hfill\\ 
\hskip4pc y_{k-1}/p_k/{\tt any}(y_k:\hfill\\ 
\hskip5pc y_k/s{\tt\ eq\ }x[q]\hfill\\ 
\hskip4pc )\hfill\\ 
\hskip3pc ⋰\hfill\\ 
\hskip2pc )\hfill\\ 
\hskip1pc )\hfill\\ 
)\hfill 
}$$
where $y_1,…,y_k$ denote `lambdaVariableExpr`s and ${}/s$ may be absent.

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
  "@odata.context": "$metadata#SalesOrganizations",
  "value": [
    { "ID": "US",      "Name": "US",
      "Superordinate": { "@odata.id": "SalesOrganizations('Sales')" } },
    { "ID": "US East", "Name": "US East",
      "Superordinate": { "@odata.id": "SalesOrganizations('US')" } }
  ]
}
```
:::

The algorithm given so far is valid for a single-valued `RecursiveHierarchy/ParentNavigationProperty`. The remainder of this section describes the case where it is collection-valued.

If the recursive algorithm reaches a node $x$ multiple times, via different parents or ancestors, then the output set contains multiple instances that include $σ(x)$. In order to distinguish these, information about the ancestors up to the root is injected into each $σ(x)$ by annotating $x$ differently before each $σ(x)$ is computed.

More precisely, a _path-to-the-root_ is a node $x$ that is annotated with the term `UpNode` from the `Aggregation` vocabulary [OData-VocAggr](#ODataVocAggr) where the annotation value is the parent node $y$ such that $R(x)$ appears on the right-hand side of the recursive formula for $R(y)$. The annotation value $y$ is again annotated with `Aggregation.UpNode` and so on until a root is reached. Every instance in the output set of `traverse` is related to one path-to-the-root.

The transformation $\Pi_G(σ(x))$ is extended with an additional step between steps 2 and 3 of the function $a_G(u,s,p)$ as defined in the [simple grouping section](#SimpleGrouping):
- If $s$ is annotated with `Aggregation.UpNode`, copy the annotation from $s$ to $u$.

Given a path-to-the-root $x$ and a child $c$ of $x$, let $ρ(c,x)$ be the path-to-the-root consisting of the node $c$ annotated with `Aggregation.UpNode` and value $x$.

The `Aggregation.UpNode` annotation of a root has value null. With $r_1,…,r_n$ as above, the transformation ${\tt traverse}(H,Q,p,h,S,o)$ is defined as equivalent to
$${\tt concat}(R(ρ(r_1,{\tt null})),…,R(ρ(r_n,{\tt null}))$$
where the function $R(x)$ takes as argument a path-to-the-root. With $F(x)$ and $c_1,…,c_m$ as above, if $h={\tt preorder}$, then
$$R(x)={\tt concat}(F(x)/\Pi_G(σ(x)),R(ρ(c_1,x)),…,R(ρ(c_m,x))).$$

If $h={\tt postorder}$, then
$$R(x)={\tt concat}(R(ρ(c_1,x)),…,R(ρ(c_m,x)),F(x)/\Pi_G(σ(x))).$$

If there is only one parent, the result is the same as in the single-parent case, except for the presence of the `Aggregation.UpNode` annotations.

## ##subsec Grouping with `rolluprecursive`

Recall that simple grouping partitions the input set and applies a transformation sequence to each partition. By contrast, grouping with `rolluprecursive`, informally speaking, transforms the input set into overlapping portions (like "US" and "US East"), one for each node $x$ of a [recursive hierarchy](#RecursiveHierarchy). The transformation $F(x)$, defined below, outputs the portion with node identifiers among the descendants of $x$ (including $x$ itself). A transformation sequence is then applied to each portion, and they are made distinguishable in the output set through injection of information about the node $x$, which is achieved through the transformation $\Pi_G(σ(x))$ defined in the [`traverse`](#Transformationtraverse) section.

As defined [above](#CommonParametersforHierarchicalTransformations), $H$, $Q$ and $p$ are the first three parameters of `rolluprecursive`, and $S$ is an optional fourth parameter that restricts $H$ to a subset $H'$.

Navigation properties specified in $p$ are expanded by default.

Let $T$ be a transformation sequence, $P_1$ stand in for zero or more property paths and $P_2$ for zero or more `rollup` or `rolluprecursive` operators or property paths. The transformation ${\tt groupby}((P_1,{\tt rolluprecursive}(H,Q,p,S),P_2),T)$ is computed by the following algorithm, which invokes itself recursively if the number of `rolluprecursive` operators in first argument of the `groupby` transformation, which is called $M$, is greater than one. Let $N$ be the recursion depth of the algorithm, starting with 1.

_The `rolluprecursive` algorithm:_

A property $χ_N$ appears in the algorithm, but is not present in the output set. It is explained later (see [Example ##rollupnode]). $Z_N$ is a transformation whose output set is its input set with property $χ_N$ removed.

If $r_1,…,r_n$ are the root nodes of the recursive hierarchy $(H',Q)$, the transformation ${\tt groupby}((P_1,{\tt rolluprecursive}(H,Q,p,S),P_2),T)$ is defined as equivalent to
$${\tt concat}(R(r_1),…,R(r_n))$$
with no order defined on the output set.

$R(x)$ is a transformation that processes the entire sub-hierarchy $F(x)$ rooted at $x$ (see (1) below) and then recurs for all children of $x$ (see (2) below). Its output set is a collection of aggregated instances for all rollup results. Let $c_1,…,c_m$ be the children of $x$ in $(H',Q)$:

If at least one of $P_1$ or $P_2$ is non-empty, then
$$\matrix{ 
R(x)={\tt concat}(\hfill\\ 
\quad F(x)/{\tt compute}(x{\tt\ as\ }χ_N)/{\tt groupby}((P_1,P_2),T/Z_N/\Pi_G(σ(x))),\hfill&\tt(1)\\ 
\quad R(c_1),…,R(c_m)\hfill&\tt(2)\\ 
).\hskip25pc 
}$$

The property $χ_N=x$ is present during the evaluation of $T$, but not afterwards. If $P_2$ contains a `rolluprecursive` operator, the evaluation of row (1) involves a recursive invocation (with $N$ increased by 1) of the `rolluprecursive` algorithm.

Otherwise if $P_1$ and $P_2$ are empty, then
$$\matrix{ 
R(x)={\tt concat}(\hfill\\ 
\quad F(x)/{\tt compute}(x{\tt\ as\ }χ_N)/T/Z_N/\Pi_G(σ(x)),\hfill&\tt(1)\\ 
\quad R(c_1),…,R(c_m)\hfill&\tt(2)\\ 
).\hskip25pc 
}$$

$F(x)$ is defined as follows: If $p$ contains only single-valued segments, then
$$\matrix{ 
F(x)={\tt filter}(\hbox{\tt Aggregation.isdescendant}(\hfill\\ 
\quad {\tt HierarchyNodes}=H',\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\ 
\quad {\tt Node}=p,\;{\tt Ancestor}=x[q],\;{\tt IncludeSelf}={\tt true})).\hfill 
}$$

Otherwise $p=p_1/…/p_k/s$ with $k≥1$ and
$$\matrix{ 
F(x)={\tt filter}(\hfill\\ 
\hskip1pc p_1/{\tt any}(y_1:\hfill\\ 
\hskip2pc y_1/p_2/{\tt any}(y_2:\hfill\\ 
\hskip3pc ⋱\hfill\\ 
\hskip4pc y_{k-1}/p_k/{\tt any}(y_k:\hfill\\ 
\hskip5pc \hbox{\tt Aggregation.isdescendant}(\hfill\\ 
\hskip6pc {\tt HierarchyNodes}=H',\;{\tt HierarchyQualifier}=\hbox{\tt{'$Q$'}},\hfill\\ 
\hskip6pc {\tt Node}=y_k/s,\;{\tt Ancestor}=x[q],\;{\tt IncludeSelf}={\tt true}\hfill\\ 
\hskip5pc )\hfill\\ 
\hskip4pc )\hfill\\ 
\hskip3pc ⋰\hfill\\ 
\hskip2pc )\hfill\\ 
\hskip1pc )\hfill\\ 
)\hfill 
}$$
where $y_1,…,y_k$ denote `lambdaVariableExpr`s and ${}/s$ may be absent. (See [example ##rollupcoll] for a case with $k=1$.)

Non-normatively speaking, the effect of the algorithm can be summarized as follows: If $M≥1$ and $\hat F_N(x)$ denotes the collection of all instances that are related to a node $x$ from the recursive hierarchy of the $N$-th `rolluprecursive` operator, then $T$ is applied to each of the intersections of $\hat F_1(χ_1),…,\hat F_M(χ_M)$, as $χ_N$ runs over all nodes of the $N$-th recursive hierarchy for $1≤N≤M$. Into the instances of the resulting output sets the $\Pi_G$ transformations inject information about the nodes $χ_1,…,χ_M$.

::: example
Example ##ex_caseone: Total number of sub-organizations for all organizations in the hierarchy defined in [Hierarchy Examples](#HierarchyExamples) with $p=q={\tt ID}$ (case 1 of the [definition](#Transformationtraverse) of $σ(x)$). In this case, the entire node is written back into the output set of $T$, aggregates must have an alias to avoid overwriting.
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
  "@odata.context":
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

The value of the property $χ_N$ in the algorithm is the node $x$ at recursion level $N$. In a common expression, $χ_N$ cannot be accessed by its name, but can only be read as the return value of the instance-bound function ${\tt rollupnode}({\tt Position}=N)$ defined in the `Aggregation` vocabulary [OData-VocAggr](#ODataVocAggr), with $1≤N≤M$, and only during the application of the transformation sequence $T$ in the row labeled (1) in the formula $R(x)$ above (the function is undefined otherwise). If $N=1$, the Position parameter can be omitted.

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
  "@odata.context": "$metadata#Sales(SalesOrganization,
                                     TotalAmountIncl,TotalAmountExcl)",
  "value": [
    { "SalesOrganization": { "ID": "US",      "Name": "US" },
      "TotalAmountIncl@odata.type": "Decimal","TotalAmountIncl": 19,
      "TotalAmountExcl": null },
    { "SalesOrganization": { "ID": "US West", "Name": "US West" },
      "TotalAmountIncl@odata.type": "Decimal", "TotalAmountIncl":  7,
      "TotalAmountExcl@odata.type": "Decimal" ,"TotalAmountExcl":  7 },
    { "SalesOrganization": { "ID": "US East", "Name": "US East" },
      "TotalAmountIncl@odata.type": "Decimal", "TotalAmountIncl": 12,
      "TotalAmountExcl@odata.type": "Decimal", "TotalAmountExcl": 12 }
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
  "@odata.context": "$metadata#Sales(SalesOrganization,TotalAmount)",
  "value": [
    { "SalesOrganization": { "ID": "Sales", "Name": "Corporate Sales" },
      "TotalAmount": null },
    { "SalesOrganization": { "ID": "EMEA",  "Name": "EMEA" },
      "TotalAmount": null },
    { "SalesOrganization": { "ID": "US",    "Name": "US" },
      "TotalAmount": null },
    ...
  ]
}
```
:::

The algorithm given so far is valid for a single-valued `RecursiveHierarchy/ParentNavigationProperty`. The remainder of this section describes the case where it is collection-valued. The function $ρ(c,x)$ used below constructs a path-to-the-root and was defined in the [`traverse`](#Transformationtraverse) section.

With $r_1,…,r_n$ as above, ${\tt groupby}((P_1,{\tt rolluprecursive}(H,Q,p,S),P_2),T)$ is defined as equivalent to
$${\tt concat}(R(ρ(r_1,{\tt null}),…,R(ρ(r_n,{\tt null}))),$$
where the function $R(x)$ takes as argument a path-to-the-root. With $F(x)$ and $c_1,…,c_m$ as above, if at least one of $P_1$ or $P_2$ is non-empty, then
$$\matrix{ 
R(x)={\tt concat}(\hfill\\ 
\quad F(x)/{\tt compute}(x{\tt\ as\ }χ_N)/{\tt groupby}((P_1,P_2),T/Z_N/\Pi_G(σ(x))),\hfill\\ 
\quad R(ρ(c_1,x)),…,R(ρ(c_m,x))\hfill\\ 
),\hfill 
}$$
otherwise
$$\matrix{ 
R(x)={\tt concat}(\hfill\\ 
\quad F(x)/{\tt compute}(x{\tt\ as\ }χ_N)/T/Z_N/\Pi_G(σ(x)),\hfill\\ 
\quad R(ρ(c_1,x)),…,R(ρ(c_m,x))\hfill\\ 
),\hfill 
}$$
where $χ_N$ is the path-to-the-root $x$.
