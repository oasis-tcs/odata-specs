
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# OData Extension for Temporal Data Version 4.0

## Committee Specification Draft 04

## 25 January 2022

$\hbox{}$

#### This stage:
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/odata-temporal-ext-v4.0-csd04.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/odata-temporal-ext-v4.0-csd04.html \
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/odata-temporal-ext-v4.0-csd04.pdf

#### Previous stage:
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.docx (Authoritative) \
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html \
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.pdf


#### Latest stage:
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/odata-temporal-ext-v4.0.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/odata-temporal-ext-v4.0.html \
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/odata-temporal-ext-v4.0.pdf

#### Technical Committee:
[OASIS Open Data Protocol (OData) TC](https://www.oasis-open.org/committees/odata/)

#### Chairs:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/)

#### Editors:

Ralf Handl (ralf.handl@sap.com), [SAP SE](https://www.sap.com/) \
Hubert Heijkers (hubert.heijkers@nl.ibm.com), [IBM](https://www.ibm.com/) \
Gerald Krause (gerald.krause@sap.com), [SAP SE](https://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](https://www.microsoft.com/) \
Heiko Theißen (heiko.theissen@sap.com), [SAP SE](https://www.sap.com/) \
Martin Zurmuehl (martin.zurmuehl@sap.com), [SAP SE](https://www.sap.com/)

#### <a name="AdditionalArtifacts">Additional artifacts:</a>
This document is one component of a Work Product that also includes:
* ABNF components: _OData Temporal ABNF Construction Rules Version 4.0 and OData Temporal ABNF Test Cases_: https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/abnf/
* OData Temporal Vocabulary:
  * https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/vocabularies/Org.OData.Temporal.V1.json
  * https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/vocabularies/Org.OData.Temporal.V1.xml

#### <a name="RelatedWork">Related work:</a>
This specification is related to:
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html
  * _ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases_. https://docs.oasis-open.org/odata/odata/v4.0/csd04/abnf/
* _OData Vocabularies Version 4.0_. Edited by Michael Pizzo, Ralf Handl, and Ram Jeyaraman. Latest stage: https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.0/odata-csdl-json-v4.0.html
* _OData Common Schema Definition Language (CSDL) XML Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-xml/v4.0/odata-csdl-xml-v4.0.html
* _OData JSON Format Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.html
* _OData Data Aggregation Extension Version 4.0_. Edited by Ralf Handl, Hubert Heijkers, Gerald Krause, Michael Pizzo, Heiko Theißen, and Martin Zurmuehl. Latest stage: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html

#### Abstract:
This specification defines how to represent and interact with time-dependent data using the Open Data Protocol (OData).

#### Status:
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata#technical.

TC members should send comments on this specification to the TC's email list. Others should send comments to the TC's public comment list, after subscribing to it by following the instructions at the "[Send A Comment](https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=odata)" button on the TC's web page at https://www.oasis-open.org/committees/odata/.

This specification is provided under the [RF on RAND Terms Mode](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

#### Key words:
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC2119](#rfc2119) and [RFC8174](#rfc8174) when, and only when, they appear in all capitals, as shown here.

#### Citation format:
When referencing this specification the following citation format should be used:

**[OData-Temporal-v4.0]**

_OData Extension for Temporal Data Version 4.0_.
Edited by Ralf Handl, Hubert Heijkers, Gerald Krause, Michael Pizzo, Heiko Theißen, and Martin Zurmuehl. 25 January 2022. OASIS Committee Specification Draft 04.
https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/odata-temporal-ext-v4.0-csd04.html.
Latest stage: https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/odata-temporal-ext-v4.0.html.

#### Notices
Copyright © OASIS Open 2022. All Rights Reserved.

Distributed under the terms of the OASIS [IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/).

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs.

For complete copyright information please see the full Notices section in an Appendix [below](#Notices).

-------

# Table of Contents

::: toc
- [1 Introduction](#Introduction)
  - [1.1 Changes from Earlier Versions](#ChangesfromEarlierVersions)
  - [1.2 Glossary](#Glossary)
    - [1.2.1 Definitions of Terms](#DefinitionsofTerms)
      - [1.2.1.1 Application Time](#ApplicationTime)
      - [1.2.1.2 System Time](#SystemTime)
      - [1.2.1.3 Temporal Object](#TemporalObject)
      - [1.2.1.4 Time Slice](#TimeSlice)
        - [1.2.1.4.1 Closed-Open Semantics](#ClosedOpenSemantics)
        - [1.2.1.4.2 Closed-Closed Semantics](#ClosedClosedSemantics)
        - [1.2.1.4.3 Snapshot Entity Set](#SnapshotEntitySet)
      - [1.2.1.5 Timeline Entity Set](#TimelineEntitySet)
    - [1.2.2 Document Conventions](#DocumentConventions)
- [2 Overview](#Overview)
- [A References](#References)
  - [A.1 Normative References](#NormativeReferences)
  - [A.2 Informative References](#InformativeReferences)
- [B Acknowledgments](#Acknowledgments)
  - [B.1 Special Thanks](#SpecialThanks)
  - [B.2 Participants](#Participants)
- [C Revision History](#RevisionHistory)
- [D Notices](#Notices)
:::

-------

# <a name="Introduction" href="#Introduction">1 Introduction</a>

This specification adds the notion of time-dependency to the Open Data
Protocol (OData) without changing any of the base principles of OData.
It defines semantics and a representation for temporal data, especially:

-   Semantics and operations for querying and modifying temporal data,
-   Vocabulary terms to annotate which data depends on time, and how.

## <a name="ChangesfromEarlierVersions" href="#ChangesfromEarlierVersions">1.1 Changes from Earlier Versions</a>

<!-- TODO -->
<!-- Describe significant changes from previous differently-numbered Versions, not changes between stages of the current Version -->

## <a name="Glossary" href="#Glossary">1.2 Glossary</a>

### <a name="DefinitionsofTerms" href="#DefinitionsofTerms">1.2.1 Definitions of Terms</a>

#### <a name="ApplicationTime" href="#ApplicationTime">1.2.1.1 Application Time</a>

Application time is used to describe data that is known to change over
time, for example the budget of a department, or which department an
employee works for. Application time may capture planned changes in the
future, for example transferring an employee to a new department next
month or capturing next year's budget for a department. Both future and
past data can be changed.

#### <a name="SystemTime" href="#SystemTime">1.2.1.2 System Time</a>

System time is used to record when data became known by the "system of
record". System time does not extend into the future, and record entries
are only added and are never changed.

System time is never manipulated directly, and typically not visible in
APIs, except for "last changed at" time stamps, and the corresponding
properties are read-only.

As system time is typically not visible in APIs, we do not consider this
in the remainder of this document.

#### <a name="TemporalObject" href="#TemporalObject">1.2.1.3 Temporal Object</a>

A temporal object is a set of data whose change over time is tracked by
the service as a sequence of [time slices](#TimeSlice).

#### <a name="TimeSlice" href="#TimeSlice">1.2.1.4 Time Slice</a>

A piece of temporal data with attached time period, documenting that the
data did not change during this time period.

Time slices for the same [temporal object](#TemporalObject)
are non-overlapping, so for any given point in time there is at most one
slice whose time period contains that point in time.

Time slices for a temporal object need not cover the complete timeline.
There can be points in time for which no time slice exists, indicating
that the object's values are not known to the service.

##### <a name="ClosedOpenSemantics" href="#ClosedOpenSemantics">1.2.1.4.1 Closed-Open Semantics</a>

Time slices typically use closed-open semantics, following **[[SQL:2011]](#SQL)**.
This means the start is part of the period, the end is not part of the
period, and for directly adjacent time slices the end of the earlier
time slice is identical to the start of the next time slice. The period
start must be less than the period end.

##### <a name="ClosedClosedSemantics" href="#ClosedClosedSemantics">1.2.1.4.2 Closed-Closed Semantics</a>

Some software systems predating the availability of temporal databases
and with data type *date* for the application-time period start and end
use closed-closed semantics. Temporal services on top of these systems
can either convert their period end boundaries on-the-fly by adding one
day on the way out and subtracting one day on the way in, or
alternatively express the used time slice semantics via
[annotations](#VocabularyforTemporalData).

#### <a name="SnapshotEntitySet" href="#SnapshotEntitySet">1.2.1.4.3 Snapshot Entity Set</a>

An entity in a snapshot entity set represents a [temporal object](#TemporalObject)
at a specified point in time. When the entity is addressed via a
resource path (directly or via related resources), the point in time
must be specified, see section "[Propagation of Temporal Query Options](#PropagationofTemporalQueryOptions)"
for details on how to determine this point in time.

The entity's id and its canonical URL are independent of this point in
time. Hence, they are sufficient to _reference_ the
entity but not _address_ it. In other words: the entity
can be considered a function that maps each point in time to an instance
of the entity type. That function can be _referenced_
but only its values can be _addressed_.

Without a point in time, statements about individual structural or
navigation properties of the entity or even about its existence cannot
be made, and [change tracking](#RequestingChangestoTemporalData)
is not possible.

Snapshot entity sets MUST be [annotated](#VocabularyforTemporalData)
with a `Timeline` of type `TimelineSnapshot`.

#### <a name="TimelineEntitySet" href="#TimelineEntitySet">1.2.1.5 Timeline Entity Set</a>

An entity in a timeline entity set represents one [time slice](#TimeSlice)
of a [temporal object](#TemporalObject),
and all time slices of that temporal object are part of the entity set.

The entity's id and its canonical URL depend on the period of
application time of the corresponding time slice.
_Referencing_ and _addressing_ the
entity are equivalent concepts, unlike in the snapshot case.

The response to a time-range request need not reflect the time-slice cut
of the underlying data model.

Services MAY condense/defragment adjacent time slices that do not differ
in represented properties other than the period boundaries. This reduces
the payload size, and it also avoids potential information leakage if
the service only publishes a projection of the underlying data model.

Services MAY also split time slices to align their boundaries with
nested expanded time slices to represent a "coarsest common slicing"
across an expand tree.

Timeline entity sets MUST be [annotated](#VocabularyforTemporalData)
with a `Timeline` of type `TimelineVisible`.

### <a name="DocumentConventions" href="#DocumentConventions">1.2.2 Document Conventions</a>

Keywords defined by this specification use `this  monospaced  font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example 1: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only.

All other text is normative unless otherwise labeled.

::: example
Here is a customized command line which will generate HTML from this markdown file (named `odata-temporal-ext-v4.0-csd04.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs
       -t html
       -o odata-temporal-ext-v4.0-csd04.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --wrap=none
       --metadata pagetitle="OData Extension for Temporal Data Version 4.0"
       odata-temporal-ext-v4.0-csd04.md
```

This uses pandoc 3.1.2 from https://github.com/jgm/pandoc/releases/tag/3.1.2.
:::

-------

# <a name="Overview" href="#Overview">2 Overview</a>

When keeping track of time, the most important questions are:
- When did or will something happen?
- When did we learn that it happened?

This leads to two "directions" or "dimensions" of time (measured as a
date or date-plus-time value):
- [Application time](#ApplicationTime), also called actual time,
  business time, effective time, or valid time, and
- [System time](#SystemTime), also called recording time, audit time,
  or transaction time.

Keeping track of time is typically done by storing data together with
the time period for which that data is deemed valid or effective, using
separate periods for application time and system time, and the time
periods are part of the logical key for "records". See
**[[SQL:2011]](#SQL)**
or
**[[Kulkarni]](#Kulkarni)**
on how this is done in the SQL standard.

A consumer's perspective on this data can be different: even if time is
tracked internally, the period of time may or may not be visible in a
consumer's perspective, and even if visible the related properties are
often not considered part of an entity's identity. For example, an
employee is still the same person even after switching to another
department.

The goals of this extension are:
- Keep the API models as simple as possible by allowing to hide time-dependency,
- Provide easy means for [point-in-time queries](#QueryOptionat)
even if time-dependency is hidden,
- Provide easy means for [time-range queries](#QueryOptionsfromtoandtoInclusive)
if time-dependency is visible, and
- Provide easy means for modifying time-dependent data.

-------

# <a name="References" href="#References">Appendix A. References</a>

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## <a name="NormativeReferences" href="#NormativeReferences">A.1 Normative References</a>

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

###### <a name="rfc2119">[RFC2119]</a>
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_  
https://www.rfc-editor.org/info/rfc2119.

###### <a name="rfc8174">[RFC8174]</a>
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_  
https://www.rfc-editor.org/info/rfc8174.

## <a name="InformativeReferences" href="#InformativeReferences">A.2 Informative References</a> 
###### <a name="Fowler">[Fowler]</a>
_Martin Fowler, "Temporal Patterns", 16 February 2005_  
http://martinfowler.com/eaaDev/timeNarrative.html.

###### <a name="Kulkarni">[Kulkarni]</a>
_Krishna Kulkarni, "Temporal Features in SQL standard", September 2012_  
https://dbs.uni-leipzig.de/file/Temporal%20features%20in%20SQL2011.pdf.

###### <a name="Snodgrass">[FowSnodgrassler]</a>
_Richard T. Snodgrass, "Developing Time-Oriented Database Applications in SQL", Morgan Kaufmann Publishers, Inc., San Francisco, July, 1999, ISBN 1-55860-436-7_  
http://www2.cs.arizona.edu/people/rts/tdbbook.pdf and
http://www2.cs.arizona.edu/people/rts/pp30-31.pdf.

###### <a name="SQL">[SQL:2011]</a>
_ISO/IEC 9075-2:2011 Information technology - Database languages - SQL - Part 2: Foundation (SQL/Foundation)_.

-------

# <a name="Acknowledgments" href="#Acknowledgments">Appendix B. Acknowledgments</a>

## <a name="SpecialThanks" href="#SpecialThanks">B.1 Special Thanks</a>

The contributions of the OASIS OData Technical Committee members, enumerated in [OData-Protocol](#ODataProtocol) are gratefully acknowledged.

Special thanks to Andrew Eisenberg, whose contributions in the early stages of the OData TC were invaluable to getting this extension specification on track.

## <a name="Participants" href="#Participants">B.2 Participants</a>

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

# <a name="RevisionHistory" href="#RevisionHistory">Appendix C. Revision History</a>

| Revision | Date | Editor | Changes Made |
| :--- | :--- | :--- | :--- |
| Working Draft 01                 | 2013-09-05 | Ralf Handl | Initial working draft |
| Committee Specification Draft 01 | 2021-07-22 | Ralf Handl<br>Hubert Heijkers<br> Gerald Krause<br> Michael Pizzo<br> Heiko Theißen<br> Martin Zurmuehl | Timeline entity sets for manipulating time slices<br> Snapshot entity sets for hiding application-time dependency<br> Modification during a period via actions<br> Closed-closed application time |
| Committee Specification Draft 02 | 2021-10-15 |Ralf Handl | Example model with object key<br> Example for Update action on snapshot entity set<br> Example for Upsert action with object key<br> Semantics of omitting upper period boundaries in action parameters |
| Committee Specification Draft 03 | 2021-12-02 |Ralf Handl | Removed the “stop on change” actions<br> Minor clarifications |
| Committee Specification 01       | 2022-01-07 |Ralf Handl | Non-material changes |

-------

# <a name="Notices" href="#Notices">Appendix D. Notices</a>

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

