
-------

# ##sec Introduction

The OData protocol is comprised of a set of specifications for
representing and interacting with structured content. The core
specification for the protocol is in [OData-Protocol](#ODataProtocol);
this document is an extension of the core protocol. Representations for
OData requests and responses using the JavaScript Object Notation (JSON),
see [RFC8259](#rfc8259), are defined in [OData-JSON](#ODataJSON).

This document defines a *compact* JSON format: a lossless, alternative
representation of the same information, whose prime aim is to minimize
the uncompressed size of OData request and response payloads.

Processing large volumes of JSON is expensive, largely due to its
verbosity. Compression on the wire takes most of that inefficiency away
during transport, but the sender producing and the receiver consuming the
uncompressed payload still deal with the full volume of JSON text. The
repetition of property names, once per property per instance, dominates
that volume in exactly the payloads where it hurts most: large collections
of entities and large collections of complex values.

The approach taken in this format, inspired by traditional rowset
interfaces, is to represent a structured instance as a JSON *array* rather
than a JSON object, so that a property name is transmitted at most once
per payload instead of once per instance. JSON arrays preserve the order
of their items, whereas the order of the name/value pairs of a JSON object
is not significant; this format uses that property of arrays to convey,
by position, which value belongs to which property.

The information needed to map a position back to a property is already
present in every OData payload: the [context
URL](#ControlInformationcontext) describes what a payload contains, and
has always been designed to allow a payload to be interpreted without
knowledge of the request that produced it. This format gives the context
URL the additional role of describing *at which position* each property
appears.

A compact JSON payload may represent anything an OData JSON payload may
represent:

- a [single primitive value](#PrimitiveValues)
- a [collection of primitive values](#PrimitiveValues)
- a [single complex value](#ComplexValue) or a [collection of complex
  values](#CollectionofComplexValues)
- a [single entity](#Entity) or [entity reference](#EntityReferences)
- a [collection of entities](#CollectionofEntities) or entity references
- a [collection of changes](#DeltaPayload)
- a [service document](#ServiceDocument) describing the top-level
  resources exposed by the service
- an [error](#ErrorResponse).

## ##subsec Glossary

### ##subsubsec Definitions of Terms

The following terms are used throughout this document:

- [*Positional representation*]{id=positionalrepresentation}: the
  representation of a structured instance as a JSON array whose items are
  the values of the instance's properties, identified by their position.
- [*Positional property list*]{id=positionalpropertylist}: the ordered
  list of properties that a positional representation conveys; item *n* of
  the array is the value of item *n* of this list. See [section
  ##PositionalPropertyList].
- [*Wrapper object*]{id=wrapperobject}: a JSON object that carries
  annotations and control information for a value, together with that
  value, in a place where the value alone would otherwise appear. See
  [section ##TheWrapperObject].
- [*Compact payload*]{id=compactpayload}: a request or response body
  labeled with the [`compact`](#RequestingtheCompactJSONFormat) format
  parameter.

### ##subsubsec Acronyms and Abbreviations

<!-- TODO -->

### ##subsubsec Document Conventions

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative
examples.

::: example
Example ##ex: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only.

Examples use the sample model of [OData-Protocol](#ODataProtocol) with an
entity type `Customer` having structural properties `ID`, `Name` and
`Address` (of complex type `Address` with properties `Street`, `City` and
`PostalCode`) and a navigation property `Orders`, unless stated otherwise.

Examples in this document routinely show the same payload twice, once in
the format defined by [OData-JSON](#ODataJSON) and once in the format
defined by this document, to make the correspondence between them
apparent. Where an example shows only one of the two, the other is not
relevant to the point being made.

All other text is normative unless otherwise labeled.

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
