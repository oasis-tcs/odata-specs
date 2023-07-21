-------

# ##sec Conformance

Conforming clients MUST be prepared to consume a service that uses any or all of the constructs defined in this specification. The exception to this are the constructs defined in Delta Response, which are only required for clients that request changes.

<!--TODO: section references, V4.02 conformance -->
 
In order to be a conforming consumer of the OData JSON format, a client or service:

1. MUST either:
   1. understand `metadata=minimal` (section 3.1.1) or
   2. explicitly specify `metadata=none` (section 3.1.3) or `metadata=full` (section 3.1.2) in the request (client)

2. MUST be prepared to consume a response with full metadata
3. MUST be prepared to receive all data types (section 7.1)

   1. defined in this specification (client)
   2. exposed by the service (service)

4. MUST interpret all `odata` control information defined according to the `OData-Version` header of the payload (section 4.5)

5. MUST be prepared to receive any annotations and control information not defined in the `OData-Version` header of the payload (section 21.2)

6. MUST NOT require `streaming=true` in the `Content-Type` header (section 4.4)

7. MUST be a conforming consumer of the OData 4.0 JSON format, for payloads with an `OData-Version` header value of `4.0`.

   1. MUST accept the `odata.` prefix, where defined, on format parameters and control information

   2. MUST accept the `#` prefix in `@odata.type` values

   3. MUST be prepared to handle binding through the use of the `@odata.bind` property in payloads to a `PATCH`, `PUT`, or `POST` request

   4. MUST accept `TargetId` within in a deleted link for a relationship with a maximum cardinality of one

   5. MUST accept the string values `-INF`, `INF`, and `NaN` for single and double values

   6. MUST support property annotations that appear immediately before or after the property they annotate

8. MAY be a conforming consumer of the OData 4.01 JSON format, for payloads with an `OData-Version` header value of `4.01`.

   1. MUST be prepared to interpret control information with or without the `odata.` prefix

   2. MUST be prepared for `@odata.type` primitive values with or without the `#` prefix

   3. MUST be prepared to handle binding through inclusion of an entity reference within a collection-valued navigation property in the body of a `PATCH`, `PUT`, or `POST` request

   4. MUST be prepared for `TargetId` to be included or omitted in a deleted link for a relationship with a maximum cardinality of one

   5. MUST accept the string values `-INF`, `INF`, and `NaN` for decimal values with floating scale

   6. MUST be prepared to handle related entities inline within a delta payload as well as a nested delta representation for the collection

   7. MUST be prepared to handle decimal values written in exponential notation

 
In order to be a conforming producer of the OData JSON format, a client or service:

9. MUST support generating OData 4.0 JSON compliant payloads with an `OData-Version` header value of `4.0`.

   1. MUST NOT omit the `odata.` prefix from format parameters or control information

   2. MUST NOT omit the `#` prefix from `@odata.type` values

   3. MUST NOT include entity values or entity references within a collection-valued navigation property in the body of a `PATCH`, `PUT`, or `POST` request

   4. MUST NOT return decimal values written in exponential notation unless the ExponentialDecimals format parameter is specified.

   5. MUST NOT advertise available actions or functions using name/value pairs prefixed with a property name

   6. MUST NOT return a null value for name/value pairs representing actions or functions that are not available

   7. MUST NOT represent numeric value exceptions for values other than single and double values using the string values `-INF`, `INF`, and `NaN`

10. MAY support generating OData 4.01 JSON compliant payloads for requests with an `OData-Version` header value of `4.01`.

    1. MUST return property annotations immediately before the property they annotate

    2. SHOULD omit the `odata.` prefix from format parameters and control information

    3. SHOULD omit the `#` prefix from `@type` primitive values

    4. MAY include inline related entities or nested delta collections within a delta payload

    5. MAY include `TargetId` within a deleted link for a relationship with a maximum cardinality of 1

    6. MAY return decimal values written in exponential notation

    7. MAY represent numeric value exceptions for decimal values with floating scale using the string values `-INF`, `INF`, and `NaN`

In addition, in order to conform to the OData JSON format, a service:

11. MUST comply with one of the conformance levels defined in [OData-Protocol](#ODataProtocol)

12. MUST support the `application/json` media type in the `Accept` header (section 3)

13. MUST return well-formed JSON payloads

14. MUST support `odata.metadata=full` (section 3.1.2)

15. MUST include the `odata.nextLink` control information in partial results for entity collections (section 4.5.5)

16. MUST support entity instances with external metadata (section 4.5.1)

17. MUST support properties with externally defined data types (section 4.5.3)

18. MUST NOT violate any other aspects of this OData JSON specification

19. SHOULD support the `$format` system query option (section 3)

20. MAY support the `odata.streaming=true` parameter in the `Accept` header (section 4.4)

21. MAY return full metadata regardless of `odata.metadata` (section 3.1.2)

22. MUST NOT omit null or default values unless the `omit-values` preference is specified in the `Prefer` request header and the `omit-values` preference is included in the `Preference-Applied` response header

23. MUST return OData JSON 4.0-compliant responses for requests with an `OData-MaxVersion` header value of `4.0`

24. MUST support OData JSON 4.0-compliant payloads in requests with an `OData-Version` header value of `4.0`

25. MUST support returning, in the final response to an asynchronous request, the `application/json` payload that would have been returned had the operation completed synchronously, wrapped in an `application/http` message


In addition, in order to comply with the OData 4.01 JSON format, a service:

26. SHOULD return the OData JSON 4.01 format for requests with an `OData-MaxVersion` header value of `4.01`

27. MUST support the OData JSON 4.01 format in request payloads for requests with an `OData-Version` header value of `4.01`

28. MUST honor the `odata.etag` control information within `PUT`, `PATCH` or `DELETE` payloads, if specified

29. MUST support returning, in the final response to an asynchronous request, the `application/json` payload that would have been returned had the operation completed synchronously
