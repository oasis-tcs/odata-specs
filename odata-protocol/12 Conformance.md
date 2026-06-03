
-------

# ##sec Conformance

OData is designed as a set of conventions that can be layered on top of
existing standards to provide common representations for common
functionality. Not all services will support all of the conventions
defined in the protocol; services choose those conventions defined in
OData as the representation to expose that functionality appropriate for
their scenarios.

To aid in client/server interoperability, this specification defines
multiple levels of conformance for an OData Service, as well as the
[minimal requirements](#InteroperableODataClients) for an OData Client
to be interoperable across OData services.

## ##subsec OData 4.0 Service Conformance Levels

OData 4.0 defines three levels of conformance for an OData Service.

Note: The conformance levels are design to correspond to different
service scenarios. For example, a service that publishes data compliant
with one or more of the OData defined formats may comply with the [OData
4.0 Minimal Conformance Level](#OData40MinimalConformanceLevel) without
supporting any additional functionality. A service that offers more
control over the data that the client retrieves may comply with the
[OData 4.0 Intermediate Conformance
Level](#OData40IntermediateConformanceLevel). Services that conform to
the [OData 4.0 Advanced Conformance Level](#OData40AdvancedConformanceLevel) can expect to interoperate with
the most functionality against the broadest range of generic clients.

Services can advertise their level of conformance by annotating their
entity container with the term
[Capabilities.ConformanceLevel]{.term}
defined in [OData-VocCap](#ODataVocCap).

Note: Services are encouraged to support as much additional
functionality beyond their level of conformance as is appropriate for
their intended scenario.

### ##subsubsec OData 4.0 Minimal Conformance Level

In order to conform to the OData 4.0 Minimal conformance level, a
service:

1. MUST publish a service document at the
service root ([section ##ServiceDocumentRequest])
2. MUST return data according to the [OData-JSON](#ODataJSON) format
3. MUST use server-driven paging when returning
partial results ([section ##ServerDrivenPaging]) and not use any other mechanism
4. MUST return the appropriate `OData-Version`
header ([section ##HeaderODataVersion])
5. MUST conform to the semantics the following headers, or fail the
request
   1. `Accept` ([section ##HeaderAccept])
   2. `OData-MaxVersion` ([section ##HeaderODataMaxVersion])
6. MUST follow OData guidelines for extensibility
([section ##Extensibility] and all subsections)
7. MUST successfully parse the request according to
[OData-ABNF](#ODataABNF) for any supported system query options and
follow the specification or fail the request
8. MUST expose only data types defined in [OData-CSDLXML](#ODataCSDLXML)
9. MUST NOT require clients to understand any metadata or instance
annotations ([section ##VocabularyExtensibility]), custom headers ([section ##HeaderFieldExtensibility]), or custom
content ([section ##PayloadExtensibility]) in the payload in order to correctly consume the
service
10. MUST NOT violate any OData update semantics
([section ##DataModification]  and all subsections)
11. MUST NOT violate any other OData-defined semantics
12. SHOULD support `$expand` ([section ##SystemQueryOptionexpand])
13. SHOULD publish metadata at `$metadata` according to
[OData-CSDLXML](#ODataCSDLXML) and MAY publish metadata according to
[OData-CSDLJSON](#ODataCSDL) ([section ##MetadataDocumentRequest])
14. MUST support prefixed variants of supported headers and preference
values
15. MUST support enumeration and duration literals in URLs with the
type prefix

Additionally, if async operations are supported:

16. MUST return an HTTP message as the final response to an
asynchronous request with an `OData-MaxVersion` value of `4.0` and an
`Accept` header including `application/http`.
17. MAY return the [`AsyncResult`](#HeaderAsyncResult) header in the
final response to an asynchronous request

To be considered an *Updatable OData Service*, the service additionally:

18. MUST include edit links (explicitly or implicitly) for all
updatable or deletable resources according to [#OData-JSON#ControlInformationeditLinkandreadLinkodataeditLinkandodatareadLink]
19. MUST support `POST` of new entities to insertable entity sets
([section ##ReturningResultsfromDataModificationRequests])
20. MUST support `POST` of new related entities to updatable navigation
properties ([section ##CreateanEntity])
21. MUST support `POST` to `$ref` to add an existing entity to an
updatable related collection ([section ##AddaReferencetoaCollectionValuedNavigationProperty])
22. MUST support `PUT` to `$ref` to set an existing single updatable
related entity ([section ##ChangetheReferenceinaSingleValuedNavigationProperty])
23. MUST support `PATCH` to all edit URLs for updatable resources
([section ##UpdateanEntity])
24. MUST support `DELETE` to all edit URLs for deletable resources
([section ##DeleteanEntity])
25. MUST support `DELETE` to `$ref` to remove a reference to an entity
from an updatable navigation property ([section ##RemoveaReferencetoanEntity])
26. MUST support `If-Match` header in update/delete of any resources
returned with an ETag ([section ##UseofETagsforAvoidingUpdateConflicts])
27. MUST return a `Location` header with the edit URL or read URL of a
created resource ([section ##CreateanEntity])
28. MUST include the `OData-EntityId` header in response to any create
or upsert operation that returns `204 No Content` ([section ##HeaderODataEntityId])
29. MUST support Upserts ([section ##UpsertanEntity])
30. SHOULD support `PUT` and `PATCH` to an individual primitive
([section ##UpdateaPrimitiveProperty]) or complex ([section ##UpdateaComplexProperty]) property (respectively)
31. SHOULD support `DELETE` to set an individual property to null
([section ##SetaValuetoNull])
32. SHOULD support deep inserts ([section ##CreateRelatedEntitiesWhenCreatinganEntity])
33. MAY support set-based updates ([section ##UpdateMembersofaCollection]) or deletes
([section ##DeleteMembersofaCollection]) to members of a collection

### ##subsubsec OData 4.0 Intermediate Conformance Level

In order to conform to the OData Intermediate Conformance Level, a
service:

1. MUST conform to the [OData 4.0 Minimal Conformance
Level](#OData40MinimalConformanceLevel)
2. MUST successfully parse the request according to [OData-ABNF](#ODataABNF) and
follow the specification or fail the request
3. MUST support `$select` ([section ##SystemQueryOptionselect])
4. MUST support casting to a derived type according to
[#OData-URL#AddressingDerivedTypes] if derived types are present in the model
5. MUST support `$top` ([section ##SystemQueryOptiontop])
6. MUST support `/$value` on media entities ([section ##MetadataDocumentRequest]) and individual properties ([section ##RequestingaRawValueusingvalue])
7. MUST support `$filter` ([section ##SystemQueryOptionfilter])
   1. MUST support `eq`, `ne` filter operations on properties of entities
in the requested entity set ([section ##BuiltinFilterOperations])
   2. MUST support aliases in `$filter` expressions ([section ##ParameterAliases])
   3. SHOULD support additional filter operations ([section ##BuiltinFilterOperations])
and MUST fail the request for any unsupported filter
operations
   4. SHOULD support the canonical functions ([section ##BuiltinQueryFunctions]) and
MUST fail the request for any unsupported canonical functions
   5. SHOULD support `$filter` on expanded entities ([section ##ExpandOptions])
8. SHOULD publish metadata at `$metadata` according to
[OData-CSDLXML](#ODataCSDLXML) ([section ##MetadataDocumentRequest])
9. SHOULD support the [OData-JSON](#ODataJSON) format
10. SHOULD consider supporting basic authentication as defined in
[RFC7617](#rfc7617) over HTTPS for the highest level of interoperability
with generic clients
11. SHOULD support the `$search` system query option ([section ##SystemQueryOptionsearch])
12. SHOULD support the `$skip` system query option ([section ##SystemQueryOptionskip])
13. SHOULD support the `$count` system query option ([section ##SystemQueryOptioncount])
14. SHOULD support `$expand` ([section ##SystemQueryOptionexpand])
15. SHOULD support the lambda operators `any` and `all` on navigation-
and collection-valued properties ([#OData-URL#LambdaOperators])
16. SHOULD support the `/$count` segment on navigation and collection
properties ([section ##RequestingtheNumberofItemsinaCollection])
17. SHOULD support `$orderby asc` and `desc` on individual properties
([section ##SystemQueryOptionorderby])

### ##subsubsec OData 4.0 Advanced Conformance Level

In order to conform to the OData Advanced Conformance Level, a service:

1. MUST conform to at least the [OData 4.0 Intermediate Conformance
Level](#OData40IntermediateConformanceLevel)
2. MUST publish metadata at `$metadata` according to
[OData-CSDLXML](#ODataCSDLXML) ([section ##MetadataDocumentRequest])
3. MUST support the [OData-JSON](#ODataJSON) format
4. MUST support the `/$count` segment on navigation and collection
properties ([section ##RequestingtheNumberofItemsinaCollection])
5. MUST support the lambda operators `any` and `all` on navigation- and
and collection-valued properties ([#OData-URL#LambdaOperators])
6. MUST support the `$skip` system query option ([section ##SystemQueryOptionskip])
7. MUST support the `$count` system query option ([section ##SystemQueryOptioncount])
8. MUST support `$orderby` with `asc` and `desc` on individual properties
([section ##SystemQueryOptionorderby])
9. MUST support `$expand` ([section ##SystemQueryOptionexpand])
   1. MUST support returning references for expanded properties
   2. MUST support `$filter` on expanded collection-valued properties
   3. MUST support cast segment in expand with derived types
   4. SHOULD support `$orderby` with `asc` and `desc` on expanded
collection-valued properties
   5. SHOULD support `$count` on expanded collection-valued properties
   6. SHOULD support `$top` and `$skip` on expanded collection-valued
properties
   7. SHOULD support `$search` on expanded collection-valued properties
   8. SHOULD support `$levels` for recursive expand ([section ##ExpandOptionlevels])
   9. MAY support `$compute` on expanded properties
10. MUST support the `$search` system query option ([section ##SystemQueryOptionsearch])
11. MUST support batch requests according to the multipart format
([section ##BatchRequests] and all subsections) and MAY support batch requests
according to the JSON Batch format defined in [#OData-JSON#BatchRequestsandResponses]
12. MUST support the resource path conventions defined in
[#OData-URL#ResourcePath]
13. SHOULD support asynchronous requests
([section ##AsynchronousRequests])
14. SHOULD support Delta change tracking ([section ##RequestingChanges])
15. SHOULD support cross-join queries defined in [#OData-URL#AddressingtheCrossJoinofEntitySets]
16. MAY support the `$compute` system query option ([section ##SystemQueryOptioncompute])

## ##subsec OData 4.01 Service Conformance Levels

OData services can report conformance to the OData 4.01 specification by
including `4.01` in the list of supported protocol versions in the
[Core.ODataVersions]{.term}
annotation, as defined in [OData-VocCore](#ODataVocCore). As all OData
4.01 compliant services must also be fully OData 4.0 compliant, OData
4.01 services do not need to separately list `4.0` as a supported
version.

### ##subsubsec OData 4.01 Minimal Conformance Level

In order to conform to the OData 4.01 Minimal Conformance Level, a
service:

1. MUST conform to the [OData 4.0 Minimal Conformance
Level](#OData40MinimalConformanceLevel)
2. MUST be compliant with version 4.01 of the [OData-JSON](#ODataJSON)
format
3. MUST return the [`AsyncResult`](#HeaderAsyncResult) result header in
the final response to an asynchronous request if asynchronous operations
are supported.
4. MUST support both prefixed and non-prefixed variants of supported
headers and preference values
5. MUST reject a request with an incompatible
[`$schemaversion`](#SystemQueryOptionschemaversion) system query option
if a
[Core.SchemaVersion]{.term}
annotation is returned in `$metadata`
6. MUST support specifying supported system query options with or
without the `$` prefix
7. MUST support case-insensitive query option, operator, and canonical
function names
8. MUST return identifiers in the case they are specified in
`$metadata`
9. MUST support both 4.0 and 4.01 syntax in URLs for supported
functionality regardless of requested
[`OData-MaxVersion`](#HeaderODataMaxVersion)
   1. MUST support casting strings to primitive types in URLs
   2. MUST support enumeration and duration literals in URLs with or
without the type prefix
   3. MUST support invoking parameter-less function imports with or
without parentheses
   4. MUST support an empty object or no-content for the request body when
invoking an action with no non-binding parameters
   5. MUST support invoking functions and actions in a [default
namespace](#DefaultNamespaces) with or without namespace qualification
   6. MUST support parameter aliases for key values and function parameter
values if they allow the octets `00` (NUL), `2F` (forward slash), or
`5C` (backslash) in string literals
   7. SHOULD support implicit aliasing of parameters
   8. SHOULD support `eq/ne null` comparison for navigation properties
with a maximum cardinality of one
   9. SHOULD support the [`in`](#BuiltinFilterOperations) operator
   10. SHOULD support `divby`
   11. SHOULD support negative indexes for the substring function
   12. MAY support Key-As-Segment URL convention
       1. MUST also support canonical URL conventions (described in
[#OData-URL#CanonicalURL]) or include URLs in payload
   13. MAY support the count of a filtered collection in a common
expression
   14. MAY support equal and non-equal structural comparison
10. SHOULD publish metadata at `$metadata` according to both
[OData-CSDLXML](#ODataCSDLXML) and [OData-CSDLJSON](#ODataCSDL) ([section ##MetadataDocumentRequest])
11. SHOULD NOT have identifiers within a uniqueness scope (e.g. a
schema, a structural type, or an entity container) that differ only by
case
12. SHOULD return the
[Core.ODataVersions]{.term}
annotation
13. SHOULD report capabilities through the Capabilities vocabulary
14. MAY support filtering on annotation values
15. MAY support `$compute` system query option
16. MAY support `$search` for all collections
17. MAY support 4.01 behavior, including returning 4.01 content and
payloads, if the client does not specify the `OData-MaxVersion:4.0`
request header

In addition, to be considered an *Updatable OData 4.01 Service*, the
service:

18. MUST conform to the [OData 4.0 Minimal Conformance
Level](#OData40MinimalConformanceLevel) for an Updateable service.
19. MUST support `DELETE` to the reference of a collection member to be
removed, identified by key ([section ##RemoveaReferencetoanEntity])
20. SHOULD support `PUT` against single entity with nested content
21. SHOULD support deep updates ([section ##UpdateRelatedEntitiesWhenUpdatinganEntity]) and deep inserts
([section ##CreateRelatedEntitiesWhenCreatinganEntity])
22. SHOULD support `PUT` or `DELETE` to `$ref` of a collection-valued
nav prop
23. MAY support `POST` to collections of complex/primitive types
24. MAY support `PATCH` and `DELETE` to a collection
25. MAY support `POST`, `PATCH` and `DELETE` to a collection URL
terminating in a type cast segment
26. MAY support `PATCH` to entity sets using the 4.01 delta payload
format
27. MAY support `$select` and `$expand` on data modification requests

### ##subsubsec OData 4.01 Intermediate Conformance Level

In order to conform to the OData 4.01 Intermediate Conformance Level, a
service:

1. MUST conform to the [OData 4.01 Minimal Conformance
Level](#OData401MinimalConformanceLevel)
2. MUST conform to the [OData 4.0 Intermediate Conformance
Level](#OData40IntermediateConformanceLevel)
3. MUST support `eq/ne null` comparison for navigation properties with
a maximum cardinality of one
4. MUST support the [`in`](#BuiltinFilterOperations) operator
5. MUST support the `$select` option nested within `$select`
6. SHOULD support the count of a filtered collection in a common
expression
7. SHOULD support equal and non-equal structural comparison
8. SHOULD support `$compute` system query option
9. SHOULD support nested query options in `$select`
10. MAY support nested parameter alias assignments in
`$select` and `$expand`
11. MAY support filtering a collection using a `/$filter` path segment

### ##subsubsec OData 4.01 Advanced Conformance Level

In order to conform to the OData 4.01 Advanced Conformance Level, a
service:

1. MUST conform to the [OData 4.01 Intermediate Conformance
Level](#OData401IntermediateConformanceLevel)
2. MUST conform to the [OData 4.0 Advanced Conformance
Level](#OData40AdvancedConformanceLevel)
3. MUST support the count of a filtered/searched collection in a common
expression
4. MUST support `$compute` system query option
5. MUST support nested options in `$select`
   1. MUST support `$filter` on selected collection-valued properties
   2. SHOULD support `$orderby` with `asc` and `desc` on selected
collection-valued properties
   3. SHOULD support the `$count` on selected collection-valued
properties
   4. SHOULD support `$top` and `$skip` on selected collection-valued
properties
   5. SHOULD support `$search` on selected collection-valued properties
6. MUST publish metadata at `$metadata` according to
[OData-CSDLJSON](#ODataCSDL) ([section ##MetadataDocumentRequest])
7. MUST support batch requests according both to the multipart format
([section ##BatchRequests] and all subsections) and the JSON Batch format defined in
[#OData-JSON#BatchRequestsandResponses]
8. SHOULD support filtering a collection using a `/$filter` path
segment
9. SHOULD support nested parameter alias assignments in
`$select` and `$expand`
10. MAY support case-insensitive comparison of identifiers in URLs and
request payloads if no exact match is found, using the same lookup
sequence as for [default namespaces](#DefaultNamespaces) with a
case-insensitive comparison

## ##subsec Interoperable OData Clients

Interoperable OData clients can expect to work with OData Services that
comply with at least the [OData 4.0 Minimal Conformance
Level](#OData40MinimalConformanceLevel) and implement the
[OData-JSON](#ODataJSON) format.

To be generally interoperable, OData clients

1. MUST specify the `OData-MaxVersion` header in requests ([section ##HeaderODataMaxVersion])
2. MUST specify `OData-Version` ([section ##HeaderODataVersion]) and `Content-Type`
([section ##HeaderContentType]) in any request with a payload
3. MUST be a conforming consumer of OData as defined in
[#OData-JSON#Conformance]
4. MUST follow redirects ([section ##ResponseCode3xxRedirection])
5. MUST correctly handle next links ([section ##ServerDrivenPaging])
6. MUST support instances returning properties and navigation
properties not specified in metadata ([section ##RequestingData])
7. MUST generate `PATCH` requests for updates, if the client supports
updates ([section ##UpdateanEntity])
8. MUST include the `$` prefix when specifying OData-defined system
query options
9. MUST use case-sensitive query options, operators, and canonical
functions
10. MUST encode the plus character (octet `0x2B`) as `%2B` in URLs to avoid servers mis-interpreting the plus character as an encoded space
11. SHOULD support basic authentication as defined in
[RFC7617](#rfc7617) over HTTPS
12. MAY request entity references in place of entities previously
returned in the response ([section ##RequestingEntityReferences])
13. MAY support deleted entities, link entities, deleted link entities
in a delta response ([section ##RequestingChanges])
14. MAY support asynchronous responses ([section ##AsynchronousRequests])
15. MAY support `metadata=minimal` in a JSON response (see
[#OData-JSON#metadataminimalodatametadataminimal])
16. MAY support `streaming` in a JSON response (see
[#OData-JSON#PayloadOrderingConstraints])

In addition, interoperable OData 4.01 clients

17. MUST send OData 4.0-compliant payloads to services that don't
advertise support for 4.01 or greater through the
[Core.ODataVersions]{.term}
metadata annotation (see [OData-VocCore](#ODataVocCore))
18. MUST specify identifiers in payloads and URLs in the case they are
specified in `$metadata`
19. MUST be prepared to receive any valid 4.01 CSDL
20. MUST be prepared to receive any valid 4.01 response according to
the requested format
21. SHOULD use capabilities (see [OData-VocCap](#ODataVocCap)) to
determine if a 4.01 feature is supported but MAY attempt syntax and be
prepared to handle `400 Bad Request` or [`501 Not Implemented`](#ResponseCode501NotImplemented)
