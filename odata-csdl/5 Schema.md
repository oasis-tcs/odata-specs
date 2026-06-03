
-------

# ##sec Schema

One or more schemas describe the entity model exposed by an OData
service. The schema acts as a namespace for elements of the entity model
such as entity types, complex types, enumerations and terms.

A schema is identified by a [namespace](#Namespace). Schema namespaces
MUST be unique within the scope of a document and SHOULD be globally
unique. A schema cannot span more than one document.

The schema's namespace is combined with the name of elements in the
schema to create unique [qualified names](#QualifiedName), so
identifiers that are used to name types MUST be unique within a
namespace to prevent ambiguity.

Services SHOULD NOT have [actions](#Action) and [functions](#Function) with the same name, and MUST NOT have
actions and functions with the same name bound to the same type.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

The namespace MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.

::: {.varjson .rep}
### ##isec Schema Object

A schema is represented as a member of the document object whose name is
the schema namespace. Its value is an object that MAY contain the
members [`$Alias`](#Alias) and
[`$Annotations`](#AnnotationswithExternalTargeting).

The schema object MAY contain members representing [entity
types](#EntityType), [complex types](#ComplexType), [enumeration
types](#EnumerationType), [type definitions](#TypeDefinition),
[actions](#Action), [functions](#Function), [terms](#Term), and an
[entity container](#EntityContainer).

The schema object MAY also contain [annotations](#Annotation) that apply
to the schema itself.
:::

::: {.varxml .rep}
### ##isec Element `edm:Schema`

The `edm:Schema` element defines a
schema. It MUST contain the `Namespace` attribute and it MAY
contain the `Alias` attribute.

It MAY contain elements [`edm:Action`](#Action),
[`edm:Annotations`](#AnnotationswithExternalTargeting),
[`edm:Annotation`](#Annotation), [`edm:ComplexType`](#ComplexType),
[`edm:EntityContainer`](#EntityContainer),
[`edm:EntityType`](#EntityType), [`edm:EnumType`](#EnumerationType),
[`edm:Function`](#Function), [`edm:Term`](#Term), or
[`edm:TypeDefinition`](#TypeDefinition).

### ##subisec Attribute `Namespace`

The value of `Namespace` is the namespace of the schema
:::

## ##subsec Alias

A schema MAY specify an alias which MUST be a [simple
identifier](#SimpleIdentifier).

: varjson
If a schema specifies an alias, the alias MUST be used instead of the
namespace within qualified names throughout the document to identify
model elements of that schema. A mixed use of namespace-qualified names
and alias-qualified names is not allowed.
:

: varxml
If a schema specifies an alias, the alias MAY be used instead of the
namespace within qualified names to identify model elements of that
schema. An alias only provides a more convenient notation, allowing a
short string to be substituted for a long namespace. Every model element
that can be identified via an alias-qualified name can alternatively be
identified via its full namespace-qualified name.
:

Aliases are document-global, so all schemas defined within or included
into a document MUST have different aliases, and aliases MUST differ
from the namespaces of all schemas defined within or included into a
document. Aliases defined by a schema can be used throughout the
containing document and are not restricted to the schema that defines
them.

The alias MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.

::: {.varjson .rep}
### ##subisec `$Alias`

The value of `$Alias` is a string containing the alias for the schema.
:::

::: {.varjson .example}
Example ##ex: document defining a schema `org.example` with an alias and a
description for the schema
```json
{
  …
  "org.example": {
    "$Alias": "self",
    "@Core.Description": "Example schema",
    …
  },
  …
}
```
:::

::: {.varxml .rep}
### ##subisec Attribute `Alias`

The value of `Alias` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example ##ex: schema `org.example` with an alias and a description for the
schema
```xml
<Schema Namespace="org.example" Alias="self">
  <Annotation Term="Core.Description" String="Example schema" />
  …
</Schema>
```
:::

## ##subsec Annotations with External Targeting

::: {.varjson .rep}
### ##subisec `$Annotations`

The value of `$Annotations` is an object with one member per [annotation target](#Target).
The member name is an expression identifying the [annotation target](#Target).
It MUST resolve to a model element in scope.
The member value is an object containing [annotations](#Annotation) for that target.
:::

::: {.varjson .example}
Example ##ex: annotations targeting the `Person` type with qualifier
`Tablet`
```json
"org.example": {
  "$Alias": "self",
  "$Annotations": {
    "self.Person": {
      "@Core.Description#Tablet": "Dummy",
      …
    }
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:Annotations`

The `edm:Annotations` element is used to apply a group of annotations to
a single model element. It MUST contain the `Target` attribute and it
MAY contain the `Qualifier` attribute.

It MUST contain at least one [`edm:Annotation`](#Annotation) element.

### ##subisec Attribute `Target`

The value of `Target` is an expression identifying the [annotation
target](#Target). It MUST resolve to a model element in scope.

### ##subisec Attribute `Qualifier`

The value of `Qualifier` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example ##ex: annotations should only be applied to tablet devices
```xml
<Annotations Target="org.example.Person" Qualifier="Tablet">
  <Annotation Term="Core.Description" String="Dummy" />
  …
</Annotations>
```
:::

-------

# ##sec Entity Type

Entity types are [nominal](#NominalTypes) [structured
types](#StructuredTypes) with a key that consists of one or more
references to [structural properties](#StructuralProperty). An entity
type is the template for an entity: any uniquely identifiable record
such as a customer or order.

The entity type's name is a [simple identifier](#SimpleIdentifier) that
MUST be unique within its schema.

An entity type can define two types of properties. A [structural
property](#StructuralProperty) is a named reference to a primitive,
complex, or enumeration type, or a collection of primitive, complex, or
enumeration types. A [navigation property](#NavigationProperty) is a
named reference to another entity type or collection of entity types.

All properties MUST have a unique name within an entity type. Properties
MUST NOT have the same name as the declaring entity type. They MAY have
the same name as one of the direct or indirect base types or derived
types.

::: {.varjson .rep}
### ##isec Entity Type Object

An entity type is represented as a member of the schema object whose
name is the unqualified name of the entity type and whose value is an
object.

The entity type object MUST contain the member `$Kind` with a string
value of `EntityType`.

It MAY contain the members [`$BaseType`](#DerivedEntityType),
[`$Abstract`](#AbstractEntityType), [`$OpenType`](#OpenEntityType),
[`$HasStream`](#MediaEntityType), and [`$Key`](#Key).

It also MAY contain members representing [structural
properties](#StructuralProperty) and [navigation
properties](#NavigationProperty) as well as [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex_entitytype: a simple entity type
```json
"Employee": {
  "$Kind": "EntityType",
  "$Key": [
    "ID"
  ],
  "ID": {},
  "FirstName": {},
  "LastName": {},
  "Manager": {
    "$Kind": "NavigationProperty",
    "$Nullable": true,
    "$Type": "self.Manager"
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:EntityType`

The `edm:EntityType` element MUST contain the `Name` attribute, and it
MAY contain the [`BaseType`](#DerivedEntityType),
[`Abstract`](#AbstractEntityType), [`OpenType`](#OpenEntityType), and
[`HasStream`](#MediaEntityType) attributes.

It MAY contain [`edm:Property`](#StructuralProperty) and
[`edm:NavigationProperty`](#NavigationProperty) elements describing the
properties of the entity type.

It MAY contain one [`edm:Key`](#Key) element.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the entity type's name.
:::

::: {.varxml .example}
Example ##ex_entitytype: a simple entity type
```xml
<EntityType Name="Employee">
  <Key>
    <PropertyRef Name="ID" />
  </Key>
  <Property Name="ID" Type="Edm.String" Nullable="false" />
  <Property Name="FirstName" Type="Edm.String" Nullable="false" />
  <Property Name="LastName" Type="Edm.String" Nullable="false" />
  <NavigationProperty Name="Manager" Type="self.Manager" />
</EntityType>
```
:::

## ##subsec Derived Entity Type

An entity type can inherit from another entity type by specifying it as
its base type.

An entity type inherits the [key](#Key) as well as structural and
navigation properties of its base type.

An entity type MUST NOT introduce an inheritance cycle by specifying a
base type.

::: {.varjson .rep}
### ##subisec `$BaseType`

The value of `$BaseType` is the qualified name of the base type.
:::

::: {.varjson .example}
Example ##ex: a derived entity type based on the previous example
```json
"Manager": {
  "$Kind": "EntityType",
  "$BaseType": "self.Employee",
  "AnnualBudget": {
    "$Nullable": true,
    "$Type": "Edm.Decimal",
    "$Scale": 0
  },
  "Employees": {
    "$Kind": "NavigationProperty",
    "$Collection": true,
    "$Type": "self.Employee"
  }
}
```
:::

::: {.varxml .rep}
### ##subisec Attribute `BaseType`

The value of `BaseType` is the qualified name of the base type.
:::

::: {.varxml .example}
Example ##ex: a derived entity type based on the previous example
```xml
<EntityType Name="Manager" BaseType="self.Employee">
  <Property Name="AnnualBudget" Type="Edm.Decimal" />
  <NavigationProperty Name="Employees" Type="Collection(self.Employee)" />
</EntityType>
```
:::

::: example
Note: the derived type has the same name as one of the properties of its
base type.
:::

## ##subsec Abstract Entity Type

An entity type MAY indicate that it is abstract and cannot have
instances.

For OData 4.0 responses a non-abstract entity type MUST define a
[key](#Key) or derive from a [base type](#DerivedEntityType) with a
defined key.

An abstract entity type MUST NOT inherit from a non-abstract entity
type.

::: {.varjson .rep}
### ##subisec `$Abstract`

The value of `$Abstract` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.
:::

::: {.varxml .rep}
### ##subisec Attribute `Abstract`

The value of `Abstract` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Open Entity Type

An entity type MAY indicate that it is open and allows clients to add
properties dynamically to instances of the type by specifying uniquely
named property values in the payload used to insert or update an
instance of the type.

An entity type derived from an open entity type MUST indicate that it is
also open.

Note: structural and navigation properties MAY be returned by the
service on instances of any structured type, whether or not the type is
marked as open. Clients MUST always be prepared to deal with additional
properties on instances of any structured type, see
[#OData-Protocol#DataModel].

::: {.varjson .rep}
### ##subisec `$OpenType`

The value of `$OpenType` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.
:::

::: {.varxml .rep}
### ##subisec Attribute `OpenType`

The value of `OpenType` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Media Entity Type

An entity type that does not specify a base type MAY indicate that it is
a media entity type. *Media entities* are entities that represent a
media stream, such as a photo. Use a media entity if the out-of-band
stream is the main topic of interest and the media entity is just
additional structured information attached to the stream. Use a normal
entity with one or more properties of type `Edm.Stream` if the
structured data of the entity is the main topic of interest and the
stream data is just additional information attached to the structured
data. For more information on media entities see
[#OData-Protocol#RequestingtheMediaStreamofaMediaEntityusingvalue].

An entity type derived from a media entity type MUST indicate that it is
also a media entity type.

Media entity types MAY specify a list of acceptable media types using an
annotation with term
[Core.AcceptableMediaTypes]{.term},
see [OData-VocCore](#ODataVocCore).

::: {.varjson .rep}
### ##subisec `$HasStream`

The value of `$HasStream` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.
:::

::: {.varxml .rep}
### ##subisec Attribute `HasStream`

The value of `HasStream` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Key

An entity is uniquely identified within an entity set by its key. A key
MAY be specified if the entity type does not specify a [base
type](#DerivedEntityType) that already has a key declared.

In order to be specified as the type of an [entity set](#EntitySet) or a
collection-valued [containment navigation
property](#ContainmentNavigationProperty), the entity type MUST either
specify a key or inherit its key from its [base
type](#DerivedEntityType).

In OData 4.01 responses entity types used for [singletons](#Singleton)
or single-valued [navigation properties](#NavigationProperty) do not
require a key. In OData 4.0 responses entity types used for
[singletons](#Singleton) or single-valued [navigation
properties](#NavigationProperty) MUST have a key defined.

An entity type's key refers to the set of properties whose values
uniquely identify an instance of the entity type within an entity set.
The key MUST consist of at least one property.

Key properties MUST NOT be nullable and MUST be typed with an
[enumeration type](#EnumerationType), one of the following [primitive
types](#PrimitiveTypes), or a [type definition](#TypeDefinition) based
on one of these primitive types:

-   `Edm.Boolean`
-   `Edm.Byte`
-   `Edm.Date`
-   `Edm.DateTimeOffset`
-   `Edm.Decimal`
-   `Edm.Duration`
-   `Edm.Guid`
-   `Edm.Int16`
-   `Edm.Int32`
-   `Edm.Int64`
-   `Edm.SByte`
-   `Edm.String`
-   `Edm.TimeOfDay`

Key property values MAY be language-dependent, but their values MUST be
unique across all languages and the entity-ids (defined in
[#OData-Protocol#EntityIdsandEntityReferences]) MUST be language independent.

A key property MUST be a non-nullable primitive property of the entity
type itself, including non-nullable primitive properties of non-nullable
single-valued complex properties, recursively.

In OData 4.01 the key properties of a directly related entity type MAY
also be part of the key if the navigation property is single-valued and
not nullable. This includes navigation properties of non-nullable
single-valued complex properties (recursively) of the entity type. If a
key property of a related entity type is part of the key, all key
properties of the related entity type MUST also be part of the key.

If the key property is a property of a complex property (recursively) or
of a directly related entity type, the key MUST specify an alias for
that property that MUST be a [simple identifier](#SimpleIdentifier) and
MUST be unique within the set of aliases, structural and navigation
properties of the declaring entity type and any of its base types.

An alias MUST NOT be defined if the key property is a primitive property
of the entity type itself.

For key properties that are a property of a complex or navigation
property, the alias MUST be used in the key predicate of URLs instead of
the path to the property because the required percent-encoding of the
forward slash separating segments of the path to the property would make
URL construction and parsing rather complicated. The alias MUST NOT be
used in the query part of URLs, where paths to properties don't require
special encoding and are a standard constituent of expressions anyway.

::: {.varjson .rep}
### ##subisec `$Key`

The value of `$Key` is an array with one item per key property.

Key properties without a key alias are represented as strings containing
the property name.

Key properties with a key alias are represented as objects with one
member whose name is the key alias and whose value is a string
containing the path to the property.
:::

::: {.varjson .example}
Example ##ex: entity type with a simple key
```json
"Category": {
  "$Kind": "EntityType",
  "$Key": [
    "ID"
  ],
  "ID": {
    "$Type": "Edm.Int32"
  },
  "Name": {
    "$Nullable": true,
    "@Core.IsLanguageDependent": true
  }
}
```
:::

::: {.varjson .example}
Example ##ex_complexkey: entity type with a simple key referencing a property of a
[complex type](#ComplexType)
```json
"Category": {
  "$Kind": "EntityType",
  "$Key": [
    {
      "EntityInfoID": "Info/ID"
    }
  ],
  "Info": {
    "$Type": "self.EntityInfo"
  },
  "Name": {
    "$Nullable": true
  }
},
"EntityInfo": {
  "$Kind": "ComplexType",
  "ID": {
    "$Type": "Edm.Int32"
  },
  "Created": {
    "$Type": "Edm.DateTimeOffset",
    "$Precision": 0
  }
}
```
:::

::: {.varjson .example}
Example ##ex: entity type with a composite key
```json
"OrderLine": {
  "$Kind": "EntityType",
  "$Key": [
    "OrderID",
    "LineNumber"
  ],
  "OrderID": {
    "$Type": "Edm.Int32"
  },
  "LineNumber": {
    "$Type": "Edm.Int32"
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:Key`

The `edm:Key` element MUST contain at least one `edm:PropertyRef`
element.

### ##isec Element `edm:PropertyRef`

The `edm:PropertyRef` element MUST contain the `Name` attribute and MAY
contain the `Alias` attribute.

### ##subisec Attribute `Name`

The value of `Name` is a path expression leading to a primitive
property. The names of the properties in the path are joined together by
forward slashes.

### ##subisec Attribute `Alias`

The value of `Alias` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example ##ex: entity type with a simple key
```xml
<EntityType Name="Category">
  <Key>
    <PropertyRef Name="ID" />
  </Key>
  <Property Name="ID" Type="Edm.Int32" Nullable="false" />
  <Property Name="Name" Type="Edm.String" />
</EntityType>
```
:::

::: {.varxml .example}
Example ##ex_complexkey: entity type with a simple key referencing a property of a
[complex type](#ComplexType)
```xml
<EntityType Name="Category">
  <Key>
    <PropertyRef Name="Info/ID" Alias="EntityInfoID" />
  </Key>
  <Property Name="Info" Type="Sales.EntityInfo" Nullable="false" />
  <Property Name="Name" Type="Edm.String" />
</EntityType>

<ComplexType Name="EntityInfo">
  <Property Name="ID" Type="Edm.Int32" Nullable="false" />
  <Property Name="Created" Type="Edm.DateTimeOffset" />
</ComplexType>
```
:::

::: {.varxml .example}
Example ##ex: entity type with a composite key
```xml
<EntityType Name="OrderLine">
  <Key>
    <PropertyRef Name="OrderID" />
    <PropertyRef Name="LineNumber" />
  </Key>
  <Property Name="OrderID" Type="Edm.Int32" Nullable="false" />
  <Property Name="LineNumber" Type="Edm.Int32" Nullable="false" />
</EntityType>
```
:::

::: example
Example ##ex (based on [example ##complexkey]): requests to an entity set `Categories`
of type `Category` must use the alias
```
GET http://host/service/Categories(EntityInfoID=1)
```
:::

::: example
Example ##ex (based on [example ##complexkey]): in a query part the value assigned to
the name attribute must be used
```
GET http://example.org/OData.svc/Categories?$filter=Info/ID le 100
```
:::
