
-------

# ##sec Common Characteristics

This section describes common characteristics of the representation for
OData values in JSON. A request or response body consists of several
parts. It contains OData values as part of a larger document. Requests
and responses are structured almost identical; the few existing
differences will be explicitly called out in the respective subsections.

## ##subsec Header Content-Type

Requests and responses with a JSON message body MUST have a
`Content-Type` header value of `application/json`.

Requests MAY add the `charset` parameter to the content type.
Allowed values are `UTF-8`, `UTF-16`, and
`UTF-32`. If no `charset` parameter is present,
`UTF-8` MUST be assumed.

Responses MUST include the
[`metadata`](#ControllingtheAmountofControlInformationinResponses)
parameter to specify the amount of metadata included in the response.

Requests and responses MUST include the
[`IEEE754Compatible`](#ControllingtheRepresentationofNumbers)
parameter if `Edm.Int64` and `Edm.Decimal` numbers
are represented as strings.

Requests and responses MAY add the `streaming` parameter with
a value of `true` or `false`, see section
"[Payload Ordering Constraints](#PayloadOrderingConstraints)".

## ##subsec Message Body

Each message body is represented as a single JSON object. This object is
either the representation of an [entity](#Entity),
an [entity reference](#EntityReference) or a
[complex type instance](#ComplexValue), or it contains a name/value
pair whose name MUST be `value` and whose value is the correct
representation for a [primitive value](#PrimitiveValue), a
[collection of primitive values](#CollectionofPrimitiveValues), a
[collection of complex values](#CollectionofComplexValues), a
[collection of entities](#CollectionofEntities), or a collection of
objects that represent [changes to a previous
result](#DeltaPayload).

Client libraries MUST retain the
order of objects within an array in JSON responses.

## ##subsec Relative URLs

URLs present in a payload (whether request or response) MAY be
represented as relative URLs.

Relative URLs, other than those in
[`type`](#ControlInformationtypeodatatype),
are relative to their base URL, which is

- the [context URL](#ControlInformationcontextodatacontext) of the same
  JSON object, if one exists, otherwise
- the context URL of the enclosing object, if one exists, otherwise
- the context URL of the next enclosing object, if one exists, etc. until the
  document root, otherwise
- the request URL.

For context URLs, these rules apply starting with the second bullet
point.

Within the
[`type`](#ControlInformationtypeodatatype)
control information, relative URLs are relative to the base type URL,
which is

- the `type` of the enclosing object, if one exists, otherwise
- the `type` of the next enclosing object, if one exists, etc.
  until the document root, otherwise
- the context URL of the document root, if one exists, otherwise
- the request URL.

Processors expanding the URLs MUST use normal URL expansion rules as
defined in [RFC3986](#rfc3986). This means that if the base URL is a
context URL, the part starting with `$metadata#` is ignored
when resolving the relative URL.

Clients that receive relative URLs in response payloads SHOULD use the
same relative URLs, where appropriate, in request payloads (such as
[bind operations](#BindOperation) and batch requests) and in system
query options (such as `$id`).

URLs represented as a string within a JSON payload, including [batch
requests](#BatchRequest), must follow standard OData encoding rules.
For relative URLs this means that colons in the path part, especially
within key values, MUST be percent-encoded to avoid confusion with the
scheme separator. Colons within the query part, i.e. after the question
mark character (`?`), need not be percent-encoded.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  …
  "@editLink": "Customers('ALFKI')",
  …
  "Orders@navigationLink": "Customers('ALFKI')/Orders",
  …
}
```
:::

The resulting absolute URLs are
`http://host/service/Customers('ALFKI')` and
`http://host/service/Customers('ALFKI')/Orders`.

## ##subsec Payload Ordering Constraints

Ordering constraints MAY be imposed on the JSON payload in order to
support streaming scenarios. These ordering constraints MUST only be
assumed if explicitly specified as some clients (and services) might not
be able to control, or might not care about, the order of the JSON
properties in the payload.

Clients can request that a JSON response conform to these ordering
constraints by specifying a media type of
`application/json` with the `streaming=true` parameter in the
`Accept` header or `$format` query option. Services
MUST return `406 Not Acceptable` if
the client only requests streaming and the service does not support it.

Clients may specify the `streaming=true` parameter in the
`Content-Type` header of requests
to indicate that the request body follows the payload ordering
constraints. In the absence of this parameter, the service must assume
that the JSON properties in the request are unordered.

Processors MUST only assume streaming support if it is explicitly
indicated in the `Content-Type` header via the
`streaming=true` parameter.

::: example
Example ##ex: a payload with
```
Content-Type: application/json;metadata=minimal;streaming=true
```
can be assumed to support streaming, whereas a payload with
```
Content-Type: application/json;metadata=minimal
```
cannot be assumed to support streaming.
:::

JSON producers are encouraged to follow the payload ordering constraints
whenever possible (and include the `streaming=true`
media type parameter) to support the maximum set of client scenarios.

To support streaming scenarios the following payload ordering
constraints have to be met:

- If present, the `context` control information MUST be the first
  property in the JSON object.
- The
  `type` control information, if present, MUST appear next in
  the JSON object.
- The `id` and `etag` control information MUST appear
  before any property, property annotation, or property control
  information.
- All annotations or control information for a structural or navigation
  property MUST appear as a group immediately before the property itself.
  The one exception is the
  [`nextLink`](#ControlInformationnextLinkodatanextLink)
  of a collection which MAY appear after the collection it annotates.
- All other control information can
  appear anywhere in the payload as long as it does not violate any of the
  above rules.
- For 4.0 payloads, annotations and control information for navigation
  properties MUST appear after all structural properties. 4.01 clients
  MUST NOT assume this ordering.

Note that in OData 4.0 the `streaming` format parameter was prefixed with
`odata.`. Payloads with an `OData-Version` header equal to
`4.0` MUST include the `odata.` prefix. Payloads with an
`OData-Version` header equal to `4.01` or greater SHOULD NOT
include the `odata.` prefix.

## ##subsec Control Information

In addition to the "pure data" a message body MAY contain
[annotations](#InstanceAnnotations) and control information that is
represented as name/value pairs whose names start with `@`.

In requests and responses with an `OData-Version` header with a value of `4.0` control
information names are prefixed with `@odata.`, e.g.
`@odata.context`. In requests and responses without such a
header the `odata.` prefix SHOULD
be omitted, e.g. `@context`.

In some cases, control information is required in request payloads; this
is called out in the following subsections.

Receivers that encounter unknown
annotations in any namespace or unknown control information MUST NOT
stop processing and MUST NOT signal an error.

### ##subsubsec Control Information: `context` (`odata.context`)

The `context` control information
returns the context URL (see [OData-Protocol](#ODataProtocol)) for the
payload. This URL can be absolute or [relative](#RelativeURLs).
The fragment portion of the context URL MUST NOT be percent-encoded.

The `context` control information is not returned if
[`metadata=none`](#metadatanoneodatametadatanone) is requested. Otherwise it MUST be the
first property of any JSON response that allows this control information (this excludes for example [error responses](#ErrorResponse)).

The `context` control information
MUST also be included in requests and responses for entities whose
entity set cannot be determined from the context URL of
the collection.

For more information on the format of the context URL, see
[OData-Protocol](#ODataProtocol).

Request payloads MAY include a context URL as a base URL for [relative
URLs](#RelativeURLs) in the request payload.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  "@metadataEtag": "W/\"A1FF3E230954908F\"",
  …
}
```
:::

### ##subsubsec Control Information: `metadataEtag` (`odata.metadataEtag`)

The `metadataEtag` control information MAY appear in a
response in order to specify the entity tag (ETag) that can be used to
determine the version of the metadata of the response. If an ETag is
returned when requesting the metadata document, then the service SHOULD
set the `metadataEtag` control information to the metadata
document\'s ETag in all responses when using
[`metadata=minimal`](#metadataminimalodatametadataminimal)
or
[`metadata=full`](#metadatafullodatametadatafull).
If no ETag is returned when requesting the metadata document, then the
service SHOULD NOT set the `metadataEtag` control information
in any responses.

For details on how ETags are used, see [OData-Protocol](#ODataProtocol).

### ##subsubsec Control Information: `type` (`odata.type`)

The `type` control information specifies the type of a JSON
object or name/value pair. Its value is a URI that identifies the type
of the property or object. For built-in primitive types the value is the
unqualified name of the primitive type. For payloads described by an
`OData-Version` header with a value
of `4.0`, this name MUST be prefixed with the hash symbol
(`#`); for non-OData 4.0 payloads,
built-in primitive type values SHOULD be represented without the hash
symbol, but consumers of 4.01 or greater payloads MUST support values
with or without the hash symbol. For all other types, the URI may be
absolute or relative to the `type` of the containing object.
The root `type` may be absolute or relative to the root
[context URL](#ControlInformationcontextodatacontext).

If the URI references a metadata document (that is, it's not just a
fragment), it MAY refer to a specific version of that metadata document
using the `$schemaversion` system query option
defined in [OData-Protocol](#ODataProtocol).

For non-built in primitive types, the URI contains the
namespace-qualified or alias-qualified type, specified as a URI
fragment. For properties that represent a collection of values, the
fragment is the namespace-qualified or alias-qualified element type
enclosed in parentheses and prefixed with `Collection`. The
namespace or alias MUST be defined or the namespace referenced in the
metadata document of the service, see
[OData-CSDLJSON](#ODataCSDL) or
[OData-CSDLXML](#ODataCSDL).

The `type` control information MUST appear in requests and in
responses with [minimal](#metadataminimalodatametadataminimal) or
[full](#metadatafullodatametadatafull) metadata, if the type cannot
be heuristically determined, as described below, and one of the
following is true:

- The type is derived from the type specified for the (collection of) entities
  or (collection of) complex type instances, or
- The type is for a property whose type is not declared in
  `$metadata`.

It MAY appear in other cases in requests and responses if its value does not contradict the type declared in `$metadata`.

The following heuristics are used to determine the primitive type of a
dynamic property in the absence of the `type` control
information:

- Boolean values have a first-class representation in JSON and do not need any
  additional control information.
- Numeric values have a first-class representation in JSON but are not further
  distinguished, so they include a
  [`type`](#ControlInformationtypeodatatype)
  control information unless their type is `Double`.
- The special floating-point values `-INF`, `INF`, and
  `NaN` are serialized as strings and MUST have a
  [`type`](#ControlInformationtypeodatatype)
  control information to specify the numeric type of the property.
- String  values do have a first class representation in JSON, but there is an
  obvious collision: OData also encodes a number of other primitive types
  as strings, e.g. `DateTimeOffset`, `Int64` in the
  presence of the
  [`IEEE754Compatible`](#ControllingtheRepresentationofNumbers)
  format parameter etc. If a property appears in JSON string format, it
  should be treated as a string value unless the property is known (from
  the metadata document) to have a different type.

The `type` control information can be absent in properties nested in an instance of type `Edm.Untyped`.
In particular, individual primitive values within a collection cannot have `type` control information.

For more information on namespace- and alias-qualified names, see
[OData-CSDLJSON](#ODataCSDL) or
[OData-CSDLXML](#ODataCSDL).

::: example
Example ##ex: entity of type
`Model.VipCustomer` defined in the
metadata document of the same service with a dynamic property of type
`Edm.Date`
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  "@type": "#Model.VipCustomer",
  "ID": 2,
  "DynamicValue@type": "Date",
  "DynamicValue": "2016-09-22",
  …
}
```
:::

::: example
Example ##ex: entity of type `Model.VipCustomer` defined in the
metadata  document of a different service
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity",
  "@type": "http://host/alternate/$metadata#Model.VipCustomer",
  "ID": 2,
  …
}
```
:::

### ##subsubsec Control Information: `count` (`odata.count`)

The `count` control information occurs only in responses and
can annotate any collection, see [OData-Protocol](#ODataProtocol)
section 11.2.5.5 System Query Option
`$count`. Its value is an
`Edm.Int64` value corresponding to
the total count of members in the collection represented by the request.

### ##subsubsec Control Information: `nextLink` (`odata.nextLink`)

The `nextLink` control information indicates that a response
is only a subset of the requested collection. It contains a URL that
allows retrieving the next subset of the requested collection.

This control information can also be applied to [expanded to-many
navigation properties](#ExpandedNavigationProperty).

### ##subsubsec Control Information: `delta` (`odata.delta`)

The `delta` control information is applied to a
collection-valued navigation property within an [added/changed
entity](#AddedChangedEntity) in a delta payload to represent changes
in membership or value of nested entities.

### ##subsubsec Control Information: `deltaLink` (`odata.deltaLink`)

The `deltaLink` control information contains a URL that can
be used to retrieve changes to the current set of results. The
`deltaLink` control information MUST only appear on the last
page of results. A page of results MUST NOT have both a
`deltaLink` control information and a
[`nextLink`](#ControlInformationnextLinkodatanextLink)
control information.

### ##subsubsec Control Information: `id` (`odata.id`)

The `id` control information contains the entity-id, see
[OData-Protocol](#ODataProtocol). By convention the entity-id is
identical to the canonical URL of the entity, as defined in
[OData-URL](#ODataURL).

The `id` control information MUST appear in responses if
[`metadata=full`](#metadatafullodatametadatafull)
is requested, or if
[`metadata=minimal`](#metadataminimalodatametadataminimal)
is requested and any of a non-transient entity's key fields are omitted
from the response _or_ the entity-id is not identical to the canonical
URL of the entity after

- IRI-to-URI conversion as defined in [RFC3987](#rfc3987),
- relative resolution as defined in section 5.2 of [RFC3986](#rfc3986), and
- percent-encoding normalization as defined in section 6 of [RFC3986](#rfc3986).

Note that the entity-id MUST be invariant across languages, so if key
values are language dependent then the `id` MUST be included
if it does not match convention for the localized key values. If the
`id` is represented, it MAY be a [relative
URL](#RelativeURLs).

If the entity is transient (see [OData-Protocol](#ODataProtocol)), the
`id` control information MUST appear in OData 4.0 payloads
and have the `null` value. In 4.01 payloads transient
entities need not have the `id` control information, and 4.01
clients MUST treat entities with neither `id` control
information nor a full set of key properties as transient entities.
In 4.02 payloads the `id` control information for transient entities
MAY have a string value following the pattern
`odata:transient:{some-generated-identifier-unique-within-the-response}`,
for example if services need to represent circular dependencies
between transient entities using [entity references](#EntityReference).

The `id` control information MUST NOT appear for a
collection. Its meaning in this context is reserved for future versions
of this specification.

### ##subsubsec Control Information: `editLink` and `readLink` (`odata.editLink` and `odata.readLink`)

The `editLink` control information contains
the edit URL of the entity; see [OData-Protocol](#ODataProtocol).

The `readLink` control information contains the read URL of
the entity or collection; see [OData-Protocol](#ODataProtocol).

The `editLink` and `readLink` control information
is ignored in request payloads and not written in responses if
[`metadata=none`](#metadatanoneodatametadatanone)
is requested.

The default value of both the edit URL and read URL is the entity\'s
[entity-id](#ControlInformationidodataid) appended with a cast
segment to the type of the entity if its type is derived from the
declared type of the entity set. If neither the `editLink`
nor the `readLink` control information is present in an
entity, the client uses this default value for the edit URL.

For updatable entities:

- The `editLink` control information is written if
  [`metadata=full`](#metadatafullodatametadatafull) is requested or
  if
  [`metadata=minimal`](#metadataminimalodatametadataminimal)
  is requested and the edit URL differs from the default value of the edit
  URL.
- The `readLink` control information is written if the read URL is
  different from the edit URL. If no `readLink` control
  information is present, the read URL is identical to the edit URL.

For read-only entities:

- The `readLink` control information is written if
  [`metadata=full`](#metadatafullodatametadatafull) is requested or
  if
  [`metadata=minimal`](#metadataminimalodatametadataminimal)
  is requested and its value differs from the default value of the read
  URL.
- The `readLink` control information may also be written if
  [`metadata=minimal`](#metadataminimalodatametadataminimal)
  is specified in order to signal that an individual entity is read-only.

For collections:

- The `readLink` control information, if written, MUST be the
  request URL that produced the collection.
- The `editLink` control information MUST NOT be written as its
  meaning in this context is reserved for future versions of this
  specification.

### ##subsubsec Control Information: `etag` (`odata.etag`)

The `etag` control information MAY be applied to an
[entity](#Entity) or collection in a response. The
value of the control information is an entity tag (ETag) which is an
opaque string value that can be used in a subsequent request to
determine if the value of the entity or collection has changed.

For details on how ETags are used, see [OData-Protocol](#ODataProtocol).

The `etag` control information is ignored in request payloads for
single entities and not written in responses if
[`metadata=none`](#metadatanoneodatametadatanone) is requested.

### ##subsubsec Control Information: `navigationLink` and `associationLink` (`odata.navigationLink` and `odata.associationLink`)

The `navigationLink` control information in a
response contains a _navigation URL_ that can be used to retrieve an
entity or collection of entities related to the current entity via a
[navigation property](#NavigationProperty).

The _default computed value of a navigation URL_ is the value of the
[read URL](#ControlInformationeditLinkandreadLinkodataeditLinkandodatareadLink) appended with a
segment containing the name of the navigation property. The service MAY
omit the `navigationLink` control information if
[`metadata=minimal`](#metadataminimalodatametadataminimal)
has been specified on the request and the navigation link matches this
computed value.

The `associationLink` control information in a response contains an _association URL_ that can
be used to retrieve a reference to an entity or a collection of
references to entities related to the current entity via a navigation
property.

The _default computed value of an association URL_ is the value of the
navigation URL appended with `/$ref`. The service MAY omit
the `associationLink` control information if the association
link matches this computed value.

The `navigationLink` and `associationLink` control
information is ignored in request payloads and not written in responses
if [`metadata=none`](#metadatanoneodatametadatanone) is requested.

### ##subsubsec Control Information: `media*` (`odata.media*`)

For [media entities](#MediaEntity) and [stream
properties](#StreamProperty) at least one of the control information
`mediaEditLink` and `mediaReadLink` MUST be included
in responses if they don\'t follow standard URL conventions as defined
in [OData-URL](#ODataURL), sections 4.6 Addressing a property and 4.14 Addressing the Media Stream of a Media Entity, or if
[`metadata=full`](#metadatafullodatametadatafull)
is requested.

The `mediaEditLink` control information contains a URL that
can be used to update the binary stream associated with the media entity
or stream property. It MUST be included for updatable streams if it
differs from standard URL conventions relative to the edit link of the
entity.

The `mediaReadLink` control information contains a URL that
can be used to read the binary stream associated with the media entity
or stream property. It MUST be included if its value differs from the
value of the associated `mediaEditLink`, if present, or if it
doesn't follow standard URL conventions relative to the read link of the
entity and the associated
`mediaEditLink` is not present.

The `mediaContentType` control information MAY be included;
its value SHOULD match the media type of the binary stream represented
by the `mediaReadLink` URL. This is only a hint; the actual
media type will be included in the `Content-Type` header when
the resource is requested.
The presence of `mediaContentType` with value `null` MAY be used 
to indicate the absence of a binary stream.

The `mediaEtag` control information MAY be included; its value
is the ETag of the binary stream represented by this media entity or
stream property.

The `media*` control information is not written in responses
if
[`metadata=none`](#metadatanoneodatametadatanone)
is requested.

If a stream property is provided inline in a request, the
`mediaContentType` control information may be specified.

If a stream property is annotated with
`Capabilities.MediaLocationUpdateSupported` (see
[OData-VocCap](#ODataVocCap)) and a value of
`true`, clients MAY specify the `mediaEditLink`
and/or `mediaReadLink` control information for that stream
property in order to change the association between the stream property
and a media stream.

In all other cases `media*` control information is ignored
in request payloads.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Employees/$entity",
  "@mediaReadLink": "Employees(1)/$value",
  "@mediaContentType": "image/jpeg",
  "ID": 1,
  …
}
```
:::

### ##subsubsec Control Information: `removed` (`odata.removed`)

The `removed` control information is used in [delta
payloads](#DeletedEntity) and indicates that the represented entity
is (to be) deleted.

### ##subsubsec Control Information: `collectionAnnotations` (`odata.collectionAnnotations`)

The `collectionAnnotations` control information can be
applied to a collection containing primitive members in order to
annotate such primitive members. The value of the
`collectionAnnotations` control information is an array of
JSON objects containing an integer property `index`,
specifying the zero-based ordinal index of the primitive item within the
collection, along with any annotations that are to be applied to that
primitive collection member.

::: example
Example ##ex: Annotating primitive values within a collection
```json
{
  "@context": "http://host/service/$metadata#Employees/$entity",
  "ID": 1,
  "EmailAddresses@collectionAnnotations": [
    {
      "index": 0,
      "@OfficeCommunication.emailType": "Personal"
    },
    {
      "index": 2,
      "@OfficeCommunication.emailType": "Work"
    }
  ],
  "EmailAddresses": [
    "Julie@Swansworth.com",
    "JulieSwa@live.com",
    "Julie.Swansworth@work.com"
  ],
  …
}
```
:::
