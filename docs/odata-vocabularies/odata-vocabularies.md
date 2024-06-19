
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# OData Vocabularies Version 4.0

## Committee Specification Draft 02

## 19 June 2024

$\hbox{}$

#### This stage:
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/csd02/odata-vocabularies-v4.0-csd02.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/csd02/odata-vocabularies-v4.0-csd02.html \
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/csd02/odata-vocabularies-v4.0-csd02.pdf

#### Previous stage:
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/csprd01/odata-vocabularies-v4.0-csprd01.docx (Authoritative) \
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/csprd01/odata-vocabularies-v4.0-csprd01.html \
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/csprd01/odata-vocabularies-v4.0-csprd01.pdf

#### Latest stage:
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.docx (Authoritative) \
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html \
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.pdf

#### Technical Committee:
[OASIS Open Data Protocol (OData) TC](https://www.oasis-open.org/committees/odata/)

#### Chairs:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/)

#### Editors:

Ralf Handl (ralf.handl@sap.com), [SAP SE](http://www.sap.com/) \
Michael Pizzo (mikep@microsoft.com), [Microsoft](http://www.microsoft.com/) \
Heiko Theißen (heiko.theissen@sap.com), [SAP SE](http://www.sap.com/)

#### <a name="RelatedWork">Related work:</a>
This specification is related to:
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html
  * _ABNF components: OData ABNF Construction Rules Version 4.02 and OData ABNF Test Cases_. https://docs.oasis-open.org/odata/odata/v4.02/csd02/abnf/
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/odata-csdl-json-v4.02.html
* _OData Common Schema Definition Language (CSDL) XML Representation Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/odata-csdl-xml-v4.02.html
* _OData JSON Format Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.02/odata-json-format-v4.02.html
* _OData Data Aggregation Extension Version 4.0_. Edited by Ralf Handl, Hubert Heijkers, Gerald Krause, Michael Pizzo, Heiko Theißen, and Martin Zurmuehl. Latest stage: https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html
* _OData Extension for Temporal Data Version 4.0_. Edited by Ralf Handl, Hubert Heijkers, Gerald Krause, Michael Pizzo, Heiko Theißen, and Martin Zurmuehl. Latest stage: https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/odata-temporal-ext-v4.0.html

#### Abstract:
This prose specification describes a set of OData vocabularies maintained by the OASIS OData Technical Committee. These vocabulary components are continuously evolved. The latest work-in-progress revisions are available at the odata-vocabularies OASIS TC GitHub repository: https://github.com/oasis-tcs/odata-vocabularies.

#### Status:
This document was last revised or approved by the OASIS Open Data Protocol (OData) TC on the above date. The level of approval is also listed above. Check the "Latest stage" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=odata#technical.

TC members should send comments on this specification to the TC's email list. Others should send comments to the TC's public comment list, after subscribing to it by following the instructions at the "<a href="https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=odata">Send A Comment</a>" button on the TC's web page at https://www.oasis-open.org/committees/odata/.

This specification is provided under the [RF on RAND Terms Mode](https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-RAND-Mode) of the [OASIS IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/), the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/odata/ipr.php).

Note that any machine-readable content ([Computer Language Definitions](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsCompLang)) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

#### Key words:
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC2119](#rfc2119) and [RFC8174](#rfc8174) when, and only when, they appear in all capitals, as shown here.

#### Citation format:
When referencing this specification the following citation format should be used:

**[OData-Vocabularies-v4.0]**

_OData Vocabularies Version 4.0_.
Edited by Ralf Handl, Michael Pizzo, and Heiko Theißen. 19 June 2024. OASIS Committee Specification Draft 02.
https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/csd02/odata-vocabularies-v4.0-csd02.html.
Latest stage: https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/odata-vocabularies-v4.0.html.

#### Notices
Copyright © OASIS Open 2024. All Rights Reserved.

Distributed under the terms of the OASIS [IPR Policy](https://www.oasis-open.org/policies-guidelines/ipr/).

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs.

For complete copyright information please see the full Notices section in an Appendix below.

-------

# Table of Contents

::: toc
- [1 Introduction](#Introduction)
- [2 Core Vocabulary](#CoreVocabulary)
- [3 Capabilities Vocabulary](#CapabilitiesVocabulary)
- [4 Measures Vocabulary](#MeasuresVocabulary)
- [5 Validation Vocabulary](#ValidationVocabulary)
- [6 Aggregation Vocabulary](#AggregationVocabulary)
- [7 Authorization Vocabulary](#AuthorizationVocabulary)
- [8 JSON Vocabulary](#JSONVocabulary)
- [9 Repeatability Vocabulary](#RepeatabilityVocabulary)
- [10 Temporal Vocabulary](#TemporalVocabulary)
- [A References](#References)
  - [A.1 Normative References](#NormativeReferences)
  - [A.2 Non-Normative References](#NonNormativeReferences)
- [B Acknowledgments](#Acknowledgments)
  - [B.1 Special Thanks](#SpecialThanks)
  - [B.2 Participants](#Participants)
- [C Revision History](#RevisionHistory)
- [D Notices](#Notices)
:::


-------

# <a name="Introduction" href="#Introduction">1 Introduction</a>

OData provides the ability to decorate model elements of a schema and instances of data with descriptive elements called annotations. Annotations can be used to specify additional facts about an element, such as whether it is read-only, or to define a common concept, such as a person or a movie. Annotations consist of a term (the namespace-qualified name of the annotation being applied), a target (the element to which the term is applied), and a value. A set of related annotation terms with a common namespace comprises a Vocabulary. Shared vocabularies provide a powerful extensibility point for OData. Refer to the [OData-Protocol](#ODataProtocol) and [OData-CSDL](#ODataCSDL) specifications for more information on the use of vocabularies.

This prose specification describes a set of OData vocabularies maintained by the OASIS OData Technical Committee. It is one component of a Work Product that also includes the various vocabulary components. These vocabulary components are continuously evolved, the latest work-in-progress revisions are available at [OData-Vocabs](#ODataVocabs).

Other OData vocabularies may be created, shared, and maintained outside of this work product.

<!-- No earlier versions published

--## ##--subsec Changes from Earlier Versions

Section | Feature / Change | Issue
--------|------------------|------

-->


-------

# <a name="CoreVocabulary" href="#CoreVocabulary">2 Core Vocabulary</a>

**Namespace: [Org.OData.Core.V1](Org.OData.Core.V1.xml)**

Core terms needed to write vocabularies


## Terms

Term|Type|Description
:---|:---|:----------
[ODataVersions](Org.OData.Core.V1.xml#L69)|String|<a name="ODataVersions"></a>A space-separated list of supported versions of the OData Protocol. Note that 4.0 is implied by 4.01 and does not need to be separately listed.
[SchemaVersion](Org.OData.Core.V1.xml#L73)|String|<a name="SchemaVersion"></a>Service-defined value representing the version of the schema. Services MAY use semantic versioning, but clients MUST NOT assume this is the case.
[Revisions](Org.OData.Core.V1.xml#L77)|\[[RevisionType](#RevisionType)\]|<a name="Revisions"></a>List of revisions of a model element
[Description](Org.OData.Core.V1.xml#L105)|String?|<a name="Description"></a>A brief description of a model element
[LongDescription](Org.OData.Core.V1.xml#L110)|String?|<a name="LongDescription"></a>A long description of a model element
[Links](Org.OData.Core.V1.xml#L115)|\[[Link](#Link)\]|<a name="Links"></a>Link to related information
[Example](Org.OData.Core.V1.xml#L129)|[ExampleValue](#ExampleValue)|<a name="Example"></a>Example for an instance of the annotated model element ([Example](Org.OData.Core.V1.xml#L131))
[Messages](Org.OData.Core.V1.xml#L198)|\[[MessageType](#MessageType)\]|<a name="Messages"></a>Instance annotation for warning and info messages
[ValueException](Org.OData.Core.V1.xml#L242)|[ValueExceptionType](#ValueExceptionType)|<a name="ValueException"></a>The annotated value is problematic
[ResourceException](Org.OData.Core.V1.xml#L256)|[ResourceExceptionType](#ResourceExceptionType)|<a name="ResourceException"></a>The annotated instance within a success payload is problematic
[DataModificationException](Org.OData.Core.V1.xml#L266)|[DataModificationExceptionType](#DataModificationExceptionType)|<a name="DataModificationException"></a>A modification operation failed on the annotated instance or collection within a success payload
[IsLanguageDependent](Org.OData.Core.V1.xml#L306)|[Tag](#Tag)|<a name="IsLanguageDependent"></a>Properties and terms annotated with this term are language-dependent
[RequiresType](Org.OData.Core.V1.xml#L317)|String|<a name="RequiresType"></a>Terms annotated with this term can only be applied to elements that have a type that is identical to or derived from the given type name
[AppliesViaContainer](Org.OData.Core.V1.xml#L321)|[Tag](#Tag)|<a name="AppliesViaContainer"></a>The target path of an annotation with the tagged term MUST start with an entity container or the annotation MUST be embedded within an entity container, entity set or singleton<br>Services MAY additionally annotate a container-independent model element (entity type, property, navigation property) if allowed by the `AppliesTo` property of the term and the annotation applies to all uses of that model element.
[ResourcePath](Org.OData.Core.V1.xml#L331)|URL|<a name="ResourcePath"></a>Resource path for entity container child, can be relative to xml:base and the request URL
[DereferenceableIDs](Org.OData.Core.V1.xml#L336)|[Tag](#Tag)|<a name="DereferenceableIDs"></a>Entity-ids are URLs that locate the identified entity
[ConventionalIDs](Org.OData.Core.V1.xml#L340)|[Tag](#Tag)|<a name="ConventionalIDs"></a>Entity-ids follow OData URL conventions
[Permissions](Org.OData.Core.V1.xml#L346)|[Permission](#Permission)|<a name="Permissions"></a>Permissions for accessing a resource
[ContentID](Org.OData.Core.V1.xml#L369)|String|<a name="ContentID"></a>A unique identifier for nested entities within a request.
[DefaultNamespace](Org.OData.Core.V1.xml#L375)|[Tag](#Tag)|<a name="DefaultNamespace"></a>Functions, actions and types in this namespace can be referenced in URLs with or without namespace- or alias- qualification.<br>Data Modelers should ensure uniqueness of schema children across all default namespaces, and should avoid naming bound functions, actions, or derived types with the same name as a structural or navigational property of the type.
[Immutable](Org.OData.Core.V1.xml#L380)|[Tag](#Tag)|<a name="Immutable"></a>A value for this non-key property can be provided by the client on insert and remains unchanged on update
[Computed](Org.OData.Core.V1.xml#L384)|[Tag](#Tag)|<a name="Computed"></a>A value for this property is generated on both insert and update
[ComputedDefaultValue](Org.OData.Core.V1.xml#L388)|[Tag](#Tag)|<a name="ComputedDefaultValue"></a>A value for this property can be provided by the client on insert and update. If no value is provided on insert, a non-static default value is generated
[IsURL](Org.OData.Core.V1.xml#L392)|[Tag](#Tag)|<a name="IsURL"></a>Properties and terms annotated with this term MUST contain a valid URL
[AcceptableMediaTypes](Org.OData.Core.V1.xml#L397)|\[MediaType\]|<a name="AcceptableMediaTypes"></a>Lists the MIME types acceptable for the annotated entity type marked with HasStream="true" or the annotated binary, stream, or string property or term<br>The annotation of a TypeDefinition propagates to the model elements having this type
[MediaType](Org.OData.Core.V1.xml#L403)|MediaType?|<a name="MediaType"></a>The media type of the media stream of the annotated entity type marked with HasStream="true" or the annotated binary, stream, or string property or term<br>The annotation of a TypeDefinition propagates to the model elements having this type
[IsMediaType](Org.OData.Core.V1.xml#L409)|[Tag](#Tag)|<a name="IsMediaType"></a>Properties and terms annotated with this term MUST contain a valid MIME type
[ContentDisposition](Org.OData.Core.V1.xml#L414)|[ContentDispositionType](#ContentDispositionType)|<a name="ContentDisposition"></a>The content disposition of the media stream of the annotated entity type marked with HasStream="true" or the annotated binary, stream, or string property or term
[OptimisticConcurrency](Org.OData.Core.V1.xml#L427)|\[PropertyPath\]|<a name="OptimisticConcurrency"></a>Data modification requires the use of ETags. A non-empty collection contains the set of properties that are used to compute the ETag. An empty collection means that the service won't tell how it computes the ETag
[AdditionalProperties](Org.OData.Core.V1.xml#L431)|[Tag](#Tag)|<a name="AdditionalProperties"></a>Instances of this type may contain properties in addition to those declared in $metadata<br>If specified as false clients can assume that instances will not contain dynamic properties, irrespective of the value of the OpenType attribute.
[AutoExpand](Org.OData.Core.V1.xml#L436)|[Tag](#Tag)|<a name="AutoExpand"></a>The service will automatically expand this stream property, navigation property, or the media stream of this media entity type even if not requested with $expand
[AutoExpandReferences](Org.OData.Core.V1.xml#L440)|[Tag](#Tag)|<a name="AutoExpandReferences"></a>The service will automatically expand this navigation property as entity references even if not requested with $expand=.../$ref
[MayImplement](Org.OData.Core.V1.xml#L444)|\[[QualifiedTypeName](#QualifiedTypeName)\]|<a name="MayImplement"></a>A collection of qualified type names outside of the type hierarchy that instances of this type might be addressable as by using a type-cast segment.
[Ordered](Org.OData.Core.V1.xml#L471)|[Tag](#Tag)|<a name="Ordered"></a>Collection has a stable order. Ordered collections of primitive or complex types can be indexed by ordinal.
[PositionalInsert](Org.OData.Core.V1.xml#L475)|[Tag](#Tag)|<a name="PositionalInsert"></a>Items can be inserted at a given ordinal index.
[AlternateKeys](Org.OData.Core.V1.xml#L479)|\[[AlternateKey](#AlternateKey)\]|<a name="AlternateKeys"></a>Communicates available alternate keys
[OptionalParameter](Org.OData.Core.V1.xml#L507)|[OptionalParameterType](#OptionalParameterType)|<a name="OptionalParameter"></a>Supplying a value for the action or function parameter is optional.<br>All parameters marked as optional must come after any parameters not marked as optional. The binding parameter must not be marked as optional.
[OperationAvailable](Org.OData.Core.V1.xml#L518)|Boolean?|<a name="OperationAvailable"></a>Action or function is available<br>The annotation value will usually be an expression, e.g. using properties of the binding parameter type for instance-dependent availability, or using properties of a singleton for global availability. The static value `null` means that availability cannot be determined upfront and is instead expressed as an operation advertisement.
[RequiresExplicitBinding](Org.OData.Core.V1.xml#L523)|[Tag?](#Tag)|<a name="RequiresExplicitBinding"></a>This bound action or function is only available on model elements annotated with the ExplicitOperationBindings term.
[ExplicitOperationBindings](Org.OData.Core.V1.xml#L527)|\[[QualifiedBoundOperationName](#QualifiedBoundOperationName)\]|<a name="ExplicitOperationBindings"></a>The qualified names of explicitly bound operations that are supported on the target model element. These operations are in addition to any operations not annotated with RequiresExplicitBinding that are bound to the type of the target model element.
[SymbolicName](Org.OData.Core.V1.xml#L536)|[SimpleIdentifier](#SimpleIdentifier)|<a name="SymbolicName"></a>A symbolic name for a model element
[GeometryFeature](Org.OData.Core.V1.xml#L545)|[GeometryFeatureType?](#GeometryFeatureType)|<a name="GeometryFeature"></a>A [Feature Object](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2) represents a spatially bounded thing
[AnyStructure](Org.OData.Core.V1.xml#L561)|[Tag](#Tag)|<a name="AnyStructure"></a>Instances of a type are annotated with this tag if they have no common structure in a given response payload<br>The select-list of a context URL MUST be `(@Core.AnyStructure)` if it would otherwise be empty, but this instance annotation SHOULD be omitted from the response value.

<a name="RevisionType"></a>
## [RevisionType](Org.OData.Core.V1.xml#L80)


Property|Type|Description
:-------|:---|:----------
[Version](Org.OData.Core.V1.xml#L81)|String?|The schema version with which this revision was first published
[Kind](Org.OData.Core.V1.xml#L84)|[RevisionKind](#RevisionKind)|The kind of revision
[Description](Org.OData.Core.V1.xml#L87)|String|Text describing the reason for the revision

<a name="RevisionKind"></a>
## [RevisionKind](Org.OData.Core.V1.xml#L91)


Member|Value|Description
:-----|----:|:----------
[Added](Org.OData.Core.V1.xml#L92)|0|Model element was added
[Modified](Org.OData.Core.V1.xml#L95)|1|Model element was modified
[Deprecated](Org.OData.Core.V1.xml#L98)|2|Model element was deprecated

<a name="Link"></a>
## [Link](Org.OData.Core.V1.xml#L118)
The Link term is inspired by the `atom:link` element, see [RFC4287](https://tools.ietf.org/html/rfc4287#section-4.2.7), and the `Link` HTTP header, see [RFC5988](https://tools.ietf.org/html/rfc5988)

Property|Type|Description
:-------|:---|:----------
[rel](Org.OData.Core.V1.xml#L120)|String|Link relation type, see [IANA Link Relations](http://www.iana.org/assignments/link-relations/link-relations.xhtml)
[href](Org.OData.Core.V1.xml#L123)|URL|URL of related information

<a name="ExampleValue"></a>
## [ExampleValue](Org.OData.Core.V1.xml#L169)


**Derived Types:**
- [PrimitiveExampleValue](#PrimitiveExampleValue)
- [ComplexExampleValue](#ComplexExampleValue)
- [EntityExampleValue](#EntityExampleValue)
- [ExternalExampleValue](#ExternalExampleValue)

Property|Type|Description
:-------|:---|:----------
[Description](Org.OData.Core.V1.xml#L170)|String?|Description of the example value

<a name="PrimitiveExampleValue"></a>
## [PrimitiveExampleValue](Org.OData.Core.V1.xml#L174): [ExampleValue](#ExampleValue)


Property|Type|Description
:-------|:---|:----------
[*Description*](Org.OData.Core.V1.xml#L170)|String?|Description of the example value
[Value](Org.OData.Core.V1.xml#L175)|PrimitiveType|Example value for the custom parameter

<a name="ComplexExampleValue"></a>
## [ComplexExampleValue](Org.OData.Core.V1.xml#L179): [ExampleValue](#ExampleValue)


Property|Type|Description
:-------|:---|:----------
[*Description*](Org.OData.Core.V1.xml#L170)|String?|Description of the example value
[Value](Org.OData.Core.V1.xml#L180)|ComplexType|Example value for the custom parameter

<a name="EntityExampleValue"></a>
## [EntityExampleValue](Org.OData.Core.V1.xml#L184): [ExampleValue](#ExampleValue)


Property|Type|Description
:-------|:---|:----------
[*Description*](Org.OData.Core.V1.xml#L170)|String?|Description of the example value
[Value](Org.OData.Core.V1.xml#L185)|EntityType|Example value for the custom parameter

<a name="ExternalExampleValue"></a>
## [ExternalExampleValue](Org.OData.Core.V1.xml#L189): [ExampleValue](#ExampleValue)


Property|Type|Description
:-------|:---|:----------
[*Description*](Org.OData.Core.V1.xml#L170)|String?|Description of the example value
[ExternalValue](Org.OData.Core.V1.xml#L190)|URL|Url reference to the value in its literal format

<a name="MessageType"></a>
## [MessageType](Org.OData.Core.V1.xml#L201)


Property|Type|Description
:-------|:---|:----------
[code](Org.OData.Core.V1.xml#L202)|String|Machine-readable, language-independent message code
[message](Org.OData.Core.V1.xml#L205)|String|Human-readable, language-dependent message text
[severity](Org.OData.Core.V1.xml#L209)|[MessageSeverity](#MessageSeverity)|Severity of the message
[target](Org.OData.Core.V1.xml#L212)|String?|A path to the target of the message detail, relative to the annotated instance
[details](Org.OData.Core.V1.xml#L215)|\[[MessageType](#MessageType)\]|List of detail messages

<a name="MessageSeverity"></a>
## [MessageSeverity](Org.OData.Core.V1.xml#L219)
**Type:** String



Allowed Value|Description
:------------|:----------
[success](Org.OData.Core.V1.xml#L222)|Positive feedback - no action required
[info](Org.OData.Core.V1.xml#L226)|Additional information - no action required
[warning](Org.OData.Core.V1.xml#L230)|Warning - action may be required
[error](Org.OData.Core.V1.xml#L234)|Error - action is required

<a name="ExceptionType"></a>
## [*ExceptionType*](Org.OData.Core.V1.xml#L245)


**Derived Types:**
- [ValueExceptionType](#ValueExceptionType)
- [ResourceExceptionType](#ResourceExceptionType)
- [DataModificationExceptionType](#DataModificationExceptionType)

Property|Type|Description
:-------|:---|:----------
[info](Org.OData.Core.V1.xml#L246)|[MessageType?](#MessageType)|Information about the exception

<a name="ValueExceptionType"></a>
## [ValueExceptionType](Org.OData.Core.V1.xml#L250): [ExceptionType](#ExceptionType)


Property|Type|Description
:-------|:---|:----------
[*info*](Org.OData.Core.V1.xml#L246)|[MessageType?](#MessageType)|Information about the exception
[value](Org.OData.Core.V1.xml#L251)|String?|String representation of the exact value

<a name="ResourceExceptionType"></a>
## [ResourceExceptionType](Org.OData.Core.V1.xml#L259): [ExceptionType](#ExceptionType)


Property|Type|Description
:-------|:---|:----------
[*info*](Org.OData.Core.V1.xml#L246)|[MessageType?](#MessageType)|Information about the exception
[retryLink](Org.OData.Core.V1.xml#L260)|URL?|A GET request to this URL retries retrieving the problematic instance

<a name="DataModificationExceptionType"></a>
## [DataModificationExceptionType](Org.OData.Core.V1.xml#L269): [ExceptionType](#ExceptionType)


Property|Type|Description
:-------|:---|:----------
[*info*](Org.OData.Core.V1.xml#L246)|[MessageType?](#MessageType)|Information about the exception
[failedOperation](Org.OData.Core.V1.xml#L270)|[DataModificationOperationKind](#DataModificationOperationKind)|The kind of modification operation that failed
[responseCode](Org.OData.Core.V1.xml#L273)|Int16?|Response code of the failed operation, e.g. 424 for a failed dependency

<a name="DataModificationOperationKind"></a>
## [DataModificationOperationKind](Org.OData.Core.V1.xml#L279)


Member|Value|Description
:-----|----:|:----------
[insert](Org.OData.Core.V1.xml#L280)|0|Insert new instance
[update](Org.OData.Core.V1.xml#L283)|1|Update existing instance
[upsert](Org.OData.Core.V1.xml#L286)|2|Insert new instance or update it if it already exists
[delete](Org.OData.Core.V1.xml#L289)|3|Delete existing instance
[invoke](Org.OData.Core.V1.xml#L292)|4|Invoke action or function
[link](Org.OData.Core.V1.xml#L295)|5|Add link between entities
[unlink](Org.OData.Core.V1.xml#L298)|6|Remove link between entities

<a name="Tag"></a>
## [Tag](Org.OData.Core.V1.xml#L311)
**Type:** Boolean

This is the type to use for all tagging terms

<a name="Permission"></a>
## [Permission](Org.OData.Core.V1.xml#L349)


Flag Member|Value|Description
:-----|----:|:----------
[None](Org.OData.Core.V1.xml#L350)|0|No permissions
[Read](Org.OData.Core.V1.xml#L353)|1|Read permission
[Write](Org.OData.Core.V1.xml#L356)|2|Write permission
[ReadWrite](Org.OData.Core.V1.xml#L359)|3|Read and write permission
[Invoke](Org.OData.Core.V1.xml#L362)|4|Permission to invoke actions

<a name="ContentDispositionType"></a>
## [ContentDispositionType](Org.OData.Core.V1.xml#L418)


Property|Type|Description
:-------|:---|:----------
[Type](Org.OData.Core.V1.xml#L419)|String|The disposition type of the binary or stream value, see [RFC 6266, Disposition Type](https://datatracker.ietf.org/doc/html/rfc6266#section-4.2)
[Filename](Org.OData.Core.V1.xml#L422)|String?|The proposed filename for downloading the binary or stream value, see [RFC 6266, Disposition Parameter: 'Filename'](https://datatracker.ietf.org/doc/html/rfc6266#section-4.3)

<a name="QualifiedTermName"></a>
## [QualifiedTermName](Org.OData.Core.V1.xml#L448)
**Type:** String

The qualified name of a term in scope.

<a name="QualifiedTypeName"></a>
## [QualifiedTypeName](Org.OData.Core.V1.xml#L452)
**Type:** String

The qualified name of a type in scope.

<a name="QualifiedActionName"></a>
## [QualifiedActionName](Org.OData.Core.V1.xml#L456)
**Type:** String

The qualified name of an action in scope.

<a name="QualifiedBoundOperationName"></a>
## [QualifiedBoundOperationName](Org.OData.Core.V1.xml#L460)
**Type:** String

The qualified name of a bound action or function in scope.

Either
- the qualified name of an action, to indicate the single bound overload with the specified binding parameter type, 
- the qualified name of a function, to indicate all bound overloads with the specified binding parameter type, or 
- the qualified name of a function followed by parentheses containing a comma-separated list of parameter types, in the order of their definition, to identify a single function overload with the first (binding) parameter matching the specified parameter type.
        

<a name="AlternateKey"></a>
## [AlternateKey](Org.OData.Core.V1.xml#L482)


Property|Type|Description
:-------|:---|:----------
[Key](Org.OData.Core.V1.xml#L483)|\[[PropertyRef](#PropertyRef)\]|The set of properties that make up this key

<a name="PropertyRef"></a>
## [PropertyRef](Org.OData.Core.V1.xml#L487)


Property|Type|Description
:-------|:---|:----------
[Name](Org.OData.Core.V1.xml#L488)|PropertyPath|A path expression resolving to a primitive property of the entity type itself or to a primitive property of a complex or navigation property (recursively) of the entity type. The names of the properties in the path are joined together by forward slashes.
[Alias](Org.OData.Core.V1.xml#L491)|String|A SimpleIdentifier that MUST be unique within the set of aliases, structural and navigation properties of the containing entity type that MUST be used in the key predicate of URLs

<a name="Dictionary"></a>
## [Dictionary](Org.OData.Core.V1.xml#L496)
A dictionary of name-value pairs. Names must be valid property names, values may be restricted to a list of types via an annotation with term `Validation.OpenPropertyTypeConstraint`.


Property|Type
:-------|:---
Any simple identifier | Any type listed in `Validation.OpenPropertyTypeConstraint`, or any type if there is no constraint


<a name="OptionalParameterType"></a>
## [OptionalParameterType](Org.OData.Core.V1.xml#L511)


Property|Type|Description
:-------|:---|:----------
[DefaultValue](Org.OData.Core.V1.xml#L512)|String?|Default value for an optional parameter of primitive or enumeration type, using the same rules as the `cast` function in URLs.<br>If no explicit DefaultValue is specified, the service is free on how to interpret omitting the parameter from the request. For example, a service might interpret an omitted optional parameter `KeyDate` as having the current date.

<a name="LocalDateTime"></a>
## [LocalDateTime](Org.OData.Core.V1.xml#L531)
**Type:** String

A string representing a Local Date-Time value with no offset.

<a name="SimpleIdentifier"></a>
## [SimpleIdentifier](Org.OData.Core.V1.xml#L540)
**Type:** String

A [simple identifier](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_SimpleIdentifier)

<a name="GeometryFeatureType"></a>
## [GeometryFeatureType](Org.OData.Core.V1.xml#L548)
A [Feature Object](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2) represents a spatially bounded thing

Property|Type|Description
:-------|:---|:----------
[geometry](Org.OData.Core.V1.xml#L550)|Geometry?|Location of the Feature
[properties](Org.OData.Core.V1.xml#L553)|[Dictionary?](#Dictionary)|Properties of the Feature
[id](Org.OData.Core.V1.xml#L556)|String?|Commonly used identifer for a Feature

-------

# <a name="CapabilitiesVocabulary" href="#CapabilitiesVocabulary">3 Capabilities Vocabulary</a>

**Namespace: [Org.OData.Capabilities.V1](Org.OData.Capabilities.V1.xml)**

Terms describing capabilities of a service


There are some capabilities which are strongly recommended for services to support even
though they are optional. Support for $top and $skip is a good example as
supporting these query options helps with performance of a service and are essential. Such
capabilities are assumed to be default capabilities of an OData service even in
the case that a capabilities annotation doesn’t exist. Capabilities annotations are
mainly expected to be used to explicitly specify that a service doesn’t support such
capabilities. Capabilities annotations can as well be used to declaratively
specify the support of such capabilities.

On the other hand, there are some capabilities that a service may choose to support or
not support and in varying degrees. $filter and $orderby are such good examples.
This vocabulary aims to define terms to specify support or no support for such
capabilities.

A service is assumed to support by default the following capabilities even though an
annotation doesn’t exist:
- Countability ($count)
- Client pageability ($top, $skip)
- Expandability ($expand)
- Indexability by key
- Batch support ($batch)
- Navigability of navigation properties

A service is expected to support the following capabilities. If not supported, the
service is expected to call out the restrictions using annotations:
- Filterability ($filter)
- Sortability ($orderby)
- Queryability of top level entity sets
- Query functions

A client cannot assume that a service supports certain capabilities. A client can try, but
it needs to be prepared to handle an error in case the following capabilities are not
supported:
- Insertability
- Updatability
- Deletability
        


## Terms

Term|Type|Description
:---|:---|:----------
[ConformanceLevel](Org.OData.Capabilities.V1.xml#L115)|[ConformanceLevelType](#ConformanceLevelType)|<a name="ConformanceLevel"></a>The conformance level achieved by this service
[SupportedFormats](Org.OData.Capabilities.V1.xml#L132)|\[MediaType\]|<a name="SupportedFormats"></a>Media types of supported formats, including format parameters
[SupportedMetadataFormats](Org.OData.Capabilities.V1.xml#L137)|\[MediaType\]|<a name="SupportedMetadataFormats"></a>Media types of supported formats for $metadata, including format parameters
[AcceptableEncodings](Org.OData.Capabilities.V1.xml#L142)|\[String\]|<a name="AcceptableEncodings"></a>List of acceptable compression methods for ($batch) requests, e.g. gzip
[AsynchronousRequestsSupported](Org.OData.Capabilities.V1.xml#L148)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="AsynchronousRequestsSupported"></a>Service supports the asynchronous request preference
[BatchContinueOnErrorSupported](Org.OData.Capabilities.V1.xml#L152)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="BatchContinueOnErrorSupported"></a>Service supports the continue on error preference. Supports $batch requests. Services that apply the BatchContinueOnErrorSupported term should also specify the ContinueOnErrorSupported property from the BatchSupport term.
[IsolationSupported](Org.OData.Capabilities.V1.xml#L156)|[IsolationLevel](#IsolationLevel)|<a name="IsolationSupported"></a>Supported odata.isolation levels
[CrossJoinSupported](Org.OData.Capabilities.V1.xml#L165)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="CrossJoinSupported"></a>Supports cross joins for the entity sets in this container
[CallbackSupported](Org.OData.Capabilities.V1.xml#L169)|[CallbackType](#CallbackType)|<a name="CallbackSupported"></a>Supports callbacks for the specified protocols
[ChangeTracking](Org.OData.Capabilities.V1.xml#L191)|[ChangeTrackingType](#ChangeTrackingType)|<a name="ChangeTracking"></a>Change tracking capabilities of this service or entity set
[CountRestrictions](Org.OData.Capabilities.V1.xml#L212)|[CountRestrictionsType](#CountRestrictionsType)|<a name="CountRestrictions"></a>Restrictions on /$count path suffix and $count=true system query option
[NavigationRestrictions](Org.OData.Capabilities.V1.xml#L230)|[NavigationRestrictionsType](#NavigationRestrictionsType)|<a name="NavigationRestrictions"></a>Restrictions on navigating properties according to OData URL conventions<br>Restrictions specified on an entity set are valid whether the request is directly to the entity set or through a navigation property bound to that entity set. Services can specify a different set of restrictions specific to a path, in which case the more specific restrictions take precedence.
[IndexableByKey](Org.OData.Capabilities.V1.xml#L321)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="IndexableByKey"></a>Supports key values according to OData URL conventions
[TopSupported](Org.OData.Capabilities.V1.xml#L326)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="TopSupported"></a>Supports $top
[SkipSupported](Org.OData.Capabilities.V1.xml#L331)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="SkipSupported"></a>Supports $skip
[ComputeSupported](Org.OData.Capabilities.V1.xml#L336)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="ComputeSupported"></a>Supports $compute
[SelectSupport](Org.OData.Capabilities.V1.xml#L341)|[SelectSupportType](#SelectSupportType)|<a name="SelectSupport"></a>Support for $select and nested query options within $select
[BatchSupported](Org.OData.Capabilities.V1.xml#L378)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="BatchSupported"></a>Supports $batch requests. Services that apply the BatchSupported term should also apply the more comprehensive BatchSupport term.
[BatchSupport](Org.OData.Capabilities.V1.xml#L382)|[BatchSupportType](#BatchSupportType)|<a name="BatchSupport"></a>Batch Support for the service
[FilterFunctions](Org.OData.Capabilities.V1.xml#L428)|\[String\]|<a name="FilterFunctions"></a>List of functions and operators supported in filter expressions<br>If not specified, null, or empty, all functions and operators may be attempted.
[FilterRestrictions](Org.OData.Capabilities.V1.xml#L434)|[FilterRestrictionsType](#FilterRestrictionsType)|<a name="FilterRestrictions"></a>Restrictions on filter expressions
[SortRestrictions](Org.OData.Capabilities.V1.xml#L506)|[SortRestrictionsType](#SortRestrictionsType)|<a name="SortRestrictions"></a>Restrictions on orderby expressions
[ExpandRestrictions](Org.OData.Capabilities.V1.xml#L532)|[ExpandRestrictionsType](#ExpandRestrictionsType)|<a name="ExpandRestrictions"></a>Restrictions on expand expressions
[SearchRestrictions](Org.OData.Capabilities.V1.xml#L562)|[SearchRestrictionsType](#SearchRestrictionsType)|<a name="SearchRestrictions"></a>Restrictions on search expressions
[KeyAsSegmentSupported](Org.OData.Capabilities.V1.xml#L600)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="KeyAsSegmentSupported"></a>Supports [key-as-segment convention](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_KeyasSegmentConvention) for addressing entities within a collection
[QuerySegmentSupported](Org.OData.Capabilities.V1.xml#L604)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="QuerySegmentSupported"></a>Supports [passing query options in the request body](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_PassingQueryOptionsintheRequestBody)
[InsertRestrictions](Org.OData.Capabilities.V1.xml#L610)|[InsertRestrictionsType](#InsertRestrictionsType)|<a name="InsertRestrictions"></a>Restrictions on insert operations
[DeepInsertSupport](Org.OData.Capabilities.V1.xml#L689)|[DeepInsertSupportType?](#DeepInsertSupportType)|<a name="DeepInsertSupport"></a>Deep Insert Support of the annotated resource (the whole service, an entity set, or a collection-valued resource)
[UpdateRestrictions](Org.OData.Capabilities.V1.xml#L702)|[UpdateRestrictionsType](#UpdateRestrictionsType)|<a name="UpdateRestrictions"></a>Restrictions on update operations
[DeepUpdateSupport](Org.OData.Capabilities.V1.xml#L788)|[DeepUpdateSupportType](#DeepUpdateSupportType)|<a name="DeepUpdateSupport"></a>Deep Update Support of the annotated resource (the whole service, an entity set, or a collection-valued resource)
[DeleteRestrictions](Org.OData.Capabilities.V1.xml#L801)|[DeleteRestrictionsType](#DeleteRestrictionsType)|<a name="DeleteRestrictions"></a>Restrictions on delete operations
[CollectionPropertyRestrictions](Org.OData.Capabilities.V1.xml#L845)|\[[CollectionPropertyRestrictionsType](#CollectionPropertyRestrictionsType)\]|<a name="CollectionPropertyRestrictions"></a>Describes restrictions on operations applied to collection-valued structural properties
[OperationRestrictions](Org.OData.Capabilities.V1.xml#L886)|[OperationRestrictionsType](#OperationRestrictionsType)|<a name="OperationRestrictions"></a>Restrictions for function or action operation
[AnnotationValuesInQuerySupported](Org.OData.Capabilities.V1.xml#L906)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="AnnotationValuesInQuerySupported"></a>Supports annotation values within system query options
[ModificationQueryOptions](Org.OData.Capabilities.V1.xml#L910)|[ModificationQueryOptionsType](#ModificationQueryOptionsType)|<a name="ModificationQueryOptions"></a>Support for query options with modification requests (insert, update, action invocation)
[ReadRestrictions](Org.OData.Capabilities.V1.xml#L934)|[ReadRestrictionsType](#ReadRestrictionsType)|<a name="ReadRestrictions"></a>Restrictions for retrieving a collection of entities, retrieving a singleton instance.
[CustomHeaders](Org.OData.Capabilities.V1.xml#L976)|\[[CustomParameter](#CustomParameter)\]|<a name="CustomHeaders"></a>Custom headers that are supported/required for the annotated resource ([Example](Org.OData.Capabilities.V1.xml#L978))
[CustomQueryOptions](Org.OData.Capabilities.V1.xml#L1002)|\[[CustomParameter](#CustomParameter)\]|<a name="CustomQueryOptions"></a>Custom query options that are supported/required for the annotated resource ([Example](Org.OData.Capabilities.V1.xml#L1005))<br>If the entity container is annotated, the query option is supported/required by all resources in that container.
[MediaLocationUpdateSupported](Org.OData.Capabilities.V1.xml#L1054)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="MediaLocationUpdateSupported"></a>Stream property or media stream supports update of its media edit URL and/or media read URL
[DefaultCapabilities](Org.OData.Capabilities.V1.xml#L1059)|[DefaultCapabilitiesType](#DefaultCapabilitiesType)|<a name="DefaultCapabilities"></a>Default capability settings for all collection-valued resources in the container<br><p>Annotating a specific capability term, which is included as property in <code>DefaultCapabilitiesType</code>, for a specific collection-valued resource overrides the default capability with the specified properties using PATCH semantics:</p> <ul> <li>Primitive or collection-valued properties specified in the specific capability term replace the corresponding properties specified in <code>DefaultCapabilities</code></li> <li>Complex-valued properties specified in the specific capability term override the corresponding properties specified in <code>DefaultCapabilities</code> using PATCH semantics recursively</li> <li>Properties specified neither in the specific term nor in <code>DefaultCapabilities</code> have their default value</li> </ul> 

<a name="ConformanceLevelType"></a>
## [ConformanceLevelType](Org.OData.Capabilities.V1.xml#L118)


Member|Value|Description
:-----|----:|:----------
[Minimal](Org.OData.Capabilities.V1.xml#L119)|0|Minimal conformance level
[Intermediate](Org.OData.Capabilities.V1.xml#L122)|1|Intermediate conformance level
[Advanced](Org.OData.Capabilities.V1.xml#L125)|2|Advanced conformance level

<a name="IsolationLevel"></a>
## [IsolationLevel](Org.OData.Capabilities.V1.xml#L159)


Flag Member|Value|Description
:-----|----:|:----------
[Snapshot](Org.OData.Capabilities.V1.xml#L160)|1|All data returned for a request, including multiple requests within a batch or results retrieved across multiple pages, will be consistent as of a single point in time

<a name="CallbackType"></a>
## [CallbackType](Org.OData.Capabilities.V1.xml#L172)
A non-empty collection lists the full set of supported protocols. A empty collection means 'only HTTP is supported'

Property|Type|Description
:-------|:---|:----------
[CallbackProtocols](Org.OData.Capabilities.V1.xml#L173)|\[[CallbackProtocol](#CallbackProtocol)\]|List of supported callback protocols, e.g. `http` or `wss`

<a name="CallbackProtocol"></a>
## [CallbackProtocol](Org.OData.Capabilities.V1.xml#L178)


Property|Type|Description
:-------|:---|:----------
[Id](Org.OData.Capabilities.V1.xml#L179)|String?|Protocol Identifier
[UrlTemplate](Org.OData.Capabilities.V1.xml#L182)|String?|URL Template including parameters. Parameters are enclosed in curly braces {} as defined in RFC6570
[DocumentationUrl](Org.OData.Capabilities.V1.xml#L185)|URL?|Human readable description of the meaning of the URL Template parameters

<a name="ChangeTrackingBase"></a>
## [ChangeTrackingBase](Org.OData.Capabilities.V1.xml#L194)


**Derived Types:**
- [ChangeTrackingType](#ChangeTrackingType)

Property|Type|Description
:-------|:---|:----------
[Supported](Org.OData.Capabilities.V1.xml#L195)|Boolean|odata.track-changes preference is supported

<a name="ChangeTrackingType"></a>
## [ChangeTrackingType](Org.OData.Capabilities.V1.xml#L199): [ChangeTrackingBase](#ChangeTrackingBase)


Property|Type|Description
:-------|:---|:----------
[*Supported*](Org.OData.Capabilities.V1.xml#L195)|Boolean|odata.track-changes preference is supported
[FilterableProperties](Org.OData.Capabilities.V1.xml#L200)|\[PropertyPath\]|Change tracking supports filters on these properties<br>If no properties are specified or FilterableProperties is omitted, clients cannot assume support for filtering on any properties in combination with change tracking.
[ExpandableProperties](Org.OData.Capabilities.V1.xml#L204)|\[NavigationPropertyPath\]|Change tracking supports these properties expanded<br>If no properties are specified or ExpandableProperties is omitted, clients cannot assume support for expanding any properties in combination with change tracking.

<a name="CountRestrictionsBase"></a>
## [CountRestrictionsBase](Org.OData.Capabilities.V1.xml#L216)


**Derived Types:**
- [CountRestrictionsType](#CountRestrictionsType)

Property|Type|Description
:-------|:---|:----------
[Countable](Org.OData.Capabilities.V1.xml#L217)|Boolean|Instances can be counted in requests targeting a collection

<a name="CountRestrictionsType"></a>
## [CountRestrictionsType](Org.OData.Capabilities.V1.xml#L221): [CountRestrictionsBase](#CountRestrictionsBase)


Property|Type|Description
:-------|:---|:----------
[*Countable*](Org.OData.Capabilities.V1.xml#L217)|Boolean|Instances can be counted in requests targeting a collection
[NonCountableProperties](Org.OData.Capabilities.V1.xml#L222)|\[PropertyPath\]|Members of these collection properties cannot be counted
[NonCountableNavigationProperties](Org.OData.Capabilities.V1.xml#L225)|\[NavigationPropertyPath\]|Members of these navigation properties cannot be counted

<a name="NavigationRestrictionsType"></a>
## [NavigationRestrictionsType](Org.OData.Capabilities.V1.xml#L235)


Property|Type|Description
:-------|:---|:----------
[Navigability](Org.OData.Capabilities.V1.xml#L236)|[NavigationType?](#NavigationType)|Default navigability for all navigation properties of the annotation target. Individual navigation properties can override this value via `RestrictedProperties/Navigability`.
[RestrictedProperties](Org.OData.Capabilities.V1.xml#L239)|\[[NavigationPropertyRestriction](#NavigationPropertyRestriction)\]|List of navigation properties with restrictions

<a name="NavigationPropertyRestriction"></a>
## [NavigationPropertyRestriction](Org.OData.Capabilities.V1.xml#L243)


Using a property of `NavigationPropertyRestriction` in a [`NavigationRestrictions`](#NavigationRestrictions) annotation
          is discouraged in favor of using an annotation with the corresponding term from this vocabulary and a target path starting with a container and ending in the `NavigationProperty`,
          unless the favored alternative is impossible because a dynamic expression requires an instance path whose evaluation
          starts at the target of the `NavigationRestrictions` annotation. See [this example](../examples/Org.OData.Capabilities.V1.capabilities.md).

Property|Type|Description
:-------|:---|:----------
[NavigationProperty](Org.OData.Capabilities.V1.xml#L250)|NavigationPropertyPath|Navigation properties can be navigated<br>The target path of a [`NavigationRestrictions`](#NavigationRestrictions) annotation followed by this navigation property path addresses the resource to which the other properties of `NavigationPropertyRestriction` apply. Instance paths that occur in dynamic expressions are evaluated starting at the boundary between both paths, which must therefore be chosen accordingly.
[Navigability](Org.OData.Capabilities.V1.xml#L259)|[NavigationType?](#NavigationType)|Supported navigability of this navigation property
[FilterFunctions](Org.OData.Capabilities.V1.xml#L262)|\[String\]|List of functions and operators supported in filter expressions<br>If not specified, null, or empty, all functions and operators may be attempted.
[FilterRestrictions](Org.OData.Capabilities.V1.xml#L266)|[FilterRestrictionsType?](#FilterRestrictionsType)|Restrictions on filter expressions
[SearchRestrictions](Org.OData.Capabilities.V1.xml#L269)|[SearchRestrictionsType?](#SearchRestrictionsType)|Restrictions on search expressions
[SortRestrictions](Org.OData.Capabilities.V1.xml#L272)|[SortRestrictionsType?](#SortRestrictionsType)|Restrictions on orderby expressions
[TopSupported](Org.OData.Capabilities.V1.xml#L275)|Boolean|Supports $top
[SkipSupported](Org.OData.Capabilities.V1.xml#L278)|Boolean|Supports $skip
[SelectSupport](Org.OData.Capabilities.V1.xml#L281)|[SelectSupportType?](#SelectSupportType)|Support for $select
[IndexableByKey](Org.OData.Capabilities.V1.xml#L284)|Boolean|Supports key values according to OData URL conventions
[InsertRestrictions](Org.OData.Capabilities.V1.xml#L287)|[InsertRestrictionsType?](#InsertRestrictionsType)|Restrictions on insert operations
[DeepInsertSupport](Org.OData.Capabilities.V1.xml#L290)|[DeepInsertSupportType?](#DeepInsertSupportType)|Deep Insert Support of the annotated resource (the whole service, an entity set, or a collection-valued resource)
[UpdateRestrictions](Org.OData.Capabilities.V1.xml#L293)|[UpdateRestrictionsType?](#UpdateRestrictionsType)|Restrictions on update operations
[DeepUpdateSupport](Org.OData.Capabilities.V1.xml#L296)|[DeepUpdateSupportType?](#DeepUpdateSupportType)|Deep Update Support of the annotated resource (the whole service, an entity set, or a collection-valued resource)
[DeleteRestrictions](Org.OData.Capabilities.V1.xml#L299)|[DeleteRestrictionsType?](#DeleteRestrictionsType)|Restrictions on delete operations
[OptimisticConcurrencyControl](Org.OData.Capabilities.V1.xml#L302)|Boolean|Data modification (including insert) along this navigation property requires the use of ETags
[ReadRestrictions](Org.OData.Capabilities.V1.xml#L305)|[ReadRestrictionsType?](#ReadRestrictionsType)|Restrictions for retrieving entities

<a name="NavigationType"></a>
## [NavigationType](Org.OData.Capabilities.V1.xml#L309)


Member|Value|Description
:-----|----:|:----------
[Recursive](Org.OData.Capabilities.V1.xml#L310)|0|Navigation properties can be recursively navigated
[Single](Org.OData.Capabilities.V1.xml#L313)|1|Navigation properties can be navigated to a single level
[None](Org.OData.Capabilities.V1.xml#L316)|2|Navigation properties are not navigable

<a name="SelectSupportType"></a>
## [SelectSupportType](Org.OData.Capabilities.V1.xml#L345)


Property|Type|Description
:-------|:---|:----------
[Supported](Org.OData.Capabilities.V1.xml#L346)|Boolean|Supports $select
[InstanceAnnotationsSupported](Org.OData.Capabilities.V1.xml#L349)|Boolean|Supports instance annotations in $select list
[Expandable](Org.OData.Capabilities.V1.xml#L352)|Boolean|$expand within $select is supported
[Filterable](Org.OData.Capabilities.V1.xml#L355)|Boolean|$filter within $select is supported
[Searchable](Org.OData.Capabilities.V1.xml#L358)|Boolean|$search within $select is supported
[TopSupported](Org.OData.Capabilities.V1.xml#L361)|Boolean|$top within $select is supported
[SkipSupported](Org.OData.Capabilities.V1.xml#L364)|Boolean|$skip within $select is supported
[ComputeSupported](Org.OData.Capabilities.V1.xml#L367)|Boolean|$compute within $select is supported
[Countable](Org.OData.Capabilities.V1.xml#L370)|Boolean|$count within $select is supported
[Sortable](Org.OData.Capabilities.V1.xml#L373)|Boolean|$orderby within $select is supported

<a name="BatchSupportType"></a>
## [BatchSupportType](Org.OData.Capabilities.V1.xml#L385)


Property|Type|Description
:-------|:---|:----------
[Supported](Org.OData.Capabilities.V1.xml#L392)|Boolean|Service supports requests to $batch
[ContinueOnErrorSupported](Org.OData.Capabilities.V1.xml#L395)|Boolean|Service supports the continue on error preference
[ReferencesInRequestBodiesSupported](Org.OData.Capabilities.V1.xml#L398)|Boolean|Service supports Content-ID referencing in request bodies
[ReferencesAcrossChangeSetsSupported](Org.OData.Capabilities.V1.xml#L401)|Boolean|Service supports Content-ID referencing across change sets
[EtagReferencesSupported](Org.OData.Capabilities.V1.xml#L404)|Boolean|Service supports referencing Etags from previous requests
[RequestDependencyConditionsSupported](Org.OData.Capabilities.V1.xml#L407)|Boolean|Service supports the `if` member in JSON batch requests
[SupportedFormats](Org.OData.Capabilities.V1.xml#L410)|\[MediaType\]|Media types of supported formats for $batch<dl>Allowed values:<dt>[multipart/mixed](Org.OData.Capabilities.V1.xml#L415)<dd>[Multipart Batch Format](http://docs.oasis-open.org/odata/odata/v4.01/cs01/part1-protocol/odata-v4.01-cs01-part1-protocol.html#sec_MultipartBatchFormat)<dt>[application/json](Org.OData.Capabilities.V1.xml#L419)<dd>[JSON Batch Format](http://docs.oasis-open.org/odata/odata-json-format/v4.01/cs01/odata-json-format-v4.01-cs01.html#sec_BatchRequestsandResponses)</dl>

**Applicable Annotation Terms:**

- [Description](Org.OData.Core.V1.md#Description)
- [LongDescription](Org.OData.Core.V1.md#LongDescription)

<a name="FilterRestrictionsBase"></a>
## [FilterRestrictionsBase](Org.OData.Capabilities.V1.xml#L438)


**Derived Types:**
- [FilterRestrictionsType](#FilterRestrictionsType)

Property|Type|Description
:-------|:---|:----------
[Filterable](Org.OData.Capabilities.V1.xml#L444)|Boolean|$filter is supported
[RequiresFilter](Org.OData.Capabilities.V1.xml#L447)|Boolean|$filter is required
[MaxLevels](Org.OData.Capabilities.V1.xml#L450)|Int32|The maximum number of levels (including recursion) that can be traversed in a filter expression. A value of -1 indicates there is no restriction.

**Applicable Annotation Terms:**

- [Description](Org.OData.Core.V1.md#Description)

<a name="FilterRestrictionsType"></a>
## [FilterRestrictionsType](Org.OData.Capabilities.V1.xml#L454): [FilterRestrictionsBase](#FilterRestrictionsBase)


Property|Type|Description
:-------|:---|:----------
[*Filterable*](Org.OData.Capabilities.V1.xml#L444)|Boolean|$filter is supported
[*RequiresFilter*](Org.OData.Capabilities.V1.xml#L447)|Boolean|$filter is required
[*MaxLevels*](Org.OData.Capabilities.V1.xml#L450)|Int32|The maximum number of levels (including recursion) that can be traversed in a filter expression. A value of -1 indicates there is no restriction.
[RequiredProperties](Org.OData.Capabilities.V1.xml#L455)|\[PropertyPath\]|These properties must be specified in the $filter clause (properties of derived types are not allowed here)
[NonFilterableProperties](Org.OData.Capabilities.V1.xml#L458)|\[PropertyPath\]|These structural properties cannot be used in filter expressions
[FilterExpressionRestrictions](Org.OData.Capabilities.V1.xml#L461)|\[[FilterExpressionRestrictionType](#FilterExpressionRestrictionType)\]|These properties only allow a subset of filter expressions. A valid filter expression for a single property can be enclosed in parentheses and combined by `and` with valid expressions for other properties.

**Applicable Annotation Terms:**

- [Description](Org.OData.Core.V1.md#Description)

<a name="FilterExpressionRestrictionType"></a>
## [FilterExpressionRestrictionType](Org.OData.Capabilities.V1.xml#L465)


Property|Type|Description
:-------|:---|:----------
[Property](Org.OData.Capabilities.V1.xml#L466)|PropertyPath?|Path to the restricted property
[AllowedExpressions](Org.OData.Capabilities.V1.xml#L469)|[FilterExpressionType?](#FilterExpressionType)|Allowed subset of expressions

<a name="FilterExpressionType"></a>
## [FilterExpressionType](Org.OData.Capabilities.V1.xml#L473)
**Type:** String



Allowed Value|Description
:------------|:----------
[SingleValue](Org.OData.Capabilities.V1.xml#L476)|Property can be used in a single `eq` clause
[MultiValue](Org.OData.Capabilities.V1.xml#L480)|Property can be used in multiple `eq` and `in` clauses, combined by `or` (which is logically equivalent to a single `in` clause)
[SingleRange](Org.OData.Capabilities.V1.xml#L484)|Property can be used in at most one `ge` and/or one `le` clause, separated by `and`
[MultiRange](Org.OData.Capabilities.V1.xml#L488)|Property can be compared to a union of one or more closed, half-open, or open intervals<br>The filter expression for this property consists of one or more interval expressions combined by `or`. A single interval expression is either a single comparison of the property and a literal value with `eq`, `le`, `lt`, `ge`, or `gt`, or pair of boundaries combined by `and` and enclosed in parentheses. The lower boundary is either `ge` or `gt`, the upper boundary either `le` or `lt`.
[SearchExpression](Org.OData.Capabilities.V1.xml#L493)|String property can be used as first operand in `startswith`, `endswith`, and `contains` clauses
[MultiRangeOrSearchExpression](Org.OData.Capabilities.V1.xml#L497)|Property can be compared to a union of zero or more closed, half-open, or open intervals plus zero or more simple string patterns<br>The filter expression for this property consists of one or more interval expressions or string comparison functions combined by `or`. See MultiRange for a definition of an interval expression. See SearchExpression for the allowed string comparison functions.

<a name="SortRestrictionsBase"></a>
## [SortRestrictionsBase](Org.OData.Capabilities.V1.xml#L510)


**Derived Types:**
- [SortRestrictionsType](#SortRestrictionsType)

Property|Type|Description
:-------|:---|:----------
[Sortable](Org.OData.Capabilities.V1.xml#L516)|Boolean|$orderby is supported

**Applicable Annotation Terms:**

- [Description](Org.OData.Core.V1.md#Description)

<a name="SortRestrictionsType"></a>
## [SortRestrictionsType](Org.OData.Capabilities.V1.xml#L520): [SortRestrictionsBase](#SortRestrictionsBase)


Property|Type|Description
:-------|:---|:----------
[*Sortable*](Org.OData.Capabilities.V1.xml#L516)|Boolean|$orderby is supported
[AscendingOnlyProperties](Org.OData.Capabilities.V1.xml#L521)|\[PropertyPath\]|These properties can only be used for sorting in Ascending order
[DescendingOnlyProperties](Org.OData.Capabilities.V1.xml#L524)|\[PropertyPath\]|These properties can only be used for sorting in Descending order
[NonSortableProperties](Org.OData.Capabilities.V1.xml#L527)|\[PropertyPath\]|These structural properties cannot be used in orderby expressions

**Applicable Annotation Terms:**

- [Description](Org.OData.Core.V1.md#Description)

<a name="ExpandRestrictionsBase"></a>
## [ExpandRestrictionsBase](Org.OData.Capabilities.V1.xml#L536)


**Derived Types:**
- [ExpandRestrictionsType](#ExpandRestrictionsType)

Property|Type|Description
:-------|:---|:----------
[Expandable](Org.OData.Capabilities.V1.xml#L542)|Boolean|$expand is supported
[StreamsExpandable](Org.OData.Capabilities.V1.xml#L545)|Boolean|$expand is supported for stream properties and media streams
[MaxLevels](Org.OData.Capabilities.V1.xml#L548)|Int32|The maximum number of levels that can be expanded in a expand expression. A value of -1 indicates there is no restriction.

**Applicable Annotation Terms:**

- [Description](Org.OData.Core.V1.md#Description)

<a name="ExpandRestrictionsType"></a>
## [ExpandRestrictionsType](Org.OData.Capabilities.V1.xml#L552): [ExpandRestrictionsBase](#ExpandRestrictionsBase)


Property|Type|Description
:-------|:---|:----------
[*Expandable*](Org.OData.Capabilities.V1.xml#L542)|Boolean|$expand is supported
[*StreamsExpandable*](Org.OData.Capabilities.V1.xml#L545)|Boolean|$expand is supported for stream properties and media streams
[*MaxLevels*](Org.OData.Capabilities.V1.xml#L548)|Int32|The maximum number of levels that can be expanded in a expand expression. A value of -1 indicates there is no restriction.
[NonExpandableProperties](Org.OData.Capabilities.V1.xml#L553)|\[NavigationPropertyPath\]|These properties cannot be used in expand expressions
[NonExpandableStreamProperties](Org.OData.Capabilities.V1.xml#L556)|\[PropertyPath\]|These stream properties cannot be used in expand expressions

**Applicable Annotation Terms:**

- [Description](Org.OData.Core.V1.md#Description)

<a name="SearchRestrictionsType"></a>
## [SearchRestrictionsType](Org.OData.Capabilities.V1.xml#L566)


Property|Type|Description
:-------|:---|:----------
[Searchable](Org.OData.Capabilities.V1.xml#L572)|Boolean|$search is supported
[UnsupportedExpressions](Org.OData.Capabilities.V1.xml#L575)|[SearchExpressions](#SearchExpressions)|Expressions not supported in $search

**Applicable Annotation Terms:**

- [Description](Org.OData.Core.V1.md#Description)

<a name="SearchExpressions"></a>
## [SearchExpressions](Org.OData.Capabilities.V1.xml#L579)


Flag Member|Value|Description
:-----|----:|:----------
[none](Org.OData.Capabilities.V1.xml#L580)|0|Single search term
[AND](Org.OData.Capabilities.V1.xml#L583)|1|Multiple search terms, optionally separated by `AND`
[OR](Org.OData.Capabilities.V1.xml#L586)|2|Multiple search terms separated by `OR`
[NOT](Org.OData.Capabilities.V1.xml#L589)|4|Search terms preceded by `NOT`
[phrase](Org.OData.Capabilities.V1.xml#L592)|8|Search phrases enclosed in double quotes
[group](Org.OData.Capabilities.V1.xml#L595)|16|Precedence grouping of search expressions with parentheses

<a name="InsertRestrictionsBase"></a>
## [InsertRestrictionsBase](Org.OData.Capabilities.V1.xml#L614)


**Derived Types:**
- [InsertRestrictionsType](#InsertRestrictionsType)

Property|Type|Description
:-------|:---|:----------
[Insertable](Org.OData.Capabilities.V1.xml#L615)|Boolean|Entities can be inserted
[MaxLevels](Org.OData.Capabilities.V1.xml#L618)|Int32|The maximum number of navigation properties that can be traversed when addressing the collection to insert into. A value of -1 indicates there is no restriction.
[TypecastSegmentSupported](Org.OData.Capabilities.V1.xml#L621)|Boolean|Entities of a specific derived type can be created by specifying a type-cast segment
[QueryOptions](Org.OData.Capabilities.V1.xml#L624)|[ModificationQueryOptionsType?](#ModificationQueryOptionsType)|Support for query options with insert requests
[CustomHeaders](Org.OData.Capabilities.V1.xml#L627)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[CustomQueryOptions](Org.OData.Capabilities.V1.xml#L630)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[Description](Org.OData.Capabilities.V1.xml#L633)|String?|A brief description of the request
[LongDescription](Org.OData.Capabilities.V1.xml#L637)|String?|A long description of the request
[ErrorResponses](Org.OData.Capabilities.V1.xml#L641)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.

<a name="InsertRestrictionsType"></a>
## [InsertRestrictionsType](Org.OData.Capabilities.V1.xml#L645): [InsertRestrictionsBase](#InsertRestrictionsBase)


Property|Type|Description
:-------|:---|:----------
[*Insertable*](Org.OData.Capabilities.V1.xml#L615)|Boolean|Entities can be inserted
[*MaxLevels*](Org.OData.Capabilities.V1.xml#L618)|Int32|The maximum number of navigation properties that can be traversed when addressing the collection to insert into. A value of -1 indicates there is no restriction.
[*TypecastSegmentSupported*](Org.OData.Capabilities.V1.xml#L621)|Boolean|Entities of a specific derived type can be created by specifying a type-cast segment
[*QueryOptions*](Org.OData.Capabilities.V1.xml#L624)|[ModificationQueryOptionsType?](#ModificationQueryOptionsType)|Support for query options with insert requests
[*CustomHeaders*](Org.OData.Capabilities.V1.xml#L627)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[*CustomQueryOptions*](Org.OData.Capabilities.V1.xml#L630)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[*Description*](Org.OData.Capabilities.V1.xml#L633)|String?|A brief description of the request
[*LongDescription*](Org.OData.Capabilities.V1.xml#L637)|String?|A long description of the request
[*ErrorResponses*](Org.OData.Capabilities.V1.xml#L641)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.
[NonInsertableProperties](Org.OData.Capabilities.V1.xml#L646)|\[PropertyPath\]|These structural properties cannot be specified on insert
[NonInsertableNavigationProperties](Org.OData.Capabilities.V1.xml#L649)|\[NavigationPropertyPath\]|These navigation properties do not allow deep inserts
[RequiredProperties](Org.OData.Capabilities.V1.xml#L652)|\[PropertyPath\]|These structural properties must be specified on insert
[Permissions](Org.OData.Capabilities.V1.xml#L655)|\[[PermissionType?](#PermissionType)\]|Required permissions. One of the specified sets of scopes is required to perform the insert.

<a name="PermissionType"></a>
## [PermissionType](Org.OData.Capabilities.V1.xml#L660)


Property|Type|Description
:-------|:---|:----------
[SchemeName](Org.OData.Capabilities.V1.xml#L661)|[SchemeName](Org.OData.Authorization.V1.md#SchemeName)|Authorization flow scheme name
[Scopes](Org.OData.Capabilities.V1.xml#L664)|\[[ScopeType](#ScopeType)\]|List of scopes that can provide access to the resource

<a name="ScopeType"></a>
## [ScopeType](Org.OData.Capabilities.V1.xml#L669)


Property|Type|Description
:-------|:---|:----------
[Scope](Org.OData.Capabilities.V1.xml#L670)|String|Name of the scope.
[RestrictedProperties](Org.OData.Capabilities.V1.xml#L673)|String?|Comma-separated string value of all properties that will be included or excluded when using the scope.<br>Possible string value identifiers when specifying properties are `*`, _PropertyName_, `-`_PropertyName_.<br/>`*` denotes all properties are accessible.<br/>`-`_PropertyName_ excludes that specific property.<br/>_PropertyName_ explicitly provides access to the specific property.<br/>The absence of `RestrictedProperties` denotes all properties are accessible using that scope.

<a name="DeepInsertSupportType"></a>
## [DeepInsertSupportType](Org.OData.Capabilities.V1.xml#L693)


Property|Type|Description
:-------|:---|:----------
[Supported](Org.OData.Capabilities.V1.xml#L694)|Boolean|Annotation target supports deep inserts
[ContentIDSupported](Org.OData.Capabilities.V1.xml#L697)|Boolean|Annotation target supports accepting and returning nested entities annotated with the `Core.ContentID` instance annotation.

<a name="UpdateRestrictionsBase"></a>
## [UpdateRestrictionsBase](Org.OData.Capabilities.V1.xml#L706)


**Derived Types:**
- [UpdateRestrictionsType](#UpdateRestrictionsType)

Property|Type|Description
:-------|:---|:----------
[Updatable](Org.OData.Capabilities.V1.xml#L707)|Boolean|Entities can be updated
[Upsertable](Org.OData.Capabilities.V1.xml#L710)|Boolean|Entities can be upserted
[DeltaUpdateSupported](Org.OData.Capabilities.V1.xml#L713)|Boolean|Entities can be inserted, updated, and deleted via a PATCH request with a delta payload
[UpdateMethod](Org.OData.Capabilities.V1.xml#L716)|[HttpMethod?](#HttpMethod)|Supported HTTP Methods (PUT or PATCH) for updating an entity. If null, PATCH SHOULD be supported and PUT MAY be supported.
[FilterSegmentSupported](Org.OData.Capabilities.V1.xml#L719)|Boolean|Members of collections can be updated via a PATCH request with a `/$filter(...)/$each` segment
[TypecastSegmentSupported](Org.OData.Capabilities.V1.xml#L722)|Boolean|Members of collections can be updated via a PATCH request with a type-cast segment and a `/$each` segment
[MaxLevels](Org.OData.Capabilities.V1.xml#L725)|Int32|The maximum number of navigation properties that can be traversed when addressing the collection or entity to update. A value of -1 indicates there is no restriction.
[Permissions](Org.OData.Capabilities.V1.xml#L728)|\[[PermissionType?](#PermissionType)\]|Required permissions. One of the specified sets of scopes is required to perform the update.
[QueryOptions](Org.OData.Capabilities.V1.xml#L731)|[ModificationQueryOptionsType?](#ModificationQueryOptionsType)|Support for query options with update requests
[CustomHeaders](Org.OData.Capabilities.V1.xml#L734)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[CustomQueryOptions](Org.OData.Capabilities.V1.xml#L737)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[Description](Org.OData.Capabilities.V1.xml#L740)|String?|A brief description of the request
[LongDescription](Org.OData.Capabilities.V1.xml#L744)|String?|A long description of the request
[ErrorResponses](Org.OData.Capabilities.V1.xml#L748)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.

<a name="UpdateRestrictionsType"></a>
## [UpdateRestrictionsType](Org.OData.Capabilities.V1.xml#L752): [UpdateRestrictionsBase](#UpdateRestrictionsBase)


Property|Type|Description
:-------|:---|:----------
[*Updatable*](Org.OData.Capabilities.V1.xml#L707)|Boolean|Entities can be updated
[*Upsertable*](Org.OData.Capabilities.V1.xml#L710)|Boolean|Entities can be upserted
[*DeltaUpdateSupported*](Org.OData.Capabilities.V1.xml#L713)|Boolean|Entities can be inserted, updated, and deleted via a PATCH request with a delta payload
[*UpdateMethod*](Org.OData.Capabilities.V1.xml#L716)|[HttpMethod?](#HttpMethod)|Supported HTTP Methods (PUT or PATCH) for updating an entity. If null, PATCH SHOULD be supported and PUT MAY be supported.
[*FilterSegmentSupported*](Org.OData.Capabilities.V1.xml#L719)|Boolean|Members of collections can be updated via a PATCH request with a `/$filter(...)/$each` segment
[*TypecastSegmentSupported*](Org.OData.Capabilities.V1.xml#L722)|Boolean|Members of collections can be updated via a PATCH request with a type-cast segment and a `/$each` segment
[*MaxLevels*](Org.OData.Capabilities.V1.xml#L725)|Int32|The maximum number of navigation properties that can be traversed when addressing the collection or entity to update. A value of -1 indicates there is no restriction.
[*Permissions*](Org.OData.Capabilities.V1.xml#L728)|\[[PermissionType?](#PermissionType)\]|Required permissions. One of the specified sets of scopes is required to perform the update.
[*QueryOptions*](Org.OData.Capabilities.V1.xml#L731)|[ModificationQueryOptionsType?](#ModificationQueryOptionsType)|Support for query options with update requests
[*CustomHeaders*](Org.OData.Capabilities.V1.xml#L734)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[*CustomQueryOptions*](Org.OData.Capabilities.V1.xml#L737)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[*Description*](Org.OData.Capabilities.V1.xml#L740)|String?|A brief description of the request
[*LongDescription*](Org.OData.Capabilities.V1.xml#L744)|String?|A long description of the request
[*ErrorResponses*](Org.OData.Capabilities.V1.xml#L748)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.
[NonUpdatableProperties](Org.OData.Capabilities.V1.xml#L753)|\[PropertyPath\]|These structural properties cannot be specified on update
[NonUpdatableNavigationProperties](Org.OData.Capabilities.V1.xml#L756)|\[NavigationPropertyPath\]|These navigation properties do not allow rebinding
[RequiredProperties](Org.OData.Capabilities.V1.xml#L759)|\[PropertyPath\]|These structural properties must be specified on update

<a name="HttpMethod"></a>
## [HttpMethod](Org.OData.Capabilities.V1.xml#L764)


Flag Member|Value|Description
:-----|----:|:----------
[GET](Org.OData.Capabilities.V1.xml#L765)|1|The HTTP GET Method
[PATCH](Org.OData.Capabilities.V1.xml#L768)|2|The HTTP PATCH Method
[PUT](Org.OData.Capabilities.V1.xml#L771)|4|The HTTP PUT Method
[POST](Org.OData.Capabilities.V1.xml#L774)|8|The HTTP POST Method
[DELETE](Org.OData.Capabilities.V1.xml#L777)|16|The HTTP DELETE Method
[OPTIONS](Org.OData.Capabilities.V1.xml#L780)|32|The HTTP OPTIONS Method
[HEAD](Org.OData.Capabilities.V1.xml#L783)|64|The HTTP HEAD Method

<a name="DeepUpdateSupportType"></a>
## [DeepUpdateSupportType](Org.OData.Capabilities.V1.xml#L792)


Property|Type|Description
:-------|:---|:----------
[Supported](Org.OData.Capabilities.V1.xml#L793)|Boolean|Annotation target supports deep updates
[ContentIDSupported](Org.OData.Capabilities.V1.xml#L796)|Boolean|Annotation target supports accepting and returning nested entities annotated with the `Core.ContentID` instance annotation.

<a name="DeleteRestrictionsBase"></a>
## [DeleteRestrictionsBase](Org.OData.Capabilities.V1.xml#L805)


**Derived Types:**
- [DeleteRestrictionsType](#DeleteRestrictionsType)

Property|Type|Description
:-------|:---|:----------
[Deletable](Org.OData.Capabilities.V1.xml#L806)|Boolean|Entities can be deleted
[MaxLevels](Org.OData.Capabilities.V1.xml#L809)|Int32|The maximum number of navigation properties that can be traversed when addressing the collection to delete from or the entity to delete. A value of -1 indicates there is no restriction.
[FilterSegmentSupported](Org.OData.Capabilities.V1.xml#L812)|Boolean|Members of collections can be deleted via a DELETE request with a `/$filter(...)/$each` segment
[TypecastSegmentSupported](Org.OData.Capabilities.V1.xml#L815)|Boolean|Members of collections can be deleted via a DELETE request with a type-cast segment and a `/$each` segment
[Permissions](Org.OData.Capabilities.V1.xml#L818)|\[[PermissionType?](#PermissionType)\]|Required permissions. One of the specified sets of scopes is required to perform the delete.
[CustomHeaders](Org.OData.Capabilities.V1.xml#L821)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[CustomQueryOptions](Org.OData.Capabilities.V1.xml#L824)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[Description](Org.OData.Capabilities.V1.xml#L827)|String?|A brief description of the request
[LongDescription](Org.OData.Capabilities.V1.xml#L831)|String?|A long description of the request
[ErrorResponses](Org.OData.Capabilities.V1.xml#L835)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.

<a name="DeleteRestrictionsType"></a>
## [DeleteRestrictionsType](Org.OData.Capabilities.V1.xml#L839): [DeleteRestrictionsBase](#DeleteRestrictionsBase)


Property|Type|Description
:-------|:---|:----------
[*Deletable*](Org.OData.Capabilities.V1.xml#L806)|Boolean|Entities can be deleted
[*MaxLevels*](Org.OData.Capabilities.V1.xml#L809)|Int32|The maximum number of navigation properties that can be traversed when addressing the collection to delete from or the entity to delete. A value of -1 indicates there is no restriction.
[*FilterSegmentSupported*](Org.OData.Capabilities.V1.xml#L812)|Boolean|Members of collections can be deleted via a DELETE request with a `/$filter(...)/$each` segment
[*TypecastSegmentSupported*](Org.OData.Capabilities.V1.xml#L815)|Boolean|Members of collections can be deleted via a DELETE request with a type-cast segment and a `/$each` segment
[*Permissions*](Org.OData.Capabilities.V1.xml#L818)|\[[PermissionType?](#PermissionType)\]|Required permissions. One of the specified sets of scopes is required to perform the delete.
[*CustomHeaders*](Org.OData.Capabilities.V1.xml#L821)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[*CustomQueryOptions*](Org.OData.Capabilities.V1.xml#L824)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[*Description*](Org.OData.Capabilities.V1.xml#L827)|String?|A brief description of the request
[*LongDescription*](Org.OData.Capabilities.V1.xml#L831)|String?|A long description of the request
[*ErrorResponses*](Org.OData.Capabilities.V1.xml#L835)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.
[NonDeletableNavigationProperties](Org.OData.Capabilities.V1.xml#L840)|\[NavigationPropertyPath\]|These navigation properties do not allow DeleteLink requests

<a name="CollectionPropertyRestrictionsType"></a>
## [CollectionPropertyRestrictionsType](Org.OData.Capabilities.V1.xml#L848)


Property|Type|Description
:-------|:---|:----------
[CollectionProperty](Org.OData.Capabilities.V1.xml#L849)|PropertyPath?|Restricted Collection-valued property
[FilterFunctions](Org.OData.Capabilities.V1.xml#L852)|\[String\]|List of functions and operators supported in filter expressions<br>If not specified, null, or empty, all functions and operators may be attempted.
[FilterRestrictions](Org.OData.Capabilities.V1.xml#L856)|[FilterRestrictionsType?](#FilterRestrictionsType)|Restrictions on filter expressions
[SearchRestrictions](Org.OData.Capabilities.V1.xml#L859)|[SearchRestrictionsType?](#SearchRestrictionsType)|Restrictions on search expressions
[SortRestrictions](Org.OData.Capabilities.V1.xml#L862)|[SortRestrictionsType?](#SortRestrictionsType)|Restrictions on orderby expressions
[TopSupported](Org.OData.Capabilities.V1.xml#L865)|Boolean|Supports $top
[SkipSupported](Org.OData.Capabilities.V1.xml#L868)|Boolean|Supports $skip
[SelectSupport](Org.OData.Capabilities.V1.xml#L871)|[SelectSupportType?](#SelectSupportType)|Support for $select
[Insertable](Org.OData.Capabilities.V1.xml#L874)|Boolean|Members can be inserted into this collection<br>If additionally annotated with [Core.PositionalInsert](Org.OData.Core.V1.md#PositionalInsert), members can be inserted at a specific position
[Updatable](Org.OData.Capabilities.V1.xml#L878)|Boolean|Members of this ordered collection can be updated by ordinal
[Deletable](Org.OData.Capabilities.V1.xml#L881)|Boolean|Members of this ordered collection can be deleted by ordinal

<a name="OperationRestrictionsType"></a>
## [OperationRestrictionsType](Org.OData.Capabilities.V1.xml#L889)


Property|Type|Description
:-------|:---|:----------
[FilterSegmentSupported](Org.OData.Capabilities.V1.xml#L890)|Boolean|Bound action or function can be invoked on a collection-valued binding parameter path with a `/$filter(...)` segment
[Permissions](Org.OData.Capabilities.V1.xml#L893)|\[[PermissionType?](#PermissionType)\]|Required permissions. One of the specified sets of scopes is required to invoke an action or function
[CustomHeaders](Org.OData.Capabilities.V1.xml#L896)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[CustomQueryOptions](Org.OData.Capabilities.V1.xml#L899)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[ErrorResponses](Org.OData.Capabilities.V1.xml#L902)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.

<a name="ModificationQueryOptionsType"></a>
## [ModificationQueryOptionsType](Org.OData.Capabilities.V1.xml#L913)


Property|Type|Description
:-------|:---|:----------
[ExpandSupported](Org.OData.Capabilities.V1.xml#L914)|Boolean|Supports $expand with modification requests
[SelectSupported](Org.OData.Capabilities.V1.xml#L917)|Boolean|Supports $select with modification requests
[ComputeSupported](Org.OData.Capabilities.V1.xml#L920)|Boolean|Supports $compute with modification requests
[FilterSupported](Org.OData.Capabilities.V1.xml#L923)|Boolean|Supports $filter with modification requests
[SearchSupported](Org.OData.Capabilities.V1.xml#L926)|Boolean|Supports $search with modification requests
[SortSupported](Org.OData.Capabilities.V1.xml#L929)|Boolean|Supports $orderby with modification requests

<a name="ReadRestrictionsBase"></a>
## [*ReadRestrictionsBase*](Org.OData.Capabilities.V1.xml#L938)


**Derived Types:**
- [ReadByKeyRestrictionsType](#ReadByKeyRestrictionsType)
- [ReadRestrictionsType](#ReadRestrictionsType)

Property|Type|Description
:-------|:---|:----------
[Readable](Org.OData.Capabilities.V1.xml#L939)|Boolean|Entities can be retrieved
[Permissions](Org.OData.Capabilities.V1.xml#L942)|\[[PermissionType?](#PermissionType)\]|Required permissions. One of the specified sets of scopes is required to read.
[CustomHeaders](Org.OData.Capabilities.V1.xml#L945)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[CustomQueryOptions](Org.OData.Capabilities.V1.xml#L948)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[Description](Org.OData.Capabilities.V1.xml#L951)|String?|A brief description of the request
[LongDescription](Org.OData.Capabilities.V1.xml#L955)|String?|A long description of the request
[ErrorResponses](Org.OData.Capabilities.V1.xml#L959)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.

<a name="ReadByKeyRestrictionsType"></a>
## [ReadByKeyRestrictionsType](Org.OData.Capabilities.V1.xml#L963): [ReadRestrictionsBase](#ReadRestrictionsBase)
Restrictions for retrieving an entity by key

Property|Type|Description
:-------|:---|:----------
[*Readable*](Org.OData.Capabilities.V1.xml#L939)|Boolean|Entities can be retrieved
[*Permissions*](Org.OData.Capabilities.V1.xml#L942)|\[[PermissionType?](#PermissionType)\]|Required permissions. One of the specified sets of scopes is required to read.
[*CustomHeaders*](Org.OData.Capabilities.V1.xml#L945)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[*CustomQueryOptions*](Org.OData.Capabilities.V1.xml#L948)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[*Description*](Org.OData.Capabilities.V1.xml#L951)|String?|A brief description of the request
[*LongDescription*](Org.OData.Capabilities.V1.xml#L955)|String?|A long description of the request
[*ErrorResponses*](Org.OData.Capabilities.V1.xml#L959)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.

<a name="ReadRestrictionsType"></a>
## [ReadRestrictionsType](Org.OData.Capabilities.V1.xml#L966): [ReadRestrictionsBase](#ReadRestrictionsBase)


Property|Type|Description
:-------|:---|:----------
[*Readable*](Org.OData.Capabilities.V1.xml#L939)|Boolean|Entities can be retrieved
[*Permissions*](Org.OData.Capabilities.V1.xml#L942)|\[[PermissionType?](#PermissionType)\]|Required permissions. One of the specified sets of scopes is required to read.
[*CustomHeaders*](Org.OData.Capabilities.V1.xml#L945)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom headers
[*CustomQueryOptions*](Org.OData.Capabilities.V1.xml#L948)|\[[CustomParameter](#CustomParameter)\]|Supported or required custom query options
[*Description*](Org.OData.Capabilities.V1.xml#L951)|String?|A brief description of the request
[*LongDescription*](Org.OData.Capabilities.V1.xml#L955)|String?|A long description of the request
[*ErrorResponses*](Org.OData.Capabilities.V1.xml#L959)|\[[HttpResponse](#HttpResponse)\]|Possible error responses returned by the request.
[TypecastSegmentSupported](Org.OData.Capabilities.V1.xml#L967)|Boolean|Entities of a specific derived type can be read by specifying a type-cast segment
[ReadByKeyRestrictions](Org.OData.Capabilities.V1.xml#L970)|[ReadByKeyRestrictionsType?](#ReadByKeyRestrictionsType)|Restrictions for retrieving an entity by key<br>Only valid when applied to a collection. If a property of `ReadByKeyRestrictions` is not specified, the corresponding property value of `ReadRestrictions` applies.

<a name="CustomParameter"></a>
## [CustomParameter](Org.OData.Capabilities.V1.xml#L1033)
A custom parameter is either a header or a query option

The type of a custom parameter is always a string. Restrictions on the parameter values can be expressed by annotating the record expression describing the parameter with terms from the Validation vocabulary, e.g. Validation.Pattern or Validation.AllowedValues.

Property|Type|Description
:-------|:---|:----------
[Name](Org.OData.Capabilities.V1.xml#L1036)|String|Name of the custom parameter
[Description](Org.OData.Capabilities.V1.xml#L1039)|String?|Description of the custom parameter
[DocumentationURL](Org.OData.Capabilities.V1.xml#L1042)|URL?|URL of related documentation
[Required](Org.OData.Capabilities.V1.xml#L1046)|Boolean|true: parameter is required, false or not specified: parameter is optional
[ExampleValues](Org.OData.Capabilities.V1.xml#L1049)|\[[PrimitiveExampleValue](Org.OData.Core.V1.md#PrimitiveExampleValue)\]|Example values for the custom parameter

<a name="DefaultCapabilitiesType"></a>
## [DefaultCapabilitiesType](Org.OData.Capabilities.V1.xml#L1068)


Property|Type|Description
:-------|:---|:----------
[ChangeTracking](Org.OData.Capabilities.V1.xml#L1069)|[ChangeTrackingBase?](#ChangeTrackingBase)|Change tracking capabilities
[CountRestrictions](Org.OData.Capabilities.V1.xml#L1072)|[CountRestrictionsBase?](#CountRestrictionsBase)|Restrictions on /$count path suffix and $count=true system query option
[IndexableByKey](Org.OData.Capabilities.V1.xml#L1075)|[Tag?](Org.OData.Core.V1.md#Tag)|Supports key values according to OData URL conventions
[TopSupported](Org.OData.Capabilities.V1.xml#L1078)|[Tag?](Org.OData.Core.V1.md#Tag)|Supports $top
[SkipSupported](Org.OData.Capabilities.V1.xml#L1081)|[Tag?](Org.OData.Core.V1.md#Tag)|Supports $skip
[ComputeSupported](Org.OData.Capabilities.V1.xml#L1084)|[Tag?](Org.OData.Core.V1.md#Tag)|Supports $compute
[SelectSupport](Org.OData.Capabilities.V1.xml#L1087)|[SelectSupportType?](#SelectSupportType)|Support for $select and nested query options within $select
[FilterRestrictions](Org.OData.Capabilities.V1.xml#L1090)|[FilterRestrictionsBase?](#FilterRestrictionsBase)|Restrictions on filter expressions
[SortRestrictions](Org.OData.Capabilities.V1.xml#L1093)|[SortRestrictionsBase?](#SortRestrictionsBase)|Restrictions on orderby expressions
[ExpandRestrictions](Org.OData.Capabilities.V1.xml#L1096)|[ExpandRestrictionsBase?](#ExpandRestrictionsBase)|Restrictions on expand expressions
[SearchRestrictions](Org.OData.Capabilities.V1.xml#L1099)|[SearchRestrictionsType?](#SearchRestrictionsType)|Restrictions on search expressions
[InsertRestrictions](Org.OData.Capabilities.V1.xml#L1102)|[InsertRestrictionsBase?](#InsertRestrictionsBase)|Restrictions on insert operations
[UpdateRestrictions](Org.OData.Capabilities.V1.xml#L1105)|[UpdateRestrictionsBase?](#UpdateRestrictionsBase)|Restrictions on update operations
[DeleteRestrictions](Org.OData.Capabilities.V1.xml#L1108)|[DeleteRestrictionsBase?](#DeleteRestrictionsBase)|Restrictions on delete operations
[OperationRestrictions](Org.OData.Capabilities.V1.xml#L1111)|[OperationRestrictionsType?](#OperationRestrictionsType)|Restrictions for function or action operations
[ReadRestrictions](Org.OData.Capabilities.V1.xml#L1114)|[ReadRestrictionsType?](#ReadRestrictionsType)|Restrictions for retrieving a collection of entities, retrieving a singleton instance

<a name="HttpResponse"></a>
## [HttpResponse](Org.OData.Capabilities.V1.xml#L1119)


Property|Type|Description
:-------|:---|:----------
[StatusCode](Org.OData.Capabilities.V1.xml#L1120)|String|HTTP response status code, for example 400, 403, 501
[Description](Org.OData.Capabilities.V1.xml#L1123)|String|Human-readable description of the response

-------

# <a name="MeasuresVocabulary" href="#MeasuresVocabulary">4 Measures Vocabulary</a>

**Namespace: [Org.OData.Measures.V1](Org.OData.Measures.V1.xml)**

Terms describing monetary amounts and measured quantities


## Terms

Term|Type|Description
:---|:---|:----------
[ISOCurrency](Org.OData.Measures.V1.xml#L70)|String|<a name="ISOCurrency"></a>The currency for this monetary amount as an ISO 4217 currency code
[Scale](Org.OData.Measures.V1.xml#L74)|Byte|<a name="Scale"></a>The number of significant decimal places in the scale part (less than or equal to the number declared in the Scale facet)
[Unit](Org.OData.Measures.V1.xml#L79)|String|<a name="Unit"></a>The unit of measure for this measured quantity, e.g. cm for centimeters or % for percentages
[UNECEUnit](Org.OData.Measures.V1.xml#L83)|String|<a name="UNECEUnit"></a>The unit of measure for this measured quantity, according to the [UN/CEFACT Recommendation 20](http://tfig.unece.org/contents/recommendation-20.htm)
[DurationGranularity](Org.OData.Measures.V1.xml#L87)|[DurationGranularityType](#DurationGranularityType)|<a name="DurationGranularity"></a>The minimum granularity of duration values.<br>Absence of this annotation means a granularity of seconds with sub-seconds according to the Precision facet.

<a name="DurationGranularityType"></a>
## [DurationGranularityType](Org.OData.Measures.V1.xml#L92)
**Type:** String



Allowed Value|Description
:------------|:----------
[days](Org.OData.Measures.V1.xml#L95)|Duration in days, e.g. `P1D`
[hours](Org.OData.Measures.V1.xml#L99)|Duration in days and hours, e.g. `P1DT23H`
[minutes](Org.OData.Measures.V1.xml#L103)|Duration in days, hours, and minutes, e.g. `P1DT23H59M`

-------

# <a name="ValidationVocabulary" href="#ValidationVocabulary">5 Validation Vocabulary</a>

**Namespace: [Org.OData.Validation.V1](Org.OData.Validation.V1.xml)**

Terms describing validation rules


## Terms

Term|Type|Description
:---|:---|:----------
[Pattern](Org.OData.Validation.V1.xml#L67)|String|<a name="Pattern"></a>The pattern that a string property, parameter, or term must match. This SHOULD be a valid regular expression, according to the ECMA 262 regular expression dialect.
[Minimum](Org.OData.Validation.V1.xml#L72)|PrimitiveType|<a name="Minimum"></a>Minimum value that a property, parameter, or term can have.<br>Can be annotated with:<ul><li>[Exclusive](#Exclusive)</li></ul>
[Maximum](Org.OData.Validation.V1.xml#L81)|PrimitiveType|<a name="Maximum"></a>Maximum value that a property, parameter, or term can have.<br>Can be annotated with:<ul><li>[Exclusive](#Exclusive)</li></ul>
[Exclusive](Org.OData.Validation.V1.xml#L90)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="Exclusive"></a>Tags a Minimum or Maximum as exclusive, i.e. an open interval boundary.
[AllowedValues](Org.OData.Validation.V1.xml#L94)|\[[AllowedValue](#AllowedValue)\]|<a name="AllowedValues"></a>A collection of valid values for the annotated property, parameter, or type definition
[MultipleOf](Org.OData.Validation.V1.xml#L108)|Decimal|<a name="MultipleOf"></a>The value of the annotated property, parameter, or term must be an integer multiple of this positive value. For temporal types, the value is measured in seconds.
[Constraint](Org.OData.Validation.V1.xml#L112)|[ConstraintType](#ConstraintType)|<a name="Constraint"></a>Condition that the annotation target has to fulfill
[ItemsOf](Org.OData.Validation.V1.xml#L125)|\[[ItemsOfType](#ItemsOfType)\]|<a name="ItemsOf"></a>A list of constraints describing that entities related via one navigation property MUST also be related via another, collection-valued navigation property. The same `path` value MUST NOT occur more than once.<br>Example: entity type `Customer` has navigation properties `AllOrders`, `OpenOrders`, and `ClosedOrders`. The term allows to express that items of `OpenOrders` and `ClosedOrders` are also items of the `AllOrders` navigation property, even though they are defined in an `Orders` entity set.
[OpenPropertyTypeConstraint](Org.OData.Validation.V1.xml#L143)|\[[SingleOrCollectionType](#SingleOrCollectionType)\]|<a name="OpenPropertyTypeConstraint"></a>Dynamic properties added to the annotated open structured type are restricted to the listed types.
[DerivedTypeConstraint](Org.OData.Validation.V1.xml#L147)|\[[SingleOrCollectionType](#SingleOrCollectionType)\]|<a name="DerivedTypeConstraint"></a>Values are restricted to types that are both identical to or derived from the declared type and a type listed in this collection.<br>This allows restricting values to certain sub-trees of an inheritance hierarchy, including hierarchies starting at the [Built-In Abstract Types](https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html#sec_BuiltInAbstractTypes). Types listed in this collection are ignored if they are not derived from the declared type of the annotated model element or would not be allowed as declared type of the annotated model element.<br/> When applied to a collection-valued element, this annotation specifies the types allowed for members of the collection without mentioning the `Collection()` wrapper. The SingleOrCollectionType may only include the `Collection()` wrapper if the annotation is applied to an element with declared type `Edm.Untyped`.
[AllowedTerms](Org.OData.Validation.V1.xml#L166)|\[[QualifiedTermName](Org.OData.Core.V1.md#QualifiedTermName)\]|<a name="AllowedTerms"></a>Annotate a term of type Edm.AnnotationPath, or a property of type Edm.AnnotationPath that is used within a structured term, to restrict the terms that can be targeted by the path.<br>The annotation path expression is intended to end in a path segment with one of the listed terms. For forward compatibility, clients should be prepared for the annotation to reference terms besides those listed.
[ApplicableTerms](Org.OData.Validation.V1.xml#L172)|\[[QualifiedTermName](Org.OData.Core.V1.md#QualifiedTermName)\]|<a name="ApplicableTerms"></a>Names of specific terms that are applicable and may be applied in the current context. This annotation does not restrict the use of other terms.
[MaxItems](Org.OData.Validation.V1.xml#L176)|Int64|<a name="MaxItems"></a>The annotated collection must have at most the specified number of items.
[MinItems](Org.OData.Validation.V1.xml#L180)|Int64|<a name="MinItems"></a>The annotated collection must have at least the specified number of items.

<a name="AllowedValue"></a>
## [AllowedValue](Org.OData.Validation.V1.xml#L97)


Property|Type|Description
:-------|:---|:----------
[Value](Org.OData.Validation.V1.xml#L103)|PrimitiveType?|An allowed value for the property, parameter, or type definition

**Applicable Annotation Terms:**

- [SymbolicName](Org.OData.Core.V1.md#SymbolicName)

<a name="ConstraintType"></a>
## [ConstraintType](Org.OData.Validation.V1.xml#L115)


Property|Type|Description
:-------|:---|:----------
[FailureMessage](Org.OData.Validation.V1.xml#L116)|String?|Human-readable message that can be shown to end users if the constraint is not fulfilled
[Condition](Org.OData.Validation.V1.xml#L120)|Boolean|Value MUST be a dynamic expression that evaluates to true if and only if the constraint is fulfilled

<a name="ItemsOfType"></a>
## [ItemsOfType](Org.OData.Validation.V1.xml#L133)
Entities related via the single- or collection-valued navigation property identified by `path` are also related via the collection-valued navigation property identified by `target`.

Property|Type|Description
:-------|:---|:----------
[path](Org.OData.Validation.V1.xml#L135)|NavigationPropertyPath|A path to a single- or collection-valued navigation property
[target](Org.OData.Validation.V1.xml#L138)|NavigationPropertyPath|A path to a collection-valued navigation property

<a name="SingleOrCollectionType"></a>
## [SingleOrCollectionType](Org.OData.Validation.V1.xml#L162)
**Type:** String

The qualified name of a type in scope, optionally wrapped in `Collection()` to denote a collection of instances of the type

-------

# <a name="AggregationVocabulary" href="#AggregationVocabulary">6 Aggregation Vocabulary</a>

**Namespace: [Org.OData.Aggregation.V1](Org.OData.Aggregation.V1.xml)**

Terms to describe which data in a given entity model can be aggregated, and how.

Related to the specification document [OData-Data-Agg-v4.0](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html).


## Terms

Term|Type|Description
:---|:---|:----------
[ApplySupported](Org.OData.Aggregation.V1.xml#L82)|[ApplySupportedType](#ApplySupportedType)|<a name="ApplySupported"></a>This entity set or collection supports the `$apply` system query option
[ApplySupportedDefaults](Org.OData.Aggregation.V1.xml#L88)|[ApplySupportedBase](#ApplySupportedBase)|<a name="ApplySupportedDefaults"></a>Default support of the `$apply` system query option for all collection-valued resources in the container<br><p>Annotating term <a href="#ApplySupported"><code>ApplySupported</code></a> for a specific collection-valued resource overrides the default support with the specified properties using PATCH semantics:</p> <ul> <li>Primitive or collection-valued properties specified in <code>ApplySupported</code> replace the corresponding properties specified in <code>ApplySupportedDefaults</code></li> <li>Complex-valued properties specified in <code>ApplySupported</code> override the corresponding properties specified in <code>ApplySupportedDefaults</code> using PATCH semantics recursively</li> <li>Properties specified neither in <code>ApplySupported</code> nor in <code>ApplySupportedDefaults</code> have their default value</li> </ul> 
[Groupable](Org.OData.Aggregation.V1.xml#L305) *(Deprecated)*|[Tag](Org.OData.Core.V1.md#Tag)|<a name="Groupable"></a>Deprecated in favor of [`ApplySupported/GroupableProperties`](#ApplySupported)
[Aggregatable](Org.OData.Aggregation.V1.xml#L317) *(Deprecated)*|[Tag](Org.OData.Core.V1.md#Tag)|<a name="Aggregatable"></a>Deprecated in favor of [`ApplySupported/AggregatableProperties`](#ApplySupported)
[CustomAggregate](Org.OData.Aggregation.V1.xml#L329)|String|<a name="CustomAggregate"></a>Dynamic property that can be used in the `aggregate` transformation<br>This term MUST be applied with a Qualifier, the Qualifier value is the name of the dynamic property. The value of the annotation MUST be the qualified name of a primitive type. The aggregated value will be of that type.
[ContextDefiningProperties](Org.OData.Aggregation.V1.xml#L335)|\[PropertyPath\]|<a name="ContextDefiningProperties"></a>The annotated property or custom aggregate is only well-defined in the context of these properties<br>The context-defining properties need either be part of the result entities, or be restricted to a single value by a pre-filter operation. Examples are postal codes within a country, or monetary amounts whose context is the unit of currency.
[LeveledHierarchy](Org.OData.Aggregation.V1.xml#L342)|\[PropertyPath\]|<a name="LeveledHierarchy"></a>Defines a leveled hierarchy (OData-Data-Agg-v4.0, section 5.5.1)
[RecursiveHierarchy](Org.OData.Aggregation.V1.xml#L346)|[RecursiveHierarchyType](#RecursiveHierarchyType)|<a name="RecursiveHierarchy"></a>Defines a recursive hierarchy (OData-Data-Agg-v4.0, section 5.5.2)
[UpPath](Org.OData.Aggregation.V1.xml#L519)|\[String\]|<a name="UpPath"></a>The string values of the node identifiers in a path from the annotated node to a start node in a traversal of a recursive hierarchy<br>This instance annotation occurs in the result set after a `traverse` transformation (OData-Data-Agg-v4.0, section 6.2.2.2). A use case for this is traversal with multiple parents, when this annotation takes as value one parent node identifier followed by one grandparent node identifier and so on.
[AvailableOnAggregates](Org.OData.Aggregation.V1.xml#L528)|[AvailableOnAggregatesType](#AvailableOnAggregatesType)|<a name="AvailableOnAggregates"></a>This function is available on aggregated entities if the `RequiredProperties` are still defined


## Functions

<a name="isnode"></a>
### [isnode](Org.OData.Aggregation.V1.xml#L371)

Is the entity a node of the hierarchy specified by the [parameter pair](#HierarchyQualifier) (`HierarchyNodes`, `HierarchyQualifier`)? (See OData-Data-Agg-v4.0, section 5.5.2.1)

If a node identifier passed to the function is null, the function returns null.

Parameter|Type|Description
:--------|:---|:----------
[HierarchyNodes](Org.OData.Aggregation.V1.xml#L374)|\[EntityType\]|A collection, given through a `$root` expression
[HierarchyQualifier](Org.OData.Aggregation.V1.xml#L377)|[HierarchyQualifier](#HierarchyQualifier)|
[Node](Org.OData.Aggregation.V1.xml#L378)|PrimitiveType?|Node identifier of the putative node
[&rarr;](Org.OData.Aggregation.V1.xml#L381)|Boolean?|


<a name="isroot"></a>
### [isroot](Org.OData.Aggregation.V1.xml#L384)

Is the entity a root node of the hierarchy specified by the [parameter pair](#HierarchyQualifier) (`HierarchyNodes`, `HierarchyQualifier`)?

If a node identifier passed to the function is null, the function returns null.

Parameter|Type|Description
:--------|:---|:----------
[HierarchyNodes](Org.OData.Aggregation.V1.xml#L387)|\[EntityType\]|A collection, given through a `$root` expression
[HierarchyQualifier](Org.OData.Aggregation.V1.xml#L390)|[HierarchyQualifier](#HierarchyQualifier)|
[Node](Org.OData.Aggregation.V1.xml#L391)|PrimitiveType?|Node identifier of the putative root
[&rarr;](Org.OData.Aggregation.V1.xml#L394)|Boolean?|


<a name="isdescendant"></a>
### [isdescendant](Org.OData.Aggregation.V1.xml#L397)

Is the entity a descendant node of the ancestor node in the hierarchy specified by the [parameter pair](#HierarchyQualifier) (`HierarchyNodes`, `HierarchyQualifier`) with at most the specified distance? (See OData-Data-Agg-v4.0, section 5.5.2.1)

If a node identifier passed to the function is null, the function returns null.

Parameter|Type|Description
:--------|:---|:----------
[HierarchyNodes](Org.OData.Aggregation.V1.xml#L400)|\[EntityType\]|A collection, given through a `$root` expression
[HierarchyQualifier](Org.OData.Aggregation.V1.xml#L403)|[HierarchyQualifier](#HierarchyQualifier)|
[Node](Org.OData.Aggregation.V1.xml#L404)|PrimitiveType?|Node identifier of the putative descendant
[Ancestor](Org.OData.Aggregation.V1.xml#L407)|PrimitiveType?|Node identifier of the ancestor node
*[MaxDistance](Org.OData.Aggregation.V1.xml#L410)*|Int16|*Optional parameter*
*[IncludeSelf](Org.OData.Aggregation.V1.xml#L418)*|Boolean|*Optional parameter:* Whether to include the node itself in the result
[&rarr;](Org.OData.Aggregation.V1.xml#L426)|Boolean?|


<a name="isancestor"></a>
### [isancestor](Org.OData.Aggregation.V1.xml#L429)

Is the entity an ancestor node of the descendant node in the hierarchy specified by the [parameter pair](#HierarchyQualifier) (`HierarchyNodes`, `HierarchyQualifier`) with at most the specified distance? (See OData-Data-Agg-v4.0, section 5.5.2.1)

If a node identifier passed to the function is null, the function returns null.

Parameter|Type|Description
:--------|:---|:----------
[HierarchyNodes](Org.OData.Aggregation.V1.xml#L432)|\[EntityType\]|A collection, given through a `$root` expression
[HierarchyQualifier](Org.OData.Aggregation.V1.xml#L435)|[HierarchyQualifier](#HierarchyQualifier)|
[Node](Org.OData.Aggregation.V1.xml#L436)|PrimitiveType?|Node identifier of the putative ancestor
[Descendant](Org.OData.Aggregation.V1.xml#L439)|PrimitiveType?|Node identifier of the descendant node
*[MaxDistance](Org.OData.Aggregation.V1.xml#L442)*|Int16|*Optional parameter*
*[IncludeSelf](Org.OData.Aggregation.V1.xml#L450)*|Boolean|*Optional parameter:* Whether to include the node itself in the result
[&rarr;](Org.OData.Aggregation.V1.xml#L458)|Boolean?|


<a name="issibling"></a>
### [issibling](Org.OData.Aggregation.V1.xml#L461)

Is the entity a sibling node of the other node in the hierarchy specified by the [parameter pair](#HierarchyQualifier) (`HierarchyNodes`, `HierarchyQualifier`)? (See OData-Data-Agg-v4.0, section 5.5.2.1)

A node is not a sibling of itself. If a node identifier passed to the function is null, the function returns null.

Parameter|Type|Description
:--------|:---|:----------
[HierarchyNodes](Org.OData.Aggregation.V1.xml#L464)|\[EntityType\]|A collection, given through a `$root` expression
[HierarchyQualifier](Org.OData.Aggregation.V1.xml#L467)|[HierarchyQualifier](#HierarchyQualifier)|
[Node](Org.OData.Aggregation.V1.xml#L468)|PrimitiveType?|Node identifier of the putative sibling
[Other](Org.OData.Aggregation.V1.xml#L471)|PrimitiveType?|Node identifier of the other node
[&rarr;](Org.OData.Aggregation.V1.xml#L474)|Boolean?|


<a name="isleaf"></a>
### [isleaf](Org.OData.Aggregation.V1.xml#L477)

Is the entity a leaf node in the hierarchy specified by the [parameter pair](#HierarchyQualifier) (`HierarchyNodes`, `HierarchyQualifier`)? (See OData-Data-Agg-v4.0, section 5.5.2.1)

If a node identifier passed to the function is null, the function returns null.

Parameter|Type|Description
:--------|:---|:----------
[HierarchyNodes](Org.OData.Aggregation.V1.xml#L480)|\[EntityType\]|A collection, given through a `$root` expression
[HierarchyQualifier](Org.OData.Aggregation.V1.xml#L483)|[HierarchyQualifier](#HierarchyQualifier)|
[Node](Org.OData.Aggregation.V1.xml#L484)|PrimitiveType?|Node identifier of the putative leaf
[&rarr;](Org.OData.Aggregation.V1.xml#L487)|Boolean?|


<a name="rollupnode"></a>
### [rollupnode](Org.OData.Aggregation.V1.xml#L490)

During `rolluprecursive` for a hierarchy node, this function returns the node

This function may only occur in the second parameter of a `groupby` transformation whose first parameter
contains `rolluprecursive(...)`. It is evaluated as part of the transformation `R(x)` in the "`rolluprecursive` algorithm"
(OData-Data-Agg-v4.0, section 6.3). Its behavior is undefined outside of this algorithm.
```
Sales?$apply=groupby((rolluprecursive(...)), filter(SalesOrganization eq Aggregation.rollupnode())/aggregate(...))
```
constructs a rollup that contains aggregates per hierarchy node while excluding descendants from the aggregation.

Parameter|Type|Description
:--------|:---|:----------
*[Position](Org.OData.Aggregation.V1.xml#L501)*|Int16|*Optional parameter:* Position N among the `rolluprecursive` operators in the first argument of `groupby`<br>Every instance in the output set of a `groupby` transformation with M `rolluprecursive` operators has M relationships to M nodes in M recursive hierarchies. This function returns the node x with path r to the root in relationship number N. If several such `groupby` transformations are nested, this function refers to the innermost one.
[&rarr;](Org.OData.Aggregation.V1.xml#L516)|EntityType|


<a name="ApplySupportedBase"></a>
## [ApplySupportedBase](Org.OData.Aggregation.V1.xml#L99)


Services that do not fully implement a certain aggregation-related functionality may document
          this by annotating the [`ApplySupported`](#ApplySupported) or [`ApplySupportedDefaults`](#ApplySupportedDefaults)
          annotation with a description.

**Derived Types:**
- [ApplySupportedType](#ApplySupportedType)

Property|Type|Description
:-------|:---|:----------
[Transformations](Org.OData.Aggregation.V1.xml#L105)|\[[Transformation](#Transformation)\]|Transformations that can be used in `$apply`
[CustomAggregationMethods](Org.OData.Aggregation.V1.xml#L108)|\[String\]|Qualified names of custom aggregation methods that can be used in `aggregate(...with...)`
[Rollup](Org.OData.Aggregation.V1.xml#L111)|[RollupType](#RollupType)|The service supports rollup hierarchies in a `groupby` transformation
[From](Org.OData.Aggregation.V1.xml#L114)|Boolean|The service supports the `from` keyword in an `aggregate` transformation

<a name="ApplySupportedType"></a>
## [ApplySupportedType](Org.OData.Aggregation.V1.xml#L118): [ApplySupportedBase](#ApplySupportedBase)


Property|Type|Description
:-------|:---|:----------
[*Transformations*](Org.OData.Aggregation.V1.xml#L105)|\[[Transformation](#Transformation)\]|Transformations that can be used in `$apply`
[*CustomAggregationMethods*](Org.OData.Aggregation.V1.xml#L108)|\[String\]|Qualified names of custom aggregation methods that can be used in `aggregate(...with...)`
[*Rollup*](Org.OData.Aggregation.V1.xml#L111)|[RollupType](#RollupType)|The service supports rollup hierarchies in a `groupby` transformation
[*From*](Org.OData.Aggregation.V1.xml#L114)|Boolean|The service supports the `from` keyword in an `aggregate` transformation
[PropertyRestrictions](Org.OData.Aggregation.V1.xml#L119) *(Deprecated)*|Boolean|Deprecated since [`Groupable`](#Groupable) and [`Aggregatable`](#Aggregatable) are deprecated
[GroupableProperties](Org.OData.Aggregation.V1.xml#L130)|\[AnyPropertyPath\]|A non-empty collection indicates that only the listed properties of the annotated target are supported by the `groupby` transformation
[AggregatableProperties](Org.OData.Aggregation.V1.xml#L133)|\[[AggregatablePropertyType](#AggregatablePropertyType)\]|A non-empty collection indicates that only the listed properties of the annotated target can be used in the `aggregate` transformation, optionally restricted to the specified aggregation methods

<a name="AggregatablePropertyType"></a>
## [AggregatablePropertyType](Org.OData.Aggregation.V1.xml#L137)


Property|Type|Description
:-------|:---|:----------
[Property](Org.OData.Aggregation.V1.xml#L138)|PropertyPath|Aggregatable property
[SupportedAggregationMethods](Org.OData.Aggregation.V1.xml#L143)|\[[AggregationMethod](#AggregationMethod)\]|Standard and custom aggregation methods that can be applied to the property. If omitted, all aggregation methods can be applied
[RecommendedAggregationMethod](Org.OData.Aggregation.V1.xml#L148)|[AggregationMethod?](#AggregationMethod)|Recommended method for aggregating values of the property

<a name="Transformation"></a>
## [Transformation](Org.OData.Aggregation.V1.xml#L155)
**Type:** String

A transformation that can be used in `$apply`

Allowed Value|Description
:------------|:----------
[aggregate](Org.OData.Aggregation.V1.xml#L159)|OData-Data-Agg-v4.0, section 3.2.1
[groupby](Org.OData.Aggregation.V1.xml#L163)|OData-Data-Agg-v4.0, section 3.2.3
[concat](Org.OData.Aggregation.V1.xml#L167)|OData-Data-Agg-v4.0, section 3.2.2
[identity](Org.OData.Aggregation.V1.xml#L171)|OData-Data-Agg-v4.0, section 3.4.1
[filter](Org.OData.Aggregation.V1.xml#L175)|OData-Data-Agg-v4.0, section 3.3.2
[search](Org.OData.Aggregation.V1.xml#L179)|OData-Data-Agg-v4.0, section 3.3.4
[nest](Org.OData.Aggregation.V1.xml#L183)|OData-Data-Agg-v4.0, section 3.5.2
[addnested](Org.OData.Aggregation.V1.xml#L187)|OData-Data-Agg-v4.0, section 3.4.3
[join](Org.OData.Aggregation.V1.xml#L191)|OData-Data-Agg-v4.0, section 3.5.1
[outerjoin](Org.OData.Aggregation.V1.xml#L195)|OData-Data-Agg-v4.0, section 3.5.1
[compute](Org.OData.Aggregation.V1.xml#L199)|OData-Data-Agg-v4.0, section 3.4.2
[bottomcount](Org.OData.Aggregation.V1.xml#L203)|OData-Data-Agg-v4.0, section 3.3.1.1
[bottomsum](Org.OData.Aggregation.V1.xml#L207)|OData-Data-Agg-v4.0, section 3.3.1.3
[bottompercent](Org.OData.Aggregation.V1.xml#L211)|OData-Data-Agg-v4.0, section 3.3.1.2
[topcount](Org.OData.Aggregation.V1.xml#L215)|OData-Data-Agg-v4.0, section 3.3.1.1
[topsum](Org.OData.Aggregation.V1.xml#L219)|OData-Data-Agg-v4.0, section 3.3.1.3
[toppercent](Org.OData.Aggregation.V1.xml#L223)|OData-Data-Agg-v4.0, section 3.3.1.2
[orderby](Org.OData.Aggregation.V1.xml#L227)|OData-Data-Agg-v4.0, section 3.3.3
[top](Org.OData.Aggregation.V1.xml#L231)|OData-Data-Agg-v4.0, section 3.3.6
[skip](Org.OData.Aggregation.V1.xml#L235)|OData-Data-Agg-v4.0, section 3.3.5
[ancestors](Org.OData.Aggregation.V1.xml#L239)|OData-Data-Agg-v4.0, section 6.2.1
[descendants](Org.OData.Aggregation.V1.xml#L243)|OData-Data-Agg-v4.0, section 6.2.1
[traverse](Org.OData.Aggregation.V1.xml#L247)|OData-Data-Agg-v4.0, section 6.2.2

<a name="AggregationMethod"></a>
## [AggregationMethod](Org.OData.Aggregation.V1.xml#L255)
**Type:** String

Standard or custom aggregation method

Custom aggregation methods MUST use a namespace-qualified name, that is contain at least one dot. 

Allowed Value|Description
:------------|:----------
[sum](Org.OData.Aggregation.V1.xml#L264)|Can be applied to numeric values to return the sum of the non-null values, or null if there are no non-null values or the input set is empty
[min](Org.OData.Aggregation.V1.xml#L268)|Can be applied to values with a totally ordered domain to return the smallest of the non-null values, or null if there are no non-null values or the input set is empty
[max](Org.OData.Aggregation.V1.xml#L272)|Can be applied to values with a totally ordered domain to return the largest of the non-null values, or null if there are no non-null values or the input set is empty
[average](Org.OData.Aggregation.V1.xml#L276)|Can be applied to numeric values to return the sum of the non-null values divided by the count of the non-null values, or null if there are no non-null values or the input set is empty
[countdistinct](Org.OData.Aggregation.V1.xml#L280)|Counts the distinct values, omitting any null values<br>For navigation properties, it counts the distinct entities in the union of all entities related to entities in the input set. For collection-valued primitive properties, it counts the distinct items in the union of all collection values in the input set.

<a name="RollupType"></a>
## [RollupType](Org.OData.Aggregation.V1.xml#L292)
The number of `rollup` or `rolluprecursive` operators allowed in a `groupby` transformation

Member|Value|Description
:-----|----:|:----------
[None](Org.OData.Aggregation.V1.xml#L294)|0|No support for `rollup` or `rolluprecursive`
[SingleHierarchy](Org.OData.Aggregation.V1.xml#L297)|1|Only one `rollup` or `rolluprecursive` operator per `groupby`
[MultipleHierarchies](Org.OData.Aggregation.V1.xml#L300)|2|Full support for `rollup` and `rolluprecursive`

<a name="RecursiveHierarchyType"></a>
## [RecursiveHierarchyType](Org.OData.Aggregation.V1.xml#L350)


Property|Type|Description
:-------|:---|:----------
[NodeProperty](Org.OData.Aggregation.V1.xml#L351)|PropertyPath|Primitive property holding the node identifier
[ParentNavigationProperty](Org.OData.Aggregation.V1.xml#L354)|NavigationPropertyPath|Property for navigating to the parent node(s). Its type MUST be the entity type annotated with this term, and it MUST be collection-valued or nullable single-valued.

<a name="HierarchyQualifier"></a>
## [HierarchyQualifier](Org.OData.Aggregation.V1.xml#L359)
**Type:** String

Qualifier of a [`RecursiveHierarchy`](#RecursiveHierarchy) annotation

Every recursive hierarchy function defined in this vocabulary has
- a parameter `HierarchyQualifier` of this type and
- a parameter `HierarchyNodes` that is a collection of entities of a common type without multiple occurrences of the same entity.

`HierarchyQualifier` is the qualifier of a `RecursiveHierarchy` annotation on the entity type of the collection
given by the `HierarchyNodes` parameter. This specifies a recursive hierarchy that is evaluated by the function.

<a name="AvailableOnAggregatesType"></a>
## [AvailableOnAggregatesType](Org.OData.Aggregation.V1.xml#L531)


Property|Type|Description
:-------|:---|:----------
[RequiredProperties](Org.OData.Aggregation.V1.xml#L532)|\[PropertyPath\]|Properties required to apply this function

<a name="NavigationPropertyAggregationCapabilities"></a>
## [NavigationPropertyAggregationCapabilities](Org.OData.Aggregation.V1.xml#L537): [NavigationPropertyRestriction](Org.OData.Capabilities.V1.md#NavigationPropertyRestriction) *(Deprecated)*
[`Capabilities.NavigationRestrictions`](Org.OData.Capabilities.V1.md#NavigationRestrictions) that make use of the additional properties in this subtype are deprecated in favor of [`ApplySupported`](#ApplySupported) and [`CustomAggregate`](#CustomAggregate)

<a name="CustomAggregateType"></a>
## [CustomAggregateType](Org.OData.Aggregation.V1.xml#L555) *(Deprecated)*
Deprecated since [`NavigationPropertyAggregationCapabilities`](#NavigationPropertyAggregationCapabilities) is also deprecated

-------

# <a name="AuthorizationVocabulary" href="#AuthorizationVocabulary">7 Authorization Vocabulary</a>

**Namespace: [Org.OData.Authorization.V1](Org.OData.Authorization.V1.xml)**

The Authorization Vocabulary provides terms for describing authorization requirements of the service


## Terms

Term|Type|Description
:---|:---|:----------
[SecuritySchemes](Org.OData.Authorization.V1.xml#L65)|\[[SecurityScheme](#SecurityScheme)\]|<a name="SecuritySchemes"></a>At least one of the specified security schemes are required to make a request against the service
[Authorizations](Org.OData.Authorization.V1.xml#L78)|\[[Authorization](#Authorization)\]|<a name="Authorizations"></a>Lists the methods supported by the service to authorize access

<a name="SecurityScheme"></a>
## [SecurityScheme](Org.OData.Authorization.V1.xml#L69)


Property|Type|Description
:-------|:---|:----------
[Authorization](Org.OData.Authorization.V1.xml#L70)|[SchemeName](#SchemeName)|The name of a required authorization scheme
[RequiredScopes](Org.OData.Authorization.V1.xml#L73)|\[String\]|The names of scopes required from this authorization scheme

<a name="Authorization"></a>
## [*Authorization*](Org.OData.Authorization.V1.xml#L82)
Base type for all Authorization types

**Derived Types:**
- [OpenIDConnect](#OpenIDConnect)
- [Http](#Http)
- *[OAuthAuthorization](#OAuthAuthorization)*
  - [OAuth2ClientCredentials](#OAuth2ClientCredentials)
  - [OAuth2Implicit](#OAuth2Implicit)
  - [OAuth2Password](#OAuth2Password)
  - [OAuth2AuthCode](#OAuth2AuthCode)
- [ApiKey](#ApiKey)

Property|Type|Description
:-------|:---|:----------
[Name](Org.OData.Authorization.V1.xml#L84)|String|Name that can be used to reference the authorization scheme
[Description](Org.OData.Authorization.V1.xml#L87)|String?|Description of the authorization scheme

<a name="OpenIDConnect"></a>
## [OpenIDConnect](Org.OData.Authorization.V1.xml#L92): [Authorization](#Authorization)


Property|Type|Description
:-------|:---|:----------
[*Name*](Org.OData.Authorization.V1.xml#L84)|String|Name that can be used to reference the authorization scheme
[*Description*](Org.OData.Authorization.V1.xml#L87)|String?|Description of the authorization scheme
[IssuerUrl](Org.OData.Authorization.V1.xml#L93)|URL|Issuer location for the OpenID Provider. Configuration information can be obtained by appending `/.well-known/openid-configuration` to this Url.

<a name="Http"></a>
## [Http](Org.OData.Authorization.V1.xml#L99): [Authorization](#Authorization)


Property|Type|Description
:-------|:---|:----------
[*Name*](Org.OData.Authorization.V1.xml#L84)|String|Name that can be used to reference the authorization scheme
[*Description*](Org.OData.Authorization.V1.xml#L87)|String?|Description of the authorization scheme
[Scheme](Org.OData.Authorization.V1.xml#L100)|String|HTTP Authorization scheme to be used in the Authorization header, as per RFC7235
[BearerFormat](Org.OData.Authorization.V1.xml#L103)|String?|Format of the bearer token

<a name="OAuthAuthorization"></a>
## [*OAuthAuthorization*](Org.OData.Authorization.V1.xml#L108): [Authorization](#Authorization)


**Derived Types:**
- [OAuth2ClientCredentials](#OAuth2ClientCredentials)
- [OAuth2Implicit](#OAuth2Implicit)
- [OAuth2Password](#OAuth2Password)
- [OAuth2AuthCode](#OAuth2AuthCode)

Property|Type|Description
:-------|:---|:----------
[*Name*](Org.OData.Authorization.V1.xml#L84)|String|Name that can be used to reference the authorization scheme
[*Description*](Org.OData.Authorization.V1.xml#L87)|String?|Description of the authorization scheme
[Scopes](Org.OData.Authorization.V1.xml#L109)|\[[AuthorizationScope](#AuthorizationScope)\]|Available scopes
[RefreshUrl](Org.OData.Authorization.V1.xml#L112)|URL?|Refresh Url

<a name="OAuth2ClientCredentials"></a>
## [OAuth2ClientCredentials](Org.OData.Authorization.V1.xml#L118): [OAuthAuthorization](#OAuthAuthorization)


Property|Type|Description
:-------|:---|:----------
[*Name*](Org.OData.Authorization.V1.xml#L84)|String|Name that can be used to reference the authorization scheme
[*Description*](Org.OData.Authorization.V1.xml#L87)|String?|Description of the authorization scheme
[*Scopes*](Org.OData.Authorization.V1.xml#L109)|\[[AuthorizationScope](#AuthorizationScope)\]|Available scopes
[*RefreshUrl*](Org.OData.Authorization.V1.xml#L112)|URL?|Refresh Url
[TokenUrl](Org.OData.Authorization.V1.xml#L119)|URL|Token Url

<a name="OAuth2Implicit"></a>
## [OAuth2Implicit](Org.OData.Authorization.V1.xml#L125): [OAuthAuthorization](#OAuthAuthorization)
Security note: OAuth2 implicit grant is considered to be not secure and should not be used by clients, see [OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics.html#name-implicit-grant).

Property|Type|Description
:-------|:---|:----------
[*Name*](Org.OData.Authorization.V1.xml#L84)|String|Name that can be used to reference the authorization scheme
[*Description*](Org.OData.Authorization.V1.xml#L87)|String?|Description of the authorization scheme
[*Scopes*](Org.OData.Authorization.V1.xml#L109)|\[[AuthorizationScope](#AuthorizationScope)\]|Available scopes
[*RefreshUrl*](Org.OData.Authorization.V1.xml#L112)|URL?|Refresh Url
[AuthorizationUrl](Org.OData.Authorization.V1.xml#L127)|URL|Authorization URL

<a name="OAuth2Password"></a>
## [OAuth2Password](Org.OData.Authorization.V1.xml#L133): [OAuthAuthorization](#OAuthAuthorization)


Property|Type|Description
:-------|:---|:----------
[*Name*](Org.OData.Authorization.V1.xml#L84)|String|Name that can be used to reference the authorization scheme
[*Description*](Org.OData.Authorization.V1.xml#L87)|String?|Description of the authorization scheme
[*Scopes*](Org.OData.Authorization.V1.xml#L109)|\[[AuthorizationScope](#AuthorizationScope)\]|Available scopes
[*RefreshUrl*](Org.OData.Authorization.V1.xml#L112)|URL?|Refresh Url
[TokenUrl](Org.OData.Authorization.V1.xml#L134)|URL|Token Url

<a name="OAuth2AuthCode"></a>
## [OAuth2AuthCode](Org.OData.Authorization.V1.xml#L140): [OAuthAuthorization](#OAuthAuthorization)


Property|Type|Description
:-------|:---|:----------
[*Name*](Org.OData.Authorization.V1.xml#L84)|String|Name that can be used to reference the authorization scheme
[*Description*](Org.OData.Authorization.V1.xml#L87)|String?|Description of the authorization scheme
[*Scopes*](Org.OData.Authorization.V1.xml#L109)|\[[AuthorizationScope](#AuthorizationScope)\]|Available scopes
[*RefreshUrl*](Org.OData.Authorization.V1.xml#L112)|URL?|Refresh Url
[AuthorizationUrl](Org.OData.Authorization.V1.xml#L141)|URL|Authorization URL
[TokenUrl](Org.OData.Authorization.V1.xml#L145)|URL|Token Url

<a name="AuthorizationScope"></a>
## [AuthorizationScope](Org.OData.Authorization.V1.xml#L151)


Property|Type|Description
:-------|:---|:----------
[Scope](Org.OData.Authorization.V1.xml#L152)|String|Scope name
[Grant](Org.OData.Authorization.V1.xml#L155)|String?|Identity that has access to the scope or can grant access to the scope.
[Description](Org.OData.Authorization.V1.xml#L159)|String|Description of the scope

<a name="ApiKey"></a>
## [ApiKey](Org.OData.Authorization.V1.xml#L164): [Authorization](#Authorization)


Property|Type|Description
:-------|:---|:----------
[*Name*](Org.OData.Authorization.V1.xml#L84)|String|Name that can be used to reference the authorization scheme
[*Description*](Org.OData.Authorization.V1.xml#L87)|String?|Description of the authorization scheme
[KeyName](Org.OData.Authorization.V1.xml#L165)|String|The name of the header or query parameter
[Location](Org.OData.Authorization.V1.xml#L168)|[KeyLocation](#KeyLocation)|Whether the API Key is passed in the header or as a query option

<a name="KeyLocation"></a>
## [KeyLocation](Org.OData.Authorization.V1.xml#L173)


Member|Value|Description
:-----|----:|:----------
[Header](Org.OData.Authorization.V1.xml#L174)|0|API Key is passed in the header
[QueryOption](Org.OData.Authorization.V1.xml#L177)|1|API Key is passed as a query option
[Cookie](Org.OData.Authorization.V1.xml#L180)|2|API Key is passed as a cookie

<a name="SchemeName"></a>
## [SchemeName](Org.OData.Authorization.V1.xml#L185)
**Type:** String

The name of the authorization scheme.

-------

# <a name="JSONVocabulary" href="#JSONVocabulary">8 JSON Vocabulary</a>

**Namespace: [Org.OData.JSON.V1](Org.OData.JSON.V1.xml)**

Terms for JSON properties


## Terms

Term|Type|Description
:---|:---|:----------
[Schema](Org.OData.JSON.V1.xml#L67)|[JSON](#JSON)|<a name="Schema"></a>The JSON Schema for JSON values of the annotated media entity type, property, parameter, return type, term, or type definition<br>The schema can be a schema reference, i.e. `{"$ref":"url/of/schemafile#/path/to/schema/within/schemafile"}`

<a name="JSON"></a>
## [JSON](Org.OData.JSON.V1.xml#L75)
**Type:** Stream

Textual data of media type `application/json`

-------

# <a name="RepeatabilityVocabulary" href="#RepeatabilityVocabulary">9 Repeatability Vocabulary</a>

**Namespace: [Org.OData.Repeatability.V1](Org.OData.Repeatability.V1.xml)**

Terms describing repeatable requests


## Terms

Term|Type|Description
:---|:---|:----------
[Supported](Org.OData.Repeatability.V1.xml#L69)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="Supported"></a>Repeatable requests are supported for the annotated service, entity set, or action<br>Annotations on entity set or action import level override an annotation on entity container level, and an annotation on action level override an annotation on action import level.
[DeleteWithClientIDSupported](Org.OData.Repeatability.V1.xml#L74)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="DeleteWithClientIDSupported"></a>Deletion of remembered requests by client ID is supported<br>Clients that specify a `RepeatabilityClientID` header can delete all remembered requests for that client ID by sending a<br/>`DELETE $RepeatableRequestsWithClientID/{Repeatability-Client-ID}`<br/>request to the service root.
[DeleteWithRequestIDSupported](Org.OData.Repeatability.V1.xml#L85)|[Tag](Org.OData.Core.V1.md#Tag)|<a name="DeleteWithRequestIDSupported"></a>Deletion of remembered requests by request ID is supported<br>Clients can delete a single remembered request by sending a<br/>`DELETE $RepeatableRequestWithRequestID/{Repeatability-Request-ID}`<br/>request to the service root.

-------

# <a name="TemporalVocabulary" href="#TemporalVocabulary">10 Temporal Vocabulary</a>

**Namespace: [Org.OData.Temporal.V1](Org.OData.Temporal.V1.xml)**

Terms for describing time-dependent data


## Terms

Term|Type|Description
:---|:---|:----------
[ApplicationTimeSupport](Org.OData.Temporal.V1.xml#L68)|[ApplicationTimeSupportType](#ApplicationTimeSupportType)|<a name="ApplicationTimeSupport"></a>This collection supports temporal requests


## Actions

<a name="Update"></a>
### [Update](Org.OData.Temporal.V1.xml#L172)

Updates existing time slices with values from delta time slices whose object keys match and whose periods overlap

The update behavior for a given object key is known from the [SQL statement](https://www.ibm.com/docs/en/db2oc?topic=statements-update)
          `UPDATE ... FOR PORTION OF BUSINESS_TIME ... WHERE ...`.

`deltaTimeslices` with non-matching object keys and non-overlapping sub-periods of `deltaTimeslices` are disregarded.

Parameter|Type|Description
:--------|:---|:----------
**[timeslices](Org.OData.Temporal.V1.xml#L180)**|\[EntityType\]|**Binding parameter:** Time slices to modify
[deltaTimeslices](Org.OData.Temporal.V1.xml#L183)|\[[TimesliceWithPeriod](#TimesliceWithPeriod)\]|New time slices whose property values are used to update the `timeslices` collection<br>The delta time slices need not contain all properties, but at least the boundary values of the period to change. An absent object key property matches any key property value. New time slices are processed in the order of the collection, which especially matters if some of the specified change periods overlap.
[&rarr;](Org.OData.Temporal.V1.xml#L191)|\[[TimesliceWithPeriod](#TimesliceWithPeriod)\]|Modified time slices


<a name="Upsert"></a>
### [Upsert](Org.OData.Temporal.V1.xml#L196)

Like [`Update`](#Update), but additionally inserts those (sub-periods of) `deltaTimeslices` that `Update` disregards

Parameter|Type|Description
:--------|:---|:----------
**[timeslices](Org.OData.Temporal.V1.xml#L198)**|\[EntityType\]|**Binding parameter:** Time slices to modify
[deltaTimeslices](Org.OData.Temporal.V1.xml#L201)|\[[TimesliceWithPeriod](#TimesliceWithPeriod)\]|New time slices to be merged into the `timeslices` collection<br>The delta time slices must contain all properties that are needed for insertion. New time slices are processed in the order of the collection, which especially matters if some of the specified change periods overlap.
[&rarr;](Org.OData.Temporal.V1.xml#L208)|\[[TimesliceWithPeriod](#TimesliceWithPeriod)\]|Modified time slices


<a name="Delete"></a>
### [Delete](Org.OData.Temporal.V1.xml#L213)

Deletes (sub-periods of) existing time slices whose object keys match and whose periods overlap `deltaTimeslices`

The deletion behavior for a given object key is known from the [SQL statement](https://www.ibm.com/docs/en/db2oc?topic=statements-delete)
          `DELETE ... FOR PORTION OF BUSINESS_TIME ... WHERE ...`.
          The sub-period of an existing time slice that lies outside a given instance of `deltaTimeslices`
          is kept, effectively shortening the time slice.

Parameter|Type|Description
:--------|:---|:----------
**[timeslices](Org.OData.Temporal.V1.xml#L221)**|\[EntityType\]|**Binding parameter:** Time slices to modify
[deltaTimeslices](Org.OData.Temporal.V1.xml#L224)|\[[TimesliceWithPeriod](#TimesliceWithPeriod)\]|Time slices to be deleted from the `timeslices` collection<br>The delta time slices contain only the boundary values of the period to delete and (parts of) the object key. An absent object key property matches any key property value.
[&rarr;](Org.OData.Temporal.V1.xml#L231)|\[[TimesliceWithPeriod](#TimesliceWithPeriod)\]|Deleted (sub-periods of) time slices


<a name="ApplicationTimeSupportType"></a>
## [ApplicationTimeSupportType](Org.OData.Temporal.V1.xml#L75)


Property|Type|Description
:-------|:---|:----------
[UnitOfTime](Org.OData.Temporal.V1.xml#L76)|[UnitOfTime](#UnitOfTime)|Unit of time and other properties of a time period
[Timeline](Org.OData.Temporal.V1.xml#L79)|[Timeline](#Timeline)|Describes how the history and future of the data are represented
[SupportedActions](Org.OData.Temporal.V1.xml#L82)|\[[QualifiedActionName](Org.OData.Core.V1.md#QualifiedActionName)\]|List of supported temporal actions

<a name="UnitOfTime"></a>
## [*UnitOfTime*](Org.OData.Temporal.V1.xml#L87)
Unit of time and other properties of a time period

**Derived Types:**
- [UnitOfTimeDateTimeOffset](#UnitOfTimeDateTimeOffset)
- [UnitOfTimeDate](#UnitOfTimeDate)

<a name="UnitOfTimeDateTimeOffset"></a>
## [UnitOfTimeDateTimeOffset](Org.OData.Temporal.V1.xml#L91): [UnitOfTime](#UnitOfTime)
Period start and end are of type Edm.DateTimeOffset

Property|Type|Description
:-------|:---|:----------
[Precision](Org.OData.Temporal.V1.xml#L93)|Byte|Precision of Edm.DateTimeOffset values for period start and end

<a name="UnitOfTimeDate"></a>
## [UnitOfTimeDate](Org.OData.Temporal.V1.xml#L98): [UnitOfTime](#UnitOfTime)
Period start and end are of type Edm.Date

The period is a contiguous set of days and does not consider the time of the day.

Property|Type|Description
:-------|:---|:----------
[ClosedClosedPeriods](Org.OData.Temporal.V1.xml#L101)|Boolean|If `true`, the period end is the last day in the period; if `false`, the period end is the first day after the period

<a name="Timeline"></a>
## [*Timeline*](Org.OData.Temporal.V1.xml#L107)
Describes how the history and future of the data are represented

**Derived Types:**
- [TimelineSnapshot](#TimelineSnapshot)
- [TimelineVisible](#TimelineVisible)

<a name="TimelineSnapshot"></a>
## [TimelineSnapshot](Org.OData.Temporal.V1.xml#L111): [Timeline](#Timeline)
Each OData entity maps each point in application time to an instance of the entity type

To address an entity in a resource path or path to related resources, a point in application time must be specified as described in [OData-Temporal, section 4.2.1].
          The addressed entity is then a snapshot of the data at the given point in time.
          When an action defined in this vocabulary is applied to a collection of this entity type,
          the entity key plays the role of object key.

<a name="TimelineVisible"></a>
## [TimelineVisible](Org.OData.Temporal.V1.xml#L121): [Timeline](#Timeline)
Each OData entity represents data during a period of application time

The temporal collection MUST NOT contain two entities with the same object key as defined by their `ObjectKey` properties
          and with overlapping application-time periods as defined by their `PeriodStart` and `PeriodEnd` properties.
          The temporal collection always contains all entities (with consecutive time periods) for a given object key.

Property|Type|Description
:-------|:---|:----------
[PeriodStart](Org.OData.Temporal.V1.xml#L128)|PropertyPath|Property containing lower boundary of a period
[PeriodEnd](Org.OData.Temporal.V1.xml#L131)|PropertyPath|Property containing upper boundary of a period<br>If an upper boundary property does not specify a default value, a default value of `max` is assumed.
[ObjectKey](Org.OData.Temporal.V1.xml#L137)|\[PropertyPath\]|The set of primitive properties that identify a temporal object<br>A temporal object is a set of facts whose changes over application time are tracked by the service. The entities in the annotated collection belong to potentially multiple temporal objects, and each temporal object is uniquely identified by the values of the specified object key properties. Object key properties follow the same rules as entity key properties. If no object key is specified, only a single temporal object belongs to the annotated collection.

<a name="TimesliceWithPeriod"></a>
## [TimesliceWithPeriod](Org.OData.Temporal.V1.xml#L143)
Delta time slices with validity period

The properties `PeriodStart` and `PeriodEnd` MUST NOT be present
          if the entity type of the `Timeslice` already contains period start and end, that is,
          if the collection on which the action is invoked has visible timeline.
          If present, they MUST have the same type, either `Edm.Date` or `Edm.DateTimeOffset`,
          and they are interpreted according to the [`ApplicationTimeSupport/UnitOfTime`](#ApplicationTimeSupportType) of the collection.
          In particular, `ApplicationTimeSupport/UnitOfTime/ClosedClosedPeriods` governs whether a `PeriodEnd` of type `Edm.Date`
          is the last day in the period or the first day after the period.
          If `PeriodStart` is present and `PeriodEnd` is absent, a default value of `max` is assumed for `PeriodEnd`.

Property|Type|Description
:-------|:---|:----------
[PeriodStart](Org.OData.Temporal.V1.xml#L155)|PrimitiveType?|Lower boundary of the time slice
[PeriodEnd](Org.OData.Temporal.V1.xml#L158)|PrimitiveType?|Upper boundary of the time slice
[Timeslice](Org.OData.Temporal.V1.xml#L161)|EntityType|A time slice with the same entity type as the binding parameter of the action<br>When it appears in the return type of an action in this vocabulary, the time slice has the same entity set as the binding parameter value.


-------

# <a name="References" href="#References">Appendix A. References</a>

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## <a name="NormativeReferences" href="#NormativeReferences">A.1 Normative References</a>

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

###### <a name="ODataProtocol">[OData-Protocol]</a>
_OData Version 4.02. Part 1: Protocol._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="ODataCSDL">[OData-CSDL]</a>
_OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02._  
See link in "[Related work](#RelatedWork)" section on cover page.

_OData Common Schema Definition Language (CSDL) XML Representation Version 4.02._  
See link in "[Related work](#RelatedWork)" section on cover page.

###### <a name="rfc2119">[RFC2119]</a>
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_.
https://www.rfc-editor.org/info/rfc2119.

###### <a name="rfc8174">[RFC8174]</a>
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_.
https://www.rfc-editor.org/info/rfc8174.

## <a name="NonNormativeReferences" href="#NonNormativeReferences">A.2 Non-Normative References</a>

###### <a name="ODataVocabs">[OData-Vocabs]</a>
_odata-vocabularies OASIS TC GitHub repository_.
https://github.com/oasis-tcs/odata-vocabularies.

<!-- TODO:
-------

# Appendix Safety, Security and Privacy Considerations

do we have considerations specific to URLs, for example length, encoding, privacy (use $batch if in doubt), ...?
-->

-------

# <a name="Acknowledgments" href="#Acknowledgments">Appendix B. Acknowledgments</a>

## <a name="SpecialThanks" href="#SpecialThanks">B.1 Special Thanks</a>

The contributions of the OASIS OData Technical Committee members, enumerated in [OData-Protocol](#ODataProtocol), are gratefully acknowledged.

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
| Martin | Zurmuehl | SAP SE |

-------

# <a name="RevisionHistory" href="#RevisionHistory">Appendix C. Revision History</a>

| Revision | Date | Editor | Changes Made |
| :--- | :--- | :--- | :--- |
|Committee Specification Draft 01|2016-12-08|Michael Pizzo<br>Ralf Handl<br>Ram Jeyaraman| Documentation automatically extracted from XML source files|

-------

# <a name="Notices" href="#Notices">Appendix D. Notices</a>

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

