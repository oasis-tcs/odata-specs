
-------

# ##sec Service Document

A service document in JSON is represented as a single JSON object with
at least the [`context`](#ControlInformationcontextodatacontext)
control information and a property `value`.

The value of the [`context`](#ControlInformationcontextodatacontext)
control information MUST be the URL of the metadata document, without
any fragment part.

The value of the `value` property MUST be a JSON array
containing one element for each entity set and function import with an
explicit or default value of `true` for the attribute
`IncludeInServiceDocument` and each singleton exposed by the
service, see [OData-CSDL](#ODataCSDL).

Each element MUST be a JSON object with at least two name/value pairs,
one with name `name` containing the name of the entity set,
function import, or singleton, and one with name `url`
containing the URL of the entity set, which may be an absolute or a
[relative URL](#RelativeURLs). It MAY contain a name/value pair with
name `title` containing a human-readable, language-dependent
title for the object.

JSON objects representing an entity set MAY contain an additional
name/value pair with name `kind` and a value of
`EntitySet`. If the `kind` name/value pair is not
present, the object MUST represent an entity set.

JSON objects representing a function import MUST contain the
`kind` name/value pair with a value of
`FunctionImport`.

JSON objects representing a singleton MUST contain the `kind`
name/value pair with a value of `Singleton`.

JSON objects representing a related service document MUST contain the
`kind` name/value pair with a value of
`ServiceDocument`.

Clients that encounter unknown
values of the `kind` name/value pair not defined in this
version of the specification MUST NOT stop processing and MUST NOT
signal an error.

Service documents MAY contain [annotations](#InstanceAnnotations) in
any of its JSON objects. Services MUST NOT produce name/value pairs
other than the ones explicitly defined in this section, and clients MUST
ignore unknown name/value pairs.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata",
  "value": [
    {
      "name": "Orders",
      "kind": "EntitySet",
      "url":  "Orders"
    },
    {
      "name":  "OrderItems",
      "title": "Order Details",
      "url":   "OrderItems"
    },
    {
      "name":  "TopProducts",
      "title": "Best-Selling Products",
      "kind":  "FunctionImport",
      "url":   "TopProducts"
    },
    {
      "name":  "MainSupplier",
      "title": "Main Supplier",
      "kind":  "Singleton",
      "url":   "MainSupplier"
    },
    {
      "name": "Human Resources",
      "kind": "ServiceDocument",
      "url":  "http://host/HR/"
    }
  ]
}
```
:::

-------

# ##sec Entity

An entity is serialized as a JSON object. It MAY contain
[`context`](#ControlInformationcontextodatacontext),
[`type`](#ControlInformationtypeodatatype),
or [`deltaLink`](#ControlInformationdeltaLinkodatadeltaLink)
control information.

Related entities MAY be included in the serialization as values of [navigation properties](#NavigationProperty)
or their [navigation](#NavigationLink) or [association](#AssociationLink) links.
Each [structural property](#StructuralProperty) or related entity to be transmitted is
represented as a name/value pair within the object. The order in which the pairs
appear within the object is considered insignificant.

An entity in a payload may be a complete entity, a projected entity (see
[#OData-Protocol#SystemQueryOptionselect]), or a partial entity update (see
[#OData-Protocol#UpdateanEntity]).

An entity representation can be (modified and) round-tripped to the
service directly. The [context
URL](#ControlInformationcontextodatacontext) is used in requests only
as a base for [relative URLs](#RelativeURLs).

::: example
Example ##ex: entity with `metadata=minimal`
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  "ID": "ALFKI",
  "CompanyName": "Alfreds Futterkiste",
  "ContactName": "Maria Anders",
  "ContactTitle": "Sales Representative",
  "Phone": "030-0074321",
  "Fax": "030-0076545",
  "Address": {
    "Street": "Obere Str. 57",
    "City": "Berlin",
    "Region": null,
    "PostalCode": "D-12209"
  }
}
```

Example ##ex: entity with `metadata=full`
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  "@id": "Customers('ALFKI')",
  "@etag": "W/\"MjAxMy0wNS0yN1QxMTo1OFo=\"",
  "@editLink": "Customers('ALFKI')",
  "ID": "ALFKI",
  "CompanyName": "Alfreds Futterkiste",
  "ContactName": "Maria Anders",
  "ContactTitle": "Sales Representative",
  "Phone": "030-0074321",
  "Fax": "030-0076545",
  "Address": {
    "Street": "Obere Str. 57",
    "City": "Berlin",
    "Region": null,
    "PostalCode": "D-12209",
    "Country@associationLink": "Customers('ALFKI')/Address/Country/$ref",
    "Country@navigationLink": "Customers('ALFKI')/Address/Country"
  },
  "Orders@associationLink": "Customers('ALFKI')/Orders/$ref",
  "Orders@navigationLink": "Customers('ALFKI')/Orders"
}
```
:::
