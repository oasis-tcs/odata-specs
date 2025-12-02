
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# OData Common Schema Definition Language (CSDL) XML Representation Version 4.02

## Committee Specification Draft 02

## 28 February 2024

$\hbox{}$

#### This stage:
https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/csd02/odata-csdl-xml-v4.02-csd02.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/csd02/odata-csdl-xml-v4.02-csd02.html \
https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/csd02/odata-csdl-xml-v4.02-csd02.pdf

#### Previous stage:
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-xml-v4.02-csd01.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-xml-v4.02-csd01.html \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-xml-v4.02-csd01.pdf

#### Latest stage:
https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/odata-csdl-xml-v4.02.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/odata-csdl-xml-v4.02.html \
https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/odata-csdl-xml-v4.02.pdf

#### Technical Committee:
[OASIS Open Data Protocol (OData) TC](https://www.oasis-open.org/committees/odata/)

#### Chairs:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/)

#### Editors:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/) \
Heiko Theißen (heiko.theissen@sap.com), [SAP SE](http://www.sap.com/)

#### [Additional artifacts:]{id=AdditionalArtifacts}
This prose specification is one component of a Work Product that also includes:
* XML schemas: _OData EDMX XML Schema and OData EDM XML Schema_. https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/csd02/schemas/.

#### [Related work:]{id=RelatedWork}
This specification replaces or supersedes:
* _OData Common Schema Definition Language (CSDL) XML Representation Version 4.01_. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. OASIS Standard. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html.

This specification is related to:
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage: https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage: https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html
  * _ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases_. https://docs.oasis-open.org/odata/odata/v4.02/csd02/abnf/
* _OData Vocabularies Version 4.0_. Edited by Michael Pizzo, Ralf Handl, and Ram Jeyaraman. Latest stage: https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.html
* _OData JSON Format Version 4.02_. Edited by Ralf Handl, Mike Pizzo, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.html

#### Declared XML namespaces:
* http://docs.oasis-open.org/odata/ns/edmx
* http://docs.oasis-open.org/odata/ns/edm

#### Abstract:
OData services are described by an Entity Model (EDM). The Common Schema Definition Language (CSDL) defines specific representations of the entity data model exposed by an OData service, using XML, JSON, and other formats. This document (OData CSDL XML Representation) specifically defines the XML representation of CSDL.

#### Status:
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://groups.oasis-open.org/communities/tc-community-home2?CommunityKey=e7cac2a9-2d18-4640-b94d-018dc7d3f0e2#technical.

TC members should send comments on this specification to the TC's email list. Any individual may submit comments to the TC by sending email to Technical-Committee-Comments@oasis-open.org. Please use a Subject line like "Comment on OData CSDL".

This specification is provided under the [RF on RAND Terms Mode](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

#### Key words:
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC2119](#rfc2119) and [RFC8174](#rfc8174) when, and only when, they appear in all capitals, as shown here.

#### Citation format:
When referencing this specification the following citation format should be used:

**[OData-CSDL-XML-v4.02]**

_OData Common Schema Definition Language (CSDL) XML Representation Version 4.02_.
Edited by Ralf Handl, Michael Pizzo, and Heiko Theißen. 28 February 2024. OASIS Committee Specification Draft 02.
https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/csd02/odata-csdl-xml-v4.02-csd02.html.
Latest stage: https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/odata-csdl-xml-v4.02.html.

#### Notices
Copyright © OASIS Open 2024. All Rights Reserved.

Distributed under the terms of the OASIS [IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/).

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs.

For complete copyright information please see the full Notices section in an Appendix below.

-------

# Table of Contents

::: toc
- [1 Introduction](#Introduction)
  - [1.1 Changes from Earlier Versions](#ChangesfromEarlierVersions)
  - [1.2 Glossary](#Glossary)
    - [1.2.1 Definitions of Terms](#DefinitionsofTerms)
    - [1.2.2 Acronyms and Abbreviations](#AcronymsandAbbreviations)
    - [1.2.3 Document Conventions](#DocumentConventions)
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
  - [3.4 Type Facets](#TypeFacets)
    - [3.4.1 MaxLength](#MaxLength)
    - [3.4.2 Precision](#Precision)
    - [3.4.3 Scale](#Scale)
    - [3.4.4 Unicode](#Unicode)
    - [3.4.5 SRID](#SRID)
  - [3.5 Built-In Abstract Types](#BuiltInAbstractTypes)
  - [3.6 Built-In Types for defining Vocabulary Terms](#BuiltInTypesfordefiningVocabularyTerms)
  - [3.7 Annotations](#Annotations)
- [4 CSDL XML Document](#CSDLXMLDocument)
  - [4.1 Reference](#Reference)
  - [4.2 Included Schema](#IncludedSchema)
  - [4.3 Included Annotations](#IncludedAnnotations)
- [5 Schema](#Schema)
  - [5.1 Alias](#Alias)
  - [5.2 Annotations with External Targeting](#AnnotationswithExternalTargeting)
- [6 Entity Type](#EntityType)
  - [6.1 Derived Entity Type](#DerivedEntityType)
  - [6.2 Abstract Entity Type](#AbstractEntityType)
  - [6.3 Open Entity Type](#OpenEntityType)
  - [6.4 Media Entity Type](#MediaEntityType)
  - [6.5 Key](#Key)
- [7 Structural Property](#StructuralProperty)
  - [7.1 Type](#Type)
  - [7.2 Nullable](#Nullable)
  - [7.3 Default Value](#DefaultValue)
- [8 Navigation Property](#NavigationProperty)
  - [8.1 Navigation Property Type](#NavigationPropertyType)
  - [8.2 Nullable Navigation Property](#NullableNavigationProperty)
  - [8.3 Partner Navigation Property](#PartnerNavigationProperty)
  - [8.4 Containment Navigation Property](#ContainmentNavigationProperty)
  - [8.5 Referential Constraint](#ReferentialConstraint)
  - [8.6 On-Delete Action](#OnDeleteAction)
- [9 Complex Type](#ComplexType)
  - [9.1 Derived Complex Type](#DerivedComplexType)
  - [9.2 Abstract Complex Type](#AbstractComplexType)
  - [9.3 Open Complex Type](#OpenComplexType)
- [10 Enumeration Type](#EnumerationType)
  - [10.1 Underlying Integer Type](#UnderlyingIntegerType)
  - [10.2 Flags Enumeration Type](#FlagsEnumerationType)
  - [10.3 Enumeration Type Member](#EnumerationTypeMember)
- [11 Type Definition](#TypeDefinition)
  - [11.1 Underlying Primitive Type](#UnderlyingPrimitiveType)
- [12 Action and Function](#ActionandFunction)
  - [12.1 Action](#Action)
  - [12.2 Action Overloads](#ActionOverloads)
  - [12.3 Function](#Function)
  - [12.4 Function Overloads](#FunctionOverloads)
  - [12.5 Bound or Unbound Action or Function Overloads](#BoundorUnboundActionorFunctionOverloads)
  - [12.6 Entity Set Path](#EntitySetPath)
  - [12.7 Composable Function](#ComposableFunction)
  - [12.8 Return Type](#ReturnType)
  - [12.9 Parameter](#Parameter)
- [13 Entity Container](#EntityContainer)
  - [13.1 Extending an Entity Container](#ExtendinganEntityContainer)
  - [13.2 Entity Set](#EntitySet)
  - [13.3 Singleton](#Singleton)
  - [13.4 Navigation Property Binding](#NavigationPropertyBinding)
    - [13.4.1 Navigation Property Path Binding](#NavigationPropertyPathBinding)
    - [13.4.2 Binding Target](#BindingTarget)
  - [13.5 Action Import](#ActionImport)
  - [13.6 Function Import](#FunctionImport)
- [14 Vocabulary and Annotation](#VocabularyandAnnotation)
  - [14.1 Term](#Term)
    - [14.1.1 Specialized Term](#SpecializedTerm)
    - [14.1.2 Applicability](#Applicability)
  - [14.2 Annotation](#Annotation)
    - [14.2.1 Qualifier](#Qualifier)
    - [14.2.2 Target](#Target)
  - [14.3 Constant Expression](#ConstantExpression)
    - [14.3.1 Binary](#Binary)
    - [14.3.2 Boolean](#Boolean)
    - [14.3.3 Date](#Date)
    - [14.3.4 DateTimeOffset](#DateTimeOffset)
    - [14.3.5 Decimal](#Decimal)
    - [14.3.6 Duration](#Duration)
    - [14.3.7 Enumeration Member](#EnumerationMember)
    - [14.3.8 Floating-Point Number](#FloatingPointNumber)
    - [14.3.9 Guid](#Guid)
    - [14.3.10 Integer](#Integer)
    - [14.3.11 String](#String)
    - [14.3.12 Time of Day](#TimeofDay)
    - [14.3.13 Geo Values](#GeoValues)
    - [14.3.14 Stream Values](#StreamValues)
  - [14.4 Dynamic Expression](#DynamicExpression)
    - [14.4.1 Path Expressions](#PathExpressions)
      - [14.4.1.1 Path Syntax](#PathSyntax)
      - [14.4.1.2 Path Evaluation](#PathEvaluation)
      - [14.4.1.3 Annotation Path](#AnnotationPath)
      - [14.4.1.4 Model Element Path](#ModelElementPath)
      - [14.4.1.5 Navigation Property Path](#NavigationPropertyPath)
      - [14.4.1.6 Property Path](#PropertyPath)
      - [14.4.1.7 Value Path](#ValuePath)
    - [14.4.2 Comparison and Logical Operators](#ComparisonandLogicalOperators)
    - [14.4.3 Arithmetic Operators](#ArithmeticOperators)
    - [14.4.4 Apply Client-Side Functions](#ApplyClientSideFunctions)
      - [14.4.4.1 Canonical Functions](#CanonicalFunctions)
      - [14.4.4.2 Function `odata.fillUriTemplate`](#FunctionodatafillUriTemplate)
      - [14.4.4.3 Function `odata.matchesPattern`](#FunctionodatamatchesPattern)
      - [14.4.4.4 Function `odata.uriEncode`](#FunctionodatauriEncode)
    - [14.4.5 Cast](#Cast)
    - [14.4.6 Collection](#Collection)
    - [14.4.7 If-Then-Else](#IfThenElse)
    - [14.4.8 Is-Of](#IsOf)
    - [14.4.9 Labeled Element](#LabeledElement)
    - [14.4.10 Labeled Element Reference](#LabeledElementReference)
    - [14.4.11 Null](#Null)
    - [14.4.12 Record](#Record)
    - [14.4.13 URL Reference](#URLReference)
- [15 Identifier and Path Values](#IdentifierandPathValues)
  - [15.1 Namespace](#Namespace)
  - [15.2 Simple Identifier](#SimpleIdentifier)
  - [15.3 Qualified Name](#QualifiedName)
  - [15.4 Target Path](#TargetPath)
- [16 CSDL Examples](#CSDLExamples)
  - [16.1 Products and Categories Example](#ProductsandCategoriesExample)
  - [16.2 Annotations for Products and Categories Example](#AnnotationsforProductsandCategoriesExample)
- [17 Conformance](#Conformance)
- [A References](#References)
  - [A.1 Normative References](#NormativeReferences)
- [B Table of XML Elements and Attributes](#TableofXMLElementsandAttributes)
- [C Acknowledgments](#Acknowledgments)
  - [C.1 Special Thanks](#SpecialThanks)
  - [C.2 Participants](#Participants)
- [D Revision History](#RevisionHistory)
- [E Notices](#Notices)
:::


-------

# <a id="Introduction" href="#Introduction">1 Introduction</a>


OData services are described in terms of an [Entity
Model](#EntityModel). The Common Schema Definition Language (CSDL)
defines a representation of the entity model exposed by an OData
service using the Extensible Markup Language (XML) 1.0 (Fifth Edition)
[XML-1.0](#XML-10) with further building blocks from the W3C XML
Schema Definition Language (XSD) 1.1 as described in
[XML-Schema-1](#XML-Schema1) and
[XML-Schema-2](#XML-Schema2).

## <a id="ChangesfromEarlierVersions" href="#ChangesfromEarlierVersions">1.1 Changes from Earlier Versions</a>

Section | Feature / Change | Issue
--------|------------------|------
[Section 3.3](#PrimitiveTypes)| Allow stream-valued non-binding parameters| [525](https://github.com/oasis-tcs/odata-specs/issues/525)
[Section 3.4.5](#SRID)| SRID value `variable` is deprecated| [1935](https://github.com/oasis-tcs/odata-specs/issues/1935)
[Section 4](#CSDLXMLDocument) | Additional `Version` value `4.02` |
[Section 13](#EntityContainer)| All children of `edm:EntityContainer` are optional| [464](https://github.com/oasis-tcs/odata-specs/issues/464)
[Section 12](#ActionandFunction) | Actions and functions can take, and return, delta payloads | [348](https://github.com/oasis-tcs/odata-specs/issues/348)
[Section 12.8](#ReturnType) | Returned collections of entities may contain `null` values | [1983](https://github.com/oasis-tcs/odata-specs/issues/1983)
[Section 14.3.13](#GeoValues) | Constant Geo values in annotations | [654](https://github.com/oasis-tcs/odata-specs/issues/654)
[Section 14.3.14](#StreamValues) | Constant Stream values in annotations | [654](https://github.com/oasis-tcs/odata-specs/issues/654)
[Section 14.4.1.2](#PathEvaluation)| New path evaluation rules for annotations targeting annotations and external targeting via container| [575](https://github.com/oasis-tcs/odata-specs/issues/575)
[Section 14.4.7](#IfThenElse)| Nested `If` without else part in collections| [326](https://github.com/oasis-tcs/odata-specs/issues/326)
[Section 15.2](#SimpleIdentifier) | Prefer identifiers consisting only of latin letters, the underscore, and decimal numbers | [375](https://github.com/oasis-tcs/odata-specs/issues/375)
[Section 17](#Conformance) | Additional conformance clauses for version 4.02 |

## <a id="Glossary" href="#Glossary">1.2 Glossary</a>

### <a id="DefinitionsofTerms" href="#DefinitionsofTerms">1.2.1 Definitions of Terms</a>

### <a id="AcronymsandAbbreviations" href="#AcronymsandAbbreviations">1.2.2 Acronyms and Abbreviations</a>

<!-- TODO -->

### <a id="DocumentConventions" href="#DocumentConventions">1.2.3 Document Conventions</a>

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example 1: text describing an example uses this paragraph style
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
Here is a customized command line which will generate HTML from the markdown file (named `odata-csdl-xml-v4.02-csd02.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs+smart
       -t html
       -o odata-csdl-xml-v4.02-csd02.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --wrap=none
       --metadata pagetitle="OData Common Schema Definition Language (CSDL) XML Representation Version 4.02"
       odata-csdl-xml-v4.02-csd02.md
```

This uses pandoc 3.8.3 from https://github.com/jgm/pandoc/releases/tag/3.8.3.
-->

<!-- These source files can be used to produce the JSON variant or the XML variant,
     by using either new Number("...", "json") or new Number("...", "xml").
     Lines between the next and the closing : belong to the JSON variant only. -->

-------


<!-- Lines between the next and the closing : belong to the XML variant only. -->
# <a id="XMLRepresentation" href="#XMLRepresentation">2 XML Representation</a>

OData CSDL XML is a full representation of the OData Common Schema
Definition Language in the Extensible Markup Language (XML) 1.0 (Fifth
Edition) [XML-1.0](#XML-10) with further building blocks from the
W3C XML Schema Definition Language (XSD) 1.1 as described in
[XML-Schema-1](#XML-Schema1) and
[XML-Schema-2](#XML-Schema2).

It is an alternative to the CSDL JSON representation defined in
[OData-CSDLJSON](#ODataCSDL) and neither adds nor
removes features.

## <a id="RequestingtheXMLRepresentation" href="#RequestingtheXMLRepresentation">2.1 Requesting the XML Representation</a>

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

## <a id="XMLNamespaces" href="#XMLNamespaces">2.2 XML Namespaces</a>

In addition to the default XML namespace, the elements and attributes
used to describe the entity model of an OData service are defined in one
of the following namespaces.

### <a id="NamespaceEDMX" href="#NamespaceEDMX">2.2.1 Namespace EDMX</a>

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

### <a id="NamespaceEDM" href="#NamespaceEDM">2.2.2 Namespace EDM</a>

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

## <a id="XMLSchemaDefinitions" href="#XMLSchemaDefinitions">2.3 XML Schema Definitions</a>

This specification contains normative XML schemas for the EDMX and EDM
namespaces; see [OData-EDMX](#ODataEDMX) and
[OData-EDM](#ODataEDM)

These XML schemas only define the shape of a well-formed CSDL XML
document and are not descriptive enough to define what a correct CSDL
XML document MUST be in every imaginable use case. This specification
document defines additional rules that correct CSDL XML documents MUST
fulfill. In case of doubt on what makes a CSDL XML document correct the
rules defined in this specification document take precedence.

## <a id="XMLDocumentOrder" href="#XMLDocumentOrder">2.4 XML Document Order</a>

Client libraries MUST retain the document order of XML elements for CSDL
XML documents because for some elements the order of child elements is
significant. This includes, but is not limited to, [members of
enumeration types](#EnumerationTypeMember) and items within a
[collection expression](#Collection).

OData does not impose any ordering constraints on XML attributes within
XML elements.

-------

# <a id="EntityModel" href="#EntityModel">3 Entity Model</a>

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

## <a id="NominalTypes" href="#NominalTypes">3.1 Nominal Types</a>

A nominal type has a name that MUST be a [simple
identifier](#SimpleIdentifier). Nominal types are referenced using their
[qualified name](#QualifiedName). The qualified type name MUST be unique
within a model as it facilitates references to the element from other
parts of the model.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

## <a id="StructuredTypes" href="#StructuredTypes">3.2 Structured Types</a>

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

## <a id="PrimitiveTypes" href="#PrimitiveTypes">3.3 Primitive Types</a>

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

Some of these types allow facets, defined in [section 3.4](#TypeFacets).

Representation of primitive type values within a URL is defined by the rule `primitiveLiteral` in [OData-ABNF](#ODataABNF).
Representation within request and response bodies is format specific.

## <a id="TypeFacets" href="#TypeFacets">3.4 Type Facets</a>

The facets in the following subsections modify or constrain the acceptable values of primitive typed model elements,
for example a [structural property](#StructuralProperty),
action or function [parameter](#Parameter),
action or function [return type](#ReturnType), or
[term](#Term).

For single-valued model elements the facets apply to the value of the
model element. For collection-valued model elements the facets apply to the items
in the collection.

### <a id="MaxLength" href="#MaxLength">3.4.1 MaxLength</a>

A positive integer value specifying the maximum length of a binary,
stream or string value. For binary or stream values this is the octet
length of the binary data, for string values it is the character length
(number of code points for Unicode).

If no maximum length is specified, clients SHOULD expect arbitrary
length.


::: {.varxml .rep}
### <a id="TypeFacetAttributes.1" href="#TypeFacetAttributes.1">Type Facet Attributes</a>
### <a id="AttributeMaxLength.1.1" href="#AttributeMaxLength.1.1">Attribute `MaxLength`</a>

The value of `MaxLength` is a positive integer or the symbolic value
`max` as a shorthand for the maximum length supported for the type by
the service.

Note: the symbolic value `max` is only allowed in OData 4.0 responses;
it is deprecated in OData 4.01. While clients MUST be prepared for this
symbolic value, OData 4.01 or greater services MUST NOT return the
symbolic value `max` and MAY instead specify the concrete maximum length
supported for the type by the service or omit the attribute entirely.
:::

### <a id="Precision" href="#Precision">3.4.2 Precision</a>

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



::: {.varxml .rep}
### <a id="AttributePrecision.1.2" href="#AttributePrecision.1.2">Attribute `Precision`</a>

The value of `Precision` is a number.

If not specified for a decimal value, the decimal value has
unspecified precision.

If not specified for a temporal value, the temporal value has a
precision of zero.
:::

::: {.varxml .example}
Example 2: [`Precision`](#Precision) facet applied to the
`DateTimeOffset` type
```xml
<Property Name="SuggestedTimes" Type="Collection(Edm.DateTimeOffset)"
          Precision="6" />
```
:::

### <a id="Scale" href="#Scale">3.4.3 Scale</a>

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






::: {.varxml .rep}
### <a id="AttributeScale.1.3" href="#AttributeScale.1.3">Attribute `Scale`</a>

The value of `Scale` is a number or one of the symbolic values
`floating` or `variable`.

Services SHOULD use lower-case values; clients SHOULD accept values in a
case-insensitive manner.

If not specified, the `Scale` facet defaults to zero.
:::

::: {.varxml .example}
Example 3: [`Precision`](#Precision)`=3` and `Scale=2`.  
Allowed values: 1.23, 0.23, 3.14 and 0.7, not allowed values: 123, 12.3  
(the [`Nullable`](#Nullable) attribute can be ignored in these examples)
```xml
<Property Name="Amount32" Type="Edm.Decimal" Nullable="false" Precision="3" Scale="2" />
```
:::

::: {.varxml .example}
Example 4: `Precision=2` equals `Scale`.  
Allowed values: 0.23, 0.7, not allowed values: 1.23, 1.2
```xml
<Property Name="Amount22" Type="Edm.Decimal" Nullable="false" Precision="2" Scale="2" />
```
:::

::: {.varxml .example}
Example 5: `Precision=3` and a variable `Scale`.  
Allowed values: 0.123, 1.23, 0.23, 0.7, 123 and 12.3, not allowed
values: 12.34, 1234 and 123.4 due to the limited precision.
```xml
<Property Name="Amount3v" Type="Edm.Decimal" Nullable="false" Precision="3" Scale="variable" />
```
:::

::: {.varxml .example}
Example 6: `Precision=7` and a floating `Scale`.  
Allowed values: -1.234567e3, 1e-101, 9.999999e96, not allowed values:
1e-102 and 1e97 because exponents are out of range.
```xml
<Property Name="Amount7f" Type="Edm.Decimal" Nullable="false" Precision="7" Scale="floating" />
```
:::

### <a id="Unicode" href="#Unicode">3.4.4 Unicode</a>

For a string-typed model element the `Unicode` facet indicates whether the it
might contain and accept string values with Unicode characters (code
points) beyond the ASCII character set. The value `false` indicates that
the it will only contain and accept string values with characters
limited to the ASCII character set.

If no value is specified, the `Unicode` facet defaults to `true`.


::: {.varxml .rep}
### <a id="AttributeUnicode.1.4" href="#AttributeUnicode.1.4">Attribute `Unicode`</a>

The value of `Unicode` is one of the Boolean literals `true` or `false`.
Absence of the attribute means `true`.
:::

### <a id="SRID" href="#SRID">3.4.5 SRID</a>

For a geometry- or geography-typed model element the `SRID` facet identifies which
spatial reference system is applied to its values.

The value of the `SRID` facet MUST be a non-negative integer or the
special value `variable`. If no value is specified, the facet defaults
to `0` for `Geometry` types or `4326` for `Geography` types.
Services SHOULD NOT use the special value `variable` as some formats, for example [OData-JSON](#ODataJSON), do not define a representation for instance-specific spatial reference systems.

The valid values of the `SRID` facet and their meanings are as defined
by the European Petroleum Survey Group [EPSG](#_EPSG).


::: {.varxml .rep}
### <a id="AttributeSRID.1.5" href="#AttributeSRID.1.5">Attribute `SRID`</a>

The value of `SRID` is a number or the symbolic value `variable`.
:::

## <a id="BuiltInAbstractTypes" href="#BuiltInAbstractTypes">3.5 Built-In Abstract Types</a>

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

## <a id="BuiltInTypesfordefiningVocabularyTerms" href="#BuiltInTypesfordefiningVocabularyTerms">3.6 Built-In Types for defining Vocabulary Terms</a>

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
[section 14.4.1](#PathExpressions) for details.

## <a id="Annotations" href="#Annotations">3.7 Annotations</a>

Many parts of the model can be decorated with additional information
using [annotations](#Annotation). Annotations are identified by their
term name and an optional qualifier that allows applying the same term
multiple times to the same model element.

A model element MUST NOT specify more than one annotation for a given
combination of term and qualifier.


-------

# <a id="CSDLXMLDocument" href="#CSDLXMLDocument">4 CSDL XML Document</a>

<!-- Lines from here to the closing ::: belong to the JSON variant only. -->


<!-- Lines from here to the closing ::: belong to the XML variant only. -->
::: {.varxml .rep}
### <a id="ElementedmxEdmx.2" href="#ElementedmxEdmx.2">Element `edmx:Edmx`</a>

The `edmx:Edmx` element is the root element of a CSDL XML document. It
MUST contain the `Version` attribute and it MUST contain exactly one
`edmx:DataServices` element.

It MAY contain [`edmx:Reference`](#Reference) elements to reference
other CSDL documents.

### <a id="AttributeVersion.2.1" href="#AttributeVersion.2.1">Attribute `Version`</a>

The `Version` attribute specifies the OData protocol version of the
document, either `4.0`, `4.01`, or `4.02`.

Services MUST return an OData 4.0 response if the request was
made with an `OData-MaxVersion` header with a value of `4.0`.

### <a id="ElementedmxDataServices.3" href="#ElementedmxDataServices.3">Element `edmx:DataServices`</a>

The `edmx:DataServices` element MUST contain one or more
[`edm:Schema`](#Schema) elements which define the schemas exposed by the
OData service.
:::

::: {.varxml .example}
Example 7:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.01">
  <edmx:DataServices>
    …
  </edmx:DataServices>
</edmx:Edmx>
```
:::

## <a id="Reference" href="#Reference">4.1 Reference</a>

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
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation, defined in [OData-VocCore](#ODataVocCore), MAY be used to
indicate a particular version of the referenced document. If the
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation is present, the `$schemaversion` system query option, defined in
[OData-Protocol, section 11.2.12](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#SystemQueryOptionschemaversion), SHOULD be used when retrieving the
referenced schema document.



::: {.varxml .rep}
### <a id="ElementedmxReference.4" href="#ElementedmxReference.4">Element `edmx:Reference`</a>

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

### <a id="AttributeUri.4.1" href="#AttributeUri.4.1">Attribute `Uri`</a>

The value of `Uri` is an absolute or relative URI; relative URIs are
relative to the `xml:base` attribute, see
[XML-Base](#XML-Base).
:::

::: {.varxml .example}
Example 8: references to other CSDL documents
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.0">
  <edmx:Reference
   Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.xml">
   …
  </edmx:Reference>
  <edmx:Reference
   Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml">
    …
  </edmx:Reference>
  <edmx:Reference Uri="http://example.org/display/v1">
    …
  </edmx:Reference>
  <edmx:DataServices>…</edmx:DataServices>
</edmx:Edmx>
```
:::

## <a id="IncludedSchema" href="#IncludedSchema">4.2 Included Schema</a>

A [reference](#Reference) MAY include zero or more schemas from the referenced
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
### <a id="ElementedmxInclude.5" href="#ElementedmxInclude.5">Element `edmx:Include`</a>

The `edmx:Include` element specifies a schema to include from the
referenced CSDL document. It MUST provide the `Namespace` attribute and
it MAY provide the `Alias` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeNamespace.5.1" href="#AttributeNamespace.5.1">Attribute `Namespace`</a>

The value of `Namespace` is the namespace of a schema defined in the
referenced CSDL document.

### <a id="AttributeAlias.5.2" href="#AttributeAlias.5.2">Attribute `Alias`</a>

The value of `Alias` is a [simple identifier](#SimpleIdentifier) that
can be used in qualified names instead of the namespace.
:::

::: {.varxml .example}
Example 9: references to entity models containing definitions of
vocabulary terms
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.0">
  <edmx:Reference
   Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.xml">
    <edmx:Include Namespace="Org.OData.Capabilities.V1" />
  </edmx:Reference>
  <edmx:Reference
   Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml">
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

## <a id="IncludedAnnotations" href="#IncludedAnnotations">4.3 Included Annotations</a>

In addition to including whole schemas with all model constructs defined
within that schema, a [reference](#Reference) may include annotations.

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
### <a id="ElementedmxIncludeAnnotations.6" href="#ElementedmxIncludeAnnotations.6">Element `edmx:IncludeAnnotations`</a>

The `edmx:IncludeAnnotations` element specifies the annotations to
include from the referenced CSDL document. If no
`edmx:IncludeAnnotations` element is specified, a client MAY ignore all
annotations in the referenced document that are not explicitly used in
an [`edm:Path`](#ValuePath) expression of the referencing document.

The `edmx:IncludeAnnotations` element MUST provide the `TermNamespace`
attribute, and it MAY provide the `Qualifier` and `TargetNamespace`
attribute.

### <a id="AttributeTermNamespace.6.1" href="#AttributeTermNamespace.6.1">Attribute `TermNamespace`</a>

The value of `TermNamespace` is a namespace.

### <a id="AttributeQualifier.6.2" href="#AttributeQualifier.6.2">Attribute `Qualifier`</a>

The value of `Qualifier` is a [simple identifier](#SimpleIdentifier).

### <a id="AttributeTargetNamespace.6.3" href="#AttributeTargetNamespace.6.3">Attribute `TargetNamespace`</a>

The value of `TargetNamespace` is a namespace.
:::

::: {.varxml .example}
Example 10: reference documents that contain annotations
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

# <a id="Schema" href="#Schema">5 Schema</a>

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

Services SHOULD NOT have [actions](#Action) and [functions](#Function) with the same name, and MUST NOT have
actions and functions with the same name bound to the same type.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

The namespace MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.


::: {.varxml .rep}
### <a id="ElementedmSchema.7" href="#ElementedmSchema.7">Element `edm:Schema`</a>

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

### <a id="AttributeNamespace.7.1" href="#AttributeNamespace.7.1">Attribute `Namespace`</a>

The value of `Namespace` is the namespace of the schema
:::

## <a id="Alias" href="#Alias">5.1 Alias</a>

A schema MAY specify an alias which MUST be a [simple
identifier](#SimpleIdentifier).


If a schema specifies an alias, the alias MAY be used instead of the
namespace within qualified names to identify model elements of that
schema. An alias only provides a more convenient notation, allowing a
short string to be substituted for a long namespace. Every model element
that can be identified via an alias-qualified name can alternatively be
identified via its full namespace-qualified name.

Aliases are document-global, so all schemas defined within or included
into a document MUST have different aliases, and aliases MUST differ
from the namespaces of all schemas defined within or included into a
document. Aliases defined by a schema can be used throughout the
containing document and are not restricted to the schema that defines
them.

The alias MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.



::: {.varxml .rep}
### <a id="AttributeAlias.7.2" href="#AttributeAlias.7.2">Attribute `Alias`</a>

The value of `Alias` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example 11: schema `org.example` with an alias and a description for the
schema
```xml
<Schema Namespace="org.example" Alias="self">
  <Annotation Term="Core.Description" String="Example schema" />
  …
</Schema>
```
:::

## <a id="AnnotationswithExternalTargeting" href="#AnnotationswithExternalTargeting">5.2 Annotations with External Targeting</a>



::: {.varxml .rep}
### <a id="ElementedmAnnotations.8" href="#ElementedmAnnotations.8">Element `edm:Annotations`</a>

The `edm:Annotations` element is used to apply a group of annotations to
a single model element. It MUST contain the `Target` attribute and it
MAY contain the `Qualifier` attribute.

It MUST contain at least one [`edm:Annotation`](#Annotation) element.

### <a id="AttributeTarget.8.1" href="#AttributeTarget.8.1">Attribute `Target`</a>

The value of `Target` is an expression identifying the [annotation
target](#Target). It MUST resolve to a model element in scope.

### <a id="AttributeQualifier.8.2" href="#AttributeQualifier.8.2">Attribute `Qualifier`</a>

The value of `Qualifier` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example 12: annotations should only be applied to tablet devices
```xml
<Annotations Target="org.example.Person" Qualifier="Tablet">
  <Annotation Term="Core.Description" String="Dummy" />
  …
</Annotations>
```
:::

-------

# <a id="EntityType" href="#EntityType">6 Entity Type</a>

Entity types are [nominal](#NominalTypes) [structured
types](#StructuredTypes) with a key that consists of one or more
references to [structural properties](#StructuralProperty). An entity
type is the template for an entity: any uniquely identifiable record
such as a customer or order.

The entity type's name is a [simple identifier](#SimpleIdentifier) that
MUST be unique within its schema.

An entity type can define two types of properties. A [structural
property](#StructuralProperty) is a named reference to a primitive,
complex, or enumeration type, or a collection of primitive, complex, or
enumeration types. A [navigation property](#NavigationProperty) is a
named reference to another entity type or collection of entity types.

All properties MUST have a unique name within an entity type. Properties
MUST NOT have the same name as the declaring entity type. They MAY have
the same name as one of the direct or indirect base types or derived
types.



::: {.varxml .rep}
### <a id="ElementedmEntityType.9" href="#ElementedmEntityType.9">Element `edm:EntityType`</a>

The `edm:EntityType` element MUST contain the `Name` attribute, and it
MAY contain the [`BaseType`](#DerivedEntityType),
[`Abstract`](#AbstractEntityType), [`OpenType`](#OpenEntityType), and
[`HasStream`](#MediaEntityType) attributes.

It MAY contain [`edm:Property`](#StructuralProperty) and
[`edm:NavigationProperty`](#NavigationProperty) elements describing the
properties of the entity type.

It MAY contain one [`edm:Key`](#Key) element.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.9.1" href="#AttributeName.9.1">Attribute `Name`</a>

The value of `Name` is the entity type's name.
:::

::: {.varxml .example}
Example <a id="entitytype" href="#entitytype">13</a>: a simple entity type
```xml
<EntityType Name="Employee">
  <Key>
    <PropertyRef Name="ID" />
  </Key>
  <Property Name="ID" Type="Edm.String" Nullable="false" />
  <Property Name="FirstName" Type="Edm.String" Nullable="false" />
  <Property Name="LastName" Type="Edm.String" Nullable="false" />
  <NavigationProperty Name="Manager" Type="self.Manager" />
</EntityType>
```
:::

## <a id="DerivedEntityType" href="#DerivedEntityType">6.1 Derived Entity Type</a>

An entity type can inherit from another entity type by specifying it as
its base type.

An entity type inherits the [key](#Key) as well as structural and
navigation properties of its base type.

An entity type MUST NOT introduce an inheritance cycle by specifying a
base type.



::: {.varxml .rep}
### <a id="AttributeBaseType.9.2" href="#AttributeBaseType.9.2">Attribute `BaseType`</a>

The value of `BaseType` is the qualified name of the base type.
:::

::: {.varxml .example}
Example 14: a derived entity type based on the previous example
```xml
<EntityType Name="Manager" BaseType="self.Employee">
  <Property Name="AnnualBudget" Type="Edm.Decimal" />
  <NavigationProperty Name="Employees" Type="Collection(self.Employee)" />
</EntityType>
```
:::

::: example
Note: the derived type has the same name as one of the properties of its
base type.
:::

## <a id="AbstractEntityType" href="#AbstractEntityType">6.2 Abstract Entity Type</a>

An entity type MAY indicate that it is abstract and cannot have
instances.

For OData 4.0 responses a non-abstract entity type MUST define a
[key](#Key) or derive from a [base type](#DerivedEntityType) with a
defined key.

An abstract entity type MUST NOT inherit from a non-abstract entity
type.


::: {.varxml .rep}
### <a id="AttributeAbstract.9.3" href="#AttributeAbstract.9.3">Attribute `Abstract`</a>

The value of `Abstract` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## <a id="OpenEntityType" href="#OpenEntityType">6.3 Open Entity Type</a>

An entity type MAY indicate that it is open and allows clients to add
properties dynamically to instances of the type by specifying uniquely
named property values in the payload used to insert or update an
instance of the type.

An entity type derived from an open entity type MUST indicate that it is
also open.

Note: structural and navigation properties MAY be returned by the
service on instances of any structured type, whether or not the type is
marked as open. Clients MUST always be prepared to deal with additional
properties on instances of any structured type, see
[OData-Protocol, section 3](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#DataModel).


::: {.varxml .rep}
### <a id="AttributeOpenType.9.4" href="#AttributeOpenType.9.4">Attribute `OpenType`</a>

The value of `OpenType` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## <a id="MediaEntityType" href="#MediaEntityType">6.4 Media Entity Type</a>

An entity type that does not specify a base type MAY indicate that it is
a media entity type. *Media entities* are entities that represent a
media stream, such as a photo. Use a media entity if the out-of-band
stream is the main topic of interest and the media entity is just
additional structured information attached to the stream. Use a normal
entity with one or more properties of type `Edm.Stream` if the
structured data of the entity is the main topic of interest and the
stream data is just additional information attached to the structured
data. For more information on media entities see
[OData-Protocol, section 11.2.3](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#RequestingtheMediaStreamofaMediaEntityusingvalue).

An entity type derived from a media entity type MUST indicate that it is
also a media entity type.

Media entity types MAY specify a list of acceptable media types using an
annotation with term
[`Core.AcceptableMediaTypes`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#AcceptableMediaTypes),
see [OData-VocCore](#ODataVocCore).


::: {.varxml .rep}
### <a id="AttributeHasStream.9.5" href="#AttributeHasStream.9.5">Attribute `HasStream`</a>

The value of `HasStream` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## <a id="Key" href="#Key">6.5 Key</a>

An entity is uniquely identified within an entity set by its key. A key
MAY be specified if the entity type does not specify a [base
type](#DerivedEntityType) that already has a key declared.

In order to be specified as the type of an [entity set](#EntitySet) or a
collection-valued [containment navigation
property](#ContainmentNavigationProperty), the entity type MUST either
specify a key or inherit its key from its [base
type](#DerivedEntityType).

In OData 4.01 responses entity types used for [singletons](#Singleton)
or single-valued [navigation properties](#NavigationProperty) do not
require a key. In OData 4.0 responses entity types used for
[singletons](#Singleton) or single-valued [navigation
properties](#NavigationProperty) MUST have a key defined.

An entity type's key refers to the set of properties whose values
uniquely identify an instance of the entity type within an entity set.
The key MUST consist of at least one property.

Key properties MUST NOT be nullable and MUST be typed with an
[enumeration type](#EnumerationType), one of the following [primitive
types](#PrimitiveTypes), or a [type definition](#TypeDefinition) based
on one of these primitive types:

-   `Edm.Boolean`
-   `Edm.Byte`
-   `Edm.Date`
-   `Edm.DateTimeOffset`
-   `Edm.Decimal`
-   `Edm.Duration`
-   `Edm.Guid`
-   `Edm.Int16`
-   `Edm.Int32`
-   `Edm.Int64`
-   `Edm.SByte`
-   `Edm.String`
-   `Edm.TimeOfDay`

Key property values MAY be language-dependent, but their values MUST be
unique across all languages and the entity-ids (defined in
[OData-Protocol, section 4.1](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#EntityIdsandEntityReferences)) MUST be language independent.

A key property MUST be a non-nullable primitive property of the entity
type itself, including non-nullable primitive properties of non-nullable
single-valued complex properties, recursively.

In OData 4.01 the key properties of a directly related entity type MAY
also be part of the key if the navigation property is single-valued and
not nullable. This includes navigation properties of non-nullable
single-valued complex properties (recursively) of the entity type. If a
key property of a related entity type is part of the key, all key
properties of the related entity type MUST also be part of the key.

If the key property is a property of a complex property (recursively) or
of a directly related entity type, the key MUST specify an alias for
that property that MUST be a [simple identifier](#SimpleIdentifier) and
MUST be unique within the set of aliases, structural and navigation
properties of the declaring entity type and any of its base types.

An alias MUST NOT be defined if the key property is a primitive property
of the entity type itself.

For key properties that are a property of a complex or navigation
property, the alias MUST be used in the key predicate of URLs instead of
the path to the property because the required percent-encoding of the
forward slash separating segments of the path to the property would make
URL construction and parsing rather complicated. The alias MUST NOT be
used in the query part of URLs, where paths to properties don't require
special encoding and are a standard constituent of expressions anyway.





::: {.varxml .rep}
### <a id="ElementedmKey.10" href="#ElementedmKey.10">Element `edm:Key`</a>

The `edm:Key` element MUST contain at least one `edm:PropertyRef`
element.

### <a id="ElementedmPropertyRef.11" href="#ElementedmPropertyRef.11">Element `edm:PropertyRef`</a>

The `edm:PropertyRef` element MUST contain the `Name` attribute and MAY
contain the `Alias` attribute.

### <a id="AttributeName.11.1" href="#AttributeName.11.1">Attribute `Name`</a>

The value of `Name` is a path expression leading to a primitive
property. The names of the properties in the path are joined together by
forward slashes.

### <a id="AttributeAlias.11.2" href="#AttributeAlias.11.2">Attribute `Alias`</a>

The value of `Alias` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example 15: entity type with a simple key
```xml
<EntityType Name="Category">
  <Key>
    <PropertyRef Name="ID" />
  </Key>
  <Property Name="ID" Type="Edm.Int32" Nullable="false" />
  <Property Name="Name" Type="Edm.String" />
</EntityType>
```
:::

::: {.varxml .example}
Example <a id="complexkey" href="#complexkey">16</a>: entity type with a simple key referencing a property of a
[complex type](#ComplexType)
```xml
<EntityType Name="Category">
  <Key>
    <PropertyRef Name="Info/ID" Alias="EntityInfoID" />
  </Key>
  <Property Name="Info" Type="Sales.EntityInfo" Nullable="false" />
  <Property Name="Name" Type="Edm.String" />
</EntityType>

<ComplexType Name="EntityInfo">
  <Property Name="ID" Type="Edm.Int32" Nullable="false" />
  <Property Name="Created" Type="Edm.DateTimeOffset" />
</ComplexType>
```
:::

::: {.varxml .example}
Example 17: entity type with a composite key
```xml
<EntityType Name="OrderLine">
  <Key>
    <PropertyRef Name="OrderID" />
    <PropertyRef Name="LineNumber" />
  </Key>
  <Property Name="OrderID" Type="Edm.Int32" Nullable="false" />
  <Property Name="LineNumber" Type="Edm.Int32" Nullable="false" />
</EntityType>
```
:::

::: example
Example 18 (based on [example 16](#complexkey)): requests to an entity set `Categories`
of type `Category` must use the alias
```
GET http://host/service/Categories(EntityInfoID=1)
```
:::

::: example
Example 19 (based on [example 16](#complexkey)): in a query part the value assigned to
the name attribute must be used
```
GET http://example.org/OData.svc/Categories?$filter=Info/ID le 100
```
:::


-------

# <a id="StructuralProperty" href="#StructuralProperty">7 Structural Property</a>

A structural property is a property of a structured type that has one of
the following types:
- [Primitive type](#PrimitiveTypes)
- [Complex type](#ComplexType)
- [Enumeration type](#EnumerationType)
- A collection of one of the above

A structural property MUST specify a unique name as well as a
[type](#Type).

The property's name MUST be a [simple identifier](#SimpleIdentifier). It
is used when referencing, serializing or deserializing the property. It
MUST be unique within the set of structural and navigation properties of
the declaring [structured type](#StructuredTypes), and MUST NOT match
the name of any navigation property in any of its base types. If a
structural property with the same name is defined in any of this type's
base types, then the property's type MUST be a type derived from the
type specified for the property of the base type and constrains this
property to be of the specified subtype for instances of this structured
type. The name MUST NOT match the name of any structural or navigation
property of any of this type's base types for OData 4.0 responses.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.



::: {.varxml .rep}
### <a id="ElementedmProperty.12" href="#ElementedmProperty.12">Element `edm:Property`</a>

The `edm:Property` element MUST contain the `Name` and the `Type`
attribute, and it MAY contain the attributes
[`Nullable`](#Nullable), [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale),
[`SRID`](#SRID), and [`DefaultValue`](#DefaultValue).

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.12.1" href="#AttributeName.12.1">Attribute `Name`</a>

The value of `Name` is the property's name.
:::

::: {.varxml .example}
Example 20: complex type with two properties
```xml
<ComplexType Name="Measurement">
  <Property Name="Dimension" Type="Edm.String" Nullable="false" MaxLength="50"
            DefaultValue="Unspecified" />
  <Property Name="Length" Type="Edm.Decimal" Nullable="false" Precision="18"
            Scale="2" />
</ComplexType>
```
:::

## <a id="Type" href="#Type">7.1 Type</a>

The property's type MUST be a [primitive type](#PrimitiveTypes),
[complex type](#ComplexType), or [enumeration type](#EnumerationType) in
scope, or a collection of one of these types.

If the property is part of a chain of [structural properties](#StructuralProperty) and
[containment navigation properties](#ContainmentNavigationProperty)
leading back to the property's declaring type, the finiteness condition for
[structured types](#StructuredTypes) demands that at least one property
in this chain MUST be nullable or collection-valued.

A collection-valued property MAY be annotated with the
[`Core.Ordered`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#Ordered)
term, defined in
[OData-VocCore](#ODataVocCore), to specify that it supports a
stable ordering.

A collection-valued property MAY be annotated with the
[`Core.PositionalInsert`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#PositionalInsert)
term, defined in [OData-VocCore](#ODataVocCore), to specify that it
supports inserting items into a specific ordinal position.



::: {.varxml .rep}
### <a id="AttributeType.12.2" href="#AttributeType.12.2">Attribute `Type`</a>

For single-valued properties the value of `Type` is the qualified name
of the property's type.

For collection-valued properties the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the property's
item type, followed by a closing parenthesis `)`.
:::

::: {.varxml .example}
Example 21: property `Units` that can have zero or more strings as its
value
```xml
<Property Name="Units" Type="Collection(Edm.String)" />
```
:::

## <a id="Nullable" href="#Nullable">7.2 Nullable</a>

A Boolean value specifying whether the property can have the value
`null`.


::: {.varxml .rep}
### <a id="AttributeNullable.12.3" href="#AttributeNullable.12.3">Attribute `Nullable`</a>

The value of `Nullable` is one of the Boolean literals `true` or
`false`.

For single-valued properties the value `true` means that the property
allows the `null` value.

For collection-valued properties the value will always be a
collection that MAY be empty. In this case the `Nullable` attribute
applies to items of the collection and specifies whether the collection
MAY contain `null` values.

If no value is specified for a single-valued property, the `Nullable`
attribute defaults to `true`.

In OData 4.01 responses a collection-valued property MUST specify a
value for the `Nullable` attribute.

If no value is specified for a collection-valued property, the client
cannot assume any default value. Clients SHOULD be prepared for this
situation even in OData 4.01 responses.
:::

## <a id="DefaultValue" href="#DefaultValue">7.3 Default Value</a>

A primitive- or enumeration-typed property MAY define a default value that is
used if the property is not explicitly represented in an annotation,
the body of a request or response, or a complex literal in a request URL.

If no value is specified, the client SHOULD NOT assume a default value.


::: {.varxml .rep}
### <a id="AttributeDefaultValue.12.4" href="#AttributeDefaultValue.12.4">Attribute `DefaultValue`</a>

Default values of type `Edm.String` MUST be represented according to the
XML escaping rules for character data in attribute values. Values of
other primitive types MUST be represented according to the appropriate
alternative in the `primitiveValue` rule defined in
[OData-ABNF](#ODataABNF), i.e. `Edm.Binary` as `binaryValue`,
`Edm.Boolean` as `booleanValue` etc.
:::

-------

# <a id="NavigationProperty" href="#NavigationProperty">8 Navigation Property</a>

A navigation property allows navigation to related entities. It MUST
specify a unique name as well as a type.

The navigation property's name MUST be a [simple
identifier](#SimpleIdentifier). It is used when referencing, serializing
or deserializing the navigation property. It MUST be unique within the
set of structural and navigation properties of the declaring [structured
type](#StructuredTypes), and MUST NOT match the name of any structural
property in any of its base types. If a navigation property with the
same name is defined in any of this type's base types, then the
navigation property's type MUST be a type derived from the type
specified for the navigation property of the base type, and constrains
this navigation property to be of the specified subtype for instances of
this structured type. The name MUST NOT match the name of any structural
or navigation property of any of this type's base types for OData 4.0
responses.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.



::: {.varxml .rep}
### <a id="ElementedmNavigationProperty.13" href="#ElementedmNavigationProperty.13">Element `edm:NavigationProperty`</a>

The `edm:NavigationProperty` element MUST contain the `Name` and `Type`
attributes, and it MAY contain the attributes
[`Nullable`](#NullableNavigationProperty),
[`Partner`](#PartnerNavigationProperty), and
[`ContainsTarget`](#ContainmentNavigationProperty).

It MAY contain child elements
[`edm:ReferentialConstraint`](#ReferentialConstraint) and at most one
child element [`edm:OnDelete`](#OnDeleteAction).

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.13.1" href="#AttributeName.13.1">Attribute `Name`</a>

The value of `Name` is the navigation property's name.
:::

::: {.varxml .example}
Example 22: the Product entity type has a navigation property to a
Category, which has a navigation link back to one or more products
```xml
<EntityType Name="Product">
  …
  <NavigationProperty Name="Category" Type="self.Category" Nullable="false"
                      Partner="Products" />
  <NavigationProperty Name="Supplier" Type="self.Supplier" />
</EntityType>

<EntityType Name="Category">
  …
  <NavigationProperty Name="Products" Type="Collection(self.Product)"
                      Partner="Category" />
</EntityType>
```
:::

## <a id="NavigationPropertyType" href="#NavigationPropertyType">8.1 Navigation Property Type</a>

The navigation property's type MUST be an [entity type](#EntityType) in
scope, the [abstract type](#BuiltInAbstractTypes) `Edm.EntityType`, or a
collection of one of these types.

If the property is part of a chain of [structural properties](#StructuralProperty) and
[containment navigation properties](#ContainmentNavigationProperty)
leading back to the property's declaring type, the finiteness condition for
[structured types](#StructuredTypes) demands that at least one property
in this chain MUST be nullable or collection-valued.

If the type is a collection, an arbitrary number of entities can be
related. Otherwise there is at most one related entity.

The related entities MUST be of the specified entity type or one of its
subtypes.

For a collection-valued containment navigation property the specified
entity type MUST have a [key](#Key) defined.

A collection-valued navigation property MAY be annotated with the
[`Core.Ordered`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#Ordered)
term, defined in [OData-VocCore](#ODataVocCore), to specify that it
supports a stable ordering.

A collection-valued navigation property MAY be annotated with the
[`Core.PositionalInsert`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#PositionalInsert)
term, defined in [OData-VocCore](#ODataVocCore), to specify that it
supports inserting items into a specific ordinal position.


::: {.varxml .rep}
### <a id="AttributeType.13.2" href="#AttributeType.13.2">Attribute `Type`</a>

For single-valued navigation properties the value of `Type` is the
qualified name of the navigation property's type.

For collection-valued navigation properties the value of `Type` is the
character sequence `Collection(` followed by the qualified name of the
navigation property's item type, followed by a closing parenthesis `)`.
:::

## <a id="NullableNavigationProperty" href="#NullableNavigationProperty">8.2 Nullable Navigation Property</a>

A Boolean value specifying whether the declaring type MAY have no
related entity. If false, instances of the declaring structured type
MUST always have a related entity.

Nullable MUST NOT be specified for a collection-valued navigation
property, a collection is allowed to have zero items.


::: {.varxml .rep}
### <a id="AttributeNullable.13.3" href="#AttributeNullable.13.3">Attribute `Nullable`</a>

The value of `Nullable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `true`.
:::

## <a id="PartnerNavigationProperty" href="#PartnerNavigationProperty">8.3 Partner Navigation Property</a>

A navigation property of an [entity type](#EntityType) MAY specify a
partner navigation property. Navigation properties of complex types MUST
NOT specify a partner.

If specified, the partner navigation property is identified by a path
relative to the entity type specified as the type of the navigation
property. This path MUST lead to a navigation property defined on that
type or a derived type. The path MAY traverse complex types, including
derived complex types, but MUST NOT traverse any navigation properties.
The type of the partner navigation property MUST be the declaring entity
type of the current navigation property or one of its parent entity
types.

If the partner navigation property is single-valued, it MUST lead back
to the source entity from all related entities. If the partner
navigation property is collection-valued, the source entity MUST be part
of that collection.

If no partner navigation property is specified, no assumptions can be
made as to whether one of the navigation properties on the target type
will lead back to the source entity.

If a partner navigation property is specified, this partner navigation
property MUST either specify the current navigation property as its
partner to define a bi-directional relationship or it MUST NOT specify a
partner navigation property. The latter can occur if the partner
navigation property is defined on a complex type, or if the current
navigation property is defined on a type derived from the type of the
partner navigation property.


::: {.varxml .rep}
### <a id="AttributePartner.13.4" href="#AttributePartner.13.4">Attribute `Partner`</a>

The value of `Partner` is the path to the partner navigation
property.
:::

## <a id="ContainmentNavigationProperty" href="#ContainmentNavigationProperty">8.4 Containment Navigation Property</a>

A navigation property MAY indicate that instances of its declaring
structured type contain the targets of the navigation property, in which
case the navigation property is called a *containment navigation
property*.

Containment navigation properties define an implicit entity set for each
instance of its declaring structured type. This implicit entity set is
identified by the read URL of the navigation property for that
structured type instance.

Instances of the structured type that declares the navigation property,
either directly or indirectly via a property of complex type, contain
the entities referenced by the containment navigation property. The
canonical URL for contained entities is the canonical URL of the
containing instance, followed by the path segment of the navigation
property and the key of the contained entity, see
[OData-URL, section 4.3.2](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#CanonicalURLforContainedEntities).

Entity types used in collection-valued containment navigation properties
MUST have a [key](#Key) defined.

For items of an ordered collection of complex types (those annotated
with the
[`Core.Ordered`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#Ordered)
term defined in [OData-VocCore](#ODataVocCore) the canonical URL
of the item is the canonical URL of the collection appended with a
segment containing the zero-based ordinal of the item. Items within in
an unordered collection of complex types do not have a canonical URL.
Services that support unordered collections of complex types declaring a
containment navigation property, either directly or indirectly via a
property of complex type, MUST specify the URL for the navigation link
within a payload representing that item, according to format-specific
rules.

OData 4.0 responses MUST NOT specify a complex type declaring a
containment navigation property as the type of a collection-valued
property.

An entity cannot be referenced by more than one containment
relationship, and cannot both belong to an entity set declared within
the entity container and be referenced by a containment relationship.

Containment navigation properties MUST NOT be specified as the last path
segment in the path of a [navigation property
binding](#NavigationPropertyBinding).

When a containment navigation property navigates between entity types in
the same inheritance hierarchy, the containment is called *recursive*.

Containment navigation properties MAY specify a partner navigation
property. If the containment is recursive, the relationship defines a
tree, thus the partner navigation property MUST be
[nullable](#NullableNavigationProperty) (for the root of the tree) and
single-valued (for the parent of a non-root entity). If the containment
is not recursive, the partner navigation property MUST NOT be nullable.

An entity type inheritance chain MUST NOT contain more than one
navigation property with a partner navigation property that is a
containment navigation property.

Note: without a partner navigation property, there is no reliable way
for a client to determine which entity contains a given contained
entity. This may lead to problems for clients if the contained entity
can also be reached via a non-containment navigation path.


::: {.varxml .rep}
### <a id="AttributeContainsTarget.13.5" href="#AttributeContainsTarget.13.5">Attribute `ContainsTarget`</a>

The value of `ContainsTarget` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## <a id="ReferentialConstraint" href="#ReferentialConstraint">8.5 Referential Constraint</a>

A single-valued navigation property MAY define one or more referential
constraints. A referential constraint asserts that the *dependent
property* (the property defined on the structured type declaring the
navigation property) MUST have the same value as the *principal
property* (the referenced property declared on the entity type that is
the target of the navigation).
Elsewhere this specification calls the dependent property and the principal property
_tied to_ each other.

The type of the dependent property MUST match the type of the principal
property, or both types MUST be complex types.

If the principal property references an entity, then the dependent
property must reference the same entity.

If the principal property's value is a complex type instance, then the
dependent property's value must be a complex type instance with the same
properties, each with the same values.

If the navigation property on which the referential constraint is
defined is nullable, or the principal property is nullable, then the
dependent property MUST also be nullable. If both the navigation
property and the principal property are not nullable, then the dependent
property MUST NOT be nullable.



::: {.varxml .rep}
### <a id="ElementedmReferentialConstraint.14" href="#ElementedmReferentialConstraint.14">Element `edm:ReferentialConstraint`</a>

The `edm:ReferentialConstraint` element MUST contain the attributes
`Property` and `ReferencedProperty`.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeProperty.14.1" href="#AttributeProperty.14.1">Attribute `Property`</a>

The `Property` attribute specifies the property that takes part in the
referential constraint on the dependent structured type. Its value MUST
be a path expression resolving to a property of the dependent structured
type itself or to a property of a complex property (recursively) of the
dependent structured type. The names of the properties in the path are
joined together by forward slashes. The path is relative to the
dependent structured type declaring the navigation property.

### <a id="AttributeReferencedProperty.14.2" href="#AttributeReferencedProperty.14.2">Attribute `ReferencedProperty`</a>

The `ReferencedProperty` attribute specifies the corresponding property
of the principal entity type. Its value MUST be a path expression
resolving to a property of the principal entity type itself or to a
property of a complex property (recursively) of the principal entity
type that MUST have the same type as the property of the dependent
entity type. The path is relative to the entity type that is the target
of the navigation property.
:::

::: {.varxml .example}
Example 23: the category must exist for a product in that category to
exist. The `CategoryID` of the product is identical to the `ID` of the
category, and the `CategoryKind` property of the product is identical to
the `Kind` property of the category.
```xml
<EntityType Name="Product">
  …
  <Property Name="CategoryID" Type="Edm.String" Nullable="false"/>
  <Property Name="CategoryKind" Type="Edm.String" Nullable="true" />
  <NavigationProperty Name="Category" Type="self.Category" Nullable="false">
    <ReferentialConstraint Property="CategoryID" ReferencedProperty="ID" />
    <ReferentialConstraint Property="CategoryKind" ReferencedProperty="Kind">
      <Annotation Term="Core.Description"
                  String="Referential Constraint to non-key property" />
    </ReferentialConstraint>
  </NavigationProperty>
</EntityType>

<EntityType Name="Category">
  <Key>
    <PropertyRef Name="ID" />
  </Key>
  <Property Name="ID" Type="Edm.String" Nullable="false" />
  <Property Name="Kind" Type="Edm.String" Nullable="true" />
  …
</EntityType>
```
:::

## <a id="OnDeleteAction" href="#OnDeleteAction">8.6 On-Delete Action</a>

A navigation property MAY define an on-delete action that describes the
action the service will take on related entities when the entity on
which the navigation property is defined is deleted.

The action can have one of the following values:

-   `Cascade`, meaning the related entities will be deleted if the
    source entity is deleted,
-   `None`, meaning a `DELETE` request on a source entity with related
    entities will fail,
-   `SetNull`, meaning all properties of related entities that are tied
    to properties of the source entity via a referential constraint and
    that do not participate in other referential constraints will be set
    to null,
-   `SetDefault`, meaning all properties of related entities that are
    tied to properties of the source entity via a referential constraint
    and that do not participate in other referential constraints will be
    set to their default value.

If no on-delete action is specified, the action taken by the service is
not predictable by the client and could vary per entity.



::: {.varxml .rep}
### <a id="ElementedmOnDelete.15" href="#ElementedmOnDelete.15">Element `edm:OnDelete`</a>

The `edm:OnDelete` element MUST contain the `Action` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeAction.15.1" href="#AttributeAction.15.1">Attribute `Action`</a>

The value of `Action` is one of the values `Cascade`, `None`, `SetNull`,
or `SetDefault`.
:::

::: {.varxml .example}
Example 24: deletion of a category implies deletion of the related
products in that category
```xml
<EntityType Name="Category">
  …
  <NavigationProperty Name="Products" Type="Collection(self.Product)">
    <OnDelete Action="Cascade">
      <Annotation Term="Core.Description"
                  String="Delete all products in this category" />
    </OnDelete>
  </NavigationProperty>
</EntityType>
```
:::


-------

# <a id="ComplexType" href="#ComplexType">9 Complex Type</a>

Complex types are keyless [nominal](#NominalTypes) [structured
types](#StructuredTypes). The lack of a key means that instances of
complex types cannot be referenced, created, updated or deleted
independently of an entity type. Complex types allow entity models to
group properties into common structures.

The complex type's name is a [simple identifier](#SimpleIdentifier) that
MUST be unique within its schema.

A complex type can define two types of properties. A [structural
property](#StructuralProperty) is a named reference to a primitive,
complex, or enumeration type, or a collection of primitive, complex, or
enumeration types. A [navigation property](#NavigationProperty) is a
named reference to an entity type or a collection of entity types.

All properties MUST have a unique name within a complex type. Properties
MUST NOT have the same name as the declaring complex type. They MAY have
the same name as one of the direct or indirect base types or derived
types.



::: {.varxml .rep}
### <a id="ElementedmComplexType.16" href="#ElementedmComplexType.16">Element `edm:ComplexType`</a>

The `edm:ComplexType` element MUST contain the `Name` attribute, and it
MAY contain the [`BaseType`](#DerivedComplexType),
[`Abstract`](#AbstractComplexType), and [`OpenType`](#OpenComplexType)
attributes.

It MAY contain [`edm:Property`](#StructuralProperty) and
[`edm:NavigationProperty`](#NavigationProperty) elements describing the
properties of the complex type.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.16.1" href="#AttributeName.16.1">Attribute `Name`</a>

The value of `Name` is the complex type's name.
:::

::: {.varxml .example}
Example 25: a complex type used by two entity types
```xml
<ComplexType Name="Dimensions">
  <Property Name="Height" Nullable="false" Type="Edm.Decimal" />
  <Property Name="Weight" Nullable="false" Type="Edm.Decimal" />
  <Property Name="Length" Nullable="false" Type="Edm.Decimal" />
</ComplexType>

<EntityType Name="Product">
  …
  <Property Name="ProductDimensions" Type="self.Dimensions" />
  <Property Name="ShippingDimensions" Type="self.Dimensions" />
</EntityType>

<EntityType Name="ShipmentBox">
  …
  <Property Name="Dimensions" Type="self.Dimensions" />
</EntityType>
```
:::

## <a id="DerivedComplexType" href="#DerivedComplexType">9.1 Derived Complex Type</a>

A complex type can inherit from another complex type by specifying it as
its base type.

A complex type inherits the structural and navigation properties of its
base type.

A complex type MUST NOT introduce an inheritance cycle by specifying a
base type.

The rules for annotations of derived complex types are described in
[section 14.2](#Annotation).


::: {.varxml .rep}
### <a id="AttributeBaseType.16.2" href="#AttributeBaseType.16.2">Attribute `BaseType`</a>

The value of `BaseType` is the qualified name of the base type.
:::

## <a id="AbstractComplexType" href="#AbstractComplexType">9.2 Abstract Complex Type</a>

A complex type MAY indicate that it is abstract and cannot have
instances.


::: {.varxml .rep}
### <a id="AttributeAbstract.16.3" href="#AttributeAbstract.16.3">Attribute `Abstract`</a>

The value of `Abstract` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## <a id="OpenComplexType" href="#OpenComplexType">9.3 Open Complex Type</a>

A complex type MAY indicate that it is open and allows clients to add
properties dynamically to instances of the type by specifying uniquely
named property values in the payload used to insert or update an
instance of the type.

A complex type derived from an open complex type MUST indicate that it
is also open.

Note: structural and navigation properties MAY be returned by the
service on instances of any structured type, whether or not the type is
marked as open. Clients MUST always be prepared to deal with additional
properties on instances of any structured type, see
[OData-Protocol, section 3](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#DataModel).


::: {.varxml .rep}
### <a id="AttributeOpenType.16.4" href="#AttributeOpenType.16.4">Attribute `OpenType`</a>

The value of `OpenType` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

-------

# <a id="EnumerationType" href="#EnumerationType">10 Enumeration Type</a>

Enumeration types are [nominal](#NominalTypes) types that represent a
non-empty series of related values. Enumeration types expose these
related values as members of the enumeration.

The enumeration type's name is a [simple identifier](#SimpleIdentifier)
that MUST be unique within its schema.

Although enumeration types have an underlying numeric value, the
preferred representation for an enumeration value is the member name.
Discrete sets of numeric values should be represented as numeric values
annotated with the `AllowedValues` annotation defined in
[OData-VocCore](#ODataVocCore).

Enumeration types marked as flags allow values that consist of more than
one enumeration member at a time.



::: {.varxml .rep}
### <a id="ElementedmEnumType.17" href="#ElementedmEnumType.17">Element `edm:EnumType`</a>

The `edm:EnumType` element MUST contain the Name attribute, and it MAY
contain the [`UnderlyingType`](#UnderlyingIntegerType) and
[`IsFlags`](#FlagsEnumerationType) attributes.

It MUST contain one or more [`edm:Member`](#EnumerationTypeMember)
elements defining the members of the enumeration type.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.17.1" href="#AttributeName.17.1">Attribute `Name`</a>

The value of `Name` is the enumeration type's name.
:::

::: {.varxml .example}
Example 26: a simple flags-enabled enumeration
```xml
<EnumType Name="FileAccess" UnderlyingType="Edm.Int32" IsFlags="true">
  <Member Name="Read"   Value="1" />
  <Member Name="Write"  Value="2" />
  <Member Name="Create" Value="4" />
  <Member Name="Delete" Value="8" />
</EnumType>
```
:::

## <a id="UnderlyingIntegerType" href="#UnderlyingIntegerType">10.1 Underlying Integer Type</a>

An enumeration type MAY specify one of `Edm.Byte`, `Edm.SByte`,
`Edm.Int16`, `Edm.Int32`, or `Edm.Int64` as its underlying type.

If not explicitly specified, `Edm.Int32` is used as the underlying type.


::: {.varxml .rep}
### <a id="AttributeUnderlyingType.17.2" href="#AttributeUnderlyingType.17.2">Attribute `UnderlyingType`</a>

The value of `UnderlyingType` is the qualified name of the underlying
type.
:::

## <a id="FlagsEnumerationType" href="#FlagsEnumerationType">10.2 Flags Enumeration Type</a>

An enumeration type MAY indicate that the enumeration type allows
multiple members to be selected simultaneously.

If not explicitly specified, only one enumeration type member MAY be
selected simultaneously.



::: {.varxml .rep}
### <a id="AttributeIsFlags.17.3" href="#AttributeIsFlags.17.3">Attribute `IsFlags`</a>

The value of `IsFlags` is one of the Boolean literals `true` or `false`.
Absence of the attribute means `false`.
:::

::: {.varxml .example}
Example 27: pattern values can be combined, and some combined values
have explicit names
```xml
<EnumType Name="Pattern" UnderlyingType="Edm.Int32" IsFlags="true">
  <Member Name="Plain"             Value="0" />
  <Member Name="Red"               Value="1" />
  <Member Name="Blue"              Value="2" />
  <Member Name="Yellow"            Value="4" />
  <Member Name="Solid"             Value="8" />
  <Member Name="Striped"           Value="16" />
  <Member Name="SolidRed"          Value="9" />
  <Member Name="SolidBlue"         Value="10" />
  <Member Name="SolidYellow"       Value="12" />
  <Member Name="RedBlueStriped"    Value="19" />
  <Member Name="RedYellowStriped"  Value="21" />
  <Member Name="BlueYellowStriped" Value="22" />
</EnumType>
```
:::

## <a id="EnumerationTypeMember" href="#EnumerationTypeMember">10.3 Enumeration Type Member</a>

Enumeration type values consist of discrete members.

Each member is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within the
enumeration type. Names are case-sensitive, but service authors SHOULD
NOT choose names that differ only in case.

Each member MUST specify an associated numeric value that MUST be a
valid value for the underlying type of the enumeration type.

Enumeration types can have multiple members with the same value. Members
with the same numeric value compare as equal, and members with the same
numeric value can be used interchangeably.

Enumeration members are sorted by their numeric value.

For flag enumeration types the combined numeric value of simultaneously
selected members is the bitwise OR of the discrete numeric member
values.



::: {.varxml .rep}
### <a id="ElementedmMember.18" href="#ElementedmMember.18">Element `edm:Member`</a>

The `edm:Member` element MUST contain the `Name` attribute and it MAY
contain the `Value` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.18.1" href="#AttributeName.18.1">Attribute `Name`</a>

The value of `Name` is the enumeration member's name.

### <a id="AttributeValue.18.2" href="#AttributeValue.18.2">Attribute `Value`</a>

If the [`IsFlags`](#FlagsEnumerationType) attribute has a value of
`false`, either all members MUST specify an integer value for the
`Value` attribute, or all members MUST NOT specify a value for the
`Value` attribute. If no values are specified, the members are assigned
consecutive integer values in the order of their appearance, starting
with zero for the first member. Client libraries MUST preserve elements
in document order.

If the [`IsFlags`](#FlagsEnumerationType) attribute has a value of
`true`, a non-negative integer value MUST be specified for the `Value`
attribute. A combined value is equivalent to the bitwise OR of the
discrete values.
:::

::: {.varxml .example}
Example 28: `FirstClass` has a value of `0`, `TwoDay` a value of 1, and
`Overnight` a value of 2.
```xml
<EnumType Name="ShippingMethod">
  <Member Name="FirstClass">
    <Annotation Term="Core.Description"
                String="Shipped with highest priority" />
  </Member>
  <Member Name="TwoDay">
    <Annotation Term="Core.Description"
                String="Shipped within two days" />
  </Member>
  <Member Name="Overnight">
    <Annotation Term="Core.Description"
                String="Shipped overnight" />
  </Member>
</EnumType>
```
:::

-------

# <a id="TypeDefinition" href="#TypeDefinition">11 Type Definition</a>

A type definition defines a specialization of one of the [primitive
types](#PrimitiveTypes) or of the built-in abstract type
[`Edm.PrimitiveType`](#BuiltInAbstractTypes).

The type definition's name is a [simple identifier](#SimpleIdentifier)
that MUST be unique within its schema.

Type definitions can be used wherever a primitive type is used (other
than as the underlying type in a new type definition) and are
type-comparable with their underlying types and any type definitions
defined using the same underlying type.

It is up to the definition of a term to specify whether and how
annotations with this term propagate to places where the annotated type
definition is used, and whether they can be overridden.



::: {.varxml .rep}
### <a id="ElementedmTypeDefinition.19" href="#ElementedmTypeDefinition.19">Element `edm:TypeDefinition`</a>

The `edm:TypeDefinition` element MUST contain the `Name` and
[`UnderlyingType`](#UnderlyingPrimitiveType) attributes.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.19.1" href="#AttributeName.19.1">Attribute `Name`</a>

The value of `Name` is the type definition's name.
:::

::: {.varxml .example}
Example 29:
```xml
<TypeDefinition Name="Length" UnderlyingType="Edm.Int32">
  <Annotation Term="Org.OData.Measures.V1.Unit"
              String="Centimeters" />
</TypeDefinition>

<TypeDefinition Name="Weight" UnderlyingType="Edm.Int32">
  <Annotation Term="Org.OData.Measures.V1.Unit"
              String="Kilograms" />
</TypeDefinition>

<ComplexType Name="Size">
  <Property Name="Height" Type="self.Length" />
  <Property Name="Weight" Type="self.Weight" />
</ComplexType>
```
:::

## <a id="UnderlyingPrimitiveType" href="#UnderlyingPrimitiveType">11.1 Underlying Primitive Type</a>

The underlying type of a type definition MUST be a primitive type that
MUST NOT be another type definition.



::: {.varxml .rep}
### <a id="AttributeUnderlyingType.19.2" href="#AttributeUnderlyingType.19.2">Attribute `UnderlyingType`</a>

The value of `UnderlyingType` is the qualified name of the underlying
type.
:::

The type definition MAY specify facets applicable to the underlying
type. Possible facets are: [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale), or
[`SRID`](#SRID).

Additional facets appropriate for the underlying type MAY be specified
when the type definition is used but the facets specified in the type
definition MUST NOT be re-specified.

For a type definition with underlying type
[`Edm.PrimitiveType`](#BuiltInAbstractTypes) no facets are applicable,
neither in the definition itself nor when the type definition is used,
and these should be ignored by the client.

Where type definitions are used, the type definition is returned in
place of the primitive type wherever the type is specified in a
response.


-------

# <a id="ActionandFunction" href="#ActionandFunction">12 Action and Function</a>

## <a id="Action" href="#Action">12.1 Action</a>

Actions are service-defined operations that MAY have observable side
effects and MAY return a single instance or a collection of instances of
any type.

The action's name is a [simple identifier](#SimpleIdentifier) that MUST
be unique within its schema.

Actions cannot be composed with additional path segments.

An action MAY specify a [return type](#ReturnType) that MUST be a
primitive, entity or complex type, or a collection of primitive, entity
or complex types in scope.

An action MAY define [parameters](#Parameter) used during the execution
of the action.

## <a id="ActionOverloads" href="#ActionOverloads">12.2 Action Overloads</a>

[Bound](#BoundorUnboundActionorFunctionOverloads) actions support
overloading (multiple actions having the same name within the same
schema) by binding parameter type. The combination of action name and
the binding parameter type MUST be unique within a schema.

[Unbound](#BoundorUnboundActionorFunctionOverloads) actions do not support
overloads. The names of all unbound actions MUST be unique within a
schema.

An unbound action MAY have the same name as a bound action.


::: {.varxml .rep}
### <a id="ElementedmAction.20" href="#ElementedmAction.20">Element `edm:Action`</a>

The `edm:Action` element MUST contain the `Name` attribute and it MAY
contain the [`IsBound`](#BoundorUnboundActionorFunctionOverloads) and
[`EntitySetPath`](#EntitySetPath) attributes.

It MAY contain at most one [`edm:ReturnType`](#ReturnType) element and
MAY contain [`edm:Parameter`](#Parameter) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.20.1" href="#AttributeName.20.1">Attribute `Name`</a>

The value of `Name` is the action's name.
:::

## <a id="Function" href="#Function">12.3 Function</a>

Functions are service-defined operations that MUST NOT have observable
side effects and MUST return a single instance or a collection of
instances of any type.

The function's name is a [simple identifier](#SimpleIdentifier) that
MUST be unique within its schema.

Functions MAY be [composable](#ComposableFunction).

The function MUST specify a [return type](#ReturnType) which MUST be a
primitive, entity or complex type, or a collection of primitive, entity
or complex types in scope.

A function MAY define [parameters](#Parameter) used during the execution
of the function.

## <a id="FunctionOverloads" href="#FunctionOverloads">12.4 Function Overloads</a>

[Bound](#BoundorUnboundActionorFunctionOverloads) functions support
overloading (multiple functions having the same name within the same
schema) subject to the following rules:
- The combination of function name,
binding parameter type, and unordered set of non-binding parameter names
MUST be unique within a schema.
- The combination of function name,
binding parameter type, and ordered set of parameter types MUST be
unique within a schema.
- All bound functions with the same
function name and binding parameter type within a schema MUST specify
the same return type.

[Unbound](#BoundorUnboundActionorFunctionOverloads) functions support
overloading subject to the following rules:
- The combination of function name and
unordered set of parameter names MUST be unique within a schema.
- The combination of function name and
ordered set of parameter types MUST be unique within a schema.
- All unbound functions with the same
function name within a schema MUST specify the same return type.

An unbound function MAY have the same name as a bound function.

Note that [type definitions](#TypeDefinition) can be used to
disambiguate overloads for both bound and unbound functions, even if
they specify the same underlying type.


::: {.varxml .rep}
### <a id="ElementedmFunction.21" href="#ElementedmFunction.21">Element `edm:Function`</a>

The `edm:Function` element MUST contain the `Name` attribute and it MAY
contain the [`IsBound`](#BoundorUnboundActionorFunctionOverloads) and
[`EntitySetPath`](#EntitySetPath) attributes.

It MUST contain one [`edm:ReturnType`](#ReturnType) element, and it MAY
contain [`edm:Parameter`](#Parameter) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.21.1" href="#AttributeName.21.1">Attribute `Name`</a>

The value of `Name` is the action's name.
:::

## <a id="BoundorUnboundActionorFunctionOverloads" href="#BoundorUnboundActionorFunctionOverloads">12.5 Bound or Unbound Action or Function Overloads</a>

An action or function overload MAY indicate that it is bound. If not
explicitly indicated, it is unbound.

Bound actions or functions are invoked on resources matching the type of
the binding parameter. The binding parameter can be of any type, and it
MAY be nullable.

Unbound actions are invoked from the entity container through an [action
import](#ActionImport).

Unbound functions are invoked as static functions within a common expression
(see [OData-URL, section 5.1.1](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#CommonExpressionSyntax)),
or from the entity container through a [function import](#FunctionImport).


::: {.varxml .rep}
### <a id="AttributeIsBound.21.2" href="#AttributeIsBound.21.2">Attribute `IsBound`</a>

The value of `IsBound` is one of the Boolean literals `true` or `false`.
Absence of the attribute means `false`.
:::

## <a id="EntitySetPath" href="#EntitySetPath">12.6 Entity Set Path</a>

Bound actions and functions that return an entity or a collection of
entities MAY specify an entity set path. The entity set path specifies the canonical collection
(as defined in [OData-Protocol, section 10](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#ContextURL)) of the
returned entities in terms of the binding parameter value.

The entity set path consists of a series of segments joined together
with forward slashes.
The first segment of the entity set path MUST be the name of the binding
parameter.
If the entity set path consists only of the name of the binding parameter,
the binding parameter MUST be an entity or a collection of entities. In this case
the returned entities MUST belong to the same canonical collection
as the binding parameter.

Otherwise the entity set path has the form $p/s_1/…/s_k$ with $k>0$, and
the binding parameter MUST be single-valued.
The additional segments $s_1,…,s_k$ MUST be paths that could occur in an expand item [OData-URL, section 5.1.3](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#SystemQueryOptionexpand),
and they MUST end with the name of a [navigation property](#NavigationProperty),
optionally followed by the [qualified name](#QualifiedName) of a type cast.
Furthermore, $s_1,…,s_{k-1}$ MUST be single-valued, and
$s_k$ MUST name a collection-valued navigation property.
In this case all returned entities MUST belong to the canonical collection $C$ of the final navigation
property, if this can be determined by the following algorithm:
1. Let $v$ be the binding parameter value, and let $α/β$ be the canonical URL of $v$
   where $α$ is either an entity set followed by a key predicate or a singleton, and $β$
   is a possibly empty concatenation of containment navigation properties, type casts and key predicates.
   Remove any key predicates from $α$ and $β$.
2. Let $i=1$.
3. If $i=k$, go to step 8.
4. Update $v$ to the result of evaluating the [instance path](#PathExpressions) $s_i$ on the instance $v$.
5. If $s_i$ names a containment navigation property, update $β=β/s_i$.
6. Otherwise $s_i$ names a non-containment navigation property. Determine
   the [navigation property binding](#NavigationPropertyBinding) defined by the service
   on the entity set or singleton $α$ whose path matches $β/s_i$;
   if it does not exist, then $C$ cannot be determined.
   The binding target of that navigation property binding is either an entity set $α'$ or has the form $α'/β'$ where $α'$ is a singleton.
   Update $α=α'$ and $β=β'$.
7. Update $i=i+1$ and go back to step 3.
8. If $s_k$ names a containment navigation property, let $C$ be the implicit
   entity set defined by $s_k$ for $v$ (as explained in [section 8.4](#ContainmentNavigationProperty)).
9. Otherwise $s_k$ names a non-containment navigation property. Determine
   the navigation property binding defined by the service on the entity set or singleton $α$
   whose path matches $β/s_k$; if it does not exist, then $C$ cannot be determined.
   Let $C$ be the binding target of that navigation property binding.


::: {.varxml .rep}
### <a id="AttributeEntitySetPath.21.3" href="#AttributeEntitySetPath.21.3">Attribute `EntitySetPath`</a>

The value of `EntitySetPath` is the entity set path.
:::

## <a id="ComposableFunction" href="#ComposableFunction">12.7 Composable Function</a>

A function MAY indicate that it is composable. If not explicitly
indicated, it is not composable.

A composable function can be invoked with additional path segments or
key predicates appended to the resource path that identifies the
composable function, and with system query options as appropriate for
the type returned by the composable function.


::: {.varxml .rep}
### <a id="AttributeIsComposable.21.4" href="#AttributeIsComposable.21.4">Attribute `IsComposable`</a>

The value of `IsComposable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## <a id="ReturnType" href="#ReturnType">12.8 Return Type</a>

The return type of an action or function overload MAY be any type in
scope, or a collection of any type in scope.

The facets [`MaxLength`](#MaxLength),
[`Precision`](#Precision), [`Scale`](#Scale), and [`SRID`](#SRID) can be
used as appropriate to specify value restrictions of the return type, as
well as the [`Unicode`](#Unicode) facet for 4.01 or greater payloads.

For a single-valued return type the facets apply to the returned value.
For a collection-valued return type the facets apply to the items in the
returned collection.


::: {.varxml .rep}
### <a id="ElementedmReturnType.22" href="#ElementedmReturnType.22">Element `edm:ReturnType`</a>

The `edm:ReturnType` element MUST contain the `Type` attribute, and it
MAY contain the attributes `Nullable`, [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale), and
[`SRID`](#SRID).

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeType.22.1" href="#AttributeType.22.1">Attribute `Type`</a>

For single-valued return types the value of `Type` is the qualified name
of the return type.

For collection-valued return types the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the return item
type, followed by a closing parenthesis `)`.

### <a id="AttributeNullable.22.2" href="#AttributeNullable.22.2">Attribute `Nullable`</a>

The value of `Nullable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `true`.

For collection-valued return types the result will always be a
collection that MAY be empty. In this case the `Nullable` attribute
applies to items of the collection and specifies whether the collection
MAY contain `null` values.

For single-valued return types the value `true` means that the action or
function MAY return a single `null` value. The value `false` means that
the action or function will never return a `null` value and instead will
fail with an error response if it cannot compute a result.
:::

### <a id="AnnotationCoreIsDelta.22.3" href="#AnnotationCoreIsDelta.22.3">Annotation `Core.IsDelta`</a>

An action or function that returns a single entity or a collection of entities MAY return results as a delta payload.
This is indicated by annotating the return type with the term [`Core.IsDelta`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#IsDelta).

Delta payloads represent changes between two versions of data and, in addition
to current values, MAY include deleted entities as well as changes to related entities and relationships, according to the format-specific delta representation.

## <a id="Parameter" href="#Parameter">12.9 Parameter</a>

An action or function overload MAY specify parameters.

A bound action or function overload MUST specify at least one parameter;
the first parameter is its binding parameter. The order of parameters
MUST NOT change unless the schema version changes.

Each parameter MUST have a name that is a [simple
identifier](#SimpleIdentifier). The parameter name MUST be unique within
the action or function overload.

The parameter MUST specify a type. It MAY be any type in scope, or a
collection of any type in scope.

The facets [`MaxLength`](#MaxLength), [`Precision`](#Precision),
[`Scale`](#Scale), or [`SRID`](#SRID) can be used as appropriate to
specify value restrictions of the parameter, as well as the
[`Unicode`](#Unicode) facet for 4.01 or greater payloads.

For single-valued parameters the facets apply to the parameter value. If
the parameter value is a collection, the facets apply to the items in
the collection.


::: {.varxml .rep}
### <a id="ElementedmParameter.23" href="#ElementedmParameter.23">Element `edm:Parameter`</a>

The `edm:Parameter` element MUST contain the `Name` and the `Type`
attribute, and it MAY contain the attributes `Nullable`,
[`MaxLength`](#MaxLength), [`Unicode`](#Unicode),
[`Precision`](#Precision), [`Scale`](#Scale), and [`SRID`](#SRID).

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.23.1" href="#AttributeName.23.1">Attribute `Name`</a>

The value of `Name` is the parameter's name.

### <a id="AttributeType.23.2" href="#AttributeType.23.2">Attribute `Type`</a>

For single-valued parameters the value of `Type` is the qualified name
of the parameter.

For collection-valued parameters the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the parameter's
type, followed by a closing parenthesis `)`.

### <a id="AttributeNullable.23.3" href="#AttributeNullable.23.3">Attribute `Nullable`</a>

The value of `Nullable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `true`.

For single-valued parameters the value `true` means that the parameter
accepts a `null` value.

For collection-valued parameters the parameter value will always be a
collection that MAY be empty. In this case `Nullable` applies to items
of the collection and specifies whether the collection MAY contain
`null` values.
:::

### <a id="AnnotationCoreOptionalParameter.23.4" href="#AnnotationCoreOptionalParameter.23.4">Annotation `Core.OptionalParameter`</a>

A parameter that is annotated with the term [`Core.OptionalParameter`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#OptionalParameter) MAY be omitted when invoking the function or action.

All parameters marked as optional MUST come after any parameters not marked as optional. 
The binding parameter MUST NOT be marked as optional.

::: {.varxml .example}
Example 30: a function returning the top-selling products for a given
year. In this case the year must be specified as a parameter of the
function with the `edm:Parameter` element.
```xml
<Function Name="TopSellingProducts">
  <Parameter Name="Year" Type="Edm.Decimal" Precision="4" Scale="0" />
  <ReturnType Type="Collection(self.Product)" />
</Function>
```
:::

### <a id="AnnotationCoreIsDelta.23.5" href="#AnnotationCoreIsDelta.23.5">Annotation `Core.IsDelta`</a>

A parameter that accepts a single entity or a collection of entities MAY accept a delta representation.
This is indicated by annotating the parameter with the term [`Core.IsDelta`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#IsDelta).

Deltas represent changes between two versions of data and, in addition
to current values, MAY include deleted entities as well as changes to related entities and relationships, according to the format-specific delta representation.


-------

# <a id="EntityContainer" href="#EntityContainer">13 Entity Container</a>

Each metadata document used to describe an OData service MUST define
exactly one entity container.

The entity container's name is a [simple identifier](#SimpleIdentifier)
that MUST be unique within its schema.

Entity containers define the entity sets, singletons, function and
action imports exposed by the service.

Entity set, singleton, action import, and function import names MUST be
unique within an entity container.

An [*entity set*](#EntitySet) allows access to entity type instances.
Simple entity models frequently have one entity set per entity type.


::: {.varxml .example}
Example 31: one entity set per entity type
```xml
<EntitySet Name="Products"   EntityType="self.Product" />
<EntitySet Name="Categories" EntityType="self.Category" />
```
:::

Other entity models may expose multiple entity sets per type.


::: {.varxml .example}
Example 32: three entity sets referring to the two entity types
```xml
<EntitySet Name="StandardCustomers" EntityType="self.Customer">
  <NavigationPropertyBinding Path="Orders" Target="Orders" />
</EntitySet>
<EntitySet Name="PreferredCustomers" EntityType="self.Customer">
  <NavigationPropertyBinding Path="Orders" Target="Orders" />
</EntitySet>
<EntitySet Name="Orders" EntityType="self.Order" />
```
:::

There are separate entity sets for standard customers and preferred
customers, but only one entity set for orders. The entity sets for
standard customers and preferred customers both have [navigation
property bindings](#NavigationPropertyBinding) to the orders entity set,
but the orders entity set does not have a navigation property binding
for the Customer navigation property, since it could lead to either set
of customers.

An entity set can expose instances of the specified entity type as well
as any entity type inherited from the specified entity type.

A [*singleton*](#Singleton) allows addressing a single entity directly
from the entity container without having to know its key, and without
requiring an entity set.

A [*function import*](#FunctionImport) or an [*action
import*](#ActionImport) is used to expose a function or action defined
in an entity model as a top level resource.



::: {.varxml .rep}
### <a id="ElementedmEntityContainer.24" href="#ElementedmEntityContainer.24">Element `edm:EntityContainer`</a>

The `edm:EntityContainer` MAY contain
[`edm:EntitySet`](#EntitySet), [`edm:Singleton`](#Singleton),
[`edm:ActionImport`](#ActionImport), and
[`edm:FunctionImport`](#FunctionImport) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.24.1" href="#AttributeName.24.1">Attribute `Name`</a>

The value of `Name` is the entity container's name.
:::

::: {.varxml .example}
Example 33: An entity container aggregates entity sets, singletons,
action imports, and function imports.
```xml
<EntityContainer Name="DemoService">
  <EntitySet Name="Products" EntityType="self.Product">
    <NavigationPropertyBinding Path="Category" Target="Categories" />
    <NavigationPropertyBinding Path="Supplier" Target="Suppliers" />
  </EntitySet>
  <EntitySet Name="Categories" EntityType="self.Category">
    <NavigationPropertyBinding Path="Products" Target="Products" />
  </EntitySet>
  <EntitySet Name="Suppliers" EntityType="self.Supplier">
    <NavigationPropertyBinding Path="Products" Target="Products" />
  </EntitySet>
  <Singleton Name="MainSupplier" Type="self.Supplier" />
  <ActionImport Name="LeaveRequestApproval" Action="self.Approval" />
  <FunctionImport Name="ProductsByRating" Function="self.ProductsByRating"
                  EntitySet="Products" />
</EntityContainer>
```
:::

## <a id="ExtendinganEntityContainer" href="#ExtendinganEntityContainer">13.1 Extending an Entity Container</a>

An entity container MAY specify that it extends another entity container
in scope. All children of the "base" entity container are added to the
"extending" entity container.

If the "extending" entity container defines an entity set with the same
name as defined in any of its "base" containers, then the entity set's
type MUST specify an entity type derived from the entity type specified
for the identically named entity set in the "base" container. The same
holds for singletons. Action imports and function imports cannot be
redefined, nor can the "extending" container define a child with the
same name as a child of a different kind in a "base" container.

Note: services SHOULD NOT introduce cycles by extending entity
containers. Clients should be prepared to process cycles introduced by
extending entity containers.



::: {.varxml .rep}
### <a id="AttributeExtends.24.2" href="#AttributeExtends.24.2">Attribute `Extends`</a>

The value of `Extends` is the qualified name of the entity container to
be extended.
:::

::: {.varxml .example}
Example 34: the entity container `Extending` will contain all child
elements that it defines itself, plus all child elements of the `Base`
entity container located in `SomeOtherSchema`
```xml
<EntityContainer Name="Extending" Extends="Some.Other.Schema.Base">
  …
</EntityContainer>
```
:::

## <a id="EntitySet" href="#EntitySet">13.2 Entity Set</a>

Entity sets are top-level collection-valued resources.

An entity set is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

An entity set MUST specify a type that MUST be an entity type in scope.

An entity set MUST contain only instances of its specified entity type
or its subtypes. The entity type MAY be [abstract](#AbstractEntityType)
but MUST have a [key](#Key) defined.

An entity set MAY indicate whether it is included in the service
document. If not explicitly indicated, it is included.

Entity sets that cannot be queried without specifying additional query
options SHOULD NOT be included in the service document.


::: {.varxml .rep}
### <a id="ElementedmEntitySet.25" href="#ElementedmEntitySet.25">Element `edm:EntitySet`</a>

The `edm:EntitySet` element MUST contain the attributes `Name` and
`EntityType`, and it MAY contain the `IncludeInServiceDocument`
attribute.

It MAY contain
[`edm:NavigationPropertyBinding`](#NavigationPropertyBinding) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.25.1" href="#AttributeName.25.1">Attribute `Name`</a>

The value of `Name` is the entity set's name.

### <a id="AttributeEntityType.25.2" href="#AttributeEntityType.25.2">Attribute `EntityType`</a>

The value of `EntityType` is the qualified name of an entity type in
scope.

### <a id="AttributeIncludeInServiceDocument.25.3" href="#AttributeIncludeInServiceDocument.25.3">Attribute `IncludeInServiceDocument`</a>

The value of `IncludeInServiceDocument` is one of the Boolean literals
`true` or `false`. Absence of the attribute means `true`.
:::

## <a id="Singleton" href="#Singleton">13.3 Singleton</a>

Singletons are top-level single-valued resources.

A singleton is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

A singleton MUST specify a type that MUST be an entity type in scope.

A singleton MUST reference an instance its entity type.


::: {.varxml .rep}
### <a id="ElementedmSingleton.26" href="#ElementedmSingleton.26">Element `edm:Singleton`</a>

The `edm:Singleton` element MUST include the attributes `Name` and
`Type`, and it MAY contain the `Nullable` attribute.

It MAY contain
[`edm:NavigationPropertyBinding`](#NavigationPropertyBinding) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.26.1" href="#AttributeName.26.1">Attribute `Name`</a>

The value of `Name` is the singleton's name.

### <a id="AttributeType.26.2" href="#AttributeType.26.2">Attribute `Type`</a>

The value of `Type` is whose value is the [qualified
name](#QualifiedName) of an entity type in scope.

### <a id="AttributeNullable.26.3" href="#AttributeNullable.26.3">Attribute `Nullable`</a>

The value of `Nullable` is one of the Boolean literals `true` or
`false`.

If no value is specified, the `Nullable` attribute defaults to `false`.

In OData 4.0 responses this attribute MUST NOT be specified.
:::

## <a id="NavigationPropertyBinding" href="#NavigationPropertyBinding">13.4 Navigation Property Binding</a>

If the entity type of an entity set or singleton declares navigation
properties, a navigation property binding allows describing which entity
set or singleton will contain the related entities.

An [entity set](#EntitySet) or a [singleton](#Singleton) SHOULD contain a navigation
property binding for each non-containment navigation property that can be reached
from the entity type through a sequence of type casts, complex properties,
or containment navigation properties.

If omitted, clients MUST assume that the target entity set or singleton
can vary per related entity.

### <a id="NavigationPropertyPathBinding" href="#NavigationPropertyPathBinding">13.4.1 Navigation Property Path Binding</a>

A navigation property binding MUST specify a path to a navigation
property of the entity set's or singleton's declared entity type, or a
navigation property reached through a chain of type casts, complex
properties, or containment navigation properties. If the navigation
property is defined on a subtype, the path MUST contain the [qualified
name](#QualifiedName) of the subtype, followed by a forward slash,
followed by the navigation property name. If the navigation property is
defined on a complex type used in the definition of the entity set's
entity type, the path MUST contain a forward-slash separated list of
complex property names and qualified type names that describe the path
leading to the navigation property.

The path can traverse one or more containment navigation properties, but
the last navigation property segment MUST be a non-containment
navigation property and there MUST NOT be any non-containment navigation
properties prior to the final navigation property segment.

OData 4.01 services MAY have a type-cast segment as the last path
segment, allowing to bind instances of different sub-types to different
targets.

If the path traverses collection-valued complex properties or
collection-valued containment navigation properties, the binding applies
to all items of these collections.

If the path contains a recursive sub-path (i.e. a path leading back to
the same structured type), the binding applies recursively to any
positive number of cycles through that sub-path.

The same navigation property path MUST NOT be specified in more than one
navigation property binding; navigation property bindings are only used
when all related entities are known to come from a single entity set.
Note that it is possible to have navigation property bindings for paths
that differ only in a type-cast segment, allowing to bind instances of
different sub-types to different targets. If paths differ only in
type-cast segments, the most specific path applies.

### <a id="BindingTarget" href="#BindingTarget">13.4.2 Binding Target</a>

A navigation property binding MUST specify a target via a [simple
identifier](#SimpleIdentifier) or [target path](#TargetPath). It
specifies the entity set, singleton, or containment navigation property
that contains the related entities.

If the target is a [simple identifier](#SimpleIdentifier), it MUST
resolve to an entity set or singleton defined in the same entity
container.

If the target is a [target path](#TargetPath), it MUST resolve to an
entity set, singleton, or direct or indirect containment navigation
property of a singleton in scope. The path can traverse single-valued
containment navigation properties or single-valued complex properties
before ending in a containment navigation property, and there MUST NOT
be any non-containment navigation properties prior to the final segment.





::: {.varxml .rep}
### <a id="ElementedmNavigationPropertyBinding.27" href="#ElementedmNavigationPropertyBinding.27">Element `edm:NavigationPropertyBinding`</a>

The `edm:NavigationPropertyBinding` element MUST contain the attributes
`Path` and `Target`.

### <a id="AttributePath.27.1" href="#AttributePath.27.1">Attribute `Path`</a>

The value of `Path` is a path expression.

### <a id="AttributeTarget.27.2" href="#AttributeTarget.27.2">Attribute `Target`</a>

The value of `Target` is a [target path](#TargetPath).
:::

::: {.varxml .example}
Example 35: for an entity set in the same container as the enclosing
entity set `Categories`
```xml
<EntitySet Name="Categories" EntityType="self.Category">
  <NavigationPropertyBinding Path="Products"
                             Target="SomeSet" />
</EntitySet>
```
:::

::: {.varxml .example}
Example 36: for an entity set in any container in scope
```xml
<EntitySet Name="Categories" EntityType="self.Category">
  <NavigationPropertyBinding Path="Products"
                             Target="SomeModel.SomeContainer/SomeSet" />
</EntitySet>
```
:::

::: {.varxml .example}
Example 37: If `Subcategories` is a containment navigation property on the
category entity type, the following binding applies to all products of all subcategories
of all categories
```xml
<EntitySet Name="Categories" EntityType="self.Category">
  <NavigationPropertyBinding Path="Subcategories/Products"
                             Target="Products" />
</EntitySet>
```
:::

## <a id="ActionImport" href="#ActionImport">13.5 Action Import</a>

Action imports sets are top-level resources that are never included in
the service document.

An action import is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

An action import MUST specify the name of an unbound action in scope.

If the imported action returns an entity or a collection of entities, a
[simple identifier](#SimpleIdentifier) or [target path](#TargetPath)
value MAY be specified to identify the entity set that contains the
returned entities. If a [simple identifier](#SimpleIdentifier) is
specified, it MUST resolve to an entity set defined in the same entity
container. If a [target path](#TargetPath) is specified, it MUST resolve
to an entity set in scope.


::: {.varxml .rep}
### <a id="ElementedmActionImport.28" href="#ElementedmActionImport.28">Element `edm:ActionImport`</a>

The `edm:ActionImport` element MUST contain the attributes `Name` and
`Action`, and it MAY contain the `EntitySet` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.28.1" href="#AttributeName.28.1">Attribute `Name`</a>

The value of `Name` is the action import's name.

### <a id="AttributeAction.28.2" href="#AttributeAction.28.2">Attribute `Action`</a>

The value of `Action` is the qualified name of an unbound action.

### <a id="AttributeEntitySet.28.3" href="#AttributeEntitySet.28.3">Attribute `EntitySet`</a>

The value of `EntitySet` is either the unqualified name of an entity set
in the same entity container or a path to an entity set in a different
entity container.
:::

## <a id="FunctionImport" href="#FunctionImport">13.6 Function Import</a>

Function imports sets are top-level resources.

A function import is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

A function import MUST specify the name of an unbound function in scope.
All [unbound overloads](#BoundorUnboundActionorFunctionOverloads) of the
imported function can be invoked from the entity container.

If the imported function returns an entity or a collection of entities,
a [simple identifier](#SimpleIdentifier) or [target path](#TargetPath)
value MAY be specified to identify the entity set that contains the
returned entities. If a [simple identifier](#SimpleIdentifier) is
specified, it MUST resolve to an entity set defined in the same entity
container. If a [target path](#TargetPath) is specified, it MUST resolve
to an entity set in scope.

A function import for a parameterless function MAY indicate whether it
is included in the service document. If not explicitly indicated, it is
not included.


::: {.varxml .rep}
### <a id="ElementedmFunctionImport.29" href="#ElementedmFunctionImport.29">Element `edm:FunctionImport`</a>

The `edm:FunctionImport` element MUST contain the attributes `Name` and
`Function`, and it MAY contain the attributes `EntitySet` and
`IncludeInServiceDocument`.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.29.1" href="#AttributeName.29.1">Attribute `Name`</a>

The value of `Name` is the function import's name.

### <a id="AttributeFunction.29.2" href="#AttributeFunction.29.2">Attribute `Function`</a>

The value of `Function` is the qualified name of an unbound function.

### <a id="AttributeEntitySet.29.3" href="#AttributeEntitySet.29.3">Attribute `EntitySet`</a>

The value of `EntitySet` is either the unqualified name of an entity set
in the same entity container or a path to an entity set in a different
entity container.

### <a id="AttributeIncludeInServiceDocument.29.4" href="#AttributeIncludeInServiceDocument.29.4">Attribute `IncludeInServiceDocument`</a>

The value of `IncludeInServiceDocument` is one of the Boolean literals
`true` or `false`. Absence of the attribute means `false`.
:::


-------

# <a id="VocabularyandAnnotation" href="#VocabularyandAnnotation">14 Vocabulary and Annotation</a>

Vocabularies and annotations provide the ability to annotate metadata as
well as instance data, and define a powerful extensibility point for
OData. An [*annotation*](#Annotation) applies a [*term*](#Term) to a
model element and defines how to calculate a value for the applied term.

*Metadata annotations* are terms applied to model elements. Behaviors or
constraints described by a metadata annotation must be consistent with
the annotated model element. Such annotations define additional
behaviors or constraints on the model element, such as a service, entity
type, property, function, action, or parameter. For example, a metadata
annotation may define ranges of valid values for a particular property.
Metadata annotations are applied in CSDL documents describing or
referencing an entity model.

*Instance annotations* are terms applied to a particular instance within
an OData payload, such as described in [OData-JSON, section 20](https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.html#InstanceAnnotations). An
instance annotation can be used to define additional information
associated with a particular result, entity, property, or error. For
example, whether a property is read-only for a particular instance.
Where the same annotation is defined at both the metadata and instance
level, the instance-level annotation overrides the annotation specified
at the metadata level. Annotations that apply across instances should be
specified as metadata annotations.

A *vocabulary* is a schema containing a set of terms where each
[term](#Term) is a named metadata extension. Anyone can define a
vocabulary (a set of terms) that is scenario-specific or
company-specific; more commonly used terms can be published as shared
vocabularies such as the OData Core vocabulary
[OData-VocCore](#ODataVocCore).

A [term](#Term) can be used to:
- Extend model elements and type instances
with additional information. Type instances are instances of a [primitive type](#PrimitiveTypes),
including [type definitions](#TypeDefinition) and [enumeration types](#EnumerationType),
of an [entity type](#EntityType), or of a [complex type](#ComplexType).
- Map instances of annotated structured
types to an interface defined by the term type; i.e. annotations allow
viewing instances of a structured type as instances of a differently
structured type specified by the applied term.

A service SHOULD NOT require a client to interpret annotations. Clients
SHOULD ignore invalid or unknown terms and silently treat unexpected or
invalid values (including invalid type, invalid literal expression,
invalid targets, etc.) as an unknown value for the term. Unknown or
invalid annotations should never result in an error, as long as the
payload remains well-formed.


::: {.varxml .example}
Example 38: the `Product` entity type is extended with a `DisplayName`
by a metadata annotation that binds the term `DisplayName` to the value
of the property `Name`. The `Product` entity type also includes an
annotation that allows its instances to be viewed as instances of the
type specified by the term `SearchResult`
```xml
<EntityType Name="Product">
  <Key>
    <PropertyRef Name="ID" />
  </Key>
  <Property Name="ID" Nullable="false" Type="Edm.Int32" />
  <Property Name="Name" Type="Edm.String" />
  <Property Name="Description" Type="Edm.String" />
  …
  <Annotation Term="UI.DisplayName" Path="Name" />
  <Annotation Term="SearchVocabulary.SearchResult">
    <Record>
      <PropertyValue Property="Title" Path="Name" />
      <PropertyValue Property="Abstract" Path="Description" />
      <PropertyValue Property="Url">
        <Apply Function="odata.concat">
          <String>Products(</String>
          <Apply Function="odata.concat">
            <Path>ID</Path>
            <String>)</String>
          </Apply>
        </Apply>
      </PropertyValue>
    </Record>
  </Annotation>
</EntityType>
```
:::

## <a id="Term" href="#Term">14.1 Term</a>

A term allows annotating a model element or OData resource
representation with additional data.

The term's name is a [simple identifier](#SimpleIdentifier) that MUST be
unique within its schema.

The term's type MUST be a type in scope, or a collection of a type in
scope.


::: {.varxml .rep}
### <a id="ElementedmTerm.30" href="#ElementedmTerm.30">Element `edm:Term`</a>

The `edm:Term` element MUST contain the attributes `Name` and `Type`. It
MAY contain the attributes `Nullable`, `DefaultValue`, [`BaseTerm`](#SpecializedTerm) and [`AppliesTo`](#Applicability).

The facets [`MaxLength`](#MaxLength),
[`Precision`](#Precision), [`Scale`](#Scale), and [`SRID`](#SRID) can be
used as appropriate, as well as the [`Unicode`](#Unicode) facet attribute for
4.01 or greater payloads.

A `edm:Term` element whose `Type` attribute specifies a primitive or
enumeration type MAY define a value for the `DefaultValue` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.30.1" href="#AttributeName.30.1">Attribute `Name`</a>

The value of `Name` is the term's name.

### <a id="AttributeType.30.2" href="#AttributeType.30.2">Attribute `Type`</a>

For single-valued terms the value of `Type` is the qualified name
of the term's type.

For collection-valued properties the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the property's
item type, followed by a closing parenthesis `)`.

### <a id="AttributeNullable.30.3" href="#AttributeNullable.30.3">Attribute `Nullable`</a>

The value of `Nullable` is one of the Boolean literals `true` or
`false`.

For single-valued terms the value `true` means that annotations may have the `null` value.

For collection-valued terms the annotation value will always be a
collection that MAY be empty. In this case the `Nullable` attribute
applies to items of the collection and specifies whether the collection
MAY contain `null` values.

If no value is specified for a single-valued term, the `Nullable`
attribute defaults to `true`.

In OData 4.01 responses a collection-valued term MUST specify a
value for the `Nullable` attribute.

If no value is specified for a collection-valued term, the client
cannot assume any default value. Clients SHOULD be prepared for this
situation even in OData 4.01 responses.

### <a id="AttributeDefaultValue.30.4" href="#AttributeDefaultValue.30.4">Attribute `DefaultValue`</a>

The value of this attribute determines the value of the term when
applied in an [`edm:Annotation`](#Annotation) without providing an
expression.

Default values of type `Edm.String` MUST be represented according to the
XML escaping rules for character data in attribute values. Values of
other primitive types MUST be represented according to the appropriate
alternative in the `primitiveValue` rule defined in
[OData-ABNF](#ODataABNF), i.e. `Edm.Binary` as `binaryValue`,
`Edm.Boolean` as `booleanValue` etc.

If no value is specified, the `DefaultValue` attribute defaults to
`null`.
:::

### <a id="SpecializedTerm" href="#SpecializedTerm">14.1.1 Specialized Term</a>

A term MAY specialize another term in scope by specifying it as its base
term.

When applying a specialized term, the base term MUST also be applied
with the same qualifier, and so on until a term without a base term is
reached.


::: {.varxml .rep}
### <a id="AttributeBaseTerm.30.5" href="#AttributeBaseTerm.30.5">Attribute `BaseTerm`</a>

The value of `BaseTerm` is the qualified name of the base term.
:::

### <a id="Applicability" href="#Applicability">14.1.2 Applicability</a>

Applicability specifies a list of model elements to which the term MAY be applied.
If no list is supplied, the term MAY be applied to any model element.
The list of model elements MAY be extended in future versions of the vocabulary. As the intended usage may
evolve over time, clients SHOULD be prepared for any term to be applied
to any model element and SHOULD be prepared to handle unknown values
within the list of model constructs. Applicability is expressed using
the following symbolic values:

Symbolic Value|Model Element
--------------|-------------
`Action`                  |Action
`ActionImport`            |Action Import
`Annotation`              |Annotation
`Apply`                   |Application of a client-side function in an annotation
`Cast`                    |Type Cast annotation expression
`Collection`              |Entity Set or collection-valued Property or Navigation Property
`ComplexType`             |Complex Type
`EntityContainer`         |Entity Container
`EntitySet`               |Entity Set
`EntityType`              |Entity Type
`EnumType`                |Enumeration Type
`Function`                |Function
`FunctionImport`          |Function Import
`If`                      |Conditional annotation expression
`Include`                 |Reference to an Included Schema
`IsOf`                    |Type Check annotation expression
`LabeledElement`          |Labeled Element expression
`Member`                  |Enumeration Member
`NavigationProperty`      |Navigation Property
`Null`                    |Null annotation expression
`OnDelete`                |On-Delete Action of a navigation property
`Parameter`               |Action or Function Parameter
`Property`                |Structural Property
`PropertyValue`           |Property value of a Record annotation expression
`Record`                  |Record annotation expression
`Reference`               |Reference to another CSDL document
`ReferentialConstraint`   |Referential Constraint of a navigation property
`ReturnType`              |Return Type of an Action or Function
`Schema`                  |Schema
`Singleton`               |Singleton or single-valued Property or Navigation Property
`Term`                    |Term
`TypeDefinition`          |Type Definition
`UrlRef`                  |UrlRef annotation expression



::: {.varxml .rep}
### <a id="AttributeAppliesTo.30.6" href="#AttributeAppliesTo.30.6">Attribute `AppliesTo`</a>

The value of `AppliesTo` is a whitespace-separated list of symbolic
values from the table above that identify model elements the term is
intended to be applied to.
:::

::: {.varxml .example}
Example 39: the `IsURL` term can be applied to properties and terms that
are of type `Edm.String` (the `Core.Tag` type and the two `Core` terms
are defined in [OData-VocCore](#ODataVocCore))
```xml
<Term Name="IsURL" Type="Core.Tag" Nullable="false" DefaultValue="true"
      AppliesTo="Property Term">
  <Annotation Term="Core.Description">
    <String>
      Properties and terms annotated with this term MUST contain a valid URL
    </String>
  </Annotation>
  <Annotation Term="Core.RequiresType" String="Edm.String" />
</Term>
```
:::

## <a id="Annotation" href="#Annotation">14.2 Annotation</a>

An annotation applies a [term](#Term) to a model element and defines how
to calculate a value for the term application. Both term and model
element MUST be in scope. Section 14.1.2 specifies which model elements
MAY be annotated with a term.

The value of an annotation is specified as an *annotation expression*,
which is either a [constant expression](#ConstantExpression)
representing a constant value, or a [dynamic
expression](#DynamicExpression). The most common construct for assigning
an annotation value is a [path expression](#ValuePath) that refers to a
property of the same or a related structured type.



::: {.varxml .rep}
### <a id="ElementedmAnnotation.31" href="#ElementedmAnnotation.31">Element `edm:Annotation`</a>

The `edm:Annotation` element MUST contain the attribute `Term`, and it
MAY contain the attribute [`Qualifier`](#Qualifier).

The value of the annotation MAY be a [constant
expression](#ConstantExpression) or [dynamic
expression](#DynamicExpression).

If no expression is specified for a term with a primitive type, the
annotation evaluates to the [default value](#DefaultValue) of the term
definition. If no expression is specified for a term with a complex
type, the annotation evaluates to a complex instance with default values
for its properties. If no expression is specified for a
collection-valued term, the annotation evaluates to an empty collection.

An `edm:Annotation` element can be used as a child of the model element
it annotates, or as the child of an
[`edm:Annotations`](#AnnotationswithExternalTargeting) element that
targets the model element to be annotated.

An `edm:Annotation` element MAY contain [`edm:Annotation`](#Annotation)
elements that annotate the annotation.

### <a id="AttributeTerm.31.1" href="#AttributeTerm.31.1">Attribute `Term`</a>

The value of `Term` is the qualified name of a [term](#Term) in scope.
:::

::: {.varxml .example}
Example 40: term `Measures.ISOCurrency`, once applied with a constant
value, once with a path value
```xml
<Property Name="AmountInReportingCurrency" Type="Edm.Decimal">
  <Annotation Term="Measures.ISOCurrency" String="USD">
    <Annotation Term="Core.Description"
                String="The parent company's currency" />
  </Annotation>
</Property>
<Property Name="AmountInTransactionCurrency" Type="Edm.Decimal">
  <Annotation Term="Measures.ISOCurrency" Path="Currency" />
</Property>
<Property Name="Currency" Type="Edm.String" MaxLength="3" />
```
:::

If an entity type or complex type is annotated with a term that itself
has a structured type, an instance of the annotated type may be viewed
as an "instance" of the term, and the qualified term name may be used as
a [term-cast segment](#TermCast) in path expressions.

Structured types "inherit" annotations from their direct or indirect
base types. If both the type and one of its base types is annotated with
the same term and qualifier, the annotation on the type completely
replaces the annotation on the base type; structured or
collection-valued annotation values are not merged. Similarly,
properties of a structured type inherit annotations from identically
named properties of a base type.

It is up to the definition of a term to specify whether and how
annotations with this term propagate to places where the annotated model
element is used, and whether they can be overridden. E.g. a "Label"
annotation for a UI can propagate from a type definition to all
properties using that type definition and may be overridden at each
property with a more specific label, whereas an annotation marking a
type definition as containing a phone number will propagate to all using
properties but may not be overridden.

### <a id="Qualifier" href="#Qualifier">14.2.1 Qualifier</a>

A term can be applied multiple times to the same model element by
providing a qualifier to distinguish the annotations. The qualifier is a
[simple identifier](#SimpleIdentifier).

The combination of target model element, term, and qualifier uniquely
identifies an annotation.


::: {.varxml .rep}
### <a id="AttributeQualifier.31.2" href="#AttributeQualifier.31.2">Attribute `Qualifier`</a>

Annotation elements that are children of an
[`edm:Annotations`](#AnnotationswithExternalTargeting) element MUST NOT
provide a value for the qualifier attribute if the parent
[`edm:Annotations`](#AnnotationswithExternalTargeting) element provides
a value for the qualifier attribute.
:::

::: {.varxml .example}
Example 41: annotation should only be applied to tablet devices
```xml
<Annotation Term="org.example.display.DisplayName" Path="FirstName"
            Qualifier="Tablet" />
```
:::

### <a id="Target" href="#Target">14.2.2 Target</a>

The target of an annotation is the model element the term is applied to.

The target of an annotation MAY be specified indirectly by "nesting" the
annotation within the model element. Whether and how this is possible is
described per model element in this specification.

The target of an annotation MAY also be specified directly; this allows
defining an annotation in a different schema than the targeted model
element.

This external targeting is only possible for model elements that are
uniquely identified within their parent, and all their ancestor elements
are uniquely identified within their parent.

These are the direct children of a schema with a unique name (i.e.
except actions and functions whose overloads to not possess a natural
identifier), and all direct children of an entity container.

Model element| External targeting syntax| <div class="example"><p>Example 42: Target expressions</p></div>
-----|-----|-----
[Action](#Action) overload| qualified name of action followed by parentheses containing the binding parameter type of a bound action overload to identify that bound overload, or by empty parentheses to identify the unbound overload| <pre>`MySchema.MyAction(MySchema.MyBindingType)` <br>`MySchema.MyAction(Collection(MySchema.BindingType))` <br>`MySchema.MyAction()`</pre>
all overloads of an [Action](#Action)| qualified name of action| <pre>`MySchema.MyAction`</pre>
[Action Import](#ActionImport)| qualified name of entity container followed by a segment containing the action import name| <pre>`MySchema.MyEntityContainer/MyActionImport`</pre>
[Annotation](#Annotation) on a model element| path expression identifying the model element followed by a segment containing an at (`@`) prepended to the qualified name of a term, optionally suffixed with a hash (`#`) and the qualifier of an annotation| <pre>`MySchema.MyEntityType/@MyVocabulary.MyTerm` <br>`MySchema.MyEntityType/@MyVocabulary.MyTerm#MyQualifier`</pre>
[Complex Type](#ComplexType)| qualified name of complex type| <pre>`MySchema.MyComplexType`</pre>
[Entity Container](#EntityContainer)| qualified name of entity container| <pre>`MySchema.MyEntityContainer`</pre>
[Entity Set](#EntitySet)| qualified name of entity container followed by a segment containing the entity set name| <pre>`MySchema.MyEntityContainer/MyEntitySet`</pre>
[Entity Type](#EntityType)| qualified name of entity type| <pre>`MySchema.MyEntityType`</pre>
[Enumeration Type](#EnumerationType)| qualified name of enumeration type| <pre>`MySchema.MyEnumType`</pre>
[Enumeration Type Member](#EnumerationTypeMember)| qualified name of enumeration type followed by a segment containing the name of a child element| <pre>`MySchema.MyEnumType/MyMember`</pre>
[Function](#Function) overload| qualified name of function followed by parentheses containing the comma-separated list of the parameter types of a bound or unbound function overload in the order of their definition in the function overload| <pre>`MySchema.MyFunction(MySchema.MyBindingParamType,` <br>`  First.NonBinding.ParamType)` <br>`MySchema.MyFunction(First.NonBinding.ParamType,` <br>`  Second.NonBinding.ParamType)`</pre>
all overloads of a [Function](#Function)| qualified name of function| <pre>`MySchema.MyFunction`</pre>
[Function Import](#FunctionImport)| qualified name of entity container followed by a segment containing the function import name| <pre>`MySchema.MyEntityContainer/MyFunctionImport`</pre>
[Navigation Property](#NavigationProperty) via container| qualified name of entity container followed by a segment containing a singleton or entity set name and zero or more segments containing the name of a structural or navigation property, or a type-cast or term-cast| <pre>`MySchema.MyEntityContainer/MyEntitySet` <br>`  /MyNavigationProperty` <br>`MySchema.MyEntityContainer/MyEntitySet` <br>`  /MySchema.MyEntityType/MyNavProperty` <br>`MySchema.MyEntityContainer/MyEntitySet` <br>`  /MyComplexProperty/MyNavProperty` <br>`MySchema.MyEntityContainer/MySingleton` <br>`  /MyComplexProperty/MyNavProperty`</pre>
[Navigation Property](#NavigationProperty) via structured type| qualified name of structured type followed by zero or more segments containing the name of a structural or navigation property, or a type-cast or term-cast| <pre>`MySchema.MyEntityType/MyNavigationProperty` <br>`MySchema.MyComplexType/MyNavigationProperty`</pre>
[Parameter](#Parameter)| qualified name of entity container followed by a segment containing an action or function import name followed by a segment containing a parameter name| <pre>`MySchema.MyEntityContainer/MyFunctionImport/MyParameter`</pre>
[Parameter](#Parameter)| qualified name of action or function optionally followed by a parenthesized expression as in the first row followed by a segment containing the name of a child element| <pre>`MySchema.MyFunction/MyParameter`</pre>
[Property](#StructuralProperty) via container| qualified name of entity container followed by a segment containing a singleton or entity set name and zero or more segments containing the name of a structural or navigation property, or a type-cast or term-cast| <pre>`MySchema.MyEntityContainer/MyEntitySet` <br>` /MyProperty` <br>`MySchema.MyEntityContainer/MyEntitySet` <br>` /MySchema.MyEntityType/MyProperty` <br>`MySchema.MyEntityContainer/MyEntitySet` <br>`  /MyComplexProperty/MyProperty`</pre>
[Property](#StructuralProperty) via structured type| qualified name of structured type followed by zero or more segments containing the name of a structural or navigation property, or a type-cast or term-cast| <pre>`MySchema.MyEntityType/MyProperty` <br>`MySchema.MyComplexType/MyProperty`</pre>
[Return Type](#ReturnType)| qualified name of entity container followed by a segment containing an action or function import name followed by a segment containing `$ReturnType`| <pre>`MySchema.MyEntityContainer/MyFunctionImport/$ReturnType`</pre>
[Return Type](#ReturnType)| qualified name of action or function optionally followed by a parenthesized expression as in the first row followed by a segment containing `$ReturnType`| <pre>`MySchema.MyFunction/$ReturnType` <br>`MySchema.MyFunction(MySchema.MyBindingParamType,` <br>`  First.NonBinding.ParamType)/$ReturnType`</pre>
[Singleton](#Singleton)| qualified name of entity container followed by a segment containing a singleton name| <pre>`MySchema.MyEntityContainer/MySingleton`</pre>
[Term](#Term)| qualified name of term| <pre>`MySchema.MyTerm`</pre>
[Type Definition](#TypeDefinition)| qualified name of type definition| <pre>`MySchema.MyTypeDefinition`</pre>

All [qualified names](#QualifiedName) used in a target expression MUST be in scope.

External targeting is possible for properties and navigation
properties of singletons or entities in a particular entity set. These
annotations override annotations on the properties or navigation
properties targeted via the declaring structured type.

## <a id="ConstantExpression" href="#ConstantExpression">14.3 Constant Expression</a>

Constant expressions allow assigning a constant value to an applied
term.


### <a id="Binary" href="#Binary">14.3.1 Binary</a>



::: {.varxml .rep}
### <a id="ExpressionedmBinary.32" href="#ExpressionedmBinary.32">Expression `edm:Binary`</a>

The `edm:Binary` expression evaluates to a primitive binary value. A
binary expression MUST be assigned a value conforming to the rule
`binaryValue` in [OData-ABNF](#ODataABNF).

The binary expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example 43: base64url-encoded binary value (OData)
```xml
<Annotation Term="org.example.display.Thumbnail" Binary="T0RhdGE" />

<Annotation Term="org.example.display.Thumbnail">
  <Binary>T0RhdGE</Binary>
</Annotation>
```
:::

### <a id="Boolean" href="#Boolean">14.3.2 Boolean</a>



::: {.varxml .rep}
### <a id="ExpressionedmBool.33" href="#ExpressionedmBool.33">Expression `edm:Bool`</a>

The `edm:Bool` expression evaluates to a primitive Boolean value. A
Boolean expression MUST be assigned a Boolean value.

The Boolean expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example 44:
```xml
<Annotation Term="org.example.display.ReadOnly" Bool="true" />

<Annotation Term="org.example.display.ReadOnly">
  <Bool>true</Bool>
</Annotation>
```
:::

### <a id="Date" href="#Date">14.3.3 Date</a>



::: {.varxml .rep}
### <a id="ExpressionedmDate.34" href="#ExpressionedmDate.34">Expression `edm:Date`</a>

The `edm:Date` expression evaluates to a primitive date value. A date
expression MUST be assigned a value of type `xs:date`, see
[XML-Schema-2](#XML-Schema2), [section
3.3.9](http://www.w3.org/TR/xmlschema11-2/#date). The value MUST also
conform to rule `dateValue` in [OData-ABNF](#ODataABNF), i.e. it MUST
NOT contain a time-zone offset.

The date expression MAY be provided using element notation or attribute
notation.
:::

::: {.varxml .example}
Example 45:
```xml
<Annotation Term="org.example.vCard.birthDay" Date="2000-01-01" />

<Annotation Term="org.example.vCard.birthDay">
  <Date>2000-01-01</Date>
</Annotation>
```
:::

### <a id="DateTimeOffset" href="#DateTimeOffset">14.3.4 DateTimeOffset</a>



::: {.varxml .rep}
### <a id="ExpressionedmDateTimeOffset.35" href="#ExpressionedmDateTimeOffset.35">Expression `edm:DateTimeOffset`</a>

The `edm:DateTimeOffset` expression evaluates to a primitive
datetimestamp value with a time-zone offset. A datetimestamp expression
MUST be assigned a value of type `xs:dateTimeStamp`, see
[XML-Schema-2](#XML-Schema2), [section
3.4.28](http://www.w3.org/TR/xmlschema11-2/#dateTimeStamp). The value
MUST also conform to rule `dateTimeOffsetValue` in
[OData-ABNF](#ODataABNF), i.e. it MUST NOT contain an end-of-day
fragment (24:00:00).

The datetimestamp expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example 46:
```xml
<Annotation Term="org.example.display.LastUpdated"

            DateTimeOffset="2000-01-01T16:00:00.000Z" />

<Annotation Term="org.example.display.LastUpdated">
  <DateTimeOffset>2000-01-01T16:00:00.000-09:00</DateTimeOffset>
</Annotation>
```
:::

### <a id="Decimal" href="#Decimal">14.3.5 Decimal</a>




::: {.varxml .rep}
### <a id="ExpressionedmDecimal.36" href="#ExpressionedmDecimal.36">Expression `edm:Decimal`</a>

The `edm:Decimal` expression evaluates to a primitive decimal value. A
decimal expression MUST be assigned a value conforming to the rule
`decimalValue` in [OData-ABNF](#ODataABNF).

The decimal expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .rep}
Example 47: attribute notation
```xml
<Annotation Term="org.example.display.Width" Decimal="3.14" />
```
:::

::: {.varxml .example}
Example 48: element notation
```xml
<Annotation Term="org.example.display.Width">
  <Decimal>3.14</Decimal>
</Annotation>
```
:::

### <a id="Duration" href="#Duration">14.3.6 Duration</a>



::: {.varxml .rep}
### <a id="ExpressionedmDuration.37" href="#ExpressionedmDuration.37">Expression `edm:Duration`</a>

The `edm:Duration` expression evaluates to a primitive duration value. A
duration expression MUST be assigned a value of type
`xs:dayTimeDuration`, see [XML-Schema-2](#XML-Schema2),
[section 3.4.27](http://www.w3.org/TR/xmlschema11-2/#dayTimeDuration).

The duration expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example 49:
```xml
<Annotation Term="org.example.task.duration" Duration="P7D" />

<Annotation Term="org.example.task.duration">
  <Duration>P11DT23H59M59.999999999999S</Duration>
</Annotation>
```
:::

### <a id="EnumerationMember" href="#EnumerationMember">14.3.7 Enumeration Member</a>




::: {.varxml .rep}
### <a id="ExpressionedmEnumMember.38" href="#ExpressionedmEnumMember.38">Expression `edm:EnumMember`</a>

The `edm:EnumMember` expression references a
[member](#EnumerationTypeMember) of an [enumeration
type](#EnumerationType). An enumeration member expression MUST be
assigned a value that consists of the qualified name of the enumeration
type, followed by a forward slash and the name of the enumeration
member. If the enumeration type specifies an `IsFlags` attribute with
value `true`, the expression MAY also be assigned a whitespace-separated
list of values. Each of these values MUST resolve to the name of a
member of the enumeration type of the specified term.

The enumeration member expression MAY be provided using element notation
or attribute notation.
:::

::: {.varxml .example}
Example 50: single value
```xml
<Annotation Term="org.example.HasPattern"
             EnumMember="org.example.Pattern/Red" />

<Annotation Term="org.example.HasPattern">
  <EnumMember>org.example.Pattern/Red</EnumMember>
</Annotation>
```
:::

::: {.varxml .example}
Example 51: combined value for `IsFlags` enumeration type
```xml
<Annotation Term="org.example.HasPattern"
           EnumMember="org.example.Pattern/Red org.example.Pattern/Striped" />

<Annotation Term="org.example.HasPattern">
  <EnumMember>org.example.Pattern/Red org.example.Pattern/Striped</EnumMember>
</Annotation>
```
:::

### <a id="FloatingPointNumber" href="#FloatingPointNumber">14.3.8 Floating-Point Number</a>



::: {.varxml .rep}
### <a id="ExpressionedmFloat.39" href="#ExpressionedmFloat.39">Expression `edm:Float`</a>

The `edm:Float` expression evaluates to a primitive floating point (or
double) value. A float expression MUST be assigned a value conforming to
the rule `doubleValue` in [OData-ABNF](#ODataABNF).

The float expression MAY be provided using element notation or attribute
notation.
:::

::: {.varxml .example}
Example 52:
```xml
<Annotation Term="org.example.display.Width" Float="3.14" />

<Annotation Term="org.example.display.Width">
  <Float>3.14</Float>
</Annotation>
```
:::

### <a id="Guid" href="#Guid">14.3.9 Guid</a>



::: {.varxml .rep}
### <a id="ExpressionedmGuid.40" href="#ExpressionedmGuid.40">Expression `edm:Guid`</a>

The `edm:Guid` expression evaluates to a primitive guid value. A guid
expression MUST be assigned a value conforming to the rule `guidValue`
in [OData-ABNF](#ODataABNF).

The guid expression MAY be provided using element notation or attribute
notation.
:::

::: {.varxml .example}
Example 53:
```xml
<Annotation Term="org.example.display.Id"
            Guid="21EC2020-3AEA-1069-A2DD-08002B30309D" />

<Annotation Term="org.example.display.Id">
  <Guid>21EC2020-3AEA-1069-A2DD-08002B30309D</Guid>
</Annotation>
```
:::

### <a id="Integer" href="#Integer">14.3.10 Integer</a>




::: {.varxml .rep}
### <a id="ExpressionedmInt.41" href="#ExpressionedmInt.41">Expression `edm:Int`</a>

The `edm:Int` expression evaluates to a primitive integer value. An
integer MUST be assigned a value conforming to the rule `int64Value` in
[OData-ABNF](#ODataABNF).

The integer expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example 54: attribute notation
```xml
<Annotation Term="org.example.display.Width" Int="42" />
```
:::

::: {.varxml .example}
Example 55: element notation
```xml
<Annotation Term="org.example.display.Width">
  <Int>42</Int>
</Annotation>
```
:::

### <a id="String" href="#String">14.3.11 String</a>



::: {.varxml .rep}
### <a id="ExpressionedmString.42" href="#ExpressionedmString.42">Expression `edm:String`</a>

The `edm:String` expression evaluates to a primitive string value. A
string expression MUST be assigned a value of the type `xs:string`, see
[XML-Schema-2](#XML-Schema2), [section
3.3.1](http://www.w3.org/TR/xmlschema11-2/#string).

The string expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example 56:
```xml
<Annotation Term="org.example.display.DisplayName" String="Product Catalog" />

<Annotation Term="org.example.display.DisplayName">
  <String>Product Catalog</String>
</Annotation>
```
:::

### <a id="TimeofDay" href="#TimeofDay">14.3.12 Time of Day</a>



::: {.varxml .rep}
### <a id="ExpressionedmTimeOfDay.43" href="#ExpressionedmTimeOfDay.43">Expression `edm:TimeOfDay`</a>

The `edm:TimeOfDay` expression evaluates to a primitive time value. A
time-of-day expression MUST be assigned a value conforming to the rule
`timeOfDayValue` in [OData-ABNF](#ODataABNF).

The time-of-day expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example 57:
```xml
<Annotation Term="org.example.display.EndTime" TimeOfDay="21:45:00" />

<Annotation Term="org.example.display.EndTime">
  <TimeOfDay>21:45:00</TimeOfDay>
</Annotation>
```
:::

### <a id="GeoValues" href="#GeoValues">14.3.13 Geo Values</a>



::: {.varxml .rep}
Values are represented as [string expressions](#String) using the WKT (well-known text) format for `Geo` types, see rules
`fullCollectionLiteral`, `fullLineStringLiteral`,
`fullMultiPointLiteral`, `fullMultiLineStringLiteral`,
`fullMultiPolygonLiteral`, `fullPointLiteral`, and
`fullPolygonLiteral` in
[OData-ABNF](#ODataABNF).
:::

::: {.varxml .example}
Example 58:
```xml
<PropertyValue Property="Location" String="geography'SRID=0;Point(142.1 64.1)'" />
```
:::

### <a id="StreamValues" href="#StreamValues">14.3.14 Stream Values</a>


::: {.varxml .rep}
Constant values of type `Edm.Stream` with media type `application/json` or one of its subtypes,
optionally with format parameters, are represented as [string expressions](#String) containing the stringified JSON.

Constant values of type `Edm.Stream` with top-level type `text`, for example `text/plain`,
are represented as [string expressions](#String) containing the raw text.

Constant values of type `Edm.Stream` with other media types are represented as [binary expressions](#Binary) containing the base64url-encoded binary value.
:::

The annotation (property) being assigned a stream value MUST be annotated with term
[`Core.MediaType`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#MediaType)
and the media type of the stream as its value.


::: {.varxml .example}
Example 59:
```xml
<PropertyValue Property="JsonStream">
  <String>{"foo":true,"bar":42}</String>
  <Annotation Term="Core.MediaType" String="application/json" />
</PropertyValue>

<PropertyValue Property="TextStream">
  <String>Hello World!</String>
  <Annotation Term="Core.MediaType" String="text/plain" />
</PropertyValue>

<PropertyValue Property="OtherStream">
  <Binary>T0RhdGE</Binary>
  <Annotation Term="Core.MediaType" String="application/octet-stream" />
</PropertyValue>
```
:::

## <a id="DynamicExpression" href="#DynamicExpression">14.4 Dynamic Expression</a>

Dynamic expressions allow assigning a calculated value to an applied
term.

If a calculated value is not acceptable for the type of the term or
its [facets](#TypeFacets), does not meet the constraints imposed by its
`Nullable` attribute
or by its
annotations from the Validation vocabulary [OData-VocValidation](#ODataVocValidation),
the client SHOULD NOT make any assumptions about the application of the term
(see [example 75](#termdefault)).

### <a id="PathExpressions" href="#PathExpressions">14.4.1 Path Expressions</a>

Path expressions allow assigning a value to an applied term or term
component. There are two kinds of path expressions:
- A *model path* is evaluated on the entity model of a service and resolves to a model element.
Model paths are used within
[Annotation Path](#AnnotationPath), [Model Element Path](#ModelElementPath),
[Navigation Property Path](#NavigationPropertyPath), and [Property Path](#PropertyPath) expressions.
They allow assigning values to terms or term properties of the [built-in types](#BuiltInTypesfordefiningVocabularyTerms) `Edm.AnnotationPath`,
`Edm.ModelElementPath`, `Edm.NavigationPropertyPath`, `Edm.PropertyPath`, and
`Edm.AnyPropertyPath`.
- An *instance path* is evaluated on a type instance and its nested or related type instances
and resolves to the instance or collection of instances identified by the path.
Instance paths are used within [Value Path](#ValuePath) expressions.
They allow assigning values to terms or term properties of model-defined types or of built-in types other
than the `Edm.*Path` types.

#### <a id="PathSyntax" href="#PathSyntax">14.4.1.1 Path Syntax</a>

Model paths and instance paths share a common syntax which is derived
from the path expression syntax of URLs, see [OData-URL, section 5.1.1.15](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#PathExpressions).

A path MUST be composed of zero or more path segments joined together by
forward slashes (`/`).

Paths starting with a forward slash (`/`) are absolute paths, and the
first path segment MUST be the qualified name of a model element, e.g.
an entity container. The remaining path after the second forward slash
is interpreted relative to that model element.

::: example
Example 60: absolute path to an entity set
```
/My.Schema.MyEntityContainer/MyEntitySet
```
:::

Paths not starting with a forward slash are interpreted relative to the
annotation target, following the rules specified in [section 14.4.1.2](#PathEvaluation).

::: example
Example 61: relative path to a property
```
Address/City
```
:::

If a path segment is a [qualified name](#QualifiedName), it represents a
[*type cast*]{id=TypeCast}, and the segment MUST be the name of a type
in scope. If the type or instance identified by the preceding path part
cannot be cast to the specified type, the path expression evaluates to
the null value.

::: example
Example 62: type-cast segment
```
…/self.Manager/…
```
:::

If a path segment starts with an at (`@`) character, it represents a
[*term cast*]{id=TermCast}. The at (`@`) character MUST be followed by
a [qualified name](#QualifiedName) that MAY be followed by a hash (`#`)
character and a [simple identifier](#SimpleIdentifier). The [qualified
name](#QualifiedName) preceding the hash character MUST resolve to a
term that is in scope, the [simple identifier](#SimpleIdentifier)
following the hash sign is interpreted as a [qualifier](#Qualifier) for
the term. If the model element or instance identified by the preceding
path part has not been annotated with that term (and if present, with
that qualifier), the term cast evaluates to the null value. Four special
terms are implicitly "annotated" for media entities and stream
properties:

-   `odata.mediaEditLink`
-   `odata.mediaReadLink`
-   `odata.mediaContentType`
-   `odata.mediaEtag`

::: example
Example 63: term-cast segments
```
…/@Capabilities.SortRestrictions/…
```
:::

If a path segment is a [simple identifier](#SimpleIdentifier), it MUST
be the name of a child model element of the model element identified by
the preceding path part, or a structural or navigation property of the
instance identified by the preceding path part. A sequence of navigation
segments can traverse multiple CSDL documents. The document containing
the path expression only needs to reference the next traversed document
to bring the navigation target type into scope, and each traversed
document in turn needs to reference only its next document.

A model path MAY contain any number of segments representing
collection-valued structural or navigation properties. The result of the
expression is the model element reached via this path.

::: example
Example 64: property segments in model path
```
…/Orders/Items/Product/…
```
:::

An instance path MUST NOT contain more than one segment representing a
collection-valued construct, e.g. an entity set or a collection-valued
navigation property that is not followed by a key predicate, or a
collection-valued structural property that is not followed by an index
segment. The result of the expression is the collection of instances
resulting from applying any remaining path segments that operate on a
single-valued expression to each instance in the collection-valued
segment.

An instance path MAY terminate in a `$count` segment if the previous
segment is collection-valued, in which case the path evaluates to the
number of items in the collection identified by the preceding segment.

::: example
Example 65: property segments in instance path
```
…/Addresses/Street
```

```
…/Addresses/$count
```
:::

A model path MAY contain path segments starting with a navigation
property, then followed by an at (`@`) character, then followed by the
[qualified name](#QualifiedName) of a term in scope, and optionally
followed by a hash (`#`) character and a [simple
identifier](#SimpleIdentifier) which is interpreted as a
[qualifier](#Qualifier) for the term. If the navigation property has not
been annotated with that term (and if present, with that qualifier), the
path segment evaluates to the null value. This allows addressing
annotations on the navigation property itself; annotations on the entity
type specified by the navigation property are addressed via a [term-cast
segment](#TermCast).

::: example
Example 66: model path segment addressing an annotation on a navigation property
vs. term cast addressing an annotation on the resource addressed by the navigation property
```
…/Items@Core.Description
```

```
…/Items/@Core.Description
```
:::

An instance path MAY contain path segments starting with an entity set
or a collection-valued navigation property, then followed by a key
predicate using parentheses-style convention, see
[OData-URL, section 4.3.1](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#CanonicalURL). The key values are either primitive literals or
instance paths. If the key value is a relative instance path, it is
interpreted according to the same rule below as the instance path it is
part of, *not* relative to the instance identified by the preceding path
part.

::: example
Example 67: instance path with entity set and key predicate
```
/self.container/SettingsCollection('FeatureXxx')/IsAvailable
```

```
/self.container/Products(ID=ProductID)/Name
```
:::

An instance path MAY contain an index segment immediately following a
path segment representing an ordered collection-valued structural
property. The index is zero-based and MUST be an integer literal.
Negative integers count from the end of the collection, with -1
representing the last item in the collection. Remaining path segments
are evaluated relative to the identified item of the collection.

::: example
Example 68: instance path with collection-valued structural property and
index segment
```
Addresses/1
```

```
Addresses/-1/Street
```
:::

#### <a id="PathEvaluation" href="#PathEvaluation">14.4.1.2 Path Evaluation</a>

Annotations MAY be embedded within their target, or specified separately,
e.g. as part of a different schema, and specify a path to their target model
element. The latter situation is referred to as *targeting* in the remainder of
this section.

The *host* of an annotation is the model element targeted by the annotation,
unless that target is another annotation or a model element (collection,
record or property value) directly or indirectly embedded within another
annotation, in which case the host is the host of that other annotation.

If the value of an annotation is expressed dynamically with a path
expression, the path evaluation rules for this expression depend upon the
model element by which the annotation is hosted.

For annotations hosted by an entity container, the path is evaluated starting
at the entity container, i.e. an empty path resolves to the entity container,
and non-empty paths MUST start with a segment identifying a container child
(entity set, function import, action import, or singleton). The subsequent
segments follow the rules for path expressions targeting the corresponding
child element.

For annotations hosted by an entity set or a singleton, the path is evaluated
starting at the entity set or singleton, i.e. an empty path resolves to the
entity set or singleton, and non-empty paths MUST follow the rules for
annotations targeting the declared entity type of the entity set or singleton.

For annotations hosted by an entity type or complex type, the path is
evaluated starting at the type, i.e. an empty path resolves to the type, and
the first segment of a non-empty path MUST be a structural or navigation
property of the type, a [type cast](#TypeCast), or a [term cast](#TermCast).

For annotations hosted by an action, action import, function, function
import, parameter, or return type, the first segment of the path MUST be the
name of a parameter of the action or function or `$ReturnType`.

For annotations hosted by a structural or navigation property, the path
evaluation rules additionally depend upon how the annotation target is
specified, as follows:

1. If the annotation is directly or indirectly embedded within the hosting
   property, the path is evaluated starting at the directly enclosing type of
   the hosting property. This allows e.g. specifying the value of an
   annotation on one property to be calculated from values of other properties
   of the same enclosing type. An empty path resolves to the enclosing type,
   and non-empty paths MUST follow the rules for annotations targeting the
   directly enclosing type.

2. If the annotation uses targeting and the target expression starts with an entity
   container, or the annotation is directly or indirectly embedded within such an
   annotation, the path is evaluated starting at the declared type of the
   hosting property. An empty path resolves to the declared type of the
   property, and non-empty paths MUST follow the rules for annotations
   targeting the declared type of the property. If the type is primitive, the
   first segment of a non-empty path MUST be a [type cast](#TypeCast) or a
   [term cast](#TermCast).

3. If the annotation uses targeting and the target expression does not start with
   an entity container, or the annotation is directly or indirectly embedded
   within such an annotation, the path is evaluated starting at the *outermost*
   entity type or complex type named in the target expression. This allows e.g.
   specifying the value of an annotation on one property to be calculated from
   values of other properties of the outermost type. An empty path resolves to
   the outermost type, and the first segment of a non-empty path MUST be a
   structural or navigation property of the outermost type, a [type cast](#TypeCast),
   or a [term cast](#TermCast).

::: example
Example 69: Annotations hosted by property `A2` in various modes

Path evaluation for the annotations in the first block starts at the directly
enclosing type `self.A` of the hosting property `A2`.

:::: varxml
```xml
<Schema Namespace="self">
  <EntityType Name="A">
    <Property Name="A1" Type="Edm.Boolean" Nullable="false" />
    <Property Name="A2" Type="self.B" Nullable="false">
      <Annotation Term="Core.Description" String="…">
        <Annotation Term="Core.IsLanguageDependent" Path="A1" />
      </Annotation>
    </Property>
  </EntityType>
  <ComplexType Name="B">
    <Property Name="B1" Type="Edm.Boolean" Nullable="false" />
  </ComplexType>
```
::::

Path evaluation for the annotations in the next block starts at the declared
type `self.B` of the hosting property `A2`.

:::: varxml
```xml
  <EntityContainer Name="Container">
    <EntitySet Name="SetA" EntityType="self.A" />
  </EntityContainer>
  <Annotations Target="self.Container/SetA/A2">
    <Annotation Term="Core.Description" Qualifier="viaSet" String="…">
      <Annotation Term="Core.IsLanguageDependent" Path="B1" />
    </Annotation>
  </Annotations>
  <Annotations Target="self.Container/SetA/A2/@Core.Description#viaSet">
    <Annotation Term="Core.IsLanguageDependent" Path="B1" />
  </Annotations>
```
::::

Path evaluation for the annotations in the final block starts at the outermost
type `self.A` named in the target expression.

:::: varxml
```xml
  <Annotations Target="self.A/A2">
    <Annotation Term="Core.Description" Qualifier="external" String="…">
      <Annotation Term="Core.IsLanguageDependent" Path="A1" />
    </Annotation>
  </Annotations>
  <Annotations Target="self.A/A2/@Core.Description">
    <Annotation Term="Core.IsLanguageDependent" Path="A1" />
  </Annotations>
</Schema>
```
::::

:::

#### <a id="AnnotationPath" href="#AnnotationPath">14.4.1.3 Annotation Path</a>

The annotation path expression provides a value for terms or term
properties that specify the [built-in
types](#BuiltInTypesfordefiningVocabularyTerms)
`Edm.AnnotationPath` or `Edm.ModelElementPath`. Its argument is a [model
path](#PathExpressions) with the following restriction:
- A non-null path MUST resolve to an [annotation](#Annotation).

The value of the annotation path expression is the _path_ to the annotation, not its instance value.
This is useful for terms that reuse or refer to other terms.

A term or term property of type `Edm.AnnotationPath` can be annotated
with the term `Validation.AllowedTerms` (see
[OData-VocValidation](#ODataVocValidation)) if its intended value is an
annotation path that ends in a term cast with one of the listed terms.



::: {.varxml .rep}
### <a id="ExpressionedmAnnotationPath.44" href="#ExpressionedmAnnotationPath.44">Expression `edm:AnnotationPath`</a>

The `edm:AnnotationPath` expression MAY be provided using element
notation or attribute notation.
:::

::: {.varxml .example}
Example 70:
```xml
<Annotation Term="UI.ReferenceFacet"
            AnnotationPath="Product/Supplier/@UI.LineItem" />

<Annotation Term="UI.CollectionFacet" Qualifier="Contacts">
  <Collection>
    <AnnotationPath>Supplier/@Communication.Contact</AnnotationPath>
    <AnnotationPath>Customer/@Communication.Contact</AnnotationPath>
  </Collection>
</Annotation>
```
:::

#### <a id="ModelElementPath" href="#ModelElementPath">14.4.1.4 Model Element Path</a>

The model element path expression provides a value for terms or term
properties that specify the [built-in
type](#BuiltInTypesfordefiningVocabularyTerms) `Edm.ModelElementPath`. Its
argument is a [model path](#PathExpressions).

The value of the model element path expression is the path itself, not
the instance(s) identified by the path.



::: {.varxml .rep}
### <a id="ExpressionedmModelElementPath.45" href="#ExpressionedmModelElementPath.45">Expression `edm:ModelElementPath`</a>

The `edm:ModelElementPath` expression MAY be provided using element
notation or attribute notation.
:::

::: {.varxml .example}
Example 71:
```xml
<Annotation Term="org.example.MyFavoriteModelElement"
            ModelElementPath="/org.example.someAction" />

<Annotation Term="org.example.MyFavoriteModelElement">
  <ModelElementPath>/org.example.someAction</ModelElementPath>
</Annotation>
```
:::

#### <a id="NavigationPropertyPath" href="#NavigationPropertyPath">14.4.1.5 Navigation Property Path</a>

The navigation property path expression provides a value for terms or
term properties that specify the [built-in
types](#BuiltInTypesfordefiningVocabularyTerms)
`Edm.NavigationPropertyPath`, `Edm.AnyPropertyPath`, or `Edm.ModelElementPath`.
Its argument is a [model path](#PathExpressions) with the following
restriction:
- A non-null path MUST end with a [navigation property](#NavigationProperty)
or a term cast to a term whose type is an entity type or a collection of entity types.


The value of the navigation property path expression is the path itself,
not the entity or collection of entities identified by the path.



::: {.varxml .rep}
### <a id="ExpressionedmNavigationPropertyPath.46" href="#ExpressionedmNavigationPropertyPath.46">Expression `edm:NavigationPropertyPath`</a>

The `edm:NavigationPropertyPath` expression MAY be provided using
element notation or attribute notation.
:::

::: {.varxml .example}
Example 72:
```xml
<Annotation Term="UI.HyperLink" NavigationPropertyPath="Supplier" />

<Annotation Term="Capabilities.UpdateRestrictions">
  <Record>
    <PropertyValue Property="NonUpdatableNavigationProperties">
      <Collection>
        <NavigationPropertyPath>Supplier</NavigationPropertyPath>
        <NavigationPropertyPath>Category</NavigationPropertyPath>
      </Collection>
    </PropertyValue>
  </Record>
</Annotation>
```
:::

#### <a id="PropertyPath" href="#PropertyPath">14.4.1.6 Property Path</a>

The property path expression provides a value for terms or term
properties that specify one of the [built-in
types](#BuiltInTypesfordefiningVocabularyTerms)
`Edm.PropertyPath`, `Edm.AnyPropertyPath`, or `Edm.ModelElementPath`. Its
argument is a [model path](#PathExpressions) with the following
restriction:
- A non-null path MUST end with a [structural property](#StructuralProperty)
or a term cast to a term whose type is a primitive or complex type, an enumeration type,
a type definition, or a collection of one of these types.

The value of the property path expression is the path itself, not the
value of the structural property or annotation
identified by the path.



::: {.varxml .rep}
### <a id="ExpressionedmPropertyPath.47" href="#ExpressionedmPropertyPath.47">Expression `edm:PropertyPath`</a>

The `edm:PropertyPath` MAY be provided using either element notation or
attribute notation.
:::

::: {.varxml .example}
Example 73:
```xml
<Annotation Term="UI.RefreshOnChangeOf" PropertyPath="ChangedAt" />

<Annotation Term="Capabilities.UpdateRestrictions">
  <Record>
    <PropertyValue Property="NonUpdatableProperties">
      <Collection>
        <PropertyPath>CreatedAt</PropertyPath>
        <PropertyPath>ChangedAt</PropertyPath>
      </Collection>
    </PropertyValue>
  </Record>
</Annotation>
```
:::

#### <a id="ValuePath" href="#ValuePath">14.4.1.7 Value Path</a>

The value path expression allows assigning a value by traversing an
object graph. It can be used in annotations that target entity
containers, entity sets, entity types, complex types, navigation
properties of structured types, and structural properties of structured
types. Its argument is an [instance path](#PathExpressions).

The value of the path expression is the instance or collection of
instances identified by the path.



::: {.varxml .rep}
### <a id="ExpressionedmPath.48" href="#ExpressionedmPath.48">Expression `edm:Path`</a>

The `edm:Path` expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example 74:
```xml
<Annotation Term="org.example.display.DisplayName" Path="FirstName" />

<Annotation Term="org.example.display.DisplayName">
  <Path>@vCard.Address#work/FullName</Path>
</Annotation>
```
:::

::: example
Example <a id="termdefault" href="#termdefault">75</a>: The first name of a bot cannot be changed after creation.
:::: varxml
```xml
<Property Name="IsBot" Type="Edm.Boolean" Nullable="true" />
<Property Name="FirstName" Type="Edm.String" Nullable="false">
  <Annotation Term="Core.Immutable" Path="IsBot" />
</Property>
```
::::
If `IsBot` is `null` the client makes no assumption about the immutability of
the `FirstName`. It can try to change it after creation while being prepared for an
error response.
:::

### <a id="ComparisonandLogicalOperators" href="#ComparisonandLogicalOperators">14.4.2 Comparison and Logical Operators</a>

Annotations MAY use the following logical and comparison expressions
which evaluate to a Boolean value. These expressions MAY be combined and
they MAY be used anywhere instead of a Boolean expression.

<table>
<tr><th>Operator</th><th>Description</th></tr>
<tr><td colspan="2"><strong>Logical Operators</strong></td></tr>
<tr><td><code>And</code></td><td>Logical and     </td></tr>
<tr><td><code>Or</code></td><td>Logical or      </td></tr>
<tr><td><code>Not</code></td><td>Logical negation</td></tr>
<tr><td colspan="2"><strong>Comparison Operators</strong></td></tr>
<tr><td><code>Eq</code></td><td>Equal                      </td></tr>
<tr><td><code>Ne</code></td><td>Not equal                  </td></tr>
<tr><td><code>Gt</code></td><td>Greater than               </td></tr>
<tr><td><code>Ge</code></td><td>Greater than or equal      </td></tr>
<tr><td><code>Lt</code></td><td>Less than                  </td></tr>
<tr><td><code>Le</code></td><td>Less than or equal         </td></tr>
<tr><td><code>Has</code></td><td>Has enumeration flag(s) set</td></tr>
<tr><td><code>In</code></td><td>Is in collection           </td></tr>
</table>

The `And` and `Or` operators require two operand expressions that
evaluate to Boolean values. The `Not` operator requires a single operand
expression that evaluates to a Boolean value. For details on null
handling for comparison operators see [OData-URL, section 5.1.1.1](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#LogicalOperators).

The other comparison operators require two operand expressions that
evaluate to comparable values.



::: {.varxml .rep}
### <a id="ExpressionsedmAnd.49" href="#ExpressionsedmAnd.49">Expressions `edm:And`</a> and <a id="edmOr.49.1" href="#edmOr.49.1">`edm:Or`</a>

The `And` and `Or` logical expressions are represented as elements
`edm:And` and `edm:Or` that MUST contain two annotation expressions.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="ExpressionedmNot.50" href="#ExpressionedmNot.50">Expression `edm:Not`</a>

Negation expressions are represented as an element `edm:Not` that MUST
contain a single annotation expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="ExpressionsedmEq.51" href="#ExpressionsedmEq.51">Expressions `edm:Eq`</a>,     <a id="edmNe.51.1" href="#edmNe.51.1">`edm:Ne`</a>,     <a id="edmGt.51.2" href="#edmGt.51.2">`edm:Gt`</a>,     <a id="edmGe.51.3" href="#edmGe.51.3">`edm:Ge`</a>,     <a id="edmLt.51.4" href="#edmLt.51.4">`edm:Lt`</a>,     <a id="edmLe.51.5" href="#edmLe.51.5">`edm:Le`</a>,     <a id="edmHas.51.6" href="#edmHas.51.6">`edm:Has`</a>, and <a id="edmIn.51.7" href="#edmIn.51.7">`edm:In`</a>

All comparison expressions are represented as an element that MUST
contain two annotation expressions.

They MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: {.varxml .example}
Example 76:
```xml
<And>
  <Path>IsMale</Path>
  <Path>IsMarried</Path>
</And>
<Or>
  <Path>IsMale</Path>
  <Path>IsMarried</Path>
</Or>
<Not>
  <Path>IsMale</Path>
</Not>
<Eq>
  <Null />
  <Path>IsMale</Path>
</Eq>
<Ne>
  <Null />
  <Path>IsMale</Path>
</Ne>
<Gt>
  <Path>Price</Path>
  <Int>20</Int>
</Gt>
<Ge>
  <Path>Price</Path>
  <Int>10</Int>
</Ge>
<Lt>
  <Path>Price</Path>
  <Int>20</Int>
</Lt>
<Le>
  <Path>Duration</Path>
  <Duration>PT1H</Duration>
</Le>
<Has>
  <Path>Fabric</Path>
  <EnumMember>org.example.Pattern/Red</EnumMember>
</Has>
<In>
  <Path>Size</Path>
  <Collection>
    <String>XS</String>
    <String>S</String>
  </Collection>
</In>
```
:::

### <a id="ArithmeticOperators" href="#ArithmeticOperators">14.4.3 Arithmetic Operators</a>

Annotations MAY use the following arithmetic expressions which evaluate
to a numeric value. These expressions MAY be combined, and they MAY be
used anywhere instead of a numeric expression of the appropriate type.
The semantics and evaluation rules for each arithmetic expression is
identical to the corresponding arithmetic operator defined in
[OData-URL, section 5.1.1.2](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#ArithmeticOperators).

Operator|Description
--------|-----------
`Add`          |Addition
`Sub`          |Subtraction
`Neg`          |Negation
`Mul`          |Multiplication
`Div`          |Division (with integer result for integer operands)
`DivBy`        |Division (with fractional result also for integer operands)
`Mod`          |Modulo

The `Neg` operator requires a single operand expression that evaluates
to a numeric value. The other arithmetic operators require two operand
expressions that evaluate to numeric values.



::: {.varxml .rep}
### <a id="ExpressionedmNeg.52" href="#ExpressionedmNeg.52">Expression `edm:Neg`</a>

Negation expressions are represented as an element `edm:Neg` that MUST
contain a single annotation expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="ExpressionsedmAdd.53" href="#ExpressionsedmAdd.53">Expressions `edm:Add`</a>,     <a id="edmSub.53.1" href="#edmSub.53.1">`edm:Sub`</a>,     <a id="edmMul.53.2" href="#edmMul.53.2">`edm:Mul`</a>,     <a id="edmDiv.53.3" href="#edmDiv.53.3">`edm:Div`</a>,     <a id="edmDivBy.53.4" href="#edmDivBy.53.4">`edm:DivBy`</a>, and <a id="edmMod.53.5" href="#edmMod.53.5">`edm:Mod`</a>

These arithmetic expressions are represented as an element that MUST
contain two annotation expressions.

They MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: {.varxml .example}
Example 77:
```xml
<Add>
  <Path>StartDate</Path>
  <Path>Duration</Path>
</Add>
<Sub>
  <Path>Revenue</Path>
  <Path>Cost</Path>
</Sub>
<Neg>
  <Path>Height</Path>
</Neg>
<Mul>
  <Path>NetPrice</Path>
  <Path>TaxRate</Path>
</Mul>
<Div>
  <Path>Quantity</Path>
  <Path>QuantityPerParcel</Path>
</Div>
<DivBy>
  <Path>Quantity</Path>
  <Path>QuantityPerParcel</Path>
</DivBy>
<Mod>
  <Path>Quantity</Path>
  <Path>QuantityPerParcel</Path>
</Mod>
```
:::

### <a id="ApplyClientSideFunctions" href="#ApplyClientSideFunctions">14.4.4 Apply Client-Side Functions</a>

The apply expression enables a value to be obtained by applying a
client-side function. The apply expression MAY have operand expressions.
The operand expressions are used as parameters to the client-side
function.

If the value of an operand expression is not acceptable for the function,
the client SHOULD NOT make any assumptions about the application of the term
that rely on the operand.


::: {.varxml .rep}
### <a id="ExpressionedmApply.54" href="#ExpressionedmApply.54">Expression `edm:Apply`</a>

The `edm:Apply` element MUST contain the `Function` attribute and MAY
contain annotation expressions as operands for the applied function.

It MAY contain more [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeFunction.54.1" href="#AttributeFunction.54.1">Attribute `Function`</a>

The value of `Function` is the [qualified name](#QualifiedName) of the
client-side function to apply.
:::

OData defines the following functions. Services MAY support additional
functions that MUST be qualified with a namespace other than `odata`.
Function names qualified with `odata` are reserved for this
specification and its future versions.

#### <a id="CanonicalFunctions" href="#CanonicalFunctions">14.4.4.1 Canonical Functions</a>

All canonical functions defined in [OData-URL, section 5.1.1.4](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#CanonicalFunctions) can be used as
client-side functions, qualified with the namespace `odata`. The
semantics of these client-side functions is identical to their
counterpart function defined in [OData-URL, section 5.1.1.4](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#CanonicalFunctions).

For example, the `odata.concat` client-side function takes two
expressions as arguments. Each argument MUST evaluate to a primitive or
enumeration type. It returns a value of type `Edm.String` that is the
concatenation of the literal representations of the results of the
argument expressions. Values of primitive types other than `Edm.String`
are represented according to the appropriate alternative in the
`primitiveValue` rule of [OData-ABNF](#ODataABNF), i.e. `Edm.Binary` as
`binaryValue`, `Edm.Boolean` as `booleanValue` etc.


::: {.varxml .example}
Example 78:
```xml
<Annotation Term="org.example.display.DisplayName">
  <Apply Function="odata.concat">
    <String>Product: </String>
    <Apply Function="odata.concat">
      <Path>ProductName</Path>
      <Apply Function="odata.concat">
        <String> (</String>
        <Apply Function="odata.concat">
          <Path>Available/Quantity</Path>
          <Apply Function="odata.concat">
            <String> </String>
            <Apply Function="odata.concat">
              <Path>Available/Unit</Path>
              <String> available)</String>
            </Apply>
          </Apply>
        </Apply>
      </Apply>
    </Apply>
  </Apply>
</Annotation>
```
:::

`ProductName` is of type `String`, `Quantity` in complex type
`Available` is of type `Decimal`, and `Unit` in `Available` is of type
enumeration, so the result of the `Path` expression is represented as
the member name of the enumeration value.

#### <a id="FunctionodatafillUriTemplate" href="#FunctionodatafillUriTemplate">14.4.4.2 Function `odata.fillUriTemplate`</a>

The `odata.fillUriTemplate` client-side function takes two or more
expressions as arguments and returns a value of type `Edm.String`.

The first argument MUST be of type `Edm.String` and specifies a URI
template according to [RFC6570](#rfc6570), the other arguments MUST be
[labeled element expressions](#LabeledElement). Each [labeled element
expression](#LabeledElement) specifies the template parameter name as
its name and evaluates to the template parameter value.

[RFC6570](#rfc6570) defines three kinds of template parameters: simple
values, lists of values, and key-value maps.

Simple values are represented as [labeled element
expressions](#LabeledElement) that evaluate to a single primitive value.
The literal representation of this value according to
[OData-ABNF](#ODataABNF) is used to fill the corresponding template
parameter.

Lists of values are represented as [labeled element
expressions](#LabeledElement) that evaluate to a collection of primitive
values.

Key-value maps are represented as [labeled element
expressions](#LabeledElement) that evaluate to a collection of complex
types with two properties that are used in lexicographic order. The
first property is used as key, the second property as value.


::: {.varxml .example}
Example 79: assuming there are no special characters in values of the
Name property of the Actor entity
```xml
<Apply Function="odata.fillUriTemplate">
  <String>http://host/someAPI/Actors/{actorName}/CV</String>
  <LabeledElement Name="actorName" Path="Actor/Name" />
</Apply>
```
:::

#### <a id="FunctionodatamatchesPattern" href="#FunctionodatamatchesPattern">14.4.4.3 Function `odata.matchesPattern`</a>

The `odata.matchesPattern` client-side function takes two string
expressions as arguments and returns a Boolean value.
It is the counterpart of the identically named URL function [OData-URL, section 5.1.1.7.1](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#matchespattern).

The function returns true if the second expression evaluates to an
[ECMAScript](#_ECMAScript) (JavaScript) regular expression and
the result of the first argument expression matches that regular
expression, using syntax and semantics of
[ECMAScript](#_ECMAScript) regular expressions.


::: {.varxml .example}
Example 80: all non-empty `FirstName` values not containing the letters
`b`, `c`, or `d` evaluate to `true`
```xml
<Apply Function="odata.matchesPattern">
  <Path>FirstName</Path>
  <String>^[^b-d]+$</String>
</Apply>
```
:::

#### <a id="FunctionodatauriEncode" href="#FunctionodatauriEncode">14.4.4.4 Function `odata.uriEncode`</a>

The `odata.uriEncode` client-side function takes one argument of
primitive type and returns the URL-encoded OData literal that can be
used as a key value in OData URLs or in the query part of OData URLs.

Note: string literals are surrounded by single quotes as required by the
parentheses-style key syntax.


::: {.varxml .example}
Example 81:
```xml
<Apply Function="odata.fillUriTemplate">
  <String>http://host/service/Genres({genreName})</String>
  <LabeledElement Name="genreName">
    <Apply Function="odata.uriEncode" >
      <Path>NameOfMovieGenre</Path>
    </Apply>
  </LabeledElement>
</Apply>
```
:::

### <a id="Cast" href="#Cast">14.4.5 Cast</a>

The cast expression casts the value obtained from its single child
expression to the specified type. The cast expression follows the same
rules as the `cast` canonical function defined in
[OData-URL, section 5.1.1.10.1](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html#cast).



::: {.varxml .rep}
### <a id="ExpressionedmCast.55" href="#ExpressionedmCast.55">Expression `edm:Cast`</a>

The `edm:Cast` element MUST contain the `Type` attribute and MUST
contain exactly one expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeType.55.1" href="#AttributeType.55.1">Attribute `Type`</a>

The value of `Type` is a qualified type name in scope, or the character
sequence `Collection(` followed by the qualified name of a type in
scope, followed by a closing parenthesis `)`.

If the specified type is a primitive type or a collection of a primitive
type, the facet attributes [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale), and
[`SRID`](#SRID) MAY be specified if applicable to the specified
primitive type. If the facet attributes are not specified, their values
are considered unspecified.
:::

::: {.varxml .example}
Example 82:
```xml
<Annotation Term="org.example.display.Threshold">
  <Cast Type="Edm.Decimal">
    <Path>Average</Path>
  </Cast>
</Annotation>
```
:::

### <a id="Collection" href="#Collection">14.4.6 Collection</a>

The collection expression enables a value to be obtained from zero or
more item expressions. The value calculated by the collection expression
is the collection of the values calculated by each of the item
expressions. The values of the child expressions MUST all be type
compatible.

If the value of a dynamic child expression is not acceptable for the type of the collection or
its [facets](#TypeFacets), is null for a non-[nullable](#Nullable) collection
or does not meet the constraints imposed by
its annotations from the Validation vocabulary [OData-VocValidation](#ODataVocValidation),
the client SHOULD NOT make any assumptions about the application of the term
that rely on the value.



::: {.varxml .rep}
### <a id="ExpressionedmCollection.56" href="#ExpressionedmCollection.56">Expression `edm:Collection`</a>

The `edm:Collection` element contains zero or more child expressions.
:::

::: {.varxml .example}
Example 83:
```xml
<Annotation Term="org.example.seo.SeoTerms">
  <Collection>
    <String>Product</String>
    <String>Supplier</String>
    <String>Customer</String>
  </Collection>
</Annotation>
```
:::

### <a id="IfThenElse" href="#IfThenElse">14.4.7 If-Then-Else</a>

The if-then-else expression enables a value to be obtained by evaluating
a *condition expression*.
The if-then-else expression is called a collection-if-then-else expression if
- it is a direct child of a collection expression or
- it is the second or third child of a collection-if-then-else expression.

An if-then-else expression MUST contain exactly three child
expressions. There is one exception to this rule: if and only if the
if-then-else expression is a collection-if-then-else expression, the third
child expression MAY be omitted, reducing it to an if-then expression.
This can be used to conditionally add an element to a collection.

The first child expression is the condition and MUST evaluate to a
Boolean result or `null`, e.g. the [comparison and logical
operators](#ComparisonandLogicalOperators) can be used.

The second and third child expressions are evaluated conditionally. The
result MUST be type compatible with the type expected by the surrounding
expression.

If the value of a child expression does not meet these conditions,
the client SHOULD NOT make any assumptions about the application of the term
that rely on the condition expression.

If the first expression evaluates to `true`, the second expression MUST
be evaluated and its value MUST be returned as the result of the
if-then-else expression. If the first expression evaluates to `false` or `null`
and a third child element is present, it MUST be evaluated and its value
MUST be returned as the result of the if-then-else expression. If no
third expression is present, nothing is added to the surrounding
collection.




::: {.varxml .rep}
### <a id="ExpressionedmIf.57" href="#ExpressionedmIf.57">Expression `edm:If`</a>

The `edm:If` element MUST contain two or three child expressions that
MUST use element notation.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: {.varxml .example}
Example 84: the condition is a [value path expression](#ValuePath)
referencing the Boolean property `IsFemale`, whose value then determines
the value of the `edm:If` expression
```xml
<Annotation Term="org.example.person.Gender">
  <If>
    <Path>IsFemale</Path>
    <String>Female</String>
    <String>Male</String>
  </If>
</Annotation>
```
:::

::: {.varxml .example}
Example 85: pronouns based on a person's `IdentifiesAsFemale` and `IdentifiesAsMale` attributes
```xml
<Annotation Term="org.example.person.Pronouns">
  <Collection>
    <If>
      <Path>IdentifiesAsFemale</Path>
      <String>she</String>
      <If>
        <Path>IdentifiesAsMale</Path>
        <String>he</String>
      </If>
    </If>
    <If>
      <Path>IdentifiesAsFemale</Path>
      <String>her</String>
      <If>
        <Path>IdentifiesAsMale</Path>
        <String>him</String>
      </If>
    </If>
  </Collection>
</Annotation>
```
:::

### <a id="IsOf" href="#IsOf">14.4.8 Is-Of</a>

The `is-of` expression checks whether the value obtained from its single
child expression is compatible with the specified type. It returns
`true` if the child expression returns a type that is compatible with
the specified type, and `false` otherwise.



::: {.varxml .rep}
### <a id="ExpressionedmUrlRef.58" href="#ExpressionedmUrlRef.58">Expression `edm:UrlRef`</a>

The `edm:UrlRef` expression MAY be provided using element notation or
attribute notation.

Relative URLs are relative to the `xml:base` attribute, see
[XML-Base](#XML-Base).

In element notation it MAY contain [`edm:Annotation`](#Annotation)
elements.
:::

::: {.varxml .example}
Example 86:
```xml
<Annotation Term="self.IsPreferredCustomer">
  <IsOf Type="self.PreferredCustomer">
    <Path>Customer</Path>
  </IsOf>
</Annotation>
```
:::

### <a id="LabeledElement" href="#LabeledElement">14.4.9 Labeled Element</a>

The labeled element expression assigns a name to its single child
expression. The value of the child expression can then be reused
elsewhere with a [labeled element reference
expression](#LabeledElementReference).

A labeled element expression MUST contain exactly one child expression.
The value of the child expression is also the value of the labeled
element expression.

A labeled element expression MUST provide a [simple
identifier](#SimpleIdentifier) value as its name that MUST be unique
within the schema containing the expression.



::: {.varxml .rep}
### <a id="ExpressionedmLabeledElement.59" href="#ExpressionedmLabeledElement.59">Expression `edm:LabeledElement`</a>

The `edm:LabeledElement` element MUST contain the Name attribute.

It MUST contain a child expression written either in attribute notation
or element notation.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeName.59.1" href="#AttributeName.59.1">Attribute `Name`</a>

The value of `Name` is the labeled element's name.
:::

::: {.varxml .example}
Example 87:
```xml
<Annotation Term="org.example.display.DisplayName">
  <LabeledElement Name="CustomerFirstName" Path="FirstName" />
</Annotation>

<Annotation Term="org.example.display.DisplayName">
  <LabeledElement Name="CustomerFirstName">
    <Path>FirstName</Path>
  </LabeledElement>
</Annotation>
```
:::

### <a id="LabeledElementReference" href="#LabeledElementReference">14.4.10 Labeled Element Reference</a>

The labeled element reference expression MUST specify the [qualified
name](#QualifiedName) of a [labeled element expression](#LabeledElement)
in scope and returns the value of the identified labeled element
expression as its value.



::: {.varxml .rep}
### <a id="ExpressionedmLabeledElementReference.60" href="#ExpressionedmLabeledElementReference.60">Expression `edm:LabeledElementReference`</a>

The `edm:LabeledElementReference` element MUST contain the qualified name
of a labeled element expression in its body.
:::

::: {.varxml .example}
Example 88:
```xml
<Annotation Term="org.example.display.DisplayName">
  <LabeledElementReference>Model.CustomerFirstName</LabeledElementReference>
</Annotation>
```
:::

### <a id="Null" href="#Null">14.4.11 Null</a>

The null expression indicates the absence of a value. The null
expression MAY be annotated.





::: {.varxml .rep}
### <a id="ExpressionedmNull.61" href="#ExpressionedmNull.61">Expression `edm:Null`</a>

The `edm:Null` element MAY contain [`edm:Annotation`](#Annotation)
elements.
:::

::: {.varxml .example}
Example 89:
```xml
<Annotation Term="org.example.display.DisplayName">
  <Null/>
</Annotation>
```
:::

::: {.varxml .example}
Example 90:
```xml
<Annotation Term="@UI.Address">
  <Null>
    <Annotation Term="self.Reason" String="Private" />
  </Null>
</Annotation>
```
:::

### <a id="Record" href="#Record">14.4.12 Record</a>

The record expression enables a new entity type or complex type instance
to be constructed.

A record expression MAY specify the structured type of its result, which
MUST be an entity type or complex type in scope. If not explicitly
specified, the type is derived from the expression's context.

A record expression contains zero or more property value expressions.
For each single-valued structural or navigation property of the record
expression's type that is neither nullable nor specifies a default value
a property value expression MUST be provided. The only exception is if
the record expression is the value of an annotation for a term that has
a [base term](#SpecializedTerm) whose type is structured and directly or
indirectly inherits from the type of its base term. In this case,
property values that already have been specified in the annotation for
the base term or its base term etc. need not be specified again.

For collection-valued properties the absence of a property value
expression is equivalent to specifying an empty collection as its value.

If a dynamically provided property value is not acceptable for the type of the property or
its [facets](#TypeFacets), does not meet the constraints imposed by
its [nullability](#Nullable) or by
its annotations from the Validation vocabulary [OData-VocValidation](#ODataVocValidation),
the client SHOULD NOT make any assumptions about the application of the term that rely on the
property value.



::: {.varxml .rep}
### <a id="ExpressionedmRecord.62" href="#ExpressionedmRecord.62">Expression `edm:Record`</a>

The `edm:Record` element MAY contain the `Type` attribute and MAY
contain `edm:PropertyValue` elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeType.62.1" href="#AttributeType.62.1">Attribute `Type`</a>

The value of `Type` is the qualified name of a structured type in scope.

### <a id="ElementedmPropertyValue.63" href="#ElementedmPropertyValue.63">Element `edm:PropertyValue`</a>

The `edm:PropertyValue` element MUST contain the `Property` attribute,
and it MUST contain exactly one expression that MAY be provided using
either element notation or attribute notation.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### <a id="AttributeProperty.63.1" href="#AttributeProperty.63.1">Attribute `Property`</a>

The value of `Property` is the name of a property of the type of the
enclosing `edm:Record` expression.
:::

::: {.varxml .example}
Example 91: this annotation "morphs" the entity type from [example 13](#entitytype) into
a structured type with two structural properties `GivenName` and
`Surname` and two navigation properties `DirectSupervisor` and
`CostCenter`. The first three properties simply rename properties of the
annotated entity type, the fourth adds a calculated navigation property
that is pointing to a different service
```xml
<Annotations Target="org.example.Person">
  <Annotation Term="org.example.hcm.Employee">
    <Record Type="org.example.hcm.Manager">
      <Annotation Term="Core.Description" String="Annotation on record" />
      <PropertyValue Property="GivenName" Path="FirstName">
        <Annotation Term="Core.Description"
                    String="Annotation on record member" />
      </PropertyValue>
      <PropertyValue Property="Surname" Path="LastName" />
      <PropertyValue Property="DirectSupervisor" Path="Manager" />
      <PropertyValue Property="CostCenter">
        <UrlRef>
          <Apply Function="odata.fillUriTemplate">
            <String>http://host/anotherservice/CostCenters('{ccid}')</String>
            <LabeledElement Name="ccid" Path="CostCenterID" />
          </Apply>
        </UrlRef>
      </PropertyValue>
    </Record>
  </Annotation>
</Annotations>
```
:::

### <a id="URLReference" href="#URLReference">14.4.13 URL Reference</a>

The URL reference expression enables a value to be obtained by sending a
`GET` request.

The URL reference expression MUST contain exactly one expression of type
`Edm.String`. Its value is treated as a URL that MAY be relative or
absolute; relative URLs are relative to the URL of the document
containing the URL reference expression, or relative to a base URL
specified in a format-specific way.

The response body of the `GET` request MUST be returned as the result of
the URL reference expression. The result of the URL reference
expression MUST be type compatible with the type expected by the
surrounding expression.



::: {.varxml .rep}
### <a id="ExpressionedmUrlRef.64" href="#ExpressionedmUrlRef.64">Expression `edm:UrlRef`</a>

The `edm:UrlRef` expression MAY be provided using element notation or
attribute notation.

Relative URLs are relative to the `xml:base` attribute, see
[XML-Base](#XML-Base).

In element notation it MAY contain [`edm:Annotation`](#Annotation)
elements.
:::

::: {.varxml .example}
Example 92:
```xml
<Annotation Term="org.example.person.Supplier">
  <UrlRef>
    <Apply Function="odata.fillUriTemplate">
      <String>http://host/service/Suppliers({suppID})</String>
      <LabeledElement Name="suppID">
      <Apply Function="odata.uriEncode">
        <Path>SupplierId</Path>
      </Apply>
      </LabeledElement>
     </Apply>
  </UrlRef>
</Annotation>

<Annotation Term="Core.LongDescription">
  <UrlRef><String>http://host/wiki/HowToUse</String></UrlRef>
</Annotation>

<Annotation Term="Core.LongDescription" UrlRef="http://host/wiki/HowToUse" />
```
:::


-------

# <a id="IdentifierandPathValues" href="#IdentifierandPathValues">15 Identifier and Path Values</a>

## <a id="Namespace" href="#Namespace">15.1 Namespace</a>

A namespace is a dot-separated sequence of [simple
identifier](#SimpleIdentifier)s with a maximum length of 511 Unicode
characters (code points).

## <a id="SimpleIdentifier" href="#SimpleIdentifier">15.2 Simple Identifier</a>

A simple identifier is a Unicode character sequence with the following
restrictions:

-   It consists of at least one and at most 128 Unicode characters (code
    points).
-   The first character MUST be the underscore character (U+005F) or any
    character in the Unicode category "Letter (L)" or "Letter number
    (Nl)".
-   The remaining characters MUST be the underscore character (U+005F)
    or any character in the Unicode category "Letter (L)", "Letter
    number (Nl)", "Decimal number (Nd)", "Non-spacing mark (Mn)",
    "Combining spacing mark (Mc)", "Connector punctuation (Pc)", and
    "Other, format (Cf)".

Non-normatively speaking it starts with a letter or underscore, followed
by at most 127 letters, underscores or digits.

For maximum interoperability services SHOULD use simple identifiers
that additionally only consist of characters from the Basic Latin code block
and match the pattern `^[_A-Za-z][_A-Za-z0-9]*$`.

## <a id="QualifiedName" href="#QualifiedName">15.3 Qualified Name</a>

For model elements that are direct children of a schema: the namespace
or alias of the schema that defines the model element, followed by a dot
and the name of the model element, see rule `qualifiedTypeName` in
[OData‑ABNF](#ODataABNF).

For built-in [primitive types](#PrimitiveTypes): the name of the type,
prefixed with `Edm` followed by a dot.

## <a id="TargetPath" href="#TargetPath">15.4 Target Path</a>

Target paths are used to refer to other model elements.

The allowed path expressions are:
- The [qualified
name](#QualifiedName) of an entity container, followed by a forward
slash and the name of a container child element
- The target
path of a container child followed by a forward slash and one or more
forward-slash separated property, navigation property, or type-cast
segments

::: example
Example 93: Target paths
```
MySchema.MyEntityContainer/MyEntitySet
```

```
MySchema.MyEntityContainer/MySingleton
```

```
MySchema.MyEntityContainer/MySingleton/MyContainmentNavigationProperty
```

```
MySchema.MyEntityContainer/MySingleton/My.EntityType/MyContainmentNavProperty
```

```
MySchema.MyEntityContainer/MySingleton/MyComplexProperty/MyContainmentNavProp
```
:::

-------

# <a id="CSDLExamples" href="#CSDLExamples">16 CSDL Examples</a>


Following are two basic examples of valid EDM models as represented in
CSDL. These examples demonstrate many of the topics covered above.

## <a id="ProductsandCategoriesExample" href="#ProductsandCategoriesExample">16.1 Products and Categories Example</a>


::: {.varxml .example}
Example 94:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           xmlns="http://docs.oasis-open.org/odata/ns/edm" Version="4.0">
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml">
    <edmx:Include Namespace="Org.OData.Core.V1" Alias="Core">
      <Annotation Term="Core.DefaultNamespace" />
    </edmx:Include>
  </edmx:Reference>
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Measures.V1.xml">
    <edmx:Include Alias="Measures" Namespace="Org.OData.Measures.V1" />
  </edmx:Reference>
  <edmx:DataServices>
    <Schema Namespace="ODataDemo">
      <EntityType Name="Product">
        <Key>
          <PropertyRef Name="ID" />
        </Key>
        <Property Name="ID" Type="Edm.Int32" Nullable="false" />
        <Property Name="Description" Type="Edm.String" >
          <Annotation Term="Core.IsLanguageDependent" />
        </Property>
        <Property Name="ReleaseDate" Type="Edm.Date" />
        <Property Name="DiscontinuedDate" Type="Edm.Date" />
        <Property Name="Rating" Type="Edm.Int32" />
        <Property Name="Price" Type="Edm.Decimal" Scale="variable">
          <Annotation Term="Measures.ISOCurrency" Path="Currency" />
        </Property>
        <Property Name="Currency" Type="Edm.String" MaxLength="3" />
        <NavigationProperty Name="Category" Type="ODataDemo.Category"
                            Nullable="false" Partner="Products" />
        <NavigationProperty Name="Supplier" Type="ODataDemo.Supplier"
                            Partner="Products" />
      </EntityType>
      <EntityType Name="Category">
        <Key>
         <PropertyRef Name="ID" />
        </Key>
        <Property Name="ID" Type="Edm.Int32" Nullable="false" />
        <Property Name="Name" Type="Edm.String" Nullable="false">
          <Annotation Term="Core.IsLanguageDependent" />
        </Property>
        <NavigationProperty Name="Products" Partner="Category"
                            Type="Collection(ODataDemo.Product)">
          <OnDelete Action="Cascade" />
        </NavigationProperty>
      </EntityType>
      <EntityType Name="Supplier">
        <Key>
          <PropertyRef Name="ID" />
        </Key>
        <Property Name="ID" Type="Edm.String" Nullable="false" />
        <Property Name="Name" Type="Edm.String" />
        <Property Name="Address" Type="ODataDemo.Address" Nullable="false" />
        <Property Name="Concurrency" Type="Edm.Int32" Nullable="false" />
        <NavigationProperty Name="Products" Partner="Supplier"
                            Type="Collection(ODataDemo.Product)" />
      </EntityType>
      <EntityType Name="Country">
        <Key>
          <PropertyRef Name="Code" />
        </Key>
        <Property Name="Code" Type="Edm.String" MaxLength="2"
                              Nullable="false" />
        <Property Name="Name" Type="Edm.String" />
      </EntityType>
      <ComplexType Name="Address">
        <Property Name="Street" Type="Edm.String" />
        <Property Name="City" Type="Edm.String" />
        <Property Name="State" Type="Edm.String" />
        <Property Name="ZipCode" Type="Edm.String" />
        <Property Name="CountryName" Type="Edm.String" />
        <NavigationProperty Name="Country" Type="ODataDemo.Country">
          <ReferentialConstraint Property="CountryName"  
                                 ReferencedProperty="Name" />
        </NavigationProperty>
      </ComplexType>
      <Function Name="ProductsByRating">
        <Parameter Name="Rating" Type="Edm.Int32" />
        <ReturnType Type="Collection(ODataDemo.Product)" />
      </Function>
      <EntityContainer Name="DemoService">
        <EntitySet Name="Products" EntityType="ODataDemo.Product">
          <NavigationPropertyBinding Path="Category" Target="Categories" />
        </EntitySet>
        <EntitySet Name="Categories" EntityType="ODataDemo.Category">
          <NavigationPropertyBinding Path="Products" Target="Products" />
          <Annotation Term="Core.Description" String="Product Categories" />
        </EntitySet>
        <EntitySet Name="Suppliers" EntityType="ODataDemo.Supplier">
          <NavigationPropertyBinding Path="Products" Target="Products" />
          <NavigationPropertyBinding Path="Address/Country"
                                     Target="Countries" />
          <Annotation Term="Core.OptimisticConcurrency">
            <Collection>
              <PropertyPath>Concurrency</PropertyPath>
            </Collection>
          </Annotation>
        </EntitySet>
        <Singleton Name="MainSupplier" Type="ODataDemo.Supplier">
          <NavigationPropertyBinding Path="Products" Target="Products" />
          <Annotation Term="Core.Description" String="Primary Supplier" />
        </Singleton>
        <EntitySet Name="Countries" EntityType="ODataDemo.Country" />
        <FunctionImport Name="ProductsByRating" EntitySet="Products"
                        Function="ODataDemo.ProductsByRating" />
      </EntityContainer>
    </Schema>
  </edmx:DataServices>
</edmx:Edmx>
```
:::


## <a id="AnnotationsforProductsandCategoriesExample" href="#AnnotationsforProductsandCategoriesExample">16.2 Annotations for Products and Categories Example</a>


::: {.varxml .example}
Example 95:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.01">
  <edmx:Reference Uri="http://host/service/$metadata">
    <edmx:Include Namespace="ODataDemo" Alias="target" />
  </edmx:Reference>
  <edmx:Reference Uri="http://somewhere/Vocabulary/V1">
    <edmx:Include Alias="Vocabulary1" Namespace="Some.Vocabulary.V1" />
  </edmx:Reference>
  <edmx:DataServices>
    <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm"
            Namespace="External.Annotations">
      <Annotations Target="ODataDemo.Supplier">
        <Annotation Term="Vocabulary1.EMail">
          <Null />
        </Annotation>
        <Annotation Term="Vocabulary1.AccountID" Path="ID" />
        <Annotation Term="Vocabulary1.Title" String="Supplier Info" />
        <Annotation Term="Vocabulary1.DisplayName">
        <Apply Function="odata.concat">
          <Path>Name</Path>
          <Apply Function="odata.concat">
            <String> in </String>
            <Path>Address/CountryName</Path>
          </Apply>
        </Apply>
        </Annotation>
      </Annotations>
      <Annotations Target="ODataDemo.Product">
        <Annotation Term="Vocabulary1.Tags">
          <Collection>
            <String>MasterData</String>
          </Collection>
        </Annotation>
      </Annotations>
  </Schema>
  </edmx:DataServices>
</edmx:Edmx>
```
:::

-------

# <a id="Conformance" href="#Conformance">17 Conformance</a>

Conforming services MUST follow all rules of this specification document
for the types, sets, functions, actions, containers and annotations they
expose.

In addition, conforming services MUST NOT return CSDL constructs defined in OData 4.01 or greater for requests made with `OData-MaxVersion: 4.0`.

Specifically, they
1. MUST NOT include properties in derived types that overwrite a
property defined in the base type
2. MUST NOT include `Edm.Untyped`
3. MUST NOT use [path syntax](#PathSyntax) added with 4.01
4. MUST NOT use `Edm.ModelElementPath` and `Edm.AnyPropertyPath`
5. MUST NOT specify [referential constraints](#ReferentialConstraint)
to complex types and navigation properties
6. MUST NOT include a non-abstract entity type with no inherited or
defined [entity key](#Key)
7. MUST NOT include the
[`Core.DefaultNamespace`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#DefaultNamespace)
annotation on [included schemas](#IncludedSchema)
8. MUST NOT return the Unicode facet for terms, parameters, and return
types
9. MUST NOT include collections of `Edm.ComplexType` or `Edm.Untyped`
10. MUST NOT specify a key as a property of a related entity
11. SHOULD NOT include new/unknown values for the
[`AppliesTo`](#Applicability) attribute
12. SHOULD NOT include constant [Geo](#GeoValues) or [Stream values](#StreamValues) in annotations
13. MAY include new CSDL annotations

In addition, OData 4.01 or greater services:

14. SHOULD NOT have identifiers within a uniqueness scope (e.g. a
schema, a structural type, or an entity container) that differ only by
case

In addition, OData 4.02 or greater services:

15. SHOULD NOT include constant [Geo](#GeoValues) or [Stream values](#StreamValues) in annotations
16. SHOULD use [simple identifiers](#SimpleIdentifier) matching the pattern `^[_A-Za-z][_A-Za-z0-9]*$`

Conforming clients MUST be prepared to consume a model that uses any or
all constructs defined in this specification, including custom
annotations, and MUST ignore constructs not defined in this version of
the specification.


-------

# <a id="References" href="#References">Appendix A. References</a>

<!-- Required section -->

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## <a id="NormativeReferences" href="#NormativeReferences">A.1 Normative References</a>

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

###### [ECMAScript]{id=_ECMAScript}
_ECMAScript 2016 Language Specification, 7th Edition_. June 2016. Standard ECMA-262. http://www.ecma-international.org/publications/standards/Ecma-262.htm.

###### [EPSG]{id=_EPSG}
_European Petroleum Survey Group (EPSG)_. https://spatialreference.org/ref/epsg/.

###### [OData-ABNF]{id=ODataABNF}
_OData ABNF Construction Rules Version 4.02_.  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

###### [OData-CSDL]{id=ODataCSDL}
_OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02._
See link in "[Related work](#RelatedWork)" section on cover page.

_OData Common Schema Definition Language (CSDL) XML Representation Version 4.02._
This document.


###### [OData-EDM]{id=ODataEDM}
_OData EDM XML Schema_.  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

###### [OData-EDMX]{id=ODataEDMX}
_OData EDM XML Schema_.  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

###### [OData-JSON]{id=ODataJSON}
_OData JSON Format Version 4.02_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-Protocol]{id=ODataProtocol}
_OData Version 4.02 Part 1: Protocol_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-URL]{id=ODataURL}
_OData Version 4.02 Part 2: URL Conventions_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-VocCore]{id=ODataVocCore}
_OData Vocabularies Version 4.0: Core Vocabulary_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-VocMeasures]{id=ODataVocMeasures}
_OData Vocabularies Version 4.0: Measures Vocabulary_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [OData-VocValidation]{id=ODataVocValidation}
_OData Vocabularies Version 4.0: Validation Vocabulary_.  
See link in "[Related work](#RelatedWork)" section on cover page.

###### [RFC2119]{id=rfc2119}
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_.  
https://www.rfc-editor.org/info/rfc2119.

###### [RFC6570]{id=rfc6570}
_Gregorio, J., Fielding, R., Hadley, M., Nottingham, M., and D. Orchard, "URI Template", RFC 6570, DOI 10.17487/RFC6570, March 2012_.  
https://www.rfc-editor.org/info/rfc6570.


###### [RFC8174]{id=rfc8174}
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_.  
https://www.rfc-editor.org/info/rfc8174.


###### [XML-1.0]{id=XML-10}
_Extensible Markup Language (XML) 1.0 (Fifth Edition)_. T. Bray, J. Paoli, C. M. Sperberg-McQueen, E. Maler, F. Yergeau, Editors, W3C Recommendation, 26 November 2008.  
http://www.w3.org/TR/2008/REC-xml-20081126/. Latest version available at http://www.w3.org/TR/xml/.

###### [XML-Base]{id=XML-Base}
_XML Base (Second Edition)_. J. Marsh, R. Tobin, Editors, W3C Recommendation, 28 January 2009.  
http://www.w3.org/TR/2009/REC-xmlbase-20090128/. Latest version available at http://www.w3.org/TR/xmlbase/.

###### [XML-Schema-1]{id=XML-Schema1}
_W3C XML Schema Definition Language (XSD) 1.1 Part 1: Structures_. D. Beech, M. Maloney, C. M. Sperberg-McQueen, H. S. Thompson, S. Gao, N. Mendelsohn, Editors, W3C Recommendation, 5 April 2012.  
http://www.w3.org/TR/2012/REC-xmlschema11-1-20120405/. Latest version available at http://www.w3.org/TR/xmlschema11-1/.

###### [XML-Schema-2]{id=XML-Schema2}
_W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes_. D. Peterson, S. Gao, C. M. Sperberg-McQueen, H. S. Thompson, P. V. Biron, A. Malhotra, Editors, W3C Recommendation, 5 April 2012.  
http://www.w3.org/TR/2012/REC-xmlschema11-2-20120405/. Latest version available at http://www.w3.org/TR/xmlschema11-2/.

###### [Well-Known Text]{id=_WKT}
_OpenGIS Implementation Specification for Geographic information – Simple feature access – Part 1: Common architecture_, May 2011. Open Geospatial Consortium.
https://www.ogc.org/standard/sfa/.

-------

# <a id="TableofXMLElementsandAttributes" href="#TableofXMLElementsandAttributes">Appendix B. Table of XML Elements and Attributes</a>

::: toc
- [Type Facet Attributes](#TypeFacetAttributes.1)
  - [Attribute `MaxLength`](#AttributeMaxLength.1.1)
  - [Attribute `Precision`](#AttributePrecision.1.2)
  - [Attribute `Scale`](#AttributeScale.1.3)
  - [Attribute `Unicode`](#AttributeUnicode.1.4)
  - [Attribute `SRID`](#AttributeSRID.1.5)
- [Element `edmx:Edmx`](#ElementedmxEdmx.2)
  - [Attribute `Version`](#AttributeVersion.2.1)
- [Element `edmx:DataServices`](#ElementedmxDataServices.3)
- [Element `edmx:Reference`](#ElementedmxReference.4)
  - [Attribute `Uri`](#AttributeUri.4.1)
- [Element `edmx:Include`](#ElementedmxInclude.5)
  - [Attribute `Namespace`](#AttributeNamespace.5.1)
  - [Attribute `Alias`](#AttributeAlias.5.2)
- [Element `edmx:IncludeAnnotations`](#ElementedmxIncludeAnnotations.6)
  - [Attribute `TermNamespace`](#AttributeTermNamespace.6.1)
  - [Attribute `Qualifier`](#AttributeQualifier.6.2)
  - [Attribute `TargetNamespace`](#AttributeTargetNamespace.6.3)
- [Element `edm:Schema`](#ElementedmSchema.7)
  - [Attribute `Namespace`](#AttributeNamespace.7.1)
  - [Attribute `Alias`](#AttributeAlias.7.2)
- [Element `edm:Annotations`](#ElementedmAnnotations.8)
  - [Attribute `Target`](#AttributeTarget.8.1)
  - [Attribute `Qualifier`](#AttributeQualifier.8.2)
- [Element `edm:EntityType`](#ElementedmEntityType.9)
  - [Attribute `Name`](#AttributeName.9.1)
  - [Attribute `BaseType`](#AttributeBaseType.9.2)
  - [Attribute `Abstract`](#AttributeAbstract.9.3)
  - [Attribute `OpenType`](#AttributeOpenType.9.4)
  - [Attribute `HasStream`](#AttributeHasStream.9.5)
- [Element `edm:Key`](#ElementedmKey.10)
- [Element `edm:PropertyRef`](#ElementedmPropertyRef.11)
  - [Attribute `Name`](#AttributeName.11.1)
  - [Attribute `Alias`](#AttributeAlias.11.2)
- [Element `edm:Property`](#ElementedmProperty.12)
  - [Attribute `Name`](#AttributeName.12.1)
  - [Attribute `Type`](#AttributeType.12.2)
  - [Attribute `Nullable`](#AttributeNullable.12.3)
  - [Attribute `DefaultValue`](#AttributeDefaultValue.12.4)
- [Element `edm:NavigationProperty`](#ElementedmNavigationProperty.13)
  - [Attribute `Name`](#AttributeName.13.1)
  - [Attribute `Type`](#AttributeType.13.2)
  - [Attribute `Nullable`](#AttributeNullable.13.3)
  - [Attribute `Partner`](#AttributePartner.13.4)
  - [Attribute `ContainsTarget`](#AttributeContainsTarget.13.5)
- [Element `edm:ReferentialConstraint`](#ElementedmReferentialConstraint.14)
  - [Attribute `Property`](#AttributeProperty.14.1)
  - [Attribute `ReferencedProperty`](#AttributeReferencedProperty.14.2)
- [Element `edm:OnDelete`](#ElementedmOnDelete.15)
  - [Attribute `Action`](#AttributeAction.15.1)
- [Element `edm:ComplexType`](#ElementedmComplexType.16)
  - [Attribute `Name`](#AttributeName.16.1)
  - [Attribute `BaseType`](#AttributeBaseType.16.2)
  - [Attribute `Abstract`](#AttributeAbstract.16.3)
  - [Attribute `OpenType`](#AttributeOpenType.16.4)
- [Element `edm:EnumType`](#ElementedmEnumType.17)
  - [Attribute `Name`](#AttributeName.17.1)
  - [Attribute `UnderlyingType`](#AttributeUnderlyingType.17.2)
  - [Attribute `IsFlags`](#AttributeIsFlags.17.3)
- [Element `edm:Member`](#ElementedmMember.18)
  - [Attribute `Name`](#AttributeName.18.1)
  - [Attribute `Value`](#AttributeValue.18.2)
- [Element `edm:TypeDefinition`](#ElementedmTypeDefinition.19)
  - [Attribute `Name`](#AttributeName.19.1)
  - [Attribute `UnderlyingType`](#AttributeUnderlyingType.19.2)
- [Element `edm:Action`](#ElementedmAction.20)
  - [Attribute `Name`](#AttributeName.20.1)
- [Element `edm:Function`](#ElementedmFunction.21)
  - [Attribute `Name`](#AttributeName.21.1)
  - [Attribute `IsBound`](#AttributeIsBound.21.2)
  - [Attribute `EntitySetPath`](#AttributeEntitySetPath.21.3)
  - [Attribute `IsComposable`](#AttributeIsComposable.21.4)
- [Element `edm:ReturnType`](#ElementedmReturnType.22)
  - [Attribute `Type`](#AttributeType.22.1)
  - [Attribute `Nullable`](#AttributeNullable.22.2)
  - [Annotation `Core.IsDelta`](#AnnotationCoreIsDelta.22.3)
- [Element `edm:Parameter`](#ElementedmParameter.23)
  - [Attribute `Name`](#AttributeName.23.1)
  - [Attribute `Type`](#AttributeType.23.2)
  - [Attribute `Nullable`](#AttributeNullable.23.3)
  - [Annotation `Core.OptionalParameter`](#AnnotationCoreOptionalParameter.23.4)
  - [Annotation `Core.IsDelta`](#AnnotationCoreIsDelta.23.5)
- [Element `edm:EntityContainer`](#ElementedmEntityContainer.24)
  - [Attribute `Name`](#AttributeName.24.1)
  - [Attribute `Extends`](#AttributeExtends.24.2)
- [Element `edm:EntitySet`](#ElementedmEntitySet.25)
  - [Attribute `Name`](#AttributeName.25.1)
  - [Attribute `EntityType`](#AttributeEntityType.25.2)
  - [Attribute `IncludeInServiceDocument`](#AttributeIncludeInServiceDocument.25.3)
- [Element `edm:Singleton`](#ElementedmSingleton.26)
  - [Attribute `Name`](#AttributeName.26.1)
  - [Attribute `Type`](#AttributeType.26.2)
  - [Attribute `Nullable`](#AttributeNullable.26.3)
- [Element `edm:NavigationPropertyBinding`](#ElementedmNavigationPropertyBinding.27)
  - [Attribute `Path`](#AttributePath.27.1)
  - [Attribute `Target`](#AttributeTarget.27.2)
- [Element `edm:ActionImport`](#ElementedmActionImport.28)
  - [Attribute `Name`](#AttributeName.28.1)
  - [Attribute `Action`](#AttributeAction.28.2)
  - [Attribute `EntitySet`](#AttributeEntitySet.28.3)
- [Element `edm:FunctionImport`](#ElementedmFunctionImport.29)
  - [Attribute `Name`](#AttributeName.29.1)
  - [Attribute `Function`](#AttributeFunction.29.2)
  - [Attribute `EntitySet`](#AttributeEntitySet.29.3)
  - [Attribute `IncludeInServiceDocument`](#AttributeIncludeInServiceDocument.29.4)
- [Element `edm:Term`](#ElementedmTerm.30)
  - [Attribute `Name`](#AttributeName.30.1)
  - [Attribute `Type`](#AttributeType.30.2)
  - [Attribute `Nullable`](#AttributeNullable.30.3)
  - [Attribute `DefaultValue`](#AttributeDefaultValue.30.4)
  - [Attribute `BaseTerm`](#AttributeBaseTerm.30.5)
  - [Attribute `AppliesTo`](#AttributeAppliesTo.30.6)
- [Element `edm:Annotation`](#ElementedmAnnotation.31)
  - [Attribute `Term`](#AttributeTerm.31.1)
  - [Attribute `Qualifier`](#AttributeQualifier.31.2)
- [Expression `edm:Binary`](#ExpressionedmBinary.32)
- [Expression `edm:Bool`](#ExpressionedmBool.33)
- [Expression `edm:Date`](#ExpressionedmDate.34)
- [Expression `edm:DateTimeOffset`](#ExpressionedmDateTimeOffset.35)
- [Expression `edm:Decimal`](#ExpressionedmDecimal.36)
- [Expression `edm:Duration`](#ExpressionedmDuration.37)
- [Expression `edm:EnumMember`](#ExpressionedmEnumMember.38)
- [Expression `edm:Float`](#ExpressionedmFloat.39)
- [Expression `edm:Guid`](#ExpressionedmGuid.40)
- [Expression `edm:Int`](#ExpressionedmInt.41)
- [Expression `edm:String`](#ExpressionedmString.42)
- [Expression `edm:TimeOfDay`](#ExpressionedmTimeOfDay.43)
- [Expression `edm:AnnotationPath`](#ExpressionedmAnnotationPath.44)
- [Expression `edm:ModelElementPath`](#ExpressionedmModelElementPath.45)
- [Expression `edm:NavigationPropertyPath`](#ExpressionedmNavigationPropertyPath.46)
- [Expression `edm:PropertyPath`](#ExpressionedmPropertyPath.47)
- [Expression `edm:Path`](#ExpressionedmPath.48)
- [Expressions `edm:And`](#ExpressionsedmAnd.49)
  - [`edm:Or`](#edmOr.49.1)
- [Expression `edm:Not`](#ExpressionedmNot.50)
- [Expressions `edm:Eq`](#ExpressionsedmEq.51)
  - [`edm:Ne`](#edmNe.51.1)
  - [`edm:Gt`](#edmGt.51.2)
  - [`edm:Ge`](#edmGe.51.3)
  - [`edm:Lt`](#edmLt.51.4)
  - [`edm:Le`](#edmLe.51.5)
  - [`edm:Has`](#edmHas.51.6)
  - [`edm:In`](#edmIn.51.7)
- [Expression `edm:Neg`](#ExpressionedmNeg.52)
- [Expressions `edm:Add`](#ExpressionsedmAdd.53)
  - [`edm:Sub`](#edmSub.53.1)
  - [`edm:Mul`](#edmMul.53.2)
  - [`edm:Div`](#edmDiv.53.3)
  - [`edm:DivBy`](#edmDivBy.53.4)
  - [`edm:Mod`](#edmMod.53.5)
- [Expression `edm:Apply`](#ExpressionedmApply.54)
  - [Attribute `Function`](#AttributeFunction.54.1)
- [Expression `edm:Cast`](#ExpressionedmCast.55)
  - [Attribute `Type`](#AttributeType.55.1)
- [Expression `edm:Collection`](#ExpressionedmCollection.56)
- [Expression `edm:If`](#ExpressionedmIf.57)
- [Expression `edm:UrlRef`](#ExpressionedmUrlRef.58)
- [Expression `edm:LabeledElement`](#ExpressionedmLabeledElement.59)
  - [Attribute `Name`](#AttributeName.59.1)
- [Expression `edm:LabeledElementReference`](#ExpressionedmLabeledElementReference.60)
- [Expression `edm:Null`](#ExpressionedmNull.61)
- [Expression `edm:Record`](#ExpressionedmRecord.62)
  - [Attribute `Type`](#AttributeType.62.1)
- [Element `edm:PropertyValue`](#ElementedmPropertyValue.63)
  - [Attribute `Property`](#AttributeProperty.63.1)
- [Expression `edm:UrlRef`](#ExpressionedmUrlRef.64)
:::

-------

# <a id="Acknowledgments" href="#Acknowledgments">Appendix C. Acknowledgments</a>

## <a id="SpecialThanks" href="#SpecialThanks">C.1 Special Thanks</a>


The contributions of the OASIS OData Technical Committee members,
enumerated in [OData-Protocol, section C.2](https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html#Participants), are gratefully
acknowledged.

## <a id="Participants" href="#Participants">C.2 Participants</a>

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
| Martin | Zurmuehl | SAP SE |

-------

# <a id="RevisionHistory" href="#RevisionHistory">Appendix D. Revision History</a>

<!-- Optional section -->

| Revision | Date | Editor | Changes Made |
| :--- | :--- | :--- | :--- |
|Committee Specification Draft 01|2024-02-28|Michael Pizzo<br>Ralf Handl<br>Heiko Theißen| Import material from OData Common Schema Definition Language (CSDL) XML Representation Version 4.01 <br>Changes listed in [section 1.1](#ChangesfromEarlierVersions)|

-------

# <a id="Notices" href="#Notices">Appendix E. Notices</a>

<!-- Required section. Do not modify. -->

Copyright © OASIS Open 2024. All Rights Reserved.

All capitalized terms in the following text have the meanings assigned to them in the OASIS Intellectual Property Rights Policy (the "OASIS IPR Policy"). The full [Policy](https://www.oasis-open.org/policies-guidelines/ipr/) may be found at the OASIS website.

This document and translations of it may be copied and furnished to others, and derivative works that comment on or otherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part, without restriction of any kind, provided that the above copyright notice and this section are included on all such copies and derivative works. However, this document itself may not be modified in any way, including by removing the copyright notice or references to OASIS, except as needed for the purpose of developing any document or deliverable produced by an OASIS Technical Committee (in which case the rules applicable to copyrights, as set forth in the OASIS IPR Policy, must be followed) or as required to translate it into languages other than English.

The limited permissions granted above are perpetual and will not be revoked by OASIS or its successors or assigns.

This document and the information contained herein is provided on an "AS IS" basis and OASIS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE INFORMATION HEREIN WILL NOT INFRINGE ANY OWNERSHIP RIGHTS OR ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

As stated in the OASIS IPR Policy, the following three paragraphs in brackets apply to OASIS Standards Final Deliverable documents (Committee Specification, Candidate OASIS Standard, OASIS Standard, or Approved Errata).

\[OASIS requests that any OASIS Party or any other party that believes it has patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable, to notify OASIS TC Administrator and provide an indication of its willingness to grant patent licenses to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this deliverable.\]

\[OASIS invites any party to contact the OASIS TC Administrator if it is aware of a claim of ownership of any patent claims that would necessarily be infringed by implementations of this OASIS Standards Final Deliverable by a patent holder that is not willing to provide a license to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this OASIS Standards Final Deliverable. OASIS may include such claims on its website, but disclaims any obligation to do so.\]

\[OASIS takes no position regarding the validity or scope of any intellectual property or other rights that might be claimed to pertain to the implementation or use of the technology described in this OASIS Standards Final Deliverable or the extent to which any license under such rights might or might not be available; neither does it represent that it has made any effort to identify any such rights. Information on OASIS' procedures with respect to rights in any document or deliverable produced by an OASIS Technical Committee can be found on the OASIS website. Copies of claims of rights made available for publication and any assurances of licenses to be made available, or the result of an attempt made to obtain a general license or permission for the use of such proprietary rights by implementers or users of this OASIS Standards Final Deliverable, can be obtained from the OASIS TC Administrator. OASIS makes no representation that any information or list of intellectual property rights will at any time be complete, or that any claims in such list are, in fact, Essential Claims.\]

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs. OASIS welcomes reference to, and implementation and use of, specifications, while reserving the right to enforce its marks against misleading uses. Please see https://www.oasis-open.org/policies-guidelines/trademark/ for above guidance.

