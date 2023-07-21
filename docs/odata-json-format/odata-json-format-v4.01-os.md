::: WordSection1
[![OASIS
logo](https://docs.oasis-open.org/templates/OASISLogo-v2.0.jpg){border="0"
width="250" height="55"}](https://www.oasis-open.org)

::: {style="border:none;border-top:solid gray 1.0pt;padding:1.0pt 0in 0in 0in"}
OData JSON Format Version 4.01

OASIS Standard

11 May 2020
:::

This stage:

<https://docs.oasis-open.org/odata/odata-json-format/v4.01/os/odata-json-format-v4.01-os.docx>
(Authoritative)

<https://docs.oasis-open.org/odata/odata-json-format/v4.01/os/odata-json-format-v4.01-os.html>

<https://docs.oasis-open.org/odata/odata-json-format/v4.01/os/odata-json-format-v4.01-os.pdf>

Previous stage:

<https://docs.oasis-open.org/odata/odata-json-format/v4.01/cos01/odata-json-format-v4.01-cos01.docx>
(Authoritative)

<https://docs.oasis-open.org/odata/odata-json-format/v4.01/cos01/odata-json-format-v4.01-cos01.html>

<https://docs.oasis-open.org/odata/odata-json-format/v4.01/cos01/odata-json-format-v4.01-cos01.pdf>

Latest stage:

<https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.docx>
(Authoritative)

<https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html>

<https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.pdf>

Technical Committee:

[OASIS Open Data Protocol (OData)
TC](https://www.oasis-open.org/committees/odata/)

[Chairs:]{#AdditionalArtifacts}

Ralf Handl (<ralf.handl@sap.com>), [SAP SE](http://www.sap.com)

Michael Pizzo (<mikep@microsoft.com>),
[Microsoft](http://www.microsoft.com)

Editors:

Michael Pizzo (<mikep@microsoft.com>),
[Microsoft](http://www.microsoft.com)

Ralf Handl (<ralf.handl@sap.com>), [SAP SE](http://www.sap.com)

[Mark Biamonte
(]{lang="DE"}[[mark.biamonte@progress.com]{lang="DE"}](mailto:mark.biamonte@progress.com)[),
]{lang="DE"}[[Progress Software]{lang="DE"}](http://www.progress.com/)

[Related work]{#RelatedWork}:

This specification replaces or supersedes:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
JSON Format Version 4.0*. Edited by Ralf Handl, Michael Pizzo, and Mark
Biamonte. OASIS Standard. Latest stage:
<http://docs.oasis-open.org/odata/odata-json-format/v4.0/odata-json-format-v4.0.html>.

This specification is related to:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
Version 4.01*. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl.
A multi-part Work Product which includes:

[o[┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:
\"Courier New\""}*OData Version 4.01. Part 1: Protocol*. Latest stage:
<https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html>.

[o[┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:
\"Courier New\""}*OData Version 4.01. Part 2: URL Conventions*. Latest
stage:
<https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html>.

[o[┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:
\"Courier New\""}*ABNF components: OData ABNF Construction Rules Version
4.01 and OData ABNF Test Cases*.
<https://docs.oasis-open.org/odata/odata/v4.01/os/abnf/>.

[[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:
Symbol;color:windowtext"}]{.MsoHyperlink}*OData Vocabularies Version
4.0.* Edited by Michael Pizzo, Ralf Handl, and Ram Jeyaraman. [Latest
stage:
]{lang="DE"}[[http://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html]{lang="DE"}](http://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html)[[.]{lang="DE"}]{.MsoHyperlink}

[[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:
Symbol;color:windowtext"}]{.MsoHyperlink}*OData Common Schema Definition
Language (CSDL) JSON Representation Version 4.01.* Edited by Michael
Pizzo, Ralf Handl, and Martin Zurmuehl. Latest stage:
<https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html>[.]{.MsoHyperlink}

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}*OData
Common Schema Definition Language (CSDL) XML Representation Version
4.01.* Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. Latest
stage:
<https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html>.

Abstract:

The Open Data Protocol (OData) for representing and interacting with
structured content is comprised of a set of specifications. The core
specification for the protocol is in OData Version 4.01 Part 1:
Protocol. This document extends the core specification by defining
representations for OData requests and responses using a JSON format.

Status:

This document was last revised or approved by the membership of OASIS on
the above date. The level of approval is also listed above. Check the
"Latest stage" location noted above for possible later revisions of this
document. Any other numbered Versions and other technical work produced
by the Technical Committee (TC) are listed at
<https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata#technical>.

TC members should send comments on this specification to the TC's email
list. Others should send comments to the TC's public comment list, after
subscribing to it by following the instructions at the "[Send A
Comment](https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=odata)"
button on the TC's web page at
<https://www.oasis-open.org/committees/odata/>[[.]{style="color:black"}]{.MsoHyperlink}

[This specification is provided under the]{#_Hlk14362034} [RF on RAND
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

When referencing this specification, the following citation format
should be used:

[\[]{.Refterm}**OData-JSON-Format-v4.01\]**

*OData JSON Format Version 4.01.* Edited by Michael Pizzo, Ralf Handl,
and Mark Biamonte. 11 May 2020. OASIS Standard.
<https://docs.oasis-open.org/odata/odata-json-format/v4.01/os/odata-json-format-v4.01-os.html>[[.
Latest stage:]{style="color:#403152"}
]{.MsoHyperlink}<https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html>[.]{.MsoHyperlink}

::: {style="border:none;border-top:solid gray 1.0pt;padding:1.0pt 0in 0in 0in"}
Notices
:::

Copyright ┬⌐ OASIS Open 2020. All Rights Reserved.

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

[1[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Introduction[.
]{style="color:windowtext;display:none"}[7]{style="color:windowtext;display:none"}](#_Toc38457717)

[1.0 IPR Policy[. ]{style="color:windowtext;
display:none"}[7]{style="color:windowtext;display:none"}](#_Toc38457718)

[1.1 Terminology[. ]{style="color:
windowtext;display:none"}[7]{style="color:windowtext;display:none"}](#_Toc38457719)

[1.2 Normative References[.
]{style="color:windowtext;display:none"}[7]{style="color:windowtext;display:none"}](#_Toc38457720)

[1.3 Non-Normative References[.
]{style="color:windowtext;display:none"}[8]{style="color:windowtext;display:none"}](#_Toc38457721)

[1.4 Typographical Conventions[.
]{style="color:windowtext;display:none"}[8]{style="color:windowtext;display:none"}](#_Toc38457722)

[2[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}JSON Format
Design[.
]{style="color:windowtext;display:none"}[9]{style="color:windowtext;display:none"}](#_Toc38457723)

[3[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Requesting the JSON
Format[
]{style="color:windowtext;display:none"}[10]{style="color:windowtext;display:none"}](#_Toc38457724)

[3.1 Controlling the Amount of Control Information in Responses[.
]{style="color:windowtext;display:none"}[10]{style="color:windowtext;display:none"}](#_Toc38457725)

[3.1.1[ metadata=minimal]{style="font-family:\"Courier New\""}
([odata.metadata=minimal]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[10]{style="color:windowtext;display:none"}](#_Toc38457726)

[3.1.2[ metadata=full]{style="font-family:\"Courier New\""}
([odata.metadata=full]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[11]{style="color:windowtext;display:none"}](#_Toc38457727)

[3.1.3[ metadata=none]{style="font-family:\"Courier New\""}
([odata.metadata=none]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[11]{style="color:windowtext;display:none"}](#_Toc38457728)

[3.2 Controlling the Representation of Numbers[.
]{style="color:windowtext;display:none"}[11]{style="color:windowtext;display:none"}](#_Toc38457729)

[4[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Common
Characteristics[.
]{style="color:windowtext;display:none"}[13]{style="color:windowtext;display:none"}](#_Toc38457730)

[4.1 Header [Content-Type]{style="font-family:
\"Courier New\""}[.
]{style="color:windowtext;display:none"}[13]{style="color:windowtext;display:none"}](#_Toc38457731)

[4.2 Message Body[.
]{style="color:windowtext;display:none"}[13]{style="color:windowtext;display:none"}](#_Toc38457732)

[4.3 Relative URLs[.
]{style="color:windowtext;display:none"}[13]{style="color:windowtext;display:none"}](#_Toc38457733)

[4.4 Payload Ordering Constraints[.
]{style="color:windowtext;display:none"}[14]{style="color:windowtext;display:none"}](#_Toc38457734)

[4.5 Control Information[.
]{style="color:windowtext;display:none"}[15]{style="color:windowtext;display:none"}](#_Toc38457735)

[4.5.1 Control Information:
[context]{style="font-family:\"Courier New\""}
([odata.context]{style="font-family:
\"Courier New\""})[
]{style="color:windowtext;display:none"}[15]{style="color:windowtext;display:none"}](#_Toc38457736)

[4.5.2 Control Information:
[metadataEtag]{style="font-family:\"Courier New\""}
([odata.metadataEtag]{style="font-family:
\"Courier New\""})[ ]{style="color:windowtext;
display:none"}[15]{style="color:windowtext;display:none"}](#_Toc38457737)

[4.5.3 Control Information: [type]{style="font-family:\"Courier New\""}
([odata.]{style="font-family:\"Courier New\""}[type]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;
display:none"}[15]{style="color:windowtext;display:none"}](#_Toc38457738)

[4.5.4 Control Information: [count]{style="font-family:\"Courier New\""}
([odata.count]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[17]{style="color:windowtext;display:none"}](#_Toc38457739)

[4.5.5 Control Information:
[nextLink]{style="font-family:\"Courier New\""}
([odata.nextLink]{style="font-family:
\"Courier New\""})[ ]{style="color:windowtext;display:
none"}[17]{style="color:windowtext;display:none"}](#_Toc38457740)

[4.5.6 Control Information: [delta]{style="font-family:\"Courier New\""}
([odata.delta]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[17]{style="color:windowtext;display:none"}](#_Toc38457741)

[4.5.7 Control Information:
[deltaLink]{style="font-family:\"Courier New\""}
([odata.deltaLink]{style="font-family:
\"Courier New\""})[ ]{style="color:windowtext;display:
none"}[17]{style="color:windowtext;display:none"}](#_Toc38457742)

[4.5.8 Control Information: [id]{style="font-family:\"Courier New\""}
([odata.id]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[17]{style="color:windowtext;display:none"}](#_Toc38457743)

[4.5.9 Control Information:
[editLink]{style="font-family:\"Courier New\""} and
[readLink]{style="font-family:
\"Courier New\""} ([odata.editLink]{style="font-family:\"Courier New\""}
and [odata.readLink]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[17]{style="color:windowtext;display:none"}](#_Toc38457744)

[4.5.10 Control Information: [etag]{style="font-family:\"Courier New\""}
([odata.etag]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[18]{style="color:windowtext;display:none"}](#_Toc38457745)

[4.5.11 Control Information:
[navigationLink]{style="font-family:\"Courier New\""} and
[associationLink]{style="font-family:\"Courier New\""}
([odata.navigationLink]{style="font-family:\"Courier New\""} and
[odata.associationLink]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[18]{style="color:windowtext;display:none"}](#_Toc38457746)

[4.5.12 Control Information:
[media\*]{style="font-family:\"Courier New\""}
([odata.media\*]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[19]{style="color:windowtext;display:none"}](#_Toc38457747)

[4.5.13 Control Information:
[removed]{style="font-family:\"Courier New\""}
([odata.removed]{style="font-family:
\"Courier New\""})[
]{style="color:windowtext;display:none"}[19]{style="color:windowtext;display:none"}](#_Toc38457748)

[4.5.14 Control Information:
[collectionAnnotations]{style="font-family:\"Courier New\""}
([odata.collectionAnnotations]{style="font-family:\"Courier New\""})[
]{style="color:windowtext;display:none"}[19]{style="color:windowtext;display:none"}](#_Toc38457749)

[5[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Service Document[
]{style="color:windowtext;display:none"}[21]{style="color:windowtext;display:none"}](#_Toc38457750)

[6[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Entity[.
]{style="color:windowtext;display:none"}[23]{style="color:windowtext;display:none"}](#_Toc38457751)

[7[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Structural
Property[.
]{style="color:windowtext;display:none"}[24]{style="color:windowtext;display:none"}](#_Toc38457752)

[7.1 Primitive Value[.
]{style="color:windowtext;display:none"}[24]{style="color:windowtext;display:none"}](#_Toc38457753)

[7.2 Complex Value[.
]{style="color:windowtext;display:none"}[25]{style="color:windowtext;display:none"}](#_Toc38457754)

[7.3 Collection of Primitive Values[.
]{style="color:windowtext;display:none"}[25]{style="color:windowtext;display:none"}](#_Toc38457755)

[7.4 Collection of Complex Values[.
]{style="color:windowtext;display:none"}[25]{style="color:windowtext;display:none"}](#_Toc38457756)

[7.5 Untyped Value[.
]{style="color:windowtext;display:none"}[26]{style="color:windowtext;display:none"}](#_Toc38457757)

[8[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Navigation
Property[.
]{style="color:windowtext;display:none"}[27]{style="color:windowtext;display:none"}](#_Toc38457758)

[8.1 Navigation Link[.
]{style="color:windowtext;display:none"}[27]{style="color:windowtext;display:none"}](#_Toc38457759)

[8.2 Association Link[.
]{style="color:windowtext;display:none"}[27]{style="color:windowtext;display:none"}](#_Toc38457760)

[8.3 Expanded Navigation Property[.
]{style="color:windowtext;display:none"}[27]{style="color:windowtext;display:none"}](#_Toc38457761)

[8.4 Deep Insert[ ]{style="color:
windowtext;display:none"}[28]{style="color:windowtext;display:none"}](#_Toc38457762)

[8.5 Bind Operation[.
]{style="color:windowtext;display:none"}[28]{style="color:windowtext;display:none"}](#_Toc38457763)

[8.6 Collection ETag[.
]{style="color:windowtext;display:none"}[29]{style="color:windowtext;display:none"}](#_Toc38457764)

[9[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Stream Property[.
]{style="color:windowtext;display:none"}[31]{style="color:windowtext;display:none"}](#_Toc38457765)

[10[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Media Entity[.
]{style="color:windowtext;display:none"}[32]{style="color:windowtext;display:none"}](#_Toc38457766)

[11[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Individual Property
or Operation Response[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc38457767)

[12[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Collection of
Operation Responses[.
]{style="color:windowtext;display:none"}[34]{style="color:windowtext;display:none"}](#_Toc38457768)

[13[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Collection of
Entities[.
]{style="color:windowtext;display:none"}[35]{style="color:windowtext;display:none"}](#_Toc38457769)

[14[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Entity Reference[.
]{style="color:windowtext;display:none"}[36]{style="color:windowtext;display:none"}](#_Toc38457770)

[15[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Delta Payload[.
]{style="color:windowtext;display:none"}[37]{style="color:windowtext;display:none"}](#_Toc38457771)

[15.1 Delta Responses[.
]{style="color:windowtext;display:none"}[37]{style="color:windowtext;display:none"}](#_Toc38457772)

[15.2 Added/Changed Entity[.
]{style="color:windowtext;display:none"}[38]{style="color:windowtext;display:none"}](#_Toc38457773)

[15.3 Deleted Entity[.
]{style="color:windowtext;display:none"}[40]{style="color:windowtext;display:none"}](#_Toc38457774)

[15.4 Added Link[. ]{style="color:
windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc38457775)

[15.5 Deleted Link[.
]{style="color:windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc38457776)

[15.6 Update a Collection of Entities[.
]{style="color:windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc38457777)

[16[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Bound Function[.
]{style="color:windowtext;display:none"}[44]{style="color:windowtext;display:none"}](#_Toc38457778)

[17[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Bound Action[.
]{style="color:windowtext;display:none"}[46]{style="color:windowtext;display:none"}](#_Toc38457779)

[18[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Action Invocation[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc38457780)

[19[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Batch Requests and
Responses[.
]{style="color:windowtext;display:none"}[49]{style="color:windowtext;display:none"}](#_Toc38457781)

[19.1 Batch Request[
]{style="color:windowtext;display:none"}[49]{style="color:windowtext;display:none"}](#_Toc38457782)

[19.2 Referencing New Entities[.
]{style="color:windowtext;display:none"}[51]{style="color:windowtext;display:none"}](#_Toc38457783)

[19.3 Referencing an ETag[.
]{style="color:windowtext;display:none"}[51]{style="color:windowtext;display:none"}](#_Toc38457784)

[19.4 Processing a Batch Request[
]{style="color:windowtext;display:none"}[52]{style="color:windowtext;display:none"}](#_Toc38457785)

[19.5 Batch Response[.
]{style="color:windowtext;display:none"}[52]{style="color:windowtext;display:none"}](#_Toc38457786)

[19.6 Asynchronous Batch Requests[.
]{style="color:windowtext;display:none"}[53]{style="color:windowtext;display:none"}](#_Toc38457787)

[20[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Instance
Annotations[.
]{style="color:windowtext;display:none"}[56]{style="color:windowtext;display:none"}](#_Toc38457788)

[20.1 Annotate a JSON Object[
]{style="color:windowtext;display:none"}[56]{style="color:windowtext;display:none"}](#_Toc38457789)

[20.2 Annotate a JSON Array or Primitive[.
]{style="color:windowtext;display:none"}[56]{style="color:windowtext;display:none"}](#_Toc38457790)

[20.3 Annotate a Primitive Value within a JSON Array[.
]{style="color:windowtext;display:none"}[57]{style="color:windowtext;display:none"}](#_Toc38457791)

[21[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Error Handling[.
]{style="color:windowtext;display:none"}[58]{style="color:windowtext;display:none"}](#_Toc38457792)

[21.1 Error Response[.
]{style="color:windowtext;display:none"}[58]{style="color:windowtext;display:none"}](#_Toc38457793)

[21.2 In-Stream Error[
]{style="color:windowtext;display:none"}[58]{style="color:windowtext;display:none"}](#_Toc38457794)

[21.3 Error Information in a Success Payload[.
]{style="color:windowtext;display:none"}[59]{style="color:windowtext;display:none"}](#_Toc38457795)

[21.3.1 Primitive Value Errors[.
]{style="color:windowtext;display:none"}[59]{style="color:windowtext;display:none"}](#_Toc38457796)

[21.3.2 Structured Type Errors[.
]{style="color:windowtext;display:none"}[59]{style="color:windowtext;display:none"}](#_Toc38457797)

[21.3.3 Collection Errors[.
]{style="color:windowtext;display:none"}[59]{style="color:windowtext;display:none"}](#_Toc38457798)

[22[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Extensibility[.
]{style="color:windowtext;display:none"}[60]{style="color:windowtext;display:none"}](#_Toc38457799)

[23[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Security
Considerations[.
]{style="color:windowtext;display:none"}[61]{style="color:windowtext;display:none"}](#_Toc38457800)

[24[┬á┬á┬á┬á┬á ]{style="font-size:11.0pt;
font-family:\"Calibri\",sans-serif;color:windowtext"}Conformance[.
]{style="color:windowtext;display:none"}[62]{style="color:windowtext;display:none"}](#_Toc38457801)

[Appendix A.[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:
11.0pt;font-family:\"Calibri\",sans-serif;color:windowtext"}Acknowledgments[.
]{style="color:windowtext;display:none"}[64]{style="color:windowtext;display:none"}](#_Toc38457802)

[Appendix B.[┬á┬á┬á┬á┬á┬á┬á ]{style="font-size:
11.0pt;font-family:\"Calibri\",sans-serif;color:windowtext"}Revision
History[.
]{style="color:windowtext;display:none"}[65]{style="color:windowtext;display:none"}](#_Toc38457803)

┬á

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Introduction}[]{#_Toc19867059}[]{#_Toc12019412}[]{#_Toc418513387}[]{#_Toc402353019}[1[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc368563066}[Introduction](#sec_Introduction)[]{#_Toc38457717}[]{#_Toc23836891}[]{#_Toc37318986} {#introduction style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

The OData protocol is comprised of a set of specifications for
representing and interacting with structured content. The core
specification for the protocol is in [**\[OData-Protocol\]**](#odata);
this document is an extension of the core protocol. This document
defines representations for the OData requests and responses using the
JavaScript Object Notation (JSON), see [**\[RFC8259\]**](#RFC_JSON).

An OData JSON payload may represent:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}a
[single primitive value](#sec_PrimitiveValue)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}a
[collection of primitive values](#sec_CollectionofPrimitiveValues)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}a
[single complex type value](#sec_ComplexValue)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}a
[collection of complex type values](#sec_CollectionofComplexValues)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}a
[single entity](#sec_Entity) or [entity reference](#sec_EntityReference)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}a
[collection of entities](#sec_CollectionofEntities) or [entity
references](#sec_EntityReference)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}a
[collection of changes](#sec_DeltaPayload)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}a
[service document](#sec_ServiceDocument) describing the top-level
resources exposed by the service

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}an
[error](#sec_ErrorResponse).

## []{#_Toc418513388}[]{#_Toc402353020}[]{#_Toc368563067}[]{#sec_IPRPolicy}[1.0]{#_Toc19867060} [IPR Policy](#sec_IPRPolicy)[]{#_Toc37318987}[]{#_Toc23836892}[]{#_Toc38457718}

This specification is provided under the [RF on RAND
Terms](https://www.oasis-open.org/policies-guidelines/ipr#RF-on-RAND-Mode)
Mode of the [OASIS IPR
Policy](https://www.oasis-open.org/policies-guidelines/ipr), the mode
chosen when the Technical Committee was established. For information on
whether any patents have been disclosed that may be essential to
implementing this specification, and any offers of patent licensing
terms, please refer to the Intellectual Property Rights section of the
TC's web page (<https://www.oasis-open.org/committees/odata/ipr.php>).

## []{#sec_Terminology}[]{#_Toc19867061}[1.1]{#_Toc12019413} [Terminology](#sec_Terminology)[]{#_Toc38457719}[]{#_Toc23836893}[]{#_Toc37318988}

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
"SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
document are to be interpreted as described in
[**\[RFC2119\]**](#rfc2119).

## []{#sec_NormativeReferences}[]{#_Toc19867062}[]{#_Toc12019414}[]{#_Toc418513389}[]{#_Toc402353021}[]{#_Toc368563068}[1.2]{#_Ref7502892} [Normative References](#sec_NormativeReferences)[]{#_Toc38457720}[]{#_Toc23836894}[]{#_Toc37318989}

[\[[ECMAScript]{#ECMAScript}\]┬á┬á┬á┬á┬á┬á┬á┬á ]{.Refterm}*ECMAScript 2016
Language Specification, 7^th^ Edition,* June 2016. Standard ECMA-262.
<http://www.ecma-international.org/publications/standards/Ecma-262.htm>.

[\[[OData-ABNF]{#abnf}\]]{.Refterm}┬á┬á┬á┬á┬á┬á┬á┬á *OData ABNF Construction
Rules Version 4.01*.\
See link in "Related work" section on cover
page[.]{style="color:#222222"}

**[\[[OData-CSDLJSON]{#ODataCSDLJSON}\]]{style="color:windowtext"}**[┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á
]{style="color:windowtext"}*OData Common Schema Definition Language
(CSDL) JSON Representation Version 4.01*. See link in "Related work"
section on cover page.

**\[[OData-CSDLXML]{#ODataCSDLXML}\]┬á┬á┬á┬á┬á┬á┬á┬á** *OData Common Schema
Definition Language (CSDL) XML Representation Version 4.01.* See link in
\"Related work\" section on cover page.

[\[[OData-Protocol]{#odata}\]]{.Refterm}┬á┬á┬á┬á *OData Version 4.01 Part 1:
Protocol*.\
See link in "Related work" section on cover
page[.]{style="color:#222222"}

**[\[[OData-URL]{#ODataURLRef}\]]{style="color:windowtext"}**┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á
*OData Version 4.01 Part 2: URL Conventions*.\
See link in \"Related work\" section on cover page.

**\[[OData-VocCap]{#VocCapabilities}\]**┬á┬á┬á┬á┬á *OData Vocabularies
Version 4.0: Capabilities Vocabulary.*\
See link in \"Related work\" section on cover page.

[**\[OData-VocCore\]**]{#VocCore}┬á┬á┬á┬á *OData Vocabularies Version 4.0:
Core Vocabulary.*\
See link in \"Related work\" section on cover page

[\[[RFC2119]{#rfc2119}\]]{.Refterm}┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á Bradner, S., "Key
words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119,
March 1997. <https://tools.ietf.org/html/rfc2119>.

[\[[RFC3986]{#RFC3986}\]]{.Refterm}┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á Berners-Lee, T.,
Fielding, R., and L. Masinter, "Uniform Resource Identifier (URI):
Generic Syntax", IETF RFC3986, January 2005.
<https://tools.ietf.org/html/rfc3986>.

[\[[RFC3987]{#RFC3987}\]]{.Refterm}┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á Duerst, M. and, M.
Suignard, "Internationalized Resource Identifiers (IRIs)", RFC 3987,
January 2005. <https://tools.ietf.org/html/rfc3987>.

**\[[RFC4648]{#RFC4648}\]**┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á Josefsson, S,, "The Base16,
Base32, and Base64 Data Encodings\", RFC 4648, October 2006.
<https://tools.ietf.org/html/rfc4648>.

[\[[RFC5646]{#rfc5646}\]]{.Refterm}┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á Phillips, A., Ed., and
M. Davis, Ed., "Tags for Identifying Languages", BCP 47, RFC 5646,
September 2009. <http://tools.ietf.org/html/rfc5646>.

[]{#_Toc418513390}[]{#_Toc402353022}[[\[]{.Refterm}]{#_Toc368563069}[[RFC7493]{.Refterm}]{#RFC7493}[\]┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á
]{.Refterm}[[Bray, T., Ed., \"The I-JSON Message Format\", RFC7493,
March 2015.
]{style="font-weight:normal"}]{.Refterm}<https://tools.ietf.org/html/rfc7493>.

[\[[RFC7946]{#RFC7946}\]]{.Refterm}┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á Howard Butler, Martin
Daly, Alan Doyle, Sean Gillies, [Stefan Hagen and
]{style="color:#333333"}Tim Schaub, \"The GeoJSON Format\", [RFC 7946,
August 2016.\
]{style="color:#333333"}<http://tools.ietf.org/html/rfc7946>[.]{style="color:#222222"}

[\[[]{#RFC_JSON}[RFC8259]{#rfc7159}\]]{.Refterm}┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á Bray, T.,
Ed., "The JavaScript Object Notation (JSON) Data Interchange Format",
RFC 8259, December 2017. <http://tools.ietf.org/html/rfc8259>.

## []{#sec_NonNormativeReferences}[]{#_Toc19867063}[]{#_Toc12019415}[]{#_Toc528330154}[1.3]{#_Toc475623912} [Non-Normative References](#sec_NonNormativeReferences)[]{#_Toc37318990}[]{#_Toc23836895}[]{#_Toc38457721}

[\[[GeoJSON-2008]{#GeoJSON2008}\]┬á┬á┬á┬á ]{.Refterm}[[Butler, H., Daly, M.,
Doyle, A., Gillies, S., Schaub, T., and C. Schmidt, \"The GeoJSON Format
Specification\", June
2008]{style="font-weight:normal"}]{.Refterm}**[.]{style="background:white"}**[
]{style="background:white"}[[http://geojson.org/geojson-spec.html]{style="background:white"}](http://geojson.org/geojson-spec.html)[.]{style="background:white"}

## []{#sec_TypographicalConventions}[]{#_Toc19867064}[1.4]{#_Toc12019416} [Typographical Conventions](#sec_TypographicalConventions)[]{#_Toc38457722}[]{#_Toc23836896}[]{#_Toc37318991}

Keywords defined by this specification use this [monospaced]{.Datatype}
font.

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
# []{#sec_JSONFormatDesign}[]{#_Toc19867065}[]{#_Toc12019417}[]{#_Toc418513391}[]{#_Toc402353023}[2[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc368563070}[JSON Format Design](#sec_JSONFormatDesign)[]{#_Toc38457723}[]{#_Toc23836897}[]{#_Toc37318992} {#json-format-design style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

JSON, as described in [**\[RFC8259\]**](#RFC_JSON)[, ]{.Refterm}defines
a text format for serializing structured data. Objects are serialized as
an unordered collection of name/value pairs.

JSON does not define any semantics around the name/value pairs that make
up an object, nor does it define an extensibility mechanism for adding
control information to a payload.

OData's JSON format extends JSON by defining general conventions for
name/value pairs that annotate a JSON object, property or array. OData
defines a set of canonical name/value pairs for control information such
as ids, types, and links, and [instance
annotations](#sec_InstanceAnnotations) MAY be used to add
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
[Accept]{.Datatype} header allows the client to control the amount of
control information added to the response.

To optimize streaming scenarios, there are a few restrictions that MAY
be imposed on the sequence in which name/value pairs appear within JSON
objects. For details on the ordering requirements see [Payload Ordering
Constraints](#sec_PayloadOrderingConstraints).

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_RequestingtheJSONFormat}[]{#_Toc19867066}[]{#_Toc12019418}[]{#_Toc418513392}[]{#_Toc402353024}[]{#_Toc368563071}[]{#_Ref356829731}[]{#_Ref356829677}[]{#_Requesting_the_JSON}3[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}[Requesting the JSON Format](#sec_RequestingtheJSONFormat)[]{#_Toc38457724}[]{#_Toc23836898}[]{#_Toc37318993} {#requesting-the-json-format style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

The OData JSON format can be requested using the [\$format]{.Datatype}
query option in the request URL with the media type
[application/json]{.Datatype}, optionally followed by format parameters,
or the case-insensitive abbreviation [json]{.Datatype} which MUST NOT be
followed by format parameters.

Alternatively, this format can be requested using the
[Accept]{.Datatype} header with the media type
[application/json]{.Datatype}, optionally followed by format parameters.

If specified, [\$format]{.Datatype} overrides any value specified in the
[Accept]{.Datatype} header.

Possible format parameters are:

[[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;color:windowtext"}]{.MsoHyperlink}[[ExponentialDecimals]{style="font-family:\"Courier New\""}](#sec_ControllingtheRepresentationofNumber)

[[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;color:windowtext"}]{.MsoHyperlink}[[IEEE754Compatible]{style="font-family:\"Courier New\""}](#sec_ControllingtheRepresentationofNumber)

[[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}]{.Datatype}[[metadata]{style="font-family:\"Courier New\""}](#sec_ControllingtheAmountofControlInforma)[[
(odata.metadata)]{style="font-family:\"Courier New\""}]{.MsoHyperlink}

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[streaming]{style="font-family:
\"Courier New\""}](#sec_PayloadOrderingConstraints)[[
(odata.streaming)]{style="font-family:\"Courier New\""}]{.MsoHyperlink}

The names and values of these format parameters are case-insensitive.

Services SHOULD advertise the supported media types by annotating the
entity container with the term
[[Capabilities]{style="font-family:\"Courier New\""}[.SupportedFormats]{style="font-family:
\"Courier New\""}](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#SupportedFormats)
defined in [**\[OData-VocCap\]**](#VocCapabilities), listing all
available formats and combinations of supported format parameters.

## []{#sec_ControllingtheAmountofControlInforma}[]{#_Toc19867067}[]{#_Toc12019419}[]{#_Toc418513393}[]{#_Toc402353025}[]{#_Toc368563072}[]{#_Controlling_the_Amount}3.1 [Controlling the Amount of Control Information in Responses](#sec_ControllingtheAmountofControlInforma)[]{#_Toc38457725}[]{#_Toc23836899}[]{#_Toc37318994}

The amount of [control information](#sec_ControlInformation) needed (or
desired) in the payload depends on the client application and device.
The [metadata]{.Datatype} parameter can be applied to the
[Accept]{.Datatype} header of an OData request to influence how much
control information will be included in the response.

Other [Accept]{.Datatype} header parameters (e.g.,
[streaming]{.Datatype}) are orthogonal to the [metadata]{.Datatype}
parameter and are therefore not mentioned in this section.

If a client prefers a very small wire size and is intelligent enough to
compute data using metadata expressions, the [Accept]{.Datatype} header
should include
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal).
If computation is more critical than wire size or the client is
incapable of computing control information,
[[metadata=full]{style="font-family:\"Courier New\""}](#sec_metadatafullodatametadatafull)
directs the service to inline the control information that normally
would be computed from metadata expressions in the payload.
[[metadata=none]{style="font-family:\"Courier New\""}](#sec_metadatanoneodatametadatanone)
is an option for clients that have out-of-band knowledge or don\'t
require control information.

In addition, the client may use the [include-annotations]{.Datatype}
preference in the [Prefer]{.Datatype} header to request additional
control information. Services supporting this MUST NOT omit control
information required by the chosen [metadata]{.Datatype} parameter, and
services MUST NOT exclude the
[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL),
[[deltaLink]{style="font-family:
\"Courier New\""}](#sec_ControlInformationdeltaLinkodatadelt), and
[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount)
if they are required by the response type.

If the client includes the
[OData-MaxVersion]{style="font-family:\"Courier New\""} header in a
request and does not specify the
[metadata]{style="font-family:\"Courier New\""} format parameter in
either the [Accept]{.Datatype} header or [\$format]{.Datatype} query
option, the service MUST return at least the [minimal control
information](#sec_metadataminimalodatametadataminimal).

Note that in OData 4.0 the [metadata]{.Datatype} format parameter was
prefixed with "[odata]{.Datatype}.". Payloads with an [OData-Version
]{.Datatype}header equal to
[4.0]{style="font-family:\"Courier New\";color:black;background:white"}
MUST include the "[odata]{.Datatype}." prefix. Payloads with an
[OData-Version ]{.Datatype}header equal to [4.01]{style="font-family:
\"Courier New\";color:black;background:white"} or greater SHOULD NOT
include the "[odata]{.Datatype}." prefix.┬á

### []{#sec_metadataminimalodatametadataminimal}[]{#_Toc19867068}[]{#_Toc12019420}[]{#_Toc418513394}[]{#_Toc402353026}[]{#_Toc368563073}[]{#_Ref359603569}[]{#_odata=minimalmetadata}[]{#_odata.metadata=minimal}3.1.1 [[metadata=minimal]{style="font-family:\"Courier New\""} ([odata.metadata=minimal]{style="font-family:\"Courier New\""})](#sec_metadataminimalodatametadataminimal)[]{#_Toc38457726}[]{#_Toc23836900}[]{#_Toc37318995}

The [metadata=minimal]{.Datatype} format parameter indicates that the
service SHOULD remove computable control information from the payload
wherever possible. The response payload MUST contain at least the
following [control
information](#sec_ControlInformation)[:]{.MsoHyperlink}

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex):
the root context URL of the payload and the context URL for any deleted
entries or added or deleted links in a delta response, or for entities
or entity collections whose set cannot be determined from the root
context URL

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[etag]{style="font-family:\"Courier New\""}](#sec_ControlInformationetagodataetag):
the ETag of the entity or collection, as appropriate

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount):
the total count of a collection of entities or collection of entity
references, if requested

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL):
the next link of a collection with partial results

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[deltaLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationdeltaLinkodatadelt):
the delta link for obtaining changes to the result, if requested

In addition, control information MUST appear in the payload for cases
where actual values are not the same as the computed values and MAY
appear otherwise. When control information appears in the payload, it is
treated as exceptions to the computed values.

Media entities and stream properties MAY in addition contain the
following control information:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[mediaEtag]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia):
the ETag of the stream, as appropriate

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[mediaContentType]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia):
the media type of the stream

### []{#sec_metadatafullodatametadatafull}[]{#_Toc19867069}[]{#_Toc12019421}[]{#_Toc418513395}[]{#_Toc402353027}[]{#_Toc368563074}[]{#_Ref356829837}[]{#_Ref356829810}[]{#_Ref356829691}[]{#_odata.metadata=full}3.1.2 [[metadata=full]{style="font-family:\"Courier New\""} ([odata.metadata=full]{style="font-family:\"Courier New\""})](#sec_metadatafullodatametadatafull)[]{#_Toc38457727}[]{#_Toc23836901}[]{#_Toc37318996}

The [metadata=full]{.Datatype} format parameter indicates that the
service MUST include all control information explicitly in the payload.

The full list of control information that may appear in a
[metadata=full]{.Datatype} response is as follows:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex):
the context URL for a collection, entity, primitive value, or service
document.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount):
the total count of a collection of entities or collection of entity
references, if requested.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL):
the next link of a collection with partial results

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[deltaLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationdeltaLinkodatadelt):
the delta link for obtaining changes to the result, if requested

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[id]{style="font-family:\"Courier New\""}](#sec_ControlInformationidodataid):
the ID of the entity

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[etag]{style="font-family:\"Courier New\""}](#sec_ControlInformationetagodataetag):
the ETag of the entity or collection, as appropriate

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[readLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationeditLinkandreadLin):
the link used to read the entity, if the edit link cannot be used to
read the entity

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[editLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationeditLinkandreadLin):
the link used to edit/update the entity, if the entity is updatable and
the [id]{.Keyword} does not represent a URL that can be used to edit the
entity

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[navigationLink]{style="font-family:\"Courier New\""}](#sec_NavigationLink):
the link used to retrieve the values of a navigation property

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[associationLink]{style="font-family:\"Courier New\""}](#sec_AssociationLink):
the link used to describe the relationship between this entity and
related entities

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype):
the type of the containing object or targeted property if the type of
the object or targeted property cannot be heuristically determined from
the data value, see section [Control Information: type
(odata.type)](#sec_ControlInformationtypeodatatype).

Media entities and stream properties may in addition contain the
following control information:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[mediaReadLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia):
the link used to read the stream

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[mediaEditLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia):
the link used to edit/update the stream

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[mediaEtag]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia):
the ETag of the stream, as appropriate

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[mediaContentType]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia):
the media type of the stream

### []{#sec_metadatanoneodatametadatanone}[]{#_Toc19867070}[]{#_Toc12019422}[]{#_Toc418513396}[]{#_Toc402353028}[]{#_Toc368563075}[]{#_Ref356829825}[]{#_odata=nometadata}[]{#_odata=nometadata_1}[]{#_odata.metadata=none}3.1.3 [[metadata=none]{style="font-family:\"Courier New\""} ([odata.metadata=none]{style="font-family:\"Courier New\""})](#sec_metadatanoneodatametadatanone)[]{#_Toc38457728}[]{#_Toc23836902}[]{#_Toc37318997}

The [metadata=none]{.Datatype} format parameter indicates that the
service SHOULD omit control information other than
[[nextLink]{style="font-family:
\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL) and
[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount).
This control information MUST continue to be included, as applicable,
even in the [metadata=none]{.Datatype} case.

It is not valid to specify [metadata=none]{.Datatype} on a [delta
request](#sec_DeltaPayload).

## []{#sec_ControllingtheRepresentationofNumber}[]{#_Toc19867071}[]{#_Toc12019423}[]{#_Toc418513397}[]{#_Toc402353029}[]{#_Toc368563076}[]{#_Controlling_the_Representation}3.2 [Controlling the Representation of Numbers](#sec_ControllingtheRepresentationofNumber)[]{#_Toc38457729}[]{#_Toc23836903}[]{#_Toc37318998}

The [IEEE754Compatible=true]{.Datatype} format parameter indicates that
the service MUST serialize [Edm.Int64]{.Datatype} and
[Edm.Decimal]{.Datatype} numbers (including the
[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount),
if requested) as strings. This is in conformance with
[**\[**[[RFC7493]{style="color:windowtext"}]{.Refterm}**\]**](#RFC7493).

If not specified, or specified as [IEEE754Compatible=false]{.Datatype},
all numbers MUST be serialized as JSON numbers.

This enables support for JavaScript numbers that are defined to be
64-bit binary format IEEE 754 values [**\[ECMAScript\]**](#ECMAScript)
(see [section
4.3.1.9](http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.19))
resulting in integers losing precision past 15 digits, and decimals
losing precision due to the conversion from base 10 to base 2.

OData JSON request and response payloads that format
[Edm.Int64]{.Datatype} and [Edm.Decimal]{.Datatype} values as strings
MUST specify this format parameter in the media type sent in the
[[Content-Type]{style="font-family:\"Courier New\""}](#sec_HeaderContentType)
header.

Services producing responses without format parameter
[IEEE754Compatible=true]{.Datatype} which are unable to produce exact
JSON numbers MAY serialize [Edm.Int64]{.Datatype} and
[Edm.Decimal]{.Datatype} numbers with a rounded/inexact value as a JSON
number and annotate that value with an instance annotation with term
[Core.ValueException]{.Datatype} defined in
[**\[OData-VocCore\]**](#VocCore) containing the exact value as a
string. This situation can for example happen if the client only accepts
[application/json]{.Datatype} without any format parameters and the
service is written in JavaScript.

For payloads with an [OData-Version]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}header equal to
[4.0]{style="font-family:\"Courier New\";color:black;background:white"}
the [ExponentialDecimals=true]{.Datatype} format parameter indicates
that the service MAY serialize [Edm.Decimal]{.Datatype} numbers in
exponential notation (e.g. [1e-6]{.Datatype} instead of
[0.000001]{.Datatype}).

The sender of a request MUST specify
[ExponentialDecimals=true]{.Datatype} in the [Content-Type]{.Datatype}
header if the request body contains [Edm.Decimal]{.Datatype} values in
exponential notation.

If not specified, or specified as
[ExponentialDecimals=false]{.Datatype}, all [Edm.Decimal]{.Datatype}
values MUST be serialized in long notation, using only an optional sign,
digits, and an optional decimal point followed by digits.

Payloads with an [OData-Version]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}header equal to
[4.01]{style="font-family:\"Courier New\";color:black;background:white"}
or greater always allow exponential notation for numbers and the
[ExponentialDecimals]{.Keyword} format parameter is not needed or used.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_CommonCharacteristics}[]{#_Toc19867072}[]{#_Toc12019424}[]{#_Toc418513398}[]{#_Toc402353030}[4[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc368563077}[Common Characteristics](#sec_CommonCharacteristics)[]{#_Toc38457730}[]{#_Toc23836904}[]{#_Toc37318999} {#common-characteristics style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

This section describes common characteristics of the representation for
OData values in JSON. A request or response body consists of several
parts. It contains OData values as part of a larger document. Requests
and responses are structured almost identical; the few existing
differences will be explicitly called out in the respective subsections.

## []{#sec_HeaderContentType}[]{#_Toc19867073}[]{#_Toc12019425}[]{#_Toc418513399}[]{#_Toc402353031}[]{#_Toc368563078}[]{#_Header_Content-Type}4.1 [Header [Content-Type]{style="font-family:\"Courier New\""}](#sec_HeaderContentType)[]{#_Toc38457731}[]{#_Toc23836905}[]{#_Toc37319000}

Requests and responses with a JSON message body MUST have a
[Content-Type]{.Keyword} header value of [application/json]{.Keyword}.

Requests MAY add the [charset]{.Datatype} parameter to the content type.
Allowed values are [UTF-8]{.Datatype},[ UTF-16]{.Datatype}, and
[UTF-32]{.Datatype}. If no [charset]{.Datatype} parameter is present,
[UTF-8]{.Datatype} MUST be assumed.

Responses MUST include the
[[metadata]{style="font-family:\"Courier New\""}](#sec_ControllingtheAmountofControlInforma)
parameter to specify the amount of metadata included in the response.

Requests and responses MUST include the
[[IEEE754Compatible]{style="font-family:\"Courier New\""}](#sec_ControllingtheRepresentationofNumber)
parameter if [Edm.Int64]{.Datatype} and [Edm.Decimal]{.Datatype} numbers
are represented as strings.

Requests and responses MAY add the [streaming]{.Datatype} parameter with
a value of [true]{.Datatype} or [false]{.Datatype}, see section [Payload
Ordering Constraints](#sec_PayloadOrderingConstraints).

## []{#sec_MessageBody}[]{#_Toc19867074}[]{#_Toc12019426}[]{#_Toc418513400}[]{#_Toc402353032}[4.2]{#_Toc368563079} [Message Body](#sec_MessageBody)[]{#_Toc38457732}[]{#_Toc23836906}[]{#_Toc37319001}

Each message body is represented as a single JSON object. This object is
either the representation of an [entity](#sec_Entity)[,
]{.MsoHyperlink}an [entity reference](#sec_EntityReference) or a
[complex type instance](#sec_ComplexValue), or it contains a name/value
pair whose name MUST be [value]{.Keyword} and whose value is the correct
representation for a [primitive value](#sec_PrimitiveValue), a
[collection of primitive values](#sec_CollectionofPrimitiveValues), a
[collection of complex values](#sec_CollectionofComplexValues), a
[collection of entities](#sec_CollectionofEntities), or a collection of
objects that represent [changes to a previous
result](#sec_DeltaPayload).

[]{#RelativeURLs}[]{#_Relative_URLs_1}Client libraries MUST retain the
order of objects within an array in JSON responses.

## []{#sec_RelativeURLs}[]{#_Toc19867075}[]{#_Toc12019427}[]{#_Toc418513401}[]{#_Toc402353033}[]{#_Toc368563080}[]{#_Relative_URLs}4.3 [Relative URLs](#sec_RelativeURLs)[]{#_Toc38457733}[]{#_Toc23836907}[]{#_Toc37319002}

URLs present in a payload (whether request or response) MAY be
represented as relative URLs.

Relative URLs, other than those in
[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype),
are relative to their base URL, which is

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}the
[context URL](#sec_ControlInformationcontextodatacontex) of the same
JSON object, if one exists, otherwise

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}the
context URL of the enclosing object, if one exists, otherwise

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}the
context URL of the next enclosing object, if one exists, etc. until the
document root, otherwise

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}the
request URL.

For context URLs, these rules apply starting with the second bullet
point.

Within the
[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype)
control information, relative URLs are relative to the base type URL,
which is

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}the
[type]{.Datatype} of the enclosing object, if one exists, otherwise

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}the
[type]{.Datatype} of the next enclosing object, if one exists, etc.
until the document root, otherwise

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}the
context URL of the document root, if one exists, otherwise

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}the
request URL.

Processors expanding the URLs MUST use normal URL expansion rules as
defined in [RFC3986]{.Refterm}. This means that if the base URL is a
context URL, the part starting with [\$metadata#]{.Datatype} is ignored
when resolving the relative URL.

Clients that receive relative URLs in response payloads SHOULD use the
same relative URLs, where appropriate, in request payloads (such as
[bind operations](#sec_BindOperation) and batch requests) and in system
query options (such as [\$id]{.Datatype}).

URLs represented as a string within a JSON payload, including [batch
requests](#sec_BatchRequest), must follow standard OData encoding rules.
For relative URLs this means that colons in the path part, especially
within key values, MUST be percent-encoded to avoid confusion with the
scheme separator. Colons within the query part, i.e. after the question
mark character ([?]{.Datatype}), need not be percent-encoded.

Example 2:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \...]{style="color:black"}

[┬á \"@editLink\": \"Customers(\'ALFKI\')\",]{style="color:black"}

[┬á \...]{style="color:black"}

[┬á \"Orders@navigationLink\":
\"Customers(\'ALFKI\')/Orders\",]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

The resulting absolute URLs are
[http://host/service/Customers(\'ALFKI\')]{.Datatype} and
[http://host/service/Customers(\'ALFKI\')/Orders]{.Datatype}.

## []{#sec_PayloadOrderingConstraints}[]{#_Toc19867076}[]{#_Toc12019428}[]{#_Toc418513402}[]{#_Toc402353034}[]{#_Toc368563081}[]{#_Ref354567725}[]{#_Payload_Ordering_Constraints_1}4.4 [Payload Ordering Constraints](#sec_PayloadOrderingConstraints)[]{#_Toc38457734}[]{#_Toc23836908}[]{#_Toc37319003}

Ordering constraints MAY be imposed on the JSON payload in order to
support streaming scenarios. These ordering constraints MUST only be
assumed if explicitly specified as some clients (and services) might not
be able to control, or might not care about, the order of the JSON
properties in the payload.

Clients can request that a JSON response conform to these ordering
constraints by specifying a media type of
[application/json]{style="font-family:
\"Courier New\""} with the [streaming=true]{.Datatype} parameter in the
[Accept]{style="font-family:\"Courier New\""} header or
[\$format]{style="font-family:\"Courier New\""} query option. Services
MUST return [406 Not Acceptable]{style="font-family:\"Courier New\""} if
the client only requests streaming and the service does not support it.

Clients may specify the [streaming=true]{.Datatype} parameter in the
[Content-Type]{style="font-family:\"Courier New\""} header of requests
to indicate that the request body follows the payload ordering
constraints. In the absence of this parameter, the service must assume
that the JSON properties in the request are unordered.

Processors MUST only assume streaming support if it is explicitly
indicated in the [Content-Type]{.Datatype} header via the
[streaming=true]{.Datatype} parameter.

Example 3: a payload with

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Content-Type: application/json;metadata=minimal;streaming=true
]{style="color:black"}
:::

can be assumed to support streaming, whereas a payload with

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[Content-Type: application/json;metadata=minimal ]{style="color:black"}
:::

cannot be assumed to support streaming.

JSON producers are encouraged to follow the payload ordering constraints
whenever possible (and include the [streaming=true]{.Datatype}
content-type parameter) to support the maximum set of client scenarios.

To support streaming scenarios the following payload ordering
constraints have to be met:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}If
present, the [context]{.Datatype} control information MUST be the first
property in the JSON object.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
[type]{.Datatype} control information, if present, MUST appear next in
the JSON object.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
[id]{.Datatype} and [etag]{.Datatype} control information MUST appear
before any property, property annotation, or property control
information.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}All
annotations or control information for a structural or navigation
property MUST appear as a group immediately before the property itself.
The one exception is the
[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL)
of a collection which MAY appear after the collection it annotates.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}All
other [[control
information]{style="font-family:\"Arial\",sans-serif"}]{.Datatype} can
appear anywhere in the payload as long as it does not violate any of the
above rules.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}For
4.0 payloads, annotations and control information for navigation
properties MUST appear after all structural properties. 4.01 clients
MUST NOT assume this ordering.

[]{#_Toc418513403}[]{#_Toc402353035}[]{#_Toc368563082}[]{#_Ref356829936}[]{#_Control_Information}Note
that, in OData 4.0, the [streaming]{.Datatype}[[ ]{style="font-family:
\"Arial\",sans-serif"}]{.Datatype}format parameter was prefixed with
"[odata]{.Datatype}.".┬á Payloads with an [OData-Version]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}header equal to
[4.0]{style="font-family:\"Courier New\";color:black;background:white"}
MUST include the "[odata]{.Datatype}." prefix. Payloads with an
[OData-Version ]{.Datatype}header equal to [4.01]{style="font-family:
\"Courier New\";color:black;background:white"} or greater SHOULD NOT
include the "[odata]{.Datatype}." prefix.┬á

## []{#sec_ControlInformation}[]{#_Toc19867077}[]{#_Toc12019429}[]{#_Ref484691563}[]{#_Control_Information_1}4.5 [Control Information](#sec_ControlInformation)[]{#_Toc38457735}[]{#_Toc23836909}[]{#_Toc37319004}

In addition to the "pure data" a message body MAY contain
[annotations](#sec_InstanceAnnotations) and control information that is
represented as name/value pairs whose names start with [@]{.Datatype}.

In requests and responses with an [OData-Version]{style="font-family:
\"Courier New\""} header with a value of [4.0]{.Keyword} control
information names are prefixed with [\@odata.]{.Datatype}, e.g.
[\@odata.context]{.Datatype}. In requests and responses without such a
header the "[odata.]{style="font-family:\"Courier New\""}" infix SHOULD
be omitted, e.g [\@context]{.Datatype}.

In some cases, control information is required in request payloads; this
is called out in the following subsections.

Receivers[ ]{style="color:black;background:white"}that encounter unknown
annotations [in any namespace or unknown control information MUST NOT
stop processing and MUST NOT signal an
error[.]{.apple-converted-space}]{style="color:black;background:white"}

### []{#sec_ControlInformationcontextodatacontex}[]{#_Toc19867078}[]{#_Toc12019430}[]{#_Toc418513404}[]{#_Toc402353036}[]{#_Toc368563083}[]{#_Ref356921125}[]{#_The_odata.metadata_Annotation_1}[]{#_Annotation_odata.metadata}[]{#_Annotation_odata.context}4.5.1 [Control Information: [context]{style="font-family:\"Courier New\""} ([odata.context]{style="font-family:
\"Courier New\""})](#sec_ControlInformationcontextodatacontex)[]{#_Toc38457736}[]{#_Toc23836910}[]{#_Toc37319005}

The [context]{style="font-family:\"Courier New\""} control information
returns the context URL (see [**\[OData-Protocol\]**](#odata)) for the
payload. This URL can be absolute or [relative](#sec_RelativeURLs).

The [context]{style="font-family:\"Courier New\""} control information
is not returned if
[[metadata=none]{style="font-family:\"Courier New\""}](#sec_metadatanoneodatametadatanone)[
]{.MsoHyperlink}is requested. Otherwise[ ]{.MsoHyperlink}it MUST be the
first property of any JSON response[. ]{.MsoHyperlink}

The [context]{style="font-family:\"Courier New\""} control information
MUST also be included in requests and responses for entities whose
entity set cannot be determined from the context URL[ ]{.MsoHyperlink}of
the collection.

For more information on the format of the context URL, see
[**\[OData-Protocol\]**](#odata).

Request payloads MAY include a context URL as a base URL for [relative
URLs](#sec_RelativeURLs) in the request payload.

Example 4:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \"@metadataEtag\":
\"W/\\\"A1FF3E230954908F\\\"\",]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

### []{#sec_ControlInformationmetadataEtagodatam}[]{#_Toc19867079}[]{#_Toc12019431}[]{#_Toc418513405}[]{#_Toc402353037}[]{#_Toc368563084}[]{#_Annotation_odata.metadataEtag}4.5.2 [Control Information: [metadataEtag]{style="font-family:\"Courier New\""} ([odata.metadataEtag]{style="font-family:
\"Courier New\""})](#sec_ControlInformationmetadataEtagodatam)[]{#_Toc38457737}[]{#_Toc23836911}[]{#_Toc37319006}

The [metadataEtag]{.Datatype} control information MAY appear in a
response in order to specify the entity tag (ETag) that can be used to
determine the version of the metadata of the response. If an ETag is
returned when requesting the metadata document, then the service SHOULD
set the [metadataEtag]{.Datatype} control information to the metadata
document\'s ETag in all responses when using
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal)
or
[[metadata=full]{style="font-family:\"Courier New\""}](#sec_metadatafullodatametadatafull).
If no ETag is returned when requesting the metadata document, then the
service SHOULD NOT set the [metadataEtag]{.Datatype} control information
in any responses.

For details on how ETags are used, see [**\[OData-Protocol\]**](#odata).

### []{#sec_ControlInformationtypeodatatype}[]{#_Toc19867080}[]{#_Toc12019432}[]{#_Toc418513406}[]{#_Toc402353038}[]{#_Toc368563085}[]{#odataType}[]{#_Annotation_odata.type}[]{#_Annotation_odata.type_(type)}4.5.3 [Control Information: [type]{style="font-family:\"Courier New\""} ([odata.]{style="font-family:\"Courier New\""}[type]{style="font-family:\"Courier New\""})](#sec_ControlInformationtypeodatatype)[]{#_Toc38457738}[]{#_Toc23836912}[]{#_Toc37319007}

The [type]{.Datatype} control information specifies the type of a JSON
object or name/value pair. Its value is a URI that identifies the type
of the property or object. For built-in primitive types the value is the
unqualified name of the primitive type. For payloads described by an
[OData-Version]{style="font-family:\"Courier New\""} header with a value
of [4.0]{.Keyword}, this name MUST be prefixed with the hash symbol
([\#]{style="font-family:\"Courier New\""}); for non-OData 4.0 payloads,
built-in primitive type values SHOULD be represented without the hash
symbol, but consumers of 4.01 or greater payloads MUST support values
with or without the hash symbol. For all other types, the URI may be
absolute or relative to the [type]{.Datatype} of the containing object.
The root [type]{.Datatype} may be absolute or relative to the root
[context URL](#sec_ControlInformationcontextodatacontex).

If the URI references a metadata document (that is, it's not just a
fragment), it MAY refer to a specific version of that metadata document
using the [\$s]{.Keyword}[chemaversion]{.Datatype} system query option
defined in [**\[OData-Protocol\]**](#odata)[.]{.MsoHyperlink}

For non-built in primitive types, the URI contains the
namespace-qualified or alias-qualified type, specified as a URI
fragment. For properties that represent a collection of values, the
fragment is the namespace-qualified or alias-qualified element type
enclosed in parentheses and prefixed with [Collection]{.Datatype}. The
namespace or alias MUST be defined or the namespace referenced in the
metadata document of the service, see
[**\[OData-CSDLJSON\]**](#ODataCSDLJSON) or
[**\[OData-CSDLXML\]**](#ODataCSDLXML).

The [type]{.Datatype} control information MUST appear in requests and in
responses with [minimal](#sec_metadataminimalodatametadataminimal) or
[full](#sec_metadatafullodatametadatafull) metadata, if the type cannot
be heuristically determined, as described below, and one of the
following is true:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
type is derived from the type specified for the (collection of) entities
or (collection of) complex type instances, or

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
type is for a property whose type is not declared in
[\$metadata]{.Datatype}.

The following heuristics are used to determine the primitive type of a
dynamic property in the absence of the [type]{.Datatype} control
information:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Boolean
values have a first-class representation in JSON and do not need any
additional control information.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Numeric
values have a first-class representation in JSON but are not further
distinguished, so they include a
[[[type]{style="color:windowtext"}]{.Datatype}](#sec_ControlInformationtypeodatatype)
control information unless their type is [Double]{.Datatype}.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
special floating-point values [-INF]{.Datatype}, [INF]{.Datatype}, and
[NaN ]{.Datatype}are serialized as strings and MUST have a
[[[type]{style="color:windowtext"}]{.Datatype}](#sec_ControlInformationtypeodatatype)
control information to specify the numeric type of the property.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}String
values do have a first class representation in JSON, but there is an
obvious collision: OData also encodes a number of other primitive types
as strings, e.g. [DateTimeOffset]{.Datatype}, [Int64]{.Datatype} in the
presence of the
[[IEEE754Compatible]{style="font-family:\"Courier New\""}](#sec_ControllingtheRepresentationofNumber)
format parameter etc. If a property appears in JSON string format, it
should be treated as a string value unless the property is known (from
the metadata document) to have a different type.

For more information on namespace- and alias-qualified names, see
[**\[OData-CSDLJSON\]**](#ODataCSDLJSON) or
[**\[OData-CSDLXML\]**](#ODataCSDLXML).

Example 5: entity of type
[Model.VipCustomer]{style="font-family:\"Courier New\""} defined in the
metadata document of the same service with a dynamic property of type
[Edm.Date]{.Datatype}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \"@type\": \"#Model.VipCustomer\",]{style="color:black"}

[┬á \"ID\": 2,]{style="color:black"}

[┬á \"DynamicValue@type\": \"Date\",]{style="color:black"}

[┬á \"DynamicValue\": \"2016-09-22\",]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

Example 6: entity of type
[Model.VipCustomer]{style="font-family:\"Courier New\""} defined in the
metadata[ ]{style="font-family:\"Courier New\""}document of a different
service

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \"@type\":
\"http://host/alternate/\$metadata#Model.VipCustomer\",]{style="color:black"}

[┬á \"ID\": 2,]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

### []{#sec_ControlInformationcountodatacount}[]{#_Toc19867081}[]{#_Toc12019433}[]{#_Toc418513407}[]{#_Toc402353039}[]{#_Toc368563086}[]{#odataCount}[]{#_Annotation_odata.count}4.5.4 [Control Information: [count]{style="font-family:\"Courier New\""} ([odata.count]{style="font-family:\"Courier New\""})](#sec_ControlInformationcountodatacount)[]{#_Toc38457739}[]{#_Toc23836913}[]{#_Toc37319008}

The [count]{.Datatype} control information occurs only in responses and
can annotate any collection, see [**\[OData-Protocol\]**](#odata)
section 11.2.5.5 System Query Option
[\$count]{style="font-family:\"Courier New\""}. Its value is an
[Edm.Int64]{style="font-family:\"Courier New\""} value corresponding to
the total count of members in the collection represented by the request.

### []{#sec_ControlInformationnextLinkodatanextL}[]{#_Toc19867082}[]{#_Toc12019434}[]{#_Toc418513408}[]{#_Toc402353040}[]{#_Toc368563087}[]{#odataNext}[]{#_Annotation_odata.nextLink}[]{#_Annotation_nextLink_(odata.nextLink}4.5.5 [Control Information: [nextLink]{style="font-family:\"Courier New\""} ([odata.nextLink]{style="font-family:
\"Courier New\""})](#sec_ControlInformationnextLinkodatanextL)[]{#_Toc38457740}[]{#_Toc23836914}[]{#_Toc37319009}

The [nextLink]{.Datatype} control information indicates that a response
is only a subset of the requested collection. It contains a URL that
allows retrieving the next subset of the requested collection.

This control information can also be applied to [expanded to-many
navigation properties](#sec_ExpandedNavigationProperty).

### []{#_Toc418513409}[]{#_Toc402353041}[]{#_Toc368563088}[]{#odataDelta}[]{#sec_ControlInformationdeltaodatadelta}[]{#_Toc19867083}[]{#_Toc12019435}[]{#_The_odata.deltaLink_Annotation}[]{#_Annotation_odata.deltaLink}[]{#_Annotation_delta}4.5.6 [Control Information: [delta]{style="font-family:\"Courier New\""} ([odata.delta]{style="font-family:\"Courier New\""})](#sec_ControlInformationdeltaodatadelta)[]{#_Toc37319010}[]{#_Toc23836915}[]{#_Toc38457741}

The [delta]{.Datatype} control information is applied to a
collection-valued navigation property within an [added/changed
entity](#sec_AddedChangedEntity) in a delta payload to represent changes
in membership or value of nested entities.

### []{#sec_ControlInformationdeltaLinkodatadelt}[]{#_Toc19867084}[4.5.7]{#_Toc12019436} [Control Information: [deltaLink]{style="font-family:\"Courier New\""} ([odata.deltaLink]{style="font-family:
\"Courier New\""})](#sec_ControlInformationdeltaLinkodatadelt)[]{#_Toc38457742}[]{#_Toc23836916}[]{#_Toc37319011}

The [deltaLink]{.Datatype} control information contains a URL that can
be used to retrieve changes to the current set of results. The
[deltaLink]{.Datatype} control information MUST only appear on the last
page of results. A page of results MUST NOT have both a
[deltaLink]{.Datatype} control information and a
[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL)
control information.

### []{#sec_ControlInformationidodataid}[]{#_Toc19867085}[]{#_Toc12019437}[]{#_Toc418513410}[]{#_Toc402353042}[]{#_Toc368563089}[]{#_The_odata.id_Annotation_1}[]{#_Annotation_odata.id}[]{#_Annotation_id_(odata.id)}4.5.8 [Control Information: [id]{style="font-family:\"Courier New\""} ([odata.id]{style="font-family:\"Courier New\""})](#sec_ControlInformationidodataid)[]{#_Toc38457743}[]{#_Toc23836917}[]{#_Toc37319012}

The [id]{.Datatype} control information contains the entity-id, see
[**\[OData-Protocol\]**](#odata). By convention the entity-id is
identical to the canonical URL of the entity, as defined in
[**\[OData-URL\]**](#ODataURLRef).

The [id ]{.Datatype}control information MUST appear in responses if
[[metadata=full]{style="font-family:\"Courier New\""}](#sec_metadatafullodatametadatafull)
is requested, or if
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal)
is requested and any of a non-transient entity\'s key fields are omitted
from the response *or* the entity-id is not identical to the canonical
URL of the entity after

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}IRI-to-URI
conversion as defined in [**\[RFC3987\]**](#RFC3987),

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}relative
resolution as defined in section 5.2 of [**\[RFC3986\]**](#RFC3986), and

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}percent-encoding
normalization as defined in section 6 of [**\[RFC3986\]**](#RFC3986).

Note that the entity-id MUST be invariant across languages, so if key
values are language dependent then the [id]{.Datatype} MUST be included
if it does not match convention for the localized key values. If the
[id]{.Datatype} is represented, it MAY be a [relative
URL](#sec_RelativeURLs).

If the entity is transient (i.e. cannot be read or updated), the
[id]{.Datatype} control information MUST appear in OData 4.0 payloads
and have the [null]{.Datatype} value. In 4.01 payloads transient
entities need not have the [id]{.Datatype} control information, and 4.01
clients MUST treat entities with neither [id]{.Datatype} control
information nor a full set of key properties as transient entities.

The [id]{.Datatype} control information MUST NOT appear for a
collection. Its meaning in this context is reserved for future versions
of this specification.

Entities with [id]{.Datatype} equal to [null]{.Datatype} cannot be
compared to other entities, reread, or updated. If
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal)
is specified and the [id]{.Datatype} is not present in the entity, then
the canonical URL MUST be used as the entity-id.

### []{#sec_ControlInformationeditLinkandreadLin}[]{#_Toc19867086}[]{#_Toc12019438}[]{#_Toc418513411}[]{#_Toc402353043}[]{#_Toc368563090}[]{#_Annotation_odata.editLink_and}4.5.9 [Control Information: [editLink]{style="font-family:\"Courier New\""} and [readLink]{style="font-family:
\"Courier New\""} ([odata.editLink]{style="font-family:\"Courier New\""} and [odata.readLink]{style="font-family:\"Courier New\""})](#sec_ControlInformationeditLinkandreadLin)[]{#_Toc38457744}[]{#_Toc23836918}[]{#_Toc37319013}

The [[editLink]{.Datatype}]{#odataEditLink} control information contains
the edit URL of the entity; see [**\[OData-Protocol\]**](#odata).

The [readLink]{.Datatype} control information contains the read URL of
the entity or collection; see [**\[OData-Protocol\]**](#odata).

The [editLink]{.Datatype} and [readLink]{.Datatype} control information
is ignored in request payloads and not written in responses if
[[metadata=none]{style="font-family:\"Courier New\""}](#sec_metadatanoneodatametadatanone)
is requested.

The default value of both the edit URL and read URL is the entity\'s
[entity-id](#sec_ControlInformationidodataid) appended with a cast
segment to the type of the entity if its type is derived from the
declared type of the entity set. If neither the [editLink]{.Datatype}
nor the [readLink]{.Datatype} control information is present in an
entity, the client uses this default value for the edit URL.

For updatable entities:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
[editLink]{.Datatype} control information is written if
[[metadata=full]{style="font-family:
\"Courier New\""}](#sec_metadatafullodatametadatafull) is requested or
if
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal)
is requested and the edit URL differs from the default value of the edit
URL.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
[readLink]{.Datatype} control information is written if the read URL is
different from the edit URL. If no [readLink]{.Datatype} control
information is present, the read URL is identical to the edit URL.

For read-only entities:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
[readLink]{.Datatype} control information is written if
[[metadata=full]{style="font-family:
\"Courier New\""}](#sec_metadatafullodatametadatafull) is requested or
if
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal)
is requested and its value differs from the default value of the read
URL.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
[readLink]{.Datatype} control information may also be written if
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal)
is specified in order to signal that an individual entity is read-only.

For collections:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
[readLink]{.Datatype} control information, if written, MUST be the
request URL that produced the collection.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
[editLink]{.Datatype} control information MUST NOT be written as its
meaning in this context is reserved for future versions of this
specification.

### []{#sec_ControlInformationetagodataetag}[]{#_Toc19867087}[]{#_Toc12019439}[]{#_Toc418513412}[]{#_Toc402353044}[]{#_Toc368563091}[]{#odataEtag}[]{#_Annotation_odata.etag_(etag)}4.5.10 [Control Information: [etag]{style="font-family:\"Courier New\""} ([odata.etag]{style="font-family:\"Courier New\""})](#sec_ControlInformationetagodataetag)[]{#_Toc38457745}[]{#_Toc23836919}[]{#_Toc37319014}

The [etag]{.Datatype} control information MAY be applied to an
[entity](#sec_Entity)[ ]{.MsoHyperlink}or collection in a response. The
value of the control information is an entity tag (ETag) which is an
opaque string value that can be used in a subsequent request to
determine if the value of the entity or collection has changed.

For details on how ETags are used, see [**\[OData-Protocol\]**](#odata).

[]{#_Toc368563092}[]{#_Annotation_odata.navigationLink_and}The
[etag]{.Datatype} control information is ignored in request payloads for
single entities and not written in responses if
[[metadata=none]{style="font-family:\"Courier New\""}](#sec_metadatanoneodatametadatanone)
is requested.

### []{#sec_ControlInformationnavigationLinkanda}[]{#_Toc19867088}[]{#_Toc12019440}[]{#_Toc418513413}[]{#_Toc402353045}[]{#_Annotation_odata.navigationLink_and_1}4.5.11 [Control Information: [navigationLink]{style="font-family:\"Courier New\""} and [associationLink]{style="font-family:\"Courier New\""} ([odata.navigationLink]{style="font-family:\"Courier New\""} and [odata.associationLink]{style="font-family:\"Courier New\""})](#sec_ControlInformationnavigationLinkanda)[]{#_Toc38457746}[]{#_Toc23836920}[]{#_Toc37319015}

The [[navigationLink]{style="font-family:
\"Courier New\""}]{#odataNavigationLink} control information in a
response contains a *navigation URL* that can be used to retrieve an
entity or collection of entities related to the current entity via a
[navigation property](#sec_NavigationProperty).

The *default computed value of a navigation URL* is the value of the
[read URL](#sec_ControlInformationeditLinkandreadLin) appended with a
segment containing the name of the navigation property. The service MAY
omit the [navigationLink]{.Datatype} control information if
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal)
has been specified on the request and the navigation link matches this
computed value.

[[The
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[[associationLink]{style="font-family:\"Courier New\""}]{#odataAssocLink}
control information in a response contains an *association URL* that can
be used to retrieve a reference to an entity or a collection of
references to entities related to the current entity via a navigation
property.

The *default computed value of an association URL* is the value of the
navigation URL appended with [/\$ref]{.Datatype}. The service MAY omit
the [associationLink]{.Datatype} control information if the association
link matches this computed value.

[]{#_Toc368563093}[]{#_Annotation_odata.media*}The
[navigationLink]{.Datatype} and [associationLink]{.Datatype} control
information is ignored in request payloads and not written in responses
if
[[metadata=none]{style="font-family:\"Courier New\""}](#sec_metadatanoneodatametadatanone)
is requested.

### []{#sec_ControlInformationmediaodatamedia}[]{#_Toc19867089}[]{#_Toc12019441}[]{#_Toc418513414}[]{#_Toc402353046}[]{#_Annotation_odata.media*_1}4.5.12 [Control Information: [media\*]{style="font-family:\"Courier New\""} ([odata.media\*]{style="font-family:\"Courier New\""})](#sec_ControlInformationmediaodatamedia)[]{#_Toc38457747}[]{#_Toc23836921}[]{#_Toc37319016}

For [media entities](#sec_MediaEntity) and [stream
properties](#sec_StreamProperty) at least one of the control information
[mediaEditLink]{.Keyword} and [mediaReadLink]{.Keyword} MUST be included
in responses if they don\'t follow standard URL conventions as defined
in [**\[OData-URL\]**](#ODataURLRef) or if
[[metadata=full]{style="font-family:\"Courier New\""}](#sec_metadatafullodatametadatafull)
is requested.

The [mediaEditLink]{.Datatype} control information contains a URL that
can be used to update the binary stream associated with the media entity
or stream property. It MUST be included for updatable streams if it
differs from standard URL conventions relative to the edit link of the
entity.

The [mediaReadLink]{.Datatype} control information contains a URL that
can be used to read the binary stream associated with the media entity
or stream property. It MUST be included if its value differs from the
value of the associated [mediaEditLink]{.Datatype}, if present, or if it
doesn't follow standard URL conventions relative to the read link of the
entity and the associated
[mediaEditLink]{style="font-family:\"Courier New\""} is not present.

The [mediaContentType ]{.Keyword}control information MAY be included;
its value SHOULD match the media type of the binary stream represented
by the [mediaReadLink]{.Keyword} URL. This is only a hint; the actual
media type will be included in the [Content-Type]{.Datatype} header when
the resource is requested.

The [mediaEtag]{.Keyword} control information MAY be included; its value
is the ETag of the binary stream represented by this media entity or
stream property.

The [media\*]{.Datatype} control information is not written in responses
if
[[metadata=none]{style="font-family:\"Courier New\""}](#sec_metadatanoneodatametadatanone)
is requested.

If a stream property is provided inline in a request, the
[mediaContentType]{.Datatype} control information may be specified.

If a stream property is annotated with
[Capabilities.MediaLocationUpdateSupported]{.Datatype} (see
[**\[OData-VocCap\]**](#VocCapabilities)) and a value of
[true]{.Datatype}, clients MAY specify the [mediaEditLink]{.Datatype}
and/or [mediaReadLink]{.Datatype} control information for that stream
property in order to change the association between the stream property
and a media stream.

In all other cases [media\*]{.Datatype} control information is ignored
in request payloads.

Example 7:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Employees/\$entity\",]{style="color:black"}

[┬á \"@mediaReadLink\": \"Employees(1)/\$value\",]{style="color:black"}

[┬á \"@mediaContentType\": \"image/jpeg\",]{style="color:black"}

[┬á \"ID\": 1,]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

### []{#_Toc418513415}[]{#_Toc402353047}[]{#_Toc368563094}[]{#sec_ControlInformationremovedodataremove}[]{#_Toc19867090}[]{#_Toc12019442}[]{#_Representing_the_Service}4.5.13 [Control Information: [removed]{style="font-family:\"Courier New\""} ([odata.removed]{style="font-family:
\"Courier New\""})](#sec_ControlInformationremovedodataremove)[]{#_Toc37319017}[]{#_Toc23836922}[]{#_Toc38457748}

The [removed]{.Datatype} control information is used in [delta
payloads](#sec_DeletedEntity) and indicates that the represented entity
is (to be) deleted.

### []{#sec_ControlInformationcollectionAnnotati}[]{#_Toc19867091}[]{#_Toc12019443}[]{#_Hlt11961667}4.5.14 [Control Information: [collectionAnnotations]{style="font-family:\"Courier New\""} ([odata.collectionAnnotations]{style="font-family:\"Courier New\""})](#sec_ControlInformationcollectionAnnotati)[]{#_Toc37319018}[]{#_Toc23836923}[]{#_Toc38457749}

The [collectionAnnotations]{.Datatype} control information can be
applied to a collection containing primitive members in order to
annotate such primitive members. The value of the
[collectionAnnotations]{.Datatype} control information is an array of
JSON objects containing an integer property [index]{.Datatype},
specifying the zero-based ordinal index of the primitive item within the
collection, along with any annotations that are to be applied to that
primitive collection member.

Example 8: Annotating primitive values within a collection

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Employees/\$entity\",]{style="color:black"}

[┬á \"ID\": 1,]{style="color:black"}

[┬á \"EmailAddresses@collectionAnnotations\" : \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"index\":0,]{style="color:black"}

[┬á┬á┬á┬á┬á \"@emailType\":\"Personal\"]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"index\":2,]{style="color:black"}

[┬á┬á┬á┬á┬á \"@emailType\":\"Work\"]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \],]{style="color:black"}

[┬á \"EmailAddresses\": \[ ]{style="color:black"}

[┬á┬á┬á \"Julie@Swansworth.com\", ]{style="color:black"}

[┬á┬á┬á \"JulieSwa@live.com\", ]{style="color:black"}

[┬á┬á┬á \"Julie.Swansworth@work.com\" ]{style="color:black"}

[┬á \],]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

┬á

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_ServiceDocument}[]{#_Toc19867092}[5[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc12019444}[Service Document](#sec_ServiceDocument)[]{#_Toc38457750}[]{#_Toc23836924}[]{#_Toc37319019} {#service-document style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

A service document in JSON is represented as a single JSON object with
at least the
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex)
control information and a property
[value]{style="font-family:\"Courier New\""}.

The value of the
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex)
control information MUST be the URL of the metadata document, without
any fragment part.

The value of the [value]{.Datatype} property MUST be a JSON array
containing one element for each entity set and function import with an
explicit or default value of [true]{.Datatype} for the attribute
[IncludeInServiceDocument]{.Datatype} and each singleton exposed by the
service, see [**\[OData-CSDLJSON\]**](#ODataCSDLJSON) or
[**\[OData-CSDLXML\]**](#ODataCSDLXML).

Each element MUST be a JSON object with at least two name/value pairs,
one with name [name]{.Datatype} containing the name of the entity set,
function import, or singleton, and one with name [url]{.Datatype}
containing the URL of the entity set, which may be an absolute or a
[relative URL](#sec_RelativeURLs). It MAY contain a name/value pair with
name [title]{.Datatype} containing a human-readable, language-dependent
title for the object.

JSON objects representing an entity set MAY contain an additional
name/value pair with name [kind]{.Datatype} and a value of
[EntitySet]{.Datatype}. If the [kind]{.Datatype} name/value pair is not
present, the object MUST represent an entity set.

JSON objects representing a function import MUST contain the
[kind]{.Datatype} name/value pair with a value of
[FunctionImport]{.Datatype}.

JSON objects representing a singleton MUST contain the [kind]{.Datatype}
name/value pair with a value of [Singleton]{.Datatype}.

JSON objects representing a related service document MUST contain the
[kind]{.Datatype} name/value pair with a value of
[ServiceDocument]{style="font-family:\"Courier New\""}.

C[lients ]{style="color:black;background:white"}that encounter unknown
values of the [kind]{.Datatype} name/value pair not defined in this
version of the specification [MUST NOT stop processing and MUST NOT
signal an error[.]{.apple-converted-space}]{style="color:black;
background:white"}

Service documents MAY contain [annotations](#sec_InstanceAnnotations) in
any of its JSON objects. Services MUST NOT produce name/value pairs
other than the ones explicitly defined in this section, and clients MUST
ignore unknown name/value pairs.

Example 9:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata\",]{style="color:black"}

[┬á \"value\": \[]{style="color:black"}

[┬á┬á ┬á{ ]{style="color:black"}

[┬á┬á┬á┬á┬á \"name\": \"Orders\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"kind\": \"EntitySet\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\":┬á \"Orders\"]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"name\":┬á \"OrderItems\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"title\": \"Order Details\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\":┬á┬á \"OrderItems\"]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á { ]{style="color:black"}

[┬á┬á┬á┬á┬á \"name\":┬á \"TopProducts\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"title\": \"Best-Selling Products\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"kind\": ┬á\"FunctionImport\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\":┬á┬á \"TopProducts\"]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"name\":┬á \"MainSupplier\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"title\": \"Main Supplier\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"kind\":┬á \"Singleton\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\":┬á┬á \"MainSupplier\"]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"name\": \"Human Resources\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"kind\": \"ServiceDocument\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\":┬á \"http://host/HR/\"]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Entity}[]{#_Toc19867093}[]{#_Toc12019445}[]{#_Toc418513416}[]{#_Toc402353048}[]{#_Toc368563095}[]{#Entitiy}[]{#_Entity}6[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}[Entity](#sec_Entity)[]{#_Toc38457751}[]{#_Toc23836925}[]{#_Toc37319020} {#entity style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

An entity is serialized as a JSON object. It MAY contain
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex),
[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype),
or[[
]{style="font-family:\"Courier New\""}]{.MsoHyperlink}[[deltaLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationdeltaLinkodatadelt)
control information.

Each [property](#sec_StructuralProperty) to be transmitted is
represented as a name/value pair within the object. The order properties
appear within the object is considered insignificant.

An entity in a payload may be a complete entity, a projected entity (see
*System Query Option* [\$select]{.Datatype}
[**\[OData-Protocol\]**](#odata)), or a partial entity update (see
*Update an Entity* in [**\[OData-Protocol\]**](#odata)).

An entity representation can be (modified and) round-tripped to the
service directly. The [context
URL](#sec_ControlInformationcontextodatacontex) is used in requests only
as a base for [relative URLs](#sec_RelativeURLs).

Example 10: entity with [metadata=minimal]{.Datatype}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \"ID\": \"ALFKI\",]{style="color:black"}

[┬á \"CompanyName\": \"Alfreds Futterkiste\",]{style="color:black"}

[┬á \"ContactName\": \"Maria Anders\",]{style="color:black"}

[┬á \"ContactTitle\": \"Sales Representative\",]{style="color:black"}

[┬á \"Phone\": \"030-0074321\",]{style="color:black"}

[┬á \"Fax\": \"030-0076545\",]{style="color:black"}

[┬á \"Address\": { ]{style="color:black"}

[┬á┬á┬á \"Street\": \"Obere Str. 57\",]{style="color:black"}

[┬á┬á┬á \"City\": \"Berlin\",]{style="color:black"}

[┬á┬á┬á \"Region\": null,]{style="color:black"}

[┬á┬á┬á \"PostalCode\": \"D-12209\"]{style="color:black"}

[┬á }]{style="color:black"}

[}]{style="color:black"}
:::

[]{#_Properties}Example 11: entity with [metadata=full]{.Datatype}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \"@id\": \"Customers(\'ALFKI\')\",]{style="color:black"}

[┬á \"@etag\":
\"W/\\\"MjAxMy0wNS0yN1QxMTo1OFo=\\\"\",]{style="color:black"}

[┬á \"@editLink\": \"Customers(\'ALFKI\')\",]{style="color:black"}

[┬á \"ID\": \"ALFKI\",]{style="color:black"}

[┬á \"CompanyName\": \"Alfreds Futterkiste\",]{style="color:black"}

[┬á \"ContactName\": \"Maria Anders\",]{style="color:black"}

[┬á \"ContactTitle\": \"Sales Representative\",]{style="color:black"}

[┬á \"Phone\": \"030-0074321\",]{style="color:black"}

[┬á \"Fax\": \"030-0076545\",]{style="color:black"}

[┬á \"Address\": { ]{style="color:black"}

[┬á┬á┬á \"Street\": \"Obere Str. 57\",]{style="color:black"}

[┬á┬á┬á \"City\": \"Berlin\",]{style="color:black"}

[┬á┬á┬á ]{style="color:black"}[\"Region\": null,]{lang="DE"
style="color:black"}

[┬á ┬á┬á\"PostalCode\": \"D-12209\",]{lang="DE" style="color:black"}

[┬á
┬á┬á\"Country@associationLink\":\"Customers(\'ALFKI\')/Address/Country/\$ref\",]{lang="DE"
style="color:black"}

[┬á┬á┬á ]{lang="DE" style="color:black"}[\"Country@navigationLink\":
\"Customers(\'ALFKI\')/Address/Country\"]{style="color:black"}

[┬á },]{style="color:black"}

[┬á \"Orders@associationLink\":
\"Customers(\'ALFKI\')/Orders/\$ref\",]{style="color:black"}

[┬á \"Orders@navigationLink\":
\"Customers(\'ALFKI\')/Orders\"]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_StructuralProperty}[]{#_Toc19867094}[]{#_Toc12019446}[]{#_Toc418513417}[]{#_Toc402353049}[]{#_Toc368563096}[]{#_Structural_Property}7[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}[Structural Property](#sec_StructuralProperty)[]{#_Toc38457752}[]{#_Toc23836926}[]{#_Toc37319021} {#structural-property style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

A property within an entity or complex type instance is represented as a
name/value pair. The name MUST be the name of the property; the value is
represented depending on its type as a [primitive
value](#sec_PrimitiveValue), a [complex value](#sec_ComplexValue), a
[collection of primitive values](#sec_CollectionofPrimitiveValues), or
a[ ]{.MsoHyperlink}[collection of complex
values](#sec_CollectionofComplexValues)[.]{.MsoHyperlink}

## []{#sec_PrimitiveValue}[]{#_Toc19867095}[]{#_Toc12019447}[]{#_Toc418513418}[]{#_Toc402353050}[]{#_Toc368563097}[]{#_Ref356829873}[]{#_Primitive_Value}7.1 [Primitive Value](#sec_PrimitiveValue)[]{#_Toc38457753}[]{#_Toc23836927}[]{#_Toc37319022}

Primitive values are represented following the rules of
[**\[RFC8259\]**](#RFC_JSON).

Null values are represented as the JSON literal [null]{.Datatype}.

Values of type [Edm.Boolean]{.Datatype} are represented as the JSON
literals [true]{.Datatype} and [false]{.Datatype}

Values of types [Edm.Byte]{.Datatype}, [Edm.SByte]{.Datatype},
[Edm.Int16]{.Datatype}, [Edm.Int32]{.Datatype}, [Edm.Int64]{.Datatype},
[Edm.Single]{.Datatype}, [Edm.Double]{.Datatype}, and
[Edm.Decimal]{.Datatype} are represented as JSON numbers, except for
[-INF]{.Datatype}, [INF]{.Datatype}, and [NaN]{.Datatype} which are
represented as strings.

Values of type [Edm.String]{.Datatype} are represented as JSON strings,
using the JSON string escaping rules.

Values of type [Edm.Binary]{.Datatype}, [Edm.Date]{.Datatype},
[Edm.DateTimeOffset]{.Datatype}[[,
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[Edm.Duration]{.Datatype},┬á
[Edm.Guid]{.Datatype}, and [Edm.TimeOfDay]{.Datatype} are represented as
JSON strings whose content satisfies the rules [binaryValue]{.Datatype},
[dateValue]{.Datatype}, [dateTimeOffsetValue]{.Datatype},
[durationValue]{.Datatype}, [guidValue]{.Datatype}, and
[timeOfDayValue]{.Datatype} respectively, in
[**\[OData-ABNF\]**](#abnf).

Primitive values that cannot be represented, for example due to server
conversion issues or IEEE754 limitations on the size of an [Edm.Int64
]{.Datatype}or [Edm.Decimal]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}value, are
annotated with the [Core.ValueException]{.Datatype} term. In this case,
the payload MAY include an approximation of the value and MAY specify a
string representation of the exact value in the [value]{.Datatype}
property of the annotation.

Enumeration values are represented as JSON strings whose content
satisfies the rule [enumValue]{.Datatype} in
[**\[OData-ABNF\]**](#abnf). The preferred representation is the
[enumerationMember]{.Datatype}. If no [enumerationMember]{.Datatype} (or
combination of [[named enumeration
members]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}) is
available, the [enumMemberValue]{.Datatype} representation may be used.

Geography and geometry values are represented as geometry types as
defined in [**\[RFC7946\]**](#RFC7946), with the following
modifications:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Keys
SHOULD be ordered with type first, then coordinates, then any other keys

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}If
the optional [CRS
object](http://geojson.org/geojson-spec.html#named-crs) is present, it
MUST be of type [name]{.Datatype}, where the value of the
[name]{.Datatype} member of the contained [properties]{.Datatype} object
is an EPSG SRID legacy identifier, see **\[GeoJSON-2008\]**.

Geography and geometry types have the same representation in a JSON
payload. Whether the value represents a geography type or geometry type
is inferred from its usage or specified using the
[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype)
control information.

Example 12:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"NullValue\": null,]{style="color:black"}

[┬á \"TrueValue\": true,]{style="color:black"}

[┬á \"FalseValue\": false,]{style="color:black"}

[┬á \"BinaryValue\": \"T0RhdGE\",]{style="color:black"}

[┬á \"IntegerValue\": -128,]{style="color:black"}

[┬á \"DoubleValue\": 3.1415926535897931,]{style="color:black"}

[[┬á
\"SingleValue]{style="color:black"}]{.string}[\"]{style="color:black"}[[:
\"INF\",]{style="color:black"}]{.string}

[[┬á \"DecimalValue\"]{style="color:black"}]{.string}[:
]{style="color:black"}[[34.95,]{style="color:black"}]{.string}

[┬á \"StringValue\": ]{style="color:black"}[[\"Say \\\"Hello\\\",\\nthen
go\",]{style="color:black"}]{.string}

[[┬á \"DateValue\"]{style="color:black"}]{.string}[:
]{style="color:black"}[[\"2012-12-03\",]{style="color:black"}]{.string}

[[┬á \"DateTimeOffsetValue\"]{style="color:black"}]{.string}[:
]{style="color:black"}[[\"2012-12-03T07:16:23Z\",]{style="color:black"}]{.string}

[[┬á \"DurationValue\"]{style="color:black"}]{.string}[:
]{style="color:black"}[[\"P12DT23H59M59.999999999999S\",]{style="color:black"}]{.string}

[[┬á \"TimeOfDayValue\"]{style="color:black"}]{.string}[:
]{style="color:black"}[[\"07:59:59.999\",]{style="color:black"}]{.string}

[[┬á \"GuidValue\"]{style="color:black"}]{.string}[:
]{style="color:black"}[[\"01234567-89ab-cdef-0123-456789abcdef\",]{style="color:black"}]{.string}

[[┬á \"Int64Value\"]{style="color:black"}]{.string}[:
]{style="color:black"}[[0,]{style="color:black"}]{.string}

[┬á \"ColorEnumValue\": \"Yellow\",]{style="color:black"}

[[┬á \"GeographyPoint\": {\"type\":
\"Point\",\"coordinates\":\[142.1,64.1\]}
]{style="color:black"}]{.string}

[}]{style="color:black"}
:::

## []{#sec_ComplexValue}[]{#_Toc19867096}[]{#_Toc12019448}[]{#_Toc418513419}[]{#_Toc402353051}[]{#_Toc368563098}[]{#ComplexValue}[]{#_Ref332033656}[]{#_Ref332032621}[]{#_Representing_a_Complex}[]{#_Complex_Value}7.2 [Complex Value](#sec_ComplexValue)[]{#_Toc38457754}[]{#_Toc23836928}[]{#_Toc37319023}

A complex value is represented as a single JSON object containing one
name/value pair for each property that makes up the complex type. Each
property value is formatted as appropriate for the type of the property.

It MAY have name/value pairs for [instance
annotations](#sec_InstanceAnnotations) and control information.

Example 13:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \...]{style="color:black"}

[┬á \"Address\": { ]{style="color:black"}

[┬á┬á┬á \"Street\": \"Obere Str. 57\",]{style="color:black"}

[┬á┬á┬á \"City\": \"Berlin\",]{style="color:black"}

[┬á┬á┬á \"Region\": null,]{style="color:black"}

[┬á┬á┬á \"PostalCode\": \"D-12209\"]{style="color:black"}

[┬á }]{style="color:black"}

[}[]{#_Representing_an_Individual}]{style="color:black"}
:::

[]{#_Toc368563099}[]{#_Representing_a_Collection}[]{#_Collection_of_Primitive}A
complex value with no selected properties, or no defined properties
(such as an empty open complex type or complex type with no structural
properties) is represented as an empty JSON object.

## []{#sec_CollectionofPrimitiveValues}[]{#_Toc19867097}[]{#_Toc12019449}[]{#_Toc418513420}[]{#_Toc402353052}[7.3]{#CollectionOfPrimitive} [Collection of Primitive Values](#sec_CollectionofPrimitiveValues)[]{#_Toc38457755}[]{#_Toc23836929}[]{#_Toc37319024}

A collection of primitive values is represented as a JSON array; each
element in the array is the representation of a [primitive
value](#sec_PrimitiveValue). A JSON literal [null]{.Datatype} represents
a null value within the collection. An empty collection is represented
as an empty array.

Example 14: partial collection of strings with next link

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \...]{style="color:black"}

[┬á \"EmailAddresses\": \[ ]{style="color:black"}

[┬á┬á┬á \"Julie@Swansworth.com\", ]{style="color:black"}

[┬á┬á┬á \"Julie.Swansworth@work.com\" ]{style="color:black"}

[┬á \],]{style="color:black"}

[┬á \"EmailAddresses@nextLink\": \"\...\"]{style="color:black"}

[}]{style="color:black"}
:::

## []{#sec_CollectionofComplexValues}[]{#_Toc19867098}[]{#_Toc12019450}[]{#_Toc418513421}[]{#_Toc402353053}[]{#_Toc368563100}[]{#_Collection_of_Complex}7.4 [Collection of Complex Values](#sec_CollectionofComplexValues)[]{#_Toc38457756}[]{#_Toc23836930}[]{#_Toc37319025}

A collection of complex values is represented as a JSON array; each
element in the array is the representation of a [complex
value](#sec_ComplexValue). A JSON literal [null]{.Datatype} represents a
null value within the collection. An empty collection is represented as
an empty array.

Example 15: partial collection of complex values with next link

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"PhoneNumbers\": \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"Number\": \"425-555-1212\",┬á ]{style="color:black"}

[┬á┬á┬á┬á┬á \"Type\": \"Home\"┬á ]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"@type\": \"#Model.CellPhoneNumber\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"Number\": \"425-555-0178\", ]{style="color:black"}

[┬á┬á┬á┬á┬á \"Type\": \"Cell\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"Carrier\": \"Sprint\"]{style="color:black"}

[┬á┬á┬á }┬á ]{style="color:black"}

[┬á \],]{style="color:black"}

[┬á \"PhoneNumbers@nextLink\": \"\...\"]{style="color:black"}

[}]{style="color:black"}
:::

## []{#_Toc418513422}[]{#_Toc402353054}[]{#_Toc368563101}[]{#sec_UntypedValue}[]{#_Toc19867099}[]{#_Toc12019451}[]{#_Navigation_Property}7.5 [Untyped Value](#sec_UntypedValue)[]{#_Toc37319026}[]{#_Toc23836931}[]{#_Toc38457757}

OData 4.01 adds the built-in abstract types [Edm.Untyped]{.Datatype} and
[Collection(Edm.Untyped)]{.Datatype}that services can use to advertise
in metadata that there is a property of a particular name present, but
there is no type to describe the structure of the property's values.

The value of an [Edm.Untyped]{.Datatype} property MAY be a primitive
value, a structural value, or a collection. If a collection, it may
contain any combination of primitive values, structural values, and
collections.

The value of a property of type [Collection(Edm.Untyped)]{.Datatype}MUST
be a collection, and it MAY contain any combination of primitive values,
structural values, and collections.

Untyped values are the only place where a collection can directly
contain a collection, or a collection can contain a mix of primitive
values, structural values, and collections.

All children of an untyped property are assumed to be untyped unless
they are annotated with the
[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype)
control information, in which case they MUST conform to the type
described by the control information.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_NavigationProperty}[]{#_Toc19867100}[8[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc12019452}[Navigation Property](#sec_NavigationProperty)[]{#_Toc38457758}[]{#_Toc23836932}[]{#_Toc37319027} {#navigation-property style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

A navigation property is a reference from a source entity to zero or
more related entities.

## []{#sec_NavigationLink}[]{#_Toc19867101}[]{#_Toc12019453}[]{#_Toc418513423}[]{#_Toc402353055}[]{#_Toc368563102}[]{#_Representing_a_Deferred}8.1 [Navigation Link](#sec_NavigationLink)[]{#_Toc38457759}[]{#_Toc23836933}[]{#_Toc37319028}

The navigation link for a navigation property is represented as a
[[navigationLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnavigationLinkanda)
control information on the navigation property. Its value is an absolute
or [relative URL](#sec_RelativeURLs) that allows retrieving the related
entity or collection of entities.

The navigation link for a navigation property is only represented if the
client requests [metadata=full]{.Datatype} or the navigation link cannot
be computed, e.g. if it is within a collection of complex type
instances. If it is represented it MUST immediately precede the expanded
navigation property if the latter is represented.

Example 16:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \...]{style="color:black"}

[┬á \"Orders@navigationLink\":
\"Customers(\'ALFKI\')/Orders\",]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

## []{#sec_AssociationLink}[]{#_Toc19867102}[]{#_Toc12019454}[]{#_Toc418513424}[]{#_Toc402353056}[8.2]{#_Toc368563103} [Association Link](#sec_AssociationLink)[]{#_Toc38457760}[]{#_Toc23836934}[]{#_Toc37319029}

The association link for a navigation property is represented as an
[[associationLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnavigationLinkanda)
control information on the navigation property. Its value is an absolute
or [relative URL](#sec_RelativeURLs) that can be used to retrieve the
reference or collection of references to the related entity or entities.

The association link for a navigation property is only represented if
the client requests [metadata=full]{.Datatype} or the association link
cannot be computed by appending [/\$ref]{.Datatype} to the navigation
link. If it is represented, it MUST immediately precede the navigation
link if the latter is represented, otherwise it MUST immediately precede
the expanded navigation property if it is represented.

Example 17:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á \...]{style="color:black"}

[┬á \"Orders@associationLink\":
\"Customers(\'ALFKI\')/Orders/\$ref\",]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

## []{#sec_ExpandedNavigationProperty}[]{#_Toc19867103}[]{#_Toc12019455}[]{#_Toc418513425}[]{#_Toc402353057}[]{#_Toc368563104}[]{#_Expanded_Navigation_Property}8.3 [Expanded Navigation Property](#sec_ExpandedNavigationProperty)[]{#_Toc38457761}[]{#_Toc23836935}[]{#_Toc37319030}

An expanded navigation property is represented as a name/value pair
where the name is the name of the navigation property, and the value is
the representation of the related entity or collection of entities.

If at most one entity can be related, the value is the representation of
the related entity, or [null]{.Datatype} if no entity is currently
related.

If a collection of entities can be related, it is represented as a JSON
array. Each element is the [representation of an entity](#sec_Entity) or
the [representation of an entity reference](#sec_EntityReference). An
empty collection of entities (one that contains no entities) is
represented as an empty JSON array. The navigation property MAY be
include
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex),
[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype),
[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount),[
]{.MsoHyperlink}or[
]{.MsoHyperlink}[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL)[
]{.MsoHyperlink}control information. If a navigation property is
expanded with the suffix [/\$count]{.Datatype}, only the
[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount)[
]{.MsoHyperlink}control information is represented.

Example 18:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers/\$entity\",]{style="color:black"}

[┬á ]{style="color:black"}[\...]{lang="NL" style="color:black"}

[┬á \"Orders@count\": 42,]{lang="NL" style="color:black"}

[┬á \"Orders\": \[ \... \],]{lang="NL" style="color:black"}

[┬á \"Orders@nextLink\": \"\...\",]{lang="NL" style="color:black"}

[┬á ]{lang="NL" style="color:black"}[\...]{style="color:black"}

[}]{style="color:black"}
:::

## []{#sec_DeepInsert}[]{#_Toc19867104}[]{#_Toc12019456}[]{#_Toc418513426}[]{#_Toc402353058}[8.4]{#_Toc368563105} [Deep Insert](#sec_DeepInsert)[]{#_Toc38457762}[]{#_Toc23836936}[]{#_Toc37319031}

When inserting a new entity with a [POST]{.Datatype} request, related
new entities MAY be specified using the same representation as for an
[expanded navigation property](#sec_ExpandedNavigationProperty).

Deep inserts are not allowed in update operations using [PUT]{.Datatype}
or [PATCH]{.Datatype} requests.

Example 19: inserting a new order for a new customer with order items
related to existing products:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"ID\": 11643,]{style="color:black"}

[┬á \"Amount\": 100,]{style="color:black"}

[┬á \...,]{style="color:black"}

[┬á \"Customer\": {]{style="color:black"}

[┬á┬á┬á \"ID\": \"ANEWONE\", ]{style="color:black"}

[┬á┬á┬á \...]{style="color:black"}

[┬á },]{style="color:black"}

[┬á \"Items\": \[ ]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"Product\": { \"@id\": \"Products(28)\" },]{style="color:black"}

[┬á┬á┬á┬á┬á \"Quantity\": 1,]{style="color:black"}

[┬á┬á┬á┬á┬á┬á \...]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"Product\": { \"@id\": \"Products(39)\" },]{style="color:black"}

[┬á┬á┬á┬á┬á \"Quantity\": 5,]{style="color:black"}

[┬á┬á┬á┬á┬á \...]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

## []{#sec_BindOperation}[]{#_Toc19867105}[]{#_Toc12019457}[]{#_Toc418513427}[]{#_Toc402353059}[]{#_Toc368563106}[]{#_Bind_Operation}8.5 [Bind Operation](#sec_BindOperation)[]{#_Toc38457763}[]{#_Toc23836937}[]{#_Toc37319032}

When inserting or updating an entity, relationships of navigation
properties MAY be inserted or updated via bind operations.

For requests containing an [OData-Version]{.Keyword} header with a value
of [4.0]{.Datatype}[[,
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}a bind operation
is encoded as a property control information [odata.bind]{.Datatype} on
the navigation property it belongs to and has a single value for
single-valued navigation properties or an array of values for collection
navigation properties. For nullable single-valued navigation properties
the value [null]{.Datatype} may be used to remove the relationship.

Example 20: assign an existing product to an existing category with a
partial update request against the product

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[PATCH http://host/service/Products(42) HTTP/1.1]{style="color:black"}

┬á

[{ ]{style="color:black"}

[┬á \"Category@odata.bind\": \"Categories(6)\"]{style="color:black"}

[}]{style="color:black"}
:::

The values are the [ids](#sec_ControlInformationidodataid) of the
related entities. They MAY be absolute or [relative
URLs](#sec_RelativeURLs).

For requests containing an [OData-Version]{.Keyword} header with a value
of [4.01]{.Datatype}, a relationship is bound to an existing entity
using the same representation as for an [expanded entity
reference](#sec_EntityReference).

Example 20: assign an existing product to an existing category with a
partial update request against the product

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[PATCH http://host/service/Products(42) HTTP/1.1]{style="color:black"}

┬á

[{ ]{style="color:black"}

[┬á \"Category\": {\"@id\": \"Categories(6)\"}]{style="color:black"}

[}]{style="color:black"}
:::

┬á

Example 21: submit a partial update request to:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}modify
the name of an existing category

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}assign
an existing product with the id 42 to the category

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}assign
an existing product 57 to the category and update its name

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}create
a new product named "Wedges" and assign it to the category

*[at the end of the request, the updated category contains exactly the
three specified products.]{style="font-size:9.0pt"}*

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[PATCH http://host/service/Categories(6) HTTP/1.1]{style="color:black"}

┬á

[{]{style="color:black"}

[┬á \"Name\": \"UpdatedCategory\",]{style="color:black"}

[┬á \"Products\": \[ ]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"@id\": \"Products(42)\"]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"@id\": \"Products(57)\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"Name\": \"Widgets\"]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"Name\": \"Wedges\"]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

OData 4.01 services MUST support both the OData 4.0 representation, for
requests containing an [OData-Version]{.Keyword} header with a value of
[4.0]{.Datatype}, and the OData 4.01 representation, for requests
containing an [OData-Version]{.Keyword} header with a value of
[4.01]{.Datatype}[[.]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}
Clients MUST NOT use [\@odata.bind]{.Keyword} in requests with an
[OData-Version]{.Keyword} header with a value of
[4.01]{.Datatype}[[.]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

For insert operations collection navigation property bind operations and
deep insert operations can be combined. For OData 4.0 requests, the bind
operations MUST appear before the deep insert operations in the payload.

For update operations a bind operation on a collection navigation
property adds additional relationships, it does not replace existing
relationships, while bind operations on an entity navigation property
update the relationship.

## []{#sec_CollectionETag}[]{#_Toc19867106}[8.6]{#_Toc12019458} [Collection ETag](#sec_CollectionETag)[]{#_Toc38457764}[]{#_Toc23836938}[]{#_Toc37319033}

The ETag for a collection of related entities is represented as
[[etag]{style="font-family:
\"Courier New\""}](#sec_ControlInformationetagodataetag) control
information on the navigation property. Its value is an opaque string
that can be used in a subsequent request to determine if the collection
has changed.

Services MAY include this control information as appropriate.

Example 21: ETag for a collection of related entities

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Orders/\$entity\",]{style="color:black"}

[┬á \"@id\": \"Orders(1234)\",]{style="color:black"}

[┬á \"@etag\":
\"W/\\\"MjAxMy0wNS0yN1QxMTo1OFo=\\\"\",]{style="color:black"}

[┬á \"ID\": 1234,]{style="color:black"}

[┬á \"Items@etag\":
\"W/\\\"MjAxOS0wMy0xMlQxMDoyMlo=\\\"\"]{style="color:black"}

[┬á ...]{style="color:black"}

[}]{style="color:black"}
:::

Note: the collection ETag for a navigation property may or may not be
identical to the ETag of the containing entity, the example shows a
different ETag for the [Items]{.Datatype} collection.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_StreamProperty}[]{#_Toc19867107}[]{#_Toc12019459}[]{#_Toc418513428}[]{#_Toc402353060}[]{#_Toc368563107}[]{#_Stream_Property}9[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}[Stream Property](#sec_StreamProperty)[]{#_Toc38457765}[]{#_Toc23836939}[]{#_Toc37319034} {#stream-property style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

[An entity or complex type instance can have one or more stream
properties. ]{style="color:black;background:white"}

[The actual stream data is not usually contained in the representation.
Instead stream property data is generally read and edited via URLs.
]{style="color:black;background:white"}

[Depending on the ]{style="color:black;background:white"}[[metadata
level]{style="background:white"}](#sec_ControllingtheAmountofControlInforma)[,
the stream property MAY be annotated to provide the read link, edit
link, media type, and ETag of the media
stream]{style="color:black;background:white"} through a set of
[[media\*]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia)
control information.

[If the actual stream data is included inline, the control information
]{style="color:black;background:white"}[[mediaContentType]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia)[
MUST be present to indicate how the included stream property value is
represented. Stream property values of media type
]{style="color:black;background:white"}[application/json]{.Datatype}[ or
one of its subtypes, optionally with format parameters, are represented
as native JSON. Values of ]{style="color:
black;background:white"}top-level type [text]{.Datatype}, for example
[text/plain]{.Datatype}, are represented as a string, with JSON string
escaping rules applied. [Included stream data of other media types is
represented as a base64url-encoded string value, see
**\[**]{style="color:black;background:white"}**RFC4648[\]]{style="color:black;background:white"}**[,
section 5.]{style="color:black;background:white"}

If the included stream property has no value, the non-existing stream
data is represented as [null]{.Datatype} and the control information
[[mediaContentType]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia)[[
is not necessary]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}.

Example 21:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Products/\$entity\",]{style="color:black"}

[┬á \...]{style="color:black"}

[┬á \"Thumbnail@mediaReadLink\":
\"http://server/Thumbnail546.jpg\",]{style="color:black"}

[┬á \"Thumbnail@mediaEditLink\":
\"http://server/uploads/Thumbnail546.jpg\",]{style="color:black"}

[┬á ]{style="color:black"}[\"Thumbnail@mediaContentType\":
\"image/jpeg\",]{lang="DE" style="color:black"}

[┬á \"Thumbnail@mediaEtag\": \"W/\\\"####\\\"\",]{lang="DE"
style="color:black"}

[┬á ]{lang="DE" style="color:black"}[\"Thumbnail\": \"\...base64url
encoded value\...\",]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_MediaEntity}[]{#_Toc19867108}[]{#_Toc12019460}[]{#_Toc418513429}[]{#_Toc402353061}[]{#_Toc368563108}[]{#_Media_Entity}10[ ]{style="font:7.0pt \"Times New Roman\""}[Media Entity](#sec_MediaEntity)[]{#_Toc38457766}[]{#_Toc23836940}[]{#_Toc37319035} {#media-entity style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

Media entities are entities that describe a media resource, for example
a photo. They are represented as entities that contain additional[
]{.MsoHyperlink}[[media\*]{style="font-family:\"Courier New\""}](#sec_ControlInformationmediaodatamedia)
control information.[ ]{style="color:black;background:white"}

[If the actual stream data for the media entity is included, it is
represented as property named
]{style="color:black;background:white"}[\$value]{.Datatype}[ whose
string value is the base64url-encoded value of the media stream, see
**\[**]{style="color:black;
background:white"}**RFC4648[\]]{style="color:black;background:white"}**[,
section 5.]{style="color:black;
background:white"}

Example 22:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Employees/\$entity\",]{style="color:black"}

[┬á \"@mediaReadLink\": \"Employees(1)/\$value\",]{style="color:black"}

[┬á \"@mediaContentType\": \"image/jpeg\",]{style="color:black"}

[┬á \"\$value\": \"\...base64url encoded
value\...\",]{style="color:black"}

[┬á \"ID\": 1,]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_IndividualPropertyorOperationRespons}[]{#_Toc19867109}[]{#_Toc12019461}[]{#_Toc418513430}[]{#_Toc402353062}[]{#_Toc368563109}[]{#_Individual_Property_or}11[ ]{style="font:7.0pt \"Times New Roman\""}[Individual Property or Operation Response](#sec_IndividualPropertyorOperationRespons)[]{#_Toc38457767}[]{#_Toc23836941}[]{#_Toc37319036} {#individual-property-or-operation-response style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

An individual property or operation response is represented as a JSON
object.

A single-valued property or operation response that has the
[null]{.Datatype} value does not have a representation; see
[**\[OData-Protocol\]**](#odata).

A property or operation response that is of a primitive type is
represented as an object with a single name/value pair, whose name is
[value]{.Datatype} and whose value is a [primitive
value](#sec_PrimitiveValue).

A property or operation response that is of complex type is represented
as a [complex value](#sec_ComplexValue).

A property or operation response that is of a collection type is
represented as an object with a single name/value pair whose name is
[value]{.Datatype}. Its value is the JSON representation of a
[collection of complex type values](#sec_CollectionofComplexValues) or
[collection of primitive values](#sec_CollectionofPrimitiveValues).

Example 23:┬á primitive value

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Edm.String\",]{style="color:black"}

[┬á \"value\": \"Pilar Ackerman\"]{style="color:black"}

[}]{style="color:black"}
:::

Example 24:┬á collection of primitive values

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Collection(Edm.String)\",]{style="color:black"}

[┬á \"value\": \[\"small\", \"medium\", \"extra
large\"\]]{style="color:black"}

[}]{style="color:black"}
:::

Example 25:┬á empty collection of primitive values

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Collection(Edm.String)\",]{style="color:black"}

[┬á \"value\": \[\]]{style="color:black"}

[}]{style="color:black"}
:::

Example 26: complex value

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Model.Address\",]{style="color:black"}

[┬á \"Street\": \"12345 Grant Street\",]{style="color:black"}

[┬á \"City\": \"Taft\",]{style="color:black"}

[┬á \"Region\": \"Ohio\",]{style="color:black"}

[┬á \"PostalCode\": \"OH 98052\",]{style="color:black"}

[┬á \"Country@navigationLink\":
\"Countries(\'US\')\"]{style="color:black"}

[}]{style="color:black"}
:::

Example 27: empty collection of complex values

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{\
┬á
\"@context\":\"http://host/service/\$metadata#Collection(Model.Address)\",\
┬á \"value\": \[\]]{style="color:black"}

[}]{style="color:black"}
:::

Note: the context URL is optional in requests.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#_Toc418513431}[]{#_Toc402353063}[]{#_Toc368563110}[]{#CollectionOfEntities}[]{#sec_CollectionofOperationResponses}[]{#_Toc19867110}[]{#_Toc12019462}[]{#_Representing_Multiple_Entities}[]{#_Collection_of_Entities}12[ ]{style="font:7.0pt \"Times New Roman\""}[Collection of Operation Responses](#sec_CollectionofOperationResponses)[]{#_Toc37319037}[]{#_Toc23836942}[]{#_Toc38457768} {#collection-of-operation-responses style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

Invoking a bound action or function with [/\$each]{.Datatype} on each
member of a collection in one request results in a collection of
operation results, which is represented as a JSON object containing a
name/value pair named [value]{.Datatype}. It MAY contain
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex),
[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype),
[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount),
or [[nextLink]{style="font-family:
\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL) control
information.

If present, the [context]{.Keyword} control information MUST be the
first name/value pair in the response.

The [count]{.Keyword} name/value pair represents the number of operation
responses in the collection. If present and the
[streaming=true]{.Datatype} media type parameter is set, it MUST come
before the [value]{.Datatype} name/value pair. If the response
represents a partial result, the [count]{.Keyword} name/value pair MUST
appear in the first partial response, and it MAY appear in subsequent
[partial responses (in which case it may vary from response to
response).]{style="color:#333333;background:white"}

The value of the [value]{.Datatype} name/value pair is an array of
objects, each object representing a single [operation
response](#sec_IndividualPropertyorOperationRespons). Note: if the
operation response is a collection, each single operation response
object itself contains a name/value pair named [value]{.Datatype}.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_CollectionofEntities}[]{#_Toc19867111}[13[ ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc12019463}[Collection of Entities](#sec_CollectionofEntities)[]{#_Toc38457769}[]{#_Toc23836943}[]{#_Toc37319038} {#collection-of-entities style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

A collection of entities is represented as a JSON object containing a
name/value pair named [value]{.Keyword}. It MAY contain
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex),
[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype),
[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount),
[[nextLink]{style="font-family:
\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL), or[[
]{style="font-family:\"Courier New\""}]{.MsoHyperlink}[[deltaLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationdeltaLinkodatadelt)
control information.

If present, the [context]{.Keyword} control information MUST be the
first name/value pair in the response.

The [count]{.Keyword} name/value pair represents the number of entities
in the collection. If present and the [streaming=true]{.Datatype}
content-type parameter is set, it MUST come before the
[value]{.Datatype} name/value pair. If the response represents a partial
result, the [count]{.Keyword} name/value pair MUST appear in the first
partial response, and it MAY appear in subsequent [partial responses (in
which case it may vary from response to
response).]{style="color:#333333;background:white"}

The value of the [value]{.Keyword} name/value pair is a JSON array
[where each]{#CollectionOfLinks} element is [representation of an
entity](#sec_Entity)[ ]{.MsoHyperlink}or a[
]{.MsoHyperlink}[]{#CollectionOfEntityRef}[representation of an entity
reference](#sec_EntityReference). An empty collection is represented as
an empty JSON array.

Functions or actions that are bound to this collection of entities are
advertised in the "wrapper object" in the same way as
[functions](#sec_BoundFunction) or [actions](#sec_BoundAction) are
advertised in the object representing a single entity.

The
[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL)
control information MUST be included in a response that represents a
partial result.

[]{#_Representing_Changes_(Deltas)_1}Example 28:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\": \"\...\",]{style="color:black"}

[┬á \"@count\": 37,]{style="color:black"}

[┬á \"value\": \[]{style="color:black"}

[┬á┬á┬á { \... },]{style="color:black"}

[┬á┬á┬á { \... },]{style="color:black"}

[┬á┬á┬á { \... }]{style="color:black"}

[┬á \],]{style="color:black"}

[┬á \"@nextLink\": \"\...?\$skiptoken=342r89\"]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_EntityReference}[]{#_Toc19867112}[]{#_Toc12019464}[]{#_Toc418513432}[]{#_Toc402353064}[]{#_Toc368563111}[]{#ResourceReference}[]{#_Entity_Reference}14[ ]{style="font:7.0pt \"Times New Roman\""}[Entity Reference](#sec_EntityReference)[]{#_Toc38457770}[]{#_Toc23836944}[]{#_Toc37319039} {#entity-reference style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

An entity reference (see [**\[OData-Protocol\]**](#odata)) MAY take the
place of an entity in a JSON payload, based on the client request. It
[]{#_Entity_References_as}is serialized as a JSON object that MUST
contain the [[id]{style="font-family:
\"Courier New\""}](#sec_ControlInformationidodataid) of the referenced
entity and MAY contain the
[[type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype)
control information and [instance
annotations](#sec_InstanceAnnotations), but no additional properties or
control information.

A collection of entity references is represented as a [collection of
entities](#sec_CollectionofEntities), with entity reference
representations instead of entity representations as items in the array
value of the [value]{.Datatype} name/value pair.

The outermost JSON object in a response MUST contain a
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex)
control information and MAY contain
[[count]{style="font-family:\"Courier New\""}](#sec_ControlInformationcountodatacount),
[[nextLink]{style="font-family:
\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL), or[
]{.MsoHyperlink}[[deltaLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationdeltaLinkodatadelt)
control information.

Example 29: entity reference to order 10643

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#\$ref\",]{style="color:black"}

[┬á \"@id\": \"Orders(10643)\"]{style="color:black"}

[}]{style="color:black"}
:::

Example 30: collection of entity references

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{ ]{style="color:black"}

[┬á \"@context\": \"http://host/service/\$metadata#Collection(\$ref)\",
]{style="color:black"}

[┬á \"value\": \[]{style="color:black"}

[┬á┬á┬á { \"@id\": \"Orders(10643)\" },]{style="color:black"}

[┬á┬á┬á { \"@id\": \"Orders(10759)\" }]{style="color:black"}

[┬á \] ]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_DeltaPayload}[]{#_Toc19867113}[]{#_Toc12019465}[]{#_Toc418513433}[]{#_Toc402353065}[]{#_Toc368563112}[]{#DeltaResponse}[]{#_Delta_Response}15[ ]{style="font:7.0pt \"Times New Roman\""}[Delta Payload](#sec_DeltaPayload)[]{#_Toc38457771}[]{#_Toc23836945}[]{#_Toc37319040} {#delta-payload style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

The non-format specific aspects of the delta handling are described in
the section "Requesting Changes" in [**\[OData-Protocol\]**](#odata).

## []{#sec_DeltaResponses}[]{#_Toc19867114}[15.1]{#_Toc12019466} [Delta Responses](#sec_DeltaResponses)[]{#_Toc38457772}[]{#_Toc23836946}[]{#_Toc37319041}

Responses from a delta request are returned as a JSON object.

The JSON object for a delta response to a single entity is either an
[added](#sec_AddedChangedEntity), [changed](#sec_AddedChangedEntity), or
[deleted entity](#sec_DeletedEntity)[.]{.MsoHyperlink}

The JSON object for a delta response to a collection of entities MUST
contain an array-valued property named [value]{.Datatype} containing all
[added](#sec_AddedChangedEntity), [changed](#sec_AddedChangedEntity), or
[deleted entities](#sec_DeletedEntity), as well as [added
links](#sec_AddedLink) or [deleted links](#sec_DeletedLink) between
entities, and MAY contain additional, unchanged entities.

If the delta response contains a partial list of changes, it MUST
include a [next link](#sec_ControlInformationnextLinkodatanextL) for the
client to retrieve the next set of changes.

The last page of a delta response SHOULD contain a [delta
link](#sec_ControlInformationdeltaLinkodatadelt) in place of the [next
link](#sec_ControlInformationnextLinkodatanextL) for retrieving
subsequent changes once the current set of changes has been applied to
the initial set.

If an OData 4.01 delta response includes an expanded collection-valued
navigation property inline (see [next
section](#sec_AddedChangedEntity)), the expanded collection can be a
partial list, in which case the expanded navigation property MUST have
the
[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL)
control information applied to it. Following this chain of next links
does not result in a delta link on the last page of the expanded
collection.

If the response from the delta link contains a [count]{.Datatype}[
]{.MsoHyperlink}control information, the returned number MUST include
all added, changed, or deleted entities to be returned, as well as added
or deleted links.

Example 31: a 4.01 delta response with five changes, in order of
occurrence

*[1.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[ContactName]{style="font-size:9.0pt;font-family:\"Courier New\""}[
for customer \'BOTTM\' was changed to \"Susan
Halvenstern\"]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[2.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Order
10643 was removed from customer
\'ALFKI\']{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[3.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Order
10645 was added to customer
\'BOTTM\']{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[4.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[The
shipping information for order 10643 was
updated]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[5.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Customer
\'ANTON\' was
deleted]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á
\"@context\":\"http://host/service/\$metadata#Customers/\$delta\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"@count\":5,]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"value\":]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \[]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"@id\":\"Customers(\'BOTTM\')\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}[[\"ContactName\":\"Susan
Halvenstern\"]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á },]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á {]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á \"@context\":\"#Customers/\$deletedLink\",]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á ]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}[[\"source\":\"Customers(\'ALFKI\')\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"relationship\":\"Orders\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"target\":\"Orders(10643)\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á
┬á┬á\"@context\":\"#Customers/\$link\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"source\":\"Customers(\'BOTTM\')\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"relationship\":\"Orders\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"target\":\"Orders(10645)\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"@context\":\"#Orders/\$entity\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á
┬á┬á┬á\"@id\":\"Orders(10643)\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"ShippingAddress\":{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á┬á┬á \"Street\":\"23 Tsawassen
Blvd.\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á┬á┬á
\"City\":\"Tsawassen\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á┬á┬á
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}[[\"Region\":\"BC\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á┬á┬á \"PostalCode\":\"T2F
8M4\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}[[},]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á
┬á┬á\"@context\":\"#Customers/\$deletedEntity\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á \"@removed\":
{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
┬á┬á\"reason\":\"deleted\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"@id\":\"Customers(\'ANTON\')\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á }]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \],]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"@deltaLink\":
\"Customers?\$expand=Orders&\$deltatoken=8015\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

## []{#sec_AddedChangedEntity}[]{#_Toc19867115}[]{#_Toc12019467}[]{#_Toc418513434}[]{#_Toc402353066}[]{#_Toc368563113}[]{#_Representing_Added/Changed_Entities_1}[]{#_Added/Changed_Entity}15.2 [Added/Changed Entity](#sec_AddedChangedEntity)[]{#_Toc38457773}[]{#_Toc23836947}[]{#_Toc37319042}

Added or changed entities within a delta response are represented as
[entities](#sec_Entity)[.]{.MsoHyperlink}

Added entities MUST include all available selected properties and MAY
include additional, unselected properties. Collection-valued properties
are treated as atomic values; any collection-valued properties returned
from a delta request MUST contain all current values for that
collection.

Changed entities MUST include all available selected properties that
have changed, and MAY include additional properties.

If a property of an entity is dependent upon the property of another
entity within the expanded set of entities being tracked, then both the
change to the dependent property as well as the change to the principle
property or [added](#sec_AddedLink)/[deleted link](#sec_DeletedLink)
corresponding to the change to the dependent property are returned in
the delta response.

Entities that are not part of the entity set specified by the context
URL MUST include the
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex)
control information to specify the entity set of the entity, regardless
of the specified
[[metadata]{style="font-family:\"Courier New\""}](#sec_ControllingtheAmountofControlInforma)[
]{.MsoHyperlink}value.

Entities include control information for selected navigation links based
on
[[metadata]{style="font-family:\"Courier New\""}](#sec_ControllingtheAmountofControlInforma)[.
]{.MsoHyperlink}

OData 4.0 payloads MUST NOT include expanded navigation properties
inline; all changes MUST be represented as a flat array of added,
deleted, or changed entities, along with added or deleted links.

OData 4.01 delta payloads MAY include expanded navigation properties
inline. Related single entities are represented as either an
[added/changed](#sec_AddedChangedEntity) entity, an [entity
reference](#sec_EntityReference), a [deleted
entity](#sec_DeletedEntity), or a null value (if no entity is related as
the outcome of the change). Collection-valued navigation properties are
represented either as a delta representation or as a full representation
of the collection.

If the expanded navigation property represents a delta, it MUST be
represented as an array-valued control information
[[delta]{style="font-family:\"Courier New\""}](#sec_ControlInformationdeltaodatadelta)
on the navigation property.┬á [Added/changed](#sec_AddedChangedEntity)
entities or [entity references](#sec_EntityReference)[
]{.MsoHyperlink}are added to the collection. [Deleted
entities](#sec_DeletedEntity) MAY be specified in a nested delta
representation to represent entities no longer part of the collection.
If the deleted entity specifies a [reason]{.Datatype} as
[deleted]{.Datatype}, then the entity is both removed from the
collection and deleted, otherwise it is removed from the collection and
only deleted if the navigation property is a containment navigation
property. The array MUST NOT contain [added](#sec_AddedLink) or [deleted
links](#sec_DeletedLink).

Example 32: 4.01 delta response customers with expanded orders
represented inline as a delta

*[1.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Customer
\'BOTTM\':]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[a.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[ContactName]{style="font-size:9.0pt;font-family:\"Courier New\""}[
was changed to \"Susan
Halvenstern\"]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[b.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Order
10645 was
added]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[2.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Customer
\'ALFKI\': ]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[a.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Order
10643 was
removed]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[3.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Customer
\'ANTON\' was
deleted]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á
\"@context\":\"http://host/service/\$metadata#Customers/\$delta\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"@count\":3,]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"value\":]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \[]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"@id\":\"Customers(\'BOTTM\')\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}[[\"ContactName\":\"Susan
Halvenstern\",]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á \"Orders@delta\":\[]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á ┬á┬á┬á┬á{]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[┬á┬á┬á┬á┬á┬á┬á ┬á┬á\"@id\":\"Orders(10645)\"]{lang="NL" style="color:black"}

[[┬á┬á┬á┬á┬á┬á┬á }]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á \]]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á },]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á {]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á \"@id\":\"Customers(\'ALFKI\')\",]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á \"Orders@delta\":\[]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á┬á┬á {]{lang="NL" style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á ┬á┬á┬á┬á┬á┬á\"@context\":\"#Orders/\$deletedEntity\",]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á┬á┬á┬á┬á ]{lang="NL"
style="font-size:10.0pt;color:black"}]{.CODEtemp}[[\"@removed\":
{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á \"reason\":
\"changed\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á┬á┬á┬á┬á },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"@id\":\"Orders(10643)\"]{style="color:black"}

[[┬á┬á┬á┬á┬á┬á┬á }┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á \]]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á {]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á
┬á┬á\"@context\":\"#Customers/\$deletedEntity\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á \"@removed\":
{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á┬á┬á┬á \"reason\":
\"deleted\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á┬á┬á
\"@id\":\"Customers(\'ANTON\')\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á }]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \],]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"@deltaLink\":
\"Customers?\$expand=Orders&\$deltatoken=8015\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

If the expanded navigation property is a full representation of the
collection, it MUST be represented as an expanded navigation property,
and its array value represents the full set of entities related
according to that relationship and satisfying any specified expand
options. Members of the array MUST be represented as
[added/changed](#sec_AddedChangedEntity) entities or [entity
references](#sec_EntityReference) and MUST NOT include added links,
deleted links, or deleted entities. Any entity not represented in the
collection has either been removed, deleted, or changed such that it no
longer satisfies the expand options in the defining query. In any case,
clients SHOULD NOT receive additional notifications for such removed
entities.

[]{#sec_DeletedEntity}[]{#_Toc19867116}[]{#_Toc12019468}[]{#_Toc418513435}[]{#_Toc402353067}[]{#_Toc368563114}[]{#_Representing_Deleted_Entities_1}[]{#_Deleted_Entity}Example
33: 4.01 delta response for a single entity with an expanded navigation
property containing only a partial list of related entities (as
indicated with a [next link](#sec_ControlInformationnextLinkodatanextL))

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á
\"@context\":\"http://host/service/\$metadata#Customers/\$entity/\$delta\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á ...]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"Orders@count\":
42,]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"Orders\": \[ ...
\],]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"Orders@nextLink\":
\"...\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á ...]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"@deltaLink\":
\"Customers(\'ALFKI\')?\$expand=Orders&\$deltatoken=9711\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

## 15.3 [Deleted Entity](#sec_DeletedEntity)[]{#_Toc23836948}[]{#_Toc37319043}[]{#_Toc38457774}

Deleted entities in JSON are returned as deleted-entity objects. Delta
responses MUST contain a deleted-entity object for each deleted entity,
including deleted expanded entities that are not related through a
containment navigation property. The service MAY additionally include
expanded entities related through a containment navigation property in
which case it MUST include those in any returned count of enumerated
changes.

The representation of deleted-entity objects differs between OData 4.0
and OData 4.01.

In OData 4.0 payloads the deleted-entity object MUST include the
following properties, regardless of the specified
[[metadata]{style="font-family:\"Courier New\""}](#sec_ControllingtheAmountofControlInforma)[
]{.MsoHyperlink}value:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Control
information
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex)
-- the context URL fragment MUST be
[#{entity-set}/\$deletedEntity]{.Datatype}, where
[{entity-set}]{.Datatype} is the entity set of the deleted entity

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[id]{.Datatype}
-- The [id](#sec_ControlInformationidodataid) of the deleted entity
(same as the
[[id]{style="color:windowtext"}](#sec_ControlInformationidodataid)
returned or computed when calling GET on resource), which may be
absolute or [relative](#sec_RelativeURLs)

In OData 4.0 payloads the deleted-entity object MAY include the
following optional property, regardless of the specified
[[metadata]{style="font-family:\"Courier New\""}](#sec_ControllingtheAmountofControlInforma)[
]{.MsoHyperlink}value, and MAY include
[annotations](#sec_InstanceAnnotations):

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[reason]{.Datatype}
-- either [deleted]{.Datatype}, if the entity was deleted (destroyed),
or [changed]{.Datatype} if the entity was removed from membership in the
result (i.e., due to a data change).

[]{#_Toc418513436}[]{#_Toc402353068}[]{#_Toc368563115}[]{#_Added_Link}Example
34: deleted entity in OData 4.0 response -- note that [id]{.Datatype} is
a property, not control information

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á
\"@context\":\"#Customers/\$deletedEntity\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á
\"reason\":\"deleted\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á\"id\":\"Customers(\'ANTON\')\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

In OData 4.01 payloads the deleted-entity object MUST include the
following properties, regardless of the specified
[[metadata]{style="font-family:\"Courier New\""}](#sec_ControllingtheAmountofControlInforma)[
]{.MsoHyperlink}value:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Control
information
[[removed]{style="font-family:\"Courier New\""}](#sec_ControlInformationremovedodataremove),
whose value is an object that MAY contain a property named
[reason]{.Datatype}. If present, the value of [reason]{.Datatype} MUST
be either [deleted]{.Datatype} if the entity was deleted (destroyed), or
[changed]{.Datatype} if the entity was removed from membership in the
result either due to change in value such that the entity no longer
matches the defining query or because the entity was removed from the
collection. The object MAY include
[annotations](#sec_InstanceAnnotations), and clients SHOULD NOT error
due to the presence of additional properties that MAY be defined by
future versions of this specification. For [ordered
payloads](#sec_PayloadOrderingConstraints), the control information
[[removed]{style="font-family:\"Courier New\""}](#sec_ControlInformationremovedodataremove)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}MUST immediately
follow the [[context]{style="font-family:
\"Courier New\""}](#sec_ControlInformationcontextodatacontex) control
information, if present, otherwise it MUST be the first property in the
deleted entity.

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Control
information
[[id]{style="font-family:\"Courier New\""}](#sec_ControlInformationidodataid)
or all of the entity's key fields. The [id]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}control
information MUST appear if any of the entity\'s key fields are omitted
from the response *or* the entity-id is not identical to the canonical
URL of the entity. For [ordered
payloads](#sec_PayloadOrderingConstraints), the control information
[id,]{.Datatype} if present, MUST immediately follow the control
information
[[removed]{style="font-family:\"Courier New\""}](#sec_ControlInformationremovedodataremove).

For full metadata the
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex)
control information MUST be included. It also MUST be included if the
entity set of the deleted entity cannot be determined from the
surrounding context.

The deleted-entity object MAY include additional properties of the
entity, as well as [annotations](#sec_InstanceAnnotations), and MAY
include related entities, related deleted entities, or a delta or full
representation of a related collection of entities, to represent related
entities that have been modified or deleted.

Example 35: deleted entity in OData 4.01 response with [id]{.Datatype}
control information (prefixed with an
[@]{.Datatype}[[)]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á
\"@context\":\"#Customers/\$deletedEntity\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"@removed\":{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á┬á┬á
\"reason\":\"deleted\",]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á ┬á┬á\"@myannoation.deletedBy\":\"Mario\"
]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á },]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á
\"@id\":\"Customers(\'ANTON\')\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

Example 36: entity removed OData 4.01 response without [id]{.Datatype}
control information and instead all key fields ([ID]{.Datatype} is the
single key field of [Customer]{.Datatype})

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[[{]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"@removed\":{},]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[┬á \"ID\":\"ANTON\"]{style="font-size:10.0pt;color:black"}]{.CODEtemp}

[[}]{style="font-size:10.0pt;color:black"}]{.CODEtemp}
:::

## []{#sec_AddedLink}[]{#_Toc19867117}[]{#_Toc12019469}[]{#_Added_Link_1}15.4 [Added Link](#sec_AddedLink)[]{#_Toc38457775}[]{#_Toc23836949}[]{#_Toc37319044}

Links within a delta response are represented as link objects.[
]{style="font-size:11.0pt;font-family:\"Calibri\",sans-serif"}

Delta responses MUST contain a link object for each added link that
corresponds to a [\$expand]{style="font-family:\"Courier New\""} path in
the initial request.

``` {style="page-break-after:avoid"}
The link object MUST include the following properties, regardless of the specified metadata value, and MAY include annotations:
```

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex)
-- the context URL fragment MUST be [#{entity-set}/\$link]{.Datatype},
where [{entity-set}]{.Datatype} is the entity set containing the source
entity

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[source]{.Datatype}
-- The [id](#sec_ControlInformationidodataid) of the entity from which
the relationship is defined, which may be absolute or
[relative](#sec_RelativeURLs)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[relationship]{.Datatype}
-- The path from the source object to the navigation property which MAY
traverse one or more complex properties, type cast segments, or members
of ordered collections

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[target]{.Datatype}
-- The [id](#sec_ControlInformationidodataid) of the related entity,
which may be absolute or [relative](#sec_RelativeURLs)

## []{#sec_DeletedLink}[]{#_Toc19867118}[]{#_Toc12019470}[]{#_Toc418513437}[]{#_Toc402353069}[]{#_Toc368563116}[]{#_Representing_Deleted_Links_1}[]{#_Deleted_Link}15.5 [Deleted Link](#sec_DeletedLink)[]{#_Toc38457776}[]{#_Toc23836950}[]{#_Toc37319045}

Deleted links within a delta response are represented as deleted-link
objects.

Delta responses MUST contain a deleted-link object for each deleted link
that corresponds to a [\$expand]{style="font-family:\"Courier New\""}
path in the initial request, unless either of the following is true:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
[source]{style="font-family:\"Courier New\""} or
[target]{style="font-family:\"Courier New\""} entity has been deleted

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}The
maximum cardinality of the related entity is one and there is a
subsequent [link object](#sec_AddedLink) that specifies the same
[source]{style="font-family:\"Courier New\""} and
[relationship]{style="font-family:
\"Courier New\""}.

``` {style="margin-top:4.0pt;margin-right:0in;margin-bottom:4.0pt;margin-left:
0in"}
The deleted-link object MUST include the following properties, regardless of the specified metadata value, and MAY include annotations:
```

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex)
-- the context URL fragment MUST be
[#{entity-set}/\$deletedLink]{.Datatype}, where
[{entity-set}]{.Datatype} is the entity set containing the source entity

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[source]{.Datatype}
-- The [id](#sec_ControlInformationidodataid) of the entity from which
the relationship is defined, which may be absolute or
[relative](#sec_RelativeURLs)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[relationship]{.Datatype}
-- The path from the source object to the navigation property which MAY
traverse one or more complex properties, type cast segments, or members
of ordered collections

[[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;color:windowtext"}]{.MsoHyperlink}[target]{.Datatype}
-- The [id](#sec_ControlInformationidodataid) of the related entity for
multi-valued navigation properties, which may be absolute or
[relative](#sec_RelativeURLs)[. ]{.MsoHyperlink}[[For delta payloads
that do not specify an
]{style="color:windowtext"}]{.MsoHyperlink}[OData-Version]{.Keyword}[[
header value of
]{style="color:windowtext"}]{.MsoHyperlink}[[4.0]{style="font-family:\"Courier New\";color:windowtext"}]{.MsoHyperlink}[[,
the target MAY be omitted for single-valued navigation
properties]{style="color:windowtext"}]{.MsoHyperlink}[.]{.MsoHyperlink}

## []{#sec_UpdateaCollectionofEntities}[]{#_Toc19867119}[[[15.6 ]{style="color:windowtext"}]{.MsoHyperlink}]{#_Toc12019471}[Update a Collection of Entities](#sec_UpdateaCollectionofEntities)[]{#_Toc38457777}[]{#_Toc23836951}[]{#_Toc37319046}

The body of a PATCH request to a URL identifying a collection of
entities is a JSON object. It MUST contain the
[[context]{style="font-family:\"Courier New\""}](#sec_ControlInformationcontextodatacontex)
control information with a string value of [#\$delta]{.Datatype}, and it
MUST contain an array-valued property named [value]{.Datatype}
containing all [added](#sec_AddedLink),
[changed](#sec_AddedChangedEntity), or [deleted](#sec_DeletedEntity)
entities, as well as [added](#sec_AddedLink) or
[deleted](#sec_DeletedLink) links between entities.

[]{#_Toc418513438}[]{#_Toc402353070}[]{#_Toc368563117}[]{#_Ref332033292}[]{#_Ref332033268}[]{#_Ref332031391}[]{#_Bound_Function}Example
37: 4.01 delta response customers with expanded orders represented
inline as a delta

*[1.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Add
customer
\'EASTC\':]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[2.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Change
]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[ContactName]{style="font-size:9.0pt;font-family:\"Courier New\""}[
of customer
\'AROUT\']{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[3.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Delete
customer
\'ANTON\']{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[4.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Change
customer \'ALFKI\':
]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[a.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Create
order 11011]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[b.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Add
link to existing order
10692]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[c.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Change
]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*[*[ShippedDate]{style="font-size:9.0pt"}*]{.Datatype}*[
]{style="font-size:8.0pt;font-family:\"Arial\",sans-serif"}[of related
order 10835]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[d.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Delete
link to order
10643]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[5.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Add
link between customer \'ANATR\' and order
10643]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

*[6.[┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}[Delete
link between customer \'DUMON\' and order
10311]{style="font-size:9.0pt;font-family:\"Arial\",sans-serif"}*

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":\"#\$delta\",]{style="color:black"}

[┬á \"value\": \[]{style="color:black"}

[┬á ┬á┬á{]{style="color:black"}

[┬á┬á┬á┬á┬á \"CustomerID\": \"EASTC\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"CompanyName\": \"Eastern Connection\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"ContactName\": \"Ann Devon\",]{style="color:black"}

[┬á┬á┬á ┬á┬á\"ContactTitle\": \"Sales Agent\"]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"CustomerID\": \"AROUT\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"ContactName\": \"Thomas Hardy\",]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"@removed\": {},]{style="color:black"}

[┬á┬á┬á┬á┬á \"CustomerID\":\"ANTON\"]{style="color:black"}

[┬á ┬á┬á},]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"CustomerID\": \"ALFKI\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"Orders@delta\": \[]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"OrderID\": 11011,]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"CustomerID\": \"ALFKI\",]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"EmployeeID\": 3,]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"OrderDate\":
\"1998-04-09T00:00:00Z\",]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"RequiredDate\":
\"1998-05-07T00:00:00Z\",]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"ShippedDate\":
\"1998-04-13T00:00:00Z\"]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"@id\":\"Orders(10692)\"]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"@id\":\"Orders(10835)\"]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á ShippedDate: \"1998-01-23T00:00:00Z\",]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"@removed\": {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á┬á \"reason\": \"changed\"]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á┬á \"OrderID\": 10643]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á }]{style="color:black"}

[┬á┬á┬á┬á┬á \]]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"@context\":\"#Customers/\$link\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"source\":\"Customers(\'ANATR\')\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"relationship\":\"Orders\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"target\":\"Orders(10643)\"]{style="color:black"}

[┬á ┬á┬á},]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"@context\":\"#Customers/\$deletedLink\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"source\":\"Customers(\'DUMON\')\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"relationship\":\"Orders\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"target\":\"Orders(10311)\"]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_BoundFunction}[]{#_Toc19867120}[16[ ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc12019472}[Bound Function](#sec_BoundFunction)[]{#_Toc38457778}[]{#_Toc23836952}[]{#_Toc37319047} {#bound-function style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

A bound function is advertised via a name/value pair where the name is a
hash ([\#]{.Datatype}) character followed by the namespace- or
alias-qualified name of the function. The namespace or alias MUST be
defined or the namespace referenced in the metadata document of the
service, see [**\[OData-CSDLJSON\]**](#ODataCSDLJSON) or
[**\[OData-CSDLXML\]**[.]{style="color:windowtext"}](#ODataCSDLXML) A
specific function overload can be advertised by appending the
parentheses-enclosed, comma-separated list of non-binding parameter
names to the qualified function name, see rule
[qualifiedFunctionName]{.Datatype} in [**\[OData-ABNF\]**](#abnf).

A function that is bound to a single structured type MAY be advertised
within the JSON object representing that structured type.

Functions that are bound to a collection MAY be advertised within the
JSON object containing the collection. If the collection is the
top-level response, the function advertisement name/value pair is placed
next to the [value]{.Keyword} name/value pair representing the
collection. If the collection is nested within an instance of a
structured type, then in 4.01 payloads the name of the function
advertisement is prepended with the name of the collection-valued
property and is placed next to the collection-valued property, [expanded
navigation property](#sec_ExpandedNavigationProperty), or
[[navigationLink]{style="font-family:\"Courier New\""}](#sec_NavigationLink)
control information, if present. 4.0 payloads MUST NOT advertise
functions prefixed with property names.

If the function is available, the value of the advertisement is an
object. OData 4.01 services MAY advertise the non-availability of the
function with the value [null]{.Keyword}.

If
[[metadata=full]{style="font-family:\"Courier New\""}](#sec_metadatafullodatametadatafull)
is requested, each value object MUST have at least the two name/value
pairs [title]{.Keyword} and [target]{.Keyword}. It MAY contain
[annotations](#sec_InstanceAnnotations). The order of the name/value
pairs MUST be considered insignificant.

The [target]{.Keyword} name/value pair contains a URL. Clients MUST be
able to invoke the function or the specific function overload by passing
the parameter values via query options for [parameter
aliases](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_ParameterAliases)[[
]{style="color:#0000EE"}]{.apple-converted-space}[that are identical to
the parameter name preceded by an at
(]{style="color:black"}[[@]{style="font-family:\"Courier New\";
color:black"}]{.datatype0}[) sign. Clients MUST check if the obtained
URL already contains a query part and appropriately precede the
parameters either with an ampersand
(]{style="color:black"}[[&]{style="font-family:\"Courier New\";color:black"}]{.datatype0}[)
or a question mark
(]{style="color:black"}[[?]{style="font-family:\"Courier New\";color:black"}]{.datatype0}[)]{style="color:black"}.

The [title]{.Keyword} name/value pair contains the function or action
title as a string.

If
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal)
is requested, the [target]{.Datatype} name/value pair MUST be included
if its value differs from the canonical function or action URL.

Example 38: minimal representation of a function where all overloads are
applicable

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Employees/\$entity\",]{style="color:black"}

[┬á \"#Model.RemainingVacation\": {},]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

Example 39: full representation of a specific overload with parameter
alias for the [[Year]{style="font-size:10.0pt"}]{.Keyword} parameter

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Employees/\$entity\",]{style="color:black"}

[┬á \"#Model.RemainingVacation(Year)\": {]{style="color:black"}

[┬á┬á┬á \"title\": \"Remaining vacation from year.\",]{style="color:black"}

[┬á┬á┬á \"target\":
\"Employees(2)/RemainingVacation(Year=@Year)\"]{style="color:black"}

[┬á },]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

Example 40: full representation in a collection

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Employees\",]{style="color:black"}

[┬á \"#Model.RemainingVacation\": {]{style="color:black"}

[┬á┬á┬á \"title\": \"Remaining Vacation\",]{style="color:black"}

[┬á┬á┬á \"target\":
\"Managers(22)/Employees/RemainingVacation\"]{style="color:black"}

[┬á },]{style="color:black"}

[┬á \"value\": \[ \... \]]{style="color:black"}

[}]{style="color:black"}
:::

[]{#_Toc418513439}[]{#_Toc402353071}[]{#_Toc368563118}[]{#_Bound_Action}Example
41: full representation in a nested collection

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Employees/\$entity\",]{style="color:black"}

[┬á \"@type\": \"Model.Manager\",]{style="color:black"}

[┬á \"ID\":22,]{style="color:black"}

[┬á \...]{style="color:black"}

[┬á \"Employees#RemainingVacation\": {]{style="color:black"}

[┬á┬á┬á \"title\": \"RemainingVacation\",]{style="color:black"}

[┬á┬á┬á \"target\":
\"Managers(22)/Employees/RemainingVacation\"]{style="color:black"}

[┬á }]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_BoundAction}[]{#_Toc19867121}[17[ ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc12019473}[Bound Action](#sec_BoundAction)[]{#_Toc38457779}[]{#_Toc23836953}[]{#_Toc37319048} {#bound-action style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

A bound action is advertised via a name/value pair where the name is a
hash ([\#]{.Datatype}) character followed by the namespace- or
alias-qualified name of the action. The namespace or alias MUST be
defined or the namespace referenced in the metadata document of the
service, see [**\[OData-CSDLJSON\]**](#ODataCSDLJSON) or
[**\[OData-CSDLXML\]**[.]{style="color:windowtext"}](#ODataCSDLXML)

An action that is bound to a single structured type is advertised within
the JSON object representing that structured type.

Actions that are bound to a collection MAY be advertised within the JSON
object containing the collection. If the collection is the top-level
response, the action advertisement name/value pair is placed next to the
[value]{.Keyword} name/value pair representing the collection. If the
collection is nested within an instance of a structured type, then in
4.01 payloads the name of the action advertisement is prepended with the
name of the collection-valued property and is placed next to the
name/value pair representing the collection-valued property, [expanded
navigation property](#sec_ExpandedNavigationProperty), or
[[navigationLink]{style="font-family:\"Courier New\""}](#sec_NavigationLink)
control information, if present. 4.0 payloads MUST NOT advertise actions
prefixed with property names.

If the action is available, the value of the advertisement is an object.
OData 4.01 services MAY advertise the non-availability of the action
with the value [null]{.Keyword}.

If
[[metadata=full]{style="font-family:\"Courier New\""}](#sec_metadatafullodatametadatafull)
is requested, each value object MUST have at least the two name/value
pairs [title]{.Keyword} and [target]{.Keyword}. It MAY contain
[annotations](#sec_InstanceAnnotations). The order of these name/value
pairs MUST be considered insignificant.

The [target]{.Keyword} name/value pair contains a bound function or
action URL.

The [title]{.Keyword} name/value pair contains the function or action
title as a string.

If
[[metadata=minimal]{style="font-family:\"Courier New\""}](#sec_metadataminimalodatametadataminimal)
is requested, the [target]{.Datatype} name/value pair MUST be included
if its value differs from the canonical function or action URL.

Example 42: minimal representation in an entity

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#LeaveRequests/\$entity\",]{style="color:black"}

[┬á \"#Model.Approve\": {},]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

Example 43: full representation in an entity:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#LeaveRequests/\$entity\",]{style="color:black"}

[┬á \"#Model.Approve\": {]{style="color:black"}

[┬á┬á┬á \"title\": \"Approve Leave Request\",]{style="color:black"}

[┬á┬á┬á \"target\": \"LeaveRequests(2)/Approve\"]{style="color:black"}

[┬á },]{style="color:black"}

[┬á \...]{style="color:black"}

[}]{style="color:black"}
:::

Example 44: full representation in a collection

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#LeaveRequests\",]{style="color:black"}

[┬á \"#Model.Approve\": {]{style="color:black"}

[┬á┬á┬á \"title\": \"Approve All Leave Requests\",]{style="color:black"}

[┬á┬á┬á \"target\":
\"Employees(22)/Model.Manager/LeaveRequests/Approve\"]{style="color:black"}

[┬á },]{style="color:black"}

[┬á \"value\": \[ \... \]]{style="color:black"}

[}]{style="color:black"}
:::

[]{#_Toc418513440}[]{#_Toc402353072}[Example]{#_Toc368563119} 45: full
representation in a nested collection

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Employees/\$entity\",]{style="color:black"}

[┬á \"@type\": \"Model.Manager\",]{style="color:black"}

[┬á \"ID\":22,]{style="color:black"}

[┬á \...]{style="color:black"}

[┬á \"LeaveRequests#Model.Approve\": {]{style="color:black"}

[┬á┬á┬á \"title\": \"Approve All Leave Requests\",]{style="color:black"}

[┬á┬á┬á \"target\":
\"Employees(22)/Model.Manager/LeaveRequests/Approve\"]{style="color:black"}

[┬á }]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_ActionInvocation}[]{#_Toc19867122}[18[ ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc12019474}[Action Invocation](#sec_ActionInvocation)[]{#_Toc38457780}[]{#_Toc23836954}[]{#_Toc37319049} {#action-invocation style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

Action parameter values are encoded in a single JSON object in the
request body.

Each non-binding parameter value is encoded as a separate name/value
pair in this JSON object. The name is the name of the parameter. The
value is the parameter value in the JSON representation appropriate for
its type. Entity typed parameter values MAY include a subset of the
properties, or just the [entity reference](#sec_EntityReference), as
appropriate to the action.

Non-binding parameters that are nullable or annotated with the term
[[Core.OptionalParameter]{style="font-family:\"Courier New\""}](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#OptionalParameter)[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}defined in
[**\[OData-VocCore\]**](#VocCore) MAY be omitted from the request body.
If an omitted parameter is not annotated (and thus nullable), it MUST be
interpreted as having the [null]{.Datatype} value. If it is annotated
and the annotation specifies a [DefaultValue]{.Datatype}, the omitted
parameter is interpreted as having that default value. If omitted and
the annotation does not specify a default value, the service is free on
how to interpret the omitted parameter. Note: a nullable non-binding
parameter is equivalent to being annotated as optional with a default
value of [null]{.Datatype}.Example 46:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{ ]{style="color:black"}

[┬á \"param1\": 42, ]{style="color:black"}

[┬á \"param2\": { ]{style="color:black"}

[┬á┬á┬á \"Street\": \"One Microsoft Way\", ]{style="color:black"}

[┬á┬á┬á \"Zip\": 98052 ]{style="color:black"}

[┬á }, ]{style="color:black"}

[┬á \"param3\": \[ 1, 42, 99 \],]{style="color:black"}

[┬á \"param4\": null ]{style="color:black"}

[}]{style="color:black"}
:::

┬á

In order to invoke an action with no non-binding parameters, the client
passes an empty JSON object in the body of the request. 4.01 Services
MUST also support clients passing an empty request body for this case.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_BatchRequestsandResponses}[]{#_Toc19867123}[19[ ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc12019475}[Batch Requests and Responses](#sec_BatchRequestsandResponses)[]{#_Toc38457781}[]{#_Toc23836955}[]{#_Toc37319050} {#batch-requests-and-responses style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

## []{#sec_BatchRequest}[]{#_Toc19867124}[19.1]{#_Toc12019476} [Batch Request](#sec_BatchRequest)[]{#_Toc38457782}[]{#_Toc23836956}[]{#_Toc37319051}

A JSON batch request body consists of a single JSON object that MUST
contain the name/value pair [requests]{.Datatype} and MAY contain
[annotations](#sec_InstanceAnnotations). It does not contain the
[context]{.Keyword} control information.

The value of [requests]{.Datatype} is an array of request objects, each
representing an individual request. Note: an individual request MUST NOT
itself be a batch request.

A *request object* MUST contain the name/value pairs [id]{.Datatype},
[method]{.Datatype} and [url]{.Datatype}, and it MAY contain the
name/value pairs [atomicityGroup]{.Datatype}, [dependsOn]{.Datatype}[[,
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[if]{.Datatype}[[,
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[headers]{.Datatype},
and [body]{.Datatype}.

The value of [id]{.Datatype} is a string containing the request
identifier of the individual request, see
[**\[OData-Protocol\]**](#odata). It MUST NOT be identical to the value
of any other request identifier nor any [atomicityGroup]{.Datatype}
within the batch request.

Note: the [id]{.Datatype} name/value pair corresponds to the
[Content-ID]{.Datatype} header in the multipart batch format specified
in [**\[OData-Protocol\]**](#odata)[.]{.MsoHyperlink}

The value of [method]{.Datatype} is a string that MUST contain one of
the literals [delete]{.Datatype}, [get]{.Datatype}, [patch]{.Datatype},
[post]{.Datatype}, or [put]{.Datatype}. These literals are
case-insensitive.

The value of [url]{.Datatype} is a string containing the individual
request URL. The URL MAY be an absolute path (starting with a forward
slash [/]{.Datatype}) which is appended to scheme, host, and port of the
batch request URL, or a relative path (not starting with a forward slash
[/]{.Datatype}).

If the first segment of a relative path starts with a [\$]{.Datatype}
character and is not identical to the name of a top-level system
resource ([\$batch]{.Datatype}, [\$crossjoin,]{.Datatype}
[\$all,]{.Datatype} [\$entity]{.Datatype}, [\$root,]{.Datatype}
[\$id]{.Datatype}, [\$metadata]{.Datatype}, or other system resources
defined according to the
[OData-Version]{style="font-family:\"Courier New\""} of the protocol
specified in the request), then this first segment is replaced with the
URL of the entity created by or returned from a preceding request whose
[id]{.Datatype} value is identical to the value of the first segment
with the leading [\$]{.Datatype} character removed. The [id]{.Datatype}
of this request MUST be specified in the [dependsOn]{.Datatype}
name/value pair.

Otherwise, the relative path is resolved relative to the batch request
URL (i.e. relative to the service root).

The value of [atomicityGroup]{.Datatype} is a string whose content MUST
NOT be identical to any value of [id]{.Datatype} within the batch
request, and which MUST satisfy the rule [request-id]{.Datatype} in
[**\[OData-ABNF\]**](#abnf). All request objects with the same value for
[atomicityGroup]{.Datatype} MUST be adjacent in the
[requests]{.Datatype} array. These requests are processed as an atomic
operation and MUST either all succeed, or all fail.

Note: the atomicity group is a generalization of the change set in the
multipart batch format specified in [**\[OData-Protocol\]**](#odata).

The value of [dependsOn]{.Datatype} is an array of strings whose values
MUST be values of either [id]{.Datatype} or [atomicityGroup]{.Datatype}
of preceding request objects; forward references are not allowed. If a
request depends on another request that is part of a different atomicity
group, the atomicity group MUST be listed in [dependsOn]{.Datatype}. In
the absence of the optional [if]{.Datatype} member a request that
depends on other requests or atomicity groups is only executed if those
requests were executed successfully, i.e. with a [2xx]{.Datatype}
response code. If one of the requests it depends on has failed, the
dependent request is not executed and a response with status code of
[424 Failed Dependency]{.Datatype}[[ is returned for it as part of the
batch response.]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

The [if]{.Datatype} member can specify an alternative condition for
executing the dependent request. Its value MUST be URL expression (see
[**\[OData-URL\]**](#ODataURLRef)) that evaluates to a Boolean value.
The URL expression syntax is extended and additionally allows

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[\$\<content-id\>/\$succeeded]{.Datatype}
to check if the referenced request has succeeded

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[\$\<content-id\>]{.Datatype}
to reference the response body of the referenced request

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}[\$\<content-id\>/\<path\>]{.Datatype}
to reference a part of the response body

Services SHOULD advertise support of the [if]{.Datatype} member by
specifying the property
[RequestDependencyConditionsSupported]{.Datatype} in the
[[Capabilities.BatchSupport]{style="font-family:\"Courier New\""}](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#BatchSupport)
term applied to the entity container, see
[**\[OData-VocCap\]**](#VocCapabilities)[[. If a service does not
support request dependencies, the dependent request MUST fail with
]{style="color:windowtext"}]{.MsoHyperlink}[424 Failed
Dependency]{.Datatype}[[, and if the dependent request is part of an
atomicity group, all requests in that group fail with
]{style="color:windowtext"}]{.MsoHyperlink}[424 Failed
Dependency]{.Datatype}[[ with no changes
applied]{style="color:windowtext"}]{.MsoHyperlink}.

The value of [headers]{.Datatype} is an object whose name/value pairs
represent request headers. The name of each pair MUST be the lower-case
header name; the value is a string containing the header-encoded value
of the header. The [headers]{.Datatype} object MUST contain a name/value
pair with the name [content-type]{.Datatype} whose value is the media
type.

The value of [body]{.Datatype} can be [null]{.Datatype}, which is
equivalent to not specifying the [body]{.Datatype} name/value pair.

For media type [application/json]{.Datatype}[[ or one of its subtypes,
optionally with format parameters, the value of
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[body]{.Datatype}[[
is JSON.]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

For media types of top-level type [text]{.Datatype}, for example
[text/plain]{.Datatype}, the value of [body]{.Datatype} is a string
containing the value of the request body.

For all other media types the value of [body]{.Datatype} is a string
containing the base64url-encoded value of the request body. In this case
the body content can be compressed or chunked if this is correctly
reflected in the [Transfer-Encoding]{.Datatype} header.

A [body]{.Datatype} MUST NOT be specified if the [method]{.Datatype} is
[get]{.Datatype} or [delete]{.Datatype}.

Example []{#BatchRequestExampleNumber}47: a batch request that contains
the following individual requests in the order listed

1.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}A query request

2.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}An atomicity group that
contains the following requests:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Insert
entity

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Update
entity

3.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}A second query request

Note: For brevity, in the example, request bodies are excluded in favor
of English descriptions inside [\<\>]{.Datatype} brackets and
[OData-Version]{.Datatype} headers are omitted.

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[POST /service/\$batch HTTP/1.1\
Host: host\
OData-Version: 4.01\
Content-Type: application/json\
Content-Length: \###]{style="color:black"}

┬á

[{]{style="color:black"}

[┬á \"requests\": \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"0\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"method\": \"get\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\": \"/service/Customers(\'ALFKI\')\"]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"1\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"atomicityGroup\": \"group1\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"dependsOn\": \[ \"0\" \],]{style="color:black"}

[┬á┬á┬á┬á┬á \"method\": \"patch\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\": \"/service/Customers(\'ALFKI\')\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"headers\": {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á \"Prefer\": \"return=minimal\"]{style="color:black"}

[┬á┬á┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<JSON representation of changes to Customer
ALFKI\>]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"2\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"atomicityGroup\": \"group1\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"method\": \"post\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\": \"/service/Customers\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<JSON representation of a new Customer
entity\>]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"3\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"dependsOn\": \[ \"group1\" \],]{style="color:black"}

[┬á┬á┬á┬á┬á \"method\": \"get\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\": \"/service/Products\"]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

## []{#sec_ReferencingNewEntities}[]{#_Toc19867125}[[19.2 ]{style="color:#0000EE"}]{#_Toc12019477}[Referencing New Entities](#sec_ReferencingNewEntities)[]{#_Toc38457783}[]{#_Toc23836957}[]{#_Toc37319052}

The entity returned by a preceding request can be referenced in the
request URL of subsequent requests.

Example 48: a batch request that contains the following operations in
the order listed:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Insert
a new entity (with [id = 1]{.Datatype})

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Insert
a second new entity (references request with [id = 1]{.Datatype})

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[POST /service/\$batch HTTP/1.1\
Host: host\
OData-Version: 4.01\
Content-Type: application/json\
Content-Length: \###\
\
{]{style="color:black"}

[┬á \"requests\": \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"1\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"method\": \"post\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\": \"/service/Customers\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<JSON representation of a new Customer
entity\>]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"2\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"dependsOn\": \[ \"1\" \] ]{style="color:black"}

[┬á┬á┬á┬á┬á \"method\": \"post\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\": \"\$1/Orders\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<JSON representation of a new
Order\>]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

## []{#sec_ReferencinganETag}[]{#_Toc19867126}[[19.3 ]{style="color:#0000EE"}]{#_Toc12019478}[Referencing an ETag](#sec_ReferencinganETag)[]{#_Toc38457784}[]{#_Toc23836958}[]{#_Toc37319053}

Example 49: a batch request that contains the following operations in
the order listed:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Get
an Employee (with [id]{.Datatype} = 1)

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol;font-style:normal"}Update
the salary only if the employee has not changed

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[POST /service/\$batch HTTP/1.1\
Host: host\
OData-Version: 4.01\
Content-Type: application/json\
Content-Length: \###\
\
]{style="color:black"}

[{]{style="color:black"}

[┬á \"requests\": \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"1\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"method\": \"get\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\": \"/service/Employees(0)\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"headers\": {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á \"accept\": \"application/json\"]{style="color:black"}

[┬á┬á┬á┬á┬á }]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"2\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"dependsOn\": \[ \"1\" \],]{style="color:black"}

[┬á┬á┬á┬á┬á \"method\": \"patch\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"url\": \"/service/Employees(0)\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"headers\": {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á \"if-match\": \"\$1\"]{style="color:black"}

[┬á┬á┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á┬á \"Salary\": 75000]{style="color:black"}

[┬á┬á┬á┬á┬á }]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

## []{#sec_ProcessingaBatchRequest}[]{#_Toc19867127}[]{#_Toc12019479}[]{#_Toc477190655}19.4 [Processing a Batch Request](#sec_ProcessingaBatchRequest)[]{#_Toc38457785}[]{#_Toc23836959}[]{#_Toc37319054}

All requests in an atomicity group represent a single change unit. A
service MUST successfully process and apply all the requests in the
atomicity group or else apply none of them. It is up to the service
implementation to define rollback semantics to undo any requests within
an atomicity group that may have been applied before another request in
that same atomicity group failed.

The service MAY process the individual requests and atomicity groups
within a batch request, or individual requests within an atomicity
group, in any order that is compatible with the dependencies expressed
with the [dependsOn]{.Datatype} name/value pair. Individual requests and
atomicity groups that do not specify the [dependsOn]{.Datatype}
name/value pair may be processed in parallel. Clients that are only
interested in completely successful batch responses MAY specify the
preference
[continue-on-error=false]{style="font-family:\"Courier New\";color:#3B006F"}
to indicate that the service need not spend cycles on further processing
once an error occurs in one of the dependency chains. In this case the
response MAY omit response objects for requests that have not been
processed. If the preference [continue-on-error]{.Datatype} is not
specified, or specified with a value of [true]{.Datatype}, all requests
are processed according to their dependencies.

The service MUST include the [id]{.Datatype} name/value pair in each
response object with the value of the request identifier that the client
specified in the corresponding request, so clients can correlate
requests and responses.

## []{#sec_BatchResponse}[]{#_Toc19867128}[19.5]{#_Toc12019480} [Batch Response](#sec_BatchResponse)[]{#_Toc38457786}[]{#_Toc23836960}[]{#_Toc37319055}

A JSON batch response body consists of a single JSON object that MUST
contain the name/value pair [responses]{.Datatype} and MAY contain
[annotations](#sec_InstanceAnnotations). It does not contain the
[context]{.Keyword} control information.

The value of [responses]{.Datatype} is an array of response objects,
each representing an individual response.

A JSON batch response MAY be a partial result containing the
[[nextLink]{style="font-family:
\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL) control
information. This allows services to chunk results into manageable
pieces, or to return results for already processed requests and continue
processing the remaining individual requests while waiting for the
client to fire a [GET]{.Datatype} request to the next link.

In a response to a batch request using the multipart format defined in
[**\[OData-Protocol\]**](#odata)[ ]{.MsoHyperlink}[[the response objects
MUST appear in the same order as required for multipart batch responses
because the
]{style="color:windowtext"}]{.MsoHyperlink}[Content-ID]{.Datatype}[[
header is not required outside of change sets. Response objects
corresponding to requests that specify a
]{style="color:windowtext"}]{.MsoHyperlink}[Content-ID]{.Datatype}[[
header MUST contain the
]{style="color:windowtext"}]{.MsoHyperlink}[id]{.Datatype}[[ name/value
pair, and the value of
]{style="color:windowtext"}]{.MsoHyperlink}[id]{.Datatype}[[ MUST be the
value of the
]{style="color:windowtext"}]{.MsoHyperlink}[Content-ID]{.Datatype}[[
header of the corresponding request. This is necessarily the case for
requests contained within a change set. Responses to requests within a
change set MUST contain the
]{style="color:windowtext"}]{.MsoHyperlink}[atomicityGroup]{.Datatype}[[
name/value pair with a value common within a change set and unique
across change sets.]{style="color:windowtext"}]{.MsoHyperlink}

[[In a response to a batch request using the JSON batch request format
specified in the preceding section the response objects MAY appear in
any order, and each response object MUST contain the
]{style="color:windowtext"}]{.MsoHyperlink}[id]{.Datatype}[[ name/value
pair with the same value as in the corresponding request object. If the
corresponding request object contains the
]{style="color:windowtext"}]{.MsoHyperlink}[atomicityGroup]{.Datatype}[[
name/value pair, it MUST also be present in the response object with the
same value.]{style="color:windowtext"}]{.MsoHyperlink}

If any response within an atomicity group returns a failure code, all
requests within that atomicity group are considered failed, regardless
of their individual returned status code. The service MAY return [424
Failed Dependency]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}for statements
within an atomicity group that fail or are not attempted due to other
failures within the same atomicity group.

A response object MUST contain the name/value pair [status]{.Datatype}
whose value is a number representing the HTTP status code of the
response to the individual request.

The response object MAY contain the name/value pair [headers]{.Datatype}
whose value is an object with name/value pairs representing response
headers. The name of each pair MUST be the lower-case header name; the
value is a string containing the header-encoded value of the header.

The response object MAY contain the name/value pair [body]{.Datatype}
which follows the same rules as within [request
objects](#sec_BatchRequest).

If the media type is not exactly equal to [application/json]{.Datatype}
(i.e. it is a subtype or has format parameters), the
[headers]{.Datatype} object MUST contain a name/value pair with the name
[content-type]{.Datatype} whose value is the media type.

Relative URLs in a response object follow the rules for [relative
URLs](#sec_RelativeURLs) based on the request URL of the corresponding
request. Especially: URLs in responses MUST NOT contain
[\$]{.Datatype}-prefixed request identifiers.

Example 50: referencing the batch request example 47 above, assume all
the requests except the final query request succeed. In this case the
response would be

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"responses\": \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"0\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"status\": 200,]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<JSON representation of the Customer entity with key
ALFKI\>]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"1\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"status\": 204]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"2\",]{style="color:black"}

[┬á ┬á┬á┬á┬á\"status\": 201,]{style="color:black"}

[┬á┬á┬á┬á┬á \"headers\": {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á \"location\":
\"http://host/service.svc/Customer(\'POIUY\')\"]{style="color:black"}

[┬á┬á┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<JSON representation of the new Customer
entity\>]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"3\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"status\": 404,]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<Error message\>]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

## []{#_Toc418513441}[]{#_Toc402353073}[]{#_Toc368563120}[]{#sec_AsynchronousBatchRequests}[]{#_Toc19867129}[]{#_Toc12019481}[]{#_Toc477190296}[]{#_Toc370374941}[]{#_Toc370126144}[]{#_Ref358207547}[]{#_Instance_Annotations}19.6 [Asynchronous Batch Requests](#sec_AsynchronousBatchRequests)[]{#_Toc37319056}[]{#_Toc23836961}[]{#_Toc38457787}

A batch request that specifies the [respond-async]{style="font-family:
\"Courier New\""} preference MAY be executed asynchronously. This means
that the "outer" batch request is executed asynchronously; this
preference does not automatically cascade down to the individual
requests within the batch. After successful execution of the batch
request the response to the batch request is returned in the body of a
response to an interrogation request against the status monitor resource
URL, see section "Asynchronous Requests" in
[**\[OData-Protocol\]**](#odata).

A service MAY return interim results to an asynchronously executing
batch. It does this by responding with [200 OK]{.Datatype} to a
[GET]{.Datatype} request to the monitor resource and including a
[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL)
control information in the JSON batch response, thus signaling that the
response is only a partial result. A subsequent [GET]{.Datatype} request
to the next link MAY result in a [202
Accepted]{style="font-family:\"Courier New\""} response with a
[location]{.Datatype} header pointing to a new status monitor resource.

Example 51: referencing the example 47 above again, assume that the
request is sent with the [respond-async]{.Datatype} preference. This
results in a [202]{.Datatype} response pointing to a status monitor
resource:

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
processed. The service signals that asynchronous processing is
"finished" and returns a partial result with the first response and a
next link. The client did not explicitly accept
[application/http]{.Datatype}, so the response is "unwrapped" and only
indicates with the [AsyncResult]{.Datatype} header that it is a response
to a status monitor resource:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[HTTP/1.1 200 Ok\
AsyncResult: 200\
OData-Version: 4.01\
Content-Length: \####\
Content-Type: application/json\
\
]{style="color:black"}

[{]{style="color:black"}

[┬á \"responses\": \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"0\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"status\": 200,]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<JSON representation of the Customer entity with key
ALFKI\>]{style="color:black"}

[┬á \],]{style="color:black"}

[┬á \"@nextLink\": \"\...?\$skiptoken=YmF0Y2gx\"]{style="color:black"}

[}]{style="color:black"}
:::

Client makes a [GET]{.Datatype} request to the next link and receives a
[202]{.Datatype} response with the location of a new monitor resource.

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[HTTP/1.1 202 Accepted\
Location: http://service-root/async-monitor-1\
Retry-After: \###\
\
]{style="color:black"}
:::

After some time a [GET]{.Datatype} request to the monitor resource
returns the remainder of the result[[.
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[HTTP/1.1 200 Ok\
AsyncResult: 200\
OData-Version: 4.01]{style="color:black"}

[Content-Length: \####\
Content-Type: application/json\
\
]{style="color:black"}

[{]{style="color:black"}

[┬á \"responses\": \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"1\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"status\": 204]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"2\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"status\": 201,]{style="color:black"}

[┬á┬á┬á┬á┬á \"headers\": {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á \"location\":
\"http://host/service.svc/Customer(\'POIUY\')\"]{style="color:black"}

[┬á┬á┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<JSON representation of the new Customer
entity\>]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"3\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"status\": 404,]{style="color:black"}

[┬á┬á┬á┬á┬á \"body\": \<Error message\>]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

In addition to the above interaction pattern individual requests within
a batch with no other requests depending on it and not part of an
atomicity group MAY be executed asynchronously if they specify the
[respond-async]{style="font-family:\"Courier New\""} preference and if
the service responds with a JSON batch response. In this case the
[response]{.Datatype} array contains a response object for each
asynchronously executed individual request with a [status]{.Datatype}[[
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}of
[202]{.Datatype}, a [location]{.Datatype} header pointing to an
individual status monitor resource, and optionally a
[retry-after]{.Datatype} header.

Example 52: the first individual request is processed asynchronously,
the second synchronously, the batch itself is processed synchronously

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[HTTP/1.1 200 OK\
OData-Version: 4.01\
Content-Length: \####\
Content-Type: application/json\
\
]{style="color:black"}

[{]{style="color:black"}

[┬á \"responses\": \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"0\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"status\": 202,]{style="color:black"}

[┬á┬á┬á┬á┬á \"headers\": {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á┬á \"location\":
\"http://service-root/async-monitor-0\"]{style="color:black"}

[┬á┬á┬á┬á┬á }]{style="color:black"}

[┬á┬á┬á },]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"id\": \"1\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"status\": 204]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_InstanceAnnotations}[]{#_Toc19867130}[20[ ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc12019482}[Instance Annotations](#sec_InstanceAnnotations)[]{#_Toc38457788}[]{#_Toc23836962}[]{#_Toc37319057} {#instance-annotations style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

[Annotations]{#_Representing_Annotations} are an extensibility mechanism
that allows services and clients to include information other than the
raw data in the request or response.

Annotations are name/value pairs that have an at ([@]{.Datatype}) and a
dot ([.]{.Datatype}) as part of the name. The part after the \"at\" sign
([@]{.Datatype}) is the *annotation* *identifier*. It consists of the
namespace or alias of the schema that defines the term, followed by a
dot ([.]{.Datatype}), followed by the name of the term, [optionally
followed by a hash
(]{style="color:#333333;background:white"}[\#]{.Datatype}[) and a
qualifier.]{style="color:
#333333;background:white"} The namespace or alias MUST be defined in the
metadata document, see [**\[OData-CSDLJSON\]**](#ODataCSDLJSON) or
[**\[OData-CSDLXML\]**[.]{style="color:windowtext"}](#ODataCSDLXML)

The annotation identifier [odata]{.Datatype} is reserved for future
extensions of the protocol and format. Instance annotations MUST have a
namespace or alias that is different from [odata]{.Datatype}.

Annotations can be applied to any name/value pair in a JSON payload that
represents a value of any type from the entity data model. Clients
should never error due to an unexpected annotation in a JSON payload.

Annotations are always expressed as name/value pairs. For entity data
model constructs represented as JSON objects the annotation name/value
pairs are placed within the object; for constructs represented as JSON
arrays or primitives they are placed next to the annotated model
construct. [When annotating a payload that represents a
]{style="color:black"}[single primitive or collection
value](#sec_IndividualPropertyorOperationRespons)[, the annotations for
the value appear next to the ]{style="color:black"}[value]{.Datatype}
[property and are not prefixed with a property
name.]{style="color:black"}

Example 53:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"@context\":
\"http://host/service/\$metadata#Customers\",]{style="color:black"}

[┬á \"@com.example.customer.setkind\": \"VIPs\",]{style="color:black"}

[┬á \"value\": \[]{style="color:black"}

[┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á \"@com.example.display.highlight\": true,]{style="color:black"}

[┬á┬á┬á┬á┬á \"ID\": \"ALFKI\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"CompanyName@com.example.display.style\": { \"title\": true,
\"order\": 1 },]{style="color:black"}

[┬á┬á┬á┬á┬á \"CompanyName\": \"Alfreds Futterkiste\",]{style="color:black"}

[┬á┬á┬á┬á┬á \"Orders@com.example.display.style#simple\": { \"order\": 2
}]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á \]]{style="color:black"}

[}]{style="color:black"}
:::

## []{#sec_AnnotateaJSONObject}[]{#_Toc19867131}[]{#_Toc12019483}[]{#_Toc418513442}[]{#_Toc402353074}[20.1]{#_Toc368563121} [Annotate a JSON Object](#sec_AnnotateaJSONObject)[]{#_Toc38457789}[]{#_Toc23836963}[]{#_Toc37319058}

[When annotating a name/value pair for which the value is represented as
a JSON object, each annotation is placed within the object and
represented as a single name/value pair.]{style="color:black"}

The name always starts with the \"at\" sign ([@]{.Datatype}), followed
by the annotation identifier.

The value MUST be an appropriate value for the annotation.

## []{#sec_AnnotateaJSONArrayorPrimitive}[]{#_Toc19867132}[]{#_Toc12019484}[]{#_Toc418513443}[]{#_Toc402353075}[20.2]{#_Toc368563122} [Annotate a JSON Array or Primitive](#sec_AnnotateaJSONArrayorPrimitive)[]{#_Toc38457790}[]{#_Toc23836964}[]{#_Toc37319059}

W[hen annotating a name/value pair for which the value is represented as
a JSON array or primitive value, each annotation that applies to this
name/value pair MUST be represented as a single name/value pair and
placed immediately prior to the annotated name/value pair, with the
exception of the
]{style="color:black"}[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL)[
or
]{style="color:black"}[[collectionAnnotations]{style="font-family:\"Courier New\""}](#sec_ControlInformationcollectionAnnotati)[
control information]{style="color:black"},[ which can appear immediately
before or after the annotated collection. ]{style="color:black"}

The name is the same as the name of the property or name/value pair
being annotated, followed by the "at" sign ([@]{.Datatype}), followed by
the annotation identifier.

The value MUST be an appropriate value for the annotation.

## []{#sec_AnnotateaPrimitiveValuewithinaJSONAr}[]{#_Toc19867133}[20.3]{#_Toc12019485} [Annotate a Primitive Value within a JSON Array](#sec_AnnotateaPrimitiveValuewithinaJSONAr)[]{#_Toc38457791}[]{#_Toc23836965}[]{#_Toc37319060}

Individual primitive elements within a JSON array can be[ annotated by
applying the
]{style="color:black"}[[collectionAnnotations]{style="font-family:\"Courier New\""}](#sec_ControlInformationcollectionAnnotati)[
control information to the array containing the primitive
member.]{style="color:black"}

The control information must come with other annotations or control
information immediately before or after the collection valued property.
The name of the property representing the control information is the
same as the name of the collection-valued property, followed by the "at"
sign ([@]{.Datatype}), followed by the
[[collectionAnnotations]{style="font-family:\"Courier New\""}](#sec_ControlInformationcollectionAnnotati)
identifier.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#_Toc418513444}[]{#_Toc402353076}[]{#_Toc368563123}[]{#sec_ErrorHandling}[]{#_Toc19867134}[]{#_Toc12019486}[]{#_Representing_Errors_in}21[ ]{style="font:7.0pt \"Times New Roman\""}[Error Handling](#sec_ErrorHandling)[]{#_Toc37319061}[]{#_Toc23836966}[]{#_Toc38457792} {#error-handling style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

OData requests may return a well formed [error
response](#sec_ErrorResponse), an [in-stream
error](#sec_InStreamError)[]{#_Hlt11961899}, or error information
[within a success payload](#sec_ErrorInformationinaSuccessPayload).

## []{#sec_ErrorResponse}[]{#_Toc19867135}[21.1]{#_Toc12019487} [Error Response](#sec_ErrorResponse)[]{#_Toc38457793}[]{#_Toc23836967}[]{#_Toc37319062}

The error response MUST be a single JSON object. This object MUST have a
single name/value pair named [error]{.Keyword}. The value must be an
OData error object.

The OData error object MUST contain name/value pairs with the names
[code]{.Keyword} and [message]{.Keyword}, and it MAY contain name/value
pairs with the names [target]{style="font-family:
\"Courier New\""}, [details]{style="font-family:\"Courier New\""}, and
[innererror]{.Keyword}.

The value for the [code]{.Keyword} name/value pair is a non-empty
language-independent string. Its value is a service-defined error code.
This code serves as a sub-status for the HTTP error code specified in
the response. It cannot be [null]{.Datatype}.

The value for the [message]{.Keyword} name/value pair is a non-empty,
language-dependent, human-readable string describing the error. The
[Content-Language]{.Datatype} header MUST contain the language code from
[**\[RFC5646\]**](#rfc5646) corresponding to the language in which the
value for message is written. It cannot be [null]{.Datatype}.

The value for the [target]{style="font-family:\"Courier New\""}
name/value pair is a potentially empty string indicating the target of
the error (for example, the name of the property in error). It can be
[null]{.Datatype}.

The value for the [details]{.Keyword} name/value pair MUST be an array
of JSON objects that MUST contain name/value pairs for
[code]{style="font-family:\"Courier New\""} and
[message]{style="font-family:\"Courier New\""}, and MAY contain a
name/value pair for [target]{style="font-family:\"Courier New\""}, as
described above.

The value for the [innererror]{.Keyword} name/value pair MUST be an
object. The contents of this object are service-defined. Usually this
object contains information that will help debug the service.[
]{style="color:black;background:white"}

[Service implementations SHOULD carefully consider which information to
include in production environments to guard against potential security
concerns around information
disclosure.]{style="color:black;background:white"}

Error responses MAY contain [annotations](#sec_InstanceAnnotations) in
any of its JSON objects.

Example 54:

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[{]{style="color:black"}

[┬á \"error\": {]{style="color:black"}

[┬á┬á┬á \"code\": \"err123\",]{style="color:black"}

[┬á┬á┬á \"message\": \"Unsupported functionality\",]{style="color:black"}

[┬á┬á┬á \"target\": \"query\",]{style="color:black"}

[┬á┬á┬á \"details\": \[]{style="color:black"}

[┬á┬á┬á┬á┬á {]{style="color:black"}

[┬á┬á┬á┬á┬á┬á \"code\": \"forty-two\",]{style="color:black"}

[┬á┬á┬á┬á┬á┬á \"target\": \"\$search\",┬á ]{style="color:black"}

[┬á┬á┬á┬á┬á┬á \"message\": \"\$search query option not
supported\"]{style="color:black"}

[┬á┬á┬á┬á┬á }]{style="color:black"}

[┬á┬á┬á \],]{style="color:black"}

[┬á┬á┬á \"innererror\": {]{style="color:black"}

[┬á┬á┬á┬á┬á \"trace\": \[\...\],]{style="color:black"}

[┬á┬á┬á┬á┬á \"context\": {\...}]{style="color:black"}

[┬á┬á┬á }]{style="color:black"}

[┬á }]{style="color:black"}

[}]{style="color:black"}
:::

## []{#_Toc418513445}[]{#_Toc402353077}[]{#_Toc368563124}[]{#_Ref356829963}[]{#sec_InStreamError}[]{#_Toc19867136}[]{#_Toc12019488}[]{#_The_Content-Type_Header}[]{#_Payload_Ordering_Constraints}21.2 [In-Stream Error](#sec_InStreamError)[]{#_Toc37319063}[]{#_Toc23836968}[]{#_Toc38457794}

In the case that a service encounters an error after sending a success
status to the client, the service MUST leave the response malformed.
This can be achieved by immediately stopping response serialization and
thus omitting (among others) the end-object character of the top-level
JSON object in the response.

Services MAY include the header [OData-Error]{.Datatype} as a trailing
header if supported by the transport protocol (e.g. with HTTP/1.1 and
chunked transfer encoding, or with HTTP/2), see
[**\[OData-Protocol\]**](#odata).

The value of the [OData-Error]{.Datatype} trailing header is an OData
error object as defined in the preceding chapter, represented in a
header-appropriate way:

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}All
optional whitespace (indentation and line breaks) is removed, especially
(in hex notation) [09]{.Datatype}, [0A]{.Datatype} and [0D]{.Datatype}

[┬╖[┬á┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:Symbol"}Control
characters ([00]{.Datatype} to [1F]{.Datatype} and [7F]{.Datatype}) and
Unicode characters beyond [00FF]{.Datatype} within JSON strings are
encoded as [\\uXXXX]{.Datatype} or [\\uXXXX\\uXXXX]{.Datatype} (see
[**\[RFC8259\]**](#RFC_JSON), section 7)

Example 55: note that this is one HTTP header line without any line
breaks or optional whitespace

::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:
solid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;
background:#D9D9D9;margin-left:.3in;margin-right:.3in"}
[OData-error: {\"code\":\"err123\",\"message\":\"Unsupported
functionality\",\"target\":\"query\",\"details\":\[{\"code\":\"forty-two\",\"target\":\"\$search\",\"message\":\"\$search
query option not supported\"}\]}]{style="color:black"}
:::

## []{#sec_ErrorInformationinaSuccessPayload}[]{#_Toc19867137}[21.3]{#_Toc12019489} [Error Information in a Success Payload](#sec_ErrorInformationinaSuccessPayload)[]{#_Toc37319064}[]{#_Toc23836969}[]{#_Toc38457795}

Services may return error information within a success payload; for
example, if the client has specified the
[continue-on-error]{style="font-family:\"Courier New\""} preference.

### []{#sec_PrimitiveValueErrors}[]{#_Toc19867138}[21.3.1]{#_Toc12019490} [Primitive Value Errors](#sec_PrimitiveValueErrors)[]{#_Toc37319065}[]{#_Toc23836970}[]{#_Toc38457796}

Primitive values that are in error are annotated with the
[Core.ValueException]{.Datatype} term, see
[**\[OData-VocCore\]**](#VocCore). In this case, the payload MAY include
an approximation of the value and MAY specify a string representation of
the exact value in the [value]{.Datatype} property of the annotation.

### []{#sec_StructuredTypeErrors}[]{#_Toc19867139}[21.3.2]{#_Toc12019491} [Structured Type Errors](#sec_StructuredTypeErrors)[]{#_Toc37319066}[]{#_Toc23836971}[]{#_Toc38457797}

Structured types that are in error can be represented within a success
payload only if the client has specified the
[continue-on-error]{style="font-family:
\"Courier New\""} preference. Such items are annotated with the
[Core.ResourceException]{.Datatype} term, see
[**\[OData-VocCore\]**](#VocCore). The annotation MAY include a
[retryLink]{.Datatype} property that can be used by the client to
attempt to re-fetch the resource.

### []{#sec_CollectionErrors}[]{#_Toc19867140}[21.3.3]{#_Toc12019492} [Collection Errors](#sec_CollectionErrors)[]{#_Toc37319067}[]{#_Toc23836972}[]{#_Toc38457798}

Collections within a success payload can contain primitive values that
are in error, or structured values that are in error, if the client has
specified the [continue-on-error]{style="font-family:\"Courier New\""}
preference. Such elements are annotated as described above. Primitive
elements within a collection are annotated using the
[[collectionAnnotations]{style="font-family:\"Courier New\""}](#sec_ControlInformationcollectionAnnotati)
control information.

Services can return partial collections within a success payload, for
example, if they encounter an error while retrieving the collection and
the client has specified the
[continue-on-error]{style="font-family:\"Courier New\""} preference. In
this case, the service MUST include a
[[nextLink]{style="font-family:\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL).
The [[nextLink]{style="font-family:
\"Courier New\""}](#sec_ControlInformationnextLinkodatanextL)[
]{.Datatype}can be used to attempt retrieving the remaining members of
the collection and could return an error indicating that the remaining
members are not available.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Extensibility}[]{#_Toc19867141}[22[ ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc12019493}[Extensibility](#sec_Extensibility)[]{#_Toc38457799}[]{#_Toc23836973}[]{#_Toc37319068} {#extensibility style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

Implementations can add [instance annotations](#sec_InstanceAnnotations)
of the form [\@namespace.termname]{.Datatype} or
[property@namespace.termname]{.Datatype} to any JSON object, where
[property]{.Datatype} MAY or MAY NOT match the name of a name/value pair
within the JSON object. However, the namespace MUST NOT start with
[odata]{.Datatype} and SHOULD NOT be required to be understood by the
receiving party in order to correctly interpret the rest of the payload
as the receiving party MUST ignore unknown annotations not defined in
this version of the OData JSON Specification.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_SecurityConsiderations}[]{#_Toc19867142}[]{#_Toc12019494}[]{#_Toc418513446}[]{#_Toc402353078}[23[ ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc368563125}[Security Considerations](#sec_SecurityConsiderations)[]{#_Toc38457800}[]{#_Toc23836974}[]{#_Toc37319069} {#security-considerations style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

This specification raises no security issues.

This section is provided as a service to the application developers,
information providers, and users of OData version 4.0 giving some
references to starting points for securing OData services as specified.
OData is a REST-full multi-format service that depends on other services
and thus inherits both sides of the coin, security enhancements and
concerns alike from the latter.

For JSON-relevant security implications please cf. at least the relevant
subsections of [**\[RFC8259\]**](#RFC_JSON) as starting point.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
# []{#sec_Conformance}[]{#_Toc19867143}[]{#_Toc12019495}[]{#_Toc418513447}[]{#_Toc402353079}[24[ ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc368563126}[Conformance](#sec_Conformance)[]{#_Toc38457801}[]{#_Toc23836975}[]{#_Toc37319070} {#conformance style="margin-left:19.85pt;text-indent:-19.85pt"}
:::

Conforming clients MUST be prepared to consume a service that uses any
or all of the constructs defined in this specification. The exception to
this are the constructs defined in [Delta Response](#sec_DeltaPayload),
which are only required for clients that request changes.

┬á

In order to be a conforming *consumer* of the OData JSON format, a
client or service:

1.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST either:

a.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}understand
[metadata=minimal]{.Datatype} (section 3.1.1) or

b.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}explicitly specify
[metadata=none]{.Datatype} (section 3.1.3) or [metadata=full]{.Datatype}
(section 3.1.2) in the request (client)

2.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared to
consume a response with full metadata

3.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared to
receive all data types (section 7.1)

a.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}defined in this
specification (client)

b.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}exposed by the service
(service)

4.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST interpret all
[odata]{.Datatype} control information defined according to the
[OData-Version]{style="font-family:\"Courier New\""} header of the
payload (section 4.5)

5.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared to
receive any annotations[ ]{.MsoHyperlink}and control information not
defined in the [OData-Version]{style="font-family:\"Courier New\""}
header of the payload (section 21.2)

6.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT require
[streaming=true]{style="font-family:\"Courier New\""} in the
[Content-Type]{style="font-family:\"Courier New\""} header (section 4.4)

7.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be a conforming
consumer of the OData 4.0 JSON format, for payloads with an
[OData-Version]{style="font-family:\"Courier New\""} header value of
[4.0]{style="font-family:\"Courier New\""}.

a.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST accept the[
odata.]{style="font-family:\"Courier New\""} prefix, where defined, on
[format parameters](#sec_ControllingtheAmountofControlInforma) and
[control information](#sec_ControlInformation)

b.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST accept the [\#
]{style="font-family:\"Courier New\""}prefix in
[[\@odata.type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype)
values

c.[┬á┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared to
handle binding through the use of the
[[\@odata.bind]{style="font-family:\"Courier New\""}](#sec_BindOperation)
property in payloads to a [PATCH]{style="font-family:\"Courier New\""},
[PUT]{style="font-family:\"Courier New\""}, or
[POST]{style="font-family:
\"Courier New\""} request

d.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST accept
[TargetId]{style="font-family:\"Courier New\""} within in a [deleted
link](#sec_DeletedLink) for a relationship with a maximum cardinality of
one

e.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST accept the string
values [-INF]{style="font-family:\"Courier New\""},
[INF]{style="font-family:\"Courier New\""}, and
[NaN]{style="font-family:
\"Courier New\""} for single and double values

f.[┬á┬á┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support
property annotations that appear immediately before or after the
property they annotate

8.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MAY be a conforming
consumer of the OData 4.01 JSON format, for payloads with an
[OData-Version]{style="font-family:\"Courier New\""} header value of
[4.01]{style="font-family:\"Courier New\""}.

a.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared to
interpret [control information](#sec_ControlInformation) with or without
the [odata.]{style="font-family:\"Courier New\""} prefix

b.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared for
[[\@odata.type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype)
primitive values with or without the
[\#]{style="font-family:\"Courier New\""} prefix

c.[┬á┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared to
handle binding through inclusion of an entity reference within a
collection-valued navigation property in the body of a
[PATCH]{style="font-family:
\"Courier New\""}, [PUT]{style="font-family:\"Courier New\""}, or
[POST]{style="font-family:\"Courier New\""} request

d.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared for
[TargetId]{style="font-family:\"Courier New\""} to be included or
omitted in a [deleted link](#sec_DeletedLink) for a relationship with a
maximum cardinality of one

e.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST accept the string
values [-INF]{style="font-family:\"Courier New\""},
[INF]{style="font-family:\"Courier New\""}, and
[NaN]{style="font-family:
\"Courier New\""} for decimal values with floating scale

[[f.[┬á┬á┬á┬á┬á┬á┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="color:windowtext"}]{.MsoHyperlink}MUST
be prepared to handle related entities inline within a [delta
payload](#sec_DeltaPayload)[ ]{.MsoHyperlink}[[as well as a nested delta
representation for the
collection]{style="color:windowtext"}]{.MsoHyperlink}

g.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST be prepared to
handle decimal values written in exponential notation

┬á

In order to be a conforming *producer* of the OData JSON format, a
client or service:

9.[┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support generating
OData 4.0 JSON compliant payloads with an
[OData-Version]{style="font-family:\"Courier New\""} header value of
[4.0]{style="font-family:\"Courier New\""}.

a.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT omit the
[odata.]{style="font-family:\"Courier New\""} prefix from [format
parameters](#sec_ControllingtheAmountofControlInforma) or [control
information](#sec_ControlInformation)

b.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT omit the
[\#]{style="font-family:\"Courier New\""} prefix from
[[\@odata.type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype)[
]{style="font-family:\"Courier New\""}values

c.[┬á┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT include
entity values or entity references within a collection-valued navigation
property in the body of a [PATCH]{style="font-family:\"Courier New\""},
[PUT]{style="font-family:\"Courier New\""}, or
[POST]{style="font-family:
\"Courier New\""} request

d.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT return
decimal values written in exponential notation unless the
[[ExponentialDecimals]{style="font-family:\"Courier New\""}](#sec_ControllingtheRepresentationofNumber)
format parameter is specified.

e.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT advertise
available actions or functions using name/value pairs prefixed with a
property name

f.[┬á┬á┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT return a
null value for name/value pairs representing actions or functions that
are not available

g.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT represent
numeric value exceptions for values other than single and double values
using the string values [-INF]{style="font-family:\"Courier New\""},
[INF]{style="font-family:\"Courier New\""}, and
[NaN]{style="font-family:
\"Courier New\""}

10.[┬á ]{style="font:7.0pt \"Times New Roman\""}MAY support generating
OData 4.01 JSON compliant payloads for requests with an
[OData-Version]{style="font-family:
\"Courier New\""} header value of [4.01]{style="font-family:
\"Courier New\""}.

a.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MUST return property
annotations immediately before the property they annotate

b.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}SHOULD omit the
[odata.]{style="font-family:\"Courier New\""} prefix from [format
parameters](#sec_ControllingtheAmountofControlInforma) and [odata
control information](#sec_ControlInformation)

c.[┬á┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}SHOULD omit the
[\#]{style="font-family:\"Courier New\""} prefix from
[[\@type]{style="font-family:\"Courier New\""}](#sec_ControlInformationtypeodatatype)
primitive values

d.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MAY include inline
related entities or nested delta collections within a delta payload

e.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MAY include
[TargetId]{style="font-family:\"Courier New\""} within a [deleted
link](#sec_DeletedLink) for a relationship with a maximum cardinality of
1

f.[┬á┬á┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MAY return decimal
values written in exponential notation

g.[┬á┬á┬á┬á┬á ]{style="font:7.0pt \"Times New Roman\""}MAY represent numeric
value exceptions for decimal values with floating scale using the string
values [-INF]{style="font-family:\"Courier New\""},
[INF]{style="font-family:\"Courier New\""}, and
[NaN]{style="font-family:
\"Courier New\""}

In addition, in order to conform to the OData JSON format, a service:

11.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST comply with one of
the conformance levels defined in
[[\[OData-Protocol\]]{style="color:windowtext"}](#odata)

12.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support the
[application/json]{.Datatype} media type in the Accept header (section
3)

13.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST return well-formed
JSON payloads

14.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support
[odata.metadata=full]{.Datatype} (section 3.1.2)

15.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST include the
[odata.nextLink]{.Datatype} control information in partial results for
entity collections (section 4.5.5)

16.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support entity
instances with external metadata (section 4.5.1)

17.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support properties
with externally defined data types (section 4.5.3)

18.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT violate any
other aspects of this OData JSON specification

19.[┬á ]{style="font:7.0pt \"Times New Roman\""}SHOULD support the
[\$format]{.Datatype} ┬ásystem query option (section 3)

20.[┬á ]{style="font:7.0pt \"Times New Roman\""}MAY support the
[odata.streaming=true]{.Datatype} parameter in the [Accept]{.Datatype}
header (section 4.4)

21.[┬á ]{style="font:7.0pt \"Times New Roman\""}MAY return full metadata
regardless of [odata.metadata]{.Datatype} (section 3.1.2)

22.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST NOT omit null or
default values unless the [omit-values]{.Datatype} preference is
specified in the [Prefer]{.Datatype} request header and the omit-values
preference is included in the [Preference-Applied]{.Datatype} response
header

23.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST return OData JSON
4.0-compliant responses for requests with an
[OData-MaxVersion]{.Datatype} header value of [4.]{.Datatype}0

24.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support OData JSON
4.0-compliant payloads in requests with an [OData-Version]{.Datatype}
header value of [4.0]{.Datatype}

25.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support returning,
in the final response to an asynchronous request, the
[application/json]{.Datatype} payload that would have been returned had
the operation completed synchronously, wrapped in an application/http
message

┬á

In addition, in order to comply with the OData 4.01 JSON format, a
service:

[[26.[┬á
]{style="font:7.0pt \"Times New Roman\""}]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}SHOULD
return the OData JSON 4.01 format for requests with an
[OData-MaxVersion]{.Datatype} header value of [4.01]{.Datatype}

27.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support the OData
JSON 4.01 format in request payloads for requests with an
[OData-Version]{.Datatype} header value of [4.01]{.Datatype}

28.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST honor the
[[[odata.etag]{style="color:windowtext"}]{.Datatype}](#sec_ControlInformationetagodataetag)
control information within [PUT]{.Datatype}, [PATCH]{.Datatype} or
[DELETE]{.Datatype} payloads, if specified

29.[┬á ]{style="font:7.0pt \"Times New Roman\""}MUST support returning,
in the final response to an asynchronous request, the
[application/json]{.Datatype} payload that would have been returned had
the operation completed synchronously

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
[]{#sec_Acknowledgments}[]{#_Toc19867144}[]{#_Toc12019496}[]{#_Toc418513448}[]{#_Toc402353080}[]{#_Toc368563127}[]{#_Toc462221701}Appendix
A.[┬á
]{style="font:7.0pt \"Times New Roman\""}[Acknowledgments](#sec_Acknowledgments)[]{#_Toc38457802}[]{#_Toc23836976}[]{#_Toc37319071}
:::

The contributions of the OASIS OData Technical Committee members,
enumerated in [**\[OData-Protocol\]**](#odata), are gratefully
acknowledged.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
[]{#sec_RevisionHistory}[]{#_Toc19867145}[]{#_Toc12019497}[]{#_Toc418513449}[]{#_Toc402353081}[Appendix
B.[┬á ]{style="font:7.0pt \"Times New Roman\""}]{#_Toc368563128}[Revision
History](#sec_RevisionHistory)[]{#_Toc38457803}[]{#_Toc23836977}[]{#_Toc37319072}
:::

+-----------------+-----------------+-----------------+-----------------+
| **Revision**    | **Date**        | **Editor**      | **Changes       |
|                 |                 |                 | Made**          |
+-----------------+-----------------+-----------------+-----------------+
| Working Draft   | 2016-06-22      | Michael Pizzo   | Import material |
| 01              |                 |                 | from OData 4.0  |
|                 |                 | Ralf Handl      | Errata 3 JSON   |
|                 |                 |                 | document and    |
|                 |                 |                 | initial         |
|                 |                 |                 | application of  |
|                 |                 |                 | 4.01 features   |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2016-12-08      | Michael Pizzo   | Integrated 4.01 |
| Specification   |                 |                 | features        |
| Draft 01        |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-06-08      | Michael Pizzo   | Integrated more |
| Specification   |                 |                 | 4.01 features,  |
| Draft 02        |                 | Ralf Handl      | especially:     |
|                 |                 |                 |                 |
|                 |                 |                 | [┬╖[┬á┬á┬á┬á┬á┬á┬á┬á     |
|                 |                 |                 | ]               |
|                 |                 |                 | {style="font:7. |
|                 |                 |                 | 0pt \"Times New |
|                 |                 |                 |  Roman\""}]{sty |
|                 |                 |                 | le="font-family |
|                 |                 |                 | :Symbol"}Update |
|                 |                 |                 | of a collection |
|                 |                 |                 | of entities     |
|                 |                 |                 |                 |
|                 |                 |                 | [┬╖[┬á┬á┬á┬á┬á┬á┬á┬á     |
|                 |                 |                 | ]{style="font:  |
|                 |                 |                 | 7.0pt \"Times N |
|                 |                 |                 | ew Roman\""}]{s |
|                 |                 |                 | tyle="font-fami |
|                 |                 |                 | ly:Symbol"}JSON |
|                 |                 |                 | Batch format    |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-09-22      | Michael Pizzo   | Incorporated    |
| Specification   |                 |                 | review feedback |
| Draft 03        |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-11-10      | Michael Pizzo   | Incorporated    |
| Specification   |                 |                 | review feedback |
| Draft 04        |                 | Ralf Handl      |                 |
|                 |                 |                 | Changed default |
|                 |                 |                 | of              |
|                 |                 |                 | [continue-on-er |
|                 |                 |                 | ror]{.Datatype} |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-12-19      | Michael Pizzo   | Non-Material    |
| Specification   |                 |                 | Changes         |
| 01              |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2019-06-21      | Michael Pizzo   | In-stream       |
| Specification   |                 |                 | errors          |
| Draft 05        |                 | Ralf Handl      |                 |
|                 |                 |                 | Conditional     |
|                 |                 |                 | request         |
|                 |                 |                 | dependencies in |
|                 |                 |                 | batch requests  |
|                 |                 |                 |                 |
|                 |                 |                 | Optional action |
|                 |                 |                 | parameters      |
|                 |                 |                 |                 |
|                 |                 |                 | Update of media |
|                 |                 |                 | links of stream |
|                 |                 |                 | properties      |
|                 |                 |                 |                 |
|                 |                 |                 | Representing    |
|                 |                 |                 | error           |
|                 |                 |                 | information in  |
|                 |                 |                 | success         |
|                 |                 |                 | responses with  |
|                 |                 |                 | [continue-on-er |
|                 |                 |                 | ror]{.Datatype} |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2019-09-20      | Michael Pizzo   | No dependencies |
| Specification   |                 |                 | to async        |
| Draft 06        |                 | Ralf Handl      | requests within |
|                 |                 |                 | a batch request |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2019-11-05      | Michael Pizzo   | Non-material    |
| Specification   |                 |                 | changes         |
| 02              |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Candidate OASIS | 2020-01-15      | Michael Pizzo   | Non-material    |
| Standard 01     |                 |                 | changes         |
|                 |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Candidate OASIS | 2020-04-09      | Michael Pizzo   | Non-material    |
| Standard 02     |                 |                 | changes         |
|                 |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+

┬á
:::
