
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# OData Common Schema Definition Language (CSDL) XML Representation Version 4.02

## Committee Specification Draft 01

## 14 July 2023

$\hbox{}$

#### This stage:
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-xml-v4.02-csd01.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-xml-v4.02-csd01.html \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-xml-v4.02-csd01.pdf

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

#### <a name="AdditionalArtifacts">Additional artifacts:</a>
This prose specification is one component of a Work Product that also includes:
* XML schemas: _OData EDMX XML Schema and OData EDM XML Schema_. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/os/schemas/
* Other parts (list titles and/or file names)
* `(Note: Any normative computer language definitions that are part of the Work Product, such as XML instances, schemas and Java(TM) code, including fragments of such, must be (a) well formed and valid, (b) provided in separate plain text files, (c) referenced from the Work Product; and (d) where any definition in these separate files disagrees with the definition found in the specification, the definition in the separate file prevails. Remove this note before submitting for publication.)`

#### <a name="RelatedWork">Related work:</a>
This specification replaces or supersedes:
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.01_. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. OASIS Standard. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html.

This specification is related to:
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage: https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage: https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html
  * _ABNF components: OData ABNF Construction Rules Version 4.01 and OData ABNF Test Cases_. https://docs.oasis-open.org/odata/odata/v4.01/os/abnf/
* _OData Vocabularies Version 4.0_. Edited by Michael Pizzo, Ralf Handl, and Ram Jeyaraman. Latest stage: https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.01_. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html
* _OData JSON Format Version 4.01_. Edited by Ralf Handl, Mike Pizzo, and Mark Biamonte. Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html

#### Abstract:
OData services are described by an Entity Model (EDM). The Common Schema Definition Language (CSDL) defines specific representations of the entity data model exposed by an OData service, using XML, JSON, and other formats. This document (OData CSDL JSON Representation) specifically defines the JSON representation of CSDL.

#### Status:
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata#technical.

TC members should send comments on this specification to the TC's email list. Others should send comments to the TC's public comment list, after subscribing to it by following the instructions at the "[Send A Comment](https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=odata)" button on the TC's web page at https://www.oasis-open.org/committees/odata/.

This specification is provided under the [RF on RAND Terms Mode](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

#### Key words:
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC2119](#rfc2119) and [RFC8174](#rfc8174) when, and only when, they appear in all capitals, as shown here.

#### Citation format:
When referencing this specification the following citation format should be used:

**[OData-CSDL-JSON-v4.02]**

_OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02_.
Edited by Ralf Handl, Michael Pizzo, and Heiko Theißen. 14 July 2023. OASIS Committee Specification Draft 01.
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-xml-v4.02-csd01.html.
Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.html.

#### Notices
Copyright &copy; OASIS Open 2023. All Rights Reserved.

Distributed under the terms of the OASIS [IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/).

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs.

For complete copyright information please see the full Notices section in an Appendix below.

-------

# Table of Contents

::: toc
- [1 Introduction](#Introduction)
  - [1.1 Changes from earlier Versions](#ChangesfromearlierVersions)
  - [1.2 Glossary](#Glossary)
    - [1.2.1 Definitions of terms](#Definitionsofterms)
    - [1.2.2 Acronyms and abbreviations](#Acronymsandabbreviations)
    - [1.2.3 Document conventions](#Documentconventions)
- [2 XML Representation](#XMLRepresentation)
  - [2.1 Requesting the XML Representation](#RequestingtheXMLRepresentation)
  - [2.2 XML Namespaces](#XMLNamespaces)
    - [2.2.1 Namespace EDMX](#NamespaceEDMX)
    - [2.2.2 Namespace EDM](#NamespaceEDM)
  - [2.3 XML Schema Definitions](#XMLSchemaDefinitions)
  - [2.4 XML Document Order](#XMLDocumentOrder)
- [3 Entity Model](#EntityModel)
  - [3.1 Nominal Types](#NominalTypes)
  - [3.2 Structured Types](#StructuredTypes)
  - [3.3 Primitive Types](#PrimitiveTypes)
  - [3.4 Built-In Abstract Types](#BuiltInAbstractTypes)
  - [3.5 Built-In Types for defining Vocabulary Terms](#BuiltInTypesfordefiningVocabularyTerms)
  - [3.6 Annotations](#Annotations)
- [4 CSDL XML Document](#CSDLXMLDocument)
  - [4.1 Reference](#Reference)
  - [4.2 Included Schema](#IncludedSchema)
  - [4.3 Included Annotations](#IncludedAnnotations)
- [5 Schema](#Schema)
  - [5.1 Alias](#Alias)
  - [5.2 Annotations with External Targeting](#AnnotationswithExternalTargeting)
- [A References](#References)
  - [A.1 Normative References](#NormativeReferences)
  - [A.2 Informative References](#InformativeReferences)
- [B Table of XML Elements and Attributes](#TableofXMLElementsandAttributes)
- [C Acknowledgments](#Acknowledgments)
  - [C.1 Special Thanks](#SpecialThanks)
  - [C.2 Participants](#Participants)
- [D Revision History](#RevisionHistory)
- [E Notices](#Notices)
:::

-------

# <a name="Introduction" href="#Introduction">1 Introduction</a>

OData services are described in terms of an [Entity
Model](#EntityModel). The Common Schema Definition Language (CSDL)
defines a representation of the entity model exposed by an OData service
using the JavaScript Object Notation (JSON)[, see[
]{.apple-converted-space}]{style="color:black"}**\[**[**RFC8259**](#rfc8259)**\]**.

This format is based on the OpenUI5 OData V4 Metadata JSON Format, see
**\[**[**OpenUI5**](#OpenUI5)**\]**, with some extensions and
modifications made necessary to fully cover OData CSDL Version 4.01.

## <a name="ChangesfromearlierVersions" href="#ChangesfromearlierVersions">1.1 Changes from earlier Versions</a>

<!-- TODO -->
<!-- Describe significant changes from previous differently-numbered Versions, not changes between stages of the current Version -->

## <a name="Glossary" href="#Glossary">1.2 Glossary</a>

### <a name="Definitionsofterms" href="#Definitionsofterms">1.2.1 Definitions of terms</a>

### <a name="Acronymsandabbreviations" href="#Acronymsandabbreviations">1.2.2 Acronyms and abbreviations</a>

<!-- TODO -->

### <a name="Documentconventions" href="#Documentconventions">1.2.3 Document conventions</a>

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example 1: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only. Examples labeled with ⚠ contain advanced concepts or make use of keywords that are defined only later in the text, they can be skipped at first reading.

Representation-specific text is indented and marked with vertical lines.

::: rep
### Representation-Specific Headline

Normative representation-specific text
:::

All other text is normative unless otherwise labeled.

::: example
Here is a customized command line which will generate HTML from this markdown file (named `odata-csdl-xml-v4.02-csd01.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs
       -t html
       -o odata-csdl-xml-v4.02-csd01.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --wrap=none
       --metadata pagetitle="OData Common Schema Definition Language (CSDL) XML Representation Version 4.02"
       odata-csdl-xml-v4.02-csd01.md
```

This uses pandoc 3.1.2 from https://github.com/jgm/pandoc/releases/tag/3.1.2.
:::


# <a name="XMLRepresentation" href="#XMLRepresentation">2 XML Representation</a>

OData CSDL XML is a full representation of the OData Common Schema
Definition Language in the Extensible Markup Language (XML) 1.1 (Second
Edition) [XML-1.1](#XML11) with further building blocks from the
W3C XML Schema Definition Language (XSD) 1.1 as described in
[XML-Schema-1](#XMLSchema1) and
[XML-Schema-2](#XMLSchema2).

It is an alternative to the CSDL JSON representation defined in
[OData-CSDLJSON](#ODataCSDLJSON) and neither adds nor
removes features.

## <a name="RequestingtheXMLRepresentation" href="#RequestingtheXMLRepresentation">2.1 Requesting the XML Representation</a>

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

## <a name="XMLNamespaces" href="#XMLNamespaces">2.2 XML Namespaces</a>

In addition to the default XML namespace, the elements and attributes
used to describe the entity model of an OData service are defined in one
of the following namespaces.

### <a name="NamespaceEDMX" href="#NamespaceEDMX">2.2.1 Namespace EDMX</a>

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

### <a name="NamespaceEDM" href="#NamespaceEDM">2.2.2 Namespace EDM</a>

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

## <a name="XMLSchemaDefinitions" href="#XMLSchemaDefinitions">2.3 XML Schema Definitions</a>

This specification contains normative XML schemas for the EDMX and EDM
namespaces; see [OData-EDMX](#ODataEDMX) and
[OData-EDM](#ODataEDM)

These XML schemas only define the shape of a well-formed CSDL XML
document and are not descriptive enough to define what a correct CSDL
XML document MUST be in every imaginable use case. This specification
document defines additional rules that correct CSDL XML documents MUST
fulfill. In case of doubt on what makes a CSDL XML document correct the
rules defined in this specification document take precedence.

## <a name="XMLDocumentOrder" href="#XMLDocumentOrder">2.4 XML Document Order</a>

Client libraries MUST retain the document order of XML elements for CSDL
XML documents because for some elements the order of child elements is
significant. This includes, but is not limited to, [members of
enumeration types](#EnumerationTypeMember) and items within a
[collection expression](#Collection).

OData does not impose any ordering constraints on XML attributes within
XML elements.

# <a name="EntityModel" href="#EntityModel">3 Entity Model</a>

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

## <a name="NominalTypes" href="#NominalTypes">3.1 Nominal Types</a>

A nominal type has a name that MUST be a [simple
identifier](#SimpleIdentifier). Nominal types are referenced using their
[qualified name](#QualifiedName). The qualified type name MUST be unique
within a model as it facilitates references to the element from other
parts of the model.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

## <a name="StructuredTypes" href="#StructuredTypes">3.2 Structured Types</a>

Structured types are composed of other model elements. Structured types
are common in entity models as the means of representing entities and
structured properties in an OData service. [Entity types](#EntityType)
and [complex types](#ComplexType) are both structured types.

Structured Types are composed of zero or more [structural
properties](#StructuralProperty) and [navigation
properties](#NavigationProperty).

[Open entity types](#OpenEntityType) and [open complex
types](#OpenComplexType) allow properties to be added dynamically to
instances of the open type.

## <a name="PrimitiveTypes" href="#PrimitiveTypes">3.3 Primitive Types</a>

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
`Edm.Double`                     |IEEE 754 binary64 floating-point number (15-17 decimal digits)
`Edm.Duration`                   |Signed duration in days, hours, minutes, and (sub)seconds
`Edm.Guid`                       |16-byte (128-bit) unique identifier
`Edm.Int16 `                     |Signed 16-bit integer
`Edm.Int32`                      |Signed 32-bit integer
`Edm.Int64`                      |Signed 64-bit integer
`Edm.SByte`                      |Signed 8-bit integer
`Edm.Single`                     |IEEE 754 binary32 floating-point number (6-9 decimal digits)
`Edm.Stream`                     |Binary data stream
`Edm.String`                     |Sequence of characters
`Edm.TimeOfDay`                  |Clock time 00:00-23:59:59.999999999999
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
[XML-Schema-2](#XMLSchema2) and use the proleptic Gregorian
calendar, allowing the year `0000` (equivalent to 1 BCE) and negative
years (year `-0001` being equivalent to 2 BCE etc.). The supported date
range is service-specific and typically depends on the underlying
persistency layer, e.g. SQL only supports years `0001` to `9999`.

`Edm.Decimal with a `[`Scale`](#Scale)` value of floating`,
`Edm.Double`, and `Edm.Single` allow the special numeric values `-INF`,
`INF`, and `NaN`.

`Edm.Stream` is a primitive type that can be used as a property of an
[entity type](#EntityType) or [complex type](#ComplexType), the
underlying type for a [type definition](#TypeDefinition), or the binding
parameter or return type of an [action](#Action) or
[function](#Function). `Edm.Stream`, or a type definition whose
underlying type is `Edm.Stream`, cannot be used in collections or for
non-binding parameters to functions or actions.

Some of these types allow [facets](#TypeFacets), defined in section
"[Type Facets](#TypeFacets)".

See rule `primitiveLiteral` in [OData-ABNF](#ODataABNF) for the
representation of primitive type values in URLs and
[OData-JSON](#ODataJSON) for the representation in requests and
responses.

## <a name="BuiltInAbstractTypes" href="#BuiltInAbstractTypes">3.4 Built-In Abstract Types</a>

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
  -   cannot be used as the type of a property or term.
  -   cannot be used as the type of a parameter or the return type of
        an action or function.
- `Collection(Edm.Untyped)`
  -   cannot be returned in a payload with an `OData-Version` header
        of `4.0`. Services should treat untyped properties as dynamic
        properties in `4.0` payloads.

## <a name="BuiltInTypesfordefiningVocabularyTerms" href="#BuiltInTypesfordefiningVocabularyTerms">3.5 Built-In Types for defining Vocabulary Terms</a>

[Vocabulary terms](#VocabularyandAnnotation) can, in addition, use
- `Edm.AnnotationPath`
- `Edm.PropertyPath`
- `Edm.NavigationPropertyPath`
- `Edm.AnyPropertyPath `(`Edm.PropertyPath `or `Edm.NavigationPropertyPath`)
- `Edm.ModelElementPath `(any model element, including
`Edm.AnnotationPath`,` Edm.NavigationPropertyPath`, and
`Edm.PropertyPath`)

as the type of a primitive term, or the type of a property of a complex
type (recursively) that is exclusively used as the type of a term. See
section "[Path Expressions](#PathExpressions)" for details.

## <a name="Annotations" href="#Annotations">3.6 Annotations</a>

Many parts of the model can be decorated with additional information
using [annotations](#Annotation). Annotations are identified by their
term name and an optional qualifier that allows applying the same term
multiple times to the same model element.

A model element MUST NOT specify more than one annotation for a given
combination of term and qualifier.

-------

# <a name="CSDLXMLDocument" href="#CSDLXMLDocument">4 CSDL XML Document</a>



::: {.varxml .rep}
### <a name="ElementedmxEdmx1" href="#ElementedmxEdmx1"> Element `edmx:Edmx`</a>

The `edmx:Edmx` element is the root element of a CSDL XML document. It
MUST contain the `Version` attribute and it MUST contain exactly one
`edmx:DataServices` element.

It MAY contain [`edmx:Reference`](#Reference) elements to reference
other CSDL documents.

### <a name="AttributeVersion1.1" href="#AttributeVersion1.1"> Attribute `Version`</a>

The `Version` attribute specifies the OData protocol version of the
service. For OData 4.0 responses the value of this attribute MUST be
`4.0.` For OData 4.01 responses the value of this attribute MUST be
`4.01.` Services MUST return an OData 4.0 response if the request was
made with an `OData-MaxVersion `header with a value of `4.0`.

### <a name="ElementedmxDataServices1.2" href="#ElementedmxDataServices1.2"> Element `edmx:DataServices`</a>

The `edmx:DataServices` element MUST contain one or more
[`edm:Schema`](#Schema) elements which define the schemas exposed by the
OData service.
:::

::: {.varxml .example}
Example 2:
```xml
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.01">
  <edmx:DataServices>
    ...
  </edmx:DataServices>
</edmx:Edmx>
```
:::

## <a name="Reference" href="#Reference">4.1 Reference</a>

A reference to an external CSDL document allows to bring part of the
referenced document's content into the scope of the referencing
document.

A reference MUST specify a URI that uniquely identifies the referenced
document, so two references MUST NOT specify the same URI. The URI
SHOULD be a URL that locates the referenced document. If the URI is not
dereferencable it SHOULD identify a well-known schema. The URI MAY be
absolute or relative URI; relative URLs are relative to the URL of the
document containing the reference, or relative to a base URL specified
in a format-specific way.

A reference MAY be annotated.

The
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation, defined in [OData-VocCore](#ODataVocCore), MAY be used to
indicate a particular version of the referenced document. If the
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation is present, the `$schemaversion` system query option, defined
[OData-Protocol](#ODataProtocol), SHOULD be used when retrieving the
referenced schema document.



::: {.varxml .rep}
### <a name="ElementedmxReference2" href="#ElementedmxReference2"> Element `edmx:Reference`</a>

The `edmx:Reference` element specifies external CSDL documents
referenced by the referencing document. The child elements
[`edmx:Include`](#IncludedSchema) and
[`edmx:IncludeAnnotations`](#IncludedAnnotations) specify which parts of
the referenced document are available for use in the referencing
document.

The `edmx:Reference` element MUST contain the `Uri` attribute, and it
MUST contain at least one [`edmx:Include`](#IncludedSchema) or
[`edmx:IncludeAnnotations`](#IncludedAnnotations) child element.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a name="AttributeUri2.1" href="#AttributeUri2.1"> Attribute `Uri`</a>

The value of `Uri` is an absolute or relative URI; relative URIs are
relative to the `xml:base` attribute, see
[XML-Base](#XMLBase).
:::

::: {.varxml .example}
Example 3: references to other CSDL documents
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.0">
  <edmx:Reference Uri="http://vocabs.odata.org/capabilities/v1">
   ...
  </edmx:Reference>
  <edmx:Reference Uri="http://vocabs.odata.org/core/v1">
    ...
  </edmx:Reference>
  <edmx:Reference Uri="http://example.org/display/v1">
    ...
  </edmx:Reference>
  <edmx:DataServices>...</edmx:DataServices>
</edmx:Edmx>
```
:::

## <a name="IncludedSchema" href="#IncludedSchema">4.2 Included Schema</a>

A reference MAY include zero or more schemas from the referenced
document.

The included schemas are identified via their [namespace](#Namespace).
The same namespace MUST NOT be included more than once, even if it is
declared in more than one referenced document.

When including a schema, a [simple identifier](#SimpleIdentifier) value
MAY be specified as an alias for the schema that is used in qualified
names instead of the namespace. For example, an alias of `display` might
be assigned to the namespace `org.example.vocabularies.display`. An
alias-qualified name is resolved to a fully qualified name by examining
aliases for included schemas and schemas defined within the document.


::: {.varxml .rep}
If an included schema specifies an alias, the alias MAY be used instead
of the namespace within qualified names to identify model elements of
the included schema. An alias only provides a more convenient notation,
allowing a short string to be substituted for a long namespace. Every
model element that can be identified via an alias-qualified name can
alternatively be identified via its full namespace-qualified name.
:::

Aliases are document-global, so all schemas defined within or included
into a document MUST have different aliases, and aliases MUST differ
from the namespaces of all schemas defined within or included into a
document.

The alias MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.

An alias is only valid within the document in which it is declared; a
referencing document may define its own aliases for included schemas.



::: {.varxml .rep}
### <a name="ElementedmxInclude3" href="#ElementedmxInclude3"> Element `edmx:Include`</a>

The `edmx:Include` element specifies a schema to include from the
referenced CSDL document. It MUST provide the `Namespace` attribute and
it MAY provide the `Alias` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a name="AttributeNamespace3.1" href="#AttributeNamespace3.1"> Attribute `Namespace`</a>

The value of `Namespace` is the namespace of a schema defined in the
referenced CSDL document.

### <a name="AttributeAlias3.2" href="#AttributeAlias3.2"> Attribute `Alias`</a>

The value of `Alias` is a [simple identifier](#SimpleIdentifier) that
can be used in qualified names instead of the namespace.
:::

::: {.varxml .example}
Example 4: references to entity models containing definitions of
vocabulary terms
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.0">
  <edmx:Reference Uri="http://vocabs.odata.org/capabilities/v1">
    <edmx:Include Namespace="Org.OData.Capabilities.V1" />
  </edmx:Reference>
  <edmx:Reference Uri="http://vocabs.odata.org/core/v1">
    <edmx:Include Namespace="Org.OData.Core.V1" Alias="Core">
      <Annotation Term="Core.DefaultNamespace" />
    </edmx:Include>
  </edmx:Reference>
  <edmx:Reference Uri="http://example.org/display/v1">
    <edmx:Include Alias="UI" Namespace="org.example.display" />
  </edmx:Reference>
  <edmx:DataServices>…</edmx:DataServices>
</edmx:Edmx>
```
:::

## <a name="IncludedAnnotations" href="#IncludedAnnotations">4.3 Included Annotations</a>

In addition to including whole schemas with all model constructs defined
within that schema, annotations can be included with more flexibility.

Annotations are selectively included by specifying the
[namespace](#Namespace) of the annotations' term. Consumers can opt not
to inspect the referenced document if none of the term namespaces is of
interest for the consumer.

In addition, the [qualifier](#Qualifier) of annotations to be included
MAY be specified. For instance, a service author might want to supply a
different set of annotations for various device form factors. If a
qualifier is specified, only those annotations from the specified term
namespace with the specified qualifier (applied to a model element of
the target namespace, if present) SHOULD be included. If no qualifier is
specified, all annotations within the referenced document from the
specified term namespace (taking into account the target namespace, if
present) SHOULD be included.

The qualifier also provides consumers insight about what qualifiers are
present in the referenced document. If the consumer is not interested in
that particular qualifier, the consumer can opt not to inspect the
referenced document.

In addition, the namespace of the annotations' [target](#Target) MAY be
specified. If a target namespace is specified, only those annotations
which apply a term form the specified term namespace to a model element
of the target namespace (with the specified qualifier, if present)
SHOULD be included. If no target namespace is specified, all annotations
within the referenced document from the specified term namespace (taking
into account the qualifier, if present) SHOULD be included.

The target namespace also provides consumers insight about what
namespaces are present in the referenced document. If the consumer is
not interested in that particular target namespace, the consumer can opt
not to inspect the referenced document.



::: {.varxml .rep}
### <a name="ElementedmxIncludeAnnotations4" href="#ElementedmxIncludeAnnotations4"> Element `edmx:IncludeAnnotations`</a>

The `edmx:IncludeAnnotations` element specifies the annotations to
include from the referenced CSDL document. If no
`edmx:IncludeAnnotations` element is specified, a client MAY ignore all
annotations in the referenced document that are not explicitly used in
an [`edm:Path`](#ValuePath) expression of the referencing document.

The `edmx:IncludeAnnotations` element MUST provide the `TermNamespace`
attribute, and it MAY provide the `Qualifier` and `TargetNamespace`
attribute.

### <a name="AttributeTermNamespace4.1" href="#AttributeTermNamespace4.1"> Attribute `TermNamespace`</a>

The value of `TermNamespace` is a namespace.

### <a name="AttributeQualifier4.2" href="#AttributeQualifier4.2"> Attribute `Qualifier`</a>

The value of `Qualifier` is a [simple identifier](#SimpleIdentifier).

### <a name="AttributeTargetNamespace4.3" href="#AttributeTargetNamespace4.3"> Attribute `TargetNamespace`</a>

The value of `TargetNamespace` is a namespace.
:::

::: {.varxml .example}
Example 5: reference documents that contain annotations
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.0">
  <edmx:Reference Uri="http://odata.org/ann/b">
    <edmx:IncludeAnnotations TermNamespace="org.example.validation" />
    <edmx:IncludeAnnotations TermNamespace="org.example.display"
                             Qualifier="Tablet" />
    <edmx:IncludeAnnotations TermNamespace="org.example.hcm"
                             TargetNamespace="com.example.Sales" />
    <edmx:IncludeAnnotations TermNamespace="org.example.hcm"
                             Qualifier="Tablet"
                             TargetNamespace="com.example.Person" />
  </edmx:Reference>
  <edmx:DataServices>…</edmx:DataServices>
</edmx:Edmx>
```
:::

::: example
The following annotations from `http://odata.org/ann/b` are included:
- Annotations that use a
term from the `org.example.validation` namespace, and
- Annotations that use a
term from the `org.example.display` namespace and specify a `Tablet`
qualifier and
- Annotations that apply
a term from the `org.example.hcm` namespace to an element of the
`com.example.Sales` namespace and
- Annotations that apply
a term from the `org.example.hcm` namespace to an element of the
`com.example.Person` namespace and specify a `Tablet` qualifier.
:::

-------

# <a name="Schema" href="#Schema">5 Schema</a>

One or more schemas describe the entity model exposed by an OData
service. The schema acts as a namespace for elements of the entity model
such as entity types, complex types, enumerations and terms.

A schema is identified by a [namespace](#Namespace). Schema namespaces
MUST be unique within the scope of a document and SHOULD be globally
unique. A schema cannot span more than one document.

The schema's namespace is combined with the name of elements in the
schema to create unique [qualified names](#QualifiedName), so
identifiers that are used to name types MUST be unique within a
namespace to prevent ambiguity.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

The namespace MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.


::: {.varxml .rep}
### <a name="ElementedmSchema5" href="#ElementedmSchema5"> Element `edm:Schema`</a>

The `edm:Schema` element defines a
schema. It MUST contain the `Namespace` attribute and it MAY
contain the `Alias` attribute.

It MAY contain elements [`edm:Action`](#Action),
[`edm:Annotations`](#AnnotationswithExternalTargeting),
[`edm:Annotation`](#Annotation), [`edm:ComplexType`](#ComplexType),
[`edm:EntityContainer`](#EntityContainer),
[`edm:EntityType`](#EntityType), [`edm:EnumType`](#EnumerationType),
[`edm:Function`](#Function), [`edm:Term`](#Term), or
[`edm:TypeDefinition`](#TypeDefinition).

### <a name="AttributeNamespace5.1" href="#AttributeNamespace5.1"> Attribute `Namespace`</a>

The value of `Namespace` is the namespace of the schema
:::

## <a name="Alias" href="#Alias">5.1 Alias</a>

A schema MAY specify an alias which MUST be a [simple
identifier](#SimpleIdentifier).


::: varxml
If a schema specifies an alias, the alias MAY be used instead of the
namespace within qualified names to identify model elements of that
schema. An alias only provides a more convenient notation, allowing a
short string to be substituted for a long namespace. Every model element
that can be identified via an alias-qualified name can alternatively be
identified via its full namespace-qualified name.
:::

Aliases are document-global, so all schemas defined within or included
into a document MUST have different aliases, and aliases MUST differ
from the namespaces of all schemas defined within or included into a
document. Aliases defined by a schema can be used throughout the
containing document and are not restricted to the schema that defines
them.

The alias MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.



::: {.varxml .rep}
### <a name="AttributeAlias5.2" href="#AttributeAlias5.2"> Attribute `Alias`</a>

The value of `Alias` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example 6: schema `org.example` with an alias and a description for the
schema
```xml
<Schema Namespace="org.example" Alias="self">   <Annotation Term="Core.Description" String="Example schema" />
  ...
</Schema>
```
:::

## <a name="AnnotationswithExternalTargeting" href="#AnnotationswithExternalTargeting">5.2 Annotations with External Targeting</a>



::: {.varxml .rep}
### <a name="ElementedmAnnotations6" href="#ElementedmAnnotations6"> Element `edm:Annotations`</a>

The `edm:Annotations` element is used to apply a group of annotations to
a single model element. It MUST contain the `Target` attribute and it
MAY contain the `Qualifier` attribute.

It MUST contain at least one [`edm:Annotation`](#Annotation) element.

### <a name="AttributeTarget6.1" href="#AttributeTarget6.1"> Attribute `Target`</a>

The value of `Target` is a path expression identifying the [annotation
target](#Target). It MUST resolve to a model element in scope.

### <a name="AttributeQualifier6.2" href="#AttributeQualifier6.2"> Attribute `Qualifier`</a>

The value of `Qualifier` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example 7: annotations should only be applied to tablet devices
```xml
<Annotations Target="org.example.Person" Qualifier="Tablet">
  <Annotation Term="Core.Description" String="Dummy" />
  ...
</Annotations>
```
:::

-------

# <a name="References" href="#References">Appendix A. References</a>

<!-- Required section -->

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## <a name="NormativeReferences" href="#NormativeReferences">A.1 Normative References</a>

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

###### [OData-v4.02]
- _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  - _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  - _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html

###### <a name="ECMAScript">[ECMAScript]</a>
_ECMAScript 2016 Language Specification, 7th Edition_. June 2016. Standard ECMA-262. http://www.ecma-international.org/publications/standards/Ecma-262.htm.

###### <a name="EPSG">[EPSG]</a>
_European Petroleum Survey Group (EPSG)_. http://www.epsg.org/.###### <a name="rfc7493">[RFC7493]</a>
_Bray, T., Ed., "The I-JSON Message Format", RFC7493, March 2015_.  
https://tools.ietf.org/html/rfc7493.###### <a name="rfc2119">[RFC2119]</a>
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_.  
http://www.rfc-editor.org/info/rfc2119.

###### <a name="ODataABNF">[OData-ABNF]</a>
_OData ABNF Construction Rules Version 4.01_.  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

###### <a name="ODataCSDL">[OData-CSDL-Schema]</a>
_OData CSDL JSON Schema_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataCSDLJSON">[OData-CSDLJSON]</a>
_OData Common Schema Definition Language (CSDL) JSON Representation Version 4.01_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataCSDLXML">[OData-CSDLXML]</a>
_OData Common Schema Definition Language (CSDL) XML Representation Version 4.01_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataEDM">[OData-EDM]</a>
_OData EDM XML Schema_.  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

###### <a name="ODataEDMX">[OData-EDMX]</a>
_OData EDM XML Schema_.  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

###### <a name="ODataJSON">[OData-JSON]</a>
_OData JSON Format Version 4.01_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataProtocol">[OData-Protocol]</a>
_OData Version 4.01 Part 1: Protocol_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataURL">[OData-URL]</a>
_OData Version 4.01 Part 2: URL Conventions_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataVocCore">[OData-VocCore]</a>
_OData Vocabularies Version 4.0: Core Vocabulary_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataVocMeasures">[OData-VocMeasures]</a>
_OData Vocabularies Version 4.0: Measures Vocabulary_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataVocValidation">[OData-VocValidation]</a>
_OData Vocabularies Version 4.0: Validation Vocabulary_.  
See link in "[Related work](#RelatedWork)" section on cover page.###### <a name="rfc6570">[RFC6570]</a>
_Gregorio, J., Fielding, R., Hadley, M., Nottingham, M., and D. Orchard, "URI Template", RFC 6570, March 2012_.  
http://tools.ietf.org/html/rfc6570.

###### <a name="rfc2119">[RFC2119]</a>
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_.  
https://www.rfc-editor.org/info/rfc2119.

###### <a name="rfc6570">[RFC6570]</a>
_Gregorio, J., Fielding, R., Hadley, M., Nottingham, M., and D. Orchard, “URI Template”, RFC 6570, March 2012_.  
http://tools.ietf.org/html/rfc6570.

###### <a name="rfc8174">[RFC8174]</a>
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_.  
http://www.rfc-editor.org/info/rfc8174.

###### <a name="rfc8259">[RFC8259]</a>
_Bray, T., Ed., "The JavaScript Object Notation (JSON) Data Interchange Format", RFC 8259, December 2017_.  
http://tools.ietf.org/html/rfc8259.

###### <a name="XML11">[XML-1.1]</a>
_Extensible Markup Language (XML) 1.1 (Second Edition)_. F. Yergeau, E. Maler, J. Cowan, T. Bray, C. M. Sperberg-McQueen, J. Paoli, Editors, W3C Recommendation, 16 August 2006.  
http://www.w3.org/TR/2006/REC-xml11-20060816. Latest version available at http://www.w3.org/TR/xml11/.

###### <a name="XMLBase">[XML-Base]</a>
_XML Base (Second Edition)_. J. Marsh, R. Tobin, Editors, W3C Recommendation, 28 January 2009.  
http://www.w3.org/TR/2009/REC-xmlbase-20090128/. Latest version available at http://www.w3.org/TR/xmlbase/. 
###### <a name="XMLSchema1">[XML-Schema-1]</a>
_W3C XML Schema Definition Language (XSD) 1.1 Part 1: Structures_. D. Beech, M. Maloney, C. M. Sperberg-McQueen, H. S. Thompson, S. Gao, N. Mendelsohn, Editors, W3C Recommendation, 5 April 2012.  
http://www.w3.org/TR/2012/REC-xmlschema11-1-20120405/. Latest version available at http://www.w3.org/TR/xmlschema11-1/.

###### <a name="XMLSchema2">[XML-Schema-2]</a>
_W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes_. D. Peterson, S. Gao, C. M. Sperberg-McQueen, H. S. Thompson, P. V. Biron, A. Malhotra, Editors, W3C Recommendation, 5 April 2012.  
http://www.w3.org/TR/2012/REC-xmlschema11-2-20120405/. Latest version available at http://www.w3.org/TR/xmlschema11-2/.

## <a name="InformativeReferences" href="#InformativeReferences">A.2 Informative References</a>

###### <a name="OpenUI5">[OpenUI5]</a>
_OpenUI5 Version 1.40.10 - OData V4 Metadata JSON Format_.  
https://openui5.hana.ondemand.com/1.40.10/#docs/guide/87aac894a40640f89920d7b2a414499b.html.

-------

# <a name="TableofXMLElementsandAttributes" href="#TableofXMLElementsandAttributes">Appendix B. Table of XML Elements and Attributes</a>

::: toc
- [Element `edmx:Edmx`](#ElementedmxEdmx1)
  - [Attribute `Version`](#AttributeVersion1.1)
  - [Element `edmx:DataServices`](#ElementedmxDataServices1.2)
- [Element `edmx:Reference`](#ElementedmxReference2)
  - [Attribute `Uri`](#AttributeUri2.1)
- [Element `edmx:Include`](#ElementedmxInclude3)
  - [Attribute `Namespace`](#AttributeNamespace3.1)
  - [Attribute `Alias`](#AttributeAlias3.2)
- [Element `edmx:IncludeAnnotations`](#ElementedmxIncludeAnnotations4)
  - [Attribute `TermNamespace`](#AttributeTermNamespace4.1)
  - [Attribute `Qualifier`](#AttributeQualifier4.2)
  - [Attribute `TargetNamespace`](#AttributeTargetNamespace4.3)
- [Element `edm:Schema`](#ElementedmSchema5)
  - [Attribute `Namespace`](#AttributeNamespace5.1)
  - [Attribute `Alias`](#AttributeAlias5.2)
- [Element `edm:Annotations`](#ElementedmAnnotations6)
  - [Attribute `Target`](#AttributeTarget6.1)
  - [Attribute `Qualifier`](#AttributeQualifier6.2)
:::

-------

# <a name="Acknowledgments" href="#Acknowledgments">Appendix C. Acknowledgments</a>

<!-- Required section -->

`Note: A Work Product approved by the TC must include a list of people who participated in the development of the Work Product. This is generally done by collecting the list of names in this appendix. This list shall be initially compiled by the Chair, and any Member of the TC may add or remove their names from the list by request. Remove this note before submitting for publication.`

## <a name="SpecialThanks" href="#SpecialThanks">C.1 Special Thanks</a>

<!-- This is an optional subsection to call out contributions from TC members. If a TC wants to thank non-TC members then they should avoid using the term "contribution" and instead thank them for their "expertise" or "assistance". -->

Substantial contributions to this document from the following individuals are gratefully acknowledged:

Participant Name, Affiliation or "Individual Member"

## <a name="Participants" href="#Participants">C.2 Participants</a>

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

# <a name="RevisionHistory" href="#RevisionHistory">Appendix D. Revision History</a>

<!-- Optional section -->

| Revision | Date | Editor | Changes Made |
| :--- | :--- | :--- | :--- |
| specname-v1.0-wd01 | yyyy-mm-dd | Editor Name | Initial working draft |

-------

# <a name="Notices" href="#Notices">Appendix E. Notices</a>

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

