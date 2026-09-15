# ##sec Repeatable Request

A *repeatable request* is one in which the client sends the request with
the [`Repeatability-Request-ID`](#RepeatabilityRequestID) and
[`Repeatability-First-Sent`](#RepeatabilityFirstSent) headers.

An *unsafe request* is a non-idempotent request; that is, a request
which has the potential to change the service each time it is executed.
For example, a request to create a resource is an unsafe request because
executing the request multiple times could result in the same resource
being created multiple times.

# ##sec Header Fields

Repeatable Requests defines semantics around the following request and
response headers.

## ##subsec Request Headers

Two request headers are required to facilitate the ability to retry
requests without incurring unintended side effects. Clients MUST send
the `Repeatability-Request-ID` and `Repeatability-First-Sent` header to
specify that a request is repeatable; that is, that the client can make
the request multiple times with the same `Repeatability-Request-ID` and
`Repeatability-First-Sent` header values and get back an appropriate
response without the server executing the request multiple times.

Another optional header, `Repeatability-Client-ID`, can be provided to
facilitate the ability for a server to eagerly cleanup tracking
information that it may use for the implementation of repeatable
requests (rather than keeping such information for a possibly extended
retention period).

### ##subsubsec `Repeatability-Request-ID`

`Repeatability-Request-ID` MUST be sent by clients to specify that a
request is repeatable. The value of the `Repeatability-Request-ID` is an
opaque string representing a client-generated, globally unique for all
time, identifier for the request. Servers MUST accommodate the
36-character hexadecimal case-insensitive encoding of a UUID (GUID), as
defined in [RFC4122](#rfc4122). It is recommended for security
purposes to use version 4 (random) UUIDs as defined in
[RFC4122](#rfc4122) section 4.1.3. Support for other forms of
unique identifiers is optional.

If specified, the client directs that the request MUST be repeatable.
Servers aware of repeatability but unable to fulfill this direction for
this request type MUST not execute the request and instead return 501
Not Implemented.

### ##subsubsec `Repeatability-First-Sent`

`Repeatability-First-Sent` MUST be sent by clients to specify that a
request is repeatable. `Repeatability-First-Sent` is used to specify the
date and time at which the request was first created.
`Repeatability-First-Sent` value MUST be expressed using the IMF-fixdate
form of HTTP-date as defined in [RFC7231](#rfc7231).

`Repeatability-First-Sent` allows the server to determine if the request
is within its currently tracked window of time for repeatability. If
`Repeatability-First-Sent` is within the server's window and the request
has not been seen previously, the server can safely execute it. If it is
not in the window of currently tracked requests, the server cannot
guarantee the request was not already executed and so MUST return an
error. Without using `Repeatability-First-Sent`, if/when the server cleans
up tracking information, the server could receive a
`Repeatability-Request-ID` that it has already executed but no longer has
any tracking data for and so the server would incorrectly execute the
request again.

### ##subsubsec `Repeatability-Client-ID`

`Repeatability-Client-ID` is an optional header that MAY be provided by
the client. `Repeatability-Client-ID` is an opaque string representing a
client-generated, globally unique for all time, identifier for the
instance of the client application that issued the request. Servers, if
they do not ignore this header, MUST accommodate the 36-character
hexadecimal case-insensitive encoding of a UUID (GUID), as defined in
[RFC4122](#rfc4122). It is recommended for security purposes to
use version 4 (random) UUIDs as defined in [RFC4122](#rfc4122)
section 4.1.3. Support for other forms of unique identifiers is
optional.

`Repeatability-Client-ID`, if provided by the client, MAY be used by the
server to support bulk Repeatability Deletion.

## ##subsec Response Headers

### ##subsubsec `Repeatability-Result`

Servers aware of repeatability MUST return the `Repeatability-Result`
response header in the result of a repeatable request with one of the
case-insensitive values accepted or rejected.

#### ##subsubsubsec Accepted

The server MUST return the value accepted for the `Repeatability-Result`
response header if the request was accepted and the server guarantees
that the server state reflects a single execution of the operation.

The response returned by the server MUST be the success or failure state
of the operation as first executed by the server and reflects either the
current state of the system or the state as it existed when the request
was first received.

#### ##subsubsubsec Rejected

The server MUST return the value rejected for the `Repeatability-Result`
response header if the request was rejected because the combination of
`Repeatability-First-Sent` and `Repeatability-Request-ID` were invalid or
because the `Repeatability-First-Sent` value was outside the range of
values held by the server.

The server MUST also return a 4xx or 5xx response code without
attempting to execute the request when rejected is returned.

The server state MUST be the same as if the request was never received.

# ##sec Client Behavior

In order to issue a repeatable request, the client first creates a UUID
(GUID) and encodes that as a string. It MUST set that as the string
value of the `Repeatability-Request-ID` header and MUST also set the
`Repeatability-First-Sent` header to the current date-time value.

The client MAY also include a `Repeatability-Client-ID` header allowing
the server to associate with the client any tracking information that it
may use in support of repeatable requests.

If the request fails to return, for example, due to connection issues,
what the client can do will depend on what it already knows about the
server.

If the client has out-of-band knowledge that the server supports
repeatability, then the client can safely re-execute the request.

If the client had previously executed a repeatable request for which it
got a response, it can also determine whether the server supports
repeatability based on whether or not the server responded with a
`Repeatability-Result` header. If the server responded with a
`Repeatability-Result` header the client knows that the server supports
repeatability; re-executing the request in this case is safe. However,
if the response did not return a `Repeatability-Result` header, then the
client MUST assume that the request did not reach a server that knows
about repeatable requests.

If the client does not have out-of-band knowledge that that the server
supports repeatability and the client has not previously sent a
repeatable request for which it received a `Repeatability-Result` header,
it MUST NOT assume the server supports repeatability and therefore
cannot safely re-execute the request. In this case, re-issuing the
request MAY result in multiple executions.

If the client has determined that the server supports repeatability, it
can re-execute a request for which it did not receive a response by
sending the request again with the same `Repeatability-Request-ID` and
`Repeatability-First-Sent` headers (and `Repeatability-Client-ID`, if it was
specified previously).

If the request returns with a `Repeatability-Result` header with a value
of accepted then the client knows that the request has been executed in
a repeatable manner and consumes the results.

If the request returns with a `Repeatability-Result` header with a value
of rejected then the client knows that the creation time is beyond the
window of requests that the server has stored and it cannot safely retry
the operation, or some other error has occurred (for example, the
`Repeatability-Request-ID` and `Repeatability-First-Sent` values were
inconsistent with each other or with a previous request).

If the request returns with HTTP response code 501 Not Implemented with
a `Repeatability-Result` value of accepted, it implies the service knows
about repeatability but there is something wrong with the request.

If the request returns with HTTP response code 501 Not Implemented with
a `Repeatability-Result` value of rejected, it implies that the service
does know about repeatability but the server does not support
repeatability of the request.

# ##sec Server Behavior

This section applies to servers that are aware of this specification.

If the server receives the `Repeatability-Request-ID` header but the
`Repeatability-First-Sent` value is missing, it MUST return 400 Bad
Request with a `Repeatability-Result` of rejected.

If the server receives the `Repeatability-First-Sent` header but the
`Repeatability-Request-ID` value is missing, it MUST return 400 Bad
Request with a `Repeatability-Result` of rejected.

If the server receives the `Repeatability-First-Sent` header but the value
is not a valid IMF-fixdate form of HTTP-date as defined in
[RFC7231](#rfc7231), it MUST return 400 Bad Request with a
`Repeatability-Result` of rejected.

If the server receives a request with valid, non-null,
`Repeatability-Request-ID` and `Repeatability-First-Sent` values and

- does not support repeatable execution of the request it MUST return
  501 Not Implemented with a `Repeatability-Result` of rejected, or

- the `Repeatability-First-Sent` value is before the earliest remembered
  `Repeatability-Request-ID`, or this request cannot be reliably executed
  for some other implementation-specific reason, the server MUST return
  412 Precondition Failed with a `Repeatability-Result` value of rejected,
  or

- has not seen the `Repeatability-Request-ID` since its earliest
  remembered `Repeatability-Request-ID` (if any), and the
  `Repeatability-First-Sent` value is within its window of remembered
  `Repeatability-Request-ID` values, then it MUST execute the request and
  return the result with `Repeatability-Result` header value of accepted
  and record the `Repeatability-Request-ID` and any additional information
  to ensure the request is not executed more than once, and any
  additional information to respond should the client send the request
  again.

The server SHOULD return an error 400 Bad Request along with a
`Repeatability-Result` value of rejected if `Repeatability-Request-ID` is
non-null and the request verb, URI, or header fields other than Date are
different from that of the original request.

If the server has seen the `Repeatability-Request-ID`, it MAY return an
error 400 Bad Request along with a `Repeatability-Result` header value of
rejected if the request body was different from that of the original
`Repeatability-Request-ID`.

If the server has seen the `Repeatability-Request-ID` and the request
matches the previous request to the extent validated by the server, the
server MUST return a response with a `Repeatability-Result` value of
accepted that is either:

- the same response code and body as was generated (if any) when the
  original request with that `Repeatability-Request-ID` was processed, or

- the response code and response body resulting from re-executing the
  request if the original response code was 4xx or 5xx, i.e. a client
  error or an internal server error.

In order to permit the server to optimize the storage of response
bodies, the client and server may wish to negotiate the amount of
content that will be returned in an initial response and any subsequent
repeated response. The mechanism for such response content negotiation
may depend on the protocol used.

Whether a server is considered to have *seen* a previous request should
be transactionally consistent with the mutating effects of the request.
For example, a server is not required to remember a previous request
whose effects were rolled back due to a failure, since the client could
reissue such a request without any possibility for duplication of the
effects.

Servers MAY support repeatability on POST, PUT, PATCH and DELETE:

- Repeatability on POST ensures that the operation is executed, or the
  insert is performed no more than once.

- Repeatability on PUT or PATCH is different from the use of an ETag in
  that repeated PUT or PATCH operations to the same resource will return
  success (or fail), possibly including a payload, versus a concurrency
  violation. It is important for a repeated request to return with
  success if the original request actually succeeded, rather than a
  failure due to a conflict detected on the repeated execution.

- Repeatability on DELETE is different from use of an ETag in that
  repeated DELETE operations to the same resource will return success
  (or fail) rather than 404 Not Found.

Servers MUST ignore `Repeatability-Request-ID` and
`Repeatability-First-Sent` for GET and HEAD requests.

If the server knows about repeatability and it does not support it for a
particular repeatable request, it MUST NOT execute the request and MUST
return a 4xx or 5xx response with a `Repeatability-Result` header with a
value of rejected.

# ##sec Example Scenarios

::: example
Example ##ex: Create a new Order. Adding a new item to a collection is a
POST request to the collection. To safeguard against a lost response the
client adds repeatability headers:
```json
POST /service/Orders
Content-Type: application/json
Repeatability-Request-ID: 112a3a3e-f94c-4f56-b49b-5aab3d97e5b7
Repeatability-First-Sent: Tue, 26 Mar 2019 16:06:51 GMT

{
  "CustomerID": "ALFKI",
  "OrderLines": [
    {
      "ProductID": "tomatoes-red-cherry",
      "Quantity": 5,
      "Unit": "kg",
    },
    {
      "ProductID": "grapejuice-merlot",
      "Quantity": 2,
      "Unit": "l",
    }
  ]
}
```

The client does not receive a response, so it simply sends the request
again:
```json
POST /service/Orders
Content-Type: application/json
Repeatability-Request-ID: 112a3a3e-f94c-4f56-b49b-5aab3d97e5b7
Repeatability-First-Sent: Tue, 26 Mar 2019 16:06:51 GMT

{
  "CustomerID": "ALFKI",
  "OrderLines": [
    {
      "ProductID": "tomatoes-red-cherry",
      "Quantity": 5,
      "Unit": "kg",
    },
    {
      "ProductID": "grapejuice-merlot",
      "Quantity": 2,
      "Unit": "l",
    }
  ]
}
```

This time the client receives a response:
```json
HTTP/1.1 201 Created
Content-Type: application/json
Location: http://host/service/Orders/4711
Repeatability-Result: accepted

{
  "OrderID": 4711,
  "CustomerID": "ALFKI",
  "OrderLines": [
    {
      "ProductID": "tomatoes-red-cherry",
      "Quantity": 5,
      "Unit": "kg",
    },
    {
      "ProductID": "grapejuice-merlot",
      "Quantity": 2,
      "Unit": "l",
    }
  ]
}
```

The `Repeatability-Result` response header tells the client that it need
not worry: the new order was created exactly once.
:::

::: example
Example ##ex: Invoke an Action. The client wants to place an exact clone of
a recent order using the Clone action:
```json
POST /service/Orders/4711/Clone
Content-Type: application/json
Repeatability-Request-ID: a47a83d9-be50-46aa-ab2a-55f18f4fbc64
Repeatability-First-Sent: Mon, 01 Apr 2019 06:22:03 GMT

{}
```

The client does not receive a response, so it simply sends the request
again. This time the client receives a response:
```
HTTP/1.1 204 No Content
Location: http://host/service/Orders/4712
Repeatability-Result: accepted
```

The `Repeatability-Result` response header tells the client that it need
not worry: the new order was cloned exactly once.
:::

# ##sec Repeatable Request Cleanup

In some situations, such as when using occasionally-connected mobile
devices, clients may expect the server to offer a significant retention
period (e.g. 50 days) for remembered repeatable requests. In such
situations, the server's storage system may be burdened by the retention
requirements, so it is valuable to offer clients a way to signal that
certain remembered repeatable requests may be forgotten (deleted) by the
server even before the retention period has expired. Some clients may be
able to acknowledge that they have received all responses to all
outstanding requests. Bulk deletion of all the tracking information for
repeatable requests from a particular `Repeatability-Client-ID` may enable
a significant performance boost for the server.

A server MAY support the deletion of remembered requests by
`Repeatability-Request-ID`. If supported, the server SHOULD use the DELETE
method with the URL pattern
`$RepeatableRequestWithRequestID/`«Repeatability-Request-ID» for
this purpose. The HTTP response status SHOULD be 204 No Content, even if
no such request was found.

A server MAY support the deletion of remembered requests by
`Repeatability-Client-ID`. If supported, the server SHOULD use the DELETE
method with the URL pattern
`$RepeatableRequestWithClientID/`«Repeatability-Client-ID» for
this purpose. The HTTP response status SHOULD be 204 No Content, even
if no such requests were found.

Note that supporting cleanup by `Repeatability-Client-ID` does not mean
that the server needs to record information about client instances
separately from its set of remembered repeatable requests. For example,
it might be achieved simply with an extra (indexed) storage column in
the storage table used to track repeatable requests.

# ##sec Incorporation into OData

This specification is valid outside the context of OData but this
section details the specifics of using it with OData, see
[OData-Protocol](#ODataProtocol).

## ##subsec Support

OData services are not required to support Repeatability. Clients MUST
rely on external means (e.g. capabilities) in order to know whether the
server supports repeatability.

## ##subsec Discovery

Services supporting repeatability SHOULD annotate the entity container,
entity sets, singletons, action imports, or actions in the service
metadata with the term [Repeatability.Supported]{.term} defined in the
Repeatability vocabulary, see [OData-VocRep](#ODataVocRep).

Services supporting repeatable requests cleanup by
`Repeatability-Request-ID` and/or `Repeatability-Client-ID` SHOULD annotate
the entity container with the terms
[Repeatability.DeleteWithRequestIDSupported]{.term} and/or
[Repeatability.DeleteWithClientIDSupported]{.term}.

If lower-level elements such as individual entity sets do not support
repeatability, then they can opt out of repeatability using a
lower-level override of the `Repeatability.Supported` term.

Services MAY support repeatability without the use of annotations in the
service metadata.

## ##subsec Response Payload

The client can optionally use system query options \$select and/or
\$expand in the request URL to force the service to return a payload
containing the minimal information required by the client, as compared
to what it would ordinarily return without the use of system query
options. Note that \@Core.ContentID is always returned in the response
payload if it was specified in the request body.

If the client sends a repeatable request containing a data modification
operation for an entity, and the client does not include \$select or
\$expand in the request URL, the server MAY choose to return 204 No
Content even if it would ordinarily return status code 200 or 201 for a
non-repeatable request.

The above paragraphs allow the service to minimize the tracking
information that it stores in support of repeatable requests.

## ##subsec Batch Requests

Services MAY support repeatability for individual requests within a
batch request, as well as for individual requests within a change set or
atomicity group within a batch request.

Individual requests within a batch MAY have a mix of
`Repeatability-Request-ID` and `Repeatability-First-Sent` values. In this
case, each individual response within the batch response has the
appropriate `Repeatability-Result` (or not) according to the corresponding
request.

Repeatable request headers MUST NOT be applied to change sets or
atomicity groups directly because there is no way to specify headers for
an atomicity group in JSON batch requests, see
[OData-JSON](#ODataJSON). To make a change set or atomicity
group repeatable, a client MUST specify the same
`Repeatability-Request-ID` and `Repeatability-First-Sent` values for all
requests in the change set or atomicity group. The client MUST retry the
entire change set or atomicity group as a unit if it is repeatable;
individual operations within the change set or atomicity group MUST NOT
be retried.

There is no correlation between the repeatability of a request and the
repeatability of any of its dependent requests. That is, a repeatable
request may be retried without retrying any of its dependent requests.

Repeatability cannot be applied to batch requests themselves because a
single `Repeatability-Request-ID` on the batch request is not sufficient
for uniquely identifying the individual requests within the batch
request, and because repeatability implies transactional atomicity which
cannot be guaranteed for a batch request containing multiple change
sets, some of which may succeed (commit) and some of which may fail
(rollback). Therefore, if a server receives a batch request with either
a `Repeatability-Request-ID` or a `Repeatability-First-Sent` value, it MUST
NOT execute any requests within the batch and MUST respond with 4xx or
5xx response and with a `Repeatability-Result` value of rejected.

# ##sec Security Considerations

For HTTP relevant security implications please cf. the relevant sections
of [RFC7231](#rfc7231) (9. Security Considerations) and for the
HTTP PATCH method [RFC5789](#rfc5789) (5. Security
Considerations) as starting points.

Servers SHOULD authenticate the client before further evaluating the
repeatability of any requests.

As mentioned in [section 3.1.1](#RepeatabilityRequestID), it is
recommended for security purposes that clients use randomly generated
`Repeatability-Request-ID` values such as version 4 UUIDs as defined in
[RFC4122](#rfc4122) section 4.1.3.

# ##sec Conformance

## ##subsec Service Conformance

In order to conform to this specification, a service:
1.  MUST conform to the semantics of the following headers, or fail the
    request:
    1.  [`Repeatability-Request-ID`](#RepeatabilityRequestID) ([section ##RepeatabilityRequestID])
    2.  [`Repeatability-First-Sent`](#RepeatabilityFirstSent) ([section ##RepeatabilityFirstSent])
2.  MUST return the [`Repeatability-Result`](#RepeatabilityResult)
    response header in response to repeatable requests ([section ##RepeatableRequest]) with one of the values
    [accepted](#Accepted) ([section ##Accepted]) or
    [rejected](#Rejected) ([section ##Rejected])
3.  MUST follow the guidelines in [Server Behavior](#ServerBehavior)
    ([section ##ServerBehavior])

## ##subsec Client Conformance

If a client wants to safely repeat a request, a client:
1.  MUST specify the
    [`Repeatability-Request-ID`](#RepeatabilityRequestID) header in an
    unsafe request (section [3.1.1](#RepeatabilityRequestID))
2.  MUST specify the
    [`Repeatability-First-Sent`](#RepeatabilityFirstSent) header in a
    unsafe request (section [3.1.2](#RepeatabilityFirstSent))
3.  MUST only repeat a request if it has previously determined (through
    whatever means) that the server supports repeatability and MUST
    specify the repeatability headers ([section ##ClientBehavior]).
