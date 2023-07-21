-------

# ##sec Common Characteristics

This section describes common characteristics of the representation for
OData values in JSON. A request or response body consists of several
parts. It contains OData values as part of a larger document. Requests
and responses are structured almost identical; the few existing
differences will be explicitly called out in the respective subsections.

# ##subsec Header Content-Type

Requests and responses with a JSON message body MUST have a
`Content-Type` header value of `application/json`.

Requests MAY add the `charset` parameter to the content type.
Allowed values are `UTF-8`,` UTF-16`, and
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
a value of `true` or `false`, see section [Payload
Ordering Constraints](#PayloadOrderingConstraints).

# ##subsec Message Body

# ##subsec Relative URLs

# ##subsec Payload Ordering Constraints

# ##subsec Control Information

# ##subsubsec Control Information: `context` (`odata.context`)

# ##subsubsec Control Information: `metadataEtag` (`odata.metadataEtag`)

# ##subsubsec Control Information: `type` (`odata.type`)

# ##subsubsec Control Information: `count` (`odata.count`)

# ##subsubsec Control Information: `nextLink` (`odata.nextLink`)

# ##subsubsec Control Information: `delta` (`odata.delta`)

# ##subsubsec Control Information: `deltaLink` (`odata.deltaLink`)

# ##subsubsec Control Information: `id` (`odata.id`)

# ##subsubsec Control Information: `editLink` and `readLink` (`odata.editLink` and `odata.readLink`)

# ##subsubsec Control Information: `etag` (`odata.etag`)

# ##subsubsec Control Information: `navigationLink` and `associationLink` (`odata.navigationLink` and `odata.associationLink`)

# ##subsubsec Control Information: `media*` (`odata.media*`)

# ##subsubsec Control Information: `removed` (`odata.removed`)

# ##subsubsec Control Information: `collectionAnnotations` (`odata.collectionAnnotations`)

