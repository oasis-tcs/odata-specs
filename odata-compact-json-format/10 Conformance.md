
-------

# ##sec Conformance

Conformance to this specification presupposes conformance to
[OData-JSON](#ODataJSON). The requirements below are additional to, and
do not replace, the conformance requirements of that specification.

In order to be a conforming consumer of the OData compact JSON format, a
client or service:

1. MUST be a conforming consumer of the OData JSON format
   ([OData-JSON](#ODataJSON))
2. MUST accept, wherever a structured instance may appear, either a JSON
   object or a positional representation ([section
   ##PositionalRepresentation])
3. MUST determine the positional property list from the context URL and
   the referenced metadata ([section
   ##DeterminingthePositionalPropertyList])
   1. MUST apply the declaration order of structural properties,
      base type first, where properties are implicitly selected
   2. MUST group select-items that share a first segment into a single
      position ([section ##GroupingofSelectItems])
4. MUST NOT infer the positional property list from the number of items
   in a positional representation
5. MUST accept a [wrapper object](#wrapperobject) wherever a value may
   appear ([section ##TheWrapperObject])
   1. MUST accept the value name `_`
   2. MUST accept the value name `value` at the root of the message body
   3. MUST accept a wrapper object that carries no value
6. MUST accept property annotations without the property name prefix
   ([section ##PropertyAnnotations])
7. MUST accept the `context` control information in a payload labeled
   `metadata=none` ([section ##ControlInformationcontext])
8. MUST be prepared to receive a payload in which some instances are
   represented positionally and others are not ([section
   ##DesignPrinciples])
9. MUST be prepared to receive the service document, error responses and
   batch documents in the representation defined by
   [OData-JSON](#ODataJSON) ([section ##ServiceDocument], [section
   ##ErrorResponse], [section ##BatchRequestsandResponses])

In order to be a conforming producer of the OData compact JSON format, a
client or service:

10. MUST be a conforming producer of the OData JSON format
    ([OData-JSON](#ODataJSON))
11. MUST NOT produce a compact payload unless the receiver has indicated
    that it accepts one ([section ##RequestingtheCompactJSONFormat])
    1. a service MUST NOT return a compact response unless the request
       specified `compact=true`
    2. a client MUST NOT send a compact request body unless the service
       has advertised support for `compact=true`
12. MUST include the `compact=true` format parameter in the
    `Content-Type` header of every compact payload ([section
    ##HeaderContentType])
13. MUST include the `context` control information in every compact
    message body ([section ##ControlInformationcontext])
14. MUST produce, for every positional representation, exactly as many
    items as the positional property list has entries, in that order
    ([section ##PositionalPropertyList])
15. MUST NOT represent an instance positionally if it carries dynamic
    properties that are not in the positional property list ([section
    ##OpenTypesandDynamicProperties])
16. MUST use the empty wrapper object `{}` for a position whose property
    is not applicable to the instance ([section ##DerivedTypes])
17. SHOULD use the value name `_` in preference to `value` ([section
    ##TheWrapperObject])
18. SHOULD reference a versioned metadata document from the context URL
    ([section ##DeterminingthePositionalPropertyList])

In order to be a conforming service supporting the OData compact JSON
format, a service:

19. SHOULD advertise support with the
    [Capabilities.SupportedFormats]{.term} term ([section
    ##AdvertisingSupport])
20. MUST return `406 Not Acceptable` if the client requests
    `compact=true` and the service does not support it ([section
    ##RequestingtheCompactJSONFormat])
21. MUST reject with `415 Unsupported Media Type` a request body labeled
    `compact=true` that it does not support ([section
    ##RequestingtheCompactJSONFormat])
22. MUST reject with `400 Bad Request` a compact request body whose
    positional representation does not match the positional property list
    ([section ##DeterminingthePositionalPropertyListinRequests])
