
-------

# ##sec Media Entity

Media entities are entities that describe a media resource, for example
a photo. They are represented as entities that contain additional
[`media*`](#ControlInformationmediaodatamedia) control information.

If the actual stream data for the media entity is included, it is
represented as property named `$value` whose
string value is the base64url-encoded value of the media stream, see [RFC4648](#rfc4648).

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Employees/$entity",
  "@mediaReadLink": "Employees(1)/$value",
  "@mediaContentType": "image/jpeg",
  "$value": "…base64url encoded value…",
  "ID": 1,
  …
}
```
:::

-------

# ##sec Individual Property or Operation Response

An individual property or operation response is represented as a JSON
object.

A single-valued property or operation response that has the
`null` value and carries no [control information](#ControlInformation)
or [instance annotations](#InstanceAnnotations)
does not have a representation; see
[OData-Protocol](#ODataProtocol).

A property or operation response that is of a primitive type is
represented as an object with a name/value pair whose name is
`value` and whose value is a [primitive
value](#PrimitiveValue) or `null`.

A property or operation response that is of complex type is represented
as a [complex value](#ComplexValue). If the value is `null`, the JSON object
consists of name/value pairs for the `@context` and the
[control information](#ControlInformation)
and [instance annotations](#InstanceAnnotations) only.

A property or operation response that is of a collection type is
represented as an object with a name/value pair whose name is
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
:::

::: example
Example ##ex:  collection of primitive values
```json
{
  "@context": "http://host/service/$metadata#Collection(Edm.String)",
  "value": ["small", "medium", "extra large"]
}
```
:::

::: example
Example ##ex:  empty collection of primitive values
```json
{
  "@context": "http://host/service/$metadata#Collection(Edm.String)",
  "value": []
}
```
:::

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
:::

::: example
Example ##ex: empty collection of complex values
```json
{
  "@context": "http://host/service/$metadata#Collection(Model.Address)",
  "value": []
}
```
:::

::: example
Example ##ex: An action is invoked when a utilities customer moves into a building,
it returns the address. After a successful move-in it might return the
`null` value accompanied by an instance annotation:
```json
{
  "@context": "http://host/service/$metadata#Model.Address",
  "@Core.Messages": [{
    "code": "EADDRESS",
    "message": "Street name not yet determined",
    "severity": "error"
  }]
}
```
:::

Note: the context URL is optional in requests.

-------

# ##sec Collection of Operation Responses

Invoking a bound action or function with `/$each` on each
member of a collection in one request results in a collection of
operation results, which is represented as a JSON object containing a
name/value pair named `value`. It MAY contain
[`context`](#ControlInformationcontextodatacontext),
[`type`](#ControlInformationtypeodatatype),
[`count`](#ControlInformationcountodatacount),
or [`nextLink`](#ControlInformationnextLinkodatanextLink) control information.

If present, the `context` control information MUST be the
first name/value pair in the response.

The `count` name/value pair represents the number of operation
responses in the collection. If present and the
[`streaming=true`](#PayloadOrderingConstraints) media type parameter is set, it MUST come
before the `value` name/value pair. If the response
represents a partial result, the `count` name/value pair MUST
appear in the first partial response, and it MAY appear in subsequent
partial responses (in which case it may vary from response to
response).

The value of the `value` name/value pair is an array of
objects, each object representing a single [operation response](#IndividualPropertyorOperationResponse).
Note: if the operation response is a collection, each single operation response
object itself contains a name/value pair named `value`.

-------

# ##sec Collection of Entities

A collection of entities is represented as a JSON object containing a
name/value pair named `value`. It MAY contain
[`context`](#ControlInformationcontextodatacontext),
[`type`](#ControlInformationtypeodatatype),
[`count`](#ControlInformationcountodatacount),
[`nextLink`](#ControlInformationnextLinkodatanextLink), or
[`deltaLink`](#ControlInformationdeltaLinkodatadeltaLink) control information.

If present, the `context` control information MUST be the
first name/value pair in the response.

The `count` name/value pair represents the number of entities
in the collection. If present and the [`streaming=true`](#PayloadOrderingConstraints)
media type parameter is set, it MUST come before the
`value` name/value pair. If the response represents a partial
result, the `count` name/value pair MUST appear in the first
partial response, and it MAY appear in subsequent partial responses (in
which case it may vary from response to
response).

The value of the `value` name/value pair is a JSON array
where each element is [representation of an entity](#Entity) or a
[representation of an entity reference](#EntityReference).
An empty collection is represented as an empty JSON array.

Functions or actions that are bound to this collection of entities are
advertised in the "wrapper object" in the same way as
[functions](#BoundFunction) or [actions](#BoundAction) are
advertised in the object representing a single entity.

The [`nextLink`](#ControlInformationnextLinkodatanextLink)
control information MUST be included in a response that represents a
partial result.

::: example
Example ##ex:
```json
{
  "@context": "…",
  "@count": 37,
  "value": [
    { … },
    { … },
    { … }
  ],
  "@nextLink": "…?$skiptoken=342r89"
}
```
:::

-------

# ##sec Entity Reference

An entity reference (see [OData-Protocol](#ODataProtocol)) MAY take the
place of an entity in a JSON payload, based on the client request. It
is serialized as a JSON object that MUST contain the [id](#ControlInformationidodataid) of the referenced
entity and MAY contain the [`type`](#ControlInformationtypeodatatype)
control information and [instance annotations](#InstanceAnnotations), but no additional properties or
control information.

A collection of entity references is represented as a [collection of entities](#CollectionofEntities),
with entity reference representations instead of entity representations as items in the array value of the `value` name/value pair.

The outermost JSON object in a response MUST contain a
[`context`](#ControlInformationcontextodatacontext)
control information and MAY contain
[`count`](#ControlInformationcountodatacount),
[`nextLink`](#ControlInformationnextLinkodatanextLink), or
[`deltaLink`](#ControlInformationdeltaLinkodatadeltaLink) control information.

::: example
Example ##ex: entity reference to order 10643
```json
{
  "@context": "http://host/service/$metadata#$ref",
  "@id": "Orders(10643)"
}
```
:::

::: example
Example ##ex: collection of entity references
```json
{
  "@context": "http://host/service/$metadata#Collection($ref)",
  "value": [
    { "@id": "Orders(10643)" },
    { "@id": "Orders(10759)" }
  ]
}
```
:::
