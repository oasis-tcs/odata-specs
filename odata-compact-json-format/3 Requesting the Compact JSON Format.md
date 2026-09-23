
-------

# ##sec Requesting the Compact JSON Format

The compact JSON format can be requested using the `Accept` header with
the media type `application/json` and the `compact=true` format parameter,
together with any other format parameters.

Alternatively, this format can be requested using the `$format` query
option in the request URL with the media type `application/json` and the
`compact=true` format parameter, together with any other format
parameters.

If specified, `$format` overrides any value specified in the `Accept`
header.

Because the `compact=true` format parameter selects a payload shape that a
receiver unaware of this specification will misinterpret, a service MUST
NOT return a compact response unless the client requested it with
`compact=true`.

A service unaware of this specification ignores the `compact` format
parameter, as [RFC2045](#rfc2045) requires of a MIME implementation for a
parameter whose name it does not recognize, and responds in the format
defined by [OData-JSON](#ODataJSON). Either response is safe to consume:
a response that is not compact is an [OData-JSON](#ODataJSON) payload,
which the [superset principle](#supersetprinciple) makes acceptable to a
receiver of compact payloads.

A client MUST NOT send a compact request body unless it has established
that the service supports the compact JSON format, either from the
[`Capabilities.SupportedFormats`](#AdvertisingSupport) annotation or from
out-of-band knowledge. A service that supports this format and receives a
request body labeled with `compact=true` that it cannot accept SHOULD
reject the request with `415 Unsupported Media Type`. A service unaware of
this specification reads such a body as an [OData-JSON](#ODataJSON)
payload and will in most cases reject it with `400 Bad Request`.

## ##subsec Format Parameters

The `compact` format parameter is defined by this document. Its name and
its value are case-insensitive, as are those of the format parameters
defined in [OData-JSON](#ODataJSON).

The format parameters defined in [OData-JSON](#ODataJSON) apply to the
compact JSON format with the meaning defined there, subject to the
following.

The `streaming` parameter is meaningful and MAY be specified. A compact
payload that meets the [payload ordering
constraints](#PayloadOrderingConstraints) SHOULD include
`streaming=true`.

The `IEEE754Compatible` parameter is meaningful and MUST be included if
`Edm.Int64` and `Edm.Decimal` numbers are represented as strings.

The `metadata` parameter is meaningful and MAY be specified with any of
the values defined in [OData-JSON](#ODataJSON). Note that `metadata=none`
does not remove the [`context`](#ControlInformationcontext) control
information from a compact payload: the context URL determines the
[positional property list](#positionalpropertylist) and is therefore
required for the payload to be interpretable at all. See [section
##ControlInformationcontext].

With `metadata=full`, control information is present for every instance,
so every instance takes a [wrapper object](#wrapperobject) carrying that
control information alongside its positional representation under `$`. The
saving on property names is retained; the saving overall is
correspondingly smaller.

## ##subsec Advertising Support

Services SHOULD advertise the supported media types by annotating the
entity container with the term [Capabilities.SupportedFormats]{.term}
defined in [OData-VocCap](#ODataVocCap), listing all available formats and
combinations of supported format parameters, including the `compact=true`
format parameter if the compact JSON format is supported by the service.

::: example
Example ##ex: a service advertising support for both the format defined in
[OData-JSON](#ODataJSON) and the compact JSON format
```json
"@Capabilities.SupportedFormats": [
  "application/json",
  "application/json;streaming=true",
  "application/json;compact=true",
  "application/json;streaming=true;compact=true"
]
```
:::
