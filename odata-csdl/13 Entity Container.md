
-------

# ##sec Entity Container

Each metadata document used to describe an OData service MUST define
exactly one entity container.

The entity container's name is a [simple identifier](#SimpleIdentifier)
that MUST be unique within its schema.

Entity containers define the entity sets, singletons, function and
action imports exposed by the service.

Entity set, singleton, action import, and function import names MUST be
unique within an entity container.

An [*entity set*](#EntitySet) allows access to entity type instances.
Simple entity models frequently have one entity set per entity type.

::: {.varjson .example}
Example ##ex: one entity set per entity type
```json
"Products": {
  "$Collection": true,
  "$Type": "self.Product"
},
"Categories": {
  "$Collection": true,
  "$Type": "self.Category"
}
```
:::

::: {.varxml .example}
Example ##ex: one entity set per entity type
```xml
<EntitySet Name="Products"   EntityType="self.Product" />
<EntitySet Name="Categories" EntityType="self.Category" />
```
:::

Other entity models may expose multiple entity sets per type.

::: {.varjson .example}
Example ##ex: three entity sets referring to the two entity types
```json
"StandardCustomers": {
  "$Collection": true,
  "$Type": "self.Customer",
  "$NavigationPropertyBinding": {
    "Orders": "Orders"
  }
},
"PreferredCustomers": {
  "$Collection": true,
  "$Type": "self.Customer",
  "$NavigationPropertyBinding": {
    "Orders": "Orders"
  }
},
"Orders": {
  "$Collection": true,
  "$Type": "self.Order"
}
```
:::

::: {.varxml .example}
Example ##ex: three entity sets referring to the two entity types
```xml
<EntitySet Name="StandardCustomers" EntityType="self.Customer">
  <NavigationPropertyBinding Path="Orders" Target="Orders" />
</EntitySet>
<EntitySet Name="PreferredCustomers" EntityType="self.Customer">
  <NavigationPropertyBinding Path="Orders" Target="Orders" />
</EntitySet>
<EntitySet Name="Orders" EntityType="self.Order" />
```
:::

There are separate entity sets for standard customers and preferred
customers, but only one entity set for orders. The entity sets for
standard customers and preferred customers both have [navigation
property bindings](#NavigationPropertyBinding) to the orders entity set,
but the orders entity set does not have a navigation property binding
for the Customer navigation property, since it could lead to either set
of customers.

An entity set can expose instances of the specified entity type as well
as any entity type inherited from the specified entity type.

A [*singleton*](#Singleton) allows addressing a single entity directly
from the entity container without having to know its key, and without
requiring an entity set.

A [*function import*](#FunctionImport) or an [*action
import*](#ActionImport) is used to expose a function or action defined
in an entity model as a top level resource.

::: {.varjson .rep}
### ##isec Entity Container Object

An entity container is represented as a member of the schema object
whose name is the unqualified name of the entity container and whose
value is an object.

The entity container object MUST contain the member `$Kind` with a
string value of `EntityContainer`.

The entity container object MAY contain the member
[`$Extends`](#ExtendinganEntityContainer), members representing [entity
sets](#EntitySet), [singletons](#Singleton), [action
imports](#ActionImport), and [function imports](#FunctionImport), as
well as [annotations](#Annotation).
:::

::: funnelweb
The children of an `EntityContainer` have no `$Kind` property, instead their
kind is determined according to which other properties they have.
:::

@$@<Javascript CSDL metamodel@>@{
class EntityContainer extends NamedModelElement {
  fromJSON(json) {
    @<Deserialize members of EntityContainer@>
    super.fromJSON(json, function (json) {
      if (json.$Type) return "EntitySetOrSingleton";
      if (json.$Function) return "FunctionImport";
      if (json.$Action) return "ActionImport";
    });
  }
}
@}

@$@<Exports@>@{
EntityContainer,
@}

::: {.varjson .example}
Example ##ex: An entity container aggregates entity sets, singletons,
action imports, and function imports.
```json
"DemoService": {
  "$Kind": "EntityContainer",
  "Products": {
    "$Collection": true,
    "$Type": "self.Product",
    "$NavigationPropertyBinding": {
      "Category": "Categories",
      "Supplier": "Suppliers"
    },
    "@UI.DisplayName": "Product Catalog"
  },
  "Categories": {
    "$Collection": true,
    "$Type": "self.Category",
    "$NavigationPropertyBinding": {
      "Products": "Products"
    }
  },
  "Suppliers": {
    "$Collection": true,
    "$Type": "self.Supplier",
    "$NavigationPropertyBinding": {
      "Products": "Products"
    },
    "@UI.DisplayName": "Supplier Directory"
  },
  "MainSupplier": {
    "$Type": "self.Supplier"
  },
  "LeaveRequestApproval": {
    "$Action": "self.Approval"
  },
  "ProductsByRating": {
    "$EntitySet": "Products",
    "$Function": "self.ProductsByRating"
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:EntityContainer`

The `edm:EntityContainer` MAY contain
[`edm:EntitySet`](#EntitySet), [`edm:Singleton`](#Singleton),
[`edm:ActionImport`](#ActionImport), and
[`edm:FunctionImport`](#FunctionImport) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the entity container's name.
:::

::: {.varxml .example}
Example ##ex: An entity container aggregates entity sets, singletons,
action imports, and function imports.
```xml
<EntityContainer Name="DemoService">
  <EntitySet Name="Products" EntityType="self.Product">
    <NavigationPropertyBinding Path="Category" Target="Categories" />
    <NavigationPropertyBinding Path="Supplier" Target="Suppliers" />
  </EntitySet>
  <EntitySet Name="Categories" EntityType="self.Category">
    <NavigationPropertyBinding Path="Products" Target="Products" />
  </EntitySet>
  <EntitySet Name="Suppliers" EntityType="self.Supplier">
    <NavigationPropertyBinding Path="Products" Target="Products" />
  </EntitySet>
  <Singleton Name="MainSupplier" Type="self.Supplier" />
  <ActionImport Name="LeaveRequestApproval" Action="self.Approval" />
  <FunctionImport Name="ProductsByRating" Function="self.ProductsByRating"
                  EntitySet="Products" />
</EntityContainer>
```
:::

## ##subsec Extending an Entity Container

An entity container MAY specify that it extends another entity container
in scope. All children of the "base" entity container are added to the
"extending" entity container.

If the "extending" entity container defines an entity set with the same
name as defined in any of its "base" containers, then the entity set's
type MUST specify an entity type derived from the entity type specified
for the identically named entity set in the "base" container. The same
holds for singletons. Action imports and function imports cannot be
redefined, nor can the "extending" container define a child with the
same name as a child of a different kind in a "base" container.

Note: services SHOULD NOT introduce cycles by extending entity
containers. Clients should be prepared to process cycles introduced by
extending entity containers.

::: {.varjson .rep}
### ##subisec `$Extends`

The value of `$Extends` is the qualified name of the entity container to
be extended.
:::

::: {.varjson .example}
Example ##ex: the entity container `Extending` will contain all child
elements that it defines itself, plus all child elements of the `Base`
entity container located in `SomeOtherSchema`
```json
"Extending": {
  "$Kind": "EntityContainer",
  "$Extends": "Some.Other.Schema.Base",
   …
}
```
:::

@$@<Deserialize members of EntityContainer@>@{
@<Deserialize optional qualified name@>@($Extends@)
@}

::: {.varxml .rep}
### ##subisec Attribute `Extends`

The value of `Extends` is the qualified name of the entity container to
be extended.
:::

::: {.varxml .example}
Example ##ex: the entity container `Extending` will contain all child
elements that it defines itself, plus all child elements of the `Base`
entity container located in `SomeOtherSchema`
```xml
<EntityContainer Name="Extending" Extends="Some.Other.Schema.Base">
  …
</EntityContainer>
```
:::

## ##subsec Entity Set

Entity sets are top-level collection-valued resources.

An entity set is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

An entity set MUST specify a type that MUST be an entity type in scope.

An entity set MUST contain only instances of its specified entity type
or its subtypes. The entity type MAY be [abstract](#AbstractEntityType)
but MUST have a [key](#Key) defined.

An entity set MAY indicate whether it is included in the service
document. If not explicitly indicated, it is included.

Entity sets that cannot be queried without specifying additional query
options SHOULD NOT be included in the service document.

::: {.varjson .rep}
### ##isec Entity Set Object

An entity set is represented as a member of the entity container object
whose name is the name of the entity set and whose value is an object.

The entity set object MUST contain the members `$Collection` and
`$Type`.

It MAY contain the members `$IncludeInServiceDocument` and
[`$NavigationPropertyBinding`](#NavigationPropertyBinding) as well as
[annotations](#Annotation).

### ##subisec `$Collection`

The value of `$Collection` is the Boolean value `true`.

### ##subisec `$Type`

The value of `$Type` is the qualified name of an entity type.

### ##subisec `$IncludeInServiceDocument`

The value of `$IncludeInServiceDocument` is one of the Boolean literals
`true` or `false`. Absence of the member means `true`.
:::

::: funnelweb
Entity Set and Singleton have the same stucture in the CSDL metamodel, they differ
only in their `$Collection` value. They are represented by the same class.
:::

@$@<Javascript CSDL metamodel@>@{
class EntitySetOrSingleton extends TypedModelElement {
  @<Construct without $Kind@>
  fromJSON(json) {
    @<Deserialize members of EntitySetOrSingleton@>
    super.fromJSON(json);
  }
}
@}

@$@<Exports@>@{
EntitySetOrSingleton,
@}

@$@<EntityType@>@{
resourcePaths(suffix = []) {
  const paths = [];
  for (const p of this.targetingPaths)
    if (p.attribute === "$Type") {
      if (p.parent instanceof EntitySetOrSingleton)
        paths.push([p.parent.parent, p.parent, ...suffix]);
      else if (
        p.parent instanceof NavigationProperty &&
        !suffix.includes(p.parent)
      )
        paths.push(...p.parent.parent.resourcePaths([p.parent, ...suffix]));
    }
  return paths;
}
@}

@$@<ComplexType@>@{
resourcePaths(suffix = []) {
  const paths = [];
  for (const p of this.targetingPaths)
    if (
      p.attribute === "$Type" &&
      p.parent instanceof Property &&
      !suffix.includes(p.parent)
    )
      paths.push(...p.parent.parent.resourcePaths([p.parent, ...suffix]));
  return paths;
}
@}

::: {.varxml .rep}
### ##isec Element `edm:EntitySet`

The `edm:EntitySet` element MUST contain the attributes `Name` and
`EntityType`, and it MAY contain the `IncludeInServiceDocument`
attribute.

It MAY contain
[`edm:NavigationPropertyBinding`](#NavigationPropertyBinding) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the entity set's name.

### ##subisec Attribute `EntityType`

The value of `EntityType` is the qualified name of an entity type in
scope.

### ##subisec Attribute `IncludeInServiceDocument`

The value of `IncludeInServiceDocument` is one of the Boolean literals
`true` or `false`. Absence of the attribute means `true`.
:::

## ##subsec Singleton

Singletons are top-level single-valued resources.

A singleton is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

A singleton MUST specify a type that MUST be an entity type in scope.

A singleton MUST reference an instance its entity type.

::: {.varjson .rep}
### ##isec Singleton Object

A singleton is represented as a member of the entity container object
whose name is the name of the singleton and whose value is an object.

The singleton object MUST contain the member `$Type` and it MAY contain
the member `$Nullable`.

It MAY contain the member
[`$NavigationPropertyBinding`](#NavigationPropertyBinding) as well as
[annotations](#Annotation).

### ##subisec `$Type`

The value of `$Type` is the qualified name of an entity type.

### ##subisec `$Nullable`

The value of `$Nullable` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.In OData 4.0 responses this
member MUST NOT be specified.
:::

::: {.varxml .rep}
### ##isec Element `edm:Singleton`

The `edm:Singleton` element MUST include the attributes `Name` and
`Type`, and it MAY contain the `Nullable` attribute.

It MAY contain
[`edm:NavigationPropertyBinding`](#NavigationPropertyBinding) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the singleton's name.

### ##subisec Attribute `Type`

The value of `Type` is whose value is the [qualified
name](#QualifiedName) of an entity type in scope.

### ##subisec Attribute `Nullable`

The value of `Nullable` is one of the Boolean literals `true` or
`false`.

If no value is specified, the `Nullable` attribute defaults to `false`.

In OData 4.0 responses this attribute MUST NOT be specified.
:::

## ##subsec Navigation Property Binding

If the entity type of an entity set or singleton declares navigation
properties, a navigation property binding allows describing which entity
set or singleton will contain the related entities.

An [entity set](#EntitySet) or a [singleton](#Singleton) SHOULD contain a navigation
property binding for each non-containment navigation property that can be reached
from the entity type through a sequence of type casts, complex properties,
or containment navigation properties.

If omitted, clients MUST assume that the target entity set or singleton
can vary per related entity.

### ##subsubsec Navigation Property Path Binding

A navigation property binding MUST specify a path to a navigation
property of the entity set's or singleton's declared entity type, or a
navigation property reached through a chain of type casts, complex
properties, or containment navigation properties. If the navigation
property is defined on a subtype, the path MUST contain the [qualified
name](#QualifiedName) of the subtype, followed by a forward slash,
followed by the navigation property name. If the navigation property is
defined on a complex type used in the definition of the entity set's
entity type, the path MUST contain a forward-slash separated list of
complex property names and qualified type names that describe the path
leading to the navigation property.

The path can traverse one or more containment navigation properties, but
the last navigation property segment MUST be a non-containment
navigation property and there MUST NOT be any non-containment navigation
properties prior to the final navigation property segment.

OData 4.01 services MAY have a type-cast segment as the last path
segment, allowing to bind instances of different sub-types to different
targets.

If the path traverses collection-valued complex properties or
collection-valued containment navigation properties, the binding applies
to all items of these collections.

If the path contains a recursive sub-path (i.e. a path leading back to
the same structured type), the binding applies recursively to any
positive number of cycles through that sub-path.

The same navigation property path MUST NOT be specified in more than one
navigation property binding; navigation property bindings are only used
when all related entities are known to come from a single entity set.
Note that it is possible to have navigation property bindings for paths
that differ only in a type-cast segment, allowing to bind instances of
different sub-types to different targets. If paths differ only in
type-cast segments, the most specific path applies.

### ##subsubsec Binding Target

A navigation property binding MUST specify a target via a [simple
identifier](#SimpleIdentifier) or [target path](#TargetPath). It
specifies the entity set, singleton, or containment navigation property
that contains the related entities.

If the target is a [simple identifier](#SimpleIdentifier), it MUST
resolve to an entity set or singleton defined in the same entity
container.

If the target is a [target path](#TargetPath), it MUST resolve to an
entity set, singleton, or direct or indirect containment navigation
property of a singleton in scope. The path can traverse single-valued
containment navigation properties or single-valued complex properties
before ending in a containment navigation property, and there MUST NOT
be any non-containment navigation properties prior to the final segment.

::: {.varjson .rep}
### ##subisec `$NavigationPropertyBinding`

The value of `$NavigationPropertyBinding` is an object. It consists of
members whose name is the navigation property binding path and whose
value is a string containing the navigation property binding target. If
the target is in the same entity container, the target MUST NOT be
prefixed with the qualified entity container name.
:::

::: funnelweb
The `$NavigationPropertyBinding` is a `NamedSubElement`, like the
[`$ReferentialConstraint`](#ReferentialConstraint).
:::

@$@<Deserialize members of EntitySetOrSingleton@>@{
for (const prop in json.$NavigationPropertyBinding)
  if (!prop.includes("@@"))
    new NavigationPropertyBinding(this, prop).fromJSON(
      json.$NavigationPropertyBinding
    );
@}

@$@<Javascript CSDL metamodel@>@{
class NavigationPropertyBinding extends NamedSubElement {
  @<Internal property with setter@>@(navigationProperty@);
  @<Internal property with setter@>@(target@);
  constructor(entitySetOrSingleton, prop) {
    super(entitySetOrSingleton, "$NavigationPropertyBinding", prop);
  }
  fromJSON(json) {
    this.navigationProperty = new RelativePath(
      this,
      this.name,
      @<Relative to entity set or singleton@>,
      "$NavigationPropertyBinding.NavigationProperty"
    );
    this.target = new RelativePath(
      this,
      json[this.name],
      @<Absolute or relative to this entity container@>,
      this.parent.parent,
      "$NavigationPropertyBinding.Target"
    );
    super.fromJSON(json);
  }
  toJSON() {
    return this.target.toJSON();
  }
  toYAML(key) {
    return {
      $path: this.navigationProperty,
      $target: this.target,
      ...this
    };
  }
}
@}

@$@<Exports@>@{
NavigationPropertyBinding,
@}

@$@<Relative to entity set or singleton@>@{@+@!false
this.parent
@}

::: funnelweb
The navigation property binding target is absolute (which we treat as
relative to the CSDL document) if it
contains a qualified entity container name (and hence a dot), and relative to
the entity container (the grandparent of the current `NavigationPropertyBinding`) otherwise.
:::

@$@<Absolute or relative to this entity container@>@{@+@!false
json[this.name].includes(".")
? this.csdlDocument
: this.parent.parent
@}

::: {.varjson .example}
Example ##ex: for an entity set in the same container as the enclosing
entity set `Categories`
```json
"Categories": {
  "$Collection": true,
  "$Type": "self.Category",
  "$NavigationPropertyBinding": {
    "Products": "SomeSet"
  }
}
```
:::

::: {.varjson .example}
Example ##ex: for an entity set in any container in scope
```json
"Categories": {
  "$Collection": true,
  "$Type": "self.Category",
  "$NavigationPropertyBinding": {
    "Products": "SomeModel.SomeContainer/SomeSet"
  }
}
```
:::

::: {.varjson .example}
Example ##ex: If `Subcategories` is a containment navigation property on the
category entity type, the following binding applies to all products of all subcategories
of all categories
```json
"Categories": {
  "$Collection": true,
  "$Type": "self.Category",
  "$NavigationPropertyBinding": {
    "Subcategories/Products": "Products"
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:NavigationPropertyBinding`

The `edm:NavigationPropertyBinding` element MUST contain the attributes
`Path` and `Target`.

### ##subisec Attribute `Path`

The value of `Path` is a path expression.

### ##subisec Attribute `Target`

The value of `Target` is a [target path](#TargetPath).
:::

::: {.varxml .example}
Example ##ex: for an entity set in the same container as the enclosing
entity set `Categories`
```xml
<EntitySet Name="Categories" EntityType="self.Category">
  <NavigationPropertyBinding Path="Products"
                             Target="SomeSet" />
</EntitySet>
```
:::

::: {.varxml .example}
Example ##ex: for an entity set in any container in scope
```xml
<EntitySet Name="Categories" EntityType="self.Category">
  <NavigationPropertyBinding Path="Products"
                             Target="SomeModel.SomeContainer/SomeSet" />
</EntitySet>
```
:::

::: {.varxml .example}
Example ##ex: If `Subcategories` is a containment navigation property on the
category entity type, the following binding applies to all products of all subcategories
of all categories
```xml
<EntitySet Name="Categories" EntityType="self.Category">
  <NavigationPropertyBinding Path="Subcategories/Products"
                             Target="Products" />
</EntitySet>
```
:::

## ##subsec Action Import

Action imports sets are top-level resources that are never included in
the service document.

An action import is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

An action import MUST specify the name of an unbound action in scope.

If the imported action returns an entity or a collection of entities, a
[simple identifier](#SimpleIdentifier) or [target path](#TargetPath)
value MAY be specified to identify the entity set that contains the
returned entities. If a [simple identifier](#SimpleIdentifier) is
specified, it MUST resolve to an entity set defined in the same entity
container. If a [target path](#TargetPath) is specified, it MUST resolve
to an entity set in scope.

::: {.varjson .rep}
### ##isec Action Import Object

An action import is represented as a member of the entity container
object whose name is the name of the action import and whose value is an
object.

The action import object MUST contain the member `$Action`.

It MAY contain the member `$EntitySet`.

It MAY also contain [annotations](#Annotation).

### ##subisec `$Action`

The value of `$Action` is a string containing the qualified name of an
unbound action.

### ##subisec `$EntitySet`

The value of `$EntitySet` is a string containing either the unqualified
name of an entity set in the same entity container or a path to an
entity set in a different entity container.
:::

::: funnelweb
Action and function imports are derived from a common superclass.
:::

@$@<Javascript CSDL metamodel@>@{
class OperationImport extends NamedModelElement {
  @<Construct without $Kind@>
  fromJSON(json) {
    if (json.$EntitySet)
      this.$EntitySet = new RelativePath(
        this,
        json.$EntitySet,
        this.parent,
        "$EntitySet"
      );
    super.fromJSON(json);
  }
}
class ActionImport extends OperationImport {
  fromJSON(json) {
    @<Deserialize qualified name@>@($Action@)
    super.fromJSON(json);
  }
}
@}

@$@<Exports@>@{
ActionImport,
@}

@$@<Action@>@{
resourcePaths(suffix = []) {
  if (this.$IsBound)
    return this.$Parameters[0].$Type.target.resourcePaths([this, ...suffix]);
  const paths = [];
  for (const p of this.targetingPaths)
    if (p.attribute === "$Action" && p.parent instanceof ActionImport)
      paths.push([p.parent.parent, p.parent, ...suffix]);
  return paths;
}
@}

::: {.varxml .rep}
### ##isec Element `edm:ActionImport`

The `edm:ActionImport` element MUST contain the attributes `Name` and
`Action`, and it MAY contain the `EntitySet` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the action import's name.

### ##subisec Attribute `Action`

The value of `Action` is the qualified name of an unbound action.

### ##subisec Attribute `EntitySet`

The value of `EntitySet` is either the unqualified name of an entity set
in the same entity container or a path to an entity set in a different
entity container.
:::

## ##subsec Function Import

Function imports sets are top-level resources.

A function import is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

A function import MUST specify the name of an unbound function in scope.
All [unbound overloads](#BoundorUnboundActionorFunctionOverloads) of the
imported function can be invoked from the entity container.

If the imported function returns an entity or a collection of entities,
a [simple identifier](#SimpleIdentifier) or [target path](#TargetPath)
value MAY be specified to identify the entity set that contains the
returned entities. If a [simple identifier](#SimpleIdentifier) is
specified, it MUST resolve to an entity set defined in the same entity
container. If a [target path](#TargetPath) is specified, it MUST resolve
to an entity set in scope.

A function import for a parameterless function MAY indicate whether it
is included in the service document. If not explicitly indicated, it is
not included.

::: {.varjson .rep}
### ##isec Function Import Object

A function import is represented as a member of the entity container
object whose name is the name of the function import and whose value is
an object.

The function import object MUST contain the member `$Function`.

It MAY contain the members `$EntitySet` and `$IncludeInServiceDocument`.

It MAY also contain [annotations](#Annotation).

### ##subisec `$Function`

The value of `$Function` is a string containing the qualified name of an
unbound function.

### ##subisec `$EntitySet`

The value of `$EntitySet` is a string containing either the unqualified
name of an entity set in the same entity container or a path to an
entity set in a different entity container.

### ##subisec `$IncludeInServiceDocument`

The value of `$IncludeInServiceDocument` is one of the Boolean literals
`true` or `false`. Absence of the member means `false`.
:::

@$@<Javascript CSDL metamodel@>@{
class FunctionImport extends OperationImport {
  fromJSON(json) {
    @<Deserialize qualified name@>@($Function@)
    super.fromJSON(json);
  }
}
@}

@$@<Exports@>@{
FunctionImport,
@}

@$@<Function@>@{
resourcePaths(suffix = []) {
  if (this.$IsBound)
    return this.$Parameters[0].$Type.target.resourcePaths([this, ...suffix]);
  const paths = [];
  for (const p of this.targetingPaths)
    if (p.attribute === "$Function" && p.parent instanceof FunctionImport)
      paths.push([p.parent.parent, p.parent, ...suffix]);
  return paths;
}
@}

::: {.varxml .rep}
### ##isec Element `edm:FunctionImport`

The `edm:FunctionImport` element MUST contain the attributes `Name` and
`Function`, and it MAY contain the attributes `EntitySet` and
`IncludeInServiceDocument`.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the function import's name.

### ##subisec Attribute `Function`

The value of `Function` is the qualified name of an unbound function.

### ##subisec Attribute `EntitySet`

The value of `EntitySet` is either the unqualified name of an entity set
in the same entity container or a path to an entity set in a different
entity container.

### ##subisec Attribute `IncludeInServiceDocument`

The value of `IncludeInServiceDocument` is one of the Boolean literals
`true` or `false`. Absence of the attribute means `false`.
:::
