::: WordSection1
[![OASIS
logo](https://docs.oasis-open.org/templates/OASISLogo-v2.0.jpg){border="0"
width="250" height="55"}](https://www.oasis-open.org)

::: {style="border:none;border-top:solid gray 1.0pt;padding:1.0pt 0in 0in 0in"}
OData Version 4.01. Part 1: Protocol

OASIS Standard

23 April 2020
:::

This stage:

<https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.docx>
(Authoritative)

<https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html>

<https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.pdf>

Previous stage:

<https://docs.oasis-open.org/odata/odata/v4.01/cs02/part1-protocol/odata-v4.01-cs02-part1-protocol.docx>
(Authoritative)

<https://docs.oasis-open.org/odata/odata/v4.01/cs02/part1-protocol/odata-v4.01-cs02-part1-protocol.html>

<https://docs.oasis-open.org/odata/odata/v4.01/cs02/part1-protocol/odata-v4.01-cs02-part1-protocol.pdf>

Latest stage:

<https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.docx>[[
(Authoritative)]{style="color:windowtext"}]{.MsoHyperlink}

<https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html>

<https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.pdf>

Technical Committee:

[OASIS Open Data Protocol (OData)
TC](https://www.oasis-open.org/committees/odata/)

Chairs:

[Ralf Handl
(]{lang="DE"}[[ralf.handl@sap.com]{lang="DE"}](mailto:ralf.handl@sap.com){target="_blank"}[),
]{lang="DE"}[[SAP SE]{lang="DE"}](http://www.sap.com/)

Michael Pizzo
([mikep@microsoft.com](mailto:mikep@microsoft.com){target="_blank"}),
[Microsoft](http://www.microsoft.com/)

Editors:

Michael Pizzo
([mikep@microsoft.com](mailto:mikep@microsoft.com){target="_blank"}),
[Microsoft](http://www.microsoft.com/)

[Ralf Handl
(]{lang="DE"}[[ralf.handl@sap.com]{lang="DE"}](mailto:ralf.handl@sap.com){target="_blank"}[),
]{lang="DE"}[[SAP SE]{lang="DE"}](http://www.sap.com/)

[Martin Zurmuehl
(]{lang="DE"}[[martin.zurmuehl@sap.com]{lang="DE"}](mailto:martin.zurmuehl@sap.com){target="_blank"}[),
]{lang="DE"}[[SAP SE]{lang="DE"}](http://www.sap.com/)

[Additional artifacts]{#AdditionalArtifacts}:

This prose specification is one component of a Work Product that also
includes:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
Version 4.01. Part 1: Protocol* (this document).
<https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html>.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
Version 4.01. Part 2: URL Conventions*.
<https://docs.oasis-open.org/odata/odata/v4.01/os/part2-url-conventions/odata-v4.01-os-part2-url-conventions.html>.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}ABNF
components: *OData ABNF Construction Rules Version 4.01* and *OData ABNF
Test Cases Version 4.01*.
<https://docs.oasis-open.org/odata/odata/v4.01/os/abnf/>.

[Related work]{#RelatedWork}:

This specification replaces or supersedes:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
Version 4.0 Part 1: Protocol*. Edited by Michael Pizzo, Ralf Handl, and
Martin Zurmuehl. OASIS Standard. Latest stage:
<http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html>.

This specification is related to:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
Vocabularies Version 4.0.* Edited by Michael Pizzo, Ralf Handl, and Ram
Jeyaraman. [Latest stage:
]{lang="DE"}[[http://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html]{lang="DE"}](http://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html)[.]{lang="DE"}

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:
Symbol;color:windowtext"}]{.MsoHyperlink}*OData Common Schema Definition
Language (CSDL) JSON Representation Version 4.01*. Edited by Michael
Pizzo, Ralf Handl, and Martin Zurmuehl. [Latest stage:
]{lang="DE"}[[https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html]{lang="DE"}](https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html)[[.]{lang="DE"
style="color:windowtext"}]{.MsoHyperlink}

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
Common Schema Definition Language (CSDL) XML Representation Version
4.01*. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. [Latest
stage:[[
]{style="color:windowtext"}]{.MsoHyperlink}]{lang="DE"}[[https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html]{lang="DE"}](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html)[.]{lang="DE"}

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
JSON Format Version 4.01*. Edited by Ralf Handl, Michael Pizzo, and Mark
Biamonte. Latest stage:
<https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html>.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
Extension for Data Aggregation Version 4.0*. Edited by Ralf Handl,
Hubert Heijkers, Gerald Krause, Michael Pizzo, and Martin Zurmuehl.
Latest stage:
<http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html>.

Abstract:

The Open Data Protocol (OData) enables the creation of REST-based data
services, which allow resources, identified using Uniform Resource
Locators (URLs) and defined in an Entity Data Model (EDM), to be
published and edited by Web clients using simple HTTP messages. This
document defines the core semantics and facilities of the protocol.

Status:

This document was last revised or approved by the membership of OASIS on
the above date. The level of approval is also listed above. Check the
"Latest stage" location noted above for possible later revisions of this
document. Any other numbered Versions and other technical work produced
by the Technical Committee (TC) are listed at
<https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata#technical>.)

TC members should send comments on this specification to the TC's email
list. Others should send comments to the TC's public comment list, after
subscribing to it by following the instructions at the "[Send A
Comment](https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=odata)"
button on the TC's web page at
<https://www.oasis-open.org/committees/odata/>[[.]{style="color:black"}]{.MsoHyperlink}

This specification is provided under the [RF on RAND
Terms](https://www.oasis-open.org/policies-guidelines/ipr#RF-on-RAND-Mode)
Mode of the [OASIS IPR
Policy](https://www.oasis-open.org/policies-guidelines/ipr), the mode
chosen when the Technical Committee was established. For information on
whether any patents have been disclosed that may be essential to
implementing this specification, and any offers of patent licensing
terms, please refer to the Intellectual Property Rights section of the
TC's web page (<https://www.oasis-open.org/committees/odata/ipr.php>).

Note that any machine-readable content ([Computer Language
Definitions](https://www.oasis-open.org/policies-guidelines/tc-process#wpComponentsCompLang))
declared Normative for this Work Product is provided in separate plain
text files. In the event of a discrepancy between any such plain text
file and display content in the Work Product\'s prose narrative
document(s), the content in the separate plain text file prevails.

Citation format:

When referencing this specification the following citation format should
be used:

[\[OData-Part1\]]{.Refterm}

*OData Version 4.01. Part 1: Protocol*. Edited by Michael Pizzo, Ralf
Handl, and Martin Zurmuehl. 23 April 2020. OASIS Standard.
<https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html>.
Latest stage:
<https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html>.

::: {style="border:none;border-top:solid gray 1.0pt;padding:1.0pt 0in 0in 0in"}
Notices
:::

Copyright © OASIS Open 2020. All Rights Reserved.

All capitalized terms in the following text have the meanings assigned
to them in the OASIS Intellectual Property Rights Policy (the \"OASIS
IPR Policy\"). The full
[Policy](https://www.oasis-open.org/policies-guidelines/ipr) may be
found at the OASIS website.

This document and translations of it may be copied and furnished to
others, and derivative works that comment on or otherwise explain it or
assist in its implementation may be prepared, copied, published, and
distributed, in whole or in part, without restriction of any kind,
provided that the above copyright notice and this section are included
on all such copies and derivative works. However, this document itself
may not be modified in any way, including by removing the copyright
notice or references to OASIS, except as needed for the purpose of
developing any document or deliverable produced by an OASIS Technical
Committee (in which case the rules applicable to copyrights, as set
forth in the OASIS IPR Policy, must be followed) or as required to
translate it into languages other than English.

The limited permissions granted above are perpetual and will not be
revoked by OASIS or its successors or assigns.

This document and the information contained herein is provided on an
\"AS IS\" basis and OASIS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE
INFORMATION HEREIN WILL NOT INFRINGE ANY OWNERSHIP RIGHTS OR ANY IMPLIED
WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

OASIS requests that any OASIS Party or any other party that believes it
has patent claims that would necessarily be infringed by implementations
of this OASIS Committee Specification or OASIS Standard, to notify OASIS
TC Administrator and provide an indication of its willingness to grant
patent licenses to such patent claims in a manner consistent with the
IPR Mode of the OASIS Technical Committee that produced this
specification.

OASIS invites any party to contact the OASIS TC Administrator if it is
aware of a claim of ownership of any patent claims that would
necessarily be infringed by implementations of this specification by a
patent holder that is not willing to provide a license to such patent
claims in a manner consistent with the IPR Mode of the OASIS Technical
Committee that produced this specification. OASIS may include such
claims on its website, but disclaims any obligation to do so.

OASIS takes no position regarding the validity or scope of any
intellectual property or other rights that might be claimed to pertain
to the implementation or use of the technology described in this
document or the extent to which any license under such rights might or
might not be available; neither does it represent that it has made any
effort to identify any such rights. Information on OASIS\' procedures
with respect to rights in any document or deliverable produced by an
OASIS Technical Committee can be found on the OASIS website. Copies of
claims of rights made available for publication and any assurances of
licenses to be made available, or the result of an attempt made to
obtain a general license or permission for the use of such proprietary
rights by implementers or users of this OASIS Committee Specification or
OASIS Standard, can be obtained from the OASIS TC Administrator. OASIS
makes no representation that any information or list of intellectual
property rights will at any time be complete, or that any claims in such
list are, in fact, Essential Claims.

The name \"OASIS\" is a trademark of
[OASIS](https://www.oasis-open.org/), the owner and developer of this
specification, and should be used only to refer to the organization and
its official outputs. OASIS welcomes reference to, and implementation
and use of, specifications, while reserving the right to enforce its
marks against misleading uses. Please see
<https://www.oasis-open.org/policies-guidelines/trademark> for above
guidance.

::: {style="border:none;border-top:solid gray 1.0pt;padding:1.0pt 0in 0in 0in"}
Table of Contents
:::

[1[        ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Introduction[.
]{style="color:windowtext;display:none"}[9]{style="color:windowtext;display:none"}](#_Toc31358832)

[1.0 IPR Policy[. ]{style="color:windowtext;
display:none"}[9]{style="color:windowtext;display:none"}](#_Toc31358833)

[1.1 Terminology[. ]{style="color:
windowtext;display:none"}[9]{style="color:windowtext;display:none"}](#_Toc31358834)

[1.2 Normative References[.
]{style="color:windowtext;display:none"}[9]{style="color:windowtext;display:none"}](#_Toc31358835)

[1.3 Typographical Conventions[.
]{style="color:windowtext;display:none"}[10]{style="color:windowtext;display:none"}](#_Toc31358836)

[2[        ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Overview[.
]{style="color:windowtext;display:none"}[11]{style="color:windowtext;display:none"}](#_Toc31358837)

[3[        ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Data Model[
]{style="color:windowtext;display:none"}[12]{style="color:windowtext;display:none"}](#_Toc31358838)

[3.1 Annotations[. ]{style="color:
windowtext;display:none"}[12]{style="color:windowtext;display:none"}](#_Toc31358839)

[4[        ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Service Model[
]{style="color:windowtext;display:none"}[14]{style="color:windowtext;display:none"}](#_Toc31358840)

[4.1 Entity-Ids and Entity References[.
]{style="color:windowtext;display:none"}[14]{style="color:windowtext;display:none"}](#_Toc31358841)

[4.2 Read URLs and Edit URLs[.
]{style="color:windowtext;display:none"}[14]{style="color:windowtext;display:none"}](#_Toc31358842)

[4.3 Transient Entities[.
]{style="color:windowtext;display:none"}[14]{style="color:windowtext;display:none"}](#_Toc31358843)

[4.4 Default Namespaces[.
]{style="color:windowtext;display:none"}[15]{style="color:windowtext;display:none"}](#_Toc31358844)

[5[        ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Versioning[.
]{style="color:windowtext;display:none"}[16]{style="color:windowtext;display:none"}](#_Toc31358845)

[5.1 Protocol Versioning[.
]{style="color:windowtext;display:none"}[16]{style="color:windowtext;display:none"}](#_Toc31358846)

[5.2 Model Versioning[.
]{style="color:windowtext;display:none"}[16]{style="color:windowtext;display:none"}](#_Toc31358847)

[6[        ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Extensibility[.
]{style="color:windowtext;display:none"}[18]{style="color:windowtext;display:none"}](#_Toc31358848)

[6.1 Query Option Extensibility[.
]{style="color:windowtext;display:none"}[18]{style="color:windowtext;display:none"}](#_Toc31358849)

[6.2 Payload Extensibility[.
]{style="color:windowtext;display:none"}[18]{style="color:windowtext;display:none"}](#_Toc31358850)

[6.3 Action/Function Extensibility[.
]{style="color:windowtext;display:none"}[18]{style="color:windowtext;display:none"}](#_Toc31358851)

[6.4 Vocabulary Extensibility[.
]{style="color:windowtext;display:none"}[18]{style="color:windowtext;display:none"}](#_Toc31358852)

[6.5 Header Field Extensibility[.
]{style="color:windowtext;display:none"}[19]{style="color:windowtext;display:none"}](#_Toc31358853)

[6.6 Format Extensibility[.
]{style="color:windowtext;display:none"}[19]{style="color:windowtext;display:none"}](#_Toc31358854)

[7[        ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Formats[.
]{style="color:windowtext;display:none"}[20]{style="color:windowtext;display:none"}](#_Toc31358855)

[8[        ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Header Fields[.
]{style="color:windowtext;display:none"}[21]{style="color:windowtext;display:none"}](#_Toc31358856)

[8.1 Common Headers[.
]{style="color:windowtext;display:none"}[21]{style="color:windowtext;display:none"}](#_Toc31358857)

[8.1.1 Header `Content-Type`[.
]{style="color:windowtext;display:none"}[21]{style="color:windowtext;display:none"}](#_Toc31358858)

[8.1.2 Header `Content-Encoding`[. ]{style="color:windowtext;display:
none"}[21]{style="color:windowtext;display:none"}](#_Toc31358859)

[8.1.3 Header `Content-Language`[. ]{style="color:windowtext;display:
none"}[21]{style="color:windowtext;display:none"}](#_Toc31358860)

[8.1.4 Header `Content-Length`[.
]{style="color:windowtext;display:none"}[21]{style="color:windowtext;display:none"}](#_Toc31358861)

[8.1.5 Header `OData-Version`[.
]{style="color:windowtext;display:none"}[22]{style="color:windowtext;display:none"}](#_Toc31358862)

[8.2 Request Headers[.
]{style="color:windowtext;display:none"}[22]{style="color:windowtext;display:none"}](#_Toc31358863)

[8.2.1 Header `Accept`[.
]{style="color:windowtext;display:none"}[22]{style="color:windowtext;display:none"}](#_Toc31358864)

[8.2.2 Header `Accept-Charset`[.
]{style="color:windowtext;display:none"}[22]{style="color:windowtext;display:none"}](#_Toc31358865)

[8.2.3 Header `Accept-Language`[. ]{style="color:windowtext;display:
none"}[22]{style="color:windowtext;display:none"}](#_Toc31358866)

[8.2.4 Header `If-Match`[.
]{style="color:windowtext;display:none"}[23]{style="color:windowtext;display:none"}](#_Toc31358867)

[8.2.5 Header `If-None-Match`[.
]{style="color:windowtext;display:none"}[23]{style="color:windowtext;display:none"}](#_Toc31358868)

[8.2.6 Header `Isolation` (`OData-Isolation`)[
]{style="color:windowtext;display:none"}[23]{style="color:windowtext;display:none"}](#_Toc31358869)

[8.2.7 Header `OData-MaxVersion`[. ]{style="color:windowtext;display:
none"}[24]{style="color:windowtext;display:none"}](#_Toc31358870)

[8.2.8 Header `Prefer`[.
]{style="color:windowtext;display:none"}[24]{style="color:windowtext;display:none"}](#_Toc31358871)

[8.2.8.1 Preference `allow-entityreferences`
(`odata.allow-entityreferences`)[
]{style="color:windowtext;display:none"}[24]{style="color:windowtext;display:none"}](#_Toc31358872)

[8.2.8.2 Preference `callback` (`odata.callback`)[
]{style="color:windowtext;display:
none"}[25]{style="color:windowtext;display:none"}](#_Toc31358873)

[8.2.8.3 Preference `continue-on-error` (`odata.continue-on-error`)[
]{style="color:windowtext;display:none"}[26]{style="color:windowtext;display:none"}](#_Toc31358874)

[8.2.8.4 Preference `include-annotations` (`odata.include-annotations`)[
]{style="color:windowtext;display:none"}[26]{style="color:windowtext;display:none"}](#_Toc31358875)

[8.2.8.5 Preference `maxpagesize` (`odata.maxpagesize`)[
]{style="color:windowtext;
display:none"}[27]{style="color:windowtext;display:none"}](#_Toc31358876)

[8.2.8.6 Preference `omit-values`[. ]{style="color:windowtext;
display:none"}[28]{style="color:windowtext;display:none"}](#_Toc31358877)

[8.2.8.7 Preference `return=representation` and `return=minimal`[.
]{style="color:windowtext;
display:none"}[28]{style="color:windowtext;display:none"}](#_Toc31358878)

[8.2.8.8 Preference `respond-async`[. ]{style="color:windowtext;
display:none"}[29]{style="color:windowtext;display:none"}](#_Toc31358879)

[8.2.8.9 Preference `track-changes` (`odata.track-changes`)[
]{style="color:windowtext;
display:none"}[29]{style="color:windowtext;display:none"}](#_Toc31358880)

[8.2.8.10 Preference `wait`[. ]{style="color:windowtext;
display:none"}[29]{style="color:windowtext;display:none"}](#_Toc31358881)

[8.3 Response Headers[.
]{style="color:windowtext;display:none"}[30]{style="color:windowtext;display:none"}](#_Toc31358882)

[8.3.1 Header `AsyncResult`[.
]{style="color:windowtext;display:none"}[30]{style="color:windowtext;display:none"}](#_Toc31358883)

[8.3.2 Header `ETag`[.
]{style="color:windowtext;display:none"}[30]{style="color:windowtext;display:none"}](#_Toc31358884)

[8.3.3 Header `Location`[.
]{style="color:windowtext;display:none"}[30]{style="color:windowtext;display:none"}](#_Toc31358885)

[8.3.4 Header `OData-EntityId`[.
]{style="color:windowtext;display:none"}[30]{style="color:windowtext;display:none"}](#_Toc31358886)

[8.3.5 Header `OData-Error`[.
]{style="color:windowtext;display:none"}[31]{style="color:windowtext;display:none"}](#_Toc31358887)

[8.3.6 Header `Preference-Applied`[. ]{style="color:windowtext;
display:none"}[31]{style="color:windowtext;display:none"}](#_Toc31358888)

[8.3.7 Header `Retry-After`[.
]{style="color:windowtext;display:none"}[31]{style="color:windowtext;display:none"}](#_Toc31358889)

[8.3.8 Header `Vary`[.
]{style="color:windowtext;display:none"}[31]{style="color:windowtext;display:none"}](#_Toc31358890)

[9[        ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Common Response
Status Codes[.
]{style="color:windowtext;display:none"}[32]{style="color:windowtext;display:none"}](#_Toc31358891)

[9.1 Success Responses[.
]{style="color:windowtext;display:none"}[32]{style="color:windowtext;display:none"}](#_Toc31358892)

[9.1.1 Response Code `200 OK`[. ]{style="color:windowtext;
display:none"}[32]{style="color:windowtext;display:none"}](#_Toc31358893)

[9.1.2 Response Code `201 Created`[. ]{style="color:windowtext;
display:none"}[32]{style="color:windowtext;display:none"}](#_Toc31358894)

[9.1.3 Response Code `202 Accepted`[. ]{style="color:windowtext;
display:none"}[32]{style="color:windowtext;display:none"}](#_Toc31358895)

[9.1.4 Response Code `204 No Content`[. ]{style="color:windowtext;
display:none"}[32]{style="color:windowtext;display:none"}](#_Toc31358896)

[9.1.5 Response Code `3xx Redirection`[. ]{style="color:
windowtext;display:none"}[32]{style="color:windowtext;display:none"}](#_Toc31358897)

[9.1.6 Response Code `304 Not Modified`[.
]{style="color:windowtext;display:none"}[32]{style="color:windowtext;display:none"}](#_Toc31358898)

[9.2 Client Error Responses[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc31358899)

[9.2.1 Response Code `404 Not Found`[. ]{style="color:windowtext;
display:none"}[33]{style="color:windowtext;display:none"}](#_Toc31358900)

[9.2.2 Response Code `405 Method Not Allowed`[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc31358901)

[9.2.3 Response Code `406 Not Acceptable`[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc31358902)

[9.2.4 Response Code `410 Gone`[. ]{style="color:windowtext;
display:none"}[33]{style="color:windowtext;display:none"}](#_Toc31358903)

[9.2.5 Response Code `412 Precondition Failed`[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc31358904)

[9.2.6 Response Code `424 Failed Dependency`[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc31358905)

[9.3 Server Error Responses[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc31358906)

[9.3.1 Response Code `501 Not Implemented`[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc31358907)

[9.4 Error Response Body[.
]{style="color:windowtext;display:none"}[34]{style="color:windowtext;display:none"}](#_Toc31358908)

[9.5 In-Stream Errors[.
]{style="color:windowtext;display:none"}[34]{style="color:windowtext;display:none"}](#_Toc31358909)

[10[      ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Context URL[.
]{style="color:windowtext;display:none"}[35]{style="color:windowtext;display:none"}](#_Toc31358910)

[10.1 Service Document[
]{style="color:windowtext;display:none"}[35]{style="color:windowtext;display:none"}](#_Toc31358911)

[10.2 Collection of Entities[.
]{style="color:windowtext;display:none"}[35]{style="color:windowtext;display:none"}](#_Toc31358912)

[10.3 Entity[. ]{style="color:windowtext;
display:none"}[36]{style="color:windowtext;display:none"}](#_Toc31358913)

[10.4 Singleton[. ]{style="color:windowtext;
display:none"}[36]{style="color:windowtext;display:none"}](#_Toc31358914)

[10.5 Collection of Derived Entities[.
]{style="color:windowtext;display:none"}[36]{style="color:windowtext;display:none"}](#_Toc31358915)

[10.6 Derived Entity[.
]{style="color:windowtext;display:none"}[37]{style="color:windowtext;display:none"}](#_Toc31358916)

[10.7 Collection of Projected Entities[.
]{style="color:windowtext;display:none"}[37]{style="color:windowtext;display:none"}](#_Toc31358917)

[10.8 Projected Entity[.
]{style="color:windowtext;display:none"}[37]{style="color:windowtext;display:none"}](#_Toc31358918)

[10.9 Collection of Expanded Entities[.
]{style="color:windowtext;display:none"}[38]{style="color:windowtext;display:none"}](#_Toc31358919)

[10.10 Expanded Entity[.
]{style="color:windowtext;display:none"}[39]{style="color:windowtext;display:none"}](#_Toc31358920)

[10.11 Collection of Entity References[.
]{style="color:windowtext;display:none"}[39]{style="color:windowtext;display:none"}](#_Toc31358921)

[10.12 Entity Reference[.
]{style="color:windowtext;display:none"}[39]{style="color:windowtext;display:none"}](#_Toc31358922)

[10.13 Property Value[.
]{style="color:windowtext;display:none"}[40]{style="color:windowtext;display:none"}](#_Toc31358923)

[10.14 Collection of Complex or Primitive Types[.
]{style="color:windowtext;display:none"}[40]{style="color:windowtext;display:none"}](#_Toc31358924)

[10.15 Complex or Primitive Type[.
]{style="color:windowtext;display:none"}[40]{style="color:windowtext;display:none"}](#_Toc31358925)

[10.16 Operation Result[
]{style="color:windowtext;display:none"}[40]{style="color:windowtext;display:none"}](#_Toc31358926)

[10.17 Delta Payload Response[.
]{style="color:windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc31358927)

[10.18 Item in a Delta Payload Response[.
]{style="color:windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc31358928)

[10.19 \$all Response[.
]{style="color:windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc31358929)

[10.20 \$crossjoin Response[.
]{style="color:windowtext;display:none"}[42]{style="color:windowtext;display:none"}](#_Toc31358930)

[11[      ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Data Service
Requests[.
]{style="color:windowtext;display:none"}[43]{style="color:windowtext;display:none"}](#_Toc31358931)

[11.1 Metadata Requests[.
]{style="color:windowtext;display:none"}[43]{style="color:windowtext;display:none"}](#_Toc31358932)

[11.1.1 Service Document Request[
]{style="color:windowtext;display:none"}[43]{style="color:windowtext;display:none"}](#_Toc31358933)

[11.1.2 Metadata Document Request[
]{style="color:windowtext;display:none"}[43]{style="color:windowtext;display:none"}](#_Toc31358934)

[11.2 Requesting Data[.
]{style="color:windowtext;display:none"}[44]{style="color:windowtext;display:none"}](#_Toc31358935)

[11.2.1 System Query Options[.
]{style="color:windowtext;display:none"}[44]{style="color:windowtext;display:none"}](#_Toc31358936)

[11.2.2 Requesting Individual Entities[.
]{style="color:windowtext;display:none"}[45]{style="color:windowtext;display:none"}](#_Toc31358937)

[11.2.3 Requesting the Media Stream of a Media Entity using `$value`[.
]{style="color:windowtext;display:none"}[45]{style="color:windowtext;display:none"}](#_Toc31358938)

[11.2.4 Requesting Individual Properties[.
]{style="color:windowtext;display:none"}[45]{style="color:windowtext;display:none"}](#_Toc31358939)

[11.2.4.1 Requesting a Property\'s Raw Value using `$value`[.
]{style="color:windowtext;display:none"}[46]{style="color:windowtext;display:none"}](#_Toc31358940)

[11.2.5 Specifying Properties to Return[.
]{style="color:windowtext;display:none"}[46]{style="color:windowtext;display:none"}](#_Toc31358941)

[11.2.5.1 System Query Option `$select`[. ]{style="color:windowtext;
display:none"}[46]{style="color:windowtext;display:none"}](#_Toc31358942)

[11.2.5.2 System Query Option `$expand`[. ]{style="color:windowtext;
display:none"}[47]{style="color:windowtext;display:none"}](#_Toc31358943)

[11.2.5.2.1 Expand Options[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc31358944)

[11.2.5.2.1.1[     ]{style="font-size:
11.0pt;font-family:\"Calibri\",sans-serif;color:windowtext"}Expand
Option `$levels`[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc31358945)

[11.2.5.3 System Query Option `$compute`[. ]{style="color:windowtext;
display:none"}[48]{style="color:windowtext;display:none"}](#_Toc31358946)

[11.2.6 Querying Collections[.
]{style="color:windowtext;display:none"}[49]{style="color:windowtext;display:none"}](#_Toc31358947)

[11.2.6.1 System Query Option `$filter`[. ]{style="color:windowtext;
display:none"}[49]{style="color:windowtext;display:none"}](#_Toc31358948)

[11.2.6.1.1 Built-in Filter Operations[.
]{style="color:windowtext;display:none"}[49]{style="color:windowtext;display:none"}](#_Toc31358949)

[11.2.6.1.2 Built-in Query Functions[.
]{style="color:windowtext;display:none"}[50]{style="color:windowtext;display:none"}](#_Toc31358950)

[11.2.6.1.3 Parameter Aliases[.
]{style="color:windowtext;display:none"}[52]{style="color:windowtext;display:none"}](#_Toc31358951)

[11.2.6.2 System Query Option `$orderby`[. ]{style="color:windowtext;
display:none"}[52]{style="color:windowtext;display:none"}](#_Toc31358952)

[11.2.6.3 System Query Option `$top`[. ]{style="color:windowtext;
display:none"}[53]{style="color:windowtext;display:none"}](#_Toc31358953)

[11.2.6.4 System Query Option `$skip`[. ]{style="color:windowtext;
display:none"}[53]{style="color:windowtext;display:none"}](#_Toc31358954)

[11.2.6.5 System Query Option `$count`[. ]{style="color:windowtext;
display:none"}[54]{style="color:windowtext;display:none"}](#_Toc31358955)

[11.2.6.6 System Query Option `$search`[. ]{style="color:windowtext;
display:none"}[54]{style="color:windowtext;display:none"}](#_Toc31358956)

[11.2.6.7 Server-Driven Paging[.
]{style="color:windowtext;display:none"}[55]{style="color:windowtext;display:none"}](#_Toc31358957)

[11.2.6.8 Requesting an Individual Member of an Ordered Collection[.
]{style="color:windowtext;display:none"}[55]{style="color:windowtext;display:none"}](#_Toc31358958)

[11.2.7 Requesting Related Entities[.
]{style="color:windowtext;display:none"}[55]{style="color:windowtext;display:none"}](#_Toc31358959)

[11.2.8 Requesting Entity References[.
]{style="color:windowtext;display:none"}[56]{style="color:windowtext;display:none"}](#_Toc31358960)

[11.2.9 Resolving an Entity-Id[.
]{style="color:windowtext;display:none"}[56]{style="color:windowtext;display:none"}](#_Toc31358961)

[11.2.10 Requesting the Number of Items in a Collection[.
]{style="color:windowtext;display:none"}[56]{style="color:windowtext;display:none"}](#_Toc31358962)

[11.2.11 System Query Option `$format`[. ]{style="color:windowtext;
display:none"}[57]{style="color:windowtext;display:none"}](#_Toc31358963)

[11.2.12 System Query Option `$schemaversion`[.
]{style="color:windowtext;
display:none"}[57]{style="color:windowtext;display:none"}](#_Toc31358964)

[11.3 Requesting Changes[.
]{style="color:windowtext;display:none"}[58]{style="color:windowtext;display:none"}](#_Toc31358965)

[11.3.1 Delta Links[.
]{style="color:windowtext;display:none"}[58]{style="color:windowtext;display:none"}](#_Toc31358966)

[11.3.2 Using Delta Links[.
]{style="color:windowtext;display:none"}[59]{style="color:windowtext;display:none"}](#_Toc31358967)

[11.3.3 Delta Payloads[.
]{style="color:windowtext;display:none"}[60]{style="color:windowtext;display:none"}](#_Toc31358968)

[11.4 Data Modification[.
]{style="color:windowtext;display:none"}[60]{style="color:windowtext;display:none"}](#_Toc31358969)

[11.4.1 Common Data Modification Semantics[.
]{style="color:windowtext;display:none"}[60]{style="color:windowtext;display:none"}](#_Toc31358970)

[11.4.1.1 Use of ETags for Avoiding Update Conflicts[.
]{style="color:windowtext;display:none"}[60]{style="color:windowtext;display:none"}](#_Toc31358971)

[11.4.1.2 Handling of DateTimeOffset Values[.
]{style="color:windowtext;display:none"}[60]{style="color:windowtext;display:none"}](#_Toc31358972)

[11.4.1.3 Handling of Properties Not Advertised in Metadata[.
]{style="color:windowtext;display:none"}[61]{style="color:windowtext;display:none"}](#_Toc31358973)

[11.4.1.4 Handling of Integrity Constraints[.
]{style="color:windowtext;display:none"}[61]{style="color:windowtext;display:none"}](#_Toc31358974)

[11.4.1.5 Returning Results from Data Modification Requests[.
]{style="color:windowtext;display:none"}[61]{style="color:windowtext;display:none"}](#_Toc31358975)

[11.4.2 Create an Entity[.
]{style="color:windowtext;display:none"}[61]{style="color:windowtext;display:none"}](#_Toc31358976)

[11.4.2.1 Link to Related Entities When Creating an Entity[.
]{style="color:windowtext;display:none"}[62]{style="color:windowtext;display:none"}](#_Toc31358977)

[11.4.2.2 Create Related Entities When Creating an Entity[.
]{style="color:windowtext;display:none"}[63]{style="color:windowtext;display:none"}](#_Toc31358978)

[11.4.3 Update an Entity[.
]{style="color:windowtext;display:none"}[63]{style="color:windowtext;display:none"}](#_Toc31358979)

[11.4.3.1 Update Related Entities When Updating an Entity[.
]{style="color:windowtext;display:none"}[64]{style="color:windowtext;display:none"}](#_Toc31358980)

[11.4.4 Upsert an Entity[.
]{style="color:windowtext;display:none"}[66]{style="color:windowtext;display:none"}](#_Toc31358981)

[11.4.5 Delete an Entity[.
]{style="color:windowtext;display:none"}[66]{style="color:windowtext;display:none"}](#_Toc31358982)

[11.4.6 Modifying Relationships between Entities[.
]{style="color:windowtext;display:none"}[66]{style="color:windowtext;display:none"}](#_Toc31358983)

[11.4.6.1 Add a Reference to a Collection-Valued Navigation Property[.
]{style="color:windowtext;display:
none"}[67]{style="color:windowtext;display:none"}](#_Toc31358984)

[11.4.6.2 Remove a Reference to an Entity[.
]{style="color:windowtext;display:none"}[67]{style="color:windowtext;display:none"}](#_Toc31358985)

[11.4.6.3 Change the Reference in a Single-Valued Navigation Property[.
]{style="color:windowtext;display:none"}[67]{style="color:windowtext;display:none"}](#_Toc31358986)

[11.4.6.4 Replace all References in a Collection-valued Navigation
Property[. ]{style="color:windowtext;display:
none"}[67]{style="color:windowtext;display:none"}](#_Toc31358987)

[11.4.7 Managing Media Entities[.
]{style="color:windowtext;display:none"}[67]{style="color:windowtext;display:none"}](#_Toc31358988)

[11.4.7.1 Create a Media Entity[.
]{style="color:windowtext;display:none"}[67]{style="color:windowtext;display:none"}](#_Toc31358989)

[11.4.7.2 Update a Media Entity Stream[..
]{style="color:windowtext;display:none"}[68]{style="color:windowtext;display:none"}](#_Toc31358990)

[11.4.7.3 Delete a Media Entity[.
]{style="color:windowtext;display:none"}[68]{style="color:windowtext;display:none"}](#_Toc31358991)

[11.4.8 Managing Stream Properties[.
]{style="color:windowtext;display:none"}[68]{style="color:windowtext;display:none"}](#_Toc31358992)

[11.4.8.1 Update Stream Values[.
]{style="color:windowtext;display:none"}[68]{style="color:windowtext;display:none"}](#_Toc31358993)

[11.4.8.2 Delete Stream Values[.
]{style="color:windowtext;display:none"}[69]{style="color:windowtext;display:none"}](#_Toc31358994)

[11.4.9 Managing Values and Properties Directly[.
]{style="color:windowtext;display:none"}[69]{style="color:windowtext;display:none"}](#_Toc31358995)

[11.4.9.1 Update a Primitive Property[.
]{style="color:windowtext;display:none"}[69]{style="color:windowtext;display:none"}](#_Toc31358996)

[11.4.9.2 Set a Value to Null[
]{style="color:windowtext;display:none"}[69]{style="color:windowtext;display:none"}](#_Toc31358997)

[11.4.9.3 Update a Complex Property[.
]{style="color:windowtext;display:none"}[69]{style="color:windowtext;display:none"}](#_Toc31358998)

[11.4.9.4 Update a Collection Property[.
]{style="color:windowtext;display:none"}[70]{style="color:windowtext;display:none"}](#_Toc31358999)

[11.4.10 Managing Members of an Ordered Collection[.
]{style="color:windowtext;display:none"}[70]{style="color:windowtext;display:none"}](#_Toc31359000)

[11.4.11 Positional Inserts[.
]{style="color:windowtext;display:none"}[70]{style="color:windowtext;display:none"}](#_Toc31359001)

[11.4.12 Update a Collection of Entities[.
]{style="color:windowtext;display:none"}[70]{style="color:windowtext;display:none"}](#_Toc31359002)

[11.4.13 Update Members of a Collection[.
]{style="color:windowtext;display:none"}[71]{style="color:windowtext;display:none"}](#_Toc31359003)

[11.4.14 Delete Members of a Collection[.
]{style="color:windowtext;display:none"}[72]{style="color:windowtext;display:none"}](#_Toc31359004)

[11.5 Operations[. ]{style="color:
windowtext;display:none"}[73]{style="color:windowtext;display:none"}](#_Toc31359005)

[11.5.1 Binding an Operation to a Resource[.
]{style="color:windowtext;display:none"}[73]{style="color:windowtext;display:none"}](#_Toc31359006)

[11.5.2 Applying an Action to Members of a Collection[.
]{style="color:windowtext;display:none"}[73]{style="color:windowtext;display:none"}](#_Toc31359007)

[11.5.3 Advertising Available Operations within a Payload[.
]{style="color:windowtext;display:none"}[74]{style="color:windowtext;display:none"}](#_Toc31359008)

[11.5.4 Functions[.
]{style="color:windowtext;display:none"}[74]{style="color:windowtext;display:none"}](#_Toc31359009)

[11.5.4.1 Invoking a Function[.
]{style="color:windowtext;display:none"}[74]{style="color:windowtext;display:none"}](#_Toc31359010)

[11.5.4.1.1 Inline Parameter Syntax[.
]{style="color:windowtext;display:none"}[75]{style="color:windowtext;display:none"}](#_Toc31359011)

[11.5.4.2 Function overload resolution[.
]{style="color:windowtext;display:none"}[76]{style="color:windowtext;display:none"}](#_Toc31359012)

[11.5.5 Actions[. ]{style="color:windowtext;
display:none"}[76]{style="color:windowtext;display:none"}](#_Toc31359013)

[11.5.5.1 Invoking an Action[.
]{style="color:windowtext;display:none"}[76]{style="color:windowtext;display:none"}](#_Toc31359014)

[11.5.5.2 Action Overload Resolution[.
]{style="color:windowtext;display:none"}[77]{style="color:windowtext;display:none"}](#_Toc31359015)

[11.6 Asynchronous Requests[.
]{style="color:windowtext;display:none"}[78]{style="color:windowtext;display:none"}](#_Toc31359016)

[11.7 Batch Requests[.
]{style="color:windowtext;display:none"}[78]{style="color:windowtext;display:none"}](#_Toc31359017)

[11.7.1 Batch Request Headers[.
]{style="color:windowtext;display:none"}[79]{style="color:windowtext;display:none"}](#_Toc31359018)

[11.7.2 Request Dependencies[.
]{style="color:windowtext;display:none"}[79]{style="color:windowtext;display:none"}](#_Toc31359019)

[11.7.3 Identifying Individual Requests[.
]{style="color:windowtext;display:none"}[80]{style="color:windowtext;display:none"}](#_Toc31359020)

[11.7.4 Referencing Returned Entities[.
]{style="color:windowtext;display:none"}[80]{style="color:windowtext;display:none"}](#_Toc31359021)

[11.7.5 Referencing the ETag of an Entity[.
]{style="color:windowtext;display:none"}[80]{style="color:windowtext;display:none"}](#_Toc31359022)

[11.7.6 Referencing Values from Response Bodies[.
]{style="color:windowtext;display:none"}[80]{style="color:windowtext;display:none"}](#_Toc31359023)

[11.7.7 Multipart Batch Format[
]{style="color:windowtext;display:none"}[80]{style="color:windowtext;display:none"}](#_Toc31359024)

[11.7.7.1 Multipart Batch Request Body[.
]{style="color:windowtext;display:none"}[80]{style="color:windowtext;display:none"}](#_Toc31359025)

[11.7.7.2 Referencing New Entities[.
]{style="color:windowtext;display:none"}[82]{style="color:windowtext;display:none"}](#_Toc31359026)

[11.7.7.3 Referencing an ETag[.
]{style="color:windowtext;display:none"}[83]{style="color:windowtext;display:none"}](#_Toc31359027)

[11.7.7.4 Processing a Multipart Batch Request[
]{style="color:windowtext;display:none"}[84]{style="color:windowtext;display:none"}](#_Toc31359028)

[11.7.7.5 Multipart Batch Response[.
]{style="color:windowtext;display:none"}[84]{style="color:windowtext;display:none"}](#_Toc31359029)

[11.7.7.6 Asynchronous Batch Requests[.
]{style="color:windowtext;display:none"}[85]{style="color:windowtext;display:none"}](#_Toc31359030)

[12[      ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Security
Considerations[.
]{style="color:windowtext;display:none"}[88]{style="color:windowtext;display:none"}](#_Toc31359031)

[12.1 Authentication[.
]{style="color:windowtext;display:none"}[88]{style="color:windowtext;display:none"}](#_Toc31359032)

[13[      ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Conformance[.
]{style="color:windowtext;display:none"}[89]{style="color:windowtext;display:none"}](#_Toc31359033)

[13.1 OData 4.0 Service Conformance Levels[.
]{style="color:windowtext;display:none"}[89]{style="color:windowtext;display:none"}](#_Toc31359034)

[13.1.1 OData 4.0 Minimal Conformance Level[
]{style="color:windowtext;display:none"}[89]{style="color:windowtext;display:none"}](#_Toc31359035)

[13.1.2 OData 4.0 Intermediate Conformance Level[
]{style="color:windowtext;display:none"}[90]{style="color:windowtext;display:none"}](#_Toc31359036)

[13.1.3 OData 4.0 Advanced Conformance Level[
]{style="color:windowtext;display:none"}[91]{style="color:windowtext;display:none"}](#_Toc31359037)

[13.2 OData 4.01 Service Conformance Levels[.
]{style="color:windowtext;display:none"}[91]{style="color:windowtext;display:none"}](#_Toc31359038)

[13.2.1 OData 4.01 Minimal Conformance Level[
]{style="color:windowtext;display:none"}[91]{style="color:windowtext;display:none"}](#_Toc31359039)

[13.2.2 OData 4.01 Intermediate Conformance Level[
]{style="color:windowtext;display:none"}[93]{style="color:windowtext;display:none"}](#_Toc31359040)

[13.2.3 OData 4.01 Advanced Conformance Level[
]{style="color:windowtext;display:none"}[93]{style="color:windowtext;display:none"}](#_Toc31359041)

[13.3 Interoperable OData Clients[.
]{style="color:windowtext;display:none"}[93]{style="color:windowtext;display:none"}](#_Toc31359042)

[Appendix A.[        ]{style="font-size:
11.0pt;font-family:\"Calibri\",sans-serif;color:windowtext"}Acknowledgments[.
]{style="color:windowtext;display:none"}[95]{style="color:windowtext;display:none"}](#_Toc31359043)

[Appendix B.[        ]{style="font-size:
11.0pt;font-family:\"Calibri\",sans-serif;color:windowtext"}Revision
History[.
]{style="color:windowtext;display:none"}[96]{style="color:windowtext;display:none"}](#_Toc31359044)

 

 
:::

[\
]{style="font-size:10.0pt;font-family:\"Liberation Sans\",sans-serif"}

::: WordSection2
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Introduction}[1[     ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc477876541}[Introduction](#sec_Introduction)
:::

The Open Data Protocol (OData) enables the creation of REST-based data
services which allow resources, identified using Uniform Resource
Locators (URLs) and defined in a data model, to be published and edited
by Web clients using simple HTTP messages. This specification defines
the core semantics and the behavioral aspects of the protocol.

The [**\[OData‑URL\]**](#ODataURLRef) specification defines a set of
rules for constructing URLs to identify the data and metadata exposed by
an OData service as well as a set of reserved URL query options.

The [**\[OData-CSDLJSON\]**](#ODataCSDLJSONRef) specification defines a
JSON representation of the entity data model exposed by an OData
service.

The [**\[OData-CSDLXML\]**](#ODataCSDLXMLRef) specification defines an
XML representation of the entity data model exposed by an OData service.

The [**\[OData-JSON\]**](#ODataJSONRef) document specifies the JSON
format of the resource representations that are exchanged using OData.

## [1.0 IPR Policy]{#_Toc19865974}

This specification is provided under the [RF on RAND
Terms](https://www.oasis-open.org/policies-guidelines/ipr#RF-on-RAND-Mode)
Mode of the [OASIS IPR
Policy](https://www.oasis-open.org/policies-guidelines/ipr), the mode
chosen when the Technical Committee was established. For information on
whether any patents have been disclosed that may be essential to
implementing this specification, and any offers of patent licensing
terms, please refer to the Intellectual Property Rights section of the
TC's web page (<https://www.oasis-open.org/committees/odata/ipr.php>).

## []{#sec_Terminology}[1.1]{#_Toc477876542} [Terminology](#sec_Terminology)

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
"SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
document are to be interpreted as described in
[**\[RFC2119\]**](#RFC2119).

## []{#sec_NormativeReferences}[1.2]{#_Toc477876543} [Normative References](#sec_NormativeReferences)

[\[[OData-ABNF]{#ABNF}\]]{.Refterm}                 *OData ABNF
Construction Rules Version 4.01*.\
See link in \"Additional artifacts\" section on cover page.

**\[[OData-Aggregation]{#ODataAggregationRef}**[**\]**]{.Hyperlink1}     
*OData Extension for Data Aggregation Version 4.0*.\
See link in \"Related work\" section on cover page.

[\[[]{#ODataCSDLJSONRef}[OData-CSDL]{#ODataCSDLRef}JSON\]]{.Refterm}       
*OData Common Schema Definition Language (CSDL) JSON Representation
Version 4.01*. See link in \"Related work\" section on cover page.

[**\[**]{#ODataCSDLXMLRef}[OData-CSDLXML\]]{.Refterm}          *OData
Common Schema Definition Language (CSDL) XML Representation Version
4.01.* See link in \"Related work\" section on cover page

**\[[OData-JSON]{#ODataJSONRef}**[**\]**]{.Hyperlink1}                
*OData JSON Format Version 4.01.*\
See link in \"Related work\" section on cover page.

**\[[OData-URL]{#ODataURLRef}\]**                   *OData Version 4.01
Part 2: URL Conventions*.\
See link in \"Additional artifacts\" section on cover page.

**\[[OData-VocCap]{#VocCapabilities}\]**              *OData
Vocabularies Version 4.0: Capabilities Vocabulary.*\
See link in \"Related work\" section on cover page.

**\[[OData-VocCore]{#VocCore}\]**            *OData Vocabularies Version
4.0: Core Vocabulary.*\
See link in \"Related work\" section on cover page.

**\[[RFC2046]{#RFC2046}\]                     ** Freed, N. and N.
Borenstein, \"Multipurpose Internet Mail Extensions (MIME) Part Two:
Media Types\", RFC 2046, November 1996.
<https://tools.ietf.org/html/rfc2046>[.]{.MsoHyperlink}

[\[[RFC2119]{#RFC2119}\]]{.Refterm}                      Bradner, S.,
"Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC
2119, March 1997. <https://tools.ietf.org/html/rfc2119>.

[\[[RFC3987]{#RFC3987}\]]{.Refterm}                      Duerst, M. and,
M. Suignard, "Internationalized Resource Identifiers (IRIs)", RFC 3987,
January 2005. <https://tools.ietf.org/html/rfc3987>.

[\[[RFC5646]{#rfc5646}\]]{.Refterm}                      Phillips, A.,
Ed., and M. Davis, Ed., "Tags for Identifying Languages", BCP 47, RFC
5646, September 2009. <http://tools.ietf.org/html/rfc5646>.

**\[[RFC5789]{#RFC5789}\]**                      Dusseault, L., [and J.
Snell]{style="color:black;background:white"}, "Patch Method for HTTP",
RFC 5789, March 2010. <http://tools.ietf.org/html/rfc5789>.

**\[[RFC7230]{#HTTPMessage}\]**                      Fielding, R., Ed.
and J. Reschke, Ed., "Hypertext Transfer Protocol (HTTP/1.1): Message
Syntax and Routing",[ ]{style="font-size:10.5pt;color:#333333"}[RFC
7230, June 2014.]{style="color:#333333"}
<https://tools.ietf.org/html/rfc7230>.

**\[[RFC7231]{#HTTPSemantic}\]**                      Fielding, R., Ed.
and J. Reschke, Ed., "Hypertext Transfer Protocol (HTTP/1.1): Semantics
and Content"[,]{style="font-size:10.5pt;color:#333333"}[ RFC 7231, June
2014.]{style="color:#333333"} <https://tools.ietf.org/html/rfc7231>.

**\[[RFC7232]{#HTTPConditional}\]                     ** Fielding, R.,
Ed. and J. Reschke, Ed., "Hypertext Transfer Protocol (HTTP/1.1):
Conditional Requests"[, ]{style="font-size:10.5pt;color:#333333"}[RFC
7232, June 2014.]{style="color:#333333"}
<https://tools.ietf.org/html/rfc7232>[.]{style="color:#333333"}

[**\[**]{#_Toc370125980}[**RFC7240**]{#HTTPPREFER}**\]**                     
Snell, J., \"Prefer Header for HTTP\",[
]{style="font-size:10.5pt;color:#333333"}[RFC 7240, June
2014.https://tools.ietf.org/html/rfc7240]{style="color:#333333"}.

[\[[RFC7617]{#RFC7617}\]]{.Refterm}[                     
]{style="font-size:10.5pt;color:#333333;
background:white"}[Reschke, J., \"The \'Basic\' HTTP Authentication
Scheme\", RFC 7617, September 2015. ]{style="color:#333333;
background:white"}[[https://tools.ietf.org/html/]{style="background:white"}rfc7617](https://tools.ietf.org/html/rfc7617)[.
 ]{.MsoHyperlink}

## []{#sec_TypographicalConventions}[1.3]{#_Toc477876544} [Typographical Conventions](#sec_TypographicalConventions)

Keywords defined by this specification use this `monospaced` font.

Normative source code uses this paragraph style.

Some sections of this specification are illustrated with non-normative
examples.

Example 1: text describing an example uses this paragraph style

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Non-normative examples use this paragraph style.]{style="color:black"}
:::

All examples in this document are non-normative and informative only.

All other text is normative unless otherwise labeled.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Overview}[2[     ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc477876545}[Overview](#sec_Overview)
:::

The OData Protocol is an application-level protocol for interacting with
data via RESTful interfaces. The protocol supports the description of
data models and the editing and querying of data according to those
models. It provides facilities for:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Metadata:
a machine-readable description of the data model exposed by a particular
service.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Data:
sets of data entities and the relationships between them.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Querying:
requesting that the service perform a set of filtering and other
transformations to its data, then return the results.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Editing:
creating, updating, and deleting data.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Operations:
invoking custom logic

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Vocabularies:
attaching custom semantics

The OData Protocol is different from other REST-based web service
approaches in that it provides a uniform way to describe both the data
and the data model. This improves semantic interoperability between
systems and allows an ecosystem to emerge.

Towards that end, the OData Protocol follows these design principles:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Prefer
mechanisms that work on a variety of data sources. In particular, do not
assume a relational data model.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Extensibility
is important. Services should be able to support extended functionality
without breaking clients unaware of those extensions.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Follow
REST principles.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}OData
should build incrementally. A very basic, compliant service should be
easy to build, with additional work necessary only to support additional
capabilities.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Keep
it simple. Address the common cases and provide extensibility where
necessary.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_DataModel}[]{#_Data_Model}3[     ]{style="font:7.0pt \"Times New Roman\""}[Data Model](#sec_DataModel)
:::

This section provides a high-level description of the *Entity Data Model
(EDM)*: the abstract data model that is used to describe the data
exposed by an OData service. An [OData Metadata
Document](#sec_MetadataDocumentRequest) is a representation of a
service\'s data model exposed for client consumption.

The central concepts in the EDM are entities, relationships, entity
sets, actions, and functions.

*Entities* are instances of entity types (e.g. `Customer`, `Employee`,
etc.).

*Entity types* are named structured types with a key. They define the
named properties and relationships of an entity. Entity types may derive
by single inheritance from other entity types.

The *key* of an entity type is formed from a subset of the primitive
properties (e.g. `CustomerId`, `OrderId`, `LineId`, etc.) of the entity
type.

*Complex types* are keyless named structured types consisting of a set
of properties. These are value types whose instances cannot be
referenced outside of their containing entity. Complex types are
commonly used as property values in an entity or as parameters to
operations.

Properties declared as part of a structured type\'s definition are
called *declared properties*. Instances of structured types may contain
additional undeclared *dynamic properties*. A dynamic property cannot
have the same name as a declared property. Entity or complex types which
allow clients to persist additional undeclared properties are called
*open types*.

Relationships from one entity to another are represented as *navigation
properties.* Navigation properties are generally defined as part of an
entity type, but can also appear on entity instances as undeclared
*dynamic navigation properties*. Each relationship has a cardinality.

*Enumeration types* are named primitive types whose values are named
constants with underlying integer values.

*Type definitions* are named primitive types with fixed facet values
such as maximum length or precision. Type definitions can be used in
place of primitive typed properties, for example, within property
definitions.

*Entity sets* are named collections of entities (e.g. `Customers` is an
entity set containing `Customer` entities). An entity\'s key uniquely
identifies the entity within an entity set. If multiple entity sets use
the same entity type, the same combination of key values can appear in
more than one entity set and identifies different entities, one per
entity set where this key combination appears. Each of these entities
has a different [entity-id](#sec_EntityIdsandEntityReferences). Entity
sets provide entry points into the data model.

*Operations* allow the execution of custom logic on parts of a data
model. [*Functions*](#sec_Functions)[ ]{.MsoHyperlink}are operations
that do not have side effects and may support further composition, for
example, with additional filter operations, functions or an action.
[*Actions*](#sec_Actions)[ ]{.MsoHyperlink}are operations that allow
side effects, such as data modification, and cannot be further composed
in order to avoid non-deterministic behavior. Actions and functions are
either *bound* to a type, enabling them to be called as members of an
instance of that type, or unbound, in which case they are called as
static operations. *Action imports* and *function imports* enable
unbound actions and functions to be called from the service root.

*Singletons* are named entities which can be accessed as direct children
of the entity container. A singleton may also be a member of an entity
set.

An OData *resource* is anything in the model that can be addressed (an
entity set, entity, property, or operation).

Refer to [**\[OData-CSDLJSON\]**](#ODataCSDLJSONRef) or[
]{style="color:black;background:white"}[**\[OData-CSDLXML\]**](#ODataCSDLXMLRef)
for more information on the OData entity data model.

## []{#sec_Annotations}[]{#_Annotations}3.1 [Annotations](#sec_Annotations)

Model and instance elements can be decorated with *Annotations*.

Annotations can be used to specify an individual fact about an element,
such as whether it is read-only, or to define a common concept, such as
a person or a movie.

Applied *annotations* consist of a *term* (the namespace-qualified name
of the annotation being applied), a *target* (the model or instance
element to which the term is applied), and a *value*. The value may be a
static value, or an expression that may contain a path to one or more
properties of an annotated entity.

Annotation terms are defined in metadata and have a name and a type.

A set of related terms in a common namespace comprises a *Vocabulary*.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_ServiceModel}[4[     ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc477876548}[Service Model](#sec_ServiceModel)
:::

OData services are defined using a common data model. The service
advertises its concrete data model in a machine-readable form, allowing
generic clients to interact with the service in a well-defined way.

An OData service exposes two well-defined resources that describe its
data model; a service document and a metadata document.

The [*service document*](#sec_ServiceDocumentRequest)[
]{.MsoHyperlink}lists entity sets, functions, and singletons that can be
retrieved. Clients can use the service document to navigate the model in
a hypermedia-driven fashion.

The [*metadata document*](#sec_MetadataDocumentRequest) describes the
types, sets, functions and actions understood by the OData service.
Clients can use the metadata document to understand how to query and
interact with entities in the service.

In addition to these two "fixed" resources, an OData service consists of
dynamic resources. The URLs for many of these resources can be computed
from the information in the metadata document.

See [Requesting Data](#sec_RequestingData) and [Data
Modification](#sec_DataModification) for details.

## []{#sec_EntityIdsandEntityReferences}[]{#_Entity_Ids_and}[]{#_Entity-Ids_and_Entity}4.1 [Entity-Ids and Entity References](#sec_EntityIdsandEntityReferences)

Whereas entities within an entity set are uniquely identified by their
key values, entities are also uniquely identified by a durable, opaque,
globally unique *entity-id*. The entity-id MUST be an IRI as defined in
[**\[RFC3987\]**](#RFC3987) and MAY be expressed in payloads, headers,
and URLs as a relative reference as appropriate. [While the client MUST
be prepared to accept any IRI, services MUST use valid URIs in this
version of the specification since there is currently no lossless
representation of an IRI in the
]{style="color:black"}[`EntityId`](#sec_HeaderODataEntityId)[ header.
]{style="color:black"}

Services are strongly encouraged to use the canonical URL for an entity
as defined in **OData-URL** as its entity-id, but clients cannot assume
the entity-id can be used to locate the entity unless the
[`Core.DereferenceableIDs`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#DereferenceableIDs)
term is applied to the entity container, nor can the client assume any
semantics from the structure of the entity-id. The canonical resource
`$entity` provides a general mechanism for [resolving an
entity-id](#sec_ResolvinganEntityId) into an entity representation.

Services that use the standard URL conventions for entity-ids annotate
their entity container with the term
[`Core.ConventionalIDs`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ConventionalIDs),
see [**\[OData-VocCore\]**](#VocCore).

*Entity references* refer to an entity using the entity\'s entity-id.

## []{#sec_ReadURLsandEditURLs}[]{#_Versioning}4.2 [Read URLs and Edit URLs](#sec_ReadURLsandEditURLs)

The read URL of an entity is the URL that can be used to read the
entity.

The edit URL of an entity is the URL that can be used to update or
delete the entity.

The edit URL of a property is the edit URL of the entity with appended
segment(s) containing the path to the property.

Services are strongly encouraged to use the canonical URL for an entity
as defined in **OData-URL** for both the read URL and the edit URL of an
entity, with a cast segment to the type of the entity appended to the
canonical URL if the type of the entity is derived from the declared
type of the entity set. However, clients cannot assume this convention
and must use the links specified in the payload according to the
appropriate format as the two URLs may be different from one another, or
one or both of them may differ from convention.

## []{#sec_TransientEntities}[]{#_Versioning_1}4.3 [Transient Entities](#sec_TransientEntities)

Transient entities are instances of an entity type that are "calculated
on the fly" and only exist within a single payload. They cannot be
reread or updated and consequently possess neither a stable entity-id
nor a read URL or an update URL.

## []{#sec_DefaultNamespaces}[]{#_Default_Namespaces}4.4 [Default Namespaces](#sec_DefaultNamespaces)

References to actions, functions, and types within a URL typically
requires prefixing the name of the action, function, or type with the
namespace or alias in which it is defined. This namespace qualification
enables differentiating between similarly named elements across schema,
or between properties and bound functions, actions, or types with the
same name.

Services MAY define one or more default namespaces through the
[`Core.DefaultNamespace`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#DefaultNamespace)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}term defined in
[**\[OData-VocCore\]**](#VocCore)[. ]{.MsoHyperlink}Functions, actions
and types in a default namespace can be referenced in URLs with or
without namespace or alias qualification.[ ]{.MsoHyperlink}

Service designers should ensure uniqueness of schema children across all
default namespaces, and should avoid naming bound functions, actions, or
derived types with the same name as a structural or navigation property
of the type.

In the case where ambiguity does exist, an unqualified segment appended
to a structured value is always first compared to the list of properties
defined on the structured type. If no defined property with a name
matching the unqualified segment exists, or the preceding segment
represents a collection or a scalar value, it is next compared to the
names of any bound functions or actions, or derived type names, defined
within any default namespace. If it still does not match, and the
preceding segment represents a structured value, it is interpreted as a
dynamic property.

Services MAY disallow dynamic properties on structured values whose
names conflict with a bound action, function, or derived type defined
within in a default namespace.

The behavior if name conflicts occur across children of default
namespaces is undefined. Generic clients are encouraged to always
qualify action, function, and type names in order to avoid any possible
ambiguity.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Versioning}[]{#_Versioning_2}5[     ]{style="font:7.0pt \"Times New Roman\""}[Versioning](#sec_Versioning)
:::

Versioning enables clients and services to evolve independently. OData
defines semantics for both protocol and data model versioning.

## []{#sec_ProtocolVersioning}[5.1]{#_Toc477876554} [Protocol Versioning](#sec_ProtocolVersioning)

OData requests and responses are versioned according to the
[`OData-Version`](#sec_HeaderODataVersion) header.

OData clients include the
[`OData-MaxVersion`](#sec_HeaderODataMaxVersion)` `header in requests in
order to specify the maximum acceptable response version. Services
respond with the maximum supported version that is less than or equal to
the requested `OData-MaxVersion`, using decimal comparison. [The syntax
of the ]{style="color:black"}`OData-Version` and `OData-MaxVersion`
header fields is defined in [**\[OData-ABNF\]**](#ABNF).

Services SHOULD advertise supported versions of OData through the
[`Core.ODataVersions`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ODataVersions)
term, defined in [**\[OData-VocCore\]**](#VocCore).

This version of the specification defines OData version values `4.0` and
`4.01`. Content that applies only to one version or another is
explicitly called out in the text.

## []{#sec_ModelVersioning}[]{#_Model_Versioning}5.2 [Model Versioning](#sec_ModelVersioning)

The [Data Model](#sec_DataModel) exposed by an OData Service defines a
contract between the OData service and its clients. Services are allowed
to extend their model only to the degree that it does not break existing
clients. Breaking changes, such as removing properties, changing the
type of existing properties, adding or removing key properties, or
reordering action or function parameters, require that a new service
version is provided at a different service root URL for the new model,
or that the service version its metadata using the
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation, defined in [**\[OData-VocCore\]**](#VocCore).

Services that version their metadata MUST support version-specific
requests according to the
[`$schemaversion`](#sec_SystemQueryOptionschemaversion) system query
option. The following Data Model additions are considered safe and do
not require services to version their entry point or schema.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
a property that is nullable or has a default value; if it has the same
name as an existing dynamic property, it must have the same type (or
base type) as the existing dynamic property

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
a navigation property that is nullable or collection-valued; if it has
the same name as an existing dynamic navigation property, it must have
the same type (or base type) as the existing dynamic navigation property

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
a new entity type to the model

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
a new complex type to the model

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
a new entity set

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
a new singleton

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
an action, a function, an action import, or function import

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
an action parameter that is nullable after existing parameters

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
an action or function parameter that is annotated with
[`Core.OptionalParameter`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#OptionalParameter)
after existing parameters

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
a type definition or enumeration

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
a new term

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Adding
any annotation to a model element that does not need to be understood by
the client in order to correctly interact with the service

Clients SHOULD be prepared for services to make such incremental changes
to their model. In particular, clients SHOULD be prepared to receive
properties and derived types not previously defined by the service.

[Services SHOULD NOT change their data model depending on the
authenticated user. If the data model is user or user-group dependent,
all changes MUST be *safe changes* as defined in this section when
comparing the full model to the model visible to users with restricted
authorizations.]{style="color:black"}

 

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Extensibility}[]{#_Extensibility}6[     ]{style="font:7.0pt \"Times New Roman\""}[Extensibility](#sec_Extensibility)
:::

The OData protocol supports both user- and version-driven extensibility
through a combination of versioning, convention, and explicit extension
points.

## []{#sec_QueryOptionExtensibility}[6.1]{#_Toc477876557} [Query Option Extensibility](#sec_QueryOptionExtensibility)

Query options within the request URL can control how a particular
request is processed by the service.

OData-defined system query options are optionally prefixed with \"`$`\".
Services may support additional custom query options not defined in the
OData specification, but they MUST NOT begin with the \"`$`\" or \"`@`\"
character and MUST NOT conflict with any OData-defined system query
options defined in the OData version supported by the service.

OData services SHOULD NOT require any query options to be specified in a
request. Services SHOULD fail any request that contains query options
that they do not understand and MUST fail any request that contains
unsupported OData query options defined in the version of this
specification supported by the service.

In many cases OData services return URLs to identify resources that are
later requested by clients. Where possible, interoperability is enhanced
by providing all identifying information in the path portion of the URL.
However, clients should be prepared for such URLs to include custom
query options and propagate any such custom query options in future
requests to the identified resource.

## []{#sec_PayloadExtensibility}[]{#_Payload_Extensibility}6.2 [Payload Extensibility](#sec_PayloadExtensibility)

OData supports extensibility in the payload, according to the specific
format.

Regardless of the format, additional content MUST NOT be present if it
needs to be understood by the receiver in order to correctly interpret
the payload according to the specified
[OData-Version](#sec_HeaderODataVersion)[ ]{.MsoHyperlink}header. Thus,
clients and services MUST be prepared to handle or safely ignore any
content not specifically defined in the version of the payload specified
by the `OData-Version`[` `]{.Hyperlink1}header.

## []{#sec_ActionFunctionExtensibility}[6.3]{#_Toc477876559} [Action/Function Extensibility](#sec_ActionFunctionExtensibility)

[Actions](#sec_Actions)[ ]{.MsoHyperlink}and
[Functions](#sec_Functions)[ ]{.MsoHyperlink}extend the set of
operations that can be performed on or with a service or resource.
[Actions]{.Hyperlink1} can have side-effects. For example,
[Actions]{.Hyperlink1} can be used to modify data or to invoke custom
operations. Functions MUST NOT have side-effects. Functions can be
invoked from a URL that addresses a resource or within an expression to
a [`$filter`](#sec_SystemQueryOptionfilter) or
[`$orderby`](#sec_SystemQueryOptionorderby) system query option.

Fully qualified action and function names include a namespace or alias
prefix. The `Edm`, `odata` and `geo` namespaces are reserved for the use
of this specification.

An OData service MUST fail any request that contains actions or
functions that it does not understand.

## []{#sec_VocabularyExtensibility}[6.4]{#_Toc477876560} [Vocabulary Extensibility](#sec_VocabularyExtensibility)

The set of [annotations](#sec_Annotations) defined within a schema
comprise a *vocabulary*. Shared vocabularies provide a powerful
extensibility point for OData.

Metadata annotations can be used to define additional characteristics or
capabilities of a metadata element, such as a service, entity type,
property, function, action or parameter. For example, a metadata
annotation could define ranges of valid values for a particular
property.

Instance annotations can be used to define additional information
associated with a particular result, entity, property, or error; for
example whether a property is read-only for a particular instance.

Where annotations apply across all instances of a type, services are
encouraged to specify the annotation in metadata rather than repeating
in each instance of the payload. Where the same annotation is defined at
both the metadata and instance level, the instance-level annotation
overrides the one specified at the metadata level.

A service MUST NOT require the client to understand custom annotations
in order to accurately interpret a response.

OData defines a `Core` vocabulary with a set of basic terms describing
behavioral aspects along with terms that can be used in defining other
vocabularies; see [**\[OData-VocCore\]**](#VocCore).

## []{#sec_HeaderFieldExtensibility}[]{#_Header_Field_Extensibility}6.5 [Header Field Extensibility](#sec_HeaderFieldExtensibility)

OData defines semantics around certain HTTP request and response
headers. Services that support a version of OData conform to the
processing requirements for the headers defined by this specification
for that version.

Individual services may define custom headers. These headers MUST NOT
begin with `OData`. Custom headers SHOULD be optional when making
requests to the service. A service MUST NOT require the client to
understand custom headers to accurately interpret the response.

## []{#sec_FormatExtensibility}[6.6]{#_Toc477876562} [Format Extensibility](#sec_FormatExtensibility)

An OData service MUST support [**\[OData-JSON\]**](#ODataJSONRef) and
MAY support additional formats for both request and response bodies.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Formats}[]{#_Formats}7[     ]{style="font:7.0pt \"Times New Roman\""}[Formats](#sec_Formats)
:::

The client MAY request a particular response format through the
[`Accept`](#sec_HeaderAccept) header, as defined in
[**\[RFC7231\]**](#HTTPSemantic), or through the system query option
[\$format](#sec_SystemQueryOptionformat)[.]{.MsoHyperlink}

In the case that both the `Accept` header and the `$format`[[ system
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}query option are
specified on a request, the value specified in the `$format` query
option MUST be used.

If the service does not support the requested format, it replies with a
[`406 Not Acceptable`](#sec_ResponseCode406NotAcceptable) error
response.

Services SHOULD advertise their supported formats in the metadata
document by annotating their entity container with the term
[`Capabilities`.`SupportedFormats`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#SupportedFormats),
as defined in [**\[OData-VocCap\]**](#VocCapabilities), listing all
available formats and combinations of supported format parameters.

The media types for the JSON and XML representation of the metadata
document are described in section "[Metadata Document
Request](#sec_MetadataDocumentRequest)".

The format specification [**\[OData-JSON\]**](#ODataJSONRef) describes
the media type and the format parameters for non-metadata requests and
responses.

[For non-metadata requests, if]{style="color:#333333;background:white"}
[neither the ]{style="color:#333333;background:white"}`Accept`[ header
nor the ]{style="color:#333333;
background:white"}`$format`[ query option are specified, the service MAY
respond to requests in any format.
]{style="color:#333333;background:white"}

Client libraries MUST retain the order of objects within an array in
JSON responses, and elements in document order for XML responses,
including CSDL documents.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_HeaderFields}[8[     ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc477876564}[Header Fields](#sec_HeaderFields)
:::

OData defines semantics around the following request and response
headers. Additional headers may be specified, but have no unique
semantics defined in OData.

## []{#sec_CommonHeaders}[]{#_Common_Headers}8.1 [Common Headers](#sec_CommonHeaders)

The following headers are common between OData requests and responses.

### []{#sec_HeaderContentType}[]{#_The_DataServiceVersion_Header}[]{#_The_Content-Type_Header}[]{#_Header_Content-Type}8.1.1 [Header `Content-Type`](#sec_HeaderContentType)

The format of a non-empty individual request or response body, alone or
within a batch, MUST be specified in the `Content-Type` header of a
request or response. The exception to this is if the body represents the
media stream of a [media
entity](#sec_RequestingtheMediaStreamofaMediaEnti) or [stream
property](#sec_ManagingStreamProperties), in which case the
`Content-Type` header SHOULD be present.

The specified format MAY include format parameters. Clients MUST be
prepared for the service to return custom format parameters not defined
in OData and SHOULD NOT expect that such format parameters can be
ignored. Custom format parameters MUST NOT start with \"odata\" and
services MUST NOT require generic OData consumers to understand custom
format parameters in order to correctly interpret the payload.

See [**\[OData-JSON\]**](#ODataJSONRef) for format-specific details
about format parameters within the `Content-Type` header.

### []{#sec_HeaderContentEncoding}[8.1.2]{#_Toc477876567} [Header `Content-Encoding`](#sec_HeaderContentEncoding)

As defined in [**\[RFC7231\]**](#HTTPSemantic), the `Content-Encoding`
header field is used as a modifier to the media-type (as indicated in
the `Content-Type`). When present, its value indicates what additional
content codings have been applied to the entity-body.\
A service MAY specify a list of acceptable content codings using an
annotation with term
[`Capabilities``.AcceptableEncodings`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#AcceptableEncodings),
see [**\[OData-VocCap\]**](#VocCapabilities).

If the `Content-Encoding` header is specified on an individual request
or response within a batch, then it specifies the encoding for that
individual request or response. Individual requests or responses that
don't include the `Content-Encoding` header inherit the encoding of the
overall batch request or response.

### []{#sec_HeaderContentLanguage}[]{#_Header_Content-Language}8.1.3 [Header `Content-Language`](#sec_HeaderContentLanguage)

As defined in
[**\[RFC7231\]**](#HTTPSemantic)[**[,]{style="color:windowtext"}**]{.MsoHyperlink}
a request or response can include a `Content-Language` header to
indicate the natural language of the intended audience for the enclosed
[message body]{style="color:black"}. OData does not add any additional
[requirements over HTTP]{style="color:black"} [for including
]{style="color:black"}`Content-Language`[. OData services can annotate
model elements whose content depends on the content language with the
term
]{style="color:black"}[`Core.IsLanguageDependent`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#IsLanguageDependent)[,
see
]{style="color:black"}[**\[OData-VocCore\]**](#VocCore)[.]{style="color:black"}

If the `Content-Language` header is specified on an individual request
or response within a batch, then it specifies the language for that
individual request or response. Individual requests or responses that
don't include the `Content-Language` header inherit the language of the
overall batch request or response.

### []{#sec_HeaderContentLength}[8.1.4]{#_Toc477876569} [Header `Content-Length`](#sec_HeaderContentLength)

As defined in
[**\[RFC7230\]**](#HTTPMessage)[**[,]{style="color:windowtext"}**]{.MsoHyperlink}
a request or response SHOULD include a `Content-Length` header [when the
message\'s length can be determined prior to being
transferred]{style="color:black"}. OData does not add any additional
[requirements over HTTP for writing
]{style="color:black"}`Content-Length`[.]{style="color:black"}

If the `Content-Length` header is specified on an individual request or
response within a batch, then it specifies the length for that
individual request or response.

### []{#sec_HeaderODataVersion}[]{#_The_OData-Version_Header}[]{#_Header_OData-Version}8.1.5 [Header `OData-Version`](#sec_HeaderODataVersion)

OData clients SHOULD use the `OData-Version` header on a request to
specify the version of the protocol used to generate the request
payload.

If present on a request, the service MUST interpret the request payload
according to the rules defined in the specified version of the protocol
or fail the request with a `4xx` response code.

If not specified in a request, the service MUST assume the request
payload is generated using the minimum of the
[`OData-MaxVersion`](#sec_HeaderODataMaxVersion), if specified, and the
maximum version of the protocol that the service understands.

OData services MUST include the `OData-Version` header on a response to
specify the version of the protocol used to generate the response
payload. The client MUST interpret the response payload according to the
rules defined in the specified version of the protocol. Request and
response payloads are independent and may have different `OData-Version`
headers according to the above rules.

For more details, see [Versioning](#sec_Versioning).

[If the]{#_Toc477876571} `OData-Version` header is specified on an
individual request or response within a batch, then it specifies the
OData version for that individual request or response. Individual
requests or responses that don't include the `OData-Version` header
inherit the OData version of the overall batch request or response. This
OData version does not typically vary within a batch.

## [8.2]{#sec_RequestHeaders} [Request Headers](#sec_RequestHeaders)

In addition to the [Common Headers](#sec_CommonHeaders), the client may
specify any combination of the following request headers.

### []{#sec_HeaderAccept}[]{#_The_MaxDataServiceVersion_Request}[]{#_The_MinDataServiceVersion_Request}[]{#_The_Accept_Request}[]{#_Header_Accept}8.2.1 [Header `Accept`](#sec_HeaderAccept)

As defined in [**\[RFC7231\]**](#HTTPSemantic), the client MAY specify
the set of accepted [formats](#sec_Formats) with the `Accept` Header.

Services MUST reject formats that specify unknown or unsupported format
parameters.

If a media type specified in the `Accept` header includes a `charset`
format parameter and the request also contains an
[`Accept-Charset`](#sec_HeaderAcceptCharset) header, then the
`Accept-Charset` header MUST be used.

If the media type specified in the `Accept` header does not include a
`charset` format parameter, then the
[`Content-Type`](#sec_HeaderContentType) header of the response MUST NOT
contain a `charset` format parameter.

The service SHOULD NOT add any format parameters to the `Content-Type`
parameter not specified in the `Accept` header.

If the `Accept` header is specified on an individual request within a
batch, then it specifies the acceptable formats for that individual
request. Requests within a batch that don't include the `Accept` header
inherit the acceptable formats of the overall batch request.

### []{#sec_HeaderAcceptCharset}[]{#_The_If-Match_Request}[]{#_The_Accept-Charset_Request}8.2.2 [Header `Accept-Charset`](#sec_HeaderAcceptCharset)

As defined in [**\[RFC7231\]**](#HTTPSemantic), the client MAY specify
the set of accepted character sets with the `Accept-Charset` header.

If the `Accept-Charset` header is specified on an individual request
within a batch, then it specifies the acceptable character sets for that
individual request. Requests within a batch that don't include the
`Accept-Charset` header inherit the acceptable character sets of the
overall batch request.

### []{#sec_HeaderAcceptLanguage}[]{#_Header_If-Match}8.2.3 [Header `Accept-Language`](#sec_HeaderAcceptLanguage)

As defined in [**\[RFC7231\]**](#HTTPSemantic), the client MAY specify
the set of accepted natural languages with the `Accept-Language` header.

If the `Accept-Language` header is specified on an individual request
within a batch, then it specifies the acceptable languages for that
individual request. Requests within a batch that don't include the
`Accept-Language` header inherit the acceptable languages of the overall
batch request.

### []{#sec_HeaderIfMatch}[]{#_Header_If-Match_1}8.2.4 [Header `If-Match`](#sec_HeaderIfMatch)

As defined in [**\[RFC7232\]**](#HTTPConditional)[,]{.MsoHyperlink} a
client MAY include an `If-Match` header in a request to `GET`, `POST`,
`PUT`, `PATCH` or `DELETE`. The value of the `If-Match` request header
MUST be an ETag value previously retrieved for the resource, or `*` to
match any value.

If an operation on an existing resource requires an ETag, (see term
[`Core.OptimisticConcurrency`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#OptimisticConcurrency)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}in
[**\[OData-VocCore\]**](#VocCore)[ and property
]{style="color:black"}`OptimisticConcurrencyControl`[ of type
]{style="color:black"}[`Capabilities.NavigationPropertyRestriction`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#NavigationPropertyRestriction)[
in ]{style="color:black"}** **[**\[OData-VocCap\]**](#VocCapabilities)[)
and the client does not specify an ]{style="color:black"}`If-Match`[
request header in a ]{style="color:black"}[Data Modification
Request](#sec_DataModification)[ or ]{style="color:black"}in an [Action
Request](#sec_Actions)[ invoking an action bound to the resource, the
service responds with a
]{style="color:black"}`428 Precondition Required`[ and MUST ensure that
no observable change occurs as a result of the
request.]{style="color:black"}

If present, the request MUST only be processed if the specified ETag
value matches the current ETag value of the target resource. Services
sending [`ETag` headers](#sec_HeaderETag) with weak ETags that only
depend on the representation-independent entity state MUST use the weak
comparison function because it is sufficient to prevent accidental
overwrites. This is a deviation from
[**\[RFC7232\]**](#HTTPConditional).

If the value does not match the current ETag value of the resource for a
[Data Modification Request[
]{style="color:windowtext"}](#sec_DataModification)or [Action
Request](#sec_Actions), the service MUST respond with
[`412 Precondition Failed`](#sec_ResponseCode412PreconditionFailed) and
MUST ensure that no observable change occurs as a result of the
request.[ In the case of an
]{style="color:black"}[upsert](#sec_UpsertanEntity)[, if the addressed
entity does not exist the provided ETag value is considered not to
match.]{style="color:black"}

An `If-Match` header with a value of `*` in a `PUT` or `PATCH` request
results in an [upsert request](#sec_UpsertanEntity) being processed as
an update and not an insert.

The `If-Match` header MUST NOT be specified on a batch request, but MAY
be specified on individual requests within the batch.

### []{#sec_HeaderIfNoneMatch}[]{#_The_If-None-Match_Request}[]{#_Header_If-None-Match}8.2.5 [Header `If-None-Match`](#sec_HeaderIfNoneMatch)

As defined in [**\[RFC7232\]**](#HTTPConditional), a client MAY include
an `If-None-Match` header in a request to `GET`, `POST`, `PUT`, `PATCH`
or `DELETE`. The value of the `If-None-Match `request header MUST be an
ETag value previously retrieved for the resource, or `*`.

If present, the request MUST only be processed if the specified ETag
value does not match the current ETag value of the resource, using the
weak comparison function (see[
]{.MsoHyperlink}[**\[RFC7232\]**](#HTTPConditional)). If the value
matches the current ETag value of the resource, then for a `GET`
request, the service SHOULD respond with
[`304 Not Modified`](#sec_ResponseCode304NotModified), and for a [Data
Modification Request[
]{style="color:windowtext"}](#sec_DataModification)or [Action
Request](#sec_Actions)[,]{.MsoHyperlink} the service MUST respond with
[`412 Precondition Failed`](#sec_ResponseCode412PreconditionFailed) and
MUST ensure that no observable change occurs as a result of the request.

An `If-None-Match` header with a value of `*` in a `PUT` or `PATCH`
request results in an [upsert request](#sec_UpsertanEntity) being
processed as an [insert](#sec_CreateanEntity) and not an
[update](#sec_UpdateanEntity).

The `If-None-Match` header MUST NOT be specified on a batch request, but
MAY be specified on individual requests within the batch.

### []{#_Ref356812046}[]{#_Ref356809484}[]{#sec_HeaderIsolationODataIsolation}[]{#_The_Prefer_Header_1}[]{#_Header_OData-MaxVersion}[]{#_Header_OData-Isolation}8.2.6 [Header `Isolation` (`OData-Isolation`)](#sec_HeaderIsolationODataIsolation)

The [Isolation]{style="font-family:\"Courier New\";color:black;
background:white"} header specifies the isolation of the current request
from external changes. The only supported value for this header is
`snapshot`.

If the service doesn't support [Isolation:snapshot ]{style="font-family:
\"Courier New\";color:black;background:white"}and this header was
specified on the request, the service MUST NOT process the request and
MUST respond with `412 Precondition Failed.`

*Snapshot isolation* guarantees that all data returned for a request,
including multiple requests within a [batch](#sec_BatchRequests)[
]{.MsoHyperlink}or results retrieved across multiple
[pages](#sec_ServerDrivenPaging), will be consistent as of a single
point in time. Only data modifications made within the request (for
example, by a data modification request within the same batch) are
visible. The effect is as if the request generates a \"snapshot\" of the
committed data as it existed at the start of the request.

[The]{style="color:black;background:white"}[ Isolation
]{style="font-family:\"Courier New\";color:black;background:white"}header
may be specified on a single or batch request. If it is specified on a
batch then the value is applied to all statements within the batch.

[Next links returned within a snapshot return results within the same
snapshot as the initial request;]{style="color:black;background:white"}
the client is not required to repeat the header on each individual page
request.

[The ]{style="color:black;background:white"}`Isolation` header[ has no
effect on links other than the next link. Navigation links, read links,
and edit links return the current version of the
data.]{style="color:black;background:white"}

[A service returns
]{style="color:black;background:white"}[`410 Gone`](#sec_ResponseCode410Gone)[
or
]{style="color:black;background:white"}[`404 Not Found`](#sec_ResponseCode404NotFound)[
if a consumer tries to follow a next link referring to a snapshot that
is no longer available.]{style="color:black;background:white"}

[The syntax of the
]{style="color:black"}[Isolation]{style="font-family:\"Courier New\";color:black;background:white"}
header is defined in [**\[OData-ABNF\]**](#ABNF).

A service MAY specify the support for
[Isolation:snapshot]{style="font-family:\"Courier New\";color:black;background:white"}
using an annotation with term
[`Capabilities.IsolationSupported`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#IsolationSupported),
see [**\[OData-VocCap\]**](#VocCapabilities).

Note: The [Isolation]{style="font-family:\"Courier New\";color:black;
background:white"} header was named
[OData-Isolation]{style="font-family:
\"Courier New\";color:black;background:white"} in OData version 4.0.
Services that support the[
Isolation]{style="font-family:\"Courier New\";
color:black;background:white"} header SHOULD also support
[OData-Isolation]{style="font-family:\"Courier New\";color:black;background:white"}
for OData 4.0 clients and clients SHOULD use
[OData-Isolation]{style="font-family:\"Courier New\";
color:black;background:white"} for compatibility with OData 4.0
services. If both
[Isolation]{style="font-family:\"Courier New\";color:black;
background:white"} and
[OData-Isolation]{style="font-family:\"Courier New\";
color:black;background:white"} headers are specified in the same
request, the value of the
[Isolation]{style="font-family:\"Courier New\";
color:black;background:white"} header SHOULD be used.

### []{#sec_HeaderODataMaxVersion}[]{#_Header_OData-MaxVersion_1}8.2.7 [Header `OData-MaxVersion`](#sec_HeaderODataMaxVersion)

Clients SHOULD specify an `OData-MaxVersion` request header.

If specified, the service MUST generate a response with the greatest
supported [`OData-Version`](#sec_HeaderODataVersion) less than or equal
to the specified `OData-MaxVersion`.

If `OData-MaxVersion` is not specified, then the service SHOULD return
responses with the same OData version over time and interpret the
request as having an `OData-MaxVersion` equal to the maximum OData
version supported by the service at its initial publication.

If the `OData-MaxVersion` header is specified on an individual request
within a batch, then it specifies the maximum OData version for that
individual request. Individual requests that don't include the
`OData-MaxVersion` header inherit the maximum OData version of the
overall batch request or response. The maximum OData version does not
typically vary within a batch.

For more details, see [Versioning](#sec_Versioning).

### []{#sec_HeaderPrefer}[]{#_Header_Prefer}8.2.8 [Header `Prefer`](#sec_HeaderPrefer)

The `Prefer` header, as defined in [**\[RFC7240\]**](#HTTPPREFER),
allows clients to request certain behavior from the service. The service
MUST ignore preference values that are either not supported or not known
by the service.

The value of the `Prefer` header is a comma-separated list of
*preferences*. The following subsections describe preferences whose
meaning in OData is defined by this specification.

In response to a request containing a `Prefer` header, the service MAY
return the [`Preference-Applied`](#sec_HeaderPreferenceApplied) and
[`Vary`](#sec_HeaderVary) headers.

#### []{#sec_Preferenceallowentityreferencesodata}[8.2.8.1]{#_Toc477876580} [Preference `allow-entityreferences` (`odata.allow-entityreferences`)](#sec_Preferenceallowentityreferencesodata)

The `allow-entityreferences` preference indicates that the service is
allowed to return entity references in place of entities that have
previously been returned, with at least the properties requested, in the
same response (for example, when serializing the expanded results of
many-to-many relationships). The service MUST NOT return entity
references in place of requested entities if
`allow-entityreferences `has not been specified in the request, unless
explicitly defined by other rules in this document`.`[ The syntax of the
]{style="color:black"}`allow-entityreferences `preference is defined in
[**\[OData-ABNF\]**](#ABNF).

In the case the service applies the `allow-entityreferences` preference
it MUST include a [`Preference-Applied`](#sec_HeaderPreferenceApplied)
response header containing the `allow-entityreferences` preference to
indicate that entity references MAY be returned in place of entities
that have previously been
returned[.]{style="font-family:\"Calibri\",sans-serif"}

If the `allow-entityreferences` preference is specified on an individual
request within a batch, then it specifies the preference for that
individual request. Individual requests within a batch that don't
include the `allow-entityreferences` preference inherit the preference
of the overall batch request.

Note: The
[allow-entityreferences]{style="font-family:\"Courier New\";color:black;
background:white"} preference was named
[odata.allow-entityreferences]{style="font-family:\"Courier New\";color:black;background:white"}
in OData version 4.0. Services that support the[
allow-entityreferences]{style="font-family:\"Courier New\";
color:black;background:white"} preference SHOULD also support
[odata.allow-entityreferences]{style="font-family:\"Courier New\";color:black;background:
white"} for OData 4.0 clients and clients SHOULD use
[odata.allow-entityreferences]{style="font-family:\"Courier New\";color:black;background:white"}
for compatibility with OData 4.0 services.

#### []{#sec_Preferencecallbackodatacallback}[]{#_The_odata-track-changes_Preference}[]{#_The_OData-Continue-On-Error_Prefere}8.2.8.2 [Preference `callback` (`odata.callback`)](#sec_Preferencecallbackodatacallback)

For scenarios in which links returned by the service are used by the
client to poll for additional information, the client can specify the
`callback` preference to request that the service notify the client when
data is available.

The `callback` preference can be specified:

-   when requesting asynchronous processing of a request with the
    [`respond-async`](#sec_Preferencerespondasync)[` `]{.MsoHyperlink}preference,
    or
-   on a `GET` request to a [delta
    link](#sec_DeltaLinks)[.]{.MsoHyperlink}

The `callback` preference MUST include the parameter `url` whose value
is the URL of a callback endpoint to be invoked by the OData service
when data is available.[ The syntax of the
]{style="color:black"}`callback` preference is defined in
[**\[OData-ABNF\]**](#ABNF).

For HTTP based callbacks, the OData service executes an HTTP `GET`
request against the specified URL.

Services that support `callback` SHOULD support notifying the client
through HTTP. Services can advertise callback support using the
[`Capabilities`.`CallbackSupported`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#CallbackSupported)
annotation term defined in [**\[OData-VocCap\]**](#VocCapabilities).

If the service applies the `callback` preference it MUST include the
`callback` preference in the
[`Preference-Applied`](#sec_HeaderPreferenceApplied) response header.

When the `callback` preference is applied to asynchronous requests, the
OData service invokes the callback endpoint once it has finished
processing the request. The status monitor resource, returned in the
[`Location` header](#sec_HeaderLocation) of the previously returned
[`202 Accepted`](#sec_ResponseCode202Accepted) response, can then be
used to retrieve the results of the asynchronously executed request.

When the `callback` preference is specified on a `GET` request to a
delta link and there are no changes available, the OData service returns
a [`202 Accepted`](#sec_ResponseCode202Accepted) response with a
[`Location` header](#sec_HeaderLocation) specifying the delta link to be
used to check for future updates. The OData service then invokes the
specified callback endpoint once new changes become available.

Combining [`respond-async`](#sec_Preferencerespondasync), `callback` and
[`track-changes`](#sec_Preferencetrackchangesodatatrackchan) preferences
on a `GET` request to a delta-link might influence the response in a
couple of ways.

-   [[If the service processes the request synchronously, and no updates
    are available, then the response is the same as if the
    ]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}`respond-async`[[
    hadn't been specified and results in a response as described above.
    ]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
-   [[If the service processes the request asynchronously, then it
    responds with a
    ]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[`202 Accepted`](#sec_ResponseCode202Accepted)[[
    response specifying the URL to the status monitor resource as it
    would have with any other asynchronous request. Once the service has
    finished processing the asynchronous request to the delta link
    resource, if changes are available it invokes the specified callback
    endpoint. If no changes are available, the service SHOULD wait to
    notify the client until changes are available. Once notified, the
    client uses the status monitor resource from the
    ]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}`Location`[[
    header of the previously returned
    ]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[202
    Accepted]{style="font-family:\"Courier New\""}](#sec_ResponseCode202Accepted)[[
    response to retrieve the results. In case no updates were available
    after processing the initial request, the result will contain no
    updates and the client can use the delta-link contained in the
    result to retrieve the updates that have since become
    available.]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

If the consumer specifies the same URL as callback endpoint in multiple
requests, the service MAY collate them into a single notification once
additional data is available for any of the requests. However, the
consumer MUST be prepared to deal with receiving up to as many
notifications as it requested.

Example 2: using a HTTP callback endpoint to receive notification

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Prefer: callback;
url=\"http://myserver/notfication/token/12345\"]{style="color:black"}
:::

[]{#_Preference_odata.continue-on-error}If the
[callback]{style="font-family:
\"Courier New\";color:black;background:white"} preference is specified
on an individual request within a batch, then it specifies the callback
to be used for tracking changes to that individual request. If the
[callback]{style="font-family:\"Courier New\";color:black;background:white"}
preference is specified on a batch, then it specifies the callback to be
used for async responses to the batch.

Note: The [callback]{style="font-family:\"Courier New\";color:black;
background:white"} preference was named
[odata.callback]{style="font-family:
\"Courier New\";color:black;background:white"} in OData version 4.0.
Services that support the[ callback]{style="font-family:\"Courier New\";
color:black;background:white"} preference SHOULD also support
[odata.callback]{style="font-family:\"Courier New\";color:black;background:white"}
for OData 4.0 clients and clients SHOULD use
[odata.callback]{style="font-family:\"Courier New\";
color:black;background:white"} for compatibility with OData 4.0
services. If both
[callback]{style="font-family:\"Courier New\";color:black;
background:white"} and
[odata.callback]{style="font-family:\"Courier New\";
color:black;background:white"} preferences are specified in the same
request, the value of the [callback]{style="font-family:\"Courier New\";
color:black;background:white"} preference SHOULD be used.

#### []{#sec_Preferencecontinueonerrorodatacontin}[8.2.8.3]{#_Toc477876582} [Preference `continue-on-error` (`odata.continue-on-error`)](#sec_Preferencecontinueonerrorodatacontin)

The `continue-on-error` preference on a [batch
request](#sec_BatchRequests) is used to request whether, upon
encountering a request within the batch that returns an error, the
service return the error for that request and continue processing
additional requests within the batch (if specified with an implicit or
explicit value of `true`), or rather stop further processing (if
specified with an explicit value of `false`).[ The syntax of the
]{style="color:black"}`continue-on-error` preference is defined in
[**\[OData-ABNF\]**](#ABNF).

The `continue-on-error` preference can also be used on a [delta
update](#sec_UpdateaCollectionofEntities), [set-based
update](#sec_UpdateMembersofaCollection), or [set-based
delete](#sec_DeleteMembersofaCollection) to request that the service
continue attempting to process changes after receiving an error.

A service MAY specify support for the `continue-on-error` preference
using an annotation with term
[`Capabilities.BatchContinueOnErrorSupported`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#BatchContinueOnErrorSupported),
see [**\[OData-VocCap\]**](#VocCapabilities).

The [continue-on-error]{style="font-family:\"Courier New\";color:black;
background:white"} preference SHOULD NOT be applied to individual
requests within a batch.

Note: The
[continue-on-error]{style="font-family:\"Courier New\";color:black;
background:white"} preference was named
[odata.continue-on-error]{style="font-family:\"Courier New\";color:black;background:white"}
in OData version 4.0. Services that support the[
continue-on-error]{style="font-family:\"Courier New\";
color:black;background:white"} preference SHOULD also support
[odata.continue-on-error]{style="font-family:\"Courier New\";color:black;background:white"}
for OData 4.0 clients and clients SHOULD use
[odata.continue-on-error]{style="font-family:\"Courier New\";
color:black;background:white"} for compatibility with OData 4.0
services.

#### []{#sec_Preferenceincludeannotationsodatainc}[8.2.8.4]{#_Toc477876583} [Preference `include-annotations` (`odata.include-annotations`)](#sec_Preferenceincludeannotationsodatainc)

The `include-annotations` preference in a request for
[data](#sec_RequestingData) or [metadata](#sec_MetadataDocumentRequest)
is used to specify the set of annotations the client requests to be
included, where applicable, in the response.

The value of the `include-annotations` preference is [a comma-separated
list of namespace-qualified term names or term name patterns to include
or exclude, with ]{style="color:black"}`*`[ as a wildcard for name
segments. Term names and term name patterns can optionally be followed
by a hash (]{style="color:black"}`#`[) character and an annotation
qualifier. The full syntax of the
]{style="color:black"}`include-annotations` preference is defined in
[**\[OData-ABNF\]**](#ABNF).

[The most specific identifier always takes precedence, with an explicit
name taking precedence over a name pattern, and a longer pattern taking
precedence over a shorter pattern. If the same identifier value is
requested to both be excluded and included the behavior is undefined;
the service MAY return or omit the specified vocabulary but MUST NOT
raise an exception. ]{style="color:black"}

Example 3: a `Prefer` header requesting all annotations within a
metadata document to be returned

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Prefer: include-annotations=\"\*\" ]{style="color:black"}
:::

Example 4: a `Prefer` header requesting that no annotations are returned

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Prefer: include-annotations=\"-\*\" ]{style="color:black"}
:::

Example 5: a `Prefer` header requesting that all annotations defined
under the \"display\" namespace (recursively) be returned

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Prefer: include-annotations=\"display.\*\" ]{style="color:black"}
:::

Example 6: a `Prefer` header requesting that the annotation with the
term name `subject` within the `display` namespace be returned

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Prefer: include-annotations=\"display.subject\"]{style="color:black"}
:::

Example 7: a `Prefer` header requesting that all annotations defined
under the \"display\" namespace (recursively) with the qualifier
"tablet" be returned

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Prefer: include-annotations=\"display.\*#tablet\"]{style="color:black"}
:::

[The ]{style="color:black"}`include-annotations`[ preference is only a
hint to the service. The service MAY ignore the preference and is free
to decide whether or not to return annotations not specified in the
]{style="color:black"}`include-annotations`[ preference.
]{style="color:black"}

In the case that the client has specified the `include-annotations`
preference in the request, the service SHOULD include a
[`Preference-Applied`](#sec_HeaderPreferenceApplied) response header
containing the `include-annotations` preference[ to specify the
annotations actually included, where applicable, in the response. This
value may differ from the annotations requested in the
]{style="color:black"}[`Prefer`](#sec_HeaderPrefer)[ header of the
request. ]{style="color:black"}

If the `include-annotations` preference is specified on an individual
request within a batch, then it specifies the preference for that
individual request. Individual requests within a batch that don't
include the `include-annotations` preference inherit the preference of
the overall batch request.

Note: The [include-annotations
]{style="font-family:\"Courier New\";color:black;
background:white"}preference was named
[odata.include-annotations]{style="font-family:\"Courier New\";color:black;background:white"}
in OData version 4.0. Services that support the[ include-annotations
]{style="font-family:\"Courier New\";
color:black;background:white"}preference SHOULD also support
[odata.include-annotations]{style="font-family:\"Courier New\";color:black;background:
white"} for OData 4.0 clients and clients SHOULD use
[odata.include-annotations]{style="font-family:\"Courier New\";color:black;background:white"}
for compatibility with OData 4.0 services. If both
[include-annotations]{style="font-family:
\"Courier New\";color:black;background:white"} and
[odata.include-annotations]{style="font-family:\"Courier New\";color:black;background:white"}
preferences are specified in the same request, the value of the
[include-annotations]{style="font-family:\"Courier New\";color:black;background:white"}
preference SHOULD be used.

#### []{#sec_Preferencemaxpagesizeodatamaxpagesiz}[]{#_The_odata.maxpagesize_Preference}8.2.8.5 [Preference `maxpagesize` (`odata.maxpagesize`)](#sec_Preferencemaxpagesizeodatamaxpagesiz)

The `maxpagesize` preference is used to request that each collection
within the response contain no more than the number of items specified
as the positive integer value of this preference.[ The syntax of the
]{style="color:black"}`maxpagesize` preference is defined in
[**\[OData-ABNF\]**](#ABNF).

Example 8: a request for customers and their orders would result in a
response containing one collection with customer entities and for every
customer a separate collection with order entities. The client could
specify `maxpagesize=50 `in order to request that each page of results
contain a maximum of 50 customers, each with a maximum of 50 orders.

If a collection within the result contains more than the specified
[maxpagesize]{.Keyword}, the collection SHOULD be [a partial set of the
results](#sec_ServerDrivenPaging) with a [next
link](#sec_ServerDrivenPaging) to the next page of results. The client
MAY specify a different value for this preference with every request
following a next link.

In the example given above, the result page should include a next link
for the customer collection, if there are more than 50 customers, and
additional next links for all returned orders collections with more than
50 entities.

If the client has specified the `maxpagesize` preference in the request,
and the service limits the number of items in collections within the
response through [server-driven paging](#sec_ServerDrivenPaging), the
service MAY include a
[`Preference-Applied`](#sec_HeaderPreferenceApplied)` `response header
containing the `maxpagesize` preference and the maximum page size
applied. This value may differ from the value requested by the client.

The `maxpagesize` preference SHOULD NOT be applied to a batch request,
but MAY be applied to individual requests within a batch.

Note: The `maxpagesize` preference was named
[odata.]{style="font-family:\"Courier New\";color:black;
background:white"}`maxpagesize` in OData version 4.0. Services that
support the[ ]{style="font-family:\"Courier New\";
color:black;background:white"}`maxpagesize` preference SHOULD also
support [odata.]{style="font-family:\"Courier New\";
color:black;background:white"}`maxpagesize` for OData 4.0 clients and
clients SHOULD use [odata.]{style="font-family:\"Courier New\";
color:black;background:white"}`maxpagesize` for compatibility with OData
4.0 services. If both `maxpagesize` and
[odata.]{style="font-family:\"Courier New\";
color:black;background:white"}`maxpagesize` preferences are specified in
the same request, the value of the `maxpagesize` preference SHOULD be
used.

#### []{#sec_Preferenceomitvalues}[]{#_Preference_odata.track-changes}8.2.8.6 [Preference `omit-values`](#sec_Preferenceomitvalues)

The `omit-values` preference specifies values that MAY be omitted from a
response payload. Valid values are `nulls` or `defaults`.

If `nulls` is specified, then the service MAY omit properties containing
null values from the response, in which case it MUST specify the
`Preference-Applied` response header with `omit-values=nulls`.

If `defaults` is specified, then the service MAY omit properties
containing default values from the response, including nulls for
properties that have no other defined default value. Nulls MUST be
included for properties that have a non-null default value defined. If
the service omits default values, it MUST specify the
`Preference-Applied` response header with `omit-values=defaults`.

Properties with instance annotations are not affected by this preference
and MUST be included in the payload if they would be included without
this preference. Clients MUST NOT try to reconstruct a null or default
value for properties for which an instance annotation is present and no
property value is present, for example if the property is omitted due to
permissions and has been replaced with the instance annotation
`Core.Permissions` and a value of `None`, see
 [**\[OData-VocCore\]**](#VocCore).

Properties with null or default values MUST be included in delta
payloads, if modified.

The response to a POST operation MUST include any properties not set to
their default value, and the response to a PUT/PATCH operation MUST
include any properties whose values were changed as part of the
operation.

The `omit-values` preference does not affect a request payload.

#### []{#sec_Preferencereturnrepresentationandret}8.2.8.7 [Preference `return=representation` and `return=minimal`](#sec_Preferencereturnrepresentationandret)

The `return=representation`[ and ]{style="color:black"}`return=minimal`
preferences are defined in [**\[RFC7240\]**](#HTTPPREFER).

[In OData, ]{style="color:black"}`return=representation`[ or
]{style="color:black"}`return=minimal`[ is defined for use with a
]{style="color:black"}`POST`[, ]{style="color:black"}`PUT`[, or
]{style="color:black"}`PATCH`[ ]{style="color:black"}[Data Modification
Request](#sec_DataModification)[, or with an
]{style="color:black"}[Action Request](#sec_Actions)[. Specifying a
preference of ]{style="color:black"}`return=representation`[ or
]{style="color:black"}`return=minimal`[ in a
]{style="color:black"}`GET`[ or ]{style="color:black"}`DELETE`[ request
does not have any effect. ]{style="color:black"}

[A preference of ]{style="color:black"}`return=representation`[ or
]{style="color:black"}`return=minimal`[ is allowed on an individual
]{style="color:black"}[Data Modification
Request](#sec_DataModification)[ or ]{style="color:black"}[Action
Request](#sec_Actions)[ ]{.MsoHyperlink}[within a batch, subject to the
same restrictions, but SHOULD return a
]{style="color:black"}`4xx Client Error`[ if specified on the batch
request itself. ]{style="color:black"}

A preference of `return=minimal` requests that the service invoke the
request but does not return content in the response. The service MAY
apply this preference by returning
[`204 No Content`](#sec_ResponseCode204NoContent)` `in which case it MAY
include a [`Preference-Applied`](#sec_HeaderPreferenceApplied)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}response header
containing the
`return=minimal `preference[.]{style="font-family:\"Calibri\",sans-serif"}

A preference of[
]{style="font-family:\"Calibri\",sans-serif"}`return=representation`
requests that the service invokes the request and returns the modified
resource. The service MAY apply this preference by returning the
representation of the successfully modified resource in the body of the
response, formatted according to the rules specified for the requested
[format](#sec_Formats)[. In this case the service]{.Hyperlink1} MAY
include a [`Preference-Applied`](#sec_HeaderPreferenceApplied) response
header containing the `return=representation` preference.

The `return` preference SHOULD NOT be applied to a batch request, but
MAY be applied to individual requests within a batch.

#### []{#sec_Preferencerespondasync}[]{#_The_respond-async_Preference}[]{#_Preference_respond-async}8.2.8.8 [Preference `respond-async`](#sec_Preferencerespondasync)

The `respond-async `preference, as defined in
[**\[RFC7240\]**](#HTTPPREFER), allows clients to request that the
service process the request asynchronously.

If the client has specified` respond-async` in the request, the service
MAY process the request asynchronously and return a
[`202 Accepted`](#sec_ResponseCode202Accepted) response.

The `respond-async` preference MAY be used for batch requests, in which
case it applies to the batch request as a whole and not to individual
requests within the batch request.

In the case that the service applies the `respond-async` preference it
MUST include a
[`Preference-Applied`](#sec_HeaderPreferenceApplied)` `response header
containing the `respond-async` preference.

A service MAY specify the support for the `respond-async` preference
using an annotation with term
[`Capabilities.AsynchronousRequestsSupported`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#AsynchronousRequestsSupported),
see [**\[OData-VocCap\]**](#VocCapabilities).

Example 9: a service receiving the following header might choose to
respond

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}asynchronously
if the synchronous processing of the request will take longer than 10
seconds

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}synchronously
after 5 seconds

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}asynchronously
(ignoring the [`wait`](#sec_Preferencewait) preference)

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}synchronously
after 15 seconds (ignoring `respond-`async preference and the
[`wait`](#sec_Preferencewait) preference)

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Prefer: respond-async, wait=10]{style="color:black"}
:::

#### []{#sec_Preferencetrackchangesodatatrackchan}[]{#_The_wait_Preference}8.2.8.9 [Preference `track-changes` (`odata.track-changes`)](#sec_Preferencetrackchangesodatatrackchan)

The `track-changes` preference is used to request that the service
return a[ ]{.MsoHyperlink}[delta link](#sec_DeltaLinks) that can
subsequently be used to obtain [changes](#sec_RequestingChanges)
(deltas) to this result. [The syntax of the
]{style="color:black"}`track-changes `preference is defined in
[**\[OData-ABNF\]**](#ABNF).

For [paged results](#sec_ServerDrivenPaging), the preference MUST be
specified on the initial request. Services MUST ignore the
[`track-changes`](#sec_Preferencetrackchangesodatatrackchan) preference
if applied to the next link.

The delta link MUST only be returned on the final page of results in
place of the next link.

The service includes a
[`Preference-Applied`](#sec_HeaderPreferenceApplied)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}response header
in the first page of the response containing the `track-changes`
preference to signal that changes are being tracked.

A service MAY specify the support for the `track-changes` preference
using an annotation with term
[`Capabilities.ChangeTracking`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#ChangeTracking),
see [**\[OData-VocCap\]**](#VocCapabilities).

The `track-changes` preference SHOULD NOT be applied to a batch request,
but MAY be applied to individual requests within a batch.

Note: The `track-changes` preference was named
[odata]{style="font-family:\"Courier New\";color:black;
background:white"}`.track-changes` in OData version 4.0. Services that
support the[ ]{style="font-family:\"Courier New\";
color:black;background:white"}`track-changes` preference SHOULD also
support [odata.]{style="font-family:\"Courier New\";
color:black;background:white"}`track-changes` for OData 4.0 clients and
clients SHOULD use [odata.]{style="font-family:\"Courier New\";
color:black;background:white"}`track-changes` for compatibility with
OData 4.0 services.

#### []{#sec_Preferencewait}[8.2.8.10]{#_Toc477876589} [Preference `wait`](#sec_Preferencewait)

The `wait` preference, as defined in [**\[RFC7240\]**](#HTTPPREFER), is
used to establish an upper bound on the length of time, in seconds, the
client is prepared to wait for the service to process the request
synchronously once it has been received.

If the [`respond-async`](#sec_Preferencerespondasync) preference is also
specified, the client requests that the service respond asynchronously
after the specified length of time.

If the `respond-async` preference has not been specified, the service
MAY interpret the `wait` as a request to timeout after the specified
period of time.

If the [wait]{style="font-family:\"Courier New\";color:black;
background:white"} preference is specified on an individual request
within a batch, then it specifies the maximum amount of time to wait for
that individual request. If the
[wait]{style="font-family:\"Courier New\";color:black;
background:white"} preference is specified on a batch, then it specifies
the maximum time to wait for the entire batch.

## []{#sec_ResponseHeaders}[]{#_Header_SchemaVersion}8.3 [Response Headers](#sec_ResponseHeaders)

In addition to the [Common Headers](#sec_CommonHeaders), the following
response headers have defined meaning in OData.

### []{#sec_HeaderAsyncResult}[]{#_The_ETag_Header}8.3.1 [Header `AsyncResult`](#sec_HeaderAsyncResult)

A [[4.01]{style="font-family:\"Arial\",sans-serif"}]{.Datatype} service
MUST include the `AsyncResult` header in
[`200 OK`](#sec_ResponseCode200OK)[` `]{.MsoHyperlink}response from a
status monitor resource in order to indicate the final [HTTP Response
Status Code](#sec_CommonResponseStatusCodes) of an [asynchronously
executed request](#sec_AsynchronousRequests).

The `AsyncResult` header SHOULD NOT be applied to individual responses
within a batch.

### [8.3.2]{#sec_HeaderETag} [Header `ETag`](#sec_HeaderETag)

A response MAY include an `ETag` header, see
[**\[RFC7232\]**](#HTTPConditional). Services MUST include this header
if they require an ETag to be specified when modifying the resource.

Services MUST support specifying the value returned in the
[ETag]{.VerbatimChar} header in an
[`If-None-Match`](#sec_HeaderIfNoneMatch) header of a subsequent [Data
Request](#sec_RequestingData) for the resource. Clients MUST specify the
value returned in the [ETag]{.VerbatimChar} header, or star (`*`), in an
[`If-Match`](#sec_HeaderIfMatch) header of a subsequent [Data
Modification Request](#sec_DataModification) or [Action
Request](#sec_Actions) in order to apply [optimistic
concurrency](#sec_UseofETagsforAvoidingUpdateConflicts) control in
updating, deleting, or invoking an action bound to the resource.

As OData allows multiple formats for representing the same structured
information, services SHOULD use weak ETags that only depend on the
representation-independent entity state. A strong ETag MUST change
whenever the representation of an entity changes, so it has to depend on
the [`Content-Type`](#sec_HeaderContentType), the
[`Content-Encoding`](#sec_HeaderContentEncoding), and potentially other
characteristics of the response.

[]{#_The_Location_Header}An `ETag` header MAY also be returned on a
[metadata document request](#sec_MetadataDocumentRequest) or [service
document request](#sec_ServiceDocumentRequest) to allow the client
subsequently to make a conditional request for the metadata or service
document. Clients can also compare the value of the `ETag` header
returned from a metadata document request to the metadata ETag returned
in a response in order to verify the version of the metadata used to
generate that response.

The `ETag` header SHOULD NOT be included for the overall batch response,
but MAY be included in individual responses within a batch.

### []{#sec_HeaderLocation}[]{#_Header_Location}8.3.3 [Header `Location`](#sec_HeaderLocation)

The `Location` header MUST be returned in the response from a [Create
Entity](#sec_CreateanEntity) or [Create Media
Entity](#sec_CreateaMediaEntity) request to specify the edit URL, or for
read-only entities the read URL, of the created entity, and in responses
returning [`202 Accepted`](#sec_ResponseCode202Accepted) to specify the
URL that the client can use to request the status of an asynchronous
request.

The `Location` header SHOULD NOT be included for the overall batch
response, but MAY be included in individual responses within a batch.

### []{#sec_HeaderODataEntityId}[]{#_The_Preference-Applied_Header}[]{#_Header_OData-EntityId}[]{#_Header_Preference-Applied}8.3.4 [Header `OData-EntityId`](#sec_HeaderODataEntityId)

A response to a [create](#sec_CreateanEntity)[ ]{.MsoHyperlink}[[or
]{style="color:windowtext"}]{.MsoHyperlink}[upsert](#sec_UpsertanEntity)[
operation]{.MsoHyperlink} that returns
[`204 ``No Content`](#sec_ResponseCode204NoContent)[
]{style="font-family:\"Calibri\",sans-serif"}MUST include an
[OData-]{style="font-family:\"Courier New\";color:black;background:white"}`EntityId`
response header. The value of the header is the
[entity-id](#sec_EntityIdsandEntityReferences) of the entity that was
acted on by the request. [The syntax of the
]{style="color:black"}[OData-]{style="font-family:\"Courier New\";color:black;background:white"}`EntityId`
header is defined in [**\[OData-ABNF\]**](#ABNF).

The [OData-]{style="font-family:\"Courier New\";color:black;
background:white"}`EntityID` header SHOULD NOT be included for the
overall batch response, but MAY be included in individual responses
within a batch.

### [8.3.5]{#sec_HeaderODataError} [Header `OData-Error`](#sec_HeaderODataError)

A response with an [in-stream error](#sec_InStreamErrors) MAY include an
`OData-Error` trailing header if the transport protocol supports
trailing headers (e.g. HTTP/1.1 with chunked transfer encoding, or
HTTP/2).

The value of this trailing header is a standard OData error response
according to the OData response format, encoded suitably for transport
in a header, see e.g. [**\[OData-JSON\]**](#ODataJSONRef).

### [8.3.6]{#sec_HeaderPreferenceApplied} [Header `Preference-Applied`](#sec_HeaderPreferenceApplied)

In a response to a request that specifies a
[`Prefer`](#sec_HeaderPrefer) header, a service MAY include a
`Preference-Applied` header, as defined in
[**\[RFC7240\]**](#HTTPPREFER), specifying how individual preferences
within the request were handled.

The value of the `Preference-Applied` header is a comma-separated list
of preferences applied in the response. For more information on the
individual preferences, see the [`Prefer`](#sec_HeaderPrefer) header.

If the
[Preference-Applied]{style="font-family:\"Courier New\";color:black;
background:white"} header is specified on an individual response within
a batch, then it specifies the preferences applied to that individual
response. If the
[Preference-Applied]{style="font-family:\"Courier New\";
color:black;background:white"} header is specified on a batch response,
then it specifies the preferences applied to the overall batch.

### []{#sec_HeaderRetryAfter}[]{#_The_Prefer_Header}[]{#_The_Retry-After_Header}8.3.7 [Header `Retry-After`](#sec_HeaderRetryAfter)

A service MAY include a `Retry-After` header, as defined in
[**\[RFC7231\]**](#HTTPSemantic)[**,**]{.MsoHyperlink} in
[`202 Accepted`](#sec_ResponseCode202Accepted) and in
[`3xx Redirect`](#sec_ResponseCode3xxRedirection) responses

The `Retry-After` header specifies the duration of time, in seconds,
that the client is asked to wait before retrying the request or issuing
a request to the resource returned as the value of the [`Location`
header](#sec_HeaderLocation).

### [8.3.8]{#sec_HeaderVary} [Header `Vary`](#sec_HeaderVary)

If a response varies depending on the
[`OData-Version`](#sec_HeaderODataVersion) of the response, the service
MUST include a `Vary` header listing the
[`OData-MaxVersion`](#sec_HeaderODataMaxVersion) request header field to
allow correct caching of the response.

If a response varies depending on the applied preferences
([`allow-entityreferences`](#sec_Preferenceallowentityreferencesodata),
[`include-annotations`](#sec_Preferenceincludeannotationsodatainc),
[`omit-values`](#sec_Preferenceomitvalues)[[,
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[`return`](#sec_Preferencereturnrepresentationandret)),
the service MUST include a `Vary` header listing the
[`Prefer`](#sec_HeaderPrefer) request header field to allow correct
caching of the response.

Alternatively, the server MAY include a `Vary` header with the special
value `*` as defined by [**\[RFC7231\]**](#HTTPSemantic), Section 8.2.1.
Note that this will make it impossible for a proxy to cache the
response, see [**\[RFC7240\]**](#HTTPPREFER)[**.**]{.MsoHyperlink}

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_CommonResponseStatusCodes}[]{#_AsyncResult}[]{#_Header_AsyncResult}[]{#_Common_Response_Status}9[     ]{style="font:7.0pt \"Times New Roman\""}[Common Response Status Codes](#sec_CommonResponseStatusCodes)
:::

An OData service MAY respond to any request using any valid HTTP status
code appropriate for the request. A service SHOULD be as specific as
possible in its choice of HTTP status codes.

The following represent the most common success response codes. In some
cases, a service MAY respond with a more specific success code.

## []{#sec_SuccessResponses}[]{#_Success_Response_Codes}9.1 [Success Responses](#sec_SuccessResponses)

The following response codes represent successful requests.

### []{#sec_ResponseCode200OK}[]{#_200_OK_Response}[]{#_Response_Code_200}9.1.1 [Response Code `200 OK`` `](#sec_ResponseCode200OK) 

A request that does not create a resource returns `200 OK` if it is
completed successfully and the value of the resource is not `null`. In
this case, the response body MUST contain the value of the resource
specified in the request URL.

### []{#sec_ResponseCode201Created}[]{#_201_Created_Response}[]{#_Response_Code_201}9.1.2 [Response Code `201 Created`](#sec_ResponseCode201Created)

A [Create Entity](#sec_CreateanEntity), [Create Media
Entity](#sec_CreateaMediaEntity), or [Invoke
Action](#sec_InvokinganAction) request that successfully creates a
resource returns `201 Created`. In this case, the response body MUST
contain the resource created.

### []{#sec_ResponseCode202Accepted}[]{#_202_Accepted_Response}[]{#_Response_Code_202}9.1.3 [Response Code `202 Accepted`](#sec_ResponseCode202Accepted)

`202 Accepted` indicates that the [Data Service
Request](#sec_DataServiceRequests) has been accepted and has not yet
completed executing asynchronously. The asynchronous handling of
requests is defined in the sections on [Asynchronous
Requests](#sec_AsynchronousRequests) and [Asynchronous Batch
Requests](#sec_AsynchronousBatchRequests)..

### []{#sec_ResponseCode204NoContent}[]{#_204_No_Content}[]{#_Response_Code_204}9.1.4 [Response Code `204 No Content`](#sec_ResponseCode204NoContent)

A request returns `204 No Content` if the requested resource has the
`null` value, or if the service applies a [`return=minimal`
preference](#sec_Preferencereturnrepresentationandret). In this case,
the response body MUST be empty.

As defined in [**\[RFC7231\]**](#HTTPSemantic), a [Data Modification
Request](#sec_DataModification) that responds with `204 No Content`[[
MAY ]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}include an
`ETag` header with a value reflecting the result of the data
modification if and only if the client can reasonably "know" the new
representation of the resource without actually receiving it. For a
`PUT` request this means that the response body of a corresponding
`200 OK` or `201 Created` response would have been identical to the
request body, i.e. no server-side modification of values sent in the
request body, no server-calculated values etc. For a `PATCH` request
this means that the response body of a corresponding `200 OK` or
`201 Created` response would have consisted of all values sent in the
request body, plus (for values not sent in the request body) server-side
values corresponding to the `ETag` value sent in the `If-Match` header
of the `PATCH` request, i.e. the previous values "known" to the client.

### []{#sec_ResponseCode3xxRedirection}[]{#_3xx_Redirect_Response}[]{#_Response_Code_3xx}9.1.5 [Response Code `3xx Redirection`](#sec_ResponseCode3xxRedirection)

As per [**\[RFC7231\]**](#HTTPSemantic), a `3xx Redirection` indicates
that further action needs to be taken by the client in order to fulfill
the request. In this case, the response SHOULD include a [`Location`
header](#sec_HeaderLocation)[, ]{.MsoHyperlink}as appropriate, with the
URL from which the result can be obtained; it MAY include a
[`Retry-After` header](#sec_HeaderRetryAfter).

### []{#sec_ResponseCode304NotModified}[]{#_4xx_Client_Error}[]{#_304_Not_Modified}9.1.6 [Response Code `304 Not Modified`](#sec_ResponseCode304NotModified)

As per [**\[RFC7232\]**](#HTTPConditional), a `304 Not Modified` is
returned when the client performs a `GET` request containing an
[[[If-None-Match]{style="color:windowtext"}]{.Datatype}](#sec_HeaderIfNoneMatch)
header and the content has not changed. In this case the response SHOULD
NOT include other headers in order to prevent inconsistencies between
cached entity-bodies and updated headers.

The service MUST ensure that no observable change has occurred to the
state of the service as a result of any request that returns a
`304 Not Modified`.

## []{#sec_ClientErrorResponses}[]{#_Client_Error_Responses}9.2 [Client Error Responses](#sec_ClientErrorResponses)  

Error codes in the `4xx` range indicate a client error, such as a
malformed request.

The service MUST ensure that no observable change has occurred to the
state of the service as a result of any request that returns an error
status code.

In the case that a response body is defined for the error code, the body
of the error is as defined for the appropriate [format](#sec_Formats).

### []{#sec_ResponseCode404NotFound}[]{#_404_Not_Found}[]{#_Response_Code_404}9.2.1 [Response Code `404 Not Found`](#sec_ResponseCode404NotFound)

`404 Not Found `indicates that the resource specified by the request URL
does not exist. The response body MAY provide additional information.

### []{#sec_ResponseCode405MethodNotAllowed}[]{#_Response_Code_405}9.2.2 [Response Code `405 Method Not Allowed`](#sec_ResponseCode405MethodNotAllowed)

`405 Method Not Allowed` indicates that the resource specified by the
request URL does not support the request method. In this case the
response MUST include an `Allow` header containing a list of valid
request methods for the requested resource as defined in
[**\[RFC7231\]**](#HTTPSemantic).

### []{#sec_ResponseCode406NotAcceptable}[]{#_501_Not_Implemented}[]{#_Response_code_410}9.2.3 [Response Code `406 Not Acceptable`](#sec_ResponseCode406NotAcceptable)

[`406 Not Acceptable` indicates that the resource specified by the
request URL does not have a current representation that would be
acceptable for the client according to the request
headers]{#_Toc477876608} [`Accept`](#sec_HeaderAccept),
[`Accept-Charset`](#sec_HeaderAcceptCharset), and
[`Accept-Language`](#sec_HeaderAcceptLanguage), and that the service is
unwilling to supply a default representation.

### [9.2.4]{#sec_ResponseCode410Gone} [Response Code `410 Gone`](#sec_ResponseCode410Gone)

`410 Gone` indicates that the requested resource is no longer available.
This can happen if a client has waited too long to follow a [delta
link](#sec_DeltaLinks) or a
[status-monitor-resource](#sec_AsynchronousRequests) link, or a next
link on a collection that was requested with [snapshot
isolation](#sec_HeaderIsolationODataIsolation).

### []{#sec_ResponseCode412PreconditionFailed}[]{#_Response_Code_412}9.2.5 [Response Code `412 Precondition Failed`](#sec_ResponseCode412PreconditionFailed)

As defined in [**\[RFC7232\]**](#HTTPConditional)[,
]{.MsoHyperlink}`412 Precondition Failed` indicates that the client has
performed a conditional request and the resource fails the condition.
The service MUST ensure that no observable change occurs as a result of
the request.

### [9.2.6]{#sec_ResponseCode424FailedDependency} [Response Code `424 Failed Dependency`](#sec_ResponseCode424FailedDependency)

`424 Failed Dependency` indicates that a request was not performed due
to a failed dependency; for example, a request within a batch that
depended upon a request that failed.

## []{#sec_ServerErrorResponses}[9.3]{#_Toc477876610} [Server Error Responses](#sec_ServerErrorResponses)

As defined in [**\[RFC7231\]**](#HTTPSemantic)[, ]{.MsoHyperlink}error
codes in the `5xx` range indicate service errors[.]{.MsoHyperlink}

### []{#sec_ResponseCode501NotImplemented}[]{#_501_Not_Implemented_1}[]{#_Response_Code_501}9.3.1 [Response Code `501 Not Implemented`](#sec_ResponseCode501NotImplemented)

If the client requests functionality not implemented by the OData
Service, the service responds with `501 Not Implemented` and SHOULD
include a response body describing the functionality not implemented.

## []{#sec_ErrorResponseBody}[]{#_Not_Implemented_Error}9.4 [Error Response Body](#sec_ErrorResponseBody)

The representation of an error response body is format-specific. It
consists at least of the following information:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`code`:
required non-null, non-empty, language-independent string. Its value is
a service-defined error code. This code serves as a sub-status for the
HTTP error code specified in the response.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`message`:
required non-null, non-empty, language-dependent, human-readable string
describing the error.
[The ]{style="color:black"}[`Content-Language`](#sec_HeaderContentLanguage)[ header
MUST contain the language code ]{style="color:black"}from
[**\[RFC5646\]**](#rfc5646) [corresponding to the language in which the
value for message is written.]{style="color:black"}

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`target`:
optional nullable, potentially empty string indicating the target of the
error, for example, the name of the property in error.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`details`:
optional, potentially empty collection of structured instances with
`code`, `message`, and `target` following the rules above.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`innererror`:
optional structured instance with service-defined content.

Service implementations SHOULD carefully consider which information to
include in production environments to guard against potential security
concerns around information disclosure.

## [9.5]{#sec_InStreamErrors} [In-Stream Errors](#sec_InStreamErrors)

In the case that the service encounters an error after sending a success
status to the client, the service MUST leave the response malformed
according to its [content-type](#sec_HeaderContentType). Clients MUST
treat the entire response as being in error.

Services MAY include the header [`OData-Error`](#sec_HeaderODataError)
as a trailing header if supported by the transport protocol (e.g.
HTTP/1.1 with chunked transfer encoding, or HTTP/2).

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_ContextURL}[]{#_Data_Service_Requests}[]{#_Metadata_URL}10[    ]{style="font:7.0pt \"Times New Roman\""}[Context URL](#sec_ContextURL)
:::

The *context URL* describes the content of the payload. It consists of
the canonical [metadata document URL](#sec_MetadataDocumentRequest) and
a fragment identifying the relevant portion of the metadata document.
The context URL makes response payloads "self-contained", allowing a
recipient to retrieve metadata, resolve references, and construct
canonical links omitted from response payloads in certain optimized
formats.

Request payloads generally do not require context URLs as the type of
the payload can generally be determined from the request URL.

For details on how the context URL is used to describe a payload, see
the relevant sections in the particular format.

The following subsections describe how the context URL is constructed
for each category of payload by providing a *context URL template*. The
context URL template uses the following terms:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`{context-url}`
is the canonical resource path to the `$metadata` document,

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`{entity-set}`
is the name of an entity set or path to a containment navigation
property,

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`{entity}`
is the canonical URL for an entity,

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`{singleton}`
is the canonical URL for a singleton entity,

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`{select-list}`
is an optional parenthesized comma-separated list of selected
properties, instance annotations, functions, and actions,

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}`{property-path}`
is the path to a structural property of the entity,

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`{type-name}`
is a qualified type name,

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}`{/type-name}`
is an optional type-cast segment containing the qualified name of a
derived or implemented type prefixed with a forward slash.

The full grammar for the context URL is defined in
[**\[OData-ABNF\]**](#ABNF). Note that the syntax of the context URL is
independent of whatever URL conventions the service uses for addressing
individual entities.

## []{#sec_ServiceDocument}[10.1]{#_Toc477876614} [Service Document](#sec_ServiceDocument)

Context URL template:

`{context-url}`

The context URL of the service document is the metadata document URL of
the service.

Example 10: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[http://host/service/]{style="color:black"}]{.Datatype}

[http://host/service/\$metadata]{style="color:black"}
:::

## []{#sec_CollectionofEntities}[10.2]{#_Toc477876615} [Collection of Entities](#sec_CollectionofEntities)

Context URL template:

`{context-url}#{entity-set}`

{context-url}#Collection({type-name})

If all entities in the collection are members of one entity set, its
name is the context URL fragment.

Example 11: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Customers]{style="color:black"}

[http://host/service/\$metadata#Customers]{style="color:black"}
:::

If the entities are contained, then `entity-set` is the top-level entity
set or singleton followed by the path to the containment navigation
property of the containing entity.

Example 12: resource URL and corresponding context URL for contained
entities

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Orders(4711)/Items]{style="color:black"}

[http://host/service/\$metadata#Orders(4711)/Items]{style="color:black"}
:::

If the entities in the response are not bound to a single entity set,
such as from a function or action with no entity set path, a function
import or action import with no specified entity set, or a navigation
property with no navigation property binding, the context URL specifies
the type of the returned entity collection.

## []{#sec_Entity}[10.3]{#_Toc477876616} [Entity](#sec_Entity)

Context URL template:

`{context-url}#{entity-set}/$entity`

{context-url}#{type-name}

If a response or response part is a single entity of the declared type
of an entity set, `/$entity` is appended to the context URL.

Example 13: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[http://host/service/Customers(1)]{style="color:black"}]{.Datatype}

[http://host/service/\$metadata#Customers/\$entity]{style="color:black"}
:::

If the entity is contained, then `entity-set` is the canonical URL for
the containment navigation property of the containing entity, e.g.
Orders(4711)/Items.

Example 14: resource URL and corresponding context URL for contained
entity

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Orders(4711)/Items(1)]{style="color:black"}

[http://host/service/\$metadata#Orders(4711)/Items/\$entity]{style="color:black"}
:::

If the response is not bound to a single entity set, such as an entity
returned from a function or action with no entity set path, a function
import or action import with no specified entity set, or a navigation
property with no navigation property binding, the context URL specifies
the type of the returned entity.

## []{#sec_Singleton}[10.4]{#_Toc477876617} [Singleton](#sec_Singleton)

Context URL template:

`{context-url}#{singleton}`

If a response or response part is a singleton, its name is the context
URL fragment.

Example 15: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[http://host/service/MainSupplier]{style="color:black"}]{.Datatype}

[http://host/service/\$metadata#`MainSupplier`]{style="color:black"}
:::

## []{#sec_CollectionofDerivedEntities}[10.5]{#_Toc477876618} [Collection of Derived Entities](#sec_CollectionofDerivedEntities)

Context URL template:

`{context-url}#{entity-set}{/type-name}`

If an entity set consists exclusively of derived entities, a type-cast
segment is added to the context URL.

Example 16: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Customers/Model.VipCustomer]{style="color:black"}

[http://host/service/\$metadata#Customers/Model.VipCustomer]{style="color:black"}
:::

## []{#sec_DerivedEntity}[10.6]{#_Toc477876619} [Derived Entity](#sec_DerivedEntity)

Context URL template:

`{context-url}#{entity-set}{/type-name}/$entity`

If a response or response part is a single entity of a type derived from
the declared type of an entity set, a type-cast segment is appended to
the entity set name.

Example 17: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[http://host/service/Customers(2)/Model.VipCustomer]{style="color:black"}]{.Datatype}

[http://host/service/\$metadata#Customers/Model.VipCustomer/\$entity]{style="color:black"}
:::

## []{#sec_CollectionofProjectedEntities}[10.7]{#_Toc477876620} [Collection of Projected Entities](#sec_CollectionofProjectedEntities)

Context URL templates:

`{context-url}#{entity-set}{/type-name}{select-list}`

`{context-url}#Collection({type-name}){select-list}`

If a result contains only a subset of properties, the parenthesized
comma-separated list of the selected defined or dynamic properties,
instance annotations, navigation properties, functions, and actions is
appended to the context URL representing the [collection of
entities](#sec_CollectionofEntities).

Regardless of how contained structural properties are represented in the
request URL (as paths or as select options) they are represented in the
context URL using path syntax, as defined in OData 4.0.

The shortcut `*` represents the list of all structural properties.
Properties defined on types derived from the declared type of the entity
set (or type specified in the type-cast segment if specified) are
prefixed with the qualified name of the derived type as defined in
[**\[OData-ABNF\]**](#ABNF).

The list also contains explicitly selected or expanded instance
annotations. It is possible to select or expand only instance
annotations, in which case only those selected or expanded annotations
appear in the result. Note that annotations specified only in the
[`include-annotations`](#sec_Preferenceincludeannotationsodatainc)
preference do not appear in the context URL and do not affect the
selected/expanded properties.

Operations in the context URL are represented using the namespace- or
alias-qualified name. Function names suffixed with parentheses represent
a specific overload, while function names without parentheses represent
all overloads of the function.

OData 4.01 responses MAY use the shortcut pattern `{namespace}.*` to
represent the list of all bound actions or functions available for
entities in the collection, see system query option
[`$select`](#sec_SystemQueryOptionselect).

Example 18: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Customers?\$]{style="color:black"}[[select]{style="font-size:10.0pt;color:black"}]{.Datatype}[=Address,Orders]{style="color:black"}

[http://host/service/\$metadata#Customers(Address,Orders)]{style="color:black"}
:::

## []{#sec_ProjectedEntity}[10.8]{#_Toc477876621} [Projected Entity](#sec_ProjectedEntity)

Context URL templates:

`{context-url}#{entity-set}{/type-name}{select-list}/$entity`

`{context-url}#{singleton}{select-list}`

{context-url}#{type-name}{select-list}

If a single entity contains a subset of properties, the parenthesized
comma-separated list of the selected defined or dynamic properties,
instance annotations, navigation properties, functions, and actions is
appended to the `{entity-set}` after an optional type-cast segment and
prior to appending `/$entity`. If the response is not a subset of a
single entity set, the `{select-list}` is instead appended to the
`{type-name}` of the returned entity.

Regardless of how contained structural properties are represented in the
request URL (as paths or as select options) they are represented in the
context URL using path syntax, as defined in OData 4.0.

The shortcut `*` represents the list of all structural properties.
Properties defined on types derived from the type of the entity set (or
type specified in the type-cast segment if specified) are prefixed with
the qualified name of the derived type as defined in
[**\[OData-ABNF\]**](#ABNF). Note that expanded properties are
automatically included in the response.

The list also contains explicitly selected or expanded instance
annotations. It is possible to select or expand only instance
annotations, in which case only those selected or expanded annotations
appear in the result. Note that annotations specified only in the
[`include-annotations`](#sec_Preferenceincludeannotationsodatainc)
preference do not appear in the context URL and do not affect the
selected/expanded properties.

Operations in the context URL are represented using the namespace- or
alias-qualified name. Function names suffixed with parentheses represent
a specific overload, while function names without parentheses represent
all overloads of the function.

OData 4.01 responses MAY use the shortcut pattern `{namespace}.*` to
represent the list of all bound actions or functions available for the
returned entity, see system query option
[`$select`](#sec_SystemQueryOptionselect).

Example 19: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Customers(1)?\$select=Name,Rating]{style="color:black"}

[http://host/service/\$metadata#Customers(Name,Rating)/\$entity]{style="color:black"}
:::

## []{#sec_CollectionofExpandedEntities}[10.9]{#_Toc477876622} [Collection of Expanded Entities](#sec_CollectionofExpandedEntities)

Context URL template:

`{context-url}#{entity-set}{/type-name}{select-list}`

`{context-url}#Collection({type-name}){select-list}`

For a 4.01 response, if a navigation property is explicitly expanded,
then in addition to any non-suffixed names of any selected properties,
navigation properties, functions or actions, the comma-separated list of
properties MUST include the name of the expanded property, suffixed with
the parenthesized comma-separated list of any properties of the expanded
navigation property that are selected or expanded. If the expanded
navigation property does not contain a nested `$select `or` $expand`,
then the expanded property is suffixed with empty parentheses. If the
expansion is recursive for nested children, a plus sign (`+`) is infixed
between the navigation property name and the opening parenthesis.

For a 4.0 response, the expanded navigation property suffixed with
parentheses is omitted from the select-list if it does not contain a
nested `$select `or` $expand`, but MUST still be present, without a
suffix, if it is explicitly selected.

If the context URL includes only expanded navigation properties (i.e.,
only navigation properties suffixed with parentheses), then all
structural properties are implicitly selected (same as if there were no
properties listed in the select-list).

Navigation properties with expanded references are not represented in
the context URL.

Example 20: resource URL and corresponding context URL - select and
expand

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Customers?\$select=Name&\$expand=Address/Country]{style="color:black"}

[http://host/service/\$metadata#Customers(Name,Address/Country())]{style="color:black"}
:::

Example 21: resource URL and corresponding context URL -- expand `$ref`

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Customers?\$expand=Orders/\$ref]{style="color:black"}

[http://host/service/\$metadata#Customers]{style="color:black"}
:::

Example 22: resource URL and corresponding context URL -- expand with
`$levels`

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Employees/Sales.Manager?\$select=DirectReports\
       
        &\$expand=DirectReports(\$select=FirstName,LastName;\$levels=4)]{style="color:black"}

[http://host/service/\$metadata\
                #Employees/Sales.Manager(DirectReports,\
          
                              DirectReports+(FirstName,LastName))]{style="color:black"}
:::

## []{#sec_ExpandedEntity}[10.10]{#_Toc477876623} [Expanded Entity](#sec_ExpandedEntity)

Context URL template:

`{context-url}#{entity-set}{/type-name}{select-list}/$entity`

`{context-url}#{singleton}{select-list}`

`{context-url}#{type-name}{select-list}`

For a 4.01 response, if a navigation property is explicitly expanded,
then in addition to the non-suffixed names of any selected properties,
navigation properties, functions or actions, the comma-separated list of
properties MUST include the name of the expanded property, suffixed with
the parenthesized comma-separated list of any properties of the expanded
navigation property that are selected or expanded. If the expanded
navigation property does not contain a nested `$select `or` $expand`,
then the expanded property is suffixed with empty parentheses. If the
expansion is recursive for nested children, a plus sign (`+`) is infixed
between the navigation property name and the opening parenthesis.

For a 4.0 response, the expanded navigation property suffixed with
parentheses is omitted from the select-list if it does not contain a
nested `$select`[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}or `$expand`, but
MUST still be present, without a suffix, if it is explicitly selected.

If the context URL includes only expanded navigation properties (i.e.,
only navigation properties suffixed with parentheses), then all
structural properties are implicitly selected (same as if there were no
properties listed in the select-list).

Navigation properties with expanded references are not represented in
the context URL.

Example 23: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Employees(1)/Sales.Manager?\
               
   \$expand=DirectReports(\$select=FirstName,LastName;\$levels=4)]{style="color:black"}

[http://host/service/\$metadata\
      
#Employees/Sales.Manager(DirectReports+(FirstName,LastName))/\$entity]{style="color:black"}
:::

## []{#sec_CollectionofEntityReferences}[10.11]{#_Toc477876624} [Collection of Entity References](#sec_CollectionofEntityReferences)

Context URL template:

`{context-url}#Collection($ref)`

If a response is a collection of entity references, the context URL does
not contain the type of the referenced entities.

Example 24: resource URL and corresponding context URL for a collection
of entity references

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[http://host/service/Customers(\'ALFKI\')/Orders/\$ref]{style="color:black"}]{.Datatype}

[[http://host/service/\$metadata#Collection(\$ref)]{style="color:black"}]{.Datatype}
:::

## []{#sec_EntityReference}[10.12]{#_Toc477876625} [Entity Reference](#sec_EntityReference)

Context URL template:

`{context-url}#$ref`

If a response is a single entity reference, `$ref` is the context URL
fragment.

Example 25: resource URL and corresponding context URL for a single
entity reference

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[http://host/service/Orders(10643)/Customer/\$ref]{style="color:black"}]{.Datatype}

[[http://host/service/\$metadata#\$ref]{style="color:black"}]{.Datatype}
:::

## []{#sec_PropertyValue}[10.13]{#_Toc477876626} [Property Value](#sec_PropertyValue)

Context URL templates:

`{context-url}#{entity}/{property-path}{select-list}`

`{context-url}#{type-name}{select-list}`

If a response represents an [individual
property](#sec_RequestingIndividualProperties)[ ]{.MsoHyperlink}of an
entity with a canonical URL, the context URL specifies the canonical URL
of the entity and the path to the structural property of that entity.
The path MUST include cast segments for properties defined on types
derived from the expected type of the previous segment.

If the property value does not contain explicitly or implicitly selected
navigation properties or operations, OData 4.01 responses MAY use the
less specific second template.

Example 26: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Customers(1)/Addresses]{style="color:black"}

[[http://host/service/\$metadata#Customers(1)/Addresses]{style="color:black"}]{.Datatype}
:::

## []{#sec_CollectionofComplexorPrimitiveTypes}[10.14]{#_Toc477876627} [Collection of Complex or Primitive Types](#sec_CollectionofComplexorPrimitiveTypes)

Context URL template:

`{context-url}#Collection({type-name}){select-list}`

If a response is a collection of complex types or primitive types that
do not represent an individual property of an entity with a canonical
URL, the context URL specifies the fully qualified type of the
collection.

Example 27: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/TopFiveHobbies()]{style="color:black"}

[[http://host/service/\$metadata#Collection(Edm.String)]{style="color:black"}]{.Datatype}
:::

## []{#sec_ComplexorPrimitiveType}[10.15]{#_Toc477876628} [Complex or Primitive Type](#sec_ComplexorPrimitiveType)

Context URL template:

`{context-url}#{type-name}{select-list}`

If a response is a complex type or primitive type that does not
represent an individual property of an entity with a canonical URL, the
context URL specifies the fully qualified type of the result.

Example 28: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[http://host/service/MostPopularName()]{style="color:black"}]{.Datatype}

[[http://host/service/\$metadata#Edm.String]{style="color:black"}]{.Datatype}
:::

## []{#sec_OperationResult}[10.16]{#_Toc477876629} [Operation Result](#sec_OperationResult)

Context URL templates:

`{context-url}#{entity-set}{/type-name}{select-list}`

`{context-url}#{entity-set}{/type-name}{select-list}/$entity`

{context-url}#{entity}/{property-path}`{select-list}`

`{context-url}#Collection({type-name}){select-list}`

`{context-url}#{type-name}{select-list}`

If the response from an action or function is a collection of entities
or a single entity that is a member of an entity set, the context URL
identifies the entity set. If the response from an action or function is
a property of a single entity, the context URL identifies the entity and
property. Otherwise, the context URL identifies the type returned by the
operation. The context URL will correspond to one of the former
examples.

Example 29: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/TopFiveCustomers()]{style="color:black"}

[http://host/service/\$metadata#Customers]{style="color:black"}
:::

## []{#sec_DeltaPayloadResponse}[10.17]{#_Toc477876630} [Delta Payload Response](#sec_DeltaPayloadResponse)

Context URL template:

`{context-url}#{entity-set}{/type-name}{select-list}/$delta`

`{context-url}#{entity}{select-list}/$delta`

`{context-url}#{entity}/{property-path}{select-list}/$delta`

`#$delta`

The context URL of a [delta response](#sec_RequestingChanges)[
]{.MsoHyperlink}is the context URL of the response to the defining
query, followed by `/$delta`. This includes singletons, single-valued
navigation properties, and collection-valued navigation properties.

If the entities are contained, then `{entity-set}` is the top-level
entity set followed by the path to the containment navigation property
of the containing entity.

Example 30: resource URL and corresponding context URL

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[http://host/service/Customers`?$deltatoken=1234`]{style="color:black"}

[[http://host/service/\$metadata#Customers/\$delta]{style="color:black"}]{.Datatype}
:::

[The context URL of an update request body for a collection of entities
is simply the fragment]{#_Toc370126063} `#$delta`.

## []{#sec_IteminaDeltaPayloadResponse}[10.18]{#_Toc477876631} [Item in a Delta Payload Response](#sec_IteminaDeltaPayloadResponse)

Context URL templates:

`{context-url}#{entity-set}/$deletedEntity`

`{context-url}#{entity-set}/$link`

`{context-url}#{entity-set}/$deletedLink `

In addition to new or changed entities which have the canonical context
URL for an entity, a delta response can contain deleted entities, new
links, and deleted links. They are identified by the corresponding
context URL fragment. `{entity-set}` corresponds to the set of the
deleted entity, or source entity for an added or deleted link.

## []{#sec_allResponse}[10.19]{#_Toc477876632} [\$all Response](#sec_allResponse)

Context URL template:

`{context-url}#Collection(Edm.EntityType)`

Responses to requests to the virtual collection `$all` (see
[**\[OData‑URL\]**](#ODataURLRef)) use the built-in abstract entity
type. Each single entity in such a response has its individual context
URL that identifies the entity set or singleton.

## []{#sec_crossjoinResponse}[10.20]{#_Toc477876633} [\$crossjoin Response](#sec_crossjoinResponse)

Context URL template:

`{context-url}#Collection(Edm.ComplexType)`

Responses to requests to the virtual collections `$crossjoin(...)` (see
[**\[OData‑URL\]**](#ODataURLRef)) use the built-in abstract complex
type. Single instances in these responses do not have a context URL.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_DataServiceRequests}[]{#_Data_Service_Requests_1}11[    ]{style="font:7.0pt \"Times New Roman\""}[Data Service Requests](#sec_DataServiceRequests)
:::

This chapter describes the semantics of the HTTP verbs `GET`, `POST`,
`PATCH`, `PUT`, and `DELETE` for OData resources.

`GET` requests:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.1
[Metadata Requests](#sec_MetadataRequests) and subsections

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.2
[Requesting Data](#sec_RequestingData) and subsections

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.3
[Requesting Changes](#sec_RequestingChanges) and subsections

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.5.4
[Functions](#sec_Functions) and subsections

`POST` requests:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.4.2
[Create an Entity](#sec_CreateanEntity) and subsections

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.4.7.1
[Create a Media Entity](#sec_CreateaMediaEntity)

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.11]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
[Positional Inserts](#sec_PositionalInserts)

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.5.5
[Actions](#sec_Actions) and subsections

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.7
[Batch Requests](#sec_BatchRequests) and subsections

`PATCH` and `PUT` requests:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.4.3
[Update an Entity](#sec_UpdateanEntity) and subsections

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.4]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
[Upsert an Entity](#sec_UpsertanEntity)

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.6]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
[Modifying Relationships between
Entities](#sec_ModifyingRelationshipsbetweenEntitie) and subsections

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.7.2]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
[Update a Media Entity Stream](#sec_UpdateaMediaEntityStream)

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.8.1]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
[Update Stream Values](#sec_UpdateStreamValues)

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.9.1]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[Update a
Primitive Property](#sec_UpdateaPrimitiveProperty)

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.9.3]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[Update a Complex
Property](#sec_UpdateaComplexProperty)

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.9.4]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[Update a
Collection Property](#sec_UpdateaCollectionProperty)

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.10]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
[Managing Members of an Ordered
Collection](#sec_ManagingMembersofanOrderedCollection)

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}11.4.12
[Update a Collection of Entities](#sec_UpdateaCollectionofEntities)

[[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[11.4.13]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
[Update Members of a Collection](#sec_UpdateMembersofaCollection)

`DELETE` requests:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.4.5
[Delete an Entity](#sec_DeleteanEntity)

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.4.7.3
[Delete a Media Entity](#sec_DeleteaMediaEntity)

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}0
[Delete Stream Values](#sec_DeleteStreamValues)

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.4.9.2
[Set a Value to Null](#sec_SetaValuetoNull)

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}11.4.14
[Delete Members of a Collection](#sec_DeleteMembersofaCollection)

## []{#sec_MetadataRequests}[]{#_Ref484615108}[]{#_Ref484615099}[11.1]{#_Toc477876635} [Metadata Requests](#sec_MetadataRequests)

An OData service is a self-describing service that exposes metadata
defining the entity sets, singletons, relationships, entity types, and
operations.

### []{#sec_ServiceDocumentRequest}[]{#_Service_Document_Request}11.1.1 [Service Document Request](#sec_ServiceDocumentRequest)

Service documents enable simple hypermedia-driven clients to enumerate
and explore the resources offered by the data service.

OData services MUST support returning a service document from the root
URL of the service (the *service root*).

The format of the service document is dependent upon the format
selected.

### []{#sec_MetadataDocumentRequest}[]{#_Metadata_Document_Request}11.1.2 [Metadata Document Request](#sec_MetadataDocumentRequest)

An OData *metadata document* is a representation of the [data
model](#sec_DataModel)[ ]{.MsoHyperlink}that describes the data and
operations exposed by an OData service.

[**\[OData-CSDLJSON\]**](#ODataCSDLJSONRef) describes a JSON
representation for OData metadata documents and provides a JSON schema
to validate their contents. The media type of the JSON representation of
an OData metadata document is `application/json`.

[**\[OData-CSDLXML\]**](#ODataCSDLXMLRef) describes an XML
representation for OData metadata documents and provides an XML schema
to validate their contents. The media type of the XML representation of
an OData metadata document is `application/xml`.

OData services can expose a metadata document that describes the data
model exposed by the service. The *metadata document URL* MUST be the
root URL of the service with `$metadata` appended. To retrieve this
document the client issues a `GET` request to the metadata document URL.

If a request for metadata does not specify a format preference (via
[`Accept` header](#sec_HeaderAccept) or
[`$format`](#sec_SystemQueryOptionformat)) then the XML representation
MUST be returned.

## []{#sec_RequestingData}[]{#_Ref484615549}[]{#_10.2._Requesting_Data}[]{#_Requesting_Data}[]{#_Requesting_Data_1}11.2 [Requesting Data](#sec_RequestingData)

OData services support requests for data via HTTP `GET` requests.

The path of the URL specifies the target of the request (for example;
the collection of entities, entity, navigation property, structural
property, or operation). Additional query operators, such as filter,
sort, page, and projection operations are specified through query
options.

This section describes the types of data requests defined by OData. For
complete details on the syntax for building requests, see
[**\[OData‑URL\]**](#ODataURLRef).

OData services are hypermedia driven services that return URLs to the
client. If a client subsequently requests the advertised resource and
the URL has expired, then the service SHOULD respond with
[`410 Gone`](#sec_ResponseCode410Gone). If this is not feasible, the
service MUST respond with
[`404 Not Found`](#sec_ResponseCode404NotFound).

The format of the returned data is dependent upon the request and the
format specified by the client, either in the [`Accept`
header](#sec_HeaderAccept) or using the
[`$format`](#sec_SystemQueryOptionformat)[ ]{.Hyperlink1}query option.
If the client specifies neither an [`Accept` header](#sec_HeaderAccept)
nor the [`$format`](#sec_SystemQueryOptionformat)[ ]{.Hyperlink1}query
option, the service is allowed to return the response in any
format.[]{#_Ref356918808}

### []{#sec_SystemQueryOptions}[]{#_Evaluating_System_Query}11.2.1 [System Query Options](#sec_SystemQueryOptions)

[OData defines a number of system query options that allow refining the
request. System query options are prefixed with the dollar
(]{style="color:black;background:white"}`$`[) character, which is
optional in OData 4.01. ]{style="color:black;background:white"}4.01
services MUST support case-insensitive system query option names
specified with or without the `$`[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}prefix.\
Clients that want to work with 4.0 services MUST use lower case names
and specify the `$` prefix.

[The result of the request MUST be as if the system query options were
evaluated in the following order.]{style="color:black;background:white"}

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:
Symbol;color:black"}[[\$schemaversion]{style="font-family:\"Courier New\";background:white"}](#sec_SystemQueryOptionschemaversion)[
MUST be evaluated first, because it may influence any further
processing.]{style="color:black;background:white"}

[Prior to applying any
]{style="color:black;background:white"}[[server-driven
paging]{style="background:white"}](#sec_ServerDrivenPaging)[:]{style="color:black;background:white"}

-   `$appl`[y]{style="font-family:
         \"Courier New\""} -- defined in
    [**\[OData-Aggregation\]**](#ODataAggregationRef)
-   [[\$compute]{style="font-family:\"Courier New\""}](#sec_SystemQueryOptioncompute)
-   [[\$search]{style="font-family:\"Courier New\""}](#sec_SystemQueryOptionsearch)
-   [[\$filter]{style="font-family:\"Courier New\""}](#sec_SystemQueryOptionfilter)
-   [[\$count]{style="font-family:\"Courier New\""}](#sec_SystemQueryOptioncount)
-   [[\$orderby]{style="font-family:\"Courier New\""}](#sec_SystemQueryOptionorderby)
-   [[\$skip]{style="font-family:\"Courier New\""}](#sec_SystemQueryOptionskip)
-   [[\$top]{style="font-family:\"Courier New\""}](#sec_SystemQueryOptiontop)

[After applying any
]{style="color:black;background:white"}[[server-driven
paging]{style="background:white"}](#sec_ServerDrivenPaging)[:]{style="color:black;background:white"}

-   [[`$expand`](#sec_SystemQueryOptionexpand)]{style="color:windowtext"}
-   [[\$select]{style="font-family:\"Courier New\""}](#sec_SystemQueryOptionselect)
-   [[\$format]{style="font-family:\"Courier New\""}](#sec_SystemQueryOptionformat)

### []{#sec_RequestingIndividualEntities}[11.2.2]{#_Toc477876640} [Requesting Individual Entities](#sec_RequestingIndividualEntities)

To retrieve an individual entity, the client makes a `GET` request to a
URL that identifies the entity, e.g. its read URL.

The read URL can be obtained from a response payload containing that
instance, for example as a `readLink` or `editLink` in an
[**\[OData-JSON\]**](#ODataJSONRef)[ payload]{.Hyperlink1}. In addition,
services MAY support conventions for constructing a read URL using the
entity\'s key value(s), as described in
[**\[OData‑URL\]**](#ODataURLRef).

The set of structural or navigation properties to return may be
specified through [`$select`](#sec_SystemQueryOptionselect) or
[`$expand`](#sec_SystemQueryOptionexpand)[` `]{.MsoHyperlink}system
query options.

Clients MUST be prepared to receive additional properties in an entity
or complex type instance that are not advertised in metadata, even for
types not marked as open.

Properties that are not available, for example due to permissions, are
not returned. In this case, the
[`Core.Permissions`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#Permissions)
annotation, defined in [**\[OData-VocCore\]**](#VocCore) MUST be
returned for the property with a value of
`None`[[.]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

If no entity exists with the specified request URL, the service responds
with [`404 Not Found`](#sec_ResponseCode404NotFound).

### []{#sec_RequestingtheMediaStreamofaMediaEnti}[]{#_Requesting_Individual_Properties}[]{#_Requesting_the_Media}11.2.3 [Requesting the Media Stream of a Media Entity using `$value`](#sec_RequestingtheMediaStreamofaMediaEnti)

A *media entity* is an entity that represents an out-of-band stream,
such as a photograph.

Use a media entity if the out-of-band stream is the main topic of
interest and the media entity is just structured additional information
attached to the stream. Use a normal entity with one or more [stream
properties](#sec_ManagingStreamProperties) if the structured data of the
entity is the main topic of interest and the stream data is just
additional information attached to the structured data.

To address the media stream represented by a media entity, clients
append `/$value` to the resource path of the media entity URL. Services
may redirect from this canonical URL to the source URL of the media
stream.

Appending `/$value` to an entity that is not a media entity returns [400
Bad Request[.]{.MsoHyperlink}]{style="font-family:\"Courier New\""}

Attempting to retrieve the media stream from a single-valued navigation
property referencing a media entity whose value is null returns
[`404 Not Found`](#sec_ResponseCode404NotFound)[[.]{style="color:windowtext"}]{.MsoHyperlink}

### []{#sec_RequestingIndividualProperties}[11.2.4]{#_Toc477876642} [Requesting Individual Properties](#sec_RequestingIndividualProperties)

To retrieve an individual property, the client issues a `GET` request to
the property URL. The property URL is the entity read URL with
[\"/\"]{style="font-family:\"Calibri\",sans-serif"} and the property
name appended.

For complex typed properties, the path can be further extended with the
name of an individual property of the complex type.

See [**\[OData‑URL\]**](#ODataURLRef) for details.

If the property is single-valued and has the `null` value, the service
responds with [`204 No Content`](#sec_ResponseCode204NoContent).

If the property is not available, for example due to permissions, the
service responds with [`404 Not Found`](#sec_ResponseCode404NotFound).

Example 31:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products(1)/Name ]{style="color:black"}
:::

#### []{#sec_RequestingaPropertysRawValueusingval}[]{#_Requesting_a_Property's}11.2.4.1 [Requesting a Property\'s Raw Value using `$value`](#sec_RequestingaPropertysRawValueusingval)

To retrieve the raw value of a primitive type property, the client sends
a `GET` request to the property value URL. See the
[**\[OData‑URL\]**](#ODataURLRef) document for details.

The `Content-Type` of the response is determined using the `Accept`
header and the [`$format`](#sec_SystemQueryOptionformat) system query
option.

[The default format for
]{style="color:black;background:white"}`Edm.Binary`[ is the format
specified by the ]{style="color:
black;background:white"}[`Core.MediaType`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#MediaType)[
annotation of this property (]{style="color:black;background:white"}see
[**\[OData-VocCore\]**](#VocCore)) [if this annotation is present. If
not annotated, the format cannot be predicted by the
client.]{style="color:black;
background:white"}

The default format for `Edm.Geo` types is `text/plain` using the WKT
(well-known text) format, see rules `fullCollectionLiteral`,
`fullLineStringLiteral`, `fullMultiPointLiteral`,
`fullMultiLineStringLiteral`, `fullMultiPolygonLiteral`,
`fullPointLiteral`, and `fullPolygonLiteral` in
[**\[OData-ABNF\]**](#ABNF).

The default format for single primitive values except `Edm.Binary` and
the `Edm.Geo` types is `text/plain`. Responses for properties of type
`Edm.String` can use the `charset` format parameter to specify the
character set used for representing the string value. Responses for the
other primitive types follow the rules `booleanValue`, `byteValue`,
`dateValue`, `dateTimeOffsetValue`, `decimalValue`, `doubleValue`,
`durationValue`, `enumValue`, `guidValue`, `int16Value`, `int32Value`,
`int64Value`, `sbyteValue`, `singleValue`, and `timeOfDayValue` in
[**\[OData-ABNF\]**](#ABNF).

A `$value` request for a property that is `null` results in a
[`204 No Content`](#sec_ResponseCode204NoContent) response.

If the property is not available, for example due to permissions, the
service responds with [`404 Not Found`](#sec_ResponseCode404NotFound).

[Example]{#_Ref356920699} 32:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products(1)/Name/\$value ]{style="color:black"}
:::

### []{#sec_SpecifyingPropertiestoReturn}[]{#_Specifying_Properties_to}11.2.5 [Specifying Properties to Return](#sec_SpecifyingPropertiestoReturn)

The [`$select`](#sec_SystemQueryOptionselect) and
[`$expand`](#sec_SystemQueryOptionexpand) system query options enable
the client to specify the set of structural properties and navigation
properties to include in a response. The service MAY include additional
properties not specified in [`$select`](#sec_SystemQueryOptionselect)
and [`$expand`](#sec_SystemQueryOptionexpand), including properties not
defined in [the metadata
document](#sec_MetadataDocumentRequest)[.]{.MsoHyperlink}

#### []{#sec_SystemQueryOptionselect}[]{#_System_Query_Option_3}11.2.5.1 [System Query Option `$select`](#sec_SystemQueryOptionselect)

The `$select` system query option requests that the service return only
the properties, dynamic properties, [actions](#sec_Actions) and
[functions](#sec_Functions)[ ]{.MsoHyperlink}explicitly requested by the
client. The service returns the specified content, if available, along
with any available [expanded](#sec_SystemQueryOptionexpand) navigation
or stream properties, and MAY return additional information.

The value of the `$select` query option is a comma-separated list of
properties, qualified action names, qualified function names, the star
operator (`*`), or the star operator prefixed with the namespace or
alias of the schema in order to specify all operations defined in the
schema. Only aliases defined in the metadata document of the service can
be used in URLs.

Example 33: request only the `Rating` and `ReleaseDate` for the matching
Products

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Products?\$select=Rating,ReleaseDate]{style="color:black"}
:::

It is also possible to request all structural properties, including any
dynamic properties, using the star operator. The star operator SHOULD
NOT introduce navigation properties, actions or functions not otherwise
requested.

Example 34:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$select=\*]{style="color:black"}
:::

Properties of related entities can be specified by including the
`$select` query option within the `$expand`.

Example 35:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Products?\$expand=Category(\$select=Name)]{style="color:black"}
:::

The properties specified in `$select` are represented in addition to any
expanded navigation or stream properties. If a navigation property is
specified in `$select,` then the corresponding navigation link is
represented in the response. If the navigation property also appears in
an [`$expand`](#sec_SystemQueryOptionexpand) query option, then it is
additionally represented as inline content.

Example 36: for each category, return the `CategoryName` and the
`Products` navigation link

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Categories?\$select=CategoryName,Products]{style="color:black"}
:::

It is also possible to request all actions or functions available for
each returned entity.

Example 37:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Products?\$select=DemoService.\*]{style="color:black"}
:::

[]{#_System_Query_Option_4}Query options can be applied to a selected
property by appending a semicolon-separated list of query options,
enclosed in parentheses, to the property. Allowed system query options
are [`$select`](#sec_SystemQueryOptionselect) and
[`$compute`](#sec_SystemQueryOptioncompute) for complex properties, plus
[`$filter`](#sec_SystemQueryOptionfilter),
[`$search`](#sec_SystemQueryOptionsearch),
[`$count`](#sec_SystemQueryOptioncount),
[`$orderby`](#sec_SystemQueryOptionorderby),
[`$skip`](#sec_SystemQueryOptionskip), and
[`$top`](#sec_SystemQueryOptiontop) for collection-valued properties. A
property MUST NOT have select options specified in more than one place
in a request and MUST NOT have both select options and expand options
specified.

If the
`$`[[select]{style="font-family:\"Arial\",sans-serif"}]{.Datatype} query
option is not specified, [[the service returns the full set of
properties or a default set of properties. The default set of properties
MUST include all key
properties[.]{.apple-converted-space}]{style="color:black;background:white"}
[[Services may change the default set of properties returned. This
includes returning new properties by default and omitting properties
previously returned by
default.]{style="color:black;background:white"}]{.apple-converted-space}]{#_Ref358202018}
[[Clients that rely on specific properties in the response MUST use
]{style="color:black;background:white"}]{.apple-converted-space}`$select`[[
with the required properties or with
]{style="color:black;background:white"}]{.apple-converted-space}`*`[[.]{style="color:black;background:white"}]{.apple-converted-space}

[[If t]{style="font-size:
9.0pt;color:black;background:white"}]{.apple-converted-space}[he service
returns less than the full set of properties, either because the client
specified a select or because the service returned a subset of
properties in the absence of a select, the ]{style="color:black;
background:white"}[[context
URL]{style="background:white"}](#sec_ContextURL)[ MUST reflect the set
of selected properties and projected
]{style="color:black;background:white"}[[expanded]{style="background:white"}](#sec_SystemQueryOptionexpand)[
navigation properties.]{style="color:black;
background:white"}

#### []{#sec_SystemQueryOptionexpand}[]{#_System_Query_Option_6}11.2.5.2 [System Query Option `$expand`](#sec_SystemQueryOptionexpand)

The `$expand` system query option indicates the related entities and
stream values that MUST be represented inline. The service MUST return
the specified content, and MAY choose to return additional information.

The value of the `$expand` query option is a comma-separated list of
navigation property names, stream property names, or `$value` indicating
the stream content of a media-entity.

For navigation properties, the navigation property name is optionally
followed by a `/$ref` path segment or a `/$count` path segment, and
optionally a parenthesized set of [expand options](#sec_ExpandOptions)
(for filtering, sorting, selecting, paging, or expanding the related
entities).

For a full description of the syntax used when building requests, see
[**\[OData‑URL\]**](#ODataURLRef).

Example 38: for each customer entity within the Customers entity set the
value of all related Orders will be represented inline

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service.svc/Customers?\$expand=Orders]{style="color:black"}
:::

Example 39: for each customer entity within the Customers entity set the
references to the related Orders will be represented inline

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service.svc/Customers?\$expand=Orders/\$ref]{style="color:black"}
:::

[]{#_Ref356919051}[]{#_Expand_Options_1}Example 40: for each customer
entity within the Customers entity set the media stream representing the
customer photo will be represented inline

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service.svc/Customers?\$expand=Photo]{style="color:black"}
:::

##### []{#sec_ExpandOptions}[11.2.5.2.1]{#_Toc477876647} [Expand Options](#sec_ExpandOptions)

The set of expanded entities can be further refined through the
application of expand options, expressed as a semicolon-separated list
of system query options, enclosed in parentheses, see
[**\[OData‑URL\]**](#ODataURLRef).

Allowed system query options are
[`$filter`](#sec_SystemQueryOptionfilter),
[`$select`](#sec_SystemQueryOptionselect),
[`$orderby`](#sec_SystemQueryOptionorderby),
[`$skip`](#sec_SystemQueryOptionskip),
[`$top`](#sec_SystemQueryOptiontop),
[`$count`](#sec_SystemQueryOptioncount),
[`$search`](#sec_SystemQueryOptionsearch),
[`$expand`](#sec_SystemQueryOptionexpand)[[,]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
[`$compute`](#sec_SystemQueryOptioncompute)[[,]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
and [`$levels`](#sec_ExpandOptionlevels).

Example 41: for each customer entity within the `Customers` entity set,
the value of those related `Orders` whose `Amount` is greater than 100
will be represented inline

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
]{style="color:black"}[http://host/service.svc/Customers?\$expand=Orders(\$filter=Amount
gt 100)]{lang="FR" style="color:black"}
:::

Example 42: for each order within the `Orders` entity set, the following
will be represented inline:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}The
`Items` related to the `Orders` identified by the resource path section
of the URL and the products related to each order item.

The `Customer` related to each order returned.

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service.svc/Orders?\$expand=Items(\$expand=Product),Customer]{style="color:black"}
:::

Example 43: for each customer entity in the Customers entity set, the
value of all related InHouseStaff will be represented inline if the
entity is of type VipCustomer or a subtype of that. For entities that
are not of type `VipCustomer`, or any of its subtypes, that entity may
be returned with no inline representation for the expanded navigation
property` InHouseStaff `[[(the service can always send more than
requested)]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service.svc/Customers?\$expand=SampleModel.VipCustomer/InHouseStaff]{style="color:black"}
:::

###### []{#sec_ExpandOptionlevels}[]{#_Expand_Option_$levels}11.2.5.2.1.1[   ]{style="font:7.0pt \"Times New Roman\""}[Expand Option `$levels`](#sec_ExpandOptionlevels)

The `$levels`[ ]{style="font-family:\"Calibri\",sans-serif"}expand
option can be used to specify the number of levels of recursion for a
hierarchy in which the related entity type is the same as, or can be
cast to, the source entity type. A `$levels` option with a value of 1
specifies a single expand with no recursion. The same expand options are
applied at each level of the hierarchy.

Services MAY support the symbolic value `max` in addition to numeric
values. In that case they MUST solve circular dependencies by injecting
an entity reference somewhere in the circular dependency.

Clients using `$levels=max` MUST be prepared to handle entity references
in cases were a circular reference would occur otherwise.

4.01 services that support `max` SHOULD do so in a case-insensitive
manner. Clients that want to work with 4.0 services MUST use lower case.

Example 44: return each employee from the Employees entity set and, for
each employee that is a manager, return all direct reports, recursively
to four levels

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Employees?\$expand=Model.Manager/DirectReports(\$levels=4)]{style="color:black"}
:::

#### []{#sec_SystemQueryOptioncompute}[]{#_System_Query_Option_2}11.2.5.3 [System Query Option `$compute`](#sec_SystemQueryOptioncompute)

The `$compute` system query option allows clients to define computed
properties that can be used in a
[`$select`](#sec_SystemQueryOptionselect) or within a
[`$filter`](#sec_SystemQueryOptionfilter) or
[`$orderby`](#sec_SystemQueryOptionorderby) expression.

Computed properties SHOULD be included as dynamic properties in the
result and MUST be included if `$select` is specified with the computed
property name, or star (`*`).

Example 45: compute total price for order items (line breaks only for
readability)

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET [http://host/service/Customers?\
   \$filter=Orders/any(o:o/TotalPrice gt 100)\
   &\$expand=Orders(\$compute=Price mult Qty as
TotalPrice]{style="background:#D9D9D9"}]{style="color:black"}

[                 
;[\$select=Name,Price,Qty,TotalPrice)]{style="background:#D9D9D9"}]{style="color:black"}
:::

### []{#sec_QueryingCollections}[11.2.6]{#_Toc477876650} [Querying Collections](#sec_QueryingCollections)

OData services support querying collections of entities, complex type
instances, and primitive values.

The target collection is specified through a URL, and query operations
such as filter, sort, paging, and projection are specified as [*system
query options*](#sec_SystemQueryOptions) optionally prefixed with a
dollar (`$`) character. 4.01 Services MUST support case-insensitive
system query option names specified with or without the `$ `prefix.
Clients that want to work with 4.0 services MUST use lower case names
and specify the `$` prefix.

The same system query option MUST NOT be specified more than once for
any resource.

An OData service MAY support some or all of the system query options
defined. If a data service does not support a system query option, it
MUST fail any request that contains the unsupported option and SHOULD
return [[[501 Not
Implemented]{style="color:windowtext"}]{.Datatype}](#sec_ResponseCode501NotImplemented).

#### []{#sec_SystemQueryOptionfilter}[]{#_The_$filter_System}11.2.6.1 [System Query Option `$filter`](#sec_SystemQueryOptionfilter)

The `$filter` system query option restricts the set of items returned.

Example 46: return all Products whose `Price` is less than
[\$10.00]{style="font-family:\"Calibri\",sans-serif"}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$filter=Price lt
10.00]{style="color:black"}
:::

The [`$count`](#sec_SystemQueryOptioncount) segment may be used within a
`$filter `expression to limit the items returned based on the exact
count of related entities or items within a collection-valued property.

Example 47: return all Categories with less than 10 products

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Categories?\$filter=Products/\$count lt
10]{style="color:black"}
:::

The value of the `$filter` option is a Boolean expression as defined in
[**\[OData-ABNF\]**](#ABNF).

##### []{#sec_BuiltinFilterOperations}[]{#_Built-in_Filter_Operations}11.2.6.1.1 [Built-in Filter Operations](#sec_BuiltinFilterOperations)

OData supports a set of built-in filter operations, as described in this
section.

4.01 services MUST support case-insensitive operation names. Clients
that want to work with 4.0 services MUST use lower case operation names.

For a full description of the syntax used when building requests, see
[**\[OData‑URL\]**](#ODataURLRef).

  **Operator**                                 **[Description]{style="color:   **[Example]{style="color:
                                                  black"}**                       black"}**
  -------------------------------------------- ------------------------------- -----------------------------------------------------------------------------------------
  **Comparison Operators**                                                     
  [eq]{style="font-family:\"Courier New\""}    Equal                           [Address/City eq \'Redmond\']{style="font-size:9.0pt;font-family:\"Courier New\""}
  [ne]{style="font-family:\"Courier New\""}    Not equal                       [Address/City ne \'London\']{style="font-size:9.0pt;font-family:\"Courier New\""}
  [gt]{style="font-family:\"Courier New\""}    Greater than                    [Price gt 20]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [ge]{style="font-family:\"Courier New\""}    Greater than or equal           [Price ge 10]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [lt]{style="font-family:\"Courier New\""}    Less than                       [Price lt 20]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [le]{style="font-family:\"Courier New\""}    Less than or equal              [Price le 100]{style="font-size:9.0pt;font-family:\"Courier New\""}
  `has`                                        Has flags                       [Style has Sales.Color\'Yellow\']{style="font-size:9.0pt;
                                                                                 font-family:\"Courier New\""}
  `in`                                         Is a member of                  [Address/City in (\'Redmond\', \'London\')]{style="font-size:9.0pt;
                                                                                 font-family:\"Courier New\""}
  **Logical Operators**                                                        
  [and]{style="font-family:\"Courier New\""}   Logical and                     [Price le 200 and Price gt 3.5]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [or]{style="font-family:\"Courier New\""}    Logical or                      [Price le 3.5 or Price gt 200]{style="font-size:9.0pt;font-family:\"Courier New\""}
  `not`                                        Logical negation                [not endswith(Description,\'milk\')]{style="font-size:9.0pt;
                                                                                 font-family:\"Courier New\""}
  **Arithmetic Operators**                                                     
  [add]{style="font-family:\"Courier New\""}   Addition                        [Price add 5 gt 10]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [sub]{style="font-family:\"Courier New\""}   Subtraction                     [Price sub 5 gt 10]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [mul]{style="font-family:\"Courier New\""}   Multiplication                  [Price mul 2 gt 2000]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [div]{style="font-family:\"Courier New\""}   Division                        [Price div 2 gt 4]{style="font-size:9.0pt;font-family:\"Courier New\""}
  `divby`                                      Decimal Division                [Price divby 2 gt 3.5]{style="font-size:9.0pt;
                                                                                 font-family:\"Courier New\""}
  `mod`                                        Modulo                          [Price mod 2 eq 0]{style="font-size:9.0pt;
                                                                                 font-family:\"Courier New\""}
  **Grouping Operators**                                                       
  `( )`                                        Precedence grouping             [(]{style="font-size:9.0pt;
                                                                                 font-family:\"Courier New\""}[Price sub 5) gt 10]{style="font-size:9.0pt;font-family:
                                                                                 \"Courier New\""}

##### []{#sec_BuiltinQueryFunctions}[]{#_Built-in_Query_Functions}11.2.6.1.2 [Built-in Query Functions](#sec_BuiltinQueryFunctions)

OData supports a set of built-in functions that can be used within
`$filter` operations. The following table lists the available functions.

4.01 services MUST support case-insensitive built-in function names.
Clients that want to work with 4.0 services MUST use lower case names.

For a full description of the syntax used when building requests, see
[**\[OData‑URL\]**](#ODataURLRef).

OData does not define an ISNULL or COALESCE operator. Instead, there is
a `null` literal that can be used in comparisons.

  **Function**                                                **[Example]{style="color:black"}**
  ----------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------
  **String and Collection Functions**                         
  [concat]{style="font-family:\"Courier New\""}               [concat(concat(City,\', \'), Country) eq \'Berlin, Germany\']{style="font-size:9.0pt;font-family:\"Courier New\""}
  [contains]{style="font-family:\"Courier New\""}             [contains(CompanyName,\'freds\')]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [endswith]{style="font-family:\"Courier New\""}             [endswith(CompanyName,\'Futterkiste\')]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [indexof]{style="font-family:\"Courier New\""}              [indexof(CompanyName,\'lfreds\') eq 1]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [length]{style="font-family:\"Courier New\""}               [length(CompanyName) eq 19]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [startswith]{style="font-family:\"Courier New\""}           [startswith(CompanyName,'Alfr')]{style="font-size:9.0pt;font-family:\"Courier New\""}
  `substring`                                                 [substring(CompanyName,1) eq \'lfreds Futterkiste\']{style="font-size:9.0pt;
                                                                font-family:\"Courier New\""}
  **Collection Functions**                                    
  [hassubset]{style="font-family:\"Courier New\""}            [hassubset(\[4,1,3\],\[3,1\])]{style="font-size:9.0pt;font-family:\"Courier New\""}
  `hassubsequence`                                            [hassubsequence(\[4,1,3,1\],\[1,1\])]{style="font-size:9.0pt;
                                                                font-family:\"Courier New\""}
  **String Functions**                                        
  [matchesPattern]{style="font-family:\"Courier New\""}       [matchesPattern(CompanyName,\'%5EA.\*e\$\')]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [tolower]{style="font-family:\"Courier New\""}              [tolower(CompanyName) eq \'alfreds futterkiste\']{style="font-size:9.0pt;font-family:\"Courier New\""}
  [toupper]{style="font-family:\"Courier New\""}              [toupper(CompanyName) eq \'ALFREDS FUTTERKISTE\']{style="font-size:9.0pt;font-family:\"Courier New\""}
  `trim  `                                                    [trim(CompanyName) eq \'Alfreds Futterkiste\']{style="font-size:9.0pt;
                                                                font-family:\"Courier New\""}
  **Date and Time Functions**                                 
  [day]{style="font-family:\"Courier New\""}                  [day(StartTime) eq 8]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [date]{style="font-family:\"Courier New\""}                 [date(StartTime) ne date(EndTime) ]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [fractionalseconds]{style="font-family:\"Courier New\""}    [second(StartTime) eq 0]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [hour]{style="font-family:\"Courier New\""}                 [hour(StartTime) eq 1 ]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [maxdatetime]{style="font-family:\"Courier New\""}          [EndTime eq maxdatetime()]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [mindatetime]{style="font-family:\"Courier New\""}          [StartTime eq mindatetime()]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [minute]{style="font-family:\"Courier New\""}               [minute(StartTime) eq 0]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [month]{style="font-family:\"Courier New\""}                [month(BirthDate) eq 12]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [now]{style="font-family:\"Courier New\""}                  [StartTime ge now()]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [second]{style="font-family:\"Courier New\""}               [second(StartTime) eq 0]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [time]{style="font-family:\"Courier New\""}                 [time(StartTime) le StartOfDay]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [totaloffsetminutes]{style="font-family:\"Courier New\""}   [totaloffsetminutes(StartTime) eq 60]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [totalseconds]{style="font-family:\"Courier New\""}         [totalseconds(duration\'PT1M\') eq 60]{style="font-size:9.0pt;font-family:\"Courier New\""}
  `year`                                                      [year(BirthDate) eq 0]{style="font-size:9.0pt;
                                                                font-family:\"Courier New\""}
  **Arithmetic Functions**                                    
  [ceiling]{style="font-family:\"Courier New\""}              [ceiling(Freight) eq 33]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [floor]{style="font-family:\"Courier New\""}                [floor(Freight) eq 32]{style="font-size:9.0pt;font-family:\"Courier New\""}
  `round`                                                     [round(Freight) eq 32]{style="font-size:9.0pt;
                                                                font-family:\"Courier New\""}
  **Type Functions**                                          
  [cast]{style="font-family:\"Courier New\""}                 [cast(ShipCountry,Edm.String)]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [isof]{style="font-family:\"Courier New\""}                 [isof(NorthwindModel.Order)]{style="font-size:9.0pt;font-family:\"Courier New\""}
  `isof`                                                      [isof(ShipCountry,Edm.String)]{style="font-size:9.0pt;
                                                                font-family:\"Courier New\""}
  []{#_The_$expand_System}**Geo Functions**                   
  [geo.distance]{style="font-family:\"Courier New\""}         [geo.distance(CurrentPosition,TargetPosition)]{style="font-size:9.0pt;font-family:\"Courier New\""}
  [geo.intersects]{style="font-family:\"Courier New\""}       [geo.intersects(Position,TargetArea)]{style="font-size:9.0pt;font-family:\"Courier New\""}
  `geo.length`                                                [geo.length(DirectRoute)]{style="font-size:9.0pt;
                                                                font-family:\"Courier New\""}
  []{#_Parameter_Aliases_1}**Conditional Functions**          
  `case`                                                      [case(X gt 0:1,X lt 0:-1,true:0)]{style="font-size:9.0pt;
                                                                font-family:\"Courier New\""}

##### [11.2.6.1.3]{#sec_ParameterAliases} [Parameter Aliases](#sec_ParameterAliases)

Parameter aliases can be used in place of literal values in entity keys,
[function parameters](#sec_InvokingaFunction)[,]{.MsoHyperlink} or
within a
[`$compute`](#sec_SystemQueryOptioncompute)[[,]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
[`$filter`](#sec_SystemQueryOptionfilter) or
[`$orderby`](#sec_SystemQueryOptionorderby) expression. Parameters
aliases are names beginning with an at sign (`@`).

Actual parameter values are specified as query options in the query part
of the request URL. The query option name is the name of the parameter
alias, and the query option value is the value to be used for the
specified parameter alias.

Example 48: returns all employees whose Region property matches the
string parameter value \"WA\"

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
]{style="color:black"}[[http://host/service.svc/Employees?\$filter=Region
eq \@p1&@p1=\'WA\']{style="color:
black"}]{.VerbatimChar}
:::

Parameter aliases allow the same value to be used multiple times in a
request and may be used to reference primitive, structured, or
collection values.

If a parameter alias is not given a value in the query part of the
request URL, the value MUST be assumed to be null. A parameter alias can
be used in multiple places within a request URL, but its value MUST NOT
be specified more than once.

Parameter alias values used in `/$filter` path segments are always
passed as expressions (because that is the expected type of the
parameter).

All other parameter alias values are evaluated in the context of the
resource identified by the path segment in which they are assigned and
passed as values into the expression. Parameter alias value assignments
MAY be nested within `$expand` and `$select`[[, in which case they are
evaluated relative to the resource context of the
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}`$expand` or
`$select`.

Example 49: returns all employees, expands their manager, and expands
all direct reports with the same first name as the manager, using a
parameter alias for `$this` to pass the manager into the filter on the
expanded direct reports

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
]{style="color:black"}[[http://host/service.svc/Employees?\$expand=Manager(@m=\$this;\$expand=DirectReports(\$filter=@m/FirstName
eq FirstName))]{style="color:
black"}]{.VerbatimChar}
:::

#### []{#sec_SystemQueryOptionorderby}[]{#_The_$select_System_1}[]{#_The_$orderby_System}11.2.6.2 [System Query Option `$orderby`](#sec_SystemQueryOptionorderby)

The `$orderby` System Query option specifies the order in which items
are returned from the service.

The value of the `$orderby` System Query option contains a
comma-separated list of expressions whose primitive result values are
used to sort the items. A special case of such an expression is a
property path terminating on a primitive property. A type cast using the
qualified entity type name is required to order by a property defined on
a derived type. Only aliases defined in the metadata document of the
service can be used in URLs.

The expression can include the suffix `asc` for ascending or `desc` for
descending, separated from the property name by one or more spaces. If
`asc` or `desc` is not specified, the service MUST order by the
specified property in ascending order. 4.01 services MUST support
case-insensitive values for `asc` and `desc`. Clients that want to work
with 4.0 services MUST use lower case values.

Null values come before non-null values when sorting in ascending order
and after non-null values when sorting in descending order.

Items are sorted by the result values of the first expression, and then
items with the same value for the first expression are sorted by the
result value of the second expression, and so on.

The Boolean value false comes before the value true in ascending order.

Services SHOULD order language-dependent strings according to the
[content-language](#sec_HeaderContentLanguage) of the response, and
SHOULD annotate string properties with language-dependent order with the
[term
]{style="color:black"}[`Core.IsLanguageDependent`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#IsLanguageDependent)[,
see
]{style="color:black"}[**\[OData-VocCore\]**](#VocCore)[.]{style="color:black"}

Values of type `Edm.Stream` or any of the `Geo` types cannot be sorted.

Example 50: return all Products ordered by release date in ascending
order, then by rating in descending order

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$orderby=ReleaseDate asc, Rating
desc]{style="color:black"}
:::

[]{#_The_$top_System}Related entities may be ordered by specifying
`$orderby` within the `$expand` clause.

Example 51: return all Categories, and their Products ordered according
to release date and in descending order of rating

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Categories?\
   \$expand=Products(\$orderby=ReleaseDate asc, Rating
desc)]{style="color:black"}
:::

`$count` may be used within a `$orderby` expression to order the
returned items according to the exact count of related entities or items
within a collection-valued property.

Example 52: return all Categories ordered by the number of Products
within each category

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Categories?\$orderby=Products/\$count]{style="color:black"}
:::

#### []{#sec_SystemQueryOptiontop}[]{#_The_$top_System_1}11.2.6.3 [System Query Option `$top`](#sec_SystemQueryOptiontop)

The `$top` system query option specifies a non-negative integer n that
limits the number of items returned from a collection. The service
returns the number of available items up to but not greater than the
specified value n.

Example 53: return only the first five products of the Products entity
set

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$top=5]{style="color:black"}
:::

If no unique ordering is imposed through an
[`$orderby`](#sec_SystemQueryOptionorderby) query option, the service
MUST impose a stable ordering across requests that include `$top`.

#### []{#sec_SystemQueryOptionskip}[]{#_The_$skip_System}11.2.6.4 [System Query Option `$skip`](#sec_SystemQueryOptionskip)

The `$skip` system query option specifies a non-negative integer n that
excludes the first n items of the queried collection from the result.
The service returns items starting at position n+1.

Example 54: return products starting with the 6th product of the
`Products` entity set

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$skip=5]{style="color:black"}
:::

Where [`$top`[
]{style="font-family:\"Calibri\",sans-serif"}](#sec_SystemQueryOptiontop)and
`$skip` are used together, `$skip` MUST be applied before `$top`,
regardless of the order in which they appear in the request.

Example 55: return the third through seventh products of the `Products`
entity set

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$top=5&\$skip=2]{style="color:black"}
:::

If no unique ordering is imposed through an
[`$orderby`](#sec_SystemQueryOptionorderby) query option, the service
MUST impose a stable ordering across requests that include `$skip`.

#### []{#sec_SystemQueryOptioncount}[]{#_The_$inlinecount_System}11.2.6.5 [System Query Option `$count`](#sec_SystemQueryOptioncount)

The `$count` system query option with a value of `true` specifies that
the total count of items within a collection matching the request be
returned along with the result.

Example 56: return, along with the results, the total number of products
in the collection

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$count=true]{style="color:black"}
:::

The count of related entities can be requested by specifying
the` ``$count` query option within the `$expand` clause.

Example 57:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Categories?\$expand=Products(\$count=true)]{style="color:black"}
:::

A `$count` query option with a value of `false` (or not specified) hints
that the service SHOULD NOT return a count.

The service returns an HTTP Status code of `400 Bad Request` if a value
other than `true` or `false` is specified.

The `$count` system query option ignores any
[`$top`](#sec_SystemQueryOptiontop),
[`$skip`](#sec_SystemQueryOptionskip), or
[`$expand`](#sec_SystemQueryOptionexpand) query options, and returns the
total count of results across all pages including only those results
matching any specified [`$filter`](#sec_SystemQueryOptionfilter) and
[`$search`](#sec_SystemQueryOptionsearch). Clients should be aware that
the count returned inline may not exactly equal the actual number of
items returned, due to latency between calculating the count and
enumerating the last value or due to inexact calculations on the
service.

How the count is encoded in the response body is dependent upon the
selected format.

#### []{#sec_SystemQueryOptionsearch}[]{#_The_$format_System}[]{#_The_$search_System}11.2.6.6 [System Query Option `$search`](#sec_SystemQueryOptionsearch)

The `$search` system query option restricts the result to include only
those items *matching* the specified search expression. The definition
of what it means to match is dependent upon the implementation.

Example 58: return all Products that match the search term \"bike\"

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$search=bike]{style="color:black"}
:::

The search expression can contain phrases, enclosed in double-quotes.

Example 59: return all Products that match the phrase \"mountain bike\"

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$search=\"mountain
bike\"]{style="color:black"}
:::

The upper-case keyword `NOT` restricts the set of entities to those that
do not match the specified term.

Example 60: return all Products that do not match \"clothing\"

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$search=NOT
clothing]{style="color:black"}
:::

Multiple terms within a search expression are separated by a space
(implicit `AND`) or the upper-case keyword `AND`, indicating that all
such terms must be matched.

Example 61: return all Products that match both \"mountain\" and
\"bike\"

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$search=mountain AND
bike]{style="color:black"}
:::

The upper-case keyword `OR` is used to return entities that satisfy
either the immediately preceding or subsequent expression.

Example 62: return all Products that match either \"mountain\" or
\"bike\"

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products?\$search=mountain OR
bike]{style="color:black"}
:::

Parentheses within the search expression group together multiple
expressions.

Example 63: return all Products that match either \"mountain\" or
\"bike\" and do not match clothing

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Products?\$search=[[(]{style="color:black"}]{.MsoHyperlink}mountain
OR bike) AND NOT clothing ]{style="color:black"}
:::

The operations within a search expression MUST be evaluated in the
following order: grouping operator, `NOT` operator, `AND` operator, `OR`
operator

If both `$search` and [`$filter`](#sec_SystemQueryOptionfilter) are
specified in the same request, only those items satisfying both criteria
are returned.

The value of the `$search` option is a search expression as defined in
[**\[OData-ABNF\]**](#ABNF).

#### []{#sec_ServerDrivenPaging}[]{#_Server-Driven_Paging}11.2.6.7 [Server-Driven Paging](#sec_ServerDrivenPaging)

Responses that include only a partial set of the items identified by the
request URL MUST contain a link that allows retrieving the next partial
set of items. This link is called a *next link*; its representation is
format-specific. The final partial set of items MUST NOT contain a next
link.

The client can request a maximum page size through the
[`maxpagesize`](#sec_Preferencemaxpagesizeodatamaxpagesiz) preference.
The service may apply this requested page size or implement a page size
different than, or in the absence of, this preference.

OData clients MUST treat the URL of the next link as opaque, and MUST
NOT append system query options to the URL of a next link. Services may
not allow a change of format on requests for subsequent pages using the
next link. Clients therefore SHOULD request the same format on
subsequent page requests using a compatible `Accept` header. OData
services may use the reserved system query option `$skiptoken` when
building next links. Its content is opaque, service-specific, and must
only follow the rules for URL query parts.

OData clients MUST NOT use the system query option `$skiptoken` when
constructing requests.

#### []{#sec_RequestinganIndividualMemberofanOrde}[]{#_Requesting_an_Individual}11.2.6.8 [Requesting an Individual Member of an Ordered Collection](#sec_RequestinganIndividualMemberofanOrde)

[]{#_The_$expand_System_1}[]{#_System_Query_Option}[]{#_System_Query_Option_1}[]{#_The_$select_System_2}[]{#_System_Query_Option_5}[]{#_Requesting_Related_Entities}Individual
members of collections of primitive and complex types annotated with the
`Ordered` term (see [**\[OData-VocCore\]**](#VocCore)) are addressable
by appending a segment containing the zero-based ordinal to the URL of
the collection. A negative ordinal indexes from the end of the
collection, with -1 representing the last item in the collection.

Entities are stably addressable using their canonical URL and are not
accessible using an ordinal index.

Example 64: the first address in a list of addresses for `MainSupplier`

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
[[http://host/service/Suppliers(MainSupplier)/Addresses/0]{style="color:black"}]{.MsoHyperlink}]{style="color:black"}
:::

### []{#sec_RequestingRelatedEntities}[11.2.7]{#_Toc477876662} [Requesting Related Entities](#sec_RequestingRelatedEntities)

To request related entities according to a particular relationship, the
client issues a `GET` request to the source entity's request URL,
followed by a forward slash and the name of the navigation property
representing the relationship.

If the navigation property does not exist on the entity indicated by the
request URL, the service returns
[`404 Not Found`](#sec_ResponseCode404NotFound).

If the relationship terminates on a collection, the response MUST be the
format-specific representation of the collection of related entities. If
no entities are related, the response is the format-specific
representation of an empty collection.

If the relationship terminates on a single entity, the response MUST be
the format-specific representation of the related single entity. If no
entity is related, the service returns
[`204 No Content`](#sec_ResponseCode204NoContent).

Example 65: return the supplier of the product with `ID=1 `in the
Products entity set

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products(1)/Supplier]{style="color:black"}
:::

### []{#sec_RequestingEntityReferences}[11.2.8]{#_Toc477876663} [Requesting Entity References](#sec_RequestingEntityReferences)

To request [entity references](#sec_EntityIdsandEntityReferences) in
place of the actual entities, the client issues a `GET` request with
`/$ref` appended to the resource path.

If the resource path does not identify an entity or a collection of
entities, the service returns `404 Not Found`.

If the resource path identifies a collection, the response MUST be the
format-specific representation of a collection of entity references
pointing to the related entities. If no entities are related, the
response is the format-specific representation of an empty collection.
The response MAY contain an [ETag header](#sec_HeaderETag) for the
collection whose value changes if the collection of references changes,
i.e. a reference is added or removed.

If the resource path identifies a single existing entity, the response
MUST be the format-specific representation of an entity reference. The
response MAY contain an [ETag header](#sec_HeaderETag) which represents
the identity of the referenced entity. If the resource path terminates
in a single-valued navigation path, the ETag value changes if the
relationship is changed and points to a different OData entity. If the
resource path is the canonical path for a single entity, the returned
ETag can never change.

If the resource path terminates on a single entity and no such entity
exists, the service returns either
[`204 No Content`](#sec_ResponseCode204NoContent) or
[`404 Not Found`](#sec_ResponseCode404NotFound).

Example 66: collection with an entity reference for each Order related
to the Product with `ID=0`

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products(0)/Orders/\$ref]{style="color:black"}
:::

### []{#_Ref356811774}[]{#_Ref356811693}[]{#_Ref356811460}[]{#sec_ResolvinganEntityId}[]{#_Requesting_the_Number}[]{#_Resolving_an_Entity-Id}11.2.9 [Resolving an Entity-Id](#sec_ResolvinganEntityId)

To resolve an [entity-id](#sec_EntityIdsandEntityReferences), e.g.
obtained in an entity reference, into a representation of the identified
entity, the client issues a `GET` request to the `$entity` resource
located at the URL `$entity` relative to the service root. The entity-id
MUST be specified using the system query option `$id`.

Example 67: return the entity representation for a given entity-id

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/\$entity?\$id=http://host/service/Products(0)]{style="color:black"}
:::

A type segment following the `$entity` resource casts the resource to
the specified type. If the identified entity is not of the specified
type, or a type derived from the specified type, the service returns
`404 Not Found`.

After applying a type-cast segment to cast to a specific type, the
system query options [`$select`](#sec_SystemQueryOptionselect) and
[`$expand`](#sec_SystemQueryOptionexpand) can be specified in `GET`
requests to the `$entity` resource.

Example 68: return the entity representation for a given entity-id and
specify properties to return

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/\$entity/Model.Customer\
                          
?\$id=http://host/service/Customers(\'ALFKI\')]{style="color:black"}

[                          
&\$select=CompanyName,ContactName]{style="color:black"}

[                           &\$expand=Orders]{style="color:black"}
:::

### []{#sec_RequestingtheNumberofItemsinaCollect}[11.2.10]{#_Toc477876665} [Requesting the Number of Items in a Collection](#sec_RequestingtheNumberofItemsinaCollect)

To request only the number of items of a collection of entities or items
of a collection-valued property, the client issues a `GET` request with
`/$count` appended to the resource path of the collection.

On success, the response body MUST contain the exact count of items
matching the request after applying any
[`$filter`](#sec_SystemQueryOptionfilter) or
[`$search`](#sec_SystemQueryOptionsearch) system query options,
formatted as a simple primitive integer value with media type
`text/plain`. Clients SHOULD NOT combine the system query options
[[ ]{style="font-size:8.0pt"}]{.MsoCommentReference}[`$top`](#sec_SystemQueryOptiontop),
[`$skip`](#sec_SystemQueryOptionskip),
[`$orderby`](#sec_SystemQueryOptionorderby),
[`$expand`](#sec_SystemQueryOptionexpand), and
[`$format`](#sec_SystemQueryOptionformat) with the path suffix
`/$count`. The result of such a request is undefined.

Example 69: return the number of
product[[s]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}in the Products
entity set

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products/\$count]{style="color:black"}
:::

With 4.01 services the `/$count` segment MAY be used in combination with
the `/$filter`[[
path]{style="font-family:\"Arial\",sans-serif"}]{.Datatype} segment to
count the items in the filtered collection.

Example 70: return the number of products whose `Price` is less than
[\$10.00]{style="font-family:\"Calibri\",sans-serif"}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products/\$filter(@foo)/\$count?@foo=Price lt
10.00]{style="color:black"}
:::

For backwards compatibility, the `/$count` suffix MAY be used in
combination with the [`$filter`](#sec_SystemQueryOptionfilter) system
query option.

Example 71: return the number of products whose `Price` is less than
[\$10.00]{style="font-family:\"Calibri\",sans-serif"}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products/\$count?\$filter=Price lt
10.00]{style="color:black"}
:::

The [`$filter`](#sec_SystemQueryOptionfilter) system query option MUST
NOT be used in conjunction with a both a `/$count` path segment and a
`/$filter` path segment.

The `/$count` suffix can also be used in path expressions within system
query options, e.g. [`$filter`](#sec_SystemQueryOptionfilter).

Example 72: return all customers with more than five interests

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Customers?\$filter=Interests/\$count gt
5]{style="color:black"}
:::

[]{#_Ref356812405}[]{#_Requesting_Changes}Example 73: return all
categories with more than one product over \$5.00

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Categories?\
                       \$filter=Products/\$filter(Price gt 5.0)/\$count
gt 1]{style="color:black"}
:::

### []{#sec_SystemQueryOptionformat}[11.2.11]{#_Toc477876666} [System Query Option `$format`](#sec_SystemQueryOptionformat)

The `$format` system query option specifies the media type of the
response.

The `$format` query option, if present in a request, MUST take
precedence over the value(s) specified in the
[`Accept`](#sec_HeaderAccept) request header.

The value of the `$format` system query option is a valid internet media
type, optionally including parameters.

In addition, format-specific abbreviations may be used, e.g. `json` for
`application/json`, see [**\[OData-JSON\]**](#ODataJSONRef), but format
parameters MUST NOT be appended to the format abbreviations.

Example 74: the request

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Orders?\$format=application/json;metadata=full]{style="color:black"}
:::

is equivalent to a request with an `Accept` header using the same media
type; it requests the set of Order entities represented using the JSON
media type including full metadata, as defined in
[**\[OData-JSON\]**](#ODataJSONRef).

Example 75: the request

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Orders?\$format=json]{style="color:black"}
:::

is equivalent to a request with the `Accept` header set to
`application/json`; it requests the set of Order entities represented
using the JSON media type with minimal metadata, as defined in
[**\[OData-JSON\]**](#ODataJSONRef).

[]{#_Requesting_Changes_1}In [metadata document
requests](#sec_MetadataDocumentRequest)[,]{.MsoHyperlink} the values
`application/xml` and `application/json`, along with their subtypes and
parameterized variants, as well as the format-specific abbreviations
`xml` and `json,` are reserved for this specification.

### []{#sec_SystemQueryOptionschemaversion}[11.2.12]{#_Toc477876667} [System Query Option `$schemaversion`](#sec_SystemQueryOptionschemaversion)

The [\$schemaversion]{.VerbatimChar} system query option MAY be included
in any request. For a [metadata document
request](#sec_MetadataDocumentRequest) the value of the
[\$schemaversion]{.VerbatimChar} system query option addresses a
specific schema version. For all other request types the value specifies
the version of the schema against which the request is made.[ The syntax
of the ]{style="color:black"}[\$schemaversion]{.VerbatimChar} system
query option is defined in [**\[OData-ABNF\]**](#ABNF).

The value of the [\$schemaversion]{.VerbatimChar} system query option
MUST be a version of the schema as returned in the
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation, defined in [**\[OData-VocCore\]**](#VocCore), of a previous
request to the [metadata document](#sec_MetadataDocumentRequest), or
[\*]{.Keyword} in order to specify the current version of the metadata.

If specified, the service MUST process the request according to the
specified version of the metadata.

Clients can retrieve the current version of the metadata by making a
[metadata document request](#sec_MetadataDocumentRequest) with a
[\$schemaversion]{.VerbatimChar} system query option value of
[\*]{.Keyword}, and SHOULD include the value from the returned
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation in the [\$schemaversion]{.VerbatimChar} system query option
of subsequent requests.

If the [\$schemaversion]{.VerbatimChar} system query option is not
specified in a request for the metadata document, the service MUST
return a version of the metadata with no breaking changes over time, and
the processing of all other requests that omit the
[\$schemaversion]{.VerbatimChar} system query option MUST be compatible
with that "unversioned" schema. For more information on breaking
changes, see [Model Versioning](#sec_ModelVersioning).

If the [\$schemaversion]{.VerbatimChar} system query option is specified
on an individual request within a batch, then it specifies the version
of the schema to apply to that individual request. Individual requests
within a batch that don't include the [\$schemaversion]{.VerbatimChar}
system query option inherit the schema version of the overall batch
request.

If the [\$schemaversion]{.VerbatimChar} system query option is
specified, but the version of the schema doesn't exist, the request is
answered with a [response code
`404 Not Found`](#sec_ResponseCode404NotFound). The response body SHOULD
provide additional information.

## []{#sec_RequestingChanges}[]{#_Ref484615591}[]{#_Requesting_Changes_2}11.3 [Requesting Changes](#sec_RequestingChanges)

Services advertise their change-tracking capabilities by annotating
entity sets with the
[`Capabilities`.`ChangeTracking`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#ChangeTracking)
term defined in [**\[OData-VocCap\]**](#VocCapabilities).

Any `GET` request to retrieve one or more entities MAY allow
change-tracking.

Clients request that the service track changes to a result by specifying
the [`track-changes`](#sec_Preferencetrackchangesodatatrackchan)
preference on a request. If supported for the request, the service
includes a [`Preference-Applied`](#sec_HeaderPreferenceApplied)` `header
in the response containing the `track-changes` preference and includes a
*delta link* in a result for a single entity, and on the last page of
results for a collection of entities in place of the next link.

### []{#sec_DeltaLinks}[]{#_Delta_Link_URL}[]{#_Delta_Links}11.3.1 [Delta Links](#sec_DeltaLinks)

Delta links are opaque, service-generated links that the client uses to
retrieve subsequent changes to a result.

Delta links are based on a *defining query* that describes the set of
results for which changes are being tracked; for example, the request
that generated the results containing the delta link. The delta link
encodes the collection of entities for which changes are being tracked,
along with a starting point from which to track changes. OData services
may use the reserved system query option `$deltatoken` when building
delta links. Its content is opaque, service-specific, and must only
follow the rules for URL query parts.

If the defining query contains a
[`$schemaversion`](#sec_SystemQueryOptionschemaversion) system query
option, the response MUST be represented according to that schema
version.

If the defining query contains a
[`$filter`](#sec_SystemQueryOptionfilter)[ ]{.MsoHyperlink}or[
]{.MsoHyperlink}[`$search`](#sec_SystemQueryOptionsearch), the response
MUST include only changes to entities matching the specified criteria.
Added entities MUST be returned for entities that were added or changed
and now match the specified criteria, and deleted entities MUST be
returned for entities that are changed to no longer match the criteria
of [`$filter`](#sec_SystemQueryOptionfilter) or
[[[\$s]{style="color:windowtext"}]{.Datatype}`earch`](#sec_SystemQueryOptionsearch).

The delta link MUST NOT encode any client
[top](#sec_SystemQueryOptiontop) or [skip](#sec_SystemQueryOptionskip)
value, and SHOULD NOT encode a request for an inline count.

If the defining query includes expanded relationships, the delta link
MUST return changes, additions, or deletions to the expanded entities,
as well as added or deleted links to expanded entities or nested
collections representing current membership. If the defining query
includes expanded references, then the delta link MUST return changes to
the membership in the set of expanded references. 

Navigation properties specified in the
[[[\$select]{style="color:windowtext"}]{.Datatype}](#sec_SystemQueryOptionselect)
list of a defining query are not used to define the scope or contents of
the items being tracked. Clients can specify `/$ref` in
[`$expand`](#sec_SystemQueryOptionexpand) in order to specify interest
in the set of related entities without interest in changes to the
content of those related entities.

If an expanded entity becomes orphaned because all paths to the entity
as specified in the defining query have been broken (i.e. due to
relationship changes and/or changes or deletions to parent entities)
then the service MUST return the appropriate notifications for the
client to determine that the entity has been orphaned (i.e. the changed
relationships and removed parent entities). The client should not assume
that it will receive additional notifications for such an orphaned
entity.

Entities are considered changed if any of the structural properties have
changed. Changes to related entities and to streams are not considered a
change to the entity containing the stream or navigation property.

If the defining query contains a
[projection](#sec_SpecifyingPropertiestoReturn), the generated delta
link SHOULD logically include the same projection, such that the delta
query only includes fields specified in the projection. Services MAY use
the projection to limit the entities returned to those that have changed
within the selected fields, but the client MUST be prepared to receive
entities returned whether or not the field that changed was specified in
the projection.

### []{#sec_UsingDeltaLinks}[11.3.2]{#_Toc477876670} [Using Delta Links](#sec_UsingDeltaLinks)

The client requests changes by invoking the `GET` method on the [delta
link](#sec_DeltaLinks). The client MUST NOT attempt to append system
query options to the delta link. The [`Accept`](#sec_HeaderAccept)
header MAY be used to specify the desired response format.

Clients SHOULD specify the same
[`Accept-Language`](#sec_HeaderAcceptLanguage) header when querying the
delta link as was specified in the defining query. Services MAY return
[`406 Not Acceptable`](#sec_ResponseCode406NotAcceptable) if a different
`Accept-Language` is specified. If a service does support an
`Accept-Language` header it MAY return changes only visible in that
language, or MAY include records that have changes not visible in the
requested language.

The [`/$count`](#sec_RequestingtheNumberofItemsinaCollect) segment can
be appended to the path of a delta link in order to get just the number
of changes available. The count includes all added, changed, or deleted
entities, as well as added or deleted links.

The results of a request against the delta link may span multiple pages
but MUST be ordered by the service across all pages in such a way as to
guarantee consistency when applied in order to the response which
contained the delta link.

Services SHOULD return only changed entities, but MAY return additional
entities matching the defining query for which the client may not see a
change.

In order to continue tracking changes beyond the current set, the client
specifies [`track-changes`](#sec_Preferencetrackchangesodatatrackchan)
on the initial request to the delta link but is not required to repeat
it for subsequent [pages](#sec_ServerDrivenPaging)[.]{.MsoHyperlink} The
new delta link appears at the end of the last page of changes in place
of the next link and MUST return all changes subsequent to the last
change of the previous delta link.

If no changes have occurred, the response is an empty collection that
contains a delta link for subsequent changes if requested. This delta
link MAY be identical to the delta link resulting in the empty
collection of changes.

If the delta link is no longer valid, the service responds with
[`410 Gone`](#sec_ResponseCode410Gone), and SHOULD include the URL for
refetching the entire set in the `Location` header of the response.

### []{#sec_DeltaPayloads}[]{#_Data_Modification}11.3.3 [Delta Payloads](#sec_DeltaPayloads)

A delta payload represents changes to a known state. A delta payload
includes added entities, changed entities, and deleted entities, as well
as a representation of added and removed relationships.

Delta payloads can be [requested](#sec_RequestingChanges) from the
service using a delta link or provided as updates to the service.

## [11.4]{#sec_DataModification} [Data Modification](#sec_DataModification)

Updatable OData services support Create, Update, and Delete operations
for some or all exposed entities. Additionally, [Actions](#sec_Actions)[
]{.MsoHyperlink}supported by a service can affect the state of the
system.

A successfully completed [Data Modification
Request](#sec_DataModification) must not violate the integrity of the
data.

The client may request whether content be returned from a Create,
Update, or Delete request, or the invocation of an Action, by specifying
the [`return` Prefer header](#sec_Preferencereturnrepresentationandret).

### []{#sec_CommonDataModificationSemantics}[11.4.1]{#_Toc477876672} [Common Data Modification Semantics](#sec_CommonDataModificationSemantics)

[Data Modification Requests](#sec_DataModification) share the following
semantics.

#### []{#sec_UseofETagsforAvoidingUpdateConflicts}[]{#_Use_of_ETags}11.4.1.1 [Use of ETags for Avoiding Update Conflicts](#sec_UseofETagsforAvoidingUpdateConflicts)

Each entity has its own ETag value that MUST change when structural
properties or links from that entity have changed. In addition,
modifying, adding, or deleting a contained entity MAY change the ETag of
the parent entity.

Collections of entities (including collections of related entities) MAY
have their own ETag value whose semantics is service-specific. It
typically changes if entities are added to or removed from the
collection, or if an entity in the collection is changed. The ETag of a
collection of related entities reached via a navigation property MAY
differ from the ETag of the entity containing the navigation property.

A [Data Modification Request](#sec_DataModification)[ ]{.MsoHyperlink}on
an existing resource or an [Action Request](#sec_Actions)[ invoking an
action bound to an existing resource]{style="color:black"} MAY require
optimistic concurrency control. Services SHOULD announce this via
annotations with the terms
[`Core.OptimisticConcurrency`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#OptimisticConcurrency)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}in
[**\[OData-VocCore\]**](#VocCore)[ and
]{style="color:black"}[`Capabilities.NavigationRestrictions`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#NavigationRestrictions)[
(nested property ]{style="color:black"}`OptimisticConcurrencyControl`[)
in]{style="color:black"}
[**\[OData-VocCap\]**](#VocCapabilities)[.]{style="color:black"}

[If optimistic concurrency control is required for a resource, the
service MUST include ]{style="color:black"}an [ETag
header](#sec_HeaderETag) in a response to a `GET` request to the
resource, and MAY include the ETag in a format-specific manner in
responses containing that resource.

The presence of an [ETag header](#sec_HeaderETag) in a response does not
imply in itself that the resource requires optimistic concurrency
control; the ETag may just be used for caching and/or conditional `GET`
requests.

If an ETag value is specified in an [`If-Match`](#sec_HeaderIfMatch) or
[`If-None-Match`](#sec_HeaderIfNoneMatch) header of a [Data Modification
Request](#sec_DataModification) or [Action Request](#sec_Actions), the
operation MUST only be invoked if the `If-Match` or `If-None-Match`
condition is satisfied.

[If the client does not specify an
]{style="color:black"}[`If-Match`](#sec_HeaderIfMatch) [request header
in a ]{style="color:black"}[Data Modification
Request](#sec_DataModification)[ or ]{style="color:black"}[Action
Request](#sec_Actions)[ on a resource that requires optimistic
concurrency control, the service responds with a
]{style="color:black"}`428 Precondition Required`[ and MUST ensure that
no observable change occurs as a result of the request.
]{style="color:black"}Clients can attempt to disable optimistic
concurrency control by specifying `If-Match` with a value of `*`.
Services MAY reject such requests.

For requests including an [`OData-Version`](#sec_HeaderODataVersion)
header value of `4.01`, any ETag values specified in the request body of
an [update request](#sec_UpdateanEntity) MUST be `*` or match the
current value for the record being updated.

#### []{#sec_HandlingofDateTimeOffsetValues}[]{#_Differential_Update}[]{#_Create_an_Entity}11.4.1.2 [Handling of DateTimeOffset Values](#sec_HandlingofDateTimeOffsetValues)

Services SHOULD preserve the offset of `Edm.DateTimeOffset` values, if
possible. However, where the underlying storage does not support offset
services may be forced to normalize the value to some common time zone
(i.e. UTC) in which case the result would be returned with that time
zone offset. If the service normalizes values, it [MUST fail evaluation
of the ]{style="color:black;
background:white"}[[query functions
]{style="background:white"}](#sec_BuiltinQueryFunctions)`year`[,
]{style="color:black;
background:white"}`month`[,
]{style="color:black;background:white"}`day`[,
]{style="color:black;background:white"}`hour`[, and
]{style="color:black;background:white"}`time`[ for literal values that
are not stated in the time zone of the normalized
values.]{style="color:black;background:white"}

#### []{#sec_HandlingofPropertiesNotAdvertisedinM}[11.4.1.3]{#_Toc477876675} [Handling of Properties Not Advertised in Metadata](#sec_HandlingofPropertiesNotAdvertisedinM)

Clients MUST be prepared to receive additional properties in an entity
or complex type instance that are not advertised in metadata, even for
types not marked as open. By using `PATCH` when [updating
entities](#sec_UpdateanEntity), clients can ensure that such properties
values are not lost if omitted from the update request.

#### []{#sec_HandlingofIntegrityConstraints}[]{#_Handling_of_Consistency}11.4.1.4 [Handling of Integrity Constraints](#sec_HandlingofIntegrityConstraints)

Services may impose cross-entity integrity constraints. Certain
referential constraints, such as requiring an entity to be created with
related entities can be satisfied through
[creating](#sec_CreateRelatedEntitiesWhenCreatinganE) or
[linking](#sec_LinktoRelatedEntitiesWhenCreatinganE) related entities
when creating the entity. Other constraints might require multiple
changes to be processed in an all-or-nothing fashion.

#### []{#_Ref356810240}[]{#_Ref356809997}[]{#_Ref356809954}[]{#sec_ReturningResultsfromDataModification}[]{#_Create_an_Entity_1}11.4.1.5 [Returning Results from Data Modification Requests](#sec_ReturningResultsfromDataModification)

Clients can request whether created or modified resources are returned
from [create](#sec_CreateanEntity), [update](#sec_UpdateanEntity), and
[upsert](#sec_UpsertanEntity) operations using the
[`return`](#sec_Preferencereturnrepresentationandret) preference header.
In the absence of such a header, services SHOULD return the created or
modified content unless the resource is a stream property value.

When returning content other than for an update to a media entity
stream, services MUST return the same content as a subsequent request to
retrieve the same resource. For updating media entity streams, the
content of a non-empty response body MUST be the updated media entity.

Requests that return a single instance of a structured type or a
collection of structured type instances MAY specify the system query
options [`$expand`](#sec_SystemQueryOptionexpand)[[ and
]{style="color:windowtext"}]{.MsoHyperlink}[`$select`](#sec_SystemQueryOptionselect).

Requests that return a collection MAY specify the system query option
[`$filter`](#sec_SystemQueryOptionfilter).

If one or more of these query options are present, this implies a
[return=representation]{.Keyword} preference if no
[`return`](#sec_Preferencereturnrepresentationandret) preference is
specified.

If one or more of these query options are present with a
[return=minimal]{.Keyword} preference, the service SHOULD NOT return a
representation and MUST include a
[`Preference-Applied`](#sec_HeaderPreferenceApplied) header if it does
not return a representation.

If one or more of these query options are present and the service
returns a representation, then the service MUST apply the specified
query options. If it cannot apply the specified query options
appropriately, it MUST NOT fail the request solely due to the presence
of these query options and instead MUST return [204 No
Content]{.Keyword}.

### []{#sec_CreateanEntity}[]{#_Ref484615789}[]{#_Ref484615791}[]{#_Create_an_Entity_2}11.4.2 [Create an Entity](#sec_CreateanEntity)

To create an entity in a collection, the client sends a `POST` request
to that collection\'s URL. The `POST` body MUST contain a single valid
entity representation.

The entity representation MAY include [references to existing
entities](#sec_LinktoRelatedEntitiesWhenCreatinganE) as well as content
for [new related entities](#sec_CreateRelatedEntitiesWhenCreatinganE),
but MUST NOT contain content for existing related entities. The result
of the operation is the entity with relationships to all included
references to existing entities as well as all related entities created
inline. If the key properties for an entity include key properties of a
directly related entity, those related entities MUST be included either
as references to existing entities or as content for new related
entities.

An entity may also be created as the result of an
[Upsert](#sec_UpsertanEntity) operation.

If the target URL for the collection is a navigation link, the new
entity is automatically linked to the entity containing the navigation
link.

If the target URL terminates in a type cast segment, then the segment
MUST specify the type of, or a type derived from, the type of the
collection, and the entity MUST be created as that specified type.

To create an *open entity* (an instance of an open type), additional
property values beyond those specified in the metadata MAY be sent in
the request body. The service MUST treat these as dynamic properties and
add them to the created instance.

If the entity being created is not an open entity, additional property
values beyond those specified in the metadata SHOULD NOT be sent in the
request body. The service MUST fail if unable to persist all property
values specified in the request.

Properties computed by the service (annotated with the term
[`Core.Computed`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#Computed),
see [**\[OData-VocCore\]**](#VocCore)) and properties that are tied to
properties of the principal entity by a referential constraint, can be
omitted and MUST be ignored if included in the request.

Properties with a defined default value, nullable properties, and
collection-valued properties omitted from the request are set to the
default value, null, or an empty collection, respectively.

Upon successful completion, the response MUST contain a [`Location`
header](#sec_HeaderLocation) that contains the edit URL or read URL of
the created entity.

Upon successful completion the service MUST respond with either
[`201 Created`](#sec_ResponseCode201Created) and a representation of the
created entity, or [`204 No Content`](#sec_ResponseCode204NoContent) if
the request included a [Prefer
header](#sec_Preferencereturnrepresentationandret) with a value of
[`return=minimal`](#sec_Preferencereturnrepresentationandret) and did
not include the system query options
[`$select`](#sec_SystemQueryOptionselect) and
[`$expand`](#sec_SystemQueryOptionexpand).

#### []{#sec_LinktoRelatedEntitiesWhenCreatinganE}[]{#_Link_to_Related}11.4.2.1 [Link to Related Entities When Creating an Entity](#sec_LinktoRelatedEntitiesWhenCreatinganE)

To create a new entity with links to existing entities in a single
request, the client includes references to the related entities in the
request body.

The representation for referencing related entities is format-specific.

Example 76: using the JSON format, 4.0 clients can create a new manager
entity with links to two existing employees by applying the `odata.bind`
annotation to the `DirectReports` navigation property

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{ ]{style="color:black"}

[  \"@odata.type\":\"#Northwind.Manager\",]{style="color:black"}

[  \"ID\": 1,]{style="color:black"}

[  \"FirstName\": \"Pat\",]{style="color:black"}

[  \"LastName\": \"Griswold\",]{style="color:black"}

[  \"DirectReports@odata.bind\": \[]{style="color:black"}

[   
\"]{style="color:black"}[http://host/service/]{style="color:black"}[Employees(5)\",]{style="color:black"}

[   
\"]{style="color:black"}[http://host/service/]{style="color:black"}[Employees(6)\"]{style="color:black"}

[  \]]{style="color:black"}

[}]{style="color:black"}
:::

Example 77: using the JSON format, 4.01 clients can create a new manager
entity with links to two existing employees by including the entity-ids
within the `DirectReports` navigation property

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{ ]{style="color:black"}

[  \"@type\":\"#Northwind.Manager\",]{style="color:black"}

[  \"ID\": 1,]{style="color:black"}

[  \"FirstName\": \"Pat\",]{style="color:black"}

[  \"LastName\": \"Griswold\",]{style="color:black"}

[  \"DirectReports\": \[]{style="color:black"}

[    {\"@id\": \"Employees(5)\"},]{style="color:black"}

[    {\"@id\": \"Employees(6)\"}]{style="color:black"}

[  \]]{style="color:black"}

[}]{style="color:black"}
:::

Upon successful completion of the operation, the service creates the
requested entity and relates it to the requested existing entities.

If the target URL for the collection the entity is created in and
binding information provided in the `POST` body contradicts the implicit
binding information provided by the request URL, the request MUST fail,
and the service responds with `400 Bad Request`.

Upon failure of the operation, the service MUST NOT create the new
entity. In particular, the service MUST never create an entity in a
partially valid state (with the navigation property unset).

#### []{#sec_CreateRelatedEntitiesWhenCreatinganE}[]{#_Create_Related_Entities}11.4.2.2 [Create Related Entities When Creating an Entity](#sec_CreateRelatedEntitiesWhenCreatinganE)

A request to create an entity that includes related entities,
represented using the appropriate inline representation, is referred to
as a "deep insert".

Media entities MUST contain the base64url-encoded representation of
their media stream as a virtual property `$value` when nested within a
deep insert.

Each included related entity is processed observing the rules for
[creating an entity](#sec_CreateanEntity) as if it was posted against
the original target URL extended with the navigation path to this
related entity.

On success, the service MUST create all entities and relate them. If the
service responds with `201 Created`, the response MUST be expanded to at
least the level that was present in the deep-insert request.

Clients MAY associate an id with individual nested entities in the
request by using the
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID)
term defined in [**\[OData-VocCore\]**](#VocCore)[.
]{.MsoHyperlink}Services that respond with `201 Created` SHOULD annotate
the entities in the response using the same
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID)
value as specified in the request. Services SHOULD advertise support for
deep inserts, including support for returning the
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID),
through the
[`Capabilities.DeepInsertSupport`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#DeepInsertSupport)
term, defined in [**\[OData-VocCap\]**](#VocCapabilities); services that
advertise support through
[`Capabilities.DeepInsertSupport`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#DeepInsertSupport)
MUST return the
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}for the inserted
or updated entities.

The `continue-on-error` preference is not supported for deep insert
operations.

On failure, the service MUST NOT create any of the entities.

### []{#_Ref356810287}[]{#sec_UpdateanEntity}[]{#_Ref484615816}[]{#_Update_an_Entity}[]{#_Delete_an_Entity}[]{#_Upsert_an_Entity}11.4.3 [Update an Entity](#sec_UpdateanEntity)

To update an individual entity, the client makes a `PATCH` or `PUT`
request to a URL that identifies the entity. Services MAY restrict
updates only to requests addressing the [edit
URL](#sec_ReadURLsandEditURLs) of the entity.

Services SHOULD support `PATCH` as the preferred means of updating an
entity. `PATCH` provides more resiliency between clients and services by
directly modifying only those values specified by the client.

The semantics of `PATCH`, as defined in [**\[RFC5789\]**](#RFC5789), is
to merge the content in the request payload with the \[entity's\]
current state, applying the update only to those components specified in
the request body. Collection properties and primitive properties
provided in the payload corresponding to updatable properties MUST
replace the value of the corresponding property in the entity or complex
type. Missing properties of the containing entity or complex property,
including dynamic properties, MUST NOT be directly altered unless as a
side effect of changes resulting from the provided properties.

Services MAY additionally support `PUT` but should be aware of the
potential for data-loss in round-tripping properties that the client may
not know about in advance, such as open or added properties, or
properties not specified in metadata. Services that support `PUT` MUST
replace all values of structural properties with those specified in the
request body. Missing non-key, updatable structural properties not
defined as dependent properties within a referential constraint MUST be
set to their default values. Omitting a non-nullable property with no
service-generated or default value from a `PUT` request results in a
`400 Bad Request` error. Missing dynamic structural properties MUST be
removed or set to `null`.

For requests with an `OData-Version` header with a value of `4.01 `or
greater, the media stream of a media entity can be updated by specifying
the base64url-encoded representation of the media stream as a virtual
property `$value`.

Updating a dependent property that is tied to a key property of the
principal entity through a referential constraint updates the
relationship to point to the entity with the specified key value. If
there is no such entity, the update fails.

Updating a principle property that is tied to a dependent entity through
a referential constraint on the dependent entity updates the dependent
property.

Key and other properties marked as read-only in metadata (including
computed properties), as well as dependent properties that are not tied
to key properties of the principal entity, can be omitted from the
request. If the request contains a value for one of these properties,
the service MUST ignore that value when applying the update. Services
MUST return an error if an insert or update contains a new value for a
property marked as updatable that cannot currently be changed by the
user (i.e., given the state of the object or permissions of the user).
The service MAY return success in this case if the specified value
matches the value of the property. Clients SHOULD use `PATCH` and
specify only those properties intended to be changed.

Entity id and entity type cannot be changed when updating an entity.
However, format-specific rules might in some cases require providing
entity id and entity type values in the payload when applying the
update.

For requests with an `OData-Version` header with a value of `4.01 `or
greater, if the entity representation in the request body includes an
ETag value, the update MUST NOT be performed and SHOULD return
[`412 Precondition Failed`](#sec_ResponseCode412PreconditionFailed) if
the supplied ETag value is not `*` and does not match the current ETag
value for the entity. ETag values in request bodies MUST be ignored for
requests containing an OData-Version header with a value of `4.0`.

If an update specifies both a binding to a single-valued navigation
property and a dependent property that is tied to a key property of the
principal entity according to the same navigation property, then the
dependent property is ignored, and the relationship is updated according
to the value specified in the binding.

If the entity being updated is open, then additional values for
properties beyond those specified in the metadata or returned in a
previous request MAY be sent in the request body. The service MUST treat
these as dynamic properties.

If the entity being updated is not open, then additional values for
properties beyond those specified in the metadata or returned in a
previous request SHOULD NOT be sent in the request body. The service
MUST fail if it is unable to persist all updatable property values
specified in the request.

Upon successful completion the service responds with either
[`200 OK`](#sec_ResponseCode200OK) and a representation of the updated
entity, or [`204 No Content`](#sec_ResponseCode204NoContent). The client
may request that the response SHOULD include a body by specifying a
[[[Prefer]{style="color:windowtext"}]{.Datatype}
header](#sec_Preferencereturnrepresentationandret) with a value of
[`return=representation`](#sec_Preferencereturnrepresentationandret), or
by specifying the system query options
[`$select`](#sec_SystemQueryOptionselect) or
[`$expand`](#sec_SystemQueryOptionexpand). If the service uses ETags for
optimistic concurrency control, the entities in the response MUST
include ETags.

#### []{#sec_UpdateRelatedEntitiesWhenUpdatinganE}[]{#_Ref2862780}[]{#_Link_Treatingto_Related}[]{#_Treating_Related_Entities}11.4.3.1 [Update Related Entities When Updating an Entity](#sec_UpdateRelatedEntitiesWhenUpdatinganE)

Update requests with an OData-Version header with a value of `4.0` MUST
NOT contain related entities as inline content. Such requests MAY
contain binding information for navigation properties. For single-valued
navigation properties this replaces the relationship. For
collection-valued navigation properties this adds to the relationship.

Payloads with an [OData-Version]{.Keyword} header with a value of `4.01`
or greater MAY include nested entities and entity references that
specify the full set of to be related entities, or a nested [delta
payload](#sec_DeltaPayloads) representing the related entities that have
been added, removed, or changed. Such a request is referred to as a
"deep update". If the nested collection is represented identical to an
expanded navigation property, then the set of nested entities and entity
references specified in a successful update request represents the full
set of entities to be related according to that relationship and MUST
NOT include added links, deleted links, or deleted entities.

Example 78: using the JSON format, a 4.01
[[PATCH]{style="font-size:10.0pt"}]{.Keyword} request can update a
manager entity. Following the update, the manager has three direct
reports; two existing employees and one new employee named
`Suzanne Brown`. The `LastName` of employee
[[6]{style="font-size:10.0pt"}]{.Keyword} is updated to `Smith.`

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{ ]{style="color:black"}

[  \"@type\":\"#Northwind.Manager\",]{style="color:black"}

[  \"FirstName\" : \"Patricia\",]{style="color:black"}

[  \"DirectReports\": \[]{style="color:black"}

[    {]{style="color:black"}

[      \"@id\": \"Employees(5}\"]{style="color:black"}

[    },]{style="color:black"}

[    {]{style="color:black"}

[      \"@id\": \"Employees(6}\",]{style="color:black"}

[      \"LastName\": \"Smith\"]{style="color:black"}

[    },]{style="color:black"}

[    {]{style="color:black"}

[[      ]{style="color:black"}]{.Datatype}[\"FirstName\":
\"Suzanne\",]{style="color:black"}

[[      ]{style="color:black"}]{.Datatype}[\"LastName\":
\"Brown\"]{style="color:black"}

[    }]{style="color:black"}

[  \]]{style="color:black"}

[}]{style="color:black"}
:::

If the nested collection is represented as a delta annotation on the
navigation property, then the collection contains members to be added or
changed and MAY include deleted entities for entities that are no longer
part of the collection, using the [delta payload](#sec_DeltaPayloads)
format. If the deleted entity specifies a `reason` as `deleted`, then
the entity is both removed from the collection and deleted, otherwise it
is removed from the collection and only deleted if the relationship is
contained. Non-key properties of the deleted entity are ignored. Nested
collections MUST NOT contain added or deleted links. If the request
contains nested delta collections, then the PATCH verb must be
specified.

If a nested entity has the same id or key fields as an existing entity,
the existing entity is updated according to the semantics of the PUT or
PATCH request. Nested entities that have no id or key fields, or for
which the id or key fields do not match existing entities, are treated
as inserts. If the nested collection does not represent a containment
relationship and has no navigation property binding, then such entities
MUST include a context URL specifying the entity set in which the new
entity is to be created. If any nested entities contain both id and key
fields, they MUST identify the same entity, or the request is invalid.

[]{#_Upsert_an_Entity_1}Example 79: using the JSON format, a 4.01
[[PATCH]{style="font-size:10.0pt"}]{.Keyword} request can specify a
nested delta representation to:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}delete
employee 3 and remove link to it

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}remove
the link to employee 4 and do not delete it

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}add
a link to employee 5

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}change
the last name of employee 6 and link to it if necessary

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}add
a new employee named "Suzanne Brown" and link to it

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{ ]{style="color:black"}

[  \"@type\": \"#Northwind.Manager\",]{style="color:black"}

[  \"FirstName\": \"Patricia\",]{style="color:black"}

[  \"DirectReports@delta\": \[]{style="color:black"}

[[    {]{lang="NL" style="color:black"}]{.CODEtemp}

[[      \"@removed\": {]{style="color:black"}]{.CODEtemp}

[[        \"reason\": \"deleted\"]{style="color:black"}]{.CODEtemp}

[[      },]{style="color:black"}]{.CODEtemp}

[[      ]{lang="NL" style="color:black"}]{.CODEtemp}[[\"@id\":
\"Employees(3)\"]{style="color:black"}]{.CODEtemp}

[[    },]{style="color:black"}]{.CODEtemp}

[[    {]{lang="NL" style="color:black"}]{.CODEtemp}

[[      \"@removed\": {]{style="color:black"}]{.CODEtemp}

[[        \"reason\": \"changed\"]{style="color:black"}]{.CODEtemp}

[[      },]{style="color:black"}]{.CODEtemp}

[[      \"@id\": \"Employees(4)\"]{style="color:black"}]{.CODEtemp}

[[    },]{style="color:black"}]{.CODEtemp}

[[    {]{lang="NL" style="color:black"}]{.CODEtemp}

[[      \"@id\": \"Employees(5)\"]{lang="NL"
style="color:black"}]{.CODEtemp}

[[    },]{style="color:black"}]{.CODEtemp}

[[    {]{lang="NL" style="color:black"}]{.CODEtemp}

[[      \"@id\": \"Employees(6)\",]{lang="NL"
style="color:black"}]{.CODEtemp}

[[      \"LastName\": \"Smith\"]{lang="NL"
style="color:black"}]{.CODEtemp}

[[    },]{style="color:black"}]{.CODEtemp}

[[    {]{lang="NL" style="color:black"}]{.CODEtemp}

[      \"FirstName\": \"Suzanne\",]{style="color:black"}

[[      ]{style="color:black"}]{.Datatype}[\"LastName\":
\"Brown\"]{style="color:black"}

[[    }]{style="color:black"}]{.CODEtemp}

[  \]]{style="color:black"}

[}]{style="color:black"}
:::

[]{#_Upsert_an_Entity_2}Clients MAY associate an id with individual
nested entities in the request by using the
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID)
term defined in [**\[OData-VocCore\]**](#VocCore)[.
]{.MsoHyperlink}Services that respond with `200 OK` SHOULD annotate the
entities in the response using the same
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID)
value as specified in the request. Services SHOULD advertise support for
deep updates, including support for returning the
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID),
through the
[`Capabilities.DeepUpdateSupport`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#DeepUpdateSupport)
term, defined in [**\[OData-VocCap\]**](#VocCapabilities).

The `continue-on-error` preference is not supported for deep update
operations.

On failure, the service MUST NOT apply any of the changes specified in
the request.

### []{#sec_UpsertanEntity}[]{#_Ref484615848}11.4.4 [Upsert an Entity](#sec_UpsertanEntity)

An upsert occurs when the client sends an [update
request](#sec_UpdateanEntity) to a valid URL that identifies a single
entity that does not yet exist. In this case the service MUST handle the
request as a [create entity request](#sec_CreateanEntity) or fail the
request altogether.

Upserts are not supported against [media
entities](#sec_RequestingtheMediaStreamofaMediaEnti), single-valued
non-containment navigation properties, or entities whose keys values are
generated by the service. Services MUST fail an update request to a URL
that would identify such an entity and the entity does not yet exist.

Singleton entities can be upserted if they are nullable. Services
supporting this SHOULD advertise it by annotating the singleton with the
term `Capabilities.UpdateRestrictions` [(nested property
]{style="color:black"}`Upsertable`[ with value
]{style="color:black"}`true`[) ]{style="color:black"}defined in
[**\[OData-VocCap\]**](#VocCapabilities).

Key and other non-updatable properties, as well as dependent properties
that are not tied to key properties of the principal entity, MUST be
ignored by the service in processing the Upsert request.

To ensure that an update request is not treated as an insert, the client
MAY specify an [`If-Match` header](#sec_HeaderIfMatch) in the update
request. The service MUST NOT treat an update request containing an
`If-Match` header as an insert.

A `PUT` or `PATCH` request MUST NOT be treated as an update if an
[`If-None-Match` header](#sec_HeaderIfNoneMatch) is specified with a
value of `*`.

### []{#sec_DeleteanEntity}[]{#_Ref484615875}[]{#_Delete_an_Entity_1}11.4.5 [Delete an Entity](#sec_DeleteanEntity)

To delete an individual entity, the client makes a `DELETE` request to a
URL that identifies the entity. Services MAY restrict deletes only to
requests addressing the [edit URL](#sec_ReadURLsandEditURLs) of the
entity.

The request body SHOULD be empty. Singleton entities can be deleted if
they are nullable. Services supporting this SHOULD advertise it by
annotating the singleton with the term `Capabilities.DeleteRestrictions`
[(nested property ]{style="color:black"}`Deletable`[ with value
]{style="color:black"}`true`[) ]{style="color:black"}defined in
[**\[OData-VocCap\]**](#VocCapabilities).

On successful completion of the delete, the response MUST be
[`204 No Content`](#sec_ResponseCode204NoContent) and contain an empty
body.

Services MUST implicitly remove relations to and from an entity when
deleting it; clients need not delete the relations explicitly.

Services MAY implicitly delete or modify related entities if required by
[integrity constraints](#sec_HandlingofIntegrityConstraints). If
integrity constraints are declared in `$metadata`[
]{style="font-family:\"Calibri\",sans-serif"}using a
`ReferentialConstraint` element, services MUST modify affected related
entities according to the declared integrity constraints, e.g. by
deleting dependent entities, or setting dependent properties to `null`
or their default value.

One such integrity constraint results from using a navigation property
in a key definition of an entity type. If the related "key" entity is
deleted, the dependent entity is also deleted.

### []{#sec_ModifyingRelationshipsbetweenEntitie}[]{#_Ref484615883}[]{#_Modifying_Relationships_between}11.4.6 [Modifying Relationships between Entities](#sec_ModifyingRelationshipsbetweenEntitie)

Relationships between entities are represented by navigation properties
as described in [Data Model](#sec_DataModel). URL conventions for
navigation properties are described in
[**\[OData‑URL\]**](#ODataURLRef).

#### []{#sec_AddaReferencetoaCollectionValuedNavi}[]{#_Create_a_New}11.4.6.1 [Add a Reference to a Collection-Valued Navigation Property](#sec_AddaReferencetoaCollectionValuedNavi)

A successful `POST` request to a navigation property\'s references
collection adds a relationship to an existing entity. The request body
MUST contain a single entity reference that identifies the entity to be
added. See the appropriate format document for details.

On successful completion, the response MUST be
[`204 No Content`](#sec_ResponseCode204NoContent) and contain an empty
body.

Note that if the two entities are already related prior to the request,
the request is completed successfully.

#### []{#sec_RemoveaReferencetoanEntity}[]{#_Remove_a_Reference}11.4.6.2 [Remove a Reference to an Entity](#sec_RemoveaReferencetoanEntity)

A successful `DELETE` request to the URL that represents a reference to
a related entity removes the relationship to that entity.

In OData 4.0, the entity reference to be removed within a
collection-valued navigation property is the URL that represents the
collection of related references, with the reference to be removed
identified by the [`$id`](#sec_ResolvinganEntityId) query option. OData
4.01 services additionally support using the URL that represents the
reference of the collection member to be removed, identified by key, as
described in [**\[OData‑URL\]**](#ODataURLRef).

For single-valued navigation properties, the
[`$id`](#sec_ResolvinganEntityId) query option MUST NOT be specified.

The `DELETE` request MUST NOT violate any [integrity
constraints](#sec_HandlingofIntegrityConstraints) in the data model.

On successful completion, the response MUST be
[`204 No Content`](#sec_ResponseCode204NoContent) and contain an empty
body.

#### []{#sec_ChangetheReferenceinaSingleValuedNav}[11.4.6.3]{#_Toc477876688} [Change the Reference in a Single-Valued Navigation Property](#sec_ChangetheReferenceinaSingleValuedNav)

A successful `PUT` request to a single-valued navigation property's
reference resource changes the related entity. The request body MUST
contain a single entity reference that identifies the existing entity to
be related. See the appropriate format document for details.

On successful completion, the response MUST be
[`204 No Content`](#sec_ResponseCode204NoContent) and contain an empty
body.

Alternatively, a relationship MAY be updated as part of an update to the
source entity by including the required binding information for the new
target entity. This binding information is format-specific, see
[**\[OData-JSON\]**](#ODataJSONRef) for details.

If the single-valued navigation property is used in the key definition
of an entity type, it cannot be changed and the request MUST fail with
[`405 Method Not Allowed`](#sec_ResponseCode405MethodNotAllowed) or an
other appropriate error.

#### []{#sec_ReplaceallReferencesinaCollectionval}[11.4.6.4]{#_Toc477876689} [Replace all References in a Collection-valued Navigation Property](#sec_ReplaceallReferencesinaCollectionval)

A successful `PUT` request to a collection-valued navigation property's
reference resource replaces the set of related entities. The request
body MUST contain a collection of entity references in the same format
as returned by a `GET` request to the navigation property's reference
resource.

A successful `DELETE` request to a collection-valued navigation
property's reference resource removes all related references from the
collection.[]{#_Managing_Media_Entities}

### []{#sec_ManagingMediaEntities}[11.4.7]{#_Toc477876690} [Managing Media Entities](#sec_ManagingMediaEntities)

A [media entity](#sec_RequestingtheMediaStreamofaMediaEnti) MUST have a
source URL that can be used to read the media stream, and MAY have a
media edit URL that can be used to write to the media stream.

Because a media entity has both a media stream and standard entity
properties special handling is required.

#### []{#sec_CreateaMediaEntity}[]{#_Ref484615906}[]{#_Creating_a_Media}11.4.7.1 [Create a Media Entity](#sec_CreateaMediaEntity)

A `POST` request to a media entity\'s entity set creates a new media
entity. The request body MUST contain the media value (for example, the
photograph) whose media type MUST be specified in a
[`Content-Type`](#sec_HeaderContentType) header. The request body is
always interpreted as the media value, even if it has the media type of
an OData format supported by the service. It is not possible to set the
structural properties of the media entity when creating the media
entity.

Upon successful completion, the response MUST contain [`Location`
header](#sec_HeaderLocation) that contains the edit URL of the created
media entity.

Upon successful completion the service responds with either
[`201 Created`](#sec_ResponseCode201Created), or
[`204 No Content`](#sec_ResponseCode204NoContent)[` `]{.MsoHyperlink}if
the request included a [Prefer
header](#sec_Preferencereturnrepresentationandret) with a value of
[`return=minimal`](#sec_Preferencereturnrepresentationandret).

#### []{#sec_UpdateaMediaEntityStream}[]{#_Ref484619355}[]{#_Editing_a_Media}11.4.7.2 [Update a Media Entity Stream](#sec_UpdateaMediaEntityStream)

A successful `PUT` request to the media edit URL of a media entity
changes the media stream of the entity.

If the entity includes an ETag value for the media stream, the client
MUST include an [`If-Match`](#sec_HeaderIfMatch) header with the ETag
value.

The request body MUST contain the new media value for the entity whose
media type MUST be specified in a
[`Content-Type`](#sec_HeaderContentType) header.

On success, the service MUST respond with either
[`204 No Content`](#sec_ResponseCode204NoContent) and an empty body, or
[`200 OK`](#sec_ResponseCode200OK) if the client specified the
preference
[`return=representation`](#sec_Preferencereturnrepresentationandret)[,
in which case the response body MUST contain the updated media
entity.]{style="color:black"}

#### []{#sec_DeleteaMediaEntity}[]{#_Ref484615925}[11.4.7.3]{#_Toc477876693} [Delete a Media Entity](#sec_DeleteaMediaEntity)

A successful `DELETE` request to the entity\'s edit URL or to the edit
URL of its media stream deletes the media entity as described in [Delete
an Entity](#sec_DeleteanEntity)[.]{.MsoHyperlink}

Deleting a media entity also deletes the media associated with the
entity.

### []{#sec_ManagingStreamProperties}[]{#_Managing_Stream_Properties}11.4.8 [Managing Stream Properties](#sec_ManagingStreamProperties)

An entity may have one or more *stream properties*. Stream properties
are properties of type `Edm.Stream`.

The values for stream properties do not usually appear in the entity
payload. Instead, the values are generally read or written through URLs.

#### []{#sec_UpdateStreamValues}[11.4.8.1]{#_Ref484619370} [Update Stream Values](#sec_UpdateStreamValues)

A successful `PUT` request to the edit URL of a stream property changes
the media stream associated with that property.

If the stream metadata includes an ETag value, the client SHOULD include
an [`If-Match`](#sec_HeaderIfMatch) header with the ETag value.

The request body MUST contain the new media value for the stream whose
media type MUST be specified in a
[`Content-Type`](#sec_HeaderContentType) header. It may have a
`Content-Length` of zero to set the stream data to empty.

Stream properties MAY specify a list of acceptable media types using an
annotation with term
[`Core.AcceptableMediaTypes`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#AcceptableMediaTypes),
see [**\[OData-VocCore\]**](#VocCore).

[]{#_Ref484615983}[On success, the service MUST respond with
either]{#_Toc477876696}
[`204 No Content`](#sec_ResponseCode204NoContent) and an empty body, or
[`200 OK`](#sec_ResponseCode200OK) if the client specified the
preference
[`return=representation`](#sec_Preferencereturnrepresentationandret)[,
in which case the response body MUST contain the updated media value for
the stream]{style="color:black"}.

Clients MAY change the association between a stream property and a media
stream by modifying the edit URL or read URL of the stream property.
Services supporting this SHOULD advertise it by annotating the stream
property with the term `Capabilities.MediaLocationUpdateSupported`
defined in [**\[OData-VocCap\]**](#VocCapabilities).

#### [11.4.8.2]{#sec_DeleteStreamValues} [Delete Stream Values](#sec_DeleteStreamValues)

A successful `DELETE` request to the edit URL of a stream property
attempts to set the property to null and results in an error if the
property is non-nullable.

Attempting to request a stream property whose value is null results in
[`204 No Content`](#sec_ResponseCode204NoContent).

### []{#sec_ManagingValuesandPropertiesDirectly}[]{#_Ref484616008}[11.4.9]{#_Toc477876697} [Managing Values and Properties Directly](#sec_ManagingValuesandPropertiesDirectly)

Values and properties can be explicitly addressed with URLs. The edit
URL of a property is the edit URL of the entity appended with the path
segment(s) specifying the individual property. The edit URL allows
properties to be individually modified. See
[**\[OData‑URL\]**](#ODataURLRef) for details on addressing individual
properties.

#### []{#sec_UpdateaPrimitiveProperty}[]{#_Ref484617908}[]{#_Update_a_Primitive}11.4.9.1 [Update a Primitive Property](#sec_UpdateaPrimitiveProperty)

A successful `PUT` request to the edit URL for a primitive property
updates the value of the property. The message body MUST contain the new
value, formatted as a single property according to the specified format.

A successful `PUT` request to the edit URL for the [raw
value](#sec_RequestingaPropertysRawValueusingval) of a primitive
property updates the property with the raw value specified in the
payload. The payload MUST be formatted as an appropriate content type
for the raw value of the property.

The same rules apply whether this is a regular property or a dynamic
property.

Upon successful completion the service responds with either
[`200 OK`](#sec_ResponseCode200OK) or
[`204 No Content`](#sec_ResponseCode204NoContent). The client may
request that the response SHOULD include a body by specifying a [Prefer
header](#sec_Preferencereturnrepresentationandret) with a value of
[`return=representation`](#sec_Preferencereturnrepresentationandret).

Services MUST return an error if the property is not updatable.

#### []{#sec_SetaValuetoNull}[]{#_Ref484616017}[]{#_Set_a_Value}11.4.9.2 [Set a Value to Null](#sec_SetaValuetoNull)

A successful `DELETE` request to the edit URL for a structural property,
or to the edit URL of the [raw
value](#sec_RequestingaPropertysRawValueusingval) of a primitive
property, sets the property to null. The request body is ignored and
should be empty.

A `DELETE` request to a non-nullable value MUST fail and the service
respond with `400 Bad Request` or other appropriate error.

The same rules apply whether the target is the value of a regular
property or the value of a dynamic property. A missing dynamic property
is defined to be the same as a dynamic property with value `null`. All
dynamic properties are nullable.

On success, the service MUST respond with `204 No Content` and an empty
body.

Services MUST return an error if the property is not updatable.

[Updating a primitive property](#sec_UpdateaPrimitiveProperty) or a
[complex property](#sec_UpdateaComplexProperty) with a null value also
sets the property to null.

#### []{#sec_UpdateaComplexProperty}[]{#_Ref484617915}[]{#_Update_a_Complex}11.4.9.3 [Update a Complex Property](#sec_UpdateaComplexProperty)

A successful `PATCH` request to the edit URL for a complex typed
property updates that property. The request body MUST contain a single
valid representation for the target complex type.

The service MUST directly modify only those properties of the complex
type specified in the payload of the `PATCH` request.

The service MAY additionally support clients sending a `PUT` request to
a URL that specifies a complex type. In this case, the service MUST
replace the entire complex property with the values specified in the
request body and set all unspecified properties to their default value.

Upon successful completion the service responds with either
[`200 OK`](#sec_ResponseCode200OK) or
[`204 No Content`](#sec_ResponseCode204NoContent). The client may
request that the response SHOULD include a body by specifying a [Prefer
header](#sec_Preferencereturnrepresentationandret) with a value of
[`return=representation`](#sec_Preferencereturnrepresentationandret).

Services MUST return an error if the property is not updatable.

#### []{#sec_UpdateaCollectionProperty}[]{#_Ref484617922}[]{#_Ref484616032}[11.4.9.4]{#_Toc477876701} [Update a Collection Property](#sec_UpdateaCollectionProperty)

A successful `PUT` request to the edit URL of a collection property
updates that collection. The message body MUST contain the desired new
value, formatted as a collection property according to the specified
format.

The service MUST replace the entire value with the value supplied in the
request body.

A successful `POST` request to the edit URL of a collection property
adds an item to the collection. The body of the request MUST be a single
item to be added to the collection. If the collection is ordered, the
item is added to the end of the collection, and
[`$index`](#sec_RequestinganIndividualMemberofanOrde) MAY be used to
specify a zero-based ordinal position to insert the new value, with a
negative value indicating an ordinal position from the end of the
collection.

A successful `DELETE` request to the edit URL of a collection property
deletes all items in that collection.

Since collection members have no individual identity, `PATCH` is not
supported for collection properties.

Upon successful completion the service responds with either
[`200 OK`](#sec_ResponseCode200OK) or
[`204 No Content`](#sec_ResponseCode204NoContent). The client may
request that the response SHOULD include a body by specifying a [Prefer
header](#sec_Preferencereturnrepresentationandret) with a value of
[`return=representation`](#sec_Preferencereturnrepresentationandret).

Services MUST return an error if the property is not updatable.

### []{#sec_ManagingMembersofanOrderedCollection}[]{#_Ref484616038}[11.4.10]{#_Toc477876702} [Managing Members of an Ordered Collection](#sec_ManagingMembersofanOrderedCollection)

Collections annotated with the
[`Core.O``rdered`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#Ordered)
term (see [**\[OData-VocCore\]**](#VocCore)) have a stable order.
Members of an ordered collection of primitive and complex types can be
individually updated or deleted by invoking an update operation against
the URL of the collection appended by a segment containing the
zero-based ordinal of the item within the collection. A negative ordinal
number indexes from the end of the collection, with -1 representing the
last item in the collection.

Entities can be updated using their edit URL and SHOULD NOT be addressed
using an index.

### []{#sec_PositionalInserts}[]{#_Ref484616041}[11.4.11]{#_Toc477876703} [Positional Inserts](#sec_PositionalInserts)

Collections of entity, complex, or primitive types annotated with the
[`Core.``PositionalInsert`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#PositionalInsert)
term (see [**\[OData-VocCore\]**](#VocCore)) support inserting items at
a specific location via `POST` requests to the collection URL using the
`$index` system query option. The value of the `$index` system query
option is the zero-based ordinal position where the item is to be
inserted. The ordinal positions of items within the collection greater
than or equal to the inserted position are increased by one. A negative
ordinal number indexes from the end of the collection, with -1
representing an insert as the last item in the collection.

[Example]{#_Ref484616044} 80: Insert a new email address at the second
position

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[POST
/service/Customers(\'ALFKI\')/EmailAddresses?\$index=1]{style="color:black;background:#D9D9D9"}

[Content-Type: application/json]{style="color:black;background:#D9D9D9"}

[ ]{style="background:#D9D9D9"}

[{]{style="color:black;background:#D9D9D9"}

[  \"value\":
\"alfred@futterkiste.de\"]{style="color:black;background:#D9D9D9"}

[}]{style="color:black;background:#D9D9D9"}
:::

### []{#sec_UpdateaCollectionofEntities}[11.4.12]{#_Ref484619408} [Update a Collection of Entities](#sec_UpdateaCollectionofEntities)

Collections of entities can be updated by submitting a `PATCH` request
to the resource path of the collection. The body of the request MUST be
a [delta payload](#sec_DeltaPayloads), and the resource path of the
collection MUST NOT contain type cast or filter segments, and MUST NOT
contain any system query options that affect the shape of the result.

Added/changed entities are applied as [upserts,](#sec_UpsertanEntity)
and deleted entities as [deletions](#sec_DeleteanEntity). Non-key
properties of deleted entities are ignored. The top-level collection may
include added and deleted links, and related entities represented inline
are updated according to the rules for [treating related entities when
updating an entity](#sec_UpdateRelatedEntitiesWhenUpdatinganE).

Clients MAY associate an id with individual nested entities in the
request by using the
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID)
term defined in [**\[OData-VocCore\]**](#VocCore)[.
]{.MsoHyperlink}Services that respond with `200 OK` SHOULD annotate the
entities in the response using the same
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID)
value as specified in the request.

Services SHOULD advertise support for updating a collection using a
delta payload through the `DeltaUpdateSupported` property of the
[`Capabilities.UpdateRestrictions`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#UpdateRestrictionsType)
term, and SHOULD advertise support for returning the
[`Core.ContentID`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ContentID)
through the `ContentIDSupported` property of the
[`Capabilities.DeepUpdateSupport`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#DeepUpdateSupportType)
term, both defined in [**\[OData-VocCap\]**](#VocCapabilities).

The response, if requested, is a delta payload, in the same structure
and order as the request payload, representing the applied changes.

If the `continue-on-error` preference has been specified and any errors
occur in processing the changes, then a delta response MUST be returned
regardless of the [`return`](#sec_Preferencereturnrepresentationandret)
preference and MUST contain at least the failed changes. The service
represents failed changes in the delta response as follows:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Failed
deletes in the request MUST be represented in the response as either
entities or entity references, annotated with term
`Core.DataModificationException`, see [**\[OData-VocCore\]**](#VocCore).
If the deleted entity specified a reason of `deleted`, the value of
`failedOperation` MUST be `delete`, otherwise `unlink`.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Failed
inserts within the request MUST be represented in the response as
deleted entities annotated with term `Core.DataModificationException`
with a `failedOperation` value of `insert`.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Failed
updates within the request SHOULD be annotated in the response with term
`Core.DataModificationException` with a `failedOperation` value of
`update`.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Failed
added links within the request MUST represented in the response as
deleted links annotated with term `Core.DataModificationException` with
a `failedOperation` value of `link`.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Failed
deleted links within the request MUST represented in the response as
added links annotated with term `Core.DataModificationException` with a
`failedOperation` value of `unlink`.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Collections
within the request MUST be represented in the response as a collection
with the current values and membership of the collection as it exists in
the service after processing the request.

If an individual change fails due to a failed dependency, it MUST be
annotated with term `Core.DataModificationException` and SHOULD specify
a `responseCode` of `424` (Failed Dependency).

Alternatively, the verb `PUT` can be used, in which case the request
body MUST be the representation of a collection of entities. In this
case all entities provided in the request are applied as
[upserts,](#sec_UpsertanEntity) and any entities not provided in the
request are deleted. In this case, if the `continue-on-error` preference
has been specified, and the request returns a success response code,
then a response MUST be returned regardless of the
[`return`](#sec_Preferencereturnrepresentationandret) preference, and
MUST contain the full membership and values of the collection as it
exists in the service.

If the `continue-on-error` preference has not been specified, and the
service is unable to apply all of the changes in the request, then it
MUST return an error response and MUST NOT apply any of the changes
specified in the request payload.

### []{#sec_UpdateMembersofaCollection}[11.4.13]{#_Ref484616099} [Update Members of a Collection](#sec_UpdateMembersofaCollection)

Members of a collection can be updated by submitting a [PATCH]{.Keyword}
request to the URL constructed by appending `/$each` to the resource
path of the collection. The additional path segment expresses that the
request body describes an update to each member of the collection, not
an update to the collection itself.

The resource path of the collection MAY contain type-cast or filter
segments to subset the collection, see
[**\[OData‑URL\]**](#ODataURLRef).

For primitive-typed collections the body of the request MUST be a
primitive value. Each member of the potentially filtered collection is
updated to the specified primitive value.

For collections of structured type, the body of the request MUST be a
full or partial representation of an instance of the collection's
structured type. Each member of the potentially filtered collection is
[updated](#sec_UpdateanEntity) using [PATCH]{.Keyword} semantics.
Structured types MAY include nested collections or delta collections, in
which case the semantics described in [Update a Collection of
Entities](#sec_UpdateaCollectionofEntities) applies.

Example 81: change the color of all beige-brown products

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[PATCH /service/Products/\$filter(@bar)/\$each?@bar=Color eq
\'beige-brown\']{style="color:black;background:#D9D9D9"}

[Content-Type: application/json]{style="color:black;background:#D9D9D9"}

[ ]{style="background:#D9D9D9"}

[{]{style="color:black;background:#D9D9D9"}

[  \"Color\": \"taupe\"]{style="color:black;background:#D9D9D9"}

[}]{style="color:black;background:#D9D9D9"}
:::

The response, if requested, is a collection payload containing the
updated representation of each member identified by the request. If the
update payload includes nested collections or nested delta collections,
then they MUST be included in the response, as described in [Update a
Collection of Entities](#sec_UpdateaCollectionofEntities).

Clients should note that requesting a response may be expensive for
services that could otherwise efficiently apply updates to a (possibly
filtered) collection.

If the `continue-on-error` preference has been specified, the service
MAY continue processing updates after a failure. In this case, the
service MUST return a response containing at least the members of the
collection that failed to update, which MUST be annotated with term
`Core.DataModificationException` with a `failedOperation` value of
`update`.

If the `continue-on-error` preference has not been specified, and the
service is unable to update all of the members identified by the
request, then it MUST return an error response and MUST NOT apply any
updates.

### []{#sec_DeleteMembersofaCollection}[11.4.14]{#_Ref484616106} [Delete Members of a Collection](#sec_DeleteMembersofaCollection)

Members of a collection can be deleted by submitting a
[DELETE]{.Keyword} request to the URL constructed by appending `/$each`
to the resource path of the collection. The additional path segment
expresses that the collection itself is not deleted.

The request resource path of the collection MAY contain type-cast or
filter segments to subset the collection.

Example 82: delete all products older than 3

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[DELETE /service/Products/\$filter(Age gt
3)/\$each]{style="color:black;background:#D9D9D9"}
:::

If the path identifies a collection of entities and if the service
returns a representation, then the response is a delta response
containing a representation of a deleted entity for each deleted member.

If the collection is a collection of entities, then the client MAY
specify the `continue-on-error` preference, in which case the service
MAY continue processing deletes after a failure. In this case, the
service MUST return a response containing at least an entity or entity
reference for each entity identified by the request that failed to
delete, which MUST be annotated with term
`Core.DataModificationException` with a `failedOperation` value of
`delete`.

Clients should note that requesting a response may be expensive for
services that could otherwise efficiently apply deletes to a (possibly
filtered) collection.

If the `continue-on-error` preference has not been specified, and the
service is unable to delete all of the entities identified by the
request, then it MUST return an error response and MUST NOT apply any
changes.

## []{#sec_Operations}11.5 [Operations](#sec_Operations)

Custom operations ([Actions](#sec_Actions)[ ]{.MsoHyperlink}and
[Functions](#sec_Functions)) allow encapsulating logic for modifying or
requesting data that goes beyond simple CRUD described in the preceding
sections of this chapter. See `Action`, `ActionImport`, `Function`, and
`FunctionImport` in [**\[OData-CSDLJSON\]**](#ODataCSDLJSONRef) or[
]{style="color:black;background:white"}[**\[OData-CSDLXML\]**](#ODataCSDLXMLRef).

### []{#sec_BindinganOperationtoaResource}[11.5.1]{#_Toc477876707} [Binding an Operation to a Resource](#sec_BindinganOperationtoaResource)

[Actions](#sec_Actions)[ ]{.MsoHyperlink}and
[Functions](#sec_Functions)[ ]{.MsoHyperlink}MAY be bound to any type or
collection, similar to defining a method in a class in object-oriented
programming. The first parameter of a bound operation is the *binding
parameter*.

The namespace- or alias-qualified name of a bound operation may be
appended to any URL that identifies a resource whose type matches, or is
derived from, the type of the binding parameter. The resource identified
by that URL is used as the *binding parameter value*. Only aliases
defined in the metadata document of the service can be used in URLs.

Example 83: the function `MostRecentOrder` can be bound to any URL that
identifies a `SampleModel.Customer`

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[\<Function Name=\"MostRecentOrder\" IsBound=\"true\"\>\
    \<Parameter Name=\"customer\" Type=\"SampleModel.Customer\" /\>\
    \<ReturnType Type=\"SampleModel.Order\" /\>\
\</Function\>]{style="color:black"}
:::

Example 84: invoke the `MostRecentOrder` function with the value of the
binding parameter `customer` being the entity identified by
`http://host/service/Customers(6)`

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Customers(6)/SampleModel.MostRecentOrder()]{style="color:black"}
:::

[]{#_Advertising_Available_Operations}Example 85: the function
`Comparison` can be bound to any URL that identifies a collection of
entities

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[\<Function Name=\"Comparison\" IsBound=\"true\"\>\
    \<Parameter Name=\"in\" Type=\"Collection(Edm.EntityType)\" /\>\
    \<ReturnType Type=\"Diff.Overview\" /\>\
\</Function\>]{style="color:black"}
:::

Example 86: invoke the `Comparison` function on the set of red products

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET http://host/service/Products/\$filter(Color eq
\'Red\')/Diff.Comparison()]{style="color:black"}
:::

### [11.5.2 Applying an Action to Members of a Collection]{#_Toc12019608}

A bound operation with a single-valued binding parameter can be applied
to each member of a collection by appending the path segment `/$each` to
the resource path of the collection, followed by a forward slash and the
namespace- or alias-qualified name of the bound operation. In this case
the type of the collection members MUST match or be derived from the
type of the binding parameter.

The resource path of the collection MAY contain type-cast or filter
segments to subset the collection.

The response is a collection with members that are instances of the
result type of the bound operation. If the bound operation returns a
collection, the response is a collection of collections.

Example 87: invoke the `MostRecentOrder` function on each entity in the
entity set `Customers`

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET
http://host/service/Customers/\$each/SampleModel.MostRecentOrder()]{style="color:black"}
:::

[The client MAY specify the]{#sec_AdvertisingAvailableOperationswithin}
`continue-on-error` preference, in which case the service MAY continue
processing actions after a failure. In this case, the service MUST,
regardless of the `return` preference, return a response containing at
least the members identified by the request for which the action failed.
Such members MUST be annotated with term
`Core.DataModificationException` with a `failedOperation` value of
`invoke`.

If the `continue-on-error` preference has not been specified, and the
service is unable to invoke the action against all of the entities
identified by the request, then it MUST return an error response and
MUST NOT apply the action to any of the members of the collection.

### 11.5.3 [Advertising Available Operations within a Payload](#sec_AdvertisingAvailableOperationswithin)

Services MAY return actions and/or functions bound to a particular
entity or entity collection as part of the representation of the entity
or entity collection within the payload. The representation of an action
or function depends on the [format](#sec_Formats).

Example 88: given a `GET` request to
`http://host/service/`[Customers(\'ALFKI\')]{.VerbatimChar}, the service
might respond with a Customer that includes the
`SampleEntities.MostRecentOrder` function bound to the entity

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{\
  \"@context\": \...,\
  \"CustomerID\": \"ALFKI\",\
  \"CompanyName\": \"Alfreds Futterkiste\",\
  \"#SampleEntities.MostRecentOrder\": {\
    \"title\": \"Most Recent Order\",\
    \"target\":
\"]{style="color:black"}[[Customers(\'ALFKI\')]{style="color:black"}]{.VerbatimChar}[/SampleEntities.MostRecentOrder()\"\
  },\
  \...\
}]{style="color:black"}
:::

[]{#_Functions_1}An efficient format that assumes client knowledge of
metadata may omit actions and functions from the payload  whose target
URL can be computed via metadata following standard conventions defined
in [**\[OData‑URL\]**](#ODataURLRef).

Services can advertise that a function or action is not available for a
particular instance by setting its value to null.

Example 89: the `SampleEntities.MostRecentOrder` function is not
available for customer \'ALFKI\'

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{\
  \"@context\": \...,\
  \"CustomerID\": \"ALFKI\",\
  \"CompanyName\": \"Alfreds Futterkiste\",\
  \"#SampleEntities.MostRecentOrder\": null,\
  \...\
}]{style="color:black"}
:::

### []{#sec_Functions}[11.5.4]{#_Ref484615770} [Functions](#sec_Functions)

Functions are operations exposed by an OData service that MUST return
data and MUST have no observable side effects.

#### []{#sec_InvokingaFunction}[]{#_Invoking_a_Function}11.5.4.1 [Invoking a Function](#sec_InvokingaFunction)

To invoke a function bound to a resource, the client issues a `GET`
request to a function URL. A function URL may be
[obtained](#sec_AdvertisingAvailableOperationswithin) from a previously
returned entity representation or constructed by appending the
namespace- or alias-qualified function name to a URL that identifies a
resource whose type is the same as, or derived from, the type of the
binding parameter of the function. The value for the binding parameter
is the value of the resource identified by the URL prior to appending
the function name, and additional parameter values are specified using
[inline parameter syntax](#sec_InlineParameterSyntax). If the function
URL is [obtained](#sec_AdvertisingAvailableOperationswithin) from a
previously returned entity representation, [parameter
aliases](#sec_ParameterAliases)[ ]{.MsoHyperlink}that are identical to
the parameter name preceded by an at (`@`) sign MUST be used. Clients
MUST check if the obtained URL already contains a query part and
appropriately precede the parameters either with an ampersand (`&`) or a
question mark (`?`).

Services MAY additionally support invoking functions using the
unqualified function name by defining one or more [default
namespaces](#sec_DefaultNamespaces) through the
[`Core.DefaultNamespace`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#DefaultNamespace)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}term defined in 
[**\[OData-VocCore\]**](#VocCore).

Functions can be used within [`$filter`](#sec_SystemQueryOptionfilter)
or [`$orderby`](#sec_SystemQueryOptionorderby) system query options.
Such functions can be bound to a resource, as described above, or called
directly by specifying the namespace- (or alias-) qualified function
name. Parameter values for functions within
[`$filter`](#sec_SystemQueryOptionfilter) or
[`$orderby`](#sec_SystemQueryOptionorderby) are specified according to
the [inline parameter syntax](#sec_InlineParameterSyntax).

To invoke a function through a function import the client issues a `GET`
request to a URL identifying the function import and passing parameter
values using [inline parameter syntax](#sec_InlineParameterSyntax). The
canonical URL for a function import is the service root, followed by the
name of the function import. Services MAY support omitting the
parentheses when invoking a function import with no parameters, but for
maximum interoperability MUST also support invoking the function import
with empty parentheses.

If the function is composable, additional path segments may be appended
to the URL that identifies the composable function (or function import)
as appropriate for the type returned by the function (or function
import). The last path segment determines the system query options and
HTTP verbs that can be used with this this URL, e.g. if the last path
segment is a multi-valued navigation property, a `POST` request may be
used to create a new entity in the identified collection.

Example 90: add a new item to the list of items of the shopping cart
returned by the composable `MyShoppingCart` function import

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[POST
]{style="color:black"}]{.VerbatimChar}[http://host/service/MyShoppingCart()]{style="color:black"}[[/Items]{style="color:black"}]{.VerbatimChar}

[ ]{.VerbatimChar}

[[\...]{style="color:black"}]{.VerbatimChar}
:::

Parameter values passed to functions MUST be specified either as a URL
literal (for primitive values) or as a JSON formatted OData object (for
complex values, or collections of primitive or complex values). Entity
typed values are passed as JSON formatted entities that MAY include a
subset of the properties, or just the entity reference, as appropriate
to the function.  

If a collection-valued function has no result for a given parameter
value combination, the response is the format-specific representation of
an empty collection. If a single-valued function with a nullable
return-type has no result, the service returns
[`204 No Content`](#sec_ResponseCode204NoContent).

If a single-valued function with a non-nullable return type has no
result, the service returns `4xx`. For functions that return a single
entity [`404 Not Found`](#sec_ResponseCode404NotFound) is the
appropriate response code.

For a composable function the processing is stopped when the function
result requires a `4xx` response, and continues otherwise.

Function imports preceded by the `$root` literal MAY be used in the
[`$filter`](#sec_SystemQueryOptionfilter) or
[`$orderby`](#sec_SystemQueryOptionorderby) system query options, see
[**\[OData‑URL\]**](#ODataURLRef).

##### []{#sec_InlineParameterSyntax}[]{#_Inline_Parameter_Syntax}11.5.4.1.1 [Inline Parameter Syntax](#sec_InlineParameterSyntax)

Parameter values are specified inline by appending a comma-separated
list of parameter values, enclosed by parenthesis to the function name.

Each parameter value is represented as a name/value pair in the format
`Name=Value`, where `Name` is the name of the parameter to the function
and `Value` is the parameter value.

Example 91: invoke a `Sales.EmployeesByManager` function which takes a
single `ManagerID` parameter via the function import
`EmployeesByManager`

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[GET
http://host/service/EmployeesByManager(ManagerID=3)]{style="color:black"}]{.VerbatimChar}
:::

Example 92: return all `Customers` whose City property returns
\"Western\" when passed to the `Sales.SalesRegion` function

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[GET http://host/service/Customers?\
                         \$filter=Sales.SalesRegion(City=\$it/City) eq
\'Western\']{style="color:black"}]{.VerbatimChar}
:::

[]{#_Parameter_Aliases}A [parameter alias](#sec_ParameterAliases)[
]{.MsoHyperlink}can be used in place of an inline parameter value. The
value for the alias is specified as a separate query option using the
name of the parameter alias.

Example 93: invoke a `Sales.EmployeesByManager` function via the
function import `EmployeesByManager`, passing 3 for the `ManagerID`
parameter

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[GET
http://host/service/EmployeesByManager(ManagerID=@p1)?@p1=3]{style="color:black"}]{.VerbatimChar}
:::

[]{#_Parameter_Name_Syntax}Services MAY in addition allow implicit
[parameter aliases](#sec_ParameterAliases)[ ]{.MsoHyperlink}[[for
function imports and for functions that are the last path segment of the
URL. An implicit parameter alias is the parameter name, optionally
preceded by an at
(]{style="color:windowtext"}]{.MsoHyperlink}[@]{.Keyword}[[) sign. When
using implicit parameter aliases, parentheses MUST NOT be appended to
the function (import) name. The
]{style="color:windowtext"}]{.MsoHyperlink}value for each parameter MUST
be specified as a separate query option with the name of the parameter
alias. If a parameter name is identical to a system query option name
(without the optional `$` prefix), the parameter name MUST be prefixed
with an at ([@]{.Keyword}[[)
sign.]{style="color:windowtext"}]{.MsoHyperlink}

Example 94: invoke a `Sales.EmployeesByManager` function via the
function import `EmployeesByManager`, passing 3 for the `ManagerID`
parameter using the implicit parameter alias

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[GET
http://host/service/EmployeesByManager?ManagerID=3]{style="color:black"}]{.VerbatimChar}
:::

[Non-binding parameters annotated with the term]{#_Toc477876712}
[`Core.OptionalParameter`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#OptionalParameter)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}defined in
[**\[OData-VocCore\]**](#VocCore) MAY be omitted. If it is annotated and
the annotation specifies a `DefaultValue`, the omitted parameter is
interpreted as having that default value. If omitted and the annotation
does not specify a default value, the service is free on how to
interpret the omitted parameter.

#### [11.5.4.2]{#sec_Functionoverloadresolution} [Function overload resolution](#sec_Functionoverloadresolution)

The same function name may be used multiple times within a schema, each
with a different set of parameters. For unbound overloads the
combination of the function name and the unordered set of parameter
names MUST identify a particular function overload. For bound overloads
the combination of the function name, the binding parameter type, and
the unordered set of names of the non-binding parameters MUST identify a
particular function overload.

All unbound overloads MUST have the same return type. Also, all bound
overloads with a given binding parameter type MUST have the same return
type.

If the function is bound and the binding parameter type is part of an
inheritance hierarchy, the function overload is selected based on the
type of the URL segment preceding the function name. A type-cast segment
can be used to select a function defined on a particular type in the
hierarchy, see [**\[OData‑URL\]**](#ODataURLRef).

Non-binding parameters MAY be marked as optional by annotating them with
the term
[`Core.OptionalParameter`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#OptionalParameter)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}defined in
[**\[OData-VocCore\]**](#VocCore). All parameters marked as optional
MUST come after any parameters not marked as optional.

A function overload is selected if

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
set of specified parameters exactly matches a function overload, or else

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
set of specified parameters matches a subset of parameters that includes
all non-optional parameters of exactly one function overload.

Services SHOULD avoid ambiguity, i.e. the combination of the function
name, the unordered set of *non-optional* non-binding parameter names,
plus the binding parameter type for bound overloads SHOULD identify a
particular function overload. If there is ambiguity, then services MAY
return `400 Bad Request` with an error response body stating that the
request was ambiguous.

### []{#sec_Actions}[]{#_Ref484616119}[]{#_Actions_1}11.5.5 [Actions](#sec_Actions)

Actions are operations exposed by an OData service that MAY have side
effects when invoked. Actions MAY return data but` `MUST NOT be further
composed with additional path segments.

#### []{#sec_InvokinganAction}[]{#_Invoking_an_Action}11.5.5.1 [Invoking an Action](#sec_InvokinganAction)

To invoke an action bound to a resource, the client issues a `POST`
request to an action URL. An action URL may be
[obtained](#sec_AdvertisingAvailableOperationswithin) from a previously
returned entity representation or constructed by appending the
namespace- or alias-qualified action name to a URL that identifies a
resource whose type is the same as, or derives from, the type of the
binding parameter of the action. The value for the binding parameter is
the resource identified by the URL preceding the action name, and only
the non-binding parameter values are passed in the request body
according to the particular format.

Services MAY additionally support invoking actions using the unqualified
action name by defining one or more [default
namespaces](#sec_DefaultNamespaces) through the
[`Core.DefaultNamespace`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#DefaultNamespace)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}term defined in 
[**\[OData-VocCore\]**](#VocCore).

To invoke an action through an action import, the client issues a `POST`
request to a URL identifying the action import. The canonical URL for an
action import is the service root, followed by the name of the action
import. When invoking an action through an action import all parameter
values MUST be passed in the request body according to the particular
format.

Non-binding parameters that are nullable or annotated with the term
[`Core.OptionalParameter`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#OptionalParameter)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}defined in
[**\[OData-VocCore\]**](#VocCore) MAY be omitted from the request body.
If an omitted parameter is not annotated (and thus nullable), it MUST be
interpreted as having the `null` value. If it is annotated and the
annotation specifies a `DefaultValue`, the omitted parameter is
interpreted as having that default value. If omitted and the annotation
does not specify a default value, the service is free on how to
interpret the omitted parameter. Note: a nullable non-binding parameter
is equivalent to being annotated as optional with a default value of
`null`.

4.01 services MUST support invoking actions with no non-binding
parameters and parameterless action imports both without a request body
and with a request body representing no parameters, according to the
particular format. Interoperable clients SHOULD always include a request
body, even when invoking actions with no non-binding parameters and
parameterless action imports.

If the action returns results, the client SHOULD use content type
negotiation to request the results in the desired format, otherwise the
default content type will be used.

The client can request whether any results from the action be returned
using the [`return Prefer`
header](#sec_Preferencereturnrepresentationandret).

Actions that create and return a single entity follow the rules for
[entity creation](#sec_CreateanEntity) and return a [`Location`
header](#sec_HeaderLocation) that contains the edit URL or read URL of
the created entity.

Actions without a return type respond with
[`204 No Content`](#sec_ResponseCode204NoContent) on success.

To request processing of the action only if the binding parameter value,
an entity or collection of entities, is unmodified, the client includes
the [`If-Match`](#sec_HeaderIfMatch) header with the latest known ETag
value for the entity or collection of entities. The ETag value for a
collection as a whole is transported in the `ETag` header of a
collection response.

Example 95: invoke the `SampleEntities.CreateOrder` action using
`/Customers('ALFKI'`[[)
]{style="font-family:\"Calibri\",sans-serif"}]{.VerbatimChar}as the
customer (or binding parameter). The values `2` for the `quantity`
parameter and `BLACKFRIDAY` for the `discountCode` parameter are passed
in the body of the request. Invoke the action only if the customer's
ETag still matches.

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[POST
http://host/service/Customers(\'ALFKI\')/SampleEntities.CreateOrder]{style="color:black"}]{.VerbatimChar}

[[If-Match:
W/\"MjAxOS0wMy0yMVQxMzowNVo=\"]{style="color:black"}]{.VerbatimChar}

[[\
{\
   \"items\": \[]{style="color:black"}]{.VerbatimChar}

[[     { \"product\": 4001, \"quantity\": 2 },\
     { \"product\": 7062, \"quantity\": 1
}]{style="color:black"}]{.VerbatimChar}

[[   \],\
   \"discountCode\": \"BLACKFRIDAY\"\
}]{style="color:black"}]{.VerbatimChar}
:::

#### []{#sec_ActionOverloadResolution}[11.5.5.2]{#_Toc477876715} [Action Overload Resolution](#sec_ActionOverloadResolution)

The same action name may be used multiple times within a schema provided
there is at most one unbound overload, and each bound overload specifies
a different binding parameter type.

If the action is bound and the binding parameter type is part of an
inheritance hierarchy, the action overload is selected based on the type
of the URL segment preceding the action name. A type-cast segment can be
used to select an action defined on a particular type in the hierarchy,
see [**\[OData‑URL\]**](#ODataURLRef).

## []{#_Ref356811917}[]{#sec_AsynchronousRequests}[]{#_Functions}[]{#_Batch_Requests}[]{#_Asynchronous_Requests}11.6 [Asynchronous Requests](#sec_AsynchronousRequests)

A [Prefer](#sec_HeaderPrefer) header with a
[`respond-async`](#sec_Preferencerespondasync)` `preference allows
clients to request that the service process a [Data Service
Request](#sec_DataServiceRequests) asynchronously.

If the client has specified` respond-async` in the request, the service
MAY process the request asynchronously and return a
[`202 Accepted`](#sec_ResponseCode202Accepted)` `response. A service
MUST NOT reply to a [Data Service Request](#sec_DataServiceRequests)
with `202 Accepted`[[ ]{style="font-family:
\"Arial\",sans-serif"}]{.Datatype}if the request has not included the
`respond-async` preference.

Responses that return `202 Accepted` MUST include a [`Location`
header](#sec_HeaderLocation) pointing to a *status monitor resource*
that represents the current state of the asynchronous processing in
addition to an optional [`Retry-After` header](#sec_HeaderRetryAfter)[
]{.MsoHyperlink}indicating the time, in seconds, the client should wait
before querying the service for status. Services MAY include a response
body, for example, to provide additional status information.

A `GET` request to the status monitor resource again returns
`202 Accepted `response if the asynchronous processing has not finished.
This response MUST again[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}include a
[`Location` header](#sec_HeaderLocation)[ ]{.MsoHyperlink}and MAY
include a [`Retry-After` header](#sec_HeaderRetryAfter) to be used for a
subsequent request. The `Location` header and optional `Retry-After`
header may or may not contain the same values as returned by the
previous request.

A `GET` request to the status monitor resource returns `200 OK` once the
asynchronous processing has completed. For OData 4.01 and greater
responses, or OData 4.0 requests that include an `Accept `header that
does not specify
`application/http`[[,]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
the response MUST include the [`AsyncResult`](#sec_HeaderAsyncResult)
[[response header. Any other headers, along with the response body,
represent the result of the completed asynchronous operation.
]{style="color:windowtext"}]{.MsoHyperlink}If the `GET` request to the
status monitor includes an `OData-MaxVersion `header with a value of
`4.0` and no `Accept`[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}header, or an
`Accept`[[ ]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}header
that includes `application/http`, then the body of the final `200 OK`
response MUST be represented as an HTTP message, as described in
[**\[RFC7230\]**](#HTTPMessage)[**,** ]{.MsoHyperlink}which is the full
HTTP response to the completed asynchronous operation.

A `DELETE` request sent to the status monitor resource requests that the
asynchronous processing be canceled. A `200 OK` or a
`204 No Content `response indicates that the asynchronous processing has
been successfully canceled. A client can request that the `DELETE`
should be executed asynchronously. A `202 Accepted` response indicates
that the cancellation is being processed asynchronously; the client can
use the returned [`Location` header](#sec_HeaderLocation) (which MUST be
different from the status monitor resource of the initial request) to
query for the status of the cancellation. If a delete request is not
supported by the service, the service returns
[`405 Method Not Allowed`](#sec_ResponseCode405MethodNotAllowed)`.`

After a successful `DELETE` request against the status monitor resource,
any subsequent `GET` requests for the same status monitor resource
returns [`404 Not Found`](#sec_ResponseCode404NotFound).

If an asynchronous request is cancelled for reasons other than the
consumers issuing a `DELETE` request against the status monitor
resource, a `GET` request to the status monitor resource returns
`200 OK` with a response body containing a single HTTP response with a
status code in the `5xx Server Error` range indicating that the
operation was cancelled.

The service MUST ensure that no observable change has occurred as a
result of a canceled request.

If the client waits too long to request the result of the asynchronous
processing, the service responds with a [`410`
`Gone`](#sec_ResponseCode410Gone) or
[`404 Not Found`](#sec_ResponseCode404NotFound).

The status monitor resource URL MUST differ from any other resource URL.

## []{#sec_BatchRequests}[]{#_Ref484616127}[]{#_Batch_Requests_1}11.7 [Batch Requests](#sec_BatchRequests)

Batch requests allow grouping multiple individual requests into a single
HTTP request payload. An individual request in the context of a batch
request is a [Metadata Request](#sec_MetadataRequests), [Data
Request](#sec_RequestingData)[,]{.MsoHyperlink} [Data Modification
Request](#sec_DataModification), [Action
invocation](#sec_InvokinganAction)[ ]{.MsoHyperlink}request,[
]{.MsoHyperlink}or [Function invocation](#sec_InvokingaFunction)
request.

Batch requests are submitted as a single HTTP `POST` request to the
batch endpoint of a service, located at the URL `$batch` relative to the
service root.

Individual requests within a batch request are evaluated according to
the same semantics used when the request appears outside the context of
a batch request.

A batch request is represented using either the [multipart batch
format](#sec_MultipartBatchFormat) defined in this document or the JSON
batch format defined in
[**\[OData-JSON\]**](#ODataJSONRef)[**.**]{.MsoHyperlink}

### []{#sec_BatchRequestHeaders}11.7.1 [Batch Request Headers](#sec_BatchRequestHeaders)

A batch request using the [multipart batch
format](#sec_MultipartBatchFormat) MUST contain a
[`Content-Type`](#sec_HeaderContentType) header specifying a content
type of `multipart/mixed` and a `boundary` parameter as defined in
[**\[RFC2046\]**](#RFC2046).

Example 96: multipart batch request

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[POST /service/\$batch HTTP/1.1]{style="color:black"}]{.VerbatimChar}[\
]{style="font-size:6.0pt;color:black"}[[Host:
odata.org]{style="color:black"}]{.VerbatimChar}[\
]{style="font-size:6.0pt;color:black"}[[OData-Version: 4.0
]{style="color:black"}]{.VerbatimChar}[\
]{style="font-size:6.0pt;color:black"}[[Content-Type: multipart/mixed;
boundary=batch_36522ad7-fc75-4b56-8c71-56071383e77b]{style="color:black"}]{.VerbatimChar}[\
\
]{style="font-size:6.0pt;color:black"}[[\<Multipart Batch request
body\>]{style="color:black"}]{.VerbatimChar}
:::

A batch request using the JSON batch format MUST contain a
`Content-Type` header specifying a content type of `application/json`.

 Example 97: JSON batch request

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[POST /service/\$batch HTTP/1.1]{style="color:black"}]{.VerbatimChar}[\
]{style="font-size:6.0pt;color:black"}[[Host:
odata.org]{style="color:black"}]{.VerbatimChar}[\
]{style="font-size:6.0pt;color:black"}[[OData-Version: 4.01
]{style="color:black"}]{.VerbatimChar}[\
]{style="font-size:6.0pt;color:black"}[[Content-Type:
application/json]{style="color:black"}]{.VerbatimChar}[\
\
]{style="font-size:6.0pt;color:black"}[[\<JSON Batch request
body\>]{style="color:black"}]{.VerbatimChar}
:::

Batch requests SHOULD contain the applicable `OData-Version` header.

Batch requests SHOULD contain an [`Accept`](#sec_HeaderAccept) header
specifying the desired batch response format, either `multipart/mixed`
or `application/json`. If no `Accept` header is provided, services
SHOULD respond with the content type of the request.

[If the set of request headers of a batch request are valid the service
MUST return a]{#_Toc370126141} [`200 OK`](#sec_ResponseCode200OK) HTTP
response code to indicate that the batch request was accepted for
processing, but the processing is yet to be completed. The individual
requests within the body of the batch request may subsequently fail or
be malformed; however, this enables batch implementations to stream the
results.

If the service receives a batch request with an invalid set of headers
it MUST return a [`4xx response code`](#sec_ClientErrorResponses) and
perform no further processing of the batch request.

### [11.7.2]{#sec_RequestDependencies} [Request Dependencies](#sec_RequestDependencies)

Requests within a batch may have dependencies on other requests
according to the particular batch format.

In the JSON format, requests may explicitly declare a dependency on
other requests that must be successfully processed before the current
request. In addition, requests may be specified as part of an *atomicity
group* whose members MUST either all succeed, or all fail. If a request
fails, then any dependent requests within the JSON format return
[`424 Failed Dependency`](#sec_ResponseCode424FailedDependency).

In the Multipart format, [data modification](#sec_DataModification)
requests or [action invocation](#sec_InvokinganAction) requests may be
grouped as part of an atomic change set. Operations outside the change
set are executed sequentially, while operations within the change set
may be executed in any order.

### []{#sec_IdentifyingIndividualRequests}[11.7.3]{#_Toc477876720} [Identifying Individual Requests](#sec_IdentifyingIndividualRequests)

Each individual request within a batch request MAY have a request
identifier assigned. The request identifier is case-sensitive, MUST be
unique within the batch request, and MUST satisfy the rule `request-id`
in [**\[OData-ABNF\]**](#ABNF).

The representation of the request identifier is format-specific, as are
the rules for which individual requests require an identifier.

### []{#sec_ReferencingReturnedEntities}[11.7.4]{#_Toc477876721} [Referencing Returned Entities](#sec_ReferencingReturnedEntities)

Entities created by an [insert](#sec_CreateanEntity) request can be
referenced in the request URL of subsequent requests by using the
request identifier prefixed with a `$` character as the first segment of
the request URL.

If the `$`-prefixed request identifier is identical to the name of a
top-level system resource (`$batch`, `$crossjoin,` `$all,` `$entity`,
`$root`, `$id`, `$metadata`, or other system resources defined according
to the [`OData-Version`](#sec_HeaderODataVersion) of the protocol
specified in the request), then the reference to the top-level system
resource is used. This collision can be avoided by e.g. using only
numeric request identifiers.

Services MAY also support referencing within request bodies, in which
case they SHOULD advertise this support by specifying the
`ReferencesInRequestBodiesSupported` property in the
[`Capabilities.BatchSupport`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#BatchSupport)
term applied to the entity container, see
[**\[OData-VocCap\]**](#VocCapabilities).

### []{#sec_ReferencingtheETagofanEntity}[11.7.5]{#_Toc477876722} [Referencing the ETag of an Entity](#sec_ReferencingtheETagofanEntity)

Services MAY support the use of an ETag returned from a previous
operation in an [`If-Match`](#sec_HeaderIfMatch) or
[`If-None-Match`](#sec_HeaderIfNoneMatch) header of a subsequent
statement. Services SHOULD advertise this support by specifying the
`EtagReferencesSupported `property in the
[`Capabilities.BatchSupport`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#BatchSupport)
annotation term applied to the entity container, see
[**\[OData-VocCap\]**](#VocCapabilities).

The ETag for a previous operation can be referenced by using the request
identifier prefixed with a `$` character as the unquoted value of the
`If-Match` or `If-None-Match` header.

### []{#sec_ReferencingValuesfromResponseBodies}[11.7.6]{#_Toc477876723} [Referencing Values from Response Bodies](#sec_ReferencingValuesfromResponseBodies)

Services MAY support using values from a response body in the query part
of the URL or in the request body of subsequent requests. Value
references consist of a `$` character, followed by the request
identifier of the preceding request, and optionally followed by a valid
OData path.

If the `$`-prefixed request identifier is identical to the name of a
predefined literal for query expressions (`$it`, `$root`, or other
literals defined according to the
[`OData-Version`](#sec_HeaderODataVersion) of the protocol specified in
the request), then the predefined literal is used. This collision can be
avoided by e.g. using only numeric request identifiers.

### []{#sec_MultipartBatchFormat}[11.7.7]{#_Toc477876724} [Multipart Batch Format](#sec_MultipartBatchFormat)

The multipart batch format is represented as a Multipart Media Type
message [**\[RFC2046\]**](#RFC2046), a standard format allowing the
representation of multiple parts, each of which may have a different
content type.

#### []{#sec_MultipartBatchRequestBody}[11.7.7.1]{#_Toc477876725} [Multipart Batch Request Body](#sec_MultipartBatchRequestBody)

The body of a multipart batch request is made up of a series of
individual requests and *change sets*, each represented as a distinct
body part (i.e. preceded by a boundary delimiter line consisting of two
dashes and the value of the `boundary` parameter specified in the
`Content-Type` header, and the last body part followed by a closing
boundary delimiter line consisting of two dashes, the boundary, and
another two dashes).

A body part representing an individual request MUST include a
`Content-Type` header with value `application/http`.

The contents of a body part representing a change set MUST itself be a
multipart document (see [**\[RFC2046\]**](#RFC2046)) with one body part
for each operation in the change set.
[[E]{style="font-size:8.0pt"}]{.MsoCommentReference}ach body part
representing an operation in the change set MUST specify a `Content-ID`
header with a [request identifier](#sec_IdentifyingIndividualRequests)
that is unique within the batch request.

A `Content-Transfer-Encoding` header with value `binary` may be included
for historic reasons although this header is not used by HTTP and only
needed for transmission via E-Mail. Neither clients nor services should
rely on this header being present.

Preambles and epilogues in the multipart batch request body, as defined
in [**\[RFC2046\]**](#RFC2046), are valid but are assigned no meaning
and thus MUST be ignored by processors of multipart batch requests.

The request URL of individual requests within a batch request or change
set can use one of the following three formats:

-   Absolute URI with schema, host, port, and absolute resource path.

Example 98:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET https://host:1234/path/service/People(1) HTTP/1.1 ]{style="color:black"}
:::

-   Absolute resource path and separate [Host]{.Keyword} header

Example 99:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET /path/service/People(1) HTTP/1.1]{style="color:black"}

[Host: myserver.mydomain.org:1234]{style="color:black"}
:::

-   Resource path relative to the batch request URI.

Example 100:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[GET People(1) HTTP/1.1]{style="color:black"}
:::

Services MUST support all three formats for URLs of individual requests.

URLs must be correctly percent-encoded. For relative URLs this means
that colons in the path part, especially within key values, MUST be
percent-encoded to avoid confusion with the scheme separator. Colons
within the query part, i.e. after the question mark character (`?`),
need not be percent-encoded.

Each body part that represents a single request MUST NOT include:

-   `authentication` or `authorization` related HTTP headers
-   `Expect`, `From`, `Max-Forwards`, `Range`, or `TE` headers

Processors of batch requests MAY choose to disallow additional HTTP
constructs in HTTP requests serialized within body parts. For example, a
processor may choose to disallow chunked encoding to be used by such
HTTP requests.

Example []{#BatchRequestExampleNumber}101: a batch request that contains
the following individual requests in the order listed

1.[     ]{style="font:7.0pt \"Times New Roman\""}A query request

2.[     ]{style="font:7.0pt \"Times New Roman\""}A change set that
contains the following requests:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Insert
entity (with `Content-ID = 1`)

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Update
entity (with `Content-ID = 2`)

3.[     ]{style="font:7.0pt \"Times New Roman\""}A second query request

Note: For brevity, in the example, request bodies are excluded in favor
of English descriptions inside `<>` brackets and `OData-Version` headers
are omitted.

Note also that the two empty lines after the `Host` header of the `GET`
request are necessary: the first is part of the `GET` request header;
the second is the empty body of the `GET` request, followed by a `CRLF`
according to [**\[RFC2046\]**](#RFC2046)[.]{.MsoHyperlink}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[POST /service/\$batch HTTP/1.1\
Host: host\
OData-Version: 4.0\
Content-Type: multipart/mixed;
boundary=batch_36522ad7-fc75-4b56-8c71-56071383e77b]{style="color:black"}

[Content-Length: \###]{style="color:black"}

 

[\--batch_36522ad7-fc75-4b56-8c71-56071383e77b\
Content-Type: application/http\
\
GET /service/Customers(\'ALFKI\')\
Host: host\
\
\
\--batch_36522ad7-fc75-4b56-8c71-56071383e77b\
Content-Type: multipart/mixed;
boundary=changeset_77162fcd-b8da-41ac-a9f8-9357efbbd\
\
]{style="color:black"}

[\--changeset_77162fcd-b8da-41ac-a9f8-9357efbbd\
Content-Type: application/http\
Content-ID: 1\
\
POST /service/Customers HTTP/1.1\
Host: host\
Content-Type: application/json\
Content-Length: \###\
\
\<JSON representation of a new Customer\>]{style="color:black"}

[\--changeset_77162fcd-b8da-41ac-a9f8-9357efbbd\
Content-Type: application/http\
Content-ID: 2\
\
PATCH /service/Customers(\'ALFKI\') HTTP/1.1\
Host: host\
Content-Type: application/json\
If-Match: xxxxx ]{style="color:black"}

[Prefer: return=minimal\
Content-Length: \###\
\
\<JSON representation of changes to Customer
ALFKI\>]{style="color:black"}

[\--changeset_77162fcd-b8da-41ac-a9f8-9357efbbd\--\
\--batch_36522ad7-fc75-4b56-8c71-56071383e77b\
Content-Type: application/http\
\
GET /service/Products HTTP/1.1\
Host: host\
\
\
\--batch_36522ad7-fc75-4b56-8c71-56071383e77b\--]{style="color:black"}
:::

#### []{#sec_ReferencingNewEntities}[]{#_Change_Sets}11.7.7.2 [Referencing New Entities](#sec_ReferencingNewEntities)

Entities created by an [Insert](#sec_CreateanEntity) request can be
referenced in the request URL of subsequent requests within the same
change set. Services MAY also support referencing across change sets, in
which case they SHOULD advertise this support by specifying the
`ReferencesAcrossChangeSetsSupported` property in the
[`Capabilities.BatchSupport`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#BatchSupport)
term applied to the entity container, see
[**\[OData-VocCap\]**](#VocCapabilities).

Example 102: a batch request that contains the following operations in
the order listed:

A change set that contains the following requests:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Insert
a new entity (with `Content-ID = 1`)

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Insert
a second new entity (references request with `Content-ID = 1`)

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[POST /service/\$batch HTTP/1.1\
Host: host\
OData-Version: 4.0\
Content-Type: multipart/mixed;
boundary=batch_36522ad7-fc75-4b56-8c71-56071383e77b\
Content-Length: \###\
\
\--batch_36522ad7-fc75-4b56-8c71-56071383e77b\
Content-Type: multipart/mixed;
boundary=changeset_77162fcd-b8da-41ac-a9f8-9357efbbd\
\
\--changeset_77162fcd-b8da-41ac-a9f8-9357efbbd\
Content-Type: application/http\
Content-ID: 1\
\
POST /service/Customers HTTP/1.1\
Host: host \
Content-Type: application/json\
Content-Length: \###\
\
\<JSON representation of a new Customer entity\>\
\--changeset_77162fcd-b8da-41ac-a9f8-9357efbbd\
Content-Type: application/http\
Content-ID: 2]{style="color:black"}

[\
POST \$1/Orders HTTP/1.1\
Host: host\
Content-Type: application/json\
Content-Length: \###\
\
\<JSON representation of a new Order\>\
\--changeset_77162fcd-b8da-41ac-a9f8-9357efbbd\--\
\--batch_36522ad7-fc75-4b56-8c71-56071383e77b\--]{style="color:black"}
:::

#### []{#sec_ReferencinganETag}[11.7.7.3]{#_Toc477876727} [Referencing an ETag](#sec_ReferencinganETag)

Example 103: a batch request that contains the following operations in
the order listed:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Get
an Employee (with `Content-ID = 1`)

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Update
the salary only if the employee has not changed

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[POST /service/\$batch HTTP/1.1\
Host: host\
OData-Version: 4.0\
Content-Type: multipart/mixed;
boundary=batch_36522ad7-fc75-4b56-8c71-56071383e77b\
Content-Length: \###\
\
\--batch_36522ad7-fc75-4b56-8c71-56071383e77b\
Content-Type: application/http\
Content-ID: 1\
\
GET /service/Employees(0) HTTP/1.1\
Host: host \
Accept: application/json]{style="color:black"}

[\
\
]{style="color:black"}

[\--batch_36522ad7-fc75-4b56-8c71-56071383e77b\
Content-Type: application/http\
Content-ID: 2]{style="color:black"}

[\
PATCH /service/Employees(0) HTTP/1.1\
Host: host\
Content-Type: application/json\
Content-Length: \###\
If-Match: \$1\
\
]{style="color:black"}

[{]{style="color:black"}

[   \"Salary\": 75000]{style="color:black"}

[}]{style="color:black"}

[\--batch_36522ad7-fc75-4b56-8c71-56071383e77b\--]{style="color:black"}
:::

#### []{#sec_ProcessingaMultipartBatchRequest}[11.7.7.4]{#_Toc477876728} [Processing a Multipart Batch Request](#sec_ProcessingaMultipartBatchRequest)

The service MUST process the individual requests and change sets within
a multipart batch request in the order received. Processing stops on the
first error unless the
[`continue-on-error`](#sec_Preferencecontinueonerrorodatacontin)
preference is specified with an explicit or implicit value of `true`.

All requests in a change set represent a single change unit so a service
MUST successfully process and apply all the requests in the change set
or else apply none of them. It is up to the service implementation to
define rollback semantics to undo any requests within a change set that
may have been applied before another request in that same change set
failed and thereby apply this all-or-nothing requirement. The service
MAY execute the requests within a change set in any order and MAY return
the responses to the individual requests in any order. If a request
specifies a request identifier, the service MUST include the
`Content-ID` header with the request identifier in the corresponding
response so clients can correlate requests and responses.

#### []{#sec_MultipartBatchResponse}[11.7.7.5]{#_Toc477876729} [Multipart Batch Response](#sec_MultipartBatchResponse)

A multipart response to a batch request MUST contain a `Content-Type`
header with value `multipart/mixed.`

The body of a multipart response to a multipart batch request MUST
structurally match one-to-one with the multipart batch request body,
such that the same multipart message structure defined for requests is
used for responses. There are three exceptions to this rule:

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}When
a request within a change set fails, the change set response is not
represented using the `multipart/mixed` media type. Instead, a single
response, using the `application/http` media type, is returned that
applies to all requests in the change set and MUST be a valid OData
error response.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}When
an error occurs processing a request and the
[`continue-on-error`](#sec_Preferencecontinueonerrorodatacontin)
preference is not specified, or specified with an explicit value of
`false`, processing of the batch is terminated and the error response is
the last part of the multipart response.

[·[        
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[Asynchronously
processed batch requests](#sec_AsynchronousBatchRequests) can return
interim results and end with a `202 Accepted` as the last part of the
multipart response. Therefore, the
[`respond-async`](#sec_Preferencerespondasync) preference MUST NOT be
applied to individual requests within a batch if the batch response is a
multipart response.

The body of a multipart response to a JSON batch request contains one
body part for each processed or accepted request. The order of the body
parts is insignificant as each body part MUST contain the `Content-ID`
header with the value of the `id` name/value pair of the corresponding
request object.

A response to an operation in a batch MUST be formatted exactly as it
would have appeared outside of a batch as described in the corresponding
subsections of chapter [Data Service
Requests](#sec_DataServiceRequests). Relative URLs in each individual
response are relative to the request URL of the corresponding individual
request. URLs in responses MUST NOT contain `$`-prefixed request
identifiers.

Example 104: referencing the batch request example 101 above, assume all
the requests except the final query request succeed. In this case the
response would be

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[HTTP/1.1 200 Ok\
OData-Version: 4.0\
Content-Length: \####\
Content-Type: multipart/mixed; boundary=b_243234_25424_ef_892u748\
\
]{style="color:black"}

[\--b_243234_25424_ef_892u748\
Content-Type: application/http\
\
HTTP/1.1 200 Ok\
Content-Type: application/json\
Content-Length: \###\
\
\<JSON representation of the Customer entity with key
ALFKI\>]{style="color:black"}

[\--b_243234_25424_ef_892u748\
Content-Type: multipart/mixed;
boundary=cs_12u7hdkin252452345eknd_383673037\
\
]{style="color:black"}

[\--cs_12u7hdkin252452345eknd_383673037\
Content-Type: application/http\
Content-ID: 1\
\
]{style="color:black"}

[HTTP/1.1 201 Created\
Content-Type: application/json\
Location: http://host/service.svc/Customer(\'POIUY\')\
Content-Length: \###\
\
]{style="color:black"}

[\<JSON representation of the new Customer entity\>\
\
]{style="color:black"}

[\--cs_12u7hdkin252452345eknd_383673037\
Content-Type: application/http\
Content-ID: 2\
\
HTTP/1.1 204 No Content\
Host: host\
\
\
]{style="color:black"}

[\--cs_12u7hdkin252452345eknd_383673037\--]{style="color:black"}

[\--b_243234_25424_ef_892u748\
Content-Type: application/http\
\
HTTP/1.1 404 Not Found\
Content-Type: application/xml\
Content-Length: \###\
\
\<Error message\>\
\--b_243234_25424_ef_892u748---]{style="color:black"}
:::

#### []{#sec_AsynchronousBatchRequests}[]{#_Asynchronous_Batch_Requests}11.7.7.6 [Asynchronous Batch Requests](#sec_AsynchronousBatchRequests)

Batch requests MAY be executed asynchronously by including the
[`respond-async`](#sec_Preferencerespondasync) preference in the
[`Prefer`](#sec_HeaderPrefer) header. If the service responds with a
multipart batch response, it MUST ignore the `respond-async` preference
for individual requests within a batch.

After successful execution of the batch request the response to the
batch request is returned in the body of a response to an interrogation
request against the *status monitor resource* URL (see [Asynchronous
Requests](#sec_AsynchronousRequests)).

A service MAY return interim results to an asynchronously executing
batch. It does this by responding with `200 OK` to a `GET` request to
the monitor resource and including a
[`202 Accepted`](#sec_ResponseCode202Accepted) response as the last part
of the multipart response. The client can use the monitor URL returned
in this [`202 Accepted`](#sec_ResponseCode202Accepted) response to
continue processing the batch response.

Since a change set is executed atomically,
[`202 Accepted`](#sec_ResponseCode202Accepted)` `MUST NOT be returned
within a change set.

Example 105: referencing the example 101 above again, assume that

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[HTTP/1.1 202 Accepted\
Location: http://service-root/async-monitor-0\
Retry-After: \###\
\
]{style="color:black"}
:::

When interrogating the monitor URL only the first request in the batch
has finished processing and all the remaining requests are still being
processed. Note that the actual multipart batch response itself is
contained in an `application/http` wrapper as it is a response to a
status monitor resource:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[HTTP/1.1 200 Ok]{style="color:black"}

[Content-Type: application/http\
\
HTTP/1.1 200 Ok\
OData-Version: 4.0\
Content-Length: \####\
Content-Type: multipart/mixed; boundary=b_243234_25424_ef_892u748\
\
]{style="color:black"}

[\--b_243234_25424_ef_892u748\
Content-Type: application/http\
\
HTTP/1.1 200 Ok\
Content-Type: application/json\
Content-Length: \###\
\
\<JSON representation of the Customer entity with key
ALFKI\>]{style="color:black"}

[\--b_243234_25424_ef_892u748\
Content-Type: application/http\
\
HTTP/1.1 202 Accepted\
Location: http://service-root/async-monitor\
Retry-After: \###\
\
]{style="color:black"}

 

[\--b_243234_25424_ef_892u748\--]{style="color:black"}
:::

After some time the client makes a second request using the returned
monitor URL, not explicitly accepting `application/http`[[. The batch is
completely processed and the response is the final result.
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[HTTP/1.1 200 Ok\
AsyncResult: 200\
OData-Version: 4.0]{style="color:black"}

[Content-Length: \####\
Content-Type: multipart/mixed; boundary=b_243234_25424_ef_892u748\
\
]{style="color:black"}

[\--b_243234_25424_ef_892u748\
Content-Type: multipart/mixed;
boundary=cs_12u7hdkin252452345eknd_383673037\
\
]{style="color:black"}

[\--cs_12u7hdkin252452345eknd_383673037\
Content-Type: application/http\
Content-ID: 1\
\
HTTP/1.1 201 Created\
Content-Type: application/json\
Location: http://host/service.svc/Customer(\'POIUY\')\
Content-Length: \###\
\
\<JSON representation of a new Customer entity\>\
\--cs_12u7hdkin252452345eknd_383673037\
Content-Type: application/http\
Content-ID: 2\
\
HTTP/1.1 204 No Content\
Host: host\
\
]{style="color:black"}

 

[\--cs_12u7hdkin252452345eknd_383673037\--]{style="color:black"}

[\--b_243234_25424_ef_892u748\
Content-Type: application/http\
\
HTTP/1.1 404 Not Found\
Content-Type: application/xml\
Content-Length: \###\
\
\<Error message\>\
\--b_243234_25424_ef_892u748---]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_SecurityConsiderations}[12[    ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc477876731}[Security Considerations](#sec_SecurityConsiderations)
:::

This section is provided as a service to the application developers,
information providers, and users of OData version 4.0 giving some
references to starting points for securing OData services as specified.
OData is a REST-full multi-format service that depends on other services
and thus inherits both sides of the coin, security enhancements and
concerns alike from the latter.

For HTTP relevant security implications please cf. the relevant sections
of [**\[RFC7231\]**](#HTTPSemantic) (9. Security Considerations) and for
the HTTP `PATCH` method [**\[RFC5789\]**](#RFC5789) (5. Security
Considerations) as starting points.

## []{#sec_Authentication}[12.1]{#_Toc477876732} [Authentication](#sec_Authentication)

OData Services requiring authentication SHOULD consider supporting basic
authentication as defined in [**\[RFC7617\]**](#RFC7617) over HTTPS for
the highest level of interoperability with generic clients. They MAY
support other authentication methods.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Conformance}[13[    ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc477876733}[Conformance](#sec_Conformance)
:::

OData is designed as a set of conventions that can be layered on top of
existing standards to provide common representations for common
functionality. Not all services will support all of the conventions
defined in the protocol; services choose those conventions defined in
OData as the representation to expose that functionality appropriate for
their scenarios.

To aid in client/server interoperability, this specification defines
multiple levels of conformance for an OData Service, as well as the
[minimal requirements](#sec_InteroperableODataClients) for an OData
Client to be interoperable across OData services.

## []{#sec_OData40ServiceConformanceLevels}[]{#_OData_Data_Publishing}[]{#_Service_Conformance_Levels}13.1 [OData 4.0 Service Conformance Levels](#sec_OData40ServiceConformanceLevels)

OData 4.0 defines three levels of conformance for an OData Service.

Note: The conformance levels are design to correspond to different
service scenarios. For example, a service that publishes data compliant
with one or more of the OData defined formats may comply with the [OData
4.0 Minimal Conformance Level](#sec_OData40MinimalConformanceLevel)
without supporting any additional functionality. A service that offers
more control over the data that the client retrieves may comply with the
[OData 4.0 Intermediate Conformance
Level](#sec_OData40IntermediateConformanceLevel). Services that conform
to the [OData 4.0 Advanced Conformance
Level](#sec_OData40AdvancedConformanceLevel) can expect to interoperate
with the most functionality against the broadest range of generic
clients.

Services can advertise their level of conformance by annotating their
entity container with the term
[`Capabilities`.`ConformanceLevel`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#ConformanceLevel)
defined in [**\[OData-VocCap\]**](#VocCapabilities).

Note: Services are encouraged to support as much additional
functionality beyond their level of conformance as is appropriate for
their intended scenario.

### []{#sec_OData40MinimalConformanceLevel}[]{#_OData_Data_Publishing_1}[]{#_OData_Minimal_Conformance}[]{#_OData_4.0_Minimal}13.1.1 [OData 4.0 Minimal Conformance Level](#sec_OData40MinimalConformanceLevel)

In order to conform to the OData 4.0 Minimal conformance level, a
service:

1.[     ]{style="font:7.0pt \"Times New Roman\""}MUST publish a [service
document](#sec_ServiceDocumentRequest) at the service root (section
11.1.1)

2.[     ]{style="font:7.0pt \"Times New Roman\""}MUST return data
according to the[**\[OData-JSON\]**](#ODataJSONRef)[
**format**]{.MsoHyperlink}

3.[     ]{style="font:7.0pt \"Times New Roman\""}MUST use [server-driven
paging](#sec_ServerDrivenPaging) when returning partial results (section
11.2.6.7) and not use any other mechanism

4.[     ]{style="font:7.0pt \"Times New Roman\""}MUST return the
appropriate [`OData-Version`](#sec_HeaderODataVersion) header (section
8.1.5)

5.[     ]{style="font:7.0pt \"Times New Roman\""}MUST conform to the
semantics the following headers, or fail the request

5.1.[  
]{style="font:7.0pt \"Times New Roman\""}[`Accept`](#sec_HeaderAccept)[
]{.MsoHyperlink}[[(]{style="color:windowtext"}]{.MsoHyperlink}section
8.2.1)

5.2.[  
]{style="font:7.0pt \"Times New Roman\""}[`OData-MaxVersion`](#sec_HeaderODataMaxVersion)[
]{.MsoHyperlink}[[(section
]{style="color:windowtext"}]{.MsoHyperlink}8.2.7[[)]{style="color:windowtext"}]{.MsoHyperlink}

6.[     ]{style="font:7.0pt \"Times New Roman\""}MUST follow OData
guidelines for [extensibility](#sec_Extensibility)[
]{.MsoHyperlink}[[(section
]{style="color:windowtext"}]{.MsoHyperlink}[[6]{style="color:windowtext"}]{.MsoHyperlink}[[
and all subsections)]{style="color:windowtext"}]{.MsoHyperlink}

7.[     ]{style="font:7.0pt \"Times New Roman\""}MUST successfully parse
the request according to [**\[OData-ABNF\]**](#ABNF) for any supported
system query options and either follow the specification or return
[`501`` ``Not Implemented`](#sec_ResponseCode501NotImplemented) for any
unsupported functionality (section 9.3.1)

8.[     ]{style="font:7.0pt \"Times New Roman\""}MUST expose only data
types defined in [**\[OData-CSDLXML\]**](#ODataCSDLXMLRef)

9.[     ]{style="font:7.0pt \"Times New Roman\""}MUST NOT require
clients to understand any metadata or instance annotations (section
6.4), custom headers (section 6.5), or custom content (section 6.2) in
the payload in order to correctly consume the service

10.[  ]{style="font:7.0pt \"Times New Roman\""}MUST NOT violate any
OData [update semantics](#sec_DataModification) (section 11.4 and all
subsections)

11.[  ]{style="font:7.0pt \"Times New Roman\""}MUST NOT violate any
other OData-defined semantics

12.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
[`$expand`](#sec_SystemQueryOptionexpand) (section 11.2.5.2)

13.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD publish metadata
at `$metadata` according to [**\[OData-CSDLXML\]**](#ODataCSDLXMLRef)
and MAY publish metadata according to
[**\[OData-CSDLJSON\]**](#ODataCSDLJSONRef) (section 11.1.2)

14.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support prefixed
variants of supported headers and preference values

15.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support enumeration
and duration literals in URLs with the type prefix

Additionally, if async operations are supported:

16.[  ]{style="font:7.0pt \"Times New Roman\""}MUST return an HTTP
message as the final response to an asynchronous request with an
`OData-MaxVersion` value of `4.0` and an `Accept` header including
`application/http`.

17.[  ]{style="font:7.0pt \"Times New Roman\""}MAY return the
[`AsyncResult`](#sec_HeaderAsyncResult) header in the final response to
an asynchronous request

 

To be considered an *Updatable OData Service*, the service additionally:

18.[  ]{style="font:7.0pt \"Times New Roman\""}MUST include edit links
(explicitly or implicitly) for all updatable or deletable resources
according to [**\[OData-JSON\]**](#ODataJSONRef)

19.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support `POST` of
new entities to insertable entity sets (section 11.4.1.5 and 11.4.2.1)

20.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support `POST` of
new related entities to updatable navigation properties (section 11.4.2)

21.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support `POST` to
`$ref` to add an existing entity to an updatable related collection
(section 11.4.6.1)

22.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support `PUT` to
`$ref` to set an existing single updatable related entity (section
11.4.6.3)

23.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support `PATCH` to
all edit URLs for updatable resources (section 11.4.3)

24.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support `DELETE` to
all edit URLs for deletable resources (section 11.4.5)

25.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support `DELETE` to
`$ref` to remove a reference to an entity from an updatable navigation
property (section 11.4.6.2)

26.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support `If-Match`
header in update/delete of any resources returned with an ETag (section
11.4.1.1)

27.[  ]{style="font:7.0pt \"Times New Roman\""}MUST return a `Location`
header with the edit URL or read URL of a created resource (section
11.4.2)

28.[  ]{style="font:7.0pt \"Times New Roman\""}MUST include the
`OData-EntityId` header in response to any create or upsert operation
that returns `204 ``No Content`[` `]{.MsoHyperlink}(section 8.3.4)

[]{#_OData_Data_Service}29.[ 
]{style="font:7.0pt \"Times New Roman\""}MUST support Upserts (section
11.4.4)

30.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support `PUT` and
`PATCH` to an individual primitive (section 11.4.9.1) or complex
(section 11.4.9.3) property (respectively)

31.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support `DELETE`
to set an individual property to null (section 11.4.9.2)

32.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support deep
inserts (section 11.4.2.2)

33.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support set-based
updates (section 11.4.13) or deletes (section 11.4.14) to members of a
collection

### []{#sec_OData40IntermediateConformanceLevel}[]{#_OData_Intermediate_Conformance}[]{#_OData_4.0_Intermediate}13.1.2 [OData 4.0 Intermediate Conformance Level](#sec_OData40IntermediateConformanceLevel)

In order to conform to the OData Intermediate Conformance Level, a
service:

1.[     ]{style="font:7.0pt \"Times New Roman\""}MUST conform to the
[OData 4.0 Minimal Conformance
Level](#sec_OData40MinimalConformanceLevel)

2.[     ]{style="font:7.0pt \"Times New Roman\""}MUST successfully parse
the [**\[OData-ABNF\]**](#ABNF) and either follow the specification or
return `501 Not Implemented` for any unsupported functionality (section
9.3.1)

3.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support
`$select `[[(section
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[11.2.5.1]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[)]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

4.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support casting to
a derived type according to [**\[OData‑URL\]**](#ODataURLRef) if derived
types are present in the model

5.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support
`$top `[[(section
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[11.2.6.3]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[)]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

6.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support `/$value`
on media entities (section 4.12 in [**\[OData‑URL\]**](#ODataURLRef))
and individual properties (section 11.2.4.1)

7.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support
`$filter `[[(section
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[11.2.6.1]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[)]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

7.1.[   ]{style="font:7.0pt \"Times New Roman\""}MUST support `eq`, `ne`
filter operations on properties of entities in the requested entity set
(section 11.2.6.1.1)

7.2.[   ]{style="font:7.0pt \"Times New Roman\""}MUST support aliases in
`$filter` expressions (section 11.2.6.1.3)

7.3.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
additional filter operations (section 11.2.6.1.1) and MUST return
`501`` ``Not Implemented` for any unsupported filter operations (section
9.3.1)

7.4.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
canonical functions (section 11.2.6.1.2) and MUST return
`501`` ``Not Implemented` for any unsupported canonical functions
(section 9.3.1)

7.5.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
`$filter` on expanded entities (section 11.2.5.2.1)

8.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD publish metadata
at `$metadata` according to [**\[OData-CSDLXML\]**](#ODataCSDLXMLRef)
(section 11.1.2)

9.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
[**\[OData-JSON\]**](#ODataJSONRef) format

10.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD consider
[supporting basic authentication as defined in
]{style="color:black"}[**\[RFC7617\]**](#RFC7617)[ over HTTPS for the
highest level of interoperability with generic
clients]{style="color:black"}

11.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
`$search `[[system query option (section ]{style="font-family:
\"Arial\",sans-serif"}]{.Datatype}[[11.2.6.6]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[)]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

12.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
`$skip`[[ system query option (section
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[11.2.6.4]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[)]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

13.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
`$count`[[ system query option (section
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[11.2.6.5]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[)]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

14.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support `$expand`
(section 11.2.5.2)

15.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the lambda
operators `any` and `all` on navigation- and collection-valued
properties (section 5.1.1.10 in [**\[OData‑URL\]**](#ODataURLRef))

16.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
`/$count` segment on navigation and collection properties (section
11.2.10)

17.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
`$orderby asc` and `desc` on individual properties (section 11.2.6.2)

### []{#sec_OData40AdvancedConformanceLevel}[]{#_OData_Updatable_Service}[]{#_OData_Full_Data}[]{#_OData_4.0_Advanced}13.1.3 [OData 4.0 Advanced Conformance Level](#sec_OData40AdvancedConformanceLevel)

In order to conform to the OData Advanced Conformance Level, a service:

1.[     ]{style="font:7.0pt \"Times New Roman\""}MUST conform to at
least the [OData 4.0 Intermediate Conformance
Level](#sec_OData40IntermediateConformanceLevel)[ ]{.MsoHyperlink}

2.[     ]{style="font:7.0pt \"Times New Roman\""}MUST publish metadata
at `$metadata` according to [**\[OData-CSDLXML\]**](#ODataCSDLXMLRef)
(section 11.1.2)

3.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support the
[**\[OData-JSON\]**](#ODataJSONRef) format

4.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support the
`/$count` segment on navigation and collection properties (section
11.2.10)

5.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support the lambda
operators `any` and `all` on navigation- and collection-valued
properties (section 5.1.1.10 in [**\[OData‑URL\]**](#ODataURLRef))

6.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support the
`$skip` system query option (section
[[11.2.6.4]{style="font-family:\"Arial\",sans-serif"}]{.Datatype})

7.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support the
`$count` system query option (section
[[11.2.6.5]{style="font-family:\"Arial\",sans-serif"}]{.Datatype})

8.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support `$orderby`
`asc` and `desc` on individual properties (section 11.2.6.2)

9.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support `$expand`
(section 11.2.5.2)

9.1.[   ]{style="font:7.0pt \"Times New Roman\""}MUST support returning
references for expanded properties

9.2.[   ]{style="font:7.0pt \"Times New Roman\""}MUST support `$filter`
on expanded collection-valued properties

9.3.[   ]{style="font:7.0pt \"Times New Roman\""}MUST support cast
segment in expand with derived types

9.4.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
`$orderby` `asc` and `desc` on expanded collection-valued properties

9.5.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support `$count`
on expanded collection-valued properties

9.6.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support `$top`
and `$skip` on expanded collection-valued properties

9.7.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
`$search` on expanded collection-valued properties

9.8.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
`$levels` for recursive expand (section 11.2.5.2.1.1)

9.9.[   ]{style="font:7.0pt \"Times New Roman\""}MAY support `$compute`
on expanded properties

10.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support the
`$search` system query option (section 11.2.6.6)

11.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support batch
requests according to the multipart format (section 11.7 and all
subsections) and MAY support batch requests according to the JSON Batch
format defined in [**\[OData-JSON\]**](#ODataJSONRef)

12.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support the resource
path conventions defined in [**\[OData‑URL\]**](#ODataURLRef)

13.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
[asynchronous requests](#sec_AsynchronousRequests) (section 11.6)

14.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support [Delta
change tracking](#sec_RequestingChanges) (section 11.3)

15.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support cross-join
queries defined in [**\[OData‑URL\]**](#ODataURLRef)

[]{#_OData_Conformance_Level}[]{#_Not_Supported_Codes:}[]{#_Not_Supported_Codes}[]{#_Interoperable_OData_Clients}16.[ 
]{style="font:7.0pt \"Times New Roman\""}MAY support the `$compute`
system query option (section 11.2.5.3)

## []{#sec_OData401ServiceConformanceLevels}[13.2]{#_Toc477876738} [OData 4.01 Service Conformance Levels](#sec_OData401ServiceConformanceLevels)

OData services can report conformance to the OData 4.01 specification by
including `4.01` in the list of supported protocol versions in the
[`Core.ODataVersions`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ODataVersions)
annotation, as defined in [**\[OData-VocCore\]**](#VocCore). As all
OData 4.01 compliant services must also be fully OData 4.0 compliant,
OData 4.01 services do not need to separately list `4.0` as a supported
version.

### []{#sec_OData401MinimalConformanceLevel}[]{#_OData_4.1_Minimal}13.2.1 [OData 4.01 Minimal Conformance Level](#sec_OData401MinimalConformanceLevel)

In order to conform to the OData 4.01 Minimal Conformance Level, a
service:

[[1.[    
]{style="font:7.0pt \"Times New Roman\""}]{style="color:windowtext"}]{.MsoHyperlink}MUST
conform to the [OData 4.0 Minimal Conformance
Level](#sec_OData40MinimalConformanceLevel)

2.[     ]{style="font:7.0pt \"Times New Roman\""}MUST be compliant with
version 4.01 of the [**\[OData-JSON\]**](#ODataJSONRef)  format

[]{#_OData_4.1_Intermediate}3.[    
]{style="font:7.0pt \"Times New Roman\""}MUST return the
[`AsyncResult`](#sec_HeaderAsyncResult) result header in the final
response to an asynchronous request if asynchronous operations are
supported.

4.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support both
prefixed and non-prefixed variants of supported headers and preference
values

5.[     ]{style="font:7.0pt \"Times New Roman\""}MUST reject a request
with an incompatible
[`$schemaversion`](#sec_SystemQueryOptionschemaversion) system query
option if a
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation is returned in [\$metadata]{.Keyword}

6.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support specifying
supported system query options with or without the `$` prefix

7.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support
case-insensitive query option, operator, and canonical function names

8.[     ]{style="font:7.0pt \"Times New Roman\""}MUST return identifiers
in the case they are specified in `$metadata`

9.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support both 4.0
and 4.01 syntax in URLs for supported functionality regardless of
requested [`OData-MaxVersion`](#sec_HeaderODataMaxVersion)

a.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support casting
strings to primitive types in URLs

b.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support
enumeration and duration literals in URLs with or without the type
prefix

c.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support invoking
parameter-less function imports with or without parentheses

d.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support an empty
object or no-content for the request body when invoking an action with
no non-binding parameters

e.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support invoking
functions and actions in a [default namespace](#sec_DefaultNamespaces)
with or without namespace qualification

f.[      ]{style="font:7.0pt \"Times New Roman\""}MUST support parameter
aliases for key values and function parameter values if they allow the
octets `00` (NUL), `2F` (forward slash), or `5C` (backslash) in string
literals

g.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD support implicit
aliasing of parameters

h.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD support [eq/ne
null]{.Keyword} comparison for navigation properties with a maximum
cardinality of one

i.[      ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
[`in`](#sec_BuiltinFilterOperations)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}operator

j.[      ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
[divby]{.Keyword}

k.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD support negative
indexes for the substring function

l.[      ]{style="font:7.0pt \"Times New Roman\""}MAY support
Key-As-Segment URL convention

a.[     ]{style="font:7.0pt \"Times New Roman\""}MUST also support
canonical URL conventions (described in
[**\[OData‑URL\]**](#ODataURLRef)) or include URLs in payload

m.[   ]{style="font:7.0pt \"Times New Roman\""}MAY support the count of
a filtered collection in a common expression

n.[     ]{style="font:7.0pt \"Times New Roman\""}MAY support equal and
non-equal structural comparison

10.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD publish metadata
at `$metadata` according to both
[**\[OData-CSDLXML\]**](#ODataCSDLXMLRef) and
[**\[OData-CSDLJSON\]**](#ODataCSDLJSONRef) (section 11.1.2)

11.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD NOT have
identifiers within a uniqueness scope (e.g. a schema, a structural type,
or an entity container) that differ only by case

12.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD return the
[`Core.ODataVersions`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ODataVersions)
annotation

13.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD report
capabilities through the Capabilities vocabulary

14.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support filtering on
annotation values

15.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support `$compute`
system query option

16.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support
[\$search]{.Keyword} for all collections

17.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support 4.01
behavior, including returning 4.01 content and payloads, if the client
does not specify the [OData-MaxVersion:4.0]{.Keyword} request header

 

In addition, to be considered an *Updatable OData 4.01 Service*, the
service:

18.[  ]{style="font:7.0pt \"Times New Roman\""}MUST conform to the
[OData 4.0 Minimal Conformance
Level](#sec_OData40MinimalConformanceLevel)[ ]{.MsoHyperlink}for an
Updateable service.

19.[  ]{style="font:7.0pt \"Times New Roman\""}MUST support `DELETE` to
the reference of a collection member to be removed, identified by key
(section 11.4.6.2)

20.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
[PUT]{.Keyword} against single entity with nested content

21.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support deep
updates (section 11.4.3.1) and deep inserts (section 11.4.2.2)

22.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
[PUT]{.Keyword} or [DELETE]{.Keyword} to [\$ref]{.Keyword} of a
collection-valued nav prop

23.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support
[POST]{.Keyword} to collections of complex/primitive types

24.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support
[PATCH]{.Keyword} and [DELETE]{.Keyword} to a collection

25.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support
[POST]{.Keyword}, [PATCH]{.Keyword} and [DELETE]{.Keyword} to a
collection URL terminating in a type cast segment

26.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support
[PATCH]{.Keyword} to entity sets using the 4.01 delta payload format

27.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support
[\$select]{.Keyword} and [\$expand]{.Keyword} on data modification
requests

### []{#sec_OData401IntermediateConformanceLevel}[13.2.2]{#_Toc477876740} [OData 4.01 Intermediate Conformance Level](#sec_OData401IntermediateConformanceLevel)

In order to conform to the OData 4.01 Intermediate Conformance Level, a
service:

[[1.[    
]{style="font:7.0pt \"Times New Roman\""}]{style="color:windowtext"}]{.MsoHyperlink}MUST
conform to the [OData 4.01 Minimal Conformance
Level](#sec_OData401MinimalConformanceLevel)

[[2.[    
]{style="font:7.0pt \"Times New Roman\""}]{style="color:windowtext"}]{.MsoHyperlink}[[MUST
conform to the ]{style="color:windowtext"}]{.MsoHyperlink}[OData 4.0
Intermediate Conformance
Level](#sec_OData40IntermediateConformanceLevel)

3.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support [eq/ne
null]{.Keyword} comparison for navigation properties with a maximum
cardinality of one

4.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support the
[`in`](#sec_BuiltinFilterOperations)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}operator

[[5.[    
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}MUST
support the `$select` option nested within `$select`

6.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
count of a filtered collection in a common expression

7.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD support equal
and non-equal structural comparison

8.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
`$compute` system query option

9.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD support nested
query options in `$select`

[10.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support nested
parameter alias assignments in]{#_Toc477876741} `$select`[[ and
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}`$expand`

11.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support filtering a
collection using a `/`[\$filter]{.Keyword} path segment

### [13.2.3]{#sec_OData401AdvancedConformanceLevel} [OData 4.01 Advanced Conformance Level](#sec_OData401AdvancedConformanceLevel)

In order to conform to the OData 4.01 Advanced Conformance Level, a
service:

[[1.[    
]{style="font:7.0pt \"Times New Roman\""}]{style="color:windowtext"}]{.MsoHyperlink}MUST
conform to the [OData 4.01 Intermediate Conformance
Level](#sec_OData401IntermediateConformanceLevel)

[[2.[    
]{style="font:7.0pt \"Times New Roman\""}]{style="color:windowtext"}]{.MsoHyperlink}[[MUST
conform to the ]{style="color:windowtext"}]{.MsoHyperlink}[OData 4.0
Advanced Conformance Level](#sec_OData40AdvancedConformanceLevel)

3.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support the count
of a filtered/searched collection in a common expression

4.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support `$compute`
system query option

5.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support nested
options in `$select`

5.1.[   ]{style="font:7.0pt \"Times New Roman\""}MUST support `$filter`
on selected collection-valued properties

5.2.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
`$orderby` `asc` and `desc` on selected collection-valued properties

5.3.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
`$count` on selected collection-valued properties

5.4.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support `$top`
and `$skip` on selected collection-valued properties

5.5.[   ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
`$search` on selected collection-valued properties

6.[     ]{style="font:7.0pt \"Times New Roman\""}MUST publish metadata
at `$metadata` according to [**\[OData-CSDLJSON\]**](#ODataCSDLJSONRef)
(section 11.1.2)

[[7.[    
]{style="font:7.0pt \"Times New Roman\""}]{style="color:windowtext"}]{.MsoHyperlink}MUST
support batch requests according both to the multipart format (section
11.7 and all subsections) and the JSON Batch format defined in
[**\[OData-JSON\]**](#ODataJSONRef)

[8.[     ]{style="font:7.0pt \"Times New Roman\""}SHOULD support
filtering a collection using a]{#_Toc477876742} `/`[\$filter]{.Keyword}
path segment

[[9.[    
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}SHOULD
support nested parameter alias assignments in `$select`[[ and
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}`$expand`

10.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support
case-insensitive comparison of identifiers in URLs and request payloads
if no exact match is found, using the same lookup sequence as for
[default namespaces](#sec_DefaultNamespaces) with a case-insensitive
comparison 

## []{#sec_InteroperableODataClients}13.3 [Interoperable OData Clients](#sec_InteroperableODataClients)

Interoperable OData clients can expect to work with OData Services that
comply with at least the [OData 4.0 Minimal Conformance
Level](#sec_OData40MinimalConformanceLevel) and implement the
[**\[OData-JSON\]**](#ODataJSONRef)[ ]{.MsoHyperlink}format.

To be generally interoperable, OData clients      

1.[     ]{style="font:7.0pt \"Times New Roman\""}MUST specify the
`OData-MaxVersion` header in requests (section 8.2.7)

2.[     ]{style="font:7.0pt \"Times New Roman\""}MUST specify
`OData-Version` (section 8.1.5) and `Content-Type` (section 8.1.1) in
any request with a payload

3.[     ]{style="font:7.0pt \"Times New Roman\""}MUST be a conforming
consumer of OData as defined in [**\[OData-JSON\]**](#ODataJSONRef)

4.[     ]{style="font:7.0pt \"Times New Roman\""}MUST follow redirects
(section 9.1.5)

5.[     ]{style="font:7.0pt \"Times New Roman\""}MUST correctly handle
next links (section 11.2.6.7)

6.[     ]{style="font:7.0pt \"Times New Roman\""}MUST support instances
returning properties and navigation properties not specified in metadata
(section 11.2)

7.[     ]{style="font:7.0pt \"Times New Roman\""}MUST generate `PATCH`
requests for updates, if the client supports updates (section 11.4.3)

8.[     ]{style="font:7.0pt \"Times New Roman\""}MUST include the `$`
prefix when specifying OData-defined system query options

9.[     ]{style="font:7.0pt \"Times New Roman\""}MUST use case-sensitive
query options, operators, and canonical functions

10.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD support basic
authentication as defined in [**\[RFC7617\]**](#RFC7617)[
]{style="color:black"}over HTTPS

11.[  ]{style="font:7.0pt \"Times New Roman\""}MAY request entity
references in place of entities previously returned in the response
(section 11.2.8)

12.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support deleted
entities, link entities, deleted link entities in a delta response
(section 11.3)

13.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support asynchronous
responses (section 11.6)

14.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support
`metadata=minimal` in a JSON response (see
[**\[OData-JSON\]**](#ODataJSONRef))

15.[  ]{style="font:7.0pt \"Times New Roman\""}MAY support
`streaming `in a JSON response (see [**\[OData-JSON\]**](#ODataJSONRef))

In addition, interoperable OData 4.01 clients

16.[  ]{style="font:7.0pt \"Times New Roman\""}MUST send OData
4.0-compliant payloads to services that don\'t advertise support for
4.01 or greater through the
[`Core.ODataVersions`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#ODataVersions)
metadata annotation (see
[**\[OData-VocCore\]**](#VocCore)[)]{.MsoHyperlink}

17.[  ]{style="font:7.0pt \"Times New Roman\""}MUST specify identifiers
in payloads and URLs in the case they are specified in `$metadata`

18.[  ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared to
receive any valid 4.01 CSDL

19.[  ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared to
receive any valid 4.01 response according to the requested format

20.[  ]{style="font:7.0pt \"Times New Roman\""}SHOULD use capabilities
(see [**\[OData-VocCap\]**](#VocCapabilities)) to determine if a 4.01
feature is supported but MAY attempt syntax and be prepared to handle
either [[[501 Not
Implemented]{style="color:windowtext"}]{.Keyword}](#sec_ResponseCode501NotImplemented)
or [400 Bad Request]{.Keyword}

 

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
[]{#sec_Acknowledgments}[Appendix A.[ 
]{style="font:7.0pt \"Times New Roman\""}]{#_Toc477876743}[Acknowledgments](#sec_Acknowledgments)
:::

The following individuals were members of the OASIS OData Technical
Committee during the creation of this specification and their
contributions are gratefully acknowledged:

+-----------------------------------+-----------------------------------+
| [·[                               | [·[                               |
| ]{style="font:7.0pt               | ]{style="font:7.0pt               |
|  \"Times New Roman\""}]{lang="EN" |  \"Times New Roman\""}]{lang="EN" |
| s                                 | style="font-family:Symbol"}[Jens  |
| tyle="font-family:Symbol"}[Howard | Hüsken (SAP SE)]{lang="EN"}       |
| Abrams (CA                        |                                   |
| Technologies)]{lang="EN"}         | [·[                               |
|                                   | ]{style="font:7.0pt               |
| [·[                               |  \"Times New Roman\""}]{lang="EN" |
| ]{style="font:7.0pt               | style="font-family:Symbol"}[Evan  |
|  \"Times New Roman\""}]{lang="EN" | Ireland (SAP SE)]{lang="EN"}      |
| style="font-family:Symbol"}[Ken   |                                   |
| Baclawski (Northeastern           | [·[                               |
| University)]{lang="EN"}           | ]{style="font:7.0pt               |
|                                   |  \"Times New Roman\""}]{lang="EN" |
| [·[                               | st                                |
| ]{style="font:7.0pt               | yle="font-family:Symbol"}[Gershon |
|  \"Times New Roman\""}]{lang="EN" | Janssen (Individual)]{lang="EN"}  |
| style="font-family:Symbol"}[Jay   |                                   |
| Balunas (Red Hat)]{lang="EN"}     | [·[                               |
|                                   | ]{style="font:7.0pt               |
| [·[                               |  \"Times New Roman\""}]{lang="EN" |
| ]{style="font:7.0pt               | style="font-family:Symbol"}[Ram   |
|  \"Times New Roman\""}]{lang="EN" | Jeyaraman (Microsoft)]{lang="EN"} |
| st                                |                                   |
| yle="font-family:Symbol"}[Stephen | [·[                               |
| Berard (Schneider Electric        | ]{style="font:7.0pt               |
| Industries SAS)]{lang="EN"}       |  \"Times New Roman\""}]{lang="EN" |
|                                   | style="font-family:Symbol"}[Ted   |
| [·[                               | Jones (Red Hat)]{lang="EN"}       |
| ]{style="font:7.0pt               |                                   |
|  \"Times New Roman\""}]{lang="EN" | [·[                               |
| style="font-family:Symbol"}[Mark  | ]{style="font:7.0pt               |
| Biamonte (Progress                |  \"Times New Roman\""}]{lang="EN" |
| Software)]{lang="EN"}             | style="font-family:Symbol"}[Diane |
|                                   | Jordan (IBM)]{lang="EN"}          |
| [·[                               |                                   |
| ]{style="font:7.0pt               | [·[                               |
|  \"Times New Roman\""}]{lang="EN" | ]{style="font:7.0pt               |
| st                                |  \"Times New Roman\""}]{lang="EN" |
| yle="font-family:Symbol"}[Matthew | st                                |
| Borges (SAP SE)]{lang="EN"}       | yle="font-family:Symbol"}[Stephan |
|                                   | Klevenz (SAP SE)]{lang="EN"}      |
| [·[                               |                                   |
| ]{style="font:7.0pt               | [·[                               |
|  \"Times New Roman\""}]{lang="EN" | ]{style="font:7.0pt               |
| s                                 |  \"Times New Roman\""}]{lang="EN" |
| tyle="font-family:Symbol"}[Edmond | s                                 |
| Bourne (BlackBerry)]{lang="EN"}   | tyle="font-family:Symbol"}[Gerald |
|                                   | Krause (SAP SE)]{lang="EN"}       |
| [·[                               |                                   |
| ]{style="font:7.0pt               | [·[                               |
|  \"Times New Roman\""}]{lang="EN" | ]{style="font:7.0pt               |
| s                                 |  \"Times New Roman\""}]{lang="EN" |
| tyle="font-family:Symbol"}[Joseph | style="font-family:Symbol"}[Nuno  |
| Boyle (Planetwork,                | Linhares (SDL)]{lang="EN"}        |
| Inc.)]{lang="EN"}                 |                                   |
|                                   | [·[                               |
| [·[                               | ]{style="font:7.0pt               |
| ]{style="font:7.0pt               |  \"Times New Roman\""}]{lang="EN" |
|  \"Times New Roman\""}]{lang="EN" | style="font-family:Symbol"}[Paul  |
| style="font-family:Symbol"}[Peter | Lipton (CA                        |
| Brown (Individual)]{lang="EN"}    | Technologies)]{lang="EN"}         |
|                                   |                                   |
| [·[                               | [·[                               |
| ]{style="font:7.0pt               | ]{style="font:7.0pt               |
|  \"Times New Roman\""}]{lang="EN" |  \"Times New Roman\""}]{lang="EN" |
| st                                | style="font-family:Symbol"}[Susan |
| yle="font-family:Symbol"}[Antonio | Malaika (IBM)]{lang="EN"}         |
| Campanile (Bank of                |                                   |
| America)]{lang="EN"}              | [·[                               |
|                                   | ]{style="font:7.0pt               |
| [·[                               |  \"Times New Roman\""}]{lang="EN" |
| ]{style="font:7.0pt               | style="f                          |
|  \"Times New Roman\""}]{lang="EN" | ont-family:Symbol"}[Ramanjaneyulu |
| style="font-family:Symbol"}[Pablo | Malisetti (CA                     |
| Castro (Microsoft)]{lang="EN"}    | Technologies)]{lang="EN"}         |
|                                   |                                   |
| [·[                               | [·[                               |
| ]{style="font:7.0pt               | ]{style="font:7.0pt               |
|  \"Times New Roman\""}]{lang="EN" |  \"Times New Roman\""}]{lang="EN" |
| style="font-family:Symbol"}[Axel  | style="font-family:Symbol"}[Neil  |
| Conrad (BlackBerry)]{lang="EN"}   | McEvoy (iFOSSF -- International   |
|                                   | Free and Open Source Solutions    |
| [·[                               | Foundation)]{lang="EN"}           |
| ]{style="font:7.0pt               |                                   |
|  \"Times New Roman\""}]{lang="EN" | [·[                               |
| style="font-family:Symbol"}[Robin | ]{style="font:7.0pt               |
| Cover (OASIS)]{lang="EN"}         |  \"Times New Roman\""}]{lang="EN" |
|                                   | style="font-family:Symbol"}[Stan  |
| [·[                               | Mitranic (CA                      |
| ]{style="font:7.0pt               | Technologies)]{lang="EN"}         |
|  \"Times New Roman\""}]{lang="EN" |                                   |
| style="font-family:Symbol"}[Erik  | [·[                               |
| de Voogd (SDL)]{lang="EN"}        | ]{style="font:7.0pt               |
|                                   |  \"Times New Roman\""}]{lang="EN" |
| [·[                               | style="font-family:Symbol"}[Dale  |
| ]{style="font:7.0pt               | Moberg (Axway                     |
|  \"Times New Roman\""}]{lang="EN" | Software)]{lang="EN"}             |
| style="font-family:Symbol"}[Yi    |                                   |
| Ding (Microsoft)]{lang="EN"}      | [·[                               |
|                                   | ]{style="font:7.0pt               |
| [·[                               |  \"Times New Roman\""}]{lang="EN" |
| ]{style="font:7.0pt               | s                                 |
|  \"Times New Roman\""}]{lang="EN" | tyle="font-family:Symbol"}[Graham |
| style="font-family:Symbol"}[Diane | Moore (BrightstarDB               |
| Downie (Citrix                    | Ltd.)]{lang="EN"}                 |
| Systems)]{lang="EN"}              |                                   |
|                                   | [·[                               |
| [·[                               | ]{style="font:7.0pt               |
| ]{style="font:7.0pt               |  \"Times New Roman\""}]{lang="EN" |
|  \"Times New Roman\""}]{lang="EN" | st                                |
| st                                | yle="font-family:Symbol"}[Farrukh |
| yle="font-family:Symbol"}[Patrick | Najmi (Individual)]{lang="EN"}    |
| Durusau (Individual)]{lang="EN"}  |                                   |
|                                   | [·[                               |
| [·[                               | ]{style="font:7.0pt               |
| ]{style="font:7.0pt               |  \"Times New Roman\""}]{lang="EN" |
|  \"Times New Roman\""}]{lang="EN" | st                                |
| s                                 | yle="font-family:Symbol"}[Shishir |
| tyle="font-family:Symbol"}[Andrew | Pardikar (Citrix                  |
| Eisenberg (IBM)]{lang="EN"}       | Systems)]{lang="EN"}              |
|                                   |                                   |
| [·[                               | [·[                               |
| ]{style="font:7.0pt               | ]{style="font:7.0pt               |
|  \"Times New Roman\""}]{lang="EN" |  \"Times New Roman\""}]{lang="EN" |
| style="font-family:Symbol"}[Chet  | s                                 |
| Ensign (OASIS)]{lang="EN"}        | tyle="font-family:Symbol"}[Sanjay |
|                                   | Patil (SAP SE)]{lang="EN"}        |
| [·[                               |                                   |
| ]{style="font:7.0pt               | [·[                               |
|  \"Times New Roman\""}]{lang="EN" | ]{style="font:7.0pt               |
| s                                 |  \"Times New Roman\""}]{lang="EN" |
| tyle="font-family:Symbol"}[Davina | s                                 |
| Erasmus (SDL)]{lang="EN"}         | tyle="font-family:Symbol"}[Nuccio |
|                                   | Piscopo (iFOSSF -- International  |
| [·[                               | Free and Open Source Solutions    |
| ]{style="font:7.0pt               | Foundation)]{lang="EN"}           |
|  \"Times New Roman\""}]{lang="EN" |                                   |
| s                                 | [·[                               |
| tyle="font-family:Symbol"}[George | ]{style="font:7.0pt               |
| Ericson (Dell)]{lang="EN"}        |  \"Times New Roman\""}]{lang="EN" |
|                                   | st                                |
| [·[                               | yle="font-family:Symbol"}[Michael |
| ]{style="font:7.0pt               | Pizzo (Microsoft)]{lang="EN"}     |
|  \"Times New Roman\""}]{lang="EN" |                                   |
| st                                | [·[                               |
| yle="font-family:Symbol"}[Colleen | ]{style="font:7.0pt               |
| Evans (Microsoft)]{lang="EN"}     |  \"Times New Roman\""}]{lang="EN" |
|                                   | s                                 |
| [·[                               | tyle="font-family:Symbol"}[Ramesh |
| ]{style="font:7.0pt               | Reddy (Red Hat)]{lang="EN"}       |
|  \"Times New Roman\""}]{lang="EN" |                                   |
| style="font-family:Symbol"}[Jason | [·[                               |
| Fam (IBM)]{lang="EN"}             | ]{style="font:7.0pt               |
|                                   |  \"Times New Roman\""}]{lang="EN" |
| [·[                               | s                                 |
| ]{style="font:7.0pt               | tyle="font-family:Symbol"}[Robert |
|  \"Times New Roman\""}]{lang="EN" | Richards (Mashery)]{lang="EN"}    |
| s                                 |                                   |
| tyle="font-family:Symbol"}[Senaka | [·[                               |
| Fernando (WSO2)]{lang="EN"}       | ]{style="font:7.0pt               |
|                                   |  \"Times New Roman\""}]{lang="EN" |
| [·[                               | st                                |
| ]{style="font:7.0pt               | yle="font-family:Symbol"}[Sumedha |
|  \"Times New Roman\""}]{lang="EN" | Rubasinghe (WSO2)]{lang="EN"}     |
| style="font-family:Symbol"}[Josh  |                                   |
| Gavant (Microsoft)]{lang="EN"}    | [·[                               |
|                                   | ]{style="font:7.0pt               |
| [·[                               |  \"Times New Roman\""}]{lang="EN" |
| ]{style="font:7.0pt               | style="font-family:Symbol"}[James |
|  \"Times New Roman\""}]{lang="EN" | Snell (IBM)]{lang="EN"}           |
| style="font-family:Symbol"}[Brent |                                   |
| Gross (IBM)]{lang="EN"}           | [·[                               |
|                                   | ]{style="font:7.0pt               |
| [·[                               |  \"Times New Roman\""}]{lang="EN" |
| ]{style="font:7.0pt               | st                                |
|  \"Times New Roman\""}]{lang="EN" | yle="font-family:Symbol"}[Jeffrey |
| style="font-family:Symbol"}[Zhun  | Turpin (Axway                     |
| Guo (Individual)]{lang="EN"}      | Software)]{lang="EN"}             |
|                                   |                                   |
| [·[                               | [·[                               |
| ]{style="font:7.0pt               | ]{style="font:7.0pt               |
|  \"Times New Roman\""}]{lang="EN" |  \"Times New Roman\""}]{lang="EN" |
| style="font-family:Symbol"}[Anila | style="font-family:Symbol"}[John  |
| Kumar GVN (CA                     | Willson (Individual)]{lang="EN"}  |
| Technologies)]{lang="EN"}         |                                   |
|                                   | [·[                               |
| [·[                               | ]{style="font:7.0pt               |
| ]{style="font:7.0pt               |  \"Times New Roman\""}]{lang="EN" |
|  \"Times New Roman\""}]{lang="EN" | style="font-family:Symbol"}[John  |
| s                                 | Wilmes (Individual)]{lang="EN"}   |
| tyle="font-family:Symbol"}[Stefan |                                   |
| Hagen (Individual)]{lang="EN"}    | [·[                               |
|                                   | ]{style="font:7.0pt               |
| [·[                               |  \"Times New Roman\""}]{lang="EN" |
| ]{style="font:7.0pt               | style=                            |
|  \"Times New Roman\""}]{lang="EN" | "font-family:Symbol"}[Christopher |
| style="font-family:Symbol"}[Ralf  | Woodruff (Perficient,             |
| Handl (SAP SE)]{lang="EN"}        | Inc.)]{lang="EN"}                 |
|                                   |                                   |
| [·[                               | [·[                               |
| ]{style="font:7.0pt               | ]{style="font:7.0pt               |
|  \"Times New Roman\""}]{lang="EN" |  \"Times New Roman\""}]{lang="EN" |
| st                                | s                                 |
| yle="font-family:Symbol"}[Barbara | tyle="font-family:Symbol"}[Martin |
| Hartel (SAP SE)]{lang="EN"}       | Zurmuehl (SAP SE)]{lang="EN"}     |
|                                   |                                   |
| [·[                               |                                   |
| ]{style="font:7.0pt               |                                   |
|  \"Times New Roman\""}]{lang="EN" |                                   |
| s                                 |                                   |
| tyle="font-family:Symbol"}[Hubert |                                   |
| Heijkers (IBM)]{lang="EN"}        |                                   |
+-----------------------------------+-----------------------------------+

 

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
[]{#sec_RevisionHistory}[Appendix B.[ 
]{style="font:7.0pt \"Times New Roman\""}]{#_Toc477876744}[Revision
History](#sec_RevisionHistory)
:::

+-----------------+-----------------+-----------------+-----------------+
| **Revision**    | **Date**        | **Editor**      | **Changes       |
|                 |                 |                 | Made**          |
+=================+=================+=================+=================+
| Working Draft   | 2016-06-22      | Michael Pizzo   | Transferred     |
| 01              |                 |                 | content from    |
|                 |                 |                 | OData 4.0 Part  |
|                 |                 |                 | I - Protocol    |
|                 |                 |                 | Errata 3        |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2016-12-08      | Michael Pizzo   | Integrated 4.01 |
| Specification   |                 |                 | features        |
| Draft 01        |                 | Ralf Handl      |                 |
|                 |                 |                 | [·[             |
|                 |                 |                 | ]               |
|                 |                 |                 | {style="font:7. |
|                 |                 |                 | 0pt \"Times New |
|                 |                 |                 |  Roman\""}]{sty |
|                 |                 |                 | le="font-family |
|                 |                 |                 | :Symbol"}Schema |
|                 |                 |                 | Versioning      |
|                 |                 |                 |                 |
|                 |                 |                 | [·[             |
|                 |                 |                 | ]{sty           |
|                 |                 |                 | le="font:7.0pt  |
|                 |                 |                 | \"Times New Rom |
|                 |                 |                 | an\""}]{style=" |
|                 |                 |                 | font-family:Sym |
|                 |                 |                 | bol"}Preference |
|                 |                 |                 | omit-values     |
|                 |                 |                 |                 |
|                 |                 |                 | [·[             |
|                 |                 |                 | ]{st            |
|                 |                 |                 | yle="font:7.0pt |
|                 |                 |                 |  \"Times New Ro |
|                 |                 |                 | man\""}]{style= |
|                 |                 |                 | "font-family:Sy |
|                 |                 |                 | mbol"}\$compute |
|                 |                 |                 | system query    |
|                 |                 |                 | option          |
|                 |                 |                 |                 |
|                 |                 |                 | [·[             |
|                 |                 |                 | ]{s             |
|                 |                 |                 | tyle="font:7.0p |
|                 |                 |                 | t \"Times New R |
|                 |                 |                 | oman\""}]{style |
|                 |                 |                 | ="font-family:S |
|                 |                 |                 | ymbol"}Indexing |
|                 |                 |                 | into Ordered    |
|                 |                 |                 | Collections     |
|                 |                 |                 |                 |
|                 |                 |                 | [·[             |
|                 |                 |                 | ]{style="font:  |
|                 |                 |                 | 7.0pt \"Times N |
|                 |                 |                 | ew Roman\""}]{s |
|                 |                 |                 | tyle="font-fami |
|                 |                 |                 | ly:Symbol"}Deep |
|                 |                 |                 | Update          |
|                 |                 |                 |                 |
|                 |                 |                 | [·[             |
|                 |                 |                 | ]{s             |
|                 |                 |                 | tyle="font:7.0p |
|                 |                 |                 | t \"Times New R |
|                 |                 |                 | oman\""}]{style |
|                 |                 |                 | ="font-family:S |
|                 |                 |                 | ymbol"}Improved |
|                 |                 |                 | referencing in  |
|                 |                 |                 | batch requests  |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-06-20      | Michael Pizzo   | More 4.01       |
| Specification   |                 |                 | features        |
| Draft 02        |                 | Ralf Handl      |                 |
|                 |                 |                 | [·[             |
|                 |                 |                 | ]{st            |
|                 |                 |                 | yle="font:7.0pt |
|                 |                 |                 |  \"Times New Ro |
|                 |                 |                 | man\""}]{style= |
|                 |                 |                 | "font-family:Sy |
|                 |                 |                 | mbol"}Set-based |
|                 |                 |                 | operations      |
|                 |                 |                 |                 |
|                 |                 |                 | [·[             |
|                 |                 |                 | ]{style="font:  |
|                 |                 |                 | 7.0pt \"Times N |
|                 |                 |                 | ew Roman\""}]{s |
|                 |                 |                 | tyle="font-fami |
|                 |                 |                 | ly:Symbol"}JSON |
|                 |                 |                 | Batch format    |
|                 |                 |                 |                 |
|                 |                 |                 | [·[             |
|                 |                 |                 | ]{style="font:  |
|                 |                 |                 | 7.0pt \"Times N |
|                 |                 |                 | ew Roman\""}]{s |
|                 |                 |                 | tyle="font-fami |
|                 |                 |                 | ly:Symbol"}CSDL |
|                 |                 |                 | JSON format     |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-09-28      | Michael Pizzo   | Incorporated    |
| Specification   |                 |                 | review feedback |
| Draft 03        |                 | Ralf Handl      |                 |
|                 |                 |                 | Added nested    |
|                 |                 |                 | query options   |
|                 |                 |                 | for `$select`   |
|                 |                 |                 |                 |
|                 |                 |                 | Added nested    |
|                 |                 |                 | parameter alias |
|                 |                 |                 | value           |
|                 |                 |                 | assignments     |
|                 |                 |                 | within          |
|                 |                 |                 | `$expand` and   |
|                 |                 |                 | `$select`       |
|                 |                 |                 |                 |
|                 |                 |                 | Simplified      |
|                 |                 |                 | implicit        |
|                 |                 |                 | parameter       |
|                 |                 |                 | aliases for     |
|                 |                 |                 | function        |
|                 |                 |                 | (import) calls  |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-11-13      | Michael Pizzo   | Incorporated    |
| Specification   |                 |                 | review feedback |
| Draft 04        |                 | Ralf Handl      |                 |
|                 |                 |                 | Added deep      |
|                 |                 |                 | insert of media |
|                 |                 |                 | entities        |
|                 |                 |                 |                 |
|                 |                 |                 | Simplified      |
|                 |                 |                 | unrelating      |
|                 |                 |                 | entities        |
|                 |                 |                 |                 |
|                 |                 |                 | Function        |
|                 |                 |                 | imports in      |
|                 |                 |                 | `$filter` and   |
|                 |                 |                 | `$orderby`      |
|                 |                 |                 |                 |
|                 |                 |                 | Stable order of |
|                 |                 |                 | action and      |
|                 |                 |                 | function        |
|                 |                 |                 | parameters      |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-12-19      | Michael Pizzo   | Non-Material    |
| Specification   |                 |                 | Changes         |
| 01              |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2019-06-21      | Michael Pizzo   | In-stream       |
| Specification   |                 |                 | errors          |
| Draft 05        |                 | Ralf Handl      |                 |
|                 |                 |                 | URL function    |
|                 |                 |                 | `               |
|                 |                 |                 | matchesPattern` |
|                 |                 |                 |                 |
|                 |                 |                 | Delta response  |
|                 |                 |                 | for singletons  |
|                 |                 |                 |                 |
|                 |                 |                 | Content-IDs in  |
|                 |                 |                 | deep update     |
|                 |                 |                 |                 |
|                 |                 |                 | Optional action |
|                 |                 |                 | and function    |
|                 |                 |                 | parameters      |
|                 |                 |                 |                 |
|                 |                 |                 | `con            |
|                 |                 |                 | tinue-on-error` |
|                 |                 |                 | for operations  |
|                 |                 |                 | on collections  |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2019-09-20      | Michael Pizzo   | No dependencies |
| Specification   |                 |                 | to async        |
| Draft 06        |                 | Ralf Handl      | requests within |
|                 |                 |                 | a batch request |
|                 |                 |                 |                 |
|                 |                 |                 | ETags in update |
|                 |                 |                 | responses       |
|                 |                 |                 |                 |
|                 |                 |                 | Removed nested  |
|                 |                 |                 | `$expand`       |
|                 |                 |                 | within          |
|                 |                 |                 | `$select`       |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2019-11-05      | Michael Pizzo   | Non-material    |
| Specification   |                 |                 | changes         |
| 02              |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Candidate OASIS | 2020-01-16      | Michael Pizzo   | Non-material    |
| Specification   |                 |                 | changes         |
| 01              |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+

 
:::
