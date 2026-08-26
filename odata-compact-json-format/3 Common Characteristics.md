
-------

# ##sec Common Characteristics

## ##subsec Header Content-Type

Requests and responses with a compact JSON message body MUST have a
`Content-Type` header value of `application/json` and MUST include the
`compact` parameter with a value of `true`.

All other rules for the `Content-Type` header defined in
[OData-JSON](#ODataJSON) apply unchanged, including the `charset`,
`metadata`, `IEEE754Compatible` and `streaming` parameters.

::: example
Example ##ex: a compact response that follows the payload ordering
constraints and represents `Edm.Int64` and `Edm.Decimal` values as strings
```
Content-Type: application/json;compact=true;metadata=minimal;
              IEEE754Compatible=true;streaming=true
```
:::

## ##subsec Message Body

Each message body is represented as a single JSON object, as defined in
[OData-JSON](#ODataJSON), with the single exception described in [section
##MessageBodyofaRequest]. A response message body is always a JSON
object: the positional representation applies to the instances *within*
the payload, not to the payload as a whole.

This object is either

- the representation of an [entity](#Entity), an [entity
  reference](#EntityReferences) or a [complex value](#ComplexValue) that
  is not represented positionally, or
- a [wrapper object](#wrapperobject), whose value is the correct
  representation for the payload's content.

The name of the value in a wrapper object is `_`. The name `value` is also
recognized, but only in those message bodies in which
[OData-JSON](#ODataJSON) itself uses it; see [section ##TheWrapperObject].

::: example
Example ##ex: a message body containing a collection of entities
represented positionally
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "_": [
    ["ALFKI", "Alfreds Futterkiste"],
    ["ANATR", "Ana Trujillo Emparedados y helados"]
  ]
}
```
:::

Receivers MUST retain the order of items within an array in a compact
payload. In a positional representation the order of items is significant
and carries the mapping from values to properties; a receiver that
reorders array items loses information.

## ##subsec Payload Ordering Constraints

The ordering constraints defined in [OData-JSON](#ODataJSON) apply to the
JSON objects in a compact payload, and MUST only be assumed if explicitly
indicated by the `streaming=true` format parameter in the `Content-Type`
header.

A positional representation is inherently ordered, and satisfies by
construction the constraints that [OData-JSON](#ODataJSON) imposes on the
sequence of properties within an instance. The constraints that remain
meaningful for a compact payload are those on the JSON objects it still
contains, namely the message body and any [wrapper
object](#wrapperobject):

- If present, the [`context`](#ControlInformationcontext) control
  information MUST be the first name/value pair in the JSON object.
- For deleted entities, the `removed` control information MUST appear
  after `context`, if present, and before any other name/value pair.
- The `type` control information, if present, MUST appear next in the JSON
  object.
- The `id` and `etag` control information MUST appear before the value.
- The value, named `value` or `_`, MUST appear last in a wrapper object,
  with the exception of the `nextLink` of a collection, which MAY appear
  after the collection it annotates.

Producers of compact payloads are encouraged to follow the payload
ordering constraints whenever possible and to include the
`streaming=true` format parameter.
