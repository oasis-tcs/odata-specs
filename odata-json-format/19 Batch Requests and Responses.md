
-------

# ##sec Batch Requests and Responses

## ##subsec Batch Request

A JSON batch request body consists of a single JSON object that MUST
contain the name/value pair `requests` and MAY contain
[annotations](#InstanceAnnotations). It does not contain the
`context` control information.

The value of `requests` is an array of request objects, each
representing an individual request. Note: an individual request MUST NOT
itself be a batch request.

A _request object_ MUST contain the name/value pairs `id`,
`method` and `url`, and it MAY contain the
name/value pairs `atomicityGroup`, `dependsOn`, `if`, `headers`, and `body`.

The value of `id` is a string containing the request
identifier of the individual request, see
[#OData-Protocol#IdentifyingIndividualRequests]. It MUST NOT be identical to the value
of any other request identifier nor any `atomicityGroup`
within the batch request.

Note: the `id` name/value pair corresponds to the
`Content-ID` header in the multipart batch format specified
in [#OData-Protocol#MultipartBatchRequestBody].

The value of `method` is a string that MUST contain one of
the literals `delete`, `get`, `patch`, `post`, or `put`.
These literals are case-insensitive.

The value of `url` is a string containing the individual
request URL. The URL MAY be an absolute path (starting with a forward
slash `/`) which is appended to scheme, host, and port of the
batch request URL, or a relative path (not starting with a forward slash `/`).

If the first segment of a relative path starts with a `$`
character and is not identical to the name of a top-level system
resource (`$batch`, `$crossjoin`, `$all`, `$entity`, `$root`,
`$id`, `$metadata`, or other system resources
defined according to the `OData-Version` of the protocol
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
request, and which MUST satisfy the rule [request-id]{.abnf} in
[OData-ABNF](#ODataABNF). All request objects with the same value for
`atomicityGroup` MUST be adjacent in the
`requests` array. These requests are processed as an atomic
operation and MUST either all succeed, or all fail.

Note: the atomicity group is a generalization of the change set in the
multipart batch format specified in [#OData-Protocol#MultipartBatchRequestBody].

The value of `dependsOn` is an array of strings whose values
MUST be values of either `id` or `atomicityGroup`
of preceding request objects; forward references are not allowed.
When targeting a 4.01 service, if a request depends on another request that 
is part of a different atomicity group, the atomicity group MUST be listed in `dependsOn`.
OData 4.02 or greater services SHOULD NOT require the atomicity group to be listed
if `dependsOn` already contains the `id` of a request within that atomicity group.
For maximum interoperability with earlier services, clients SHOULD continue to
specify the `atomicityGroup`.

In the absence of the optional `if` member a request that
depends on other requests or atomicity groups is only executed if those
requests were executed successfully, i.e. with a `2xx`
response code. If one of the requests it depends on has failed, the
dependent request is not executed and a response with status code of
`424 Failed Dependency` is returned for it as part of the batch response.

The `if` member can specify an alternative condition for
executing the dependent request. Its value MUST be URL expression (see
[#OData-URL#CommonExpressionSyntax]) that evaluates to a Boolean value.
The URL expression syntax is extended and additionally allows

- `$<content-id>/$succeeded`
  to check if the referenced request has succeeded
- `$<content-id>`
  to reference the response body of the referenced request
- `$<content-id>/<path>`
  to reference a part of the response body

Services SHOULD advertise support of the `if` member by
specifying the property
`RequestDependencyConditionsSupported` in the
[Capabilities.BatchSupport]{.term}
term applied to the entity container, see
[OData-VocCap](#ODataVocCap). If a service does not
support request dependencies, the dependent request MUST fail with
`424 Failed Dependency`, and if the dependent request is part of an
atomicity group, all requests in that group fail with
`424 Failed Dependency` with no changes applied.

The value of `headers` is an object whose name/value pairs
represent request headers. The name of each pair MUST be the lower-case
header name; the value is a string containing the header-encoded value
of the header.
Services MAY support omitting the `content-type` in the `header` property of a request object.
Such requests MUST be interpreted as if the `content-type` header mandated by
[#OData-Protocol#HeaderContentType] were specified with a value of `application/json`
(with no format parameters).

The value of `body` can be `null`, which is
equivalent to not specifying the `body` name/value pair.

For media type `application/json` or one of its subtypes,
optionally with format parameters, the value of `body` is JSON.

For media types of top-level type `text`, for example
`text/plain`, the value of `body` is a string
containing the value of the request body.

For all other media types the value of `body` is a string
containing the base64url-encoded value of the request body. In this case
the body content can be compressed or chunked if this is correctly
reflected in the `Transfer-Encoding` header.

A `body` MUST NOT be specified if the `method` is `get` or `delete`.

The request object and the `headers` object MUST NOT contain name/value pairs with duplicate names.
This is in conformance with [RFC7493](#rfc7493).

::: example
Example ##ex_batchRequest: a batch request that contains
the following individual requests in the order listed

  1. A query request
  2. An atomicity group that contains the following requests:
     - Insert entity
     - Update entity
  3. A second query request

Note: For brevity, in the example, request bodies are excluded in favor
of English descriptions inside `<>` brackets and
`OData-Version` headers are omitted.
```json
POST /service/$batch HTTP/1.1
Host: host
OData-Version: 4.01
Content-Type: application/json
Content-Length: ###

{
  "requests": [
    {
      "id": "0",
      "method": "get",
      "url": "/service/Customers('ALFKI')"
    },
    {
      "id": "1",
      "atomicityGroup": "group1",
      "dependsOn": [ "0" ],
      "method": "patch",
      "url": "/service/Customers('ALFKI')",
      "headers": {
        "prefer": "return=minimal"
      },
      "body": <JSON representation of changes to Customer ALFKI>
    },
    {
      "id": "2",
      "atomicityGroup": "group1",
      "method": "post",
      "url": "/service/Customers",
      "body": <JSON representation of a new Customer entity>
    },
    {
      "id": "3",
      "dependsOn": [ "group1" ],
      "method": "get",
      "url": "/service/Products"
    }
  ]
}
```
:::

## ##subsec Referencing New Entities

The entity returned by a preceding request can be referenced in the
request URL of subsequent requests. If the `Location` header in the response
contains a relative URL, clients MUST be able to resolve it relative to the
request's URL even if that contains such a reference.

::: example
Example ##ex: a batch request that contains the following operations in
the order listed:

- Insert a new entity (with `id = 1`)
- Insert a second new entity (references request with `id = 1`)
```json
POST /service/$batch HTTP/1.1
Host: host
OData-Version: 4.01
Content-Type: application/json
Content-Length: ###

{
  "requests": [
    {
      "id": "1",
      "method": "post",
      "url": "/service/Customers",
      "body": <JSON representation of a new Customer entity>
    },
    {
      "id": "2",
      "dependsOn": [ "1" ]
      "method": "post",
      "url": "$1/Orders",
      "body": <JSON representation of a new Order>
    }
  ]
}
```
:::

## ##subsec Referencing an ETag

::: example
Example ##ex: a batch request that contains the following operations in
the order listed:

- Get an Employee (with `id` = 1)
- Update the salary only if the employee has not changed

```json
POST /service/$batch HTTP/1.1
Host: host
OData-Version: 4.01
Content-Type: application/json
Content-Length: ###

{
  "requests": [
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
      "dependsOn": [ "1" ],
      "method": "patch",
      "url": "/service/Employees(0)",
      "headers": {
        "if-match": "$1"
      },
      "body": {
        "Salary": 75000
      }
    }
  ]
}
```
:::

## ##subsec Referencing Response Body Values

::: example
Example ##ex: a batch request that contains the following operations in
the order listed:

- Get an employee (with `Content-ID = 1`)
- Get all employees residing in the same building

```json
POST /service/$batch HTTP/1.1
Host: host
OData-Version: 4.01
Content-Type: application/json
Content-Length: ###

{
  "requests": [
    {
      "id": "1",
      "method": "get",
      "url": "/service/Employees/0?$select=Building",
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "id": "2",
      "dependsOn": [ "1" ],
      "method": "get",
      "url": "/service/Employees?$filter=Building eq $1/Building",
      "headers": {
        "accept": "application/json"
      }
    }
  ]
}
```
:::

## ##subsec Processing a Batch Request

All requests in an atomicity group represent a single change unit. A
service MUST successfully process and apply all the requests in the
atomicity group or else apply none of them.
See [#OData-Protocol#Atomicity] for details on visibility of atomic changes.

The service MAY process the individual requests and atomicity groups
within a batch request, or individual requests within an atomicity
group, in any order that is compatible with the dependencies expressed
with the `dependsOn` name/value pair. Individual requests and
atomicity groups that do not specify the `dependsOn`
name/value pair may be processed in parallel. Clients that are only
interested in completely successful batch responses MAY specify the
preference `continue-on-error=false` to indicate that the service need not spend cycles on further processing once an error occurs in one of the dependency chains. In this case the
response MAY omit response objects for requests that have not been
processed. If the preference `continue-on-error` is not
specified, or specified with a value of `true`, all requests
are processed according to their dependencies.

The service MUST include the `id` name/value pair in each
response object with the value of the request identifier that the client
specified in the corresponding request, so clients can correlate
requests and responses.

## ##subsec Batch Response

A JSON batch response body consists of a single JSON object that MUST
contain the name/value pair `responses` and MAY contain
[annotations](#InstanceAnnotations). It does not contain the
`context` control information.

The value of `responses` is an array of response objects,
each representing an individual response.

A JSON batch response MAY be a partial result containing the
[`nextLink`](#ControlInformationnextLinkodatanextLink) control
information. This allows services to chunk results into manageable
pieces, or to return results for already processed requests and continue
processing the remaining individual requests while waiting for the
client to fire a `GET` request to the next link.

In a response to a batch request using the multipart format defined in
[#OData-Protocol#MultipartBatchFormat] the response objects
MUST appear in the same order as required for multipart batch responses
because the `Content-ID` header is not required outside of change sets. Response objects
corresponding to requests that specify a `Content-ID` header MUST contain the
`id` name/value pair, and the value of `id` MUST be the value of the
`Content-ID` header of the corresponding request. This is necessarily the case for
requests contained within a change set. Responses to requests within a
change set MUST contain the `atomicityGroup`
name/value pair with a value common within a change set and unique
across change sets.

In a response to a batch request using the JSON batch request format
specified in the preceding section the response objects MAY appear in
any order, and each response object MUST contain the `id` name/value
pair with the same value as in the corresponding request object. If the
corresponding request object contains the `atomicityGroup`
name/value pair, it MUST also be present in the response object with the
same value.

If any response within an atomicity group returns a failure code, all
requests within that atomicity group are considered failed, regardless
of their individual returned status code. The service MAY return
`424 Failed Dependency` for statements
within an atomicity group that fail or are not attempted due to other
failures within the same atomicity group.

A response object MUST contain the name/value pair `status`
whose value is a number representing the HTTP status code of the
response to the individual request.

The response object MAY contain the name/value pair `headers`
whose value is an object with name/value pairs representing response
headers. The name of each pair MUST be the lower-case header name; the
value is a string containing the header-encoded value of the header.
If the object does not name the `content-type`, then the `content-type` header mandated by
[#OData-Protocol#HeaderContentType] is assumed to be `application/json` (with no format parameters).

The response object MAY contain the name/value pair `body`
which follows the same rules as within [request objects](#BatchRequest).

Relative URLs in a response object follow the rules for [relative
URLs](#RelativeURLs) based on the request URL of the corresponding
request. Especially: URLs in responses MUST NOT contain
`$`-prefixed request identifiers.

::: example
Example ##ex: referencing the batch request [example ##batchRequest] above, assume all
the requests except the final query request succeed. In this case the
response would be
```json
HTTP/1.1 200 OK
OData-Version: 4.01
Content-Length: ####
Content-Type: application/json

{
  "responses": [
    {
      "id": "0",
      "status": 200,
      "body": <JSON representation of the Customer entity with key ALFKI>
    },
    {
      "id": "1",
      "status": 204
    },
    {
      "id": "2",
      "status": 201,
      "headers": {
        "location": "http://host/service.svc/Customer('POIUY')"
      },
      "body": <JSON representation of the new Customer entity>
    },
    {
      "id": "3",
      "status": 404,
      "body": <Error message>
    }
  ]
}
```
:::

## ##subsec Asynchronous Batch Requests

A batch request that specifies the `respond-async` preference MAY be executed asynchronously. This means that the "outer" batch request is executed asynchronously; this
preference does not automatically cascade down to the individual
requests within the batch. After successful execution of the batch
request the response to the batch request is returned in the body of a
response to an interrogation request against the status monitor resource
URL, see [#OData-Protocol#AsynchronousRequests].

A service MAY return interim results to an asynchronously executing
batch. It does this by responding with `200 OK` to a
`GET` request to the monitor resource and including a
[`nextLink`](#ControlInformationnextLinkodatanextLink)
control information in the JSON batch response, thus signaling that the
response is only a partial result. A subsequent `GET` request
to the next link MAY result in a `202 Accepted` response with a
`location` header pointing to a new status monitor resource.

::: example
Example ##ex: referencing the [example ##batchRequest] above again, assume that the
request is sent with the `respond-async` preference. This
results in a `202` response pointing to a status monitor resource:
```json
HTTP/1.1 202 Accepted
Location: http://service-root/async-monitor-0
Retry-After: ###

```

When interrogating the monitor URL only the first request in the batch
has finished processing and all the remaining requests are still being
processed. The service signals that asynchronous processing is
"finished" and returns a partial result with the first response and a
next link. The client did not explicitly accept
`application/http`, so the response is "unwrapped" and only
indicates with the `AsyncResult` header that it is a response
to a status monitor resource:
```json
HTTP/1.1 200 OK
AsyncResult: 200
OData-Version: 4.01
Content-Length: ###
Content-Type: application/json

{
  "responses": [
    {
      "id": "0",
      "status": 200,
      "body": <JSON representation of the Customer entity with key ALFKI>
    }
  ],
  "@nextLink": "…?$skiptoken=YmF0Y2gx"
}
```

Client makes a `GET` request to the next link and receives a
`202` response with the location of a new monitor resource.

```json
HTTP/1.1 202 Accepted
Location: http://service-root/async-monitor-1
Retry-After: ###
```

After some time a `GET` request to the monitor resource returns the remainder of the result.

```json
HTTP/1.1 200 OK
AsyncResult: 200
OData-Version: 4.01
Content-Length: ###
Content-Type: application/json

{
  "responses": [
    {
      "id": "1",
      "status": 204
    },
    {
      "id": "2",
      "status": 201,
      "headers": {
        "location": "http://host/service.svc/Customer('POIUY')"
      },
      "body": <JSON representation of the new Customer entity>
    },
    {
      "id": "3",
      "status": 404,
      "body": <Error message>
    }
  ]
}
```
:::

In addition to the above interaction pattern individual requests within
a batch with no other requests depending on it and not part of an
atomicity group MAY be executed asynchronously if they specify the
`respond-async` preference and if
the service responds with a JSON batch response. In this case the
`response` array contains a response object for each
asynchronously executed individual request with a `status` of
`202`, a `location` header pointing to an
individual status monitor resource, and optionally a `retry-after` header.

::: example
Example ##ex: the first individual request is processed asynchronously,
the second synchronously, the batch itself is processed synchronously
```json
HTTP/1.1 200 OK
OData-Version: 4.01
Content-Length: ###
Content-Type: application/json

{
  "responses": [
    {
      "id": "0",
      "status": 202,
      "headers": {
        "location": "http://service-root/async-monitor-0"
      }
    },
    {
      "id": "1",
      "status": 204
    }
  ]
}
```
:::
