# ##sec Introduction

OData services are described in terms of an [Entity
Model](#EntityModel). The Common Schema Definition Language (CSDL)
defines a representation of the entity data model exposed by an OData
service using the Extensible Markup Language (XML) 1.1 (Second Edition)
[**\[XML‑1.1\]**](#BMXML) with further building blocks from the W3C XML
Schema Definition Language (XSD) 1.1 as described in
[**\[XML‑Schema‑1\]**](#BMXMLSchema1) and
[**\[XML‑Schema‑2\]**](#BMXMLSchema2).

## ##subsec IPR Policy

This specification is provided under the [RF on RAND
Terms](https://www.oasis-open.org/policies-guidelines/ipr#RF-on-RAND-Mode)
Mode of the [OASIS IPR
Policy](https://www.oasis-open.org/policies-guidelines/ipr), the mode
chosen when the Technical Committee was established. For information on
whether any patents have been disclosed that may be essential to
implementing this specification, and any offers of patent licensing
terms, please refer to the Intellectual Property Rights section of the
TC's web page (<https://www.oasis-open.org/committees/odata/ipr.php>).

## ##subsec Terminology

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
"SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
document are to be interpreted as described in [RFC2119](#BMRFC2119).

## ##subsec Normative References

[\[ECMAScript\]]{.Refterm}[[        
]{style="font-weight:normal"}]{.Refterm}*ECMAScript 2016 Language
Specification, 7^th^ Edition,* June 2016. Standard ECMA-262.
<http://www.ecma-international.org/publications/standards/Ecma-262.htm>.

[\[EPSG\]                   ]{.Refterm}European Petroleum Survey Group
(EPSG). <http://www.epsg.org/>.

[\[OData-ABNF\]]{.Refterm}         *OData ABNF Construction Rules
Version 4.01*.\
See link in "Additional artifacts" section on cover
page[.]{style="color:
#222222"}[ ]{.Refterm}

**[\[OData-EDM]{lang="DE" style="color:windowtext"}**[**[\]]{lang="DE"
style="color:windowtext"}**]{.Hyperlink1}[           *OData EDM XML
Schema*]{lang="DE" style="color:windowtext"}[.\
]{lang="DE"}See link in "Additional artifacts" section on cover page.

**[\[OData-EDMX]{lang="NL" style="color:windowtext"}**[**[\]]{lang="NL"
style="color:windowtext"}**]{.Hyperlink1}[        *OData EDMX XML
Schema*]{lang="NL" style="color:windowtext"}[.\
]{lang="NL"}See link in "Additional artifacts" section on cover page.

OData-CSDLJSON            *OData Common Schema Definition Language
(CSDL) JSON Representation Version 4.01*. See link in "Related work"
section on cover page.

**\[OData-JSON**[**\]**]{.Hyperlink1}         *OData JSON Format Version
4.01.*\
See link in "Related work" section on cover page.

[\[OData-Protocol\]]{.Refterm}     *OData Version 4.01 Part 1:
Protocol*.\
See link in "Additional artifacts" section on cover
page[.]{style="color:
#222222"}

OData-URL           *OData Version 4.01 Part 2: URL Conventions*.\
See link in "Additional artifacts" section on cover page.

OData-VocCore     *OData Vocabularies Version 4.0: Core Vocabulary.*\
See link in "Related work" section on cover page.[[
]{style="font-size:8.0pt;color:windowtext;
background:yellow"}]{.MsoCommentReference}

OData-VocMeasures         *OData Vocabularies Version 4.0: Measures
Vocabulary.*\
See link in "Related work" section on cover page.[[
]{style="font-size:8.0pt;color:windowtext;
background:yellow"}]{.MsoCommentReference}

OData-VocValidation        *OData Vocabularies Version 4.0: Validation
Vocabulary.*\
See link in "Related work" section on cover page.[[
]{style="font-size:8.0pt;color:windowtext;
background:yellow"}]{.MsoCommentReference}

[\[RFC2119\]]{.Refterm}               Bradner, S., "Key words for use in
RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, March 1997.
<https://tools.ietf.org/html/rfc2119>.

RFC6570               Gregorio, J., Fielding, R., Hadley, M.,
Nottingham, M., and D. Orchard, "URI Template", RFC 6570, March 2012.
<http://tools.ietf.org/html/rfc6570>.

[\[XML-1.1\]]{.Refterm}                Extensible Markup Language (XML)
1.1 (Second Edition), F. Yergeau, E. Maler, J. Cowan, T. Bray, C. M.
Sperberg-McQueen, J. Paoli, Editors, W3C Recommendation, 16 August
2006,\
<http://www.w3.org/TR/2006/REC-xml11-20060816>.\
Latest version available at <http://www.w3.org/TR/xml11/>.

**\[XML-Base\]**             XML Base (Second Edition), J. Marsh, R.
Tobin, Editors, W3C Recommendation, 28 January 2009,\
<http://www.w3.org/TR/2009/REC-xmlbase-20090128/>.\
Latest version available at <http://www.w3.org/TR/xmlbase/>. 

[\[XML-Schema-1\]]{.Refterm}     W3C XML Schema Definition Language
(XSD) 1.1 Part 1: Structures, D. Beech, M. Maloney, C. M.
Sperberg-McQueen, H. S. Thompson, S. Gao, N. Mendelsohn, Editors, W3C
Recommendation, 5 April 2012,
<http://www.w3.org/TR/2012/REC-xmlschema11-1-20120405/>.\
Latest version available at <http://www.w3.org/TR/xmlschema11-1/>.

[\[XML-Schema-2\]]{.Refterm}     W3C XML Schema Definition Language
(XSD) 1.1 Part 2: DatatypesW3C XML Schema Definition Language (XSD) 1.1
Part 2: Datatypes, D. Peterson, S. Gao, C. M. Sperberg-McQueen, H. S.
Thompson, P. V. Biron, A. Malhotra, Editors, W3C Recommendation, 5 April
2012, <http://www.w3.org/TR/2012/REC-xmlschema11-2-20120405/>.\
Latest version available at <http://www.w3.org/TR/xmlschema11-2/>.

## ##subsec Typographical Conventions

Keywords defined by this specification use this `monospaced` font.

`Normative source code uses this paragraph style.`

Some sections of this specification are illustrated with non-normative
examples.

::: example
Example ##ex: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only.

Representation-specific text is indented and marked with vertical lines.

::: csdlHeadline
Representation-Specific Headline
:::

::: csdl
Normative representation-specific text
:::

All other text is normative unless otherwise labeled.

# ##sec XML Representation

OData CSDL XML is a full representation of the OData Common Schema
Definition Language in the Extensible Markup Language (XML) 1.1 (Second
Edition) [**\[XML‑1.1\]**](#BMXML) with further building blocks from the
W3C XML Schema Definition Language (XSD) 1.1 as described in
[**\[XML‑Schema‑1\]**](#BMXMLSchema1) and
[**\[XML‑Schema‑2\]**](#BMXMLSchema2).

It is an alternative to the CSDL JSON representation defined in
**\[**[**OData-CSDLJSON**](#BMCSDLJSON)**\]** and neither adds nor
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

[· ]{lang="DE" style="font-family:Symbol"}[CSDL version 1.0:
]{lang="DE"}[[http://schemas.microsoft.com/ado/2006/04/edm]{lang="DE"}]{.Datatype}

[· ]{lang="DE" style="font-family:Symbol"}[CSDL version 1.1:
]{lang="DE"}[[http://schemas.microsoft.com/ado/2007/05/edm]{lang="DE"}]{.Datatype}

[· ]{lang="DE" style="font-family:Symbol"}[CSDL version 1.2:
]{lang="DE"}[[http://schemas.microsoft.com/ado/2008/01/edm]{lang="DE"}]{.Datatype}

[· ]{lang="DE" style="font-family:Symbol"}[CSDL version 2.0:
]{lang="DE"}[[http://schemas.microsoft.com/ado/2008/09/edm]{lang="DE"}]{.Datatype}

[· ]{lang="DE" style="font-family:Symbol"}[CSDL version 3.0:
]{lang="DE"}[[http://schemas.microsoft.com/ado/2009/11/edm]{lang="DE"}]{.Datatype}

They are non-normative for this specification.

In this specification the namespace prefix `edm` is used to represent
the Entity Data Model namespace, however the prefix name is not
prescriptive.

## ##subsec XML Schema Definitions

This specification contains normative XML schemas for the EDMX and EDM
namespaces; see [OData‑EDMX](#BMEDMX) and
[OData‑EDM](#BMEDM)[.]{style="color:#222222"}

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

# ##sec Entity Model

An OData service exposes a single entity model. This model may be
distributed over several [schemas](#Schema), and these schemas may be
distributed over several physical locations.

A service is defined by a single CSDL document which can be accessed by
sending a `GET` request to `<serviceRoot>/$metadata`. This document is
called the metadata document. It may reference other CSDL documents.

The metadata document contains a single [entity
container](#EntityContainer) that defines the resources exposed by this
service. This entity container MAY [extend](#ExtendinganEntityContainer)
an entity container defined in a [referenced document](#Reference).

The *model* of the service consists of all CSDL constructs used in its
entity containers.

The *scope* of a CSDL document is the document itself and all schemas
[included](#IncludedSchema) from directly [referenced
documents](#Reference). All entity types, complex types and other named
elements *in scope* (that is, defined in the document itself or a schema
of a directly referenced document) can be accessed from a referencing
document by their qualified names. This includes the [built-in
primitive](#PrimitiveTypes) and [abstract types](#BuiltInAbstractTypes).

Referencing another document may alter the model defined by the
referencing document. For instance, if a referenced document defines an
entity type derived from an entity type in the referencing document,
then an [entity set](#EntitySet) of the service defined by the
referencing document may return entities of the derived type. This is
identical to the behavior if the derived type had been defined directly
in the referencing document.

Note: referencing documents is not recursive. Only named elements
defined in directly referenced documents can be used within the schema.
However, those elements may in turn include elements defined in schemas
referenced by their defining schema.

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

Structured Types are composed of zero or more [structural
properties](#StructuralProperty) and [navigation
properties](#NavigationProperty).

[Open entity types](#OpenEntityType) and [open complex
types](#OpenComplexType) allow properties to be added dynamically to
instances of the open type.

## ##subsec Primitive Types

Structured types are composed of other structured types and primitive
types. OData defines the following primitive types:

  **Type**                         **Meaning**
  -------------------------------- ----------------------------------------------------------------
  `Edm.Binary`                     Binary data
  `Edm.Boolean`                    Binary-valued logic
  `Edm.Byte`                       Unsigned 8-bit integer
  `Edm.Date`                       Date without a time-zone offset
  `Edm.DateTimeOffset`             Date and time with a time-zone offset, no leap seconds
  `Edm.Decimal`                    Numeric values with decimal representation
  `Edm.Double`                     IEEE 754 binary64 floating-point number (15-17 decimal digits)
  `Edm.Duration`                   Signed duration in days, hours, minutes, and (sub)seconds
  `Edm.Guid`                       16-byte (128-bit) unique identifier
  `Edm.Int16 `                     Signed 16-bit integer
  `Edm.Int32`                      Signed 32-bit integer
  `Edm.Int64`                      Signed 64-bit integer
  `Edm.SByte`                      Signed 8-bit integer
  `Edm.Single`                     IEEE 754 binary32 floating-point number (6-9 decimal digits)
  `Edm.Stream`                     Binary data stream
  `Edm.String`                     Sequence of characters
  `Edm.TimeOfDay`                  Clock time 00:00-23:59:59.999999999999
  `Edm.Geography`                  Abstract base type for all Geography types
  `Edm.GeographyPoint`             A point in a round-earth coordinate system
  `Edm.GeographyLineString`        Line string in a round-earth coordinate system
  `Edm.GeographyPolygon`           Polygon in a round-earth coordinate system
  `Edm.GeographyMultiPoint`        Collection of points in a round-earth coordinate system
  `Edm.GeographyMultiLineString`   Collection of line strings in a round-earth coordinate system
  `Edm.GeographyMultiPolygon`      Collection of polygons in a round-earth coordinate system
  `Edm.GeographyCollection`        Collection of arbitrary Geography values
  `Edm.Geometry`                   Abstract base type for all Geometry types
  `Edm.GeometryPoint`              Point in a flat-earth coordinate system
  `Edm.GeometryLineString`         Line string in a flat-earth coordinate system
  `Edm.GeometryPolygon`            Polygon in a flat-earth coordinate system
  `Edm.GeometryMultiPoint`         Collection of points in a flat-earth coordinate system
  `Edm.GeometryMultiLineString`    Collection of line strings in a flat-earth coordinate system
  `Edm.GeometryMultiPolygon`       Collection of polygons in a flat-earth coordinate system
  `Edm.GeometryCollection`         Collection of arbitrary Geometry values

`Edm.Date` and `Edm.DateTimeOffset` follow
[**\[XML‑Schema‑2\]**](#BMXMLSchema2) and use the proleptic Gregorian
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

See rule `primitiveLiteral` in [OData‑ABNF](#BMABNF) for the
representation of primitive type values in URLs and
[OData‑JSON](#BMJSON) for the representation in requests and responses.

## ##subsec Built-In Abstract Types

The following built-in abstract types can be used within a model:
- `Edm.PrimitiveType `
- `Edm.ComplexType`
- `Edm.EntityType`
- `Edm.Untyped`

Conceptually, these are the abstract base types for primitive types
(including type definitions and enumeration types), complex types,
entity types, or any type or collection of types, respectively, and can
be used anywhere a corresponding concrete type can be used, except:
- `Edm.EntityType`

-   -   cannot be used as the type of a singleton in an entity container
        because it doesn't define a structure, which defeats the purpose
        of a singleton.
    -   cannot be used as the type of an entity set because all entities
        in an entity set must have the same key fields to uniquely
        identify them within the set.
    -   cannot be the base type of an entity type or complex type. 
- `Edm.ComplexType`

-   -   cannot be the base type of an entity type or complex type. 
- `Edm.PrimitiveType`

-   -   cannot be used as the type of a key property of an entity type
        or as the underlying type of an enumeration type.
    -   cannot be used as the underlying type of a type definition in a
        CSDL document with a version of `4.0`.
    -   can be used as the underlying type of a type definition in a
        CSDL document with a version of `4.01` or greater.
- `Edm.Untyped`

-   -   cannot be returned in a payload with an `OData-Version` header
        of `4.0`. Services should treat untyped properties as dynamic
        properties in `4.0` payloads.
    -   cannot be used as the type of a key property of an entity type.
    -   cannot be the base type of an entity type or complex type. 
    -   cannot be used as the underlying type of a type definition or
        enumeration type.
- `Collection(Edm.PrimitiveType)`

-   -   cannot be used as the type of a property or term.
    -   cannot be used as the type of a parameter or the return type of
        an action or function.
- `Collection(Edm.Untyped)`

-   -   cannot be returned in a payload with an `OData-Version` header
        of `4.0`. Services should treat untyped properties as dynamic
        properties in `4.0` payloads.

## ##subsec Built-In Types for defining Vocabulary Terms

[Vocabulary terms](#Term) can, in addition, use
- `Edm.AnnotationPath`
- `Edm.PropertyPath`
- `Edm.NavigationPropertyPath `
- `Edm.AnyPropertyPath `(`Edm.PropertyPath `or
`Edm.NavigationPropertyPath`)
- `Edm.ModelElementPath `(any
model element, including
`Edm.AnnotationPath`,` Edm.NavigationPropertyPath`, and
`Edm.PropertyPath`)

as the type of a primitive term, or the type of a property of a complex
type (recursively) that is exclusively used as the type of a term. See
section "[Path Expressions](#PathExpressions)" for details.

## ##subsec Annotations

Many parts of the model can be decorated with additional information
using [annotations](#Annotation). Annotations are identified by their
term name and an optional qualifier that allows applying the same term
multiple times to the same model element.

A model element MUST NOT specify more than one annotation for a given
combination of term and qualifier.

# ##sec CSDL XML Document

::: csdlHeadline
Element `edmx:Edmx`
:::

::: csdl
The `edmx:Edmx` element is the root element of a CSDL XML document. It
MUST contain the `Version` attribute and it MUST contain exactly one
`edmx:DataServices` element.

It MAY contain [`edmx:Reference`](#Reference) elements to reference
other CSDL documents.
:::

::: csdlHeadline
Attribute `Version`
:::

::: csdl
The `Version` attribute specifies the OData protocol version of the
service. For OData 4.0 responses the value of this attribute MUST be
`4.0.` For OData 4.01 responses the value of this attribute MUST be
`4.01.` Services MUST return an OData 4.0 response if the request was
made with an `OData-MaxVersion `header with a value of `4.0`.
:::

::: csdlHeadline
Element `edmx:DataServices`
:::

::: csdl
The `edmx:DataServices` element MUST contain one or more
[`edm:Schema`](#Schema) elements which define the schemas exposed by the
OData service.
:::

::: example
Example ##ex:
```
`<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"`
:::

[[           Version=\"4.01\"\>\
  \<edmx:DataServices\>\
    ...\
  \</edmx:DataServices\>\
\</edmx:Edmx\>]{style="color:black"}]{.Datatype}
```

## ##subsec Reference

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
annotation, defined in [OData-VocCore](#BMVocCore), MAY be used to
indicate a particular version of the referenced schema. If the
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation is present, the `$schemaversion` system query option, defined
[OData‑Protocol](#BMProtocol), SHOULD be used when retrieving the
referenced schema document.

::: csdlHeadline
Element `edmx:Reference`
:::

::: csdl
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
:::

::: csdlHeadline
Attribute `Uri`
:::

::: csdl
The value of `Uri` is an absolute or relative URI; relative URIs are
relative to the `xml:base` attribute, see
[**\[XML‑Base\]**](#BMXMLBase).
:::

::: example
Example ##ex: references to other CSDL documents
```
[[\<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?\>\
\<edmx:Edmx xmlns:edmx=\"http://docs.oasis-open.org/odata/ns/edmx\"\
           Version=\"4.0\"\>\
  \<edmx:Reference
Uri=\"http://vocabs.odata.org/capabilities/v1\"\>]{style="color:black"}]{.Datatype}
:::

`    …`

[[  \</edmx:Reference\>\
  \<edmx:Reference
Uri=\"http://vocabs.odata.org/core/v1\"\>]{style="color:black"}]{.Datatype}

`    …`

[[  \</edmx:Reference\>\
  \<edmx:Reference Uri=\"http://example.org/display/v1\"\>\
    ...]{style="color:black"}]{.Datatype}

[[  \</edmx:Reference\>\
  \<edmx:DataServices\>...\</edmx:DataServices\>\
\</edmx:Edmx\>]{style="color:black"}]{.Datatype}
```

## ##subsec Included Schema

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

::: csdl
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

::: csdlHeadline
Element `edmx:Include`
:::

::: csdl
The `edmx:Include` element specifies a schema to include from the
referenced CSDL document. It MUST provide the `Namespace` attribute and
it MAY provide the `Alias` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Namespace`
:::

::: csdl
The value of `Namespace` is the namespace of a schema defined in the
referenced CSDL document.
:::

::: csdlHeadline
Attribute `Alias`
:::

::: csdl
The value of `Alias` is a [simple identifier](#SimpleIdentifier) that
can be used in qualified names instead of the namespace.
:::

::: example
Example ##ex: references to entity models containing definitions of
vocabulary terms
```
[[\<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?\>\
\<edmx:Edmx xmlns:edmx=\"http://docs.oasis-open.org/odata/ns/edmx\"\
           Version=\"4.0\"\>\
  \<edmx:Reference
Uri=\"http://vocabs.odata.org/capabilities/v1\"\>]{style="color:black"}]{.Datatype}
:::

`    <edmx:Include Namespace="Org.OData.Capabilities.V1" />`

[[  \</edmx:Reference\>\
  \<edmx:Reference
Uri=\"http://vocabs.odata.org/core/v1\"\>]{style="color:black"}]{.Datatype}

`    <edmx:Include Namespace="Org.OData.Core.V1" Alias="Core">`

`      <Annotation Term="Core.DefaultNamespace" />`

`    </edmx:Include>`

[[  \</edmx:Reference\>\
  \<edmx:Reference Uri=\"http://example.org/display/v1\"\>\
    \<edmx:Include Alias=\"UI\" Namespace=\"org.example.display\"
/\>]{style="color:black"}]{.Datatype}

[[  \</edmx:Reference\>\
  \<edmx:DataServices\>...\</edmx:DataServices\>\
\</edmx:Edmx\>]{style="color:black"}]{.Datatype}
```

## ##subsec Included Annotations

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

::: csdlHeadline
Element `edmx:IncludeAnnotations`
:::

::: csdl
The `edmx:IncludeAnnotations` element specifies the annotations to
include from the referenced CSDL document. If no
`edmx:IncludeAnnotations` element is specified, a client MAY ignore all
annotations in the referenced document that are not explicitly used in
an [`edm:Path`](#ValuePath) expression of the referencing document.

The `edmx:IncludeAnnotations` element MUST provide the `TermNamespace`
attribute, and it MAY provide the `Qualifier` and `TargetNamespace`
attribute.
:::

::: csdlHeadline
Attribute `TermNamespace`
:::

::: csdl
The value of `TermNamespace` is a namespace.
:::

::: csdlHeadline
Attribute `Qualifier`
:::

::: csdl
The value of `Qualifier` is a [simple identifier](#SimpleIdentifier).
:::

::: csdlHeadline
Attribute `TargetNamespace`
:::

::: csdl
The value of `TargetNamespace` is a namespace.
:::

::: example
Example ##ex: reference documents that contain annotations
```
[[\<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?\>\
\<edmx:Edmx
xmlns:edmx=]{style="color:black"}]{.Datatype}\"http://docs.oasis-open.org/odata/ns/edmx\"
:::

[[           Version=\"4.0\"\>\
  \<edmx:Reference Uri=\"http://odata.org/ann/b\"\>\
    \<edmx:IncludeAnnotations TermNamespace=\"org.example.validation\"
/\>\
    \<edmx:IncludeAnnotations
TermNamespace=\"org.example.display\"]{style="color:black"}]{.Datatype}

[[                             Qualifier=\"Tablet\" /\>\
    \<edmx:IncludeAnnotations TermNamespace=\"org.example.hcm\"\
                             TargetNamespace=\"com.example.Sales\" /\>\
    \<edmx:IncludeAnnotations
TermNamespace=\"org.example.hcm\"]{style="color:black"}]{.Datatype}

[[                             Qualifier=\"Tablet\"\
                             TargetNamespace=\"com.example.Person\" /\>\
  \</edmx:Reference\>\
  \<edmx:DataServices\>...\</edmx:DataServices\>\
\</edmx:Edmx\>]{style="color:black"}]{.Datatype}
```

The following annotations from `http://odata.org/ann/b` are included:
- Annotations that use a
term from the `org.example.validation` namespace, and
- Annotations that use a
term from the `org.example.display` namespace and specify a
[[Tablet]{style="font-size:10.0pt"}]{.Keyword} qualifier and
- Annotations that apply
a term from the `org.example.hcm` namespace to an element of the
`com.example.Sales` namespace and
- Annotations that apply
a term from the `org.example.hcm` namespace to an element of the
`com.example.Person` namespace and specify a
[[Tablet]{style="font-size:10.0pt"}]{.Keyword} qualifier.

# ##sec Schema

One or more schemas describe the entity model exposed by an OData
service. The schema acts as a namespace for elements of the entity model
such as entity types, complex types, enumerations and terms.

A schema is identified by a [namespace](#Namespace). Schema namespaces
MUST be unique within the scope of a document and SHOULD be globally
unique. A schema cannot span more than one document.

The schema's namespace is combined with the name of elements in the
entity model to create unique [qualified names](#QualifiedName), so
identifiers that are used to name types MUST be unique within a
namespace to prevent ambiguity.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

The `namespace` MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.

::: csdlHeadline
[[Element
]{lang="DE"}]{#_Toc37318849}[[edm:Schema]{lang="DE"}]{.Datatype}
:::

::: csdl
[The ]{lang="DE"}[[edm:Schema]{lang="DE"}]{.Datatype}[ element defines a
schema. ]{lang="DE"}It MUST contain the `Namespace` attribute and it MAY
contain the `Alias` attribute.

It MAY contain elements [`edm:Action`](#Action),
[`edm:Annotations`](#AnnotationswithExternalTargeting),
[`edm:Annotation`](#Annotation), [`edm:ComplexType`](#ComplexType),
[`edm:EntityContainer`](#EntityContainer),
[`edm:EntityType`](#EntityType), [`edm:EnumType`](#EnumerationType),
[`edm:Function`](#Function), [`edm:Term`](#Term), or
[`edm:TypeDefinition`](#TypeDefinition).
:::

::: csdlHeadline
Attribute `Namespace`
:::

::: csdl
The value of `Namespace` is the namespace of the schema
:::

## ##subsec Alias

A schema MAY specify an alias which MUST be a [simple
identifier](#SimpleIdentifier).

::: csdl
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

::: csdlHeadline
Attribute `Alias`
:::

::: csdl
The value of `Alias` is a [simple identifier](#SimpleIdentifier).
:::

::: example
Example ##ex: schema `org.example` with an alias and a description for the
schema
```
`<Schema Namespace="org.example" Alias="self"> `
:::

`  <Annotation Term="Core.Description" String="Example schema" />`

`  … `

`</Schema>`
```

## ##subsec [[ ]{lang="DE"}Annotations with External Targeting](#AnnotationswithExternalTargeting)

::: csdlHeadline
Element `edm:Annotations`
:::

::: csdl
The `edm:Annotations` element is used to apply a group of annotations to
a single model element. It MUST contain the `Target` attribute and it
MAY contain the `Qualifier` attribute.

It MUST contain at least one [`edm:Annotation`](#Annotation) element.
:::

::: csdlHeadline
Attribute `Target`
:::

::: csdl
The value of `Target` is a path expression identifying the [annotation
target](#Target). It MUST resolve to a model element in scope.
:::

::: csdlHeadline
Attribute `Qualifier`
:::

::: csdl
The value of `Qualifier` is a [simple identifier](#SimpleIdentifier).
:::

::: example
Example ##ex: annotations should only be applied to tablet devices
```
[[\<Annotations Target=\"org.example.Person\" Qualifier=\"Tablet\"\>\
  \<Annotation Term=\"Core.Description\" String=\"Dummy\"
/\>]{style="color:black"}]{.Datatype}
:::

[[  ...\
\</Annotations\>]{style="color:black"}]{.Datatype}
```

# ##sec Entity Type

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

::: csdlHeadline
Element `edm:EntityType`
:::

::: csdl
The `edm:EntityType` element MUST contain the `Name` attribute, and it
MAY contain the [`BaseType`](#DerivedEntityType),
[`Abstract`](#AbstractEntityType), [`OpenType`](#OpenEntityType), and
[`HasStream`](#MediaEntityType) attributes.

It MAY contain [`edm:Property`](#StructuralProperty) and
[`edm:NavigationProperty`](#NavigationProperty) elements describing the
properties of the entity type.

It MAY contain one [`edm:Key`](#Key) element.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the entity type's name.
:::

::: example
Example ##ex: a simple entity type
```
[[\<EntityType Name=\"Employee\"\>\
  \<Key\>\
    \<PropertyRef Name=\"ID\" /\>\
  \</Key\>\
  \<Property Name=\"ID\" Type=\"Edm.String\" Nullable=\"false\" /\>\
  \<Property Name=\"FirstName\" Type=\"Edm.String\" Nullable=\"false\"
/\>\
  \<Property Name=\"LastName\" Type=\"Edm.String\" Nullable=\"false\"
/\>\
  \<NavigationProperty Name=\"Manager\" Type=\"self.Manager\" /\>\
\</EntityType\>]{style="color:black"}]{.Datatype}
```
:::

## ##subsec Derived Entity Type

An entity type can inherit from another entity type by specifying it as
its base type.

An entity type inherits the [key](#Key) as well as structural and
navigation properties of its base type.

An entity type MUST NOT introduce an inheritance cycle via the base type
attribute.

::: csdlHeadline
Attribute `BaseType`
:::

::: csdl
The value of `BaseType` is the qualified name of the base type.
:::

::: example
Example ##ex: a derived entity type based on the previous example
```
[[\<EntityType Name=\"Manager\" BaseType=\"self.Employee\"\>\
  \<Property Name=\"AnnualBudget\" Type=\"Edm.Decimal\" /\>\
  \<NavigationProperty Name=\"Employees\"
Type=\"Collection(self.Employee)\" /\>\
\</EntityType\>]{style="color:black"}]{.Datatype}
```
:::

Note: the derived type has the same name as one of the properties of its
base type.

## ##subsec Abstract Entity Type

An entity type MAY indicate that it is abstract and cannot have
instances.

For OData 4.0 responses a non-abstract entity type MUST define a
[key](#Key) or derive from a [base type](#DerivedEntityType) with a
defined key.

An abstract entity type MUST NOT inherit from a non-abstract entity
type.

::: csdlHeadline
Attribute `Abstract`
:::

::: csdl
The value of `Abstract` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Open Entity Type

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
[OData‑Protocol](#BMProtocol).

::: csdlHeadline
Attribute `OpenType`
:::

::: csdl
The value of `OpenType` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Media Entity Type

An entity type that does not specify a base type MAY specify that it is
a media entity type. *Media entities* are entities that represent a
media stream, such as a photo. Use a media entity if the out-of-band
stream is the main topic of interest and the media entity is just
additional structured information attached to the stream. Use a normal
entity with one or more properties of type `Edm.Stream` if the
structured data of the entity is the main topic of interest and the
stream data is just additional information attached to the structured
data. For more information on media entities see
[OData‑Protocol](#BMProtocol).

An entity type derived from a media entity type MUST indicate that it is
also a media entity type.

Media entity types MAY specify a list of acceptable media types using an
annotation with term
[`Core.AcceptableMediaTypes`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#AcceptableMediaTypes),
see [OData‑VocCore](#BMVocCore).

::: csdlHeadline
Attribute `HasStream`
:::

::: csdl
The value of `HasStream` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Key

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

An entity type (whether or not it is marked as abstract) MAY define a
key only if it doesn't inherit one.

An entity type's key refers to the set of properties that uniquely
identify an instance of the entity type within an entity set. The key
MUST consist of at least one property.

Key properties MUST NOT be nullable and MUST be typed with an
[enumeration type](#EnumerationType), one of the following [primitive
types](#PrimitiveTypes), or a [type definition](#TypeDefinition) based
on one of these primitive types:

-   `Edm.Boolean `
-   `Edm.Byte `
-   `Edm.Date `
-   `Edm.DateTimeOffset `
-   `Edm.Decimal `
-   `Edm.Duration `
-   `Edm.Guid `
-   `Edm.Int16 `
-   `Edm.Int32 `
-   `Edm.Int64 `
-   `Edm.SByte `
-   `Edm.String `
-   `Edm.TimeOfDay`

Key property values MAY be language-dependent, but their values MUST be
unique across all languages and the entity ids (defined in
[OData‑Protocol](#BMProtocol)) MUST be language independent.

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
properties of the containing entity type and any of its base types.

An alias MUST NOT be defined if the key property is a primitive property
of the entity type itself.

For key properties that are a property of a complex or navigation
property, the alias MUST be used in the key predicate of URLs instead of
the path to the property because the required percent-encoding of the
forward slash separating segments of the path to the property would make
URL construction and parsing rather complicated. The alias MUST NOT be
used in the query part of URLs, where paths to properties don't require
special encoding and are a standard constituent of expressions anyway.

::: csdlHeadline
Element `edm:Key`
:::

::: csdl
The `edm:Key` element MUST contain at least one `edm:PropertyRef`
element.
:::

::: csdlHeadline
Element `edm:PropertyRef`
:::

::: csdl
The `edm:PropertyRef` element MUST contain the `Name` attribute and MAY
contain the `Alias` attribute.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is a path expression leading to a primitive
property. The names of the properties in the path are joined together by
forward slashes.
:::

::: csdlHeadline
Attribute `Alias`
:::

::: csdl
The value of `Alias` is a [simple identifier](#SimpleIdentifier).
:::

::: example
Example ##ex: entity type with a simple key
```
[[\<EntityType Name=\"Category\"\>\
  \<Key\>\
    \<PropertyRef Name=\"ID\" /\>\
  \</Key\>\
  \<Property Name=\"ID\" Type=\"Edm.Int32\" Nullable=\"false\" /\>\
  \<Property Name=\"Name\" Type=\"Edm.String\" /\>\
\</EntityType\>]{style="color:black"}]{.Datatype}
```
:::

::: example
Example ##ex: entity type with a simple key referencing a property of a
[complex type](#ComplexType)
```
[[\<EntityType Name=\"Category\"\>\
  \<Key\>\
    \<PropertyRef Name=\"Info/ID\" Alias=\"EntityInfoID\" /\>\
  \</Key\>\
  \<Property Name=\"Info\" Type=\"Sales.EntityInfo\" Nullable=\"false\"
/\>\
  \<Property Name=\"Name\" Type=\"Edm.String\" /\>\
\</EntityType\>]{style="color:black"}]{.Datatype}
:::

` `

`<ComplexType Name="EntityInfo">`

[[  \<Property Name=\"ID\" Type=\"Edm.Int32\" Nullable=\"false\" /\>\
  \<Property Name=\"Created\" Type=\"Edm.DateTimeOffset\" /\>\
\</ComplexType\>]{style="color:black"}]{.Datatype}
```

::: example
Example ##ex: entity type with a composite key
```
[[\<EntityType Name=\"OrderLine\"\>\
  \<Key\>\
    \<PropertyRef Name=\"OrderID\" /\>\
    \<PropertyRef Name=\"LineNumber\" /\>\
  \</Key\>\
  \<Property Name=\"OrderID\" Type=\"Edm.Int32\" Nullable=\"false\" /\>\
  \<Property Name=\"LineNumber\" Type=\"Edm.Int32\" Nullable=\"false\"
/\>\
\</EntityType\>]{style="color:black"}]{.Datatype}
```
:::

Example 13 (based on example 11): requests to an entity set `Categories`
of type `Category` must use the alias
```
GET http://host/service/Categories(EntityInfoID=1)
```

Example 14 (based on example 11): in a query part the value assigned to
the name attribute must be used
```
GET http://example.org/OData.svc/Categories?\$filter=Info/ID le 100
```

# ##sec [Structural Property](#StructuralProperty)

A structural property is a property (of a structural type) that has one
of the following types:
- [Primitive type](#PrimitiveTypes)
- [Complex type](#ComplexType)
- [Enumeration type](#EnumerationType)
- A collection of one of the above

A structural property MUST specify a unique name as well as a
[type](#Type).

The property's name MUST be a [simple identifier](#SimpleIdentifier)
used when referencing, serializing or deserializing the property. It
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

::: csdlHeadline
Element `edm:Property`
:::

::: csdl
The `edm:Property` element MUST contain the `Name` and the `Type`
attribute, and it MAY contain the facet attributes
[`Nullable`](#Nullable), [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale),
[`SRID`](#SRID), and [`DefaultValue`](#DefaultValue).

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the property's name.
:::

::: example
Example ##ex: complex type with two properties
```
[[\<ComplexType Name=\"Measurement\"\>\
  \<Property Name=\"Dimension\" Type=\"Edm.String\" Nullable=\"false\"
MaxLength=\"50\"]{style="color:black"}]{.Datatype}
:::

[[            DefaultValue=\"Unspecified\" /\>\
  \<Property Name=\"Length\" Type=\"Edm.Decimal\" Nullable=\"false\"
Precision=\"18\"]{style="color:black"}]{.Datatype}

[[            Scale=\"2\" /\>\
\</ComplexType\>]{style="color:black"}]{.Datatype}
```

## ##subsec Type

The property's type MUST be a [primitive type](#PrimitiveTypes),
[complex type](#ComplexType), or [enumeration type](#EnumerationType) in
scope, or a collection of one of these types.

A collection-valued property may be annotated with the
[`Core.Ordered`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#Ordered)
term, defined in [OData-CoreVoc](#BMVocCore)**)**, to specify that it
supports a stable ordering.

A collection-valued property may be annotated with the
[`Core.PositionalInsert`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#PositionalInsert)
term, defined in [OData-CoreVoc](#BMVocCore)**)**, to specify that it
supports inserting items into a specific ordinal position.

::: csdlHeadline
Attribute `Type`
:::

::: csdl
For single-valued properties the value of `Type` is the qualified name
of the property's type.

For collection-valued properties the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the property's
item type, followed by a closing parenthesis `)`.
:::

::: example
Example ##ex: property `Units` that can have zero or more strings as its
value
```
`<Property Name="Units" Type="Collection(Edm.String)" />`
```
:::

## ##subsec Type Facets

Facets modify or constrain the acceptable values of a property.

For single-valued properties facets apply to the type of the property.
For collection-valued properties the facets apply to the type of the
items in the collection.

### ##subsubsec Nullable

A Boolean value specifying whether the property can have the value
`null`.

::: csdlHeadline
Attribute `Nullable`
:::

::: csdl
The value of `Nullable` is one of the Boolean literals `true` or
`false`.

For single-valued properties the value `true` means that the property
allows the `null` value.

For collection-valued properties the property value will always be a
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

### ##subsubsec MaxLength

A positive integer value specifying the maximum length of a binary,
stream or string value. For binary or stream values this is the octet
length of the binary data, for string values it is the character length
(number of code points for Unicode).

If no maximum length is specified, clients SHOULD expect arbitrary
length.

::: csdlHeadline
Attribute `MaxLength`
:::

::: csdl
The value of `MaxLength` is a positive integer or the symbolic value
`max` as a shorthand for the maximum length supported for the type by
the service.

Note: the symbolic value `max` is only allowed in OData 4.0 responses;
it is deprecated in OData 4.01. While clients MUST be prepared for this
symbolic value, OData 4.01 and greater services MUST NOT return the
symbolic value `max` and MAY instead specify the concrete maximum length
supported for the type by the service or omit the attribute entirely.
:::

### ##subsubsec Precision

For a decimal value: the maximum number of significant decimal digits of
the property's value; it MUST be a positive integer.

For a temporal value (datetime-with-timezone-offset, duration, or
time-of-day): the number of decimal places allowed in the seconds
portion of the value; it MUST be a non-negative integer between zero and
twelve.

Note: service authors SHOULD be aware that some clients are unable to
support a precision greater than 28 for decimal properties and 7 for
temporal properties. Client developers MUST be aware of the potential
for data loss when round-tripping values of greater precision. Updating
via `PATCH` and exclusively specifying modified properties will reduce
the risk for unintended data loss.

Note: duration properties supporting a granularity less than seconds
(e.g. minutes, hours, days) can be annotated with term
[`Measures.DurationGranularity`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Measures.V1.md#DurationGranularity),
see [OData-VocMeasures](#BMVocMeasures).

::: csdlHeadline
Attribute `Precision`
:::

::: csdl
The value of `Precision` is a number.

If not specified for a decimal property, the decimal property has
arbitrary precision.

If not specified for a temporal property, the temporal property has a
precision of zero.
:::

::: example
Example ##ex: [`Precision`](#Precision) facet applied to the
`DateTimeOffset` type
```
`<Property Name="SuggestedTimes" Type="Collection(Edm.DateTimeOffset)"`
:::

`          Precision="6" />`
```

### ##subsubsec Scale

A non-negative integer value specifying the maximum number of digits
allowed to the right of the decimal point, or one of the symbolic values
`floating` or `variable`.

The value `floating` means that the decimal property represents a
decimal floating-point number whose number of significant digits is the
value of the [`Precision`](#Precision) facet. OData 4.0 responses MUST
NOT specify the value `floating`.

The value `variable` means that the number of digits to the right of the
decimal point may vary from zero to the value of the
[`Precision`](#Precision) facet.

An integer value means that the number of digits to the right of the
decimal point may vary from zero to the value of the `Scale` attribute,
and the number of digits to the left of the decimal point may vary from
one to the value of the `Precision` facet minus the value of the `Scale`
facet. If `Precision` is equal to `Scale`, a single zero MUST precede
the decimal point.

The value of `Scale` MUST be less than or equal to the value of
[`Precision`](#Precision).

Note: if the underlying data store allows negative scale, services may
use a [`Precision`](#Precision) with the absolute value of the negative
scale added to the actual number of significant decimal digits, and
client-provided values may have to be rounded before being stored.

::: csdlHeadline
Attribute `Scale`
:::

::: csdl
The value of `Scale` is a number or one of the symbolic values
`floating` or `variable`.

Services SHOULD use lower-case values; clients SHOULD accept values in a
case-insensitive manner.

If not specified, the `Scale` facet defaults to zero.
:::

::: example
Example ##ex: [`Precision`](#Precision)`=3` and `Scale=2`.\
Allowed values: 1.23, 0.23, 3.14 and 0.7, not allowed values: 123, 12.3
```
`<Property Name="Amount32" Type="Edm.Decimal" Precision="3" Scale="2" />`
```
:::

::: example
Example ##ex: `Precision=2` equals `Scale`.\
Allowed values: 0.23, 0.7, not allowed values: 1.23, 1.2
```
`<Property Name="Amount22" Type="Edm.Decimal" Precision="2" Scale="2" />`
```
:::

::: example
Example ##ex: `Precision=3` and a variable `Scale`.\
Allowed values: 0.123, 1.23, 0.23, 0.7, 123 and 12.3, not allowed
values: 12.34, 1234 and 123.4 due to the limited precision.
```
`<Property Name="Amount3v" Type="Edm.Decimal" Precision="3" Scale="variable" />`
```
:::

::: example
Example ##ex: `Precision=7` and a floating `Scale`.\
Allowed values: -1.234567e3, 1e-101, 9.999999e96, not allowed values:
1e-102 and 1e97 due to the limited precision.
```
`<Property Name="Amount7f" Type="Edm.Decimal" Precision="7" Scale="floating" />`
```
:::

### ##subsubsec Unicode

For a string property the `Unicode` facet indicates whether the property
might contain and accept string values with Unicode characters (code
points) beyond the ASCII character set. The value `false` indicates that
the property will only contain and accept string values with characters
limited to the ASCII character set.

If no value is specified, the `Unicode` facet defaults to `true`.

::: csdlHeadline
Attribute `Unicode`
:::

::: csdl
The value of `Unicode` is one of the Boolean literals `true` or `false`.
Absence of the attribute means `true`.
:::

### ##subsubsec SRID

For a geometry or geography property the `SRID` facet identifies which
spatial reference system is applied to values of the property on type
instances.

The value of the `SRID` facet MUST be a non-negative integer or the
special value `variable`. If no value is specified, the attribute
defaults to `0` for `Geometry` types or `4326` for `Geography` types.

The valid values of the `SRID` facet and their meanings are as defined
by the European Petroleum Survey Group [**\[EPSG\]**](#BMEPSG)**.**

::: csdlHeadline
Attribute `SRID`
:::

::: csdl
The value of `$SRID` is a number or the symbolic value `variable`.
:::

### ##subsubsec Default Value

A primitive or enumeration property MAY define a default value that is
used if the property is not explicitly represented in an annotation or
the body of a `POST` or `PUT` request.

If no value is specified, the client SHOULD NOT assume a default value.

::: csdlHeadline
Attribute `DefaultValue`
:::

::: csdl
Default values of type `Edm.String` MUST be represented according to the
XML escaping rules for character data in attribute values. Values of
other primitive types MUST be represented according to the appropriate
alternative in the `primitiveValue` rule defined in
[OData‑ABNF](#BMABNF), i.e. `Edm.Binary` as `binaryValue`, `Edm.Boolean`
as `booleanValue` etc.
:::

# ##sec Navigation Property

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

::: csdlHeadline
Element `edm:NavigationProperty`
:::

::: csdl
The `edm:NavigationProperty` element MUST contain the `Name` and `Type`
attributes, and it MAY contain the attributes
[`Nullable`](#NullableNavigationProperty),
[`Partner`](#PartnerNavigationProperty), and
[`ContainsTarget`](#ContainmentNavigationProperty).

It MAY contain child elements
[`edm:ReferentialConstraint`](#ReferentialConstraint) and at most one
child element [`edm:OnDelete`](#OnDeleteAction).

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the navigation property's name.
:::

::: example
Example ##ex: the Product entity type has a navigation property to a
Category, which has a navigation link back to one or more products
```
[[\<EntityType Name=\"Product\"\>\
  ...\
  \<NavigationProperty Name=\"Category\" Type=\"self.Category\"
Nullable=\"false\"]{style="color:black"}]{.Datatype}
:::

[[                      Partner=\"Products\" /\>\
  \<NavigationProperty Name=\"Supplier\" Type=\"self.Supplier\" /\>\
\</EntityType\>]{style="color:black"}]{.Datatype}

` `

[[\<EntityType Name=\"Category\"\>\
  ...\
  \<NavigationProperty Name=\"Products\"
Type=\"Collection(self.Product)\" ]{style="color:black"}]{.Datatype}

[[                      Partner=\"Category\" /\>\
\</EntityType\>]{style="color:black"}]{.Datatype}
```

## ##subsec Navigation Property Type

The navigation property's type MUST be an [entity type](#EntityType) in
scope, the [abstract type](#BuiltInAbstractTypes) `Edm.EntityType`, or a
collection of one of these types.

If the type is a collection, an arbitrary number of entities can be
related. Otherwise there is at most one related entity.

The related entities MUST be of the specified entity type or one of its
subtypes.

For a collection-valued containment navigation property the specified
entity type MUST have a [key](#Key) defined.

A collection-valued navigation property may be annotated with the
[`Core.Ordered`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#Ordered)
term, defined in [OData-CoreVoc](#BMVocCore)**)**, to specify that it
supports a stable ordering.

A collection-valued navigation property may be annotated with the
[`Core.PositionalInsert`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#PositionalInsert)
term, defined in [OData-CoreVoc](#BMVocCore)**)**, to specify that it
supports inserting items into a specific ordinal position.

::: csdlHeadline
Attribute `Type`
:::

::: csdl
For single-valued navigation properties the value of `Type` is the
qualified name of the navigation property's type.

For collection-valued navigation properties the value of `Type` is the
character sequence `Collection(` followed by the qualified name of the
navigation property's item type, followed by a closing parenthesis `)`.
:::

## ##subsec Nullable Navigation Property

A Boolean value specifying whether the declaring type MAY have no
related entity. If false, instances of the declaring structured type
MUST always have a related entity.

Nullable MUST NOT be specified for a collection-valued navigation
property, a collection is allowed to have zero items.

::: csdlHeadline
Attribute `Nullable`
:::

::: csdl
The value of `Nullable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `true`.
:::

## ##subsec Partner Navigation Property

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

::: csdlHeadline
Attribute `Partner`
:::

::: csdl
The value of `Partner` is the path to the of the partner navigation
property.
:::

## ##subsec Containment Navigation Property

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
property and the key of the contained entity, see [OData‑URL](#BMURL).

Entity types used in collection-valued containment navigation properties
MUST have a [key](#Key) defined.

For items of an ordered collection of complex types (those annotated
with the
[`Core.Ordered`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#Ordered)
term defined in [OData-CoreVoc](#BMVocCore)**)**, the canonical URL of
the item is the canonical URL of the collection appended with a segment
containing the zero-based ordinal of the item. Items within in an
unordered collection of complex types do not have a canonical URL.
Services that support unordered collections of complex types declaring a
containment navigation property, either directly or indirectly via a
property of complex type, MUST specify the URL for the navigation link
within a payload representing that item, according to format-specific
rules.

OData 4.0 responses MUST NOT specify a complex type declaring a
containment navigation property as the type of a collection-valued
property.

An entity cannot be referenced by more than one containment relationship
and cannot both belong to an entity set declared within the entity
container and be referenced by a containment relationship.

Containment navigation properties MUST NOT be specified as the last path
segment in the path of a [navigation property
binding](#NavigationPropertyBinding).

When a containment navigation property navigates between entity types in
the same inheritance hierarchy, the containment is called *recursive*.

Containment navigation properties MAY specify a partner navigation
property. If the containment is recursive, the relationship defines a
tree, thus the partner navigation property MUST be
[Nullable](#NullableNavigationProperty) (for the root of the tree) and
single-valued (for the parent of a non-root entity). If the containment
is not recursive, the partner navigation property MUST NOT be nullable.

An entity type inheritance chain MUST NOT contain more than one
navigation property with a partner navigation property that is a
containment navigation property.

Note: without a partner navigation property, there is no reliable way
for a client to determine which entity contains a given contained
entity. This may lead to problems for clients if the contained entity
can also be reached via a non-containment navigation path.

::: csdlHeadline
Attribute `ContainsTarget`
:::

::: csdl
The value of `ContainsTarget` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Referential Constraint

A single-valued navigation property MAY define one or more referential
constraints. A referential constraint asserts that the *dependent
property* (the property defined on the structured type declaring the
navigation property) MUST have the same value as the *principal
property* (the referenced property declared on the entity type that is
the target of the navigation).

The type of the dependent property MUST match the type of the principal
property, or both types MUST be complex types.

If the principle property references an entity, then the dependent
property must reference the same entity.

If the principle property's value is a complex type instance, then the
dependent property's value must be a complex type instance with the same
properties, each with the same values.

If the navigation property on which the referential constraint is
defined is nullable, or the principal property is nullable, then the
dependent property MUST also be nullable. If both the navigation
property and the principal property are not nullable, then the dependent
property MUST NOT be nullable.

::: csdlHeadline
Element `edm:ReferentialConstraint`
:::

::: csdl
The `edm:ReferentialConstraint` element MUST contain the attributes
`Property` and `ReferencedProperty`.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Property`
:::

::: csdl
The `Property` attribute specifies the property that takes part in the
referential constraint on the dependent structured type. Its value MUST
be a path expression resolving to a property of the dependent structured
type itself or to a property of a complex property (recursively) of the
dependent structured type. The names of the properties in the path are
joined together by forward slashes. The path is relative to the
dependent structured type declaring the navigation property.
:::

::: csdlHeadline
Attribute `ReferencedProperty`
:::

::: csdl
The `ReferencedProperty` attribute specifies the corresponding property
of the principal entity type. Its value MUST be a path expression
resolving to a property of the principal entity type itself or to a
property of a complex property (recursively) of the principal entity
type that MUST have the same type as the property of the dependent
entity type. The path is relative to the entity type that is the target
of the navigation property.
:::

::: example
Example ##ex: the category must exist for a product in that category to
exist. The `CategoryID` of the product is identical to the `ID` of the
category, and the `CategoryKind` property of the product is identical to
the `Kind` property of the category.
```
[[\<EntityType Name=\"Product\"\>\
  ...\
  \<Property Name=\"CategoryID\" Type=\"Edm.String\"
Nullable=\"false\"/\>]{style="color:black"}]{.Datatype}
:::

`  <Property Name="CategoryKind" Type="Edm.String" Nullable="true" />`

[[  \<NavigationProperty Name=\"Category\" Type=\"self.Category\"
Nullable=\"false\"\>\
    \<ReferentialConstraint Property=\"CategoryID\"
ReferencedProperty=\"ID\" /\>\
    \<ReferentialConstraint Property=\"CategoryKind\"
ReferencedProperty=\"Kind\"\>]{style="color:black"}]{.Datatype}

`      <Annotation Term="Core.Description" `

`                  String="Referential Constraint to non-key property" />`

`    </ReferentialConstraint>`

`  </NavigationProperty>`

`</EntityType>`

` `

`<EntityType Name="Category">`

`  <Key>`

`    <PropertyRef Name="ID" />`

[[  \</Key\>\
  \<Property Name=\"ID\" Type=\"Edm.String\" Nullable=\"false\" /\>\
  \<Property Name=\"Kind\" Type=\"Edm.String\" Nullable=\"true\" /\>\
  ... ]{style="color:black"}]{.Datatype}

`</EntityType>`
```

## ##subsec On-Delete Action

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

::: csdlHeadline
Element `edm:OnDelete`
:::

::: csdl
The `edm:OnDelete` element MUST contain the `Action` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Action`
:::

::: csdl
The value of `Action` is one of the values `Cascade`, `None`, `SetNull`,
or `SetDefault`.
:::

::: example
Example ##ex: deletion of a category implies deletion of the related
products in that category
```
[[\<EntityType Name=\"Category\"\>\
  ...\
  \<NavigationProperty Name=\"Products\"
Type=\"Collection(self.Product)\"\>\
    \<OnDelete Action=\"Cascade\"\>]{style="color:black"}]{.Datatype}
:::

[[      \<Annotation Term=\"Core.Description\"\
                  String=\"Delete all products in this category\"
/\>]{style="color:black"}]{.Datatype}

[[    \</OnDelete\
  \</NavigationProperty\>]{style="color:black"}]{.Datatype}

`</EntityType>`
```

# ##sec Complex Type

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

::: csdlHeadline
Element `edm:ComplexType`
:::

::: csdl
The `edm:ComplexType` element MUST contain the `Name` attribute, and it
MAY contain the [`BaseType`](#DerivedComplexType),
[`Abstract`](#AbstractComplexType), and [`OpenType`](#OpenComplexType)
attributes.

It MAY contain [`edm:Property`](#StructuralProperty) and
[`edm:NavigationProperty`](#NavigationProperty) elements describing the
properties of the complex type.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the complex type's name.
:::

::: example
Example ##ex: a complex type used by two entity types
```
[[\<ComplexType Name=\"Dimensions\"\>\
  \<Property Name=\"Height\" Nullable=\"false\" Type=\"Edm.Decimal\"
/\>\
  \<Property Name=\"Weight\" Nullable=\"false\" Type=\"Edm.Decimal\"
/\>\
  \<Property Name=\"Length\" Nullable=\"false\" Type=\"Edm.Decimal\"
/\>\
\</ComplexType\>]{style="color:black"}]{.Datatype}
:::

` `

[[\<EntityType Name=\"Product\"\>\
  ...\
  \<Property Name=\"ProductDimensions\" Type=\"self.Dimensions\" /\>\
  \<Property Name=\"ShippingDimensions\" Type=\"self.Dimensions\" /\>\
\</EntityType\>]{style="color:black"}]{.Datatype}

` `

[[\<EntityType Name=\"ShipmentBox\"\>\
  ...\
  \<Property Name=\"Dimensions\" Type=\"self.Dimensions\" /\>\
\</EntityType\>]{style="color:black"}]{.Datatype}
```

## ##subsec Derived Complex Type

A complex type can inherit from another complex type by specifying it as
its base type.

A complex type inherits the structural and navigation properties of its
base type.

A complex type MUST NOT introduce an inheritance cycle by specifying a
base type.

The rules for annotations of derived complex types are described in
section 14.2.

::: csdlHeadline
Attribute `BaseType`
:::

::: csdl
The value of `BaseType` is the qualified name of the base type.
:::

## ##subsec Abstract Complex Type

A complex type MAY indicate that it is abstract and cannot have
instances.

::: csdlHeadline
Attribute `Abstract`
:::

::: csdl
The value of `Abstract` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Open Complex Type

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
[OData‑Protocol](#BMProtocol).

::: csdlHeadline
Attribute `OpenType`
:::

::: csdl
The value of `OpenType` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

# ##sec Enumeration Type

Enumeration types are [nominal](#NominalTypes) types that represent a
non-empty series of related values. Enumeration types expose these
related values as members of the enumeration.

The enumeration type's name is a [simple identifier](#SimpleIdentifier)
that MUST be unique within its schema.

Although enumeration types have an underlying numeric value, the
preferred representation for an enumeration value is the member name.
Discrete sets of numeric values should be represented as numeric values
annotated with the `AllowedValues` annotation defined in
[**\[OData-VocCore\].**](#BMVocCore)

Enumeration types marked as flags allow values that consist of more than
one enumeration member at a time.

::: csdlHeadline
Element `edm:EnumType`
:::

::: csdl
The `edm:EnumType` element MUST contain the Name attribute, and it MAY
contain the [`UnderlyingType`](#UnderlyingIntegerType) and
[`IsFlags`](#FlagsEnumerationType) attributes.

It MUST contain one or more [`edm:Member`](#EnumerationTypeMember)
elements defining the members of the enumeration type.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the enumeration type's name.
:::

::: example
Example ##ex: a simple flags-enabled enumeration
```
[[\<EnumType Name=\"FileAccess\" UnderlyingType=\"Edm.Int32\"
IsFlags=\"true\"\>\
  \<Member Name=\"Read\"   Value=\"1\" /\>\
  \<Member Name=\"Write\"  Value=\"2\" /\>\
  \<Member Name=\"Create\" Value=\"4\" /\>\
  \<Member Name=\"Delete\" Value=\"8\" /\>\
\</EnumType\>]{style="color:black"}]{.Datatype}
```
:::

## ##subsec Underlying Integer Type

An enumeration type MAY specify one of `Edm.Byte`, `Edm.SByte`,
`Edm.Int16`, `Edm.Int32`, or `Edm.Int64` as its underlying type.

If not explicitly specified, `Edm.Int32` is used as the underlying type.

::: csdlHeadline
Attribute `UnderlyingType`
:::

::: csdl
The value of `UnderlyingType` is the qualified name of the underlying
type.
:::

## ##subsec Flags Enumeration Type

An enumeration type MAY indicate that the enumeration type allows
multiple members to be selected simultaneously.

If not explicitly specified, only one enumeration type member MAY be
selected simultaneously.

::: csdlHeadline
Attribute `IsFlags`
:::

::: csdl
The value of `IsFlags` is one of the Boolean literals `true` or `false`.
Absence of the attribute means `false`.
:::

::: example
Example ##ex: pattern values can be combined, and some combined values
have explicit names
```
`<EnumType Name="Pattern" UnderlyingType="Edm.Int32" IsFlags="true"> `
:::

`  <Member Name="Plain"             Value="0" /> `

`  <Member Name="Red"               Value="1" /> `

`  <Member Name="Blue"              Value="2" /> `

`  <Member Name="Yellow"            Value="4" /> `

`  <Member Name="Solid"             Value="8" /> `

`  <Member Name="Striped"           Value="16" /> `

`  <Member Name="SolidRed"          Value="9" /> `

`  <Member Name="SolidBlue"         Value="10" /> `

`  <Member Name="SolidYellow"       Value="12" /> `

`  <Member Name="RedBlueStriped"    Value="19" /> `

`  <Member Name="RedYellowStriped"  Value="21" /> `

`  <Member Name="BlueYellowStriped" Value="22" /> `

`</EnumType>`
```

## ##subsec Enumeration Type Member

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

::: csdlHeadline
Element `edm:Member`
:::

::: csdl
The `edm:Member` element MUST contain the `Name` attribute and it MAY
contain the `Value` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the enumeration member's name.
:::

::: csdlHeadline
Attribute `Value`
:::

::: csdl
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

::: example
Example ##ex: `FirstClass` has a value of `0`, `TwoDay` a value of 1, and
`Overnight` a value of 2.
```
[[\<EnumType Name=\"ShippingMethod\"\>\
  \<Member Name=\"FirstClass\"\>]{style="color:black"}]{.Datatype}
:::

`    <Annotation Term="Core.Description"`

`                String="Shipped with highest priority" />`

[[  \</Member\>\
  \<Member Name=\"TwoDay\"\>]{style="color:black"}]{.Datatype}

`    <Annotation Term="Core.Description"`

[[                String=\"Shipped within two days\" /\>\
  \</Member\>\
  \<Member Name=\"Overnight\"\>]{style="color:black"}]{.Datatype}

`    <Annotation Term="Core.Description"`

[[                String=\"Shipped overnight\" /\>\
  \</Member\>\
\</EnumType\>]{style="color:black"}]{.Datatype}
```

# ##sec Type Definition

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

::: csdlHeadline
Element `edm:TypeDefinition`
:::

::: csdl
The `edm:TypeDefinition` element MUST contain the `Name` and
[`UnderlyingType`](#UnderlyingPrimitiveType) attributes.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the type definition's name.
:::

::: example
Example ##ex:
```
\<TypeDefinition Name=\"Length\" UnderlyingType=\"Edm.Int32\"\>
:::

  \<Annotation Term=\"Org.OData.Measures.V1.Unit\"

              String=\"Centimeters\" /\>

\</TypeDefinition\>

 

\<TypeDefinition Name=\"Weight\" UnderlyingType=\"Edm.Int32\"\>

  \<Annotation Term=\"Org.OData.Measures.V1.Unit\"

              String=\"Kilograms\" /\>

\</TypeDefinition\>

 

\<ComplexType Name=\"Size\"\>

  \<Property Name=\"Height\" Type=\"self.Length\" /\>

  \<Property Name=\"Weight\" Type=\"self.Weight\" /\>

\</ComplexType\>
```

## ##subsec Underlying Primitive Type

The underlying type of a type definition MUST be a [primitive
type](#PrimitiveTypes) that MUST NOT be another type definition.

::: csdlHeadline
Attribute `UnderlyingType`
:::

::: csdl
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

# ##sec [Action and Function](#ActionandFunction)

## ##subsec Action

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

## ##subsec Action Overloads

[Bound](#BoundorUnboundActionorFunctionOverlo) actions support
overloading (multiple actions having the same name within the same
schema) by binding parameter type. The combination of action name and
the binding parameter type MUST be unique within a schema.

[Unbound](#BoundorUnboundActionorFunctionOverlo) actions do not support
overloads. The names of all unbound actions MUST be unique within a
schema.

An unbound action MAY have the same name as a bound action.

::: csdlHeadline
Element `edm:Action`
:::

::: csdl
The `edm:Action` element MUST contain the `Name` attribute and it MAY
contain the [`IsBound`](#BoundorUnboundActionorFunctionOverlo) and
[`EntitySetPath`](#EntitySetPath) attributes.

It MAY contain at most one [`edm:ReturnType`](#ReturnType) element and
MAY contain [`edm:Parameter`](#Parameter) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the action's name.
:::

## ##subsec Function

Functions are service-defined operations that MUST NOT have observable
side effects and MUST return a single instance or a collection of
instances of any type.

The function's name is a [simple identifier](#SimpleIdentifier) that
MUST be unique within its schema.

Functions MAY be [composable](#ComposableFunction).

The function MUST specify a [return type](#ReturnType) which MUST be a
primitive, entity or complex type, or a collection of primitive, entity
or complex types in scope.

A function MAY define [parameters](#Parameter) to be used during the
execution of the function.

## ##subsec Function Overloads

[Bound](#BoundorUnboundActionorFunctionOverlo) functions support
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

[Unbound](#BoundorUnboundActionorFunctionOverlo) functions support
overloading subject to the following rules:
- The combination of function name and
unordered set of parameter names MUST be unique within a schema.
- The combination of function name and
ordered set of parameter types MUST be unique within a schema.
- All unbound functions with the same
function name within a schema MUST specify the same return type.

An unbound function MAY have the same name as a bound function.

Note that [type definitions](#ActionandFunction) can be used to
disambiguate overloads for both bound and unbound functions, even if
they specify the same underlying type.

::: csdlHeadline
Element `edm:Function`
:::

::: csdl
The `edm:Function` element MUST contain the `Name` attribute and it MAY
contain the [`IsBound`](#BoundorUnboundActionorFunctionOverlo) and
[`EntitySetPath`](#EntitySetPath) attributes.

It MUST contain one [`edm:ReturnType`](#ReturnType) element, and it MAY
contain [`edm:Parameter`](#Parameter) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the action's name.
:::

## ##subsec Bound or Unbound Action or Function Overloads

An action or function overload MAY indicate that it is bound. If not
explicitly indicated, it is unbound.

Bound actions or functions are invoked on resources matching the type of
the binding parameter. The binding parameter can be of any type, and it
MAY be [Nullable](#Nullable).

Unbound actions are invoked through an [action import](#ActionImport).

Unbound functions are invoked as static functions within a filter or
orderby expression, or from the entity container through a [function
import](#FunctionImport).

::: csdlHeadline
Attribute `IsBound`
:::

::: csdl
The value of `IsBound` is one of the Boolean literals `true` or `false`.
Absence of the attribute means `false`.
:::

## ##subsec Entity Set Path

Bound actions and functions that return an entity or a collection of
entities MAY specify an entity set path if the entity set of the
returned entities depends on the entity set of the binding parameter
value.

The entity set path consists of a series of segments joined together
with forward slashes.

The first segment of the entity set path MUST be the name of the binding
parameter. The remaining segments of the entity set path MUST represent
navigation segments or type casts.

A navigation segment names the [simple identifier](#SimpleIdentifier) of
the [navigation property](#NavigationProperty) to be traversed. A
type-cast segment names the [qualified name](#QualifiedName) of the
entity type that should be returned from the type cast.

::: csdlHeadline
Attribute `EntitySetPath`
:::

::: csdl
The value of `EntitySetPath` is the entity set path.
:::

## ##subsec Composable Function

A function MAY indicate that it is composable. If not explicitly
indicated, it is not composable.

A composable function can be invoked with additional path segments or
key predicates appended to the resource path that identifies the
composable function, and with system query options as appropriate for
the type returned by the composable function.

::: csdlHeadline
Attribute `IsComposable`
:::

::: csdl
The value of `IsComposable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Return Type

The return type of an action or function overload MAY be any type in
scope, or a collection of any type in scope.

The facets [`Nullable`](#Nullable), [`MaxLength`](#MaxLength),
[`Precision`](#Precision), [`Scale`](#Scale), and [`SRID`](#SRID) can be
used as appropriate to specify value restrictions of the return type, as
well as the [`Unicode`](#Unicode) facet for 4.01 and greater payloads.

::: csdlHeadline
Element `edm:ReturnType`
:::

::: csdl
The `edm:ReturnType` element MUST contain the `Type` attribute, and it
MAY contain the attributes `Nullable`, [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale), and
[`SRID`](#SRID).

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Type`
:::

::: csdl
For single-valued return types the value of `Type` is the qualified name
of the return type.

For collection-valued return types the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the return item
type, followed by a closing parenthesis `)`.
:::

::: csdlHeadline
Attribute `Nullable`
:::

::: csdl
The value of `Nullable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `true`.

If the return type is a collection of entity types, the `$Nullable`
member has no meaning and MUST NOT be specified.

For other collection-valued return types the result will always be a
collection that MAY be empty. In this case the `Nullable` attribute
applies to items of the collection and specifies whether the collection
MAY contain `null` values.

For single-valued return types the value `true` means that the action or
function MAY return a single `null` value. The value `false` means that
the action or function will never return a `null` value and instead will
fail with an error response if it cannot compute a result.
:::

## ##subsec Parameter

An action or function overload MAY specify parameters.

A bound action or function overload MUST specify at least one parameter;
the first parameter is the binding parameter. The order of parameters
MUST NOT change unless the schema version changes.

Each parameter MUST have a name that is a [simple
identifier](#SimpleIdentifier). The parameter name MUST be unique within
the action or function overload.

The parameter MUST specify a type. It MAY be any type in scope, or a
collection of any type in scope.

The facets [`MaxLength`](#MaxLength), [`Precision`](#Precision),
[`Scale`](#Scale), or [`SRID`](#SRID) can be used as appropriate to
specify value restrictions of the parameter, as well as the
[`Unicode`](#Unicode) facet for 4.01 and greater payloads.

::: csdlHeadline
Element `edm:Parameter`
:::

::: csdl
The `edm:Parameter` element MUST contain the `Name` and the `Type`
attribute, and it MAY contain the attributes `Nullable`,
[`MaxLength`](#MaxLength), [`Unicode`](#Unicode),
[`Precision`](#Precision), [`Scale`](#Scale), and [`SRID`](#SRID).

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the parameter's name.
:::

::: csdlHeadline
Attribute `Type`
:::

::: csdl
For single-valued parameters the value of `Type` is the qualified name
of the parameter.

For collection-valued parameters the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the parameter's
type, followed by a closing parenthesis `)`.
:::

::: csdlHeadline
Attribute `Nullable`
:::

::: csdl
The value of `Nullable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `true`.

The value `true` means that the parameter accepts a `null` value.
:::

::: example
Example ##ex: a function returning the top-selling products for a given
year. In this case the year must be specified as a parameter of the
function with the `edm:Parameter` element.
```
\<Function Name=\"TopSellingProducts\"\>
:::

  \<Parameter Name=\"Year\" Type=\"Edm.Decimal\" Precision=\"4\"
Scale=\"0\" /\>

  \<ReturnType Type=\"Collection(self.Product)\" /\>

\</Function\>
```

# ##sec Entity Container

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

::: example
Example ##ex: one entity set per entity type
```
[[\<EntitySet Name=\"Products\"   EntityType=\"self.Product\" /\>\
\<EntitySet Name=\"Categories\" EntityType=\"self.Category\"
/\>]{style="color:black"}]{.Datatype}
```
:::

Other entity models may expose multiple entity sets per type.

::: example
Example ##ex: three entity sets referring to the two entity types
```
[[\<EntitySet Name=\"StandardCustomers\" EntityType=\"self.Customer\"\>\
]{style="color:black"}]{.Datatype}[  \<NavigationPropertyBinding
Path=\"Orders\" Target=\"Orders\" /\>\
\</EntitySet\> ]{style="color:black"}
:::

`<EntitySet Name="PreferredCustomers" EntityType="self.Customer">`

[  \<NavigationPropertyBinding Path=\"Orders\" Target=\"Orders\" /\>\
\</EntitySet\>\
\<EntitySet Name=\"Orders\" EntityType=\"self.Order\"
/\>]{style="color:black"}
```

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

::: csdlHeadline
Element `edm:EntityContainer`
:::

::: csdl
The `edm:EntityContainer` MUST contain one or more
[`edm:EntitySet`](#EntitySet), [`edm:Singleton`](#Singleton),
[`edm:ActionImport`](#ActionImport), or
[`edm:FunctionImport`](#FunctionImport) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the entity container's name.
:::

::: example
Example ##ex: An entity container aggregates entity sets, singletons,
action imports, and function imports.
```
[[\<EntityContainer Name=\"DemoService\"\>\
  \<EntitySet Name=\"Products\"
EntityType=\"self.Product\"\>]{style="color:black"}]{.Datatype}
:::

`    <NavigationPropertyBinding Path="Category" Target="Categories" />`

`    <NavigationPropertyBinding Path="Supplier" Target="Suppliers" />`

`  </EntitySet>`

[[  \<EntitySet Name=\"Categories\" EntityType=\"self.Category\"\>\
    \<NavigationPropertyBinding Path=\"Products\" Target=\"Products\"
/\>]{style="color:black"}]{.Datatype}

`  </EntitySet>`

[[  \<EntitySet Name=\"Suppliers\" EntityType=\"self.Supplier\"\>\
    \<NavigationPropertyBinding Path=\"Products\" Target=\"Products\"
/\>]{style="color:black"}]{.Datatype}

`  </EntitySet>`

`  <Singleton Name="MainSupplier" Type="self.Supplier" />`

[[  \<ActionImport Name=\"LeaveRequestApproval\"
Action=\"self.Approval\" /\>\
  \<FunctionImport Name=\"ProductsByRating\"
Function=\"self.ProductsByRating\" ]{style="color:black"}]{.Datatype}

[[                  EntitySet=\"Products\" /\>\
\</EntityContainer\>]{style="color:black"}]{.Datatype}
```

## ##subsec Extending an Entity Container

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

Note: services should not introduce cycles by extending entity
containers. Clients should be prepared to process cycles introduced by
extending entity containers.

::: csdlHeadline
Attribute `Extends`
:::

::: csdl
The value of `Extends` is the qualified name of the entity container to
be extended.
:::

::: example
Example ##ex: the entity container `Extending` will contain all child
elements that it defines itself, plus all child elements of the `Base`
entity container located in `SomeOtherSchema`
```
\<EntityContainer Name=\"Extending\"
Extends=\"Some.Other.Schema.Base\"\>
:::

   `…`

\</EntityContainer\>
```

## ##subsec Entity Set

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

::: csdlHeadline
Element `edm:EntitySet`
:::

::: csdl
The `edm:EntitySet` element MUST contain the attributes `Name` and
`EntityType`, and it MAY contain the `IncludeInServiceDocument`
attribute.

It MAY contain
[`edm:NavigationPropertyBinding`](#NavigationPropertyBinding) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the entity set's name.
:::

::: csdlHeadline
Attribute `EntityType`
:::

::: csdl
The value of `EntityType` is the qualified name of an entity type in
scope.
:::

::: csdlHeadline
Attribute `IncludeInServiceDocument`
:::

::: csdl
The value of `IncludeInServiceDocument` is one of the Boolean literals
`true` or `false`. Absence of the attribute means `true`.
:::

## ##subsec Singleton

Singletons are top-level single-valued resources.

A singleton is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

A singleton MUST specify a type that MUST be an entity type in scope.

A singleton MUST reference an instance its entity type.

::: csdlHeadline
Element `edm:Singleton`
:::

::: csdl
The `edm:Singleton` element MUST include the attributes `Name` and
`Type`, and it MAY contain the `Nullable` attribute.

It MAY contain
[`edm:NavigationPropertyBinding`](#NavigationPropertyBinding) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the singleton's name.
:::

::: csdlHeadline
Attribute `Type`
:::

::: csdl
The value of `Type` is whose value is the [qualified
name](#QualifiedName) of an entity type in scope.
:::

::: csdlHeadline
Attribute `Nullable`
:::

::: csdl
The value of `Nullable` is one of the Boolean literals `true` or
`false`.

If no value is specified, the `Nullable` attribute defaults to `false`.

In OData 4.0 responses this attribute MUST NOT be specified.
:::

## ##subsec Navigation Property Binding

If the entity type of an entity set or singleton declares navigation
properties, a navigation property binding allows describing which entity
set or singleton will contain the related entities.

An [entity set](#EntitySet) or a [singleton](#Singleton) SHOULD contain
a navigation property binding for each [navigation
property](#NavigationProperty) of its entity type, including navigation
properties defined on complex typed properties.

If omitted, clients MUST assume that the target entity set or singleton
can vary per related entity.

### ##subsubsec Navigation Property Path Binding

A navigation property binding MUST specify a path to a navigation
property of the entity set's or singleton\'s declared entity type, or a
navigation property reached through a chain of type casts, complex
properties, or containment navigation properties. If the navigation
property is defined on a subtype, the path MUST contain the [qualified
name](#QualifiedName) of the subtype, followed by a forward slash,
followed by the navigation property name. If the navigation property is
defined on a complex type used in the definition of the entity set's
entity type, the path attribute MUST contain a forward-slash separated
list of complex property names and qualified type names that describe
the path leading to the navigation property.

The path can traverse one or more containment navigation properties but
the last navigation property segment MUST be a non-containment
navigation property and there MUST NOT be any non-containment navigation
properties prior to the final navigation property segment.

If the path traverses collection-valued complex properties or
collection-valued containment navigation properties, the binding applies
to all items of these collections.

If the path contains a recursive sub-path (i.e. a path leading back to
the same structured type, the binding applies recursively to any
positive number of cycles through that sub-path.

OData 4.01 services MAY have a type-cast segment as the last path
segment, allowing to bind instances of different sub-types to different
targets.

The same navigation property path MUST NOT be specified in more than one
navigation property binding; navigation property bindings are only used
when all related entities are known to come from a single entity set.
Note that it is possible to have navigation property bindings for paths
that differ only in a type-cast segment, allowing to bind instances of
different sub-types to different targets. If paths differ only in
type-cast segments, the most specific path applies.

### ##subsubsec Binding Target

A navigation property binding MUST specify a target via a [simple
identifier](#SimpleIdentifier) or [target path](#TargetPath). It
specifies the entity set, singleton, or containment navigation property
that contains the entities.

If the target is a [simple identifier](#SimpleIdentifier), it MUST
resolve to an entity set or singleton defined in the same entity
container as the enclosing element.

If the target is a [target path](#TargetPath), it MUST resolve to an
entity set, singleton, or direct or indirect containment navigation
property of a singleton in scope. The path can traverse single-valued
containment navigation properties or single-valued complex properties
before ending in a containment navigation property, and there MUST NOT
be any non-containment navigation properties prior to the final segment.

::: csdlHeadline
Element `edm:NavigationPropertyBinding`
:::

::: csdl
The `edm:NavigationPropertyBinding` element MUST contain the attributes
`Path` and `Target`.
:::

::: csdlHeadline
Attribute `Path`
:::

::: csdl
The value of `Path` is a path expression.
:::

::: csdlHeadline
Attribute `Target`
:::

::: csdl
The value of `Target` is a [target path](#TargetPath).
:::

::: example
Example ##ex: for an entity set in the same container as the enclosing
entity set `Categories`
```
[[\<EntitySet Name=\"Categories\" EntityType=\"self.Category\"\>\
  \<NavigationPropertyBinding Path=\"Products\"
]{style="color:black"}]{.Datatype}
:::

`                             Target="SomeSet" />`

`</EntitySet>`
```

::: example
Example ##ex: for an entity set in any container in scope
```
[[\<EntitySet Name=\"Categories\" EntityType=\"self.Category\"\>\
  \<NavigationPropertyBinding Path=\"Products\"
]{style="color:black"}]{.Datatype}
:::

`                             Target="SomeModel.SomeContainer/SomeSet" />`

`</EntitySet>`
```

::: example
Example ##ex: binding `Supplier` on `Products` contained within
`Categories – binding applies to all suppliers of all products of all categories`
```
[[\<EntitySet Name=\"Categories\" EntityType=\"self.Category\"\>\
  \<NavigationPropertyBinding Path=\"Products/Supplier\"
]{style="color:black"}]{.Datatype}
:::

`                             Target="Suppliers" />`

`</EntitySet>`
```

## ##subsec Action Import

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

::: csdlHeadline
Element `edm:ActionImport`
:::

::: csdl
The `edm:ActionImport` element MUST contain the attributes `Name` and
`Action`, and it MAY contain the `EntitySet` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the action import's name.
:::

::: csdlHeadline
Attribute `Action`
:::

::: csdl
The value of `Action` is the qualified name of an unbound action.
:::

::: csdlHeadline
Attribute `EntitySet`
:::

::: csdl
The value of `EntitySet` is either the unqualified name of an entity set
in the same entity container or a path to an entity set in a different
entity container.
:::

## ##subsec Function Import

Function imports sets are top-level resources.

A function import is identified by its name, a [simple
identifier](#SimpleIdentifier) that MUST be unique within its entity
container.

A function import MUST specify the name of an unbound function in scope.
All unbound [overloads](#FunctionOverloads) of an imported function can
be invoked from the entity container.

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

::: csdlHeadline
Element `edm:FunctionImport`
:::

::: csdl
The `edm:FunctionImport` element MUST contain the attributes `Name` and
`Function`, and it MAY contain the attributes `EntitySet` and
`IncludeInServiceDocument`.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the function import's name.
:::

::: csdlHeadline
Attribute `Function`
:::

::: csdl
The value of `Function` is the qualified name of an unbound function.
:::

::: csdlHeadline
Attribute `EntitySet`
:::

::: csdl
The value of `EntitySet` is either the unqualified name of an entity set
in the same entity container or a path to an entity set in a different
entity container.
:::

::: csdlHeadline
Attribute `IncludeInServiceDocument`
:::

::: csdl
The value of `IncludeInServiceDocument` is one of the Boolean literals
`true` or `false`. Absence of the attribute means `false`.
:::

# ##sec Vocabulary and Annotation

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
an OData payload, such as described in [OData‑JSON](#BMJSON). An
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
[OData‑VocCore](#BMVocCore).

A [term](#Term) can be used to:
- Extend model elements and type instances
with additional information.
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

::: example
Example ##ex: the `Product` entity type is extended with a `DisplayName`
by a metadata annotation that binds the term `DisplayName` to the value
of the property `Name`. The `Product` entity type also includes an
annotation that allows its instances to be viewed as instances of the
type specified by the term `SearchResult`
```
[[\<EntityType Name=\"Product\"\>\
  \<Key\>]{style="color:black"}]{.Datatype}
:::

`    <PropertyRef Name="ID" />`

[[  \</Key\>\
  \<Property Name=\"ID\" Nullable=\"false\" Type=\"Edm.Int32\" /\>\
  \<Property Name=\"Name\" Type=\"Edm.String\" /\>\
  \<Property Name=\"Description\" Type=\"Edm.String\" /\>\
  ...  ]{style="color:black"}]{.Datatype}

[[  \<Annotation Term=\"UI.DisplayName\" Path=\"Name\" /\>\
  \<Annotation
Term=\"SearchVocabulary.SearchResult\"\>]{style="color:black"}]{.Datatype}

[[    \<Record\>\
      \<PropertyValue Property=\"Title\" Path=\"Name\" /\>\
      \<PropertyValue Property=\"Abstract\" Path=\"Description\" /\>\
      \<PropertyValue Property=\"Url\"\>\
        \<Apply Function=\"odata.concat\"\>\
          \<String\>Products(\</String\>\
          \<Path\>ID\</Path\>\
          \<String\>)\</String\>\
        \</Apply\>\
      \</PropertyValue\>]{style="color:black"}]{.Datatype}

[[    \</Record\>\
  \</Annotation\>\
\</EntityType\>]{style="color:black"}]{.Datatype}
```

## ##subsec Term

A term allows annotating a CSDL element or OData resource representation
with additional data.

The term's name is a [simple identifier](#SimpleIdentifier) that MUST be
unique within its schema.

The term's type MUST be a type in scope, or a collection of a type in
scope.

::: csdlHeadline
Element `edm:Term`
:::

::: csdl
The `edm:Term` element MUST contain the attributes `Name` and `Type`. It
MAY contain the attributes `BaseTerm` and `AppliesTo`.

It MAY specify values for the [`Nullable`](#Nullable),
[ ]{.apple-converted-space}[`MaxLength`](#MaxLength),
[`Precision`](#Precision), [`Scale`](#Scale), or [`SRID`](#SRID) facet
attributes, as well as the [`Unicode`](#Unicode) facet attribute for
4.01 and greater payloads. These facets and their implications are
described in section 7.2.

A `edm:Term` element whose `Type` attribute specifies a primitive or
enumeration type MAY define a value for the `DefaultValue` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the term's name.
:::

::: csdlHeadline
Attribute `Type`
:::

::: csdl
For single-valued properties the value of `Type` is the qualified name
of the property's type.

For collection-valued properties the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the property's
item type, followed by a closing parenthesis `)`.
:::

::: csdlHeadline
Attribute `DefaultValue`
:::

::: csdl
The value of this attribute determines the value of the term when
applied in an [`edm:Annotation`](#Annotation) without providing an
expression.

Default values of type `Edm.String` MUST be represented according to the
XML escaping rules for character data in attribute values. Values of
other primitive types MUST be represented according to the appropriate
alternative in the `primitiveValue` rule defined in
[OData‑ABNF](#BMABNF), i.e. `Edm.Binary` as `binaryValue`, `Edm.Boolean`
as `booleanValue` etc.

If no value is specified, the `DefaultValue` attribute defaults to
`null`.
:::

### ##subsubsec Specialized Term

A term MAY specialize another term in scope by specifying it as its base
type.

When applying a term with a base term, the base term MUST also be
applied with the same qualifier, and so on until a term without a base
term is reached.

::: csdlHeadline
Attribute `BaseTerm`
:::

::: csdl
The value of `BaseTerm` is the qualified name of the base term.
:::

### ##subsubsec Applicability

The applicability of a term MAY be restricted to a list of model
elements. If no list is supplied, the term is not intended to be
restricted in its application. The list of model elements MAY be
extended in future versions of the vocabulary. As the intended usage may
evolve over time, clients SHOULD be prepared for any term to be applied
to any model element and SHOULD be prepared to handle unknown values
within the `AppliesTo` attribute. Applicability is expressed using the
following symbolic values:

  **Symbolic Value**        **Model Element**
  ------------------------- -----------------------------------------------------------------
  `Action`                  Action
  `ActionImport`            Action Import
  `Annotation`              Annotation
  `Apply`                   Application of a client-side function in an annotation
  `Cast`                    Type Cast annotation expression
  `Collection`              Entity Set or collection-valued Property or Navigation Property
  `ComplexType`             Complex Type
  `EntityContainer`         Entity Container
  `EntitySet`               Entity Set
  `EntityType`              Entity Type
  `EnumType`                Enumeration Type
  `Function`                Function
  `FunctionImport`          Function Import
  `If`                      Conditional annotation expression
  `Include`                 Reference to an Included Schema
  `IsOf`                    Type Check annotation expression
  `LabeledElement`          Labeled Element expression
  `Member`                  Enumeration Member
  `NavigationProperty`      Navigation Property
  `Null`                    Null annotation expression
  `OnDelete`                On-Delete Action of a navigation property
  `Parameter`               Action of Function Parameter
  `Property`                Property of a structured type
  `PropertyValue`           Property value of a Record annotation expression
  `Record`                  Record annotation expression
  `Reference`               Reference to another CSDL document
  `ReferentialConstraint`   Referential Constraint of a navigation property
  `ReturnType`              Return Type of an Action or Function
  `Schema`                  Schema
  `Singleton`               Singleton
  `Term`                    Term
  `TypeDefinition`          Type Definition
  `UrlRef`                  UrlRef annotation expression

::: csdlHeadline
Attribute `AppliesTo`
:::

::: csdl
The value of `AppliesTo` is a whitespace-separated list of symbolic
values from the table above that identify model elements the term is
intended to be applied to.
:::

::: example
Example ##ex: the `IsURL` term can be applied to properties and terms that
are of type `Edm.String` (the `Core.Tag` type and the two `Core` terms
are defined in [OData‑VocCore](#BMVocCore))
```
[\<Term Name=\"IsURL\" Type=\"Core.Tag\" Nullable=\"false\"
DefaultValue=\"true\"\
      AppliesTo=\"Property Term\"\>\
  \<Annotation Term=\"Core.Description\"\>\
    \<String\>\
      Properties and terms annotated with this term MUST contain a valid
URL]{style="color:black"}
:::

[    \</String\>\
  \</Annotation\>]{style="color:black"}

  \<Annotation Term=\"Core.RequiresType\" String=\"Edm.String\" /\>

\</Term\>
```

## ##subsec Annotation

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

::: csdlHeadline
Element `edm:Annotation`
:::

::: csdl
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
:::

::: csdlHeadline
Attribute `Term`
:::

::: csdl
The value of `Term` is the qualified name of a [term](#Term) in scope.
:::

::: example
Example ##ex: term `Measures.ISOCurrency`, once applied with a constant
value, once with a path value
```
[[\<Property Name=\"AmountInReportingCurrency\" Type=\"Edm.Decimal\"\>\
  \<Annotation Term=\"Measures.ISOCurrency\"
String=\"USD\"\>]{style="color:black"}]{.Datatype}
:::

[[    \<Annotation Term=\"Core.Description\"\
                String=\"The parent company's currency\"
/\>]{style="color:black"}]{.Datatype}

`  </Annotation>`

`</Property>`

[[\<Property Name=\"AmountInTransactionCurrency\"
Type=\"Edm.Decimal\"\>\
  \<Annotation Term=\"Measures.ISOCurrency\" Path=\"Currency\"
/\>]{style="color:black"}]{.Datatype}

`</Property>`

`<Property Name="Currency" Type="Edm.String" MaxLength="3" />`
```

If an entity type or complex type is annotated with a term that itself
has a structured type, an instance of the annotated type may be viewed
as an "instance" of the term, and the qualified term name may be used as
a [term-cast segment](#ref_TermCast) in path expressions.

Structured types "inherit" annotations from their direct or indirect
base types. If both the type and one of its base types is annotated with
the same term and qualifier, the annotation on the type completely
replaces the annotation on the base type; structured or
collection-valued annotation values are not merged. Similarly,
properties of a structured type inherit annotations from identically
named properties of a base type.

It is up to the definition of a term to specify whether and how
annotations with this term propagate to places where the annotated model
element is used, and whether they can be overridden. E.g. a \"Label\"
annotation for a UI can propagate from a type definition to all
properties using that type definition and may be overridden at each
property with a more specific label, whereas an annotation marking a
type definition as containing a phone number will propagate to all using
properties but may not be overridden.

### ##subsubsec Qualifier

A term can be applied multiple times to the same model element by
providing a qualifier to distinguish the annotations. The qualifier is a
[simple identifier](#SimpleIdentifier).

The combination of target model element, term, and qualifier uniquely
identifies an annotation.

::: csdlHeadline
Attribute `Qualifier`
:::

::: csdl
Annotation elements that are children of an
[`edm:Annotations`](#AnnotationswithExternalTargeting) element MUST NOT
provide a value for the qualifier attribute if the parent
[`edm:Annotations`](#AnnotationswithExternalTargeting) element provides
a value for the qualifier attribute.
:::

::: example
Example ##ex: annotation should only be applied to tablet devices
```
[[\<Annotation Term=\"org.example.display.DisplayName\"
Path=\"FirstName\"\
            Qualifier=\"Tablet\" /\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Target

The target of an annotation is the model element the term is applied to.

The target of an annotation MAY be specified indirectly by "nesting" the
annotation within the model element. Whether and how this is possible is
described per model element in this specification.

The target of an annotation MAY also be specified directly; this allows
defining an annotation in a different schema than the targeted model
element.

This external targeting is only possible for model elements that are
uniquely identified within their parent, and all their ancestor elements
are uniquely identified within their parent:

-   [Action](#Action)[ (single or all overloads)]{style="color:black;
         background:white"}
-   [Action Import](#ActionImport)
-   [Annotation](#Annotation)
-   [Complex Type](#ComplexType)
-   [Entity Container](#EntityContainer)
-   [Entity Set](#EntitySet)
-   [Entity Type](#EntityType)
-   [Enumeration Type](#EnumerationType)
-   [Enumeration Type Member](#EnumerationTypeMember)
-   [Function](#Function)[ (single or all
    overloads)]{style="color:black;background:white"}
-   [Function Import](#FunctionImport)
-   [Navigation Property](#NavigationProperty) (via type, entity set, or
    singleton)
-   [Parameter](#Parameter)[ of an action or function (single overload
    or all overloads defining the
    parameter)]{style="color:black;background:white"}
-   [Property](#StructuralProperty) (via type, entity set, or singleton)
-   [Return Type](#ReturnType)[ of an action or function
    ([single]{#_Hlk523392241} or all
    overloads)]{style="color:black;background:white"}
-   [Singleton](#Singleton)
-   [Type Definition](#TypeDefinition)

These are the direct children of a schema with a unique name (i.e.
except actions and functions whose overloads to not possess a natural
identifier), and all direct children of an entity container.

External targeting is possible for actions, functions, their parameters,
and their return type, either in a way that applies to all overloads of
the action or function or all parameters of that name across all
overloads, or in a way that identifies a single overload.

External targeting is also possible for properties and navigation
properties of singletons or entities in a particular entity set. These
annotations override annotations on the properties or navigation
properties targeted via the declaring structured type.

The allowed path expressions are:
- [qualified name](#QualifiedName)
of schema child
- [qualified
name](#QualifiedName) of schema child followed by a forward slash and
name of child element
- [qualified
name](#QualifiedName) of structured type followed by zero or more
property, navigation property, or type-cast segments, each segment
starting with a forward slash
- [qualified
name](#QualifiedName) of an entity container followed by a segment
containing a singleton or entity set name and zero or more property,
navigation property, or type-cast segments
- [qualified
name](#QualifiedName)[ of an action followed by parentheses containing
the binding parameter *type* of a bound action overload to identify that
bound overload, or by empty parentheses to identify the unbound
overload]{style="color:black;background:white"}
- [qualified
name](#QualifiedName)[ of a function followed by parentheses containing
the comma-separated list of the parameter *types* of a bound or unbound
function overload in the order of their definition in the function
overload]{style="color:black;background:white"}
- [qualified
name](#QualifiedName) of an action or function, optionally followed by
parentheses as described in the two previous bullet points to identify a
single overload, followed by a forward slash and either a parameter name
or `$ReturnType`
- [qualified
name](#QualifiedName) of an entity container followed by a segment
containing an action or function import name, optionally followed by a
forward slash and either a parameter name or `$ReturnType`

-   One of the preceding, followed by a forward slash, an at (`@`), the
    [qualified name](#QualifiedName)[ of a term, and optionally a hash
    (]{style="color:black;background:white"}`#`) and the qualifier of an
    annotation

All [qualified names](#QualifiedName) used in a target path MUST be in
scope.

::: example
Example ##ex: Target expressions
```
MySchema.MyEntityType
:::

MySchema.MyEntityType/MyProperty

MySchema.MyEntityType/MyNavigationProperty

MySchema.MyComplexType

MySchema.MyComplexType/MyProperty

MySchema.MyComplexType/MyNavigationProperty

MySchema.MyEnumType

MySchema.MyEnumType/MyMember

MySchema.MyTypeDefinition

MySchema.MyTerm

MySchema.MyEntityContainer

MySchema.MyEntityContainer/MyEntitySet

MySchema.MyEntityContainer/MySingleton

MySchema.MyEntityContainer/MyActionImport

MySchema.MyEntityContainer/MyFunctionImport

MySchema.MyAction

MySchema.MyAction(MySchema.MyBindingType)

MySchema.MyAction(Collection(MySchema.MyBindingType))

MySchema.MyAction()

MySchema.MyFunction

MySchema.MyFunction(MySchema.MyBindingParamType,First.NonBinding.ParamType)

MySchema.MyFunction(First.NonBinding.ParamType,Second.NonBinding.ParamType)

MySchema.MyFunction/MyParameter

MySchema.MyEntityContainer/MyEntitySet/MyProperty

MySchema.MyEntityContainer/MyEntitySet/MyNavigationProperty

MySchema.MyEntityContainer/MyEntitySet/MySchema.MyEntityType/MyProperty

MySchema.MyEntityContainer/MyEntitySet/MySchema.MyEntityType/MyNavProperty

MySchema.MyEntityContainer/MyEntitySet/MyComplexProperty/MyProperty

MySchema.MyEntityContainer/MyEntitySet/MyComplexProperty/MyNavigationProperty

MySchema.MyEntityContainer/MySingleton/MyComplexProperty/MyNavigationProperty
```

## ##subsec Constant Expression

Constant expressions allow assigning a constant value to an applied
term.

### ##subsubsec Binary

::: csdlHeadline
Expression `edm:Binary`
:::

::: csdl
The `edm:Binary` expression evaluates to a primitive binary value. A
binary expression MUST be assigned a value conforming to the rule
`binaryValue` in [OData‑ABNF](#BMABNF).

The binary expression MAY be provided using element notation or
attribute notation.
:::

::: example
Example ##ex: base64url-encoded binary value (OData)
```
[[\<Annotation Term=\"org.example.display.Thumbnail\" Binary=\"T0RhdGE\"
/\>\
\
\<Annotation Term=\"org.example.display.Thumbnail\"\>\
  \<Binary\>T0RhdGE\</Binary\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Boolean

::: csdlHeadline
Expression `edm:Bool`
:::

::: csdl
The `edm:Bool` expression evaluates to a primitive Boolean value. A
Boolean expression MUST be assigned a Boolean value.

The Boolean expression MAY be provided using element notation or
attribute notation.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.ReadOnly\" Bool=\"true\" /\>\
\
\<Annotation Term=\"org.example.display.ReadOnly\"\>\
  \<Bool\>true\</Bool\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Date

::: csdlHeadline
Expression `edm:Date`
:::

::: csdl
The `edm:Date` expression evaluates to a primitive date value. A date
expression MUST be assigned a value of type `xs:date`, see
[**\[XML‑Schema‑2\]**](#BMXMLSchema2), [section
3.3.9](http://www.w3.org/TR/xmlschema11-2/#date). The value MUST also
conform to rule `dateValue` in [OData‑ABNF](#BMABNF), i.e. it MUST NOT
contain a time-zone offset.

The date expression MAY be provided using element notation or attribute
notation.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.vCard.birthDay\" Date=\"2000-01-01\"
/\>\
\
\<Annotation Term=\"org.example.vCard.birthDay\"\>\
  \<Date\>2000-01-01\</Date\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec DateTimeOffset

::: csdlHeadline
Expression `edm:DateTimeOffset`
:::

::: csdl
The `edm:DateTimeOffset` expression evaluates to a primitive
datetimestamp value with a time-zone offset. A datetimestamp expression
MUST be assigned a value of type `xs:dateTimeStamp`, see
[**\[XML‑Schema‑2\]**](#BMXMLSchema2), [section
3.4.28](http://www.w3.org/TR/xmlschema11-2/#dateTimeStamp). The value
MUST also conform to rule `dateTimeOffsetValue` in
[OData‑ABNF](#BMABNF), i.e. it MUST NOT contain an end-of-day fragment
(24:00:00).

The datetimestamp expression MAY be provided using element notation or
attribute notation`.`
:::

::: example
Example ##ex:
```
`<Annotation Term="org.example.display.LastUpdated" `
:::

[[            DateTimeOffset=\"2000-01-01T16:00:00.000Z\" /\>\
\
\<Annotation Term=\"org.example.display.LastUpdated\"\>\
  \<DateTimeOffset\>2000-01-01T16:00:00.000-09:00\</DateTimeOffset\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```

### ##subsubsec Decimal

::: csdlHeadline
Expression `edm:Decimal`
:::

::: csdl
The `edm:Decimal` expression evaluates to a primitive decimal value. A
decimal expression MUST be assigned a value conforming to the rule
`decimalValue` in [OData‑ABNF](#BMABNF).

The decimal expression MAY be provided using element notation or
attribute notation.
:::

::: example
Example ##ex: attribute notation
```
`<Annotation Term="org.example.display.Width" Decimal="3.14" />`
```
:::

::: example
Example ##ex: element notation
```
[[\<Annotation Term=\"org.example.display.Width\"\>\
  \<Decimal\>3.14\</Decimal\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Duration

::: csdlHeadline
Expression `edm:Duration`
:::

::: csdl
The `edm:Duration` expression evaluates to a primitive duration value. A
duration expression MUST be assigned a value of type
`xs:dayTimeDuration`, see [**\[XML‑Schema‑2\]**](#BMXMLSchema2),
[section 3.4.27](http://www.w3.org/TR/xmlschema11-2/#dayTimeDuration).

The duration expression MAY be provided using element notation or
attribute notation.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.task.duration\" Duration=\"P7D\" /\>\
\
\<Annotation Term=\"org.example.task.duration\"\>\
  \<Duration\>P11DT23H59M59.999999999999S\</Duration\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Enumeration Member

::: csdlHeadline
Expression `edm:EnumMember  `
:::

::: csdl
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

::: example
Example ##ex: single value
```
[[\<Annotation Term=\"org.example.HasPattern\"\
             EnumMember=\"org.example.Pattern/Red\" /\>\
\
\<Annotation Term=\"org.example.HasPattern\"\>\
  \<EnumMember\>org.example.Pattern/Red\</EnumMember\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

::: example
Example ##ex: combined value for `IsFlags` enumeration type
```
[[\<Annotation Term=\"org.example.HasPattern\"\
           EnumMember=\"org.example.Pattern/Red
org.example.Pattern/Striped\" /\>\
\
\<Annotation Term=\"org.example.HasPattern\"\>\
  \<EnumMember\>org.example.Pattern/Red
org.example.Pattern/Striped\</EnumMember\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Floating-Point Number

::: csdlHeadline
Expression `edm:Float`
:::

::: csdl
The `edm:Float` expression evaluates to a primitive floating point (or
double) value. A float expression MUST be assigned a value conforming to
the rule `doubleValue` in [OData‑ABNF](#BMABNF).

The float expression MAY be provided using element notation or attribute
notation.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.Width\" Float=\"3.14\" /\>\
\
\<Annotation Term=\"org.example.display.Width\"\>\
  \<Float\>3.14\</Float\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Guid

::: csdlHeadline
Expression `edm:Guid`
:::

::: csdl
The `edm:Guid` expression evaluates to a primitive guid value. A guid
expression MUST be assigned a value conforming to the rule `guidValue`
in [OData‑ABNF](#BMABNF).

The guid expression MAY be provided using element notation or attribute
notation`.`
:::

::: example
Example ##ex:
```
`<Annotation Term="org.example.display.Id" `
:::

[[            Guid=\"21EC2020-3AEA-1069-A2DD-08002B30309D\" /\>\
\
\<Annotation Term=\"org.example.display.Id\"\>\
  \<Guid\>21EC2020-3AEA-1069-A2DD-08002B30309D\</Guid\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```

### ##subsubsec Integer

::: csdlHeadline
Expression `edm:Int`
:::

::: csdl
The `edm:Int` expression evaluates to a primitive integer value. An
integer MUST be assigned a value conforming to the rule `int64Value` in
[OData‑ABNF](#BMABNF).

The integer expression MAY be provided using element notation or
attribute notation.
:::

::: example
Example ##ex: attribute notation
```
`<Annotation Term="org.example.display.Width" Int="42" />`
```
:::

::: example
Example ##ex: element notation
```
[[\<Annotation Term=\"org.example.display.Width\"\>\
  \<Int\>42\</Int\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec String

::: csdlHeadline
Expression `edm:String`
:::

::: csdl
The `edm:String` expression evaluates to a primitive string value. A
string expression MUST be assigned a value of the type `xs:string`, see
[**\[XML‑Schema‑2\]**](#BMXMLSchema2), [section
3.3.1](http://www.w3.org/TR/xmlschema11-2/#string).

The string expression MAY be provided using element notation or
attribute notation.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.DisplayName\" String=\"Product
Catalog\" /\>\
\
\<Annotation Term=\"org.example.display.DisplayName\"\>\
  \<String\>Product Catalog\</String\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Time of Day

::: csdlHeadline
Expression `edm:TimeOfDay`
:::

::: csdl
The `edm:TimeOfDay` expression evaluates to a primitive time value. A
time-of-day expression MUST be assigned a value conforming to the rule
`timeOfDayValue` in [OData‑ABNF](#BMABNF).

The time-of-day expression MAY be provided using element notation or
attribute notation.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.EndTime\"
TimeOfDay=\"21:45:00\" /\>\
\
\<Annotation Term=\"org.example.display.EndTime\"\>\
  \<TimeOfDay\>21:45:00\</TimeOfDay\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

## ##subsec Dynamic Expression

Dynamic expressions allow assigning a calculated value to an applied
term.

### ##subsubsec Path Expressions

Path expressions allow assigning a value to an applied term or term
component. There are two kinds of path expressions:
- [[A *model path* is used within
]{style="font-family:\"Arial\",sans-serif"}]{.Datatype}[Annotation
Path](#AnnotationPath), [Model Element Path](#ModelElementPath),
[Navigation Property Path](#NavigationPropertyPath), and [Property
Path](#PropertyPath) expressions to traverse the model of a service and
resolves to the model element identified by the path. It allows
assigning values to terms or term properties of the [built-in
types](#BuiltInTypesfordefiningVocabularyTer) `Edm.AnnotationPath`,
`Edm.NavigationPropertyPath`, `Edm.PropertyPath`, and their base types
`Edm.AnyPropertyPath` and `Edm.ModelElementPath`.
- An *instance path* is used within a
[Value Path](#ValuePath) expression to traverse a graph of type
instances and resolves to the value identified by the path. It allows
assigning values to terms or term properties of built-in types other
than the `Edm.*Path` types, or of any model-defined type.

#### ##subsubsubsec Path Syntax

Model paths and instance paths share a common syntax which is derived
from the path expression syntax of URLs, see [OData‑URL](#BMURL).

A path MUST be composed of zero or more path segments joined together by
forward slashes (`/`).

Paths starting with a forward slash (`/`) are absolute paths, and the
first path segment MUST be the qualified name of a model element, e.g.
an entity container. The remaining path after the second forward slash
is interpreted relative to that model element.

::: example
Example ##ex: absolute path to an entity set
```
/self.MyEntityContainer/MyEntitySet
```
:::

Paths not starting with a forward slash are interpreted relative to the
annotation target, following the rules specified in section "[Path
Evaluation](#PathEvaluation)".

::: example
Example ##ex: relative path to a property
```
Address/City
```
:::

If a path segment is a [qualified name](#QualifiedName), it represents a
[*type cast*]{#ref_TypeCast}, and the segment MUST be the name of a type
in scope. If the type or instance identified by the preceding path part
cannot be cast to the specified type, the path expression evaluates to
the null value.

::: example
Example ##ex: type-cast segment
```
.../self.Manager/...
```
:::

If a path segment starts with an at (`@`) character, it represents a
[*term cast*]{#ref_TermCast}. The at (`@`) character MUST be followed by
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
Example ##ex: term-cast segment
```
.../@Capabilities.SortRestrictions/...
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
Example ##ex: property segment in model path
```
.../Orders/Items/Product/...
```
:::

An instance path MUST NOT contain more than one segment representing a
collection-valued construct, e.g. an entity set or a collection-valued
navigation property that is not followed by a key predicate, or a
collection-valued structural property that is not followed by an index
segment. The result of the expression is the collection of instances
resulting from applying any remaining segments that operate on a
single-valued expression to each instance in the collection-valued
segment.

An instance path MAY terminate in a `$count` segment if the previous
segment is collection-valued, in which case the path evaluates to the
number of items in the collection identified by the preceding segment.

::: example
Example ##ex: property segments in instance path
```
.../Addresses/Street
:::

.../Addresses/\$count
```

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
segment](#ref_TermCast).

::: example
Example ##ex: model path addressing an annotation on a navigation property
```
.../Items@Capabilities.InsertRestrictions/Insertable
```
:::

An instance path MAY contain path segments starting with an entity set
or a collection-valued navigation property, then followed by a key
predicate using parentheses-style convention, see [OData‑URL](#BMURL).
The key values are either primitive literals or instance paths. If the
key value is a relative instance path, it is interpreted according to
the same rule below as the instance path it is part of, *not* relative
to the instance identified by the preceding path part.

::: example
Example ##ex: instance path with entity set and key predicate
```
/self.container/SettingsCollection(\'FeatureXxx\')/IsAvailable
:::

/self.container/Products(ID=ProductID)/Name
```

An instance path MAY contain an index segment immediately following a
path segment representing an ordered collection-valued structural
property. The index is zero-based and MUST be an integer literal.
Negative integers count from the end of the collection, with -1
representing the last item in the collection. Remaining path segments
are evaluated relative to the identified item of the collection.

::: example
Example ##ex: instance path with collection-valued structural property and
index segment
```
Addresses/1
:::

Addresses/-1/Street
```

#### ##subsubsubsec Path Evaluation

Annotations MAY be embedded within their target, or specified
separately, e.g. as part of a different schema, and specify a path to
their target model element. The latter situation is referred to as
*targeting* in the remainder of this section.

For annotations embedded within or targeting an entity container, the
path is evaluated starting at the entity container, i.e. an empty path
resolves to the entity container, and non-empty paths MUST start with a
segment identifying a container child (entity set, function import,
action import, or singleton). The subsequent segments follow the rules
for path expressions targeting the corresponding child element.

For annotations embedded within or targeting an entity set or a
singleton, the path is evaluated starting at the entity set or
singleton, i.e. an empty path resolves to the entity set or singleton,
and non-empty paths MUST follow the rules for annotations targeting the
declared entity type of the entity set or singleton.

For annotations embedded within or targeting an entity type or complex
type, the path is evaluated starting at the type, i.e. an empty path
resolves to the type, and the first segment of a non-empty path MUST be
a structural or navigation property of the type, a [type
cast](#ref_TypeCast), or a [term cast](#ref_TermCast).

For annotations embedded within a structural or navigation property of
an entity type or complex type, the path is evaluated starting at the
directly enclosing type. This allows e.g. specifying the value of an
annotation on one property to be calculated from values of other
properties of the same type. An empty path resolves to the enclosing
type, and non-empty paths MUST follow the rules for annotations
targeting the directly enclosing type.

For annotations targeting a structural or navigation property of an
entity type or complex type, the path is evaluated starting at the
*outermost* entity type or complex type named in the target of the
annotation, i.e. an empty path resolves to the outermost type, and the
first segment of a non-empty path MUST be a structural or navigation
property of the outermost type, a [type cast](#ref_TypeCast), or a [term
cast](#ref_TermCast).

For annotations embedded within or targeting an action, action import,
function, function import, parameter, or return type, the first segment
of the path MUST be a parameter name or `$ReturnType`.

#### ##subsubsubsec Annotation Path

The annotation path expression provides a value for terms or term
properties that specify the [built-in
types](#BuiltInTypesfordefiningVocabularyTer)
`Edm.AnnotationPath or Edm.ModelElementPath`. Its argument is a [model
path](#PathExpressions) with the following restriction:
- `A non-null path MUST resolve to an annotation. `

A term or term property of type `Edm.AnnotationPath` can be annotated
with term `Validation.AllowedTerms` (see
[OData-VocValidation](#BMVocValidation)) if its intended value is an
annotation path that ends in a term cast with one of the listed terms.

The value of the annotation path expression is the path itself, not the
value of the annotation identified by the path. This is useful for terms
that reuse or refer to other terms.

::: csdlHeadline
Expression `edm:AnnotationPath`
:::

::: csdl
The `edm:AnnotationPath` expression MAY be provided using element
notation or attribute notation.
:::

::: example
Example ##ex:
```
[\<Annotation Term=\"UI.ReferenceFacet\"\
            AnnotationPath=\"Product/Supplier/@UI.LineItem\" /\>
]{style="color:black"}
:::

 

\<Annotation Term=\"UI.CollectionFacet\" Qualifier=\"Contacts\"\>

  \<Collection\>

    \<AnnotationPath\>Supplier/@Communication.Contact\</AnnotationPath\>

    \<AnnotationPath\>Customer/@Communication.Contact\</AnnotationPath\>

  \</Collection\>

\</Annotation\>
```

#### ##subsubsubsec Model Element Path

The model element path expression provides a value for terms or term
properties that specify the [built-in
type](#BuiltInTypesfordefiningVocabularyTer)` Edm.ModelElementPath`. Its
argument is a [model path](#PathExpressions).

The value of the model element path expression is the path itself, not
the instance(s) identified by the path.

::: csdlHeadline
Expression `edm:ModelElementPath`
:::

::: csdl
The `edm:ModelElementPath` expression MAY be provided using element
notation or attribute notation.
:::

::: example
Example ##ex:
```
`<Annotation Term="org.example.MyFavoriteModelElement" `
:::

`            ModelElementPath="/org.example.someAction" /> `

` `

`<Annotation Term="org.example.MyFavoriteModelElement"> `

`  <ModelElementPath>/org.example.someAction</ModelElementPath> `

`</Annotation>`
```

#### ##subsubsubsec Navigation Property Path

The navigation property path expression provides a value for terms or
term properties that specify the [built-in
types](#BuiltInTypesfordefiningVocabularyTer)
`Edm.NavigationPropertyPath, Edm.AnyPropertyPath, or Edm.ModelElementPath`.
Its argument is a [model path](#PathExpressions) with the following
restriction:
- A non-null path MUST resolve to a model
element whose type is an entity type, or a collection of entity types,
e.g. a navigation property.

The value of the navigation property path expression is the path itself,
not the instance(s) identified by the path.

::: csdlHeadline
Expression `edm:NavigationPropertyPath`
:::

::: csdl
The `edm:NavigationPropertyPath` expression MAY be provided using
element notation or attribute notation.
:::

::: example
Example ##ex:
```
`<Annotation Term="UI.HyperLink" NavigationPropertyPath="Supplier" />`
:::

` `

`<Annotation Term="Capabilities.UpdateRestrictions">`

[[  \<Record\>\
    \<PropertyValue
Property=\"NonUpdatableNavigationProperties\"\>]{style="color:black"}]{.Datatype}

`      <Collection>`

`        <NavigationPropertyPath>Supplier</NavigationPropertyPath>`

`        <NavigationPropertyPath>Category</NavigationPropertyPath>`

`      </Collection>`

`    </PropertyValue>`

`  </Record>`

`</Annotation>`
```

#### ##subsubsubsec Property Path

The property path expression provides a value for terms or term
properties that specify one of the [built-in
types](#BuiltInTypesfordefiningVocabularyTer)
`Edm.PropertyPath, Edm.AnyPropertyPath, or Edm.ModelElementPath`. Its
argument is a [model path](#PathExpressions) with the following
restriction:
- A non-null path MUST resolve to a model
element whose type is a primitive or complex type, an enumeration type,
a type definition, or a collection of one of these types.

The value of the property path expression is the path itself, not the
value of the property or the value of the term cast identified by the
path.

::: csdlHeadline
Expression `edm:PropertyPath`
:::

::: csdl
The `edm:PropertyPath` MAY be provided using either element notation or
attribute notation.
:::

::: example
Example ##ex:
```
`<Annotation Term="UI.RefreshOnChangeOf" PropertyPath="ChangedAt" />`
:::

` `

[[\<Annotation Term=\"Capabilities.UpdateRestrictions\"\>\
  \<Record\>\
    \<PropertyValue
Property=\"NonUpdatableProperties\"\>]{style="color:black"}]{.Datatype}

`      <Collection>`

`        <PropertyPath>CreatedAt</PropertyPath>`

`        <PropertyPath>ChangedAt</PropertyPath>`

`      </Collection>`

`    </PropertyValue>`

`  </Record>`

`</Annotation>`
```

#### ##subsubsubsec Value Path

The` value path` expression allows assigning a value by traversing an
object graph. It can be used in annotations that target entity
containers, entity sets, entity types, complex types, navigation
properties of structured types, and properties of structured types. Its
argument is an [instance path](#PathExpressions).

The value of the path expression is the instance or collection of
instances identified by the path.

::: csdlHeadline
Expression `edm:Path`
:::

::: csdl
The `edm:Path` expression MAY be provided using element notation or
attribute notation.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.DisplayName\"
Path=\"FirstName\" /\>\
\
\<Annotation Term=\"org.example.display.DisplayName\"\>\
  \<Path\>@vCard.Address#work/FullName\</Path\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Comparison and Logical Operators

Annotations MAY use the following logical and comparison expressions
which evaluate to a Boolean value. These expressions MAY be combined and
they MAY be used anywhere instead of a Boolean expression.

  **Operator**               **Description**
  -------------------------- -------------------------------
  **Logical Operators**      
  `And`                      `Logical and`
  `Or`                       `Logical or`
  `Not`                      `Logical negation`
  **Comparison Operators**   
  `Eq`                       `Equal`
  `Ne`                       `Not equal`
  `Gt`                       `Greater than`
  `Ge`                       `Greater than or equal`
  `Lt`                       Less than
  `Le`                       `Less than or equal`
  `Has`                      `Has enumeration flag(s) set`
  `In`                       `Is in collection`

The `And` and `Or` operators require two operand expressions that
evaluate to Boolean values. The `Not` operator requires a single operand
expression that evaluates to a Boolean value. For details on null
handling for comparison operators see [OData‑URL](#BMURL).

The other comparison operators require two operand expressions that
evaluate to comparable values.

::: csdlHeadline
`Expressions edm:And and edm:Or`
:::

::: csdl
The `And` and `Or` logical expressions are represented as elements
`edm:And` and `edm:Or` that MUST contain two annotation expressions.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
[`Expression `]{#_Toc37318965}`edm:Not`
:::

::: csdl
Negation expressions are represented as an element `edm:Not` that MUST
contain a single annotation expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
[`Expressions `]{#_Toc37318966}`edm:Eq, edm:Ne, edm:Gt, edm:Ge, edm:Lt, edm:Le, edm:Has, and edm:In`
:::

::: csdl
All comparison expressions are represented as an element that MUST
contain two annotation expressions.

They MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: example
Example ##ex:
```
`<And>`
:::

`  <Path>IsMale</Path>`

`  <Path>IsMarried</Path>`

`</And>`

`<Or>`

`  <Path>IsMale</Path>`

`  <Path>IsMarried</Path>`

`</Or>`

`<Not>`

`  <Path>IsMale</Path>`

`</Not>`

`<Eq>`

`  <Null />`

`  <Path>IsMale</Path>`

`</Eq>`

`<Ne>`

`  <Null />`

`  <Path>IsMale</Path>`

`</Ne>`

`<Gt>`

`  <Path>Price</Path>`

`  <Int>20</Int>`

`</Gt>`

`<Ge>`

`  <Path>Price</Path>`

`  <Int>10</Int>`

`</Ge>`

`<Lt>`

`  <Path>Price</Path>`

`  <Int>20</Int>`

`</Lt>`

`<Le>`

`  <Path>Price</Path>`

`  <Int>100</Int>`

`</Le>`

`<Has>`

`  <Path>Fabric</Path>`

`  <EnumMember>org.example.Pattern/Red</EnumMember>`

`</Has>`

`<In>`

`  <Path>Size</Path>`

`  <Collection>`

`    <String>XS</String>`

`    <String>S</String>`

`  </Collection>`

`</In>`
```

### ##subsubsec Arithmetic Operators

Annotations MAY use the following arithmetic expressions which evaluate
to a numeric value. These expressions MAY be combined, and they MAY be
used anywhere instead of a numeric expression of the appropriate type.
The semantics and evaluation rules for each arithmetic expression is
identical to the corresponding arithmetic operator defined in
[OData‑URL](#BMURL).

  **Operator**   **Description**
  -------------- ---------------------------------------------------------------
  `Add`          `Addition`
  `Sub`          `Subtraction`
  `Neg`          `Negation`
  `Mul`          `Multiplication`
  `Div`          `Division (with integer result for integer operands)`
  `DivBy`        `Division (with fractional result also for integer operands)`
  `Mod`          `Modulo`

The `Neg` operator requires a single operand expression that evaluates
to a numeric value. The other arithmetic operators require two operand
expressions that evaluate to numeric values.

::: csdlHeadline
[`Expression `]{#_Toc37318967}`edm:Neg`
:::

::: csdl
Negation expressions are represented as an element `edm:Neg` that MUST
contain a single annotation expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
[`Expressions `]{#_Toc37318968}`edm:Add, edm:Sub, edm:Mul, edm:Div, edm:DivBy, and edm:Mod`
:::

::: csdl
These arithmetic expressions are represented as an element that MUST
contain two annotation expressions.

They MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: example
Example ##ex:
```
`<Add>`
:::

`  <Path>StartDate</Path>`

`  <Path>Duration</Path>`

`</Add>`

`<Sub>`

`  <Path>Revenue</Path>`

`  <Path>Cost</Path>`

`</Sub>`

`<Neg>`

`  <Path>Height</Path>`

`</Neg>`

`<Mul>`

`  <Path>NetPrice</Path>`

`  <Path>TaxRate</Path>`

`</Mul>`

`<Div>`

`  <Path>Quantity</Path>`

`  <Path>QuantityPerParcel</Path>`

`</Div>`

`<DivBy>`

`  <Path>Quantity</Path>`

`  <Path>QuantityPerParcel</Path>`

`</DivBy>`

`<Mod>`

`  <Path>Quantity</Path>`

`  <Path>QuantityPerParcel</Path>`

`</Mod>`
```

### ##subsubsec Apply Client-Side Function

The apply expression enables a value to be obtained by applying a
client-side function. The apply expression MAY have operand expressions.
The operand expressions are used as parameters to the function.

::: csdlHeadline
Expression `edm:Apply`
:::

::: csdl
The `edm:Apply` element MUST contain the `Function` attribute and MAY
contain annotation expressions as operands for the applied function.

It MAY contain more [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Function`
:::

::: csdl
The value of `Function` is the [qualified name](#QualifiedName) of the
client-side function to apply.
:::

OData defines the following functions. Services MAY support additional
functions that MUST be qualified with a namespace or alias other than
`odata`. Function names qualified with `odata` are reserved for this
specification and its future versions.

#### ##subsubsubsec Canonical Functions

All canonical functions defined in [OData‑URL](#BMURL) can be used as
client-side functions, qualified with the namespace `odata`. The
semantics of these client-side functions is identical to their
counterpart function defined in [OData‑URL](#BMURL).

For example, the `odata.concat` client-side function takes two or more
expressions as arguments. Each argument MUST evaluate to a primitive or
enumeration type. It returns a value of type `Edm.String` that is the
concatenation of the literal representations of the results of the
argument expressions. Values of primitive types other than `Edm.String`
are represented according to the appropriate alternative in the
`primitiveValue` rule of [OData‑ABNF](#BMABNF), i.e. `Edm.Binary` as
`binaryValue`, `Edm.Boolean` as `booleanValue` etc.

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.DisplayName\"\>\
  \<Apply Function=\"odata.concat\"\>\
    \<String\>Product: \</String\>\
    \<Path\>ProductName\</Path\>\
    \<String\> (\</String\>\
   
\<Path\>Available/Quantity\</Path\>]{style="color:black"}]{.Datatype}
:::

[[    \<String\> \</String\>\
    \<Path\>Available/Unit\</Path\>]{style="color:black"}]{.Datatype}

`    <String> available)</String>`

[[  \</Apply\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```

`ProductName` is of type `String`, `Quantity` in complex type
`Available` is of type `Decimal`, and `Unit` in `Available` is of type
enumeration, so the result of the `Path` expression is represented as
the member name of the enumeration value.

#### ##subsubsubsec [Function `odata.fillUriTemplate`](#FunctionodatafillUriTemplate)

The `odata.fillUriTemplate` client-side function takes two or more
expressions as arguments and returns a value of type `Edm.String.`

The first argument MUST be of type `Edm.String` and specifies a URI
template according to [RFC6570](#BMRFC6570), the other arguments MUST be
[labeled element expressions](#LabeledElement). Each [labeled element
expression](#LabeledElement) specifies the template parameter name in
its `Name` attribute and evaluates to the template parameter value.

[RFC6570](#BMRFC6570) defines three kinds of template parameters: simple
values, lists of values, and key-value maps.

Simple values are represented as [labeled element
expressions](#LabeledElement) that evaluate to a single primitive value.
The literal representation of this value according to
[OData‑ABNF](#BMABNF) is used to fill the corresponding template
parameter.

Lists of values are represented as [labeled element
expressions](#LabeledElement) that evaluate to a collection of primitive
values.

Key-value maps are represented as [labeled element
expressions](#LabeledElement) that evaluate to a collection of complex
types with two properties that are used in lexicographic order. The
first property is used as key, the second property as value.

::: example
Example ##ex: assuming there are no special characters in values of the
`Name property of the Actor` entity
```
\<Apply Function=\"odata.fillUriTemplate\"\>
:::

  \<String\>http://host/someAPI/Actors/{actorName}/CV\</String\>

  \<LabeledElement Name=\"actorName\" Path=\"Actor/Name\" /\>

\</Apply\>
```

#### ##subsubsubsec [Function `odata.matchesPattern`](#FunctionodatamatchesPattern)

The `odata.matchesPattern` client-side function takes two string
expressions as arguments and returns a Boolean value`.`

The function returns true if the second expression evaluates to an
[**\[ECMAScript\]**](#ECMAScript) (JavaScript) regular expression and
the result of the first argument expression matches that regular
expression, using syntax and semantics of
[**\[ECMAScript\]**](#ECMAScript) regular expressions.

::: example
Example ##ex: all non-empty `FirstName` values not containing the letters
`b`, `c`, or `d` evaluate to `true`
```
\<Apply Function=\"odata.matchesPattern\"\>
:::

  \<Path\>FirstName\</Path\>

  \<String\>\^\[\^b-d\]+\$\</String\>

\</Apply\>
```

#### ##subsubsubsec [Function `odata.uriEncode`](#FunctionodatauriEncode)

The `odata.uriEncode `client-side function takes one argument of
primitive type and returns the URL-encoded OData literal that can be
used as a key value in OData URLs or in the query part of OData URLs.

Note: string literals are surrounded by single quotes as required by the
paren-style key syntax.

::: example
Example ##ex:
```
\<Apply Function=\"odata.fillUriTemplate\"\>
:::

  \<String\>http://host/service/Genres({genreName})\</String\>

  \<LabeledElement Name=\"genreName\"\>

    \<Apply Function=\"odata.uriEncode\" \>

      \<Path\>NameOfMovieGenre\</Path\>

    \</Apply\>

  \</LabeledElement\>

\</Apply\>
```

### ##subsubsec Cast

The cast expression casts the value obtained from its single child
expression to the specified type. The cast expression follows the same
rules as the `cast` canonical function defined in [OData‑URL](#BMURL).

::: csdlHeadline
Expression `edm:Cast`
:::

::: csdl
The `edm:Cast` element MUST contain the `Type` attribute and MUST
contain exactly one expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Type`
:::

::: csdl
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

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.Threshold\"\>\
  \<Cast Type=\"Edm.Decimal\"\>\
    \<Path\>Average\</Path\>\
  \</Cast\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Collection

The collection expression enables a value to be obtained from zero or
more item expressions. The value calculated by the collection expression
is the collection of the values calculated by each of the item
expressions. The values of the child expressions MUST all be type
compatible.

::: csdlHeadline
Expression `edm:Collection`
:::

::: csdl
The `edm:Collection` element contains zero or more child expressions.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.seo.SeoTerms\"\>\
  \<Collection\>\
    \<String\>Product\</String\>\
    \<String\>Supplier\</String\>\
    \<String\>Customer\</String\>\
  \</Collection\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec If-Then-Else

The if-then-else expression enables a value to be obtained by evaluating
a *condition expression*. It MUST contain exactly three child
expressions. There is one exception to this rule: if and only if the
if-then-else expression is a direct child of a collection expression`,`
the third child expression MAY be omitted, reducing it to an if-then
expression. This can be used to conditionally add an element to a
collection.

The first child element is the condition and MUST evaluate to a Boolean
result, e.g. the [comparison and logical
operators](#ComparisonandLogicalOperators) can be used.

The second and third child elements are evaluated conditionally. The
result MUST be type compatible with the type expected by the surrounding
expression.

If the first expression evaluates to `true`, the second expression MUST
be evaluated and its value MUST be returned as the result of the
if-then-else expression. If the first expression evaluates to `false`
and a third child element is present, it MUST be evaluated and its value
MUST be returned as the result of the if-then-else expression. If no
third child element is present, nothing is added to the surrounding
collection.

::: csdlHeadline
Expression `edm:If`
:::

::: csdl
The `edm:If` element MUST contain two or three child expressions that
MUST use element notation.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: example
Example ##ex: the condition is a [value path expression](#ValuePath)
referencing the Boolean property `IsFemale` ,whose value then determines
the value of the `edm:If` expression
```
[[\<Annotation Term=\"org.example.person.Gender\"\>\
  \<If\>\
    \<Path\>IsFemale\</Path\>\
    \<String\>Female\</String\>\
    \<String\>Male\</String\>\
  \</If\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Is-Of

The is-of expression checks whether the value obtained from its single
child expression is compatible with the specified type. It returns
`true` if the child expression returns a type that is compatible with
the specified type, and `false` otherwise.

::: csdlHeadline
Expression `edm:IsOf`
:::

::: csdl
The `edm:IsOf` element MUST contain the `Type` attribute and MUST
contain exactly one child expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Type`
:::

::: csdl
The value of `Type` is the qualified name of a type in scope, or the
character sequence `Collection(` followed by the qualified name of a
type in scope, followed by a closing parenthesis `)`.

If the specified type is a primitive type or a collection of a primitive
type, the facet attributes [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale), and
[`SRID`](#SRID) MAY be specified if applicable to the specified
primitive type. If the facet attributes are not specified, their values
are considered unspecified.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"self.IsPreferredCustomer\"\>\
  \<IsOf Type=\"self.PreferredCustomer\"\>\
    \<Path\>Customer\</Path\>\
  \</IsOf\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec [Labeled Element](#LabeledElement)

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

::: csdlHeadline
Expression `edm:LabeledElement`
:::

::: csdl
The `edm:LabeledElement` element MUST contain the Name attribute.

It MUST contain a child expression written either in attribute notation
or element notation.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Name`
:::

::: csdl
The value of `Name` is the labeled element's name.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.DisplayName\"\>\
  \<LabeledElement Name=\"CustomerFirstName\" Path=\"FirstName\" /\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
:::

` `

[[\<Annotation Term=\"org.example.display.DisplayName\"\>\
  \<LabeledElement Name=\"CustomerFirstName\"\>\
    \<Path\>FirstName\</Path\>\
  \</LabeledElement\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```

### ##subsubsec Labeled Element Reference

The labeled element reference expression MUST specify the [qualified
name](#QualifiedName) of a [labeled element expression](#LabeledElement)
in scope and returns the value of the identified labeled element
expression as its value.

::: csdlHeadline
Expression `edm:LabeledElementReference`
:::

::: csdl
The edm:LabeledElementReference element MUST contain the qualified name
of a labeled element expression in its body.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.DisplayName\"\>\
 
\<LabeledElementReference\>Model.CustomerFirstName\</LabeledElementReference\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

### ##subsubsec Null

The null expression indicates the absence of a value. The null
expression MAY be annotated.

The null expression MUST be written with element notation.

::: csdlHeadline
Expression `edm:Null`
:::

::: csdl
The edm:Null element MAY contain [`edm:Annotation`](#Annotation)
elements.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.display.DisplayName\"\>\
  \<Null/\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```
:::

::: example
Example ##ex:
```
`<Annotation Term="@UI.Address">`
:::

`  <Null>`

`    <Annotation Term="self.Reason" String="Private" />`

`  </Null>`

`</Annotation>`
```

### ##subsubsec Record

The record expression enables a new entity type or complex type instance
to be constructed.

A record expression MAY specify the structured type of its result, which
MUST resolve to an entity type or complex type in scope. If not
explicitly specified, the type is derived from the expression's context.

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

::: csdlHeadline
Expression `edm:Record`
:::

::: csdl
The `edm:Record` element MAY contain the `Type` attribute and MAY
contain `edm:PropertyValue` elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Type`
:::

::: csdl
The value of `Type` is the qualified name of a structured type in scope.
:::

::: csdlHeadline
Element `edm:PropertyValue`
:::

::: csdl
The `edm:PropertyValue` element MUST contain the `Property` attribute,
and it MUST contain exactly one expression that MAY be provided using
either element notation or attribute notation.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: csdlHeadline
Attribute `Property`
:::

::: csdl
The value of `Property` is the name of a property of the type of the
enclosing `edm:Record` expression.
:::

::: example
Example ##ex: this annotation "morphs" the entity type from example 8 into
a structured type with two structural properties `GivenName` and
`Surname` and two navigation properties `DirectSupervisor` and
`CostCenter`. The first three properties simply rename properties of the
annotated entity type, the fourth adds a calculated navigation property
that is pointing to a different service
```
[[\<Annotation Term=\"org.example.person.Employee\"\>\
  \<Record\>\
    \<Annotation Term=\"Core.Description\" String=\"Annotation on
record\" /\>]{style="color:black"}]{.Datatype}
:::

`    <PropertyValue Property="GivenName" Path="FirstName">`

`      <Annotation Term="Core.Description" `

`                  String="Annotation on record member" />`

[[    \</PropertyValue\>\
    \<PropertyValue Property=\"Surname\" Path=\"LastName\"
/\>]{style="color:black"}]{.Datatype}

`    <PropertyValue Property="DirectSupervisor" Path="Manager" />`

`    <PropertyValue Property="CostCenter">`

`      <UrlRef>`

`        <Apply Function="odata.fillUriTemplate">`

`          <String>http://host/anotherservice/CostCenters('{ccid}')</String> `

`          <LabeledElement Name="ccid" Path="CostCenterID" /> `

`        </Apply> `

`      </UrlRef>`

[[    \</PropertyValue\>\
  \</Record\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
```

### ##subsubsec URL Reference

The URL reference expression enables a value to be obtained by sending a
`GET` request.

The URL reference expression MUST contain exactly one expression of type
`Edm.String`. Its value is treated as a URL that MAY be relative or
absolute; relative URIs are relative to the URL of the document
containing the URL reference expression, or relative to a base URL
specified in a format-specific way.

The response body of the `GET` request MUST be returned as the result of
the` `URL reference expression. The result of the` edm:UrlRef`
expression MUST be type compatible with the type expected by the
surrounding element or expression.

::: csdlHeadline
Expression `edm:UrlRef`
:::

::: csdl
The `edm:UrlRef` expression MAY be provided using element notation or
attribute notation.

Relative URLs are relative to the `xml:base` attribute, see
[**\[XML‑Base\]**](#BMXMLBase).

In element notation it MAY contain [`edm:Annotation`](#Annotation)
elements.
:::

::: example
Example ##ex:
```
[[\<Annotation Term=\"org.example.person.Supplier\"\>\
  \<UrlRef\>\
    \<Apply Function=\"odata.fillUriTemplate\"\>\
      \<String\>http://host/service/Suppliers({suppID})\</String\>\
      \<LabeledElement Name=\"suppID\"\>\
      \<Apply Function=\"odata.uriEncode\"\>\
        \<Path\>SupplierId\</Path\>\
      \</Apply\>\
      \</LabeledElement\>\
     \</Apply\>\
  \</UrlRef\>\
\</Annotation\>]{style="color:black"}]{.Datatype}
:::

` `

`<Annotation Term="Core.LongDescription">`

`  <UrlRef><String>http://host/wiki/HowToUse</String></UrlRef>`

`</Annotation>`

` `

`<Annotation Term="Core.LongDescription" UrlRef="http://host/wiki/HowToUse" />`
```

# ##sec Identifier and Path Values

## ##subsec Namespace

A namespace is a dot-separated sequence of [simple
identifier](#SimpleIdentifier)s with a maximum length of 511 Unicode
characters (code points).

## ##subsec Simple Identifier

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

## ##subsec Qualified Name

For model elements that are direct children of a schema: the namespace
or alias of the schema that defines the model element, followed by a dot
and the name of the model element, see rule `qualifiedTypeName` in
[OData‑ABNF](#BMABNF).

For built-in [primitive types](#PrimitiveTypes): the name of the type,
prefixed with `Edm` followed by a dot.

## ##subsec Target Path

Target paths are used in attributes of CSDL elements to refer to other
CSDL elements or their nested child elements.

The allowed path expressions are:
- The [qualified
name](#QualifiedName) of an entity container, followed by a forward
slash and the name of a container child element
- The target
path of a container child followed by a forward slash and one or more
forward-slash separated property, navigation property, or type-cast
segments

::: example
Example ##ex: Target expressions
```
MySchema.MyEntityContainer/MyEntitySet
:::

MySchema.MyEntityContainer/MySingleton

MySchema.MyEntityContainer/MySingleton/MyContainmentNavigationProperty

MySchema.MyEntityContainer/MySingleton/My.EntityType/MyContainmentNavProperty

MySchema.MyEntityContainer/MySingleton/MyComplexProperty/MyContainmentNavProp
```

# ##sec CSDL Examples

Following are two basic examples of valid EDM models as represented in
CSDL. These examples demonstrate many of the topics covered above.

## ##subsec [Products and Categories Example](#ProductsandCategoriesExample)

::: example
Example ##ex:
```
`<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"`
:::

[[           xmlns=\"http://docs.oasis-open.org/odata/ns/edm\"
Version=\"4.0\"\>\
  \<edmx:Reference
Uri=\"https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml\"\>]{style="color:black"}]{.Datatype}

`    <edmx:Include Namespace="Org.OData.Core.V1" Alias="Core">`

`      <Annotation Term="Core.DefaultNamespace" />`

`    </edmx:Include>`

`  </edmx:Reference>`

`  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Measures.V1.xml">`

`    <edmx:Include Alias="Measures" Namespace="Org.OData.Measures.V1" />`

`  </edmx:Reference>`

[[  \<edmx:DataServices\>\
    \<Schema Namespace=\"ODataDemo\"\>\
      \<EntityType Name=\"Product\" HasStream=\"true\"\>\
        \<Key\>\
          \<PropertyRef Name=\"ID\" /\>\
        \</Key\>\
        \<Property Name=\"ID\" Type=\"Edm.Int32\" Nullable=\"false\"
/\>\
        \<Property Name=\"Description\" Type=\"Edm.String\" \>\
          \<Annotation Term=\"Core.IsLanguageDependent\"
/\>]{style="color:black"}]{.Datatype}

`        </Property>`

[[        \<Property Name=\"ReleaseDate\" Type=\"Edm.Date\" /\>\
        \<Property Name=\"DiscontinuedDate\" Type=\"Edm.Date\" /\>\
        \<Property Name=\"Rating\" Type=\"Edm.Int32\" /\>\
        \<Property Name=\"Price\" Type=\"Edm.Decimal\"
Scale=\"variable\"\>\
          \<Annotation Term=\"Measures.ISOCurrency\" Path=\"Currency\"
/\>]{style="color:black"}]{.Datatype}

`        </Property>`

`        <Property Name="Currency" Type="Edm.String" MaxLength="3" />`

`        <NavigationProperty Name="Category" Type="ODataDemo.Category"`

`                            Nullable="false" Partner="Products" />`

`        <NavigationProperty Name="Supplier" Type="ODataDemo.Supplier"`

[[                            Partner=\"Products\" /\>\
      \</EntityType\>\
      \<EntityType Name=\"Category\"\>\
        \<Key\>\
         \<PropertyRef Name=\"ID\" /\>\
        \</Key\>\
        \<Property Name=\"ID\" Type=\"Edm.Int32\" Nullable=\"false\"
/\>\
        \<Property Name=\"Name\" Type=\"Edm.String\"
Nullable=\"false\"\>\
          \<Annotation Term=\"Core.IsLanguageDependent\"
/\>]{style="color:black"}]{.Datatype}

`        </Property>`

`        <NavigationProperty Name="Products" Partner="Category"`

[[                            Type=\"Collection(ODataDemo.Product)\"\>\
          \<OnDelete Action=\"Cascade\"
/\>]{style="color:black"}]{.Datatype}

[[        \</NavigationProperty\>\
      \</EntityType\>\
      \<EntityType Name=\"Supplier\"\>\
        \<Key\>\
          \<PropertyRef Name=\"ID\" /\>\
        \</Key\>\
        \<Property Name=\"ID\" Type=\"Edm.String\" Nullable=\"false\"
/\>\
        \<Property Name=\"Name\" Type=\"Edm.String\" /\>\
        \<Property Name=\"Address\" Type=\"ODataDemo.Address\"
Nullable=\"false\" /\>\
        \<Property Name=\"Concurrency\" Type=\"Edm.Int32\"
Nullable=\"false\" /\>\
        \<NavigationProperty Name=\"Products\"
Partner=\"Supplier\"]{style="color:black"}]{.Datatype}

`                            Type="Collection(ODataDemo.Product)" />`

[[      \</EntityType\>\
      \<EntityType Name=\"Country\"\>]{style="color:black"}]{.Datatype}

`        <Key>`

`          <PropertyRef Name="Code" />`

`        </Key>`

`        <Property Name="Code" Type="Edm.String" MaxLength="2" `

`                              Nullable="false" />`

`        <Property Name="Name" Type="Edm.String" />`

`      </EntityType>`

[[      \<ComplexType Name=\"Address\"\>\
        \<Property Name=\"Street\" Type=\"Edm.String\" /\>\
        \<Property Name=\"City\" Type=\"Edm.String\" /\>\
        \<Property Name=\"State\" Type=\"Edm.String\" /\>\
        \<Property Name=\"ZipCode\" Type=\"Edm.String\" /\>\
        \<Property Name=\"CountryName\" Type=\"Edm.String\" /\>\
        \<NavigationProperty Name=\"Country\"
Type=\"ODataDemo.Country\"\>]{style="color:black"}]{.Datatype}

`          <ReferentialConstraint Property="CountryName"  `

`                                 ReferencedProperty="Name" />`

`        </NavigationProperty>`

[[      \</ComplexType\>\
      \<Function Name=\"ProductsByRating\"\>\
        \<Parameter Name=\"Rating\" Type=\"Edm.Int32\"
/\>]{style="color:black"}]{.Datatype}

[[        \<ReturnType Type=\"Collection(ODataDemo.Product)\" /\>\
      \</Function\>\
      \<EntityContainer Name=\"DemoService\"\>\
        \<EntitySet Name=\"Products\"
EntityType=\"ODataDemo.Product\"\>\
          \<NavigationPropertyBinding Path=\"Category\"
Target=\"Categories\" /\>]{style="color:black"}]{.Datatype}

[[        \</EntitySet\>\
        \<EntitySet Name=\"Categories\"
EntityType=\"ODataDemo.Category\"\>\
          \<NavigationPropertyBinding Path=\"Products\"
Target=\"Products\" /\>]{style="color:black"}]{.Datatype}

`          <Annotation Term="Core.Description" String="Product Categories" />`

[[        \</EntitySet\>\
        \<EntitySet Name=\"Suppliers\"
EntityType=\"ODataDemo.Supplier\"\>\
          \<NavigationPropertyBinding Path=\"Products\"
Target=\"Products\" /\>]{style="color:black"}]{.Datatype}

`          <NavigationPropertyBinding Path="Address/Country"`

`                                     Target="Countries" />`

`          <Annotation Term="Core.OptimisticConcurrency">`

`            <Collection>`

`              <PropertyPath>Concurrency</PropertyPath>`

`            </Collection>`

`          </Annotation>`

[[        \</EntitySet\>\
        \<Singleton Name=\"MainSupplier\" Type=\"self.Supplier\"\>\
          \<NavigationPropertyBinding Path=\"Products\"
Target=\"Products\" /\>]{style="color:black"}]{.Datatype}

`          <Annotation Term="Core.Description" String="Primary Supplier" />`

`        </Singleton>`

`        <EntitySet Name="Countries" EntityType="ODataDemo.Country" />`

`        <FunctionImport Name="ProductsByRating" EntitySet="Products"`

[[                        Function=\"ODataDemo.ProductsByRating\" /\>\
      \</EntityContainer\>\
    \</Schema\>\
  \</edmx:DataServices\>\
\</edmx:Edmx\>]{style="color:black"}]{.Datatype}
```

## ##subsec [Annotations for Products and Categories Example](#AnnotationsforProductsandCategoriesE)

::: example
Example ##ex:
```
[[\<edmx:Edmx xmlns:edmx=\"http://docs.oasis-open.org/odata/ns/edmx\"\
           Version=\"4.01\"\>\
  \<edmx:Reference Uri=\"http://host/service/\$metadata\"\>\
    \<edmx:Include Namespace=\"ODataDemo\" Alias=\"target\"
/\>]{style="color:black"}]{.Datatype}
:::

`  </edmx:Reference>`

`  <edmx:Reference Uri="http://somewhere/Vocabulary/V1">`

`    <edmx:Include Alias="Vocabulary1" Namespace="Some.Vocabulary.V1" />`

`  </edmx:Reference>`

[[  \<edmx:DataServices\>\
    \<Schema xmlns=\"http://docs.oasis-open.org/odata/ns/edm\"\
            Namespace=\"External.Annotations\"\>\
      \<Annotations Target=\"ODataDemo.Supplier\"\>\
        \<Annotation Term=\"Vocabulary1.EMail\"\>\
          \<Null /\>\
        \</Annotation\>\
        \<Annotation Term=\"Vocabulary1.AccountID\" Path=\"ID\" /\>\
        \<Annotation Term=\"Vocabulary1.Title\" String=\"Supplier Info\"
/\>\
        \<Annotation Term=\"Vocabulary1.DisplayName\"\>\
        \<Apply Function=\"odata.concat\"\>\
            \<Path\>Name\</Path\>\
            \<String\> in \</String\>\
            \<Path\>Address/CountryName\</Path\>\
          \</Apply\>\
        \</Annotation\>\
      \</Annotations\>\
      \<Annotations
Target=\"ODataDemo.Product\"\>]{style="color:black"}]{.Datatype}

`        <Annotation Term="Vocabulary1.Tags">`

`          <Collection>`

`            <String>MasterData</String>`

`          </Collection>`

`        </Annotation>`

`      </Annotations>`

`  </Schema>`

[[  \</edmx:DataServices\>\
\</edmx:Edmx\>]{style="color:black"}]{.Datatype}
```

# ##sec Conformance

Conforming services MUST follow all rules of this specification document
for the types, sets, functions, actions, containers and annotations they
expose.

In addition, conforming services MUST NOT return 4.01 CSDL constructs
for requests made with `OData-MaxVersion:4.0`.

Specifically, they

1\. MUST NOT include properties in derived types that overwrite a
property defined in the base type

2\. MUST NOT include [[Edm.Untyped]{style="font-family:
\"Courier New\";color:windowtext"}](#EntityModel)

3\. MUST NOT use [path syntax](#PathSyntax) added with 4.01

4\. MUST NOT use
[[Edm.ModelElementPath]{style="font-family:\"Courier New\";
color:windowtext"}](#EntityModel) and
[[Edm.AnyPropertyPath]{style="font-family:\"Courier New\";color:windowtext"}](#EntityModel)

5\. MUST NOT specify [referential constraints](#ReferentialConstraint)
to complex types and navigation properties

6\. MUST NOT include a non-abstract entity type with no inherited or
defined [entity key](#Key)

7\. MUST NOT include the
[`Core.DefaultNamespace`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#DefaultNamespace)
annotation on [included schemas](#IncludedSchema)

8\. MUST NOT return the Unicode facet for terms, parameters, and return
types

9\. MUST NOT include collections of
[[Edm.ComplexType]{style="font-family:\"Courier New\";color:windowtext"}](#EntityModel)
or
[[Edm.Untyped]{style="font-family:\"Courier New\";color:windowtext"}](#EntityModel)

10\. MUST NOT specify a key as a property of a related entity

11\. SHOULD NOT include new/unknown values for the
[`AppliesTo`](#Applicability) attribute

12\. SHOULD specify the [Nullable](#Nullable) facet for collections

13\. MAY include new CSDL annotations

In addition, OData 4.01 services:

14\. MUST specify the [Nullable](#Nullable) facet for collections

15\. SHOULD NOT have identifiers within a uniqueness scope (e.g. a
schema, a structural type or an entity container) that differ only by
case

Conforming clients MUST be prepared to consume a model that uses any or
all constructs defined in this specification, including custom
annotations, and MUST ignore any elements or attributes not defined in
this version of the specification.

Appendix A. [Acknowledgments](#Acknowledgments)

The contributions of the OASIS OData Technical Committee members,
enumerated in [OData‑Protocol](#BMProtocol), are gratefully
acknowledged.

Appendix B. [Table of XML Elements and
Attributes](#TableofXMLElementsandAttributes)

[\
]{style="font-size:10.0pt;font-family:\"Liberation Sans\",sans-serif"}

::: WordSection3
[Element `edmx:Edmx`[.
]{style="color:windowtext;display:none"}[15]{style="color:windowtext;display:none"}](#_Toc37318837)

[Attribute `Version`[.
]{style="color:windowtext;display:none"}[15]{style="color:windowtext;display:none"}](#_Toc37318838)

[Element `edmx:DataServices`[.
]{style="color:windowtext;display:none"}[15]{style="color:windowtext;display:none"}](#_Toc37318839)

[Element `edmx:Reference`[.
]{style="color:windowtext;display:none"}[15]{style="color:windowtext;display:none"}](#_Toc37318840)

[Attribute `Uri`[.
]{style="color:windowtext;display:none"}[16]{style="color:windowtext;display:none"}](#_Toc37318841)

[Element `edmx:Include`[.
]{style="color:windowtext;display:none"}[16]{style="color:windowtext;display:none"}](#_Toc37318842)

[Attribute `Namespace`[.
]{style="color:windowtext;display:none"}[16]{style="color:windowtext;display:none"}](#_Toc37318843)

[Attribute `Alias`[.
]{style="color:windowtext;display:none"}[17]{style="color:windowtext;display:none"}](#_Toc37318844)

[Element `edmx:IncludeAnnotations`[.
]{style="color:windowtext;display:none"}[17]{style="color:windowtext;display:none"}](#_Toc37318845)

[Attribute `TermNamespace`[.
]{style="color:windowtext;display:none"}[18]{style="color:windowtext;display:none"}](#_Toc37318846)

[Attribute `Qualifier`[.
]{style="color:windowtext;display:none"}[18]{style="color:windowtext;display:none"}](#_Toc37318847)

[Attribute `TargetNamespace`[. ]{style="color:windowtext;display:
none"}[18]{style="color:windowtext;display:none"}](#_Toc37318848)

[[Element ]{lang="DE"}[edm:Schema]{lang="DE"
style="font-family:\"Courier New\""}[.
]{style="color:windowtext;display:none"}[19]{style="color:windowtext;display:none"}](#_Toc37318849)

[Attribute `Namespace`[.
]{style="color:windowtext;display:none"}[19]{style="color:windowtext;display:none"}](#_Toc37318850)

[Attribute `Alias`[.
]{style="color:windowtext;display:none"}[19]{style="color:windowtext;display:none"}](#_Toc37318851)

[Element `edm:Annotations`[.
]{style="color:windowtext;display:none"}[20]{style="color:windowtext;display:none"}](#_Toc37318852)

[Attribute `Target`[.
]{style="color:windowtext;display:none"}[20]{style="color:windowtext;display:none"}](#_Toc37318853)

[Attribute `Qualifier`[.
]{style="color:windowtext;display:none"}[20]{style="color:windowtext;display:none"}](#_Toc37318854)

[Element `edm:EntityType`[.
]{style="color:windowtext;display:none"}[21]{style="color:windowtext;display:none"}](#_Toc37318855)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[21]{style="color:windowtext;display:none"}](#_Toc37318856)

[Attribute `BaseType`[.
]{style="color:windowtext;display:none"}[21]{style="color:windowtext;display:none"}](#_Toc37318857)

[Attribute `Abstract`[.
]{style="color:windowtext;display:none"}[22]{style="color:windowtext;display:none"}](#_Toc37318858)

[Attribute `OpenType`[.
]{style="color:windowtext;display:none"}[22]{style="color:windowtext;display:none"}](#_Toc37318859)

[Attribute `HasStream`[.
]{style="color:windowtext;display:none"}[22]{style="color:windowtext;display:none"}](#_Toc37318860)

[Element `edm:Key`[.
]{style="color:windowtext;display:none"}[23]{style="color:windowtext;display:none"}](#_Toc37318861)

[Element `edm:PropertyRef`[.
]{style="color:windowtext;display:none"}[23]{style="color:windowtext;display:none"}](#_Toc37318862)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[23]{style="color:windowtext;display:none"}](#_Toc37318863)

[Attribute `Alias`[.
]{style="color:windowtext;display:none"}[24]{style="color:windowtext;display:none"}](#_Toc37318864)

[Element `edm:Property`[.
]{style="color:windowtext;display:none"}[25]{style="color:windowtext;display:none"}](#_Toc37318865)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[25]{style="color:windowtext;display:none"}](#_Toc37318866)

[Attribute `Type`[.
]{style="color:windowtext;display:none"}[25]{style="color:windowtext;display:none"}](#_Toc37318867)

[Attribute `Nullable`[.
]{style="color:windowtext;display:none"}[26]{style="color:windowtext;display:none"}](#_Toc37318868)

[Attribute `MaxLength`[.
]{style="color:windowtext;display:none"}[26]{style="color:windowtext;display:none"}](#_Toc37318869)

[Attribute `Precision`[.
]{style="color:windowtext;display:none"}[27]{style="color:windowtext;display:none"}](#_Toc37318870)

[Attribute `Scale`[.
]{style="color:windowtext;display:none"}[27]{style="color:windowtext;display:none"}](#_Toc37318871)

[Attribute `Unicode`[.
]{style="color:windowtext;display:none"}[28]{style="color:windowtext;display:none"}](#_Toc37318872)

[Attribute `SRID`[.
]{style="color:windowtext;display:none"}[28]{style="color:windowtext;display:none"}](#_Toc37318873)

[Attribute `DefaultValue`[.
]{style="color:windowtext;display:none"}[28]{style="color:windowtext;display:none"}](#_Toc37318874)

[Element `edm:NavigationProperty`[.
]{style="color:windowtext;display:none"}[29]{style="color:windowtext;display:none"}](#_Toc37318875)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[29]{style="color:windowtext;display:none"}](#_Toc37318876)

[Attribute `Type`[.
]{style="color:windowtext;display:none"}[30]{style="color:windowtext;display:none"}](#_Toc37318877)

[Attribute `Nullable`[.
]{style="color:windowtext;display:none"}[30]{style="color:windowtext;display:none"}](#_Toc37318878)

[Attribute `Partner`[.
]{style="color:windowtext;display:none"}[30]{style="color:windowtext;display:none"}](#_Toc37318879)

[Attribute `ContainsTarget`[.
]{style="color:windowtext;display:none"}[31]{style="color:windowtext;display:none"}](#_Toc37318880)

[Element `edm:ReferentialConstraint`[.
]{style="color:windowtext;display:none"}[31]{style="color:windowtext;display:none"}](#_Toc37318881)

[Attribute `Property`[.
]{style="color:windowtext;display:none"}[32]{style="color:windowtext;display:none"}](#_Toc37318882)

[Attribute `ReferencedProperty`[. ]{style="color:windowtext;
display:none"}[32]{style="color:windowtext;display:none"}](#_Toc37318883)

[Element `edm:OnDelete`[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc37318884)

[Attribute `Action`[.
]{style="color:windowtext;display:none"}[33]{style="color:windowtext;display:none"}](#_Toc37318885)

[Element `edm:ComplexType`[.
]{style="color:windowtext;display:none"}[34]{style="color:windowtext;display:none"}](#_Toc37318886)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[34]{style="color:windowtext;display:none"}](#_Toc37318887)

[Attribute `BaseType`[.
]{style="color:windowtext;display:none"}[34]{style="color:windowtext;display:none"}](#_Toc37318888)

[Attribute `Abstract`[.
]{style="color:windowtext;display:none"}[35]{style="color:windowtext;display:none"}](#_Toc37318889)

[Attribute `OpenType`[.
]{style="color:windowtext;display:none"}[35]{style="color:windowtext;display:none"}](#_Toc37318890)

[Element `edm:EnumType`[.
]{style="color:windowtext;display:none"}[36]{style="color:windowtext;display:none"}](#_Toc37318891)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[36]{style="color:windowtext;display:none"}](#_Toc37318892)

[Attribute `UnderlyingType`[.
]{style="color:windowtext;display:none"}[36]{style="color:windowtext;display:none"}](#_Toc37318893)

[Attribute `IsFlags`[.
]{style="color:windowtext;display:none"}[36]{style="color:windowtext;display:none"}](#_Toc37318894)

[Element `edm:Member`[.
]{style="color:windowtext;display:none"}[37]{style="color:windowtext;display:none"}](#_Toc37318895)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[37]{style="color:windowtext;display:none"}](#_Toc37318896)

[Attribute `Value`[.
]{style="color:windowtext;display:none"}[37]{style="color:windowtext;display:none"}](#_Toc37318897)

[Element `edm:TypeDefinition`[.
]{style="color:windowtext;display:none"}[39]{style="color:windowtext;display:none"}](#_Toc37318898)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[39]{style="color:windowtext;display:none"}](#_Toc37318899)

[Attribute `UnderlyingType`[.
]{style="color:windowtext;display:none"}[39]{style="color:windowtext;display:none"}](#_Toc37318900)

[Element `edm:Action`[.
]{style="color:windowtext;display:none"}[40]{style="color:windowtext;display:none"}](#_Toc37318901)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[40]{style="color:windowtext;display:none"}](#_Toc37318902)

[Element `edm:Function`[.
]{style="color:windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc37318903)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc37318904)

[Attribute `IsBound`[.
]{style="color:windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc37318905)

[Attribute `EntitySetPath`[.
]{style="color:windowtext;display:none"}[41]{style="color:windowtext;display:none"}](#_Toc37318906)

[Attribute `IsComposable`[.
]{style="color:windowtext;display:none"}[42]{style="color:windowtext;display:none"}](#_Toc37318907)

[Element `edm:ReturnType`[.
]{style="color:windowtext;display:none"}[42]{style="color:windowtext;display:none"}](#_Toc37318908)

[Attribute `Type`[.
]{style="color:windowtext;display:none"}[42]{style="color:windowtext;display:none"}](#_Toc37318909)

[Attribute `Nullable`[.
]{style="color:windowtext;display:none"}[42]{style="color:windowtext;display:none"}](#_Toc37318910)

[Element `edm:Parameter`[.
]{style="color:windowtext;display:none"}[43]{style="color:windowtext;display:none"}](#_Toc37318911)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[43]{style="color:windowtext;display:none"}](#_Toc37318912)

[Attribute `Type`[.
]{style="color:windowtext;display:none"}[43]{style="color:windowtext;display:none"}](#_Toc37318913)

[Attribute `Nullable`[.
]{style="color:windowtext;display:none"}[43]{style="color:windowtext;display:none"}](#_Toc37318914)

[Element `edm:EntityContainer`[.
]{style="color:windowtext;display:none"}[44]{style="color:windowtext;display:none"}](#_Toc37318915)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[44]{style="color:windowtext;display:none"}](#_Toc37318916)

[Attribute `Extends`[.
]{style="color:windowtext;display:none"}[45]{style="color:windowtext;display:none"}](#_Toc37318917)

[Element `edm:EntitySet`[.
]{style="color:windowtext;display:none"}[45]{style="color:windowtext;display:none"}](#_Toc37318918)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[45]{style="color:windowtext;display:none"}](#_Toc37318919)

[Attribute `EntityType`[.
]{style="color:windowtext;display:none"}[45]{style="color:windowtext;display:none"}](#_Toc37318920)

[Attribute `IncludeInServiceDocument`[. ]{style="color:windowtext;
display:none"}[46]{style="color:windowtext;display:none"}](#_Toc37318921)

[Element `edm:Singleton`[.
]{style="color:windowtext;display:none"}[46]{style="color:windowtext;display:none"}](#_Toc37318922)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[46]{style="color:windowtext;display:none"}](#_Toc37318923)

[Attribute `Type`[.
]{style="color:windowtext;display:none"}[46]{style="color:windowtext;display:none"}](#_Toc37318924)

[Attribute `Nullable`[.
]{style="color:windowtext;display:none"}[46]{style="color:windowtext;display:none"}](#_Toc37318925)

[Element `edm:NavigationPropertyBinding`[.
]{style="color:windowtext;display:none"}[47]{style="color:windowtext;display:none"}](#_Toc37318926)

[Attribute `Path`[.
]{style="color:windowtext;display:none"}[47]{style="color:windowtext;display:none"}](#_Toc37318927)

[Attribute `Target`[.
]{style="color:windowtext;display:none"}[47]{style="color:windowtext;display:none"}](#_Toc37318928)

[Element `edm:ActionImport`[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc37318929)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc37318930)

[Attribute `Action`[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc37318931)

[Attribute `EntitySet`[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc37318932)

[Element `edm:FunctionImport`[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc37318933)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc37318934)

[Attribute `Function`[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc37318935)

[Attribute `EntitySet`[.
]{style="color:windowtext;display:none"}[48]{style="color:windowtext;display:none"}](#_Toc37318936)

[Attribute `IncludeInServiceDocument`[. ]{style="color:windowtext;
display:none"}[49]{style="color:windowtext;display:none"}](#_Toc37318937)

[Element `edm:Term`[.
]{style="color:windowtext;display:none"}[51]{style="color:windowtext;display:none"}](#_Toc37318938)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[51]{style="color:windowtext;display:none"}](#_Toc37318939)

[Attribute `Type`[.
]{style="color:windowtext;display:none"}[51]{style="color:windowtext;display:none"}](#_Toc37318940)

[Attribute `DefaultValue`[.
]{style="color:windowtext;display:none"}[51]{style="color:windowtext;display:none"}](#_Toc37318941)

[Attribute `BaseTerm`[.
]{style="color:windowtext;display:none"}[51]{style="color:windowtext;display:none"}](#_Toc37318942)

[Attribute `AppliesTo`[.
]{style="color:windowtext;display:none"}[53]{style="color:windowtext;display:none"}](#_Toc37318943)

[Element `edm:Annotation`[.
]{style="color:windowtext;display:none"}[53]{style="color:windowtext;display:none"}](#_Toc37318944)

[Attribute `Term`[.
]{style="color:windowtext;display:none"}[53]{style="color:windowtext;display:none"}](#_Toc37318945)

[Attribute `Qualifier`[.
]{style="color:windowtext;display:none"}[54]{style="color:windowtext;display:none"}](#_Toc37318946)

[Expression `edm:Binary`[.
]{style="color:windowtext;display:none"}[56]{style="color:windowtext;display:none"}](#_Toc37318947)

[Expression `edm:Bool`[.
]{style="color:windowtext;display:none"}[56]{style="color:windowtext;display:none"}](#_Toc37318948)

[Expression `edm:Date`[.
]{style="color:windowtext;display:none"}[57]{style="color:windowtext;display:none"}](#_Toc37318949)

[Expression `edm:DateTimeOffset`[. ]{style="color:windowtext;
display:none"}[57]{style="color:windowtext;display:none"}](#_Toc37318950)

[Expression `edm:Decimal`[.
]{style="color:windowtext;display:none"}[57]{style="color:windowtext;display:none"}](#_Toc37318951)

[Expression `edm:Duration`[.
]{style="color:windowtext;display:none"}[58]{style="color:windowtext;display:none"}](#_Toc37318952)

[Expression `edm:EnumMember`[.
]{style="color:windowtext;display:none"}[58]{style="color:windowtext;display:none"}](#_Toc37318953)

[Expression `edm:Float`[.
]{style="color:windowtext;display:none"}[58]{style="color:windowtext;display:none"}](#_Toc37318954)

[Expression `edm:Guid`[.
]{style="color:windowtext;display:none"}[59]{style="color:windowtext;display:none"}](#_Toc37318955)

[Expression `edm:Int`[.
]{style="color:windowtext;display:none"}[59]{style="color:windowtext;display:none"}](#_Toc37318956)

[Expression `edm:String`[.
]{style="color:windowtext;display:none"}[59]{style="color:windowtext;display:none"}](#_Toc37318957)

[Expression `edm:TimeOfDay`[.
]{style="color:windowtext;display:none"}[60]{style="color:windowtext;display:none"}](#_Toc37318958)

[Expression `edm:AnnotationPath`[. ]{style="color:windowtext;
display:none"}[63]{style="color:windowtext;display:none"}](#_Toc37318959)

[Expression `edm:ModelElementPath`[. ]{style="color:windowtext;
display:none"}[63]{style="color:windowtext;display:none"}](#_Toc37318960)

[Expression `edm:NavigationPropertyPath`[. ]{style="color:windowtext;
display:none"}[63]{style="color:windowtext;display:none"}](#_Toc37318961)

[Expression `edm:PropertyPath`[. ]{style="color:windowtext;display:
none"}[64]{style="color:windowtext;display:none"}](#_Toc37318962)

[Expression `edm:Path`[.
]{style="color:windowtext;display:none"}[64]{style="color:windowtext;display:none"}](#_Toc37318963)

[Expressions `edm:And` and `edm:Or`[.
]{style="color:windowtext;display:none"}[65]{style="color:windowtext;display:none"}](#_Toc37318964)

[Expression `edm:Not`[.
]{style="color:windowtext;display:none"}[65]{style="color:windowtext;display:none"}](#_Toc37318965)

[Expressions `edm:Eq`, `edm:Ne`, `edm:Gt`, `edm:Ge`, `edm:Lt`, `edm:Le`,
`edm:Has`, and `edm:In`[ 
]{style="color:windowtext;display:none"}[65]{style="color:windowtext;display:none"}](#_Toc37318966)

[Expression `edm:Neg`[.
]{style="color:windowtext;display:none"}[67]{style="color:windowtext;display:none"}](#_Toc37318967)

[Expressions `edm:Add`, `edm:Sub`, `edm:Mul`, `edm:Div`, `edm:DivBy`,
and `edm:Mod`[ 
]{style="color:windowtext;display:none"}[67]{style="color:windowtext;display:none"}](#_Toc37318968)

[Expression `edm:Apply`[.
]{style="color:windowtext;display:none"}[68]{style="color:windowtext;display:none"}](#_Toc37318969)

[Attribute `Function`[.
]{style="color:windowtext;display:none"}[68]{style="color:windowtext;display:none"}](#_Toc37318970)

[Expression `edm:Cast`[.
]{style="color:windowtext;display:none"}[69]{style="color:windowtext;display:none"}](#_Toc37318971)

[Attribute `Type`[.
]{style="color:windowtext;display:none"}[69]{style="color:windowtext;display:none"}](#_Toc37318972)

[Expression `edm:Collection`[.
]{style="color:windowtext;display:none"}[70]{style="color:windowtext;display:none"}](#_Toc37318973)

[Expression `edm:If`[.
]{style="color:windowtext;display:none"}[70]{style="color:windowtext;display:none"}](#_Toc37318974)

[Expression `edm:IsOf`[.
]{style="color:windowtext;display:none"}[71]{style="color:windowtext;display:none"}](#_Toc37318975)

[Attribute `Type`[.
]{style="color:windowtext;display:none"}[71]{style="color:windowtext;display:none"}](#_Toc37318976)

[Expression `edm:LabeledElement`[. ]{style="color:windowtext;
display:none"}[71]{style="color:windowtext;display:none"}](#_Toc37318977)

[Attribute `Name`[.
]{style="color:windowtext;display:none"}[71]{style="color:windowtext;display:none"}](#_Toc37318978)

[Expression `edm:LabeledElementReference`[. ]{style="color:windowtext;
display:none"}[72]{style="color:windowtext;display:none"}](#_Toc37318979)

[Expression `edm:Null`[.
]{style="color:windowtext;display:none"}[72]{style="color:windowtext;display:none"}](#_Toc37318980)

[Expression `edm:Record`[.
]{style="color:windowtext;display:none"}[73]{style="color:windowtext;display:none"}](#_Toc37318981)

[Attribute `Type`[.
]{style="color:windowtext;display:none"}[73]{style="color:windowtext;display:none"}](#_Toc37318982)

[Element `edm:PropertyValue`[.
]{style="color:windowtext;display:none"}[73]{style="color:windowtext;display:none"}](#_Toc37318983)

[Attribute `Property`[.
]{style="color:windowtext;display:none"}[73]{style="color:windowtext;display:none"}](#_Toc37318984)

[Expression `edm:UrlRef`[.
]{style="color:windowtext;display:none"}[74]{style="color:windowtext;display:none"}](#_Toc37318985)

 
:::

[\
]{style="font-size:10.0pt;font-family:\"Liberation Sans\",sans-serif"}

::: WordSection4
Appendix C. [Revision History](#RevisionHistory)

 

+-----------------+-----------------+-----------------+-----------------+
| **Revision**    | **Date**        | **Editor**      | **Changes       |
|                 |                 |                 | Made**          |
+-----------------+-----------------+-----------------+-----------------+
| Working Draft   | 2016-09-07      | Michael Pizzo   | Imported        |
| 01              |                 |                 | content from    |
|                 |                 | Ralf Handl      | 4.0 Errata 3    |
|                 |                 |                 | specification   |
|                 |                 |                 | and integrated  |
|                 |                 |                 | initial 4.01    |
|                 |                 |                 | features        |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2016-12-08      | Michael Pizzo   | Integrated 4.01 |
| Specification   |                 |                 | features        |
| Draft 01        |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-06-08      | Michael Pizzo   | Incorporated    |
| Specification   |                 |                 | normative text  |
| Draft 02        |                 | Ralf Handl      | from former     |
|                 |                 |                 | OData Part 3:   |
|                 |                 |                 | CSDL            |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-09-22      | Michael Pizzo   | Incorporated    |
| Specification   |                 |                 | review feedback |
| Draft 03        |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-11-10      | Michael Pizzo   | Incorporated    |
| Specification   |                 |                 | review feedback |
| Draft 04        |                 | Ralf Handl      |                 |
|                 |                 |                 | Stable order of |
|                 |                 |                 | action and      |
|                 |                 |                 | function        |
|                 |                 |                 | parameters      |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2017-12-19      | Michael Pizzo   | Non-Material    |
| Specification   |                 |                 | Changes         |
| 01              |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2019-06-21      | Michael Pizzo   | External        |
| Specification   |                 |                 | targeting for   |
| Draft 05        |                 | Ralf Handl      | annotations on  |
|                 |                 |                 | action/function |
|                 |                 |                 | overloads,      |
|                 |                 |                 | parameters, and |
|                 |                 |                 | return types    |
|                 |                 |                 |                 |
|                 |                 |                 | Key and index   |
|                 |                 |                 | segments for    |
|                 |                 |                 | path            |
|                 |                 |                 | expressions in  |
|                 |                 |                 | annotations     |
|                 |                 |                 |                 |
|                 |                 |                 | Nullable        |
|                 |                 |                 | singletons      |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2019-09-20      | Michael Pizzo   | Redefining      |
| Specification   |                 |                 | entity sets and |
| Draft 06        |                 | Ralf Handl      | singletons when |
|                 |                 |                 | extending       |
|                 |                 |                 | entity          |
|                 |                 |                 | containers      |
+-----------------+-----------------+-----------------+-----------------+
| Committee       | 2019-11-05      | Michael Pizzo   | Non-material    |
| Specification   |                 |                 | changes         |
| 02              |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Candidate OASIS | 2020-01-15      | Michael Pizzo   | Non-material    |
| Standard 01     |                 |                 | changes         |
|                 |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Candidate OASIS | 2020-04-09      | Michael Pizzo   | Non-material    |
| Standard 02     |                 |                 | changes         |
|                 |                 | Ralf Handl      |                 |
+-----------------+-----------------+-----------------+-----------------+

 
:::
