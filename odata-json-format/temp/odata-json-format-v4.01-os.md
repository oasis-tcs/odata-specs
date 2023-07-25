# {#sec_BatchRequestsandResponses}[19[ ]{style="font:7.0pt "Times New Roman""}][Batch Requests and Responses](#BatchRequestsandResponses) {#batch-requests-and-responses style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

## {#sec_BatchRequest}[19.1] [Batch Request](#BatchRequest)

A JSON batch request body consists of a single JSON object that MUST
contain the name/value pair `requests` and MAY contain
[annotations](#InstanceAnnotations). It does not contain the
`context` control information.

The value of `requests` is an array of request objects, each
representing an individual request. Note: an individual request MUST NOT
itself be a batch request.

A _request object_ MUST contain the name/value pairs `id`,
`method` and `url`, and it MAY contain the
name/value pairs `atomicityGroup`, `dependsOn`[[,
]{style="font-family:"Arial",sans-serif"}]{.Datatype}`if`[[,
]{style="font-family:"Arial",sans-serif"}]{.Datatype}`headers`,
and `body`.

The value of `id` is a string containing the request
identifier of the individual request, see
[OData-Protocol](#ODataProtocol). It MUST NOT be identical to the value
of any other request identifier nor any `atomicityGroup`
within the batch request.

Note: the `id` name/value pair corresponds to the
`Content-ID` header in the multipart batch format specified
in [OData-Protocol](#ODataProtocol).

The value of `method` is a string that MUST contain one of
the literals `delete`, `get`, `patch`,
`post`, or `put`. These literals are
case-insensitive.

The value of `url` is a string containing the individual
request URL. The URL MAY be an absolute path (starting with a forward
slash `/`) which is appended to scheme, host, and port of the
batch request URL, or a relative path (not starting with a forward slash
`/`).

If the first segment of a relative path starts with a `$`
character and is not identical to the name of a top-level system
resource (`$batch`, `$crossjoin,`
`$all,` `$entity`, `$root,`
`$id`, `$metadata`, or other system resources
defined according to the
`OData-Version` of the protocol
specified in the request), then this first segment is replaced with the
URL of the entity created by or returned from a preceding request whose
`id` value is identical to the value of the first segment
with the leading `$` character removed. The `id`
of this request MUST be specified in the `dependsOn`
name/value pair.

Otherwise, the relative path is resolved relative to the batch request
URL (i.e. relative to the service root).

The value of `atomicityGroup` is a string whose content MUST
NOT be identical to any value of `id` within the batch
request, and which MUST satisfy the rule `request-id` in
[OData-ABNF](#ODataABNF). All request objects with the same value for
`atomicityGroup` MUST be adjacent in the
`requests` array. These requests are processed as an atomic
operation and MUST either all succeed, or all fail.

Note: the atomicity group is a generalization of the change set in the
multipart batch format specified in [OData-Protocol](#ODataProtocol).

The value of `dependsOn` is an array of strings whose values
MUST be values of either `id` or `atomicityGroup`
of preceding request objects; forward references are not allowed. If a
request depends on another request that is part of a different atomicity
group, the atomicity group MUST be listed in `dependsOn`. In
the absence of the optional `if` member a request that
depends on other requests or atomicity groups is only executed if those
requests were executed successfully, i.e. with a `2xx`
response code. If one of the requests it depends on has failed, the
dependent request is not executed and a response with status code of
`424 Failed Dependency`[[ is returned for it as part of the
batch response.]{style="font-family:"Arial",sans-serif"}]{.Datatype}

The `if` member can specify an alternative condition for
executing the dependent request. Its value MUST be URL expression (see
[OData-URL](#ODataURL)) that evaluates to a Boolean value.
The URL expression syntax is extended and additionally allows

- `$\<content-id\>/$succeeded`
  to check if the referenced request has succeeded

- `$\<content-id\>`
  to reference the response body of the referenced request

- `$\<content-id\>/\<path\>`
  to reference a part of the response body

Services SHOULD advertise support of the `if` member by
specifying the property
`RequestDependencyConditionsSupported` in the
[`Capabilities.BatchSupport`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#BatchSupport)
term applied to the entity container, see
[OData-VocCap](#ODataVocCap)[[. If a service does not
support request dependencies, the dependent request MUST fail with
]{style="color:windowtext"}]{.MsoHyperlink}[424 Failed
Dependency]{.Datatype}[[, and if the dependent request is part of an
atomicity group, all requests in that group fail with
]{style="color:windowtext"}]{.MsoHyperlink}[424 Failed
Dependency]{.Datatype}[[ with no changes
applied]{style="color:windowtext"}]{.MsoHyperlink}.

The value of `headers` is an object whose name/value pairs
represent request headers. The name of each pair MUST be the lower-case
header name; the value is a string containing the header-encoded value
of the header. The `headers` object MUST contain a name/value
pair with the name `content-type` whose value is the media
type.

The value of `body` can be `null`, which is
equivalent to not specifying the `body` name/value pair.

For media type `application/json`[[ or one of its subtypes,
optionally with format parameters, the value of
]{style="font-family:"Arial",sans-serif"}]{.Datatype}`body`[[
is JSON.]{style="font-family:"Arial",sans-serif"}]{.Datatype}

For media types of top-level type `text`, for example
`text/plain`, the value of `body` is a string
containing the value of the request body.

For all other media types the value of `body` is a string
containing the base64url-encoded value of the request body. In this case
the body content can be compressed or chunked if this is correctly
reflected in the `Transfer-Encoding` header.

A `body` MUST NOT be specified if the `method` is
`get` or `delete`.
 
::: example
Example ##ex: a batch request that contains
the following individual requests in the order listed

1.[     ]{style="font:7.0pt "Times New Roman""}A query request

2.[     ]{style="font:7.0pt "Times New Roman""}An atomicity group that
contains the following requests:

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Insert
entity

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Update
entity

3.[     ]{style="font:7.0pt "Times New Roman""}A second query request

Note: For brevity, in the example, request bodies are excluded in favor
of English descriptions inside `\<\>` brackets and
`OData-Version` headers are omitted.
```json
POST /service/$batch HTTP/1.1\
Host: host\
OData-Version: 4.01\
Content-Type: application/json\
Content-Length: \###
 

[{
  "requests": \

  {
    "id": "0",
    "method": "get",
    "url": "/service/Customers('ALFKI')"
  },
  {
    "id": "1",
    "atomicityGroup": "group1",
    "dependsOn": \[ "0" \],
    "method": "patch",
    "url": "/service/Customers('ALFKI')",
    "headers": {
      "Prefer": "return=minimal"
    },
    "body": \<JSON representation of changes to Customer
ALFKI\>
  },
  {
    "id": "2",
    "atomicityGroup": "group1",
    "method": "post",
    "url": "/service/Customers",
    "body": \<JSON representation of a new Customer
entity\>
  },
  {
    "id": "3",
    "dependsOn": \[ "group1" \],
    "method": "get",
    "url": "/service/Products"
  }
  \]
}
```
:::

## {#sec_ReferencingNewEntities}[[19.2 ]{style="color:#0000EE"}][Referencing New Entities](#ReferencingNewEntities)

The entity returned by a preceding request can be referenced in the
request URL of subsequent requests.
 
::: example
Example ##ex: a batch request that contains the following operations in
the order listed:

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Insert
a new entity (with `id = 1`)

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Insert
a second new entity (references request with `id = 1`)
```json
POST /service/$batch HTTP/1.1\
Host: host\
OData-Version: 4.01\
Content-Type: application/json\
Content-Length: \###\
\
{
  "requests": \

  {
    "id": "1",
    "method": "post",
    "url": "/service/Customers",
    "body": \<JSON representation of a new Customer
entity\>
  },
  {
    "id": "2",
    "dependsOn": \[ "1" \]
    "method": "post",
    "url": "$1/Orders",
    "body": \<JSON representation of a new
Order\>
  }
  \]
}
```
:::

## {#sec_ReferencinganETag}[[19.3 ]{style="color:#0000EE"}][Referencing an ETag](#ReferencinganETag)
 
::: example
Example ##ex: a batch request that contains the following operations in
the order listed:

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Get
an Employee (with `id` = 1)

]{style="font:7.0pt "Times New Roman""}]{style="font-family:Symbol;font-style:normal"}Update
the salary only if the employee has not changed
```json
POST /service/$batch HTTP/1.1\
Host: host\
OData-Version: 4.01\
Content-Type: application/json\
Content-Length: \###\
\

[{
  "requests": \

  {
    "id": "1",
    "method": "get",
    "url": "/service/Employees(0)",
    "headers": {
      "accept": "application/json"
    }
  },
  {
    "id": "2",
    "dependsOn": \[ "1" \],
    "method": "patch",
    "url": "/service/Employees(0)",
    "headers": {
      "if-match": "$1"
    },
    "body": {
       "Salary": 75000
    }
  }
  \]
}
```
:::

## {#sec_ProcessingaBatchRequest}19.4 [Processing a Batch Request](#ProcessingaBatchRequest)

All requests in an atomicity group represent a single change unit. A
service MUST successfully process and apply all the requests in the
atomicity group or else apply none of them. It is up to the service
implementation to define rollback semantics to undo any requests within
an atomicity group that may have been applied before another request in
that same atomicity group failed.

The service MAY process the individual requests and atomicity groups
within a batch request, or individual requests within an atomicity
group, in any order that is compatible with the dependencies expressed
with the `dependsOn` name/value pair. Individual requests and
atomicity groups that do not specify the `dependsOn`
name/value pair may be processed in parallel. Clients that are only
interested in completely successful batch responses MAY specify the
preference
[continue-on-error=false]{style="font-family:"Courier New";color:#3B006F"}
to indicate that the service need not spend cycles on further processing
once an error occurs in one of the dependency chains. In this case the
response MAY omit response objects for requests that have not been
processed. If the preference `continue-on-error` is not
specified, or specified with a value of `true`, all requests
are processed according to their dependencies.

The service MUST include the `id` name/value pair in each
response object with the value of the request identifier that the client
specified in the corresponding request, so clients can correlate
requests and responses.

## {#sec_BatchResponse}[19.5] [Batch Response](#BatchResponse)

A JSON batch response body consists of a single JSON object that MUST
contain the name/value pair `responses` and MAY contain
[annotations](#InstanceAnnotations). It does not contain the
`context` control information.

The value of `responses` is an array of response objects,
each representing an individual response.

A JSON batch response MAY be a partial result containing the
[[nextLink]{style="font-family:
"Courier New""}](#ControlInformationnextLinkodatanextLink) control
information. This allows services to chunk results into manageable
pieces, or to return results for already processed requests and continue
processing the remaining individual requests while waiting for the
client to fire a `GET` request to the next link.

In a response to a batch request using the multipart format defined in
[OData-Protocol](#ODataProtocol) [[the response objects
MUST appear in the same order as required for multipart batch responses
because the
]{style="color:windowtext"}]{.MsoHyperlink}`Content-ID`[[
header is not required outside of change sets. Response objects
corresponding to requests that specify a
]{style="color:windowtext"}]{.MsoHyperlink}`Content-ID`[[
header MUST contain the
]{style="color:windowtext"}]{.MsoHyperlink}`id`[[ name/value
pair, and the value of
]{style="color:windowtext"}]{.MsoHyperlink}`id`[[ MUST be the
value of the
]{style="color:windowtext"}]{.MsoHyperlink}`Content-ID`[[
header of the corresponding request. This is necessarily the case for
requests contained within a change set. Responses to requests within a
change set MUST contain the
]{style="color:windowtext"}]{.MsoHyperlink}`atomicityGroup`[[
name/value pair with a value common within a change set and unique
across change sets.]{style="color:windowtext"}]{.MsoHyperlink}

[[In a response to a batch request using the JSON batch request format
specified in the preceding section the response objects MAY appear in
any order, and each response object MUST contain the
]{style="color:windowtext"}]{.MsoHyperlink}`id`[[ name/value
pair with the same value as in the corresponding request object. If the
corresponding request object contains the
]{style="color:windowtext"}]{.MsoHyperlink}`atomicityGroup`[[
name/value pair, it MUST also be present in the response object with the
same value.]{style="color:windowtext"}]{.MsoHyperlink}

If any response within an atomicity group returns a failure code, all
requests within that atomicity group are considered failed, regardless
of their individual returned status code. The service MAY return [424
Failed Dependency]{.Datatype}[[
]{style="font-family:"Arial",sans-serif"}]{.Datatype}for statements
within an atomicity group that fail or are not attempted due to other
failures within the same atomicity group.

A response object MUST contain the name/value pair `status`
whose value is a number representing the HTTP status code of the
response to the individual request.

The response object MAY contain the name/value pair `headers`
whose value is an object with name/value pairs representing response
headers. The name of each pair MUST be the lower-case header name; the
value is a string containing the header-encoded value of the header.

The response object MAY contain the name/value pair `body`
which follows the same rules as within [request
objects](#BatchRequest).

If the media type is not exactly equal to `application/json`
(i.e. it is a subtype or has format parameters), the
`headers` object MUST contain a name/value pair with the name
`content-type` whose value is the media type.

Relative URLs in a response object follow the rules for [relative
URLs](#RelativeURLs) based on the request URL of the corresponding
request. Especially: URLs in responses MUST NOT contain
`$`-prefixed request identifiers.
 
::: example
Example ##ex: referencing the batch request example 47 above, assume all
the requests except the final query request succeed. In this case the
response would be
```json
{
  "responses": \

  {
    "id": "0",
    "status": 200,
    "body": \<JSON representation of the Customer entity with key
ALFKI\>
  },
  {
    "id": "1",
    "status": 204
  },
  {
    "id": "2",
     "status": 201,
    "headers": {
      "location":
"http://host/service.svc/Customer('POIUY')"
    },
    "body": \<JSON representation of the new Customer
entity\>
  },
  {
    "id": "3",
    "status": 404,
    "body": \<Error message\>
  }
  \]
}
```
:::

## {#sec_AsynchronousBatchRequests}{#\_Ref358207547}{#\_Instance_Annotations}19.6 [Asynchronous Batch Requests](#AsynchronousBatchRequests)

A batch request that specifies the [respond-async]{style="font-family:
"Courier New""} preference MAY be executed asynchronously. This means
that the "outer" batch request is executed asynchronously; this
preference does not automatically cascade down to the individual
requests within the batch. After successful execution of the batch
request the response to the batch request is returned in the body of a
response to an interrogation request against the status monitor resource
URL, see section "Asynchronous Requests" in
[OData-Protocol](#ODataProtocol).

A service MAY return interim results to an asynchronously executing
batch. It does this by responding with `200 OK` to a
`GET` request to the monitor resource and including a
[`nextLink`](#ControlInformationnextLinkodatanextLink)
control information in the JSON batch response, thus signaling that the
response is only a partial result. A subsequent `GET` request
to the next link MAY result in a [202
Accepted]{style="font-family:"Courier New""} response with a
`location` header pointing to a new status monitor resource.
 
::: example
Example ##ex: referencing the example 47 above again, assume that the
request is sent with the `respond-async` preference. This
results in a `202` response pointing to a status monitor
resource:
````json
HTTP/1.1 202 Accepted\
Location: http://service-root/async-monitor-0\
Retry-After: \###\
\
:::

When interrogating the monitor URL only the first request in the batch
has finished processing and all the remaining requests are still being
processed. The service signals that asynchronous processing is
"finished" and returns a partial result with the first response and a
next link. The client did not explicitly accept
`application/http`, so the response is "unwrapped" and only
indicates with the `AsyncResult` header that it is a response
to a status monitor resource:
```json
HTTP/1.1 200 Ok\
AsyncResult: 200\
OData-Version: 4.01\
Content-Length: \####\
Content-Type: application/json\
\

[{
  "responses": \

  {
    "id": "0",
    "status": 200,
    "body": \<JSON representation of the Customer entity with key
ALFKI\>
  \],
  "@nextLink": "...?$skiptoken=YmF0Y2gx"
}
````

Client makes a `GET` request to the next link and receives a
`202` response with the location of a new monitor resource.
````json
HTTP/1.1 202 Accepted\
Location: http://service-root/async-monitor-1\
Retry-After: \###\
\
:::

After some time a `GET` request to the monitor resource
returns the remainder of the result[[.
]{style="font-family:"Arial",sans-serif"}]{.Datatype}
```json
HTTP/1.1 200 Ok\
AsyncResult: 200\
OData-Version: 4.01
[Content-Length: \####\
Content-Type: application/json\
\

[{
  "responses": \

  {
    "id": "1",
    "status": 204
  },
  {
    "id": "2",
    "status": 201,
    "headers": {
      "location":
"http://host/service.svc/Customer('POIUY')"
    },
    "body": \<JSON representation of the new Customer
entity\>
  },
  {
    "id": "3",
    "status": 404,
    "body": \<Error message\>
  }
  \]
}
````

In addition to the above interaction pattern individual requests within
a batch with no other requests depending on it and not part of an
atomicity group MAY be executed asynchronously if they specify the
`respond-async` preference and if
the service responds with a JSON batch response. In this case the
`response` array contains a response object for each
asynchronously executed individual request with a `status`[[
]{style="font-family:"Arial",sans-serif"}]{.Datatype}of
`202`, a `location` header pointing to an
individual status monitor resource, and optionally a
`retry-after` header.
 
::: example
Example ##ex: the first individual request is processed asynchronously,
the second synchronously, the batch itself is processed synchronously
```json
HTTP/1.1 200 OK\
OData-Version: 4.01\
Content-Length: \####\
Content-Type: application/json\
\

[{
  "responses": \

  {
    "id": "0",
    "status": 202,
    "headers": {
      "location":
"http://service-root/async-monitor-0"
    }
  },
  {
    "id": "1",
    "status": 204
  }
  \]
}
```
::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_InstanceAnnotations}[20[ ]{style="font:7.0pt "Times New Roman""}][Instance Annotations](#InstanceAnnotations) {#instance-annotations style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

[Annotations]{#\_Representing_Annotations} are an extensibility mechanism
that allows services and clients to include information other than the
raw data in the request or response.

Annotations are name/value pairs that have an at (`@`) and a
dot (`.`) as part of the name. The part after the "at" sign
(`@`) is the _annotation_ _identifier_. It consists of the
namespace or alias of the schema that defines the term, followed by a
dot (`.`), followed by the name of the term, [optionally
followed by a hash
(]{style="color:#333333;background:white"}`\#`[) and a
qualifier.]{style="color:
#333333;background:white"} The namespace or alias MUST be defined in the
metadata document, see [OData-CSDLJSON](#ODataCSDL) or
[OData-CSDLXML[.]{style="color:windowtext"}](#ODataCSDL)

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
construct. [When annotating a payload that represents a
][single primitive or collection
value](#IndividualPropertyorOperationRespons)[, the annotations for
the value appear next to the ]`value`
[property and are not prefixed with a property
name.
Example ##ex:
```json
{
  "@context":
"http://host/service/$metadata#Customers",
  "@com.example.customer.setkind": "VIPs",
  "value": \

  {
    "@com.example.display.highlight": true,
    "ID": "ALFKI",
    "CompanyName@com.example.display.style": { "title": true,
"order": 1 },
    "CompanyName": "Alfreds Futterkiste",
    "Orders@com.example.display.style#simple": { "order": 2
}
  }
  \]
}
```
:::

## {#sec_AnnotateaJSONObject}[20.1] [Annotate a JSON Object](#AnnotateaJSONObject)

[When annotating a name/value pair for which the value is represented as
a JSON object, each annotation is placed within the object and
represented as a single name/value pair.
The name always starts with the "at" sign (`@`), followed
by the annotation identifier.

The value MUST be an appropriate value for the annotation.

## {#sec_AnnotateaJSONArrayorPrimitive}[20.2] [Annotate a JSON Array or Primitive](#AnnotateaJSONArrayorPrimitive)

W[hen annotating a name/value pair for which the value is represented as
a JSON array or primitive value, each annotation that applies to this
name/value pair MUST be represented as a single name/value pair and
placed immediately prior to the annotated name/value pair, with the
exception of the
][`nextLink`](#ControlInformationnextLinkodatanextLink)[
or
][`collectionAnnotations`](#ControlInformationcollectionAnnotati)[
control information],[ which can appear immediately
before or after the annotated collection.
The name is the same as the name of the property or name/value pair
being annotated, followed by the "at" sign (`@`), followed by
the annotation identifier.

The value MUST be an appropriate value for the annotation.

## {#sec_AnnotateaPrimitiveValuewithinaJSONAr}[20.3] [Annotate a Primitive Value within a JSON Array](#AnnotateaPrimitiveValuewithinaJSONAr)

Individual primitive elements within a JSON array can be[ annotated by
applying the
][`collectionAnnotations`](#ControlInformationcollectionAnnotati)[
control information to the array containing the primitive
member.
The control information must come with other annotations or control
information immediately before or after the collection valued property.
The name of the property representing the control information is the
same as the name of the collection-valued property, followed by the "at"
sign (`@`), followed by the
[`collectionAnnotations`](#ControlInformationcollectionAnnotati)
identifier.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_ErrorHandling}{#\_Representing_Errors_in}21[ ]{style="font:7.0pt "Times New Roman""}[Error Handling](#ErrorHandling) {#error-handling style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

OData requests may return a well formed [error
response](#ErrorResponse), an [in-stream
error](#InStreamError){#\_Hlt11961899}, or error information
[within a success payload](#ErrorInformationinaSuccessPayload).

## {#sec_ErrorResponse}[21.1] [Error Response](#ErrorResponse)

The error response MUST be a single JSON object. This object MUST have a
single name/value pair named `error`. The value must be an
OData error object.

The OData error object MUST contain name/value pairs with the names
`code` and `message`, and it MAY contain name/value
pairs with the names [target]{style="font-family:
"Courier New""}, `details`, and
`innererror`.

The value for the `code` name/value pair is a non-empty
language-independent string. Its value is a service-defined error code.
This code serves as a sub-status for the HTTP error code specified in
the response. It cannot be `null`.

The value for the `message` name/value pair is a non-empty,
language-dependent, human-readable string describing the error. The
`Content-Language` header MUST contain the language code from
[RFC5646](#rfc5646) corresponding to the language in which the
value for message is written. It cannot be `null`.

The value for the `target`
name/value pair is a potentially empty string indicating the target of
the error (for example, the name of the property in error). It can be
`null`.

The value for the `details` name/value pair MUST be an array
of JSON objects that MUST contain name/value pairs for
`code` and
`message`, and MAY contain a
name/value pair for `target`, as
described above.

The value for the `innererror` name/value pair MUST be an
object. The contents of this object are service-defined. Usually this
object contains information that will help debug the service.[
]{style="color:black;background:white"}

[Service implementations SHOULD carefully consider which information to
include in production environments to guard against potential security
concerns around information
disclosure.]{style="color:black;background:white"}

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
  "details": \

    {
     "code": "forty-two",
     "target": "$search", 
     "message": "$search query option not
supported"
    }
  \],
  "innererror": {
    "trace": \[...\],
    "context": {...}
  }
  }
}
```
:::

## {#\_Ref356829963}{#sec_InStreamError}{#\_The_Content-Type_Header}{#\_Payload_Ordering_Constraints}21.2 [In-Stream Error](#InStreamError)

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

- All
  optional whitespace (indentation and line breaks) is removed, especially
  (in hex notation) `09`, `0A` and `0D`

- Control
  characters (`00` to `1F` and `7F`) and
  Unicode characters beyond `00FF` within JSON strings are
  encoded as `\uXXXX` or `\uXXXX\uXXXX` (see
  [RFC8259](#rfc8259), section 7)
 
::: example
Example ##ex: note that this is one HTTP header line without any line
breaks or optional whitespace
```json
OData-error: {"code":"err123","message":"Unsupported
functionality","target":"query","details":\[{"code":"forty-two","target":"$search","message":"$search
query option not supported"}\]}:::

## {#sec_ErrorInformationinaSuccessPayload}[21.3] [Error Information in a Success Payload](#ErrorInformationinaSuccessPayload)

Services may return error information within a success payload; for
example, if the client has specified the
`continue-on-error` preference.

### {#sec_PrimitiveValueErrors}[21.3.1] [Primitive Value Errors](#PrimitiveValueErrors)

Primitive values that are in error are annotated with the
`Core.ValueException` term, see
[OData-VocCore](#ODataVocCore). In this case, the payload MAY include
an approximation of the value and MAY specify a string representation of
the exact value in the `value` property of the annotation.

### {#sec_StructuredTypeErrors}[21.3.2] [Structured Type Errors](#StructuredTypeErrors)

Structured types that are in error can be represented within a success
payload only if the client has specified the
[continue-on-error]{style="font-family:
"Courier New""} preference. Such items are annotated with the
`Core.ResourceException` term, see
[OData-VocCore](#ODataVocCore). The annotation MAY include a
`retryLink` property that can be used by the client to
attempt to re-fetch the resource.

### {#sec_CollectionErrors}[21.3.3] [Collection Errors](#CollectionErrors)

Collections within a success payload can contain primitive values that
are in error, or structured values that are in error, if the client has
specified the `continue-on-error`
preference. Such elements are annotated as described above. Primitive
elements within a collection are annotated using the
[`collectionAnnotations`](#ControlInformationcollectionAnnotati)
control information.

Services can return partial collections within a success payload, for
example, if they encounter an error while retrieving the collection and
the client has specified the
`continue-on-error` preference. In
this case, the service MUST include a
[`nextLink`](#ControlInformationnextLinkodatanextLink).
The [[nextLink]{style="font-family:
"Courier New""}](#ControlInformationnextLinkodatanextLink)[
]{.Datatype}can be used to attempt retrieving the remaining members of
the collection and could return an error indicating that the remaining
members are not available.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_Extensibility}[22[ ]{style="font:7.0pt "Times New Roman""}][Extensibility](#Extensibility) {#extensibility style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

Implementations can add [instance annotations](#InstanceAnnotations)
of the form `@namespace.termname` or
`property@namespace.termname` to any JSON object, where
`property` MAY or MAY NOT match the name of a name/value pair
within the JSON object. However, the namespace MUST NOT start with
`odata` and SHOULD NOT be required to be understood by the
receiving party in order to correctly interpret the rest of the payload
as the receiving party MUST ignore unknown annotations not defined in
this version of the OData JSON Specification.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_SecurityConsiderations}[23[ ]{style="font:7.0pt "Times New Roman""}][Security Considerations](#SecurityConsiderations) {#security-considerations style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

This specification raises no security issues.

This section is provided as a service to the application developers,
information providers, and users of OData version 4.0 giving some
references to starting points for securing OData services as specified.
OData is a REST-full multi-format service that depends on other services
and thus inherits both sides of the coin, security enhancements and
concerns alike from the latter.

For JSON-relevant security implications please cf. at least the relevant
subsections of [RFC8259](#rfc8259) as starting point.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}

# {#sec_Conformance}[24[ ]{style="font:7.0pt "Times New Roman""}][Conformance](#Conformance) {#conformance style="margin-left:19.85pt;text-indent:-19.85pt"}

:::

Conforming clients MUST be prepared to consume a service that uses any
or all of the constructs defined in this specification. The exception to
this are the constructs defined in [Delta Response](#DeltaPayload),
which are only required for clients that request changes.

 

In order to be a conforming _consumer_ of the OData JSON format, a
client or service:

1.[     ]{style="font:7.0pt "Times New Roman""}MUST either:

a.[     ]{style="font:7.0pt "Times New Roman""}understand
`metadata=minimal` (section 3.1.1) or

b.[     ]{style="font:7.0pt "Times New Roman""}explicitly specify
`metadata=none` (section 3.1.3) or `metadata=full`
(section 3.1.2) in the request (client)

2.[     ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
consume a response with full metadata

3.[     ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
receive all data types (section 7.1)

a.[      ]{style="font:7.0pt "Times New Roman""}defined in this
specification (client)

b.[      ]{style="font:7.0pt "Times New Roman""}exposed by the service
(service)

4.[     ]{style="font:7.0pt "Times New Roman""}MUST interpret all
`odata` control information defined according to the
`OData-Version` header of the
payload (section 4.5)

5.[     ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
receive any annotations and control information not
defined in the `OData-Version`
header of the payload (section 21.2)

6.[     ]{style="font:7.0pt "Times New Roman""}MUST NOT require
`streaming=true` in the
`Content-Type` header (section 4.4)

7.[     ]{style="font:7.0pt "Times New Roman""}MUST be a conforming
consumer of the OData 4.0 JSON format, for payloads with an
`OData-Version` header value of
`4.0`.

a.[      ]{style="font:7.0pt "Times New Roman""}MUST accept the[
odata.]{style="font-family:"Courier New""} prefix, where defined, on
[format parameters](#ControllingtheAmountofControlInformationinResponses) and
[control information](#ControlInformation)

b.[      ]{style="font:7.0pt "Times New Roman""}MUST accept the [\#
]{style="font-family:"Courier New""}prefix in
[`@odata.type`](#ControlInformationtypeodatatype)
values

c.[       ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
handle binding through the use of the
[`@odata.bind`](#BindOperation)
property in payloads to a `PATCH`,
`PUT`, or
[POST]{style="font-family:
"Courier New""} request

d.[      ]{style="font:7.0pt "Times New Roman""}MUST accept
`TargetId` within in a [deleted
link](#DeletedLink) for a relationship with a maximum cardinality of
one

e.[      ]{style="font:7.0pt "Times New Roman""}MUST accept the string
values `-INF`,
`INF`, and
[NaN]{style="font-family:
"Courier New""} for single and double values

f.[        ]{style="font:7.0pt "Times New Roman""}MUST support
property annotations that appear immediately before or after the
property they annotate

8.[     ]{style="font:7.0pt "Times New Roman""}MAY be a conforming
consumer of the OData 4.01 JSON format, for payloads with an
`OData-Version` header value of
`4.01`.

a.[      ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
interpret [control information](#ControlInformation) with or without
the `odata.` prefix

b.[      ]{style="font:7.0pt "Times New Roman""}MUST be prepared for
[`@odata.type`](#ControlInformationtypeodatatype)
primitive values with or without the
`\#` prefix

c.[       ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
handle binding through inclusion of an entity reference within a
collection-valued navigation property in the body of a
[PATCH]{style="font-family:
"Courier New""}, `PUT`, or
`POST` request

d.[      ]{style="font:7.0pt "Times New Roman""}MUST be prepared for
`TargetId` to be included or
omitted in a [deleted link](#DeletedLink) for a relationship with a
maximum cardinality of one

e.[      ]{style="font:7.0pt "Times New Roman""}MUST accept the string
values `-INF`,
`INF`, and
[NaN]{style="font-family:
"Courier New""} for decimal values with floating scale

[[f.[       
]{style="font:7.0pt "Times New Roman""}]{style="color:windowtext"}]{.MsoHyperlink}MUST
be prepared to handle related entities inline within a [delta
payload](#DeltaPayload) [[as well as a nested delta
representation for the
collection]{style="color:windowtext"}]{.MsoHyperlink}

g.[      ]{style="font:7.0pt "Times New Roman""}MUST be prepared to
handle decimal values written in exponential notation

 

In order to be a conforming _producer_ of the OData JSON format, a
client or service:

9.[     ]{style="font:7.0pt "Times New Roman""}MUST support generating
OData 4.0 JSON compliant payloads with an
`OData-Version` header value of
`4.0`.

a.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT omit the
`odata.` prefix from [format
parameters](#ControllingtheAmountofControlInformationinResponses) or [control
information](#ControlInformation)

b.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT omit the
`\#` prefix from
[`@odata.type`](#ControlInformationtypeodatatype)[
]{style="font-family:"Courier New""}values

c.[       ]{style="font:7.0pt "Times New Roman""}MUST NOT include
entity values or entity references within a collection-valued navigation
property in the body of a `PATCH`,
`PUT`, or
[POST]{style="font-family:
"Courier New""} request

d.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT return
decimal values written in exponential notation unless the
[`ExponentialDecimals`](#ControllingtheRepresentationofNumber)
format parameter is specified.

e.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT advertise
available actions or functions using name/value pairs prefixed with a
property name

f.[        ]{style="font:7.0pt "Times New Roman""}MUST NOT return a
null value for name/value pairs representing actions or functions that
are not available

g.[      ]{style="font:7.0pt "Times New Roman""}MUST NOT represent
numeric value exceptions for values other than single and double values
using the string values `-INF`,
`INF`, and
[NaN]{style="font-family:
"Courier New""}

10.[  ]{style="font:7.0pt "Times New Roman""}MAY support generating
OData 4.01 JSON compliant payloads for requests with an
[OData-Version]{style="font-family:
"Courier New""} header value of [4.01]{style="font-family:
"Courier New""}.

a.[      ]{style="font:7.0pt "Times New Roman""}MUST return property
annotations immediately before the property they annotate

b.[      ]{style="font:7.0pt "Times New Roman""}SHOULD omit the
`odata.` prefix from [format
parameters](#ControllingtheAmountofControlInformationinResponses) and [odata
control information](#ControlInformation)

c.[       ]{style="font:7.0pt "Times New Roman""}SHOULD omit the
`\#` prefix from
[`@type`](#ControlInformationtypeodatatype)
primitive values

d.[      ]{style="font:7.0pt "Times New Roman""}MAY include inline
related entities or nested delta collections within a delta payload

e.[      ]{style="font:7.0pt "Times New Roman""}MAY include
`TargetId` within a [deleted
link](#DeletedLink) for a relationship with a maximum cardinality of
1

f.[        ]{style="font:7.0pt "Times New Roman""}MAY return decimal
values written in exponential notation

g.[      ]{style="font:7.0pt "Times New Roman""}MAY represent numeric
value exceptions for decimal values with floating scale using the string
values `-INF`,
`INF`, and
[NaN]{style="font-family:
"Courier New""}

In addition, in order to conform to the OData JSON format, a service:

11.[  ]{style="font:7.0pt "Times New Roman""}MUST comply with one of
the conformance levels defined in
[[\[OData-Protocol\]]{style="color:windowtext"}](#ODataProtocol)

12.[  ]{style="font:7.0pt "Times New Roman""}MUST support the
`application/json` media type in the Accept header (section 3)

13.[  ]{style="font:7.0pt "Times New Roman""}MUST return well-formed
JSON payloads

14.[  ]{style="font:7.0pt "Times New Roman""}MUST support
`odata.metadata=full` (section 3.1.2)

15.[  ]{style="font:7.0pt "Times New Roman""}MUST include the
`odata.nextLink` control information in partial results for
entity collections (section 4.5.5)

16.[  ]{style="font:7.0pt "Times New Roman""}MUST support entity
instances with external metadata (section 4.5.1)

17.[  ]{style="font:7.0pt "Times New Roman""}MUST support properties
with externally defined data types (section 4.5.3)

18.[  ]{style="font:7.0pt "Times New Roman""}MUST NOT violate any
other aspects of this OData JSON specification

19.[  ]{style="font:7.0pt "Times New Roman""}SHOULD support the
`$format`  system query option (section 3)

20.[  ]{style="font:7.0pt "Times New Roman""}MAY support the
`odata.streaming=true` parameter in the `Accept`
header (section 4.4)

21.[  ]{style="font:7.0pt "Times New Roman""}MAY return full metadata
regardless of `odata.metadata` (section 3.1.2)

22.[  ]{style="font:7.0pt "Times New Roman""}MUST NOT omit null or
default values unless the `omit-values` preference is
specified in the `Prefer` request header and the omit-values
preference is included in the `Preference-Applied` response
header

23.[  ]{style="font:7.0pt "Times New Roman""}MUST return OData JSON
4.0-compliant responses for requests with an
`OData-MaxVersion` header value of `4.`0

24.[  ]{style="font:7.0pt "Times New Roman""}MUST support OData JSON
4.0-compliant payloads in requests with an `OData-Version`
header value of `4.0`

25.[  ]{style="font:7.0pt "Times New Roman""}MUST support returning,
in the final response to an asynchronous request, the
`application/json` payload that would have been returned had
the operation completed synchronously, wrapped in an application/http
message

 

In addition, in order to comply with the OData 4.01 JSON format, a
service:

[[26.[ 
]{style="font:7.0pt "Times New Roman""}]{style="font-family:"Arial",sans-serif"}]{.Datatype}SHOULD
return the OData JSON 4.01 format for requests with an
`OData-MaxVersion` header value of `4.01`

27.[  ]{style="font:7.0pt "Times New Roman""}MUST support the OData
JSON 4.01 format in request payloads for requests with an
`OData-Version` header value of `4.01`

28.[  ]{style="font:7.0pt "Times New Roman""}MUST honor the
[[[odata.etag]{style="color:windowtext"}]{.Datatype}](#ControlInformationetagodataetag)
control information within `PUT`, `PATCH` or
`DELETE` payloads, if specified

29.[  ]{style="font:7.0pt "Times New Roman""}MUST support returning,
in the final response to an asynchronous request, the
`application/json` payload that would have been returned had
the operation completed synchronously

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
{#sec_Acknowledgments}Appendix
A.[ 
]{style="font:7.0pt "Times New Roman""}[Acknowledgments](#Acknowledgments)
:::

The contributions of the OASIS OData Technical Committee members,
enumerated in [OData-Protocol](#ODataProtocol), are gratefully
acknowledged.

::: {style="border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in"}
{#sec_RevisionHistory}[Appendix
B.[  ]{style="font:7.0pt "Times New Roman""}][Revision History](#RevisionHistory)
:::

+-----------------+-----------------+-----------------+-----------------+
| **Revision** | **Date** | **Editor** | **Changes |
| | | | Made** |
+-----------------+-----------------+-----------------+-----------------+
| Working Draft | 2016-06-22 | Michael Pizzo | Import material |
| 01 | | | from OData 4.0 |
| | | Ralf Handl | Errata 3 JSON |
| | | | document and |
| | | | initial |
| | | | application of |
| | | | 4.01 features |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2016-12-08 | Michael Pizzo | Integrated 4.01 |
| Specification | | | features |
| Draft 01 | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2017-06-08 | Michael Pizzo | Integrated more |
| Specification | | | 4.01 features, |
| Draft 02 | | Ralf Handl | especially: |
| | | | |
| | | | |
| | | | ] |
| | | | {style="font:7. |
| | | | 0pt "Times New |
| | | | Roman""}]{sty |
| | | | le="font-family |
| | | | :Symbol"}Update |
| | | | of a collection |
| | | | of entities |
| | | | |
| | | | |
| | | | ]{style="font: |
| | | | 7.0pt "Times N |
| | | | ew Roman""}]{s |
| | | | tyle="font-fami |
| | | | ly:Symbol"}JSON |
| | | | Batch format |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2017-09-22 | Michael Pizzo | Incorporated |
| Specification | | | review feedback |
| Draft 03 | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2017-11-10 | Michael Pizzo | Incorporated |
| Specification | | | review feedback |
| Draft 04 | | Ralf Handl | |
| | | | Changed default |
| | | | of |
| | | | [continue-on-er |
| | | | ror]{.Datatype} |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2017-12-19 | Michael Pizzo | Non-Material |
| Specification | | | Changes |
| 01 | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2019-06-21 | Michael Pizzo | In-stream |
| Specification | | | errors |
| Draft 05 | | Ralf Handl | |
| | | | Conditional |
| | | | request |
| | | | dependencies in |
| | | | batch requests |
| | | | |
| | | | Optional action |
| | | | parameters |
| | | | |
| | | | Update of media |
| | | | links of stream |
| | | | properties |
| | | | |
| | | | Representing |
| | | | error |
| | | | information in |
| | | | success |
| | | | responses with |
| | | | [continue-on-er |
| | | | ror]{.Datatype} |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2019-09-20 | Michael Pizzo | No dependencies |
| Specification | | | to async |
| Draft 06 | | Ralf Handl | requests within |
| | | | a batch request |
+-----------------+-----------------+-----------------+-----------------+
| Committee | 2019-11-05 | Michael Pizzo | Non-material |
| Specification | | | changes |
| 02 | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Candidate OASIS | 2020-01-15 | Michael Pizzo | Non-material |
| Standard 01 | | | changes |
| | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+
| Candidate OASIS | 2020-04-09 | Michael Pizzo | Non-material |
| Standard 02 | | | changes |
| | | Ralf Handl | |
+-----------------+-----------------+-----------------+-----------------+

 
:::
```
:::
