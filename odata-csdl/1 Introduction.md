
-------

# ##sec Introduction

: varjson
OData services are described in terms of an [Entity
Model](#EntityModel). The Common Schema Definition Language (CSDL)
defines a representation of the entity model exposed by an OData service
using the JavaScript Object Notation (JSON), see [RFC8259](#rfc8259).

This format is based on the OpenUI5 OData V4 Metadata JSON Format, see
[OpenUI5](#_OpenUI5), with some extensions and
modifications made necessary to fully cover OData CSDL Version 4.01.
:

: varxml
OData services are described in terms of an [Entity
Model](#EntityModel). The Common Schema Definition Language (CSDL)
defines a representation of the entity model exposed by an OData
service using the Extensible Markup Language (XML) 1.0 (Fifth Edition)
[XML-1.0](#XML-10) with further building blocks from the W3C XML
Schema Definition Language (XSD) 1.1 as described in
[XML-Schema-1](#XML-Schema1) and
[XML-Schema-2](#XML-Schema2).
:

## ##subsec Changes from Earlier Versions

Section | Feature / Change | Issue
--------|------------------|------
[Section ##PrimitiveTypes]| 
Allow stream-valued non-binding parameters| 
[525](https://github.com/oasis-tcs/odata-specs/issues/525)
[Section ##SRID]| 
SRID value `variable` is deprecated| 
[1935](https://github.com/oasis-tcs/odata-specs/issues/1935)
: varjson
[Section ##CSDLJSONDocument] | Additional `$Version` value `4.02` |
:
: varxml
[Section ##CSDLXMLDocument] | Additional `Version` value `4.02` |
:
: varxml
[Section ##EntityContainer]| 
All children of `edm:EntityContainer` are optional| 
[464](https://github.com/oasis-tcs/odata-specs/issues/464)
:
[Section ##ActionandFunction] | Actions and functions can take, and return, delta payloads | [348](https://github.com/oasis-tcs/odata-specs/issues/348)
[Section ##ReturnType] | Returned collections of entities may contain `null` values | [1983](https://github.com/oasis-tcs/odata-specs/issues/1983)
[Section ##GeoValues] | Constant Geo values in annotations | [654](https://github.com/oasis-tcs/odata-specs/issues/654)
[Section ##StreamValues] | Constant Stream values in annotations | [654](https://github.com/oasis-tcs/odata-specs/issues/654)
[Section ##PathEvaluation]| 
New path evaluation rules for annotations targeting annotations and external targeting via container| 
[575](https://github.com/oasis-tcs/odata-specs/issues/575)
[Section ##IfThenElse]| 
Nested `If` without else part in collections| 
[326](https://github.com/oasis-tcs/odata-specs/issues/326)
[Section ##SimpleIdentifier] | Prefer identifiers consisting only of latin letters, the underscore, and decimal numbers | [375](https://github.com/oasis-tcs/odata-specs/issues/375)
[Section ##Conformance] | Additional conformance clauses for version 4.02 |

## ##subsec Glossary

### ##subsubsec Definitions of Terms

### ##subsubsec Acronyms and Abbreviations

<!-- TODO -->

### ##subsubsec Document Conventions

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example ##ex: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only.

Representation-specific text is indented and marked with vertical lines.

::: rep
### Representation-Specific Headline

Normative representation-specific text
:::

All other text is normative unless otherwise labeled.

<!--
Here is a customized command line which will generate HTML from the markdown file (named `$$$filename$$$.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs+smart
       -t html
       -o $$$filename$$$.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --wrap=none
       --metadata pagetitle="$$$pagetitle$$$"
       $$$filename$$$.md
```

This uses pandoc $$$pandoc-version$$$ from https://github.com/jgm/pandoc/releases/tag/$$$pandoc-version$$$.
-->

<!-- These source files can be used to produce the JSON variant or the XML variant,
     by using either new Number("...", "json") or new Number("...", "xml").
     Lines between the next and the closing : belong to the JSON variant only. -->

-------

: varjson
# ##sec JSON Representation

OData CSDL JSON is a full representation of the OData Common Schema
Definition Language in the JavaScript Object Notation (JSON) defined in
[RFC8259](#rfc8259). It additionally follows the rules
for "Internet JSON" (I-JSON) defined in
[RFC7493](#rfc7493) for e.g. objects, numbers, date
values, and duration values.

It is an alternative to the CSDL XML representation defined in
[OData-CSDLXML](#ODataCSDL) and neither adds nor removes
features.

## ##subsec Requesting the JSON Representation

The OData CSDL JSON representation can be requested using the `$format`
query option in the request URL with the media type `application/json`,
optionally followed by media type parameters, or the case-insensitive
abbreviation `json` which MUST NOT be followed by media type parameters.

Alternatively, this representation can be requested using the `Accept`
header with the media type `application/json`, optionally followed by
media type parameters.

If specified, `$format` overrides any value specified in the `Accept`
header.

The response MUST contain the `Content-Type` header with a value of
`application/json`, optionally followed by media type parameters.

Possible media type parameters are:
- [`IEEE754Compatible`](#ControllingtheRepresentationofNumbers)
- [`metadata`](#ControllingtheAmountofControlInformation)

The names and values of these parameters are case-insensitive.

### ##subsubsec Controlling the Representation of Numbers

The `IEEE754Compatible=true` parameter indicates that the service MUST
serialize `Edm.Int64` and `Edm.Decimal` numbers as strings. This is in
conformance with [RFC7493](#rfc7493). If not specified, or specified as
`IEEE754Compatible=false`, all numbers MUST be serialized as JSON
numbers.

This enables support for JavaScript numbers that are defined to be
64-bit binary format IEEE 754 values [ECMAScript](#_ECMAScript)
(see [section
4.3.1.9](http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.19))
resulting in integers losing precision past 15 digits, and decimals
losing precision due to the conversion from base 10 to base 2.

Responses that format `Edm.Int64` and `Edm.Decimal` values as strings
MUST specify this parameter in the media type returned in the
`Content-Type` header.

### ##subsubsec Controlling the Amount of Control Information

The representation of constant annotation values in CSDL JSON documents
closely follows the representation of data defined in
[OData-JSON](#ODataJSON).

A client application can use the `metadata` format parameter in the
`Accept` header when requesting a CSDL JSON document to influence how
much control information will be included in the response.

Other `Accept` header parameters are orthogonal to the `metadata`
parameter and are therefore not mentioned in this section.

#### ##subsubsubsec `metadata=minimal`

The `metadata=minimal` format parameter indicates that the service
SHOULD remove computable control information from the payload wherever
possible.

This means that the `type` control information is only included if the
type of the containing object or targeted property cannot be
heuristically determined, e.g. for
- Terms or term properties with an abstract declared type,
- Terms or term properties with a declared type that has derived
types, or
- Dynamic properties of open types.

See [OData-JSON](#ODataJSON) for the exact rules.

#### ##subsubsubsec `metadata=full`

The `metadata=full` format parameter indicates that the service MUST
include all control information explicitly in the payload.

This means that the `type` control information is included in
annotation values except for primitive values whose type can be
heuristically determined from the representation of the value, see
[OData-JSON](#ODataJSON) for the exact rules.

#### ##subsubsubsec `metadata=none`

The `metadata=none` format parameter indicates that the service SHOULD
omit all control information.

## ##subsec Design Considerations

CSDL JSON documents are designed for easy and efficient lookup of model
constructs by their name without having to know or guess what kind of
model element it is. Thus, all primary model elements (entity types,
complex types, type definitions, enumeration types, terms, actions,
functions, and the entity container) are direct members of their schema,
using the schema-unique name as the member name. Similarly, child
elements of primary model elements (properties, navigation properties,
enumeration type members, entity sets, singletons, action imports, and
function imports) are direct members of the objects describing their
parent model element, using their locally unique name as the member
name.

To avoid name collisions, all fixed member names are prefixed with a
dollar (`$`) sign and otherwise have the same name and capitalization as
their counterparts in the CSDL XML representation
[OData-CSDLXML](#ODataCSDL) (with one exception: the
counterpart of the `EntitySet` element's `EntityType` member is
[`$Type`](#EntitySet), to harmonize it with all other type references).

Additional fixed members introduced by this specification and without
counterpart in [OData-CSDLXML](#ODataCSDL) are also
prefixed with a dollar (`$`) sign and use upper-camel-case names. One of
these is `$Kind` which represents the kind of model element. Its value
is the upper-camel-case local name of the XML element representing this
kind of model element in [OData-CSDLXML](#ODataCSDL),
e.g. `EntityType` or `NavigationProperty`.

While the XML representation of CSDL allows referencing model elements
with alias-qualified names as well as with namespace-qualified names,
this JSON representation requires the use of alias-qualified names if an
alias is specified for an included or document-defined schema. Aliases
are usually shorter than namespaces, so this reduces text size of the
JSON document. Text size matters even if the actual HTTP messages are
sent in compressed form because the decompressed form needs to be
reconstructed, and clients not using a streaming JSON parser have to
materialize the full JSON document before parsing.

To further reduce size the member `$Kind` is optional for [structural
properties](#StructuralProperty) as these are more common than
[navigation properties](#NavigationProperty), and the member
[`$Type`](#Type) is optional for string properties, parameters, and
return types, as this type is more common than other primitive types.

In general, all members that have a default value SHOULD be omitted if
they have the default value.

## ##subsec JSON Schema Definition

The structure of CSDL JSON documents can be verified with the JSON
Schema [OData-CSDL-Schema](#ODataCSDLSchema) provided as an
additional artifact of this prose specification. This schema only
defines the shape of a well-formed CSDL JSON document but is not
descriptive enough to define what a correct CSDL JSON document MUST be
in every imaginable use case. This specification document defines
additional rules that correct CSDL JSON documents MUST fulfill. In case
of doubt on what makes a CSDL JSON document correct the rules defined in
this specification document take precedence.
:

<!-- Lines between the next and the closing : belong to the XML variant only. -->
: varxml
# ##sec XML Representation

OData CSDL XML is a full representation of the OData Common Schema
Definition Language in the Extensible Markup Language (XML) 1.0 (Fifth
Edition) [XML-1.0](#XML-10) with further building blocks from the
W3C XML Schema Definition Language (XSD) 1.1 as described in
[XML-Schema-1](#XML-Schema1) and
[XML-Schema-2](#XML-Schema2).

It is an alternative to the CSDL JSON representation defined in
[OData-CSDLJSON](#ODataCSDL) and neither adds nor
removes features.

## ##subsec Requesting the XML Representation

The OData CSDL XML representation can be requested using the `$format`
query option in the request URL with the media type `application/xml`,
optionally followed by media type parameters, or the case-insensitive
abbreviation `xml` which MUST NOT be followed by media type parameters.

Alternatively, this representation can be requested using the `Accept`
header with the media type `application/xml`, optionally followed by
media type parameters.

If specified, `$format` overrides any value specified in the `Accept`
header.

The response MUST contain the `Content-Type` header with a value of
`application/xml`, optionally followed by media type parameters.

This specification does not define additional parameters for the media
type `application/xml`.

## ##subsec XML Namespaces

In addition to the default XML namespace, the elements and attributes
used to describe the entity model of an OData service are defined in one
of the following namespaces.

### ##subsubsec Namespace EDMX

Elements and attributes associated with the top-level wrapper that
contains the CSDL used to define the entity model for an OData Service
are qualified with the Entity Data Model for Data Services Packaging
namespace:
- `http://docs.oasis-open.org/odata/ns/edmx`

Prior versions of OData used the following namespace for EDMX:
- EDMX version 1.0:
`http://schemas.microsoft.com/ado/2007/06/edmx`

They are non-normative for this specification.

In this specification the namespace prefix `edmx` is used to represent
the Entity Data Model for Data Services Packaging namespace, however the
prefix name is not prescriptive.

### ##subsubsec Namespace EDM

Elements and attributes that define the entity model exposed by the
OData Service are qualified with the Entity Data Model namespace:
- `http://docs.oasis-open.org/odata/ns/edm`

Prior versions of CSDL used the following namespaces for EDM:

- CSDL version 1.0: `http://schemas.microsoft.com/ado/2006/04/edm`
- CSDL version 1.1: `http://schemas.microsoft.com/ado/2007/05/edm`
- CSDL version 1.2: `http://schemas.microsoft.com/ado/2008/01/edm`
- CSDL version 2.0: `http://schemas.microsoft.com/ado/2008/09/edm`
- CSDL version 3.0: `http://schemas.microsoft.com/ado/2009/11/edm`

They are non-normative for this specification.

In this specification the namespace prefix `edm` is used to represent
the Entity Data Model namespace, however the prefix name is not
prescriptive.

## ##subsec XML Schema Definitions

This specification contains normative XML schemas for the EDMX and EDM
namespaces; see [OData-EDMX](#ODataEDMX) and
[OData-EDM](#ODataEDM)

These XML schemas only define the shape of a well-formed CSDL XML
document and are not descriptive enough to define what a correct CSDL
XML document MUST be in every imaginable use case. This specification
document defines additional rules that correct CSDL XML documents MUST
fulfill. In case of doubt on what makes a CSDL XML document correct the
rules defined in this specification document take precedence.

## ##subsec XML Document Order

Client libraries MUST retain the document order of XML elements for CSDL
XML documents because for some elements the order of child elements is
significant. This includes, but is not limited to, [members of
enumeration types](#EnumerationTypeMember) and items within a
[collection expression](#Collection).

OData does not impose any ordering constraints on XML attributes within
XML elements.
:

-------

# ##sec Entity Model

An OData service exposes a single entity model. This model may be
distributed over several [schemas](#Schema), and these schemas may be
distributed over several documents.

A service is defined by a single CSDL document which can be accessed by
sending a `GET` request to `<serviceRoot>/$metadata`. This document is
called the metadata document. It MAY [reference](#Reference) other CSDL
documents.

The metadata document contains a single [entity
container](#EntityContainer) that defines the resources exposed by this
service. This entity container MAY [extend](#ExtendinganEntityContainer)
an entity container defined in a [referenced document](#Reference).

The *model* of the service consists of all CSDL constructs used in its
entity containers.

The *scope* of a CSDL document is the document itself and all schemas
[included](#IncludedSchema) from directly [referenced
documents](#Reference). All entity types, complex types and other named
model elements *in scope* (that is, defined in the document itself or a
schema of a directly referenced document) can be accessed from a
referencing document by their qualified names. This includes the
[built-in primitive](#PrimitiveTypes) and [abstract
types](#BuiltInAbstractTypes).

Referencing another document may alter the model defined by the
referencing document. For instance, if a referenced document defines an
entity type derived from an entity type in the referencing document,
then an [entity set](#EntitySet) of the service defined by the
referencing document may return entities of the derived type. This is
identical to the behavior if the derived type had been defined directly
in the referencing document.

Note: referencing documents is not recursive. Only named model elements
defined in directly referenced documents can be used within the schema.
However, those elements may in turn include or reference model elements
defined in schemas referenced by their defining schema.

## ##subsec Nominal Types

A nominal type has a name that MUST be a [simple
identifier](#SimpleIdentifier). Nominal types are referenced using their
[qualified name](#QualifiedName). The qualified type name MUST be unique
within a model as it facilitates references to the element from other
parts of the model.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

## ##subsec Structured Types

Structured types are composed of other model elements. Structured types
are common in entity models as the means of representing entities and
structured properties in an OData service. [Entity types](#EntityType)
and [complex types](#ComplexType) are both structured types.

Structured types are composed of zero or more [structural
properties](#StructuralProperty) and [navigation
properties](#NavigationProperty). These properties can themselves be of
a structured type.

An instance of a structured type must have a finite representation that
includes all its properties. These properties are either integral parts of the
instance or references to instances. In the first case the integral parts must be
represented as part of the overall representation. These integral parts are modeled
as [structural properties](#StructuralProperty) and
[containment navigation properties](#ContainmentNavigationProperty).
If an instance of a structured type contains a chain of these, this chain
MUST be finite for the overall representation to be finite, even if the chain
of types leads back to the structured type of the instance. Note that in this
circular case finiteness is only possible if the chain of instances ends with
a null value or an empty collection. In the second case the references are modeled
as [non-containment navigation properties](#NavigationProperty).
Chains of these can be infinite, for example, if an entity contains a
self-reference.

[Open entity types](#OpenEntityType) and [open complex
types](#OpenComplexType) allow properties to be added dynamically to
instances of the open type.

## ##subsec Primitive Types

Structured types are composed of other structured types and primitive
types. OData defines the following primitive types:

Type|Meaning
----|-------
`Edm.Binary`                     |Binary data
`Edm.Boolean`                    |Binary-valued logic
`Edm.Byte`                       |Unsigned 8-bit integer
`Edm.Date`                       |Date without a time-zone offset
`Edm.DateTimeOffset`             |Date and time with a time-zone offset, no leap seconds
`Edm.Decimal`                    |Numeric values with decimal representation
`Edm.Double`                     |IEEE 754 binary64 floating-point number (15--17 decimal digits)
`Edm.Duration`                   |Signed duration in days, hours, minutes, and (sub)seconds
`Edm.Guid`                       |16-byte (128-bit) unique identifier
`Edm.Int16`                      |Signed 16-bit integer
`Edm.Int32`                      |Signed 32-bit integer
`Edm.Int64`                      |Signed 64-bit integer
`Edm.SByte`                      |Signed 8-bit integer
`Edm.Single`                     |IEEE 754 binary32 floating-point number (6--9 decimal digits)
`Edm.Stream`                     |Binary data stream
`Edm.String`                     |Sequence of characters
`Edm.TimeOfDay`                  |Clock time 00:00--23:59:59.999999999999
`Edm.Geography`                  |Abstract base type for all Geography types
`Edm.GeographyPoint`             |A point in a round-earth coordinate system
`Edm.GeographyLineString`        |Line string in a round-earth coordinate system
`Edm.GeographyPolygon`           |Polygon in a round-earth coordinate system
`Edm.GeographyMultiPoint`        |Collection of points in a round-earth coordinate system
`Edm.GeographyMultiLineString`   |Collection of line strings in a round-earth coordinate system
`Edm.GeographyMultiPolygon`      |Collection of polygons in a round-earth coordinate system
`Edm.GeographyCollection`        |Collection of arbitrary Geography values
`Edm.Geometry`                   |Abstract base type for all Geometry types
`Edm.GeometryPoint`              |Point in a flat-earth coordinate system
`Edm.GeometryLineString`         |Line string in a flat-earth coordinate system
`Edm.GeometryPolygon`            |Polygon in a flat-earth coordinate system
`Edm.GeometryMultiPoint`         |Collection of points in a flat-earth coordinate system
`Edm.GeometryMultiLineString`    |Collection of line strings in a flat-earth coordinate system
`Edm.GeometryMultiPolygon`       |Collection of polygons in a flat-earth coordinate system
`Edm.GeometryCollection`         |Collection of arbitrary Geometry values

`Edm.Date` and `Edm.DateTimeOffset` follow
[XML-Schema-2](#XML-Schema2) and use the proleptic Gregorian
calendar, allowing the year `0000` (equivalent to 1 BCE) and negative
years (year `-0001` being equivalent to 2 BCE etc.). The supported date
range is service-specific and typically depends on the underlying
persistency layer, e.g. SQL only supports years `0001` to `9999`.

`Edm.Decimal` with a [`Scale`](#Scale) value of `floating`,
`Edm.Double`, and `Edm.Single` allow the special numeric values `-INF`,
`INF`, and `NaN`.

`Edm.Stream` is a primitive type that can be used as a property of an
[entity type](#EntityType) or [complex type](#ComplexType), the
underlying type for a [type definition](#TypeDefinition), or a binding or non-binding
parameter or return type of an [action](#Action) or
[function](#Function).
`Edm.Stream`, or a type definition whose
underlying type is `Edm.Stream`, cannot be used in collections.

Some of these types allow facets, defined in [section ##TypeFacets].

Representation of primitive type values within a URL is defined by the rule [primitiveLiteral]{.abnf} in [OData-ABNF](#ODataABNF).
Representation within request and response bodies is format specific.

## ##subsec Type Facets

The facets in the following subsections modify or constrain the acceptable values of primitive typed model elements,
for example a [structural property](#StructuralProperty),
action or function [parameter](#Parameter),
action or function [return type](#ReturnType), or
[term](#Term).

For single-valued model elements the facets apply to the value of the
model element. For collection-valued model elements the facets apply to the items
in the collection.

### ##subsubsec MaxLength

A positive integer value specifying the maximum length of a binary,
stream or string value. For binary or stream values this is the octet
length of the binary data, for string values it is the character length
(number of code points for Unicode).

If no maximum length is specified, clients SHOULD expect arbitrary
length.

::: {.varjson .rep}
### ##isec Type Facet Members
### ##subisec `$MaxLength`

The value of `$MaxLength` is a positive integer.

Note: [#OData-CSDLXML#MaxLength] defines a symbolic
value `max` that is only allowed in OData 4.0 responses. This symbolic
value is not allowed in CDSL JSON documents at all. Services MAY instead
specify the concrete maximum length supported for the type by the
service or omit the member entirely.
:::

::: {.varxml .rep}
### ##isec Type Facet Attributes
### ##subisec Attribute `MaxLength`

The value of `MaxLength` is a positive integer or the symbolic value
`max` as a shorthand for the maximum length supported for the type by
the service.

Note: the symbolic value `max` is only allowed in OData 4.0 responses;
it is deprecated in OData 4.01. While clients MUST be prepared for this
symbolic value, OData 4.01 or greater services MUST NOT return the
symbolic value `max` and MAY instead specify the concrete maximum length
supported for the type by the service or omit the attribute entirely.
:::

### ##subsubsec Precision

For a decimal value: the maximum number of significant decimal digits of
the model element's value; it MUST be a positive integer.

For a temporal value (datetime-with-timezone-offset, duration, or
time-of-day): the number of decimal places allowed in the seconds
portion of the value; it MUST be a non-negative integer between zero and
twelve.

Note: service authors SHOULD be aware that some clients are unable to
support a precision greater than 28 for decimal values and 7 for
temporal values. Client developers MUST be aware of the potential
for data loss when round-tripping values of greater precision. Updating
via `PATCH` and exclusively specifying modified values will reduce
the risk for unintended data loss.

Note: model elements with duration values and a granularity less than seconds
(e.g. minutes, hours, days) can be annotated with the term
[`Measures.DurationGranularity`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Measures.V1.md#DurationGranularity),
see [OData-VocMeasures](#ODataVocMeasures).

::: {.varjson .rep}
### ##subisec `$Precision`

The value of `$Precision` is a number.

Absence of `$Precision` means unspecified precision both for decimal and temporal values.
:::

::: {.varjson .example}
Example ##ex: `Precision` facet applied to the `DateTimeOffset` type
```json
"SuggestedTimes": {
  "$Type": "Edm.DateTimeOffset",
  "$Collection": true,
  "$Precision": 6
}
```
:::

::: {.varxml .rep}
### ##subisec Attribute `Precision`

The value of `Precision` is a number.

If not specified for a decimal value, the decimal value has
unspecified precision.

If not specified for a temporal value, the temporal value has a
precision of zero.
:::

::: {.varxml .example}
Example ##ex: [`Precision`](#Precision) facet applied to the
`DateTimeOffset` type
```xml
<Property Name="SuggestedTimes" Type="Collection(Edm.DateTimeOffset)"
          Precision="6" />
```
:::

### ##subsubsec Scale

A non-negative integer value specifying the maximum number of digits
allowed to the right of the decimal point, or one of the symbolic values
`floating` or `variable`.

The value `floating` means that the decimal value represents a
decimal floating-point number $m\cdot 10^e$
where the number of significant digits in $m$ is the
value of the [`Precision`](#Precision) facet. Supported formats are:

IEEE 754 format|Precision|Allowed exponents
---------------|--------:|:---------------:
[decimal32](https://en.wikipedia.org/wiki/Decimal32_floating-point_format) (rarely implemented) |        7|$-101\le e\le 96$
[decimal64](https://en.wikipedia.org/wiki/Decimal64_floating-point_format)                      |       16|$-398\le e\le 384$
[decimal128](https://en.wikipedia.org/wiki/Decimal128_floating-point_format)                    |       34|$-6143\le e\le 6144$

OData 4.0 responses MUST NOT specify the value `floating`.

The value `variable` means that the number of digits to the right of the
decimal point can vary from zero to the value of the
[`Precision`](#Precision) facet.

An integer value means that the number of digits to the right of the
decimal point may vary from zero to the value of the `Scale` facet, and
the number of digits to the left of the decimal point may vary from one
to the value of the `Precision` facet minus the value of the `Scale`
facet. If `Precision` is equal to `Scale`, a single zero MUST precede
the decimal point.

The value of `Scale` MUST be less than or equal to the value of
[`Precision`](#Precision).

Note: if the underlying data store allows negative scale, services may
use a [`Precision`](#Precision) with the absolute value of the negative
scale added to the actual number of significant decimal digits, and
client-provided values may have to be rounded before being stored.

::: {.varjson .rep}
### ##subisec `$Scale`

The value of `$Scale` is a number or a string with one of the symbolic
values `floating` or `variable`.

Services SHOULD use lower-case values; clients SHOULD accept values in a
case-insensitive manner.

Absence of `$Scale` means `variable`.
:::

::: {.varjson .example}
Example ##ex: [`Precision`](#Precision)`=3` and `Scale=2`.  
Allowed values: 1.23, 0.23, 3.14 and 0.7, not allowed values: 123, 12.3
```json
"Amount32": {
  "$Type": "Edm.Decimal",
  "$Precision": 3,
  "$Scale": 2
}
```
:::

::: {.varjson .example}
Example ##ex: `Precision=2` equals `Scale`.  
Allowed values: 0.23, 0.7, not allowed values: 1.23, 1.2
```json
"Amount22": {
  "$Type": "Edm.Decimal",
  "$Precision": 2,
  "$Scale": 2
}
```
:::

::: {.varjson .example}
Example ##ex: `Precision=3` and a variable `Scale`.  
Allowed values: 0.123, 1.23, 0.23, 0.7, 123 and 12.3, not allowed
values: 12.34, 1234 and 123.4 due to the limited precision.
```json
"Amount3v": {
  "$Type": "Edm.Decimal",
  "$Precision": 3
}
```
:::

::: {.varjson .example}
Example ##ex: `Precision=7` and a floating `Scale`.  
Allowed values: -1.234567e3, 1e-101, 9.999999e96, not allowed values:
1e-102 and 1e97 because exponents are out of range.
```json
"Amount7f": {
  "$Type": "Edm.Decimal",
  "$Precision": 7,
  "$Scale": "floating"
}
```
:::

::: {.varxml .rep}
### ##subisec Attribute `Scale`

The value of `Scale` is a number or one of the symbolic values
`floating` or `variable`.

Services SHOULD use lower-case values; clients SHOULD accept values in a
case-insensitive manner.

If not specified, the `Scale` facet defaults to zero.
:::

::: {.varxml .example}
Example ##ex: [`Precision`](#Precision)`=3` and `Scale=2`.  
Allowed values: 1.23, 0.23, 3.14 and 0.7, not allowed values: 123, 12.3  
(the [`Nullable`](#Nullable) attribute can be ignored in these examples)
```xml
<Property Name="Amount32" Type="Edm.Decimal" Nullable="false" Precision="3" Scale="2" />
```
:::

::: {.varxml .example}
Example ##ex: `Precision=2` equals `Scale`.  
Allowed values: 0.23, 0.7, not allowed values: 1.23, 1.2
```xml
<Property Name="Amount22" Type="Edm.Decimal" Nullable="false" Precision="2" Scale="2" />
```
:::

::: {.varxml .example}
Example ##ex: `Precision=3` and a variable `Scale`.  
Allowed values: 0.123, 1.23, 0.23, 0.7, 123 and 12.3, not allowed
values: 12.34, 1234 and 123.4 due to the limited precision.
```xml
<Property Name="Amount3v" Type="Edm.Decimal" Nullable="false" Precision="3" Scale="variable" />
```
:::

::: {.varxml .example}
Example ##ex: `Precision=7` and a floating `Scale`.  
Allowed values: -1.234567e3, 1e-101, 9.999999e96, not allowed values:
1e-102 and 1e97 because exponents are out of range.
```xml
<Property Name="Amount7f" Type="Edm.Decimal" Nullable="false" Precision="7" Scale="floating" />
```
:::

### ##subsubsec Unicode

For a string-typed model element the `Unicode` facet indicates whether the it
might contain and accept string values with Unicode characters (code
points) beyond the ASCII character set. The value `false` indicates that
the it will only contain and accept string values with characters
limited to the ASCII character set.

If no value is specified, the `Unicode` facet defaults to `true`.

::: {.varjson .rep}
### ##subisec `$Unicode`

The value of `$Unicode` is one of the Boolean literals `true` or
`false`. Absence of the member means `true`.
:::

::: {.varxml .rep}
### ##subisec Attribute `Unicode`

The value of `Unicode` is one of the Boolean literals `true` or `false`.
Absence of the attribute means `true`.
:::

### ##subsubsec SRID

For a geometry- or geography-typed model element the `SRID` facet identifies which
spatial reference system is applied to its values.

The value of the `SRID` facet MUST be a non-negative integer or the
special value `variable`. If no value is specified, the facet defaults
to `0` for `Geometry` types or `4326` for `Geography` types.
Services SHOULD NOT use the special value `variable` as some formats, for example [OData-JSON](#ODataJSON), do not define a representation for instance-specific spatial reference systems.

The valid values of the `SRID` facet and their meanings are as defined
by the European Petroleum Survey Group [EPSG](#_EPSG).

::: {.varjson .rep}
### ##subisec `$SRID`

The value of `$SRID` is a string containing a number or the symbolic
value `variable`.
:::

::: {.varxml .rep}
### ##subisec Attribute `SRID`

The value of `SRID` is a number or the symbolic value `variable`.
:::

## ##subsec Built-In Abstract Types

The following built-in abstract types can be used within a model:
- `Edm.PrimitiveType`
- `Edm.ComplexType`
- `Edm.EntityType`
- `Edm.Untyped`

Conceptually, these are the abstract base types for primitive types
(including type definitions and enumeration types), complex types,
entity types, or any type or collection of types, respectively, and can
be used anywhere a corresponding concrete type can be used, except:
- `Edm.EntityType`
  -   cannot be used as the type of a singleton in an entity container
        because it doesn't define a structure, which defeats the purpose
        of a singleton.
  -   cannot be used as the type of an entity set because all entities
        in an entity set must have the same key fields to uniquely
        identify them within the set.
  -   cannot be the base type of an entity type or complex type.
- `Edm.ComplexType`
  -   cannot be the base type of an entity type or complex type.
- `Edm.PrimitiveType`
  -   cannot be used as the type of a key property of an entity type
        or as the underlying type of an enumeration type.
  -   cannot be used as the underlying type of a type definition in a
        CSDL document with a version of `4.0`.
  -   can be used as the underlying type of a type definition in a
        CSDL document with a version of `4.01` or greater.
- `Edm.Untyped`
  -   cannot be returned in a payload with an `OData-Version` header
        of `4.0`. Services should treat untyped properties as dynamic
        properties in `4.0` payloads.
  -   cannot be used as the type of a key property of an entity type.
  -   cannot be the base type of an entity type or complex type.
  -   cannot be used as the underlying type of a type definition or
        enumeration type.
- `Collection(Edm.PrimitiveType)`
  -   cannot be used.
- `Collection(Edm.Untyped)`
  -   cannot be returned in a payload with an `OData-Version` header
        of `4.0`. Services should treat untyped properties as dynamic
        properties in `4.0` payloads.

## ##subsec Built-In Types for defining Vocabulary Terms

[Vocabulary terms](#VocabularyandAnnotation) can, in addition, use
- `Edm.AnnotationPath`
- `Edm.PropertyPath`
- `Edm.NavigationPropertyPath`
- `Edm.AnyPropertyPath` (`Edm.PropertyPath` or `Edm.NavigationPropertyPath`)
- `Edm.ModelElementPath` (any model element, including
`Edm.AnnotationPath`, `Edm.NavigationPropertyPath`, and
`Edm.PropertyPath`)

as the type of a primitive term, or the type of a property of a complex
type (recursively) that is exclusively used as the type of a term. See
[section ##PathExpressions] for details.

## ##subsec Annotations

Many parts of the model can be decorated with additional information
using [annotations](#Annotation). Annotations are identified by their
term name and an optional qualifier that allows applying the same term
multiple times to the same model element.

A model element MUST NOT specify more than one annotation for a given
combination of term and qualifier.
