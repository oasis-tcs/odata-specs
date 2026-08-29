
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

A compact request body MUST contain the
[`context`](#ControlInformationcontext) control information, and its
context URL MUST carry a select-list meeting the requirements of [section
##DeterminingthePositionalPropertyList]. The positional property list is
then determined from that select-list exactly as it is for a response.

This requirement is more pointed for requests than for responses. A service
producing a response knows which version of the CSDL document it used; a
client composing a request body may not know, and nothing in the request
conveys it. Without an enumerated select-list there is no well-defined way
for the service to learn what the client placed at each position.

The context URL of a request body MUST be valid for the resource addressed
by the request URL, as defined in [#OData-Protocol#ContextURL]. It
describes the body; it does not modify the request.

A service MUST reject with `400 Bad Request` a compact request body that
omits the `context` control information, or whose context URL does not
carry a conforming select-list.

A service MUST reject with `400 Bad Request` a compact request body whose
positional representation does not have the number of items required by
the positional property list.

## ##subsec Message Body of a Request

The message body of a compact request is a single JSON object, as it is for
a response and as [OData-JSON](#ODataJSON) requires. It is never a bare
JSON array.

[OData-JSON](#ODataJSON) wraps a request body in an object deliberately, so
that there is always somewhere to put control information and annotations,
and so that the shape of the body does not depend on whether any such
information happens to be present. A compact request body has the further
need to carry its [`context`](#ControlInformationcontext), which a bare
array could not do.

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
```
```json
{
  "@context": "$metadata#Customers(ID,Name)/$entity",
  "$": ["ALFKI", "Alfreds Futterkiste"]
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
```
```json
{
  "@context": "$metadata#Customers(Name,Region)/$entity",
  "$": ["Alfred's Futterkiste", null]
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
```
```json
{
  "@context": "$metadata#Customers(ID,Name,Orders(ID,Amount))/$entity",
  "$": [
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
```
```json
{
  "@context": "$metadata#Orders(ID,Amount,Customer)/$entity",
  "$": [
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
parameter names and values.

A parameter value MUST NOT use the positional representation. A parameter
payload carries no context URL, and [OData-Protocol](#ODataProtocol)
defines no context URL template for one, so there is no way to convey the
select-list that [section ##DeterminingthePositionalPropertyList]
requires.

This is a real limitation rather than a considered exclusion: an action
taking a large collection of entities or complex values is exactly the kind
of payload this format exists to compact. That no context URL template has
been needed for a parameter payload so far --- the case arises only in
requests --- is not a reason not to define one. The Technical Committee
intends to develop proposals; see open issue 1(b).

::: example
Example ##ex_action: an action taking a collection of complex values. Each
address is represented as defined in [OData-JSON](#ODataJSON), because no
select-list is available for the parameter's declared type.
```
POST ~/Customers('ALFKI')/Model.AddAddresses
Content-Type: application/json;compact=true
```
```json
{
  "addresses": [
    { "Street": "Obere Str. 57", "City": "Berlin",  "PostalCode": "12209" },
    { "Street": "Neue Str. 1",   "City": "Hamburg", "PostalCode": "20095" }
  ]
}
```
:::
