
-------

# ##sec Bound Function

A bound function is advertised via a name/value pair where the name is a
hash (`#`) character followed by the namespace- or
alias-qualified name of the function. The namespace or alias MUST be
defined or the namespace referenced in the metadata document of the
service, see [OData-CSDL](#ODataCSDL). A
specific function overload can be advertised by appending the
parentheses-enclosed, comma-separated list of non-binding parameter
names to the qualified function name, see rule
[qualifiedFunctionName]{.abnf} in [OData-ABNF](#ODataABNF).

A function that is bound to a single structured type MAY be advertised
within the JSON object representing that structured type.

Functions that are bound to a collection MAY be advertised within the
JSON object containing the collection. If the collection is the
top-level response, the function advertisement name/value pair is placed
next to the `value` name/value pair representing the
collection. If the collection is nested within an instance of a
structured type, then in 4.01 payloads the name of the function
advertisement is prepended with the name of the collection-valued
property and is placed next to the collection-valued property, [expanded
navigation property](#ExpandedNavigationProperty), or
[`navigationLink`](#NavigationLink)
control information, if present. 4.0 payloads MUST NOT advertise
functions prefixed with property names.

If the function is available, the value of the advertisement is an
object. OData 4.01 services MAY advertise the non-availability of the
function with the value `null`.

If
[`metadata=full`](#metadatafullodatametadatafull)
is requested, each value object MUST have at least the two name/value
pairs `title` and `target`. It MAY contain
[annotations](#InstanceAnnotations). The order of the name/value
pairs MUST be considered insignificant.

The `target` name/value pair contains a URL. Clients MUST be
able to invoke the function or the specific function overload by passing
the parameter values via query options for [parameter
aliases](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_ParameterAliases) that are identical to
the parameter name preceded by an at
(`@`) sign. Clients MUST check if the obtained
URL already contains a query part and appropriately precede the
parameters either with an ampersand
(`&`)
or a question mark
(`?`).

The `title` name/value pair contains the function or action
title as a string.

If [`metadata=minimal`](#metadataminimalodatametadataminimal)
is requested, the `target` name/value pair MUST be included
if its value differs from the canonical function or action URL.

::: example
Example ##ex: minimal representation of a function where all overloads are
applicable
```json
{
  "@context": "http://host/service/$metadata#Employees/$entity",
  "#Model.RemainingVacation": {},
  …
}
```
:::

::: example
Example ##ex: full representation of a specific overload with parameter
alias for the `Year` parameter
```json
{
  "@context": "http://host/service/$metadata#Employees/$entity",
  "#Model.RemainingVacation(Year)": {
    "title": "Remaining vacation from year.",
    "target": "Employees(2)/RemainingVacation(Year=@Year)"
  },
  …
}
```
:::

::: example
Example ##ex: full representation in a collection
```json
{
  "@context": "http://host/service/$metadata#Employees",
  "#Model.RemainingVacation": {
    "title": "Remaining Vacation",
    "target": "Managers(22)/Employees/RemainingVacation"
  },
  "value": [ … ]
}
```
:::

::: example
Example ##ex: full representation in a nested collection
```json
{
  "@context": "http://host/service/$metadata#Employees/$entity",
  "@type": "Model.Manager",
  "ID":22,
  …
  "Employees#RemainingVacation": {
    "title": "RemainingVacation",
    "target": "Managers(22)/Employees/RemainingVacation"
  }
}
```
:::

-------

# ##sec Bound Action

A bound action is advertised via a name/value pair where the name is a
hash (`#`) character followed by the namespace- or
alias-qualified name of the action. The namespace or alias MUST be
defined or the namespace referenced in the metadata document of the
service, see [OData-CSDL](#ODataCSDL).

An action that is bound to a single structured type is advertised within
the JSON object representing that structured type.

Actions that are bound to a collection MAY be advertised within the JSON
object containing the collection. If the collection is the top-level
response, the action advertisement name/value pair is placed next to the
`value` name/value pair representing the collection. If the
collection is nested within an instance of a structured type, then in
4.01 payloads the name of the action advertisement is prepended with the
name of the collection-valued property and is placed next to the
name/value pair representing the collection-valued property, [expanded
navigation property](#ExpandedNavigationProperty), or
[`navigationLink`](#NavigationLink)
control information, if present. 4.0 payloads MUST NOT advertise actions
prefixed with property names.

If the action is available, the value of the advertisement is an object.
OData 4.01 services MAY advertise the non-availability of the action
with the value `null`.

If [`metadata=full`](#metadatafullodatametadatafull)
is requested, each value object MUST have at least the two name/value
pairs `title` and `target`. It MAY contain
[annotations](#InstanceAnnotations). The order of these name/value
pairs MUST be considered insignificant.

The `target` name/value pair contains a bound function or
action URL.

The `title` name/value pair contains the function or action
title as a string.

If [`metadata=minimal`](#metadataminimalodatametadataminimal)
is requested, the `target` name/value pair MUST be included
if its value differs from the canonical function or action URL.

::: example
Example ##ex: minimal representation in an entity
```json
{
  "@context": "http://host/service/$metadata#LeaveRequests/$entity",
  "#Model.Approve": {},
  …
}
```
:::

::: example
Example ##ex: full representation in an entity:
```json
{
  "@context": "http://host/service/$metadata#LeaveRequests/$entity",
  "#Model.Approve": {
    "title": "Approve Leave Request",
    "target": "LeaveRequests(2)/Approve"
  },
  …
}
```
:::

::: example
Example ##ex: full representation in a collection
```json
{
  "@context": "http://host/service/$metadata#LeaveRequests",
  "#Model.Approve": {
    "title": "Approve All Leave Requests",
    "target": "Employees(22)/Model.Manager/LeaveRequests/Approve"
  },
  "value": [ … ]
}
```
:::

::: example
Example ##ex: full representation in a nested collection
```json
{
  "@context": "http://host/service/$metadata#Employees/$entity",
  "@type": "Model.Manager",
  "ID": 22,
  …
  "LeaveRequests#Model.Approve": {
    "title": "Approve All Leave Requests",
    "target": "Employees(22)/Model.Manager/LeaveRequests/Approve"
  }
}
```
:::

-------

# ##sec Action Invocation

Action parameter values are encoded in a single JSON object in the
request body.

Each non-binding parameter value is encoded as a separate name/value
pair in this JSON object. The name is the name of the parameter. The
value is the parameter value in the JSON representation appropriate for
its type. Entity typed parameter values MAY include a subset of the
properties, or just the [entity reference](#EntityReference), as
appropriate to the action.
Stream typed parameter values are represented following the same rules as inlined [stream properties](#StreamProperty).

Entities as parameter values are represented as explained in [section ##Entity].

::: example
Example ##ex: Create a quote for a product that does not yet exist. The `Product`
parameter takes a transient entity.
```json
POST http://host/service/CreateQuote
Content-Type: application/json

{
  "Product": {
    "Name": "Our best ever",
    "Price": 1
  },
  "CustomerID": "ALFKI"
}
```
:::

::: example
Example ##ex: Create a quote for an existing product. The `Product`
parameter takes a non-transient entity which can be identified through its
entity-id:
```json
POST http://host/service/CreateQuote
Content-Type: application/json

{
  "Product": {
    "@id": "Products(14)"
  },
  "CustomerID": "ALFKI"
}
```
or, as in [section ##AddedChangedEntity], through its primary key fields plus,
if necessary, its context:
```json
POST http://host/service/CreateQuote
Content-Type: application/json

{
  "Product": {
    "@context": "#Products",
    "ProductID": 14
  },
  "CustomerID": "ALFKI"
}
```
:::

Alternatively, values of non-binding parameters MAY be specified as common expressions
[#OData-URL#CommonExpressionSyntax]. In the case of a bound action
these MAY contain path expressions [#OData-URL#PathExpressions], which
the service evaluates on the binding parameter value. Such parameters are encoded as name/value
pairs where the name is the name of the parameter followed by `@expression` and
the value is the common expression. As the following example demonstrates,
non-transient entities can be passed as non-binding action parameters through a
resource path in this way.

::: example
Example ##ex: An employee requests leave from their manager for the next two weeks:
```json
POST /service/Employees(23)/self.RequestLeave
Host: host
Content-Type: application/json

{
  "StartDate@expression": "now()",
  "EndDate@expression": "now() add duration'P14D'",
  "Approver@expression": "Manager"
}
```
The expression `Manager` is evaluated on the binding parameter value `Employees(23)`.

When invoking an unbound action through an action import, expressions involving
paths must start with `$root`:
```json
POST /service/RequestLeave
Host: host
Content-Type: application/json

{
  "Requester@expression": "$root/services/Employee(23)",
  "StartDate@expression": "now()",
  "EndDate@expression": "now() add duration'P14D'",
  "Approver@expression": "$root/services/Employee(23)/Manager"
}
```
:::

Inside a batch request the common expressions can also be value references
starting with `$`, as introduced in [#OData-Protocol#ReferencingValuesfromResponseBodies].

::: example
Example ##ex:
```json
{
  "param1": 42,
  "param2": {
    "Street": "One Microsoft Way",
    "Zip": 98052
  },
  "param3": [ 1, 42, 99 ],
  "param4": null
}
```
:::


In order to invoke an action with no non-binding parameters, the client
passes an empty JSON object in the body of the request. 4.01 Services
MUST also support clients passing an empty request body for this case.
