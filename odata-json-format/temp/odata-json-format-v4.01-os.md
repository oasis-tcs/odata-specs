# {#sec_StructuralProperty}{#\_Structural_Property}7[     ]{style="font:7.0pt "Times New Roman""}[Structural Property](#StructuralProperty) {#structural-property style="margin-left:19.85pt;text-indent:-19.85pt"}

A property within an entity or complex type instance is represented as a
name/value pair. The name MUST be the name of the property; the value is
represented depending on its type as a [primitive
value](#PrimitiveValue), a [complex value](#ComplexValue), a
[collection of primitive values](#CollectionofPrimitiveValues), or
a[ ]{.MsoHyperlink}[collection of complex
values](#CollectionofComplexValues)[.]{.MsoHyperlink}

## {#sec_PrimitiveValue}{#\_Ref356829873}{#\_Primitive_Value}7.1 [Primitive Value](#PrimitiveValue)

Primitive values are represented following the rules of
[RFC8259](#rfc_JSON).

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
`Edm.DateTimeOffset`[[,
]{style="font-family:"Arial",sans-serif"}]{.Datatype}`Edm.Duration`, 
`Edm.Guid`, and `Edm.TimeOfDay` are represented as
JSON strings whose content satisfies the rules `binaryValue`,
`dateValue`, `dateTimeOffsetValue`,
`durationValue`, `guidValue`, and
`timeOfDayValue` respectively, in
[OData-ABNF](#abnf).

Primitive values that cannot be represented, for example due to server
conversion issues or IEEE754 limitations on the size of an [Edm.Int64
]{.Datatype}or `Edm.Decimal`[[
]{style="font-family:"Arial",sans-serif"}]{.Datatype}value, are
annotated with the `Core.ValueException` term. In this case,
the payload MAY include an approximation of the value and MAY specify a
string representation of the exact value in the `value`
property of the annotation.

Enumeration values are represented as JSON strings whose content
satisfies the rule `enumValue` in
[OData-ABNF](#abnf). The preferred representation is the
`enumerationMember`. If no `enumerationMember` (or
combination of [[named enumeration
members]{style="font-family:"Arial",sans-serif"}]{.Datatype}) is
available, the `enumMemberValue` representation may be used.

Geography and geometry values are represented as geometry types as
defined in [RFC7946](#rfc7946), with the following
modifications:

- Keys
  SHOULD be ordered with type first, then coordinates, then any other keys

- If
  the optional [CRS
  object](http://geojson.org/geojson-spec.html#named-crs) is present, it
  MUST be of type `name`, where the value of the
  `name` member of the contained `properties` object
  is an EPSG SRID legacy identifier, see GeoJSON-2008.

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
[[ 
"SingleValue]{style="color:black"}]{.string}["]{style="color:black"}[[:
"INF",]{style="color:black"}]{.string}

[[  "DecimalValue"]{style="color:black"}]{.string}[:
]{style="color:black"}[[34.95,]{style="color:black"}]{.string}

  "StringValue": ]{style="color:black"}[["Say \\"Hello\\",\\nthen
go",]{style="color:black"}]{.string}

[[  "DateValue"]{style="color:black"}]{.string}[:
]{style="color:black"}[["2012-12-03",]{style="color:black"}]{.string}

[[  "DateTimeOffsetValue"]{style="color:black"}]{.string}[:
]{style="color:black"}[["2012-12-03T07:16:23Z",]{style="color:black"}]{.string}

[[  "DurationValue"]{style="color:black"}]{.string}[:
]{style="color:black"}[["P12DT23H59M59.999999999999S",]{style="color:black"}]{.string}

[[  "TimeOfDayValue"]{style="color:black"}]{.string}[:
]{style="color:black"}[["07:59:59.999",]{style="color:black"}]{.string}

[[  "GuidValue"]{style="color:black"}]{.string}[:
]{style="color:black"}[["01234567-89ab-cdef-0123-456789abcdef",]{style="color:black"}]{.string}

[[  "Int64Value"]{style="color:black"}]{.string}[:
]{style="color:black"}[[0,]{style="color:black"}]{.string}

  "ColorEnumValue": "Yellow",
[[  "GeographyPoint": {"type":
"Point","coordinates":\[142.1,64.1\]}
]{style="color:black"}]{.string}

}
```

## {#sec_ComplexValue}{#ComplexValue}{#\_Ref332033656}{#\_Ref332032621}{#\_Representing_a_Complex}{#\_Complex_Value}7.2 [Complex Value](#ComplexValue)

A complex value is represented as a single JSON object containing one
name/value pair for each property that makes up the complex type. Each
property value is formatted as appropriate for the type of the property.

It MAY have name/value pairs for [instance
annotations](#InstanceAnnotations) and control information.
 
::: example
Example ##ex:
````json
{
  "@context":
"http://host/service/$metadata#Customers/$entity",
  ...
  "Address": {
  "Street": "Obere Str. 57",
  "City": "Berlin",
  "Region": null,
  "PostalCode": "D-12209"
  }
[}{#\_Representing_an_Individual}:::

{#\_Representing_a_Collection}{#\_Collection_of_Primitive}A
complex value with no selected properties, or no defined properties
(such as an empty open complex type or complex type with no structural
properties) is represented as an empty JSON object.

## {#sec_CollectionofPrimitiveValues}[7.3]{#CollectionOfPrimitive} [Collection of Primitive Values](#CollectionofPrimitiveValues)

A collection of primitive values is represented as a JSON array; each
element in the array is the representation of a [primitive
value](#PrimitiveValue). A JSON literal `null` represents
a null value within the collection. An empty collection is represented
as an empty array.
 
::: example
Example ##ex: partial collection of strings with next link
```json
{
  "@context":
"http://host/service/$metadata#Customers/$entity",
  ...
  "EmailAddresses": \[
  "Julie@Swansworth.com",
  "Julie.Swansworth@work.com"
  \],
  "EmailAddresses@nextLink": "..."
}
````

## {#sec_CollectionofComplexValues}{#\_Collection_of_Complex}7.4 [Collection of Complex Values](#CollectionofComplexValues)

A collection of complex values is represented as a JSON array; each
element in the array is the representation of a [complex
value](#ComplexValue). A JSON literal `null` represents a
null value within the collection. An empty collection is represented as
an empty array.
 
::: example
Example ##ex: partial collection of complex values with next link
```json
{
  "PhoneNumbers": \{style="color:black"}

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
  \],
  "PhoneNumbers@nextLink": "..."
}
```

## {#sec_UntypedValue}{#\_Navigation_Property}7.5 [Untyped Value](#UntypedValue)

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

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_NavigationProperty}[8[     ]{style="font:7.0pt "Times New Roman""}][Navigation Property](#NavigationProperty) {#navigation-property style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

A navigation property is a reference from a source entity to zero or
more related entities.

## {#sec_NavigationLink}{#\_Representing_a_Deferred}8.1 [Navigation Link](#NavigationLink)

The navigation link for a navigation property is represented as a
[`navigationLink`](#ControlInformationnavigationLinkanda)
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
  "@context":
"http://host/service/$metadata#Customers/$entity",
  ...
  "Orders@navigationLink":
"Customers('ALFKI')/Orders",
  ...
}
```

## {#sec_AssociationLink}[8.2] [Association Link](#AssociationLink)

The association link for a navigation property is represented as an
[`associationLink`](#ControlInformationnavigationLinkanda)
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
  "@context":
"http://host/service/$metadata#Customers/$entity",
  ...
  "Orders@associationLink":
"Customers('ALFKI')/Orders/$ref",
  ...
}
```

## {#sec_ExpandedNavigationProperty}{#\_Expanded_Navigation_Property}8.3 [Expanded Navigation Property](#ExpandedNavigationProperty)

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
represented as an empty JSON array. The navigation property MAY be
include
[`context`](#ControlInformationcontextodatacontext),
[`type`](#ControlInformationtypeodatatype),
[`count`](#ControlInformationcountodatacount),[
]{.MsoHyperlink}or[
]{.MsoHyperlink}[`nextLink`](#ControlInformationnextLinkodatanextL)[
]{.MsoHyperlink}control information. If a navigation property is
expanded with the suffix `/$count`, only the
[`count`](#ControlInformationcountodatacount)[
]{.MsoHyperlink}control information is represented.
 
::: example
Example ##ex:
```json
{
  "@context":
"http://host/service/$metadata#Customers/$entity",
  ]{style="color:black"}[...]{lang="NL" style="color:black"}

  "Orders@count": 42,]{lang="NL" style="color:black"}

  "Orders": \[ ... \],]{lang="NL" style="color:black"}

  "Orders@nextLink": "...",]{lang="NL" style="color:black"}

  ]{lang="NL" style="color:black"}[...
}
```

## {#sec_DeepInsert}[8.4] [Deep Insert](#DeepInsert)

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
  ...,
  "Customer": {
  "ID": "ANEWONE",
  ...
  },
  "Items": \[
  {
    "Product": { "@id": "Products(28)" },
    "Quantity": 1,
     ...
  },
  {
    "Product": { "@id": "Products(39)" },
    "Quantity": 5,
    ...
  }
  \]
}
```

## {#sec_BindOperation}{#\_Bind_Operation}8.5 [Bind Operation](#BindOperation)

When inserting or updating an entity, relationships of navigation
properties MAY be inserted or updated via bind operations.

For requests containing an `OData-Version` header with a value
of `4.0`[[,
]{style="font-family:"Arial",sans-serif"}]{.Datatype}a bind operation
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
 

[{
  "Category@odata.bind": "Categories(6)"
}
```

The values are the [ids](#ControlInformationidodataid) of the
related entities. They MAY be absolute or [relative
URLs](#RelativeURLs).

For requests containing an `OData-Version` header with a value
of `4.01`, a relationship is bound to an existing entity
using the same representation as for an [expanded entity
reference](#EntityReference).
 
::: example
Example ##ex: assign an existing product to an existing category with a
partial update request against the product
```json
PATCH http://host/service/Products(42) HTTP/1.1
 

[{
  "Category": {"@id": "Categories(6)"}
}
```

 
 
::: example
Example ##ex: submit a partial update request to:

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}modify
the name of an existing category

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}assign
an existing product with the id 42 to the category

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}assign
an existing product 57 to the category and update its name

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}create
a new product named "Wedges" and assign it to the category

_[at the end of the request, the updated category contains exactly the
three specified products.]{style="font-size:9.0pt"}_
```json
PATCH http://host/service/Categories(6) HTTP/1.1
 

[{
  "Name": "UpdatedCategory",
  "Products": \[
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
  \]
}
```

OData 4.01 services MUST support both the OData 4.0 representation, for
requests containing an `OData-Version` header with a value of
`4.0`, and the OData 4.01 representation, for requests
containing an `OData-Version` header with a value of
`4.01`[[.]{style="font-family:"Arial",sans-serif"}]{.Datatype}
Clients MUST NOT use `\@odata.bind` in requests with an
`OData-Version` header with a value of
`4.01`[[.]{style="font-family:"Arial",sans-serif"}]{.Datatype}

For insert operations collection navigation property bind operations and
deep insert operations can be combined. For OData 4.0 requests, the bind
operations MUST appear before the deep insert operations in the payload.

For update operations a bind operation on a collection navigation
property adds additional relationships, it does not replace existing
relationships, while bind operations on an entity navigation property
update the relationship.

## {#sec_CollectionETag}[8.6] [Collection ETag](#CollectionETag)

The ETag for a collection of related entities is represented as
[[etag]{style="font-family:
"Courier New""}](#ControlInformationetagodataetag) control
information on the navigation property. Its value is an opaque string
that can be used in a subsequent request to determine if the collection
has changed.

Services MAY include this control information as appropriate.
 
::: example
Example ##ex: ETag for a collection of related entities
```json
{
  "@context":
"http://host/service/$metadata#Orders/$entity",
  "@id": "Orders(1234)",
  "@etag":
"W/\\"MjAxMy0wNS0yN1QxMTo1OFo=\\"",
  "ID": 1234,
  "Items@etag":
"W/\\"MjAxOS0wMy0xMlQxMDoyMlo=\\""
  ...
}
```

Note: the collection ETag for a navigation property may or may not be
identical to the ETag of the containing entity, the example shows a
different ETag for the `Items` collection.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_StreamProperty}{#\_Stream_Property}9[     ]{style="font:7.0pt "Times New Roman""}[Stream Property](#StreamProperty) {#stream-property style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

[An entity or complex type instance can have one or more stream
properties. ]{style="color:black;background:white"}

[The actual stream data is not usually contained in the representation.
Instead stream property data is generally read and edited via URLs.
]{style="color:black;background:white"}

Depending on the [[metadata
level]{style="background:white"}](#ControllingtheAmountofControlInforma)[,
the stream property MAY be annotated to provide the read link, edit
link, media type, and ETag of the media
stream]{style="color:black;background:white"} through a set of
[`media\*`](#ControlInformationmediaodatamedia)
control information.

[If the actual stream data is included inline, the control information
]{style="color:black;background:white"}[`mediaContentType`](#ControlInformationmediaodatamedia)[
MUST be present to indicate how the included stream property value is
represented. Stream property values of media type
]{style="color:black;background:white"}`application/json`[ or
one of its subtypes, optionally with format parameters, are represented
as native JSON. Values of ]{style="color:
black;background:white"}top-level type `text`, for example
`text/plain`, are represented as a string, with JSON string
escaping rules applied. [Included stream data of other media types is
represented as a base64url-encoded string value, see
**]{style="color:black;background:white"}\*\*RFC4648\]\*\*[,
section 5.]{style="color:black;background:white"}

If the included stream property has no value, the non-existing stream
data is represented as `null` and the control information
[`mediaContentType`](#ControlInformationmediaodatamedia)[[
is not necessary]{style="font-family:"Arial",sans-serif"}]{.Datatype}.
 
::: example
Example ##ex:
```json
{
  "@context":
"http://host/service/$metadata#Products/$entity",
  ...
  "Thumbnail@mediaReadLink":
"http://server/Thumbnail546.jpg",
  "Thumbnail@mediaEditLink":
"http://server/uploads/Thumbnail546.jpg",
  ]{style="color:black"}["Thumbnail@mediaContentType":
"image/jpeg",]{lang="DE" style="color:black"}

  "Thumbnail@mediaEtag": "W/\\"####\\"",]{lang="DE"
style="color:black"}

  ]{lang="DE" style="color:black"}["Thumbnail": "...base64url
encoded value...",
  ...
}
```
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_MediaEntity}{#\_Media_Entity}10[ ]{style="font:7.0pt "Times New Roman""}[Media Entity](#MediaEntity) {#media-entity style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

Media entities are entities that describe a media resource, for example
a photo. They are represented as entities that contain additional[
]{.MsoHyperlink}[`media\*`](#ControlInformationmediaodatamedia)
control information. 

[If the actual stream data for the media entity is included, it is
represented as property named
]{style="color:black;background:white"}`$value`[ whose
string value is the base64url-encoded value of the media stream, see
**]{style="color:black;
background:white"}**RFC4648\]**[,
section 5.]{style="color:black;
background:white"}
 
::: example
Example ##ex:
```json
{
  "@context":
"http://host/service/$metadata#Employees/$entity",
  "@mediaReadLink": "Employees(1)/$value",
  "@mediaContentType": "image/jpeg",
  "$value": "...base64url encoded
value...",
  "ID": 1,
  ...
}
```
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_IndividualPropertyorOperationRespons}{#\_Individual_Property_or}11[ ]{style="font:7.0pt "Times New Roman""}[Individual Property or Operation Response](#IndividualPropertyorOperationRespons) {#individual-property-or-operation-response style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

An individual property or operation response is represented as a JSON
object.

A single-valued property or operation response that has the
`null` value does not have a representation; see
[OData-Protocol](#ODataProtocol).

A property or operation response that is of a primitive type is
represented as an object with a single name/value pair, whose name is
`value` and whose value is a [primitive
value](#PrimitiveValue).

A property or operation response that is of complex type is represented
as a [complex value](#ComplexValue).

A property or operation response that is of a collection type is
represented as an object with a single name/value pair whose name is
`value`. Its value is the JSON representation of a
[collection of complex type values](#CollectionofComplexValues) or
[collection of primitive values](#CollectionofPrimitiveValues).
 
::: example
Example ##ex:  primitive value
```json
{
  "@context": "http://host/service/$metadata#Edm.String",
  "value": "Pilar Ackerman"
}
```
 
::: example
Example ##ex:  collection of primitive values
```json
{
  "@context":
"http://host/service/$metadata#Collection(Edm.String)",
  "value": \["small", "medium", "extra
large"\]
}
```
 
::: example
Example ##ex:  empty collection of primitive values
```json
{
  "@context":
"http://host/service/$metadata#Collection(Edm.String)",
  "value": \[\]
}
```
 
::: example
Example ##ex: complex value
```json
{
  "@context": "http://host/service/$metadata#Model.Address",
  "Street": "12345 Grant Street",
  "City": "Taft",
  "Region": "Ohio",
  "PostalCode": "OH 98052",
  "Country@navigationLink": "Countries('US')"
}
```
 
::: example
Example ##ex: empty collection of complex values
```json
{\
 
"@context":"http://host/service/$metadata#Collection(Model.Address)",\
  "value": \[\]
}
```

Note: the context URL is optional in requests.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#CollectionOfEntities}{#sec_CollectionofOperationResponses}{#\_Representing_Multiple_Entities}{#\_Collection_of_Entities}12[ ]{style="font:7.0pt "Times New Roman""}[Collection of Operation Responses](#CollectionofOperationResponses) {#collection-of-operation-responses style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

Invoking a bound action or function with `/$each` on each
member of a collection in one request results in a collection of
operation results, which is represented as a JSON object containing a
name/value pair named `value`. It MAY contain
[`context`](#ControlInformationcontextodatacontext),
[`type`](#ControlInformationtypeodatatype),
[`count`](#ControlInformationcountodatacount),
or [[nextLink]{style="font-family:
"Courier New""}](#ControlInformationnextLinkodatanextL) control
information.

If present, the `context` control information MUST be the
first name/value pair in the response.

The `count` name/value pair represents the number of operation
responses in the collection. If present and the
`streaming=true` media type parameter is set, it MUST come
before the `value` name/value pair. If the response
represents a partial result, the `count` name/value pair MUST
appear in the first partial response, and it MAY appear in subsequent
[partial responses (in which case it may vary from response to
response).]{style="color:#333333;background:white"}

The value of the `value` name/value pair is an array of
objects, each object representing a single [operation
response](#IndividualPropertyorOperationRespons). Note: if the
operation response is a collection, each single operation response
object itself contains a name/value pair named `value`.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_CollectionofEntities}[13[ ]{style="font:7.0pt "Times New Roman""}][Collection of Entities](#CollectionofEntities) {#collection-of-entities style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

A collection of entities is represented as a JSON object containing a
name/value pair named `value`. It MAY contain
[`context`](#ControlInformationcontextodatacontext),
[`type`](#ControlInformationtypeodatatype),
[`count`](#ControlInformationcountodatacount),
[[nextLink]{style="font-family:
"Courier New""}](#ControlInformationnextLinkodatanextL), or[[
]{style="font-family:"Courier New""}]{.MsoHyperlink}[`deltaLink`](#ControlInformationdeltaLinkodatadelt)
control information.

If present, the `context` control information MUST be the
first name/value pair in the response.

The `count` name/value pair represents the number of entities
in the collection. If present and the `streaming=true`
content-type parameter is set, it MUST come before the
`value` name/value pair. If the response represents a partial
result, the `count` name/value pair MUST appear in the first
partial response, and it MAY appear in subsequent [partial responses (in
which case it may vary from response to
response).]{style="color:#333333;background:white"}

The value of the `value` name/value pair is a JSON array
[where each]{#CollectionOfLinks} element is [representation of an
entity](#Entity)[ ]{.MsoHyperlink}or a[
]{.MsoHyperlink}{#CollectionOfEntityRef}[representation of an entity
reference](#EntityReference). An empty collection is represented as
an empty JSON array.

Functions or actions that are bound to this collection of entities are
advertised in the "wrapper object" in the same way as
[functions](#BoundFunction) or [actions](#BoundAction) are
advertised in the object representing a single entity.

The
[`nextLink`](#ControlInformationnextLinkodatanextL)
control information MUST be included in a response that represents a
partial result.

{#_Representing_Changes_(Deltas)\_1}Example 28:
```json
{
  "@context": "...",
  "@count": 37,
  "value": \{style="color:black"}

  { ... },
  { ... },
  { ... }
  \],
  "@nextLink": "...?$skiptoken=342r89"
}
```
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_EntityReference}{#ResourceReference}{#\_Entity_Reference}14[ ]{style="font:7.0pt "Times New Roman""}[Entity Reference](#EntityReference) {#entity-reference style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

An entity reference (see [OData-Protocol](#ODataProtocol)) MAY take the
place of an entity in a JSON payload, based on the client request. It
{#\_Entity_References_as}is serialized as a JSON object that MUST
contain the [[id]{style="font-family:
"Courier New""}](#ControlInformationidodataid) of the referenced
entity and MAY contain the
[`type`](#ControlInformationtypeodatatype)
control information and [instance
annotations](#InstanceAnnotations), but no additional properties or
control information.

A collection of entity references is represented as a [collection of
entities](#CollectionofEntities), with entity reference
representations instead of entity representations as items in the array
value of the `value` name/value pair.

The outermost JSON object in a response MUST contain a
[`context`](#ControlInformationcontextodatacontext)
control information and MAY contain
[`count`](#ControlInformationcountodatacount),
[[nextLink]{style="font-family:
"Courier New""}](#ControlInformationnextLinkodatanextL), or[
]{.MsoHyperlink}[`deltaLink`](#ControlInformationdeltaLinkodatadelt)
control information.
 
::: example
Example ##ex: entity reference to order 10643
```json
{
  "@context": "http://host/service/$metadata#$ref",
  "@id": "Orders(10643)"
}
```
 
::: example
Example ##ex: collection of entity references
```json
{
  "@context": "http://host/service/$metadata#Collection($ref)",

  "value": \{style="color:black"}

  { "@id": "Orders(10643)" },
  { "@id": "Orders(10759)" }
  \]
}
```
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_DeltaPayload}{#DeltaResponse}{#\_Delta_Response}15[ ]{style="font:7.0pt "Times New Roman""}[Delta Payload](#DeltaPayload) {#delta-payload style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

The non-format specific aspects of the delta handling are described in
the section "Requesting Changes" in [OData-Protocol](#ODataProtocol).

## {#sec_DeltaResponses}[15.1] [Delta Responses](#DeltaResponses)

Responses from a delta request are returned as a JSON object.

The JSON object for a delta response to a single entity is either an
[added](#AddedChangedEntity), [changed](#AddedChangedEntity), or
[deleted entity](#DeletedEntity)[.]{.MsoHyperlink}

The JSON object for a delta response to a collection of entities MUST
contain an array-valued property named `value` containing all
[added](#AddedChangedEntity), [changed](#AddedChangedEntity), or
[deleted entities](#DeletedEntity), as well as [added
links](#AddedLink) or [deleted links](#DeletedLink) between
entities, and MAY contain additional, unchanged entities.

If the delta response contains a partial list of changes, it MUST
include a [next link](#ControlInformationnextLinkodatanextL) for the
client to retrieve the next set of changes.

The last page of a delta response SHOULD contain a [delta
link](#ControlInformationdeltaLinkodatadelt) in place of the [next
link](#ControlInformationnextLinkodatanextL) for retrieving
subsequent changes once the current set of changes has been applied to
the initial set.

If an OData 4.01 delta response includes an expanded collection-valued
navigation property inline (see [next
section](#AddedChangedEntity)), the expanded collection can be a
partial list, in which case the expanded navigation property MUST have
the
[`nextLink`](#ControlInformationnextLinkodatanextL)
control information applied to it. Following this chain of next links
does not result in a delta link on the last page of the expanded
collection.

If the response from the delta link contains a `count`[
]{.MsoHyperlink}control information, the returned number MUST include
all added, changed, or deleted entities to be returned, as well as added
or deleted links.
 
::: example
Example ##ex: a 4.01 delta response with five changes, in order of
occurrence

_[1.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[ContactName]{style="font-size:9.0pt;font-family:"Courier New""}[
for customer 'BOTTM' was changed to "Susan
Halvenstern"]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[2.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Order
10643 was removed from customer
'ALFKI']{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[3.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Order
10645 was added to customer
'BOTTM']{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[4.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[The
shipping information for order 10643 was
updated]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[5.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Customer
'ANTON' was
deleted]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_
````json
[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[ 
"@context":"http://host/service/$metadata#Customers/$delta",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "@count":5,]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "value":]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  \{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"@id":"Customers('BOTTM')",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}[["ContactName":"Susan
Halvenstern"]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    },]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    {]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      "@context":"#Customers/$deletedLink",]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      ]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}[["source":"Customers('ALFKI')",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"relationship":"Orders",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"target":"Orders(10643)"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[   
 "@context":"#Customers/$link",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"source":"Customers('BOTTM')",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"relationship":"Orders",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"target":"Orders(10645)"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"@context":"#Orders/$entity",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  
  "@id":"Orders(10643)",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"ShippingAddress":{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[        "Street":"23 Tsawassen
Blvd.",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[       
"City":"Tsawassen",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[       
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}[["Region":"BC",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[        "PostalCode":"T2F
8M4"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}[[},]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[   
 "@context":"#Customers/$deletedEntity",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      "@removed":
{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
 "reason":"deleted"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"@id":"Customers('ANTON')"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    }]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  \],]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "@deltaLink":
"Customers?$expand=Orders&$deltatoken=8015"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

## {#sec_AddedChangedEntity}{#\_Representing_Added/Changed_Entities_1}{#\_Added/Changed_Entity}15.2 [Added/Changed Entity](#AddedChangedEntity)

Added or changed entities within a delta response are represented as
[entities](#Entity)[.]{.MsoHyperlink}

Added entities MUST include all available selected properties and MAY
include additional, unselected properties. Collection-valued properties
are treated as atomic values; any collection-valued properties returned
from a delta request MUST contain all current values for that
collection.

Changed entities MUST include all available selected properties that
have changed, and MAY include additional properties.

If a property of an entity is dependent upon the property of another
entity within the expanded set of entities being tracked, then both the
change to the dependent property as well as the change to the principle
property or [added](#AddedLink)/[deleted link](#DeletedLink)
corresponding to the change to the dependent property are returned in
the delta response.

Entities that are not part of the entity set specified by the context
URL MUST include the
[`context`](#ControlInformationcontextodatacontext)
control information to specify the entity set of the entity, regardless
of the specified
[`metadata`](#ControllingtheAmountofControlInforma)[
]{.MsoHyperlink}value.

Entities include control information for selected navigation links based
on
[`metadata`](#ControllingtheAmountofControlInforma)[.
]{.MsoHyperlink}

OData 4.0 payloads MUST NOT include expanded navigation properties
inline; all changes MUST be represented as a flat array of added,
deleted, or changed entities, along with added or deleted links.

OData 4.01 delta payloads MAY include expanded navigation properties
inline. Related single entities are represented as either an
[added/changed](#AddedChangedEntity) entity, an [entity
reference](#EntityReference), a [deleted
entity](#DeletedEntity), or a null value (if no entity is related as
the outcome of the change). Collection-valued navigation properties are
represented either as a delta representation or as a full representation
of the collection.

If the expanded navigation property represents a delta, it MUST be
represented as an array-valued control information
[`delta`](#ControlInformationdeltaodatadelta)
on the navigation property.  [Added/changed](#AddedChangedEntity)
entities or [entity references](#EntityReference)[
]{.MsoHyperlink}are added to the collection. [Deleted
entities](#DeletedEntity) MAY be specified in a nested delta
representation to represent entities no longer part of the collection.
If the deleted entity specifies a `reason` as
`deleted`, then the entity is both removed from the
collection and deleted, otherwise it is removed from the collection and
only deleted if the navigation property is a containment navigation
property. The array MUST NOT contain [added](#AddedLink) or [deleted
links](#DeletedLink).
 
::: example
Example ##ex: 4.01 delta response customers with expanded orders
represented inline as a delta

_[1.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Customer
'BOTTM':]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[a.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[ContactName]{style="font-size:9.0pt;font-family:"Courier New""}[
was changed to "Susan
Halvenstern"]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[b.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Order
10645 was
added]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[2.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Customer
'ALFKI': ]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[a.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Order
10643 was
removed]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[3.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Customer
'ANTON' was
deleted]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_
```json
[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[ 
"@context":"http://host/service/$metadata#Customers/$delta",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "@count":3,]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "value":]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  \{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"@id":"Customers('BOTTM')",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}[["ContactName":"Susan
Halvenstern",]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      "Orders@delta":\{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[        {]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

        "@id":"Orders(10645)"]{lang="NL" style="color:black"}

[[        }]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      \]]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    },]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    {]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      "@id":"Customers('ALFKI')",]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      "Orders@delta":\{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[        {]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[          "@context":"#Orders/$deletedEntity",]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[          ]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}[["@removed":
{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[             "reason":
"changed"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[          },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

        "@id":"Orders(10643)"
[[        }            
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      \]]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[   
 "@context":"#Customers/$deletedEntity",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      "@removed":
{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[         "reason":
"deleted"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[      },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[     
"@id":"Customers('ANTON')"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    }]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  \],]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "@deltaLink":
"Customers?$expand=Orders&$deltatoken=8015"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

If the expanded navigation property is a full representation of the
collection, it MUST be represented as an expanded navigation property,
and its array value represents the full set of entities related
according to that relationship and satisfying any specified expand
options. Members of the array MUST be represented as
[added/changed](#AddedChangedEntity) entities or [entity
references](#EntityReference) and MUST NOT include added links,
deleted links, or deleted entities. Any entity not represented in the
collection has either been removed, deleted, or changed such that it no
longer satisfies the expand options in the defining query. In any case,
clients SHOULD NOT receive additional notifications for such removed
entities.

{#sec_DeletedEntity}{#\_Representing_Deleted_Entities_1}{#\_Deleted_Entity}Example
33: 4.01 delta response for a single entity with an expanded navigation
property containing only a partial list of related entities (as
indicated with a [next link](#ControlInformationnextLinkodatanextL))
```json
[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[ 
"@context":"http://host/service/$metadata#Customers/$entity/$delta",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  ...]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "Orders@count":
42,]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "Orders": \[ ...
\],]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "Orders@nextLink":
"...",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  ...]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "@deltaLink":
"Customers('ALFKI')?$expand=Orders&$deltatoken=9711"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

## 15.3 [Deleted Entity](#DeletedEntity)

Deleted entities in JSON are returned as deleted-entity objects. Delta
responses MUST contain a deleted-entity object for each deleted entity,
including deleted expanded entities that are not related through a
containment navigation property. The service MAY additionally include
expanded entities related through a containment navigation property in
which case it MUST include those in any returned count of enumerated
changes.

The representation of deleted-entity objects differs between OData 4.0
and OData 4.01.

In OData 4.0 payloads the deleted-entity object MUST include the
following properties, regardless of the specified
[`metadata`](#ControllingtheAmountofControlInforma)[
]{.MsoHyperlink}value:

- Control
  information
  [`context`](#ControlInformationcontextodatacontext)
  -- the context URL fragment MUST be
  `#{entity-set}/$deletedEntity`, where
  `{entity-set}` is the entity set of the deleted entity

- `id`
  -- The [id](#ControlInformationidodataid) of the deleted entity
  (same as the
  [[id]{style="color:windowtext"}](#ControlInformationidodataid)
  returned or computed when calling GET on resource), which may be
  absolute or [relative](#RelativeURLs)

In OData 4.0 payloads the deleted-entity object MAY include the
following optional property, regardless of the specified
[`metadata`](#ControllingtheAmountofControlInforma)[
]{.MsoHyperlink}value, and MAY include
[annotations](#InstanceAnnotations):

- `reason`
  -- either `deleted`, if the entity was deleted (destroyed),
  or `changed` if the entity was removed from membership in the
  result (i.e., due to a data change).

{#\_Added_Link}Example
34: deleted entity in OData 4.0 response -- note that `id` is
a property, not control information
```json
[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[ 
"@context":"#Customers/$deletedEntity",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[ 
"reason":"deleted",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "id":"Customers('ANTON')"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

In OData 4.01 payloads the deleted-entity object MUST include the
following properties, regardless of the specified
[`metadata`](#ControllingtheAmountofControlInforma)[
]{.MsoHyperlink}value:

- Control
  information
  [`removed`](#ControlInformationremovedodataremove),
  whose value is an object that MAY contain a property named
  `reason`. If present, the value of `reason` MUST
  be either `deleted` if the entity was deleted (destroyed), or
  `changed` if the entity was removed from membership in the
  result either due to change in value such that the entity no longer
  matches the defining query or because the entity was removed from the
  collection. The object MAY include
  [annotations](#InstanceAnnotations), and clients SHOULD NOT error
  due to the presence of additional properties that MAY be defined by
  future versions of this specification. For [ordered
  payloads](#PayloadOrderingConstraints), the control information
  [`removed`](#ControlInformationremovedodataremove)[[
  ]{style="font-family:"Arial",sans-serif"}]{.Datatype}MUST immediately
  follow the [[context]{style="font-family:
  "Courier New""}](#ControlInformationcontextodatacontext) control
  information, if present, otherwise it MUST be the first property in the
  deleted entity.

- Control
  information
  [`id`](#ControlInformationidodataid)
  or all of the entity's key fields. The `id`[[
  ]{style="font-family:"Arial",sans-serif"}]{.Datatype}control
  information MUST appear if any of the entity's key fields are omitted
  from the response _or_ the entity-id is not identical to the canonical
  URL of the entity. For [ordered
  payloads](#PayloadOrderingConstraints), the control information
  `id,` if present, MUST immediately follow the control
  information
  [`removed`](#ControlInformationremovedodataremove).

For full metadata the
[`context`](#ControlInformationcontextodatacontext)
control information MUST be included. It also MUST be included if the
entity set of the deleted entity cannot be determined from the
surrounding context.

The deleted-entity object MAY include additional properties of the
entity, as well as [annotations](#InstanceAnnotations), and MAY
include related entities, related deleted entities, or a delta or full
representation of a related collection of entities, to represent related
entities that have been modified or deleted.
 
::: example
Example ##ex: deleted entity in OData 4.01 response with `id`
control information (prefixed with an
`@`[[)]{style="font-family:"Arial",sans-serif"}]{.Datatype}
```json
[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[ 
"@context":"#Customers/$deletedEntity",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "@removed":{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[   
"reason":"deleted",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[    "@myannoation.deletedBy":"Mario"
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[ 
"@id":"Customers('ANTON')"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::
 
::: example
Example ##ex: entity removed OData 4.01 response without `id`
control information and instead all key fields (`ID` is the
single key field of `Customer`)
```json
[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "@removed":{},]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[  "ID":"ANTON"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

## {#sec_AddedLink}{#\_Added_Link_1}15.4 [Added Link](#AddedLink)

Links within a delta response are represented as link objects.[
]{style="font-size:11.0pt;font-family:"Calibri",sans-serif"}

Delta responses MUST contain a link object for each added link that
corresponds to a `$expand` path in
the initial request.
```{style="page-break-after:avoid"}
The link object MUST include the following properties, regardless of the specified metadata value, and MAY include annotations:
````

- [`context`](#ControlInformationcontextodatacontext)
  -- the context URL fragment MUST be `#{entity-set}/$link`,
  where `{entity-set}` is the entity set containing the source
  entity

- `source`
  -- The [id](#ControlInformationidodataid) of the entity from which
  the relationship is defined, which may be absolute or
  [relative](#RelativeURLs)

- `relationship`
  -- The path from the source object to the navigation property which MAY
  traverse one or more complex properties, type cast segments, or members
  of ordered collections

- `target`
  -- The [id](#ControlInformationidodataid) of the related entity,
  which may be absolute or [relative](#RelativeURLs)

## {#sec_DeletedLink}{#\_Representing_Deleted_Links_1}{#\_Deleted_Link}15.5 [Deleted Link](#DeletedLink)

Deleted links within a delta response are represented as deleted-link
objects.

Delta responses MUST contain a deleted-link object for each deleted link
that corresponds to a `$expand`
path in the initial request, unless either of the following is true:

- The
  `source` or
  `target` entity has been deleted

- The
  maximum cardinality of the related entity is one and there is a
  subsequent [link object](#AddedLink) that specifies the same
  `source` and
  [relationship]{style="font-family:
  "Courier New""}.
```{style="margin-top:4.0pt;margin-right:0in;margin-bottom:4.0pt;margin-left:
0in"}
The deleted-link object MUST include the following properties, regardless of the specified metadata value, and MAY include annotations:
```

- [`context`](#ControlInformationcontextodatacontext)
  -- the context URL fragment MUST be
  `#{entity-set}/$deletedLink`, where
  `{entity-set}` is the entity set containing the source entity

- `source`
  -- The [id](#ControlInformationidodataid) of the entity from which
  the relationship is defined, which may be absolute or
  [relative](#RelativeURLs)

- `relationship`
  -- The path from the source object to the navigation property which MAY
  traverse one or more complex properties, type cast segments, or members
  of ordered collections

[
]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;color:windowtext"}]{.MsoHyperlink}`target`
-- The [id](#ControlInformationidodataid) of the related entity for
multi-valued navigation properties, which may be absolute or
[relative](#RelativeURLs)[. ]{.MsoHyperlink}[[For delta payloads
that do not specify an
]{style="color:windowtext"}]{.MsoHyperlink}`OData-Version`[[
header value of
]{style="color:windowtext"}]{.MsoHyperlink}[[4.0]{style="font-family:"Courier New";color:windowtext"}]{.MsoHyperlink}[[,
the target MAY be omitted for single-valued navigation
properties]{style="color:windowtext"}]{.MsoHyperlink}[.]{.MsoHyperlink}

## {#sec_UpdateaCollectionofEntities}[[[15.6 ]{style="color:windowtext"}]{.MsoHyperlink}][Update a Collection of Entities](#UpdateaCollectionofEntities)

The body of a PATCH request to a URL identifying a collection of
entities is a JSON object. It MUST contain the
[`context`](#ControlInformationcontextodatacontext)
control information with a string value of `#$delta`, and it
MUST contain an array-valued property named `value`
containing all [added](#AddedLink),
[changed](#AddedChangedEntity), or [deleted](#DeletedEntity)
entities, as well as [added](#AddedLink) or
[deleted](#DeletedLink) links between entities.

{#\_Ref332033292}{#\_Ref332033268}{#\_Ref332031391}{#\_Bound_Function}Example
37: 4.01 delta response customers with expanded orders represented
inline as a delta

_[1.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Add
customer
'EASTC':]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[2.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Change
]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[ContactName]{style="font-size:9.0pt;font-family:"Courier New""}[
of customer
'AROUT']{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[3.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Delete
customer
'ANTON']{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[4.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Change
customer 'ALFKI':
]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[a.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Create
order 11011]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[b.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Add
link to existing order
10692]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[c.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Change
]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_[_[ShippedDate]{style="font-size:9.0pt"}_]{.Datatype}_[
]{style="font-size:8.0pt;font-family:"Arial",sans-serif"}[of related
order 10835]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[d.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Delete
link to order
10643]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[5.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Add
link between customer 'ANATR' and order
10643]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_

_[6.[    
]{style="font:7.0pt "Times New Roman""}]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}[Delete
link between customer 'DUMON' and order
10311]{style="font-size:9.0pt;font-family:"Arial",sans-serif"}_
```json
{
  "@context":"#$delta",
  "value": \{style="color:black"}

   {
    "CustomerID": "EASTC",
    "CompanyName": "Eastern Connection",
    "ContactName": "Ann Devon",
   "ContactTitle": "Sales Agent"
  },
  {
    "CustomerID": "AROUT",
    "ContactName": "Thomas Hardy",
  },
  {
    "@removed": {},
    "CustomerID":"ANTON"
   },
  {
    "CustomerID": "ALFKI",
    "Orders@delta": \{style="color:black"}

      {
        "OrderID": 11011,
        "CustomerID": "ALFKI",
        "EmployeeID": 3,
        "OrderDate":
"1998-04-09T00:00:00Z",
        "RequiredDate":
"1998-05-07T00:00:00Z",
        "ShippedDate":
"1998-04-13T00:00:00Z"
      },
      {
        "@id":"Orders(10692)"
      },
      {
        "@id":"Orders(10835)"
        ShippedDate: "1998-01-23T00:00:00Z",
      },
      {
        "@removed": {
           "reason": "changed"
        },
        "OrderID": 10643
      }
    \]
  },
  {
    "@context":"#Customers/$link",
    "source":"Customers('ANATR')",
    "relationship":"Orders",
    "target":"Orders(10643)"
   },
  {
    "@context":"#Customers/$deletedLink",
    "source":"Customers('DUMON')",
    "relationship":"Orders",
    "target":"Orders(10311)"
  }
  \]
}
```
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_BoundFunction}[16[ ]{style="font:7.0pt "Times New Roman""}][Bound Function](#BoundFunction) {#bound-function style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

A bound function is advertised via a name/value pair where the name is a
hash (`\#`) character followed by the namespace- or
alias-qualified name of the function. The namespace or alias MUST be
defined or the namespace referenced in the metadata document of the
service, see [OData-CSDLJSON](#ODataCSDL) or
[OData-CSDLXML[.]{style="color:windowtext"}](#ODataCSDL) A
specific function overload can be advertised by appending the
parentheses-enclosed, comma-separated list of non-binding parameter
names to the qualified function name, see rule
`qualifiedFunctionName` in [OData-ABNF](#abnf).

A function that is bound to a single structured type MAY be advertised
within the JSON object representing that structured type.

Functions that are bound to a collection MAY be advertised within the
JSON object containing the collection. If the collection is the
top-level response, the function advertisement name/value pair is placed
next to the `value` name/value pair representing the
collection. If the collection is nested within an instance of a
structured type, then in 4.01 payloads the name of the function
advertisement is prepended with the name of the collection-valued
property and is placed next to the collection-valued property, [expanded
navigation property](#ExpandedNavigationProperty), or
[`navigationLink`](#NavigationLink)
control information, if present. 4.0 payloads MUST NOT advertise
functions prefixed with property names.

If the function is available, the value of the advertisement is an
object. OData 4.01 services MAY advertise the non-availability of the
function with the value `null`.

If
[`metadata=full`](#metadatafullodatametadatafull)
is requested, each value object MUST have at least the two name/value
pairs `title` and `target`. It MAY contain
[annotations](#InstanceAnnotations). The order of the name/value
pairs MUST be considered insignificant.

The `target` name/value pair contains a URL. Clients MUST be
able to invoke the function or the specific function overload by passing
the parameter values via query options for [parameter
aliases](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_ParameterAliases)[[
]{style="color:#0000EE"}]{.apple-converted-space}[that are identical to
the parameter name preceded by an at
(]{style="color:black"}[[@]{style="font-family:"Courier New";
color:black"}]{.datatype0}[) sign. Clients MUST check if the obtained
URL already contains a query part and appropriately precede the
parameters either with an ampersand
(]{style="color:black"}[[&]{style="font-family:"Courier New";color:black"}]{.datatype0}[)
or a question mark
(]{style="color:black"}[[?]{style="font-family:"Courier New";color:black"}]{.datatype0}[)]{style="color:black"}.

The `title` name/value pair contains the function or action
title as a string.

If
[`metadata=minimal`](#metadataminimalodatametadataminimal)
is requested, the `target` name/value pair MUST be included
if its value differs from the canonical function or action URL.
 
::: example
Example ##ex: minimal representation of a function where all overloads are
applicable
```json
{
  "@context":
"http://host/service/$metadata#Employees/$entity",
  "#Model.RemainingVacation": {},
  ...
}
```
 
::: example
Example ##ex: full representation of a specific overload with parameter
alias for the [[Year]{style="font-size:10.0pt"}]{.Keyword} parameter
```json
{
  "@context":
"http://host/service/$metadata#Employees/$entity",
  "#Model.RemainingVacation(Year)": {
  "title": "Remaining vacation from year.",
  "target":
"Employees(2)/RemainingVacation(Year=@Year)"
  },
  ...
}
```
 
::: example
Example ##ex: full representation in a collection
```json
{
  "@context":
"http://host/service/$metadata#Employees",
  "#Model.RemainingVacation": {
  "title": "Remaining Vacation",
  "target":
"Managers(22)/Employees/RemainingVacation"
  },
  "value": \[ ... \]
}
```

{#\_Bound_Action}Example
41: full representation in a nested collection
```json
{
  "@context":
"http://host/service/$metadata#Employees/$entity",
  "@type": "Model.Manager",
  "ID":22,
  ...
  "Employees#RemainingVacation": {
  "title": "RemainingVacation",
  "target":
"Managers(22)/Employees/RemainingVacation"
  }
}
```
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_BoundAction}[17[ ]{style="font:7.0pt "Times New Roman""}][Bound Action](#BoundAction) {#bound-action style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

A bound action is advertised via a name/value pair where the name is a
hash (`\#`) character followed by the namespace- or
alias-qualified name of the action. The namespace or alias MUST be
defined or the namespace referenced in the metadata document of the
service, see [OData-CSDLJSON](#ODataCSDL) or
[OData-CSDLXML[.]{style="color:windowtext"}](#ODataCSDL)

An action that is bound to a single structured type is advertised within
the JSON object representing that structured type.

Actions that are bound to a collection MAY be advertised within the JSON
object containing the collection. If the collection is the top-level
response, the action advertisement name/value pair is placed next to the
`value` name/value pair representing the collection. If the
collection is nested within an instance of a structured type, then in
4.01 payloads the name of the action advertisement is prepended with the
name of the collection-valued property and is placed next to the
name/value pair representing the collection-valued property, [expanded
navigation property](#ExpandedNavigationProperty), or
[`navigationLink`](#NavigationLink)
control information, if present. 4.0 payloads MUST NOT advertise actions
prefixed with property names.

If the action is available, the value of the advertisement is an object.
OData 4.01 services MAY advertise the non-availability of the action
with the value `null`.

If
[`metadata=full`](#metadatafullodatametadatafull)
is requested, each value object MUST have at least the two name/value
pairs `title` and `target`. It MAY contain
[annotations](#InstanceAnnotations). The order of these name/value
pairs MUST be considered insignificant.

The `target` name/value pair contains a bound function or
action URL.

The `title` name/value pair contains the function or action
title as a string.

If
[`metadata=minimal`](#metadataminimalodatametadataminimal)
is requested, the `target` name/value pair MUST be included
if its value differs from the canonical function or action URL.
 
::: example
Example ##ex: minimal representation in an entity
```json
{
  "@context":
"http://host/service/$metadata#LeaveRequests/$entity",
  "#Model.Approve": {},
  ...
}
```
 
::: example
Example ##ex: full representation in an entity:
```json
{
  "@context":
"http://host/service/$metadata#LeaveRequests/$entity",
  "#Model.Approve": {
  "title": "Approve Leave Request",
  "target": "LeaveRequests(2)/Approve"
  },
  ...
}
```
 
::: example
Example ##ex: full representation in a collection
```json
{
  "@context":
"http://host/service/$metadata#LeaveRequests",
  "#Model.Approve": {
  "title": "Approve All Leave Requests",
  "target":
"Employees(22)/Model.Manager/LeaveRequests/Approve"
  },
  "value": \[ ... \]
}
```

[Example] 45: full
representation in a nested collection
```json
{
  "@context":
"http://host/service/$metadata#Employees/$entity",
  "@type": "Model.Manager",
  "ID":22,
  ...
  "LeaveRequests#Model.Approve": {
  "title": "Approve All Leave Requests",
  "target":
"Employees(22)/Model.Manager/LeaveRequests/Approve"
  }
}
```
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_ActionInvocation}[18[ ]{style="font:7.0pt "Times New Roman""}][Action Invocation](#ActionInvocation) {#action-invocation style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

Action parameter values are encoded in a single JSON object in the
request body.

Each non-binding parameter value is encoded as a separate name/value
pair in this JSON object. The name is the name of the parameter. The
value is the parameter value in the JSON representation appropriate for
its type. Entity typed parameter values MAY include a subset of the
properties, or just the [entity reference](#EntityReference), as
appropriate to the action.

Non-binding parameters that are nullable or annotated with the term
[`Core.OptionalParameter`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#OptionalParameter)[[
]{style="font-family:"Arial",sans-serif"}]{.Datatype}defined in
[OData-VocCore](#ODataVocCore) MAY be omitted from the request body.
If an omitted parameter is not annotated (and thus nullable), it MUST be
interpreted as having the `null` value. If it is annotated
and the annotation specifies a `DefaultValue`, the omitted
parameter is interpreted as having that default value. If omitted and
the annotation does not specify a default value, the service is free on
how to interpret the omitted parameter. Note: a nullable non-binding
parameter is equivalent to being annotated as optional with a default
value of `null`.

Example 46:
```json
{
  "param1": 42,
  "param2": {
  "Street": "One Microsoft Way",
  "Zip": 98052
  },
  "param3": \[ 1, 42, 99 \],
  "param4": null
}
```

 

In order to invoke an action with no non-binding parameters, the client
passes an empty JSON object in the body of the request. 4.01 Services
MUST also support clients passing an empty request body for this case.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_BatchRequestsandResponses}[19[ ]{style="font:7.0pt "Times New Roman""}][Batch Requests and Responses](#BatchRequestsandResponses) {#batch-requests-and-responses style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

## {#sec_BatchRequest}[19.1] [Batch Request](#BatchRequest)

A JSON batch request body consists of a single JSON object that MUST
contain the name/value pair `requests` and MAY contain
[annotations](#InstanceAnnotations). It does not contain the
`context` control information.

The value of `requests` is an array of request objects, each
representing an individual request. Note: an individual request MUST NOT
itself be a batch request.

A _request object_ MUST contain the name/value pairs `id`,
`method` and `url`, and it MAY contain the
name/value pairs `atomicityGroup`, `dependsOn`[[,
]{style="font-family:"Arial",sans-serif"}]{.Datatype}`if`[[,
]{style="font-family:"Arial",sans-serif"}]{.Datatype}`headers`,
and `body`.

The value of `id` is a string containing the request
identifier of the individual request, see
[OData-Protocol](#ODataProtocol). It MUST NOT be identical to the value
of any other request identifier nor any `atomicityGroup`
within the batch request.

Note: the `id` name/value pair corresponds to the
`Content-ID` header in the multipart batch format specified
in [OData-Protocol](#ODataProtocol)[.]{.MsoHyperlink}

The value of `method` is a string that MUST contain one of
the literals `delete`, `get`, `patch`,
`post`, or `put`. These literals are
case-insensitive.

The value of `url` is a string containing the individual
request URL. The URL MAY be an absolute path (starting with a forward
slash `/`) which is appended to scheme, host, and port of the
batch request URL, or a relative path (not starting with a forward slash
`/`).

If the first segment of a relative path starts with a `$`
character and is not identical to the name of a top-level system
resource (`$batch`, `$crossjoin,`
`$all,` `$entity`, `$root,`
`$id`, `$metadata`, or other system resources
defined according to the
`OData-Version` of the protocol
specified in the request), then this first segment is replaced with the
URL of the entity created by or returned from a preceding request whose
`id` value is identical to the value of the first segment
with the leading `$` character removed. The `id`
of this request MUST be specified in the `dependsOn`
name/value pair.

Otherwise, the relative path is resolved relative to the batch request
URL (i.e. relative to the service root).

The value of `atomicityGroup` is a string whose content MUST
NOT be identical to any value of `id` within the batch
request, and which MUST satisfy the rule `request-id` in
[OData-ABNF](#abnf). All request objects with the same value for
`atomicityGroup` MUST be adjacent in the
`requests` array. These requests are processed as an atomic
operation and MUST either all succeed, or all fail.

Note: the atomicity group is a generalization of the change set in the
multipart batch format specified in [OData-Protocol](#ODataProtocol).

The value of `dependsOn` is an array of strings whose values
MUST be values of either `id` or `atomicityGroup`
of preceding request objects; forward references are not allowed. If a
request depends on another request that is part of a different atomicity
group, the atomicity group MUST be listed in `dependsOn`. In
the absence of the optional `if` member a request that
depends on other requests or atomicity groups is only executed if those
requests were executed successfully, i.e. with a `2xx`
response code. If one of the requests it depends on has failed, the
dependent request is not executed and a response with status code of
`424 Failed Dependency`[[ is returned for it as part of the
batch response.]{style="font-family:"Arial",sans-serif"}]{.Datatype}

The `if` member can specify an alternative condition for
executing the dependent request. Its value MUST be URL expression (see
[OData-URL](#ODataURL)) that evaluates to a Boolean value.
The URL expression syntax is extended and additionally allows

- `$\<content-id\>/$succeeded`
  to check if the referenced request has succeeded

- `$\<content-id\>`
  to reference the response body of the referenced request

- `$\<content-id\>/\<path\>`
  to reference a part of the response body

Services SHOULD advertise support of the `if` member by
specifying the property
`RequestDependencyConditionsSupported` in the
[`Capabilities.BatchSupport`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#BatchSupport)
term applied to the entity container, see
[OData-VocCap](#ODataVocCap)[[. If a service does not
support request dependencies, the dependent request MUST fail with
]{style="color:windowtext"}]{.MsoHyperlink}[424 Failed
Dependency]{.Datatype}[[, and if the dependent request is part of an
atomicity group, all requests in that group fail with
]{style="color:windowtext"}]{.MsoHyperlink}[424 Failed
Dependency]{.Datatype}[[ with no changes
applied]{style="color:windowtext"}]{.MsoHyperlink}.

The value of `headers` is an object whose name/value pairs
represent request headers. The name of each pair MUST be the lower-case
header name; the value is a string containing the header-encoded value
of the header. The `headers` object MUST contain a name/value
pair with the name `content-type` whose value is the media
type.

The value of `body` can be `null`, which is
equivalent to not specifying the `body` name/value pair.

For media type `application/json`[[ or one of its subtypes,
optionally with format parameters, the value of
]{style="font-family:"Arial",sans-serif"}]{.Datatype}`body`[[
is JSON.]{style="font-family:"Arial",sans-serif"}]{.Datatype}

For media types of top-level type `text`, for example
`text/plain`, the value of `body` is a string
containing the value of the request body.

For all other media types the value of `body` is a string
containing the base64url-encoded value of the request body. In this case
the body content can be compressed or chunked if this is correctly
reflected in the `Transfer-Encoding` header.

A `body` MUST NOT be specified if the `method` is
`get` or `delete`.
 
::: example
Example ##ex: a batch request that contains
the following individual requests in the order listed

1.[     ]{style="font:7.0pt "Times New Roman""}A query request

2.[     ]{style="font:7.0pt "Times New Roman""}An atomicity group that
contains the following requests:

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Insert
entity

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Update
entity

3.[     ]{style="font:7.0pt "Times New Roman""}A second query request

Note: For brevity, in the example, request bodies are excluded in favor
of English descriptions inside `\<\>` brackets and
`OData-Version` headers are omitted.
```json
POST /service/$batch HTTP/1.1\
Host: host\
OData-Version: 4.01\
Content-Type: application/json\
Content-Length: \###
 

[{
  "requests": \{style="color:black"}

  {
    "id": "0",
    "method": "get",
    "url": "/service/Customers('ALFKI')"
  },
  {
    "id": "1",
    "atomicityGroup": "group1",
    "dependsOn": \[ "0" \],
    "method": "patch",
    "url": "/service/Customers('ALFKI')",
    "headers": {
      "Prefer": "return=minimal"
    },
    "body": \<JSON representation of changes to Customer
ALFKI\>
  },
  {
    "id": "2",
    "atomicityGroup": "group1",
    "method": "post",
    "url": "/service/Customers",
    "body": \<JSON representation of a new Customer
entity\>
  },
  {
    "id": "3",
    "dependsOn": \[ "group1" \],
    "method": "get",
    "url": "/service/Products"
  }
  \]
}
```

## {#sec_ReferencingNewEntities}[[19.2 ]{style="color:#0000EE"}][Referencing New Entities](#ReferencingNewEntities)

The entity returned by a preceding request can be referenced in the
request URL of subsequent requests.
 
::: example
Example ##ex: a batch request that contains the following operations in
the order listed:

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Insert
a new entity (with `id = 1`)

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Insert
a second new entity (references request with `id = 1`)
```json
POST /service/$batch HTTP/1.1\
Host: host\
OData-Version: 4.01\
Content-Type: application/json\
Content-Length: \###\
\
{
  "requests": \{style="color:black"}

  {
    "id": "1",
    "method": "post",
    "url": "/service/Customers",
    "body": \<JSON representation of a new Customer
entity\>
  },
  {
    "id": "2",
    "dependsOn": \[ "1" \]
    "method": "post",
    "url": "$1/Orders",
    "body": \<JSON representation of a new
Order\>
  }
  \]
}
```

## {#sec_ReferencinganETag}[[19.3 ]{style="color:#0000EE"}][Referencing an ETag](#ReferencinganETag)
 
::: example
Example ##ex: a batch request that contains the following operations in
the order listed:

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Get
an Employee (with `id` = 1)

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Update
the salary only if the employee has not changed
```json
POST /service/$batch HTTP/1.1\
Host: host\
OData-Version: 4.01\
Content-Type: application/json\
Content-Length: \###\
\

[{
  "requests": \{style="color:black"}

  {
    "id": "1",
    "method": "get",
    "url": "/service/Employees(0)",
    "headers": {
      "accept": "application/json"
    }
  },
  {
    "id": "2",
    "dependsOn": \[ "1" \],
    "method": "patch",
    "url": "/service/Employees(0)",
    "headers": {
      "if-match": "$1"
    },
    "body": {
       "Salary": 75000
    }
  }
  \]
}
```

## {#sec_ProcessingaBatchRequest}19.4 [Processing a Batch Request](#ProcessingaBatchRequest)

All requests in an atomicity group represent a single change unit. A
service MUST successfully process and apply all the requests in the
atomicity group or else apply none of them. It is up to the service
implementation to define rollback semantics to undo any requests within
an atomicity group that may have been applied before another request in
that same atomicity group failed.

The service MAY process the individual requests and atomicity groups
within a batch request, or individual requests within an atomicity
group, in any order that is compatible with the dependencies expressed
with the `dependsOn` name/value pair. Individual requests and
atomicity groups that do not specify the `dependsOn`
name/value pair may be processed in parallel. Clients that are only
interested in completely successful batch responses MAY specify the
preference
[continue-on-error=false]{style="font-family:"Courier New";color:#3B006F"}
to indicate that the service need not spend cycles on further processing
once an error occurs in one of the dependency chains. In this case the
response MAY omit response objects for requests that have not been
processed. If the preference `continue-on-error` is not
specified, or specified with a value of `true`, all requests
are processed according to their dependencies.

The service MUST include the `id` name/value pair in each
response object with the value of the request identifier that the client
specified in the corresponding request, so clients can correlate
requests and responses.

## {#sec_BatchResponse}[19.5] [Batch Response](#BatchResponse)

A JSON batch response body consists of a single JSON object that MUST
contain the name/value pair `responses` and MAY contain
[annotations](#InstanceAnnotations). It does not contain the
`context` control information.

The value of `responses` is an array of response objects,
each representing an individual response.

A JSON batch response MAY be a partial result containing the
[[nextLink]{style="font-family:
"Courier New""}](#ControlInformationnextLinkodatanextL) control
information. This allows services to chunk results into manageable
pieces, or to return results for already processed requests and continue
processing the remaining individual requests while waiting for the
client to fire a `GET` request to the next link.

In a response to a batch request using the multipart format defined in
[OData-Protocol](#ODataProtocol)[ ]{.MsoHyperlink}[[the response objects
MUST appear in the same order as required for multipart batch responses
because the
]{style="color:windowtext"}]{.MsoHyperlink}`Content-ID`[[
header is not required outside of change sets. Response objects
corresponding to requests that specify a
]{style="color:windowtext"}]{.MsoHyperlink}`Content-ID`[[
header MUST contain the
]{style="color:windowtext"}]{.MsoHyperlink}`id`[[ name/value
pair, and the value of
]{style="color:windowtext"}]{.MsoHyperlink}`id`[[ MUST be the
value of the
]{style="color:windowtext"}]{.MsoHyperlink}`Content-ID`[[
header of the corresponding request. This is necessarily the case for
requests contained within a change set. Responses to requests within a
change set MUST contain the
]{style="color:windowtext"}]{.MsoHyperlink}`atomicityGroup`[[
name/value pair with a value common within a change set and unique
across change sets.]{style="color:windowtext"}]{.MsoHyperlink}

[[In a response to a batch request using the JSON batch request format
specified in the preceding section the response objects MAY appear in
any order, and each response object MUST contain the
]{style="color:windowtext"}]{.MsoHyperlink}`id`[[ name/value
pair with the same value as in the corresponding request object. If the
corresponding request object contains the
]{style="color:windowtext"}]{.MsoHyperlink}`atomicityGroup`[[
name/value pair, it MUST also be present in the response object with the
same value.]{style="color:windowtext"}]{.MsoHyperlink}

If any response within an atomicity group returns a failure code, all
requests within that atomicity group are considered failed, regardless
of their individual returned status code. The service MAY return [424
Failed Dependency]{.Datatype}[[
]{style="font-family:"Arial",sans-serif"}]{.Datatype}for statements
within an atomicity group that fail or are not attempted due to other
failures within the same atomicity group.

A response object MUST contain the name/value pair `status`
whose value is a number representing the HTTP status code of the
response to the individual request.

The response object MAY contain the name/value pair `headers`
whose value is an object with name/value pairs representing response
headers. The name of each pair MUST be the lower-case header name; the
value is a string containing the header-encoded value of the header.

The response object MAY contain the name/value pair `body`
which follows the same rules as within [request
objects](#BatchRequest).

If the media type is not exactly equal to `application/json`
(i.e. it is a subtype or has format parameters), the
`headers` object MUST contain a name/value pair with the name
`content-type` whose value is the media type.

Relative URLs in a response object follow the rules for [relative
URLs](#RelativeURLs) based on the request URL of the corresponding
request. Especially: URLs in responses MUST NOT contain
`$`-prefixed request identifiers.
 
::: example
Example ##ex: referencing the batch request example 47 above, assume all
the requests except the final query request succeed. In this case the
response would be
```json
{
  "responses": \{style="color:black"}

  {
    "id": "0",
    "status": 200,
    "body": \<JSON representation of the Customer entity with key
ALFKI\>
  },
  {
    "id": "1",
    "status": 204
  },
  {
    "id": "2",
     "status": 201,
    "headers": {
      "location":
"http://host/service.svc/Customer('POIUY')"
    },
    "body": \<JSON representation of the new Customer
entity\>
  },
  {
    "id": "3",
    "status": 404,
    "body": \<Error message\>
  }
  \]
}
```

## {#sec_AsynchronousBatchRequests}{#\_Ref358207547}{#\_Instance_Annotations}19.6 [Asynchronous Batch Requests](#AsynchronousBatchRequests)

A batch request that specifies the [respond-async]{style="font-family:
"Courier New""} preference MAY be executed asynchronously. This means
that the "outer" batch request is executed asynchronously; this
preference does not automatically cascade down to the individual
requests within the batch. After successful execution of the batch
request the response to the batch request is returned in the body of a
response to an interrogation request against the status monitor resource
URL, see section "Asynchronous Requests" in
[OData-Protocol](#ODataProtocol).

A service MAY return interim results to an asynchronously executing
batch. It does this by responding with `200 OK` to a
`GET` request to the monitor resource and including a
[`nextLink`](#ControlInformationnextLinkodatanextL)
control information in the JSON batch response, thus signaling that the
response is only a partial result. A subsequent `GET` request
to the next link MAY result in a [202
Accepted]{style="font-family:"Courier New""} response with a
`location` header pointing to a new status monitor resource.
 
::: example
Example ##ex: referencing the example 47 above again, assume that the
request is sent with the `respond-async` preference. This
results in a `202` response pointing to a status monitor
resource:
````json
HTTP/1.1 202 Accepted\
Location: http://service-root/async-monitor-0\
Retry-After: \###\
\
:::

When interrogating the monitor URL only the first request in the batch
has finished processing and all the remaining requests are still being
processed. The service signals that asynchronous processing is
"finished" and returns a partial result with the first response and a
next link. The client did not explicitly accept
`application/http`, so the response is "unwrapped" and only
indicates with the `AsyncResult` header that it is a response
to a status monitor resource:
```json
HTTP/1.1 200 Ok\
AsyncResult: 200\
OData-Version: 4.01\
Content-Length: \####\
Content-Type: application/json\
\

[{
  "responses": \{style="color:black"}

  {
    "id": "0",
    "status": 200,
    "body": \<JSON representation of the Customer entity with key
ALFKI\>
  \],
  "@nextLink": "...?$skiptoken=YmF0Y2gx"
}
````

Client makes a `GET` request to the next link and receives a
`202` response with the location of a new monitor resource.
````json
HTTP/1.1 202 Accepted\
Location: http://service-root/async-monitor-1\
Retry-After: \###\
\
:::

After some time a `GET` request to the monitor resource
returns the remainder of the result[[.
]{style="font-family:"Arial",sans-serif"}]{.Datatype}
```json
HTTP/1.1 200 Ok\
AsyncResult: 200\
OData-Version: 4.01
[Content-Length: \####\
Content-Type: application/json\
\

[{
  "responses": \{style="color:black"}

  {
    "id": "1",
    "status": 204
  },
  {
    "id": "2",
    "status": 201,
    "headers": {
      "location":
"http://host/service.svc/Customer('POIUY')"
    },
    "body": \<JSON representation of the new Customer
entity\>
  },
  {
    "id": "3",
    "status": 404,
    "body": \<Error message\>
  }
  \]
}
````

In addition to the above interaction pattern individual requests within
a batch with no other requests depending on it and not part of an
atomicity group MAY be executed asynchronously if they specify the
`respond-async` preference and if
the service responds with a JSON batch response. In this case the
`response` array contains a response object for each
asynchronously executed individual request with a `status`[[
]{style="font-family:"Arial",sans-serif"}]{.Datatype}of
`202`, a `location` header pointing to an
individual status monitor resource, and optionally a
`retry-after` header.
 
::: example
Example ##ex: the first individual request is processed asynchronously,
the second synchronously, the batch itself is processed synchronously
```json
HTTP/1.1 200 OK\
OData-Version: 4.01\
Content-Length: \####\
Content-Type: application/json\
\

[{
  "responses": \{style="color:black"}

  {
    "id": "0",
    "status": 202,
    "headers": {
      "location":
"http://service-root/async-monitor-0"
    }
  },
  {
    "id": "1",
    "status": 204
  }
  \]
}
```
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_InstanceAnnotations}[20[ ]{style="font:7.0pt "Times New Roman""}][Instance Annotations](#InstanceAnnotations) {#instance-annotations style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

[Annotations]{#\_Representing_Annotations} are an extensibility mechanism
that allows services and clients to include information other than the
raw data in the request or response.

Annotations are name/value pairs that have an at (`@`) and a
dot (`.`) as part of the name. The part after the "at" sign
(`@`) is the _annotation_ _identifier_. It consists of the
namespace or alias of the schema that defines the term, followed by a
dot (`.`), followed by the name of the term, [optionally
followed by a hash
(]{style="color:#333333;background:white"}`\#`[) and a
qualifier.]{style="color:
#333333;background:white"} The namespace or alias MUST be defined in the
metadata document, see [OData-CSDLJSON](#ODataCSDL) or
[OData-CSDLXML[.]{style="color:windowtext"}](#ODataCSDL)

The annotation identifier `odata` is reserved for future
extensions of the protocol and format. Instance annotations MUST have a
namespace or alias that is different from `odata`.

Annotations can be applied to any name/value pair in a JSON payload that
represents a value of any type from the entity data model. Clients
should never error due to an unexpected annotation in a JSON payload.

Annotations are always expressed as name/value pairs. For entity data
model constructs represented as JSON objects the annotation name/value
pairs are placed within the object; for constructs represented as JSON
arrays or primitives they are placed next to the annotated model
construct. [When annotating a payload that represents a
]{style="color:black"}[single primitive or collection
value](#IndividualPropertyorOperationRespons)[, the annotations for
the value appear next to the ]{style="color:black"}`value`
[property and are not prefixed with a property
name.
Example ##ex:
```json
{
  "@context":
"http://host/service/$metadata#Customers",
  "@com.example.customer.setkind": "VIPs",
  "value": \{style="color:black"}

  {
    "@com.example.display.highlight": true,
    "ID": "ALFKI",
    "CompanyName@com.example.display.style": { "title": true,
"order": 1 },
    "CompanyName": "Alfreds Futterkiste",
    "Orders@com.example.display.style#simple": { "order": 2
}
  }
  \]
}
```

## {#sec_AnnotateaJSONObject}[20.1] [Annotate a JSON Object](#AnnotateaJSONObject)

[When annotating a name/value pair for which the value is represented as
a JSON object, each annotation is placed within the object and
represented as a single name/value pair.
The name always starts with the "at" sign (`@`), followed
by the annotation identifier.

The value MUST be an appropriate value for the annotation.

## {#sec_AnnotateaJSONArrayorPrimitive}[20.2] [Annotate a JSON Array or Primitive](#AnnotateaJSONArrayorPrimitive)

W[hen annotating a name/value pair for which the value is represented as
a JSON array or primitive value, each annotation that applies to this
name/value pair MUST be represented as a single name/value pair and
placed immediately prior to the annotated name/value pair, with the
exception of the
]{style="color:black"}[`nextLink`](#ControlInformationnextLinkodatanextL)[
or
]{style="color:black"}[`collectionAnnotations`](#ControlInformationcollectionAnnotati)[
control information]{style="color:black"},[ which can appear immediately
before or after the annotated collection.
The name is the same as the name of the property or name/value pair
being annotated, followed by the "at" sign (`@`), followed by
the annotation identifier.

The value MUST be an appropriate value for the annotation.

## {#sec_AnnotateaPrimitiveValuewithinaJSONAr}[20.3] [Annotate a Primitive Value within a JSON Array](#AnnotateaPrimitiveValuewithinaJSONAr)

Individual primitive elements within a JSON array can be[ annotated by
applying the
]{style="color:black"}[`collectionAnnotations`](#ControlInformationcollectionAnnotati)[
control information to the array containing the primitive
member.
The control information must come with other annotations or control
information immediately before or after the collection valued property.
The name of the property representing the control information is the
same as the name of the collection-valued property, followed by the "at"
sign (`@`), followed by the
[`collectionAnnotations`](#ControlInformationcollectionAnnotati)
identifier.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_ErrorHandling}{#\_Representing_Errors_in}21[ ]{style="font:7.0pt "Times New Roman""}[Error Handling](#ErrorHandling) {#error-handling style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

OData requests may return a well formed [error
response](#ErrorResponse), an [in-stream
error](#InStreamError){#\_Hlt11961899}, or error information
[within a success payload](#ErrorInformationinaSuccessPayload).

## {#sec_ErrorResponse}[21.1] [Error Response](#ErrorResponse)

The error response MUST be a single JSON object. This object MUST have a
single name/value pair named `error`. The value must be an
OData error object.

The OData error object MUST contain name/value pairs with the names
`code` and `message`, and it MAY contain name/value
pairs with the names [target]{style="font-family:
"Courier New""}, `details`, and
`innererror`.

The value for the `code` name/value pair is a non-empty
language-independent string. Its value is a service-defined error code.
This code serves as a sub-status for the HTTP error code specified in
the response. It cannot be `null`.

The value for the `message` name/value pair is a non-empty,
language-dependent, human-readable string describing the error. The
`Content-Language` header MUST contain the language code from
[RFC5646](#rfc5646) corresponding to the language in which the
value for message is written. It cannot be `null`.

The value for the `target`
name/value pair is a potentially empty string indicating the target of
the error (for example, the name of the property in error). It can be
`null`.

The value for the `details` name/value pair MUST be an array
of JSON objects that MUST contain name/value pairs for
`code` and
`message`, and MAY contain a
name/value pair for `target`, as
described above.

The value for the `innererror` name/value pair MUST be an
object. The contents of this object are service-defined. Usually this
object contains information that will help debug the service.[
]{style="color:black;background:white"}

[Service implementations SHOULD carefully consider which information to
include in production environments to guard against potential security
concerns around information
disclosure.]{style="color:black;background:white"}

Error responses MAY contain [annotations](#InstanceAnnotations) in
any of its JSON objects.
 
::: example
Example ##ex:
```json
{
  "error": {
  "code": "err123",
  "message": "Unsupported functionality",
  "target": "query",
  "details": \{style="color:black"}

    {
     "code": "forty-two",
     "target": "$search", 
     "message": "$search query option not
supported"
    }
  \],
  "innererror": {
    "trace": \[...\],
    "context": {...}
  }
  }
}
```

## {#\_Ref356829963}{#sec_InStreamError}{#\_The_Content-Type_Header}{#\_Payload_Ordering_Constraints}21.2 [In-Stream Error](#InStreamError)

In the case that a service encounters an error after sending a success
status to the client, the service MUST leave the response malformed.
This can be achieved by immediately stopping response serialization and
thus omitting (among others) the end-object character of the top-level
JSON object in the response.

Services MAY include the header `OData-Error` as a trailing
header if supported by the transport protocol (e.g. with HTTP/1.1 and
chunked transfer encoding, or with HTTP/2), see
[OData-Protocol](#ODataProtocol).

The value of the `OData-Error` trailing header is an OData
error object as defined in the preceding chapter, represented in a
header-appropriate way:

- All
  optional whitespace (indentation and line breaks) is removed, especially
  (in hex notation) `09`, `0A` and `0D`

- Control
  characters (`00` to `1F` and `7F`) and
  Unicode characters beyond `00FF` within JSON strings are
  encoded as `\\uXXXX` or `\\uXXXX\\uXXXX` (see
  [RFC8259](#rfc_JSON), section 7)
 
::: example
Example ##ex: note that this is one HTTP header line without any line
breaks or optional whitespace
```json
OData-error: {"code":"err123","message":"Unsupported
functionality","target":"query","details":\[{"code":"forty-two","target":"$search","message":"$search
query option not supported"}\]}:::

## {#sec_ErrorInformationinaSuccessPayload}[21.3] [Error Information in a Success Payload](#ErrorInformationinaSuccessPayload)

Services may return error information within a success payload; for
example, if the client has specified the
`continue-on-error` preference.

### {#sec_PrimitiveValueErrors}[21.3.1] [Primitive Value Errors](#PrimitiveValueErrors)

Primitive values that are in error are annotated with the
`Core.ValueException` term, see
[OData-VocCore](#ODataVocCore). In this case, the payload MAY include
an approximation of the value and MAY specify a string representation of
the exact value in the `value` property of the annotation.

### {#sec_StructuredTypeErrors}[21.3.2] [Structured Type Errors](#StructuredTypeErrors)

Structured types that are in error can be represented within a success
payload only if the client has specified the
[continue-on-error]{style="font-family:
"Courier New""} preference. Such items are annotated with the
`Core.ResourceException` term, see
[OData-VocCore](#ODataVocCore). The annotation MAY include a
`retryLink` property that can be used by the client to
attempt to re-fetch the resource.

### {#sec_CollectionErrors}[21.3.3] [Collection Errors](#CollectionErrors)

Collections within a success payload can contain primitive values that
are in error, or structured values that are in error, if the client has
specified the `continue-on-error`
preference. Such elements are annotated as described above. Primitive
elements within a collection are annotated using the
[`collectionAnnotations`](#ControlInformationcollectionAnnotati)
control information.

Services can return partial collections within a success payload, for
example, if they encounter an error while retrieving the collection and
the client has specified the
`continue-on-error` preference. In
this case, the service MUST include a
[`nextLink`](#ControlInformationnextLinkodatanextL).
The [[nextLink]{style="font-family:
"Courier New""}](#ControlInformationnextLinkodatanextL)[
]{.Datatype}can be used to attempt retrieving the remaining members of
the collection and could return an error indicating that the remaining
members are not available.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_Extensibility}[22[ ]{style="font:7.0pt "Times New Roman""}][Extensibility](#Extensibility) {#extensibility style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

Implementations can add [instance annotations](#InstanceAnnotations)
of the form `\@namespace.termname` or
`property@namespace.termname` to any JSON object, where
`property` MAY or MAY NOT match the name of a name/value pair
within the JSON object. However, the namespace MUST NOT start with
`odata` and SHOULD NOT be required to be understood by the
receiving party in order to correctly interpret the rest of the payload
as the receiving party MUST ignore unknown annotations not defined in
this version of the OData JSON Specification.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_SecurityConsiderations}[23[ ]{style="font:7.0pt "Times New Roman""}][Security Considerations](#SecurityConsiderations) {#security-considerations style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

This specification raises no security issues.

This section is provided as a service to the application developers,
information providers, and users of OData version 4.0 giving some
references to starting points for securing OData services as specified.
OData is a REST-full multi-format service that depends on other services
and thus inherits both sides of the coin, security enhancements and
concerns alike from the latter.

For JSON-relevant security implications please cf. at least the relevant
subsections of [RFC8259](#rfc_JSON) as starting point.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_Conformance}[24[ ]{style="font:7.0pt "Times New Roman""}][Conformance](#Conformance) {#conformance style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

Conforming clients MUST be prepared to consume a service that uses any
or all of the constructs defined in this specification. The exception to
this are the constructs defined in [Delta Response](#DeltaPayload),
which are only required for clients that request changes.

 

In order to be a conforming _consumer_ of the OData JSON format, a
client or service:

1.[     ]{style="font:7.0pt "Times New Roman""}MUST either:

a.[     ]{style="font:7.0pt "Times New Roman""}understand
`metadata=minimal` (section 3.1.1) or

b.[     ]{style="font:7.0pt "Times New Roman""}explicitly specify
`metadata=none` (section 3.1.3) or `metadata=full`
(section 3.1.2) in the request (client)

2.[     ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
consume a response with full metadata

3.[     ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
receive all data types (section 7.1)

a.[      ]{style="font:7.0pt "Times New Roman""}defined in this
specification (client)

b.[      ]{style="font:7.0pt "Times New Roman""}exposed by the service
(service)

4.[     ]{style="font:7.0pt "Times New Roman""}MUST interpret all
`odata` control information defined according to the
`OData-Version` header of the
payload (section 4.5)

5.[     ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
receive any annotations[ ]{.MsoHyperlink}and control information not
defined in the `OData-Version`
header of the payload (section 21.2)

6.[     ]{style="font:7.0pt "Times New Roman""}MUST NOT require
`streaming=true` in the
`Content-Type` header (section 4.4)

7.[     ]{style="font:7.0pt "Times New Roman""}MUST be a conforming
consumer of the OData 4.0 JSON format, for payloads with an
`OData-Version` header value of
`4.0`.

a.[      ]{style="font:7.0pt "Times New Roman""}MUST accept the[
odata.]{style="font-family:"Courier New""} prefix, where defined, on
[format parameters](#ControllingtheAmountofControlInforma) and
[control information](#ControlInformation)

b.[      ]{style="font:7.0pt "Times New Roman""}MUST accept the [\#
]{style="font-family:"Courier New""}prefix in
[`\@odata.type`](#ControlInformationtypeodatatype)
values

c.[       ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
handle binding through the use of the
[`\@odata.bind`](#BindOperation)
property in payloads to a `PATCH`,
`PUT`, or
[POST]{style="font-family:
"Courier New""} request

d.[      ]{style="font:7.0pt "Times New Roman""}MUST accept
`TargetId` within in a [deleted
link](#DeletedLink) for a relationship with a maximum cardinality of
one

e.[      ]{style="font:7.0pt "Times New Roman""}MUST accept the string
values `-INF`,
`INF`, and
[NaN]{style="font-family:
"Courier New""} for single and double values

f.[        ]{style="font:7.0pt "Times New Roman""}MUST support
property annotations that appear immediately before or after the
property they annotate

8.[     ]{style="font:7.0pt "Times New Roman""}MAY be a conforming
consumer of the OData 4.01 JSON format, for payloads with an
`OData-Version` header value of
`4.01`.

a.[      ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
interpret [control information](#ControlInformation) with or without
the `odata.` prefix

b.[      ]{style="font:7.0pt "Times New Roman""}MUST be prepared for
[`\@odata.type`](#ControlInformationtypeodatatype)
primitive values with or without the
`\#` prefix

c.[       ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
handle binding through inclusion of an entity reference within a
collection-valued navigation property in the body of a
[PATCH]{style="font-family:
"Courier New""}, `PUT`, or
`POST` request

d.[      ]{style="font:7.0pt "Times New Roman""}MUST be prepared for
`TargetId` to be included or
omitted in a [deleted link](#DeletedLink) for a relationship with a
maximum cardinality of one

e.[      ]{style="font:7.0pt "Times New Roman""}MUST accept the string
values `-INF`,
`INF`, and
[NaN]{style="font-family:
"Courier New""} for decimal values with floating scale

[[f.[       
]{style="font:7.0pt "Times New Roman""}]{style="color:windowtext"}]{.MsoHyperlink}MUST
be prepared to handle related entities inline within a [delta
payload](#DeltaPayload)[ ]{.MsoHyperlink}[[as well as a nested delta
representation for the
collection]{style="color:windowtext"}]{.MsoHyperlink}

g.[      ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
handle decimal values written in exponential notation

 

In order to be a conforming _producer_ of the OData JSON format, a
client or service:

9.[     ]{style="font:7.0pt "Times New Roman""}MUST support generating
OData 4.0 JSON compliant payloads with an
`OData-Version` header value of
`4.0`.

a.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT omit the
`odata.` prefix from [format
parameters](#ControllingtheAmountofControlInforma) or [control
information](#ControlInformation)

b.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT omit the
`\#` prefix from
[`\@odata.type`](#ControlInformationtypeodatatype)[
]{style="font-family:"Courier New""}values

c.[       ]{style="font:7.0pt "Times New Roman""}MUST NOT include
entity values or entity references within a collection-valued navigation
property in the body of a `PATCH`,
`PUT`, or
[POST]{style="font-family:
"Courier New""} request

d.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT return
decimal values written in exponential notation unless the
[`ExponentialDecimals`](#ControllingtheRepresentationofNumber)
format parameter is specified.

e.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT advertise
available actions or functions using name/value pairs prefixed with a
property name

f.[        ]{style="font:7.0pt "Times New Roman""}MUST NOT return a
null value for name/value pairs representing actions or functions that
are not available

g.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT represent
numeric value exceptions for values other than single and double values
using the string values `-INF`,
`INF`, and
[NaN]{style="font-family:
"Courier New""}

10.[  ]{style="font:7.0pt "Times New Roman""}MAY support generating
OData 4.01 JSON compliant payloads for requests with an
[OData-Version]{style="font-family:
"Courier New""} header value of [4.01]{style="font-family:
"Courier New""}.

a.[      ]{style="font:7.0pt "Times New Roman""}MUST return property
annotations immediately before the property they annotate

b.[      ]{style="font:7.0pt "Times New Roman""}SHOULD omit the
`odata.` prefix from [format
parameters](#ControllingtheAmountofControlInforma) and [odata
control information](#ControlInformation)

c.[       ]{style="font:7.0pt "Times New Roman""}SHOULD omit the
`\#` prefix from
[`\@type`](#ControlInformationtypeodatatype)
primitive values

d.[      ]{style="font:7.0pt "Times New Roman""}MAY include inline
related entities or nested delta collections within a delta payload

e.[      ]{style="font:7.0pt "Times New Roman""}MAY include
`TargetId` within a [deleted
link](#DeletedLink) for a relationship with a maximum cardinality of
1

f.[        ]{style="font:7.0pt "Times New Roman""}MAY return decimal
values written in exponential notation

g.[      ]{style="font:7.0pt "Times New Roman""}MAY represent numeric
value exceptions for decimal values with floating scale using the string
values `-INF`,
`INF`, and
[NaN]{style="font-family:
"Courier New""}

In addition, in order to conform to the OData JSON format, a service:

11.[  ]{style="font:7.0pt "Times New Roman""}MUST comply with one of
the conformance levels defined in
[[\[OData-Protocol\]]{style="color:windowtext"}](#ODataProtocol)

12.[  ]{style="font:7.0pt "Times New Roman""}MUST support the
`application/json` media type in the Accept header (section 3)

13.[  ]{style="font:7.0pt "Times New Roman""}MUST return well-formed
JSON payloads

14.[  ]{style="font:7.0pt "Times New Roman""}MUST support
`odata.metadata=full` (section 3.1.2)

15.[  ]{style="font:7.0pt "Times New Roman""}MUST include the
`odata.nextLink` control information in partial results for
entity collections (section 4.5.5)

16.[  ]{style="font:7.0pt "Times New Roman""}MUST support entity
instances with external metadata (section 4.5.1)

17.[  ]{style="font:7.0pt "Times New Roman""}MUST support properties
with externally defined data types (section 4.5.3)

18.[  ]{style="font:7.0pt "Times New Roman""}MUST NOT violate any
other aspects of this OData JSON specification

19.[  ]{style="font:7.0pt "Times New Roman""}SHOULD support the
`$format`  system query option (section 3)

20.[  ]{style="font:7.0pt "Times New Roman""}MAY support the
`odata.streaming=true` parameter in the `Accept`
header (section 4.4)

21.[  ]{style="font:7.0pt "Times New Roman""}MAY return full metadata
regardless of `odata.metadata` (section 3.1.2)

22.[  ]{style="font:7.0pt "Times New Roman""}MUST NOT omit null or
default values unless the `omit-values` preference is
specified in the `Prefer` request header and the omit-values
preference is included in the `Preference-Applied` response
header

23.[  ]{style="font:7.0pt "Times New Roman""}MUST return OData JSON
4.0-compliant responses for requests with an
`OData-MaxVersion` header value of `4.`0

24.[  ]{style="font:7.0pt "Times New Roman""}MUST support OData JSON
4.0-compliant payloads in requests with an `OData-Version`
header value of `4.0`

25.[  ]{style="font:7.0pt "Times New Roman""}MUST support returning,
in the final response to an asynchronous request, the
`application/json` payload that would have been returned had
the operation completed synchronously, wrapped in an application/http
message

 

In addition, in order to comply with the OData 4.01 JSON format, a
service:

[[26.[ 
]{style="font:7.0pt "Times New Roman""}]{style="font-family:"Arial",sans-serif"}]{.Datatype}SHOULD
return the OData JSON 4.01 format for requests with an
`OData-MaxVersion` header value of `4.01`

27.[  ]{style="font:7.0pt "Times New Roman""}MUST support the OData
JSON 4.01 format in request payloads for requests with an
`OData-Version` header value of `4.01`

28.[  ]{style="font:7.0pt "Times New Roman""}MUST honor the
[[[odata.etag]{style="color:windowtext"}]{.Datatype}](#ControlInformationetagodataetag)
control information within `PUT`, `PATCH` or
`DELETE` payloads, if specified

29.[  ]{style="font:7.0pt "Times New Roman""}MUST support returning,
in the final response to an asynchronous request, the
`application/json` payload that would have been returned had
the operation completed synchronously

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
{#sec_Acknowledgments}Appendix
A.[ 
]{style="font:7.0pt "Times New Roman""}[Acknowledgments](#Acknowledgments)
:::

The contributions of the OASIS OData Technical Committee members,
enumerated in [OData-Protocol](#ODataProtocol), are gratefully
acknowledged.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
{#sec_RevisionHistory}[Appendix
B.[  ]{style="font:7.0pt "Times New Roman""}][Revision History](#RevisionHistory)
:::

+-----------------+-----------------+-----------------+-----------------+
| **Revision** | **Date** | **Editor** | **Changes |
| | | | Made** |
+-----------------+-----------------+-----------------+-----------------+
| Working Draft | 2016-06-22 | Michael Pizzo | Import material |
| 01 | | | from OData 4.0 |
| | | Ralf Handl | Errata 3 JSON |
| | | | document and |
| | | | initial |
| | | | application of |
| | | | 4.01 features |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2016-12-08 | Michael Pizzo | Integrated 4.01 |
| Specification | | | features |
| Draft 01 | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2017-06-08 | Michael Pizzo | Integrated more |
| Specification | | | 4.01 features, |
| Draft 02 | | Ralf Handl | especially: |
| | | | |
| | | | |
| | | | ] |
| | | | {style="font:7. |
| | | | 0pt "Times New |
| | | | Roman""}]{sty |
| | | | le="font-family |
| | | | :Symbol"}Update |
| | | | of a collection |
| | | | of entities |
| | | | |
| | | | |
| | | | ]{style="font: |
| | | | 7.0pt "Times N |
| | | | ew Roman""}]{s |
| | | | tyle="font-fami |
| | | | ly:Symbol"}JSON |
| | | | Batch format |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2017-09-22 | Michael Pizzo | Incorporated |
| Specification | | | review feedback |
| Draft 03 | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2017-11-10 | Michael Pizzo | Incorporated |
| Specification | | | review feedback |
| Draft 04 | | Ralf Handl | |
| | | | Changed default |
| | | | of |
| | | | [continue-on-er |
| | | | ror]{.Datatype} |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2017-12-19 | Michael Pizzo | Non-Material |
| Specification | | | Changes |
| 01 | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2019-06-21 | Michael Pizzo | In-stream |
| Specification | | | errors |
| Draft 05 | | Ralf Handl | |
| | | | Conditional |
| | | | request |
| | | | dependencies in |
| | | | batch requests |
| | | | |
| | | | Optional action |
| | | | parameters |
| | | | |
| | | | Update of media |
| | | | links of stream |
| | | | properties |
| | | | |
| | | | Representing |
| | | | error |
| | | | information in |
| | | | success |
| | | | responses with |
| | | | [continue-on-er |
| | | | ror]{.Datatype} |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2019-09-20 | Michael Pizzo | No dependencies |
| Specification | | | to async |
| Draft 06 | | Ralf Handl | requests within |
| | | | a batch request |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2019-11-05 | Michael Pizzo | Non-material |
| Specification | | | changes |
| 02 | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Candidate OASIS | 2020-01-15 | Michael Pizzo | Non-material |
| Standard 01 | | | changes |
| | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Candidate OASIS | 2020-04-09 | Michael Pizzo | Non-material |
| Standard 02 | | | changes |
| | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+

 
:::
```
