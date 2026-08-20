
-------

# ##sec Service Document

The service document is represented exactly as defined in
[OData-JSON](#ODataJSON).

The entries of a service document have no positional property list: they
are not instances of a type declared in the model, their members are
fixed by [OData-JSON](#ODataJSON) rather than by the model, and a service
document is small and requested once. A compact representation would
carry no benefit.

A service MUST accept a request for the service document with the
`compact=true` format parameter and MUST respond with the representation
defined in [OData-JSON](#ODataJSON), labeled `compact=true`. This follows
from the [superset principle](#supersetprinciple) and replaces the
behavior of returning an error.

-------

# ##sec Error Response

An error response is represented exactly as defined in
[OData-JSON](#ODataJSON).

The members of an error object are fixed by [OData-JSON](#ODataJSON)
rather than by the model, no context URL and therefore no select-list
applies to them, and an error response is not a large payload. A compact
representation would carry no benefit.

The `details` member of an error remains a JSON array of JSON objects.

::: example
Example ##ex: an error returned in response to a request that specified
`compact=true`
```
Content-Type: application/json;compact=true

{
  "error": {
    "code": "501",
    "message": "Unsupported functionality"
  }
}
```
:::

-------

# ##sec Batch Requests and Responses

The JSON batch format defined in [OData-JSON](#ODataJSON) applies
unchanged. The `requests` and `responses` members remain JSON arrays of
JSON objects whose members are fixed by [OData-JSON](#ODataJSON).

The `body` of an individual request or response within a batch MAY use
the compact JSON format, in which case the individual request or response
MUST carry a `Content-Type` header including the `compact=true` format
parameter, and the rules of this document apply to that body.

The `compact` format parameter of the batch request itself applies to the
batch document, not to the bodies of the individual requests it contains.
Because the batch document has no compact representation, a batch request
labeled `compact=true` is identical to one that is not.

::: example
Example ##ex: a batch request in which one individual request carries a
compact body
```json
{
  "requests": [
    {
      "id": "1",
      "method": "post",
      "url": "Customers",
      "headers": { "content-type": "application/json;compact=true" },
      "body": {
        "@context": "$metadata#Customers(ID,Name)/$entity",
        "_": ["ALFKI", "Alfreds Futterkiste"]
      }
    }
  ]
}
```
:::
