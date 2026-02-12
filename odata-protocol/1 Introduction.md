
-------

# ##sec Introduction

The Open Data Protocol (OData) enables the creation of REST-based data
services which allow resources, identified using Uniform Resource
Locators (URLs) and defined in a data model, to be published and edited
by Web clients using simple HTTP messages. This specification defines
the core semantics and the behavioral aspects of the protocol.

The [OData-URL](#ODataURL) specification defines a set of rules for
constructing URLs to identify the data and metadata exposed by an OData
service as well as a set of reserved URL query options.

The [OData-CSDLJSON](#ODataCSDL) specification defines a JSON
representation of the entity data model exposed by an OData service.

The [OData-CSDLXML](#ODataCSDLXML) specification defines an XML
representation of the entity data model exposed by an OData service.

The [OData-JSON](#ODataJSON) document specifies the JSON format of the
resource representations that are exchanged using OData.

## ##subsec Changes from Earlier Versions

Section | Feature / Change | Issue
--------|------------------|------
[Section ##Preferencecontinueonerrorodatacontinueonerror] | Responses that include errors MUST include the `Preference-Applied` header with `continue-on-error` set to `true` | [1965](https://github.com/oasis-tcs/odata-specs/issues/1965)
[Section ##CollectionofEntities]| 
Context URLs use parentheses-style keys without percent-encoding| 
[368](https://github.com/oasis-tcs/odata-specs/issues/368)
[Section ##DataModification]| 
Response code `204 No Content` after successful data modification if requested response could not be constructed| 
[443](https://github.com/oasis-tcs/odata-specs/issues/443)
[Section ##CreateanEntity]| 
Services can validate non-insertable property values in insert payloads| 
[356](https://github.com/oasis-tcs/odata-specs/issues/356)
[Section ##LinktoRelatedEntitiesWhenCreatinganEntity]| 
Client can update properties of existing related entities when creating an entity| 
[352](https://github.com/oasis-tcs/odata-specs/issues/352)
[Section ##CreateRelatedEntitiesWhenCreatinganEntity]| 
Deep-insert response includes at least the properties present in the request| 
[363](https://github.com/oasis-tcs/odata-specs/issues/363)
[Section ##UpdateanEntity]| 
Services can validate non-updatable property values in update payloads| 
[356](https://github.com/oasis-tcs/odata-specs/issues/356)
[Section ##UpsertanEntity]| 
Upserts to single-valued non-containment navigation properties| 
[455](https://github.com/oasis-tcs/odata-specs/issues/455)
[Section ##UpdateaComplexProperty]| 
Setting a complex property to a different type| 
[534](https://github.com/oasis-tcs/odata-specs/issues/534)
[Section ##UpdateaCollectionofEntities]| 
Control information to prevent updates| 
[2021](https://github.com/oasis-tcs/odata-specs/issues/2021)
[Section ##ReplaceaCollectionofEntities]| Semantics of `continue-on-error` when replacing a collection of entities | [358](https://github.com/oasis-tcs/odata-specs/issues/358)
[Section ##InvokinganAction]| 
Omission of collection-valued action parameters| 
[2045](https://github.com/oasis-tcs/odata-specs/issues/2045)
[Section ##Conformance] | Allow `400 Bad Request` in addition to `501 Not Implemented` for unsupported functionality| [391](https://github.com/oasis-tcs/odata-specs/issues/391)
[Section ##InteroperableODataClients] | Encoding of plus character in URLs | [485](https://github.com/oasis-tcs/odata-specs/issues/485)

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

-------

# ##sec Overview

The OData Protocol is an application-level protocol for interacting with
data via RESTful interfaces. The protocol supports the description of
data models and the editing and querying of data according to those
models. It provides facilities for:
- Metadata: a machine-readable description
of the data model exposed by a particular service.
- Data: sets of data entities and the
relationships between them.
- Querying: requesting that the service
perform a set of filtering and other transformations to its data, then
return the results.
- Editing: creating, updating, and
deleting data.
- Operations: invoking custom logic
- Vocabularies: attaching custom semantics

The OData Protocol is different from other REST-based web service
approaches in that it provides a uniform way to describe both the data
and the data model. This improves semantic interoperability between
systems and allows an ecosystem to emerge.

Towards that end, the OData Protocol follows these design principles:
- Prefer mechanisms that work on a variety
of data sources. In particular, do not assume a relational data model.
- Extensibility is important. Services
should be able to support extended functionality without breaking
clients unaware of those extensions.
- Follow REST principles.
- OData should build incrementally. A very
basic, compliant service should be easy to build, with additional work
necessary only to support additional capabilities.
- Keep it simple. Address the common cases
and provide extensibility where necessary.

-------

# ##sec Data Model

This section provides a high-level description of the *Entity Data Model
(EDM)*: the abstract data model that is used to describe the data
exposed by an OData service. An [OData Metadata
Document](#MetadataDocumentRequest) is a representation of a service's
data model exposed for client consumption.

The central concepts in the EDM are entities, relationships, entity
sets, actions, and functions.

*Entities* are instances of entity types (e.g. `Customer`, `Employee`,
etc.).

*Entity types* are named structured types with a key. They define the
named properties and relationships of an entity. Entity types may derive
by single inheritance from other entity types.

The *key* of an entity type is formed from a subset of the primitive
properties (e.g. `CustomerId`, `OrderId`, `LineId`, etc.) of the entity
type.

*Complex types* are keyless named structured types consisting of a set
of properties. These are value types whose instances cannot be
referenced outside of their containing entity. Complex types are
commonly used as property values in an entity or as parameters to
operations.

Properties declared as part of a structured type's definition are
called *declared properties*. Instances of structured types may contain
additional undeclared *dynamic properties*. A dynamic property cannot
have the same name as a declared property. Entity or complex types which
allow clients to persist additional undeclared properties are called
*open types*.
A dynamic property need not exist on all instances of a structured type,
and it can have values of different types on different instances.
It can be specified in both [`$expand`](#SystemQueryOptionexpand) and [`$select`](#SystemQueryOptionselect),
and it is interpreted per instance according to its instance-specific type,
with the addition that it is silently ignored in `$expand` if the instance-specific value is neither a stream,
an entity, or a collection of entities.

Relationships from one entity to another are represented as *navigation
properties.* Navigation properties are generally defined as part of an
entity type, but can also appear on entity instances as undeclared
*dynamic navigation properties*. Each relationship has a cardinality.

*Enumeration types* are named primitive types whose values are named
constants with underlying integer values.

*Type definitions* are named primitive types with fixed facet values
such as maximum length or precision. Type definitions can be used in
place of primitive typed properties, for example, within property
definitions.

*Entity sets* are named collections of entities (e.g. `Customers` is an
entity set containing `Customer` entities). An entity's key uniquely
identifies the entity within an entity set. If multiple entity sets use
the same entity type, the same combination of key values can appear in
more than one entity set and identifies different entities, one per
entity set where this key combination appears. Each of these entities
has a different [entity-id](#EntityIdsandEntityReferences). Entity sets
provide entry points into the data model.

*Operations* allow the execution of custom logic on parts of a data
model. [*Functions*](#Functions) are operations that do not have side
effects and may support further composition, for example, with
additional filter operations, functions or an action.
[*Actions*](#Actions) are operations that allow side effects, such as
data modification, and cannot be further composed in order to avoid
non-deterministic behavior. Actions and functions are either *bound* to
a type, enabling them to be called as members of an instance of that
type, or unbound, in which case they are called as static operations.
*Action imports* and *function imports* enable unbound actions and
functions to be called from the service root.

*Singletons* are named entities which can be accessed as direct children
of the entity container. A singleton may also be a member of an entity
set.

An OData *resource* is anything in the model that can be addressed (an
entity set, entity, property, or operation).

Refer to [OData-CSDLJSON](#ODataCSDL) or [OData-CSDLXML](#ODataCSDLXML) for
more information on the OData entity data model.

## ##subsec Annotations

Model and instance elements can be decorated with *Annotations*.

Annotations can be used to specify an individual fact about an element,
such as whether it is read-only, or to define a common concept, such as
a person or a movie.

Applied *annotations* consist of a *term* (the namespace-qualified name
of the annotation being applied), a *target* (the model or instance
element to which the term is applied), and a *value*. The value may be a
static value, or an expression that may contain a path to one or more
properties of an annotated entity.

Annotation terms are defined in metadata and have a name and a type.

A set of related terms in a common namespace comprises a *Vocabulary*.

-------

# ##sec Service Model

OData services are defined using a common data model. The service
advertises its concrete data model in a machine-readable form, allowing
generic clients to interact with the service in a well-defined way.

An OData service exposes two well-defined resources that describe its
data model; a service document and a metadata document.

The [*service document*](#ServiceDocumentRequest) lists entity sets,
functions, and singletons that can be retrieved. Clients can use the
service document to navigate the model in a hypermedia-driven fashion.

The [*metadata document*](#MetadataDocumentRequest) describes the types,
sets, functions and actions understood by the OData service. Clients can
use the metadata document to understand how to query and interact with
entities in the service.

In addition to these two "fixed" resources, an OData service consists of
dynamic resources. The URLs for many of these resources can be computed
from the information in the metadata document.

See [Requesting Data](#RequestingData) and [Data Modification](#DataModification) for details.

## ##subsec Entity-Ids and Entity References

Whereas entities within an entity set are uniquely identified by their
key values, entities are also uniquely identified by a durable, opaque,
globally unique *entity-id*. The entity-id MUST be an IRI as defined in
[RFC3987](#rfc3987) and MAY be expressed in payloads, headers, and URLs
as a relative reference as appropriate. While the client MUST be
prepared to accept any IRI, services MUST use valid URIs in this version
of the specification since there is currently no lossless representation
of an IRI in the [`EntityId`](#HeaderODataEntityId) header.

Services are strongly encouraged to use the canonical URL for an entity
as defined in [#OData-URL#CanonicalURL] as its entity-id, but clients cannot assume
the entity-id can be used to locate the entity unless the
[Core.DereferenceableIDs]{.term}
term is applied to the entity container, nor can the client assume any
semantics from the structure of the entity-id. The canonical resource
`$entity` provides a general mechanism for
[resolving an entity-id](#ResolvinganEntityId) into an entity representation.

Services that use the standard URL conventions for entity-ids annotate
their entity container with the term
[Core.ConventionalIDs]{.term},
see [OData-VocCore](#ODataVocCore).

*Entity references* refer to an entity using the entity's entity-id.

## ##subsec Read URLs and Edit URLs

The read URL of an entity is the URL that can be used to read the
entity.

The edit URL of an entity is the URL that can be used to update or
delete the entity.

The edit URL of a property is the edit URL of the entity with appended
segment(s) containing the path to the property.

Services are strongly encouraged to use the canonical URL for an entity
as defined in [#OData-URL#CanonicalURL] for both the read URL and the edit URL of an
entity, with a cast segment to the type of the entity appended to the
canonical URL if the type of the entity is derived from the declared
type of the entity set. However, clients cannot assume this convention
and must use the links specified in the payload according to the
appropriate format as the two URLs may be different from one another, or
one or both of them may differ from convention.

## ##subsec Transient Entities

Transient entities are instances of an entity type that are
dynamically generated on request and only exist within a response payload.
They do not possess an update URL and consequently cannot be updated.
A transient entity may have a read URL, which generates a new transient entity using the same algorithm,
and they may have an entity id if a repeated occurrence in a response needs to be replaced with an entity reference.

## ##subsec Default Namespaces

References to actions, functions, and types within a URL typically
requires prefixing the name of the action, function, or type with the
namespace or alias in which it is defined. This namespace qualification
enables differentiating between similarly named elements across schema,
or between properties and bound functions, actions, or types with the
same name.

Services MAY define one or more default namespaces through the
[Core.DefaultNamespace]{.term} term
defined in [OData-VocCore](#ODataVocCore). Functions, actions and types
in a default namespace can be referenced in URLs with or without
namespace or alias qualification.

Service designers should ensure uniqueness of schema children across all
default namespaces, and should avoid naming bound functions, actions, or
derived types with the same name as a structural or navigation property
of the type.

In the case where ambiguity does exist, an unqualified segment appended
to a structured value is always first compared to the list of properties
defined on the structured type. If no defined property with a name
matching the unqualified segment exists, or the preceding segment
represents a collection or a scalar value, it is next compared to the
names of any bound functions or actions, or derived type names, defined
within any default namespace. If it still does not match, and the
preceding segment represents a structured value, it is interpreted as a
dynamic property.

Services MAY disallow dynamic properties on structured values whose
names conflict with a bound action, function, or derived type defined
within in a default namespace.

The behavior if name conflicts occur across children of default
namespaces is undefined. Generic clients are encouraged to always
qualify action, function, and type names in order to avoid any possible
ambiguity.

-------

# ##sec Versioning

Versioning enables clients and services to evolve independently. OData
defines semantics for both protocol and data model versioning.

## ##subsec Protocol Versioning

OData requests and responses are versioned according to the
[`OData-Version`](#HeaderODataVersion) header.

OData clients include the
[`OData-MaxVersion`](#HeaderODataMaxVersion) header in requests in
order to specify the maximum acceptable response version. Services
respond with the maximum supported version that is less than or equal to
the requested `OData-MaxVersion`, using decimal comparison. The syntax
of the [OData-Version]{.abnf} and [OData-MaxVersion]{.abnf} header fields is defined
in [OData-ABNF](#ODataABNF).

Services SHOULD advertise supported versions of OData through the
[Core.ODataVersions]{.term}
term, defined in [OData-VocCore](#ODataVocCore).

This version of the specification defines OData version values `4.0` and
`4.01`. Content that applies only to one version or another is
explicitly called out in the text.

## ##subsec Model Versioning

The [Data Model](#DataModel) exposed by an OData Service defines a
contract between the OData service and its clients. Services are allowed
to extend their model only to the degree that it does not break existing
clients. Breaking changes, such as removing properties, changing the
type of existing properties, adding or removing key properties, or
reordering action or function parameters, require that a new service
version is provided at a different service root URL for the new model,
or that the service version its metadata using the
[Core.SchemaVersion]{.term}
annotation, defined in [OData-VocCore](#ODataVocCore).

Services that version their metadata MUST support version-specific
requests according to the
[`$schemaversion`](#SystemQueryOptionschemaversion) system query option.
The following Data Model additions are considered safe and do not
require services to version their entry point or schema.
- Adding a property that is nullable or
has a default value; if it has the same name as an existing dynamic
property, it must have the same type (or base type) as the existing
dynamic property
- Adding a navigation property that is
nullable or collection-valued; if it has the same name as an existing
dynamic navigation property, it must have the same type (or base type)
as the existing dynamic navigation property
- Adding a new entity type to the model
- Adding a new complex type to the model
- Adding a new entity set
- Adding a new singleton
- Adding an action, a function, an action
import, or function import
- Adding an action parameter that is
nullable after existing parameters
- Adding an action or function parameter
that is annotated with
[Core.OptionalParameter]{.term}
after existing parameters
- Adding a type definition or enumeration
- Adding a new term
- Adding any annotation to a model element
that does not need to be understood by the client in order to correctly
interact with the service

Clients SHOULD be prepared for services to make such incremental changes
to their model. In particular, clients SHOULD be prepared to receive
properties and derived types not previously defined by the service.

Services SHOULD NOT change their data model depending on the
authenticated user. If the data model is user or user-group dependent,
all changes MUST be *safe changes* as defined in this section when
comparing the full model to the model visible to users with restricted
authorizations.

-------

# ##sec Extensibility

The OData protocol supports both user- and version-driven extensibility
through a combination of versioning, convention, and explicit extension
points.

## ##subsec Query Option Extensibility

Query options within the request URL can control how a particular
request is processed by the service.

OData-defined system query options are optionally prefixed with "`$`".
Services may support additional custom query options not defined in the
OData specification, but they MUST NOT begin with the "`$`" or "`@`"
character and MUST NOT conflict with any OData-defined system query
options defined in the OData version supported by the service.

OData services SHOULD NOT require any query options to be specified in a
request. Services SHOULD fail any request that contains query options
that they do not understand and MUST fail any request that contains
unsupported OData query options defined in the version of this
specification supported by the service.

In many cases OData services return URLs to identify resources that are
later requested by clients. Where possible, interoperability is enhanced
by providing all identifying information in the path portion of the URL.
However, clients should be prepared for such URLs to include custom
query options and propagate any such custom query options in future
requests to the identified resource.

## ##subsec Payload Extensibility

OData supports extensibility in the payload, according to the specific
format.

Regardless of the format, additional content MUST NOT be present if it
needs to be understood by the receiver in order to correctly interpret
the payload according to the specified
[`OData-Version`](#HeaderODataVersion) header. Thus, clients and services
MUST be prepared to handle or safely ignore any content not specifically
defined in the version of the payload specified by the
`OData-Version` header.

## ##subsec Action/Function Extensibility

[Actions](#Actions) and [Functions](#Functions) extend the set of
operations that can be performed on or with a service or resource.
Actions can have side-effects. For example,
Actions can be used to modify data or to invoke custom
operations. Functions MUST NOT have side-effects. Functions can be
invoked from a URL that addresses a resource or within an expression to
a [`$filter`](#SystemQueryOptionfilter) or
[`$orderby`](#SystemQueryOptionorderby) system query option.

Fully qualified action and function names include a namespace or alias
prefix. The `Edm`, `odata` and `geo` namespaces are reserved for the use
of this specification.

An OData service MUST fail any request that contains actions or
functions that it does not understand.

## ##subsec Vocabulary Extensibility

The set of [annotations](#Annotations) defined within a schema comprise
a *vocabulary*. Shared vocabularies provide a powerful extensibility
point for OData.

Metadata annotations can be used to define additional characteristics or
capabilities of a metadata element, such as a service, entity type,
property, function, action or parameter. For example, a metadata
annotation could define ranges of valid values for a particular
property.

Instance annotations can be used to define additional information
associated with a particular result, entity, property, or error; for
example whether a property is read-only for a particular instance.

Where annotations apply across all instances of a type, services are
encouraged to specify the annotation in metadata rather than repeating
in each instance of the payload. Where the same annotation is defined at
both the metadata and instance level, the instance-level annotation
overrides the one specified at the metadata level.

A service MUST NOT require the client to understand custom annotations
in order to accurately interpret a response.

OData defines a `Core` vocabulary with a set of basic terms describing
behavioral aspects along with terms that can be used in defining other
vocabularies; see [OData-VocCore](#ODataVocCore).

## ##subsec Header Field Extensibility

OData defines semantics around certain HTTP request and response
headers. Services that support a version of OData conform to the
processing requirements for the headers defined by this specification
for that version.

Individual services may define custom headers. These headers MUST NOT
begin with `OData`. Custom headers SHOULD be optional when making
requests to the service. A service MUST NOT require the client to
understand custom headers to accurately interpret the response.

## ##subsec Format Extensibility

An OData service MUST support [OData-JSON](#ODataJSON) and MAY support
additional formats for both request and response bodies.

-------

# ##sec Formats

The client MAY request a particular response format through the
[`Accept`](#HeaderAccept) header, as defined in
[RFC9110](#rfc9110), or through the system query option
[`$format`](#SystemQueryOptionformat).

In the case that both the `Accept` header and the `$format` system query
option are specified on a request, the value specified in the `$format`
query option MUST be used.

If the service does not support the requested format, it replies with a
[`406 Not Acceptable`](#ResponseCode406NotAcceptable) error response.

Services SHOULD advertise their supported formats in the metadata
document by annotating their entity container with the term
[Capabilities.SupportedFormats]{.term},
as defined in [OData-VocCap](#ODataVocCap), listing all available
formats and combinations of supported format parameters.

The media types for the JSON and XML representation of the metadata
document are described in [section ##MetadataDocumentRequest].

The format specification [OData-JSON](#ODataJSON) describes the media
type and the format parameters for non-metadata requests and responses.

For non-metadata requests, if neither the `Accept` header nor the
`$format` query option are specified, the service MAY respond to
requests in any format.

Client libraries MUST retain the order of objects within an array in
JSON responses, and elements in document order for XML responses,
including CSDL documents.
