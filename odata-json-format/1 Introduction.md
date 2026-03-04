
-------

# ##sec Introduction

The OData protocol is comprised of a set of specifications for representing and interacting with structured content. The core specification for the protocol is in [OData-Protocol](#ODataProtocol); this document is an extension of the core protocol. This document defines representations for the OData requests and responses using the JavaScript Object Notation (JSON), see [RFC8259].

An OData JSON payload may represent:

- a [single primitive value](#PrimitiveValue)
- a [collection of primitive values](#CollectionofPrimitiveValues)
- a [single complex type value](#ComplexValue)
- a [collection of complex type values](#CollectionofComplexValues)
- a [single entity](#Entity) or [entity reference](#EntityReference)
- a [collection of entities](#CollectionofEntities) or [entity references](#EntityReference)
- a [collection of changes](#DeltaPayload)
- a [service document](#ServiceDocument) describing the top-level resources exposed by the service
- an [error](#ErrorResponse).

## ##subsec Changes from Earlier Versions

Section | Feature / Change | Issue
--------|------------------|------
[Section ##ControlInformationcontextodatacontext]| 
Fragment portion of Context URL is not percent-encoded| 
[368](https://github.com/oasis-tcs/odata-specs/issues/368)
[Section ##ControlInformationidodataid]| 
Transient entities can be identifiable| 
[1928](https://github.com/oasis-tcs/odata-specs/issues/1928)
[Section ##ControlInformationetagodataetag]| 
Control information `"@etag": ""` to prevent updates| 
[2021](https://github.com/oasis-tcs/odata-specs/issues/2021)
[Section ##ControlInformationmediaodatamedia]| 
`mediaContentType` can be `null`| 
[536](https://github.com/oasis-tcs/odata-specs/issues/536)
[Section ##StructuralProperty], [Section ##InformativeReferences]| 
Removed reference to obsolete version of GeoJSON| 
[352](https://github.com/oasis-tcs/odata-specs/issues/352)
[Section ##EntityReference]| 
Entities can be referenced by id or full set of key properties| 
[456](https://github.com/oasis-tcs/odata-specs/issues/456)
[Section ##DeletedEntity]| 
`type` control information, if present, must come immediately after `removed`| 
[1985](https://github.com/oasis-tcs/odata-specs/issues/1985)
[Section ##ActionInvocation]| 
Allow common expressions in action payloads| 
[341](https://github.com/oasis-tcs/odata-specs/issues/341)
[Section ##BatchRequestsandResponses]| 
Atomicity group of prerequisite requests optional in `dependsOn`| 
[2150](https://github.com/oasis-tcs/odata-specs/issues/2150)

## ##subsec Glossary

### ##subsubsec Definitions of Terms

### ##subsubsec Acronyms and Abbreviations

<!-- TODO -->

### ##subsubsec Document Conventions

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example ##ex: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only.

All other text is normative unless otherwise labeled.

<!--
Here is a customized command line which will generate HTML from the markdown file (named `$$$filename$$$.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs+smart
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

This uses pandoc $$$pandoc-version$$$ from https://github.com/jgm/pandoc/releases/tag/$$$pandoc-version$$$.
-->

-------

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
