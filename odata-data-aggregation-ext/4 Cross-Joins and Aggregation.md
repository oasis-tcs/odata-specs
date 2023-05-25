-------

# ##sec Cross-Joins and Aggregation

OData supports querying related entities through defining navigation properties in the data model. These navigation paths help guide simple consumers in understanding and navigating relationships.

In some cases, however, requests need to span entity sets with no predefined associations. Such requests can be sent to the special resource `$crossjoin` instead of an individual entity set. The cross join of a list of entity sets is the Cartesian product of the listed entity sets, represented as a collection of complex type instances that have a navigation property with cardinality to-one for each participating entity set, and queries across entity sets can be formulated using these navigation properties. See [OData-URL](#ODataURL) for details.

Where useful navigations exist it is beneficial to expose those as explicit navigation properties in the model, but the ability to pose queries that span entity sets not related by an association provides a mechanism for advanced consumers to use more flexible join conditions.

::: example
Example ##ex: if `Sale` had a string property `ProductID` instead of the navigation property `Product`, a "join" between `Sales` and `Products` could be accessed via the `$crossjoin` resource
```
GET /service/$crossjoin(Products,Sales)
                         ?$expand=Products($select=Name),Sales($select=Amount)
                         &$filter=Products/ID eq Sales/ProductID
```
results in
```json
{
  "@odata.context": "$metadata#Collection(Edm.ComplexType)",
  "value": [
    { "Products": { "Name": "Paper" }, "Sales": { "Amount": 1 } },
    { "Products": { "Name": "Sugar" }, "Sales": { "Amount": 2 } },
    ...
  ]
}
```
:::

::: example
Example ##ex: using the `$crossjoin` resource for aggregate queries
```
GET /service/$crossjoin(Products,Sales)
    ?$apply=filter(Products/ID eq Sales/ProductID)
           /groupby((Products/Name),
            addnested(Sales,aggregate(Amount with sum as Total)
                      as AggregatedSales))
```
results in
```json
{
  "@odata.context": "$metadata#Collection(Edm.ComplexType)",
  "value": [
    { "Products": { "Name": "Coffee" },
      "AggregatedSales@odata.context": "#Sales(Total)",
      "AggregatedSales": { "Total@odata.type": "Decimal", "Total": 12 } },
    { "Products": { "Name": "Paper"  },
      "AggregatedSales@odata.context": "#Sales(Total)",
      "AggregatedSales": { "Total@odata.type": "Decimal", "Total":  8 } },
    { "Products": { "Name": "Sugar"  },
      "AggregatedSales@odata.context": "#Sales(Total)",
      "AggregatedSales": { "Total@odata.type": "Decimal", "Total":  4 } }
  ]
}
```
:::

The entity container may be annotated in the same way as entity sets to express which aggregate queries are supported, see [section ##VocabularyforDataAggregation].
