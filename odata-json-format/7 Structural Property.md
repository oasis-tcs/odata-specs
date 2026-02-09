
-------

# ##sec Structural Property

A property within an entity or complex type instance is represented as a
name/value pair. The name MUST be the name of the property; a non-null value is
represented depending on its type as a [primitive value](#PrimitiveValue),
a [complex value](#ComplexValue), a
[collection of primitive values](#CollectionofPrimitiveValues), or
a [collection of complex values](#CollectionofComplexValues).

Null values are represented as the JSON literal `null`.

## ##subsec Primitive Value

Primitive values are represented following the rules of
[RFC8259](#rfc8259).

Values of type `Edm.Boolean` are represented as the JSON
literals `true` and `false`

Values of types `Edm.Byte`, `Edm.SByte`,
`Edm.Int16`, `Edm.Int32`, `Edm.Int64`,
`Edm.Single`, `Edm.Double`, and
`Edm.Decimal` are represented as JSON numbers, except for
`-INF`, `INF`, and `NaN` which are
represented as strings, and except when the [`IEEE754Compatible`](#ControllingtheRepresentationofNumbers)
format parameter demands representation of `Edm.Int64` and `Edm.Decimal`
as strings.

Values of type `Edm.String` are represented as JSON strings,
using the JSON string escaping rules.

Values of type `Edm.Binary`, `Edm.Date`,
`Edm.DateTimeOffset`, `Edm.Duration`,
`Edm.Guid`, and `Edm.TimeOfDay` are represented as
JSON strings whose content satisfies the rules [binaryValue]{.abnf},
[dateValue]{.abnf}, [dateTimeOffsetValue]{.abnf},
[durationValue]{.abnf}, [guidValue]{.abnf}, and
[timeOfDayValue]{.abnf} respectively, in
[OData-ABNF](#ODataABNF). The interpretation of a `timeOfDayValue` in which the `second` is omitted
is not defined by this specification. For maximum interoperability, senders
SHOULD always include the `second`.

Primitive values that cannot be represented, for example due to server
conversion issues or IEEE754 limitations on the size of an `Edm.Int64` or `Edm.Decimal` value, are
annotated with the `Core.ValueException` term. In this case,
the payload MAY include an approximation of the value and MAY specify a
string representation of the exact value in the `value`
property of the annotation.

Enumeration values are represented as JSON strings whose content
satisfies the rule [enumValue]{.abnf} in
[OData-ABNF](#ODataABNF). The preferred representation is the
[enumerationMember]{.abnf}. If no `enumerationMember` (or
combination of named enumeration members) is
available, the [enumMemberValue]{.abnf} representation may be used.

Geography and geometry values are represented as geometry types as
defined in [RFC7946](#rfc7946).

Geography and geometry types have the same representation in a JSON
payload. Whether the value represents a geography type or geometry type
is inferred from its usage or specified using the
[`type`](#ControlInformationtypeodatatype)
control information.
[RFC7946](#rfc7946) does not define means for expressing instance-specific
[Coordinate Reference Systems](https://datatracker.ietf.org/doc/html/rfc7946#section-4).

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
  "GeographyPoint": { "type": "Point", "coordinates": [142.1,64.1] }
}
```
:::

## ##subsec Complex Value

A complex value is represented as a single JSON object containing one
name/value pair for each [structural property](#StructuralProperty) or [navigation property](#NavigationProperty) that makes up the complex type. Each
property value is formatted as appropriate for the type of the property.

It MAY have name/value pairs for [instance annotations](#InstanceAnnotations) and control information.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  …
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
  …
  "EmailAddresses": [
    "Julie@Swansworth.com",
    "Julie.Swansworth@work.com"
  ],
  "EmailAddresses@nextLink": "…"
}
```
:::

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
  "PhoneNumbers@nextLink": "…"
}
```
:::

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
structural values, and collections. Enumeration values within an untyped 
collection SHOULD be represented as a string, using the `enumerationMember`.

Untyped values are the only place where a collection can directly
contain a collection, or a collection can contain a mix of primitive
values, structural values, and collections.

All children of an untyped property are assumed to be untyped unless
they are annotated with the
[`type`](#ControlInformationtypeodatatype)
control information, in which case they MUST conform to the type
described by the control information.

A primitive value within an untyped collection is interpreted as 
an `Edm.Boolean`, `Edm.String`, or `Edm.Decimal` value,
depending on the JavaScript type.

Collections directly contained within an untyped collection are themselves untyped.

-------

# ##sec Navigation Property

A navigation property is a reference from a source entity to zero or
more related entities.

## ##subsec Navigation Link

The navigation link for a navigation property is represented as a
[`navigationLink`](#ControlInformationnavigationLinkandassociationLinkodatanavigationLinkandodataassociationLink)
control information on the navigation property. Its value is an absolute
or [relative URL](#RelativeURLs) that allows retrieving the related
entity or collection of entities.

The navigation link for a navigation property is only represented if the
client requests `metadata=full` or the navigation link cannot
be computed, e.g. if it is within a collection of complex type
instances. If it is represented it MUST immediately precede the expanded
navigation property if the latter is represented.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  …
  "Orders@navigationLink": "Customers('ALFKI')/Orders",
  …
}
```
:::

## ##subsec Association Link

The association link for a navigation property is represented as an
[`associationLink`](#ControlInformationnavigationLinkandassociationLinkodatanavigationLinkandodataassociationLink)
control information on the navigation property. Its value is an absolute
or [relative URL](#RelativeURLs) that can be used to retrieve the
reference or collection of references to the related entity or entities.

The association link for a navigation property is only represented if
the client requests `metadata=full` or the association link
cannot be computed by appending `/$ref` to the navigation
link. If it is represented, it MUST immediately precede the navigation
link if the latter is represented, otherwise it MUST immediately precede
the expanded navigation property if it is represented.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  …
  "Orders@associationLink": "Customers('ALFKI')/Orders/$ref",
  …
}
```
:::

## ##subsec Expanded Navigation Property

An expanded navigation property is represented as a name/value pair
where the name is the name of the navigation property, and the value is
the representation of the related entity or collection of entities.

If at most one entity can be related, the value is the representation of
the related entity, or `null` if no entity is currently
related.

If a collection of entities can be related, it is represented as a JSON
array. Each element is the [representation of an entity](#Entity) or
the [representation of an entity reference](#EntityReference). An
empty collection of entities (one that contains no entities) is
represented as an empty JSON array. The navigation property MAY include
[`context`](#ControlInformationcontextodatacontext),
[`type`](#ControlInformationtypeodatatype),
[`count`](#ControlInformationcountodatacount), or
[`nextLink`](#ControlInformationnextLinkodatanextLink) control information. If a navigation property is
expanded with the suffix `/$count`, only the
[`count`](#ControlInformationcountodatacount) control information is represented.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  "Orders@count": 42,
  "Orders": [ … ],
  "Orders@nextLink": "…",
  …
}
```
:::

## ##subsec Deep Insert

When inserting a new entity with a `POST` request, related
new entities MAY be specified using the same representation as for an
[expanded navigation property](#ExpandedNavigationProperty).

Deep inserts are not allowed in update operations using `PUT`
or `PATCH` requests.

::: example
Example ##ex: inserting a new order for a new customer with order items
related to existing products:
```json
{
  "ID": 11643,
  "Amount": 100,
  …,
  "Customer": {
    "ID": "ANEWONE",
    …
  },
  "Items": [
    {
      "Product": { "@id": "Products(28)" },
      "Quantity": 1,
      …
    },
    {
      "Product": { "@id": "Products(39)" },
      "Quantity": 5,
      …
    }
  ]
}
```
:::

## ##subsec Bind Operation

When inserting or updating an entity, relationships of navigation
properties MAY be inserted or updated via bind operations.

For requests containing an `OData-Version` header with a value
of `4.0`, a bind operation
is encoded as a property control information `odata.bind` on
the navigation property it belongs to and has a single value for
single-valued navigation properties or an array of values for collection
navigation properties. For nullable single-valued navigation properties
the value `null` may be used to remove the relationship.

::: example
Example ##ex: assign an existing product to an existing category with a
partial update request against the product
```json
PATCH http://host/service/Products(42) HTTP/1.1
Content-Type: application/json

{
  "Category@odata.bind": "Categories(6)"
}
```
:::

The values are the [ids](#ControlInformationidodataid) of the
related entities. They MAY be absolute or [relative URLs](#RelativeURLs).

For requests containing an `OData-Version` header with a value
of `4.01`, a relationship is bound to an existing entity
using the same representation as for an [expanded entity
reference](#EntityReference).

::: example
Example ##ex: assign an existing product to an existing category with a
partial update request against the product
```json
PATCH http://host/service/Products(42) HTTP/1.1
Content-Type: application/json

{
  "Category": { "@id": "Categories(6)" }
}
```
:::

::: example
Example ##ex_deepupdate: submit a partial update request to:
- modify the name of an existing category
- assign an existing product with the id 42 to the category
- assign an existing product 57 to the category and update its name
- create a new product named `Wedges` and assign it to the category

At the end of the request, the updated category contains exactly the
three specified products.
```json
PATCH http://host/service/Categories(6) HTTP/1.1
Content-Type: application/json

{
  "Name": "UpdatedCategory",
  "Products": [
    {
      "@id": "Products(42)"
    },
    {
      "@id": "Products(57)",
      "Name": "Widgets"
    },
    {
      "Name": "Wedges"
    }
  ]
}
```
:::

OData 4.01 services MUST support both the OData 4.0 representation, for
requests containing an `OData-Version` header with a value of
`4.0`, and the OData 4.01 representation, for requests
containing an `OData-Version` header with a value of `4.01`.
Clients MUST NOT use `@odata.bind` in requests with an
`OData-Version` header with a value of `4.01`.

For insert operations collection navigation property bind operations and
deep insert operations can be combined. For OData 4.0 requests, the bind
operations MUST appear before the deep insert operations in the payload.

For update operations a bind operation on a collection navigation
property adds additional relationships, it does not replace existing
relationships, while bind operations on an entity navigation property
update the relationship.

## ##subsec Collection ETag

The ETag for a collection of related entities is represented as
[`etag`](#ControlInformationetagodataetag) control
information on the navigation property. Its value is an opaque string
that can be used in a subsequent request to determine if the collection
has changed.

Services MAY include this control information as appropriate.

::: example
Example ##ex: ETag for a collection of related entities
```json
{
  "@context": "http://host/service/$metadata#Orders/$entity",
  "@id": "Orders(1234)",
  "@etag": "W/\"MjAxMy0wNS0yN1QxMTo1OFo=\"",
  "ID": 1234,
  "Items@etag": "W/\"MjAxOS0wMy0xMlQxMDoyMlo=\""
  …
}
```
:::

Note: the collection ETag for a navigation property may or may not be
identical to the ETag of the containing entity, the example shows a
different ETag for the `Items` collection.

-------

# ##sec Stream Property

An entity or complex type instance can have one or more stream properties.

The actual stream data is not usually contained in the representation.
Instead stream property data is generally read and edited via URLs.
- Stream properties requested with `$select` or included in the default selection are represented by
[`media*`](#ControlInformationmediaodatamedia) control information.
- Stream properties requested with `$expand` or implicitly expanded are represented as a property with its value.

See [#OData-Protocol#SystemQueryOptionselect] for details on the system query options `$select` and `$expand`.

Depending on the [metadata level](#ControllingtheAmountofControlInformationinResponses),
the stream property MAY be annotated to provide the read link, edit
link, media type, and ETag of the media stream through their `media*` control information.

If the actual stream data is included inline, the control information
[`mediaContentType`](#ControlInformationmediaodatamedia)
MUST be present to indicate how the included stream property value is
represented. Stream property values of media type `application/json` or
one of its subtypes, optionally with format parameters, are represented
as native JSON. Values of top-level type `text` with an explicit or
default `charset` of `utf-8` or `us-ascii`, for example
`text/plain`, are represented as a string, with JSON string
escaping rules applied. Included stream data of other media types is
represented as a base64url-encoded string value, see
[RFC4648](#rfc4648), section 5.

If the included stream property has no value, the non-existing stream
data is represented as `null` and the control information
[`mediaContentType`](#ControlInformationmediaodatamedia)
is not necessary.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Products/$entity",
  …
  "Thumbnail@mediaReadLink": "http://server/Thumbnail546.jpg",
  "Thumbnail@mediaEditLink": "http://server/uploads/Thumbnail546.jpg",
  "Thumbnail@mediaContentType": "image/jpeg",
  "Thumbnail@mediaEtag": "W/\"####\"",
  "Thumbnail": "…base64url encoded value…",
  …
}
```
:::
