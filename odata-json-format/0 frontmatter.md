
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# $$$pagetitle$$$

## $$$subtitle$$$

## $$$pubdate$$$

$\hbox{}$

#### This stage:
https://docs.oasis-open.org/odata/odata-json-format/v4.02/$$$stage$$$/$$$filename$$$.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-json-format/v4.02/$$$stage$$$/$$$filename$$$.html \
https://docs.oasis-open.org/odata/odata-json-format/v4.02/$$$stage$$$/$$$filename$$$.pdf

#### Previous stage:
https://docs.oasis-open.org/odata/odata-json-format/v4.02/$$$previousStage$$$/odata-json-format-v4.02-$$$previousStage$$$.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-json-format/v4.02/$$$previousStage$$$/odata-json-format-v4.02-$$$previousStage$$$.html \
https://docs.oasis-open.org/odata/odata-json-format/v4.02/$$$previousStage$$$/odata-json-format-v4.02-$$$previousStage$$$.pdf

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

#### [Related work:]{id=RelatedWork}
This specification replaces or supersedes:
* OData JSON Format Version 4.01. Edited by Michael Pizzo, Ralf Handl, and Mark Biamonte. OASIS Standard. Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html.
* OData JSON Format Version 4.0. Edited by Ralf Handl, Michael Pizzo, and Mark Biamonte. OASIS Standard. Latest stage: http://docs.oasis-open.org/odata/odata-json-format/v4.0/odata-json-format-v4.0.html.

This specification is related to:
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html
  * _ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases_. https://docs.oasis-open.org/odata/odata/v4.02/$$$stage$$$/abnf/
* _OData Vocabularies Version 4.0_. Edited by Michael Pizzo, Ralf Handl, and Ram Jeyaraman. Latest stage: https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.html
* _OData Common Schema Definition Language (CSDL) XML Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/odata-csdl-xml-v4.02.html

#### Abstract:
$$$description$$$

#### Status:
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://groups.oasis-open.org/communities/tc-community-home2?CommunityKey=e7cac2a9-2d18-4640-b94d-018dc7d3f0e2#technical.

TC members should send comments on this specification to the TC's email list. Any individual may submit comments to the TC by sending email to Technical-Committee-Comments@oasis-open.org. Please use a Subject line like "Comment on OData JSON Format".

This specification is provided under the [RF on RAND Terms Mode](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

#### Key words:
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC2119](#rfc2119) and [RFC8174](#rfc8174) when, and only when, they appear in all capitals, as shown here.

#### Citation format:
When referencing this specification the following citation format should be used:

**[OData-JSON-Format-v4.02]**

_$$$pagetitle$$$_.
Edited by Ralf Handl, Michael Pizzo, and Heiko Theißen. $$$pubdate$$$. OASIS $$$subtitle$$$.
https://docs.oasis-open.org/odata/odata-json-format/v4.02/$$$stage$$$/$$$filename$$$.html.
Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.html.

#### Notices
Copyright $$$copyright$$$. All Rights Reserved.

Distributed under the terms of the OASIS [IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/).

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs.

For complete copyright information please see the full Notices section in an Appendix [below](#Notices).

-------
