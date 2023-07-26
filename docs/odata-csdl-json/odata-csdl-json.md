
![OASIS Logo](https://docs.oasis-open.org/templates/OASISLogo-v3.0.png)

-------

# OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02

## Committee Specification Draft 01

## 14 July 2023

$\hbox{}$

#### This stage:
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-json-v4.02-csd01.md (Authoritative) \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-json-v4.02-csd01.html \
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-json-v4.02-csd01.pdf

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

#### Additional artifacts:
This prose specification is one component of a Work Product that also includes:
* XML schemas: (list file names or directory name)
* Other parts (list titles and/or file names)
* `(Note: Any normative computer language definitions that are part of the Work Product, such as XML instances, schemas and Java(TM) code, including fragments of such, must be (a) well formed and valid, (b) provided in separate plain text files, (c) referenced from the Work Product; and (d) where any definition in these separate files disagrees with the definition found in the specification, the definition in the separate file prevails. Remove this note before submitting for publication.)`

#### Related work:
This specification replaces or supersedes:
* _OData Common Schema Definition Language (CSDL) JSON Representation Version 4.01_. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. OASIS Standard. Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html.

This specification is related to:
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html

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
https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/odata-csdl-json-v4.02-csd01.html.
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
- [2 CSDL JSON Document](#CSDLJSONDocument)
  - [2.1 Reference](#Reference)
  - [2.2 Included Schema](#IncludedSchema)
  - [2.3 Included Annotations](#IncludedAnnotations)
- [A References](#References)
  - [A.1 Normative References](#NormativeReferences)
  - [A.2 Informative References](#InformativeReferences)
- [B Table of JSON Objects and Members](#TableofJSONObjectsandMembers)
- [C Acknowledgments](#Acknowledgments)
  - [C.1 Special Thanks](#SpecialThanks)
  - [C.2 Participants](#Participants)
- [D Revision History](#RevisionHistory)
- [E Notices](#Notices)
:::

-------

# <a name="Introduction" href="#Introduction">1 Introduction</a>

<!-- All text is normative unless otherwise labeled -->

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

All other text is normative unless otherwise labeled.

::: example
Here is a customized command line which will generate HTML from this markdown file (named `odata-csdl-json-v4.02-csd01.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs
       -t html
       -o odata-csdl-json-v4.02-csd01.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --wrap=none
       --metadata pagetitle="OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02"
       odata-csdl-json-v4.02-csd01.md
```

This uses pandoc 3.1.2 from https://github.com/jgm/pandoc/releases/tag/3.1.2.
:::

-------

# <a name="CSDLJSONDocument" href="#CSDLJSONDocument">2 CSDL JSON Document</a>

::: dl
### <a name="DocumentObject1" href="#DocumentObject1"> Document Object</a>

:::: dd
A CSDL JSON document consists of a single JSON object. This document object MUST contain the member `$Version`.

The document object MAY contain the member [`$Reference`](#Reference) to reference other CSDL documents.

It also MAY contain members for schemas.

If the CSDL JSON document is the metadata document of an OData service, the document object MUST contain the member `$EntityContainer`.
::::

### <a name="Version1.1" href="#Version1.1"> `$Version`</a>

:::: dd
The value of `$Version` is a string containing either 4.0 or 4.01.
::::

### <a name="EntityContainer1.2" href="#EntityContainer1.2"> `$EntityContainer`</a>

:::: dd
The value of `$EntityContainer` is value is the namespace-qualified name of the entity container of that service. This is the only place where a model element MUST be referenced with its namespace-qualified name and use of the alias-qualified name is not allowed.
::::
:::

::: example
Example 2:
```json
{
  "$Version": "4.01",
  "$EntityContainer": "org.example.DemoService",
  …
}
```
:::

## <a name="Reference" href="#Reference">2.1 Reference</a>

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
annotation, defined in [OData-VocCore](ODataVocCore), MAY be used to
indicate a particular version of the referenced document. If the
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation is present, the `$schemaversion` system query option, defined
[OData‑Protocol](ODataProtocol), SHOULD be used when retrieving the
referenced schema document.

::: dl
### <a name="Reference1.3" href="#Reference1.3"> `$Reference`</a>

:::: dd
The value of `$Reference` is an object that contains one member per
referenced CSDL document. The name of the pair is a URI for the
referenced document. The URI MAY be relative to the document containing
the `$Reference`. The value of each member is a reference object.
::::

### <a name="ReferenceObject2" href="#ReferenceObject2"> Reference Object</a>

:::: dd
The reference object MAY contain the members
[`$Include`](#IncludedSchema) and
[`$IncludeAnnotations`](#IncludedAnnotations) as well as
[annotations](Annotation).
::::
:::

::: example
Example 3: references to other CSDL documents
```json
{
  …
  "$Reference": {
    "http://vocabs.odata.org/capabilities/v1": {
      …
    },
    "http://vocabs.odata.org/core/v1": {
      …
    },
    "http://example.org/display/v1": {
      …
    }
  },
  …
}
```
:::

## <a name="IncludedSchema" href="#IncludedSchema">2.2 Included Schema</a>

A reference MAY include zero or more schemas from the referenced
document.

The included schemas are identified via their [namespace](Namespace).
The same namespace MUST NOT be included more than once, even if it is
declared in more than one referenced document.

When including a schema, a [simple identifier](SimpleIdentifier) value
MAY be specified as an alias for the schema that is used in qualified
names instead of the namespace. For example, an alias of `display` might
be assigned to the namespace `org.example.vocabularies.display`. An
alias-qualified name is resolved to a fully qualified name by examining
aliases for included schemas and schemas defined within the document.

::: dl
:::: dd
If an included schema specifies an alias, the alias MUST be used in
qualified names throughout the document to identify model elements of
the included schema. A mixed use of namespace-qualified names and
alias-qualified names is not allowed.
::::
:::

Aliases are document-global, so all schemas defined within or included
into a document MUST have different aliases, and aliases MUST differ
from the namespaces of all schemas defined within or included into a
document.

The alias MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.

An alias is only valid within the document in which it is declared; a
referencing document may define its own aliases for included schemas.

::: dl
### <a name="Include2.1" href="#Include2.1"> `$Include`</a>

:::: dd
The value of `$Include` is an array. Array items are objects that MUST
contain the member `$Namespace` and MAY contain the member `$Alias`.

The item objects MAY contain [annotations](Annotation).
::::

### <a name="Namespace2.2" href="#Namespace2.2"> `$Namespace`</a>

:::: dd
The value of `$Namespace` is a string containing the namespace of the
included schema.
::::

### <a name="Alias2.3" href="#Alias2.3"> `$Alias`</a>

:::: dd
The value of `$Alias` is a string containing the alias for the included
schema.
::::
:::

::: example
Example 4: references to entity models containing definitions of
vocabulary terms
```json
{
  …
  "$Reference": {
    "http://vocabs.odata.org/capabilities/v1": {
      "$Include": [
        {
          "$Namespace": "Org.OData.Capabilities.V1",
          "$Alias": "Capabilities"
        }
      ]
    },
    "http://vocabs.odata.org/core/v1": {
      "$Include": [
        {
          "$Namespace": "Org.OData.Core.V1",
          "$Alias": "Core",
          "@Core.DefaultNamespace": true
        }
      ]
    },
    "http://example.org/display/v1": {
      "$Include": [
        {
          "$Namespace": "org.example.display",
          "$Alias": "UI"
        }
      ]
    }
  },
  …
}
```
:::

## <a name="IncludedAnnotations" href="#IncludedAnnotations">2.3 Included Annotations</a>

In addition to including whole schemas with all model constructs defined
within that schema, annotations can be included with more flexibility.

Annotations are selectively included by specifying the
[namespace](Namespace) of the annotations' term. Consumers can opt not
to inspect the referenced document if none of the term namespaces is of
interest for the consumer.

In addition, the [qualifier](Qualifier) of annotations to be included
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

In addition, the namespace of the annotations' [target](Target) MAY be
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

::: dl
### <a name="IncludeAnnotations2.4" href="#IncludeAnnotations2.4"> `$IncludeAnnotations`</a>

:::: dd
The value of `$IncludeAnnotations` is an array. Array items are objects
that MUST contain the member `$TermNamespace` and MAY contain the
members `$Qualifier` and `$TargetNamespace`.
::::

### <a name="TermNamespace2.5" href="#TermNamespace2.5"> `$TermNamespace`</a>

:::: dd
The value of `$TermNamespace` is a namespace.
::::

### <a name="Qualifier2.6" href="#Qualifier2.6"> `$Qualifier`</a>

:::: dd
The value of `$Qualifier` is a simple identifier.
::::

### <a name="TargetNamespace2.7" href="#TargetNamespace2.7"> `$TargetNamespace`</a>

:::: dd
The value of `$TargetNamespace` is a namespace.
::::
:::

::: example
Example 5: reference documents that contain annotations
```json
{
  …
  "$Reference": {
    "http://odata.org/ann/b": {
      "$IncludeAnnotations": [
        {
          "$TermNamespace": "org.example.validation"
        },
        {
          "$TermNamespace": "org.example.display",
          "$Qualifier": "Tablet"
        },
        {
          "$TermNamespace": "org.example.hcm",
          "$TargetNamespace": "com.example.Sales"
        },
        {
          "$TermNamespace": "org.example.hcm",
          "$Qualifier": "Tablet",
          "$TargetNamespace": "com.example.Person"
        }
      ]
    }
  },
  …
}
```

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

# <a name="References" href="#References">Appendix A. References</a>

<!-- Required section -->

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## <a name="NormativeReferences" href="#NormativeReferences">A.1 Normative References</a>

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

`(Reference sources:
For references to IETF RFCs, use the approved citation formats at:  
https://docs.oasis-open.org/templates/ietf-rfc-list/ietf-rfc-list.html.  
For references to W3C Recommendations, use the approved citation formats at:  
https://docs.oasis-open.org/templates/w3c-recommendations-list/w3c-recommendations-list.html.  
Remove this note before submitting for publication.)`

###### [OData-v4.02]
* _OData Version 4.02_. Edited by Michael Pizzo, Ralf Handl, and Heiko Theißen. A multi-part Work Product that includes:
  * _OData Version 4.02 Part 1: Protocol_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part1-protocol.html
  * _OData Version 4.02 Part 2: URL Conventions_. Latest stage. https://docs.oasis-open.org/odata/odata/v4.02/odata-v4.02-part2-url-conventions.html

###### <a name="rfc2119">[RFC2119]</a>
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_
http://www.rfc-editor.org/info/rfc2119.

###### <a name="rfc8174">[RFC8174]</a>
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_
http://www.rfc-editor.org/info/rfc8174.

## <a name="InformativeReferences" href="#InformativeReferences">A.2 Informative References</a>

###### <a name="rfc3552">[RFC3552]</a>
_Rescorla, E. and B. Korver, "Guidelines for Writing RFC Text on Security Considerations", BCP 72, RFC 3552, DOI 10.17487/RFC3552, July 2003_
https://www.rfc-editor.org/info/rfc3552.

-------

# <a name="TableofJSONObjectsandMembers" href="#TableofJSONObjectsandMembers">Appendix B. Table of JSON Objects and Members</a>

::: toc
- [Document Object](#DocumentObject1)
  - [`$Version`](#Version1.1)
  - [`$EntityContainer`](#EntityContainer1.2)
  - [`$Reference`](#Reference1.3)
- [Reference Object](#ReferenceObject2)
  - [`$Include`](#Include2.1)
  - [`$Namespace`](#Namespace2.2)
  - [`$Alias`](#Alias2.3)
  - [`$IncludeAnnotations`](#IncludeAnnotations2.4)
  - [`$TermNamespace`](#TermNamespace2.5)
  - [`$Qualifier`](#Qualifier2.6)
  - [`$TargetNamespace`](#TargetNamespace2.7)
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

