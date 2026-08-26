
-------

# ##sec Delta Payload

A delta payload is a collection whose items are added or changed
entities, deleted entities, added links and deleted links, as defined in
[OData-JSON](#ODataJSON) and [#OData-Protocol#DeltaPayload].

Delta payloads are among the payloads for which this format is most
useful: a delta response repeats the same shape of entity many times,
and, for a collection under active change tracking, may do so
repeatedly over time.

All items of a delta payload share one context URL, whose fragment ends
in `/$delta`, and therefore one positional property list, determined as
described in [section ##DeterminingthePositionalPropertyList] from the
select-list preceding `/$delta`.

## ##subsec Added or Changed Entity

An added or changed entity MAY be represented positionally. Its
positional property list is the one determined for the delta payload.

As for a `PATCH` request body, the positional property list is the list of
properties conveyed: a property that is not in the positional property
list is unchanged, and a property in the list whose value is `null` has
been set to null.

The `id` control information, where required, is carried in a [wrapper
object](#wrapperobject) around the positional representation.

::: example
Example ##ex_delta: a delta payload containing one changed entity
```
GET ~/Customers?$deltatoken=1234
```
```json
{
  "@context": "$metadata#Customers(ID,Name)/$delta",
  "_": [
    ["ALFKI", "Alfred's Futterkiste"]
  ],
  "@deltaLink": "Customers?$deltatoken=5678"
}
```
:::

## ##subsec Deleted Entity

A deleted entity is identified by the `removed` control information and
therefore requires a JSON object. It is represented as a [wrapper
object](#wrapperobject) carrying `removed`, `id` and, where required,
`context`.

A deleted entity in a compact payload carries no positional
representation, because a deleted entity conveys no property values other
than the key, which is conveyed by `id`.

::: example
Example ##ex: a delta payload containing one changed and one deleted
entity
```json
{
  "@context": "$metadata#Customers(ID,Name)/$delta",
  "_": [
    ["ALFKI", "Alfred's Futterkiste"],
    { "@removed": { "reason": "deleted" }, "@id": "Customers('ANATR')" }
  ],
  "@deltaLink": "Customers?$deltatoken=5678"
}
```
:::

Note that this is exactly the representation defined by
[OData-JSON](#ODataJSON) for a deleted entity, as the [superset
principle](#supersetprinciple) permits.

## ##subsec Added and Deleted Links

Added and deleted links are identified by the context URL fragments
`/$link` and `/$deletedLink` and are represented as JSON objects
containing `context`, `source`, `relationship` and `target`, exactly as
defined in [OData-JSON](#ODataJSON).

They have no positional representation. A link carries three values whose
names are fixed by this specification rather than by the model, they do
not appear in a select-list, and there is consequently no positional
property list for them.

## ##subsec Nested Delta Payloads

A nested delta payload, representing changes to a related collection,
occupies the position of the navigation property in the positional
property list of the containing entity, and is itself a collection whose
items follow the rules of this section.
