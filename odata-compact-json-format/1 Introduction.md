
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
per payload instead of once per instance. The items of a JSON array are
ordered, whereas the name/value pairs of a JSON object are not; this
format relies on that ordering to convey, by position, which value belongs
to which property.

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
- [*Wrapper object*]{id=wrapperobject}: a JSON object that appears where a
  value would otherwise appear, carrying whatever must be conveyed by name
  alongside that value --- annotations, control information, and properties
  that are not in the positional property list --- together with the value
  itself. See [section ##TheWrapperObject].
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
