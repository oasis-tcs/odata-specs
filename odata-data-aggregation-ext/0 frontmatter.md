
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# OData Extension for Data Aggregation Version 4.0

## Committee Specification Draft 04

## $$$pubdate$$$

&nbsp;

#### This stage:
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.html \
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.pdf

#### Previous stage:
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/odata-data-aggregation-ext-v4.0-cs02.docx (Authoritative) \
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/odata-data-aggregation-ext-v4.0-cs02.html \
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/odata-data-aggregation-ext-v4.0-cs02.pdf

#### Latest stage:
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html \
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.pdf

#### Technical Committee:
[OASIS Open Data Protocol (OData) TC](https://www.oasis-open.org/committees/odata/)

#### Chairs:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/)

#### Editors:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Hubert Heijkers (hubert.heijkers@nl.ibm.com), [IBM](http://www.ibm.com/) \
Gerald Krause (gerald.krause@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/) \
Heiko Theißen (heiko.theissen@sap.com), [SAP SE](http://www.sap.com/) \
Martin Zurmühl (martin.zurmuehl@sap.com), [SAP SE](http://www.sap.com/)

#### <a name="AdditionalArtifacts">Additional artifacts:</a>
This document is one component of a Work Product that also includes:
* OData Aggregation ABNF Construction Rules Version 4.0: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/abnf/odata-aggregation-abnf.txt
* OData Aggregation ABNF Test Cases: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/abnf/odata-aggregation-testcases.xml
* OData Aggregation Vocabulary: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/vocabularies/Org.OData.Aggregation.V1.xml

#### <a name="RelatedWork">Related work:</a>
This specification is related to:
* _OData Version 4.0_. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. A multi-part Work Product that includes:
  * _OData Version 4.0 Part 1: Protocol_. Latest version. http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html
  * _OData Version 4.0 Part 2: URL Conventions_. Latest version. http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html
  * _OData Version 4.0 Part 3: Common Schema Definition Language (CSDL)_. Latest version. http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part3-csdl.html
  * OData ABNF Construction Rules Version 4.0. 30 October 2014. http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/abnf/odata-abnf-construction-rules.txt
  * OData ABNF Test Cases. 30 October 2014. http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/abnf/
  * OData Core Vocabulary. 30 October 2014. http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/vocabularies/Org.OData.Core.V1.xml.
  * OData Measures Vocabulary. 30 October 2014. http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/vocabularies/Org.OData.Measures.V1.xml
* _OData JSON Format Version 4.0_. Edited by Ralf Handl, Mike Pizzo, and Mark Biamonte. Latest version. http://docs.oasis-open.org/odata/odata-json-format/v4.0/odata-json-format-v4.0.html

#### Abstract:
This specification adds basic grouping and aggregation functionality (e.g. sum, min, and max) to the Open Data Protocol (OData) without changing any of the base principles of OData.

#### Status:
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata#technical.

TC members should send comments on this specification to the TC's email list. Others should send comments to the TC's public comment list, after subscribing to it by following the instructions at the "[Send A Comment](https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=odata)" button on the TC's web page at https://www.oasis-open.org/committees/odata/.

This specification is provided under the [RF on RAND Terms Mode](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

#### Key words:
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [[RFC2119](#rfc2119)] and [[RFC8174](#rfc8174)] when, and only when, they appear in all capitals, as shown here.

#### Citation format:
When referencing this specification the following citation format should be used:

**[OData-Data-Agg-v4.0]**

_OData Extension for Data Aggregation Version 4.0_.
Edited by Ralf Handl, Hubert Heijkers, Gerald Krause, Michael Pizzo, Heiko Theißen, and Martin Zurmuehl. $$$pubdate$$$. OASIS Committee Specification Draft 01.
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.html.
Latest stage: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html.

#### Notices
Copyright $$$copyright$$$. All Rights Reserved.

Distributed under the terms of the OASIS [IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/).

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs.

For complete copyright information please see the full Notices section in an Appendix [below](#Notices).
