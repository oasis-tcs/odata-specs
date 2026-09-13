
-------

# ##sec Compact JSON Format Design

[OData-JSON](#ODataJSON) extends JSON by defining general conventions for
name/value pairs that annotate a JSON object, property or array, and a set
of canonical name/value pairs for control information such as ids, types
and links.

This format extends [OData-JSON](#ODataJSON) further by allowing a
structured instance -- an entity or a complex value -- to be represented as
a JSON array instead of a JSON object. Everything else defined by
[OData-JSON](#ODataJSON) continues to apply.

## ##subsec Design Principles

The following principles govern this format. They are stated here because
they explain, and constrain, the rules in the remainder of this document.

1. [*Compact JSON is a superset of the OData JSON format.*]{id=supersetprinciple}
   Every payload that is valid according
   to [OData-JSON](#ODataJSON) is also a valid compact JSON payload. A
   receiver that accepts compact JSON therefore accepts strictly more
   payloads than a receiver that accepts only [OData-JSON](#ODataJSON),
   and a sender is never forced to use a positional representation where
   it is inconvenient or impossible.

2. *The saving is in the repetition.* A positional representation removes
   property names from a payload; the mapping from positions to properties
   is transmitted once. Consequently the benefit grows with the number of
   instances that share a positional property list, and is negligible or
   negative for a payload containing a single instance. This format
   therefore never *requires* a positional representation.

3. *The context URL describes the payload.* A receiver that has the
   context URL, and the metadata it references, can interpret a compact
   payload without knowledge of the request that produced it. This format
   does not introduce a second, competing mechanism for describing payload
   shape.

4. *Requests and responses are treated alike.* Large collections occur in
   request bodies -- of `POST`, `PUT` and `PATCH` requests -- as well as in
   response bodies, and the saving is the same in both directions. Where
   requests and responses must differ, the difference is called out
   explicitly.

::: example
Example ##ex_superset: because of the [superset
principle](#supersetprinciple), a sender that cannot produce a positional
representation for a particular instance may fall back to the
representation defined by [OData-JSON](#ODataJSON) for that instance
alone, within an otherwise positional payload:
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "value": [
    ["ALFKI", "Alfreds Futterkiste"],
    { "ID": "ANATR", "Name": "Ana Trujillo Emparedados y helados" },
    ["ANTON", "Antonio Moreno Taquería"]
  ]
}
```
:::

## ##subsec Relationship to the OData JSON Format

This document specifies only where the compact JSON format deviates from
[OData-JSON](#ODataJSON). It is not a self-contained format
specification: for the representation of primitive values, for the
definition and meaning of control information, for URL and relative URL
handling, and for everything else it does not mention, the rules of
[OData-JSON](#ODataJSON) apply unchanged.

In particular, this format changes only *how a structured instance is
laid out*. It does not change which information may appear in a payload,
what that information means, or which requests a service supports.
