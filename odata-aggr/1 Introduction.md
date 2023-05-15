## Committee Specification Draft 04

## 28 October 2022

**This stage:**  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.docx (Authoritative)  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.html  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/csd04/odata-data-aggregation-ext-v4.0-csd04.pdf

**Previous stage:**  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/odata-data-aggregation-ext-v4.0-cs02.docx (Authoritative)  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/odata-data-aggregation-ext-v4.0-cs02.html  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/odata-data-aggregation-ext-v4.0-cs02.pdf

**Latest stage:**  
https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.docx (Authoritative)  
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

# ##sec Introduction

This specification adds aggregation functionality to the Open Data Protocol (OData) without changing any of the base principles of OData. It defines semantics and a representation for aggregation of data, especially:
- Semantics and operations for querying aggregated data,
- Results format for queries containing aggregated data,
- Vocabulary terms to annotate what can be aggregated, and how.

## ##subsec Glossary

### ##subsubsec Definitions of Terms

This specification defines the following terms:
- <a name="AggregatableExpression">_Aggregatable Expression_</a> – an [expression](#Expression) resulting in a value of an [aggregatable primitive type](#AggregatablePrimitiveType)
- <a name="AggregatablePrimtiveType">_Aggregatable Primitive Type_</a> – a primitive type other than `Edm.Stream` or subtypes of `Edm.Geography` or `Edm.Geometry`
- <a name="DataAggregationPath">_Data Aggregation Path_</a> – a path that consists of one or more segments separated by a forward slash. Segments are names of declared or dynamic structural or navigation properties, or type-cast segments consisting of the (optionally qualified) name of a structured type that is derived from the type identified by the preceding path segment to reach properties declared by the derived type.
- <a name="Expression">_Expression_</a> – derived from the `commonExpr` rule (see [OData-ABNF](#ODataABNF)). Certain expressions are evaluated relative to a "current instance", while other expressions introduced in this document are evaluated to a "current collection", see [example ##collexpr].
- <a name="SingleValuedPropertyPath">_Single-Valued Property Path_</a> – property path ending in a single-valued primitive, complex, or navigation property

### ##subsubsec Acronyms and Abbreviations

- $A,I,U$ – collections of instances
- $H$ – hierarchical collection
- $u,w$ – instances in a collection
- $x,y$ – instances in a hierarchical collection, called nodes
- $p,q,v$ – paths
- $S,T$ – transformation sequences
- $\Gamma(A,v)$ – the collection that results from evaluating a [data aggregation path](#DataAggregationPath) $v$ relative to a collection $A$, defined [below](#EvaluationofDataAggregationPaths)
- $γ(u,v)$ – the collection that results from evaluating a [data aggregation path](#DataAggregationPath) $v$ relative to an instance $u$, defined [below](#EvaluationofDataAggregationPaths)
- $\Pi_G(s)$ – a transformation of a collection that injects grouping properties into every instance of the collection, defined [below](#SimpleGrouping)

### ##subsubsec Document Conventions

Keywords defined by this specification use `this monospaced font`.

$$\hbox{\tt Normative source code uses this paragraph style.}$$

Some sections of this specification are illustrated with non-normative examples.

::: example
Example ##ex: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only. Examples labeled with ⚠ contain advanced concepts or make use of keywords that are defined only later in the text, they can be skipped at first reading.

All other text is normative unless otherwise labeled.

# ##sec Overview

Open Data (OData) services expose a data model that describes the schema of the service in terms of the Entity Data Model (EDM, see [OData-CSDL](#ODataCDSL)) and then allows for querying data in terms of this model. The responses returned by an OData service are based on that data model and retain the relationships between the entities in the model.

Extending the OData query features with simple aggregation capabilities avoids cluttering OData services with an exponential number of explicitly modeled "aggregation level entities" or else restricting the consumer to a small subset of predefined aggregations.

Adding the notion of aggregation to OData without changing any of the base principles in OData has two aspects:
1. Means for the consumer to query aggregated data on top of any given data model (for sufficiently capable data providers)
2. Means for the provider to annotate what data can be aggregated, and in which way, allowing consumers to avoid asking questions that the provider cannot answer.

Implementing any of these two aspects is valuable in itself independent of the other, and implementing both provides additional value for consumers. The provided aggregation annotations help a consumer understand more of the data structure looking at the service's exposed data model. The query extensions allow the consumers to explicitly express the desired aggregation behavior for a particular query. They also allow consumers to formulate queries that utilize the aggregation annotations.

## ##subsec Example Data Model

::: example
Example ##ex: The following diagram depicts a simple model that is used throughout this document.

![example data model](odata-aggr/example-data-model.png)

The Amount property in the Sale entity type is an [aggregatable property](#AggregationCapabilities), and the properties of the related entity types are groupable. These can be arranged in four hierarchies:
- Product hierarchy based on [groupable](#AggregationCapabilities) properties of the Category and Product entity types
- Customer [hierarchy](#LeveledHierarchy) based on Country and Customer
- Time [hierarchy](#LeveledHierarchy) based on Year, Month and Date
- SalesOrganization [hierarchy](#RecursiveHierarchy) based on the recursive association to itself

In the context of Online Analytical Processing (OLAP), this model might be described in terms of a Sales "cube" with an Amount "measure" and three "dimensions". This document will avoid such terms, as they are heavily overloaded.
:::

Query extensions and descriptive annotations can both be applied to normalized as well as partly or fully denormalized schemas.

::: example
Example ##ex: The following diagram depicts a denormalized schema for the simple model.

![example data model denormalized](odata-aggr/example-data-model-denormalized.png)
:::

## ##subsec Example Data

::: example
Example ##ex: The following entity sets and sample data will be used to further illustrate the capabilities introduced by this extension.

:::: {.example-data style=width:600px;height:920px}
<svg viewBox="0 0 600 920">
  <defs>
    <marker id="begin" viewBox="0 0 10 10" refX="0" refY="5" orient="auto" markerWidth="5" markerHeight="5">
      <path d="M10,0 L0,5 L10,10 z" />
    </marker>
    <marker id="end" viewBox="0 0 10 10" refX="10" refY="5" orient="auto" markerWidth="5" markerHeight="5">
      <path d="M0,0 L10,5 L0,10 z" />
    </marker>
  </defs>
  <path d="M310,200 l45,50" fill="none" marker-start="url(#begin)" marker-end="url(#end)" />
  <path d="M50,625 l0,-35" fill="none" marker-start="url(#begin)" marker-end="url(#end)" />
  <path d="M160,625 l30,-235" fill="none" marker-end="url(#end)" />
  <path d="M215,625 l45,-425" fill="none" marker-start="url(#begin)" marker-end="url(#end)" />
  <path d="M300,625 l55,-225" fill="none" marker-start="url(#begin)" marker-end="url(#end)" />
</svg>

::::: {style=left:250px}
Products

ID|Category|Name|Color|TaxRate
--|--------|----|-----|------:
P1|PG1|Sugar|White|0.06
P2|PG1|Coffee|Brown|0.06
P3|PG2|Paper|White|0.14
P4|PG2|Pencil|Black|0.14
:::::

::::: {style=left:510px}
Food

|Rating|
|------|
|5|
|&nbsp;|
|n/a|
|n/a|
:::::

::::: {style=left:570px}
Non-Food

|RatingClass|
|------|
|n/a|
|n/a|
|average|
|&nbsp;|
:::::

::::: {style=top:190px}
Time

Date|Month|Quarter|Year
----|-----|-------|----
2022-01-01|2022-01|2022-1|2022
2022-04-01|2022-04|2022-2|2022
2022-04-10|2022-04|2022-2|2022
...|||
:::::

::::: {style=top:190px;left:360px}
Categories

ID|Name
--|----
PG1|Food
PG2|Non-Food
:::::

::::: {style=top:330px;left:360px}
Sales Organizations

ID|Superordinate|Name
--|-------------|----
Sales||Corporate Sales
US|Sales|US
US West|US|US West
US East|US|US East
EMEA|Sales|EMEA
EMEA Central|EMEA|EMEA Central
:::::

::::: {style=top:390px}
Customers

ID|Name|Country
--|----|-------
C1|Joe|USA
C2|Sue|USA
C3|Sue|Netherlands
C4|Luc|France
:::::

::::: {style=top:590px}
Sales

ID|Customer|Time|Product|Sales Organization|Amount
--|--------|----|-------|------------------|-----:
1|C1|2022-01-03|P3|US West|1
2|C1|2022-04-10|P1|US West|2
3|C1|2022-08-07|P2|US West|4
4|C2|2022-01-03|P2|US East|8
5|C2|2022-11-09|P3|US East|4
6|C3|2022-04-01|P1|EMEA Central|2
7|C3|2022-08-06|P3|EMEA Central|1
8|C3|2022-11-22|P1|EMEA Central|2
:::::
::::
:::

## ##subsec Example Use Cases

::: example
Example ##ex: In the example model, one prominent use case is the relation of customers to products. The first question that is likely to be asked is: "Which customers bought which products?"

This leads to the second more quantitative question: "Who bought how much of what?"

The answer to the second question typically is visualized as a cross-table:

|           |   |    |     |      |        |     |
|-----------|---|---:|----:|-----:|-------:|----:|
|           |   |Food|     |      |Non-Food|     |
|           |   |    |Sugar|Coffee|        |Paper|
|USA        |   |  14|    2|    12|       5|    5|
|           |Joe|   6|    2|     4|       1|    1|
|           |Sue|   8|     |     8|       4|    4|
|Netherlands|   |   2|    2|      |       3|    3|
|           |Sue|   2|    2|      |       3|    3|

The data in this cross-table can be written down in a shape that more closely resembles the structure of the data model, leaving cells empty that have been aggregated away:

Customer/Country|Customer/Name|Product/Category/Name|Product/Name|Amount
----------------|-------------|---------------------|------------|-----:
USA|Joe|Non-Food|Paper|1
USA|Joe|Food|Sugar|2
USA|Joe|Food|Coffee|4
USA|Sue|Food|Coffee|8
USA|Sue|Non-Food|Paper|4
Netherlands|Sue|Food|Sugar|2
Netherlands|Sue|Non-Food|Paper|3
USA||Food|Sugar|2
USA||Food|Coffee|12
USA||Non-Food|Paper|5
Netherlands||Food|Sugar|2
Netherlands||Non-Food|Paper|1
USA|Joe|Food||6
USA|Joe|Non-Food||1
USA|Sue|Food||8
USA|Sue|Non-Food||4
Netherlands|Sue|Food||2
Netherlands|Sue|Non-Food||3
USA||Food||14
USA||Non-Food||5
Netherlands||Food||2
Netherlands||Non-Food||3

Note that this result contains seven fully qualified aggregate values, followed by fifteen rollup rows with subtotal values.
:::
