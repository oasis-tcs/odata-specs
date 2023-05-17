# ##sec Conformance

Conforming services MUST follow all rules of this specification for the set transformations and aggregation methods they support. They MUST implement all set transformations and aggregation methods they advertise via the annotation [`ApplySupported`](#AggregationCapabilities).

Conforming clients MUST be prepared to consume a model that uses any or all of the constructs defined in this specification, including custom aggregation methods defined by the service, and MUST ignore any constructs not defined in this version of the specification.

# Appendix ##asec References

This appendix contains the normative and informative references that are used in this document.

While any hyperlinks included in this appendix were valid at the time of publication, OASIS cannot guarantee their long-term validity.

## ##subasec Normative References

The following documents are referenced in such a way that some or all of their content constitutes requirements of this document.

<a name="ODataABNF">[OData-ABNF]</a>  
_ABNF components: OData ABNF Construction Rules Version 4.01 and OData ABNF Test Cases._  
See the link in "[Related work](#RelatedWork)" section on cover page.

<a name="ODataAggABNF">[OData-Agg-ABNF]</a>  
_OData Aggregation ABNF Construction Rules Version 4.0._  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

<a name="ODataCore">[OData-Core]</a>  
_OData Core Vocabulary._  
See link in "[Related work](#RelatedWork)" section on cover page.

<a name="ODataCSDL">[OData-CSDL]</a>  
_OData Common Schema Definition Language (CSDL) JSON Representation Version 4.01. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. 11 May 2020. OASIS Standard._  
https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/os/odata-csdl-json-v4.01-os.html.  
Latest stage: https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html.

<a name="ODataJSON">[OData-JSON]</a>  
_OData JSON Format Version 4.01. Edited by Michael Pizzo, Ralf Handl, and Mark Biamonte. 11 May 2020. OASIS Standard._  
https://docs.oasis-open.org/odata/odata-json-format/v4.01/os/odata-json-format-v4.01-os.html.  
Latest stage: https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html.

<a name="ODataProtocol">[OData-Protocol]</a>  
_OData Version 4.01. Part 1: Protocol. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. 23 April 2020. OASIS Standard._  
https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html.  
Latest stage: https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html.

<a name="ODataURL">[OData-URL]</a>  
_OData Version 4.01. Part 2: URL Conventions. Edited by Michael Pizzo, Ralf Handl, and Martin Zurmuehl. 23 April 2020. OASIS Standard._  
https://docs.oasis-open.org/odata/odata/v4.01/os/part2-url-conventions/odata-v4.01-os-part2-url-conventions.html.  
Latest stage: https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html.

<a name="ODataVocAggr">[OData-VocAggr]</a>  
_OData Aggregation Vocabulary._  
See link in "[Additional artifacts](#AdditionalArtifacts)" section on cover page.

<a name="RFC2119">[RFC2119]</a>  
_Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997_  
https://www.rfc-editor.org/info/rfc2119.

<a name="RFC8174">[RFC8174]</a>  
_Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017_  
https://www.rfc-editor.org/info/rfc8174.

# Appendix ##asec Acknowledgments

The contributions of the OASIS OData Technical Committee members, enumerated in [OData-Protocol](#ODataProtocol), are gratefully acknowledged.
