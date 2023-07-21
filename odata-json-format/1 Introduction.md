-------

# ##sec Introduction

The OData protocol is comprised of a set of specifications for representing and interacting with structured content. The core specification for the protocol is in [OData-Protocol](#ODataProtocol); this document is an extension of the core protocol. This document defines representations for the OData requests and responses using the JavaScript Object Notation (JSON), see [RFC8259].

An OData JSON payload may represent:

<!--TODO: insert links to sections -->
- a [single primitive value](#PrimitiveValue)
- a [collection of primitive values](#CollectionofPrimitiveValues)
- a [single complex type value](#ComplexValue)
- a [collection of complex type values](#CollectionofComplexValues)
- a [single entity](#Entity) or [entity reference](#EntityReference)
- a [collection of entities](#CollectionofEntities) or [entity references](#EntityReference)
- a [collection of changes](#DeltaPayload)
- a [service document](#ServiceDocument) describing the top-level resources exposed by the service
- an [error](#ErrorResponse).

## ##subsec Changes from earlier Versions

<!-- TODO -->
<!-- Describe significant changes from previous differently-numbered Versions, not changes between stages of the current Version -->

## ##subsec Glossary

### ##subsubsec Definitions of terms

<!-- TODO -->
TODO: find out why we need a $dummy$ formula to get `monospace` look as we want it.

### ##subsubsec Acronyms and abbreviations

<!-- TODO -->

### ##subsubsec Document conventions

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example ##ex: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only. Examples labeled with ⚠ contain advanced concepts or make use of keywords that are defined only later in the text, they can be skipped at first reading.

All other text is normative unless otherwise labeled.

::: example
Here is a customized command line which will generate HTML from this markdown file (named `$$$filename$$$.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs
       -t html
       -o $$$filename$$$.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --wrap=none
       --metadata pagetitle="$$$pagetitle$$$"
       $$$filename$$$.md
```

This uses pandoc 3.1.2 from https://github.com/jgm/pandoc/releases/tag/3.1.2.
:::

-------

<!--TODO from here -->

# ##sec JSON Format Design

JSON, as described in [RFC8259](#rfc8259) defines
a text format for serializing structured data. Objects are serialized as
an unordered collection of name/value pairs.

JSON does not define any semantics around the name/value pairs that make
up an object, nor does it define an extensibility mechanism for adding
control information to a payload.

OData's JSON format extends JSON by defining general conventions for
name/value pairs that annotate a JSON object, property or array. OData
defines a set of canonical name/value pairs for control information such
as ids, types, and links, and [instance
annotations](#InstanceAnnotations) MAY be used to add
domain-specific information to the payload.

A key feature of OData's JSON format is to allow omitting predictable
parts of the wire format from the actual payload. To reconstitute this
data on the receiving end, expressions are used to compute missing
links, type information, and other control data. These expressions
(together with the data on the wire) can be used by the client to
compute predictable payload pieces as if they had been included on the
wire directly.

Control information is used in JSON to capture instance metadata that
cannot be predicted (e.g. the next link of a collection) as well as a
mechanism to provide values where a computed value would be wrong (e.g.
if the media read link of one particular entity does not follow the
standard URL conventions). Computing values from metadata expressions is
compute intensive and some clients might opt for a larger payload size
to avoid computational complexity; to accommodate for this the
`Accept` header allows the client to control the amount of
control information added to the response.

To optimize streaming scenarios, there are a few restrictions that MAY
be imposed on the sequence in which name/value pairs appear within JSON
objects. For details on the ordering requirements see [Payload Ordering
Constraints](#PayloadOrderingConstraints).

-------

# ##sec Requesting the JSON Format

## ##subsec Controlling the Amount of Control Information in Responses

### ##subsubsec `metadata=minimal` (`odata.metadata=minimal`)

### ##subsubsec `metadata=full` (`odata.metadata=full`)

### ##subsubsec `metadata=none` (`odata.metadata=none`)

## ##subsec Controlling the Representation of Numbers

-------

# ##sec Common Characteristics

# ##subsec Header Content-Type

# ##subsec Message Body

# ##subsec Relative URLs

# ##subsec Payload Ordering Constraints

# ##subsec Control Information

# ##subsubsec Control Information: `context` (`odata.context`)

# ##subsubsec Control Information: `metadataEtag` (`odata.metadataEtag`)

# ##subsubsec Control Information: `type` (`odata.type`)

# ##subsubsec Control Information: `count` (`odata.count`)

# ##subsubsec Control Information: `nextLink` (`odata.nextLink`)

# ##subsubsec Control Information: `delta` (`odata.delta`)

# ##subsubsec Control Information: `deltaLink` (`odata.deltaLink`)

# ##subsubsec Control Information: `id` (`odata.id`)

# ##subsubsec Control Information: `editLink` and `readLink` (`odata.editLink` and `odata.readLink`)

# ##subsubsec Control Information: `etag` (`odata.etag`)

# ##subsubsec Control Information: `navigationLink` and `associationLink` (`odata.navigationLink` and `odata.associationLink`)

# ##subsubsec Control Information: `media*` (`odata.media*`)

# ##subsubsec Control Information: `removed` (`odata.removed`)

# ##subsubsec Control Information: `collectionAnnotations` (`odata.collectionAnnotations`)

-------

# ##sec Service Document

-------

# ##sec Entity

-------

# ##sec Structural Property

# ##subsec Primitive Value

# ##subsec Complex Value

# ##subsec Collection of Primitive Values

# ##subsec Collection of Complex Values

# ##subsec Untyped Value

-------

# ##sec Navigation Property

# ##subsec Navigation Link

# ##subsec Association Link

# ##subsec Expanded Navigation Property

# ##subsec Deep Insert

# ##subsec Bind Operation

# ##subsec Collection ETag

-------

# ##sec Stream Property

-------

# ##sec Media Entity

-------

# ##sec Individual Property or Operation Response

-------

# ##sec Collection of Operation Responses

-------

# ##sec Collection of Entities

-------

# ##sec Entity Reference

-------

# ##sec Delta Payload

# ##subsec Delta Responses

# ##subsec Added/Changed Entity

# ##subsec Deleted Entity

# ##subsec Added Link

# ##subsec Deleted Link

# ##subsec Update a Collection of Entities

-------

# ##sec Bound Function

-------

# ##sec Bound Action

-------

# ##sec Action Invocation

-------

# ##sec Batch Requests and Responses

# ##subsec Batch Request

# ##subsec Referencing New Entities

# ##subsec Referencing an ETag

# ##subsec Processing a Batch Request

# ##subsec Batch Response

# ##subsec Asynchronous Batch Requests

-------

# ##sec Instance Annotations

# ##subsec Annotate a JSON Object

# ##subsec Annotate a JSON Array or Primitive

# ##subsec Annotate a Primitive Value within a JSON Array

-------

# ##sec Error Handling

# ##subsec Error Response

# ##subsec In-Stream Error

# ##subsec Error Information in a Success Payload

# ##subsubsec Primitive Value Errors

# ##subsubsec Structured Type Errors

# ##subsubsec Collection Errors

-------

# ##sec Extensibility

-------

# ##sec Conformance

Conforming clients MUST be prepared to consume a service that uses any or all of the constructs defined in this specification. The exception to this are the constructs defined in Delta Response, which are only required for clients that request changes.

<!--TODO: section references, V4.02 conformance -->
 
In order to be a conforming consumer of the OData JSON format, a client or service:

1. MUST either:
   1. understand `metadata=minimal` (section 3.1.1) or
   2. explicitly specify `metadata=none` (section 3.1.3) or `metadata=full` (section 3.1.2) in the request (client)

2. MUST be prepared to consume a response with full metadata
3. MUST be prepared to receive all data types (section 7.1)

   1. defined in this specification (client)
   2. exposed by the service (service)

4. MUST interpret all `odata` control information defined according to the `OData-Version` header of the payload (section 4.5)

5. MUST be prepared to receive any annotations and control information not defined in the `OData-Version` header of the payload (section 21.2)

6. MUST NOT require `streaming=true` in the `Content-Type` header (section 4.4)

7. MUST be a conforming consumer of the OData 4.0 JSON format, for payloads with an `OData-Version` header value of `4.0`.

   1. MUST accept the `odata.` prefix, where defined, on format parameters and control information

   2. MUST accept the `#` prefix in `@odata.type` values

   3. MUST be prepared to handle binding through the use of the `@odata.bind` property in payloads to a `PATCH`, `PUT`, or `POST` request

   4. MUST accept `TargetId` within in a deleted link for a relationship with a maximum cardinality of one

   5. MUST accept the string values `-INF`, `INF`, and `NaN` for single and double values

   6. MUST support property annotations that appear immediately before or after the property they annotate

8. MAY be a conforming consumer of the OData 4.01 JSON format, for payloads with an `OData-Version` header value of `4.01`.

   1. MUST be prepared to interpret control information with or without the `odata.` prefix

   2. MUST be prepared for `@odata.type` primitive values with or without the `#` prefix

   3. MUST be prepared to handle binding through inclusion of an entity reference within a collection-valued navigation property in the body of a `PATCH`, `PUT`, or `POST` request

   4. MUST be prepared for `TargetId` to be included or omitted in a deleted link for a relationship with a maximum cardinality of one

   5. MUST accept the string values `-INF`, `INF`, and `NaN` for decimal values with floating scale

   6. MUST be prepared to handle related entities inline within a delta payload as well as a nested delta representation for the collection

   7. MUST be prepared to handle decimal values written in exponential notation

 
In order to be a conforming producer of the OData JSON format, a client or service:

9. MUST support generating OData 4.0 JSON compliant payloads with an `OData-Version` header value of `4.0`.

   1. MUST NOT omit the `odata.` prefix from format parameters or control information

   2. MUST NOT omit the `#` prefix from `@odata.type` values

   3. MUST NOT include entity values or entity references within a collection-valued navigation property in the body of a `PATCH`, `PUT`, or `POST` request

   4. MUST NOT return decimal values written in exponential notation unless the ExponentialDecimals format parameter is specified.

   5. MUST NOT advertise available actions or functions using name/value pairs prefixed with a property name

   6. MUST NOT return a null value for name/value pairs representing actions or functions that are not available

   7. MUST NOT represent numeric value exceptions for values other than single and double values using the string values `-INF`, `INF`, and `NaN`

10. MAY support generating OData 4.01 JSON compliant payloads for requests with an `OData-Version` header value of `4.01`.

    1. MUST return property annotations immediately before the property they annotate

    2. SHOULD omit the `odata.` prefix from format parameters and control information

    3. SHOULD omit the `#` prefix from `@type` primitive values

    4. MAY include inline related entities or nested delta collections within a delta payload

    5. MAY include `TargetId` within a deleted link for a relationship with a maximum cardinality of 1

    6. MAY return decimal values written in exponential notation

    7. MAY represent numeric value exceptions for decimal values with floating scale using the string values `-INF`, `INF`, and `NaN`

In addition, in order to conform to the OData JSON format, a service:

11. MUST comply with one of the conformance levels defined in [OData-Protocol](#ODataProtocol)

12. MUST support the `application/json` media type in the `Accept` header (section 3)

13. MUST return well-formed JSON payloads

14. MUST support `odata.metadata=full` (section 3.1.2)

15. MUST include the `odata.nextLink` control information in partial results for entity collections (section 4.5.5)

16. MUST support entity instances with external metadata (section 4.5.1)

17. MUST support properties with externally defined data types (section 4.5.3)

18. MUST NOT violate any other aspects of this OData JSON specification

19. SHOULD support the `$format` system query option (section 3)

20. MAY support the `odata.streaming=true` parameter in the `Accept` header (section 4.4)

21. MAY return full metadata regardless of `odata.metadata` (section 3.1.2)

22. MUST NOT omit null or default values unless the `omit-values` preference is specified in the `Prefer` request header and the `omit-values` preference is included in the `Preference-Applied` response header

23. MUST return OData JSON 4.0-compliant responses for requests with an `OData-MaxVersion` header value of `4.0`

24. MUST support OData JSON 4.0-compliant payloads in requests with an `OData-Version` header value of `4.0`

25. MUST support returning, in the final response to an asynchronous request, the `application/json` payload that would have been returned had the operation completed synchronously, wrapped in an `application/http` message


In addition, in order to comply with the OData 4.01 JSON format, a service:

26. SHOULD return the OData JSON 4.01 format for requests with an `OData-MaxVersion` header value of `4.01`

27. MUST support the OData JSON 4.01 format in request payloads for requests with an `OData-Version` header value of `4.01`

28. MUST honor the `odata.etag` control information within `PUT`, `PATCH` or `DELETE` payloads, if specified

29. MUST support returning, in the final response to an asynchronous request, the `application/json` payload that would have been returned had the operation completed synchronously
