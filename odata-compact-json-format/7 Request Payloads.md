
-------

# ##sec Request Payloads

Large collections of entities and complex values occur in request bodies
as well as in response bodies, and the saving from a positional
representation is the same in both directions. A request body MAY
therefore use the positional representation wherever a response body may.

A client MUST NOT send a compact request body unless it has established
that the service supports the compact JSON format; see [section
##RequestingtheCompactJSONFormat].

## ##subsec Determining the Positional Property List in Requests

[OData-Protocol](#ODataProtocol) notes that request payloads generally do
not require context URLs, because the type of the payload can be
determined from the request URL. A compact request body needs more than
the type: it needs the positional property list.

The positional property list of an instance in a request body is
determined as follows:

1. If the request body contains the [`context`](#ControlInformationcontext)
   control information, the positional property list is determined from
   its select-list exactly as for a response, as described in [section
   ##DeterminingthePositionalPropertyList].

2. Otherwise, the positional property list is the *default selection* of
   the type of the instance: all structural properties of that type, in
   the order in which they are declared, with the properties declared by
   a base type preceding those declared by the type itself.

The type of the instance is determined from the request URL for the
instance in the message body, and from the metadata of the containing
type for nested instances, exactly as it is for the format defined in
[OData-JSON](#ODataJSON).

A request body that includes the `context` control information MUST use a
context URL that is valid for the resource addressed by the request URL,
as defined in [#OData-Protocol#ContextURL]. The context URL in a request
body describes the body; it does not modify the request.

A service MUST reject with `400 Bad Request` a compact request body whose
positional representation does not have the number of items required by
the positional property list.

## ##subsec Message Body of a Request

The message body of a compact request MAY be a JSON array, in which case
it is the positional representation of the instance addressed by the
request URL, or a collection of such representations, and the positional
property list is the default selection of the type addressed by the
request URL.

This is the only case in which a message body is not a JSON object. It is
available in requests only, because only in a request does the request URL
identify the type of the payload.

::: example
Example ##ex_postbare: creating an entity with values for all its
structural properties; the positional property list is the default
selection of `Customer`
```
POST ~/Customers
Content-Type: application/json;compact=true

["ALFKI", "Alfreds Futterkiste", ["Obere Str. 57", "Berlin", "12209"]]
```
:::

## ##subsec Creating an Entity

An entity to be created MAY be represented positionally. Properties that
the client does not wish to specify -- leaving them to the service to
default -- MUST NOT be represented by `null`, which would request the value
null. They are instead excluded from the positional property list, which
requires the request body to carry a `context` control information whose
select-list enumerates exactly the properties being specified.

::: example
Example ##ex_postselect: creating an entity specifying only two
properties, leaving the remainder to the service
```
POST ~/Customers
Content-Type: application/json;compact=true

{
  "@context": "$metadata#Customers(ID,Name)/$entity",
  "_": ["ALFKI", "Alfreds Futterkiste"]
}
```
:::

## ##subsec Updating an Entity

The semantics of `PATCH` defined in [OData-Protocol](#ODataProtocol) rest
on the distinction between a property that is present in the request body,
whose value is applied, and a property that is absent, which is left
unchanged. In a positional representation a value cannot be absent
without shifting every subsequent value.

The select-list of the `context` control information carries this
distinction: the positional property list *is* the list of properties to
be updated. A property that is not in the positional property list is
absent from the request in the sense of
[OData-Protocol](#ODataProtocol) and is left unchanged. A property that
is in the positional property list with the value `null` is set to null.

A `PATCH` request body that does not contain the `context` control
information therefore specifies a value for every structural property of
the type, which is rarely the intent. Clients SHOULD include the `context`
control information in compact `PATCH` request bodies.

::: example
Example ##ex_patch: updating two properties of an entity and leaving all
others unchanged; `Region` is set to null, `Name` is set to a new value,
and every property not named in the context URL is unaffected
```
PATCH ~/Customers('ALFKI')
Content-Type: application/json;compact=true

{
  "@context": "$metadata#Customers(Name,Region)/$entity",
  "_": ["Alfred's Futterkiste", null]
}
```
:::

For `PUT`, the semantics defined in [OData-Protocol](#ODataProtocol) apply
unchanged: properties not specified in the request body are reset to their
default values. As for `PATCH`, the properties specified are those in the
positional property list.

## ##subsec Updating a Collection of Entities

A request body that updates a collection of entities is a [delta
payload](#DeltaPayload) with the context URL fragment `#$delta`, as
defined in [#OData-Protocol#DeltaPayload]. Its items MAY be represented
positionally, as described in [section ##DeltaPayload].

## ##subsec Deep Insert

A deep insert specifies related entities alongside the entity being
created. Related entities occupy a position in the positional property
list of the containing entity, exactly as an expanded navigation property
does in a response, and the select-list of the `context` control
information enumerates them using the same syntax.

::: example
Example ##ex_deepinsert: creating a customer together with two orders
```
POST ~/Customers
Content-Type: application/json;compact=true

{
  "@context": "$metadata#Customers(ID,Name,Orders(ID,Amount))/$entity",
  "_": [
    "ALFKI",
    "Alfreds Futterkiste",
    [[10643, 29.46], [10692, 61.02]]
  ]
}
```
:::

## ##subsec Bind Operations

A bind operation relates a new or updated entity to an existing entity.
[OData-JSON](#ODataJSON) represents it as a name/value pair
`Property@bind` or `Property@id` on the containing object.

In a compact request body the navigation property occupies a position in
the positional property list, and the bind operation is carried in a
[wrapper object](#wrapperobject) at that position, as a property
annotation, following [section ##PropertyAnnotations].

::: example
Example ##ex_bind: creating an order bound to an existing customer
```
POST ~/Orders
Content-Type: application/json;compact=true

{
  "@context": "$metadata#Orders(ID,Amount,Customer)/$entity",
  "_": [
    10643,
    29.46,
    { "@id": "Customers('ALFKI')" }
  ]
}
```
:::

## ##subsec Action and Function Parameters

The parameters of an action invoked with `POST`, or of a function invoked
with parameter aliases, are represented as defined in
[OData-JSON](#ODataJSON): a JSON object whose name/value pairs are the
parameter names and values. The parameter *values* MAY use the positional
representation, following the rules of this document, with the positional
property list of each value being the default selection of the
parameter's declared type.

::: example
Example ##ex_action: an action taking a collection of complex values; the
parameter object is unchanged, the collection is positional
```
POST ~/Customers('ALFKI')/Model.AddAddresses
Content-Type: application/json;compact=true

{
  "addresses": [
    ["Obere Str. 57", "Berlin", "12209"],
    ["Neue Str. 1", "Hamburg", "20095"]
  ]
}
```
:::
