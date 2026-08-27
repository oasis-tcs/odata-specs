
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
```
```json
{
  "error": {
    "code": "501",
    "message": "Unsupported functionality"
  }
}
```
:::
