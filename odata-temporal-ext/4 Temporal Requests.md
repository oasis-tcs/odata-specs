-------

# ##sec Temporal Requests

## ##subsec Temporal Expressions

A temporal expression is
- A date in the form `dateValue`, see
[OData-ABNF](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#ODataABNF)
- A timestamp in the form
`dateTimeOffsetValueInUrl`, see
[OData-ABNF](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#ODataABNF)
- One of the literals `min`
or `max`
- An expression resulting in a date or
timestamp value

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
- timeline entity sets return all time
slices, and
- snapshot entity sets return the snapshot
valid at the time of the request.

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
set](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#SnapshotEntitySet)
the point in time for representing data is determined by the first
applicable rule:

1\. by the query option
[`$at`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionat)
nested within `$expand`

2\. by a
[`$at`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionat)
value propagated along `$expand`

3\. by
[`$at`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionat)
in the query option part of the request URL, which applies to every
segment of the resource path and paths that occur in system query
options

4\. by the default value \"now\" -- the logic for determining this value
is service-specific

For entities in a [timeline entity
set](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#TimelineEntitySet)
the time interval for filtering time slices is determined by the first
applicable rule:

1\. by nested temporal query options within `$expand`

2\. by temporal query option values propagated along `$expand`

3\. by temporal query options in the query option part of the request
URL

### ##subsubsec Query Option `$at`

The `$at` query option takes a temporal expression as its argument. It
retrieves the snapshot whose application time period contains the value
of `$at`.

For timeline entity sets and collection-valued navigation to timeline
entity sets, `$at=<point-in-time>` is shorthand for

[\$from](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionsfromtoandtoInclusive)`=<point-in-time>&`[\$toInclusive](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionsfromtoandtoInclusive)`=<point-in-time>`

The query option `$at` can be combined with `$filter` and `$search`.
Only entities satisfying all specified criteria are returned.

::: example
Example ##ex: Retrieve current data of an employee
```
GET /api-1/Employees('E314')
```
:::

results in
```
{

  \"@odata.context\": \"\$metadata#Employees/\$entity\",

  \"ID\": \"E314\",

  \"Name\": \"McDevitt\",

  \"Jobtitle\": \"Senior\"

}
```

::: example
Example ##ex: retrieve employee at a specific point in application time
```
GET /api-1/Employees('E314')?\$at=2012-01-01
```
:::

results in
```
{

  \"@odata.context\": \"\$metadata#Employees/\$entity\",

  \"ID\": \"E314\",

  \"Name\": \"McDevitt\",

  \"Jobtitle\": \"Junior\"

}
```

::: example
Example ##ex: retrieve multiple employees at a past point in time
```
GET /api-1/Employees?\$filter=contains(Name,'i')&\$at=2012-01-01
```
:::

results in one time slice for each employee matching the filter at the
specified point in time -- note that E401 back then does not satisfy
this condition
```
{

  \"@odata.context\": \"\$metadata#Employees\",

  \"value\": \[

    {

      \"ID\": \"E314\",

      \"Name\": \"McDevitt\",

      \"Jobtitle\": \"Junior\"

    }

  \]

}
```

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
GET
/api-1/Employees('E314')?\$at=2012-01-01&\$expand=Department(\$at=2021-11-23)
```
:::

results in
```
{

  \"@odata.context\": \"\$metadata#Employees/\$entity\",

  \"ID\": \"E314\",

  \"Name\": \"McDevitt\",

  \"Jobtitle\": \"Junior\",

  \"Department\": {

    \"ID\": \"D08\",

    \"Name\": \"1st Level Support\"

  }

}
```

::: example
Example ##ex: retrieve department in the future with expanded employees at
the same point in time
```
GET /api-1/Departments('D15')?\$at=2015-01-01&\$expand=Employees
```
:::

results in
```
{

  \"@odata.context\": \"\$metadata#Departments/\$entity\",

  \"ID\": \"D15\",

  \"Name\": \"Services\",

  \"Employees\": \[

    {

      \"ID\": \"E314\",

      \"Name\": \"McDevitt\",

      \"Jobtitle\": \"Senior\"

    },

    {

      \"ID\": \"E401\",

      \"Name\": \"Gibson\",

      \"Jobtitle\": \"Expert\"

    }

  \]

}
```

### ##subsubsec Query Options `$from`, `$to`, and `$toInclusive`

The query options `$from`, `$to`, and `$toInclusive` only have an effect
on timeline entity sets and collection-valued navigation to timeline
entity sets. They each take a temporal expression as their argument.

Allowed combinations are:
- `$from` and `$to` defines a closed-open
interval
- `$from` and `$toInclusive` defines a
closed-closed interval
- `$from` and neither `$to` nor
`$toInclusive` defines a closed-closed interval with right boundary
`max`.

It is not allowed to combine `$from` and `$to`/`$toInclusive` with
[`$at`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionat)
because `$at=<point-in-time>` is shorthand for

`$from=<point-in-time>&$toInclusive=<point-in-time>`

The result is restricted to time slices whose application-time period
overlaps with the interval defined by the query option values, taking
the closed-open or closed-closed semantics of the entity set's time
slices into account. The benefit of the query options is that the client
does not have to inspect the temporal annotations to determine the
property names of the period boundaries, the period semantics, and get
all comparison operators right.

For timeline entity sets with closed-open semantics
`$from=<start>&$to=<end>` is shorthand for

`$filter=<time-slice-start> lt <end> and <time-slice-end> gt <start>`

and for timeline entity sets with closed-closed semantics shorthand for

`$filter=<time-slice-start> lt <end> and <time-slice-end> ge <start>`

For timeline entity sets with closed-open semantics
`$from=<start>&$toInclusive=<end>` is shorthand for

`$filter=<time-slice-start> le <end> and <time-slice-end> gt <start>`

and for timeline entity sets with closed-closed semantics shorthand for

`$filter=<time-slice-start> le <end> and <time-slice-end> ge <start>`

The query options `$from` and `$to`/`$toInclusive` can be combined with
`$filter` and `$search`. Only entities satisfying all specified criteria
are returned.

If no `$select` is specified, each returned entity SHOULD contain the
application-time period boundaries as part of the default selection.

::: example
Example ##ex: retrieve employee history over a period of application time
```
GET /api-2/Employees?\$expand=history(\$select=Name,Jobtitle)
:::

                    &\$from=2012-03-01&\$to=2025-01-01
```

results in one entity for each employee with time slices that overlap
the specified application-time period:
```
{

  \"@odata.context\": \"\$metadata#Employees\",

  \"value\": \[

    {

      \"ID\": \"E314\",

      \"history\": \[

        {

          \"Name\": \"McDevitt\",

          \"Jobtitle\": \"Junior\",

          \"From\": \"2011-01-01\",

          \"To\": \"2013-10-01\"

        },

        {

          \"Name\": \"McDevitt\",

          \"Jobtitle\": \"Senior\",

          \"From\": \"2013-10-01\",

          \"To\": \"2014-01-01\"

        },

        {

          \"Name\": \"McDevitt\",

          \"Jobtitle\": \"Senior\",

          \"From\": \"2014-01-01\",

          \"To\": \"9999-12-31\"

        }

      \]

    },

    {

      \"ID\": \"E401\",

      \"history\": \[

        {

          \"Name\": \"Gibson\",

          \"Jobtitle\": \"Expert\",

          \"From\": \"2012-03-01\",

          \"To\": \"9999-12-31\"

        }

      \]

    }

  \]

}
```

The history for the first employee contains two time slices that do not
differ in the represented properties, caused by a department change, and
the department is not part of the representation.

The service could have combined these two time slices into one.

::: example
Example ##ex: retrieve all employees that ever worked for department D15,
with their full history, and the department's data at the start of each
employee history time slice
```
[GET /api-2/Departments('D15')/Employees?\
  \$expand=history(\
    \@emp=\$this;\
    \$expand=Department(\
      \$expand=history(\$at=@emp/From)\
    )\
  )]{style="color:black"}
```
:::

has the following result with department names and budgets as of the
beginning of each employee time slice:
```
{

  \"@odata.context\": \"\$metadata#Employees\",

  \"value\": \[

    {

      \"ID\": \"E314\",

      \"history\": \[

        {

          \"Name\": \"McDevitt\",

          \"Jobtitle\": \"Junior\",

          \"From\": \"2011-01-01\",

          \"To\": \"2013-10-01\",

          \"Department\": {

            \"ID\": \"D08\",

            \"history\": \[{

              \"Name\": \"Support\",

              \"Budget\": 1000,

              \"From\": \"2010-01-01\",

              \"To\": \"2012-10-01\"

            }\]

          }

        },

        {

          \"Name\": \"McDevitt\",

          \"Jobtitle\": \"Senior\",

          \"From\": \"2013-10-01\",

          \"To\": \"2014-01-01\",

          \"Department\": {

            \"ID\": \"D08\",

            \"history\": \[{

              \"Name\": \"1st Level Support\",

              \"Budget\": 1250,

              \"From\": \"2012-06-01\",

              \"To\": \"2014-01-01\"

            }\]

          }

        },

        {

          \"Name\": \"McDevitt\",

          \"Jobtitle\": \"Senior\",

          \"From\": \"2014-01-01\",

          \"To\": \"9999-12-31\",

          \"Department\": {

            \"ID\": \"D15\",

            \"history\": \[{

              \"Name\": \"Services\",

              \"Budget\": 1170,

              \"From\": \"2011-01-01\",

              \"To\": \"9999-12-31\"

            }\]

          }

        }

      \]

    },

    {

      \"ID\": \"E401\",

      \"history\": \[

        {

          \"Name\": \"Norman\",

          \"Jobtitle\": \"Expert\",

          \"From\": \"2009-11-01\",

          \"To\": \"2012-03-01\",

          \"Department\": {

            \"ID\": \"D15\",

            \"history\": \[\]

          }

        },

        {

          \"Name\": \"Gibson\",

          \"Jobtitle\": \"Expert\",

          \"From\": \"2012-03-01\",

          \"To\": \"9999-12-31\",

          \"Department\": {

            \"ID\": \"D15\",

            \"history\": \[{

              \"Name\": \"Services\",

              \"Budget\": 1170,

              \"From\": \"2011-01-01\",

              \"To\": \"9999-12-31\"

            }\]

          }

        }

      \]

    }

  \]

}
```

### ##subsubsec Interaction with Standard System Query Options

For [snapshot entity
sets](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#SnapshotEntitySet)
the point in time for representing data is determined following the
rules in section "[Propagation of Temporal Query
Options](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#PropagationofTemporalQueryOptions)"
and evaluated *first*, then all other system query options are evaluated
on the data valid at that point in time, including the query option
`$apply` defined in
[OData-Aggregation](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html).

For timeline entity sets the interval for filtering data is determined
following the rules in section "[Propagation of Temporal Query
Options](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#PropagationofTemporalQueryOptions)"
and evaluated as an additional criterion for `$filter` in the evaluation
sequence defined in [OData-Protocol, section System Query
Options](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptions),
which is evaluated *after* the query option `$apply`.

::: example
Example ##ex: retrieve employee history over a period of application time
and filter on job title
```
GET /api-2/Employees?\$expand=history(
:::

                       \$select=Name,Jobtitle;

                       \$from=2012-03-01&\$to=2025-01-01;

                       \$filter=contains(Jobtitle,'e')

                     )
```

results in one entity for each employee with time slices that overlap
the specified application-time period and satisfy the filter condition
(one less than in Example 14):
```
{

  \"@odata.context\": \"\$metadata#Employees\",

  \"value\": \[

    {

      \"ID\": \"E314\",

      \"history\": \[

        {

          \"Name\": \"McDevitt\",

          \"Jobtitle\": \"Senior\",

          \"From\": \"2013-10-01\",

          \"To\": \"2014-01-01\"

        },

        {

          \"Name\": \"McDevitt\",

          \"Jobtitle\": \"Senior\",

          \"From\": \"2014-01-01\",

          \"To\": \"9999-12-31\"

        }

      \]

    },

    {

      \"ID\": \"E401\",

      \"history\": \[

        {

          \"Name\": \"Gibson\",

          \"Jobtitle\": \"Expert\",

          \"From\": \"2012-03-01\",

          \"To\": \"9999-12-31\"

        }

      \]

    }

  \]

}
```

The lambda operators `any()` and `all()` are not influenced by temporal
query options, they are interpreted for each time slice on the filtered
collection, meaning "any related time slice satisfying the lambda
expression" and "all related time slices satisfy the lambda expression".
The lambda expressions however can contain sub-expressions working on
the period boundaries.

::: example
Example ##ex: filter employees on their name at any point in time
```
GET /api-2/Employees?\$expand=history(\$select=Name,Jobtitle)
:::

                     &\$from=2015-01-01

                     &\$filter=history/any(h:startswith(h/Name,'N'))
```

results in one employee whose name matches in the past, and the matching
time slice is not in the requested time period
```
{

  \"@odata.context\": \"\$metadata#Employees\",

  \"value\": \[

    {

      \"ID\": \"E401\",

      \"history\": \[

        {

          \"Name\": \"Gibson\",

          \"Jobtitle\": \"Expert\",

          \"From\": \"2012-03-01\",

          \"To\": \"9999-12-31\"

        }

      \]

    }

  \]

}
```

### ##subsubsec Requesting Changes to Temporal Data

Change tracking for timeline entity sets works identical to non-temporal
entity sets. If the entity set supports change-tracking combined with
filtering on application-time period boundaries, the corresponding
declared properties SHOULD be listed as
[`FilterableProperties`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md#ChangeTrackingType),
see
[OData-VocCap](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#ODataVocCap).
Clients can then use these properties in `$filter` or use the
convenience shortcuts
[`$at`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionat)
or [`$from` and
`$to`/`$toInclusive`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionsfromtoandtoInclusive).

Change tracking for snapshot entity sets only reports changes to time
slices that contain the point in time specified via
[`$at`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionat),
or the point in time at which the defining query was received if no
[`$at`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionat)
is specified. Mere passage of time does not lead to reported changes.

## ##subsec Modifying Temporal Data

This section and its subsections describe modifications in application
time, both for
- *snapshot entity sets* with hidden
application time, where time slices exist in the data persistency but
are not directly visible in the entity set, each OData entity
corresponds to a temporal object and only represents data at one point
in time, and for
- *timeline entity sets* with visible
application time, where each OData entity corresponds to an
application-time slice and all application-time slices of a temporal
object are part of the entity set.

Modification operations fall into two categories:
- Direct modification of time slices, and
- Changes to a temporal object over a
period of application time that can affect multiple time slices without
explicitly addressing each single affected time slice.

### ##subsubsec Direct Modification of Time Slices

The temporal query options
[`$at`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionat),
[`$from` and
`$to`/`$toInclusive`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#QueryOptionsfromtoandtoInclusive)
can be used with data modification operations, in which case they do not
alter the modification semantics of the request, they only affect the
response of the "implicit `GET`" after the data modification.

Modification of time slices SHOULD be done with the temporal actions
defined in the next section and its subsections.

This specification does not define the behavior of standard insert,
update, upsert, or delete requests on temporal entity sets, and
potential side-effects of direct modification requests to period
boundaries and adjacent time slices are beyond the scope of this
specification as the underlying business logic will vary from service to
service.

### ##subsubsec Operations on Temporal Objects

Changes to a temporal object over a period of application time can
affect multiple time slices. For timeline entity sets this can in
principle be achieved by constructing batch requests with multiple
operations on individual time slices. This puts burden on the client,
and it also makes it harder for services to check whether the request
represents a consistent change of the temporal data.

Both can be avoided by providing convenience operations expressing the
intent of the modification and leaving the actual time slice
manipulation to the service. These operations can then also be used with
snapshot entity sets that do not allow direct manipulation of time
slices.

These convenience operations are modeled as bound actions and defined in
the vocabulary for temporal data
[OData-VocTemporal](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#VocTemporal).
Implementations SHOULD consider the preferences `return=representation`
and `return=minimal` as specified in
[OData-Protocol](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#odata).
The convenience operations are atomic (all or nothing): they either
succeed and produce the result described below, or they fail and do not
change the temporal objects.

All actions define a collection of entities as their binding parameter.
This collection can be
- A snapshot entity set
- A timeline entity set containing time
slices for a single temporal object, or
- A timeline entity set containing time
slices for multiple temporal objects.

Services MAY support any or all of these convenience actions. Services
SHOULD advertise the supported actions with property [`SupportedActions`
of term
`TemporalSupport`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#VocabularyforTemporalData).

Services may define specialized convenience operations for use cases not
covered by this specification.

All actions return a collection of triples that consist of period start
and end and a time slice, which has the same entity set as the binding
parameter and advertises this through `odata.context` control
information.

#### ##subsubsubsec Update during a Period

The `Update` action updates existing time slices with values from delta
time slices whose temporal object keys match and whose periods overlap.

Its non-binding parameter `deltaTimeslices` is a collection of a
structure containing the period boundaries, the properties to update,
and optionally temporal object key values. The period boundaries are
interpreted according to the
[`UnitOfTime`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#VocabularyforTemporalData)
of the collection. In particular, `ClosedClosedPeriods` governs whether
the period end of type `Edm.Date` is the last day in the period or the
first day after the period. The upper period boundary for items in
`deltaTimeslices` need not be supplied; if it has no declared default
value, it defaults to `max`.

This works identical to the SQL statement UPDATE FOR PORTION OF:

1\. The "delta time slices" in `deltaTimeslices` are processed in the
order of the collection.

2\. For each delta time slice all time slices from the bound collection
are selected whose temporal object key values are identical to the
values of corresponding properties present in the delta time slice, and
whose application-time period overlaps with the period of the delta time
slice.

3\. Selected time slices whose period is not fully included in the
period of the delta time slice are split into two or three consecutive
time slices, one with fully included period, and one or two with a
non-overlapping period immediately before or after the delta time
slice's period.

4\. Then all fully included time slices (including ones created in the
previous step) are updated following the rules for updating entities
specified in
[OData-Protocol](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#odata).

5\. Gaps between selected time slices in the period to update are not
affected.

On success it returns the created or updated time slices.

::: example
Example ##ex: Change a department's budget during a period of application
time with
[`api-2`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#example_api_2)
(visible timeline)
```
POST \~/Departments('D08')/history/Temporal.Update
:::

Content-Type: application/json

 

{

  \"deltaTimeslices\": \[

    {

      \"Timeslice\": {

        \"From\": \"2012-04-01\",

        \"To\": \"2014-07-01\",

        \"Budget\": 1320

      }

    }

  \]

}
```

Given the [example department
data](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#ExampleData)
the operation will split the time slice starting at 2012-01-01 creating
a new time slice starting at 2012-04-01 which is then updated with the
desired budget. It will then update the time slice starting at
2012-06-01 with the desired budget, and finally it will split the time
slice starting at 2014-01-01 creating a new time slice starting at
2014-07-01, then update the original with the desired budget, leaving
the new time slice starting at 2014-07-01 untouched:

**Departments (after)**

  **ID**   **From**     To           Name                Budget
  -------- ------------ ------------ ------------------- --------
  D08      2010-01-01   2012-01-01   Support             1000
  D08      2012-01-01   2012-04-01   Support             1250
  D08      2012-04-01   2012-06-01   Support             1320
  D08      2012-06-01   2014-01-01   1st Level Support   1320
  D08      2014-01-01   2014-07-01   1st Level Support   1320
  D08      2014-07-01   max          1st Level Support   1400
  D15      2010-01-01   2011-01-01   Services            1100
  D15      2011-01-01   max          Services            1170

It returns the resulting created or updated time slices
```
{

  \"@odata.context\":

    \"../../\$metadata#Collection(Temporal.TimesliceWithPeriod)\",

  \"value\": \[

    {

      \"Timeslice\": {

        \"@odata.context\": \"#Departments('D08')/history/\$entity\",

        \"From\": \"2012-01-01\",

        \"To\": \"2012-04-01\",

        \"Name\": \"Support\",

        \"Budget\": 1250

      }

    },

    {

      \"Timeslice\": {

        \"@odata.context\": \"#Departments('D08')/history/\$entity\",

        \"From\": \"2012-04-01\",

        \"To\": \"2012-06-01\",

        \"Name\": \"Support\",

        \"Budget\": 1320

      }

    },

    {

      \"Timeslice\": {

        \"@odata.context\": \"#Departments('D08')/history/\$entity\",

        \"From\": \"2012-06-01\",

        \"To\": \"2014-01-01\",

        \"Name\": \"1st Level Support\",

        \"Budget\": 1320

      }

    },

    {

      \"Timeslice\": {

        \"@odata.context\": \"#Departments('D08')/history/\$entity\",

        \"From\": \"2014-01-01\",

        \"To\": \"2014-07-01\",

        \"Name\": \"1st Level Support\",

        \"Budget\": 1320

      }

    },

    {

      \"Timeslice\": {

        \"@odata.context\": \"#Departments('D08')/history/\$entity\",

        \"From\": \"2014-07-01\",

        \"To\": \"9999-12-31\",

        \"Name\": \"1st Level Support\",

        \"Budget\": 1400

      }

    }

  \]

}
```

The service could have joined the third and fourth time slice because
they do not significantly differ.

 

::: example
Example ##ex: Change an employee's job title during a period of
application time with
[`api-1`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#example_api_1)
(snapshot). Note that the period boundaries are not visible in
[`api-1`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#example_api_1)
and are provided as `PeriodStart` and `PeriodEnd` next to the
`Timeslice` data. The `PeriodEnd` is omitted, meaning the end of
application time.
```
POST \~/Employees/Temporal.Update
:::

Content-Type: application/json

 

{

  \"deltaTimeslices\": \[

    {

      \"PeriodStart\": \"2021-10-01\",

      \"Timeslice\": {

        \"ID\": \"E401\",

        \"Jobtitle\": \"Ultimate Expert\"

      }

    }

  \]

}
```

Given the [example employee
data](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#ExampleData)
the operation will split the time slice for employee `E401` starting at
2012-03-01 creating a new time slice starting at 2021-10-01 which is
then updated with the desired job title.

**Employees (after)**

  **ID**   **From**     To           Name       Jobtitle          Department.ID
  -------- ------------ ------------ ---------- ----------------- ---------------
  E314     2011-01-01   2013-10-01   McDevitt   Junior            D08
  E314     2013-10-01   2014-01-01   McDevitt   Senior            D08
  E314     2014-01-01   max          McDevitt   Senior            D15
  E401     2009-11-01   2012-03-01   Norman     Expert            D15
  E401     2012-03-01   2021-10-01   Gibson     Expert            D15
  E401     2021-10-01   max          Gibson     Ultimate Expert   D15

It returns the resulting created or updated time slices
```
{

  \"@odata.context\":
\"../\$metadata#Collection(Temporal.TimesliceWithPeriod)\",

  \"value\": \[

    {

      \"PeriodStart\": \"2012-03-01\",

      \"PeriodEnd\": \"2021-10-01\",

      \"Timeslice\": {

        \"@odata.context\": \"#Employees/\$entity\",

        \"ID\": \"E401\",

        \"Name\": \"Gibson\",

        \"Jobtitle\": \"Expert\"

      }

    },

    {

      \"PeriodStart\": \"2021-10-01\",

      \"PeriodEnd\": \"9999-12-31\",

      \"Timeslice\": {

        \"@odata.context\": \"#Employees/\$entity\",

        \"ID\": \"E401\",

        \"Name\": \"Gibson\",

        \"Jobtitle\": \"Ultimate Expert\"

      }

    }

  \]

}
```

#### ##subsubsubsec Upsert during a Period

The `Upsert` action upserts existing time slices with values from delta
time slices whose temporal object keys match and whose periods overlap,
and in addition creates new time slices to close gaps in the matching
time period.

It has the same signature as
[`Update`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#UpdateduringaPeriod),
and steps 1 to 4 work identical to
[`Update`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#UpdateduringaPeriod).
Step 5 is

5\. Gaps between selected time slices in the period to update are closed
by creating new adjacent time slices: for each gap that has an
immediately preceding time slice, a new time slice is created by

a\. copying the property values of the preceding time slice (except for
computed properties),

b\. setting the period boundaries to close the gap, and then

c\. updating the new time slice following the rules for updating
entities specified in
[OData-Protocol](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#odata).

If no preceding time slice exists, the time slice is created following
the rules for creating entities specified in
[OData-Protocol](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#odata).

On success it returns the created or updated time slices.

::: example
Example ##ex: Upsert two [cost
centers](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#example_costcenters)
during a period of application time using the model from Example 8
```
POST \~/CostCenters/Temporal.Upsert
:::

Content-Type: application/json

 

{

  \"deltaTimeslices\": \[

    {

      \"Timeslice\": {

        \"AreaID\": \"51\",

        \"CostCenterID\": \"C1\",

        \"ValidTo\": \"2001-03-31\",

        \"ValidFrom\": \"1984-04-01\",

        \"ProfitCenterID\": \"P2\"

      }

    },

    {

      \"Timeslice\": {

        \"AreaID\": \"51\",

        \"CostCenterID\": \"C2\",

        \"ValidFrom\": \"2012-04-01\",

        \"DepartmentID\": \"D04\"

      }

    }

  \]

}
```

Given this example data

**CostCenters (before)**

  **tsid**   **AreaID**   **CostCenterID**   **ValidTo**   ValidFrom    ProfitCenterID   DepartmentID
  ---------- ------------ ------------------ ------------- ------------ ---------------- --------------
  n          51           C1                 max           1955-04-01   P1               D02

[t]{style="color:white"}he operation will split the time slice `n` for
cost center `C1` starting at 1955-04-01 creating two new time slices,
the one starting at 1984-04-01 is then updated with the desired profit
center. It will also insert a new time slice for the not yet existing
cost center `C2` with the desired values.

Note that this example uses closed-closed periods, so each time slice
ends the day before the start of the next adjacent time slice.

**CostCenters (after)**

  **tsid**   **AreaID**   **CostCenterID**   **ValidTo**   ValidFrom    ProfitCenterID   DepartmentID
  ---------- ------------ ------------------ ------------- ------------ ---------------- --------------
  n          51           C1                 1984-03-31    1955-04-01   P1               D02
  o          51           C1                 2001-03-31    1984-04-01   P2               D02
  p          51           C1                 max           2001-04-01   P1               D02
  q          51           C2                 max           2012-04-01                    D04

[It returns the ]{style="color:white"}resulting created or updated time
slices per affected temporal object
```
{

  \"@odata.context\":
\"../\$metadata#Collection(Temporal.TimesliceWithPeriod)\",

  \"value\": \[

    {

      \"Timeslice\": {

        \"@odata.context\": \"#CostCenters/\$entity\",

        \"tsid\": \"n\",

        \"AreaID\": \"51\",

        \"CostCenterID\": \"C1\",

        \"ValidTo\": \"1984-03-31\",

        \"ValidFrom\": \"1955-04-01\",

        \"ProfitCenterID\": \"P1\",

        \"DepartmentID\": \"D02\"

      }

    },

    {

      \"Timeslice\": {

        \"@odata.context\": \"#CostCenters/\$entity\",

        \"tsid\": \"o\",

        \"AreaID\": \"51\",

        \"CostCenterID\": \"C1\",

        \"ValidTo\": \"2001-03-31\",

        \"ValidFrom\": \"1984-04-01\",

        \"ProfitCenterID\": \"P2\",

        \"DepartmentID\": \"D02\"

      }

    },

    {

      \"Timeslice\": {

        \"@odata.context\": \"#CostCenters/\$entity\",

        \"tsid\": \"p\",

        \"AreaID\": \"51\",

        \"CostCenterID\": \"C1\",

        \"ValidTo\": \"9999-12-31\",

        \"ValidFrom\": \"2001-04-01\",

        \"ProfitCenterID\": \"P1\",

        \"DepartmentID\": \"D02\"

      }

    },

    {

      \"Timeslice\": {

        \"@odata.context\": \"#CostCenters/\$entity\",

        \"tsid\": \"q\",

        \"AreaID\": \"51\",

        \"CostCenterID\": \"C2\",

        \"ValidTo\": \"9999-12-31\",

        \"ValidFrom\": \"2012-04-01\",

        \"ProfitCenterID\": null,

        \"DepartmentID\": \"D04\"

      }

    }

  \]

}
```

#### ##subsubsubsec Delete during a Period

The `Delete` action deletes (sub-periods of) time slices.

Its non-binding parameter `deltaTimeslices` is a collection of a
structure containing the period boundaries and optionally temporal
object key values. The period boundaries are interpreted according to
the
[`UnitOfTime`](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#VocabularyforTemporalData)
of the collection. In particular, `ClosedClosedPeriods` governs whether
the period end of type `Edm.Date` is the last day in the period or the
first day after the period.

This works identical to the SQL statement DELETE FOR PORTION OF:

1\. The "delta time slices" in `deltaTimeslices` are processed in the
order of the collection.

2\. For each delta time slice all time slices from the bound collection
are selected whose temporal object key values are identical to the
values of corresponding properties present in the delta time slice, and
whose application-time period overlaps with the period of the delta time
slice.

3\. Selected time slices whose period is not fully included in the
period of the delta time slice are split into two consecutive time
slices, one with non-overlapping, and one with fully included period.

4\. Then all fully included time slices (including ones created in the
previous step) are deleted following the rules for deleting entities
specified in
[OData-Protocol](https://docs.oasis-open.org/odata/odata-temporal-ext/v4.0/cs01/odata-temporal-ext-v4.0-cs01.html#odata).

On success it returns the deleted time slices.

### ##subsubsec ETags

Timeline entity sets need no special consideration as each time slice is
an OData entity.

This specification does not define the behavior of standard insert,
update, upsert, or delete requests for snapshot entity sets and
consequently defines no rules for ETags of entities in snapshot entity
sets. Services supporting these requests are advised to associate ETags
with time slices rather than with temporal objects.

### ##subsubsec Read, Edit, Navigation, and Association URLs

Timeline entity sets need no special consideration as each time slice is
an OData entity.

For snapshot entity sets read, edit, navigation, and association URLs
are not specific to time slices, they are specific to the
time-independent OData entity.
