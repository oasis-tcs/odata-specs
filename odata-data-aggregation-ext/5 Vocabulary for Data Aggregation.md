
-------

# ##sec Vocabulary for Data Aggregation

The following terms are defined in the vocabulary for data aggregation [OData-VocAggr](#ODataVocAggr).

## ##subsec Aggregation Capabilities

The term `ApplySupported` can be applied to an entity set, an entity type, or a collection if the target expression of the annotation starts with an entity container (see [example ##containerrooted]). It describes the aggregation capabilities of the annotated target. If present, it implies that instances of the annotated target can contain dynamic properties as an effect of `$apply` even if they do not specify the `OpenType` attribute, see [OData-CSDL](#ODataCSDL). The term has a complex type with the following properties:
- The `Transformations` collection lists all supported set transformations. Allowed values are the names of the standard transformations introduced in sections 3 and 6, and namespace-qualified names identifying a service-defined bindable function. If `Transformations` is omitted the server supports all transformations defined by this specification.
- The `CustomAggregationMethods` collection lists supported custom aggregation methods. Allowed values are namespace-qualified names identifying service-specific aggregation methods. If omitted, no custom aggregation methods are supported.
- `Rollup` specifies whether the service supports no rollup, only a single rollup hierarchy, or multiple rollup hierarchies in a [`groupby`](#Transformationgroupby) transformation. If omitted, multiple rollup hierarchies are supported.
- A non-empty `GroupableProperties` indicates that only the listed properties of the annotated target can be used in `groupby`.
- A non-empty `AggregatableProperties` indicates that only the listed properties of the annotated target can be used in [`aggregate`](#Transformationaggregate), optionally restricted to the specified aggregation methods.

All properties of `ApplySupported` are optional, so it can be used as a tagging annotation to signal unlimited support of aggregation.

The term `ApplySupportedDefaults` can be applied to an entity container. It allows to specify default support for aggregation capabilities `Transformations`, `CustomAggregationMethods` and `Rollup` that propagate to all collection-valued resources in the container. Annotating a specific collection-valued resource with the term `ApplySupported` overrides the default support with the specified properties using `PATCH` semantics:
- Primitive or collection-valued properties specified in `ApplySupported` replace the corresponding properties specified in `ApplySupportedDefaults`.
- Complex-valued properties specified in `ApplySupported` override the corresponding properties specified in ApplySupportedDefaults using `PATCH` semantics recursively.
- Properties specified neither in `ApplySupported` nor in `ApplySupportedDefault` have their default value.

::: example
Example ##ex: an entity container with default support for everything defined in this specification
```xml
<EntityContainer Name="SalesData">
  <Annotation Term="Aggregation.ApplySupportedDefaults" />
  …
</EntityContainer>
```
:::

::: example
Example ##ex_containerrooted: Define aggregation support only for the products of a given category
```xml
<Annotations Target="SalesModel.SalesData/Categories/Products">
  <Annotation Term="Aggregation.ApplySupported">
    …
  </Annotation>
</Annotations>
```
:::

## ##subsec Custom Aggregates

The term `CustomAggregate` allows defining dynamic properties that can be used in [`aggregate`](#Transformationaggregate). No assumptions can be made on how the values of these custom aggregates are calculated, whether they are null, and which input values are used.

When applied to an entity set, an entity type, or a collection if the target expression of the annotation starts with an entity container, the annotation specifies custom aggregates that are available for its instances and for aggregated instances resulting from these instances. When applied to an entity container, the annotation specifies custom aggregates whose input set may span multiple entity sets within the container.

A custom aggregate is identified by the value of the `Qualifier` attribute when applying the term. The value of the `Qualifier` attribute is the name of the dynamic property. The name MUST NOT collide with the names of other custom aggregates of the same model element.

The value of the annotation is a string with the qualified name of a primitive type or type definition in scope that specifies the type returned by the custom aggregate.

If the custom aggregate is associated with an entity set, entity type, or collection, the value of the `Qualifier` attribute MAY be identical to the name of a declared property of the instances in this set or collection. In these cases, the value of the annotation MUST have the same value as the `Type` attribute of the declared property. This is typically done when the custom aggregate is used as a default aggregate for that property. In this case the name refers to the custom aggregate within an aggregate expression without a `with` clause, and to the property in all other cases.

If the custom aggregate is associated with an entity container, the value of the `Qualifier` attribute MUST NOT collide with the names of any entity container children.

::: example
Example ##ex: Sales forecasts are modeled as a custom aggregate of the Sale entity type because it belongs there. For the budget, there is no appropriate structured type, so it is modeled as a custom aggregate of the `SalesData` entity container.
```xml
<Annotations Target="SalesModel.SalesData/Sales">
  <Annotation Term="Aggregation.CustomAggregate" Qualifier="Forecast"
              String="Edm.Decimal" />
</Annotations>
<Annotations Target="SalesModel.SalesData">
  <Annotation Term="Aggregation.CustomAggregate" Qualifier="Budget"
              String="Edm.Decimal" />
</Annotations>
```
These custom aggregates can be used in the `aggregate` transformation:
```
GET /service/Sales?$apply=groupby((Time/Month),aggregate(Forecast))
```
and:
```
GET /service/$crossjoin(Time)?$apply=groupby((Time/Year),aggregate(Budget))
```
:::

## ##subsec Context-Defining Properties

Sometimes the value of a property or custom aggregate is only well-defined within the context given by values of other properties, e.g. a postal code together with its country, or a monetary amount together with its currency unit. These context-defining properties can be listed with the term `ContextDefiningProperties` whose type is a collection of property paths.

If present, the context-defining properties SHOULD be used as grouping properties when aggregating the annotated property or custom aggregate, or alternatively be restricted to a single value by a pre-filter operation. Services MAY respond with `400 Bad Request` if the context-defining properties are not sufficiently specified for calculating a meaningful aggregate value.

## ##subsec Annotation Example

::: example
Example ##ex: This simplified `Sales` entity set has a single aggregatable property `Amount` whose context is defined by the `Code` property of the related `Currency`, and a custom aggregate `Forecast` with the same context. The `Code` property of `Currencies` is groupable. All other properties are neither groupable nor aggregatable.
```xml
<EntityType Name="Currency">
  <Key>
    <PropertyRef Name="Code" />
  </Key>
  <Property Name="Code" Type="Edm.String" />
  <Property Name="Name" Type="Edm.String">
    <Annotation Term="Core.IsLanguageDependent" />
  </Property>
</EntityType>

<EntityType Name="Sale">
  <Key>
    <PropertyRef Name="ID" />
  </Key>
  <Property Name="ID" Type="Edm.String" Nullable="false" />
  <Property Name="Amount" Type="Edm.Decimal" Scale="variable">
    <Annotation Term="Aggregation.ContextDefiningProperties">
      <Collection>
        <PropertyPath>Currency/Code</PropertyPath>
      </Collection>
    </Annotation>
  </Property>
  <NavigationProperty Name="Currency" Type="SalesModel.Currency"
                      Nullable="false" />
</EntityType>

<EntityContainer Name="SalesData">
  <EntitySet Name="Sales" EntityType="SalesModel.Sale">
    <Annotation Term="Aggregation.ApplySupported">
      <Record>
        <PropertyValue Property="AggregatableProperties">
          <Collection>
            <Record>
              <PropertyValue Property="Property" PropertyPath="Amount" />
            </Record>
          </Collection>
        </PropertyValue>
        <PropertyValue Property="GroupableProperties">
          <Collection>
            <PropertyPath>Currency</PropertyPath>
          </Collection>
        </PropertyValue>
      </Record>
    </Annotation>

    <Annotation Term="Aggregation.CustomAggregate" Qualifier="Forecast"
                String="Edm.Decimal">
      <Annotation Term="Aggregation.ContextDefiningProperties">
        <Collection>
          <PropertyPath>Currency/Code</PropertyPath>
        </Collection>
      </Annotation>
    </Annotation>
  </EntitySet>

  <EntitySet Name="Currencies" EntityType="SalesModel.Currency">
    <Annotation Term="Aggregation.ApplySupported">
      <Record>
        <PropertyValue Property="GroupableProperties">
          <Collection>
            <PropertyPath>Code</PropertyPath>
          </Collection>
        </PropertyValue>
      </Record>
    </Annotation>
  </EntitySet>
</EntityContainer>
```
:::

## ##subsec Hierarchies

A hierarchy is an arrangement of entities whose values are represented as being "above", "below", or "at the same level as" one another. A hierarchy can be leveled or recursive.

### ##subsubsec Leveled Hierarchy

A _leveled hierarchy_ has a fixed number of levels each of which is represented by a [grouping property](#SimpleGrouping). The values of a lower-level property depend on the property value of the level above.

A leveled hierarchy can be defined for a collection of instances of an entity or complex type and is described with the term `LeveledHierarchy` that lists the properties used to form the hierarchy.

The order of the collection is significant: it lists paths from the entity or complex type where the term is applied to groupable properties representing the levels, starting with the root level (coarsest granularity) down to the lowest (finest-grained) level of the hierarchy.

The term `LeveledHierarchy` MUST be applied with a qualifier that can be used to reference the hierarchy in [grouping with `rollup`](#Groupingwithrollup).

### ##subsubsec Recursive Hierarchy

A recursive hierarchy is defined on a collection of entities by
- determining which entities are part of the hierarchy and giving every such entity a single primitive non-null value that uniquely identifies it within the hierarchy. These entities are called _nodes_, and the primitive value is called the _node identifier_, and
- associating with every node zero or more nodes from the same collection, called its _parent nodes_.

The recursive hierarchy is described in the model by an annotation of the entity type with the complex term `RecursiveHierarchy` with these properties:
- The `NodeProperty` MUST be a path with single-valued segments ending in a primitive property. This property holds the node identifier of an entity that is a node in the hierarchy.
- The `ParentNavigationProperty` MUST be a collection-valued or nullable single-valued navigation property path that addresses the entity type annotated with this term. It navigates from an entity that is a node in the hierarchy to its parent nodes.

The term `RecursiveHierarchy` can only be applied to entity types, and MUST be applied with a qualifier, which is used to reference the hierarchy in transformations operating on recursive hierarchies, in [grouping with `rolluprecursive`](#Groupingwithrolluprecursive), and in [hierarchy functions](#HierarchyFunctions). The same entity can serve as nodes in different recursive hierarchies, given different qualifiers.

A _root node_ is a node without parent nodes. A recursive hierarchy can have one or more root nodes. A node is a _child node_ of its parent nodes, a node without child nodes is a _leaf node_. Two nodes with a common parent node are _sibling nodes_ and so are two root nodes.

The _descendants with maximum distance $d≥1$_ of a node are its child nodes and, if $d>1$, the descendants of these child nodes with maximum distance $d-1$. The _descendants_ are the descendants with maximum distance $d=∞$. A node together with its descendants forms a _sub-hierarchy_ of the hierarchy.

The _ancestors with maximum distance $d≥1$_ of a node are its parent nodes and, if $d>1$, the ancestors of these parent nodes with maximum distance $d-1$. The _ancestors_ are the ancestors with maximum distance $d=∞$. The `ParentNavigationProperty` MUST be such that no node is an ancestor of itself, in other words: cycles are forbidden.

The term `UpPath` can be used in hierarchical result sets to associate with each instance one of its ancestors, one ancestor of that ancestor and so on. This instance annotation is introduced in [section ##Transformationtraverse].

#### ##subsubsubsec Hierarchy Functions

For testing the position of a given entity in a recursive hierarchy, the Aggregation vocabulary [OData-VocAggr](#ODataVocAggr) defines unbound functions. These have
- a parameter pair `HierarchyNodes`, `HierarchyQualifier` where `HierarchyNodes` is a collection and `HierarchyQualifier` is the qualifier of a `RecursiveHierarchy` annotation on its common entity type. The node identifiers in this collection define the recursive hierarchy.
- a parameter `Node` that contains the node identifier of the entity to be tested. Note that the test result depends only on this node identifier, not on any other property of the given entity
- additional parameters, depending on the type of test (see below)
- a Boolean return value for the outcome of the test.

The following functions are defined:
- `isnode` tests if the given entity is a node of the hierarchy.
- `isroot` tests if the given entity is a root node of the hierarchy.
- `isdescendant` tests if the given entity is a descendant with maximum distance `MaxDistance` of an ancestor node (whose node identifier is given in a parameter `Ancestor`), or equals the ancestor if `IncludeSelf` is true.
- `isancestor` tests if the given entity is an ancestor with maximum distance `MaxDistance` of a descendant node (whose node identifier is given in a parameter `Descendant`), or equals the descendant if `IncludeSelf` is true.
- `issibling` tests if the given entity and another entity (whose node identifier is given in a parameter `Other`) are sibling nodes.
- `isleaf` tests if the given entity is a leaf node.

Another function `rollupnode` is defined that can only be used in connection with [`rolluprecursive`](#Groupingwithrolluprecursive).

### ##subsubsec Hierarchy Examples

The hierarchy terms can be applied to the [Example Data Model](#ExampleDataModel).

::: example
⚠ Example ##ex: leveled hierarchies for products and time, and a recursive hierarchy for the sales organizations:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.0">
  <edmx:Reference Uri="https://docs.oasis-open.org/odata/odata-data-
    aggregation-ext/v4.0/$$$stage$$$/vocabularies/Org.OData.Aggregation.V1.xml">
    <edmx:Include Alias="Aggregation"
                  Namespace="Org.OData.Aggregation.V1" />
  </edmx:Reference>
  <edmx:DataServices>
    <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm"
            Alias="SalesModel" Namespace="org.example.odata.salesservice">
      <Annotations Target="SalesModel.Product">
        <Annotation Term="Aggregation.LeveledHierarchy"
                    Qualifier="ProductHierarchy">
          <Collection>
            <PropertyPath>Category/Name</PropertyPath>
            <PropertyPath>Name</PropertyPath>
          </Collection>
        </Annotation>
      </Annotations>

      <Annotations Target="SalesModel.Time">
        <Annotation Term="Aggregation.LeveledHierarchy"
                    Qualifier="TimeHierarchy">
          <Collection>
            <PropertyPath>Year</PropertyPath>
            <PropertyPath>Quarter</PropertyPath>
            <PropertyPath>Month</PropertyPath>
          </Collection>
        </Annotation>
      </Annotations>

      <Annotations Target="SalesModel.SalesOrganization">
        <Annotation Term="Aggregation.RecursiveHierarchy"
                    Qualifier="SalesOrgHierarchy">
          <Record>
            <PropertyValue Property="NodeProperty"
                           PropertyPath="ID" />
            <PropertyValue Property="ParentNavigationProperty"
                           PropertyPath="Superordinate" />
          </Record>
        </Annotation>
      </Annotations>
    </Schema>
  </edmx:DataServices>
</edmx:Edmx>
```
:::

The recursive hierarchy `SalesOrgHierarchy` can be used in functions with the `$filter` system query option.

::: example
Example ##ex: requesting all organizations below EMEA
```
GET /service/SalesOrganizations?$filter=Aggregation.isdescendant(
  HierarchyNodes=$root/SalesOrganizations,
  HierarchyQualifier='SalesOrgHierarchy',
  Node=ID,
  Ancestor='EMEA')
```
results in
```json
{
  "@context": "$metadata#SalesOrganizations",
  "value": [
    { "ID": "EMEA Central",      "Name": "EMEA Central" },
    { "ID": "Sales Netherlands", "Name": "Sales Netherlands" },
    { "ID": "Sales Germany",     "Name": "Sales Germany" },
    { "ID": "EMEA South",        "Name": "EMEA South" },
    …
    { "ID": "EMEA North",        "Name": "EMEA North" },
    …
  ]
}
```
:::

::: example
Example ##ex: requesting just those organizations directly below EMEA
```
GET /service/SalesOrganizations?$filter=Aggregation.isdescendant(
  HierarchyNodes=$root/SalesOrganizations,
  HierarchyQualifier='SalesOrgHierarchy',
  Node=ID,
  Ancestor='EMEA',
  MaxDistance=1)
```
results in
```json
{
  "@context": "$metadata#SalesOrganizations",
  "value": [
    { "ID": "EMEA Central", "Name": "EMEA Central" },
    { "ID": "EMEA South",   "Name": "EMEA South" },
    { "ID": "EMEA North",   "Name": "EMEA North" },
    …
  ]
}
```
:::

::: example
Example ##ex: just the lowest-level organizations
```
GET /service/SalesOrganizations?$filter=Aggregation.isleaf(
  HierarchyNodes=$root/SalesOrganizations,
  HierarchyQualifier='SalesOrgHierarchy',
  Node=ID)
```
results in
```json
{
  "@context": "$metadata#SalesOrganizations",
  "value": [
    { "ID": "Sales Office London",   "Name": "Sales Office London" },
    { "ID": "Sales Office New York", "Name": "Sales Office New York" },
    …
  ]
}
```
:::

::: example
Example ##ex: the lowest-level organizations including their superordinate's `ID`
```
GET /service/SalesOrganizations?$filter=Aggregation.isleaf(
  HierarchyNodes=$root/SalesOrganizations,
  HierarchyQualifier='SalesOrgHierarchy',
  Node=ID)
&$expand=Superordinate($select=ID)
```
results in
```json
{
  "@context": "$metadata#SalesOrganizations(*,Superordinate(ID))",
  "value": [
    { "ID": "Sales Office London",   "Name": "Sales Office London",
      "Superordinate": { "ID": "EMEA United Kingdom" } },
    { "ID": "Sales Office New York", "Name": "Sales Office New York",
      "Superordinate": { "ID": "US East" } },
    …
  ]
}
```
:::

::: example
Example ##ex: the sales `ID`s involving sales organizations from EMEA
```

GET /service/Sales?$select=ID&$filter=Aggregation.isdescendant(
  HierarchyNodes=$root/SalesOrganizations,
  HierarchyQualifier='SalesOrgHierarchy',
  Node=SalesOrganization/ID,
  Ancestor='EMEA')
```
results in
```json
{
  "@context": "$metadata#Sales(ID)",
  "value": [
    { "ID": 6 },
    { "ID": 7 },
    { "ID": 8 }
  ]
}
```
:::

Further examples for recursive hierarchies using transformations operating on the hierarchy structure are provided in [section ##AggregationinRecursiveHierarchies].

## ##subsec Functions on Aggregated Entities

Service-defined bound functions that serve as set transformations MAY be annotated with the term `AvailableOnAggregates` to indicate that they are applicable to aggregated entities under specific conditions:
- The `RequiredProperties` collection lists all properties that must be available in the aggregated entities; otherwise, the annotated function will be inapplicable.

::: example
Example ##ex: assume the product is an implicit input for a function bound to a collection of `Sales`, then aggregating away the product makes this function inapplicable.
:::
