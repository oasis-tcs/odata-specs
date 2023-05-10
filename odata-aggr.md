# 1<a name="HierarchicalTransformations"></a> Hierarchical Transformations

## 1.1<a name="HierarchicalTransformationsPreservingtheInputSetStructure"></a> Hierarchical Transformations Preserving the Input Set Structure

### 1.1.1<a name="Transformationtraverse"></a> Transformation `traverse`

The traverse transformation returns instances of the input set that are or are related to nodes of a given recursive hierarchy in a specified tree order.

$H$, $Q$ and $p$ are the first three parameters defined above.
The fourth parameter $h$ of the `traverse` transformation is either `preorder` or `postorder`. $S$ is an optional fifth parameter that restricts $H$ to a subset $H'$. All following parameters are optional and form a list $o$ of expressions that could also be passed as a `$orderby` system query option. If $o$ is present, the transformation stable-sorts $H'$ by $o$.

The instances in the input set are related to one node (if $p$ is single-valued) or multiple nodes (if $p$ is collection-valued) in the recursive hierarchy. Given a node $x$, denote by $\hat F(x)$ the collection of all instances in the input set that are related to $x$; these collections can overlap. For each $w$ in $\hat F(x)$, the output set contains one instance that comprises the properties of $w$ and additional properties that identify the node $x$. These additional properties are independent of $w$ and are bundled into an instance called $\sigma(x)$. For example, if a sale $w$ is related to two sales organizations and hence contained in both $\hat F(x_1)$ and $\hat F(x_2)$, the output set will contain two instances $(w,\sigma(x_1))$ and $(w,\sigma(x_2))$ and $\sigma(x_i)$ contributes a navigation property `SalesOrganization`.

A transformation $F(x)$ is defined below such that $\hat F(x)$ is the output set of $F(x)$ applied to the input set of the traverse transformation.

Given a node $x$, the formulas below contain the transformation $\Pi_G(\sigma(x))$ in order to inject the properties of $\sigma(x)$ into the instances in $\hat F(x)$; this uses the function $\Pi_G$ that is defined in the simple grouping section. Further, $G$ is a list of data aggregation paths that shall be present in the output set, and $\sigma$ is a function that maps each hierarchy node $x$ to an instance of the input type containing the paths from $G$. As a consequence of the following definitions, only single-valued properties or collections of cardinality 1 are nested into $\sigma(x)$, apart from "final segments from $G$", therefore $\Pi_G(\sigma(x))$ is well-defined.

The definition of $\sigma(x)$ makes use of a function $a(\varepsilon,v,x)$, which returns a sparsely populated instance $u$ in which only the path $v$ has a value, namely $u[v]=x$.

Three cases are distinguished:
1. _Case where the recursive hierarchy is defined on the input set_  
   This case applies if the paths $p$ and $q$ are equal. Let $\sigma(x)=x$ and let $G$ be a list containing all structural and navigation properties of the entity type of $H$.  
   In this case $\Pi_G(\sigma(x))$ injects all properties of $x$ into the instances of the output set.
2. _Case where the recursive hierarchy is defined on the related entity type addressed by a navigation property path_  
   This case applies if $p'$ is a non-empty navigation property path and $p''$ an optional type-cast segment such that $p$ equals the concatenated path $p'/p''/q$. Let $\sigma(x)=a(\varepsilon,p'/p'',x)$ and let $G=(p')$.  
   In this case $\Pi_G(\sigma(x))$ injects the whole related entity $x$ into the instances of the output set. The navigation property path $p'$ is expanded by default.
3. _Case where the recursive hierarchy is related to the input set only through equality of node identifiers, not through navigation_  
   If neither case 1 nor case 2 applies, let $\sigma(x)=a(\varepsilon,p,x[q])$ and let $G=(p)$.  
   In this case $\Pi_G(\sigma(x))$ injects only the node identifier of $x$ into the instances of the output set.

Here paths are considered equal if their non-type-cast segments refer to the same model elements when evaluated relative to the input set (see Example 64).

The function $a(u,v,x)$ takes an instance, a path and another instance as arguments and is defined recursively as follows:
1. If $u$ equals the special symbol $\varepsilon$, set $u$ to a new instance of the input type without properties and without entity-id.
2. If $v$ contains only one segment other than a type cast, let $v_1=v$, and let $x'=x$, then go to step 6.
3. Otherwise, let $v_1$ be the first property segment in $v$, possibly together with a preceding type-cast segment, let $v_2$ be any type-cast segment that immediately follows, and let $v_3$ be the remainder such that $v$ equals the concatenated path $v_1/v_2/v_3$ where ${}/v_2$ may be absent.
4. Let $u'$ be an instance of the type of $v_1/v_2$ without properties and without entity-id.
5. Let $x'=a(u',v_3,x)$.
6. If $v_1$ is single-valued, let $u[v_1]=x'$.
7. If $v_1$ is collection-valued, let $u[v_1]=a$ collection consisting of one item $x'$.
8. Return $u$.

(See [Example UNRESOLVED traversecoll].)

Let $r_1,\ldots,r_n$ be a sequence of the root nodes of the recursive hierarchy $(H',Q)$ preserving the order of $H'$ stable-sorted by $o$. Then the transformation $\hbox{\tt{traverse}}(H,Q,p,h,S,o)$ is defined as equivalent to
$$\hbox{\tt{concat}}(R(r_1),\ldots,R(r_n)).$$
$R(x)$ is a transformation producing the specified tree order for a sub-hierarchy of $H'$ with root node $x$. Let $c_1,\ldots,c_m$ with $m\ge 0$ be an order-preserving sequence of the children of $x$ in $(H',Q)$.

If $h=\hbox{\tt{preorder}}$, then
$$R(x)=\hbox{\tt{concat}}(F(x)/\Pi_G(\sigma(x)),R(c_1),\ldots,R(c_m)).$$

If $h=\hbox{\tt{postorder}}$, then
$$R(x)=\hbox{\tt{concat}}(R(c_1),\ldots,R(c_m),F(x)/\Pi_G(\sigma(x))).$$
$F(x)$ is a transformation that determines for the specified node $x$ the instances of the input set having the same node identifier as $x$.

If $p$ contains only single-valued segments, then
$$F(x)=\hbox{\tt{filter}}(p\hbox{\tt{ eq }}x[q]).$$

Otherwise $p=p_1/\ldots/p_k/s$ with $k\ge 1$ and
$$\matrix{ F(x)=\hbox{\tt{filter}}(\hfill\\ \hskip1pc p_1/\hbox{\tt{any}}(y_1:\hfill\\ \hskip2pc y_1/p_2/\hbox{\tt{any}}(y_2:\hfill\\ \hskip3pc ⋱\hfill\\ \hskip4pc y_{k-1}/p_k/\hbox{\tt{any}}(y_k:\hfill\\ \hskip5pc y_k/s\hbox{\tt{ eq }}x[q]\hfill\\ \hskip4pc )\hfill\\ \hskip3pc ⋰\hfill\\ \hskip2pc )\hfill\\ \hskip1pc )\hfill\\ )\hfill }$$
where $y_1,\ldots,y_k$ denote `lambdaVariableExpr`s and ${}/s$ may be absent.

::: example
Example 1: Based on the `SalesOrgHierarchy` defined in Hierarchy Examples
```
GET /service/SalesOrganizations?$apply=
    descendants($root/SalesOrganizations,SalesOrgHierarchy,ID,
                Name eq 'US',keep start)
    /ancestors($root/SalesOrganizations,SalesOrgHierarchy,ID,
                contains(Name,'East'),keep start)
    /traverse($root/SalesOrganizations,SalesOrgHierarchy,ID,preorder)
```
results in
```
{
  "@odata.context": "$metadata#SalesOrganizations",
  "value": [
    
    { "ID": "US",
      "Superordinate@navigationLink":
                      "SalesOrganization('US')/Superordinate",
      "Name": "US", ... },
    { "ID": "US East",
      "Superordinate@navigationLink":
                      "SalesOrganization('US East')/Superordinate",
      "Name": "US East", ... }
  ]
}
```
:::

The algorithm given so far is valid for a single-valued `RecursiveHierarchy/UpNodeNavigationProperty`. The remainder of this section describes the case where it is collection-valued.

Multiple parents of a node $x$ lead to multiple output set instances that include $\sigma(x)$. In order to distinguish these, information about the ancestors up to the root is injected into each $\sigma(x)$ by annotating $x$ differently before each $\sigma(x)$ is computed.

A path-to-the-root is a node $x$ that is annotated with the term `UpNode` from the [Aggregation vocabulary](#ODataVocAggr) and with one parent node as value, which is again annotated with `Aggregation.UpNode` and so on until a root is reached. Every instance in the output set of traverse is related to one path-to-the-root.

The transformation $\Pi_G(\sigma(x))$ is extended with an additional step between steps 2 and 3 of the function $a_G(x,s,p)$:
- If $s$ is annotated with `Aggregation.UpNode`, copy the annotation from $s$ to $x$.

Given a path-to-the-root $x$ and a child $c$ of $x$, let $\rho(c,x)$ be the path-to-the-root consisting of the node $c$ annotated with `Aggregation.UpNode` and value $x$.

Paths-to-the-root need not have an `Aggregation.UpNode` annotation if they are themselves roots, such as the roots $r_1,\ldots,r_n$ defined above. The transformation $\hbox{\tt{traverse}}(H,Q,p,h,S,o)$ is defined as equivalent to
$$\hbox{\tt{concat}}(R(\rho(r_1,\hbox{\tt{null}})), \ldots, R(\rho(r_n,\hbox{\tt{null}}))$$
where the function $R(x)$ takes as argument a path-to-the-root. With $F(x)$ and $c_1,\ldots,c_m$ as above, if $h=\hbox{\tt{preorder}}$, then
$$\matrix{ R(x)=\hbox{\tt{concat}}(\hfill\\ \quad F(x)/\Pi_G (\sigma(x)),\hfill\\ \quad R(\rho(c_1,x)),\ldots,R(\rho(c_m,x))\hfill\\ ).\hfill }$$

If $h=\hbox{\tt{postorder}}$, then
$$\matrix{R(x)=\hbox{\tt{concat}}(\hfill\\ \quad R(\rho(c_1,x)),\ldots,R(\rho(c_m,x)),\hfill\\ \quad F(x)/\Pi_G (\sigma(x))\hfill\\ ).\hfill }$$

## 1.2<a name="Groupingwithrolluprecursive"></a> Grouping with rolluprecursive

Recall that simple grouping partitions the input set and applies a transformation sequence to each partition. By contrast, grouping with `rolluprecursive`, informally speaking, transforms the input set into overlapping portions (like "US" and "US East"), one for each node $x$ of a recursive hierarchy. The transformation $F(x)$, defined below, outputs the portion with node identifiers among the descendants of $x$ (including $x$ itself). A transformation sequence is then applied to each portion, and they are made distinguishable in the output set through injection of information about the node $x$, which is achieved through the transformation $\Pi_G(\sigma(x))$ defined in the [`traverse`](#Transformationtraverse) section.

$H$, $Q$ and $p$ are the first three parameters of `rolluprecursive`, defined [above](#CommonParametersforHierarchicalTransformations), $S$ is an optional fourth parameter that restricts $H$ to a subset $H'$.

Navigation properties specified in $p$ are expanded by default.

Let $T$ be a transformation sequence, $P_1$ stand in for zero or more property paths and $P_2$ for zero or more `rollup` or `rolluprecursive` operators or property paths. The transformation $\hbox{\tt{groupby}}((P_1,\hbox{\tt{rolluprecursive}}(H,Q,p,S),P_2),T)$ is computed by the following algorithm, which invokes itself recursively if the number of `rolluprecursive` operators in first argument of the `groupby` transformation, which is called $M$, is greater than one. Let $N$ be the recursion depth of the algorithm, starting with 1.

_The `rolluprecursive` algorithm:_

A property $\chi_N$ appears in the algorithm, but is not present in the output set. It is explained later (see Example 63). $Z_N$ is a transformation whose output set is its input set with property $\chi_N$ removed.

If $r_1,\ldots,r_n$ are the root nodes of the recursive hierarchy $(H',Q)$, the transformation $\hbox{\tt{groupby}}((P_1,\hbox{\tt{rolluprecursive}}(H,Q,p,S),P_2),T)$ is defined as equivalent to
$$\hbox{\tt{concat}}(R(r_1),\ldots,R(r_n))$$
with no order defined on the output set.

$R(x)$ is a transformation that processes the entire sub-hierarchy $F(x)$ rooted at $x$ (see (1) below) and then recurs for all children of $x$ (see (2) below). Its output set is a collection of aggregated instances for all rollup results. Let $c_1,\ldots,c_m$ be the children of $x$ in $(H',Q)$:

If at least one of $P_1$ or $P_2$ is non-empty, then
$$\matrix{ R(x)=\hbox{\tt{concat}}(\hfill\\ \quad F(x)/\hbox{\tt{compute}}(x\hbox{\tt{ as }}\chi_N)/\hbox{\tt{groupby}}((P_1,P_2),T/Z_N/\Pi_G(\sigma(x))),\hfill&\qquad(1)\\ \quad R(c_1),\ldots,R(c_m)\hfill&\qquad(2)\\ ).\hfill }$$

The property $\chi_N=x$ is present during the evaluation of $T$, but not afterwards. If $P_2$ contains a `rolluprecursive` operator, the evaluation of row (1) involves a recursive invocation (with $N$ increased by 1) of the `rolluprecursive` algorithm.

Otherwise if P_1 and P_2 are empty, then
$$\matrix{ R(x)=\hbox{\tt{concat}}(\hfill\\ \quad F(x)/\hbox{\tt{compute}}(x\hbox{\tt{ as }}\chi_N)/T/Z_N/\Pi_G(\sigma(x)),\hfill&\qquad(1)\\ \quad R(c_1),\ldots,R(c_m)\hfill&\qquad(2)\\ ).\hfill }$$

$F(x)$ is defined as follows: If $p$ contains only single-valued segments, then
$$\matrix{ F(x)=\hbox{\tt{filter}}(\hbox{\tt{Aggregation.isdescendant}}(\hfill\\ \quad \hbox{\tt{HierarchyNodes}}=H',\;\hbox{\tt{HierarchyQualifier}}=\hbox{\tt{'$Q$'}},\hfill\\ \quad\hbox{\tt{Node}}=p,\;\hbox{\tt{Ancestor}}=x[q],\;\hbox{\tt{IncludeSelf}}=\hbox{\tt{true}})).\hfill }$$

Otherwise $p=p_1/\ldots/p_k/s$ with $k\ge 1$ and
$$\matrix{ F(x)=\hbox{\tt{filter}}(\hfill\\ \hskip1pc p_1/\hbox{\tt{any}}(y_1:\hfill\\ \hskip2pc y_1/p_2/\hbox{\tt{any}}(y_2:\hfill\\ \hskip3pc ⋱\hfill\\ \hskip4pc y_{k-1}/p_k/\hbox{\tt{any}}(y_k:\hfill\\ \hskip5pc \hbox{\tt{Aggregation.isdescendant}}(\hfill\\ \hskip6pc \hbox{\tt{HierarchyNodes}}=H',\;\hbox{\tt{HierarchyQualifier}}=\hbox{\tt{'$Q$'}},\hfill\\ \hskip6pc \hbox{\tt{Node}}=y_k/s,\;\hbox{\tt{Ancestor}}=x[q],\;\hbox{\tt{IncludeSelf}}=\hbox{\tt{true}}\hfill\\ \hskip5pc )\hfill\\ \hskip4pc )\hfill\\ \hskip3pc ⋰\hfill\\ \hskip2pc )\hfill\\ \hskip1pc )\hfill\\ )\hfill }$$
where $y_1,\ldots,y_k$ denote `lambdaVariableExpr`s and ${}/s$ may be absent. (See Example 111 for a case with $k=1$.)

Non-normatively speaking, the effect of the algorithm can be summarized as follows: If $M\ge 1$ and $\hat F _N(x)$ denotes the collection of all instances that are related to a node $x$ from the recursive hierarchy of the $N$-th `rolluprecursive` operator, then $T$ is applied to each of the intersections of $\hat F_1(\chi_1),\ldots,\hat F_M(\chi_M)$, as $\chi_N$ runs over all nodes of the $N$-th recursive hierarchy for $1\le N\le M$. Into the instances of the resulting output sets the $\Pi_G$ transformations inject information about the nodes $\chi_1,\ldots,\chi_M$.

::: example
Example 2: Total number of sub-organizations for all organizations in the hierarchy defined in Hierarchy Examples with $p=q=\hbox{\tt{ID}}$ (case 1 of the definition of $\sigma(x)$). In this case, the entire node is written back into the output set of $T$, aggregates must have an alias to avoid overwriting.
```
GET /service/SalesOrganizations?$apply=
    groupby((rolluprecursive(
                 $root/SalesOrganizations,SalesOrgHierarchy,ID)),
             aggregate($count as OrgCnt)/compute(OrgCnt sub 1 as SubOrgCnt))
  &$select=ID,Name,SubOrgCnt
  &$expand=Superordinate($select=ID)
```
results in
```
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

The value of the property $\chi_N$ in the algorithm is the node $x$ at recursion level $N$. In a common expression, $\chi_N$ cannot be accessed by its name, but can only be read as the return value of the instance-bound function $\hbox{\tt{rollupnode}}(\hbox{\tt{Position}}=N)$ defined in the Aggregation vocabulary, with $1\le N\le M$, and only during the application of the transformation sequence $T$ in the row labeled (1) in the formula $R(x)$ above (the function is undefined otherwise). If $N=1$, the Position parameter can be omitted.

::: example
⚠ Example 3: Total sales amounts per organization, both including and excluding sub-organizations, in the US sub-hierarchy defined in Hierarchy Examples with $p=p'/q=\hbox{\tt{SalesOrganization}}/\hbox{\tt{ID}}$ and $p'=\hbox{\tt{SalesOrganization}}$ (case 2 of the definition of $\sigma(x)$). The Boolean expression $p'\hbox{\tt{ eq Aggregation.rollupnode}}()$ is true for sales in the organization for which the aggregate is computed, but not for sales in sub-organizations.
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
```
{
  "@odata.context": "$metadata#Sales(SalesOrganization(ID),
                                     TotalAmountIncl,TotalAmountExcl)",
  "value": [
    { "SalesOrganization": { "ID": "US" },
      "TotalAmountIncl": 19, "TotalAmountExcl": null, ... },
    { "SalesOrganization": { "ID": "US West" },
      "TotalAmountIncl":  7, "TotalAmountExcl":  7, ... },
    { "SalesOrganization": { "ID": "US East" },
      "TotalAmountIncl": 12, "TotalAmountExcl": 12, ... }
  ]
}
```
:::

::: example
⚠ Example 4: Although $p=\hbox{\tt{ID}}$ and $q=\hbox{\tt{ID}}$, they are not equal in the sense of case 1, because they are evaluated relative to different entity sets. Hence, this is an example of case 3 of the definition of $\sigma(x)$, where no $$\hbox{\tt{Sales}}/\hbox{\tt{ID}}$ matches a $\hbox{\tt{SalesOrganizations}}\hbox{\tt{/ID}}$, that is, all $F(x)$ have empty output sets.
```
GET /service/Sales?$apply=
    groupby((rolluprecursive(
                 $root/SalesOrganizations,SalesOrgHierarchy,ID))),
             aggregate(Amount with sum as TotalAmount))
```
results in
```
{
  "@odata.context": "$metadata#Sales(SalesOrganization(ID),TotalAmount)",
  "value": [
    { "SalesOrganization": { "ID": "Sales" }, "TotalAmount": null },
    { "SalesOrganization": { "ID": "EMEA"  }, "TotalAmount": null },
    { "SalesOrganization": { "ID": "US"    }, "TotalAmount": null },
    ...
  ]
}
```
:::

The algorithm given so far is valid for a single-valued $\hbox{\tt{RecursiveHierarchy}}/\hbox{\tt{ParentNavigationProperty}}$. The remainder of this section describes the case where it is collection-valued. The function $\rho(c,x)$ used below constructs a path-to-the-root and was defined in the [`traverse`](#Transformationtraverse) section.

With $r_1,\ldots,r_n$ as above, $\hbox{\tt{groupby}}((P_1,\hbox{\tt{rolluprecursive}}(H,Q,p,S),P_2),T)$ is defined as equivalent to
$$\hbox{\tt{concat}}(R(\rho(r_1,\hbox{\tt{null}}),\ldots, R(\rho(r_n,\hbox{\tt{null}}))).$$

With $F(x)$ and $c_1,\ldots,c_m$ as above, if at least one of $P_1$ or $P_2$ is non-empty, then
$$\matrix{ R(x)=\hbox{\tt{concat}}(\hfill\\ \quad F(x)/\hbox{\tt{compute}}(x\hbox{\tt{ as }}\chi_N)/\hbox{\tt{groupby}}((P_1,P_2),T/Z_N/\Pi_G(\sigma(x))),\hfill\\ \quad R(\rho(c_1,r)),\ldots,R(\rho(c_m,r))\hfill\\ ),\hfill }$$
otherwise
$$\matrix{ R(x)=\hbox{\tt{concat}}(\hfill\\ \quad F(x)/\hbox{\tt{compute}}(x\hbox{\tt{ as }}\chi_N)/T/Z_N/\Pi_G(\sigma(x)),\hfill\\ \quad R(\rho(c_1,r)),\ldots,R(\rho(c_m,r))\hfill\\ ),\hfill }$$
where $\chi_N$ is the path-to-the-root $x$.
