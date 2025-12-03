
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

#### [Additional artifacts:]{id=AdditionalArtifacts}
This document is one component of a Work Product that also includes:
* ABNF components: _OData Temporal ABNF Construction Rules Version 4.0 and OData Temporal ABNF Test Cases_: https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/abnf/
* OData Temporal Vocabulary:
  * https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/vocabularies/Org.OData.Temporal.V1.json
  * https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/csd04/vocabularies/Org.OData.Temporal.V1.xml

#### [Related work:]{id=RelatedWork}
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
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://groups.oasis-open.org/communities/tc-community-home2?CommunityKey=e7cac2a9-2d18-4640-b94d-018dc7d3f0e2#technical.

TC members should send comments on this specification to the TC's email list. Any individual may submit comments to the TC by sending email to Technical-Committee-Comments@oasis-open.org. Please use a Subject line like "Comment on OData Temporal".

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
      - [1.2.1.5 Snapshot Entity Set](#SnapshotEntitySet)
      - [1.2.1.6 Timeline Entity Set](#TimelineEntitySet)
    - [1.2.2 Document Conventions](#DocumentConventions)
- [2 Overview](#Overview)
  - [2.1 Example Model](#ExampleModel)
  - [2.2 Example Data](#ExampleData)
  - [2.3 Example Use Cases](#ExampleUseCases)
- [3 Vocabulary for Temporal Data](#VocabularyforTemporalData)
- [4 Temporal Requests](#TemporalRequests)
  - [4.1 Temporal Expressions](#TemporalExpressions)
  - [4.2 Querying Temporal Data](#QueryingTemporalData)
    - [4.2.1 Propagation of Temporal Query Options](#PropagationofTemporalQueryOptions)
    - [4.2.2 Query Option `$at`](#QueryOptionat)
    - [4.2.3 Query Options `$from`, `$to`, and `$toInclusive`](#QueryOptionsfromtoandtoInclusive)
    - [4.2.4 Interaction with Standard System Query Options](#InteractionwithStandardSystemQueryOptions)
    - [4.2.5 Requesting Changes to Temporal Data](#RequestingChangestoTemporalData)
  - [4.3 Modifying Temporal Data](#ModifyingTemporalData)
    - [4.3.1 Direct Modification of Time Slices](#DirectModificationofTimeSlices)
    - [4.3.2 Operations on Temporal Objects](#OperationsonTemporalObjects)
      - [4.3.2.1 Update during a Period](#UpdateduringaPeriod)
      - [4.3.2.2 Upsert during a Period](#UpsertduringaPeriod)
      - [4.3.2.3 Delete during a Period](#DeleteduringaPeriod)
    - [4.3.3 ETags](#ETags)
    - [4.3.4 Read, Edit, Navigation, and Association URLs](#ReadEditNavigationandAssociationURLs)
- [5 Conformance](#Conformance)
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

# <a id="Introduction" href="#Introduction">1 Introduction</a>

This specification adds the notion of time-dependency to the Open Data
Protocol (OData) without changing any of the base principles of OData.
It defines semantics and a representation for temporal data, especially:

-   Semantics and operations for querying and modifying temporal data,
-   Vocabulary terms to annotate which data depends on time, and how.

## <a id="ChangesfromEarlierVersions" href="#ChangesfromEarlierVersions">1.1 Changes from Earlier Versions</a>

<!-- TODO -->
<!-- Describe significant changes from previous differently-numbered Versions, not changes between stages of the current Version -->

## <a id="Glossary" href="#Glossary">1.2 Glossary</a>

### <a id="DefinitionsofTerms" href="#DefinitionsofTerms">1.2.1 Definitions of Terms</a>

#### <a id="ApplicationTime" href="#ApplicationTime">1.2.1.1 Application Time</a>

Application time is used to describe data that is known to change over
time, for example the budget of a department, or which department an
employee works for. Application time may capture planned changes in the
future, for example transferring an employee to a new department next
month or capturing next year's budget for a department. Both future and
past data can be changed.

#### <a id="SystemTime" href="#SystemTime">1.2.1.2 System Time</a>

System time is used to record when data became known by the "system of
record". System time does not extend into the future, and record entries
are only added and are never changed.

System time is never manipulated directly, and typically not visible in
APIs, except for "last changed at" time stamps, and the corresponding
properties are read-only.

As system time is typically not visible in APIs, we do not consider this
in the remainder of this document.

#### <a id="TemporalObject" href="#TemporalObject">1.2.1.3 Temporal Object</a>

A temporal object is a set of data whose change over time is tracked by
the service as a sequence of [time slices](#TimeSlice).

#### <a id="TimeSlice" href="#TimeSlice">1.2.1.4 Time Slice</a>

A piece of temporal data with attached time period, documenting that the
data did not change during this time period.

Time slices for the same [temporal object](#TemporalObject)
are non-overlapping, so for any given point in time there is at most one
slice whose time period contains that point in time.

Time slices for a temporal object need not cover the complete timeline.
There can be points in time for which no time slice exists, indicating
that the object's values are not known to the service.

##### <a id="ClosedOpenSemantics" href="#ClosedOpenSemantics">1.2.1.4.1 Closed-Open Semantics</a>

Time slices typically use closed-open semantics, following [SQL:2011](#_SQL).
This means the start is part of the period, the end is not part of the
period, and for directly adjacent time slices the end of the earlier
time slice is identical to the start of the next time slice. The period
start must be less than the period end.

##### <a id="ClosedClosedSemantics" href="#ClosedClosedSemantics">1.2.1.4.2 Closed-Closed Semantics</a>

Some software systems predating the availability of temporal databases
and with data type *date* for the application-time period start and end
use closed-closed semantics. Temporal services on top of these systems
can either convert their period end boundaries on-the-fly by adding one
day on the way out and subtracting one day on the way in, or
alternatively express the used time slice semantics via
[annotations](#VocabularyforTemporalData).

#### <a id="SnapshotEntitySet" href="#SnapshotEntitySet">1.2.1.5 Snapshot Entity Set</a>

An entity in a snapshot entity set represents a [temporal object](#TemporalObject)
at a specified point in time. When the entity is addressed via a
resource path (directly or via related resources), the point in time
must be specified, see [section 4.2.1](#PropagationofTemporalQueryOptions)
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

#### <a id="TimelineEntitySet" href="#TimelineEntitySet">1.2.1.6 Timeline Entity Set</a>

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

### <a id="DocumentConventions" href="#DocumentConventions">1.2.2 Document Conventions</a>

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example 1: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only.

All other text is normative unless otherwise labeled.

<!--
Here is a customized command line which will generate HTML from the markdown file (named `odata-temporal-ext-v4.0-csd04.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs+smart
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

This uses pandoc 3.8.3 from https://github.com/jgm/pandoc/releases/tag/3.8.3.
-->


-------

# <a id="Overview" href="#Overview">2 Overview</a>

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
[SQL:2011](#_SQL) or [Kulkarni](#_Kulkarni)
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

## <a id="ExampleModel" href="#ExampleModel">2.1 Example Model</a>

Assume a simple scenario: employees will work in different roles and in
different departments during their career, and sometimes they even
change their name. At each point in time the employee has exactly one
name, one job title, and is assigned to one department.

Employees are assigned an immutable ID when first entering the company,
and all employee-related data will be recorded with an application-time
period attached. This allows entering planned changes ahead of time,
using a future application-time start date: if an employee will get a
different job title or switch to a different department, this data can
already be entered into the system and stored as a new record.

In the sections below we will discuss two different API models that can
be backed by the same storage model:

::: example
Example <a id="api1" href="#api1">2</a>: model for `api-1` with snapshot entity sets (hidden
application time), key properties marked with {id}
:::

<svg host="65bd71144e" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="501px" height="108px" viewBox="-0.5 -0.5 501 108" content="&lt;mxfile&gt;&lt;diagram name=&quot;api-1&quot; id=&quot;EjO4HiSS11ZoHee_JRug&quot;&gt;7Vlbc9o6EP41fjkzdHw3fYyBpKdNegntdCYvHWELWyeyRGURIL++K1vGNnYSkqaUM0OGCejzarWr/Va7CMMZZesLgRbpFY8xNWwzXhvO2LBt3/TgvwI2GrDelkAiSFxCVg1MyT3WoKnRJYlx3hKUnFNJFm0w4ozhSLYwJARftcXmnLZXXaAEd4BphGgX/U5imZbo0DNr/B0mSVqtbJn6SYYqYQ3kKYr5qgE5E8MZCc5l+SlbjzBVe1ftSznv/IGnW8MEZnKfCeMvAz+/iuXkx+bDxSf747eb6+lAa7lDdKkdnmQLyjcYa6PlptqJfEUyihiMwjlncqqfmDCOUkLjS7ThS2VJLlF0W43ClAtyD/KIwiMLAHgspA607StthNIRp1wU6zi+G/jDoDVzqjTqtQTOYe7nym1rB7pC65bgJcplZSWnFC1yMivsVhMzJBLCQi4lz7TQKiUSTxcoUjIroLQyRGa18YLf4oa1juU6nqv3pIHPiz+Nn6OMUJUAl2SGBZKEM9jbKWJAzrAbxyooWEi8bkA6rheYZ1iKDYhUT33NMZ1kW86tasparsbSJl1NV6eKTpNkq7tmEnzQZHoGsewOsf4dG84ZQJM4ezOVgrAEBkYQgppg3GEbeC47+814Sb8GYTSEKEkYDCmeq2lq6wgk8ZmGJVdxzCGssOxlITN2a+Ra74iCOMyd0yJRUxLHmCkqcYkkmm35vuCEyWLHvBBesLEj841neGD4CMZWPYaXEhdADQa+IFLEGAMpV1gR8ym+vYA9j+b505SqKOTvx6BK7tUJ5HQI9BFluEuhE2+Oijee/Zd543Z4857PJJH0xJ1j504wPBx37r+G//2wR8uv+er2BrFv9Pp6Pgg63BljcFNmytGD9UPH2Pc81KMdZz/k2Tv9kOPsx6yKga/OrOGpHfpLR9OjiX6U7VCvxW9P7dD/kTeHbId6Lba6/VCHJJjFZ+qqBEZ8UUSqqEk7WGM7BV+yGMc6jIXwOVF2FWNQ1x7p4mZthZvAy+tBzpciqur0Iw0IrJjgPaKK49ZVUDemjSB6PTGsMIEpuHDXvkDqC6xe4bNKg7p4OcN28XKHQVtF6bee1bzw2VHkuTtVMLDbisqN6SgqeLZ1ey/q3XyZ/QzZ93dznw05Gpgj68Oq527JsH2qsjUmdy0G+j+X6hYsVKfVQJ9B6mDTx1AtAJ8S/V4ogoOH9WqaQeOUFDQdROURp/QRRiRRjVePyn8qneBrqba9FMCF2W30GD2pbvDyZ3r0jNJR1YkIchKL/lrSOC9260gGFUEt03tstw+XQ7SLzm67GASdU9vvSXjH/P1DuzdzupdnT/HtYWLty1BR+nUYilp/NNkO6krzG+ILfDoloX7q7larnu9sr5SEMKx/dimrXf3blTP5BQ==&lt;/diagram&gt;&lt;/mxfile&gt;">
    <defs/>
    <g>
        <path d="M 0 26 L 0 0 L 140 0 L 140 26" fill="#647687" stroke="#314354" stroke-miterlimit="10" pointer-events="all"/>
        <path d="M 0 26 L 0 104 L 140 104 L 140 26" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 0 26 L 140 26" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 13px; margin-left: 1px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Employee
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="70" y="17" fill="#ffffff" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    Employee
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 33px; margin-left: 6px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                ID: Edm.String {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="45" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    ID: Edm.String {id}
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 59px; margin-left: 6px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Name: Edm.String
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="71" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    Name: Edm.String
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 85px; margin-left: 6px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Jobtitle: Edm.String
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="97" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    Jobtitle: Edm.String
                </text>
            </switch>
        </g>
        <path d="M 360 39 L 360 13 L 500 13 L 500 39" fill="#647687" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 360 39 L 360 91 L 500 91 L 500 39" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 360 39 L 500 39" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 26px; margin-left: 361px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Department
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="430" y="30" fill="#ffffff" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    Department
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 46px; margin-left: 366px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                ID: Edm.String {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="58" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    ID: Edm.String {id}
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 72px; margin-left: 366px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Name: Edm.String
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="84" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    Name: Edm.String
                </text>
            </switch>
        </g>
        <path d="M 142.24 52 L 357.76 52" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 152.12 46.5 L 141.12 52 L 152.12 57.5" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 347.88 57.5 L 358.88 52 L 347.88 46.5" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 72px; margin-left: 161px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                <div style="text-align: left;">
                                    <span style="background-color: initial;">
                                        *
                                    </span>
                                </div>
                                <div style="text-align: left;">
                                    <span style="background-color: initial;">
                                        Employees
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="190" y="76" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    *...
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 28px; margin-left: 281px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                <div style="">
                                    <div style="text-align: right;">
                                        <span style="background-color: initial;">
                                            1
                                        </span>
                                    </div>
                                    <div style="text-align: right;">
                                        <span style="background-color: initial;">
                                            Department
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="310" y="32" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    1...
                </text>
            </switch>
        </g>
    </g>
    <switch>
        <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/>
        <a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank">
            <text text-anchor="middle" font-size="10px" x="50%" y="100%">
                Text is not SVG - cannot display
            </text>
        </a>
    </switch>
</svg>

and

::: example
Example <a id="api2" href="#api2">3</a>: model for `api-2` with timeline entity sets (visible
application time), key properties marked with {id}
:::

<svg host="65bd71144e" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="502px" height="266px" viewBox="-0.5 -0.5 502 266" content="&lt;mxfile&gt;&lt;diagram id=&quot;0CPCkknw8gVCiOM62pMd&quot; name=&quot;api-2&quot;&gt;7VvbUts6FP2avJwZOr7HecwF6OFA22noQPvSUWIRa5CtHEUhCV/fLUeOLzJgaBLMjDtMsbblbUl77aUlWXTsYbQ+52geXrEA045lBOuOPepYlt/14H9p2ChDTxlmnARbk5kZxuQRK6OhrEsS4EWhomCMCjIvGqcsjvFUFGyIc7YqVrtjtPjWOZphzTCeIqpbb0ggQtUL18jsnzGZhembTUPdiVBaWRkWIQrYKmeyTzv2kDMmtlfReoipHLt0XLbPnT1xd9cwjmNR5wFxftH7TVdX9wH92ecXF59/ufGJqdw8ILpUPT6N5pRtMP4dkoVgfKNaLzbpkCxWJKIohtLgjsVirO4YUJ6GhAaXaMOWskkLgab3aWkQMk4eoT6icMsEA9zmQkXc8qQ3QumQUcaT99ie0/X8buHJsfSo3sXxAp79lvbfLJmu0LpQ8RItRNpKRimaL8gkabd8MEJ8RuIBE4JFqtIqJAKP52gq66wA27IhIsoaz9k9zrXWNh3bddSY5Ox3yT9lP0MRoTITLskEcyQIi2FsxygGlA70gKbBwVzgdc6kAnyOWYSFjJCR3nUU2FS22Sn4Vhl2d3XCPG5tS+WMypfZzncGKbhQqHoNwiwNYWdcjnIfjKdB9GmEBIbLTncAfrojDW7QdaENeMy2+MshRpkQJbMYihTfycfk2BFI574yCyYDuYC4knh2mdQZOZnluxoSaWLw7B1NUjYkQYBjiSUmkECTHeDnjMQiGTJ3AD8wskPjk9txoeFDKJtZGX5kdQ7YiKEviCRBxoDKFZbIfAlwb4DP8xn/MqgUiCyvHoYs/+8h1O/ec2vwg1wOo8uZZ7i/wtNKCF2zMoBa1DQLNcCF9VDjHYp4bA01X1CEM9yMBYfYtchpGnL8mnPW4ZDjaMi5YBNBBG3R03j0mEbd6epg8HE1+Iww9FRE0Nfjq+omquenlH4zVbVrlFW1VVdVG4fCmNeq6kbxlFsbVK9V1XugqWpVreujVlU3HTVuTebZB2qcGb44ozf929C6uRqvHfzfuXOiz22tqP4IwOn6762KuhpyBstghkWOcvCURCBkWvA0DDymccTFfPVkpYEn3aY+npBut6f3vT1t9mou9dNpb++40ncW/x3pk1kro/dPTc+m+cdR0c+t9Y9HTU2koI+9xjd7NZX2wahJX+G31PSO1PTxFvi+BiANIzgO+vKQRAaDhFpSG5snwcuNJmfLOMCBimJS+YzIZiVlcFcsKY4yd5Xzhren9YIt+RS/PI/AG5MFxktBxUHhEIge0lwM3SoOUDaOKXThARcaWxVX9YZvMgsyDrK90j6j3y262PZbPWXljnqUHLlWicy6JZLaDozmKIHZrttvR16vAnkelckakIcCAr3/l/L8y0CS1YmiIElxioWyCnA1U78TR8A7caWnCcx/swSmJ9Mtw0l/JCaCyPmzwuU/qU/o69Zt8VVgTppdtDaxJ+maaPHKHr1i5kiniSnkJObVU0mOL8rTSAQTgnxNJWsXyeUYs77V6xUSxao4L+NVJPw+9vUrt9f0de5znB0QFLE4uA5JXKZuPRR1qdssULdVSd14TcStfBLm6G3pZ+oHrkfrfGHz1/HM0/2zOxofjO+trlFCX+kETW2+N19wtD++r0StvopuMku+E9/vPvy2HFxceZWzwNdXXkflYP27WMvBNTi4ruY2G8XBXvnbfrcEq7ocXHakbQwcmIP1M0stB7ccXFcHlwVExRm8Q3Ew20xu++sfY9v/bnz98vU8vH58qNTBz2PgadjWRQ3f9us4CWAeNAGO2pX8hvcb+tQmobrrlHZtLOedk7BK1peFEMzi6WcMTCdsdZoZ8kNP0QTTwQ5apRhlY50IH+kHrvOfPQY5xaV2JYubjaXta10tFTcjIUp8c7vTXVD4mUkpWcz0U1JqkoDyXi+g/ArY+HvatCzpHtd7o4Cy/aIjxy85ekJAASzQJldNfVp4ssFOWfGZhb+bg4utx5rqrCMPXqZ/w7etnv0hpH36Bw==&lt;/diagram&gt;&lt;/mxfile&gt;">
    <defs/>
    <g>
        <path d="M 0 156 L 0 130 L 140 130 L 140 156" fill="#647687" stroke="#314354" stroke-miterlimit="10" pointer-events="all"/>
        <path d="M 0 156 L 0 262 L 140 262 L 140 156" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 0 156 L 140 156" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 143px; margin-left: 1px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Employee_history
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="70" y="147" fill="#ffffff" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    Employee_history
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 163px; margin-left: 6px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 24px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                From: Edm.Date {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="175" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    From: Edm.Date {id}
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 191px; margin-left: 6px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                To: Edm.Date
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="203" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    To: Edm.Date
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 217px; margin-left: 6px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Name: Edm.String
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="229" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    Name: Edm.String
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 243px; margin-left: 6px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Jobtitle: Edm.String
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="255" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    Jobtitle: Edm.String
                </text>
            </switch>
        </g>
        <path d="M 360 158 L 360 132 L 500 132 L 500 158" fill="#647687" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 360 158 L 360 262 L 500 262 L 500 158" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 360 158 L 500 158" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 145px; margin-left: 361px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Department_history
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="430" y="149" fill="#ffffff" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    Department_history
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 165px; margin-left: 366px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                From: Edm.Date {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="177" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    From: Edm.Date {id}
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 191px; margin-left: 366px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                To: Edm.Date
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="203" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    To: Edm.Date
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 217px; margin-left: 366px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Name: Edm.String
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="229" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    Name: Edm.String
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 243px; margin-left: 366px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Budget: Edm.Decimal
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="255" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    Budget: Edm.Decimal
                </text>
            </switch>
        </g>
        <path d="M 0 26 L 0 0 L 140 0 L 140 26" fill="#647687" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 0 26 L 0 52 L 140 52 L 140 26" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 0 26 L 140 26" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 13px; margin-left: 1px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Employee
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="70" y="17" fill="#ffffff" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    Employee
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 33px; margin-left: 6px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                ID: Edm.String {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="45" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    ID: Edm.String {id}
                </text>
            </switch>
        </g>
        <path d="M 360 28 L 360 2 L 500 2 L 500 28" fill="#647687" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 360 28 L 360 54 L 500 54 L 500 28" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 360 28 L 500 28" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 15px; margin-left: 361px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Department
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="430" y="19" fill="#ffffff" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    Department
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 35px; margin-left: 366px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                ID: Edm.String {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="47" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px">
                    ID: Edm.String {id}
                </text>
            </switch>
        </g>
        <path d="M 142.24 26.4 L 360 27.61" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 152.15 20.96 L 141.12 26.4 L 152.09 31.96" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 45px; margin-left: 160px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                <div style="text-align: left;">
                                    <span style="background-color: initial;">
                                        *
                                    </span>
                                </div>
                                <div style="text-align: left;">
                                    <span style="background-color: initial;">
                                        Employees
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="189" y="49" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    *...
                </text>
            </switch>
        </g>
        <path d="M 430 132 L 430 75.99" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 430 54.99 L 436.18 65.49 L 430 75.99 L 423.82 65.49 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 107px; margin-left: 431px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                <div style="text-align: left;">
                                    <span style="background-color: initial;">
                                        *
                                    </span>
                                </div>
                                <div style="text-align: left;">
                                    history
                                </div>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="460" y="111" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    *...
                </text>
            </switch>
        </g>
        <path d="M 70 130 L 70 73.99" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 70 52.99 L 76.18 63.49 L 70 73.99 L 63.82 63.49 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 105px; margin-left: 71px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                <div style="text-align: left;">
                                    <span style="background-color: initial;">
                                        *
                                    </span>
                                </div>
                                <div style="text-align: left;">
                                    history
                                </div>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="100" y="109" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    *...
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 65px; margin-left: 281px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                <div style="">
                                    <div style="text-align: right;">
                                        <span style="background-color: initial;">
                                            1
                                        </span>
                                    </div>
                                    <div style="text-align: right;">
                                        <span style="background-color: initial;">
                                            Department
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="310" y="69" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    1...
                </text>
            </switch>
        </g>
        <path d="M 140 196 L 250 196 Q 260 196 260 186 L 260 51 Q 260 41 270 41 L 357.76 41" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 347.88 46.5 L 358.88 41 L 347.88 35.5" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
    </g>
    <switch>
        <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/>
        <a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank">
            <text text-anchor="middle" font-size="10px" x="50%" y="100%">
                Text is not SVG - cannot display
            </text>
        </a>
    </switch>
</svg>

## <a id="ExampleData" href="#ExampleData">2.2 Example Data</a>

Both API models in the previous section are views on the same underlying
data. A possible storage model for this data is:

::: example
Example 4: simple storage model: object key in dark green, temporal
sub-key in light green, foreign keys in orange, non-key fields in blue
:::

<svg host="65bd71144e" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="501px" height="186px" viewBox="-0.5 -0.5 501 186" content="&lt;mxfile&gt;&lt;diagram id=&quot;Wq--N-ZKPKJSso2YS7MK&quot; name=&quot;db&quot;&gt;7Zpdb+I4FIZ/TS5n5HzTS5JApyO6Gi0rreZqZRITrDoxa0yB/vo9TmySENoyow60s1RITd4cn9jHjx37JJYbF9tbgZeLe54RZjko21puYjmO7YQI/illZ5Sbm1rJBc201ghT+kS0qAvma5qRVcdQcs4kXXbFlJclSWVHw0LwTddszln3rkuck54wTTHrq3/TTC5qdeCjRv9CaL4wd7aRvlJgY6yF1QJnfNOS3JHlxoJzWR8V25gwFT0Tl7rc+Jmr+4oJUspTCsST+7vbf9xRvo6/0/BL+XS/e/xkazePmK11i0fFkvEdIbrWcmdCsdrQguESzqI5L+VUX0Fwni4oyyZ4x9eqKiuJ0wdzFi24oE9gjxlcskGAy0LqnnYC5Y0yFnPGRXUfN/DCYBB2Sk6VR30vQVZQ9ptpt30g3eNtx3CCV9LUkjOGlys6q+qtChZY5LSMuJS80EabBZVkusSpstkA1aoismgqL/gDadXWtT3X93RMWvq8+tP6GBeUqSEwoTMisKS8hNhOcQl0Rv2ONJ1ChCTblqQ79pbwgkixAxNz1dOQmWF2o883DbN7m0Wb14Gjx4oeJ/ned4MSHGiafoQsp0fWXWK5Q9VuKWiZw4EVRuAjTHqoQbPlsWAj5IcI9ZFBaIAqHTOal6AxMlcOVAQpDOahliVX3bmC3oUKTCqbxGuUP3VglMSh7JxVA3ZBs4yUiiguscSzPfZLTktZBc6P4AfxjdFn3/KhSjGc2805/JS5AEJKaBWmVVcTYHNDFJ+vYfeGcL08D7yOnEYMRu5JhBm7NwfM8XqAjYUaxgqxBEvyM4A5SRgcA8yNIze0r4CdETDfuTRgfg+wv3gbr5MnrWA0HPeZ8rwgHg6vTJ2RqXBwYaZuekj9gQvSfSxesfpoWNnIuzBX/anqK59JKtmVrY/OlnviUv7XPQfDHlwJgZbKAtr6+e70xVWUhOjY4mo8/n+t3lH1d1mq/Esv3233BarOl3t4jzmG5/Ih7zP34KPD3MOJC/c9g2/PVn9reM09vN9nonsycu8l99B/Iv7C1EM6u6YezsvXxVMPg2vm4TdD6uKZB+P4mnr4rbi6fOrBvKltgRWts5xIPWGRlBaw/r6y9fHYunzqof962nICpqKZ0ccOUMG/a/UmPeoc5fr/D5awTRGodFWq6+hQPYXsklebVwOvqIPXgVybtJA4ZLsAStVdjqIk+LrMSKa5PcfOzzNvSMyyHPV5CY7gYrB6e1z675x7vUNgajLpA8JmfDNqhHbsGZ4RFuH0Ia8Ce9BJTbCVbeVHzSKtdENEymyoPkABnS+ruQWUMVUtSo5sF9uZCRvV1u3Tn+/QFV+LlLwUNr2dgRpU0/ar+2oVwxcBaQEwOAKA0QRh0IjH7qc2x6jQd/imJuOGvz1Imr/Adbsu6pbrUk7r05gDR+6g68gbHBBaR6bnCPoX71pm+mHxbIW9g1SJa3c+2YGD2mMzAvYxPTYoLLXrNJ8P1ebNV1ju6D8=&lt;/diagram&gt;&lt;/mxfile&gt;">
    <defs/>
    <g>
        <path d="M 0 26 L 0 0 L 140 0 L 140 26" fill="#647687" stroke="#314354" stroke-miterlimit="10" pointer-events="all"/>
        <path d="M 0 26 L 0 182 L 140 182 L 140 26" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 0 26 L 140 26" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 13px; margin-left: 1px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Employee
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="70" y="17" fill="#ffffff" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    Employee
                </text>
            </switch>
        </g>
        <rect x="0" y="26" width="140" height="26" fill="#008000" stroke="#005700" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 33px; margin-left: 6px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                ID: String {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="45" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    ID: String {id}
                </text>
            </switch>
        </g>
        <rect x="0" y="52" width="140" height="26" fill="#3cb371" stroke="#2d7600" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 59px; margin-left: 6px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                From: Date {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="71" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    From: Date {id}
                </text>
            </switch>
        </g>
        <rect x="0" y="78" width="140" height="26" fill="#446caa" stroke="#006eaf" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 85px; margin-left: 6px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                To: Date
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="97" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    To: Date
                </text>
            </switch>
        </g>
        <rect x="0" y="104" width="140" height="26" fill="#446caa" stroke="#006eaf" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 111px; margin-left: 6px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Name: String
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="123" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    Name: String
                </text>
            </switch>
        </g>
        <rect x="0" y="130" width="140" height="26" fill="#446caa" stroke="#006eaf" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 137px; margin-left: 6px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Jobtitle: String
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="149" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    Jobtitle: String
                </text>
            </switch>
        </g>
        <rect x="0" y="156" width="140" height="26" fill="#ff8000" stroke="#bd7000" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 163px; margin-left: 6px;">
                        <div data-drawio-colors="color: #000000; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Department.ID
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="6" y="175" fill="#000000" font-family="Liberation Sans" font-size="12px">
                    Department.ID
                </text>
            </switch>
        </g>
        <path d="M 360 28 L 360 2 L 500 2 L 500 28" fill="#647687" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 360 28 L 360 158 L 500 158 L 500 28" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 360 28 L 500 28" fill="none" stroke="#314354" stroke-miterlimit="10" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 138px; height: 1px; padding-top: 15px; margin-left: 361px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Department
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="430" y="19" fill="#ffffff" font-family="Liberation Sans" font-size="12px" text-anchor="middle">
                    Department
                </text>
            </switch>
        </g>
        <rect x="360" y="28" width="140" height="26" fill="#008000" stroke="#005700" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 35px; margin-left: 366px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                ID: String {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="47" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    ID: String {id}
                </text>
            </switch>
        </g>
        <rect x="360" y="54" width="140" height="26" fill="#3cb371" stroke="#2d7600" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 61px; margin-left: 366px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                From: Date {id}
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="73" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    From: Date {id}
                </text>
            </switch>
        </g>
        <rect x="360" y="80" width="140" height="26" fill="#446caa" stroke="#006eaf" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 87px; margin-left: 366px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                To: Date
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="99" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    To: Date
                </text>
            </switch>
        </g>
        <rect x="360" y="106" width="140" height="26" fill="#446caa" stroke="#006eaf" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 113px; margin-left: 366px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Name: String
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="125" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    Name: String
                </text>
            </switch>
        </g>
        <rect x="360" y="132" width="140" height="26" fill="#446caa" stroke="#006eaf" pointer-events="none"/>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe flex-start; width: 130px; height: 1px; padding-top: 139px; margin-left: 366px;">
                        <div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: left; max-height: 22px; overflow: hidden;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                Budget: Decimal
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="366" y="151" fill="#ffffff" font-family="Liberation Sans" font-size="12px">
                    Budget: Decimal
                </text>
            </switch>
        </g>
        <g transform="translate(-0.5 -0.5)">
            <switch>
                <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-end; width: 58px; height: 1px; padding-top: 25px; margin-left: 285px;">
                        <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: right;">
                            <div style="display: inline-block; font-size: 12px; font-family: &quot;Liberation Sans&quot;; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: none; white-space: normal; overflow-wrap: normal;">
                                <div style="">
                                    <div style="">
                                        1
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <text x="343" y="29" fill="rgb(0, 0, 0)" font-family="Liberation Sans" font-size="12px" text-anchor="end">
                    1
                </text>
            </switch>
        </g>
        <path d="M 140 169 L 250 169 Q 260 169 260 159 L 260 51 Q 260 41 270 41 L 357.76 41" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
        <path d="M 347.88 46.5 L 358.88 41 L 347.88 35.5" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="none"/>
    </g>
    <switch>
        <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/>
        <a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank">
            <text text-anchor="middle" font-size="10px" x="50%" y="100%">
                Text is not SVG - cannot display
            </text>
        </a>
    </switch>
</svg>

The period start date is used as the temporal sub-key for identifying
time slices together with the key of the temporal object.

Note: alternatively, the period end date could have been used as
temporal sub-key, or the primary key of the time slice tables could have
been an artificial key (sequence number, UUID, ...) with both the
temporal object key and the period boundaries as non-key fields.

The following example data will be used to further illustrate the
capabilities introduced by this extension. It assumes that the example
services only support four-digit years.

::: example
Example 5: example data: object key in dark green, temporal sub-key in
light green, foreign keys in orange, non-key fields in blue

:::: {.example-data style=width:600px;height:440px}
<svg viewBox="0 0 600 700">
  <defs>
    <marker id="begin" viewBox="0 0 10 10" refX="0" refY="5" orient="auto" markerWidth="5" markerHeight="5">
      <path d="M10,0 L0,5 L10,10 z" />
    </marker>
    <marker id="end" viewBox="0 0 10 10" refX="10" refY="5" orient="auto" markerWidth="5" markerHeight="5">
      <path d="M0,0 L10,5 L0,10 z" />
    </marker>
  </defs>
  <path d="M20,190 l0,40 l320,0 l0,40" marker-start="url(#begin)" marker-end="url(#end)" />
</svg>

::::: {.temp-2}
**Departments**

ID     | From       | To         | Name              | Budget
-------|------------|------------|-------------------|--------
D08    | 2010-01-01 | 2012-01-01 | Support           | 1000
D08    | 2012-01-01 | 2012-06-01 | Support           | 1250
D08    | 2012-06-01 | 2014-01-01 | 1st Level Support | 1250
D08    | 2014-01-01 | max        | 1st Level Support | 1400
D15    | 2010-01-01 | 2011-01-01 | Services          | 1100
D15    | 2011-01-01 | max        | Services          | 1170
:::::

::::: {.temp-2 .nav-6 style=top:240px}
**Employees**

ID     | From       | To         | Name     | Jobtitle | Department.ID
-------|------------|------------|----------|----------|---------------
E314   | 2011-01-01 | 2013-10-01 | McDevitt | Junior   | D08
E314   | 2013-10-01 | 2014-01-01 | McDevitt | Senior   | D08
E314   | 2014-01-01 | max        | McDevitt | Senior   | D15
E401   | 2009-11-01 | 2012-03-01 | Norman   | Expert   | D15
E401   | 2012-03-01 | max        | Gibson   | Expert   | D15
:::::

::::
:::

## <a id="ExampleUseCases" href="#ExampleUseCases">2.3 Example Use Cases</a>

A client might wish to query the example APIs in several ways:

- Snapshot API
  1. Retrieve a current employee, together with the employee's current
department.
  2. Retrieve an employee as of a particular point in time, including the
employee's department as of that same point in time.
- Timeline API
  1. Retrieve employees that worked for the "Services" department in 2010.
  2. Retrieve all time slices of an employee.
  3. Retrieve all time slices of an employee for a given application-time
     period, including all time slices of the related departments within the
     application-time period of each employee time slice.
  4. Change a department's budget in the past, present, or future.
  5. Change an employee's association to a department in the past, present, or future.


-------

# <a id="VocabularyforTemporalData" href="#VocabularyforTemporalData">3 Vocabulary for Temporal Data</a>

The vocabulary for temporal data [OData-VocTemporal](#ODataVocTemporal)
defines a structured term for describing temporal query and modification
capabilities of temporal services.

The term `ApplicationTimeSupport` describes the temporal capabilities of
an entity set. It can be applied to an entity set, or to a containment
navigation property to describe its implicit entity sets. It has a
structured type with the following properties:

- `UnitOfTime` describes the data type of
  the application-time period start and end values. Its value is a record
  of either type `UnitOfTimeDate` or `UnitOfTimeDateTimeOffset`.
  - Records of type `UnitOfTimeDateTimeOffset` MUST specify the property `Precision`.
  - Records of type `UnitOfTimeDate` MAY specify the property `ClosedClosedPeriods`.
- `Timeline` describes the kind of
  temporal entity set. Its value is a record of either type
  `TimelineSnapshot` or `TimelineVisible`.
  - Records of type `TimelineSnapshot` MUST NOT specify any properties.
  - Records of type `TimelineVisible` MUST specify the properties `PeriodStart` and `PeriodEnd`.
    - These properties MUST point to
      properties of the annotated entity set whose values are the period start
      and end of a time slice.
    - The start is always included in the
      time slice, the end is included if and only if the sibling property
      `UnitOfTime` is of type `UnitOfTimeDate` and specifies property
      `ClosedClosedPeriods` as `true`.
    - If the period end property does not
      specify a default value, a default value of "ad infinitum" is assumed.
  - Records of type `TimelineVisible` MAY specify the property `ObjectKey`.
    - `ObjectKey` is the "sub-key" or "alternate key" that identifies time slices for a single temporal object.
      It is only necessary if the annotated entity set can contain time slices
      for more than one temporal object. The object key is a collection of
      property paths whose value combination uniquely identifies a temporal
      object.
- `SupportedActions` is a collection of
  qualified names of temporal actions that may be bound to the annotated
  entity set. These can be the [standard actions defined in this specification](#ModifyingTemporalData),
  or service-specific actions.

::: example
Example 6: `Employees` entity set from [example model `api-1`](#api1)
annotated with temporal terms
```json
"Employees": {
  "$Collection": true,
  "$Type": "OrgModel.Employee",
  "@Temporal.ApplicationTimeSupport": {
    "Timeline": {
      "@type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.json#Temporal.TimelineSnapshot"
    },
    "UnitOfTime": {
      "@type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.json#Temporal.UnitOfTimeDate"
    }
  }
},
```
:::

::: example
Example 7: `history` navigation property in entity set `Employees` from
[example model `api-2`](#api2) annotated with temporal terms
```json
"$Annotations": {
  "OrgModel.Default/Employees/history": {
    "@Temporal.ApplicationTimeSupport": {
      "Timeline": {
        "@type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.json#Temporal.TimelineVisible",
        "TimeSliceStart": "From",
        "TimeSliceEnd": "To",
        "SupportedActions": [
          "Temporal.Update",
          "Temporal.Upsert",
          "Temporal.Delete"
        ]
      },
      "UnitOfTime": {
        "@type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.json#Temporal.UnitOfTimeDate"
      }
    }
  }
}
```
:::

::: example
Example <a id="CostCenters" href="#CostCenters">8</a>: `CostCenters` entity set containing time slices for multiple
temporal objects, the temporal objects identified by combination of
`AreaID` and `CostCenterID`
```json
"CostCenter": {
  "$Kind": "EntityType",
  "$Key": ["tsid"],
  "tsid": {},
  "AreaID": {},
  "CostCenterID": {},
  "ValidTo": { "$Type": "Edm.Date" },
  "ValidFrom": { "$Type": "Edm.Date" },
  "ProfitCenterID": { "$Nullable": true },
  "DepartmentID": { "$Nullable": true }
},

"Default": {
  "$Kind": "EntityContainer",
  "CostCenters": { "$Collection": true, "$Type": "this.CostCenter" }
},

"$Annotations": {
  "this.Default/CostCenters": {
    "@Temporal.ApplicationTimeSupport": {
      "UnitOfTime": {
        "@type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.xml#Temporal.UnitOfTimeDate",
        "ClosedClosedPeriods": true
      },
      "Timeline": {
        "@type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.xml#Temporal.TimelineVisible",
        "PeriodStart": "ValidFrom",
        "PeriodEnd": "ValidTo",
        "ObjectKey": ["AreaID", "CostCenterID"]
      },
      "SupportedActions": [
        "Temporal.Update",
        "Temporal.Upsert",
        "Temporal.Delete"
      ]
    }
  }
}
```
:::


-------

# <a id="TemporalRequests" href="#TemporalRequests">4 Temporal Requests</a>

## <a id="TemporalExpressions" href="#TemporalExpressions">4.1 Temporal Expressions</a>

A temporal expression is

- A date in the form `dateValue`, see   [OData-ABNF](#ODataABNF)
- A timestamp in the form `dateTimeOffsetValueInUrl`, see   [OData-ABNF](#ODataABNF)
- One of the literals `min` or `max`
- An expression resulting in a date or timestamp value

The literals `min` and `max` are interpreted depending on the data type
of the time period start and end. They represent the minimum and maximum
values of the time period that the service will allow. Their values are
service specific as they can depend on the capabilities of the
underlying data model.

Note that there is no literal for "today" as clients and services can be
in different time zones and thus can have different notions of which
date is "today". Clients are advised to use concrete temporal values and
should avoid using the URL function `now()` with period start and end of
type `Edm.Date`.

Note that services may allow service-defined functions for temporal
expressions, for example to deal with fiscal years in a particular
company.

## <a id="QueryingTemporalData" href="#QueryingTemporalData">4.2 Querying Temporal Data</a>

Temporal query options allow point-in-time as well as time-range
queries. They take a temporal expression as their argument whose result
type MUST match the type of the corresponding time period start and end.

Adding temporal query options to a request does not alter the response
shape, it only affects the returned data.

Temporal query options can be used with data modification operations, in
which case they do not alter the modification semantics of the request,
they only affect the response. That is, they only influence the
"implicit `GET`" after successful data modification.

If no temporal query options are specified,
- timeline entity sets return all time slices, and
- snapshot entity sets return the snapshot valid at the time of the request.

### <a id="PropagationofTemporalQueryOptions" href="#PropagationofTemporalQueryOptions">4.2.1 Propagation of Temporal Query Options</a>

Temporal query options can be specified for the requested resource, and
for expanded navigation properties. They are propagated along navigation
paths and `$expand` until overridden on an expanded navigation property,
and the overridden query option values are propagated from there to
further expanded navigation properties.

If any temporal query option is specified for an expanded navigation
property, all temporal query options are overridden, and only the
explicitly specified temporal query options take effect and are
propagated further.

Temporal query options can be specified even if the directly addressed
resource does not track time. In this case the temporal query options do
not have any effect other than being propagated along `$expand`.

For entities in a [snapshot entity
set](#SnapshotEntitySet)
the point in time for representing data is determined by the first
applicable rule:

1. by the query option [`$at`](#QueryOptionat) nested within `$expand`
2. by a [`$at`](#QueryOptionat) value propagated along `$expand`
3. by [`$at`](#QueryOptionat) in the query option part of the request URL, which applies to every
   segment of the resource path and paths that occur in system query options
4. by the default value "now" --- the logic for determining this value is service-specific

For entities in a [timeline entity set](#TimelineEntitySet)
the time interval for filtering time slices is determined by the first
applicable rule:

1. by nested temporal query options within `$expand`
2. by temporal query option values propagated along `$expand`
3. by temporal query options in the query option part of the request URL

### <a id="QueryOptionat" href="#QueryOptionat">4.2.2 Query Option `$at`</a>

The `$at` query option takes a temporal expression as its argument. It
retrieves the snapshot whose application time period contains the value
of `$at`.

For timeline entity sets and collection-valued navigation to timeline
entity sets, `$at=<point-in-time>` is shorthand for

::: indent
[`$from`](#QueryOptionsfromtoandtoInclusive)`=<point-in-time>&`[`$toInclusive`](#QueryOptionsfromtoandtoInclusive)`=<point-in-time>`
:::

The query option `$at` can be combined with `$filter` and `$search`.
Only entities satisfying all specified criteria are returned.

::: example
Example 9: Retrieve current data of an employee
```
GET /api-1/Employees('E314')
```
results in
```json
{
  "@context": "$metadata#Employees/$entity",
  "ID": "E314",
  "Name": "McDevitt",
  "Jobtitle": "Senior"
}
```
:::

::: example
Example 10: retrieve employee at a specific point in application time
```
GET /api-1/Employees('E314')?$at=2012-01-01
```
results in
```json
{
  "@context": "$metadata#Employees/$entity",
  "ID": "E314",
  "Name": "McDevitt",
  "Jobtitle": "Junior"
}
```
:::


::: example
Example 11: retrieve multiple employees at a past point in time
```
GET /api-1/Employees?$filter=contains(Name,'i')&$at=2012-01-01
```
results in one time slice for each employee matching the filter at the
specified point in time --- note that E401 back then does not satisfy
this condition
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E314",
      "Name": "McDevitt",
      "Jobtitle": "Junior"
    }
  ]
}
```
:::

Expanding related entities in combination with `$at` is
straight-forward: the response consists of the time slices of related
entities that are valid at the requested point in time. The period
boundaries of the nested entities reflect the actual validity of the
related entities and are independent of the period boundaries of the
base entity.

::: example
Example 12: retrieve employee in the past, show the past department as
of a later point in time
```
GET /api-1/Employees('E314')?$at=2012-01-01&$expand=Department($at=2021-11-23)
```
results in
```json
{
  "@context": "$metadata#Employees/$entity",
  "ID": "E314",
  "Name": "McDevitt",
  "Jobtitle": "Junior",
  "Department": {
    "ID": "D08",
    "Name": "1st Level Support"
  }
}
```
:::

::: example
Example 13: retrieve department in the future with expanded employees at
the same point in time
```
GET /api-1/Departments('D15')?$at=2015-01-01&$expand=Employees
```
results in
```json
{
  "@context": "$metadata#Departments/$entity",
  "ID": "D15",
  "Name": "Services",
  "Employees": [
    {
      "ID": "E314",
      "Name": "McDevitt",
      "Jobtitle": "Senior"
    },
    {
      "ID": "E401",
      "Name": "Gibson",
      "Jobtitle": "Expert"
    }
  ]
}
```
:::

### <a id="QueryOptionsfromtoandtoInclusive" href="#QueryOptionsfromtoandtoInclusive">4.2.3 Query Options `$from`, `$to`, and `$toInclusive`</a>

The query options `$from`, `$to`, and `$toInclusive` only have an effect
on timeline entity sets and collection-valued navigation to timeline
entity sets. They each take a temporal expression as their argument.

Allowed combinations are:
- `$from` and `$to` defines a closed-open interval
- `$from` and `$toInclusive` defines a closed-closed interval
- `$from` and neither `$to` nor `$toInclusive` defines a
   closed-closed interval with right boundary `max`.

It is not allowed to combine `$from` and `$to`/`$toInclusive` with
[`$at`](#QueryOptionat) because `$at=<point-in-time>` is shorthand for

::: indent
`$from=<point-in-time>&$toInclusive=<point-in-time>`
:::

The result is restricted to time slices whose application-time period
overlaps with the interval defined by the query option values, taking
the closed-open or closed-closed semantics of the entity set's time
slices into account. The benefit of the query options is that the client
does not have to inspect the temporal annotations to determine the
property names of the period boundaries, the period semantics, and get
all comparison operators right.

For timeline entity sets with closed-open semantics
`$from=<start>&$to=<end>` is shorthand for

::: indent
`$filter=<time-slice-start> lt <end> and <time-slice-end> gt <start>`
:::

and for timeline entity sets with closed-closed semantics shorthand for

::: indent
`$filter=<time-slice-start> lt <end> and <time-slice-end> ge <start>`
:::

For timeline entity sets with closed-open semantics
`$from=<start>&$toInclusive=<end>` is shorthand for

::: indent
`$filter=<time-slice-start> le <end> and <time-slice-end> gt <start>`
:::

and for timeline entity sets with closed-closed semantics shorthand for

::: indent
`$filter=<time-slice-start> le <end> and <time-slice-end> ge <start>`
:::

The query options `$from` and `$to`/`$toInclusive` can be combined with
`$filter` and `$search`. Only entities satisfying all specified criteria
are returned.

If no `$select` is specified, each returned entity SHOULD contain the
application-time period boundaries as part of the default selection.

::: example
Example <a id="employeeHistory" href="#employeeHistory">14</a>: retrieve employee history over a period of application time
```
GET /api-2/Employees?$expand=history($select=Name,Jobtitle)
                    &$from=2012-03-01&$to=2025-01-01
```
results in one entity for each employee with time slices that overlap
the specified application-time period:
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E314",
      "history": [
        {
          "Name": "McDevitt",
          "Jobtitle": "Junior",
          "From": "2011-01-01",
          "To": "2013-10-01"
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2013-10-01",
          "To": "2014-01-01"
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2014-01-01",
          "To": "9999-12-31"
        }
      ]
    },
    {
      "ID": "E401",
      "history": [
        {
          "Name": "Gibson",
          "Jobtitle": "Expert",
          "From": "2012-03-01",
          "To": "9999-12-31"
        }
      ]
    }
  ]
}
```
The history for the first employee contains two time slices that do not
differ in the represented properties, caused by a department change, and
the department is not part of the representation.

The service could have combined these two time slices into one.
:::

::: example
Example 15: retrieve all employees that ever worked for department D15,
with their full history, and the department's data at the start of each
employee history time slice
```
GET /api-2/Departments('D15')/Employees?
    $expand=history(
      @emp=$this;
      $expand=Department(
        $expand=history($at=@emp/From)
      )
    )
```
has the following result with department names and budgets as of the
beginning of each employee time slice:
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E314",
      "history": [
        {
          "Name": "McDevitt",
          "Jobtitle": "Junior",
          "From": "2011-01-01",
          "To": "2013-10-01",
          "Department": {
            "ID": "D08",
            "history": [{
              "Name": "Support",
              "Budget": 1000,
              "From": "2010-01-01",
              "To": "2012-10-01"
            }]
          }
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2013-10-01",
          "To": "2014-01-01",
          "Department": {
            "ID": "D08",
            "history": [{
              "Name": "1st Level Support",
              "Budget": 1250,
              "From": "2012-06-01",
              "To": "2014-01-01"
            }]
          }
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2014-01-01",
          "To": "9999-12-31",
          "Department": {
            "ID": "D15",
            "history": [{
              "Name": "Services",
              "Budget": 1170,
              "From": "2011-01-01",
              "To": "9999-12-31"
            }]
          }
        }
      ]
    },
    {
      "ID": "E401",
      "history": [
        {
          "Name": "Norman",
          "Jobtitle": "Expert",
          "From": "2009-11-01",
          "To": "2012-03-01",
          "Department": {
            "ID": "D15",
            "history": []
          }
        },
        {
          "Name": "Gibson",
          "Jobtitle": "Expert",
          "From": "2012-03-01",
          "To": "9999-12-31",
          "Department": {
            "ID": "D15",
            "history": [{
              "Name": "Services",
              "Budget": 1170,
              "From": "2011-01-01",
              "To": "9999-12-31"
            }]
          }
        }
      ]
    }
  ]
}
```
:::

### <a id="InteractionwithStandardSystemQueryOptions" href="#InteractionwithStandardSystemQueryOptions">4.2.4 Interaction with Standard System Query Options</a>

For [snapshot entity sets](#SnapshotEntitySet)
the point in time for representing data is determined following the
rules in [section 4.2.1](#PropagationofTemporalQueryOptions)
and evaluated *first*, then all other system query options are evaluated
on the data valid at that point in time, including the query option
`$apply` defined in [OData-Aggregation](#ODataAggregation).

For timeline entity sets the interval for filtering data is determined
following the rules in [section 4.2.1](#PropagationofTemporalQueryOptions)
and evaluated as an additional criterion for `$filter` in the evaluation
sequence defined in [OData-Protocol, section 11.2.1](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#SystemQueryOptions),
which is evaluated _after_ the query option `$apply`.

::: example
Example 16: retrieve employee history over a period of application time
and filter on job title
```
GET /api-2/Employees?$expand=history(
                       $select=Name,Jobtitle;
                       $from=2012-03-01&$to=2025-01-01;
                       $filter=contains(Jobtitle,'e')
                     )
```
results in one entity for each employee with time slices that overlap
the specified application-time period and satisfy the filter condition
(one less than in [example 14](#employeeHistory)):
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E314",
      "history": [
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2013-10-01",
          "To": "2014-01-01"
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2014-01-01",
          "To": "9999-12-31"
        }
      ]
    },
    {
      "ID": "E401",
      "history": [
        {
          "Name": "Gibson",
          "Jobtitle": "Expert",
          "From": "2012-03-01",
          "To": "9999-12-31"
        }
      ]
    }
  ]
}
```
:::

The lambda operators `any()` and `all()` are not influenced by temporal
query options, they are interpreted for each time slice on the filtered
collection, meaning "any related time slice satisfying the lambda
expression" and "all related time slices satisfy the lambda expression".
The lambda expressions however can contain sub-expressions working on
the period boundaries.

::: example
Example 17: filter employees on their name at any point in time
```
GET /api-2/Employees?$expand=history($select=Name,Jobtitle)
                    &$from=2015-01-01
                    &$filter=history/any(h:startswith(h/Name,'N'))
```
results in one employee whose name matches in the past, and the matching
time slice is not in the requested time period
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E401",
      "history": [
        {
          "Name": "Gibson",
          "Jobtitle": "Expert",
          "From": "2012-03-01",
          "To": "9999-12-31"
        }
      ]
    }
  ]
}
```
:::

### <a id="RequestingChangestoTemporalData" href="#RequestingChangestoTemporalData">4.2.5 Requesting Changes to Temporal Data</a>

Change tracking for timeline entity sets works identical to non-temporal
entity sets. If the entity set supports change-tracking combined with
filtering on application-time period boundaries, the corresponding
declared properties SHOULD be listed as
[`FilterableProperties`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Capabilities.V1.md#ChangeTrackingType),
see [OData-VocCap](#ODataVocCap).
Clients can then use these properties in `$filter` or use the
convenience shortcuts [`$at`](#QueryOptionat)
or [`$from` and `$to`/`$toInclusive`](#QueryOptionsfromtoandtoInclusive).

Change tracking for snapshot entity sets only reports changes to time
slices that contain the point in time specified via
[`$at`](#QueryOptionat), or the point in time at which the defining query was received if no
[`$at`](#QueryOptionat) is specified. Mere passage of time does not lead to reported changes.

## <a id="ModifyingTemporalData" href="#ModifyingTemporalData">4.3 Modifying Temporal Data</a>

This section and its subsections describe modifications in application
time, both for
- _snapshot entity sets_ with hidden
  application time, where time slices exist in the data persistency but
  are not directly visible in the entity set, each OData entity
  corresponds to a temporal object and only represents data at one point
  in time, and for
- _timeline entity sets_ with visible
  application time, where each OData entity corresponds to an
  application-time slice and all application-time slices of a temporal
  object are part of the entity set.

Modification operations fall into two categories:
- Direct modification of time slices, and
- Changes to a temporal object over a
  period of application time that can affect multiple time slices without
  explicitly addressing each single affected time slice.

### <a id="DirectModificationofTimeSlices" href="#DirectModificationofTimeSlices">4.3.1 Direct Modification of Time Slices</a>

The temporal query options [`$at`](#QueryOptionat),
[`$from` and `$to`/`$toInclusive`](#QueryOptionsfromtoandtoInclusive)
can be used with data modification operations, in which case they do not
alter the modification semantics of the request, they only affect the
response of the "implicit `GET`" after the data modification.

Modification of time slices SHOULD be done with the temporal actions
defined in the next section and its subsections.

This specification does not define the behavior of standard insert,
update, upsert, or delete requests on temporal entity sets, and
potential side-effects of direct modification requests to period
boundaries and adjacent time slices are beyond the scope of this
specification as the underlying business logic will vary from service to
service.

### <a id="OperationsonTemporalObjects" href="#OperationsonTemporalObjects">4.3.2 Operations on Temporal Objects</a>

Changes to a temporal object over a period of application time can
affect multiple time slices. For timeline entity sets this can in
principle be achieved by constructing batch requests with multiple
operations on individual time slices. This puts burden on the client,
and it also makes it harder for services to check whether the request
represents a consistent change of the temporal data.

Both can be avoided by providing convenience operations expressing the
intent of the modification and leaving the actual time slice
manipulation to the service. These operations can then also be used with
snapshot entity sets that do not allow direct manipulation of time
slices.

These convenience operations are modeled as bound actions and defined in
the vocabulary for temporal data [OData-VocTemporal](#ODataVocTemporal).
Implementations SHOULD consider the preferences `return=representation`
and `return=minimal` as specified in [OData-Protocol, section 8.2.8.7](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#Preferencereturnrepresentationandreturnminimal).
The convenience operations are atomic (all or nothing): they either
succeed and produce the result described below, or they fail and do not
change the temporal objects.

All actions define a collection of entities as their binding parameter.
This collection can be
- A snapshot entity set
- A timeline entity set containing time slices for a single temporal object, or
- A timeline entity set containing time slices for multiple temporal objects.

Services MAY support any or all of these convenience actions. Services
SHOULD advertise the supported actions with property `SupportedActions`
of term [`ApplicationTimeSupport`](#VocabularyforTemporalData).

Services may define specialized convenience operations for use cases not
covered by this specification.

All actions return a collection of triples that consist of period start
and end and a time slice, which has the same entity set as the binding
parameter and advertises this through `odata.context` control
information.

#### <a id="UpdateduringaPeriod" href="#UpdateduringaPeriod">4.3.2.1 Update during a Period</a>

The `Update` action updates existing time slices with values from delta
time slices whose temporal object keys match and whose periods overlap.

Its non-binding parameter `deltaTimeslices` is a collection of a
structure containing the period boundaries, the properties to update,
and optionally temporal object key values. The period boundaries are
interpreted according to the [`UnitOfTime`](#VocabularyforTemporalData)
of the collection. In particular, `ClosedClosedPeriods` governs whether
the period end of type `Edm.Date` is the last day in the period or the
first day after the period. The upper period boundary for items in
`deltaTimeslices` need not be supplied; if it has no declared default
value, it defaults to `max`.

This works identical to the SQL statement UPDATE FOR PORTION OF:

1. The "delta time slices" in `deltaTimeslices` are processed in the
   order of the collection.
2. For each delta time slice all time slices from the bound collection
   are selected whose temporal object key values are identical to the
   values of corresponding properties present in the delta time slice, and
   whose application-time period overlaps with the period of the delta time
   slice.
3. Selected time slices whose period is not fully included in the
   period of the delta time slice are split into two or three consecutive
   time slices, one with fully included period, and one or two with a
   non-overlapping period immediately before or after the delta time
   slice's period.
4. Then all fully included time slices (including ones created in the
   previous step) are updated following the rules for updating entities
   specified in [OData-Protocol, section 11.4.3](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#UpdateanEntity).
5. Gaps between selected time slices in the period to update are not affected.

On success it returns the created or updated time slices.

::: example
Example 18: Change a department's budget during a period of application
time with [`api-2`](#api2) (visible timeline)
```json
POST /api-2/Departments('D08')/history/Temporal.Update
Content-Type: application/json

{
  "deltaTimeslices": [
    {
      "Timeslice": {
        "From": "2012-04-01",
        "To": "2014-07-01",
        "Budget": 1320
      }
    }
  ]
}
```
Given the [example departments data](#ExampleData)
the operation will split the time slice starting at 2012-01-01 creating
a new time slice starting at 2012-04-01 which is then updated with the
desired budget. It will then update the time slice starting at
2012-06-01 with the desired budget, and finally it will split the time
slice starting at 2014-01-01 creating a new time slice starting at
2014-07-01, then update the original with the desired budget, leaving
the new time slice starting at 2014-07-01 untouched:

:::: {.obj-1 .temp-2}
**Departments (after)**

ID     | From         | To           | Name                | Budget
-------|--------------|--------------|---------------------|-------
D08    | 2010-01-01   | 2012-01-01   | Support             | 1000
D08    | 2012-01-01   | *2012-04-01* | Support             | 1250
*D08*  | *2012-04-01* | *2012-06-01* | *Support*           | *1320*
D08    | 2012-06-01   | 2014-01-01   | 1st Level Support   | *1320*
D08    | 2014-01-01   | *2014-07-01* | 1st Level Support   | *1320*
*D08*  | *2014-07-01* | *max*        | *1st Level Support* | *1400*
D15    | 2010-01-01   | 2011-01-01   | Services            | 1100
D15    | 2011-01-01   | max          | Services            | 1170
::::

It returns the resulting created or updated time slices
```json
{
  "@context": "../../$metadata#Collection(Temporal.TimesliceWithPeriod)",
  "value": [
    {
      "Timeslice": {
        "@context": "#Departments('D08')/history/$entity",
        "From": "2012-01-01",
        "To": "2012-04-01",
        "Name": "Support",
        "Budget": 1250
      }
    },
    {
      "Timeslice": {
        "@context": "#Departments('D08')/history/$entity",
        "From": "2012-04-01",
        "To": "2012-06-01",
        "Name": "Support",
        "Budget": 1320
      }
    },
    {
      "Timeslice": {
        "@context": "#Departments('D08')/history/$entity",
        "From": "2012-06-01",
        "To": "2014-01-01",
        "Name": "1st Level Support",
        "Budget": 1320
      }
    },
    {
      "Timeslice": {
        "@context": "#Departments('D08')/history/$entity",
        "From": "2014-01-01",
        "To": "2014-07-01",
        "Name": "1st Level Support",
        "Budget": 1320
      }
    },
    {
      "Timeslice": {
        "@context": "#Departments('D08')/history/$entity",
        "From": "2014-07-01",
        "To": "9999-12-31",
        "Name": "1st Level Support",
        "Budget": 1400
      }
    }
  ]
}
```
The service could have joined the third and fourth time slice because
they do not significantly differ.
:::

::: example
Example 19: Change an employee's job title during a period of
application time with [`api-1`](#api1) (snapshot). Note that the period boundaries are not visible in
[`api-1`](#api1) and are provided as `PeriodStart` and `PeriodEnd` next to the
`Timeslice` data. The `PeriodEnd` is omitted, meaning the end of application time.
```json
POST /api-1/Employees/Temporal.Update
Content-Type: application/json

{
  "deltaTimeslices": [
    {
      "PeriodStart": "2021-10-01",
      "Timeslice": {
        "ID": "E401",
        "Jobtitle": "Ultimate Expert"
      }
    }
  ]
}
```
Given the [example employee data](#ExampleData)
the operation will split the time slice for employee `E401` starting at
2012-03-01 creating a new time slice starting at 2021-10-01 which is
then updated with the desired job title.

:::: {.obj-1 .temp-2 .nav-6}
**Employees (after)**

ID     | From         | To           | Name     | Jobtitle          | Department.ID
-------|--------------|--------------|----------|-------------------|--------------
E314   | 2011-01-01   | 2013-10-01   | McDevitt | Junior            | D08
E314   | 2013-10-01   | 2014-01-01   | McDevitt | Senior            | D08
E314   | 2014-01-01   | max          | McDevitt | Senior            | D15
E401   | 2009-11-01   | 2012-03-01   | Norman   | Expert            | D15
E401   | 2012-03-01   | *2021-10-01* | Gibson   | Expert            | D15
*E401* | *2021-10-01* | *max*        | *Gibson* | *Ultimate Expert* | *D15*
::::

It returns the resulting created or updated time slices
```json
{
  "@context": "../$metadata#Collection(Temporal.TimesliceWithPeriod)",
  "value": [
    {
      "PeriodStart": "2012-03-01",
      "PeriodEnd": "2021-10-01",
      "Timeslice": {
        "@context": "#Employees/$entity",
        "ID": "E401",
        "Name": "Gibson",
        "Jobtitle": "Expert"
      }
    },
    {
      "PeriodStart": "2021-10-01",
      "PeriodEnd": "9999-12-31",
      "Timeslice": {
        "@context": "#Employees/$entity",
        "ID": "E401",
        "Name": "Gibson",
        "Jobtitle": "Ultimate Expert"
      }
    }
  ]
}
```
:::

#### <a id="UpsertduringaPeriod" href="#UpsertduringaPeriod">4.3.2.2 Upsert during a Period</a>

The `Upsert` action upserts existing time slices with values from delta
time slices whose temporal object keys match and whose periods overlap,
and in addition creates new time slices to close gaps in the matching
time period.

It has the same signature as [`Update`](#UpdateduringaPeriod),
and steps 1 to 4 work identical to [`Update`](#UpdateduringaPeriod).
Step 5 is

5. Gaps between selected time slices in the period to update are closed
   by creating new adjacent time slices: for each gap that has an
   immediately preceding time slice, a new time slice is created by

   1. copying the property values of the preceding time slice
      (except for computed properties),
   2. setting the period boundaries to close the gap, and then
   3. updating the new time slice following the rules for updating
      entities specified in [OData-Protocol, section 11.4.3](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#UpdateanEntity).

   If no preceding time slice exists, the time slice is created following
   the rules for creating entities specified in [OData-Protocol, section 11.4.2](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#CreateanEntity).

On success it returns the created or updated time slices.

::: example
Example 20: Upsert two cost centers during a period of application time using the model from [example 8](#CostCenters)
```json
POST /api-3/CostCenters/Temporal.Upsert
Content-Type: application/json

{
  "deltaTimeslices": [
    {
      "Timeslice": {
        "AreaID": "51",
        "CostCenterID": "C1",
        "ValidTo": "2001-03-31",
        "ValidFrom": "1984-04-01",
        "ProfitCenterID": "P2"
      }
    },
    {
      "Timeslice": {
        "AreaID": "51",
        "CostCenterID": "C2",
        "ValidFrom": "2012-04-01",
        "DepartmentID": "D04"
      }
    }
  ]
}
```
Given this example data (primary key in olive)

:::: {.key-1 .obj-2 .obj-3 .temp-4}
**CostCenters (before)**

tsid | AreaID | CostCenterID | ValidTo    | ValidFrom  | ProfitCenterID | DepartmentID
-----|--------|--------------|------------|------------|----------------|-------------
n    | 51     | C1           | max        | 1955-04-01 | P1             | D02
::::

the operation will split the time slice `n` for
cost center `C1` starting at 1955-04-01 creating two new time slices,
the one starting at 1984-04-01 is then updated with the desired profit
center. It will also insert a new time slice for the not yet existing
cost center `C2` with the desired values.

Note that this example uses closed-closed periods, so each time slice
ends the day before the start of the next adjacent time slice.

:::: {.key-1 .obj-2 .obj-3 .temp-4}
**CostCenters (after)**

tsid | AreaID | CostCenterID | ValidTo      | ValidFrom    | ProfitCenterID | DepartmentID
-----|--------|--------------|--------------|--------------|----------------|-------------
n    | 51     | C1           | *1984-03-31* | 1955-04-01   | P1             | D02
*o*  | *51*   | *C1*         | *2001-03-31* | *1984-04-01* | *P2*           | *D02*
*p*  | *51*   | *C1*         | *max*        | *2001-04-01* | *P1*           | *D02*
*q*  | *51*   | *C2*         | *max*        | *2012-04-01* |                | *D04*
::::

It returns the resulting created or updated time slices per affected temporal object
```json
{
  "@context": "../$metadata#Collection(Temporal.TimesliceWithPeriod)",
  "value": [
    {
      "Timeslice": {
        "@context": "#CostCenters/$entity",
        "tsid": "n",
        "AreaID": "51",
        "CostCenterID": "C1",
        "ValidTo": "1984-03-31",
        "ValidFrom": "1955-04-01",
        "ProfitCenterID": "P1",
        "DepartmentID": "D02"
      }
    },
    {
      "Timeslice": {
        "@context": "#CostCenters/$entity",
        "tsid": "o",
        "AreaID": "51",
        "CostCenterID": "C1",
        "ValidTo": "2001-03-31",
        "ValidFrom": "1984-04-01",
        "ProfitCenterID": "P2",
        "DepartmentID": "D02"
      }
    },
    {
      "Timeslice": {
        "@context": "#CostCenters/$entity",
        "tsid": "p",
        "AreaID": "51",
        "CostCenterID": "C1",
        "ValidTo": "9999-12-31",
        "ValidFrom": "2001-04-01",
        "ProfitCenterID": "P1",
        "DepartmentID": "D02"
      }
    },
    {
      "Timeslice": {
        "@context": "#CostCenters/$entity",
        "tsid": "q",
        "AreaID": "51",
        "CostCenterID": "C2",
        "ValidTo": "9999-12-31",
        "ValidFrom": "2012-04-01",
        "ProfitCenterID": null,
        "DepartmentID": "D04"
      }
    }
  ]
}
```
:::

#### <a id="DeleteduringaPeriod" href="#DeleteduringaPeriod">4.3.2.3 Delete during a Period</a>

The `Delete` action deletes (sub-periods of) time slices.

Its non-binding parameter `deltaTimeslices` is a collection of a
structure containing the period boundaries and optionally temporal
object key values. The period boundaries are interpreted according to
the [`UnitOfTime`](#VocabularyforTemporalData)
of the collection. In particular, `ClosedClosedPeriods` governs whether
the period end of type `Edm.Date` is the last day in the period or the
first day after the period.

This works identical to the SQL statement DELETE FOR PORTION OF:

1. The "delta time slices" in `deltaTimeslices` are processed in the
   order of the collection.
2. For each delta time slice all time slices from the bound collection
   are selected whose temporal object key values are identical to the
   values of corresponding properties present in the delta time slice, and
   whose application-time period overlaps with the period of the delta time
   slice.
3. Selected time slices whose period is not fully included in the
   period of the delta time slice are split into two consecutive time
   slices, one with non-overlapping, and one with fully included period.
4. Then all fully included time slices (including ones created in the
   previous step) are deleted following the rules for deleting entities
   specified in [OData-Protocol, section 11.4.4](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#DeleteanEntity).

On success it returns the deleted time slices.

### <a id="ETags" href="#ETags">4.3.3 ETags</a>

Timeline entity sets need no special consideration as each time slice is
an OData entity.

This specification does not define the behavior of standard insert,
update, upsert, or delete requests for snapshot entity sets and
consequently defines no rules for ETags of entities in snapshot entity
sets. Services supporting these requests are advised to associate ETags
with time slices rather than with temporal objects.

### <a id="ReadEditNavigationandAssociationURLs" href="#ReadEditNavigationandAssociationURLs">4.3.4 Read, Edit, Navigation, and Association URLs</a>

Timeline entity sets need no special consideration as each time slice is
an OData entity.

For snapshot entity sets read, edit, navigation, and association URLs
are not specific to time slices, they are specific to the
time-independent OData entity.


-------

# <a id="Conformance" href="#Conformance">5 Conformance</a>

Conforming services MUST follow all rules of this specification for the
temporal system query options they support.

Conforming clients MUST be prepared to consume a model that uses any or
all constructs defined in this specification.


-------

# <a id="References" href="#References">Appendix A. References</a>

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## <a id="NormativeReferences" href="#NormativeReferences">A.1 Normative References</a>

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

###### [OData-ABNF]{id=ODataABNF}
_ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-Aggregation]{id=ODataAggregation}
_OData Extension for Data Aggregation Version 4.0._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-CSDL]{id=ODataCSDL}
_OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02._  
See link in "[Related work](#RelatedWork)" section on cover page.

_OData Common Schema Definition Language (CSDL) XML Representation Version 4.02._  
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

###### [OData-VocTemporal]{id=ODataVocTemporal}
_OData Temporal Vocabulary._  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

###### [RFC2119]{id=rfc2119}
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_  
https://www.rfc-editor.org/info/rfc2119.

###### [RFC8174]{id=rfc8174}
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_  
https://www.rfc-editor.org/info/rfc8174.

## <a id="InformativeReferences" href="#InformativeReferences">A.2 Informative References</a>

###### [Fowler]{id=_Fowler}
_Martin Fowler, "Temporal Patterns", 16 February 2005_  
http://martinfowler.com/eaaDev/timeNarrative.html.

###### [Kulkarni]{id=_Kulkarni}
_Krishna Kulkarni, "Temporal Features in SQL standard", September 2012_  
https://dbs.uni-leipzig.de/file/Temporal%20features%20in%20SQL2011.pdf.

###### [Snodgrass]{id=_Snodgrass}
_Richard T. Snodgrass, "Developing Time-Oriented Database Applications in SQL", Morgan Kaufmann Publishers, Inc., San Francisco, July, 1999, ISBN 1-55860-436-7_  
http://www2.cs.arizona.edu/people/rts/tdbbook.pdf and
http://www2.cs.arizona.edu/people/rts/pp30-31.pdf.

###### [SQL:2011]{id=_SQL}
_ISO/IEC 9075-2:2011 Information technology - Database languages - SQL - Part 2: Foundation (SQL/Foundation)_.

-------

# <a id="Acknowledgments" href="#Acknowledgments">Appendix B. Acknowledgments</a>

## <a id="SpecialThanks" href="#SpecialThanks">B.1 Special Thanks</a>

The contributions of the OASIS OData Technical Committee members, enumerated in [OData-Protocol, section C.2](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#Participants), are gratefully acknowledged.

Special thanks to Andrew Eisenberg, whose contributions in the early stages of the OData TC were invaluable to getting this extension specification on track.

## <a id="Participants" href="#Participants">B.2 Participants</a>

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

# <a id="RevisionHistory" href="#RevisionHistory">Appendix C. Revision History</a>

| Revision | Date | Editor | Changes Made |
| :--- | :--- | :--- | :--- |
| Working Draft 01                 | 2013-09-05 | Ralf Handl | Initial working draft |
| Committee Specification Draft 01 | 2021-07-22 | Ralf Handl<br>Hubert Heijkers<br> Gerald Krause<br> Michael Pizzo<br> Heiko Theißen<br> Martin Zurmuehl | Timeline entity sets for manipulating time slices<br> Snapshot entity sets for hiding application-time dependency<br> Modification during a period via actions<br> Closed-closed application time |
| Committee Specification Draft 02 | 2021-10-15 |Ralf Handl | Example model with object key<br> Example for Update action on snapshot entity set<br> Example for Upsert action with object key<br> Semantics of omitting upper period boundaries in action parameters |
| Committee Specification Draft 03 | 2021-12-02 |Ralf Handl | Removed the “stop on change” actions<br> Minor clarifications |
| Committee Specification 01       | 2022-01-07 |Ralf Handl | Non-material changes |

-------

# <a id="Notices" href="#Notices">Appendix D. Notices</a>

<!-- Required section. Do not modify. -->

Copyright © OASIS Open 2022. All Rights Reserved.

All capitalized terms in the following text have the meanings assigned to them in the OASIS Intellectual Property Rights Policy (the "OASIS IPR Policy"). The full [Policy](https://www.oasis-open.org/policies-guidelines/ipr/) may be found at the OASIS website.

This document and translations of it may be copied and furnished to others, and derivative works that comment on or otherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part, without restriction of any kind, provided that the above copyright notice and this section are included on all such copies and derivative works. However, this document itself may not be modified in any way, including by removing the copyright notice or references to OASIS, except as needed for the purpose of developing any document or deliverable produced by an OASIS Technical Committee (in which case the rules applicable to copyrights, as set forth in the OASIS IPR Policy, must be followed) or as required to translate it into languages other than English.

The limited permissions granted above are perpetual and will not be revoked by OASIS or its successors or assigns.

This document and the information contained herein is provided on an "AS IS" basis and OASIS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE INFORMATION HEREIN WILL NOT INFRINGE ANY OWNERSHIP RIGHTS OR ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

As stated in the OASIS IPR Policy, the following three paragraphs in brackets apply to OASIS Standards Final Deliverable documents (Committee Specification, Candidate OASIS Standard, OASIS Standard, or Approved Errata).

\[OASIS requests that any OASIS Party or any other party that believes it has patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable, to notify OASIS TC Administrator and provide an indication of its willingness to grant patent licenses to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this deliverable.\]

\[OASIS invites any party to contact the OASIS TC Administrator if it is aware of a claim of ownership of any patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable by a patent holder that is not willing to provide a license to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this OASIS Standards Final Deliverable. OASIS may include such claims on its website, but disclaims any obligation to do so.\]

\[OASIS takes no position regarding the validity or scope of any intellectual property or other rights that might be claimed to pertain to the implementation or use of the technology described in this OASIS Standards Final Deliverable or the extent to which any license under such rights might or might not be available; neither does it represent that it has made any effort to identify any such rights. Information on OASIS' procedures with respect to rights in any document or deliverable produced by an OASIS Technical Committee can be found on the OASIS website. Copies of claims of rights made available for publication and any assurances of licenses to be made available, or the result of an attempt made to obtain a general license or permission for the use of such proprietary rights by implementers or users of this OASIS Standards Final Deliverable, can be obtained from the OASIS TC Administrator. OASIS makes no representation that any information or list of intellectual property rights will at any time be complete, or that any claims in such list are, in fact, Essential Claims.\]

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs. OASIS welcomes reference to, and implementation and use of, specifications, while reserving the right to enforce its marks against misleading uses. Please see https://www.oasis-open.org/policies-guidelines/trademark/ for above guidance.

