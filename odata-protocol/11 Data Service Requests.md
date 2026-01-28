
-------

# ##sec Data Service Requests

This chapter describes the semantics of the HTTP verbs `GET`, `POST`,
`PATCH`, `PUT`, and `DELETE` for OData resources.

`GET` requests:
- [Metadata Requests](#MetadataRequests) and subsections
- [Requesting Data](#RequestingData) and subsections
- [Requesting Changes](#RequestingChanges) and subsections
- [Functions](#Functions) and subsections

`POST` requests:
- [Create an Entity](#CreateanEntity) and subsections
- [Create a Media Entity](#CreateaMediaEntity)
- [Positional Inserts](#PositionalInserts)
- [Actions](#Actions) and subsections
- [Batch Requests](#BatchRequests) and subsections

`PATCH` and `PUT` requests:
- [Update an Entity](#UpdateanEntity) and subsections
- [Upsert an Entity](#UpsertanEntity)
- [Modifying Relationships between Entities](#ModifyingRelationshipsbetweenEntities) and subsections
- [Update a Media Entity Stream](#UpdateaMediaEntityStream)
- [Update Stream Values](#UpdateStreamValues)
- [Update a Primitive Property](#UpdateaPrimitiveProperty)
- [Update a Complex Property](#UpdateaComplexProperty)
- [Update a Collection Property](#UpdateaCollectionProperty)
- [Managing Members of an Ordered Collection](#ManagingMembersofanOrderedCollection)
- [Update a Collection of Entities](#UpdateaCollectionofEntities)
- [Update Members of a Collection](#UpdateMembersofaCollection)

`DELETE` requests:
- [Delete an Entity](#DeleteanEntity)
- [Delete a Media Entity](#DeleteaMediaEntity)
- [Delete Stream Values](#DeleteStreamValues)
- [Set a Value to Null](#SetaValuetoNull)
- [Delete Members of a Collection](#DeleteMembersofaCollection)

## ##subsec Metadata Requests

An OData service is a self-describing service that exposes metadata
defining the entity sets, singletons, relationships, entity types, and
operations.

### ##subsubsec Service Document Request

Service documents enable simple hypermedia-driven clients to enumerate
and explore the resources offered by the data service.

OData services MUST support returning a service document from the root
URL of the service (the *service root*).

The format of the service document is dependent upon the format
selected.

### ##subsubsec Metadata Document Request

An OData *metadata document* is a representation of the [data
model](#DataModel) that describes the data and operations exposed by an
OData service.

[OData-CSDLJSON](#ODataCSDL) describes a JSON representation for OData
metadata documents and provides a JSON schema to validate their
contents. The media type of the JSON representation of an OData metadata
document is `application/json`.

[OData-CSDLXML](#ODataCSDLXML) describes an XML representation for OData
metadata documents and provides an XML schema to validate their
contents. The media type of the XML representation of an OData metadata
document is `application/xml`.

OData services can expose a metadata document that describes the data
model exposed by the service. The *metadata document URL* MUST be the
root URL of the service with `$metadata` appended. To retrieve this
document the client issues a `GET` request to the metadata document URL.

If a request for metadata does not specify a format preference (via
[`Accept`](#HeaderAccept) header or
[`$format`](#SystemQueryOptionformat)) then the XML representation MUST
be returned.

## ##subsec Requesting Data

OData services support requests for data via HTTP `GET` requests.

The path of the URL specifies the target of the request (for example;
the collection of entities, entity, navigation property, structural
property, or operation). Additional query operators, such as filter,
sort, page, and projection operations are specified through query
options.

This section describes the types of data requests defined by OData. For
complete details on the syntax for building requests, see
[OData-URL](#ODataURL).

OData services are hypermedia driven services that return URLs to the
client. If a client subsequently requests the advertised resource and
the URL has expired, then the service SHOULD respond with
[`410 Gone`](#ResponseCode410Gone). If this is not feasible, the service
MUST respond with [`404 Not Found`](#ResponseCode404NotFound).

The format of the returned data is dependent upon the request and the
format specified by the client, either in the
[`Accept`](#HeaderAccept) header or using the
[`$format`](#SystemQueryOptionformat) query option. If
the client specifies neither an [`Accept`](#HeaderAccept) header nor the
[`$format`](#SystemQueryOptionformat) query option, the
service is allowed to return the response in any format.

### ##subsubsec System Query Options

OData defines a number of system query options that allow refining the
request. System query options are prefixed with the dollar (`$`)
character, which is optional in OData 4.01. 4.01 services MUST support
case-insensitive system query option names specified with or without the
`$` prefix.
Clients that want to work with 4.0 services MUST use lower case names
and specify the `$` prefix.

The result of the request MUST be as if the system query options were
evaluated in the following order.

- [`$schemaversion`](#SystemQueryOptionschemaversion)
MUST be evaluated first, because it may influence any further
processing.

Prior to applying any [server-driven paging](#ServerDrivenPaging):

- `$apply` --- defined in [OData-Aggregation](#ODataAggregation)
- [`$compute`](#SystemQueryOptioncompute)
- [`$search`](#SystemQueryOptionsearch)
- [`$filter`](#SystemQueryOptionfilter)
- [`$count`](#SystemQueryOptioncount)
- [`$orderby`](#SystemQueryOptionorderby)
- [`$skip`](#SystemQueryOptionskip)
- [`$top`](#SystemQueryOptiontop)

After applying any [server-driven paging](#ServerDrivenPaging):

- [`$expand`](#SystemQueryOptionexpand)
- [`$select`](#SystemQueryOptionselect)
- [`$format`](#SystemQueryOptionformat)

### ##subsubsec Requesting Individual Entities

To retrieve an individual entity, the client makes a `GET` request to a
URL that identifies the entity, e.g. its read URL.

The read URL can be obtained from a response payload containing that
instance, for example as a `readLink` or `editLink` in an
[#OData-JSON#ControlInformationeditLinkandreadLinkodataeditLinkandodatareadLink] payload. In addition, services
MAY support conventions for constructing a read URL using the entity's
key value(s), as described in [#OData-URL#CanonicalURL].

Borderline cases are possible in which two or more entity sets with the same entity type
use overlapping keys and a non-containment navigation property [#OData-CSDL#ContainmentNavigationProperty]
with that entity type does not have a unique navigation property binding [#OData-CSDL#NavigationPropertyBinding].
In such cases, a URL that identifies a collection of entities followed by
an entity key to select a single entity (like in [#OData-URL#AddressingEntities])
may not identify a unique entity. Services SHOULD avoid such cases, since the
behavior is undefined for them.

::: example
Example ##ex: Products can be sourced from a supplier (like `Suppliers(5)`)
as well as from a subsidiary (like `Subsidiaries(5)`). These two entities have the same
entity type that is also used by the non-containment navigation property `SourcedFrom`
defined on the product entity type. Then the following URL
might identify either of the two entities:
```
GET http://host/service/Products(1)/SourcedFrom(5)
```
:::

The set of structural or navigation properties to return may be
specified through [`$select`](#SystemQueryOptionselect) or
[`$expand`](#SystemQueryOptionexpand) system query options.

Clients MUST be prepared to receive additional properties in an entity
or complex type instance that are not advertised in metadata, even for
types not marked as open.

Properties that are not available are not returned. If their unavailability
is due to permissions, the
[Core.Permissions]{.term}
annotation, defined in [OData-VocCore](#ODataVocCore) MUST be returned
for the property with a value of `None`.
If the [`omit-values`](#Preferenceomitvalues) preference is
applied, `Core.Permissions` or another specific annotation that explains the
reason MUST be returned for every unavailable property.

If no entity exists with the specified request URL, the service responds
with [`404 Not Found`](#ResponseCode404NotFound).

### ##subsubsec Requesting the Media Stream of a Media Entity using `$value`

A *media entity* is an entity that represents an out-of-band stream,
such as a photograph.

Use a media entity if the out-of-band stream is the main topic of
interest and the media entity is just structured additional information
attached to the stream. Use a normal entity with one or more [stream
properties](#ManagingStreamProperties) if the structured data of the
entity is the main topic of interest and the stream data is just
additional information attached to the structured data.

To address the media stream represented by a media entity, clients
append `/$value` to the resource path of the media entity URL.
The media type of the response is the
media type of the stream, subject to content type negotiation based on the
[`Accept`](#HeaderAccept) header of the request.
The response body is the octet-stream that represents the raw
value of the media stream with that media type. Alternatively, services
MAY redirect from this canonical URL to the source URL of the media
stream.

Appending `/$value` to an entity that is not a media entity returns
`400 Bad Request`.

Attempting to retrieve the media stream from a single-valued navigation
property referencing a media entity whose value is null returns
[`404 Not Found`](#ResponseCode404NotFound).

### ##subsubsec Requesting Individual Properties

To retrieve an individual property, the client issues a `GET` request to
the property URL. The property URL is the entity read URL with `/` and
the property name appended.

For complex typed properties, the path can be further extended with the
name of an individual property of the complex type.

See [#OData-URL#AddressingaProperty] for details.

If the property is single-valued and has the `null` value, the service
responds with [`204 No Content`](#ResponseCode204NoContent).

If the property is not available, for example due to permissions, the
service responds with [`404 Not Found`](#ResponseCode404NotFound).

::: example
Example ##ex:
```
GET http://host/service/Products(1)/Name
```
:::

#### ##subsubsubsec Requesting Stream Properties

If the property being requested has type `Edm.Stream` (see
[#OData-URL#AddressingaProperty]), the media type of the response is the
media type of the stream, subject to content type negotiation based on the
[`Accept`](#HeaderAccept) header of the request.
The response body is the octet-stream that represents the raw
value of the stream property with that media type.

Note this response format disregards any [`$format`](#SystemQueryOptionformat)
system query option.

#### ##subsubsubsec Requesting a Raw Value using `$value`

To retrieve the raw value of a primitive property or operation result, the client sends
a `GET` request to the raw value URL. See [#OData-URL#AddressingaRawValue] for details.

The `Content-Type` of the response is determined using the `Accept`
header and the [`$format`](#SystemQueryOptionformat) system query
option.

The default format for `Edm.Binary` is the format specified by the
[Core.MediaType]{.term}
annotation (see [OData-VocCore](#ODataVocCore)) if this
annotation is present. If not annotated, the format cannot be predicted
by the client.

The default format for `Edm.Geo` types is `text/plain` using the WKT
(well-known text) format, see rules [fullCollectionLiteral]{.abnf},
[fullLineStringLiteral]{.abnf}, [fullMultiPointLiteral]{.abnf},
[fullMultiLineStringLiteral]{.abnf}, [fullMultiPolygonLiteral]{.abnf},
[fullPointLiteral]{.abnf}, and [fullPolygonLiteral]{.abnf} in
[OData-ABNF](#ODataABNF).

The default format for single primitive values except `Edm.Binary` and
the `Edm.Geo` types is `text/plain`. Responses of type
`Edm.String` can use the `charset` format parameter to specify the
character set used for representing the string value. Responses for the
other primitive types follow the rules [booleanValue]{.abnf}, [byteValue]{.abnf},
[dateValue]{.abnf}, [dateTimeOffsetValue]{.abnf}, [decimalValue]{.abnf}, [doubleValue]{.abnf},
[durationValue]{.abnf}, [enumValue]{.abnf}, [guidValue]{.abnf}, [int16Value]{.abnf}, [int32Value]{.abnf},
[int64Value]{.abnf}, [sbyteValue]{.abnf}, [singleValue]{.abnf}, and [timeOfDayValue]{.abnf} in
[OData-ABNF](#ODataABNF).

A raw value request for a property or operation result of type `Edm.Stream`
returns `400 Bad Request`.

A raw value request for a property or operation result that is `null` results in a
[`204 No Content`](#ResponseCode204NoContent) response.

If the property or operation result is not available, for example due to permissions, the
service responds with [`404 Not Found`](#ResponseCode404NotFound).

::: example
Example ##ex:
```
GET http://host/service/Products(1)/Name/$value
```
:::

### ##subsubsec Specifying Properties to Return

The [`$select`](#SystemQueryOptionselect) and
[`$expand`](#SystemQueryOptionexpand) system query options enable the
client to specify the set of structural properties and navigation
properties to include in a response. The service MAY include additional
properties not specified in [`$select`](#SystemQueryOptionselect) and
[`$expand`](#SystemQueryOptionexpand), including properties not defined
in [the metadata document](#MetadataDocumentRequest).

#### ##subsubsubsec System Query Option `$select`

The `$select` system query option requests that the service return only
the properties, dynamic properties, [actions](#Actions) and
[functions](#Functions) explicitly requested by the client. The service
returns the specified content, if available, along with any available
[expanded](#SystemQueryOptionexpand) navigation or stream properties,
and MAY return additional information.

The value of the `$select` query option is a comma-separated list of
paths that end with properties, non-entity-valued instance annotations,
qualified action names, or qualified function names, as well as of the star
operator (`*`), or the star operator prefixed with the namespace or
alias of the schema in order to specify all operations defined in the
schema. Only aliases defined in the metadata document of the service can
be used in URLs.

::: example
Example ##ex: request only the `Rating` and `ReleaseDate` for the matching
Products
```
GET http://host/service/Products?$select=Rating,ReleaseDate
```
:::

It is also possible to request all structural properties, including any
dynamic properties, using the star operator. The star operator SHOULD
NOT introduce navigation properties, actions or functions not otherwise
requested.

::: example
Example ##ex:
```
GET http://host/service/Products?$select=*
```
:::

Properties of related entities can be specified by including the
`$select` [option](#ExpandOptions) within the `$expand`.

::: example
Example ##ex:
```
GET http://host/service/Products?$expand=Category($select=Name)
```
:::

The properties specified in `$select` are represented in addition to any
expanded navigation or stream properties. If a navigation property is
specified in `$select`, then the corresponding navigation link is
represented in the response. If the navigation property also appears in
an [`$expand`](#SystemQueryOptionexpand) query option, then it is
additionally represented as inline content.

::: example
Example ##ex: for each category, return the `CategoryName` and the
`Products` navigation link
```
GET http://host/service/Categories?$select=CategoryName,Products
```
:::

It is also possible to request all actions or functions available for
each returned entity.

::: example
Example ##ex:
```
GET http://host/service/Products?$select=DemoService.*
```
:::

If the selected property represents a collection of primitive or complex values, 
then the [count segment](#RequestingtheNumberofItemsinaCollection) (`/$count`), 
optionally followed by the [Select Options](#SelectOptions) [`$filter`](#SystemQueryOptionfilter) 
and/or [`$search`](#SystemQueryOptionsearch), can be appended to the path in order 
to return only the count of the matching items.

::: example
Example ##ex: for each customer, return the ID and the count of addresses 
starting with the letter 'H'.
```
GET http://host/service/Customers?$select=ID,Addresses/$count($filter=startswith(City,'H'))
```
:::

If the `$select` query option is not specified, the service returns
the full set of properties or a default set of properties. The default
set of properties MUST include all key properties.
Services may change the default set of properties returned. This
includes returning new properties by default and omitting properties
previously returned by default. Clients that rely on
specific properties in the response MUST use
`$select` with the required properties or with `*`.

If the service returns less than the full set
of properties, either because the client specified a select or because
the service returned a subset of properties in the absence of a select,
the [context URL](#ContextURL) MUST reflect the set of selected
properties and projected [expanded](#SystemQueryOptionexpand) navigation
properties.

##### ##subsubsubsubsec Select Options

Query options can be applied to a selected property by appending a
semicolon-separated list of query options, enclosed in parentheses, to
the property. Allowed system query options are
[`$select`](#SystemQueryOptionselect) and
[`$compute`](#SystemQueryOptioncompute) for complex properties, plus
[`$filter`](#SystemQueryOptionfilter),
[`$search`](#SystemQueryOptionsearch),
[`$count`](#SystemQueryOptioncount),
[`$orderby`](#SystemQueryOptionorderby),
[`$skip`](#SystemQueryOptionskip), and [`$top`](#SystemQueryOptiontop)
for collection-valued properties. A property MUST NOT have select
options specified in more than one place in a request and MUST NOT have
both select options and expand options specified.

#### ##subsubsubsec System Query Option `$expand`

The `$expand` system query option indicates the related entities and
stream values that MUST be represented inline. The service MUST return
the specified content, and MAY choose to return additional information.

The value of `$expand` is a comma-separated list of expand items. Each
expand item is evaluated relative to the retrieved resource being
expanded.

For a full description of the syntax used when building requests, see
[#OData-URL#SystemQueryOptionexpand].

::: example
Example ##ex: for each customer entity within the Customers entity set the
value of all related Orders will be represented inline
```
GET http://host/service.svc/Customers?$expand=Orders
```
:::

::: example
Example ##ex: for each customer entity within the Customers entity set the
references to the related Orders will be represented inline
```
GET http://host/service.svc/Customers?$expand=Orders/$ref
```
:::

::: example
Example ##ex: for each customer entity within the Customers entity set the
media stream representing the customer photo will be represented inline
```
GET http://host/service.svc/Customers?$expand=Photo
```
:::

If the expand item represents a collection of entities, then the 
[count segment](#RequestingtheNumberofItemsinaCollection) (`/$count`), optionally followed by 
the [Expand Options](#ExpandOptions) [`$filter`](#SystemQueryOptionfilter) and/or 
[`$search`](#SystemQueryOptionsearch), can be appended to the expand item in order to 
return only the count of matching items.

::: example
Example ##ex: for each Category, return the `Name` and the count of `Products` 
starting with the letter 'H'.
```
GET http://host/service/Categories?$select=Name&$expand=Products/$count($filter=startswith(Name,'H'))
```
:::

##### ##subsubsubsubsec Expand Options

The set of expanded entities can be further refined through the
application of expand options, expressed as a semicolon-separated list
of system query options, enclosed in parentheses, see
[#OData-URL#SystemQueryOptionexpand].

Allowed system query options are
[`$compute`](#SystemQueryOptioncompute),
[`$select`](#SystemQueryOptionselect),
`$expand`, and
[`$levels`](#ExpandOptionlevels)
 for all navigation properties, plus
[`$filter`](#SystemQueryOptionfilter),
[`$orderby`](#SystemQueryOptionorderby),
[`$skip`](#SystemQueryOptionskip), 
[`$top`](#SystemQueryOptiontop),
[`$count`](#SystemQueryOptioncount), and
[`$search`](#SystemQueryOptionsearch)
 for collection-valued navigation properties.

::: example
Example ##ex: for each customer entity within the `Customers` entity set,
the value of those related `Orders` whose `Amount` is greater than 100
will be represented inline
```
GET http://host/service.svc/Customers?$expand=Orders($filter=Amount gt 100)
```
:::

::: example
Example ##ex: for each order within the `Orders` entity set, the following
will be represented inline:
- The `Items` related to
the `Orders` identified by the resource path section of the URL and the
products related to each order item.
- The `Customer` related to each order returned.
```
GET http://host/service.svc/Orders?$expand=Items($expand=Product),Customer
```
:::

::: example
Example ##ex: for each customer entity in the Customers entity set, the
value of all related InHouseStaff will be represented inline if the
entity is of type VipCustomer or a subtype of that. For entities that
are not of type `VipCustomer`, or any of its subtypes, that entity may
be returned with no inline representation for the expanded navigation
property `InHouseStaff` (the service can always send more than requested)
```
GET http://host/service.svc/Customers?$expand=SampleModel.VipCustomer/InHouseStaff
```
:::

###### ##subsubsubsubsubsec Expand Option `$levels`

The `$levels` expand option can be used to specify the number of levels
of recursion for a hierarchy in which the related entity type is the
same as, or can be cast to, the source entity type. A `$levels` option
with a value of 1 specifies a single expand with no recursion. All provided
expand options except `$levels` are applied at each level of the hierarchy.

Services MAY support the symbolic value `max` in addition to numeric
values. In that case they MUST solve circular dependencies by injecting
an entity reference somewhere in the circular dependency.

Clients using `$levels=max` MUST be prepared to handle entity references
in cases were a circular reference would occur otherwise.

4.01 services that support `max` SHOULD do so in a case-insensitive
manner. Clients that want to work with 4.0 services MUST use lower case.

::: example
Example ##ex: return each employee from the Employees entity set and, for
each employee that is a manager, return all direct reports, recursively
to four levels
```
GET http://host/service/Employees?$expand=Model.Manager/DirectReports($levels=4)
```
:::

#### ##subsubsubsec System Query Option `$compute`

The `$compute` system query option allows clients to define computed
properties that can be used in [`$expand`](#SystemQueryOptionexpand),
[`$select`](#SystemQueryOptionselect),
[`$filter`](#SystemQueryOptionfilter), or
[`$orderby`](#SystemQueryOptionorderby).
The `$compute` system query option allows clients to define computed properties that can be used in [`$expand`](#SystemQueryOptionexpand),
[`$select`](#SystemQueryOptionselect),
[`$filter`](#SystemQueryOptionfilter), or
[`$orderby`](#SystemQueryOptionorderby). Computed properties are expanded or selected according to their instance-specific type. A computed property is ignored by `$expand` if its instance-specific value is neither a stream, an entity, nor a collection of entities, and the service cannot determine this based on the compute expression.

Computed properties SHOULD be included as dynamic properties in the result without being explicitly mentioned in `$expand` or `$select`, or implied by star (`*`).

::: example
Example ##ex: compute total price for order items (line breaks only for
readability)
```
GET http://host/service/Customers
   ?$filter=Orders/any(o:o/TotalPrice gt 100)
   &$expand=Orders($compute=Price mult Qty as TotalPrice
                  ;$select=Name,Price,Qty,TotalPrice)
```
:::

### ##subsubsec Querying Collections

OData services support querying collections of entities, complex type
instances, and primitive values.

The target collection is specified through a URL, and query operations
such as filter, sort, paging, and projection are specified as
[*system query options*](#SystemQueryOptions) optionally prefixed with a dollar
(`$`) character. 4.01 Services MUST support case-insensitive system
query option names specified with or without the `$` prefix. Clients
that want to work with 4.0 services MUST use lower case names and
specify the `$` prefix.

The same system query option MUST NOT be specified more than once for
any resource.

An OData service MAY support some or all of the system query options
defined. If a data service does not support a system query option, it
MUST fail any request that contains the unsupported option and SHOULD
return [`501 Not Implemented`](#ResponseCode501NotImplemented).

#### ##subsubsubsec System Query Option `$filter`

The `$filter` system query option restricts the set of items returned.

::: example
Example ##ex: return all Products whose `Price` is less than $10.00
```
GET http://host/service/Products?$filter=Price lt 10.00
```
:::

The [`$count`](#SystemQueryOptioncount) segment may be used within a
`$filter` expression to limit the items returned based on the exact
count of related entities or items within a collection-valued property.

::: example
Example ##ex: return all Categories with less than 10 products
```
GET http://host/service/Categories?$filter=Products/$count lt 10
```
:::

The value of the `$filter` option is a Boolean expression as defined in
[OData-ABNF](#ODataABNF) rule [filterExpr]{.abnf}.

##### ##subsubsubsubsec Built-in Filter Operations

OData supports a set of built-in filter operations, as described in this
section.

4.01 services MUST support case-insensitive operation names. Clients
that want to work with 4.0 services MUST use lower case operation names.

For a full description of the syntax used when building requests, see
[OData-URL](#ODataURL).

<table>
<tr><th>Operator</th><th>Description</th><th>Example</th></tr>
<tr><td colspan="3"><strong>Comparison Operators</strong></td></tr>
<tr><td><code>eq</code></td><td>Equal                </td><td><pre><code>Address/City eq 'Redmond'</code></pre></td></tr>
<tr><td><code>ne</code></td><td>Not equal            </td><td><pre><code>Address/City ne 'London'</code></pre></td></tr>
<tr><td><code>gt</code></td><td>Greater than         </td><td><pre><code>Price gt 20</code></pre></td></tr>
<tr><td><code>ge</code></td><td>Greater than or equal</td><td><pre><code>Price ge 10</code></pre></td></tr>
<tr><td><code>lt</code></td><td>Less than            </td><td><pre><code>Price lt 20</code></pre></td></tr>
<tr><td><code>le</code></td><td>Less than or equal   </td><td><pre><code>Price le 100</code></pre></td></tr>
<tr><td><code>has</code></td><td>Has flags           </td><td><pre><code>Style has Sales.Color'Yellow'</code></pre></td></tr>
<tr><td><code>in</code></td><td>Is a member of       </td><td><pre><code>Address/City in ('Redmond', 'London')</code></pre></td></tr>
<tr><td colspan="3"><strong>Logical Operators</strong></td></tr>
<tr><td><code>and</code></td><td>Logical and         </td><td><pre><code>Price le 200 and Price gt 3.5</code></pre></td></tr>
<tr><td><code>or</code></td><td>Logical or           </td><td><pre><code>Price le 3.5 or Price gt 200</code></pre></td></tr>
<tr><td><code>not</code></td><td>Logical negation    </td><td><pre><code>not endswith(Description,'milk')</code></pre></td></tr>
<tr><td colspan="3"><strong>Arithmetic Operators</strong></td></tr>
<tr><td><code>add</code></td><td>Addition            </td><td><pre><code>Price add 5 gt 10</code></pre></td></tr>
<tr><td><code>sub</code></td><td>Subtraction         </td><td><pre><code>Price sub 5 gt 10</code></pre></td></tr>
<tr><td><code>mul</code></td><td>Multiplication      </td><td><pre><code>Price mul 2 gt 2000</code></pre></td></tr>
<tr><td><code>div</code></td><td>Division            </td><td><pre><code>Price div 2 gt 4</code></pre></td></tr>
<tr><td><code>divby</code></td><td>Decimal Division  </td><td><pre><code>Price divby 2 gt 3.5</code></pre></td></tr>
<tr><td><code>mod</code></td><td>Modulo              </td><td><pre><code>Price mod 2 eq 0</code></pre></td></tr>
<tr><td colspan="3"><strong>Grouping Operators</strong></td></tr>
<tr><td><code>( )</code></td><td>Precedence grouping </td><td><pre><code>(Price sub 5) gt 10</code></pre></td></tr>
</table>

##### ##subsubsubsubsec Built-in Query Functions

OData supports a set of built-in functions that can be used within
`$filter` operations. The following table lists the available functions.

4.01 services MUST support case-insensitive built-in function names.
Clients that want to work with 4.0 services MUST use lower case names.

For a full description of the syntax used when building requests, see
[OData-URL](#ODataURL).

OData does not define an ISNULL or COALESCE operator. Instead, there is
a `null` literal that can be used in comparisons.

<table>
<tr><th>Function</th><th>Example</th></tr>
<tr><td colspan="2"><strong>String and Collection Functions</strong></td></tr>
<tr><td><code>concat</code></td><td><pre><code>concat(concat(City,', '), Country) eq 'Berlin, Germany'</code></pre></td></tr>
<tr><td><code>contains</code></td><td><pre><code>contains(CompanyName,'freds')</code></pre></td></tr>
<tr><td><code>endswith</code></td><td><pre><code>endswith(CompanyName,'Futterkiste')</code></pre></td></tr>
<tr><td><code>indexof</code></td><td><pre><code>indexof(CompanyName,'lfreds') eq 1</code></pre></td></tr>
<tr><td><code>length</code></td><td><pre><code>length(CompanyName) eq 19</code></pre></td></tr>
<tr><td><code>startswith</code></td><td><pre><code>startswith(CompanyName,’Alfr’)</code></pre></td></tr>
<tr><td><code>substring</code></td><td><pre><code>substring(CompanyName,1) eq 'lfreds Futterkiste'</code></pre></td></tr>
<tr><td colspan="2"><strong>Collection Functions</strong></td></tr>
<tr><td><code>hassubset</code></td><td><pre><code>hassubset([4,1,3],[3,1])</code></pre></td></tr>
<tr><td><code>hassubsequence</code></td><td><pre><code>hassubsequence([4,1,3,1],[1,1])</code></pre></td></tr>
<tr><td colspan="2"><strong>String Functions</strong></td></tr>
<tr><td><code>matchespattern</code></td><td><pre><code>matchespattern(CompanyName,'%5EA.*e$')</code></pre></td></tr>
<tr><td><code>tolower</code></td><td><pre><code>tolower(CompanyName) eq 'alfreds futterkiste'</code></pre></td></tr>
<tr><td><code>toupper</code></td><td><pre><code>toupper(CompanyName) eq 'ALFREDS FUTTERKISTE'</code></pre></td></tr>
<tr><td><code>trim	</code></td><td><pre><code>trim(CompanyName) eq 'Alfreds Futterkiste'</code></pre></td></tr>
<tr><td colspan="2"><strong>Date and Time Functions</strong></td></tr>
<tr><td><code>day</code></td><td><pre><code>day(StartTime) eq 8</code></pre></td></tr>
<tr><td><code>date</code></td><td><pre><code>date(StartTime) ne date(EndTime)</code></pre></td></tr>
<tr><td><code>fractionalseconds</code></td><td><pre><code>second(StartTime) eq 0</code></pre></td></tr>
<tr><td><code>hour</code></td><td><pre><code>hour(StartTime) eq 1</code></pre></td></tr>
<tr><td><code>maxdatetime</code></td><td><pre><code>EndTime eq maxdatetime()</code></pre></td></tr>
<tr><td><code>mindatetime</code></td><td><pre><code>StartTime eq mindatetime()</code></pre></td></tr>
<tr><td><code>minute</code></td><td><pre><code>minute(StartTime) eq 0</code></pre></td></tr>
<tr><td><code>month</code></td><td><pre><code>month(BirthDate) eq 12</code></pre></td></tr>
<tr><td><code>now</code></td><td><pre><code>StartTime ge now()</code></pre></td></tr>
<tr><td><code>second</code></td><td><pre><code>second(StartTime) eq 0</code></pre></td></tr>
<tr><td><code>time</code></td><td><pre><code>time(StartTime) le StartOfDay</code></pre></td></tr>
<tr><td><code>totaloffsetminutes</code></td><td><pre><code>totaloffsetminutes(StartTime) eq 60</code></pre></td></tr>
<tr><td><code>totalseconds</code></td><td><pre><code>totalseconds(duration'PT1M') eq 60</code></pre></td></tr>
<tr><td><code>year</code></td><td><pre><code>year(BirthDate) eq 0</code></pre></td></tr>
<tr><td colspan="2"><strong>Arithmetic Functions</strong></td></tr>
<tr><td><code>ceiling</code></td><td><pre><code>ceiling(Freight) eq 33</code></pre></td></tr>
<tr><td><code>floor</code></td><td><pre><code>floor(Freight) eq 32</code></pre></td></tr>
<tr><td><code>round</code></td><td><pre><code>round(Freight) eq 32</code></pre></td></tr>
<tr><td colspan="2"><strong>Type Functions</strong></td></tr>
<tr><td><code>cast</code></td><td><pre><code>cast(ShipCountry,Edm.String)</code></pre></td></tr>
<tr><td><code>isof</code></td><td><pre><code>isof(NorthwindModel.Order)</code></pre></td></tr>
<tr><td><code>isof</code></td><td><pre><code>isof(ShipCountry,Edm.String)</code></pre></td></tr>
<tr><td colspan="2"><strong>Geo Functions</strong></td></tr>
<tr><td><code>geo.distance</code></td><td><pre><code>geo.distance(CurrentPosition,TargetPosition)</code></pre></td></tr>
<tr><td><code>geo.intersects</code></td><td><pre><code>geo.intersects(Position,TargetArea)</code></pre></td></tr>
<tr><td><code>geo.length</code></td><td><pre><code>geo.length(DirectRoute)</code></pre></td></tr>
<tr><td colspan="2"><strong>Conditional Functions</strong></td></tr>
<tr><td><code>case</code></td><td><pre><code>case(X gt 0:1,X lt 0:-1,true:0)</code></pre></td></tr>
</table>

##### ##subsubsubsubsec Parameter Aliases

Parameter aliases can be used in place of literal values in entity keys,
[function parameters](#InvokingaFunction), or within a
[`$compute`](#SystemQueryOptioncompute),
[`$filter`](#SystemQueryOptionfilter) or
[`$orderby`](#SystemQueryOptionorderby) expression. Parameters aliases
are names beginning with an at sign (`@`).

Actual parameter values are specified as query options in the query part
of the request URL. The query option name is the name of the parameter
alias, and the query option value is the value to be used for the
specified parameter alias.

::: example
Example ##ex: returns all employees whose Region property matches the
string parameter value `WA`
```
GET http://host/service.svc/Employees?$filter=Region eq @p1&@p1='WA'
```
:::

Parameter aliases allow the same value to be used multiple times in a
request and may be used to reference primitive, structured, or
collection values.

If a parameter alias is not given a value in the query part of the
request URL, the value MUST be assumed to be null. A parameter alias can
be used in multiple places within a request URL, but its value MUST NOT
be specified more than once.

Parameter alias values used in `/$filter` path segments are always
passed as expressions (because that is the expected type of the
parameter).

All other parameter alias values are evaluated in the context of the
resource identified by the path segment in which they are assigned and
passed as values into the expression. Parameter alias value assignments
MAY be nested within `$expand` and
`$select`, in which case they are evaluated relative to the resource context of the `$expand` or `$select`.

::: example
Example ##ex: returns all employees, expands their manager, and expands
all direct reports with the same first name as the manager, using a
parameter alias for `$this` to pass the manager into the filter on the
expanded direct reports
```
GET http://host/service.svc/Employees?$expand=Manager(@m=$this;$expand=DirectReports($filter=@m/FirstName eq FirstName))
```
:::

#### ##subsubsubsec System Query Option `$orderby`

The `$orderby` System Query option specifies the order in which items
are returned from the service.

The value of the `$orderby` System Query option contains a
comma-separated list of expressions whose primitive result values are
used to sort the items. A special case of such an expression is a
property path terminating on a primitive property. A type cast using the
qualified entity type name is required to order by a property defined on
a derived type. Only aliases defined in the metadata document of the
service can be used in URLs.

The expression can include the suffix `asc` for ascending or `desc` for
descending, separated from the property name by one or more spaces. If
`asc` or `desc` is not specified, the service MUST order by the
specified property in ascending order. 4.01 services MUST support
case-insensitive values for `asc` and `desc`. Clients that want to work
with 4.0 services MUST use lower case values.

Null values come before non-null values when sorting in ascending order
and after non-null values when sorting in descending order.

Items are sorted by the result values of the first expression, and then
items with the same value for the first expression are sorted by the
result value of the second expression, and so on.

The Boolean value false comes before the value true in ascending order.

Services SHOULD order language-dependent strings according to the
[`Content-Language`](#HeaderContentLanguage) of the response, and SHOULD
annotate string properties with language-dependent order with the term
[Core.IsLanguageDependent]{.term},
see [OData-VocCore](#ODataVocCore).

Values of type `Edm.Stream` or any of the `Geo` types cannot be sorted.

::: example
Example ##ex: return all Products ordered by release date in ascending
order, then by rating in descending order
```
GET http://host/service/Products?$orderby=ReleaseDate asc, Rating desc
```
:::

Related entities may be ordered by specifying `$orderby` within the
`$expand` clause.

::: example
Example ##ex: return all Categories, and their Products ordered according
to release date and in descending order of rating
```
GET http://host/service/Categories?$expand=Products($orderby=ReleaseDate asc, Rating desc)
```
:::

`$count` may be used within a `$orderby` expression to order the
returned items according to the exact count of related entities or items
within a collection-valued property.

::: example
Example ##ex: return all Categories ordered by the number of Products
within each category
```
GET http://host/service/Categories?$orderby=Products/$count
```
:::

#### ##subsubsubsec System Query Option `$top`

The `$top` system query option specifies a non-negative integer $n$ that
limits the number of items returned from a collection.

Let $A$ be a copy of the result set with a total order that extends any
existing order of the result set but is otherwise chosen by the service. If no
unique ordering is imposed through an [`$orderby`](#SystemQueryOptionorderby)
query option, the service MUST choose a stable
ordering across requests that include `$top` or [`$skip`](#SystemQueryOptionskip).

If $A$ contains more than $n$ instances, the result of ${\tt \$top}=n$
consists of the first $n$ instances in $A$. Otherwise, the result equals $A$.
The instances in the result are in the same order as they occur in $A$.

::: example
Example ##ex: return only the first five products of the Products entity
set
```
GET http://host/service/Products?$top=5
```
:::

#### ##subsubsubsec System Query Option `$skip`

The `$skip` system query option specifies a non-negative integer $n$ that
excludes the first $n$ items of the queried collection from the result.

Let $A$ be a copy of the result set with a total order that extends any
existing order of the result set but is otherwise chosen by the service. If no
unique ordering is imposed through an [`$orderby`](#SystemQueryOptionorderby)
query option, the service MUST choose a stable
ordering across requests that include [`$top`](#SystemQueryOptiontop) or `$skip`.

If $A$ contains $n$ or fewer instances, the result of ${\tt \$skip}=n$
is empty. Otherwise, the first $n$ instances in $A$ are omitted
from the result and all remaining instances are kept in the same order as
they occur in $A$.

::: example
Example ##ex: return products starting with the 6th product of the
`Products` entity set
```
GET http://host/service/Products?$skip=5
```
:::

Where [`$top`](#SystemQueryOptiontop) and `$skip` are used together,
`$skip` MUST be applied before `$top`, regardless of the order in which
they appear in the request.

::: example
Example ##ex: return the third through seventh products of the `Products`
entity set
```
GET http://host/service/Products?$top=5&$skip=2
```
:::

If no unique ordering is imposed through an
[`$orderby`](#SystemQueryOptionorderby) query option, the service MUST
impose a stable ordering across requests that include `$skip`.

#### ##subsubsubsec System Query Option `$count`

The `$count` system query option with a value of `true` specifies that
the total count of items within a collection matching the request be
returned along with the result.

::: example
Example ##ex: return, along with the results, the total number of products
in the collection
```
GET http://host/service/Products?$count=true
```
:::

The count of related entities can be requested by specifying
the `$count` query option within the `$expand` clause.

::: example
Example ##ex:
```
GET http://host/service/Categories?$expand=Products($count=true)
```
:::

A `$count` query option with a value of `false` (or not specified) hints
that the service SHOULD NOT return a count.

The service returns an HTTP Status code of `400 Bad Request` if a value
other than `true` or `false` is specified.

The `$count` system query option ignores any
[`$top`](#SystemQueryOptiontop), [`$skip`](#SystemQueryOptionskip), or
[`$expand`](#SystemQueryOptionexpand) query options, and returns the
total count of results across all pages including only those results
matching any specified [`$filter`](#SystemQueryOptionfilter) and
[`$search`](#SystemQueryOptionsearch). Clients should be aware that the
count returned inline may not exactly equal the actual number of items
returned, due to latency between calculating the count and enumerating
the last value or due to inexact calculations on the service.

How the count is encoded in the response body is dependent upon the
selected format.

#### ##subsubsubsec System Query Option `$search`

The `$search` system query option restricts the result to include only
those items *matching* the specified search expression. The definition
of what it means to match is dependent upon the implementation.

::: example
Example ##ex: return all Products that match the search term `bike`
```
GET http://host/service/Products?$search=bike
```
:::

The search expression can contain phrases, enclosed in double-quotes.

::: example
Example ##ex: return all Products that match the phrase `mountain bike`
```
GET http://host/service/Products?$search="mountain bike"
```
:::

The upper-case keyword `NOT` restricts the set of entities to those that
do not match the specified term.

::: example
Example ##ex: return all Products that do not match `clothing`
```
GET http://host/service/Products?$search=NOT clothing
```
:::

Multiple terms within a search expression are separated by a space
(implicit `AND`) or the upper-case keyword `AND`, indicating that all
such terms must be matched.

::: example
Example ##ex: return all Products that match both `mountain` and
`bike`
```
GET http://host/service/Products?$search=mountain AND bike
```
:::

The upper-case keyword `OR` is used to return entities that satisfy
either the immediately preceding or subsequent expression.

::: example
Example ##ex: return all Products that match `mountain` or
`bike`
```
GET http://host/service/Products?$search=mountain OR bike
```
:::

Parentheses within the search expression group together multiple
expressions.

::: example
Example ##ex: return all Products that match `mountain` or
`bike` and do not match clothing
```
GET http://host/service/Products?$search=(mountain OR bike) AND NOT clothing
```
:::

The operations within a search expression MUST be evaluated in the
following order: grouping operator, `NOT` operator, `AND` operator, `OR`
operator

If both `$search` and [`$filter`](#SystemQueryOptionfilter) are
specified in the same request, only those items satisfying both criteria
are returned.

The value of the `$search` option is a search expression as defined in
[OData-ABNF](#ODataABNF) rule [searchExpr]{.abnf}.

#### ##subsubsubsec Server-Driven Paging

Responses that include only a partial set of the items identified by the
request URL MUST contain a link that allows retrieving the next partial
set of items. This link is called a *next link*; its representation is
format-specific. The final partial set of items MUST NOT contain a next
link. Clients MUST check for next links before assuming to have received
all items within a collection, including expanded and nested collections.

The client can request a maximum page size through the
[`maxpagesize`](#Preferencemaxpagesizeodatamaxpagesize) preference. The
service may apply this requested page size or implement a page size
different than, or in the absence of, this preference.

OData clients MUST treat the URL of the next link as opaque, and MUST
NOT append system query options to the URL of a next link. Services may
not allow a change of format on requests for subsequent pages using the
next link. Clients therefore SHOULD request the same format on
subsequent page requests using a compatible `Accept` header. OData
services may use the reserved system query option `$skiptoken` when
building next links. Its content is opaque, service-specific, and must
only follow the rules for URL query parts.

OData clients MUST NOT use the system query option `$skiptoken` when
constructing requests.

#### ##subsubsubsec Requesting an Individual Member of an Ordered Collection

Individual members of collections of primitive and complex types
annotated with the `Ordered` term (see [OData-VocCore](#ODataVocCore))
are addressable by appending a segment containing the zero-based ordinal
to the URL of the collection. A negative ordinal indexes from the end of
the collection, with -1 representing the last item in the collection.

Entities are stably addressable using their canonical URL and are not
accessible using an ordinal index.

::: example
Example ##ex: the first address in a list of addresses for `MainSupplier`
```
GET http://host/service/MainSupplier/Addresses/0
```
:::

### ##subsubsec Requesting Related Entities

To request related entities according to a particular relationship, the
client issues a `GET` request to the source entity's request URL,
followed by a forward slash and the name of the navigation property
representing the relationship.

If the navigation property does not exist on the entity indicated by the
request URL, the service returns
[`404 Not Found`](#ResponseCode404NotFound).

If the relationship terminates on a collection, the response MUST be the
format-specific representation of the collection of related entities. If
no entities are related, the response is the format-specific
representation of an empty collection.

If the relationship terminates on a single entity, the response MUST be
the format-specific representation of the related single entity. If no
entity is related, the service returns
[`204 No Content`](#ResponseCode204NoContent).

::: example
Example ##ex: return the supplier of the product with `ID=1` in the
Products entity set
```
GET http://host/service/Products(1)/Supplier
```
:::

### ##subsubsec Requesting Entity References

To request [entity references](#EntityIdsandEntityReferences) in place
of the actual entities, the client issues a `GET` request with `/$ref`
appended to the resource path.

If the resource path does not identify an entity or a collection of
entities, the service returns [`404 Not Found`](#ResponseCode404NotFound).

If the resource path identifies a collection, the response MUST be the
format-specific representation of a collection of entity references
pointing to the related entities. If no entities are related, the
response is the format-specific representation of an empty collection.
The response MAY contain an [`ETag`](#HeaderETag) header for the
collection whose value changes if the collection of references changes,
i.e. a reference is added or removed.

If the resource path identifies a single existing entity, the response
MUST be the format-specific representation of an entity reference. The
response MAY contain an [`ETag`](#HeaderETag) header which represents the
identity of the referenced entity. If the resource path terminates in a
single-valued navigation path, the ETag value changes if the
relationship is changed and points to a different OData entity. If the
resource path is the canonical path for a single entity, the returned
ETag can never change.

If the resource path terminates on a single entity and no such entity
exists, the service returns either
[`204 No Content`](#ResponseCode204NoContent) or
[`404 Not Found`](#ResponseCode404NotFound).

::: example
Example ##ex: collection with an entity reference for each Order related
to the Product with `ID=0`
```
GET http://host/service/Products(0)/Orders/$ref
```
:::

### ##subsubsec Resolving an Entity-Id

To resolve an [entity-id](#EntityIdsandEntityReferences), e.g. obtained
in an entity reference, into a representation of the identified entity,
the client issues a `GET` request to the `$entity` resource located at
the URL `$entity` relative to the service root. The entity-id MUST be
specified using the system query option `$id`.

::: example
Example ##ex: return the entity representation for a given entity-id
```
GET http://host/service/$entity?$id=http://host/service/Products(0)
```
:::

A type segment following the `$entity` resource casts the resource to
the specified type. If the identified entity is not of the specified
type, or a type derived from the specified type, the service returns
[`404 Not Found`](#ResponseCode404NotFound).

After applying a type-cast segment to cast to a specific type, the
system query options [`$select`](#SystemQueryOptionselect) and
[`$expand`](#SystemQueryOptionexpand) can be specified in `GET` requests
to the `$entity` resource.

::: example
Example ##ex: return the entity representation for a given entity-id and
specify properties to return
```
GET http://host/service/$entity/Model.Customer
      ?$id=http://host/service/Customers('ALFKI')
      &$select=CompanyName,ContactName
      &$expand=Orders
```
:::

### ##subsubsec Requesting the Number of Items in a Collection

To request only the number of items of a collection of entities or items
of a collection-valued property, the client issues a `GET` request with
`/$count` appended to the resource path of the collection.

On success, the response body MUST contain the exact count of items
matching the request after applying any
[`$filter`](#SystemQueryOptionfilter) or
[`$search`](#SystemQueryOptionsearch) system query options, formatted as
a simple primitive integer value with media type `text/plain`. Clients
SHOULD NOT combine the system query options
[`$top`](#SystemQueryOptiontop),
[`$skip`](#SystemQueryOptionskip),
[`$orderby`](#SystemQueryOptionorderby),
[`$expand`](#SystemQueryOptionexpand), and
[`$format`](#SystemQueryOptionformat) with the path suffix `/$count`.
The result of such a request is undefined.

::: example
Example ##ex: return the number of products in the Products entity set
```
GET http://host/service/Products/$count
```
:::

With 4.01 services the `/$count` segment MAY be used in combination with
the `/$filter` path segment to count the items in the filtered
collection.

::: example
Example ##ex: return the number of products whose `Price` is less than
$10.00
```
GET http://host/service/Products/$filter(@foo)/$count?@foo=Price lt 10.00
```
:::

For backwards compatibility, the `/$count` suffix MAY be used in
combination with the [`$filter`](#SystemQueryOptionfilter) system query
option.

::: example
Example ##ex: return the number of products whose `Price` is less than
$10.00
```
GET http://host/service/Products/$count?$filter=Price lt 10.00
```
:::

The [`$filter`](#SystemQueryOptionfilter) system query option MUST NOT
be used in conjunction with a both a `/$count` path segment and a
`/$filter` path segment.

The `/$count` suffix can also be used in path expressions within system
query options, e.g. [`$filter`](#SystemQueryOptionfilter).

::: example
Example ##ex: return all customers with more than five interests
```
GET http://host/service/Customers?$filter=Interests/$count gt 5
```
:::

::: example
Example ##ex: return all categories with more than one product over $5.00
```
GET http://host/service/Categories?$filter=Products/$filter(Price gt 5.0)/$count gt 1
```
:::

### ##subsubsec System Query Option `$format`

The `$format` system query option specifies the media type of the
response.

The `$format` query option, if present in a request, MUST take
precedence over the value(s) specified in the [`Accept`](#HeaderAccept)
request header.

The value of the `$format` system query option is a valid internet media
type, optionally including parameters.

In addition, format-specific abbreviations may be used, e.g. `json` for
`application/json`, see [OData-JSON](#ODataJSON), but format parameters
MUST NOT be appended to the format abbreviations.

::: example
Example ##ex: the request
```
GET http://host/service/Orders?$format=application/json;metadata=full
```
:::

is equivalent to a request with an `Accept` header using the same media
type; it requests the set of Order entities represented using the JSON
media type including full metadata, as defined in
[#OData-JSON#metadatafullodatametadatafull].

::: example
Example ##ex: the request
```
GET http://host/service/Orders?$format=json
```
:::

is equivalent to a request with the `Accept` header set to
`application/json`; it requests the set of Order entities represented
using the JSON media type with minimal metadata, as defined in
[#OData-JSON#metadataminimalodatametadataminimal].

In [metadata document requests](#MetadataDocumentRequest), the values
`application/xml` and `application/json`, along with their subtypes and
parameterized variants, as well as the format-specific abbreviations
`xml` and `json`, are reserved for this specification.

### ##subsubsec System Query Option `$schemaversion`

The `$schemaversion` system query option MAY be included in any request.
For a [metadata document request](#MetadataDocumentRequest) the value of
the `$schemaversion` system query option addresses a specific schema
version. For all other request types the value specifies the version of
the schema against which the request is made. The syntax of the
`$schemaversion` system query option is defined in
[OData-ABNF](#ODataABNF) rule [schemaversion]{.abnf}.

The value of the `$schemaversion` system query option MUST be a version
of the schema as returned in the
[Core.SchemaVersion]{.term}
annotation, defined in [OData-VocCore](#ODataVocCore), of a previous
request to the [metadata document](#MetadataDocumentRequest), or `*` in
order to specify the current version of the metadata.

If specified, the service MUST process the request according to the
specified version of the metadata.

Clients can retrieve the current version of the metadata by making a
[metadata document request](#MetadataDocumentRequest) with a
`$schemaversion` system query option value of `*`, and SHOULD include
the value from the returned
[Core.SchemaVersion]{.term}
annotation in the `$schemaversion` system query option of subsequent
requests.

If the `$schemaversion` system query option is not specified in a
request for the metadata document, the service MUST return a version of
the metadata with no breaking changes over time, and the processing of
all other requests that omit the `$schemaversion` system query option
MUST be compatible with that "unversioned" schema. For more information
on breaking changes, see [Model Versioning](#ModelVersioning).

If the `$schemaversion` system query option is specified on an
individual request within a batch, then it specifies the version of the
schema to apply to that individual request. Individual requests within a
batch that don't include the `$schemaversion` system query option
inherit the schema version of the overall batch request.

If the `$schemaversion` system query option is specified, but the
version of the schema doesn't exist, the request is answered with a
response code [`404 Not Found`](#ResponseCode404NotFound). The response
body SHOULD provide additional information.

## ##subsec Requesting Changes

Services advertise their change-tracking capabilities by annotating
entity sets with the
[Capabilities.ChangeTracking]{.term}
term defined in [OData-VocCap](#ODataVocCap).

Any `GET` request to retrieve one or more entities MAY allow
change-tracking.

Clients request that the service track changes to a result by specifying
the [`track-changes`](#Preferencetrackchangesodatatrackchanges) preference
on a request. If supported for the request, the service includes a
[`Preference-Applied`](#HeaderPreferenceApplied) header in the
response containing the `track-changes` preference and includes a *delta
link* in a result for a single entity, and on the last page of results
for a collection of entities in place of the next link.

### ##subsubsec Delta Links

Delta links are opaque, service-generated links that the client uses to
retrieve subsequent changes to a result.

Delta links are based on a *defining query* that describes the set of
results for which changes are being tracked; for example, the request
that generated the results containing the delta link. The delta link
encodes the collection of entities for which changes are being tracked,
along with a starting point from which to track changes. OData services
may use the reserved system query option `$deltatoken` when building
delta links. Its content is opaque, service-specific, and must only
follow the rules for URL query parts.

If the defining query contains a
[`$schemaversion`](#SystemQueryOptionschemaversion) system query option,
the response MUST be represented according to that schema version.

If the defining query contains a [`$filter`](#SystemQueryOptionfilter)
or [`$search`](#SystemQueryOptionsearch), the response MUST include only
changes to entities matching the specified criteria. Added entities MUST
be returned for entities that were added or changed and now match the
specified criteria, and deleted entities MUST be returned for entities
that are changed to no longer match the criteria of
[`$filter`](#SystemQueryOptionfilter) or
[`$search`](#SystemQueryOptionsearch).

The delta link MUST NOT encode any client [top](#SystemQueryOptiontop)
or [skip](#SystemQueryOptionskip) value, and SHOULD NOT encode a request
for an inline count.

If the defining query includes expanded relationships, the delta link
MUST return changes, additions, or deletions to the expanded entities,
as well as added or deleted links to expanded entities or nested
collections representing current membership. If the defining query
includes expanded references, then the delta link MUST return changes to
the membership in the set of expanded references.

Navigation properties specified in the
[`$select`](#SystemQueryOptionselect) list of a defining query are not
used to define the scope or contents of the items being tracked. Clients
can specify `/$ref` in [`$expand`](#SystemQueryOptionexpand) in order to
specify interest in the set of related entities without interest in
changes to the content of those related entities.

If an expanded entity becomes orphaned because all paths to the entity
as specified in the defining query have been broken (i.e. due to
relationship changes and/or changes or deletions to parent entities)
then the service MUST return the appropriate notifications for the
client to determine that the entity has been orphaned (i.e. the changed
relationships and removed parent entities). The client should not assume
that it will receive additional notifications for such an orphaned
entity.

Entities are considered changed if any of the structural properties have
changed. Changes to related entities and to streams are not considered a
change to the entity containing the stream or navigation property.

If the defining query contains a
[projection](#SpecifyingPropertiestoReturn), the generated delta link
SHOULD logically include the same projection, such that the delta query
only includes fields specified in the projection. Services MAY use the
projection to limit the entities returned to those that have changed
within the selected fields, but the client MUST be prepared to receive
entities returned whether or not the field that changed was specified in
the projection.

### ##subsubsec Using Delta Links

The client requests changes by invoking the `GET` method on the [delta
link](#DeltaLinks). The client MUST NOT attempt to append system query
options to the delta link. The [`Accept`](#HeaderAccept) header MAY be
used to specify the desired response format.

Clients SHOULD specify the same
[`Accept-Language`](#HeaderAcceptLanguage) header when querying the
delta link as was specified in the defining query. Services MAY return
[`406 Not Acceptable`](#ResponseCode406NotAcceptable) if a different
`Accept-Language` is specified. If a service does support an
`Accept-Language` header it MAY return changes only visible in that
language, or MAY include records that have changes not visible in the
requested language.

The [`/$count`](#RequestingtheNumberofItemsinaCollection) segment can be
appended to the path of a delta link in order to get just the number of
changes available. The count includes all added, changed, or deleted
entities, as well as added or deleted links.

The results of a request against the delta link may span one or more pages.
The service MUST order changes across all pages in such a way as to
guarantee that each change can be applied in order to the response which
contained the delta link, and that doing so across all changes results 
in a consistent state.

Services SHOULD return only changed entities, but MAY return additional
entities matching the defining query for which the client may not see a
change.

In order to continue tracking changes beyond the current set, the client
specifies [`track-changes`](#Preferencetrackchangesodatatrackchanges) on
the initial request to the delta link but is not required to repeat it
for subsequent [pages](#ServerDrivenPaging). The new delta link appears
at the end of the last page of changes in place of the next link and
MUST return all changes subsequent to the last change of the previous
delta link.

If no changes have occurred, the response is an empty collection that
contains a delta link for subsequent changes if requested. This delta
link MAY be identical to the delta link resulting in the empty
collection of changes.

If the delta link is no longer valid, the service responds with
[`410 Gone`](#ResponseCode410Gone), and SHOULD include the URL for
refetching the entire set in the `Location` header of the response.

### ##subsubsec Delta Payloads

A delta payload represents changes to a known state. A delta payload
includes added entities, changed entities, and deleted entities, as well
as a representation of added and removed relationships.

Services that support the use of [ETags](#UseofETagsforAvoidingUpdateConflicts) 
for optimistic concurrency control SHOULD return ETag values for added or changed entities 
within the delta payload.

Delta payloads can be [requested](#RequestingChanges) from the service
using a delta link or provided as updates to the service.
