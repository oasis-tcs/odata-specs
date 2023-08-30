
-------

# Appendix ##asec References

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## ##subasec Normative References

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

###### <a name="ODataABNF">[OData-ABNF]</a>
_ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataAggregation">[OData-Aggregation]</a>
_OData Extension for Data Aggregation Version 4.0._  
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

###### <a name="ODataVocTemporal">[OData-VocTemporal]</a>
_OData Temporal Vocabulary._  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

###### <a name="rfc2119">[RFC2119]</a>
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_  
https://www.rfc-editor.org/info/rfc2119.

###### <a name="rfc8174">[RFC8174]</a>
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_  
https://www.rfc-editor.org/info/rfc8174.

## ##subasec Informative References 

###### <a name="Fowler">[Fowler]</a>
_Martin Fowler, "Temporal Patterns", 16 February 2005_  
http://martinfowler.com/eaaDev/timeNarrative.html.

###### <a name="Kulkarni">[Kulkarni]</a>
_Krishna Kulkarni, "Temporal Features in SQL standard", September 2012_  
https://dbs.uni-leipzig.de/file/Temporal%20features%20in%20SQL2011.pdf.

###### <a name="Snodgrass">[Snodgrass]</a>
_Richard T. Snodgrass, "Developing Time-Oriented Database Applications in SQL", Morgan Kaufmann Publishers, Inc., San Francisco, July, 1999, ISBN 1-55860-436-7_  
http://www2.cs.arizona.edu/people/rts/tdbbook.pdf and
http://www2.cs.arizona.edu/people/rts/pp30-31.pdf.

###### <a name="SQL">[SQL:2011]</a>
_ISO/IEC 9075-2:2011 Information technology - Database languages - SQL - Part 2: Foundation (SQL/Foundation)_.

-------

# Appendix ##asec Acknowledgments

## ##subasec Special Thanks

The contributions of the OASIS OData Technical Committee members, enumerated in [OData-Protocol](#ODataProtocol) are gratefully acknowledged.

Special thanks to Andrew Eisenberg, whose contributions in the early stages of the OData TC were invaluable to getting this extension specification on track.

## ##subasec Participants

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
| Martin | Zurmuehl | SAP SE |

-------

# Appendix ##asec Revision History

| Revision | Date | Editor | Changes Made |
| :--- | :--- | :--- | :--- |
| Working Draft 01                 | 2013-09-05 | Ralf Handl | Initial working draft |
| Committee Specification Draft 01 | 2021-07-22 | Ralf Handl<br>Hubert Heijkers<br> 
Gerald Krause<br> 
Michael Pizzo<br> 
Heiko Theißen<br> 
Martin Zurmuehl | Timeline entity sets for manipulating time slices<br> 
Snapshot entity sets for hiding application-time dependency<br> 
Modification during a period via actions<br> 
Closed-closed application time |
| Committee Specification Draft 02 | 2021-10-15 |Ralf Handl | Example model with object key<br> 
Example for Update action on snapshot entity set<br> 
Example for Upsert action with object key<br> 
Semantics of omitting upper period boundaries in action parameters |
| Committee Specification Draft 03 | 2021-12-02 |Ralf Handl | Removed the “stop on change” actions<br> 
Minor clarifications |
| Committee Specification 01       | 2022-01-07 |Ralf Handl | Non-material changes |

-------

# Appendix ##asec Notices

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
