
-------

# ##sec Temporal Requests

## ##subsec Temporal Expressions

A temporal expression is

- A date in the form [dateValue]{.abnf}, see [OData-ABNF](#ODataABNF)
- A timestamp in the form [dateTimeOffsetValueInUrl]{.abnf}, see [OData-ABNF](#ODataABNF)
- One of the literals `min` or `max`
- An expression resulting in a date or timestamp value

The literals `min` and `max` are interpreted depending on the data type
of the time period start and end. They represent the minimum and maximum
values of the time period that the service will allow. Their values are
service specific as they can depend on the capabilities of the
underlying data model.

Note that there is no literal for "today" as clients and services can be
in different time zones and thus can have different notions of which
date is "today". Clients are advised to use concrete temporal values and
should avoid using the URL function `now()` with period start and end of
type `Edm.Date`.

Note that services may allow service-defined functions for temporal
expressions, for example to deal with fiscal years in a particular
company.

## ##subsec Querying Temporal Data

Temporal query options allow point-in-time as well as time-range
queries. They take a temporal expression as their argument whose result
type MUST match the type of the corresponding time period start and end.

Adding temporal query options to a request does not alter the response
shape, it only affects the returned data.

Temporal query options can be used with data modification operations, in
which case they do not alter the modification semantics of the request,
they only affect the response. That is, they only influence the
"implicit `GET`" after successful data modification.

If no temporal query options are specified,
- timeline entity sets return all time slices, and
- snapshot entity sets return the snapshot valid at the time of the request.

### ##subsubsec Propagation of Temporal Query Options

Temporal query options can be specified for the requested resource, and
for expanded navigation properties. They are propagated along navigation
paths and `$expand` until overridden on an expanded navigation property,
and the overridden query option values are propagated from there to
further expanded navigation properties.

If any temporal query option is specified for an expanded navigation
property, all temporal query options are overridden, and only the
explicitly specified temporal query options take effect and are
propagated further.

Temporal query options can be specified even if the directly addressed
resource does not track time. In this case the temporal query options do
not have any effect other than being propagated along `$expand`.

For entities in a [snapshot entity
set](#SnapshotEntitySet)
the point in time for representing data is determined by the first
applicable rule:

1. by the query option [`$at`](#QueryOptionat) nested within `$expand`
2. by a [`$at`](#QueryOptionat) value propagated along `$expand`
3. by [`$at`](#QueryOptionat) in the query option part of the request URL, which applies to every
   segment of the resource path and paths that occur in system query options
4. by the default value "now" --- the logic for determining this value is service-specific

For entities in a [timeline entity set](#TimelineEntitySet)
the time interval for filtering time slices is determined by the first
applicable rule:

1. by nested temporal query options within `$expand`
2. by temporal query option values propagated along `$expand`
3. by temporal query options in the query option part of the request URL

### ##subsubsec Query Option `$at`

The `$at` query option takes a temporal expression as its argument. It
retrieves the snapshot whose application time period contains the value
of `$at`.

For timeline entity sets and collection-valued navigation to timeline
entity sets, `$at=<point-in-time>` is shorthand for

::: indent
[`$from`](#QueryOptionsfromtoandtoInclusive)`=<point-in-time>&`[`$toInclusive`](#QueryOptionsfromtoandtoInclusive)`=<point-in-time>`
:::

The query option `$at` can be combined with `$filter` and `$search`.
Only entities satisfying all specified criteria are returned.

::: example
Example ##ex: Retrieve current data of an employee
```
GET /api-1/Employees('E314')
```
results in
```json
{
  "@context": "$metadata#Employees/$entity",
  "ID": "E314",
  "Name": "McDevitt",
  "Jobtitle": "Senior"
}
```
:::

::: example
Example ##ex: retrieve employee at a specific point in application time
```
GET /api-1/Employees('E314')?$at=2012-01-01
```
results in
```json
{
  "@context": "$metadata#Employees/$entity",
  "ID": "E314",
  "Name": "McDevitt",
  "Jobtitle": "Junior"
}
```
:::


::: example
Example ##ex: retrieve multiple employees at a past point in time
```
GET /api-1/Employees?$filter=contains(Name,'i')&$at=2012-01-01
```
results in one time slice for each employee matching the filter at the
specified point in time --- note that E401 back then does not satisfy
this condition
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E314",
      "Name": "McDevitt",
      "Jobtitle": "Junior"
    }
  ]
}
```
:::

Expanding related entities in combination with `$at` is
straight-forward: the response consists of the time slices of related
entities that are valid at the requested point in time. The period
boundaries of the nested entities reflect the actual validity of the
related entities and are independent of the period boundaries of the
base entity.

::: example
Example ##ex: retrieve employee in the past, show the past department as
of a later point in time
```
GET /api-1/Employees('E314')?$at=2012-01-01&$expand=Department($at=2021-11-23)
```
results in
```json
{
  "@context": "$metadata#Employees/$entity",
  "ID": "E314",
  "Name": "McDevitt",
  "Jobtitle": "Junior",
  "Department": {
    "ID": "D08",
    "Name": "1st Level Support"
  }
}
```
:::

::: example
Example ##ex: retrieve department in the future with expanded employees at
the same point in time
```
GET /api-1/Departments('D15')?$at=2015-01-01&$expand=Employees
```
results in
```json
{
  "@context": "$metadata#Departments/$entity",
  "ID": "D15",
  "Name": "Services",
  "Employees": [
    {
      "ID": "E314",
      "Name": "McDevitt",
      "Jobtitle": "Senior"
    },
    {
      "ID": "E401",
      "Name": "Gibson",
      "Jobtitle": "Expert"
    }
  ]
}
```
:::

### ##subsubsec Query Options `$from`, `$to`, and `$toInclusive`

The query options `$from`, `$to`, and `$toInclusive` only have an effect
on timeline entity sets and collection-valued navigation to timeline
entity sets. They each take a temporal expression as their argument.

Allowed combinations are:
- `$from` and `$to` defines a closed-open interval
- `$from` and `$toInclusive` defines a closed-closed interval
- `$from` and neither `$to` nor `$toInclusive` defines a
   closed-closed interval with right boundary `max`.

It is not allowed to combine `$from` and `$to`/`$toInclusive` with
[`$at`](#QueryOptionat) because `$at=<point-in-time>` is shorthand for

::: indent
`$from=<point-in-time>&$toInclusive=<point-in-time>`
:::

The result is restricted to time slices whose application-time period
overlaps with the interval defined by the query option values, taking
the closed-open or closed-closed semantics of the entity set's time
slices into account. The benefit of the query options is that the client
does not have to inspect the temporal annotations to determine the
property names of the period boundaries, the period semantics, and get
all comparison operators right.

For timeline entity sets with closed-open semantics
`$from=<start>&$to=<end>` is shorthand for

::: indent
`$filter=<time-slice-start> lt <end> and <time-slice-end> gt <start>`
:::

and for timeline entity sets with closed-closed semantics shorthand for

::: indent
`$filter=<time-slice-start> lt <end> and <time-slice-end> ge <start>`
:::

For timeline entity sets with closed-open semantics
`$from=<start>&$toInclusive=<end>` is shorthand for

::: indent
`$filter=<time-slice-start> le <end> and <time-slice-end> gt <start>`
:::

and for timeline entity sets with closed-closed semantics shorthand for

::: indent
`$filter=<time-slice-start> le <end> and <time-slice-end> ge <start>`
:::

The query options `$from` and `$to`/`$toInclusive` can be combined with
`$filter` and `$search`. Only entities satisfying all specified criteria
are returned.

If no `$select` is specified, each returned entity SHOULD contain the
application-time period boundaries as part of the default selection.

::: example
Example ##ex_employeeHistory: retrieve employee history over a period of application time
```
GET /api-2/Employees?$expand=history($select=Name,Jobtitle)
                    &$from=2012-03-01&$to=2025-01-01
```
results in one entity for each employee with time slices that overlap
the specified application-time period:
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E314",
      "history": [
        {
          "Name": "McDevitt",
          "Jobtitle": "Junior",
          "From": "2011-01-01",
          "To": "2013-10-01"
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2013-10-01",
          "To": "2014-01-01"
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2014-01-01",
          "To": "9999-12-31"
        }
      ]
    },
    {
      "ID": "E401",
      "history": [
        {
          "Name": "Gibson",
          "Jobtitle": "Expert",
          "From": "2012-03-01",
          "To": "9999-12-31"
        }
      ]
    }
  ]
}
```
The history for the first employee contains two time slices that do not
differ in the represented properties, caused by a department change, and
the department is not part of the representation.

The service could have combined these two time slices into one.
:::

::: example
Example ##ex: retrieve all employees that ever worked for department D15,
with their full history, and the department's data at the start of each
employee history time slice
```
GET /api-2/Departments('D15')/Employees?
    $expand=history(
      @emp=$this;
      $expand=Department(
        $expand=history($at=@emp/From)
      )
    )
```
has the following result with department names and budgets as of the
beginning of each employee time slice:
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E314",
      "history": [
        {
          "Name": "McDevitt",
          "Jobtitle": "Junior",
          "From": "2011-01-01",
          "To": "2013-10-01",
          "Department": {
            "ID": "D08",
            "history": [{
              "Name": "Support",
              "Budget": 1000,
              "From": "2010-01-01",
              "To": "2012-10-01"
            }]
          }
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2013-10-01",
          "To": "2014-01-01",
          "Department": {
            "ID": "D08",
            "history": [{
              "Name": "1st Level Support",
              "Budget": 1250,
              "From": "2012-06-01",
              "To": "2014-01-01"
            }]
          }
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2014-01-01",
          "To": "9999-12-31",
          "Department": {
            "ID": "D15",
            "history": [{
              "Name": "Services",
              "Budget": 1170,
              "From": "2011-01-01",
              "To": "9999-12-31"
            }]
          }
        }
      ]
    },
    {
      "ID": "E401",
      "history": [
        {
          "Name": "Norman",
          "Jobtitle": "Expert",
          "From": "2009-11-01",
          "To": "2012-03-01",
          "Department": {
            "ID": "D15",
            "history": []
          }
        },
        {
          "Name": "Gibson",
          "Jobtitle": "Expert",
          "From": "2012-03-01",
          "To": "9999-12-31",
          "Department": {
            "ID": "D15",
            "history": [{
              "Name": "Services",
              "Budget": 1170,
              "From": "2011-01-01",
              "To": "9999-12-31"
            }]
          }
        }
      ]
    }
  ]
}
```
:::

### ##subsubsec Interaction with Standard System Query Options

For [snapshot entity sets](#SnapshotEntitySet)
the point in time for representing data is determined following the
rules in [section ##PropagationofTemporalQueryOptions]
and evaluated *first*, then all other system query options are evaluated
on the data valid at that point in time, including the query option
`$apply` defined in [OData-Aggregation](#ODataAggregation).

For timeline entity sets the interval for filtering data is determined
following the rules in [section ##PropagationofTemporalQueryOptions]
and evaluated as an additional criterion for `$filter` in the evaluation
sequence defined in [#OData-Protocol#SystemQueryOptions],
which is evaluated _after_ the query option `$apply`.

::: example
Example ##ex: retrieve employee history over a period of application time
and filter on job title
```
GET /api-2/Employees?$expand=history(
                       $select=Name,Jobtitle;
                       $from=2012-03-01&$to=2025-01-01;
                       $filter=contains(Jobtitle,'e')
                     )
```
results in one entity for each employee with time slices that overlap
the specified application-time period and satisfy the filter condition
(one less than in [example ##employeeHistory]):
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E314",
      "history": [
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2013-10-01",
          "To": "2014-01-01"
        },
        {
          "Name": "McDevitt",
          "Jobtitle": "Senior",
          "From": "2014-01-01",
          "To": "9999-12-31"
        }
      ]
    },
    {
      "ID": "E401",
      "history": [
        {
          "Name": "Gibson",
          "Jobtitle": "Expert",
          "From": "2012-03-01",
          "To": "9999-12-31"
        }
      ]
    }
  ]
}
```
:::

The lambda operators `any()` and `all()` are not influenced by temporal
query options, they are interpreted for each time slice on the filtered
collection, meaning "any related time slice satisfying the lambda
expression" and "all related time slices satisfy the lambda expression".
The lambda expressions however can contain sub-expressions working on
the period boundaries.

::: example
Example ##ex: filter employees on their name at any point in time
```
GET /api-2/Employees?$expand=history($select=Name,Jobtitle)
                    &$from=2015-01-01
                    &$filter=history/any(h:startswith(h/Name,'N'))
```
results in one employee whose name matches in the past, and the matching
time slice is not in the requested time period
```json
{
  "@context": "$metadata#Employees",
  "value": [
    {
      "ID": "E401",
      "history": [
        {
          "Name": "Gibson",
          "Jobtitle": "Expert",
          "From": "2012-03-01",
          "To": "9999-12-31"
        }
      ]
    }
  ]
}
```
:::

### ##subsubsec Requesting Changes to Temporal Data

Change tracking for timeline entity sets works identical to non-temporal
entity sets. If the entity set supports change-tracking combined with
filtering on application-time period boundaries, the corresponding
declared properties SHOULD be listed as
[`FilterableProperties`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Capabilities.V1.md#ChangeTrackingType),
see [OData-VocCap](#ODataVocCap).
Clients can then use these properties in `$filter` or use the
convenience shortcuts [`$at`](#QueryOptionat)
or [`$from` and `$to`/`$toInclusive`](#QueryOptionsfromtoandtoInclusive).

Change tracking for snapshot entity sets only reports changes to time
slices that contain the point in time specified via
[`$at`](#QueryOptionat), or the point in time at which the defining query was received if no
[`$at`](#QueryOptionat) is specified. Mere passage of time does not lead to reported changes.
