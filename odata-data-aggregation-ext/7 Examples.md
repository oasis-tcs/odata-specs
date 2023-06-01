-------

# ##sec Examples

The following examples show some common aggregation-related questions that can be answered by combining the transformations defined in [sections ##SystemQueryOptionapply] and [##HierarchicalTransformations].

## ##subsec Requesting Distinct Values

Grouping without specifying a set transformation returns the distinct combination of the grouping properties.

::: example
Example ##ex:
```
GET /service/Customers?$apply=groupby((Name))
```
results in
```json
{
  "@context": "$metadata#Customers(Name)",
  "value": [
    { "Name": "Luc" },
    { "Name": "Joe" },
    { "Name": "Sue" }
  ]
}
```

Note that "Sue" appears only once although the customer base contains two different Sues.
:::

Aggregation is also possible across related entities.

::: example
Example ##ex: customers that bought something
```
GET /service/Sales?$apply=groupby((Customer/Name))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(Name))",
  "value": [
    { "Customer": { "Name": "Joe" } },
    { "Customer": { "Name": "Sue" } }
  ]
}
```

Since `groupby` expands navigation properties in grouping properties by default, this is the same result as if the request would include a `$expand=Customer($select=Name)`. After `groupby`, a `$select` query option is not needed, because `groupby` removes all other properties.

Note that "Luc" does not appear in the aggregated result as he hasn't bought anything and therefore there are no sales entities that refer/navigate to Luc.

However, even though both Sues bought products, only one "Sue" appears in the aggregate result. Including properties that guarantee the right level of uniqueness in the grouping can repair that.
:::

::: example
Example ##ex:
```
GET /service/Sales?$apply=groupby((Customer/Name,Customer/ID))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(Name,ID))",
  "value": [
    { "Customer": { "Name": "Joe", "ID": "C1" } },
    { "Customer": { "Name": "Sue", "ID": "C2" } },
    { "Customer": { "Name": "Sue", "ID": "C3" } }
  ]
}
```
This could also have been formulated as
```
GET /service/Sales?$apply=groupby((Customer))
           &$expand=Customer($select=Name,ID)
```
:::

::: example
Example ##ex_groupbynav: Grouping by navigation property `Customer`
```

GET /service/Sales?$apply=groupby((Customer))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer())",
  "value": [
    { "Customer": { "ID": "C1", "Name": "Joe", "Country": "USA" } },
    { "Customer": { "ID": "C2", "Name": "Sue", "Country": "USA" } },
    { "Customer": { "ID": "C3", "Name": "Sue", "Country": "Netherlands" } }
  ]
}
```
:::

::: example
Example ##ex: the first question in the motivating example in [section ##ExampleUseCases], which customers bought which products, can now be expressed as
```
GET /service/Sales?$apply=groupby((Customer/Name,Customer/ID,Product/Name))
```
and results in
```json
{
  "@context": "$metadata#Sales(Customer(Name,ID),Product(Name))",
  "value": [
    { "Customer": { "Name": "Joe", "ID": "C1" },
      "Product": { "Name": "Coffee"} },
    { "Customer": { "Name": "Joe", "ID": "C1" },
      "Product": { "Name": "Paper" } },
    { "Customer": { "Name": "Joe", "ID": "C1" },
      "Product": { "Name": "Sugar" } },
    { "Customer": { "Name": "Sue", "ID": "C2" },
      "Product": { "Name": "Coffee"} },
    { "Customer": { "Name": "Sue", "ID": "C2" },
      "Product": { "Name": "Paper" } },
    { "Customer": { "Name": "Sue", "ID": "C3" },
      "Product": { "Name": "Paper" } },
    { "Customer": { "Name": "Sue", "ID": "C3" },
      "Product": { "Name": "Sugar" } }
  ]
}
```
:::

::: example
⚠ Example ##ex_subinputtype: grouping by properties of subtypes
```
GET /service/Products?$apply=groupby((SalesModel.FoodProduct/Rating,
                                      SalesModel.NonFoodProduct/RatingClass))
```
results in
```json
{
  "@context": "$metadata#Products(SalesModel.FoodProduct/Rating,
                                  SalesModel.NonFoodProduct/RatingClass)",
  "value": [
    { "@type": "#SalesModel.FoodProduct", "Rating": 5 },
    { "@type": "#SalesModel.FoodProduct", "Rating": null },
    { "@type": "#SalesModel.NonFoodProduct", "RatingClass": "average" },
    { "@type": "#SalesModel.NonFoodProduct", "RatingClass": null }
  ]
}
```
:::

::: example
⚠ Example ##ex_anystructure: grouping by a property of a subtype
```
GET /service/Products?$apply=groupby((SalesModel.FoodProduct/Rating))
```
results in a third group representing entities with no `SalesModel.FoodProduct/Rating`, including the `SalesModel.NonFoodProduct`s:
```json
{
  "@context": "$metadata#Products(@Core.AnyStructure)",
  "value": [
    { "@type": "#SalesModel.FoodProduct", "Rating": 5 },
    { "@type": "#SalesModel.FoodProduct", "Rating": null },
    { }
  ]
}
```
:::

## ##subsec Standard Aggregation Methods

The client may specify one of the predefined aggregation methods [`min`](#StandardAggregationMethodmin), [`max`](#StandardAggregationMethodmax), [`sum`](#StandardAggregationMethodsum), [`average`](#StandardAggregationMethodaverage), and [`countdistinct`](#StandardAggregationMethodcountdistinct), or a [custom aggregation method](#CustomAggregationMethods), to aggregate an [aggregatable expression](#AggregatableExpression). Expressions defining an aggregate method specify an [alias](#Keywordas). The aggregated values are returned in a dynamic property whose name is determined by the alias.

::: example
Example ##ex_aggr:
```
GET /service/Products?$apply=groupby((Name),
                              aggregate(Sales/Amount with sum as Total))
```
results in
```json
{
  "@context": "$metadata#Products(Name,Total)",
  "value": [
    { "Name": "Coffee", "Total@type": "Decimal", "Total":   12 },
    { "Name": "Paper",  "Total@type": "Decimal", "Total":    8 },
    { "Name": "Pencil",                                "Total": null },
    { "Name": "Sugar",  "Total@type": "Decimal", "Total":    4 }
  ]
}
```

Note that the base set of the request is `Products`, so there is a result item for product `Pencil` even though there are no sales items. The input set for the aggregation in the third row is $I$ consisting of the pencil, $p=q/r={\tt Sales}/{\tt Amount}$, $E=\Gamma(I,q)$ is empty and $A=\Gamma(E,r)$ is also empty. The sum over the empty collection is null.
:::

::: example
Example ##ex_nest: Alternatively, the request could ask for the aggregated amount to be nested inside a clone of Sales
```
GET /service/Products?$apply=addnested(Sales,
    aggregate(Amount with sum as Total) as AggregatedSales)
```
results in
```json
{
  "@context": "$metadata#Products(AggregatedSales())",
  "value": [
    { "ID": "P2", "Name": "Coffee", "Color": "Brown", "TaxRate": 0.06,
      "AggregatedSales@context": "#Sales(Total)",
      "AggregatedSales": [ { "Total@type": "Decimal", "Total": 12 } ] },
    { "ID": "P3", "Name": "Paper",  "Color": "White", "TaxRate": 0.14,
      "AggregatedSales@context": "#Sales(Total)",
      "AggregatedSales": [ { "Total@type": "Decimal", "Total":  8 } ] },
    { "ID": "P4", "Name": "Pencil", "Color": "Black", "TaxRate": 0.14,
      "AggregatedSales@context": "#Sales(Total)",
      "AggregatedSales": [ {                          "Total": null } ] },
    { "ID": "P1", "Name": "Sugar",  "Color": "White", "TaxRate": 0.06,
      "AggregatedSales@context": "#Sales(Total)",
      "AggregatedSales": [ { "Total@type": "Decimal", "Total":  4 } ] }
  ]
}
```
:::

::: example
Example ##ex: To compute the aggregate as a property without nesting, use the aggregate function in `$compute` rather than the aggregate transformation in `$apply`:
```
GET /service/Products?$compute=Sales/aggregate(Amount with sum) as Total
```
results in
```json
{
  "@context": "$metadata#Products(*,Total)",
  "value": [
    { "ID": "P2", "Name": "Coffee", "Color": "Brown", "TaxRate": 0.06,
      "Total@type": "Decimal", "Total": 12 },
    { "ID": "P3", "Name": "Paper",  "Color": "White", "TaxRate": 0.14,
      "Total@type": "Decimal", "Total":  8 },
    { "ID": "P4", "Name": "Pencil", "Color": "Black", "TaxRate": 0.14,
                                     "Total": null },
    { "ID": "P1", "Name": "Sugar",  "Color": "White", "TaxRate": 0.06,
      "Total@type": "Decimal", "Total":  4 }
  ]
}
```

The expression `$it/Sales` refers to the sales of the current product. Without `$it`, all sales of all products would be aggregated, because the input collection for the `aggregate` function consists of all products.
:::

::: example
Example ##ex: Alternatively, `join` could be applied to yield a flat structure:
```
GET /service/Products?$apply=
    join(Sales as TotalSales,aggregate(Amount with sum as Total))
    /groupby((Name,TotalSales/Total))
```
results in
```json
{
  "@context": "$metadata#Products(Name,TotalSales())",
  "value": [
    { "Name": "Coffee",
      "TotalSales@context": "#Sales(Total)/$entity",
      "TotalSales": { "Total@type": "Decimal", "Total": 12 } },
    { "Name": "Paper",
      "TotalSales@context": "#Sales(Total)/$entity",
      "TotalSales": { "Total@type": "Decimal", "Total":  8 } },
    { "Name": "Sugar",
      "TotalSales@context": "#Sales(Total)/$entity",
      "TotalSales": { "Total@type": "Decimal", "Total":  4 } }
  ]
}
```

Applying `outerjoin` instead would return an additional entity for product with `ID` "Pencil" and `TotalSales` having a null value.
:::

::: example
Example ##ex:
```
GET /service/Sales?$apply=groupby((Customer/Country),
                            aggregate(Amount with average as AverageAmount))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(Country),AverageAmount)",
  "value": [
    { "Customer": { "Country": "Netherlands" },
      "AverageAmount": 1.6666666666666667 },
    { "Customer": { "Country": "USA" },
      "AverageAmount": 3.8 }
  ]
}
```
Here the `AverageAmount` is of type `Edm.Double`.
:::

::: example
Example ##ex: `$count` after navigation property
```
GET /service/Products?$apply=groupby((Name),
                              aggregate(Sales/$count as SalesCount))
```
results in
```json
{
  "@context": "$metadata#Products(Name,SalesCount)",
  "value": [
    { "Name": "Coffee", "SalesCount@type": "Decimal", "SalesCount": 2 },
    { "Name": "Paper",  "SalesCount@type": "Decimal", "SalesCount": 4 },
    { "Name": "Pencil", "SalesCount@type": "Decimal", "SalesCount": 0 },
    { "Name": "Sugar",  "SalesCount@type": "Decimal", "SalesCount": 2 }
  ]
}
```
:::

To place the number of instances in a group next to other aggregated values, the aggregate expression [`$count`](#AggregateExpressioncount) can be used:

::: example
⚠ Example ##ex: The effect of the `groupby` is to create transient entities and avoid in the result structural properties other than `Name`.
```
GET /service/Products?$apply=groupby((Name),addnested(Sales,
      aggregate($count as SalesCount,
                Amount with sum as TotalAmount) as AggregatedSales))
```
results in
```json
{
  "@context": "$metadata#Products(Name,AggregatedSales())",
  "value": [
    { "Name": "Coffee",
      "AggregatedSales@context": "#Sales(SalesCount,TotalAmount)",
      "AggregatedSales": [ { "SalesCount": 2,
          "TotalAmount@type": "Decimal", "TotalAmount": 12 } ] },
    { "Name": "Paper",
      "AggregatedSales@context": "#Sales(SalesCount,TotalAmount)",
      "AggregatedSales": [ { "SalesCount": 4,
          "TotalAmount@type": "Decimal", "TotalAmount":  8 } ] },
    { "Name": "Pencil",
      "AggregatedSales@context": "#Sales(SalesCount,TotalAmount)",
      "AggregatedSales": [ { "SalesCount": 0, "TotalAmount": null } ] },
    { "Name": "Sugar",
      "AggregatedSales@context": "#Sales(SalesCount,TotalAmount)",
      "AggregatedSales": [ { "SalesCount": 2,
          "TotalAmount@type": "Decimal",  "TotalAmount":  4 } ] }
  ]
}
```
:::

The `aggregate` function can not only be used in `$compute` but also in `$filter` and `$orderby`:

::: example
Example ##ex: Products with an aggregated sales volume of ten or more
```
GET /service/Products?$filter=Sales/aggregate(Amount with sum) ge 10
```
results in
```json
{
  "@context": "$metadata#Products",
  "value": [
    { "ID": "P2", "Name": "Coffee", "Color": "Brown", "TaxRate": 0.06 },
    { "ID": "P3", "Name": "Paper",  "Color": "White", "TaxRate": 0.14 }
  ]
}
```
:::

::: example
Example ##ex: Customers in descending order of their aggregated sales volume
```
GET /service/Customers?$orderby=Sales/aggregate(Amount with sum) desc
```
results in
```json
{
  "@context": "$metadata#Customers",
  "value": [
    { "ID": "C2", "Name": "Sue", "Country": "USA" },
    { "ID": "C1", "Name": "Joe", "Country": "USA" },
    { "ID": "C3", "Name": "Sue", "Country": "Netherlands" },
    { "ID": "C4", "Name": "Luc", "Country": "France" }
  ]
}
```
:::

::: example
Example ##ex: Contribution of each sales to grand total sales amount
```
GET /service/Sales?$compute=Amount divby $these/aggregate(Amount with sum)
                            as Contribution
```
results in
```json
{
  "@context": "$metadata#Sales(*,Contribution)",
  "value": [
    { "ID": 1, "Amount": 1, "Contribution@type": "Decimal",
                            "Contribution": 0.0416666666666667 },
    { "ID": 2, "Amount": 2, "Contribution@type": "Decimal",
                            "Contribution": 0.0833333333333333 },
    { "ID": 3, "Amount": 4, "Contribution@type": "Decimal",
                            "Contribution": 0.1666666666666667 },
    { "ID": 4, "Amount": 8, "Contribution@type": "Decimal",
                            "Contribution": 0.3333333333333333 },
    { "ID": 5, "Amount": 4, "Contribution@type": "Decimal",
                            "Contribution": 0.1666666666666667 },
    { "ID": 6, "Amount": 2, "Contribution@type": "Decimal",
                            "Contribution": 0.0833333333333333 },
    { "ID": 7, "Amount": 1, "Contribution@type": "Decimal",
                            "Contribution": 0.0416666666666667 },
    { "ID": 8, "Amount": 2, "Contribution@type": "Decimal",
                            "Contribution": 0.0833333333333333 }
  ]
}
```
:::

::: example
Example ##ex: Product categories with at least one product having an aggregated sales amount greater than 10
```
GET /service/Categories?$filter=Products/any(
                                p:p/Sales/aggregate(Amount with sum) gt 10)
```
results in
```json
{
  "@context": "$metadata#Categories",
  "value": [
    { "ID": "PG1", "Name": "Food" }
  ]
}
```
:::

The `aggregate` function can also be applied inside `$apply`:

::: example
Example ##ex: Sales volume per customer in relation to total volume
```
GET /service/Sales?$apply=
    groupby((Customer),aggregate(Amount with sum as CustomerAmount))
    /compute(CustomerAmount divby $these/aggregate(CustomerAmount with sum)
             as Contribution)
  &$expand=Customer/$ref
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(),CustomerAmount,Contribution)",
  "value": [
    { "Customer":    { "@id": "Customers('C1')" },
      "Contribution@type": "Decimal", "Contribution": 0.2916667 },
    { "Customer":    { "@id": "Customers('C2')" },
      "Contribution@type": "Decimal", "Contribution": 0.5 },
    { "Customer":    { "@id": "Customers('C3')" },
      "Contribution@type": "Decimal", "Contribution": 0.2083333 }
  ]
}
```
:::

::: example
Example ##ex: rule 1 for [keyword `from`](#Keywordfrom) applied repeatedly
```
GET /service/Sales?$apply=aggregate(Amount with sum
                                    from Time with average
                                    from Customer/Country with max
                                    as MaxDailyAveragePerCountry)
```
is equivalent to (with nested `groupby` transformations)
```
GET /service/Sales?$apply=
  groupby((Customer/Country),
    groupby((Time),aggregate(Amount with sum as D1))
    /aggregate(D1 with average as D2))
  /aggregate(D2 with max as MaxDailyAveragePerCountry)
```
and is equivalent to (with consecutive `groupby` transformations)
```
GET /service/Sales?$apply=
  groupby((Customer/Country,Time),aggregate(Amount with sum as D1))
  /groupby((Customer/Country),aggregate(D1 with average as D2))
  /aggregate(D2 with max as MaxDailyAveragePerCountry)
```
:::

## ##subsec Requesting Expanded Results

::: example
Example ##ex: Assuming an extension of the data model where `Customer` contains an additional collection-valued complex property `Addresses` and these contain a single-valued navigation property `ResponsibleSalesOrganization`, `addnested` can be used to compute a nested dynamic property:
```
GET /service/Customers?$apply=
    addnested(Addresses/ResponsibleSalesOrganization,
              compute(Superordinate/Name as SalesRegion)
              as AugmentedSalesOrganization)
```
results in
```json
{
  "@context": "$metadata#Customers(Addresses(AugmentedSalesOrganization())",
  "value": [
    { "ID": "C1", "Name": "Joe", "Country": "US",
      "Addresses": [
        { "Locality": "Seattle",
          "AugmentedSalesOrganization":
          { "@context": "#SalesOrganizations/$entity",
            "ID": "US West", "SalesRegion": "US" } },
        { "Locality": "DC",
          "AugmentedSalesOrganization":
          { "@context": "#SalesOrganizations/$entity",
            "ID": "US",      "SalesRegion": "Corporate Sales" } },
      ]
    }, ...
  ]
}
```
:::

`addnested` transformations can be nested.

::: example
Example ##ex: nested `addnested` transformations
```
GET /service/Categories?$apply=
    addnested(Products,
      addnested(Sales,filter(Amount gt 3) as FilteredSales)
    as FilteredProducts)
```
results in
```json
{
  "@context": "$metadata#Categories(FilteredProducts()",
  "value": [
    { "ID": "PG1", "Name": "Food",
      "FilteredProducts@context": "#Products(FilteredSales())",
      "FilteredProducts": [
        { "ID": "P1", "Name": "Sugar",  "Color": "White",
          "FilteredSales@context": "#Sales",
          "FilteredSales": [] },
        { "ID": "P2", "Name": "Coffee", "Color": "Brown",
          "FilteredSales@context": "#Sales",
          "FilteredSales": [ { "ID": 3, "Amount": 4 },
                             { "ID": 4, "Amount": 8 } ] }
      ]
    },
    { "ID": "PG2", "Name": "Non-Food",
      "FilteredProducts@context": "#Products(FilteredSales())",
      "FilteredProducts": [
        { "ID": "P3", "Name": "Paper",  "Color": "White",
          "FilteredSales@context": "#Sales",
          "FilteredSales": [ { "ID": 5, "Amount": 4 } ] },
        { "ID": "P4", "Name": "Pencil", "Color": "Black",
          "FilteredSales@context": "#Sales",
          "FilteredSales": [] }
      ]
    }
  ]
}
```

Instead of keeping all related entities from navigation properties that `addnested` expanded by default, an explicit `$expand` controls which of them to include in the response:
```
GET /service/Categories?$apply=
    addnested(Products,
      addnested(Sales,filter(Amount gt 3) as FilteredSales)
    as FilteredProducts)
  &$expand=FilteredProducts
```
results in the response before without the FilteredSales dynamic navigation properties expanded in the result.
:::

::: example
Example ##ex: Here only the `GroupedSales` are expanded, because they are named in `$expand`, the related `Product` entity is not:
```
GET /service/Customers?$apply=addnested(Sales,
    groupby((Product/Name)) as GroupedSales)
  &$expand=GroupedSales
```
results in
```json
{
  "@context": "$metadata#Customers(GroupedSales())",
  "value": [
    { "ID": "C1", "Name": "Joe", "Country": "USA",
      "GroupedSales@context": "#Sales(@Core.AnyStructure)",
      "GroupedSales": [
        { },
        { },
        { }
      ] },
    { "ID": "C2", "Name": "Sue", "Country": "USA",
      "GroupedSales@context": "#Sales(@Core.AnyStructure)",
      "GroupedSales": [
        { },
        { }
      ] },
    { "ID": "C3", "Name": "Joe", "Country": "Netherlands",
      "GroupedSales@context": "#Sales(@Core.AnyStructure)",
      "GroupedSales": [
        { },
        { }
      ] },
    { "ID": "C4", "Name": "Luc", "Country": "France",
      "GroupedSales@context": "#Sales(@Core.AnyStructure)",
      "GroupedSales": [ ] }
  ]
}
```
:::

::: example
Example ##ex: use `outerjoin` to split up collection-valued navigation properties for grouping
```
GET /service/Customers?$apply=outerjoin(Sales as ProductSales)
                       /groupby((Country,ProductSales/Product/Name))
```
returns the different combinations of products sold per country:
```json
{
  "@context":"$metadata#Customers(Country,ProductSales())",
  "value": [
    { "Country": "Netherlands",
      "ProductSales@context": "#Sales(Product(Name))/$entity",
      "ProductSales": { "Product": { "Name": "Paper"  } } },
    { "Country": "Netherlands",
      "ProductSales@context": "#Sales(Product(Name))/$entity",
      "ProductSales": { "Product": { "Name": "Sugar"  } } },
    { "Country": "USA",
      "ProductSales@context": "#Sales(Product(Name))/$entity",
      "ProductSales": { "Product": { "Name": "Coffee" } } },
    { "Country": "USA",
      "ProductSales@context": "#Sales(Product(Name))/$entity",
      "ProductSales": { "Product": { "Name": "Paper"  } } },
    { "Country": "USA",
      "ProductSales@context": "#Sales(Product(Name))/$entity",
      "ProductSales": { "Product": { "Name": "Sugar"  } } },
    { "Country": "France", "ProductSales": null }
  ]
}
```
:::

## ##subsec Requesting Custom Aggregates

Custom aggregates are defined through the [`CustomAggregate`](#CustomAggregates) annotation. They can be associated with an entity set, a collection or an entity container.

A custom aggregate can be used by specifying the name of the custom aggregate in the [`aggregate`](#Transformationaggregate) clause.

::: example
Example ##ex:
```
GET /service/Sales?$apply=groupby((Customer/Country),
                           aggregate(Amount with sum as Actual,Forecast))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(Country),Actual,Forecast)",
  "value": [
    { "Customer": { "Country": "Netherlands" },
      "Actual@type": "Decimal", "Actual":  5,
      "Forecast@type": "Decimal", "Forecast": 4 },
    { "Customer": { "Country": "USA" },
      "Actual@type": "Decimal", "Actual": 19,
      "Forecast@type": "Decimal", "Forecast": 21 }
  ]
}
```
:::

When associated with an entity set a custom aggregate MAY have the same name as a property of the underlying entity type with the same type as the type returned by the custom aggregate. This is typically done when the aggregate is used as a default aggregate for that property.

::: example
Example ##ex: A custom aggregate can be defined with the same name as a property of the same type in order to define a default aggregate for that property.
```
GET /service/Sales?$apply=groupby((Customer/Country),aggregate(Amount))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(Country),Amount)",
  "value": [
    { "Customer": { "Country": "Netherlands" }, "Amount":  5 },
    { "Customer": { "Country": "USA" },         "Amount": 19 }
  ]
}
```
:::

::: example
Example ##ex: illustrates rule 1 for [keyword `from`](#Keywordfrom): maximal sales forecast for a product
```
GET /service/Sales?$apply=aggregate(Forecast from Product with max
                                    as MaxProductForecast)
```
is equivalent to
```
GET /service/Sales?$apply=
  groupby((Product),aggregate(Forecast))
  /aggregate(Forecast with max as MaxProductForecast)
```
:::

::: example
Example ##ex: illustrates rule 2 for [keyword `from`](#Keywordfrom): the forecast is computed in two steps
```
GET /service/Sales?$apply=aggregate(Forecast from Product as ProductForecast)
```
is equivalent to the following (except that the property name is `Forecast` instead of `ProductForecast`)
```
GET /service/Sales?$apply=
  groupby((Product),aggregate(Forecast))
  /aggregate(Forecast)
```
:::

::: example
Example ##ex: illustrates rule 1 followed by rule 2 for [keyword `from`](#Keywordfrom): a forecast based on the average daily forecasts per country
```
GET /service/Sales?$apply=aggregate(Forecast from Time with average
                                    from Customer/Country
                                    as CountryForecast)
```
is equivalent to the following (except that the property name is `Forecast` instead of `CountryForecast`). Note that `Forecast` appears as a property and as a custom aggregate.
```
GET /service/Sales?$apply=
  groupby((Customer/Country),
    groupby((Time),aggregate(Forecast))
    /aggregate(Forecast with average as D1))
  /aggregate(Forecast)
```
:::

## ##subsec Aliasing

A property can be aggregated in multiple ways, each with a different alias.

::: example
Example ##ex:
```
GET /service/Sales?$apply=groupby((Customer/Country),
                           aggregate(Amount with sum as Total,
                                     Amount with average as AvgAmt))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(Country),Total,AvgAmt)",
  "value": [
    { "Customer": { "Country": "Netherlands" },
      "Total@type": "Decimal", "Total":  5,
      "AvgAmt@type": "Decimal", "AvgAmt": 1.6666667 },
    { "Customer": { "Country": "USA" },
      "Total@type": "Decimal", "Total": 19,
      "AvgAmt@type": "Decimal", "AvgAmt": 3.8 }
  ]
}
```
:::

The introduced dynamic property is added to the context where the aggregate expression is applied to:

::: example
Example ##ex:
```
GET /service/Products?$apply=groupby((Name),
                              aggregate(Sales/Amount with sum as Total))
    /groupby((Name),
     addnested(Sales,aggregate(Amount with average as AvgAmt)
               as AggregatedSales))
```
results in
```json
{
  "@context": "$metadata#Products(Name,Total,AggregatedSales())",
  "value": [
    { "Name": "Coffee", "Total":   12,
      "AggregatedSales@context": "#Sales(AvgAmt)",
      "AggregatedSales": [ { "AvgAmt@type": "Decimal",
                             "AvgAmt": 6 } ] },
    { "Name": "Paper",  "Total":    8,
      "AggregatedSales@context": "#Sales(AvgAmt)",
      "AggregatedSales": [ { "AvgAmt@type": "Decimal",
                             "AvgAmt": 2 } ] },
    { "Name": "Pencil", "Total": null,
      "AggregatedSales@context": "#Sales(AvgAmt)",
      "AggregatedSales": [ { "AvgAmt": null } ] },
    { "Name": "Sugar",  "Total":    4,
      "AggregatedSales@context": "#Sales(AvgAmt)",
      "AggregatedSales": [ { "AvgAmt@type": "Decimal",
                             "AvgAmt": 2 } ] }
  ]
}
```
:::

There is no hard distinction between groupable and aggregatable properties: the same property can be aggregated and used to group the aggregated results.

::: example
Example ##ex:
```
GET /service/Sales?$apply=groupby((Amount),aggregate(Amount with sum as Total))
```
will return all distinct amounts appearing in sales orders and how much money was made with deals of this amount
```json
{
  "@context": "$metadata#Sales(Amount,Total)",
  "value": [
    { "Amount": 1, "Total@type": "Decimal", "Total": 2 },
    { "Amount": 2, "Total@type": "Decimal", "Total": 6 },
    { "Amount": 4, "Total@type": "Decimal", "Total": 8 },
    { "Amount": 8, "Total@type": "Decimal", "Total": 8 }
  ]
}
```
:::

## ##subsec Combining Transformations per Group

Dynamic property names may be reused in different transformation sequences passed to `concat`.

::: example
Example ##ex_bestselling: to get the best-selling product per country with sub-totals for every country, the partial results of a transformation sequence and a `groupby` transformation are concatenated:
```
GET /service/Sales?$apply=concat(
                     groupby((Customer/Country,Product/Name),
                             aggregate(Amount with sum as Total))
                       /groupby((Customer/Country),topcount(1,Total)),
                     groupby((Customer/Country),
                             aggregate(Amount with sum as Total)))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(Country),Total)",
  "value": [
    { "Customer":{ "Country": "USA" },         "Product":{ "Name": "Coffee" },
      "Total@type": "Decimal", "Total": 12
    },
    { "Customer":{ "Country": "Netherlands" }, "Product":{ "Name": "Paper" },
      "Total@type": "Decimal", "Total":  3
    },
    { "Customer":{ "Country": "USA" },
      "Total@type": "Decimal", "Total": 19
    },
    { "Customer":{ "Country": "Netherlands" },
      "Total@type": "Decimal", "Total":  5
    }
  ]
}
```
:::

::: example
Example ##ex: transformation sequences are also useful inside `groupby`: Aggregate the amount by only considering the top two sales amounts per product and country:
```
GET /service/Sales?$apply=groupby((Customer/Country,Product/Name),
                      topcount(2,Amount)/aggregate(Amount with sum as Total))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(Country),Product(Name),Total)",
  "value": [
    { "Customer":{ "Country": "Netherlands" }, "Product":{ "Name": "Paper" },
      "Total@type": "Decimal", "Total":  3
    },
    { "Customer":{ "Country": "Netherlands" }, "Product":{ "Name": "Sugar" },
      "Total@type": "Decimal", "Total":  2
    },
    { "Customer":{ "Country": "USA" },         "Product":{ "Name": "Sugar" },
      "Total@type": "Decimal", "Total":  2
    },
    { "Customer":{ "Country": "USA" },         "Product":{ "Name": "Coffee" },
      "Total@type": "Decimal", "Total": 12
    },
    { "Customer":{ "Country": "USA" },         "Product":{ "Name": "Paper" },
      "Total@type": "Decimal", "Total":  5
    }
  ]
}
```
:::

::: example
Example ##ex_contradict: concatenation of two different groupings "biggest sale per customer" and "biggest sale per product", made distinguishable by a dynamic property:
```
GET /service/Sales?$apply=concat(
    groupby((Customer),topcount(1,Amount))/compute('Customer' as per),
    groupby((Product),topcount(1,Amount))/compute('Product' as per))
  &$expand=Customer($select=ID),Product($select=ID)
```
In the result, `Sales` entities 4 and 6 occur twice each with contradictory values of the dynamic property `per`. If a UI consuming the response presents the two groupings in separate columns based on the `per` property, no contradiction effectively arises.
```json
{
  "@context": "$metadata#Sales(*,per,Customer(ID),Product(ID))",
  "value": [
    { "Customer": { "ID": "C1" }, "Product": { "ID": "P2" },
      "ID": "3", "Amount": 4, "per": "Customer" },
    { "Customer": { "ID": "C2" }, "Product": { "ID": "P2" },
      "ID": "4", "Amount": 8, "per": "Customer" },
    { "Customer": { "ID": "C3" }, "Product": { "ID": "P1" },
      "ID": "6", "Amount": 2, "per": "Customer" },
    { "Customer": { "ID": "C3" }, "Product": { "ID": "P1" },
      "ID": "6", "Amount": 2, "per": "Product" },
    { "Customer": { "ID": "C2" }, "Product": { "ID": "P2" },
      "ID": "4", "Amount": 8, "per": "Product" },
    { "Customer": { "ID": "C2" }, "Product": { "ID": "P3" },
      "ID": "5", "Amount": 4, "per": "Product" }
  ]
}
```
:::

## ##subsec Model Functions as Set Transformations

::: example
Example ##ex: As a variation of [example ##bestselling], a query for returning the best-selling product per country and the total amount of the remaining products can be formulated with the help of a model function.

For this purpose, the model includes a definition of a `TopCountAndRemainder` function that accepts a count and a numeric property for the top entities:
```xml
<edm:Function Name="TopCountAndRemainder"
              IsBound="true">
    <edm:Parameter  Name="EntityCollection"
                    Type="Collection(Edm.EntityType)" />
    <edm:Parameter  Name="Count" Type="Edm.Int16" />
    <edm:Parameter  Name="Property" Type="Edm.String" />
    <edm:ReturnType Type="Collection(Edm.EntityType)" />
</edm:Function>
```
The function retains those entities that `topcount` also would retain, and replaces the remaining entities by a single aggregated entity, where only the numeric property has a value, which is the sum over those remaining entities:
```
GET /service/Sales?$apply=
  groupby((Customer/Country,Product/Name),
          aggregate(Amount with sum as Total))
  /groupby((Customer/Country),
           Self.TopCountAndRemainder(Count=1,Property='Total'))
```
results in
```json
{
  "@context": "$metadata#Sales(Customer(Country),Total)",
  "value": [
    { "Customer": { "Country": "Netherlands" },
      "Product": { "Name": "Paper" },
      "Total@type": "Decimal", "Total":  3 },
    { "Customer": { "Country": "Netherlands" },
      "Total@type": "Decimal", "Total":  2 },
    { "Customer": { "Country": "USA" },
      "Product": { "Name": "Coffee" },
      "Total@type": "Decimal", "Total": 12 },
    { "Customer": { "Country": "USA" },
      "Total@type": "Decimal", "Total":  7 }
  ]
}
```

Note that these two entities get their values for the Country property from the groupby transformation, which ensures that they contain all grouping properties with the correct values.
:::

## ##subsec Controlling Aggregation per Rollup Level

For a leveled hierarchy, consumers may specify a different aggregation method per level for every property passed to [`rollup`](#Groupingwithrollup) as a hierarchy level below the root level.

::: example
Example ##ex: get the average of the overall amount by month per product.

Using a transformation sequence:
```
GET /service/Sales?$apply=groupby((Product/ID,Product/Name,Time/Month),
                           aggregate(Amount with sum) as Total))
                  /groupby((Product/ID,Product/Name),
                           aggregate(Total with average as MonthlyAverage))
```

Using `from`:
```
GET /service/Sales?$apply=groupby((Product/ID,Product/Name),
                      aggregate(Amount with sum
                                       from Time/Month with average
                                       as MonthlyAverage))
```
:::

::: example
Example ##ex:  get the total amount per customer, the average of the total customer amounts per country, and the overall average of these averages
```
GET /service/Sales?$apply=concat(
                    groupby((rollup(Customer/Country,Customer/ID)),
                           aggregate(Amount with sum
                                     from Customer/ID with average
                                     as CustomerCountryAverage)),
                    aggregate(Amount with sum
                              from Customer/ID      with average
                              from Customer/Country with average
                              as CustomerCountryAverage)))
```
results in
```json
{
  "@context": "$metadata#Sales(CustomerCountryAverage)",
  "value": [
    { "Customer": { "Country": "USA", "ID": "C1" },
      "CustomerCountryAverage@type":"Decimal",
      "CustomerCountryAverage":   7 },
    { "Customer": { "Country": "USA", "ID": "C2" },
      "CustomerCountryAverage@type":"Decimal",
      "CustomerCountryAverage":  12 },
    { "Customer": { "Country": "USA" },
      "CustomerCountryAverage@type":"Decimal",
      "CustomerCountryAverage": 9.5 },
    { "Customer": { "Country": "Netherlands", "ID": "C3" },
      "CustomerCountryAverage@type":"Decimal",
      "CustomerCountryAverage": 5 },
    { "Customer": { "Country": "Netherlands" },
      "CustomerCountryAverage@type":"Decimal",
      "CustomerCountryAverage": 5 },
    { "CustomerCountryAverage@type":"Decimal",
      "CustomerCountryAverage": 7.25 }
  ]
}
```

Note that this example extends the result of `rollup` with `concat` and `aggregate` to append the overall
average.
:::

## ##subsec Aggregation in Recursive Hierarchies

If aggregation along a recursive hierarchy does not apply to the entire hierarchy, transformations `ancestors` and `descendants` may be used to restrict it as needed.

::: example
Example ##ex: Total sales amounts for sales orgs in 'US' in the `SalesOrgHierarchy` defined in [Hierarchy Examples](#HierarchyExamples)
```
GET /service/Sales?$apply=
    descendants(
        $root/SalesOrganizations,SalesOrgHierarchy,SalesOrganization/ID,
        filter(SalesOrganization/Name eq 'US'),keep start)
    /groupby((rolluprecursive(
        $root/SalesOrganizations,SalesOrgHierarchy,SalesOrganization/ID)),
      aggregate(Amount with sum as TotalAmount))
  &$expand=SalesOrganization($expand=Superordinate/$ref)
```
results in
```json
{
  "@context": "$metadata#Sales(TotalAmount,SalesOrganization())",
  "value": [
    { "TotalAmount@type": "Decimal", "TotalAmount": 19,
      "SalesOrganization": { "ID": "US",      "Name": "US",
        "Superordinate": { "@id": "SalesOrganizations('Sales')" } } },
    { "TotalAmount@type": "Decimal", "TotalAmount": 12,
      "SalesOrganization": { "ID": "US East", "Name": "US East",
        "Superordinate": { "@id": "SalesOrganizations('US')" } } },
    { "TotalAmount@type": "Decimal", "TotalAmount":  7,
      "SalesOrganization": { "ID": "US West", "Name": "US West",
        "Superordinate": { "@id": "SalesOrganizations('US')" } } }
  ]
}
```

Note that this example returns the actual total sums regardless of whether the `descendants` transformation comes before or after the `groupby` with `rolluprecursive`.
:::

The order of transformations becomes relevant if `groupby` with `rolluprecursive` shall aggregate over a thinned-out hierarchy, like here:

::: example
Example ##ex: Number of Paper sales per sales org aggregated along the the `SalesOrgHierarchy` defined in [Hierarchy Examples](#HierarchyExamples)
```
GET /service/Sales?$apply=
    filter(Product/Name eq 'Paper')
    /groupby((rolluprecursive((
        $root/SalesOrganizations,SalesOrgHierarchy,SalesOrganization/ID)),
      aggregate($count as PaperSalesCount))
  &$expand=SalesOrganization($expand=Superordinate/$ref)
```
results in
```json
{
  "@context": "$metadata#Sales(PaperSalesCount,SalesOrganization())",
  "value": [
    { "PaperSalesCount@type": "Decimal", "PaperSalesCount": 2,
      "SalesOrganization": { "ID": "US",           "Name": "US",
        "Superordinate": { "@id": "SalesOrganizations('Sales')" } } },
    { "PaperSalesCount@type": "Decimal", "PaperSalesCount": 1,
      "SalesOrganization": { "ID": "US East",      "Name": "US East",
        "Superordinate": { "@id": "SalesOrganizations('US')" } } },
    { "PaperSalesCount@type": "Decimal", "PaperSalesCount": 1,
      "SalesOrganization": { "ID": "US West",      "Name": "US West",
        "Superordinate": { "@id": "SalesOrganizations('US')" } } },
    { "PaperSalesCount@type": "Decimal", "PaperSalesCount": 2,
      "SalesOrganization": { "ID": "EMEA",         "Name": "EMEA",
        "Superordinate": { "@id": "SalesOrganizations('Sales')" } } },
    { "PaperSalesCount@type": "Decimal", "PaperSalesCount": 2,
      "SalesOrganization": { "ID": "EMEA Central", "Name": "EMEA Central",
        "Superordinate": { "@id": "SalesOrganizations('EMEA')" } } },
    { "PaperSalesCount@type": "Decimal", "PaperSalesCount": 4,
      "SalesOrganization": { "ID": "Sales",        "Name": "Sales",
        "Superordinate": null } }
  ]
}
```
:::

::: example
⚠ Example ##ex: The input set `Sales` is filtered along a hierarchy on a related entity (navigation property `SalesOrganization`) before an aggregation
```
GET /service/Sales?$apply=
  descendants($root/SalesOrganizations,
    SalesOrgHierarchy,
    SalesOrganization/ID,
    filter(SalesOrganization/Name eq 'US'),
    keep start)
  /aggregate(Amount with sum as TotalAmount)
```

The same aggregate value is computed if the input set is the hierarchical entity `SalesOrganizations` and an assumed partner navigation property `Sales` of `SalesOrganization` appears in the `aggregate` transformation
```
GET /service/SalesOrganizations?$apply=
  descendants($root/SalesOrganizations,
    SalesOrgHierarchy,
    ID,
    filter(Name eq 'US'),
    keep start)
  /aggregate(Sales/Amount with sum as TotalAmount)
```
:::

::: example
⚠ Example ##ex: total sales amount aggregated along the sales organization subhierarchy with root EMEA restricted to 3 levels
```
GET /service/Sales?$apply=
  groupby((rolluprecursive($root/SalesOrganizations,
                           SalesOrgHierarchy,
                           SalesOrganization/ID)),
          aggregate(Amount with sum as Total))
  /filter(Aggregation.isdescendant(
    HierarchyNodes=$root/SalesOrganizations,
    HierarchyQualifier='SalesOrgHierarchy',
    Node=SalesOrganization/ID,
    Ancestor='EMEA',
    MaxDistance=2,
    IncludeSelf=true))
  /orderby(SalesOrganization/Name)
  /traverse($root/SalesOrganizations,
            SalesOrgHierarchy,SalesOrganization/ID,preorder)
```
or, equivalently
```
GET /service/Sales?$apply=
  groupby((rolluprecursive(
    $root/SalesOrganizations,
    SalesOrgHierarchy,
    SalesOrganization/ID,
    descendants(
      $root/SalesOrganizations,
      SalesOrgHierarchy,
      ID,
      filter(ID eq 'EMEA'),
      2, keep start))),
  aggregate(Amount with sum as Total))
  /orderby(SalesOrganization/Name)
  /traverse($root/SalesOrganizations,
            SalesOrgHierarchy,SalesOrganization/ID,preorder)
```
:::

::: example
Example ##ex: Return the result of [example ##rollupnode] in preorder
```
GET /service/Sales?$apply=groupby(
    (rolluprecursive(
      $root/SalesOrganizations,
      SalesOrgHierarchy,
      SalesOrganization/ID,
      descendants(
        $root/SalesOrganizations,
        SalesOrgHierarchy,
        ID, filter(ID eq 'US'), keep start))),
    compute(case(SalesOrganization eq Aggregation.rollupnode():Amount)
            as AmountExcl)
    /aggregate(Amount with sum as TotalAmountIncl,
               AmountExcl with sum as TotalAmountExcl))
    /traverse($root/SalesOrganizations,
              SalesOrgHierarchy,
              SalesOrganization/ID,
              preorder,
              Name asc)
```
results in
```json
{
  "@context": "$metadata#Sales(SalesOrganization(ID),
                               TotalAmountIncl,TotalAmountExcl)",
  "value": [
    { "SalesOrganization": { "ID": "US",      "Name": "US" },
      "TotalAmountIncl@type": "Decimal", "TotalAmountIncl": 19,
      "TotalAmountExcl": null },
    { "SalesOrganization": { "ID": "US East", "Name": "US East" },
      "TotalAmountIncl@type": "Decimal", "TotalAmountIncl": 12,
      "TotalAmountExcl@type": "Decimal", "TotalAmountExcl": 12 },
    { "SalesOrganization": { "ID": "US West", "Name": "US West" },
      "TotalAmountIncl@type": "Decimal", "TotalAmountIncl":  7,
      "TotalAmountExcl@type": "Decimal" ,"TotalAmountExcl":  7 }
  ]
}
```
:::

::: example
Example ##ex_traversecoll: Preorder traversal of a hierarchy with 1:N relationship with collection-valued segment $p_1={\tt Sales}$ and $r={\tt SalesOrganization}/{\tt ID}$.
```
GET /service/Products?$apply=traverse(
      $root/SalesOrganizations,
      SalesOrgHierarchy,
      Sales/SalesOrganization/ID,
      preorder,
      Name asc)
    &$select=ID
```

The result contains multiple instances of the same `Product` that differ in their `Sales` navigation property even though they agree in their `ID` key property. The node $x$ with $x/{\tt ID}={}$`"US"` has $σ(x)={}$`{"Sales": [{"SalesOrganization": {"ID": "US"}}]}`.
```json
{
  "@context":
      "$metadata#Products(ID,Sales(SalesOrganization(ID)))",
  "value": [
    { "ID": "P1", "Sales": [ { "SalesOrganization": { "ID": "Sales" } } ] },
    { "ID": "P2", "Sales": [ { "SalesOrganization": { "ID": "Sales" } } ] },
    { "ID": "P3", "Sales": [ { "SalesOrganization": { "ID": "Sales" } } ] },
    { "ID": "P1", "Sales": [ { "SalesOrganization": { "ID": "EMEA" } } ] },
    { "ID": "P3", "Sales": [ { "SalesOrganization": { "ID": "EMEA" } } ] },
    { "ID": "P1",
      "Sales": [ { "SalesOrganization": { "ID": "EMEA Central" } } ] },
    { "ID": "P3",
      "Sales": [ { "SalesOrganization": { "ID": "EMEA Central" } } ] },
    { "ID": "P1", "Sales": [ { "SalesOrganization": { "ID": "US" } } ] },
    { "ID": "P2", "Sales": [ { "SalesOrganization": { "ID": "US" } } ] },
    { "ID": "P3", "Sales": [ { "SalesOrganization": { "ID": "US" } } ] },
    { "ID": "P2", "Sales": [ { "SalesOrganization": { "ID": "US East" } } ] },
    { "ID": "P3", "Sales": [ { "SalesOrganization": { "ID": "US East" } } ] },
    { "ID": "P1", "Sales": [ { "SalesOrganization": { "ID": "US West" } } ] },
    { "ID": "P2", "Sales": [ { "SalesOrganization": { "ID": "US West" } } ] },
    { "ID": "P3", "Sales": [ { "SalesOrganization": { "ID": "US West" } } ] }
  ]
}
```
:::

::: example
Example ##ex_rollupcoll: Aggregation along a hierarchy with 1:N relationship: Sold products per sales organization
```
GET /service/Products?$apply=
    groupby((rolluprecursive(
               $root/SalesOrganizations,
               SalesOrgHierarchy,
               Sales/SalesOrganization/ID)),
             aggregate(ID with Custom.concat as SoldProducts)
```
results in
```json
{
  "@context": "$metadata#Products(Sales(SalesOrganization(ID)),SoldProducts)",
  "value": [
    { "Sales": [ { "SalesOrganization": { "ID": "Sales" } } ],
      "SoldProducts": "P1,P2,P3" },
    { "Sales": [ { "SalesOrganization": { "ID": "EMEA" } } ],
      "SoldProducts": "P1,P3" },
    { "Sales": [ { "SalesOrganization": { "ID": "EMEA Central" } } ],
      "SoldProducts": "P1,P3" },
    { "Sales": [ { "SalesOrganization": { "ID": "US" } } ],
      "SoldProducts": "P1,P2,P3" },
    { "Sales": [ { "SalesOrganization": { "ID": "US East" } } ],
      "SoldProducts": "P2,P3" },
    { "Sales": [ { "SalesOrganization": { "ID": "US West" } } ],
      "SoldProducts": "P1,P2,P3" }
  ]
}
```
:::

::: example
⚠ Example ##ex: Assume an extension of the data model where a `SalesOrganization` is associated with one or more instances of `ProductCategory`, and `ProductCategory` also organizes categories in a recursive hierarchy:

ProductCategory|parent ProductCategory|associated SalesOrganizations
---------------|----------------------|-----------------------------
Food||US, EMEA
Cereals|Food|US
Organic cereals|Cereals|US West

Aggregation of sales amounts along the sales organization hierarchy could be restricted to those organizations linked with product category "Cereals" or a descendant of it:
```
GET /service/Sales?$apply=groupby((rolluprecursive(
    $root/SalesOrganizations,SalesOrgHierarchy,
    SalesOrganization/ID,
    ancestors(
      $root/SalesOrganizations,SalesOrgHierarchy,
      ID,
      traverse(
        $root/ProductCategories,ProductCategoryHierarchy,
        ProductCategories/ID,
        preorder,
        descendants(
          $root/ProductCategories,ProductCategoryHierarchy,
          ID,
          filter(Name eq 'Cereals'),
          keep start)),
      keep start)
    )),
    aggregate(Amount with sum as TotalAmount))
  &$expand=SalesOrganization($select=ID,$expand=ProductCategories/$ref)
```
results in
```json
{
  "@context": "$metadata#Sales(SalesOrganization(ID),TotalAmount)",
  "value": [
    { "SalesOrganization": { "ID": "Sales",   "ProductCategories": [ ] },
      "TotalAmount@type": "Decimal", "TotalAmount": 24 },
    { "SalesOrganization": { "ID": "US",      "ProductCategories": [
      { "@id": "ProductCategories('Food')" },
      { "@id": "ProductCategories('Cereals')" } ] },
      "TotalAmount@type": "Decimal", "TotalAmount": 19 },
    { "SalesOrganization": { "ID": "US West", "ProductCategories": [
      { "@id": "ProductCategories('Organic cereals')" } ] },
      "TotalAmount@type": "Decimal", "TotalAmount":  7 }
  ]
}
```

`traverse` acts here as a filter, hence `preorder` could be changed to `postorder` without changing the result. `descendants` is the parameter $S$ of `traverse` and operates on the product category hierarchy being traversed.

If `traverse` was omitted, the transformation
```
ancestors(
  $root/SalesOrganizations,SalesOrgHierarchy,
  ID,
  descendants(
    $root/ProductCategories,ProductCategoryHierarchy,
    ProductCategories/ID,
    filter(ProductCategories/any(c:c/Name eq 'Cereals')),
    keep start),
  keep start)
```
works differently: `descendants` is the parameter $T$ of `ancestors` and operates on its input set of sales organizations. This would determine descendants of sales organizations for "Cereals" and their ancestor sales organizations, so US East would appear in the result.
:::

## ##subsec Transformation Sequences

Applying aggregation first covers the most prominent use cases. The slightly more sophisticated question "how much money is earned with small sales" requires filtering the base set before applying the aggregation. To enable this type of question several transformations can be specified in `$apply` in the order they are to be applied, separated by a forward slash.

::: example
Example ##ex:
```
GET /service/Sales?$apply=filter(Amount le 1)
    /aggregate(Amount with sum as Total)
```
means "filter first, then aggregate", and results in
```json
{
  "@context": "$metadata#Sales(Total)",
  "value": [
    { "Total@type": "Decimal", "Total": 2 }
  ]
}
```
:::

Using `filter` within `$apply` does not preclude using it as a normal system query option.

::: example
Example ##ex:
```
GET /service/Sales?$apply=filter(Amount le 2)/groupby((Product/Name),
                                         aggregate(Amount with sum as Total))
           &$filter=Total ge 4
```
results in
```json
{
  "@context": "$metadata#Sales(Product(Name),Total)",
  "value": [
    { "Product": { "Name": "Paper" },
      "Total@type": "Decimal", "Total": 4 },
    { "Product": { "Name": "Sugar" },
      "Total@type": "Decimal", "Total": 4 }
  ]
}
```
:::

::: example
Example ##ex: Revisiting [example ##from] for using the `from` keyword with the `aggregate` function, the request
```
GET /service/Sales?$apply=aggregate(Amount from Time with average
                                    as DailyAverage)
```
could be rewritten in a more procedural way using a transformation sequence returning the same result
```
GET /service/Sales?$apply=groupby((Time),aggregate(Amount with sum as Total))
                  /aggregate(Total with average as DailyAverage)
```
:::
For further examples, consider another data model containing entity sets for cities, countries and continents and the obvious associations between them.

::: example
Example ##ex: getting the population per country with
```
GET /service/Cities?$apply=groupby((Continent/Name,Country/Name),
                            aggregate(Population with sum as TotalPopulation))
```
results in
```json
{
  "@context": "$metadata#Cities(Continent(Name),Country(Name),
                                TotalPopulation)",
  "value": [
    { "Continent": { "Name": "Asia" }, "Country": { "Name": "China" },
      "TotalPopulation@type": "Int32", "TotalPopulation": 1412000000 },
    { "Continent": { "Name": "Asia" }, "Country": { "Name": "India" },
      "TotalPopulation@type": "Int32", "TotalPopulation": 1408000000 },
    ...
  ]
}
```
:::

::: example
Example ##ex: all countries with megacities and their continents
```
GET /service/Cities?$apply=filter(Population ge 10000000)
                   /groupby((Continent/Name,Country/Name),
                            aggregate(Population with sum as TotalPopulation))
```
:::

::: example
Example ##ex: all countries with tens of millions of city dwellers and the continents only for these countries
```
GET /service/Cities?$apply=groupby((Continent/Name,Country/Name),
                          aggregate(Population with sum as CountryPopulation))
                   /filter(CountryPopulation ge 10000000)
                   /concat(identity,
                         groupby((Continent/Name),
                           aggregate(CountryPopulation with sum
                                      as TotalPopulation)))
```
or
```
GET /service/Cities?$apply=groupby((Continent/Name,Country/Name),
                          aggregate(Population with sum as CountryPopulation))
                   /filter(CountryPopulation ge 10000000)
                   /groupby((rollup(Continent/Name,Country/Name)),
                             aggregate(CountryPopulation with sum
                                       as TotalPopulation))
```
:::

::: example
Example ##ex: all countries with tens of millions of city dwellers and all continents with cities independent of their size
```
GET /service/Cities?$apply=groupby((Continent/Name,Country/Name),
                          aggregate(Population with sum as CountryPopulation))
                   /concat(filter(CountryPopulation ge 10000000),
                         groupby((Continent/Name),
                                 aggregate(CountryPopulation with sum
                                       as TotalPopulation)))
```
:::

::: example
Example ##ex: assuming the data model includes a sales order entity set with related sets for order items and customers, the base set as well as the related items can be filtered before aggregation
```
GET /service/SalesOrders?$apply=filter(Status eq 'incomplete')
    /addnested(Items,filter(not Shipped) as FilteredItems)
    /groupby((Customer/Country),
     aggregate(FilteredItems/Amount with sum as ItemAmount))
```
:::

::: example
Example ##ex: assuming that `Amount` is a custom aggregate in addition to the property, determine the total for countries with an `Amount` greater than 1000
```
GET /service/SalesOrders?$apply=
  groupby((Customer/Country),aggregate(Amount))
  /filter(Amount gt 1000)
  /aggregate(Amount)
```
:::

::: example
Example ##ex_aggrconflict: The output set of the `concat` transformation contains `Sales` entities multiple times with conflicting related `AugmentedProduct` entities that cannot be aggregated by the second transformation.
```
GET /service/Sales?$apply=
  concat(addnested(Product,compute(0.1 as Discount) as AugmentedProduct),
         addnested(Product,compute(0.2 as Discount) as AugmentedProduct))
  /aggregate(AugmentedProduct/Discount with max as MaxDiscount)
```
results in an error.
:::

::: example
Example ##ex: The `nest` transformation can be used inside `groupby` to produce one or more collection-valued properties per group.
```
GET /service/Sales?$apply=groupby((Product/Category/ID),
                      nest(groupby((Customer/ID)) as Customers))
```
results in
```json
{
  "@context":"$metadata#Sales(Product(Category(ID)),Customers())",
  "value": [
    { "Product": { "Category": { "ID": "PG1" } },
      "Customers@context": "#Sales(Customer(ID))",
      "Customers": [ { "Customer": { "ID": "C1" } },
                     { "Customer": { "ID": "C2" } },
                     { "Customer": { "ID": "C3" } } ] },
    { "Product": { "Category": { "ID": "PG2" } },
      "Customers@context": "#Sales(Customer(ID))",
      "Customers": [ { "Customer": { "ID": "C1" } },
                     { "Customer": { "ID": "C2" } },
                     { "Customer": { "ID": "C3" } } ] }
  ]
}
```
:::
