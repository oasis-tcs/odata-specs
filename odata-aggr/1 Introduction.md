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

![example data](odata-aggr/example-data.png)
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
