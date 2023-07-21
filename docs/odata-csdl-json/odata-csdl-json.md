
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02

## Committee Specification Draft 01

## 14 July 2023

&nbsp;

#### This stage:
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-json-v4.02-csd01.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-json-v4.02-csd01.html \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-json-v4.02-csd01.pdf

#### Previous stage:
N/A

#### Latest stage:
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.html \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.pdf

#### Technical Committee:
[OASIS Open Data Protocol (OData) TC](https://www.oasis-open.org/committees/odata/)

#### Chairs:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/)

#### Editors:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/) \
Heiko Theißen (heiko.theissen@sap.com), [SAP SE](http://www.sap.com/)

#### Additional artifacts:
This prose specification is one component of a Work Product that also includes:
* XML schemas: (list file names or directory name)
* Other parts (list titles and/or file names)
* `(Note: Any normative computer language definitions that are part of the Work Product, such as XML instances, schemas and Java(TM) code, including fragments of such, must be (a) well formed and valid, (b) provided in separate plain text files, (c) referenced from the Work Product; and (d) where any definition in these separate files disagrees with the definition found in the specification, the definition in the separate file prevails. Remove this note before submitting for publication.)`

#### Related work:
This specification replaces or supersedes:
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.01_. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. OASIS Standard. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html.

This specification is related to:
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html

#### Abstract:
OData services are described by an Entity Model (EDM). The Common Schema Definition Language (CSDL) defines specific representations of the entity data model exposed by an OData service, using XML, JSON, and other formats. This document (OData CSDL JSON Representation) specifically defines the JSON representation of CSDL.

#### Status:
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata#technical.

TC members should send comments on this specification to the TC's email list. Others should send comments to the TC's public comment list, after subscribing to it by following the instructions at the "[Send A Comment](https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=odata)" button on the TC's web page at https://www.oasis-open.org/committees/odata/.

This specification is provided under the [RF on RAND Terms Mode](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

#### Key words:
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [[RFC2119](#rfc2119)] and [[RFC8174](#rfc8174)] when, and only when, they appear in all capitals, as shown here.

#### Citation format:
When referencing this specification the following citation format should be used:

**[OData-CSDL-JSON-v4.02]**

_OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02_.
Edited by Ralf Handl, Michael Pizzo, and Heiko Theißen. 14 July 2023. OASIS Committee Specification Draft 01.
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-json-v4.02-csd01.html.
Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.html.

#### Notices
Copyright &copy; OASIS Open 2023. All Rights Reserved.

Distributed under the terms of the OASIS [IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/).

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs.

For complete copyright information please see the full Notices section in an Appendix below.

-------

# Table of Contents
[TOC will be inserted here]

-------

# 1 Introduction

<!-- All text is normative unless otherwise labeled -->

Here is a customized command line which will generate HTML from this markdown file (named odata-csdl-json-v4.02-csd01.md):

pandoc -f gfm -t html odata-csdl-json-v4.02-csd01.md -c styles/markdown-styles-v1.7.3b.css --toc --toc-depth=5 -s -o odata-csdl-json-v4.02-csd01.html --metadata title="OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02"

Generating HTML in OASIS style requires a reference to a .css file containing the HTML styles. The .css file may be either included with the markdown file (like styles/markdown-styles-v1.7.3b.css) or a reference to one of the online stylesheets:
- https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3.css
- https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3a.css (this one produces HTML that resembles the github display more closely, especially for blocks of code)

Note this command generates a Table of Contents (TOC) in HTML which is located at the top of the HTML document, and which requires additional editing in order to be published in the expected OASIS style. This editing can be handled by OASIS staff during publication.
A TC may use other ways to generate HTML from markdown, which may generate a TOC in a different way.

## 1.1 Changes from earlier Versions

<!-- Optional section -->
<!-- Describe significant changes from previous differently-numbered Versions, not changes between stages of the current Version -->
## 1.2 Glossary

<!-- Optional section with suggested subsections -->

### 1.2.1 Definitions of terms

### 1.2.2 Acronyms and abbreviations

### 1.2.3 Document conventions

- Naming conventions
- Font colors and styles
- Typographic conventions

## 1.3 Some markdown usage examples

**Text.**

Note that text paragraphs in markdown should be separated by a blank line between them -

Otherwise the separate paragraphs will be joined together when the HTML is generated.
Even if the text appears to be separate lines in the markdown source.

To avoid having the usual vertical space between paragraphs,  
append two or more space characters (or space-backslash) to the end of the lines  
which will generate an HTML break tag instead of a new paragraph tag \
(as demonstrated here).

### 1.3.1 Figures and Captions

FIGURE EXAMPLE:
<note caption is best placed ABOVE figure, so a hyperlink to it will actually display the figure, instead of rendering the figure off the screen above the caption. The same placement should be used for table captions>

###### Figure 1 -- Title of Figure
![image-label should be meaningful](images/image_0.png) (this image is missing)

###### Figure 2 -- OpenC2 Message Exchange
![message exchange](images/image_1.png)


### 1.3.2 Tables

#### 1.3.2.1 Basic Table
**Table 1-1. Table Label**

| Item | Description |
| :--- | :--- |
| Item 1 | Something<br>(second line) |
| Item 2 | Something |
| Item 3 | Something<br>(second line) |
| Item 4 | text |

#### 1.3.2.2 Table with Three Columns and Some Bold Text
text.

| Title 1 | Title 2 | title 3 |
| :--- | :--- | :--- |
| something | something | something else that is a long string of text that **might** need to wrap around inside the table box and will just continue until the column divider is reached |
| something | something | something |

#### 1.3.2.3 Table with a caption which can be referenced

###### Table 1-5. See reference label construction

<table caption uses six ####### to become a linkable element; positioned above table so table is readable after jumping to it> 
| Name | Description |
| :--- | :--- |
| **content** | Message body as specified by content_type and msg_type. |

Here is a reference to the table caption:
Please see [Table 1-5 or other meaningful label](#table-1-5-see-reference-label-construction) 

### 1.3.3 Lists

Bulleted list:
* bullet item 1.
* **Bold** bullet item 2.
* bullet item 3.
* bullet item 4.

Indented or multi-level bullet list - add two spaces per level before bullet character (* or -):
* main bullet type
  * Example second bullet
    * See third level
      * fourth level

Numbered list:
1. item 1
2. item 2
3. item 3

Left-justified list without bullets or numbers:
To list multiple items without full paragraph breaks between items, add space-backslash after each item except the last.

### 1.3.4 Reference Label Construction

REFERENCES and ANCHORS
- in markdown source, format the Reference tags as level 6 headings like: `###### [RFC2119]`
###### [RFC2119]
Bradner, S., "Key words ..."

- reference text has to be on a separate line below the tag

- format cross-references (citations of the references) like: `see [[RFC2119](#rfc2119)]`  
"see [[RFC2119](#rfc2119)]"  
(note the outer square brackets in markdown will appear in the visible HTML text)

- The text in the Reference tag (following ###### ) will become an HTML anchor using the following conversion rules:  
  - punctuation marks will be dropped (including "[" )  
  - leading white spaces will be dropped  
  - upper case will be converted to lower  
  - spaces between letters will be converted to a single hyphen

- The same HTML anchor construction rules apply to cross-references and to section headings.  
  - Thus, a section heading like "## 1.2 Glossary"  
  - becomes an anchor in HTML like `<a href="#12-glossary">`  
  - referenced in the markdown like: see [Section 1.2](#12-glossary)  
  - in markdown: `"see [Section 1.2](#12-glossary)"`  
  - similar HTML anchors are also used in constructing the TOC

### 1.3.5 Code Blocks

Text to appear as an indented code block with grey background and monospace font - use three back-ticks before and after the code block.

Note the actual backticks will not appear in the HTML format. If it's necessary to display visible backticks, place a back-slash before them like: \``` .

```
{   
    "target": {
        "x_kmip_2.0": {
            {"kmip_type": "json"},
            {"operation": "RekeyKeyPair"},
            {"name": "publicWebKey11DEC2017"}
        }
    }
}
```

Text to be highlighted as code can also be surrounded by a single "backtick" character: `code text`

### 1.3.6 Blockquotes

To create a blockquote, start a line with greater than (>) followed by an optional space.

Blockquotes can be nested, and can also contain other formatting.

The stylesheet https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3a.css results in an indented block with a left-side bar.

## 1.4 Page Breaks
Add horizontal rule lines where page breaks are desired in the PDF - before each major section
- insert the line rules in markdown by inserting 3 or more hyphens on a line by themselves:  ---
- place these before each main section in markdown (usually "#" - which generates the HTML `<h1>` tag)

-------

# 2 Section Heading
text.

## 2.1 Level 2 Heading
text.

### 2.1.1 Level 3 Heading
text.

#### 2.1.1.1 Level 4 Heading
text.

##### 2.1.1.1.1 Level 5 Heading
This is the deepest level, because six # gets transformed into a Reference tag.


## 2.2 Next Heading
text.

-------

# 3 Conformance
<!-- Required section -->

`(Note: The [OASIS TC Process](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsConfClause) requires that a specification approved by the TC at the Committee Specification Public Review Draft, Committee Specification or OASIS Standard level must include a separate section, listing a set of numbered conformance clauses, to which any implementation of the specification must adhere in order to claim conformance to the specification (or any optional portion thereof). This is done by listing the conformance clauses here.`
`For the definition of "conformance clause," see [OASIS Defined Terms](https://www.oasis-open.org/policies-guidelines/oasis-defined-terms-2018-05-22/#dConformanceClause).`

`See "Guidelines to Writing Conformance Clauses":  
https://docs.oasis-open.org/templates/TCHandbook/ConformanceGuidelines.html.`

`Remove this note before submitting for publication.)`


-------

# Appendix A. References

<!-- Required section -->

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## A.1 Normative References

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

`(Reference sources:
For references to IETF RFCs, use the approved citation formats at:  
https://docs.oasis-open.org/templates/ietf-rfc-list/ietf-rfc-list.html.  
For references to W3C Recommendations, use the approved citation formats at:  
https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendations-list.html.  
Remove this note before submitting for publication.)`

###### [OData-v4.02]
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html
##### [RFC2119]
Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997, http://www.rfc-editor.org/info/rfc2119.
###### [RFC8174]
Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017, http://www.rfc-editor.org/info/rfc8174.

## A.2 Informative References

###### [RFC3552]
Rescorla, E. and B. Korver, "Guidelines for Writing RFC Text on Security Considerations", BCP 72, RFC 3552, DOI 10.17487/RFC3552, July 2003, https://www.rfc-editor.org/info/rfc3552.

-------

# Appendix B. Safety, Security and Privacy Considerations

<!-- Optional section -->

`(Note: OASIS strongly recommends that Technical Committees consider issues that might affect safety, security, privacy, and/or data protection in implementations of their specification and document them for implementers and adopters. For some purposes, you may find it required, e.g. if you apply for IANA registration.`

`While it may not be immediately obvious how your specification might make systems vulnerable to attack, most specifications, because they involve communications between systems, message formats, or system settings, open potential channels for exploit. For example, IETF [[RFC3552](#rfc3552)] lists “eavesdropping, replay, message insertion, deletion, modification, and man-in-the-middle” as well as potential denial of service attacks as threats that must be considered and, if appropriate, addressed in IETF RFCs.`

`In addition to considering and describing foreseeable risks, this section should include guidance on how implementers and adopters can protect against these risks.`

`We encourage editors and TC members concerned with this subject to read _Guidelines for Writing RFC Text on Security Considerations_, IETF [[RFC3552](#rfc3552)], for more information.`

`Remove this note before submitting for publication.)`

-------

# Appendix C. Acknowledgments

<!-- Required section -->

`Note: A Work Product approved by the TC must include a list of people who participated in the development of the Work Product. This is generally done by collecting the list of names in this appendix. This list shall be initially compiled by the Chair, and any Member of the TC may add or remove their names from the list by request. Remove this note before submitting for publication.`

## C.1 Special Thanks

<!-- This is an optional subsection to call out contributions from TC members. If a TC wants to thank non-TC members then they should avoid using the term "contribution" and instead thank them for their "expertise" or "assistance". -->

Substantial contributions to this document from the following individuals are gratefully acknowledged:

Participant Name, Affiliation or "Individual Member"

## C.2 Participants

<!-- A TC can determine who they list here, however, TC Observers must not be listed. It is common practice for TCs to list everyone that was part of the TC during the creation of the document, but this is ultimately a TC decision on who they want to list and not list, and in what order. -->

The following individuals have participated in the creation of this specification and are gratefully acknowledged:

**OpenC2 TC Members:**

| First Name | Last Name | Company |
| :--- | :--- | :--- |
Philippe | Alman | Something Networks
Alex | Amirnovman | Company B
Kris | Anderman | Mini Micro
Darren | Anstman | Big Networks

-------

# Appendix D. Revision History

<!-- Optional section -->

| Revision | Date | Editor | Changes Made |
| :--- | :--- | :--- | :--- |
| specname-v1.0-wd01 | yyyy-mm-dd | Editor Name | Initial working draft |

-------

# Appendix E. Example Appendix with subsections

## E.1 Subsection title

### E.1.1 Sub-subsection

-------

# Appendix F. Notices

<!-- Required section. Do not modify. -->

Copyright &copy; OASIS Open 2023. All Rights Reserved.

All capitalized terms in the following text have the meanings assigned to them in the OASIS Intellectual Property Rights Policy (the "OASIS IPR Policy"). The full [Policy](https://www.oasis-open.org/policies-guidelines/ipr/) may be found at the OASIS website.

This document and translations of it may be copied and furnished to others, and derivative works that comment on or otherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part, without restriction of any kind, provided that the above copyright notice and this section are included on all such copies and derivative works. However, this document itself may not be modified in any way, including by removing the copyright notice or references to OASIS, except as needed for the purpose of developing any document or deliverable produced by an OASIS Technical Committee (in which case the rules applicable to copyrights, as set forth in the OASIS IPR Policy, must be followed) or as required to translate it into languages other than English.

The limited permissions granted above are perpetual and will not be revoked by OASIS or its successors or assigns.

This document and the information contained herein is provided on an "AS IS" basis and OASIS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE INFORMATION HEREIN WILL NOT INFRINGE ANY OWNERSHIP RIGHTS OR ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

As stated in the OASIS IPR Policy, the following three paragraphs in brackets apply to OASIS Standards Final Deliverable documents (Committee Specification, OASIS Standard, or Approved Errata).

[OASIS requests that any OASIS Party or any other party that believes it has patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable, to notify OASIS TC Administrator and provide an indication of its willingness to grant patent licenses to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this deliverable.]

[OASIS invites any party to contact the OASIS TC Administrator if it is aware of a claim of ownership of any patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable by a patent holder that is not willing to provide a license to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this OASIS Standards Final Deliverable. OASIS may include such claims on its website, but disclaims any obligation to do so.]

[OASIS takes no position regarding the validity or scope of any intellectual property or other rights that might be claimed to pertain to the implementation or use of the technology described in this OASIS Standards Final Deliverable or the extent to which any license under such rights might or might not be available; neither does it represent that it has made any effort to identify any such rights. Information on OASIS' procedures with respect to rights in any document or deliverable produced by an OASIS Technical Committee can be found on the OASIS website. Copies of claims of rights made available for publication and any assurances of licenses to be made available, or the result of an attempt made to obtain a general license or permission for the use of such proprietary rights by implementers or users of this OASIS Standards Final Deliverable, can be obtained from the OASIS TC Administrator. OASIS makes no representation that any information or list of intellectual property rights will at any time be complete, or that any claims in such list are, in fact, Essential Claims.]

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs. OASIS welcomes reference to, and implementation and use of, specifications, while reserving the right to enforce its marks against misleading uses. Please see https://www.oasis-open.org/policies-guidelines/trademark/ for above guidance.

