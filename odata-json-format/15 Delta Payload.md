
-------

# ##sec Delta Payload

The non-format specific aspects of the delta handling are described in
[#OData-Protocol#RequestingChanges].

## ##subsec Delta Responses

Responses from a delta request are returned as a JSON object.

The JSON object for a delta response to a single entity is either an
[added](#AddedChangedEntity), [changed](#AddedChangedEntity), or
[deleted entity](#DeletedEntity).

The JSON object for a delta response to a collection of entities MUST
contain an array-valued property named `value` containing all
[added](#AddedChangedEntity), [changed](#AddedChangedEntity), or
[deleted entities](#DeletedEntity), and MAY contain additional, 
unchanged entities. A [flattened OData 4.0 delta response](#OData40FlattenedDeltaPayload)
may also include [added](#AddedLink) or [deleted links](#DeletedLink), 
while these are generally represented as [nested delta payloads](#OData401ExpandedNavigationProperties) in OData 4.01 and greater.

If the response from the delta link contains `count` control information,
the returned number MUST include the count of all top-level added, 
changed, or deleted entities to be returned, as well as added or deleted links
in an OData 4.0 delta response.

If the delta response contains a partial list of changes, it MUST
include a [next link](#ControlInformationnextLinkodatanextLink) for the
client to retrieve the next set of changes.

The last page of a delta response SHOULD contain a [delta link](#ControlInformationdeltaLinkodatadeltaLink) in place of the [next link](#ControlInformationnextLinkodatanextLink) for retrieving
subsequent changes once the current set of changes has been applied to
the initial set.

::: example
Example ##ex: a 4.01 delta response with three changes, in order of
occurrence

  1. `ContactName` for customer `BOTTM` was changed to `Susan Halvenstern`
  2. Customer `ANTON` was deleted
  3. `ContactName` for customer `ALFKI` was changed to `Blake Smithe`

```json
{
  "@context": "http://host/service/$metadata#Customers/$delta",
  "@count":3,
  "value": [
    {
      "@id": "Customers('BOTTM')",
      "ContactName": "Susan Halvenstern"
    },
    {
      "@removed": {
        "reason": "deleted"
      },
      "@id": "Customers('ANTON')"
    },
    {
      "@id": "Customers('ALFKI')",
      "ContactName": "Blake Smithe"
    }
  ],
  "@deltaLink": "Customers?$deltatoken=8015"
}
```
:::

::: example
Example ##ex: a 4.0 delta response with three changes, in order of
occurrence

  1. `ContactName` for customer `BOTTM` was changed to `Susan Halvenstern`
  2. Customer `ANTON` was deleted
  3. `ContactName` for customer `ALFKI` was changed to `Blake Smithe`

```json
{
  "@odata.context": "http://host/service/$metadata#Customers/$delta",
  "@odata.count": 3,
  "value": [
    {
      "@odata.id": "Customers('BOTTM')",
      "ContactName": "Susan Halvenstern",
    },
    {
      "@odata.context": "#Customers/$deletedEntity",
      "@odata.id": "Customers('ANTON')"
    },
    {
      "@odata.id": "Customers('ALFKI')",
      "ContactName": "Blake Smithe"
    }
  ],
  "@odata.deltaLink": "Customers?$deltatoken=8015"
}
```
:::

## ##subsec Added/Changed Entity

Added or changed entities within a delta payload are represented as
[entities](#Entity). All entities within a delta response payload MUST include
the control information [`id`](#ControlInformationidodataid) or all of the
entity's primary key fields. The `id` control information MUST appear if any of the 
entity's primary key fields are omitted from the response _or_ the entity-id is not 
identical to the canonical URL of the entity.

When using a delta payload in an [update request](#UpdateaCollectionofEntities), an 
[alternate key](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#AlternateKeys) (see [#OData-URL#AlternateKeys])
MAY be used in place of the entity's primary key. 
A delta response from an update request using alternate keys SHOULD include
all fields of the alternate key used in the request, in which case it
MAY omit the `id` control information and other primary key fields.

Any entity in an update request that has neither the `id` control information,
nor the primary or alternate key values of an existing entity, are treated as
an added entity.

Added entities MUST include all available selected properties and MAY
include additional, unselected properties. Collection-valued properties
are treated as atomic values; any collection-valued properties returned
from a delta request MUST contain all current values for that
collection.

Changed entities MUST include all available selected properties that
have changed, and MAY include additional properties.

Added or changed entities MAY include [ETags](#ControlInformationetagodataetag).

Entities include control information for selected navigation links based
on [`metadata`](#ControllingtheAmountofControlInformationinResponses).

## ##subsec Deleted Entity

Deleted entities in JSON are returned as deleted-entity objects. Delta
responses MUST contain a deleted-entity object for each deleted entity,
including deleted expanded entities that are not related through a
containment navigation property. The service MAY additionally include
expanded entities related through a containment navigation property in
which case it MUST include those in any returned count of enumerated
changes.

The representation of deleted-entity objects differs between OData 4.0
and OData 4.01.

In OData 4.0 payloads the deleted-entity object MUST include the
following properties, regardless of the specified
[`metadata`](#ControllingtheAmountofControlInformationinResponses) value:

- Control information [`context`](#ControlInformationcontextodatacontext) --- The context URL fragment MUST be
  `#{entity-set}/$deletedEntity`, where
  `{entity-set}` is the entity set of the deleted entity
- `id` --- The [id](#ControlInformationidodataid) of the deleted entity
  (same as the [id](#ControlInformationidodataid)
  returned or computed when calling GET on resource), which may be
  absolute or [relative](#RelativeURLs)

In OData 4.0 payloads the deleted-entity object MAY include the
following optional property, regardless of the specified
[`metadata`](#ControllingtheAmountofControlInformationinResponses) value, and MAY include
[annotations](#InstanceAnnotations):

- `reason` --- either `deleted`, if the entity was deleted (destroyed),
  or `changed` if the entity was removed from membership in the
  result (i.e., due to a data change).

::: example
Example ##ex: deleted entity in OData 4.0 response --- note that `id` is
a property, not control information
```json
{
  "@odata.context": "#Customers/$deletedEntity",
  "reason": "deleted",
  "id": "Customers('ANTON')"
}
```
:::

In OData 4.01 payloads the deleted-entity object MUST include the
following properties, regardless of the specified
[`metadata`](#ControllingtheAmountofControlInformationinResponses) value.
For ordered payloads, this control information MUST follow the 
[payload ordering constraints](#PayloadOrderingConstraints).

- Control information
  [`removed`](#ControlInformationremovedodataremoved),
  whose value is an object that MAY contain a property named
  `reason`. If present, the value of `reason` MUST
  be either `deleted` if the entity was deleted (destroyed), or
  `changed` if the entity was removed from membership in the
  result either due to change in value such that the entity no longer
  matches the defining query or because the entity was removed from the
  collection. The object MAY include
  [annotations](#InstanceAnnotations), and clients SHOULD NOT error
  due to the presence of additional properties that MAY be defined by
  future versions of this specification.

- Control information
  [`id`](#ControlInformationidodataid)
  or all of the entity's primary key fields. The `id` control
  information MUST appear if any of the entity's primary key fields are omitted
  from the response _or_ the entity-id is not identical to the canonical
  URL of the entity. When using a delta payload in an 
  [update request](#UpdateaCollectionofEntities), an [alternate key](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Core.V1.md#AlternateKeys) (see [#OData-URL#AlternateKeys])
  MAY be used in place of the entity's primary key. A delta response from an update request using alternate keys SHOULD include all fields of the alternate key used in the request, in which case it
  MAY omit the `id` control information and other primary key fields.

For full metadata the
[`context`](#ControlInformationcontextodatacontext)
control information MUST be included. It also MUST be included if the
entity set of the deleted entity cannot be determined from the
surrounding context.

The deleted-entity object MAY include additional properties of the
entity, as well as [annotations](#InstanceAnnotations), and MAY
include related entities, related deleted entities, or a delta or full
representation of a related collection of entities, to represent related
entities that have been modified or deleted.

::: example
Example ##ex: deleted entity in OData 4.01 response with `id`
control information (prefixed with an `@`)
```json
{
  "@context": "#Customers/$deletedEntity",
  "@removed": {
    "reason": "deleted",
    "@myannoation.deletedBy": "Mario"
  },
  "@id": "Customers('ANTON')"
}
```
:::

::: example
Example ##ex: entity removed OData 4.01 response without `id`
control information and instead all key fields (`ID` is the
single key field of `Customer`)
```json
{
  "@removed": {},
  "ID": "ANTON"
}
```
:::
## ##subsec Related Entities
Changes to related entities are represented differently in OData 4.0 and OData 4.01.

In OData 4.01, changes to relationships and related entities are generally represented as
[expanded navigation properties](#OData401ExpandedNavigationProperties).

In OData 4.0, changes to relationships and related entities are represented as a 
[flat array](#OData40FlattenedDeltaPayload) of added, deleted, or changed entities, 
along with added or deleted links.

### ##subsubsec OData 4.01 Expanded Navigation Properties
OData 4.01 delta payloads represent changes to relationships and related
entities as expanded navigation properties. 

Related single entities are represented as either an [added/changed](#AddedChangedEntity)
entity, an [entity reference](#EntityReference), a [deleted entity](#DeletedEntity), or 
a null value (if no entity is related as the outcome of the change). 

Collection-valued navigation properties are represented either as a delta representation or as a full representation of the collection.

If the expanded navigation property represents a delta, it MUST be
represented as an array-valued control information
[`delta`](#ControlInformationdeltaodatadelta)
on the navigation property.  [Added/changed](#AddedChangedEntity)
entities or [entity references](#EntityReference)
are added to the collection. [Deleted entities](#DeletedEntity) in a nested delta
representation represent entities no longer part of the collection.
If the deleted entity specifies a `reason` as
`deleted`, then the entity is both removed from the
collection and deleted, otherwise it is removed from the collection and
only deleted if the navigation property is a containment navigation
property. The array MUST NOT contain [added](#AddedLink) or 
[deleted links](#DeletedLink).

::: example
Example ##ex: changes to related orders represented as a 4.01 nested delta representation

  1. For Customer `ALFKI`:
      1. Order 10643 was removed
      2. Order 10645 was added, and 
      3. The shipping information for related order 10645 was updated
  2. Customer `ANTON` was deleted
  3. `ContactName` for customer `ALFKI` was subsequently changed to `Blake Smithe`

Note that the `count` is the count of top level change records in the response, regardless of how many related changes are applied in each change record.

```json
{
  "@context": "http://host/service/$metadata#Customers/$delta",
  "@count":3,
  "value": [
    {
      "@id": "Customers('ALFKI')",
      "Orders@delta": [
        {
          "@removed": {
            "reason": "changed"
          },
          "@id": "Orders(10643)"
        },
        {
          "@id": "Orders(10645)",
          "ShippingAddress": {
            "Street": "23 Tsawassen Blvd.",
            "City": "Tsawassen",
            "Region": "BC",
            "PostalCode": "T2F 8M4"
          }
        }
      ]
    },
    {
      "@removed": {
        "reason": "deleted"
      },
      "@id": "Customers('ANTON')"
    },
    {
      "@id": "Customers('ALFKI')",
      "ContactName": "Blake Smithe"
    }
  ],
  "@deltaLink": "Customers?$expand=Orders&$deltatoken=8015"
}
```
:::

If the expanded navigation property is a full representation of the
collection, it MUST be represented as an expanded navigation property,
and its array value MUST represent the full set of entities related
according to that relationship and satisfying any specified expand
options, or a partial list containing a [`nextLink`](#ControlInformationnextLinkodatanextLink). Following this chain of 
next links MUST eventually return the full set of entities related 
according to that relationship and satisfying any specified expand 
options; the final page does not include a delta link.

Members of the expanded navigation property MUST be represented as
[added/changed](#AddedChangedEntity) entities or 
[entity references](#EntityReference) and MUST NOT include added links,
deleted links, or deleted entities. Any entity not represented in the
collection has either been removed, deleted, or changed such that it no
longer satisfies the expand options in the defining query. In any case,
clients SHOULD NOT receive additional notifications for such removed
entities.

::: example
Example ##ex: 4.01 delta response for a single entity with an expanded navigation
property containing only a partial list of related entities (as
indicated with a [next link](#ControlInformationnextLinkodatanextLink))
```json
{
  "@context": "http://host/service/$metadata#Customers/$entity/$delta",
  …
  "Orders@count": 42,
  "Orders": [ … ],
  "Orders@nextLink": "…",
  …
  "@deltaLink": "Customers('ALFKI')?$expand=Orders&$deltatoken=9711"
}
```
:::

### ##subsubsec OData 4.0 Flattened Delta Payload
OData 4.0 payloads MUST NOT include expanded navigation properties
inline. Changes to relationships are represented as [added](#AddedLink)
or [deleted links](#DeletedLink). Changes to related entities are
represented as top-level entities whose [`context`](#ControlInformationcontextodatacontext)
control information specifies the entity set of the entity. This control
information MUST be present for entities are not part of the entity set 
specified by the context URL, regardless of the specified
[`metadata`](#ControllingtheAmountofControlInformationinResponses) value.

::: example
Example ##ex: changes to related orders represented as a 4.0 flattened delta payload

  1. Order 10643 was removed from customer `ALFKI`
  2. Order 10645 was added to customer `ALFKI`
  3. The shipping information for related order 10645 was updated
  4. Customer `ANTON` was deleted
  5. `ContactName` for customer `ALFKI` was subsequently changed to `Blake Smithe`

```json
{
  "@odata.context": "http://host/service/$metadata#Customers/$delta",
  "@odata.count": 5,
  "value": [
    {
      "@odata.context": "#Customers/$deletedLink",
      "source": "Customers('ALFKI')",
      "relationship": "Orders",
      "target": "Orders(10643)"
    },
    {
      "@odata.context": "#Customers/$link",
      "source": "Customers('BOTTM')",
      "relationship": "Orders",
      "target": "Orders(10645)"
    },
    {
      "@odata.context": "#Orders/$entity",
      "@odata.id": "Orders(10645)",
      "ShippingAddress": {
        "Street": "23 Tsawassen Blvd.",
        "City": "Tsawassen",
        "Region": "BC",
        "PostalCode": "T2F 8M4"
      }
    },
    {
      "@odata.context": "#Customers/$deletedEntity",
      "@odata.id": "Customers('ANTON')"
    },
    {
      "@odata.id": "Customers('ALFKI')",
      "ContactName": "Blake Smithe"
    }
  ],
  "@odata.deltaLink": "Customers?$expand=Orders&$deltatoken=8016"
}
```
:::

If a property of an entity is dependent upon the property of another
entity within the expanded set of entities being tracked, then both the
change to the dependent property as well as the change to the principal
property or [added](#AddedLink)/[deleted link](#DeletedLink)
corresponding to the change to the dependent property are returned in
the delta response.

#### ##subsubsubsec Added Link

Links within an OData 4.0 [flattened delta response](#OData40FlattenedDeltaPayload) are represented as link objects.

Delta responses MUST contain a link object for each added link that
corresponds to a `$expand` path in the initial request.

The link object MUST include the following properties, regardless of the specified [`metadata`](#ControllingtheAmountofControlInformationinResponses) value, and MAY include [annotations](#InstanceAnnotations):
- [`context`](#ControlInformationcontextodatacontext) -
  the context URL fragment MUST be `#{entity-set}/$link`,
  where `{entity-set}` is the entity set containing the source
  entity
- `source` --- The [id](#ControlInformationidodataid) of the entity from which
  the relationship is defined, which may be absolute or
  [relative](#RelativeURLs)
- `relationship` --- The path from the source object to the navigation property which MAY
  traverse one or more complex properties, type cast segments, or members
  of ordered collections
- `target` --- The [id](#ControlInformationidodataid) of the related entity,
  which may be absolute or [relative](#RelativeURLs)

#### ##subsubsubsec Deleted Link

Deleted links within an OData 4.0 [flattened delta response](#OData40FlattenedDeltaPayload) are represented as deleted-link objects.

Delta responses MUST contain a deleted-link object for each deleted link
that corresponds to a `$expand`
path in the initial request, unless either of the following is true:

- The `source` or `target` entity has been deleted
- The maximum cardinality of the related entity is one and there is a
  subsequent [link object](#AddedLink) that specifies the same
  `source` and `relationship`.

The deleted-link object MUST include the following properties, regardless of the specified [`metadata`](#ControllingtheAmountofControlInformationinResponses) value, and MAY include [annotations](#InstanceAnnotations):
- [`context`](#ControlInformationcontextodatacontext) --- the context URL fragment MUST be
  `#{entity-set}/$deletedLink`, where
  `{entity-set}` is the entity set containing the source entity
- `source` --- The [id](#ControlInformationidodataid) of the entity from which
  the relationship is defined, which may be absolute or
  [relative](#RelativeURLs)
- `relationship` --- The path from the source object to the navigation property which MAY
  traverse one or more complex properties, type cast segments, or members
  of ordered collections
- `target` --- The [id](#ControlInformationidodataid) of the related entity for
multi-valued navigation properties, which may be absolute or
[relative](#RelativeURLs). For delta payloads
that do not specify an `OData-Version` header value of `4.0`,
the target MAY be omitted for single-valued navigation.

## ##subsec Update a Collection of Entities

The body of a `PATCH` request to a URL identifying a collection of
entities is a JSON object. It MUST contain the
[`context`](#ControlInformationcontextodatacontext)
control information with a string value of `#$delta`, and it
MUST contain an array-valued property named `value`
containing all [added, changed](#AddedChangedEntity), or [deleted](#DeletedEntity)
entities. OData 4.0 delta payloads MAY additionally include [added](#AddedLink) or
[deleted](#DeletedLink) links between entities.

::: example
Example ##ex: 4.01 collection-update request for customers with expanded orders represented
inline as a delta
  1. Add customer `EASTC`
  2. Change `ContactName` of customer `AROUT`
  3. Delete customer `ANTON`
  4. Change customer `ALFKI`:
     1. Create order 11011
     2. Add existing order 10692
     3. Change `RequiredDate` of related order 10835
     4. Remove order 10643
  5. Add order 10643 to customer `ANATR`
  6. Remove order 10311 from customer `DUMON`

```json
PATCH /service/Customers HTTP/1.1
Host: host
Content-Type: application/json
Content-Length: ###
Prefer: return=minimal, continue-on-error

{
  "@context": "#$delta",
  "value": [
    {
      "@Org.OData.Core.V1.ContentID": "1",
      "CustomerID": "EASTC",
      "CompanyName": "Eastern Connection",
      "ContactName": "Ann Devon",
      "ContactTitle": "Sales Agent"
    },
    {
      "@Org.OData.Core.V1.ContentID": "2",
      "CustomerID": "AROUT",
      "ContactName": "Thomas Hardy",
    },
    {
      "@Org.OData.Core.V1.ContentID": "3",
      "@removed": {
        "reason": "deleted"
      },
      "CustomerID": "ANTON"
    },
    {
      "@Org.OData.Core.V1.ContentID": "4",
      "CustomerID": "ALFKI",
      "Orders@delta": [
        {
          "@Org.OData.Core.V1.ContentID": "4.1",
          "OrderID": 11011,
          "CustomerID": "ALFKI",
          "EmployeeID": 3,
          "OrderDate": "1998-04-09T00:00:00Z",
          "RequiredDate": "1998-05-07T00:00:00Z",
          "ShippedDate": "1998-04-13T00:00:00Z"
        },
        {
          "@Org.OData.Core.V1.ContentID": "4.2",
          "@id": "Orders(10692)"
        },
        {
          "@Org.OData.Core.V1.ContentID": "4.3",
          "@id": "Orders(10835)",
          "RequiredDate": "1998-01-23T00:00:00Z",
        },
        {
          "@Org.OData.Core.V1.ContentID": "4.4",
          "@removed": {
            "reason": "changed"
          },
          "OrderID": 10643
        }
      ]
    },
    {
      "@Org.OData.Core.V1.ContentID": "5",
      "CustomerID": "ANATR",
      "Orders@delta": [
        {
          "@Org.OData.Core.V1.ContentID": "5.1",
          "OrderID": 10643
        }
      ],
    },
    {
      "@Org.OData.Core.V1.ContentID": "6",
      "CustomerID": "DUMON",
      "Orders@delta": [
        {
          "@Org.OData.Core.V1.ContentID": "6.1",
          "@removed": {
            "reason": "changed"
          },
          "OrderID": 10311
        }
      ]
    }
  ]
}
```

Assuming all changes can be applied without errors, the response would be
```
HTTP/1.1 204 No Content
Preference-Applied: return=minimal, continue-on-error


```

Assuming some or all changes cannot be applied, the overall request is still deemed successful due to the `continue-on-error` preference, and the response details what went wrong
  1. Add customer 'EASTC' - failed
  2. Change `ContactName` of customer 'AROUT' - failed
  3. Delete customer 'ANTON' - failed
  4. Change customer 'ALFKI':
     1. Create order 11011 - succeeded, not mentioned in response
     2. Add existing order 10692 - succeeded, not mentioned in response
     3. Change `RequiredDate` of related order 10835 - failed
     4. Remove order 10643 - succeeded, not mentioned in response
  5. Add order 10643 to customer 'ANATR' - failed without further info
  6. Remove order 10311 from customer 'DUMON' - failed without further info
```json
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: ###
Preference-Applied: return=minimal, continue-on-error

{
  "@context": "#$delta",
  "value": [
    {
      "@Org.OData.Core.V1.ContentID": "1",
      "CustomerID": "EASTC",
      "@removed": {
        "reason": "changed"
      },
      "@Org.OData.Core.V1.DataModificationException": {
        "failedOperation": "insert",
        "responseCode": 400,
        "info": {
          "code": "incmplt",
          "message": "Required field(s) not provided",
          "target": "Address",
          "@OtherVocab.additionalTargets": [ "Industry", "VATRegistration" ],
          "severity": "error"
        }
      }
    },
    {
      "@Org.OData.Core.V1.ContentID": "2",
      "CustomerID": "AROUT",
      "@Org.OData.Core.V1.DataModificationException": {
        "failedOperation": "update",
        "responseCode": 400,
        "info": {
          "code": "r-o",
          "message": "Customer is archived and cannot be changed",
          "severity": "error"
        }
      }
    },
    {
      "@Org.OData.Core.V1.ContentID": "3",
      "CustomerID": "ANTON",
      "@Org.OData.Core.V1.DataModificationException": {
        "failedOperation": "delete",
        "responseCode": 400,
        "info": {
          "code": "ufo",
          "message": "Customer has unfinished orders and cannot be deleted",
          "severity": "error"
        }
      }
    },
    {
      "@Org.OData.Core.V1.ContentID": "4",
      "CustomerID": "ALFKI",
      "Orders@delta": [
        {
          "@Org.OData.Core.V1.ContentID": "4.3",
          "@id": "Orders(10835)",
          "@Org.OData.Core.V1.DataModificationException": {
            "failedOperation": "update",
            "responseCode": 400,
            "info": {
              "code": "b/s",
              "message": "RequiredDate cannot be changed because Order is already being shipped",
              "severity": "error"
            }
          }
        }
      ]
    },
    {
      "@Org.OData.Core.V1.ContentID": "5",
      "CustomerID": "ANATR",
      "Orders@delta": [
        {
          "@Org.OData.Core.V1.ContentID": "5.1",
          "@removed": {
            "reason": "changed"
          },
          "OrderID": 10643,
          "@Org.OData.Core.V1.DataModificationException": {
            "failedOperation": "link",
            "responseCode": 404,
            "info": null
          }
        }
      ]
    },
    {
      "@Org.OData.Core.V1.ContentID": "6",
      "CustomerID": "DUMON",
      "Orders@delta": [
        {
          "@Org.OData.Core.V1.ContentID": "6.1",
          "OrderID": 10311,
          "@Org.OData.Core.V1.DataModificationException": {
            "failedOperation": "unlink",
            "responseCode": 404
          }
        }
      ]
    }
  ]
}
```

Without the `continue-on-error` preference processing would stop on the first error, and the response would be a standard OData error response
```json
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: ###

{
  "error": {
    "code": "incmplt",
    "message": "Required field(s) not provided",
    "target": "Customers('EASTC')/Address",
    "@OtherVocab.additionalTargets": [ "Customers('EASTC')/Industry", "Customers('EASTC')/VATRegistration" ]
  }
}
```
:::
