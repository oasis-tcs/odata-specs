-------

# ##sec Complex Type

Complex types are keyless [nominal](#NominalTypes) [structured
types](#StructuredTypes). The lack of a key means that instances of
complex types cannot be referenced, created, updated or deleted
independently of an entity type. Complex types allow entity models to
group properties into common structures.

The complex type's name is a [simple identifier](#SimpleIdentifier) that
MUST be unique within its schema.

A complex type can define two types of properties. A [structural
property](#StructuralProperty) is a named reference to a primitive,
complex, or enumeration type, or a collection of primitive, complex, or
enumeration types. A [navigation property](#NavigationProperty) is a
named reference to an entity type or a collection of entity types.

All properties MUST have a unique name within a complex type. Properties
MUST NOT have the same name as the declaring complex type. They MAY have
the same name as one of the direct or indirect base types or derived
types.

::: {.varjson .rep}
### ##isec Complex Type Object

A complex type is represented as a member of the schema object whose
name is the unqualified name of the complex type and whose value is an
object.

The complex type object MUST contain the member `$Kind` with a string
value of `ComplexType`. It MAY contain the members
[`$BaseType`](#DerivedComplexType), [`$Abstract`](#AbstractComplexType),
and [`$OpenType`](#OpenComplexType). It also MAY contain members
representing [structural properties](#StructuralProperty) and
[navigation properties](#NavigationProperty) as well as
[annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex: a complex type used by two entity types
```json
"Dimensions": {
  "$Kind": "ComplexType",
  "Height": {
    "$Type": "Edm.Decimal",
    "$Scale": 0
  },
  "Weight": {
    "$Type": "Edm.Decimal",
    "$Scale": 0
  },
  "Length": {
    "$Type": "Edm.Decimal",
    "$Scale": 0
  }
},
"Product": {
  ...
  "ProductDimensions": {
    "$Nullable": true,
    "$Type": "self.Dimensions"
  },
  "ShippingDimensions": {
    "$Nullable": true,
    "$Type": "self.Dimensions"
  }
},
"ShipmentBox": {
  ...
  "Dimensions": {
    "$Nullable": true,
    "$Type": "self.Dimensions"
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:ComplexType`

The `edm:ComplexType` element MUST contain the `Name` attribute, and it
MAY contain the [`BaseType`](#DerivedComplexType),
[`Abstract`](#AbstractComplexType), and [`OpenType`](#OpenComplexType)
attributes.

It MAY contain [`edm:Property`](#StructuralProperty) and
[`edm:NavigationProperty`](#NavigationProperty) elements describing the
properties of the complex type.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the complex type's name.
:::

::: {.varxml .example}
Example ##ex: a complex type used by two entity types
```xml
<ComplexType Name="Dimensions">
  <Property Name="Height" Nullable="false" Type="Edm.Decimal" />
  <Property Name="Weight" Nullable="false" Type="Edm.Decimal" />
  <Property Name="Length" Nullable="false" Type="Edm.Decimal" />
</ComplexType>

<EntityType Name="Product">
  ...
  <Property Name="ProductDimensions" Type="self.Dimensions" />
  <Property Name="ShippingDimensions" Type="self.Dimensions" />
</EntityType>

<EntityType Name="ShipmentBox">
  ...
  <Property Name="Dimensions" Type="self.Dimensions" />
</EntityType>
```
:::

## ##subsec Derived Complex Type

A complex type can inherit from another complex type by specifying it as
its base type.

A complex type inherits the structural and navigation properties of its
base type.

A complex type MUST NOT introduce an inheritance cycle by specifying a
base type.

The rules for annotations of derived complex types are described in
[section ##Annotation].

::: {.varjson .rep}
### ##subisec `$BaseType`

The value of `$BaseType` is the qualified name of the base type.
:::

::: {.varxml .rep}
### ##subisec Attribute `BaseType`

The value of `BaseType` is the qualified name of the base type.
:::

## ##subsec Abstract Complex Type

A complex type MAY indicate that it is abstract and cannot have
instances.

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

## ##subsec Open Complex Type

A complex type MAY indicate that it is open and allows clients to add
properties dynamically to instances of the type by specifying uniquely
named property values in the payload used to insert or update an
instance of the type.

A complex type derived from an open complex type MUST indicate that it
is also open.

Note: structural and navigation properties MAY be returned by the
service on instances of any structured type, whether or not the type is
marked as open. Clients MUST always be prepared to deal with additional
properties on instances of any structured type, see
[OData‑Protocol](#ODataProtocol).

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

-------

# ##sec Enumeration Type

Enumeration types are [nominal](#NominalTypes) types that represent a
non-empty series of related values. Enumeration types expose these
related values as members of the enumeration.

The enumeration type's name is a [simple identifier](#SimpleIdentifier)
that MUST be unique within its schema.

Although enumeration types have an underlying numeric value, the
preferred representation for an enumeration value is the member name.
Discrete sets of numeric values should be represented as numeric values
annotated with the `AllowedValues` annotation defined in
[OData-VocCore](#ODataVocCore).

Enumeration types marked as flags allow values that consist of more than
one enumeration member at a time.

::: {.varjson .rep}
### ##isec Enumeration Type Object

An enumeration type is represented as a member of the schema object
whose name is the unqualified name of the enumeration type and whose
value is an object.

The enumeration type object MUST contain the member `$Kind` with a
string value of `EnumType`.

It MAY contain the members [`$UnderlyingType`](#UnderlyingIntegerType)
and [`$IsFlags`](#FlagsEnumerationType).

The enumeration type object MUST contain members representing [the
enumeration type members](#EnumerationTypeMember).

The enumeration type object MAY contain [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex: a simple flags-enabled enumeration
```json
"FileAccess": {
  "$Kind": "EnumType",
  "$UnderlyingType": "Edm.Int32",
  "$IsFlags": true,
  "Read": 1,
  "Write": 2,
  "Create": 4,
  "Delete": 8
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:EnumType`

The `edm:EnumType` element MUST contain the Name attribute, and it MAY
contain the [`UnderlyingType`](#UnderlyingIntegerType) and
[`IsFlags`](#FlagsEnumerationType) attributes.

It MUST contain one or more [`edm:Member`](#EnumerationTypeMember)
elements defining the members of the enumeration type.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the enumeration type's name.
:::

::: {.varxml .example}
Example ##ex: a simple flags-enabled enumeration
```xml
<EnumType Name="FileAccess" UnderlyingType="Edm.Int32" IsFlags="true">
  <Member Name="Read"   Value="1" />
  <Member Name="Write"  Value="2" />
  <Member Name="Create" Value="4" />
  <Member Name="Delete" Value="8" />
</EnumType>
```
:::

## ##subsec Underlying Integer Type

An enumeration type MAY specify one of `Edm.Byte`, `Edm.SByte`,
`Edm.Int16`, `Edm.Int32`, or `Edm.Int64` as its underlying type.

If not explicitly specified, `Edm.Int32` is used as the underlying type.

::: {.varjson .rep}
### ##subisec `$UnderlyingType`

The value of `$UnderlyingType` is the qualified name of the underlying
type.
:::

::: {.varxml .rep}
### ##subisec Attribute `UnderlyingType`

The value of `UnderlyingType` is the qualified name of the underlying
type.
:::

## ##subsec Flags Enumeration Type

An enumeration type MAY indicate that the enumeration type allows
multiple members to be selected simultaneously.

If not explicitly specified, only one enumeration type member MAY be
selected simultaneously.

::: {.varjson .rep}
### ##subisec `$IsFlags`

The value of `$IsFlags` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.
:::

::: {.varjson .example}
Example ##ex: pattern values can be combined, and some combined values
have explicit names
```json
"Pattern": {
  "$Kind": "EnumType",
  "$UnderlyingType": "Edm.Int32",
  "$IsFlags": true,
  "Plain": 0,
  "Red": 1,
  "Blue": 2,
  "Yellow": 4,
  "Solid": 8,
  "Striped": 16,
  "SolidRed": 9,
  "SolidBlue": 10,
  "SolidYellow": 12,
  "RedBlueStriped": 19,
  "RedYellowStriped": 21,
  "BlueYellowStriped": 22
}
```
:::

::: {.varxml .rep}
### ##subisec Attribute `IsFlags`

The value of `IsFlags` is one of the Boolean literals `true` or `false`.
Absence of the attribute means `false`.
:::

::: {.varxml .example}
Example ##ex: pattern values can be combined, and some combined values
have explicit names
```xml
<EnumType Name="Pattern" UnderlyingType="Edm.Int32" IsFlags="true">
  <Member Name="Plain"             Value="0" />
  <Member Name="Red"               Value="1" />
  <Member Name="Blue"              Value="2" />
  <Member Name="Yellow"            Value="4" />
  <Member Name="Solid"             Value="8" />
  <Member Name="Striped"           Value="16" />
  <Member Name="SolidRed"          Value="9" />
  <Member Name="SolidBlue"         Value="10" />
  <Member Name="SolidYellow"       Value="12" />
  <Member Name="RedBlueStriped"    Value="19" />
  <Member Name="RedYellowStriped"  Value="21" />
  <Member Name="BlueYellowStriped" Value="22" />
</EnumType>
```
:::

## ##subsec Enumeration Type Member

Enumeration type values consist of discrete members.

Each member is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within the
enumeration type. Names are case-sensitive, but service authors SHOULD
NOT choose names that differ only in case.

Each member MUST specify an associated numeric value that MUST be a
valid value for the underlying type of the enumeration type.

Enumeration types can have multiple members with the same value. Members
with the same numeric value compare as equal, and members with the same
numeric value can be used interchangeably.

Enumeration members are sorted by their numeric value.

For flag enumeration types the combined numeric value of simultaneously
selected members is the bitwise OR of the discrete numeric member
values.

::: {.varjson .rep}
### ##isec Enumeration Member Object

Enumeration type members are represented as JSON object members, where
the object member name is the enumeration member name and the object
member value is the enumeration member value.

For members of [flags enumeration types](#FlagsEnumerationType) a
combined enumeration member value is equivalent to the bitwise OR of the
discrete values.

Annotations for enumeration members are prefixed with the enumeration
member name.
:::

::: {.varjson .example}
Example ##ex: `FirstClass` has a value of 0, `TwoDay` a value of 1, and
`Overnight` a value of 2.
```json
"ShippingMethod": {
  "$Kind": "EnumType",
  "FirstClass": 0,
  "FirstClass@Core.Description": "Shipped with highest priority",
  "TwoDay": 1,
  "TwoDay@Core.Description": "Shipped within two days",
  "Overnight": 2,
  "Overnight@Core.Description": "Shipped overnight",
  "@Core.Description": "Method of shipping"
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:Member`

The `edm:Member` element MUST contain the `Name` attribute and it MAY
contain the `Value` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the enumeration member's name.

### ##subisec Attribute `Value`

If the [`IsFlags`](#FlagsEnumerationType) attribute has a value of
`false`, either all members MUST specify an integer value for the
`Value` attribute, or all members MUST NOT specify a value for the
`Value` attribute. If no values are specified, the members are assigned
consecutive integer values in the order of their appearance, starting
with zero for the first member. Client libraries MUST preserve elements
in document order.

If the [`IsFlags`](#FlagsEnumerationType) attribute has a value of
`true`, a non-negative integer value MUST be specified for the `Value`
attribute. A combined value is equivalent to the bitwise OR of the
discrete values.
:::

::: {.varxml .example}
Example ##ex: `FirstClass` has a value of `0`, `TwoDay` a value of 1, and
`Overnight` a value of 2.
```xml
<EnumType Name="ShippingMethod">
  <Member Name="FirstClass">
    <Annotation Term="Core.Description"
                String="Shipped with highest priority" />
  </Member>
  <Member Name="TwoDay">
    <Annotation Term="Core.Description"
                String="Shipped within two days" />
  </Member>
  <Member Name="Overnight">
    <Annotation Term="Core.Description"
                String="Shipped overnight" />
  </Member>
</EnumType>
```
:::

-------

# ##sec Type Definition

A type definition defines a specialization of one of the [primitive
types](#PrimitiveTypes) or of the built-in abstract type
[`Edm.PrimitiveType`](#BuiltInAbstractTypes).

The type definition's name is a [simple identifier](#SimpleIdentifier)
that MUST be unique within its schema.

Type definitions can be used wherever a primitive type is used (other
than as the underlying type in a new type definition) and are
type-comparable with their underlying types and any type definitions
defined using the same underlying type.

It is up to the definition of a term to specify whether and how
annotations with this term propagate to places where the annotated type
definition is used, and whether they can be overridden.

::: {.varjson .rep}
### ##isec Type Definition Object

A type definition is represented as a member of the schema object whose
name is the unqualified name of the type definition and whose value is
an object.

The type definition object MUST contain the member `$Kind` with a string
value of `TypeDefinition` and the member
[`$UnderlyingType`](#UnderlyingPrimitiveType). It MAY contain the
members [`$MaxLength`](#MaxLength), [`$Unicode`](#Unicode),
[`$Precision`](#Precision), [`$Scale`](#Scale), and [`$SRID`](#SRID),
and it MAY contain [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex:
```json
"Length": {
  "$Kind": "TypeDefinition",
  "$UnderlyingType": "Edm.Int32",
  "@Measures.Unit": "Centimeters"
},
"Weight": {
  "$Kind": "TypeDefinition",
  "$UnderlyingType": "Edm.Int32",
  "@Measures.Unit": "Kilograms"
},
"Size": {
  "$Kind": "ComplexType",
  "Height": {
    "$Nullable": true,
    "$Type": "self.Length"
  },
  "Weight": {
    "$Nullable": true,
    "$Type": "self.Weight"
  }
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:TypeDefinition`

The `edm:TypeDefinition` element MUST contain the `Name` and
[`UnderlyingType`](#UnderlyingPrimitiveType) attributes.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the type definition's name.
:::

::: {.varxml .example}
Example ##ex:
```xml
<TypeDefinition Name="Length" UnderlyingType="Edm.Int32">
  <Annotation Term="Org.OData.Measures.V1.Unit"
              String="Centimeters" />
</TypeDefinition>

<TypeDefinition Name="Weight" UnderlyingType="Edm.Int32">
  <Annotation Term="Org.OData.Measures.V1.Unit"
              String="Kilograms" />
</TypeDefinition>

<ComplexType Name="Size">
  <Property Name="Height" Type="self.Length" />
  <Property Name="Weight" Type="self.Weight" />
</ComplexType>
```
:::

## ##subsec Underlying Primitive Type

The underlying type of a type definition MUST be a primitive type that
MUST NOT be another type definition.

::: {.varjson .rep}
### ##subisec `$UnderlyingType`

The value of `$UnderlyingType` is the qualified name of the underlying
type.
:::

: varjson
The type definition MAY specify facets applicable to the underlying
type. Possible facets are: [`$MaxLength`](#MaxLength),
[`$Unicode`](#Unicode), [`$Precision`](#Precision),
[`$Scale`](#Scale), or [`$SRID`](#SRID).
:

::: {.varxml .rep}
### ##subisec Attribute `UnderlyingType`

The value of `UnderlyingType` is the qualified name of the underlying
type.
:::

: varxml
The type definition MAY specify facets applicable to the underlying
type. Possible facets are: [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale), or
[`SRID`](#SRID).
:

Additional facets appropriate for the underlying type MAY be specified
when the type definition is used but the facets specified in the type
definition MUST NOT be re-specified.

For a type definition with underlying type
[`Edm.PrimitiveType`](#BuiltInAbstractTypes) no facets are applicable,
neither in the definition itself nor when the type definition is used,
and these should be ignored by the client.

Where type definitions are used, the type definition is returned in
place of the primitive type wherever the type is specified in a
response.
