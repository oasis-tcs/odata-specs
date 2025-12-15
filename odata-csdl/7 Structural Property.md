
-------

# ##sec Structural Property

A structural property is a property of a structured type that has one of
the following types:
- [Primitive type](#PrimitiveTypes)
- [Complex type](#ComplexType)
- [Enumeration type](#EnumerationType)
- A collection of one of the above

A structural property MUST specify a unique name as well as a
[type](#Type).

The property's name MUST be a [simple identifier](#SimpleIdentifier). It
is used when referencing, serializing or deserializing the property. It
MUST be unique within the set of structural and navigation properties of
the declaring [structured type](#StructuredTypes), and MUST NOT match
the name of any navigation property in any of its base types. If a
structural property with the same name is defined in any of this type's
base types, then the property's type MUST be a type derived from the
type specified for the property of the base type and constrains this
property to be of the specified subtype for instances of this structured
type. The name MUST NOT match the name of any structural or navigation
property of any of this type's base types for OData 4.0 responses.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

::: {.varjson .rep}
### ##isec Property Object

Structural properties are represented as members of the object
representing a structured type. The member name is the property name,
the member value is an object.

The property object MAY contain the member `$Kind` with a string value
of `Property`. This member SHOULD be omitted to reduce document size.

It MAY contain the members [`$Type`](#Type), [`$Collection`](#Type),
[`$Nullable`](#Nullable), [`$MaxLength`](#MaxLength),
[`$Unicode`](#Unicode), [`$Precision`](#Precision), [`$Scale`](#Scale),
[`$SRID`](#SRID), and [`$DefaultValue`](#DefaultValue).

It also MAY contain [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex: complex type with two properties `Dimension` and `Length`
```json
"Measurement": {
  "$Kind": "ComplexType",
  "Dimension": {
    "$MaxLength": 50,
    "$DefaultValue": "Unspecified"
  },
  "Length": {
    "$Type": "Edm.Decimal",
    "$Precision": 18,
    "$Scale": 2
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:Property`

The `edm:Property` element MUST contain the `Name` and the `Type`
attribute, and it MAY contain the attributes
[`Nullable`](#Nullable), [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale),
[`SRID`](#SRID), and [`DefaultValue`](#DefaultValue).

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the property's name.
:::

::: {.varxml .example}
Example ##ex: complex type with two properties
```xml
<ComplexType Name="Measurement">
  <Property Name="Dimension" Type="Edm.String" Nullable="false" MaxLength="50"
            DefaultValue="Unspecified" />
  <Property Name="Length" Type="Edm.Decimal" Nullable="false" Precision="18"
            Scale="2" />
</ComplexType>
```
:::

## ##subsec Type

The property's type MUST be a [primitive type](#PrimitiveTypes),
[complex type](#ComplexType), or [enumeration type](#EnumerationType) in
scope, or a collection of one of these types.

If the property is part of a chain of [structural properties](#StructuralProperty) and
[containment navigation properties](#ContainmentNavigationProperty)
leading back to the property's declaring type, the finiteness condition for
[structured types](#StructuredTypes) demands that at least one property
in this chain MUST be nullable or collection-valued.

A collection-valued property MAY be annotated with the
[Core.Ordered]{.term}
term, defined in
[OData-VocCore](#ODataVocCore), to specify that it supports a
stable ordering.

A collection-valued property MAY be annotated with the
[Core.PositionalInsert]{.term}
term, defined in [OData-VocCore](#ODataVocCore), to specify that it
supports inserting items into a specific ordinal position.

::: {.varjson .rep}
### ##subisec `$Type` 
and ##subisec `$Collection`

For single-valued properties the value of `$Type` is the qualified name
of the property's type.

For collection-valued properties the value of `$Type` is the qualified
name of the property's item type, and the member `$Collection` MUST be
present with the literal value `true`.

Absence of the `$Type` member means the type is `Edm.String`. This
member SHOULD be omitted for string properties to reduce document size.
:::

::: {.varjson .example}
Example ##ex: property `Units` that can have zero or more strings as its
value
```json
"Units": {
  "$Collection": true
}
```
:::

::: {.varxml .rep}
### ##subisec Attribute `Type`

For single-valued properties the value of `Type` is the qualified name
of the property's type.

For collection-valued properties the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the property's
item type, followed by a closing parenthesis `)`.
:::

::: {.varxml .example}
Example ##ex: property `Units` that can have zero or more strings as its
value
```xml
<Property Name="Units" Type="Collection(Edm.String)" />
```
:::

## ##subsec Nullable

A Boolean value specifying whether the property can have the value
`null`.

::: {.varjson .rep}
### ##subisec `$Nullable`

The value of `$Nullable` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.

For single-valued properties the value `true` means that the property
allows the `null` value.

For collection-valued properties the value will always be a
collection that MAY be empty. In this case `$Nullable` applies to items
of the collection and specifies whether the collection MAY contain
`null` values.
:::

::: {.varxml .rep}
### ##subisec Attribute `Nullable`

The value of `Nullable` is one of the Boolean literals `true` or
`false`.

For single-valued properties the value `true` means that the property
allows the `null` value.

For collection-valued properties the value will always be a
collection that MAY be empty. In this case the `Nullable` attribute
applies to items of the collection and specifies whether the collection
MAY contain `null` values.

If no value is specified for a single-valued property, the `Nullable`
attribute defaults to `true`.

In OData 4.01 responses a collection-valued property MUST specify a
value for the `Nullable` attribute.

If no value is specified for a collection-valued property, the client
cannot assume any default value. Clients SHOULD be prepared for this
situation even in OData 4.01 responses.
:::

## ##subsec Default Value

A primitive- or enumeration-typed property MAY define a default value that is
used if the property is not explicitly represented in an annotation,
the body of a request or response, or a complex literal in a request URL.

If no value is specified, the client SHOULD NOT assume a default value.

::: {.varjson .rep}
### ##subisec `$DefaultValue`

The value of `$DefaultValue` is the type-specific JSON representation of
the default value of the property, see
[#OData-JSON#PrimitiveValue]. For properties of type
`Edm.Decimal` and `Edm.Int64` the representation depends on the media
type parameter
[`IEEE754Compatible`](#ControllingtheRepresentationofNumbers).
:::

::: {.varxml .rep}
### ##subisec Attribute `DefaultValue`

Default values of type `Edm.String` MUST be represented according to the
XML escaping rules for character data in attribute values. Values of
other primitive types MUST be represented according to the appropriate
alternative in the [primitiveValue]{.abnf} rule defined in
[OData-ABNF](#ODataABNF), i.e. `Edm.Binary` as `binaryValue`,
`Edm.Boolean` as `booleanValue` etc.
:::

-------

# ##sec Navigation Property

A navigation property allows navigation to related entities. It MUST
specify a unique name as well as a type.

The navigation property's name MUST be a [simple
identifier](#SimpleIdentifier). It is used when referencing, serializing
or deserializing the navigation property. It MUST be unique within the
set of structural and navigation properties of the declaring [structured
type](#StructuredTypes), and MUST NOT match the name of any structural
property in any of its base types. If a navigation property with the
same name is defined in any of this type's base types, then the
navigation property's type MUST be a type derived from the type
specified for the navigation property of the base type, and constrains
this navigation property to be of the specified subtype for instances of
this structured type. The name MUST NOT match the name of any structural
or navigation property of any of this type's base types for OData 4.0
responses.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

::: {.varjson .rep}
### ##isec Navigation Property Object

Navigation properties are represented as members of the object
representing a structured type. The member name is the property name,
the member value is an object.

The navigation property object MUST contain the member `$Kind` with a
string value of `NavigationProperty`.

It MUST contain the member [`$Type`](#NavigationPropertyType), and it
MAY contain the members [`$Collection`](#NavigationPropertyType),
[`$Nullable`](#NullableNavigationProperty),
[`$Partner`](#PartnerNavigationProperty),
[`$ContainsTarget`](#ContainmentNavigationProperty),
[`$ReferentialConstraint`](#ReferentialConstraint), and
[`$OnDelete`](#OnDeleteAction).

It also MAY contain [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex: the `Product` entity type has a navigation property to a
`Category`, which has a navigation link back to one or more products
```json
"Product": {
  "$Kind": "EntityType",
  …
  "Category": {
    "$Kind": "NavigationProperty",
    "$Type": "self.Category",
    "$Partner": "Products",
    "$ReferentialConstraint": {
      "CategoryID": "ID"
    }
  },
  "Supplier": {
    "$Kind": "NavigationProperty",
    "$Type": "self.Supplier"
  }
},
"Category": {
  "$Kind": "EntityType",
  …
  "Products": {
    "$Kind": "NavigationProperty",
    "$Collection": true,
    "$Type": "self.Product",
    "$Partner": "Category",
    "$OnDelete": "Cascade",
    "$OnDelete@Core.Description": "Delete all related entities"
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:NavigationProperty`

The `edm:NavigationProperty` element MUST contain the `Name` and `Type`
attributes, and it MAY contain the attributes
[`Nullable`](#NullableNavigationProperty),
[`Partner`](#PartnerNavigationProperty), and
[`ContainsTarget`](#ContainmentNavigationProperty).

It MAY contain child elements
[`edm:ReferentialConstraint`](#ReferentialConstraint) and at most one
child element [`edm:OnDelete`](#OnDeleteAction).

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the navigation property's name.
:::

::: {.varxml .example}
Example ##ex: the Product entity type has a navigation property to a
Category, which has a navigation link back to one or more products
```xml
<EntityType Name="Product">
  …
  <NavigationProperty Name="Category" Type="self.Category" Nullable="false"
                      Partner="Products" />
  <NavigationProperty Name="Supplier" Type="self.Supplier" />
</EntityType>

<EntityType Name="Category">
  …
  <NavigationProperty Name="Products" Type="Collection(self.Product)"
                      Partner="Category" />
</EntityType>
```
:::

## ##subsec Navigation Property Type

The navigation property's type MUST be an [entity type](#EntityType) in
scope, the [abstract type](#BuiltInAbstractTypes) `Edm.EntityType`, or a
collection of one of these types.

If the property is part of a chain of [structural properties](#StructuralProperty) and
[containment navigation properties](#ContainmentNavigationProperty)
leading back to the property's declaring type, the finiteness condition for
[structured types](#StructuredTypes) demands that at least one property
in this chain MUST be nullable or collection-valued.

If the type is a collection, an arbitrary number of entities can be
related. Otherwise there is at most one related entity.

The related entities MUST be of the specified entity type or one of its
subtypes.

For a collection-valued containment navigation property the specified
entity type MUST have a [key](#Key) defined.

A collection-valued navigation property MAY be annotated with the
[Core.Ordered]{.term}
term, defined in [OData-VocCore](#ODataVocCore), to specify that it
supports a stable ordering.

A collection-valued navigation property MAY be annotated with the
[Core.PositionalInsert]{.term}
term, defined in [OData-VocCore](#ODataVocCore), to specify that it
supports inserting items into a specific ordinal position.

::: {.varjson .rep}
### ##subisec `$Type` 
and ##subisec `$Collection`

For single-valued navigation properties the value of `$Type` is the
qualified name of the navigation property's type.

For collection-valued navigation properties the value of `$Type` is the
qualified name of the navigation property's item type, and the member
`$Collection` MUST be present with the literal value `true`.
:::

::: {.varxml .rep}
### ##subisec Attribute `Type`

For single-valued navigation properties the value of `Type` is the
qualified name of the navigation property's type.

For collection-valued navigation properties the value of `Type` is the
character sequence `Collection(` followed by the qualified name of the
navigation property's item type, followed by a closing parenthesis `)`.
:::

## ##subsec Nullable Navigation Property

A Boolean value specifying whether the declaring type MAY have no
related entity. If false, instances of the declaring structured type
MUST always have a related entity.

Nullable MUST NOT be specified for a collection-valued navigation
property, a collection is allowed to have zero items.

::: {.varjson .rep}
### ##subisec `$Nullable`

The value of `$Nullable` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.
:::

::: {.varxml .rep}
### ##subisec Attribute `Nullable`

The value of `Nullable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `true`.
:::

## ##subsec Partner Navigation Property

A navigation property of an [entity type](#EntityType) MAY specify a
partner navigation property. Navigation properties of complex types MUST
NOT specify a partner.

If specified, the partner navigation property is identified by a path
relative to the entity type specified as the type of the navigation
property. This path MUST lead to a navigation property defined on that
type or a derived type. The path MAY traverse complex types, including
derived complex types, but MUST NOT traverse any navigation properties.
The type of the partner navigation property MUST be the declaring entity
type of the current navigation property or one of its parent entity
types.

If the partner navigation property is single-valued, it MUST lead back
to the source entity from all related entities. If the partner
navigation property is collection-valued, the source entity MUST be part
of that collection.

If no partner navigation property is specified, no assumptions can be
made as to whether one of the navigation properties on the target type
will lead back to the source entity.

If a partner navigation property is specified, this partner navigation
property MUST either specify the current navigation property as its
partner to define a bi-directional relationship or it MUST NOT specify a
partner navigation property. The latter can occur if the partner
navigation property is defined on a complex type, or if the current
navigation property is defined on a type derived from the type of the
partner navigation property.

::: {.varjson .rep}
### ##subisec `$Partner`

The value of `$Partner` is a string containing the path to the partner
navigation property.
:::

::: {.varxml .rep}
### ##subisec Attribute `Partner`

The value of `Partner` is the path to the partner navigation
property.
:::

## ##subsec Containment Navigation Property

A navigation property MAY indicate that instances of its declaring
structured type contain the targets of the navigation property, in which
case the navigation property is called a *containment navigation
property*.

Containment navigation properties define an implicit entity set for each
instance of its declaring structured type. This implicit entity set is
identified by the read URL of the navigation property for that
structured type instance.

Instances of the structured type that declares the navigation property,
either directly or indirectly via a property of complex type, contain
the entities referenced by the containment navigation property. The
canonical URL for contained entities is the canonical URL of the
containing instance, followed by the path segment of the navigation
property and the key of the contained entity, see
[#OData-URL#CanonicalURLforContainedEntities].

Entity types used in collection-valued containment navigation properties
MUST have a [key](#Key) defined.

For items of an ordered collection of complex types (those annotated
with the
[Core.Ordered]{.term}
term defined in [OData-VocCore](#ODataVocCore) the canonical URL
of the item is the canonical URL of the collection appended with a
segment containing the zero-based ordinal of the item. Items within in
an unordered collection of complex types do not have a canonical URL.
Services that support unordered collections of complex types declaring a
containment navigation property, either directly or indirectly via a
property of complex type, MUST specify the URL for the navigation link
within a payload representing that item, according to format-specific
rules.

OData 4.0 responses MUST NOT specify a complex type declaring a
containment navigation property as the type of a collection-valued
property.

An entity cannot be referenced by more than one containment
relationship, and cannot both belong to an entity set declared within
the entity container and be referenced by a containment relationship.

Containment navigation properties MUST NOT be specified as the last path
segment in the path of a [navigation property
binding](#NavigationPropertyBinding).

When a containment navigation property navigates between entity types in
the same inheritance hierarchy, the containment is called *recursive*.

Containment navigation properties MAY specify a partner navigation
property. If the containment is recursive, the relationship defines a
tree, thus the partner navigation property MUST be
[nullable](#NullableNavigationProperty) (for the root of the tree) and
single-valued (for the parent of a non-root entity). If the containment
is not recursive, the partner navigation property MUST NOT be nullable.

An entity type inheritance chain MUST NOT contain more than one
navigation property with a partner navigation property that is a
containment navigation property.

Note: without a partner navigation property, there is no reliable way
for a client to determine which entity contains a given contained
entity. This may lead to problems for clients if the contained entity
can also be reached via a non-containment navigation path.

::: {.varjson .rep}
### ##subisec `$ContainsTarget`

The value of `$ContainsTarget` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.
:::

::: {.varxml .rep}
### ##subisec Attribute `ContainsTarget`

The value of `ContainsTarget` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Referential Constraint

A single-valued navigation property MAY define one or more referential
constraints. A referential constraint asserts that the *dependent
property* (the property defined on the structured type declaring the
navigation property) MUST have the same value as the *principal
property* (the referenced property declared on the entity type that is
the target of the navigation).
Elsewhere this specification calls the dependent property and the principal property
_tied to_ each other.

The type of the dependent property MUST match the type of the principal
property, or both types MUST be complex types.

If the principal property references an entity, then the dependent
property must reference the same entity.

If the principal property's value is a complex type instance, then the
dependent property's value must be a complex type instance with the same
properties, each with the same values.

If the navigation property on which the referential constraint is
defined is nullable, or the principal property is nullable, then the
dependent property MUST also be nullable. If both the navigation
property and the principal property are not nullable, then the dependent
property MUST NOT be nullable.

::: {.varjson .rep}
### ##subisec `$ReferentialConstraint`

The value of `$ReferentialConstraint` is an object with one member per
referential constraint. The member name is the path to the dependent
property, this path is relative to the structured type declaring the
navigation property. The member value is a string containing the path to
the principal property, this path is relative to the entity type that is
the target of the navigation property.

It also MAY contain [annotations](#Annotation). These are prefixed with
the path of the dependent property of the annotated referential
constraint.
:::

::: {.varjson .example}
Example ##ex: the category must exist for a product in that category to
exist. The `CategoryID` of the product is identical to the `ID` of the
category, and the `CategoryKind` property of the product is identical to
the `Kind` property of the category.
```json
"Product": {
  "$Kind": "EntityType",
  …
  "CategoryID": {},
  "CategoryKind": {},
  "Category": {
    "$Kind": "NavigationProperty",
    "$Type": "self.Category",
    "$Partner": "Products",
    "$ReferentialConstraint": {
      "CategoryID": "ID",
      "CategoryKind": "Kind",
      "CategoryKind@Core.Description": "Referential Constraint to non-key property"
    }
  }
},
"Category": {
  "$Kind": "EntityType",
  "$Key": [
    "ID"
  ],
  "ID": {},
  "Kind": {
    "$Nullable": true
  },
  …
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:ReferentialConstraint`

The `edm:ReferentialConstraint` element MUST contain the attributes
`Property` and `ReferencedProperty`.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Property`

The `Property` attribute specifies the property that takes part in the
referential constraint on the dependent structured type. Its value MUST
be a path expression resolving to a property of the dependent structured
type itself or to a property of a complex property (recursively) of the
dependent structured type. The names of the properties in the path are
joined together by forward slashes. The path is relative to the
dependent structured type declaring the navigation property.

### ##subisec Attribute `ReferencedProperty`

The `ReferencedProperty` attribute specifies the corresponding property
of the principal entity type. Its value MUST be a path expression
resolving to a property of the principal entity type itself or to a
property of a complex property (recursively) of the principal entity
type that MUST have the same type as the property of the dependent
entity type. The path is relative to the entity type that is the target
of the navigation property.
:::

::: {.varxml .example}
Example ##ex: the category must exist for a product in that category to
exist. The `CategoryID` of the product is identical to the `ID` of the
category, and the `CategoryKind` property of the product is identical to
the `Kind` property of the category.
```xml
<EntityType Name="Product">
  …
  <Property Name="CategoryID" Type="Edm.String" Nullable="false"/>
  <Property Name="CategoryKind" Type="Edm.String" Nullable="true" />
  <NavigationProperty Name="Category" Type="self.Category" Nullable="false">
    <ReferentialConstraint Property="CategoryID" ReferencedProperty="ID" />
    <ReferentialConstraint Property="CategoryKind" ReferencedProperty="Kind">
      <Annotation Term="Core.Description"
                  String="Referential Constraint to non-key property" />
    </ReferentialConstraint>
  </NavigationProperty>
</EntityType>

<EntityType Name="Category">
  <Key>
    <PropertyRef Name="ID" />
  </Key>
  <Property Name="ID" Type="Edm.String" Nullable="false" />
  <Property Name="Kind" Type="Edm.String" Nullable="true" />
  …
</EntityType>
```
:::

## ##subsec On-Delete Action

A navigation property MAY define an on-delete action that describes the
action the service will take on related entities when the entity on
which the navigation property is defined is deleted.

The action can have one of the following values:

-   `Cascade`, meaning the related entities will be deleted if the
    source entity is deleted,
-   `None`, meaning a `DELETE` request on a source entity with related
    entities will fail,
-   `SetNull`, meaning all properties of related entities that are tied
    to properties of the source entity via a referential constraint and
    that do not participate in other referential constraints will be set
    to null,
-   `SetDefault`, meaning all properties of related entities that are
    tied to properties of the source entity via a referential constraint
    and that do not participate in other referential constraints will be
    set to their default value.

If no on-delete action is specified, the action taken by the service is
not predictable by the client and could vary per entity.

::: {.varjson .rep}
### ##subisec `$OnDelete`

The value of `$OnDelete` is a string with one of the values `Cascade`,
`None`, `SetNull`, or `SetDefault`.

[Annotations](#Annotation) for `$OnDelete` are prefixed with
`$OnDelete`.
:::

::: {.varjson .example}
Example ##ex: deletion of a category implies deletion of the related
products in that category
```json
"Category": {
  "$Kind": "EntityType",
  …
  "Products": {
    "$Kind": "NavigationProperty",
    "$Collection": true,
    "$Type": "self.Product",
    "$Partner": "Category",
    "$OnDelete": "Cascade",
    "$OnDelete@Core.Description": "Delete all products in this category"
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:OnDelete`

The `edm:OnDelete` element MUST contain the `Action` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Action`

The value of `Action` is one of the values `Cascade`, `None`, `SetNull`,
or `SetDefault`.
:::

::: {.varxml .example}
Example ##ex: deletion of a category implies deletion of the related
products in that category
```xml
<EntityType Name="Category">
  …
  <NavigationProperty Name="Products" Type="Collection(self.Product)">
    <OnDelete Action="Cascade">
      <Annotation Term="Core.Description"
                  String="Delete all products in this category" />
    </OnDelete>
  </NavigationProperty>
</EntityType>
```
:::
