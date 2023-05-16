## Committee Specification Draft 04

## 16 May 2023

**This stage:**  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.md (Authoritative)  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.html  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.pdf

**Previous stage:**  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/odata-data-aggregation-ext-v4.0-cs02.docx (Authoritative)  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/odata-data-aggregation-ext-v4.0-cs02.html  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/odata-data-aggregation-ext-v4.0-cs02.pdf

**Latest stage:**  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.md (Authoritative)  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.pdf

**Technical Committee:**  
[OASIS Open Data Protocol (OData) TC](https://www.oasis-open.org/committees/odata/)

**Chairs:**  
Ralf Handl (ralf.handl@sap.com), [SAP SE](https://www.sap.com)  
Michael Pizzo (mikep@microsoft.com), [Microsoft](https://www.microsoft.com)

**Editors:**  
Ralf Handl (ralf.handl@sap.com), [SAP SE](https://www.sap.com)  
Hubert Heijkers (hubert.heijkers@nl.ibm.com), [IBM](https://www.ibm.com)  
Michael Pizzo (mikep@microsoft.com), [Microsoft](https://www.microsoft.com)  
Gerald Krause (gerald.krause@sap.com), [SAP SE](https://www.sap.com)  
Heiko Theißen (heiko.theissen@sap.com), [SAP SE](https://www.sap.com)  
Martin Zurmuehl (martin.zurmuehl@sap.com), [SAP SE](https://www.sap.com)

<a name="AdditionalArtifacts">**Additional artifacts:**</a>  
This document is one component of a Work Product that also includes:
- OData Aggregation ABNF Construction Rules Version 4.0: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/abnf/odata-aggregation-abnf.txt
- OData Aggregation ABNF Test Cases: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/abnf/odata-aggregation-testcases.xml
- OData Core Vocabulary: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/vocabularies/Org.OData.Core.V1.xml
- OData Aggregation Vocabulary: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/vocabularies/Org.OData.Aggregation.V1.xml

<a name="RelatedWork">**Related work:**</a>  
This document is related to:
- OData Version 4.01. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. A multi-part Work Product which includes:
  - OData Version 4.01. Part 1: Protocol. Latest stage: https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html.
  - OData Version 4.01. Part 2: URL Conventions. Latest stage: https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html.
  - ABNF components: OData ABNF Construction Rules Version 4.01 and OData ABNF Test Cases. https://docs.oasis-open.org/odata/odata/v4.01/os/abnf/.
- OData Vocabularies Version 4.0. Edited by Michael Pizzo, Ralf Handl, and Ram Jeyaraman. Latest stage: http://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html.
- OData Common Schema Definition Language (CSDL) JSON Representation Version 4.01. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html.
- OData Common Schema Definition Language (CSDL) XML Representation Version 4.01. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html.
- OData JSON Format Version 4.01. Edited by Michael Pizzo, Ralf Handl, and Mark Biamonte. Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html.

**Abstract:**  
This specification adds basic grouping and aggregation functionality (such as sum, min, and max) to the Open Data Protocol (OData) without changing any of the base principles of OData.

**Status:**  
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata#technical.

TC members should send comments on this document to the TC's email list. Others should send comments to the TC's public comment list, after subscribing to it by following the instructions at the "[Send A Comment](https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=odata)" button on the TC's web page at https://www.oasis-open.org/committees/odata/.

This specification is provided under the [RF on RAND Terms](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) Mode of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

**Key words:**  
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC2119](#RFC2119) and [RFC8174](#RFC8174) when, and only when, they appear in all capitals, as shown here.

**Citation format:**  
When referencing this document, the following citation format should be used:

**[OData-Data-Agg-v4.0]**  
OData Extension for Data Aggregation Version 4.0. Edited by Ralf Handl, Hubert Heijkers, Gerald Krause, Michael Pizzo, Heiko Theißen, and Martin Zurmuehl. 20 May 2022. OASIS Committee Specification Draft 04. https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.html. Latest stage: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html.

**Notices:**  
Copyright © OASIS Open 2022. All Rights Reserved.

Distributed under the terms of the OASIS IPR Policy, [https://www.oasis-open.org/policies-guidelines/ipr/]. For complete copyright information please see the full Notices section in an Appendix below.
