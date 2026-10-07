
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
        "$": ["ALFKI", "Alfreds Futterkiste"]
      }
    }
  ]
}
```
:::
