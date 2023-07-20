
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# OData JSON Format Version 4.02

## Committee Specification Draft 01

## 14 July 2023

&nbsp;

#### This stage:
https://docs.oasis-open.org/odata/odata-json-format/v4.02/csd01/odata-json-format-v4.02-csd01.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-json-format/v4.02/csd01/odata-json-format-v4.02-csd01.html \
https://docs.oasis-open.org/odata/odata-json-format/v4.02/csd01/odata-json-format-v4.02-csd01.pdf

#### Previous stage:
N/A

#### Latest stage:
https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.html \
https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.pdf

#### Technical Committee:
[OASIS Open Data Protocol (OData) TC](https://www.oasis-open.org/committees/odata/)

#### Chairs:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/)

#### Editors:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/) \
Heiko Theißen (heiko.theissen@sap.com), [SAP SE](http://www.sap.com/)

#### <a name="RelatedWork">Related work:</a>
This specification replaces or supersedes:
* OData JSON Format Version 4.01. Edited by Michael Pizzo, Ralf Handl, and Mark Biamonte. OASIS Standard. Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html.
* OData JSON Format Version 4.0. Edited by Ralf Handl, Michael Pizzo, and Mark Biamonte. OASIS Standard. Latest stage: http://docs.oasis-open.org/odata/odata-json-format/v4.0/odata-json-format-v4.0.html.

This specification is related to:
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html
  * _ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases_. https://docs.oasis-open.org/odata/odata/v4.02/csd01/abnf/
* _OData Vocabularies Version 4.0_. Edited by Michael Pizzo, Ralf Handl, and Ram Jeyaraman. Latest stage: https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.html
* _OData Common Schema Definition Language (CSDL) XML Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/odata-csdl-xml-v4.02.html

#### Abstract:
The Open Data Protocol (OData) for representing and interacting with structured content is comprised of a set of specifications. The core specification for the protocol is in OData Version 4.02 Part 1: Protocol. This document extends the core specification by defining representations for OData requests and responses using a JSON format.

#### Status:
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata#technical.

TC members should send comments on this specification to the TC's email list. Others should send comments to the TC's public comment list, after subscribing to it by following the instructions at the "[Send A Comment](https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=odata)" button on the TC's web page at https://www.oasis-open.org/committees/odata/.

This specification is provided under the [RF on RAND Terms Mode](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

#### Key words:
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [[RFC2119](#rfc2119)] and [[RFC8174](#rfc8174)] when, and only when, they appear in all capitals, as shown here.

#### Citation format:
When referencing this specification the following citation format should be used:

**[OData-JSON-Format-v4.02]**

_OData JSON Format Version 4.02_.
Edited by Ralf Handl, Michael Pizzo, and Heiko Theißen. 14 July 2023. OASIS Committee Specification Draft 01.
https://docs.oasis-open.org/odata/odata-json-format/v4.02/csd01/odata-json-format-v4.02-csd01.html.
Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.html.

#### Notices
Copyright © OASIS Open 2023. All Rights Reserved.

Distributed under the terms of the OASIS [IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/).

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs.

For complete copyright information please see the full Notices section in an Appendix [below](#Notices).

-------

# Table of Contents

::: toc
- [1 Introduction](#Introduction)
  - [1.1 Changes from earlier Versions](#ChangesfromearlierVersions)
  - [1.2 Glossary](#Glossary)
    - [1.2.1 Definitions of terms](#Definitionsofterms)
    - [1.2.2 Acronyms and abbreviations](#Acronymsandabbreviations)
    - [1.2.3 Document conventions](#Documentconventions)
- [2 Section Heading](#SectionHeading)
  - [2.1 Level 2 Heading](#LevelHeading)
    - [2.1.1 Level 3 Heading](#LevelHeading)
      - [2.1.1.1 Level 4 Heading](#LevelHeading)
        - [2.1.1.1.1 Level 5 Heading](#LevelHeading)
  - [2.2 Next Heading](#NextHeading)
- [3 Conformance](#Conformance)
- [A References](#References)
  - [A.1 Normative References](#NormativeReferences)
  - [A.2 Informative References ](#InformativeReferences)
- [B Safety, Security and Privacy Considerations](#SafetySecurityandPrivacyConsiderations)
- [C Acknowledgments](#Acknowledgments)
  - [C.1 Special Thanks](#SpecialThanks)
  - [C.2 Participants](#Participants)
- [D Revision History](#RevisionHistory)
- [E Notices](#Notices)
:::

-------

# <a name="Introduction" href="#Introduction">1 Introduction</a>

The OData protocol is comprised of a set of specifications for representing and interacting with structured content. The core specification for the protocol is in [OData-Protocol](#ODataProtocol); this document is an extension of the core protocol. This document defines representations for the OData requests and responses using the JavaScript Object Notation (JSON), see [RFC8259].

An OData JSON payload may represent:

<!--TODO: insert links to sections -->
- a single primitive value
- a collection of primitive values
- a single complex type value
- a collection of complex type values
- a single entity or entity reference
- a collection of entities or entity references
- a collection of changes
- a service document describing the top-level resources exposed by the service
- an error.

## <a name="ChangesfromearlierVersions" href="#ChangesfromearlierVersions">1.1 Changes from earlier Versions</a>

<!-- TODO -->
<!-- Describe significant changes from previous differently-numbered Versions, not changes between stages of the current Version -->

## <a name="Glossary" href="#Glossary">1.2 Glossary</a>

### <a name="Definitionsofterms" href="#Definitionsofterms">1.2.1 Definitions of terms</a>

<!-- TODO -->

### <a name="Acronymsandabbreviations" href="#Acronymsandabbreviations">1.2.2 Acronyms and abbreviations</a>

<!-- TODO -->

### <a name="Documentconventions" href="#Documentconventions">1.2.3 Document conventions</a>

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example 1: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only. Examples labeled with ⚠ contain advanced concepts or make use of keywords that are defined only later in the text, they can be skipped at first reading.

All other text is normative unless otherwise labeled.

::: example
Here is a customized command line which will generate HTML from this markdown file (named `odata-json-format-v4.02-csd01.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs
       -t html
       -o odata-json-format-v4.02-csd01.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --wrap=none
       --metadata pagetitle="OData JSON Format Version 4.02"
       odata-json-format-v4.02-csd01.md
```

This uses pandoc 3.1.2 from https://github.com/jgm/pandoc/releases/tag/3.1.2.
:::

-------

<!--TODO from here -->

# <a name="SectionHeading" href="#SectionHeading">2 Section Heading</a>
text.

## <a name="LevelHeading" href="#LevelHeading">2.1 Level 2 Heading</a>
text.

### <a name="LevelHeading" href="#LevelHeading">2.1.1 Level 3 Heading</a>
text.

#### <a name="LevelHeading" href="#LevelHeading">2.1.1.1 Level 4 Heading</a>
text.

##### <a name="LevelHeading" href="#LevelHeading">2.1.1.1.1 Level 5 Heading</a>
This is the deepest level, because six # gets transformed into a Reference tag.


## <a name="NextHeading" href="#NextHeading">2.2 Next Heading</a>
text.

-------

# <a name="Conformance" href="#Conformance">3 Conformance</a>

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


-------

# <a name="References" href="#References">Appendix A. References</a>

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## <a name="NormativeReferences" href="#NormativeReferences">A.1 Normative References</a>

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

###### <a name="ODataABNF">[OData-ABNF]</a>
_ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataCSDL">[OData-CSDL]</a>
_OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02._  
See link in "[Related work](#RelatedWork)" section on cover page.

_OData Common Schema Definition Language (CSDL) XML Representation Version 4.02._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataProtocol">[OData-Protocol]</a>
_OData Version 4.02. Part 1: Protocol._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataURL">[OData-URL]</a>
_OData Version 4.02. Part 2: URL Conventions._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataVocCap">[OData-VocCap]</a>
_OData Vocabularies Version 4.0: Capabilities Vocabulary._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataVocCore">[OData-VocCore]</a>
_OData Vocabularies Version 4.0: Core Vocabulary._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="rfc2119">[RFC2119]</a>
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_  
https://www.rfc-editor.org/info/rfc2119.

###### <a name="rfc3986">[RFC3986]</a>
_Berners-Lee, T., Fielding, R., and L. Masinter, "Uniform Resource Identifier (URI): Generic Syntax", IETF RFC3986, January 2005_
https://tools.ietf.org/html/rfc3986.

###### <a name="rfc3987">[RFC3987]</a>
_Duerst, M. and, M. Suignard, "Internationalized Resource Identifiers (IRIs)", RFC 3987, January 2005_
https://tools.ietf.org/html/rfc3987.

###### <a name="rfc4648">[RFC4648]</a>
_Josefsson, S,, "The Base16, Base32, and Base64 Data Encodings", RFC 4648, October 2006_
https://tools.ietf.org/html/rfc4648.

###### <a name="rfc5646">[RFC5646]</a>
_Phillips, A., Ed., and M. Davis, Ed., "Tags for Identifying Languages", BCP 47, RFC 5646, September 2009_
http://tools.ietf.org/html/rfc5646.

###### <a name="rfc74932>[RFC7493]</a>
_Bray, T., Ed., "The I-JSON Message Format", RFC7493, March 2015_
https://tools.ietf.org/html/rfc7493.

###### <a name="rfc7946">[RFC7946]</a>
_Howard Butler, Martin Daly, Alan Doyle, Sean Gillies, Stefan Hagen and Tim Schaub, "The GeoJSON Format", RFC 7946, August 2016._
http://tools.ietf.org/html/rfc7946.

###### <a name="rfc8174">[RFC8174]</a>
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_  
https://www.rfc-editor.org/info/rfc8174.

###### <a name="rfc8259">[RFC8259]</a>
_Bray, T., Ed., "The JavaScript Object Notation (JSON) Data Interchange Format", RFC 8259, December 2017_
http://tools.ietf.org/html/rfc8259.

## <a name="InformativeReferences" href="#InformativeReferences">A.2 Informative References </a>

###### <a name="ECMAScript">[ECMAScript]</a>
_ECMAScript 2023 Language Specification, 14th Edition_, June 2023. Standard ECMA-262. https://www.ecma-international.org/publications-and-standards/standards/ecma-262/.

-------

# <a name="SafetySecurityandPrivacyConsiderations" href="#SafetySecurityandPrivacyConsiderations">Appendix B. Safety, Security and Privacy Considerations</a>

This specification raises no security issues.

This section is provided as a service to the application developers, information providers, and users of OData version 4.0 giving some references to starting points for securing OData services as specified. OData is a REST-full multi-format service that depends on other services and thus inherits both sides of the coin, security enhancements and concerns alike from the latter.

For JSON-relevant security implications please cf. at least the relevant subsections of [RFC8259](#rfc8259) as starting point.

-------

# <a name="Acknowledgments" href="#Acknowledgments">Appendix C. Acknowledgments</a>

## <a name="SpecialThanks" href="#SpecialThanks">C.1 Special Thanks</a>

The contributions of the OASIS OData Technical Committee members, enumerated in [OData-Protocol](#ODataProtocol) are gratefully acknowledged.

## <a name="Participants" href="#Participants">C.2 Participants</a>

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
| Mark | Biamonte | Progress Software |
| Martin | Zurmühl | SAP SE |

-------

# <a name="RevisionHistory" href="#RevisionHistory">Appendix D. Revision History</a>

<!-- Optional section -->

| Revision | Date | Editor | Changes Made |
| :--- | :--- | :--- | :--- |
| Working Draft 01 | 2023-07-20 | Ralf Handl | Import material from OData JSON Format Version 4.01 |

-------

# <a name="Notices" href="#Notices">Appendix E. Notices</a>

<!-- Required section. Do not modify. -->

Copyright &copy; OASIS Open 2023. All Rights Reserved.

All capitalized terms in the following text have the meanings assigned to them in the OASIS Intellectual Property Rights Policy (the "OASIS IPR Policy"). The full [Policy](https://www.oasis-open.org/policies-guidelines/ipr/) may be found at the OASIS website.

This document and translations of it may be copied and furnished to others, and derivative works that comment on or otherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part, without restriction of any kind, provided that the above copyright notice and this section are included on all such copies and derivative works. However, this document itself may not be modified in any way, including by removing the copyright notice or references to OASIS, except as needed for the purpose of developing any document or deliverable produced by an OASIS Technical Committee (in which case the rules applicable to copyrights, as set forth in the OASIS IPR Policy, must be followed) or as required to translate it into languages other than English.

The limited permissions granted above are perpetual and will not be revoked by OASIS or its successors or assigns.

This document and the information contained herein is provided on an "AS IS" basis and OASIS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE INFORMATION HEREIN WILL NOT INFRINGE ANY OWNERSHIP RIGHTS OR ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

As stated in the OASIS IPR Policy, the following three paragraphs in brackets apply to OASIS Standards Final Deliverable documents (Committee Specification, Candidate OASIS Standard, OASIS Standard, or Approved Errata).

\[OASIS requests that any OASIS Party or any other party that believes it has patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable, to notify OASIS TC Administrator and provide an indication of its willingness to grant patent licenses to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this deliverable.\]

\[OASIS invites any party to contact the OASIS TC Administrator if it is aware of a claim of ownership of any patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable by a patent holder that is not willing to provide a license to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this OASIS Standards Final Deliverable. OASIS may include such claims on its website, but disclaims any obligation to do so.\]

\[OASIS takes no position regarding the validity or scope of any intellectual property or other rights that might be claimed to pertain to the implementation or use of the technology described in this OASIS Standards Final Deliverable or the extent to which any license under such rights might or might not be available; neither does it represent that it has made any effort to identify any such rights. Information on OASIS' procedures with respect to rights in any document or deliverable produced by an OASIS Technical Committee can be found on the OASIS website. Copies of claims of rights made available for publication and any assurances of licenses to be made available, or the result of an attempt made to obtain a general license or permission for the use of such proprietary rights by implementers or users of this OASIS Standards Final Deliverable, can be obtained from the OASIS TC Administrator. OASIS makes no representation that any information or list of intellectual property rights will at any time be complete, or that any claims in such list are, in fact, Essential Claims.\]

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs. OASIS welcomes reference to, and implementation and use of, specifications, while reserving the right to enforce its marks against misleading uses. Please see https://www.oasis-open.org/policies-guidelines/trademark/ for above guidance.

