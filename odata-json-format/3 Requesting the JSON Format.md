
-------

# ##sec Requesting the JSON Format

The OData JSON format can be requested using the `$format`
query option in the request URL with the media type
`application/json`, optionally followed by format parameters,
or the case-insensitive abbreviation `json` which MUST NOT be
followed by format parameters.

Alternatively, this format can be requested using the
`Accept` header with the media type
`application/json`, optionally followed by format parameters.

If specified, `$format` overrides any value specified in the
`Accept` header.

Possible format parameters are:

- [`ExponentialDecimals`](#ControllingtheRepresentationofNumbers)
- [`IEEE754Compatible`](#ControllingtheRepresentationofNumbers)
- [`metadata`](#ControllingtheAmountofControlInformationinResponses)
- [`streaming`](#PayloadOrderingConstraints)

The names and values of these format parameters are case-insensitive.

Services SHOULD advertise the supported media types by annotating the
entity container with the term
[Capabilities.SupportedFormats]{.term}
defined in [OData-VocCap](#ODataVocCap), listing all
available formats and combinations of supported format parameters.


## ##subsec Controlling the Amount of Control Information in Responses

The amount of [control information](#ControlInformation) needed (or
desired) in the payload depends on the client application and device.
The `metadata` parameter can be applied to the
`Accept` header of an OData request to influence how much
control information will be included in the response.

Other `Accept` header parameters (e.g.,
`streaming`) are orthogonal to the `metadata`
parameter and are therefore not mentioned in this section.

If a client prefers a very small wire size and is intelligent enough to
compute data using metadata expressions, the `Accept` header
should include
[`metadata=minimal`](#metadataminimalodatametadataminimal).
If computation is more critical than wire size or the client is
incapable of computing control information,
[`metadata=full`](#metadatafullodatametadatafull)
directs the service to inline the control information that normally
would be computed from metadata expressions in the payload.
[`metadata=none`](#metadatanoneodatametadatanone)
is an option for clients that have out-of-band knowledge or don't
require control information.

In addition, the client may use the `include-annotations`
preference in the `Prefer` header to request additional
control information. Services supporting this MUST NOT omit control
information required by the chosen `metadata` parameter, and
services MUST NOT exclude the
[`nextLink`](#ControlInformationnextLinkodatanextLink),
[`deltaLink`](#ControlInformationdeltaLinkodatadeltaLink), and
[`count`](#ControlInformationcountodatacount)
if they are required by the response type.

If the client includes the
`OData-MaxVersion` header in a
request and does not specify the
`metadata` format parameter in
either the `Accept` header or `$format` query
option, the service MUST return at least the [minimal control
information](#metadataminimalodatametadataminimal).

Note that in OData 4.0 the `metadata` format parameter was
prefixed with `odata.`. Payloads with an `OData-Version` header equal to
`4.0` MUST include the `odata.` prefix. Payloads with an
`OData-Version` header equal to `4.01` or greater SHOULD NOT
include the `odata.` prefix.

### ##subsubsec `metadata=minimal` (`odata.metadata=minimal`)

The `metadata=minimal` format parameter indicates that the
service SHOULD remove computable control information from the payload
wherever possible. The response payload MUST contain at least the
following [control information](#ControlInformation):

- [`context`](#ControlInformationcontextodatacontext):
  the root context URL of the payload and the context URL for any deleted
  entries or added or deleted links in a delta response, or for entities
  or entity collections whose set cannot be determined from the root
  context URL
- [`etag`](#ControlInformationetagodataetag):
  the ETag of the entity or collection, as appropriate
- [`count`](#ControlInformationcountodatacount):
  the total count of a collection of entities or collection of entity
  references, if requested
- [`nextLink`](#ControlInformationnextLinkodatanextLink):
  the next link of a collection with partial results
- [`deltaLink`](#ControlInformationdeltaLinkodatadeltaLink):
  the delta link for obtaining changes to the result, if requested

In addition, control information MUST appear in the payload for cases
where actual values are not the same as the computed values and MAY
appear otherwise. When control information appears in the payload, it is
treated as exceptions to the computed values.

Media entities and stream properties MAY in addition contain the
following control information:

- [`mediaEtag`](#ControlInformationmediaodatamedia):
  the ETag of the stream, as appropriate
- [`mediaContentType`](#ControlInformationmediaodatamedia):
  the media type of the stream

### ##subsubsec `metadata=full` (`odata.metadata=full`)

The `metadata=full` format parameter indicates that the
service MUST include all control information explicitly in the payload.

The full list of control information that may appear in a
`metadata=full` response is as follows:

- [`context`](#ControlInformationcontextodatacontext):
  the context URL for a collection, entity, primitive value, or service
  document.
- [`count`](#ControlInformationcountodatacount):
  the total count of a collection of entities or collection of entity
  references, if requested.
- [`nextLink`](#ControlInformationnextLinkodatanextLink):
  the next link of a collection with partial results
- [`deltaLink`](#ControlInformationdeltaLinkodatadeltaLink):
  the delta link for obtaining changes to the result, if requested
- [`id`](#ControlInformationidodataid):
  the ID of the entity
- [`etag`](#ControlInformationetagodataetag):
  the ETag of the entity or collection, as appropriate
- [`readLink`](#ControlInformationeditLinkandreadLinkodataeditLinkandodatareadLink):
  the link used to read the entity, if the edit link cannot be used to
  read the entity
- [`editLink`](#ControlInformationeditLinkandreadLinkodataeditLinkandodatareadLink):
  the link used to edit/update the entity, if the entity is updatable and
  the `id` does not represent a URL that can be used to edit the
  entity
- [`navigationLink`](#NavigationLink):
  the link used to retrieve the values of a navigation property
- [`associationLink`](#AssociationLink):
  the link used to describe the relationship between this entity and
  related entities
- [`type`](#ControlInformationtypeodatatype):
  the type of the containing object or targeted property if the type of
  the object or targeted property cannot be heuristically determined from
  the data value, see [section ##ControlInformationtypeodatatype].

Media entities and stream properties may in addition contain the
following control information:

- [`mediaReadLink`](#ControlInformationmediaodatamedia):
  the link used to read the stream
- [`mediaEditLink`](#ControlInformationmediaodatamedia):
  the link used to edit/update the stream
- [`mediaEtag`](#ControlInformationmediaodatamedia):
  the ETag of the stream, as appropriate
- [`mediaContentType`](#ControlInformationmediaodatamedia):
  the media type of the stream

### ##subsubsec `metadata=none` (`odata.metadata=none`)

The `metadata=none` format parameter indicates that the
service SHOULD omit control information other than
[`nextLink`](#ControlInformationnextLinkodatanextLink) and
[`count`](#ControlInformationcountodatacount).
This control information MUST continue to be included, as applicable,
even in the `metadata=none` case.

It is not valid to specify `metadata=none` on a [delta
request](#DeltaPayload).

## ##subsec Controlling the Representation of Numbers

The `IEEE754Compatible=true` format parameter indicates that
the service MUST serialize `Edm.Int64` and
`Edm.Decimal` numbers (including the
[`count`](#ControlInformationcountodatacount),
if requested) as strings. This is in conformance with
[RFC7493](#rfc7493).

If not specified, or specified as `IEEE754Compatible=false`,
all numbers MUST be serialized as JSON numbers.

This enables support for JavaScript numbers that are defined to be
64-bit binary format IEEE 754 values (see [ECMAScript](#_ECMAScript), [section 4.3.1.9](http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.19))
resulting in integers losing precision past 15 digits, and decimals
losing precision due to the conversion from base 10 to base 2.

OData JSON request and response payloads that format
`Edm.Int64` and `Edm.Decimal` values as strings
MUST specify this format parameter in the media type sent in the
[`Content-Type`](#HeaderContentType)
header.

Services producing responses without format parameter
`IEEE754Compatible=true` which are unable to produce exact
JSON numbers MAY serialize `Edm.Int64` and
`Edm.Decimal` numbers with a rounded/inexact value as a JSON
number and annotate that value with an instance annotation with term
`Core.ValueException` defined in
[OData-VocCore](#ODataVocCore) containing the exact value as a
string. This situation can for example happen if the client only accepts
`application/json` without any format parameters and the
service is written in JavaScript.

For payloads with an `OData-Version` header equal to
`4.0`
the `ExponentialDecimals=true` format parameter indicates
that the service MAY serialize `Edm.Decimal` numbers in
exponential notation (e.g. `1e-6` instead of
`0.000001`).

The sender of a request MUST specify
`ExponentialDecimals=true` in the `Content-Type`
header if the request body contains `Edm.Decimal` values in
exponential notation.

If not specified, or specified as
`ExponentialDecimals=false`, all `Edm.Decimal`
values MUST be serialized in long notation, using only an optional sign,
digits, and an optional decimal point followed by digits.

Payloads with an `OData-Version` header equal to `4.01`
or greater always allow exponential notation for numbers and the
`ExponentialDecimals` format parameter is not needed or used.
