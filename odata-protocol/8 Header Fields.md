
-------

# ##sec Header Fields

OData defines semantics around the following request and response
headers. Additional headers may be specified, but have no unique
semantics defined in OData.

## ##subsec Common Headers

The following headers are common between OData requests and responses.

### ##subsubsec Header `Content-Type`

The format of a non-empty individual request or response body, alone or
within a batch, MUST be specified in the `Content-Type` header of a
request or response. The exception to this is if the body represents the
media stream of a [media entity](#RequestingtheMediaStreamofaMediaEntityusingvalue)
or [stream property](#ManagingStreamProperties), in which case the
`Content-Type` header SHOULD be present.

The specified format MAY include format parameters. Clients MUST be
prepared for the service to return custom format parameters not defined
in OData and SHOULD NOT expect that such format parameters can be
ignored. Custom format parameters MUST NOT start with `odata` and
services MUST NOT require generic OData consumers to understand custom
format parameters in order to correctly interpret the payload.

See [#OData-JSON#HeaderContentType] for format-specific details about format
parameters within the `Content-Type` header.

### ##subsubsec Header `Content-Encoding`

As defined in [RFC9110](#rfc9110), the `Content-Encoding` header
field is used as a modifier to the media-type (as indicated in the
`Content-Type` header). When present, its value indicates what additional
content codings have been applied to the entity-body.
A service MAY specify a list of acceptable content codings using an
annotation with term
[Capabilities.AcceptableEncodings]{.term},
see [OData-VocCap](#ODataVocCap).

If the `Content-Encoding` header is specified on an individual request
or response within a batch, then it specifies the encoding for that
individual request or response. Individual requests or responses that
don't include the `Content-Encoding` header inherit the encoding of the
overall batch request or response.

### ##subsubsec Header `Content-Language`

As defined in [RFC9110](#rfc9110), a request or response can
include a `Content-Language` header to indicate the natural language of
the intended audience for the enclosed message body. OData does not add
any additional requirements over HTTP for including `Content-Language`.
OData services can annotate model elements whose content depends on the
content language with the term
[Core.IsLanguageDependent]{.term},
see [OData-VocCore](#ODataVocCore).

If the `Content-Language` header is specified on an individual request
or response within a batch, then it specifies the language for that
individual request or response. Individual requests or responses that
don't include the `Content-Language` header inherit the language of the
overall batch request or response.

### ##subsubsec Header `Content-Length`

As defined in [RFC9110](#rfc9110), a request or response SHOULD
include a `Content-Length` header when the message's length can be
determined prior to being transferred. OData does not add any additional
requirements over HTTP for writing `Content-Length`.

If the `Content-Length` header is specified on an individual request or
response within a batch, then it specifies the length for that
individual request or response.

### ##subsubsec Header `OData-Version`

OData clients SHOULD use the `OData-Version` header on a request to
specify the version of the protocol used to generate the request
payload.

If present on a request, the service MUST interpret the request payload
according to the rules defined in the specified version of the protocol
or fail the request with a `4xx` response code.

If not specified in a request, the service MUST assume the request
payload is generated using the minimum of the
[`OData-MaxVersion`](#HeaderODataMaxVersion), if specified, and the
maximum version of the protocol that the service understands.

OData services MUST include the `OData-Version` header on a response to
specify the version of the protocol used to generate the response
payload. The client MUST interpret the response payload according to the
rules defined in the specified version of the protocol. Request and
response payloads are independent and may have different `OData-Version`
headers according to the above rules.

For more details, see [Versioning](#Versioning).

If the `OData-Version` header is specified on an individual request or
response within a batch, then it specifies the OData version for that
individual request or response. Individual requests or responses that
don't include the `OData-Version` header inherit the OData version of
the overall batch request or response. This OData version does not
typically vary within a batch.

## ##subsec Request Headers

In addition to the [Common Headers](#CommonHeaders), the client may
specify any combination of the following request headers.

### ##subsubsec Header `Accept`

As defined in [RFC9110](#rfc9110), the client MAY specify the set
of accepted [formats](#Formats) with the `Accept` Header.

Services MUST reject formats that specify unknown or unsupported format
parameters.

If a media type specified in the `Accept` header includes a `charset`
format parameter and the request also contains an
[`Accept-Charset`](#HeaderAcceptCharset) header, then the
`Accept-Charset` header MUST be used.

If the media type specified in the `Accept` header does not include a
`charset` format parameter, then the
[`Content-Type`](#HeaderContentType) header of the response MUST NOT
contain a `charset` format parameter.

The service SHOULD NOT add any format parameters to the `Content-Type`
header not specified in the `Accept` header.

If the `Accept` header is specified on an individual request within a
batch, then it specifies the acceptable formats for that individual
request. Requests within a batch that don't include the `Accept` header
inherit the acceptable formats of the overall batch request.

### ##subsubsec Header `Accept-Charset`

As defined in [RFC9110](#rfc9110), the client MAY specify the set
of accepted character sets with the `Accept-Charset` header.

If the `Accept-Charset` header is specified on an individual request
within a batch, then it specifies the acceptable character sets for that
individual request. Requests within a batch that don't include the
`Accept-Charset` header inherit the acceptable character sets of the
overall batch request.

### ##subsubsec Header `Accept-Language`

As defined in [RFC9110](#rfc9110), the client MAY specify the set
of accepted natural languages with the `Accept-Language` header.

If the `Accept-Language` header is specified on an individual request
within a batch, then it specifies the acceptable languages for that
individual request. Requests within a batch that don't include the
`Accept-Language` header inherit the acceptable languages of the overall
batch request.

### ##subsubsec Header `If-Match`

As defined in [RFC9110](#rfc9110), a client MAY include an
`If-Match` header in a request to `GET`, `POST`, `PUT`, `PATCH` or
`DELETE`. The value of the `If-Match` request header MUST be an ETag
value previously retrieved for the resource, or `*`.

If an operation on an existing resource requires an ETag, (see term
[Core.OptimisticConcurrency]{.term} in
[OData-VocCore](#ODataVocCore) and property
`OptimisticConcurrencyControl` of type
[Capabilities.NavigationPropertyRestriction]{.term}
in [OData-VocCap](#ODataVocCap)) and the client does not specify an
`If-Match` request header in a [Data Modification
Request](#DataModification) or in an [Action Request](#Actions) invoking
an action bound to the resource, the service responds with a
`428 Precondition Required` and MUST ensure that no observable change
occurs as a result of the request.

If present, the request MUST only be processed if the specified ETag
value matches the current ETag value of the target resource. Services
sending [`ETag`](#HeaderETag) headers with weak ETags that only depend
on the representation-independent entity state MUST use the weak
comparison function because it is sufficient to prevent accidental
overwrites. This is a deviation from [RFC9110](#rfc9110).

If the value does not match the current ETag value of the resource for a
[Data Modification Request](#DataModification) or [Action
Request](#Actions), the service MUST respond with
[`412 Precondition Failed`](#ResponseCode412PreconditionFailed) and MUST
ensure that no observable change occurs as a result of the request. In
the case of an [upsert](#UpsertanEntity), if the addressed entity does
not exist the provided ETag value is considered not to match.

The precondition `If-Match: *` is fulfilled if a current representation of the resource exists, a `PUT` or `PATCH` request with that header
results in an [upsert request](#UpsertanEntity) being processed as an
[update](#UpdateanEntity) and not an [insert](#CreateanEntity),
independent of whether the resource requires an ETag.

The `If-Match` header MUST NOT be specified on a batch request, but MAY
be specified on individual requests within the batch.

### ##subsubsec Header `If-None-Match`

As defined in [RFC9110](#rfc9110), a client MAY include an
`If-None-Match` header in a request to `GET`, `POST`, `PUT`, `PATCH` or
`DELETE`. The value of the `If-None-Match` request header MUST be an
ETag value previously retrieved for the resource, or `*`.

If present, the request MUST only be processed if the specified ETag
value does not match the current ETag value of the resource, using the
weak comparison function (see [RFC9110](#rfc9110)). If the value
matches the current ETag value of the resource, then for a `GET`
request, the service SHOULD respond with
[`304 Not Modified`](#ResponseCode304NotModified), and for a [Data
Modification Request](#DataModification) or [Action Request](#Actions),
the service MUST respond with
[`412 Precondition Failed`](#ResponseCode412PreconditionFailed) and MUST
ensure that no observable change occurs as a result of the request.

The precondition `If-None-Match: *` is fulfilled if there is no current representation of the resource, a `PUT` or `PATCH` request with that header
request results in an [upsert request](#UpsertanEntity) being processed
as an [insert](#CreateanEntity) and not an [update](#UpdateanEntity),
independent of whether the resource requires an ETag.

The `If-None-Match` header MUST NOT be specified on a batch request, but
MAY be specified on individual requests within the batch.

### ##subsubsec Header `Isolation` (`OData-Isolation`)

The `Isolation` header specifies the isolation of the current request
from external changes. The only supported value for this header is
`snapshot`.

If the service doesn't support `Isolation:snapshot` and this header was
specified on the request, the service MUST NOT process the request and
MUST respond with [`412 Precondition Failed`](#ResponseCode412PreconditionFailed).

*Snapshot isolation* guarantees that all data returned for a request,
including multiple requests within a [batch](#BatchRequests) or results
retrieved across multiple [pages](#ServerDrivenPaging), will be
consistent as of a single point in time. Only data modifications made
within the request (for example, by a data modification request within
the same batch) are visible. The effect is as if the request generates a
"snapshot" of the committed data as it existed at the start of the
request.

The` Isolation` header may be specified on a single or batch request. If
it is specified on a batch then the value is applied to all statements
within the batch.

Next links returned within a snapshot return results within the same
snapshot as the initial request; the client is not required to repeat
the header on each individual page request.

The `Isolation` header has no effect on links other than the next link.
Navigation links, read links, and edit links return the current version
of the data.

A service returns [`410 Gone`](#ResponseCode410Gone) or
[`404 Not Found`](#ResponseCode404NotFound) if a consumer tries to
follow a next link referring to a snapshot that is no longer available.

The syntax of the [Isolation]{.abnf} header is defined in
[OData-ABNF](#ODataABNF).

A service MAY specify the support for `Isolation:snapshot` using an
annotation with term
[Capabilities.IsolationSupported]{.term},
see [OData-VocCap](#ODataVocCap).

Note: The `Isolation` header was named `OData-Isolation` in OData
version 4.0. Services that support the` Isolation` header SHOULD also
support `OData-Isolation` for OData 4.0 clients and clients SHOULD use
`OData-Isolation` for compatibility with OData 4.0 services. If both
`Isolation` and `OData-Isolation` headers are specified in the same
request, the value of the `Isolation` header SHOULD be used.

### ##subsubsec Header `OData-MaxVersion`

Clients SHOULD specify an `OData-MaxVersion` request header.

If specified, the service MUST generate a response with the greatest
supported [`OData-Version`](#HeaderODataVersion) less than or equal to
the specified `OData-MaxVersion` or fail the request with an appropriate error.

If `OData-MaxVersion` is not specified, then the service SHOULD return
responses with the same OData version over time and interpret the
request as having an `OData-MaxVersion` equal to the maximum OData
version supported by the service at its initial publication.

If the `OData-MaxVersion` header is specified on an individual request
within a batch, then it specifies the maximum OData version for that
individual request. Individual requests that don't include the
`OData-MaxVersion` header inherit the maximum OData version of the
overall batch request or response. The maximum OData version does not
typically vary within a batch.

For more details, see [Versioning](#Versioning).

### ##subsubsec Header `Prefer`

The `Prefer` header, as defined in [RFC7240](#rfc7240), allows
clients to request certain behavior from the service. The service MUST
ignore preference values that are either not supported or not known by
the service.

The value of the `Prefer` header is a comma-separated list of
*preferences*. The following subsections describe preferences whose
meaning in OData is defined by this specification.

In response to a request containing a `Prefer` header, the service MAY
return the [`Preference-Applied`](#HeaderPreferenceApplied) and
[`Vary`](#HeaderVary) headers.

#### ##subsubsubsec Preference `allow-entityreferences` (`odata.allow-entityreferences`)

The `allow-entityreferences` preference indicates that the service is
allowed to return entity references in place of entities that have
previously been returned, with at least the properties requested, in the
same response (for example, when serializing the expanded results of
many-to-many relationships). The service MUST NOT return entity
references in place of requested entities if
`allow-entityreferences` has not been specified in the request, unless
explicitly defined by other rules in this document. The syntax of the
[allow-entityreferences]{.abnf} preference is defined in
[OData-ABNF](#ODataABNF).

In the case the service applies the `allow-entityreferences` preference
it MUST include a [`Preference-Applied`](#HeaderPreferenceApplied)
response header containing the `allow-entityreferences` preference to
indicate that entity references MAY be returned in place of entities
that have previously been returned.

If the `allow-entityreferences` preference is specified on an individual
request within a batch, then it specifies the preference for that
individual request. Individual requests within a batch that don't
include the `allow-entityreferences` preference inherit the preference
of the overall batch request.

Note: The `allow-entityreferences` preference was named
`odata.allow-entityreferences` in OData version 4.0. Services that
support the` allow-entityreferences` preference SHOULD also support
`odata.allow-entityreferences` for OData 4.0 clients and clients SHOULD
use `odata.allow-entityreferences` for compatibility with OData 4.0
services.

#### ##subsubsubsec Preference `callback` (`odata.callback`)

For scenarios in which links returned by the service are used by the
client to poll for additional information, the client can specify the
`callback` preference to request that the service notify the client when
data is available.

The `callback` preference can be specified:

-   when requesting asynchronous processing of a request with the
    [`respond-async`](#Preferencerespondasync) preference, or
-   on a `GET` request to a [delta link](#DeltaLinks).

The `callback` preference MUST include the parameter `url` whose value
is the URL of a callback endpoint to be invoked by the OData service
when data is available. The syntax of the `callback` preference is
defined in the [OData-ABNF](#ODataABNF) rule [callbackPreference]{.abnf}.

For HTTP based callbacks, the OData service executes an HTTP `GET`
request against the specified URL.

Services that support `callback` SHOULD support notifying the client
through HTTP. Services can advertise callback support using the
[Capabilities.CallbackSupported]{.term}
annotation term defined in [OData-VocCap](#ODataVocCap).

If the service applies the `callback` preference it MUST include the
`callback` preference in the
[`Preference-Applied`](#HeaderPreferenceApplied) response header.

When the `callback` preference is applied to asynchronous requests, the
OData service invokes the callback endpoint once it has finished
processing the request. The status monitor resource, returned in the
[`Location`](#HeaderLocation) header of the previously returned
[`202 Accepted`](#ResponseCode202Accepted) response, can then be used to
retrieve the results of the asynchronously executed request.

When the `callback` preference is specified on a `GET` request to a
delta link and there are no changes available, the OData service returns
a [`202 Accepted`](#ResponseCode202Accepted) response with a
[`Location`](#HeaderLocation) header specifying the delta link to be used to check
for future updates. The OData service then invokes the specified
callback endpoint once new changes become available.

Combining [`respond-async`](#Preferencerespondasync), `callback` and
[`track-changes`](#Preferencetrackchangesodatatrackchanges) preferences on
a `GET` request to a delta-link might influence the response in a couple
of ways.

-  If the service processes the request synchronously, and no updates are available, then the response is the same as if the respond-async hadn’t been specified and results in a response as described above.
-  If the service processes the request asynchronously, then it responds with a [`202 Accepted`](#ResponseCode202Accepted) response specifying the URL to the status monitor resource as it would have with any other asynchronous request. Once the service has finished processing the asynchronous request to the delta link resource, if changes are available it invokes the specified callback endpoint. If no changes are available, the service SHOULD wait to notify the client until changes are available. Once notified, the client uses the status monitor resource from the Location header of the previously returned [`202 Accepted`](#ResponseCode202Accepted) response to retrieve the results. In case no updates were available after processing the initial request, the result will contain no updates and the client can use the delta-link contained in the result to retrieve the updates that have since become available.

If the consumer specifies the same URL as callback endpoint in multiple
requests, the service MAY collate them into a single notification once
additional data is available for any of the requests. However, the
consumer MUST be prepared to deal with receiving up to as many
notifications as it requested.

::: example
Example ##ex: using a HTTP callback endpoint to receive notification
```
Prefer: callback; url="http://myserver/notfication/token/12345"
```
:::

If the `callback` preference is specified on an individual request
within a batch, then it specifies the callback to be used for tracking
changes to that individual request. If the `callback` preference is
specified on a batch, then it specifies the callback to be used for
async responses to the batch.

Note: The `callback` preference was named `odata.callback` in OData
version 4.0. Services that support the` callback` preference SHOULD also
support `odata.callback` for OData 4.0 clients and clients SHOULD use
`odata.callback` for compatibility with OData 4.0 services. If both
`callback` and `odata.callback` preferences are specified in the same
request, the value of the `callback` preference SHOULD be used.

#### ##subsubsubsec Preference `continue-on-error` (`odata.continue-on-error`)

The `continue-on-error` preference on a [batch request](#BatchRequests)
is used to request whether, upon encountering a request within the batch
that returns an error, the service return the error for that request and
continue processing additional requests within the batch (if specified
with an implicit or explicit value of `true`), or rather stop further
processing (if specified with an explicit value of `false`). The syntax
of the `continue-on-error` preference is defined in the
[OData-ABNF](#ODataABNF) rule [continueOnErrorPreference]{.abnf}.

The `continue-on-error` preference can also be used on a
[delta update](#UpdateaCollectionofEntities),
[set-based update](#UpdateMembersofaCollection), or
[set-based delete](#DeleteMembersofaCollection) to request that the service
continue attempting to process changes after receiving an error.

If the service encounters any errors processing the request and returns a successful response code, then it MUST include a [`Preference-Applied`](#HeaderPreferenceApplied) response header containing the `continue-on-error` preference with an explicit value of `true`.

A service MAY specify support for the `continue-on-error` preference
using an annotation with term
[Capabilities.BatchContinueOnErrorSupported]{.term},
see [OData-VocCap](#ODataVocCap).

The `continue-on-error` preference on a batch request refers to whether individual
requests within a batch should be executed if others have failed. Whether an
individual request that represents multiple operations should continue on error can
instead be expressed through a `continue-on-error` preference on that individual
request.

Note: The `continue-on-error` preference was named
`odata.continue-on-error` in OData version 4.0. Services that support
the` continue-on-error` preference SHOULD also support
`odata.continue-on-error` for OData 4.0 clients and clients SHOULD use
`odata.continue-on-error` for compatibility with OData 4.0 services.

#### ##subsubsubsec Preference `include-annotations` (`odata.include-annotations`)

The `include-annotations` preference in a request for
[data](#RequestingData) or [metadata](#MetadataDocumentRequest) is used
to specify the set of annotations the client requests to be included,
where applicable, in the response.

The value of the `include-annotations` preference is a comma-separated
list of namespace-qualified term names or term name patterns to include
or exclude, with `*` as a wildcard for name segments. Term names and
term name patterns can optionally be followed by a hash (`#`) character
and an annotation qualifier. The full syntax of the
`include-annotations` preference is defined in the [OData-ABNF](#ODataABNF)
rule [includeAnnotationsPreference]{.abnf}.

The most specific identifier always takes precedence, with an explicit
name taking precedence over a name pattern, and a longer pattern taking
precedence over a shorter pattern. If the same identifier value is
requested to both be excluded and included the behavior is undefined;
the service MAY return or omit the specified vocabulary but MUST NOT
raise an exception.

::: example
Example ##ex: a `Prefer` header requesting all annotations within a
metadata document to be returned
```
Prefer: include-annotations="*"
```
:::

::: example
Example ##ex: a `Prefer` header requesting that no annotations are returned
```
Prefer: include-annotations="-*"
```
:::

::: example
Example ##ex: a `Prefer` header requesting that all annotations defined
under the `display` namespace (recursively) be returned
```
Prefer: include-annotations="display.*"
```
:::

::: example
Example ##ex: a `Prefer` header requesting that the annotation with the
term name `subject` within the `display` namespace be returned
```
Prefer: include-annotations="display.subject"
```
:::

::: example
Example ##ex: a `Prefer` header requesting that all annotations defined
under the `display` namespace (recursively) with the qualifier
`tablet` be returned
```
Prefer: include-annotations="display.*#tablet"
```
:::

The `include-annotations` preference is only a hint to the service. The
service MAY ignore the preference and is free to decide whether or not
to return annotations not specified in the `include-annotations`
preference.

In the case that the client has specified the `include-annotations`
preference in the request, the service SHOULD include a
[`Preference-Applied`](#HeaderPreferenceApplied) response header
containing the `include-annotations` preference to specify the
annotations actually included, where applicable, in the response. This
value may differ from the annotations requested in the
[`Prefer`](#HeaderPrefer) header of the request.

If the `include-annotations` preference is specified on an individual
request within a batch, then it specifies the preference for that
individual request. Individual requests within a batch that don't
include the `include-annotations` preference inherit the preference of
the overall batch request.

Note: The `include-annotations` preference was named
`odata.include-annotations` in OData version 4.0. Services that support
the `include-annotations` preference SHOULD also support
`odata.include-annotations` for OData 4.0 clients and clients SHOULD use
`odata.include-annotations` for compatibility with OData 4.0 services.
If both `include-annotations` and `odata.include-annotations`
preferences are specified in the same request, the value of the
`include-annotations` preference SHOULD be used.

#### ##subsubsubsec Preference `maxpagesize` (`odata.maxpagesize`)

The `maxpagesize` preference is used to request that each collection
within the response contain no more than the number of items specified
as the positive integer value of this preference. The syntax of the
`maxpagesize` preference is defined in the [OData-ABNF](#ODataABNF) rule
[maxpagesizePreference]{.abnf}.

::: example
Example ##ex: a request for customers and their orders would result in a
response containing one collection with customer entities and for every
customer a separate collection with order entities. The client could
specify `maxpagesize=50` in order to request that each page of results
contain a maximum of 50 customers, each with a maximum of 50 orders.
:::

If a collection within the result contains more than the specified
`maxpagesize`, the collection SHOULD be [a partial set of the
results](#ServerDrivenPaging) with a [next link](#ServerDrivenPaging) to
the next page of results. The client MAY specify a different value for
this preference with every request following a next link.

In the example given above, the result page should include a next link
for the customer collection, if there are more than 50 customers, and
additional next links for all returned orders collections with more than
50 entities.

If the client has specified the `maxpagesize` preference in the request,
and the service limits the number of items in collections within the
response through [server-driven paging](#ServerDrivenPaging), the
service MAY include a
[`Preference-Applied`](#HeaderPreferenceApplied) response header
containing the `maxpagesize` preference and the maximum page size
applied. This value may differ from the value requested by the client.

The `maxpagesize` preference SHOULD NOT be applied to a batch request,
but MAY be applied to individual requests within a batch.

Note: The `maxpagesize` preference was named `odata.maxpagesize` in
OData version 4.0. Services that support the` maxpagesize` preference
SHOULD also support `odata.maxpagesize` for OData 4.0 clients and
clients SHOULD use `odata.maxpagesize` for compatibility with OData 4.0
services. If both `maxpagesize` and `odata.maxpagesize` preferences are
specified in the same request, the value of the `maxpagesize` preference
SHOULD be used.

#### ##subsubsubsec Preference `omit-values`

The `omit-values` preference specifies values that MAY be omitted from a
response payload. Valid values are `nulls` or `defaults`.

If `nulls` is specified, then the service MAY omit single-valued properties having
null values from the response, in which case it MUST specify the
`Preference-Applied` response header with `omit-values=nulls`.

If `defaults` is specified, then the service MAY omit single-valued properties
having default values from the response, including nulls for
properties that have no other defined default value. Nulls MUST be
included for properties that have a non-null default value defined. If
the service omits default values, it MUST specify the
`Preference-Applied` response header with `omit-values=defaults`.

Collection-valued properties cannot be omitted in this way.

Properties with instance annotations are not affected by this preference
and MUST be included in the payload if they would be included without
this preference. Clients MUST NOT try to reconstruct a null or default
value for properties for which an instance annotation is present and no
property value is present, for example if the property is omitted due to
permissions and has been replaced with the instance annotation
`Core.Permissions` and a value of `None`, see [OData-VocCore](#ODataVocCore).

Properties with null or default values MUST be included in delta
payloads, if modified.

The response to a `POST` operation MUST include any properties not set to
their default value, and the response to a `PUT` or `PATCH` operation MUST
include any properties whose values were changed as part of the
operation.

The `omit-values` preference does not affect a request payload.

#### ##subsubsubsec Preference `return=representation` and `return=minimal`

The `return=representation` and `return=minimal` preferences are defined
in [RFC7240](#rfc7240).

In OData, `return=representation` or `return=minimal` is defined for use
with a `POST`, `PUT`, or `PATCH` [Data Modification
Request](#DataModification), or with an [Action Request](#Actions).
Specifying a preference of `return=representation` or `return=minimal`
in a `GET` or `DELETE` request does not have any effect.

A preference of `return=representation` or `return=minimal` is allowed
on an individual [Data Modification Request](#DataModification) or
[Action Request](#Actions) within a batch, subject to the same
restrictions, but SHOULD return a `4xx` client error if specified on the
batch request itself.

A preference of `return=minimal` requests that the service invoke the
request but does not return content in the response. The service MAY
apply this preference by returning
[`204 No Content`](#ResponseCode204NoContent) in which case it MAY
include a [`Preference-Applied`](#HeaderPreferenceApplied) response
header containing the `return=minimal` preference.

A preference of `return=representation` requests that the service
invokes the request and returns the modified resource. The service MAY
apply this preference by returning the representation of the
successfully modified resource in the body of the response, formatted
according to the rules specified for the requested [format](#Formats).
In this case the service MAY include a
[`Preference-Applied`](#HeaderPreferenceApplied) response header
containing the `return=representation` preference.

The `return` preference SHOULD NOT be applied to a batch request, but
MAY be applied to individual requests within a batch.

#### ##subsubsubsec Preference `respond-async`

The `respond-async` preference, as defined in [RFC7240](#rfc7240),
allows clients to request that the service process the request
asynchronously.

If the client has specified` respond-async` in the request, the service
MAY process the request asynchronously and return a
[`202 Accepted`](#ResponseCode202Accepted) response.

The `respond-async` preference MAY be used for batch requests, in which
case it applies to the batch request as a whole and not to individual
requests within the batch request.

In the case that the service applies the `respond-async` preference it
MUST include a
[`Preference-Applied`](#HeaderPreferenceApplied) response header
containing the `respond-async` preference.

A service MAY specify the support for the `respond-async` preference
using an annotation with term
[Capabilities.AsynchronousRequestsSupported]{.term},
see [OData-VocCap](#ODataVocCap).

::: example
Example ##ex: a service receiving the following header might choose to
respond
- asynchronously if the synchronous processing of the request will take longer than 10 seconds
- synchronously after 5 seconds
- asynchronously (ignoring the [`wait`](#Preferencewait) preference)
- synchronously after 15 seconds (ignoring `respond-async` preference and the
[`wait`](#Preferencewait) preference)
```
Prefer: respond-async, wait=10
```
:::

#### ##subsubsubsec Preference `track-changes` (`odata.track-changes`)

The `track-changes` preference is used to request that the service
return a [delta link](#DeltaLinks) that can subsequently be used to
obtain [changes](#RequestingChanges) (deltas) to this result. The syntax
of the `track-changes` preference is defined in the
[OData-ABNF](#ODataABNF) rule [trackChangesPreference]{.abnf}.

For [paged results](#ServerDrivenPaging), the preference MUST be
specified on the initial request. Services MUST ignore the
[`track-changes`](#Preferencetrackchangesodatatrackchanges) preference if
applied to the next link.

The delta link MUST only be returned on the final page of results in
place of the next link.

The service includes a
[`Preference-Applied`](#HeaderPreferenceApplied) response header in
the first page of the response containing the `track-changes` preference
to signal that changes are being tracked.

A service MAY specify the support for the `track-changes` preference
using an annotation with term
[Capabilities.ChangeTracking]{.term},
see [OData-VocCap](#ODataVocCap).

The `track-changes` preference SHOULD NOT be applied to a batch request,
but MAY be applied to individual requests within a batch.

Note: The `track-changes` preference was named `odata.track-changes` in
OData version 4.0. Services that support the` track-changes` preference
SHOULD also support `odata.track-changes` for OData 4.0 clients and
clients SHOULD use `odata.track-changes` for compatibility with OData
4.0 services.

#### ##subsubsubsec Preference `wait`

The `wait` preference, as defined in [RFC7240](#rfc7240), is used to
establish an upper bound on the length of time, in seconds, the client
is prepared to wait for the service to process the request synchronously
once it has been received.

If the [`respond-async`](#Preferencerespondasync) preference is also
specified, the client requests that the service respond asynchronously
after the specified length of time.

If the `respond-async` preference has not been specified, the service
MAY interpret the `wait` as a request to timeout after the specified
period of time.

If the `wait` preference is specified on an individual request within a
batch, then it specifies the maximum amount of time to wait for that
individual request. If the `wait` preference is specified on a batch,
then it specifies the maximum time to wait for the entire batch.

## ##subsec Response Headers

In addition to the [Common Headers](#CommonHeaders), the following
response headers have defined meaning in OData.

### ##subsubsec Header `AsyncResult`

A 4.01 service MUST include the `AsyncResult` header in
[`200 OK`](#ResponseCode200OK) responses from a status monitor resource in
order to indicate the final [HTTP Response Status
Code](#CommonResponseStatusCodes) of an [asynchronously executed
request](#AsynchronousRequests).
The header value is the three-digit HTTP response code, see [OData-ABNF](#ODataABNF)
rule [asyncresult]{.abnf}.

The `AsyncResult` header SHOULD NOT be applied to individual responses
within a batch.

### ##subsubsec Header `ETag`

A response MAY include an `ETag` header, see
[RFC9110](#rfc9110). Services MUST include this header if they
require an ETag to be specified when modifying the resource.

Services MUST support specifying the value returned in the `ETag` header
in an [`If-None-Match`](#HeaderIfNoneMatch) header of a subsequent [Data
Request](#RequestingData) for the resource. Clients MUST specify the
value returned in the `ETag` header, or star (`*`), in an
[`If-Match`](#HeaderIfMatch) header of a subsequent [Data Modification
Request](#DataModification) or [Action Request](#Actions) in order to
apply [optimistic concurrency control](#UseofETagsforAvoidingUpdateConflicts)
in updating, deleting, or invoking an action bound to the
resource.

As OData allows multiple formats for representing the same structured
information, services SHOULD use weak ETags that only depend on the
representation-independent entity state. A strong ETag MUST change
whenever the representation of an entity changes, so it has to depend on
the [`Content-Type`](#HeaderContentType), the
[`Content-Encoding`](#HeaderContentEncoding), and potentially other
characteristics of the response.

An `ETag` header MAY also be returned on a [metadata document
request](#MetadataDocumentRequest) or [service document
request](#ServiceDocumentRequest) to allow the client subsequently to
make a conditional request for the metadata or service document. Clients
can also compare the value of the `ETag` header returned from a metadata
document request to the metadata ETag returned in a response in order to
verify the version of the metadata used to generate that response.

The `ETag` header SHOULD NOT be included for the overall batch response,
but MAY be included in individual responses within a batch.

### ##subsubsec Header `Location`

The `Location` header MUST be returned in the response from a [Create
Entity](#CreateanEntity) or [Create Media Entity](#CreateaMediaEntity)
request to specify the edit URL, or for read-only entities the read URL,
of the created entity, and in responses returning
[`202 Accepted`](#ResponseCode202Accepted) to specify the URL that the
client can use to request the status of an asynchronous request.

The `Location` header SHOULD NOT be included for the overall batch
response, but MAY be included in individual responses within a batch.

### ##subsubsec Header `OData-EntityId`

A response to a [create](#CreateanEntity) or [upsert](#UpsertanEntity)
operation that returns [`204 No Content`](#ResponseCode204NoContent)
MUST include an `OData-EntityId` response header. The value of the
header is the [entity-id](#EntityIdsandEntityReferences) of the entity
that was acted on by the request. The syntax of the [OData-EntityId]{.abnf}
header is defined in [OData-ABNF](#ODataABNF).

The `OData-EntityID` header SHOULD NOT be included for the overall batch
response, but MAY be included in individual responses within a batch.

### ##subsubsec Header `OData-Error`

A response with an [in-stream error](#InStreamErrors) MAY include an
`OData-Error` trailing header if the transport protocol supports
trailing headers (e.g. HTTP/1.1 with chunked transfer encoding, or
HTTP/2).

The value of this trailing header is a standard OData error response
according to the OData response format, encoded suitably for transport
in a header, see e.g. [#OData-JSON#InStreamError].

### ##subsubsec Header `Preference-Applied`

In a response to a request that specifies a [`Prefer`](#HeaderPrefer)
header, a service MAY include a `Preference-Applied` header, as defined
in [RFC7240](#rfc7240), specifying how individual preferences within
the request were handled.

The value of the `Preference-Applied` header is a comma-separated list
of preferences applied in the response. For more information on the
individual preferences, see the [`Prefer`](#HeaderPrefer) header.

If the `Preference-Applied` header is specified on an individual
response within a batch, then it specifies the preferences applied to
that individual response. If the `Preference-Applied` header is
specified on a batch response, then it specifies the preferences applied
to the overall batch.

### ##subsubsec Header `Retry-After`

A service MAY include a `Retry-After` header, as defined in
[RFC9110](#rfc9110)), in [`202 Accepted`](#ResponseCode202Accepted)
and in [`3xx Redirect`](#ResponseCode3xxRedirection) responses

The `Retry-After` header specifies the duration of time, in seconds,
that the client is asked to wait before retrying the request or issuing
a request to the resource returned as the value of the
[`Location`](#HeaderLocation) header.

### ##subsubsec Header `Vary`

If a response varies depending on the
[`OData-Version`](#HeaderODataVersion) of the response, the service MUST
include a `Vary` header listing the
[`OData-MaxVersion`](#HeaderODataMaxVersion) request header field to
allow correct caching of the response.

If a response varies depending on the applied preferences
([`allow-entityreferences`](#Preferenceallowentityreferencesodataallowentityreferences),
[`include-annotations`](#Preferenceincludeannotationsodataincludeannotations),
[`omit-values`](#Preferenceomitvalues), [`return`](#Preferencereturnrepresentationandreturnminimal)),
the service MUST include a `Vary` header listing the
[`Prefer`](#HeaderPrefer) request header field to allow correct caching
of the response.

Alternatively, the server MAY include a `Vary` header with the special
value `*` as defined by [RFC9110](#rfc9110), Section 8.2.1. Note
that this will make it impossible for a proxy to cache the response, see
[RFC7240](#rfc7240).

-------

# ##sec Common Response Status Codes

An OData service MAY respond to any request using any valid HTTP status
code appropriate for the request. A service SHOULD be as specific as
possible in its choice of HTTP status codes.

The following represent the most common success response codes. In some
cases, a service MAY respond with a more specific success code.

## ##subsec Success Responses

The following response codes represent successful requests.

### ##subsubsec Response Code `200 OK`

A request that does not create a resource returns `200 OK` if it is
completed successfully and the value of the resource is not `null`. In
this case, the response body MUST contain the value of the resource
specified in the request URL.

### ##subsubsec Response Code `201 Created`

A [Create Entity](#CreateanEntity), [Create Media
Entity](#CreateaMediaEntity), or [Invoke Action](#InvokinganAction)
request that successfully creates a resource returns `201 Created`. In
this case, the response body MUST contain the resource created.

### ##subsubsec Response Code `202 Accepted`

`202 Accepted` indicates that the [Data Service
Request](#DataServiceRequests) has been accepted and has not yet
completed executing asynchronously. The asynchronous handling of
requests is defined in the sections on [Asynchronous
Requests](#AsynchronousRequests) and [Asynchronous Batch
Requests](#AsynchronousBatchRequests).

### ##subsubsec Response Code `204 No Content`

A request returns `204 No Content` if the requested resource has the
`null` value, or if the service applies a
[`return=minimal`](#Preferencereturnrepresentationandreturnminimal) preference.
In this case, the response body MUST be empty.

As defined in [RFC9110](#rfc9110), a [Data Modification
Request](#DataModification) that responds with
`204 No Content` MAY include an [`ETag`](#HeaderETag) header with a value reflecting
the result of the data modification if and only if the client can
reasonably "know" the new representation of the resource without
actually receiving it. For a `PUT` request this means that the response
body of a corresponding `200 OK` or `201 Created` response would have
been identical to the request body, i.e. no server-side modification of
values sent in the request body, no server-calculated values etc. For a
`PATCH` request this means that the response body of a corresponding
`200 OK` or `201 Created` response would have consisted of all values
sent in the request body, plus (for values not sent in the request body)
server-side values corresponding to the `ETag` value sent in the
`If-Match` header of the `PATCH` request, i.e. the previous values
"known" to the client.

### ##subsubsec Response Code `3xx Redirection`

As per [RFC9110](#rfc9110), a `3xx Redirection` indicates that
further action needs to be taken by the client in order to fulfill the
request. In this case, the response SHOULD include a
[`Location`](#HeaderLocation) header, as appropriate, with the URL from which the
result can be obtained; it MAY include a
[`Retry-After`](#HeaderRetryAfter) header.

### ##subsubsec Response Code `304 Not Modified`

As per [RFC9110](#rfc9110), a `304 Not Modified` is returned
when the client performs a `GET` request containing an
[`If-None-Match`](#HeaderIfNoneMatch) header and the content has not
changed. In this case the response SHOULD NOT include other headers in
order to prevent inconsistencies between cached entity-bodies and
updated headers.

The service MUST ensure that no observable change has occurred to the
state of the service as a result of any request that returns a
`304 Not Modified`.

## ##subsec Client Error Responses

Error codes in the `4xx` range indicate a client error, such as a
malformed request.

The service MUST ensure that no observable change has occurred to the
state of the service as a result of any request that returns an error
status code.

In the case that a response body is defined for the error code, the body
of the error is as defined for the appropriate [format](#Formats).

### ##subsubsec Response Code `404 Not Found`

`404 Not Found` indicates that the resource specified by the request URL
does not exist. The response body MAY provide additional information.

### ##subsubsec Response Code `405 Method Not Allowed`

`405 Method Not Allowed` indicates that the resource specified by the
request URL does not support the request method. In this case the
response MUST include an `Allow` header containing a list of valid
request methods for the requested resource as defined in
[RFC9110](#rfc9110).

### ##subsubsec Response Code `406 Not Acceptable`

`406 Not Acceptable` indicates that the resource specified by the
request URL does not have a current representation that would be
acceptable for the client according to the request
headers [`Accept`](#HeaderAccept),
[`Accept-Charset`](#HeaderAcceptCharset),
[`Accept-Language`](#HeaderAcceptLanguage), and
[`OData-MaxVersion`](#HeaderODataMaxVersion), and that the service is
unwilling to supply a default representation.

### ##subsubsec Response Code `410 Gone`

`410 Gone` indicates that the requested resource is no longer available.
This can happen if a client has waited too long to follow a [delta
link](#DeltaLinks) or a [status-monitor-resource](#AsynchronousRequests)
link, or a next link on a collection that was requested with [snapshot
isolation](#HeaderIsolationODataIsolation).

### ##subsubsec Response Code `412 Precondition Failed`

As defined in [RFC9110](#rfc9110), `412 Precondition Failed`
indicates that the client has performed a conditional request and the
resource fails the condition. The service MUST ensure that no observable
change occurs as a result of the request.

### ##subsubsec Response Code `424 Failed Dependency`

`424 Failed Dependency` indicates that a request was not performed due
to a failed dependency; for example, a request within a batch that
depended upon a request that failed.

## ##subsec Server Error Responses

As defined in [RFC9110](#rfc9110), error codes in the `5xx` range
indicate service errors.

### ##subsubsec Response Code `501 Not Implemented`

If the client requests functionality not implemented by the OData
Service, the service MAY respond with `501 Not Implemented` and
include a response body describing the functionality not implemented.

## ##subsec Error Response Body

An error response body can be the result of a failure of OData processing or of the underlying infrastructure.
An OData-specific error response (which can be recognized by the presence
of the [`OData-Version`](#HeaderODataVersion) header) is format-specific and
consists at least of the following information:
- `code`: required non-null, non-empty,
language-independent string. Its value is a service-defined error code.
This code serves as a sub-status for the HTTP error code specified in
the response.
- `message`: required non-null, non-empty,
language-dependent, human-readable string describing the error.
The [`Content-Language`](#HeaderContentLanguage) header MUST contain the
language code from [RFC5646](#rfc5646) corresponding to the language in
which the value for message is written.
- `target`: optional nullable, potentially
empty string indicating the target of the error, for example, the name
of the property in error.
- `details`: optional, potentially empty
collection of instances of structured types with `code`, `message`, and `target`
following the rules above.
- `innererror`: optional instance of structured type
with service-defined content.

Service implementations SHOULD carefully consider which information to
include in production environments to guard against potential security
concerns around information disclosure.

## ##subsec In-Stream Errors

In the case that the service encounters an error after sending a success
status to the client, the service MUST leave the response malformed
according to its [`Content-Type`](#HeaderContentType) or abort the response by
causing an error on transport protocol level. Clients MUST treat
the entire response as being in error.

Services MAY include the header [`OData-Error`](#HeaderODataError) as a
trailing header if supported by the transport protocol (e.g. HTTP/1.1
with chunked transfer encoding, or HTTP/2).
