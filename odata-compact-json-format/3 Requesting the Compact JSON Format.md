
-------

# ##sec Requesting the Compact JSON Format

The compact JSON format can be requested using the `$format` query option
in the request URL with the media type `application/json` followed by the
`compact=true` format parameter, optionally followed by other format
parameters.

Alternatively, this format can be requested using the `Accept` header with
the media type `application/json` followed by the `compact=true` format
parameter, optionally followed by other format parameters.

If specified, `$format` overrides any value specified in the `Accept`
header.

The names and values of the format parameters are case-insensitive.

A service that does not support the compact JSON format MUST NOT return a
compact payload. Because the `compact` format parameter selects a payload
shape that a receiver unaware of this specification will misinterpret, a
service MUST NOT return a compact response unless the client requested it
with `compact=true`, and MUST return `406 Not Acceptable` if the client
requests `compact=true` and the service does not support it.

A client MUST NOT send a compact request body unless it has established
that the service supports the compact JSON format, either from the
[`Capabilities.SupportedFormats`](#AdvertisingSupport) annotation or from
out-of-band knowledge. A service that receives a request body labeled with
`compact=true` that it does not support MUST reject the request with
`415 Unsupported Media Type`.

## ##subsec Format Parameters

The format parameters defined in [OData-JSON](#ODataJSON) apply to the
compact JSON format with the meaning defined there, subject to the
following.

The `streaming` parameter is meaningful and MAY be specified. A positional
representation is inherently ordered, and a compact payload that meets the
[payload ordering constraints](#PayloadOrderingConstraints) MUST include
`streaming=true`.

The `IEEE754Compatible` parameter is meaningful and MUST be included if
`Edm.Int64` and `Edm.Decimal` numbers are represented as strings.

The `metadata` parameter is meaningful and MAY be specified with the value
`minimal` or `none`. Note that `metadata=none` does not remove the
[`context`](#ControlInformationcontext) control information from a compact
payload: the context URL determines the [positional property
list](#positionalpropertylist) and is therefore required for the payload
to be interpretable at all. See [section ##ControlInformationcontext].

The value `metadata=full` is NOT RECOMMENDED with `compact=true`. Full
metadata requires control information to be present for every instance,
which forces every instance into a [wrapper object](#wrapperobject) and
defeats the purpose of the format. Services MAY reject the combination
with `406 Not Acceptable`.

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
  "application/json;IEEE754Compatible=true",
  "application/json;IEEE754Compatible=true;compact=true"
]
```
:::
