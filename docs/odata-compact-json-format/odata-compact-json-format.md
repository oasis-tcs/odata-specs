
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# OData Compact JSON Format Version 4.02

## Committee Specification Draft 01

## 20 August 2026

#### This stage:
https://docs.oasis-open.org/odata/odata-compact-json-format/v4.02/csd01/odata-compact-json-format-v4.02-csd01.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-compact-json-format/v4.02/csd01/odata-compact-json-format-v4.02-csd01.html \
https://docs.oasis-open.org/odata/odata-compact-json-format/v4.02/csd01/odata-compact-json-format-v4.02-csd01.pdf

#### Previous stage:
N/A

#### Latest stage:
https://docs.oasis-open.org/odata/odata-compact-json-format/v4.02/odata-compact-json-format-v4.02.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-compact-json-format/v4.02/odata-compact-json-format-v4.02.html \
https://docs.oasis-open.org/odata/odata-compact-json-format/v4.02/odata-compact-json-format-v4.02.pdf

#### Technical Committee:
[OASIS Open Data Protocol (OData) TC](https://www.oasis-open.org/committees/odata/)

#### Chairs:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/)

#### Editors:

Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/) \
Hubert Heijkers (hubert.heijkers@nl.ibm.com), [IBM](http://www.ibm.com/)

#### [Related work:]{id=RelatedWork}
This specification is related to:
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html
  * _ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases_. https://docs.oasis-open.org/odata/odata/v4.02/csd01/abnf/
* _OData Vocabularies Version 4.0_. Edited by Michael Pizzo, Ralf Handl, and Ram Jeyaraman. Latest stage: https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.html
* _OData Common Schema Definition Language (CSDL) XML Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/odata-csdl-xml-v4.02.html
* _OData JSON Format Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.html
* _OData Data Aggregation Extension Version 4.0_. Edited by Ralf Handl, Hubert Heijkers, Gerald Krause, Michael Pizzo, Heiko Theißen, and Martin Zurmuehl. Latest stage: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html
* _OData Extension for Temporal Data Version 4.0_. Edited by Ralf Handl, Hubert Heijkers, Gerald Krause, Michael Pizzo, Heiko Theißen, and Martin Zurmuehl. Latest stage: https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/odata-temporal-ext-v4.0.html

#### Abstract:
The Open Data Protocol (OData) for representing and interacting with structured content is comprised of a set of specifications. The core specification for the protocol is in OData Version 4.02 Part 1: Protocol. This document extends the core specification by defining representations for OData requests and responses using a compact JSON format.

#### Status:
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://groups.oasis-open.org/communities/tc-community-home2?CommunityKey=e7cac2a9-2d18-4640-b94d-018dc7d3f0e2#technical.

TC members should send comments on this specification to the TC's email list. Any individual may submit comments to the TC by sending email to Technical-Committee-Comments@oasis-open.org. Please use a Subject line like "Comment on OData Protocol".

This specification is provided under the [RF on RAND Terms Mode](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

#### Key words:
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC2119](#rfc2119) and [RFC8174](#rfc8174) when, and only when, they appear in all capitals, as shown here.

#### Citation format:
When referencing this specification the following citation format should be used:

**[OData-Compact-JSON-Format-v4.02]**

_OData Compact JSON Format Version 4.02_.
Edited by Michael Pizzo and Hubert Heijkers. 20 August 2026. OASIS Committee Specification Draft 01.
https://docs.oasis-open.org/odata/odata-compact-json-format/v4.02/csd01/odata-compact-json-format-v4.02-csd01.html.
Latest stage: https://docs.oasis-open.org/odata/odata-compact-json-format/v4.02/odata-compact-json-format-v4.02.html.

#### Notices
Copyright © OASIS Open 2026. All Rights Reserved.

Distributed under the terms of the OASIS [IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/).

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs.

For complete copyright information please see the full Notices section in an Appendix below.

-------

# Table of Contents

::: toc
- [1 Introduction](#Introduction)
  - [1.1 Glossary](#Glossary)
    - [1.1.1 Definitions of Terms](#DefinitionsofTerms)
    - [1.1.2 Acronyms and Abbreviations](#AcronymsandAbbreviations)
    - [1.1.3 Document Conventions](#DocumentConventions)
- [2 Compact JSON Format Design](#CompactJSONFormatDesign)
  - [2.1 Design Principles](#DesignPrinciples)
  - [2.2 Relationship to the OData JSON Format](#RelationshiptotheODataJSONFormat)
- [3 Requesting the Compact JSON Format](#RequestingtheCompactJSONFormat)
  - [3.1 Format Parameters](#FormatParameters)
  - [3.2 Advertising Support](#AdvertisingSupport)
- [4 Common Characteristics](#CommonCharacteristics)
  - [4.1 Header Content-Type](#HeaderContentType)
  - [4.2 Message Body](#MessageBody)
  - [4.3 Payload Ordering Constraints](#PayloadOrderingConstraints)
- [5 Positional Representation](#PositionalRepresentation)
  - [5.1 Positional Property List](#PositionalPropertyList)
  - [5.2 Determining the Positional Property List](#DeterminingthePositionalPropertyList)
  - [5.3 Grouping of Select Items](#GroupingofSelectItems)
  - [5.4 Position Values](#PositionValues)
- [6 Structured Instances](#StructuredInstances)
  - [6.1 Entity](#Entity)
  - [6.2 Complex Value](#ComplexValue)
  - [6.3 Collection of Entities](#CollectionofEntities)
  - [6.4 Collection of Complex Values](#CollectionofComplexValues)
  - [6.5 Primitive Values](#PrimitiveValues)
  - [6.6 Navigation Properties](#NavigationProperties)
  - [6.7 Derived Types](#DerivedTypes)
  - [6.8 Open Types and Dynamic Properties](#OpenTypesandDynamicProperties)
  - [6.9 Entity References](#EntityReferences)
  - [6.10 Media Entities and Stream Properties](#MediaEntitiesandStreamProperties)
- [7 Annotations and Control Information](#AnnotationsandControlInformation)
  - [7.1 The Wrapper Object](#TheWrapperObject)
  - [7.2 Instance Annotations](#InstanceAnnotations)
  - [7.3 Property Annotations](#PropertyAnnotations)
  - [7.4 Selected Annotations](#SelectedAnnotations)
  - [7.5 Control Information](#ControlInformation)
    - [7.5.1 Control Information: `context`](#ControlInformationcontext)
    - [7.5.2 Control Information: `count` and `nextLink`](#ControlInformationcountandnextLink)
    - [7.5.3 Control Information: `type`](#ControlInformationtype)
- [8 Request Payloads](#RequestPayloads)
  - [8.1 Determining the Positional Property List in Requests](#DeterminingthePositionalPropertyListinRequests)
  - [8.2 Message Body of a Request](#MessageBodyofaRequest)
  - [8.3 Creating an Entity](#CreatinganEntity)
  - [8.4 Updating an Entity](#UpdatinganEntity)
  - [8.5 Updating a Collection of Entities](#UpdatingaCollectionofEntities)
  - [8.6 Deep Insert](#DeepInsert)
  - [8.7 Bind Operations](#BindOperations)
  - [8.8 Action and Function Parameters](#ActionandFunctionParameters)
- [9 Delta Payload](#DeltaPayload)
  - [9.1 Added or Changed Entity](#AddedorChangedEntity)
  - [9.2 Deleted Entity](#DeletedEntity)
  - [9.3 Added and Deleted Links](#AddedandDeletedLinks)
  - [9.4 Nested Delta Payloads](#NestedDeltaPayloads)
- [10 Service Document](#ServiceDocument)
- [11 Error Response](#ErrorResponse)
- [12 Batch Requests and Responses](#BatchRequestsandResponses)
- [13 Conformance](#Conformance)
- [14 Open Issues](#OpenIssues)
  - [14.1 Cross-Specification Dependencies](#CrossSpecificationDependencies)
  - [14.2 Naming and Encoding Decisions](#NamingandEncodingDecisions)
  - [14.3 Constructs Not Yet Specified](#ConstructsNotYetSpecified)
- [A References](#References)
  - [A.1 Normative References](#NormativeReferences)
  - [A.2 Informative References](#InformativeReferences)
- [B Safety, Security and Privacy Considerations](#SafetySecurityandPrivacyConsiderations)
- [C Acknowledgments](#Acknowledgments)
  - [C.1 Special Thanks](#SpecialThanks)
  - [C.2 Participants](#Participants)
- [D Revision History](#RevisionHistory)
- [E Notices](#Notices)
:::


-------

# <a id="Introduction" href="#Introduction">1 Introduction</a>

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

## <a id="Glossary" href="#Glossary">1.1 Glossary</a>

### <a id="DefinitionsofTerms" href="#DefinitionsofTerms">1.1.1 Definitions of Terms</a>

The following terms are used throughout this document:

- [*Positional representation*]{id=positionalrepresentation}: the
  representation of a structured instance as a JSON array whose items are
  the values of the instance's properties, identified by their position.
- [*Positional property list*]{id=positionalpropertylist}: the ordered
  list of properties that a positional representation conveys; item *n* of
  the array is the value of item *n* of this list. See [section
  5.1](#PositionalPropertyList).
- [*Wrapper object*]{id=wrapperobject}: a JSON object that carries
  annotations and control information for a value, together with that
  value, in a place where the value alone would otherwise appear. See
  [section 7.1](#TheWrapperObject).
- [*Compact payload*]{id=compactpayload}: a request or response body
  labeled with the [`compact`](#RequestingtheCompactJSONFormat) format
  parameter.

### <a id="AcronymsandAbbreviations" href="#AcronymsandAbbreviations">1.1.2 Acronyms and Abbreviations</a>

<!-- TODO -->

### <a id="DocumentConventions" href="#DocumentConventions">1.1.3 Document Conventions</a>

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative
examples.

::: example
Example 1: text describing an example uses this paragraph style
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

# <a id="CompactJSONFormatDesign" href="#CompactJSONFormatDesign">2 Compact JSON Format Design</a>

[OData-JSON](#ODataJSON) extends JSON by defining general conventions for
name/value pairs that annotate a JSON object, property or array, and a set
of canonical name/value pairs for control information such as ids, types
and links.

This format extends [OData-JSON](#ODataJSON) further by allowing a
structured instance -- an entity or a complex value -- to be represented as
a JSON array instead of a JSON object. Everything else defined by
[OData-JSON](#ODataJSON) continues to apply.

## <a id="DesignPrinciples" href="#DesignPrinciples">2.1 Design Principles</a>

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
Example <a id="superset" href="#superset">2</a>: because of the [superset
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

## <a id="RelationshiptotheODataJSONFormat" href="#RelationshiptotheODataJSONFormat">2.2 Relationship to the OData JSON Format</a>

This document specifies only where the compact JSON format deviates from
[OData-JSON](#ODataJSON). It is not a self-contained format
specification: for the representation of primitive values, for the
definition and meaning of control information, for URL and relative URL
handling, and for everything else it does not mention, the rules of
[OData-JSON](#ODataJSON) apply unchanged.

In particular, this format changes only *how a structured instance is
laid out*. It does not change which information may appear in a payload,
what that information means, or which requests a service supports.


-------

# <a id="RequestingtheCompactJSONFormat" href="#RequestingtheCompactJSONFormat">3 Requesting the Compact JSON Format</a>

The compact JSON format can be requested using the `$format` query option
in the request URL with the media type `application/json` followed by the
`compact=true` format parameter, optionally followed by other format
parameters.

Alternatively, this format can be requested using the `Accept` header with
the media type `application/json` followed by the `compact=true` format
parameter, optionally followed by other format parameters.

If specified, `$format` overrides any value specified in the `Accept`
header.

The names and values of the format parameters are case-insensitive.

A service that does not support the compact JSON format MUST NOT return a
compact payload. Because the `compact` format parameter selects a payload
shape that a receiver unaware of this specification will misinterpret, a
service MUST NOT return a compact response unless the client requested it
with `compact=true`, and MUST return `406 Not Acceptable` if the client
requests `compact=true` and the service does not support it.

A client MUST NOT send a compact request body unless it has established
that the service supports the compact JSON format, either from the
[`Capabilities.SupportedFormats`](#AdvertisingSupport) annotation or from
out-of-band knowledge. A service that receives a request body labeled with
`compact=true` that it does not support MUST reject the request with
`415 Unsupported Media Type`.

## <a id="FormatParameters" href="#FormatParameters">3.1 Format Parameters</a>

The format parameters defined in [OData-JSON](#ODataJSON) apply to the
compact JSON format with the meaning defined there, subject to the
following.

The `streaming` parameter is meaningful and MAY be specified. A positional
representation is inherently ordered, and a compact payload that meets the
[payload ordering constraints](#PayloadOrderingConstraints) MUST include
`streaming=true`.

The `IEEE754Compatible` parameter is meaningful and MUST be included if
`Edm.Int64` and `Edm.Decimal` numbers are represented as strings.

The `metadata` parameter is meaningful and MAY be specified with the value
`minimal` or `none`. Note that `metadata=none` does not remove the
[`context`](#ControlInformationcontext) control information from a compact
payload: the context URL determines the [positional property
list](#positionalpropertylist) and is therefore required for the payload
to be interpretable at all. See [section 7.5.1](#ControlInformationcontext).

The value `metadata=full` is NOT RECOMMENDED with `compact=true`. Full
metadata requires control information to be present for every instance,
which forces every instance into a [wrapper object](#wrapperobject) and
defeats the purpose of the format. Services MAY reject the combination
with `406 Not Acceptable`.

## <a id="AdvertisingSupport" href="#AdvertisingSupport">3.2 Advertising Support</a>

Services SHOULD advertise the supported media types by annotating the
entity container with the term [Capabilities.SupportedFormats]{.term}
defined in [OData-VocCap](#ODataVocCap), listing all available formats and
combinations of supported format parameters, including the `compact=true`
format parameter if the compact JSON format is supported by the service.

::: example
Example 3: a service advertising support for both the format defined in
[OData-JSON](#ODataJSON) and the compact JSON format
```json
"@Capabilities.SupportedFormats": [
  "application/json;IEEE754Compatible=true",
  "application/json;IEEE754Compatible=true;compact=true"
]
```
:::


-------

# <a id="CommonCharacteristics" href="#CommonCharacteristics">4 Common Characteristics</a>

## <a id="HeaderContentType" href="#HeaderContentType">4.1 Header Content-Type</a>

Requests and responses with a compact JSON message body MUST have a
`Content-Type` header value of `application/json` and MUST include the
`compact` parameter with a value of `true`.

All other rules for the `Content-Type` header defined in
[OData-JSON](#ODataJSON) apply unchanged, including the `charset`,
`metadata`, `IEEE754Compatible` and `streaming` parameters.

::: example
Example 4: a compact response that follows the payload ordering
constraints and represents `Edm.Int64` and `Edm.Decimal` values as strings
```
Content-Type: application/json;compact=true;metadata=minimal;
              IEEE754Compatible=true;streaming=true
```
:::

## <a id="MessageBody" href="#MessageBody">4.2 Message Body</a>

Each message body is represented as a single JSON object, as defined in
[OData-JSON](#ODataJSON), with the single exception described in [section
8.2](#MessageBodyofaRequest). A response message body is always a JSON
object: the positional representation applies to the instances *within*
the payload, not to the payload as a whole.

This object is either

- the representation of an [entity](#Entity), an [entity
  reference](#EntityReferences) or a [complex value](#ComplexValue) that
  is not represented positionally, or
- a [wrapper object](#wrapperobject), whose value is the correct
  representation for the payload's content.

The name of the value in a wrapper object is `value`, as defined in
[OData-JSON](#ODataJSON), or the abbreviation `_` defined in [section
7.1](#TheWrapperObject).

::: example
Example 5: a message body containing a collection of entities
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

## <a id="PayloadOrderingConstraints" href="#PayloadOrderingConstraints">4.3 Payload Ordering Constraints</a>

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


-------

# <a id="PositionalRepresentation" href="#PositionalRepresentation">5 Positional Representation</a>

A structured instance -- an entity or a complex value -- MAY be represented
as a JSON array instead of a JSON object. Such an array is called the
*positional representation* of the instance.

The items of the array are the values of the instance's properties. A
property name is not transmitted with the value; the property a value
belongs to is identified by the position of the value within the array.

::: example
Example <a id="first" href="#first">6</a>: the same entity in the format defined by
[OData-JSON](#ODataJSON) and in its positional representation
```json
{
  "@context": "$metadata#Customers(ID,Name,City)/$entity",
  "ID": "ALFKI",
  "Name": "Alfreds Futterkiste",
  "City": "Berlin"
}
```
```json
{
  "@context": "$metadata#Customers(ID,Name,City)/$entity",
  "_": ["ALFKI", "Alfreds Futterkiste", "Berlin"]
}
```
:::

A sender MAY choose the positional representation for some instances in a
payload and the representation defined in [OData-JSON](#ODataJSON) for
others; see the [superset principle](#supersetprinciple). A receiver
distinguishes the two by the JSON type of the instance: a JSON array is a
positional representation, a JSON object is not.

## <a id="PositionalPropertyList" href="#PositionalPropertyList">5.1 Positional Property List</a>

The *positional property list* of a structured instance is the ordered
list of properties that its positional representation conveys.

If an instance is represented positionally:

- the number of items in the array MUST equal the number of items in the
  positional property list, and
- item *n* of the array MUST be the value of item *n* of the positional
  property list, formatted as described in [section 5.4](#PositionValues).

A sender MUST NOT omit an item, MUST NOT add an item, and MUST NOT
reorder items. A property whose value is null is represented by the JSON
value `null` in its position; a property that has no value is represented
as described in [section 5.4](#PositionValues).

Note that this is a stricter requirement than the one
[OData-JSON](#ODataJSON) places on a JSON object representation, where a
sender may omit a property whose value it does not wish to transmit. In a
positional representation there is no way to omit a value without
shifting every subsequent value, so the positional property list must be
transmitted in full. If a sender wishes to transmit fewer properties, it
narrows the positional property list -- by narrowing the select-list in the
context URL -- rather than shortening the array.

## <a id="DeterminingthePositionalPropertyList" href="#DeterminingthePositionalPropertyList">5.2 Determining the Positional Property List</a>

The positional property list of an instance is determined by the
select-list, as defined in [OData-Protocol, section 10](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#ContextURL), that applies to
that instance, and by the metadata for the instance's type.

Let *T* be the type of the instance and *S* the sequence of select-list
items, in the order in which they appear in the context URL, that applies
to the instance. The positional property list is determined as follows:

1. If [OData-Protocol](#ODataProtocol) specifies that all structural
   properties are implicitly selected -- because there is no select-list,
   or because the select-list contains only expanded navigation
   properties -- then the structural properties of *T*, in the order
   described below, are prepended to *S*.

2. Each item `*` in *S* is replaced, in place, by the structural
   properties of *T* in the order described below.

3. The items of *S* are grouped as described in [section
   5.3](#GroupingofSelectItems). Each group occupies exactly one position,
   at the position of the first of its items.

4. The positional property list is the resulting sequence of groups, in
   order.

The *order described below*, wherever referred to above, is the order in
which the structural properties are declared in the CSDL document
defining *T*, with the properties declared by a base type of *T*
preceding those declared by *T* itself, applied recursively along the
inheritance chain.

A service MUST NOT reorder the properties of a type in its metadata
document between versions of that document without also changing the
metadata document URL, since the positional property list, and therefore
the meaning of every compact payload referencing that metadata, depends
on the declaration order. Services SHOULD reference a versioned metadata
document from the context URL when producing compact payloads. See
[OData-Protocol, section 11.1.2](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#MetadataDocumentRequest).

::: example
Example 7: a select-list determines both the membership and the order
of the positional property list; the two requests differ only in the
order of the `$select` items and produce different positional
representations of the same entity
```
GET ~/Customers('ALFKI')?$select=Name,ID
{
  "@context": "$metadata#Customers(Name,ID)/$entity",
  "_": ["Alfreds Futterkiste", "ALFKI"]
}
```
```
GET ~/Customers('ALFKI')?$select=ID,Name
{
  "@context": "$metadata#Customers(ID,Name)/$entity",
  "_": ["ALFKI", "Alfreds Futterkiste"]
}
```
:::

::: example
Example 8: with no `$select`, the positional property list is the
structural properties of the entity type in declaration order; the
navigation property `Orders` is not part of it because it is not selected
```
GET ~/Customers
{
  "@context": "$metadata#Customers",
  "_": [
    ["ALFKI", "Alfreds Futterkiste", ["Obere Str. 57", "Berlin", "12209"]],
    ["ANATR", "Ana Trujillo", ["Avda. de la Constitución 2222", "México D.F.", "05021"]]
  ]
}
```
:::

::: example
Example 9: a context URL containing only an expanded navigation
property implicitly selects all structural properties, which are placed
before the expanded navigation property
```
GET ~/Customers?$expand=Orders($select=ID)
{
  "@context": "$metadata#Customers(Orders(ID))",
  "_": [
    [
      "ALFKI", "Alfreds Futterkiste", ["Obere Str. 57", "Berlin", "12209"],
      [[10643], [10692]]
    ]
  ]
}
```
:::

## <a id="GroupingofSelectItems" href="#GroupingofSelectItems">5.3 Grouping of Select Items</a>

A select-list may contain several items that address the same property of
*T*: [OData-Protocol](#ODataProtocol) represents a selected sub-property
of a complex property using path syntax, so selecting two sub-properties
of the same complex property yields two items sharing a first path
segment. The positional representation gives such a property a single
position.

The *first segment* of a select-item is the item with any `(...)` or
`+(...)` suffix removed, truncated before the first forward slash (`/`).
A leading type-cast prefix, that is a qualified type name followed by a
forward slash, is part of the first segment.

Two items of *S* belong to the same group if and only if their first
segments are equal. The group occupies the position of the first of its
items.

If the property addressed by the first segment of a group is of a
structured type, the *nested select-list* of that group is formed by
concatenating, for each item of the group in order:

- for an item of the form `P/rest`, the item `rest`;
- for an item of the form `P(nested)` or `P+(nested)`, the items of
  `nested`;
- for an item of the form `P`, nothing.

If the resulting nested select-list is empty, all structural properties
of the property's type are implicitly selected, as in step 1 of [section
5.2](#DeterminingthePositionalPropertyList).

The nested select-list determines the positional property list of the
instances of that property, applying this section recursively.

::: example
Example <a id="grouping" href="#grouping">10</a>: two selected sub-properties of the complex
property `Address` share one position, which holds the positional
representation of the complex value
```
GET ~/Customers?$select=Name,Address/City,Address/PostalCode
{
  "@context": "$metadata#Customers(Name,Address/City,Address/PostalCode)",
  "_": [
    ["Alfreds Futterkiste", ["Berlin", "12209"]],
    ["Ana Trujillo", ["México D.F.", "05021"]]
  ]
}
```
The positional property list of each `Customer` is (`Name`, `Address`),
and the positional property list of each `Address` is (`City`,
`PostalCode`).
:::

::: example
Example 11: a bare item and a suffixed item addressing the same
navigation property form one group and therefore one position
```
$metadata#Employees/Sales.Manager(DirectReports,DirectReports+(FirstName,LastName))
```
The positional property list of each `Manager` is (`DirectReports`).
:::

## <a id="PositionValues" href="#PositionValues">5.4 Position Values</a>

The value at a position is one of the following:

- the representation, as defined in [OData-JSON](#ODataJSON) or in this
  document, of the value of the property at that position in the
  positional property list;
- a [wrapper object](#wrapperobject), if annotations or control
  information apply to that value, or if the property has no value; or
- `null`, if the property is null.

The representation of a primitive value is unchanged from
[OData-JSON](#ODataJSON).

A single-valued structured property holds either the positional
representation of its value, a JSON object as defined in
[OData-JSON](#ODataJSON), or `null`.

A collection-valued property holds a JSON array whose items are the
representations of the members of the collection. An empty collection is
represented as an empty JSON array.

::: example
Example 12: a collection-valued complex property; the outer array is
the collection, each inner array the positional representation of one
`Address`
```json
{
  "@context": "$metadata#Customers(Name,Addresses/City)/$entity",
  "_": [
    "Alfreds Futterkiste",
    [["Berlin"], ["Hamburg"]]
  ]
}
```
:::

Note the consequence of the two preceding rules: for a
collection-valued structured property, the value at the position is an
array of arrays. A receiver that knows the positional property list also
knows, from the metadata, whether a property is collection-valued, and can
therefore distinguish the two nestings without ambiguity.

A property that has no value at all -- as opposed to a property whose value
is null -- occurs when only annotations were requested for it, for example
when a navigation property was expanded with `$count` only. Such a
position holds a [wrapper object](#wrapperobject) carrying the
annotations and no value. See [section 7.3](#PropertyAnnotations).


-------

# <a id="StructuredInstances" href="#StructuredInstances">6 Structured Instances</a>

This section describes how each kind of OData value is represented in a
compact payload. Only the deviations from [OData-JSON](#ODataJSON) are
described; everything else is unchanged.

## <a id="Entity" href="#Entity">6.1 Entity</a>

An entity MAY be represented as a JSON array, as described in [section
5](#PositionalRepresentation). Its positional property list is determined
from the select-list applying to it, as described in [section
5.2](#DeterminingthePositionalPropertyList).

Control information that applies to the entity -- `id`, `etag`, `type`,
`editLink`, `readLink` and others -- cannot appear inside the array. An
entity to which control information applies is represented either as a
[wrapper object](#wrapperobject) carrying that control information
together with the positional representation, or as a JSON object as
defined in [OData-JSON](#ODataJSON).

::: example
Example 13: a single entity with an ETag
```json
{
  "@context": "$metadata#Customers(ID,Name)/$entity",
  "@etag": "W/\"MjAyNC0wMi0yOA==\"",
  "_": ["ALFKI", "Alfreds Futterkiste"]
}
```
:::

## <a id="ComplexValue" href="#ComplexValue">6.2 Complex Value</a>

A complex value MAY be represented as a JSON array, as described in
[section 5](#PositionalRepresentation). Its positional property list is
determined from the nested select-list applying to it, as described in
[section 5.3](#GroupingofSelectItems).

A null complex value is represented as `null`, not as an empty array.

## <a id="CollectionofEntities" href="#CollectionofEntities">6.3 Collection of Entities</a>

A collection of entities is represented as a JSON array whose items are
the representations of the entities in the collection, each of which MAY
be a positional representation.

All entities in a collection share the same positional property list,
which is determined once from the select-list applying to the collection.

::: example
Example <a id="collection" href="#collection">14</a>: a collection of entities, showing the format
defined by [OData-JSON](#ODataJSON) and the compact format side by side
```
GET ~/Customers?$select=ID,Name
{
  "@context": "$metadata#Customers(ID,Name)",
  "value": [
    { "ID": "ALFKI", "Name": "Alfreds Futterkiste" },
    { "ID": "ANATR", "Name": "Ana Trujillo" },
    { "ID": "ANTON", "Name": "Antonio Moreno" }
  ]
}
```
```
GET ~/Customers?$select=ID,Name
{
  "@context": "$metadata#Customers(ID,Name)",
  "_": [
    ["ALFKI", "Alfreds Futterkiste"],
    ["ANATR", "Ana Trujillo"],
    ["ANTON", "Antonio Moreno"]
  ]
}
```
:::

## <a id="CollectionofComplexValues" href="#CollectionofComplexValues">6.4 Collection of Complex Values</a>

A collection of complex values is represented as a JSON array whose items
are the representations of the complex values in the collection, each of
which MAY be a positional representation.

All complex values in a collection share the same positional property
list.

## <a id="PrimitiveValues" href="#PrimitiveValues">6.5 Primitive Values</a>

A primitive value is represented exactly as defined in
[OData-JSON](#ODataJSON). A collection of primitive values is represented
as a JSON array of such values.

Primitive values are already represented without a repeated property name
and this format does not change them.

## <a id="NavigationProperties" href="#NavigationProperties">6.6 Navigation Properties</a>

A navigation property that is expanded occupies a position in the
positional property list of the containing entity, and the value at that
position is the representation of the related entity or collection of
related entities.

A navigation property that is not expanded and not selected does not
occupy a position.

The `navigationLink` and `associationLink` control information for a
navigation property, when present, is carried in a [wrapper
object](#wrapperobject) at the navigation property's position, as
described in [section 7.3](#PropertyAnnotations).

::: example
Example 15: an expanded collection-valued navigation property; the
position of `Orders` holds the collection, whose items are the positional
representations of the individual orders
```
GET ~/Customers?$select=ID&$expand=Orders($select=ID,Amount)
{
  "@context": "$metadata#Customers(ID,Orders(ID,Amount))",
  "_": [
    ["ALFKI", [[10643, 29.46], [10692, 61.02]]],
    ["ANATR", []]
  ]
}
```
:::

## <a id="DerivedTypes" href="#DerivedTypes">6.7 Derived Types</a>

A collection may contain entities or complex values of types derived from
the type of the collection.

The positional property list of every instance in a collection is the
same, and is determined from the select-list applying to the collection.
An instance of a derived type therefore conveys, positionally, exactly
the properties in that list -- no more and no fewer -- regardless of which
additional properties its own type declares.

Where the actual type of an instance must be conveyed, the `type` control
information is carried in a [wrapper object](#wrapperobject) around the
positional representation.

::: example
Example <a id="derived" href="#derived">16</a>: a heterogeneous collection; the type of the second
entity differs from the type of the entity set
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "_": [
    ["ALFKI", "Alfreds Futterkiste"],
    { "@type": "#Model.VipCustomer", "_": ["ANATR", "Ana Trujillo"] }
  ]
}
```
:::

Properties declared by a derived type can be conveyed positionally by
selecting them explicitly, in which case
[OData-Protocol](#ODataProtocol) prefixes them with the qualified name of
the derived type in the select-list and they occupy a position in the
positional property list of *every* instance in the collection.

For an instance whose type does not declare such a property, the property
is not applicable rather than null. The value at its position MUST be the
empty JSON object `{}`, which is the [wrapper
object](#wrapperobject) carrying neither annotations nor a value, and
which is therefore distinct both from `null` and from the positional
representation of a value.

::: example
Example 17: `PreferredContact` is declared by `Model.VipCustomer` only;
the first entity is not a `VipCustomer` and its position for
`PreferredContact` conveys "not applicable"
```
GET ~/Customers?$select=ID,Model.VipCustomer/PreferredContact
{
  "@context": "$metadata#Customers(ID,Model.VipCustomer/PreferredContact)",
  "_": [
    ["ALFKI", {}],
    { "@type": "#Model.VipCustomer", "_": ["ANATR", "email"] }
  ]
}
```
:::

## <a id="OpenTypesandDynamicProperties" href="#OpenTypesandDynamicProperties">6.8 Open Types and Dynamic Properties</a>

A dynamic property of an open type occupies a position in the positional
property list if, and only if, it is explicitly selected and therefore
appears in the select-list of the context URL.

If a dynamic property is selected, the service MUST include a value at
its position for every instance in the collection, using the empty JSON
object `{}` for instances that do not have that dynamic property, as
described in [section 6.7](#DerivedTypes).

An instance carrying dynamic properties that are not selected MUST NOT be
represented positionally; it is represented as a JSON object as defined
in [OData-JSON](#ODataJSON). This is a direct consequence of the
[superset principle](#supersetprinciple) and requires no additional
mechanism.

::: example
Example 18: a payload in which one instance carries an unselected
dynamic property and therefore falls back to the representation defined
by [OData-JSON](#ODataJSON)
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "_": [
    ["ALFKI", "Alfreds Futterkiste"],
    { "ID": "ANATR", "Name": "Ana Trujillo", "Nickname": "Ana" }
  ]
}
```
:::

## <a id="EntityReferences" href="#EntityReferences">6.9 Entity References</a>

An entity reference is represented as defined in
[OData-JSON](#ODataJSON): a JSON object containing the `id` control
information. It has no positional representation, because it has no
positional property list -- the context URL `#$ref` and
`#Collection($ref)` carry no select-list.

A collection of entity references is a JSON array of such objects.

## <a id="MediaEntitiesandStreamProperties" href="#MediaEntitiesandStreamProperties">6.10 Media Entities and Stream Properties</a>

The `mediaReadLink`, `mediaEditLink`, `mediaEtag` and `mediaContentType`
control information of a media entity is carried in the [wrapper
object](#wrapperobject) around the entity's positional representation.

A stream property occupies a position in the positional property list if
it is selected. The value at that position is a [wrapper
object](#wrapperobject) carrying the stream's control information, or the
value of the stream as defined in [OData-JSON](#ODataJSON).


-------

# <a id="AnnotationsandControlInformation" href="#AnnotationsandControlInformation">7 Annotations and Control Information</a>

[OData-JSON](#ODataJSON) attaches annotations and control information to
a value by adding name/value pairs to the JSON object that represents the
value, or to the object that contains it:

- an annotation on an instance is a name/value pair `@ns.term` on the
  object representing the instance;
- an annotation on a property is a name/value pair `Property@ns.term` on
  the object *containing* the property;
- control information follows the same two patterns, with a reserved term
  name, for example `@id` and `Orders@count`.

Neither pattern is available in a positional representation: an array has
no name/value pairs, and the containing instance may itself be an array.
This format therefore introduces a single construct, the *wrapper
object*, which is used uniformly wherever a value would otherwise appear.

## <a id="TheWrapperObject" href="#TheWrapperObject">7.1 The Wrapper Object</a>

A *wrapper object* is a JSON object whose name/value pairs are

- annotations and control information that apply to a value, and
- optionally, that value itself, under the reserved name `_`.

A wrapper object MUST NOT contain any other name/value pairs. In
particular it never carries the properties of a structured instance by
name; an instance whose properties are carried by name is not a wrapper
object but the representation defined by [OData-JSON](#ODataJSON).

A wrapper object MAY appear wherever a value may appear:

- as the message body, in which case it carries the payload's
  [`context`](#ControlInformationcontext) and the payload's content;
- at a position in a positional representation, in which case it carries
  the annotations of the property at that position and the property's
  value;
- as an item of a collection, in which case it carries the annotations of
  that member of the collection and the member itself.

A wrapper object that carries no value denotes a property or instance
that has no value, as distinct from one whose value is null. The empty
wrapper object `{}` therefore denotes "no value and no annotations"; see
[section 6.7](#DerivedTypes).

The name of the value in a wrapper object is `_`.

At the root of the message body the name `value` is also recognized, with
the same meaning, for compatibility with [OData-JSON](#ODataJSON) as
required by the [superset principle](#supersetprinciple). Producers of
compact payloads SHOULD use `_` in all positions, including the root.

The name `value` is NOT RECOMMENDED anywhere other than the root of the
message body, because a JSON object containing a name/value pair named
`value` is indistinguishable from the representation, as defined by
[OData-JSON](#ODataJSON), of a structured instance having a property
named `value`.

::: example
Example <a id="wrapper" href="#wrapper">19</a>: the same information three times --- as defined by
[OData-JSON](#ODataJSON), compact with `_` at every level, and compact
using the recognized root name `value`
```json
{
  "@context": "$metadata#Customers(Name,Orders(ID))",
  "value": [
    {
      "Name": "Alfreds Futterkiste",
      "Orders@count": 2,
      "Orders": [{ "ID": 10643 }, { "ID": 10692 }]
    }
  ]
}
```
```json
{
  "@context": "$metadata#Customers(Name,Orders(ID))",
  "_": [
    ["Alfreds Futterkiste", { "@count": 2, "_": [[10643], [10692]] }]
  ]
}
```
```json
{
  "@context": "$metadata#Customers(Name,Orders(ID))",
  "value": [
    ["Alfreds Futterkiste", { "@count": 2, "_": [[10643], [10692]] }]
  ]
}
```
:::

## <a id="InstanceAnnotations" href="#InstanceAnnotations">7.2 Instance Annotations</a>

An annotation that applies to a structured instance is represented as a
name/value pair `@ns.term` in the wrapper object around that instance's
positional representation.

The name of an instance annotation is unchanged from
[OData-JSON](#ODataJSON).

::: example
Example 20: an instance annotation on one entity of a collection
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "_": [
    ["ALFKI", "Alfreds Futterkiste"],
    {
      "@Core.Messages": [{ "code": "1", "message": "Stale", "severity": "info" }],
      "_": ["ANATR", "Ana Trujillo"]
    }
  ]
}
```
:::

## <a id="PropertyAnnotations" href="#PropertyAnnotations">7.3 Property Annotations</a>

An annotation that applies to a property is represented as a name/value
pair in the wrapper object at that property's position.

The name of a property annotation in a compact payload is `@ns.term`. The
property name prefix that [OData-JSON](#ODataJSON) requires -- as in
`Property@ns.term` -- is omitted, because the position already identifies
the property.

::: example
Example <a id="propannotation" href="#propannotation">21</a>: the `Core.ValueException` annotation of a
property, in both formats
```json
{
  "@context": "$metadata#Customers(ID,Revenue)/$entity",
  "ID": "ALFKI",
  "Revenue@Core.ValueException": { "value": "1234567890123456789" },
  "Revenue": 1234567890123456800
}
```
```json
{
  "@context": "$metadata#Customers(ID,Revenue)/$entity",
  "_": [
    "ALFKI",
    {
      "@Core.ValueException": { "_": "1234567890123456789" },
      "_": 1234567890123456800
    }
  ]
}
```
:::

::: example
Example <a id="countonly" href="#countonly">22</a>: a collection-valued property for which only the
count was requested; the position holds a wrapper object with an
annotation and no value
```
GET ~/Customers?$select=Name,Addresses/$count
{
  "@context": "$metadata#Customers(Name,Addresses/$count)",
  "_": [
    ["Alfreds Futterkiste", { "@count": 2 }],
    ["Ana Trujillo", { "@count": 0 }]
  ]
}
```
Note that under [section 5.3](#GroupingofSelectItems) the select-item
`Addresses/$count` forms a group whose first segment is `Addresses`, so
`Addresses` occupies a single position, and the count segment is what
that position conveys. See also open issue 13.
:::

## <a id="SelectedAnnotations" href="#SelectedAnnotations">7.4 Selected Annotations</a>

An instance annotation that is explicitly selected appears in the
select-list of the context URL and therefore occupies a position in the
positional property list, like any other select-item. The value at that
position is the value of the annotation.

This is the case where an annotation is requested as data. It is distinct
from an annotation that merely accompanies a value, which is carried in a
wrapper object as described in the preceding sections.

::: example
Example 23: the annotation `@Model.Rating` is selected and occupies the
second position
```
GET ~/Customers?$select=Name,@Model.Rating
{
  "@context": "$metadata#Customers(Name,@Model.Rating)",
  "_": [
    ["Alfreds Futterkiste", 5],
    ["Ana Trujillo", 3]
  ]
}
```
:::

Annotations requested through the `include-annotations` preference do not
appear in the context URL, do not affect the positional property list,
and are therefore carried in wrapper objects.

## <a id="ControlInformation" href="#ControlInformation">7.5 Control Information</a>

Control information is represented in a compact payload in the same way
as annotations, following the rules of the preceding sections. The
following subsections describe the control information whose treatment in
a compact payload warrants specific mention.

### <a id="ControlInformationcontext" href="#ControlInformationcontext">7.5.1 Control Information: `context`</a>

The `context` control information is defined in
[OData-JSON](#ODataJSON) and its value is the context URL of the payload,
as defined in [OData-Protocol, section 10](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#ContextURL).

In a compact payload the context URL additionally determines the
[positional property list](#positionalpropertylist) of the instances in
the payload, as described in [section
5.2](#DeterminingthePositionalPropertyList). It is therefore required for a
compact payload to be interpretable.

A compact payload MUST include the `context` control information in the
message body, and MUST include it in any nested wrapper object for which
[OData-JSON](#ODataJSON) requires a context URL, irrespective of the
value of the `metadata` format parameter. In particular, a payload
labeled `metadata=none` MUST still include the `context` control
information.

### <a id="ControlInformationcountandnextLink" href="#ControlInformationcountandnextLink">7.5.2 Control Information: `count` and `nextLink`</a>

The `count` and `nextLink` control information of the collection in the
message body is carried in the message body object, as in
[OData-JSON](#ODataJSON).

For a nested collection, both are carried in the wrapper object at the
collection's position.

::: example
Example 24: `count` and `nextLink` for the collection in the message
body and for a nested collection
```json
{
  "@context": "$metadata#Customers(Name,Orders(ID))",
  "@count": 137,
  "_": [
    [
      "Alfreds Futterkiste",
      {
        "@count": 42,
        "@nextLink": "Customers('ALFKI')/Orders?$skiptoken=10",
        "_": [[10643], [10692]]
      }
    ]
  ],
  "@nextLink": "Customers?$skiptoken=10"
}
```
:::

### <a id="ControlInformationtype" href="#ControlInformationtype">7.5.3 Control Information: `type`</a>

The `type` control information is carried in the wrapper object around
the instance it applies to, as described in [section 6.7](#DerivedTypes).

A receiver MUST NOT infer the type of an instance from the number of
items in its positional representation. The number of items is determined
by the positional property list, which is the same for every instance in
a collection regardless of type.


-------

# <a id="RequestPayloads" href="#RequestPayloads">8 Request Payloads</a>

Large collections of entities and complex values occur in request bodies
as well as in response bodies, and the saving from a positional
representation is the same in both directions. A request body MAY
therefore use the positional representation wherever a response body may.

A client MUST NOT send a compact request body unless it has established
that the service supports the compact JSON format; see [section
3](#RequestingtheCompactJSONFormat).

## <a id="DeterminingthePositionalPropertyListinRequests" href="#DeterminingthePositionalPropertyListinRequests">8.1 Determining the Positional Property List in Requests</a>

[OData-Protocol](#ODataProtocol) notes that request payloads generally do
not require context URLs, because the type of the payload can be
determined from the request URL. A compact request body needs more than
the type: it needs the positional property list.

The positional property list of an instance in a request body is
determined as follows:

1. If the request body contains the [`context`](#ControlInformationcontext)
   control information, the positional property list is determined from
   its select-list exactly as for a response, as described in [section
   5.2](#DeterminingthePositionalPropertyList).

2. Otherwise, the positional property list is the *default selection* of
   the type of the instance: all structural properties of that type, in
   the order in which they are declared, with the properties declared by
   a base type preceding those declared by the type itself.

The type of the instance is determined from the request URL for the
instance in the message body, and from the metadata of the containing
type for nested instances, exactly as it is for the format defined in
[OData-JSON](#ODataJSON).

A request body that includes the `context` control information MUST use a
context URL that is valid for the resource addressed by the request URL,
as defined in [OData-Protocol, section 10](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#ContextURL). The context URL in a request
body describes the body; it does not modify the request.

A service MUST reject with `400 Bad Request` a compact request body whose
positional representation does not have the number of items required by
the positional property list.

## <a id="MessageBodyofaRequest" href="#MessageBodyofaRequest">8.2 Message Body of a Request</a>

The message body of a compact request MAY be a JSON array, in which case
it is the positional representation of the instance addressed by the
request URL, or a collection of such representations, and the positional
property list is the default selection of the type addressed by the
request URL.

This is the only case in which a message body is not a JSON object. It is
available in requests only, because only in a request does the request URL
identify the type of the payload.

::: example
Example <a id="postbare" href="#postbare">25</a>: creating an entity with values for all its
structural properties; the positional property list is the default
selection of `Customer`
```
POST ~/Customers
Content-Type: application/json;compact=true

["ALFKI", "Alfreds Futterkiste", ["Obere Str. 57", "Berlin", "12209"]]
```
:::

## <a id="CreatinganEntity" href="#CreatinganEntity">8.3 Creating an Entity</a>

An entity to be created MAY be represented positionally. Properties that
the client does not wish to specify -- leaving them to the service to
default -- MUST NOT be represented by `null`, which would request the value
null. They are instead excluded from the positional property list, which
requires the request body to carry a `context` control information whose
select-list enumerates exactly the properties being specified.

::: example
Example <a id="postselect" href="#postselect">26</a>: creating an entity specifying only two
properties, leaving the remainder to the service
```
POST ~/Customers
Content-Type: application/json;compact=true

{
  "@context": "$metadata#Customers(ID,Name)/$entity",
  "_": ["ALFKI", "Alfreds Futterkiste"]
}
```
:::

## <a id="UpdatinganEntity" href="#UpdatinganEntity">8.4 Updating an Entity</a>

The semantics of `PATCH` defined in [OData-Protocol](#ODataProtocol) rest
on the distinction between a property that is present in the request body,
whose value is applied, and a property that is absent, which is left
unchanged. In a positional representation a value cannot be absent
without shifting every subsequent value.

The select-list of the `context` control information carries this
distinction: the positional property list *is* the list of properties to
be updated. A property that is not in the positional property list is
absent from the request in the sense of
[OData-Protocol](#ODataProtocol) and is left unchanged. A property that
is in the positional property list with the value `null` is set to null.

A `PATCH` request body that does not contain the `context` control
information therefore specifies a value for every structural property of
the type, which is rarely the intent. Clients SHOULD include the `context`
control information in compact `PATCH` request bodies.

::: example
Example <a id="patch" href="#patch">27</a>: updating two properties of an entity and leaving all
others unchanged; `Region` is set to null, `Name` is set to a new value,
and every property not named in the context URL is unaffected
```
PATCH ~/Customers('ALFKI')
Content-Type: application/json;compact=true

{
  "@context": "$metadata#Customers(Name,Region)/$entity",
  "_": ["Alfred's Futterkiste", null]
}
```
:::

For `PUT`, the semantics defined in [OData-Protocol](#ODataProtocol) apply
unchanged: properties not specified in the request body are reset to their
default values. As for `PATCH`, the properties specified are those in the
positional property list.

## <a id="UpdatingaCollectionofEntities" href="#UpdatingaCollectionofEntities">8.5 Updating a Collection of Entities</a>

A request body that updates a collection of entities is a [delta
payload](#DeltaPayload) with the context URL fragment `#$delta`, as
defined in [OData-Protocol, section 10.17](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#DeltaPayload). Its items MAY be represented
positionally, as described in [section 9](#DeltaPayload).

## <a id="DeepInsert" href="#DeepInsert">8.6 Deep Insert</a>

A deep insert specifies related entities alongside the entity being
created. Related entities occupy a position in the positional property
list of the containing entity, exactly as an expanded navigation property
does in a response, and the select-list of the `context` control
information enumerates them using the same syntax.

::: example
Example <a id="deepinsert" href="#deepinsert">28</a>: creating a customer together with two orders
```
POST ~/Customers
Content-Type: application/json;compact=true

{
  "@context": "$metadata#Customers(ID,Name,Orders(ID,Amount))/$entity",
  "_": [
    "ALFKI",
    "Alfreds Futterkiste",
    [[10643, 29.46], [10692, 61.02]]
  ]
}
```
:::

## <a id="BindOperations" href="#BindOperations">8.7 Bind Operations</a>

A bind operation relates a new or updated entity to an existing entity.
[OData-JSON](#ODataJSON) represents it as a name/value pair
`Property@bind` or `Property@id` on the containing object.

In a compact request body the navigation property occupies a position in
the positional property list, and the bind operation is carried in a
[wrapper object](#wrapperobject) at that position, as a property
annotation, following [section 7.3](#PropertyAnnotations).

::: example
Example <a id="bind" href="#bind">29</a>: creating an order bound to an existing customer
```
POST ~/Orders
Content-Type: application/json;compact=true

{
  "@context": "$metadata#Orders(ID,Amount,Customer)/$entity",
  "_": [
    10643,
    29.46,
    { "@id": "Customers('ALFKI')" }
  ]
}
```
:::

## <a id="ActionandFunctionParameters" href="#ActionandFunctionParameters">8.8 Action and Function Parameters</a>

The parameters of an action invoked with `POST`, or of a function invoked
with parameter aliases, are represented as defined in
[OData-JSON](#ODataJSON): a JSON object whose name/value pairs are the
parameter names and values. The parameter *values* MAY use the positional
representation, following the rules of this document, with the positional
property list of each value being the default selection of the
parameter's declared type.

::: example
Example <a id="action" href="#action">30</a>: an action taking a collection of complex values; the
parameter object is unchanged, the collection is positional
```
POST ~/Customers('ALFKI')/Model.AddAddresses
Content-Type: application/json;compact=true

{
  "addresses": [
    ["Obere Str. 57", "Berlin", "12209"],
    ["Neue Str. 1", "Hamburg", "20095"]
  ]
}
```
:::


-------

# <a id="DeltaPayload" href="#DeltaPayload">9 Delta Payload</a>

A delta payload is a collection whose items are added or changed
entities, deleted entities, added links and deleted links, as defined in
[OData-JSON](#ODataJSON) and [OData-Protocol, section 10.17](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#DeltaPayload).

Delta payloads are among the payloads for which this format is most
useful: a delta response repeats the same shape of entity many times,
and, for a collection under active change tracking, may do so
repeatedly over time.

All items of a delta payload share one context URL, whose fragment ends
in `/$delta`, and therefore one positional property list, determined as
described in [section 5.2](#DeterminingthePositionalPropertyList) from the
select-list preceding `/$delta`.

## <a id="AddedorChangedEntity" href="#AddedorChangedEntity">9.1 Added or Changed Entity</a>

An added or changed entity MAY be represented positionally. Its
positional property list is the one determined for the delta payload.

As for a `PATCH` request body, the positional property list is the list of
properties conveyed: a property that is not in the positional property
list is unchanged, and a property in the list whose value is `null` has
been set to null.

The `id` control information, where required, is carried in a [wrapper
object](#wrapperobject) around the positional representation.

::: example
Example <a id="delta" href="#delta">31</a>: a delta payload containing one changed entity
```
GET ~/Customers?$deltatoken=1234
{
  "@context": "$metadata#Customers(ID,Name)/$delta",
  "_": [
    ["ALFKI", "Alfred's Futterkiste"]
  ],
  "@deltaLink": "Customers?$deltatoken=5678"
}
```
:::

## <a id="DeletedEntity" href="#DeletedEntity">9.2 Deleted Entity</a>

A deleted entity is identified by the `removed` control information and
therefore requires a JSON object. It is represented as a [wrapper
object](#wrapperobject) carrying `removed`, `id` and, where required,
`context`.

A deleted entity in a compact payload carries no positional
representation, because a deleted entity conveys no property values other
than the key, which is conveyed by `id`.

::: example
Example 32: a delta payload containing one changed and one deleted
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

## <a id="AddedandDeletedLinks" href="#AddedandDeletedLinks">9.3 Added and Deleted Links</a>

Added and deleted links are identified by the context URL fragments
`/$link` and `/$deletedLink` and are represented as JSON objects
containing `context`, `source`, `relationship` and `target`, exactly as
defined in [OData-JSON](#ODataJSON).

They have no positional representation. A link carries three values whose
names are fixed by this specification rather than by the model, they do
not appear in a select-list, and there is consequently no positional
property list for them.

## <a id="NestedDeltaPayloads" href="#NestedDeltaPayloads">9.4 Nested Delta Payloads</a>

A nested delta payload, representing changes to a related collection,
occupies the position of the navigation property in the positional
property list of the containing entity, and is itself a collection whose
items follow the rules of this section.


-------

# <a id="ServiceDocument" href="#ServiceDocument">10 Service Document</a>

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

# <a id="ErrorResponse" href="#ErrorResponse">11 Error Response</a>

An error response is represented exactly as defined in
[OData-JSON](#ODataJSON).

The members of an error object are fixed by [OData-JSON](#ODataJSON)
rather than by the model, no context URL and therefore no select-list
applies to them, and an error response is not a large payload. A compact
representation would carry no benefit.

The `details` member of an error remains a JSON array of JSON objects.

::: example
Example 33: an error returned in response to a request that specified
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

# <a id="BatchRequestsandResponses" href="#BatchRequestsandResponses">12 Batch Requests and Responses</a>

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
Example 34: a batch request in which one individual request carries a
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


-------

# <a id="Conformance" href="#Conformance">13 Conformance</a>

Conformance to this specification presupposes conformance to
[OData-JSON](#ODataJSON). The requirements below are additional to, and
do not replace, the conformance requirements of that specification.

In order to be a conforming consumer of the OData compact JSON format, a
client or service:

1. MUST be a conforming consumer of the OData JSON format
   ([OData-JSON](#ODataJSON))
2. MUST accept, wherever a structured instance may appear, either a JSON
   object or a positional representation ([section
   5](#PositionalRepresentation))
3. MUST determine the positional property list from the context URL and
   the referenced metadata ([section
   5.2](#DeterminingthePositionalPropertyList))
   1. MUST apply the declaration order of structural properties,
      base type first, where properties are implicitly selected
   2. MUST group select-items that share a first segment into a single
      position ([section 5.3](#GroupingofSelectItems))
4. MUST NOT infer the positional property list from the number of items
   in a positional representation
5. MUST accept a [wrapper object](#wrapperobject) wherever a value may
   appear ([section 7.1](#TheWrapperObject))
   1. MUST accept the value name `_`
   2. MUST accept the value name `value` at the root of the message body
   3. MUST accept a wrapper object that carries no value
6. MUST accept property annotations without the property name prefix
   ([section 7.3](#PropertyAnnotations))
7. MUST accept the `context` control information in a payload labeled
   `metadata=none` ([section 7.5.1](#ControlInformationcontext))
8. MUST be prepared to receive a payload in which some instances are
   represented positionally and others are not ([section
   2.1](#DesignPrinciples))
9. MUST be prepared to receive the service document, error responses and
   batch documents in the representation defined by
   [OData-JSON](#ODataJSON) ([section 10](#ServiceDocument), [section
   11](#ErrorResponse), [section 12](#BatchRequestsandResponses))

In order to be a conforming producer of the OData compact JSON format, a
client or service:

10. MUST be a conforming producer of the OData JSON format
    ([OData-JSON](#ODataJSON))
11. MUST NOT produce a compact payload unless the receiver has indicated
    that it accepts one ([section 3](#RequestingtheCompactJSONFormat))
    1. a service MUST NOT return a compact response unless the request
       specified `compact=true`
    2. a client MUST NOT send a compact request body unless the service
       has advertised support for `compact=true`
12. MUST include the `compact=true` format parameter in the
    `Content-Type` header of every compact payload ([section
    4.1](#HeaderContentType))
13. MUST include the `context` control information in every compact
    message body ([section 7.5.1](#ControlInformationcontext))
14. MUST produce, for every positional representation, exactly as many
    items as the positional property list has entries, in that order
    ([section 5.1](#PositionalPropertyList))
15. MUST NOT represent an instance positionally if it carries dynamic
    properties that are not in the positional property list ([section
    6.8](#OpenTypesandDynamicProperties))
16. MUST use the empty wrapper object `{}` for a position whose property
    is not applicable to the instance ([section 6.7](#DerivedTypes))
17. SHOULD use the value name `_` in preference to `value` ([section
    7.1](#TheWrapperObject))
18. SHOULD reference a versioned metadata document from the context URL
    ([section 5.2](#DeterminingthePositionalPropertyList))

In order to be a conforming service supporting the OData compact JSON
format, a service:

19. SHOULD advertise support with the
    [Capabilities.SupportedFormats]{.term} term ([section
    3.2](#AdvertisingSupport))
20. MUST return `406 Not Acceptable` if the client requests
    `compact=true` and the service does not support it ([section
    3](#RequestingtheCompactJSONFormat))
21. MUST reject with `415 Unsupported Media Type` a request body labeled
    `compact=true` that it does not support ([section
    3](#RequestingtheCompactJSONFormat))
22. MUST reject with `400 Bad Request` a compact request body whose
    positional representation does not match the positional property list
    ([section 8.1](#DeterminingthePositionalPropertyListinRequests))


-------

# <a id="OpenIssues" href="#OpenIssues">14 Open Issues</a>

<!-- Working draft only. This section is to be resolved and removed
     before the document advances to Committee Specification. -->

This section is non-normative. It records the decisions that the drafting
of this document forced, but that the Technical Committee has not yet
taken. Each item states the position currently taken in the draft, so
that the draft is internally consistent, together with the alternatives
considered.

## <a id="CrossSpecificationDependencies" href="#CrossSpecificationDependencies">14.1 Cross-Specification Dependencies</a>

1. **Context URLs in request bodies.**
   [OData-Protocol, section 10](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#ContextURL) states that request payloads generally do
   not require context URLs, and defines a context URL template for a
   request body only for the delta payload used to update a collection
   (`#$delta`). This document relies on the `context` control information
   in request bodies to convey the positional property list, and in
   particular to convey the set of properties affected by a `PATCH`. That
   use is not currently sanctioned by [OData-Protocol](#ODataProtocol) and
   would require a corresponding change to Part 1.
   *Position taken:* the draft uses response context URL templates in
   request bodies unchanged.
   *Alternative:* define request-specific templates in Part 1, or define a
   separate control information for the positional property list, which
   would contradict design principle 3 in [section 2.1](#DesignPrinciples).

2. **Losslessness.** The stated goal is that every construct of
   [OData-JSON](#ODataJSON) has a compact counterpart, and that every
   [OData-JSON](#ODataJSON) payload is a valid compact payload. The second
   half holds by the [superset principle](#supersetprinciple). The first
   half has not been verified exhaustively against
   [OData-JSON](#ODataJSON); the constructs currently *without* a
   positional counterpart are entity references, links in delta payloads,
   the service document, errors and the batch document, each for the
   reason given in the respective section. The Technical Committee should
   decide whether that list is acceptable, and whether
   [OData-JSON](#ODataJSON) should change where it is not.

3. **Stability of property order.** The positional property list of an
   implicitly selected type depends on the order in which properties are
   declared in the CSDL document. [OData-CSDL](#ODataCSDL) does not
   currently make declaration order significant, so a service may reorder
   properties in its metadata without considering it a breaking change.
   *Position taken:* [section 5.2](#DeterminingthePositionalPropertyList)
   requires the order to be stable for a given metadata document URL and
   recommends versioned metadata URLs.
   *Alternatives:* require an explicit `$select` -- and therefore an
   explicit select-list in the context URL -- for all compact payloads,
   removing the dependency on declaration order entirely; or introduce a
   Core vocabulary term that fixes the ordinal of each property.

## <a id="NamingandEncodingDecisions" href="#NamingandEncodingDecisions">14.2 Naming and Encoding Decisions</a>

4. **The value name.** The draft uses `_` in wrapper objects and
   recognizes `value` at the root of the message body.
   *Alternatives considered:* `value` everywhere, which is consistent with
   [OData-JSON](#ODataJSON) but costs four additional bytes per wrapper
   object and creates the ambiguity described in [section
   7.1](#TheWrapperObject); or a name that cannot collide with a property
   name, such as `@value` or `$`, at the cost of readability.

5. **"Not applicable" at a position.** The draft uses the empty wrapper
   object `{}` for a position whose property does not apply to the
   instance, as happens for a property of a derived type, or a dynamic
   property that the instance does not have.
   *Alternatives:* `null`, which is shorter by two bytes but conflates
   "not applicable" with "null" and so is not lossless; or a reserved JSON
   value.

6. **Wrapper objects carrying named properties.** The draft forbids a
   wrapper object from carrying data properties by name. Allowing it would
   let an instance of an open type keep its positional representation and
   carry its unselected dynamic properties by name in the same object,
   which is attractive for open types and would remove the fallback in
   [section 6.8](#OpenTypesandDynamicProperties). It would, however, make a
   wrapper object indistinguishable from the representation defined by
   [OData-JSON](#ODataJSON), which the draft currently relies on.

7. **The `compact` format parameter.** The draft uses `compact=true`.
   Should the parameter instead take a value naming the compaction
   strategy, for example `compact=rows`, to leave room for a future
   column-oriented or dictionary-encoded variant without a new media
   type?

## <a id="ConstructsNotYetSpecified" href="#ConstructsNotYetSpecified">14.3 Constructs Not Yet Specified</a>

8. **Recursive expansion.** [OData-Protocol](#ODataProtocol) represents an
   expansion with `$levels` using the `+` infix, as in
   `DirectReports+(FirstName,LastName)`. [Section
   5.3](#GroupingofSelectItems) folds such an item into the group of its
   navigation property but does not say how the nested select-list applies
   at the second and subsequent levels, where it may differ from the
   first.

9. **Operations in the select-list.** A select-list may contain actions
   and functions, and the shortcut `{namespace}.*`. Such an item occupies
   a position under the rules of [section
   5.2](#DeterminingthePositionalPropertyList), and the value at that position
   would be the operation advertisement, or the empty wrapper object if
   the operation is not available. This is a consequence of the rules
   rather than a decision, and has not been examined.

10. **Action and function parameters.** [Section
    8.8](#ActionandFunctionParameters) keeps the parameter object as defined
    in [OData-JSON](#ODataJSON) and allows only the parameter values to be
    positional. Parameters have a declared order in
    [OData-CSDL](#ODataCSDL), so the parameter object could itself be a
    positional array. The saving is small, and the interaction with
    optional parameters and with parameter aliases has not been examined.

11. **Interaction with `$apply`.** Aggregated results introduce dynamic
    properties that appear in the context URL, which suggests the rules of
    this document apply unchanged, but this has not been verified against
    [OData-Aggregation](#ODataAggregation). Transformations that produce a heterogeneous
    result, such as `concat`, need particular attention.

12. **Consistency within a collection.** The draft allows a sender to mix
    positional and object representations freely within one collection.
    A receiver optimized for the positional case may prefer a guarantee
    that a collection is homogeneous, at the cost of forcing an entire
    collection into the object representation whenever a single instance
    requires it.

13. **The count segment in a select-list.** [OData-URL](#ODataURL) allows
    `$select=ID,Addresses/$count` and `$expand=Orders/$count`, but neither
    [OData-Protocol](#ODataProtocol) nor [OData-JSON](#ODataJSON) states
    explicitly how the count segment appears in the context URL. [Example
    22](#countonly) assumes it is retained as written, which makes the
    grouping rule of [section 5.3](#GroupingofSelectItems) produce the
    intended single position. If it is not retained, the positional
    property list cannot distinguish "count only" from "the collection
    itself" and this document needs a rule of its own.


-------

# <a id="References" href="#References">Appendix A. References</a>

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## <a id="NormativeReferences" href="#NormativeReferences">A.1 Normative References</a>

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

###### [OData-ABNF]{id=ODataABNF}
_ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-CSDL]{id=ODataCSDL}
_OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02._  
See link in "[Related work](#RelatedWork)" section on cover page.

_OData Common Schema Definition Language (CSDL) XML Representation Version 4.02._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-JSON]{id=ODataJSON}
_OData JSON Format Version 4.02._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-Protocol]{id=ODataProtocol}
_OData Version 4.02. Part 1: Protocol._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-URL]{id=ODataURL}
_OData Version 4.02. Part 2: URL Conventions._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-VocCap]{id=ODataVocCap}
_OData Vocabularies Version 4.0: Capabilities Vocabulary._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-VocCore]{id=ODataVocCore}
_OData Vocabularies Version 4.0: Core Vocabulary._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [RFC2119]{id=rfc2119}
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_.
https://www.rfc-editor.org/info/rfc2119.

###### [RFC3986]{id=rfc3986}
_Berners-Lee, T., Fielding, R., and L. Masinter, "Uniform Resource Identifier (URI): Generic Syntax", STD 66, RFC 3986, DOI 10.17487/RFC3986, January 2005_.
https://www.rfc-editor.org/info/rfc3986.

###### [RFC3987]{id=rfc3987}
_Duerst, M. and M. Suignard, "Internationalized Resource Identifiers (IRIs)", RFC 3987, DOI 10.17487/RFC3987, January 2005_.
https://www.rfc-editor.org/info/rfc3987.

###### [RFC4648]{id=rfc4648}
_Josefsson, S., "The Base16, Base32, and Base64 Data Encodings", RFC 4648, DOI 10.17487/RFC4648, October 2006_.
https://www.rfc-editor.org/info/rfc4648.

###### [RFC5646]{id=rfc5646}
_Phillips, A., Ed., and M. Davis, Ed., "Tags for Identifying Languages", BCP 47, RFC 5646, DOI 10.17487/RFC5646, September 2009_.
https://www.rfc-editor.org/info/rfc5646.

###### [RFC7493]{id=rfc7493}
_Bray, T., Ed., "The I-JSON Message Format", RFC 7493, DOI 10.17487/RFC7493, March 2015_.
https://www.rfc-editor.org/info/rfc7493.

###### [RFC7946]{id=rfc7946}
_Butler, H., Daly, M., Doyle, A., Gillies, S., Hagen, S., and T. Schaub, "The GeoJSON Format", RFC 7946, DOI 10.17487/RFC7946, August 2016_.
https://www.rfc-editor.org/info/rfc7946.

###### [RFC8174]{id=rfc8174}
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_.
https://www.rfc-editor.org/info/rfc8174.

###### [RFC8259]{id=rfc8259}
_Bray, T., Ed., "The JavaScript Object Notation (JSON) Data Interchange Format", STD 90, RFC 8259, DOI 10.17487/RFC8259, December 2017_.
https://www.rfc-editor.org/info/rfc8259.

## <a id="InformativeReferences" href="#InformativeReferences">A.2 Informative References</a>

###### [OData-Aggregation]{id=ODataAggregation}
_OData Extension for Data Aggregation Version 4.0._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [ECMAScript]{id=_ECMAScript}
_ECMAScript 2023 Language Specification, 14th Edition_, June 2023. Standard ECMA-262.
https://www.ecma-international.org/publications-and-standards/standards/ecma-262/.

-------

# <a id="SafetySecurityandPrivacyConsiderations" href="#SafetySecurityandPrivacyConsiderations">Appendix B. Safety, Security and Privacy Considerations</a>

This specification raises no security issues.

This section is provided as a service to the application developers, information providers, and users of OData version 4.0 giving some references to starting points for securing OData services as specified. OData is a REST-full multi-format service that depends on other services and thus inherits both sides of the coin, security enhancements and concerns alike from the latter.

For JSON-relevant security implications please cf. at least the relevant subsections of [RFC8259](#rfc8259) as starting point.

-------

# <a id="Acknowledgments" href="#Acknowledgments">Appendix C. Acknowledgments</a>

## <a id="SpecialThanks" href="#SpecialThanks">C.1 Special Thanks</a>

The contributions of the OASIS OData Technical Committee members, enumerated in [OData-Protocol, section C.2](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#Participants), are gratefully acknowledged.

## <a id="Participants" href="#Participants">C.2 Participants</a>

**OData TC Members:**

| First Name | Last Name | Company |
| :--- | :--- | :--- |
| George | Ericson | Dell |
| Hubert | Heijkers | IBM |
| Ling | Jin | IBM |
| Stefan | Hagen | Individual |
| Michael | Pizzo | Microsoft |
| Christof | Sprenger | Microsoft |
| Ralf | Handl | SAP SE |
| Gerald | Krause | SAP SE |
| Heiko | Theißen | SAP SE |

-------

# <a id="RevisionHistory" href="#RevisionHistory">Appendix D. Revision History</a>

| Revision | Date | Editor | Changes Made |
| :--- | :--- | :--- | :--- |
| Working Draft 01 | 2018-01-29 | Hubert Heijkers | Initial proposal for a compact JSON format for OData Version 4.0 |
| Working Draft 02 | 2026-08-20 | Hubert Heijkers | Restructured as a normative specification for Version 4.02; extended to request payloads and delta payloads; introduced the wrapper object and the superset principle |

-------

# <a id="Notices" href="#Notices">Appendix E. Notices</a>

<!-- Required section. Do not modify. -->

Copyright © OASIS Open 2026. All Rights Reserved.

All capitalized terms in the following text have the meanings assigned to them in the OASIS Intellectual Property Rights Policy (the "OASIS IPR Policy"). The full [Policy](https://www.oasis-open.org/policies-guidelines/ipr/) may be found at the OASIS website.

This document and translations of it may be copied and furnished to others, and derivative works that comment on or otherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part, without restriction of any kind, provided that the above copyright notice and this section are included on all such copies and derivative works. However, this document itself may not be modified in any way, including by removing the copyright notice or references to OASIS, except as needed for the purpose of developing any document or deliverable produced by an OASIS Technical Committee (in which case the rules applicable to copyrights, as set forth in the OASIS IPR Policy, must be followed) or as required to translate it into languages other than English.

The limited permissions granted above are perpetual and will not be revoked by OASIS or its successors or assigns.

This document and the information contained herein is provided on an "AS IS" basis and OASIS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE INFORMATION HEREIN WILL NOT INFRINGE ANY OWNERSHIP RIGHTS OR ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

As stated in the OASIS IPR Policy, the following three paragraphs in brackets apply to OASIS Standards Final Deliverable documents (Committee Specification, Candidate OASIS Standard, OASIS Standard, or Approved Errata).

\[OASIS requests that any OASIS Party or any other party that believes it has patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable, to notify OASIS TC Administrator and provide an indication of its willingness to grant patent licenses to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this deliverable.\]

\[OASIS invites any party to contact the OASIS TC Administrator if it is aware of a claim of ownership of any patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable by a patent holder that is not willing to provide a license to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this OASIS Standards Final Deliverable. OASIS may include such claims on its website, but disclaims any obligation to do so.\]

\[OASIS takes no position regarding the validity or scope of any intellectual property or other rights that might be claimed to pertain to the implementation or use of the technology described in this OASIS Standards Final Deliverable or the extent to which any license under such rights might or might not be available; neither does it represent that it has made any effort to identify any such rights. Information on OASIS' procedures with respect to rights in any document or deliverable produced by an OASIS Technical Committee can be found on the OASIS website. Copies of claims of rights made available for publication and any assurances of licenses to be made available, or the result of an attempt made to obtain a general license or permission for the use of such proprietary rights by implementers or users of this OASIS Standards Final Deliverable, can be obtained from the OASIS TC Administrator. OASIS makes no representation that any information or list of intellectual property rights will at any time be complete, or that any claims in such list are, in fact, Essential Claims.\]

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs. OASIS welcomes reference to, and implementation and use of, specifications, while reserving the right to enforce its marks against misleading uses. Please see https://www.oasis-open.org/policies-guidelines/trademark/ for above guidance.

