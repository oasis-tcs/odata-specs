-------

# ##sec Structural Property

A property within an entity or complex type instance is represented as a
name/value pair. The name MUST be the name of the property; the value is
represented depending on its type as a [primitive value](#PrimitiveValue), 
a [complex value](#ComplexValue), a
[collection of primitive values](#CollectionofPrimitiveValues), or
a [collection of complex values](#CollectionofComplexValues).

## ##subsec Primitive Value

Primitive values are represented following the rules of
[RFC8259](#rfc8259).

Null values are represented as the JSON literal `null`.

Values of type `Edm.Boolean` are represented as the JSON
literals `true` and `false`

Values of types `Edm.Byte`, `Edm.SByte`,
`Edm.Int16`, `Edm.Int32`, `Edm.Int64`,
`Edm.Single`, `Edm.Double`, and
`Edm.Decimal` are represented as JSON numbers, except for
`-INF`, `INF`, and `NaN` which are
represented as strings.

Values of type `Edm.String` are represented as JSON strings,
using the JSON string escaping rules.

Values of type `Edm.Binary`, `Edm.Date`,
`Edm.DateTimeOffset`, `Edm.Duration`, 
`Edm.Guid`, and `Edm.TimeOfDay` are represented as
JSON strings whose content satisfies the rules `binaryValue`,
`dateValue`, `dateTimeOffsetValue`,
`durationValue`, `guidValue`, and
`timeOfDayValue` respectively, in
[OData-ABNF](#ODataABNF).

Primitive values that cannot be represented, for example due to server
conversion issues or IEEE754 limitations on the size of an `Edm.Int64` or `Edm.Decimal` value, are
annotated with the `Core.ValueException` term. In this case,
the payload MAY include an approximation of the value and MAY specify a
string representation of the exact value in the `value`
property of the annotation.

Enumeration values are represented as JSON strings whose content
satisfies the rule `enumValue` in
[OData-ABNF](#ODataABNF). The preferred representation is the
`enumerationMember`. If no `enumerationMember` (or
combination of named enumeration members) is
available, the `enumMemberValue` representation may be used.

Geography and geometry values are represented as geometry types as
defined in [RFC7946](#rfc7946), with the following
modifications:

- Keys SHOULD be ordered with type first, then coordinates, then any other keys
- If the optional [CRS
  object](http://geojson.org/geojson-spec.html#named-crs) is present, it
  MUST be of type `name`, where the value of the
  `name` member of the contained `properties` object
  is an EPSG SRID legacy identifier, see [[GeoJSON-2008](#GeoJSON-2008)].

Geography and geometry types have the same representation in a JSON
payload. Whether the value represents a geography type or geometry type
is inferred from its usage or specified using the
[`type`](#ControlInformationtypeodatatype)
control information.
 
::: example
Example ##ex:
```json
{
  "NullValue": null,
  "TrueValue": true,
  "FalseValue": false,
  "BinaryValue": "T0RhdGE",
  "IntegerValue": -128,
  "DoubleValue": 3.1415926535897931,
  "SingleValue": "INF",
  "DecimalValue": 34.95,
  "StringValue": "Say \"Hello\",\nthen go",
  "DateValue": "2012-12-03",
  "DateTimeOffsetValue": "2012-12-03T07:16:23Z",
  "DurationValue": "P12DT23H59M59.999999999999S",
  "TimeOfDayValue": "07:59:59.999",
  "GuidValue": "01234567-89ab-cdef-0123-456789abcdef",
  "Int64Value": 0,
  "ColorEnumValue": "Yellow",
  "GeographyPoint": {"type": "Point", "coordinates": [142.1,64.1]}
}
```
:::

## ##subsec Complex Value

A complex value is represented as a single JSON object containing one
name/value pair for each property that makes up the complex type. Each
property value is formatted as appropriate for the type of the property.

It MAY have name/value pairs for [instance annotations](#InstanceAnnotations) and control information.
 
::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  ...
  "Address": {
    "Street": "Obere Str. 57",
    "City": "Berlin",
    "Region": null,
    "PostalCode": "D-12209"
  }
}
```
:::

A complex value with no selected properties, or no defined properties
(such as an empty open complex type or complex type with no structural
properties) is represented as an empty JSON object.

## ##subsec Collection of Primitive Values

A collection of primitive values is represented as a JSON array; each
element in the array is the representation of a [primitive
value](#PrimitiveValue). A JSON literal `null` represents
a null value within the collection. An empty collection is represented
as an empty array.
 
::: example
Example ##ex: partial collection of strings with next link
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  ...
  "EmailAddresses": [
    "Julie@Swansworth.com",
    "Julie.Swansworth@work.com"
  ],
  "EmailAddresses@nextLink": "..."
}
```

## ##subsec Collection of Complex Values

A collection of complex values is represented as a JSON array; each
element in the array is the representation of a [complex value](#ComplexValue). A JSON literal `null` represents a
null value within the collection. An empty collection is represented as an empty array.
 
::: example
Example ##ex: partial collection of complex values with next link
```json
{
  "PhoneNumbers": [
    {
      "Number": "425-555-1212",
      "Type": "Home"
    },
    {
      "@type": "#Model.CellPhoneNumber",
      "Number": "425-555-0178",
      "Type": "Cell",
      "Carrier": "Sprint"
    }
  ],
  "PhoneNumbers@nextLink": "..."
}
```

## ##subsec Untyped Value

OData 4.01 adds the built-in abstract types `Edm.Untyped` and
`Collection(Edm.Untyped)`that services can use to advertise
in metadata that there is a property of a particular name present, but
there is no type to describe the structure of the property's values.

The value of an `Edm.Untyped` property MAY be a primitive
value, a structural value, or a collection. If a collection, it may
contain any combination of primitive values, structural values, and
collections.

The value of a property of type `Collection(Edm.Untyped)`MUST
be a collection, and it MAY contain any combination of primitive values,
structural values, and collections.

Untyped values are the only place where a collection can directly
contain a collection, or a collection can contain a mix of primitive
values, structural values, and collections.

All children of an untyped property are assumed to be untyped unless
they are annotated with the
[`type`](#ControlInformationtypeodatatype)
control information, in which case they MUST conform to the type
described by the control information.
