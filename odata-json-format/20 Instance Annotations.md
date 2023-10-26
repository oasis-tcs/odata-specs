
-------

# ##sec Instance Annotations

Annotations are an extensibility mechanism
that allows services and clients to include information other than the
raw data in the request or response.

Annotations are name/value pairs that have an at (`@`) and a
dot (`.`) as part of the name. The part after the "at" sign
(`@`) is the _annotation identifier_. It consists of the
namespace or alias of the schema that defines the term, followed by a
dot (`.`), followed by the name of the term, optionally
followed by a hash (`#`) and a qualifier. The namespace or alias MUST be defined in the
metadata document, see [OData-CSDLJSON](#ODataCSDL) or [OData-CSDLXML](#ODataCSDL)

The annotation identifier `odata` is reserved for future
extensions of the protocol and format. Instance annotations MUST have a
namespace or alias that is different from `odata`.

Annotations can be applied to any name/value pair in a JSON payload that
represents a value of any type from the entity data model. Clients
should never error due to an unexpected annotation in a JSON payload.

Annotations are always expressed as name/value pairs. For entity data
model constructs represented as JSON objects the annotation name/value
pairs are placed within the object; for constructs represented as JSON
arrays or primitives they are placed next to the annotated model
construct. When annotating a payload that represents a
[single primitive or collection value](#IndividualPropertyorOperationResponse),
the annotations for the value appear next to the `value`
property and are not prefixed with a property name.

::: example
Example ##ex:
```json
{
  "@context": "http://host/service/$metadata#Customers",
  "@com.example.customer.setkind": "VIPs",
  "value": [
    {
      "@com.example.display.highlight": true,
      "ID": "ALFKI",
      "CompanyName@com.example.display.style": { "title": true, "order": 1 },
      "CompanyName": "Alfreds Futterkiste",
      "Orders@com.example.display.style#simple": { "order": 2 }
    }
  ]
}
```
:::

## ##subsec Annotate a JSON Object

When annotating a name/value pair for which the value is represented as
a JSON object, each annotation is placed within the object and
represented as a single name/value pair.

The name always starts with the "at" sign (`@`), followed
by the annotation identifier.

The value MUST be an appropriate value for the annotation.

## ##subsec Annotate a JSON Array or Primitive

When annotating a name/value pair for which the value is represented as
a JSON array or primitive value, each annotation that applies to this
name/value pair MUST be represented as a single name/value pair and
placed immediately prior to the annotated name/value pair, with the
exception of the [`nextLink`](#ControlInformationnextLinkodatanextLink)
or [`collectionAnnotations`](#ControlInformationcollectionAnnotationsodatacollectionAnnotations)
control information, which can appear immediately
before or after the annotated collection.

The name is the same as the name of the property or name/value pair
being annotated, followed by the "at" sign (`@`), followed by
the annotation identifier.

The value MUST be an appropriate value for the annotation.

## ##subsec Annotate a Primitive Value within a JSON Array

Individual primitive elements within a JSON array can be annotated by
applying the [`collectionAnnotations`](#ControlInformationcollectionAnnotationsodatacollectionAnnotations)
control information to the array containing the primitive
member.

The control information must come with other annotations or control
information immediately before or after the collection valued property.
The name of the property representing the control information is the
same as the name of the collection-valued property, followed by the "at"
sign (`@`), followed by the
[`collectionAnnotations`](#ControlInformationcollectionAnnotationsodatacollectionAnnotations)
identifier.

-------

# ##sec Error Handling

OData requests may return a well formed [error response](#ErrorResponse),
an [in-stream error](#InStreamError), or error information
[within a success payload](#ErrorInformationinaSuccessPayload).

## ##subsec Error Response

The error response MUST be a single JSON object. This object MUST have a
single name/value pair named `error`. The value must be an
OData error object.

The OData error object MUST contain name/value pairs with the names
`code` and `message`, and it MAY contain name/value
pairs with the names `target`, `details`, and `innererror`.

The value for the `code` name/value pair is a non-empty
language-independent string. Its value is a service-defined error code.
This code serves as a sub-status for the HTTP error code specified in
the response. It cannot be `null`.

The value for the `message` name/value pair is a non-empty,
language-dependent, human-readable string describing the error. The
`Content-Language` header MUST contain the language code from
[RFC5646](#rfc5646) corresponding to the language in which the
value for message is written. It cannot be `null`.

The value for the `target` name/value pair is a potentially empty string indicating the target of
the error (for example, the name of the property in error). It can be `null`.

The value for the `details` name/value pair MUST be an array
of JSON objects that MUST contain name/value pairs for
`code` and `message`, and MAY contain a
name/value pair for `target`, as described above.

The value for the `innererror` name/value pair MUST be an
object. The contents of this object are service-defined. Usually this
object contains information that will help debug the service.

Service implementations SHOULD carefully consider which information to
include in production environments to guard against potential security
concerns around information disclosure.

Error responses MAY contain [annotations](#InstanceAnnotations) in
any of its JSON objects.

::: example
Example ##ex:
```json
{
  "error": {
    "code": "err123",
    "message": "Unsupported functionality",
    "target": "query",
    "details": [
      {
      "code": "forty-two",
      "target": "$search",
      "message": "$search query option not supported"
      }
    ],
    "innererror": {
      "trace": [...],
      "context": {...}
    }
  }
}
```
:::

## ##subsec In-Stream Error

In the case that a service encounters an error after sending a success
status to the client, the service MUST leave the response malformed.
This can be achieved by immediately stopping response serialization and
thus omitting (among others) the end-object character of the top-level
JSON object in the response.

Services MAY include the header `OData-Error` as a trailing
header if supported by the transport protocol (e.g. with HTTP/1.1 and
chunked transfer encoding, or with HTTP/2), see
[OData-Protocol](#ODataProtocol).

The value of the `OData-Error` trailing header is an OData
error object as defined in the preceding chapter, represented in a
header-appropriate way:

- All optional whitespace (indentation and line breaks) is removed, especially
  (in hex notation) `09`, `0A` and `0D`

- Control characters (`00` to `1F` and `7F`) and
  Unicode characters beyond `00FF` within JSON strings are
  encoded as `\uXXXX` or `\uXXXX\uXXXX` (see
  [RFC8259](#rfc8259), section 7)

::: example
Example ##ex: note that this is one HTTP header line without any line
breaks or optional whitespace
```json
OData-error: {"code":"err123","message":"Unsupported
functionality","target":"query","details":[{"code":"forty-two","target":"$search","message":"$search
query option not supported"}]}
```
:::

## ##subsec Error Information in a Success Payload

Services may return error information within a success payload; for
example, if the client has specified the
`continue-on-error` preference.

### ##subsubsec Primitive Value Errors

Primitive values that are in error are annotated with the
`Core.ValueException` term, see
[OData-VocCore](#ODataVocCore). In this case, the payload MAY include
an approximation of the value and MAY specify a string representation of
the exact value in the `value` property of the annotation.

### ##subsubsec Structured Type Errors

Structured types that are in error can be represented within a success
payload only if the client has specified the
`continue-on-error` preference. Such items are annotated with the
`Core.ResourceException` term, see
[OData-VocCore](#ODataVocCore). The annotation MAY include a
`retryLink` property that can be used by the client to
attempt to re-fetch the resource.

### ##subsubsec Collection Errors

Collections within a success payload can contain primitive values that
are in error, or structured values that are in error, if the client has
specified the `continue-on-error`
preference. Such elements are annotated as described above. Primitive
elements within a collection are annotated using the
[`collectionAnnotations`](#ControlInformationcollectionAnnotationsodatacollectionAnnotations)
control information.

Services can return partial collections within a success payload, for
example, if they encounter an error while retrieving the collection and
the client has specified the
`continue-on-error` preference. In
this case, the service MUST include a
[`nextLink`](#ControlInformationnextLinkodatanextLink).
The [`nextLink`](#ControlInformationnextLinkodatanextLink) can be used to attempt retrieving the remaining members of the collection and could return an error indicating that the remaining
members are not available.

-------

# ##sec Extensibility

Implementations can add [instance annotations](#InstanceAnnotations)
of the form `@namespace.termname` or
`property@namespace.termname` to any JSON object, where
`property` MAY or MAY NOT match the name of a name/value pair
within the JSON object. However, the namespace MUST NOT start with
`odata` and SHOULD NOT be required to be understood by the
receiving party in order to correctly interpret the rest of the payload
as the receiving party MUST ignore unknown annotations not defined in
this version of the OData JSON Specification.
