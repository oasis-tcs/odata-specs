
-------

# ##sec Resource Path

The rules for resource path construction as defined in this section are
optional. OData services SHOULD follow the subsequently described URL
path construction rules and are indeed encouraged to do so; as such
consistency promotes a rich ecosystem of reusable client components and
libraries.

Services that do not follow the resource path conventions for entity
container children are strongly encouraged to document their resource
paths by annotating entity container children with the term
[Core.ResourcePath]{.term}
defined in [OData-VocCore](#ODataVocCore). The annotation value is the
URL of the annotated resource and may be relative to `xml:base` (if
present), otherwise the request URL.

Resources exposed by an OData service are addressable by corresponding
resource path URL components to enable interaction of the client with
that resource aspect.

To illustrate the concept, some examples for resources might be:
customers, a single customer, orders related to a single customer, and
so forth. Examples of addressable aspects of these resources as exposed
by the data model might be: collections of entities, a single entity,
properties, links, operations, and so on.

An OData service MAY respond with `301 Moved Permanently` or
`307 Temporary Redirect` from the canonical URL to the actual URL.

## ##subsec Addressing the Model for a Service

OData services expose their entity model according to
[OData-CSDL](#ODataCSDL) at the
metadata URL, formed by appending `$metadata` to the [service root
URL](#ServiceRootURL).

::: example
Example ##ex: Metadata document URL
```
http://host/service/$metadata
```
:::

OData clients may request a particular format for metadata either
through the `Accept` header or by using the
[`$format`](#SystemQueryOptionformat) system query option.

::: example
Example ##ex: Metadata document URL with specified format
```
http://host/service/$metadata?$format=json
```
:::

## ##subsec Addressing the Batch Endpoint for a Service

OData services that support batch requests expose a batch URL formed by
appending `$batch` to the [service root URL](#ServiceRootURL).

::: example
Example ##ex: batch URL
```
http://host/service/$batch
```
:::

## ##subsec Addressing Entities

The basic rules for addressing a collection (of entities), a single
entity within a collection, a singleton, as well as a property of an
entity are covered in the [resourcePath]{.abnf} syntax rule in
[OData-ABNF](#ODataABNF).

Below is a (non-normative) snippet from [OData-ABNF](#ODataABNF):

```
resourcePath = entitySetName                  [collectionNavigation]
             / singletonEntity                [singleNavigation]
             / actionImportCall
             / entityColFunctionImportCall    [ collectionNavigation ]
             / entityFunctionImportCall       [ singleNavigation ]
             / complexColFunctionImportCall   [ collectionPath ]
             / complexFunctionImportCall      [ complexPath ]
             / primitiveColFunctionImportCall [ collectionPath ]
             / primitiveFunctionImportCall    [ primitivePath ]
             / functionImportCallNoParens     [ querySegment ]
             / crossjoin                      [ querySegment ]
             / %s"$all"                       [ "/" optionallyQualifiedEntityTypeName ]
```

Since OData has a uniform composable URL syntax and associated rules
there are many ways to address a collection of entities, including, but
not limited to:
- Via an entity set (see rule [entitySetName]{.abnf} in [OData-ABNF](#ODataABNF))

::: example
Example ##ex:
```
http://host/service/Products
```
:::

- By navigating a collection-valued
navigation property (see rule: `entityColNavigationProperty`)
- By invoking a function import that returns a
collection of entities (see rule: `entityColFunctionImportCall`)

::: example
Example ##ex: function with parameters in resource path
```
http://host/service/ProductsByCategoryId(categoryId=2)
```
:::

::: example
Example ##ex: function with parameters as query options
```
http://host/service/ProductsByColor(color=@color)?@color='red'
```
:::

- By invoking an action import that returns a
collection of entities (see rule: `actionImportCall`)

Likewise there are many ways to address a single entity.

Sometimes a single entity can be accessed directly, for example by:
- Invoking a function import that returns a
single entity (see rule: `entityFunctionImportCall`)
- Invoking an action import that returns a single
entity (see rule: `actionImportCall`)
- Addressing a singleton

::: example
Example ##ex:
```
http://host/service/BestProductEverCreated
```
:::

Often however a single entity is accessed by composing more path
segments to a `resourcePath` that identifies a collection of entities,
for example by:
- Using an entity key to select a single
entity (see rules: `collectionNavigation` and `keyPredicate`)

::: example
Example ##ex:
```
http://host/service/Categories(1)
```
:::

If the declared entity type of the collection does not define a key (for example, Edm.EntityType), then a cast segment to a type defining a key MUST follow the collection, before appending the key.

::: example
Example ##ex:
```
http://host/service/Categories(1)/Children/myNs.Product(7)
```
:::

- Invoking an action bound to a collection
of entities that returns a single entity (see rule: `boundOperation`)
- Invoking an function bound to a
collection of entities that returns a single entity (see rule:
`boundOperation`)

::: example
Example ##ex:
```
http://host/service/Products/Model.MostExpensive()
```
:::

These rules are recursive, so it is possible to address a single entity
via another single entity, a collection via a single entity and even a
collection via a collection; examples include, but are not limited to:
- By following a navigation from a single
entity to another related entity (see rule: `entityNavigationProperty`)

::: example
Example ##ex:
```
http://host/service/Products(1)/Supplier
```
:::

- By invoking a function bound to a single
entity that returns a single entity (see rule: `boundOperation`)

::: example
Example ##ex:
```
http://host/service/Products(1)/Model.MostRecentOrder()
```
:::

- By invoking an action bound to a single
entity that returns a single entity (see rule: `boundOperation`)
- By following a navigation from a single
entity to a related collection of entities (see rule:
`entityColNavigationProperty`)

::: example
Example ##ex:
```
http://host/service/Categories(1)/Products
```
:::

- By invoking a function bound to a single
entity that returns a collection of entities (see rule:
`boundOperation`)

::: example
Example ##ex:
```
http://host/service/Categories(1)/Model.TopTenProducts()
```
:::

- By invoking an action bound to a single
entity that returns a collection of entities (see rule:
`boundOperation`)
- By invoking a function bound to a
collection of entities that returns a collection of entities (see rule:
`boundOperation`)

::: example
Example ##ex:
```
http://host/service/Categories(1)/Products/Model.AllOrders()
```
:::

- By invoking an action bound to a
collection of entities that returns a collection of entities (see rule:
`boundOperation`)

Finally it is possible to compose path segments onto a resource path
that identifies a primitive, complex instance, collection of primitives
or collection of complex instances and bind an action or function that
returns an entity or collections of entities.

### ##subsubsec Canonical URL

For OData services conformant with the addressing conventions in this
section, the canonical form of an absolute URL identifying a
non-contained entity is formed by adding a single path segment to the
service root URL. The path segment is made up of the name of the entity
set associated with the entity followed by the key predicate identifying
the entity within the collection. No [type-cast segment](#AddressingDerivedTypes) is added to the
canonical URL, even if the entity is an instance of a type derived from
the declared entity type of its entity set.

The canonical key predicate for single-part keys consists only of the
key property value without the key property name. For multi-part keys
the key properties appear in the same order they appear in the key
definition in the service metadata.

::: example
Example ##ex: Non-canonical URL
```
http://host/service/Categories(ID=1)/Products(ID=1)
```
:::

::: example
Example ##ex: Canonical URL for previous example:
```
http://host/service/Products(1)
```
:::

### ##subsubsec Canonical URL for Contained Entities

For contained entities (i.e. related via a containment navigation
property, see [OData-CSDLJSON](#ODataCSDL)) the canonical URL is the canonical URL of
the containing entity followed by:
- A [type-cast segment](#AddressingDerivedTypes) if the navigation
property is defined on a type derived from the entity type declared for
the entity set,
- A path segment for the containment
navigation property, and
- If the navigation property returns a
collection, a key predicate that uniquely identifies the entity in that
collection.

If the containment navigation property is defined on a complex type used
within an ordered collection, the canonical URL of the containing entity
is the canonical URL for the collection of complex types followed by a
segment containing the zero-based ordinal of the complex typed instance
within the collection.

### ##subsubsec URLs for Related Entities with Referential Constraints

If a navigation property leading to a related entity type has a partner
navigation property that specifies a referential constraint, then those
key properties of the related entity that take part in the referential
constraint MAY be omitted from URLs.

::: example
Example ##ex: full key predicate of related entity
```
https://host/service/Orders(1)/Items(OrderID=1,ItemNo=2)
```
:::

::: example
Example ##ex: shortened key predicate of related entity
```
https://host/service/Orders(1)/Items(2)
```
The two above examples are equivalent if the navigation property `Items`
from `Order` to `OrderItem` has a partner navigation property from
`OrderItem` to `Order` with a referential constraint tying the value of
the `OrderID` key property of the `OrderItem` to the value of the `ID`
key property of the `Order`.
:::

The shorter form that does not specify the constrained key parts
redundantly is preferred. If the value of the constrained key is
redundantly specified, then it MUST match the principal key value.

### ##subsubsec Resolving an Entity-Id

To resolve an entity-id into a representation of the identified entity,
the client issues a `GET` request to the `$entity` resource located at
the URL `$entity` relative to the service root URL. The entity-id MUST
be specified using the system query option `$id`. The entity-id may be
expressed as an absolute IRI or relative to the request root URL.

::: example
Example ##ex: request the entity representation for an entity-id
```
http://host/service/$entity?$id=Products(0)
```
:::

The semantics of `$entity` are covered in [#OData-Protocol#ContextURL].

### ##subsubsec Alternate Keys

In addition to the canonical (primary) key an entity set or entity type
can specify one or more alternate keys with the
[Core.AlternateKeys]{.term}
term (see [OData-VocCore](#ODataVocCore)).

Alternate keys can be used by the client to address entities anywhere the canonical key
can be used; for example, within entity sets, collection-valued navigation properties,
collection-valued composable functions, and within delta payloads.

Entities are addressed via
an alternate key using the same parentheses-style convention as for the
canonical key, with one difference: single-part alternate keys MUST
specify the key property name to unambiguously determine the alternate
key.

::: example
Example ##ex: the same employee identified via the alternate key SSN, the
canonical (primary) key ID using the non-canonical long form with
specified key property name, and the canonical short form without key
property name
```
http://host/service/Employees(SSN='123-45-6789')
```

```
http://host/service/Employees(ID='A1245')
```

```
http://host/service/Employees('A1245')
```
:::

### ##subsubsec Key-as-Segment Convention

Services MAY support an alternate convention for addressing entities by
appending a segment containing the unprefixed and unquoted key value to the URL of the
collection containing the entity. If the declared entity type of the collection does not 
define a key (for example, Edm.EntityType), then a cast segment to a type defining a key 
MUST follow the collection, before appending the key value segment. Forward-slashes in key value segments
MUST be percent-encoded; single quotes within key value segments are
treated as part of the key value and do not need to be doubled or
percent encoded.

::: example
Example ##ex: valid OData URLs:
```
http://host/service/Employees/A1245
```

```
http://host/service/People/O'Neil
```

```
http://host/service/People/O%27Neil
```

```
http://host/service/Categories/Smartphone%2FTablet
```

```
http://host/service/ThingyWithDurationKey/P12DT23H59M59.999999999999S
```

```
http://host/service/ThingyWithEnumerationKey/Yellow
```
:::

For multi-part keys, the entity MUST be addressed by multiple segments
applied, one for each key value, in the order they appear in the
metadata description of the entity key.

::: example
Example ##ex: multi-part key predicate, parentheses-style and
key-as-segment
```
https://host/service/OrderItems(OrderID=1,ItemNo=2)
```

```
https://host/service/OrderItems/1/2
```
:::

If a navigation property leading to a related entity type has a partner
navigation property that specifies a referential constraint, then those
key properties of the related entity that take part in the referential
constraint MUST be omitted from URLs using key-as-segment convention.

::: example
Example ##ex: key predicate of related entity --- no key segments for key
properties of related entity with a referential constraint to preceding
key segments
```
https://host/service/Orders/1/Items/2
```
The above example assumes that the navigation property `Items` from
`Order` to `OrderItem` has a partner navigation property from
`OrderItem` to `Order` with a referential constraint tying the value of
the `OrderID` key property of the `OrderItem` to the value of the `ID`
key property of the `Order`.
:::

Because representing key values as segments could be ambiguous with
other URL construction conventions, services that support key-as segment
MUST implement the following precedence rules:

If a segment following an entity collection:
1. matches a defined OData segment (starting with "`$`"), treat it as
such
2. matches a qualified bound function, bound action, or type name,
treat it as such
3. matches an unqualified bound function, bound action, or type name
defined in a default namespace (see [#OData-Protocol#DefaultNamespaces]) treat it
as such
4. treat as a key value

For maximum interoperability, services that support the key-as-segment
convention SHOULD also support the canonical [parentheses-style
convention](#CanonicalURL) for addressing an entity within a collection,
otherwise they MUST specify the URL for each returned entity in a
response, as specified by the particular format.

Note: the key-as-segment convention can only be used with the canonical
(primary) key and cannot be used with alternate keys as the key property
names are not present in the keys and an alternative key cannot be
determined.

## ##subsec Addressing References between Entities

OData services are based on a data model that supports relationships as
first class constructs. For example, an OData service could expose a
collection of Products entities each of which are related to a Category
entity.

References between entities are addressable in OData just like entities
themselves are (as described above) by appending a navigation property
name followed by `/$ref` to the entity URL.

::: example
Example ##ex: URL addressing the references between `Categories(1)` and
`Products`
```
http://host/service/Categories(1)/Products/$ref
```
:::

Resource paths addressing a single related entity reference can be used
in `DELETE` requests to unrelate two entities. In OData 4.01, this
includes resource paths that identify an individual entity reference
within a related collection by key. In OData 4.0, resource paths
addressing a collection of references MUST be followed by the system
query option `$id` in order to identify a single entity reference within
the collection to be removed. The entity-id specified by `$id` may be
expressed absolute or relative to the request URL. For details see
[#OData-Protocol#EntityIdsandEntityReferences].

::: example
Example ##ex: three ways of unrelating `Categories(1)` and
`Products(0)`; the second option is supported only in OData 4.01
```
DELETE http://host/service/Categories(1)/Products/$ref?$id=../../Products(0)
```

```
DELETE http://host/service/Categories(1)/Products(0)/$ref
```

```
DELETE http://host/service/Products(0)/Category/$ref
```
:::

## ##subsec Addressing Operations

The semantic rules for addressing and invoking actions and functions are
defined in [#OData-Protocol#Operations].

Services MAY additionally support the use of the unqualified name of an
action or function in a URL by defining one or more default namespaces
through the
[Core.DefaultNamespace]{.term} term
defined in [OData-VocCore](#ODataVocCore). For more information on
default namespaces, see [#OData-Protocol#DefaultNamespaces].

### ##subsubsec Addressing Actions

The grammar for addressing and invoking actions is defined by the
following syntax grammar rules in [OData-ABNF](#ODataABNF):
- The [actionImportCall]{.abnf} syntax rule
defines the grammar in the [resourcePath]{.abnf} for addressing and invoking an
action import directly from the service root.
- The [boundActionCall]{.abnf} syntax rule
defines the grammar in the `resourcePath` for addressing and invoking an
action that is appended to a `resourcePath` that identifies some
resources that can be used as the binding parameter value when invoking
the action.
- The [boundOperation]{.abnf} syntax rule (which
encompasses the `boundActionCall` syntax rule), when used by the
`resourcePath` syntax rule, illustrates how a `boundActionCall` can be
appended to a `resourcePath`.

### ##subsubsec Addressing Functions

The grammar for addressing and invoking functions is defined by
syntax rules in [OData-ABNF](#ODataABNF), in particular:
- The function import call syntax rules
[complexFunctionImportCall]{.abnf}, [complexColFunctionImportCall]{.abnf},
[entityFunctionImportCall]{.abnf}, [entityColFunctionImportCall]{.abnf},
[primitiveFunctionImportCall]{.abnf}, and [primitiveColFunctionImportCall]{.abnf}
define the grammar in the `resourcePath` for addressing and providing
parameters for a function import directly from the service root.
- The bound function call syntax rules
[boundComplexFunctionCall]{.abnf}, [boundComplexColFunctionCall]{.abnf},
[boundEntityFunctionCall]{.abnf}, [boundEntityColFunctionCall]{.abnf},
[boundPrimitiveFunctionCall]{.abnf} and [boundPrimitiveColFunctionCall]{.abnf} define
the grammar in the `resourcePath` for addressing and providing
parameters for a function that is appended to a `resourcePath` that
identifies some resources that can be used as the binding parameter
value when invoking the function.
- The [boundOperation]{.abnf} syntax rule (which
encompasses the bound function call syntax rules), when used by the
`resourcePath` syntax rule, illustrates how a bound function call can be
appended to a `resourcePath`.
- The [functionExpr]{.abnf} and
[boundFunctionExpr]{.abnf} syntax rules as used by the [commonExpr]{.abnf}
syntax rule define the grammar for invoking functions, for example to help filter
and order resources identified by the `resourcePath` of the URL.
- The [aliasAndValue]{.abnf} syntax rule defines
the grammar for providing function parameter values using Parameter
Alias Syntax, see [#OData-Protocol#ParameterAliases].

Note: there is no literal representation for `Edm.Stream` values in URLs,
so it is not possible to pass `Edm.Stream` values to parameters of function imports or
to non-binding parameters of bound functions used in the resource path.
Function expressions within query options can use [path expressions](#PathExpressions)
of type `Edm.Stream` as values of non-binding function parameters. The aliases can contain [common
expressions](#CommonExpressionSyntax). In the case of a bound function
these MAY contain [path expressions](#PathExpressions), which
the service evaluates on the binding parameter value.

::: example
Example ##ex_funcexpr: An employee's leave requests for the next two weeks
pending their manager's approval:
```
http://host/service/Employees(23)/self.PendingLeaveRequests(StartDate=@start,
  EndDate=@end,Approver=@approver)
  ?@start=now()
  &@end=now() add duration'P14D'
  &@approver=Manager
```
The expression `Manager` is evaluated on the binding parameter value `Employees(23)`.

When invoking an unbound function through a function import, expressions involving
paths must start with `$root`:
```
http://host/service/PendingLeaveRequests(Requester=@requester,
  StartDate=@start,EndDate=@end,Approver=@approver)
  ?@requester=$root/services/Employee(23)
  &@start=now()
  &@end=now() add duration'P14D'
  &@approver=$root/services/Employee(23)/Manager
```
:::

## ##subsec Addressing a Property

To address an entity property clients append a path segment containing
the property name to the URL of the entity. If the property has a
complex type value, properties of that value can be addressed by further
property name composition.

## ##subsec Addressing a Raw Value

To address the raw value of a primitive property or operation result, clients append the
path segment `/$value` to the property or operation URL.

Properties and operation results of type `Edm.Stream` already return the raw value of the
media stream and do not support appending the `/$value` segment.

## ##subsec Addressing the Count of a Collection

To address the raw value of the number of items in a collection, clients
append `/$count` to the resource path of the URL identifying the entity
set or collection.

The `/$count` path suffix identifies the integer count of records in the
collection and SHOULD NOT be combined with the system query options
[`$top`](#SystemQueryOptionstopandskip),
[`$skip`](#SystemQueryOptionstopandskip),
[`$orderby`](#SystemQueryOptionorderby),
[`$expand`](#SystemQueryOptionexpand), and
[`$format`](#SystemQueryOptionformat). The count MUST NOT be affected
by `$top`, `$skip`, `$orderby`, or `$expand`.

The count is calculated after applying any
[`/$filter`](#AddressingaSubsetofaCollection) path segments, or
[`$filter`](#SystemQueryOptionfilter) or
[`$search`](#SystemQueryOptionsearch) system query options to the collection.

::: example
Example ##ex: the number of related entities
```
http://host/service/Categories(1)/Products/$count
```
:::

::: example
Example ##ex: the number of entities in an entity set
```
http://host/service/Products/$count
```
:::

::: example
Example ##ex: entity count in a `$filter`
expression. Note that the spaces around `gt` are for readability of the
example only; in real URLs they must be percent-encoded as `%20`.
```
http://host/service/Categories?$filter=Products/$count gt 0
```
:::

::: example
Example ##ex: count of a filtered collection in a
`$filter` expression; returns all Categories
containing more than two products whose price is greater than 5.00.
```
http://host/service/Categories?$filter=Products/$count($filter=Price gt 5.00) gt 2
```
:::

::: example
Example ##ex: entity count in an `$orderby` expression
```
http://host/service/Categories?$orderby=Products/$count
```
:::

## ##subsec Addressing a Member within an Entity Collection

Collections of entities are modeled as entity sets, collection-valued
navigation properties, or operation results.

For entity sets, results of composable functions associated with an
entity set through an `EntitySet` or `EntitySetPath` declaration, or
collection-valued navigation properties with a
`NavigationPropertyBinding` or `ContainsTarget=true` specification,
members of the collection can be addressed by convention by appending
the parenthesized key to the URL specifying the collection of entities,
or by using the [key-as-segment convention](#KeyasSegmentConvention) if
supported by the service.

For collection-valued navigation properties with navigation property
bindings that end in a [type-cast segment](#AddressingDerivedTypes),
a type-cast segment MUST be
appended to the collection URL before appending the key segment.

Note: entity sets or collection-valued navigation properties annotated
with the term
[Capabilities.IndexableByKey]{.term}
defined in [OData-VocCap](#ODataVocCap) and a value of `false` do not
support addressing their members by key.

## ##subsec Addressing a Member of an Ordered Collection

Collections can be annotated as ordered using the
[Core.Ordered]{.term}
term (see [OData-VocCore](#ODataVocCore)). Individual items within an
ordered collection of primitive or complex types can be addressed by
appending a segment containing the zero-based ordinal to the URL of the
collection. A negative ordinal number indexes from the end of the
collection, with `-1` representing the last item in the collection.
Services MUST NOT specify a negative index when returning the address of
a member of an ordered collection.

Entity types are stably addressable using their canonical URL and SHOULD
NOT be accessed or accessible using an index.

::: example
Example ##ex: the first address in a list of addresses for `MainSupplier`
```
http://host/service/MainSupplier/Addresses/0
```
:::

## ##subsec Addressing Derived Types

Any resource path or path expression identifying a collection of
entities or complex type instances can be appended with a  _type-cast segment_, that is a path segment
containing the qualified name of a type derived from the declared item type
of the collection. The result will be restricted to instances of the
derived type and may be empty.

Any resource path or path expression identifying a single entity or
complex type instance can be appended with a type-cast segment containing the
qualified name of a type derived from the declared type of the
identified resource. If used in a resource path and the identified
resource is not an instance of the derived type, the request will result
in a `404 Not Found` response. If used in a path expression,
the type cast will evaluate to `null`.

Services MAY additionally support the use of the unqualified name of a
derived type in a URL by defining one or more default namespaces through
the
[Core.DefaultNamespace]{.term}
term defined in [OData-VocCore](#ODataVocCore). For more information on
default namespaces, see [#OData-Protocol#DefaultNamespaces].

Services MAY also support treating an instance as a type outside of the
type hierarchy using the same syntax and semantics as when addressing a
derived type. In this case, the set and values of properties of the
addressed type may be different than the properties of the source type.
The set of such possible target types outside of the type hierarchy
SHOULD be called out using the
[Core.MayImplement]{.term}
annotation term, defined in [OData-VocCore](#ODataVocCore).

::: example
Example ##ex: entity set restricted to `VipCustomer` instances
```
http://host/service/Customers/Model.VipCustomer
```
:::

::: example
Example ##ex: entity restricted to a `VipCustomer` instance, resulting in
`404 Not Found` if the customer with key `1` is not a `VipCustomer`
```
http://host/service/Customers/Model.VipCustomer(1)
```

```
http://host/service/Customers(1)/Model.VipCustomer
```
:::

::: example
Example ##ex: cast the complex property `Address` to its derived type
`DetailedAddress`, then get a property of the derived type
```
http://host/service/Customers(1)/Address/Model.DetailedAddress/Location
```
:::

::: example
Example ##ex: filter expression with type cast; will evaluate to `null`
for all non-`VipCustomer` instances and thus return only instances of
`VipCustomer`
```
http://host/service/Customers
  ?$filter=Model.VipCustomer/PercentageOfVipPromotionProductsOrdered gt 80
```
:::

::: example
Example ##ex: expand the single related `Customer` only if it is an
instance of `Model.VipCustomer`. For to-many relationships only
`Model.VipCustomer` instances would be inlined,
```
http://host/service/Orders?$expand=Customer/Model.VipCustomer
```
:::

## ##subsec Addressing a Subset of a Collection

Any resource path or path expression identifying a collection can be
appended with a filter path segment consisting of `/$filter` followed by
parentheses containing a [parameter alias](#ParameterAliases) or a
filter expression following the [filter]{.abnf} syntax rule in
[OData-ABNF](#ODataABNF). If the parentheses contain a parameter alias,
a filter expression MUST be assigned to the parameter alias in the query
part of the request URL. If the filter path segment appears in the
resource path, the filter expression in parentheses MUST NOT use forward slashes,
it must be specified with a parameter alias instead.

The collection will be restricted to instances matching the filter
expression assigned to the parameter alias and may be empty.

The `/$filter` path segment MAY occur multiple times and it MAY be
combined with the [`$filter`](#SystemQueryOptionfilter) system query
option.

::: example
Example ##ex: red products that cost less than 10  --- combining path
segment and system query option
```
GET Products/$filter(@foo)?@foo=Price lt 10&$filter=Color eq 'red'
```
:::

::: example
Example ##ex: red products that cost less than 10 --- combine two path
segments
```
GET Products/$filter(@p)/$filter(@c)?@p=Price lt 10&@c=Color eq 'red'
```
:::

::: example
Example ##ex: categories with less than ten products older than three
```
GET Categories?$filter=Products/$filter(Age gt 3)/$count lt 10
```
:::

Note that the `/$filter` path segment filters the "input" to the
operation, and the `$filter` system query option filters the result of
the operation, so the two can be used interchangeably only for `GET`
operations. For a `PATCH` operation, the `/$filter` path segment is
evaluated on the items *before* the modification and determines which
items are to be modified, whereas the `$filter` system query option is
evaluated *after* the modification and determines which of the modified
items are part of the response.

The `/$filter` path segment MAY be followed by a path segment
identifying a [bound action](#AddressingActions) or [bound
function](#AddressingFunctions) applicable to the collection.

::: example
Example ##ex: invoke the `Special.Cluster` action on all products older
than 3
```
POST /service/Products/$filter(@foo)/Special.Cluster?@foo=Age gt 3
```
:::

## ##subsec Addressing Each Member of a Collection

To apply a `PATCH` or `DELETE` request to each member of a collection,
clients append the path segment `/$each` to a resource path identifying
a collection.

To apply a [bound action](#AddressingActions) or function to each member
of a collection, clients append the path segment `/$each` followed by a
path segment identifying the bound action or
function. The response is a collection of instances of the result type
of the bound operation. If the bound operation returns a collection, the
response is a collection of collections. System query options applied to
the response can use [`$it`](#it) to reference an item in the outermost
collection, followed by [`/any`](#any), [`/all`](#all), or
[`/$count`](#AddressingtheCountofaCollection).

The resource path of the collection preceding `/$each` MAY contain
[type-cast segments](#AddressingDerivedTypes) or [filter path
segments](#AddressingaSubsetofaCollection) to subset the collection.

## ##subsec Addressing the Media Stream of a Media Entity

To address the media stream represented by a media entity, clients
append `/$value` to the resource path of the media entity URL. Services
may redirect from this canonical URL to the source URL of the media
stream.

::: example
Example ##ex: request the media stream for the picture with the key value
`Sunset4321299432`:
```
http://host/service/Pictures('Sunset4321299432')/$value
```
:::

## ##subsec Addressing the Cross Join of Entity Sets

In addition to querying related entities through navigation properties
defined in the entity model of a service, the cross join operator allows
querying across unrelated entity sets.

The cross join is addressed by appending the path segment `$crossjoin`
to the [service root URL](#ServiceRootURL), followed by the
parenthesized comma-separated list of joined entity sets. It returns the
Cartesian product of all the specified entity sets, represented as a
collection of instances of a virtual complex type. Each instance
consists of one non-nullable, single-valued navigation property per
joined entity set. Each such navigation property is named identical to
the corresponding entity set, with a target type equal to the declared
entity type of the corresponding entity set.

The [`$filter`](#SystemQueryOptionfilter) and
[`$orderby`](#SystemQueryOptionorderby) query options can be specified
using properties of the entities in the selected entity sets, prepended
with the entity set as the navigation property name.

The [`$expand`](#SystemQueryOptionexpand) query option can be specified
using the names of the selected entity sets as navigation property
names. If a selected entity set is not expanded, it MUST be represented
using the read URL of the related entity as a navigation link in the
complex type instance.

The [`$count`](#SystemQueryOptioncount),
[`$skip`](#SystemQueryOptionstopandskip), and
[`$top`](#SystemQueryOptionstopandskip) query options can also be used
with no special semantics.

::: example
Example ##ex: if `Sales` had a structural property `ProductID` instead of
a navigation property `Product`, a "cross join" between `Sales` and
`Products` could be addressed
```
http://host/service/$crossjoin(Products,Sales)?$filter=Products/ID eq Sales/ProductID
```
and would result in
```json
{
  "@context": "http://host/service/$metadata#Collection(Edm.ComplexType)",
  "value": [
    {
      "Products@navigationLink": "Products(0)",
      "Sales@navigationLink": "Sales(42)",
    },
    {
      "Products@navigationLink": "Products(0)",
      "Sales@navigationLink": "Sales(57)",
    },
    …
    {
      "Products@navigationLink": "Products(99)",
      "Sales@navigationLink": "Sales(21)",
    }
  ]
}
```
:::

## ##subsec Addressing All Entities in a Service

The symbolic resource `$all`, located at the service root, identifies
the collection of all entities in a service, i.e. the union of all
entity sets plus all singletons.

This symbolic resource is of type `Collection(Edm.EntityType)` and
allows the [`$search`](#SystemQueryOptionsearch) system query option
plus all other query options applicable to collections of entities.

The `$all` resource can be appended with a path segment containing the
qualified name of an entity type in order to restrict the collections to
entities of that type. Query options such as
[`$select`](#SystemQueryOptionselect),
[`$filter`](#SystemQueryOptionfilter),
[`$expand`](#SystemQueryOptionexpand), and
[`$orderby`](#SystemQueryOptionorderby) can be applied to this
restricted set according to the specified type.

::: example
Example ##ex: all entities in a service that somehow match `red`
```
http://host/service/$all?$search=red
```
:::

::: example
Example ##ex: all `Customer` entities in a service whose name contains
`red`
```
http://host/service/$all/Model.Customer?$filter=contains(Name,'red')
```
:::

## ##subsec Passing Query Options in the Request Body

The query options part of an OData URL can be quite long, potentially
exceeding the maximum length of URLs supported by components involved in
transmitting or processing the request. One way to avoid this is
wrapping the request in a batch request, which has the penalty of
needing to construct a well-formed batch request body.

An easier alternative for `GET` requests is to append `/$query` to the
resource path of the URL, use the `POST` verb instead of `GET`, and pass
the query options part of the URL in the request body.

Requests to paths ending in `/$query` MUST use the `POST` verb. Query
options specified in the request body and query options specified in the
request URL are processed together.

The request body MUST use a `Content-Type` of `text/plain`, `application/x-www-form-urlencoded`,
or `application/json`.

For `Content-Type: text/plain`, the individual query options MUST be separated by `&`
and MUST use the same percent-encoding as in URLs (especially: no spaces, tabs, or line breaks allowed)
and MUST follow the syntax rules described in [chapter ##QueryOptions].

::: example
Example ##ex_postquery: system query options in request body instead of URL
```
POST http://host/service/People/$query
Content-Type: text/plain

$filter=LastName%20eq%20'P%26G'&$select=FirstName,LastName
```
:::

For `Content-Type: application/x-www-form-urlencoded`, the request body MUST be
suitable _input_ for the [`application/x-www-form-urlencoded` parser](https://url.spec.whatwg.org/#urlencoded-parsing)
in the [URL Living Standard](#_url), section 5.1 such that the _output_ of the parsing
steps is the list of name/value pairs for the individual query options.

To guarantee this, clients are advised to make the request body the value of
_output_ after running the
[`application/x-www-form-urlencoded` serializer](https://url.spec.whatwg.org/#concept-urlencoded-serializer)
in the [URL Living Standard](#_url), section 5.2 with _tuples_ being the list
of name/value pairs for the individual query options.

::: example
Example ##ex: The same payload as in [example ##postquery] can be sent with
`application/x-www-form-urlencoded` encoding. But the the `application/x-www-form-urlencoded` parser
also accepts a different encoding:
```
POST http://host/service/People/$query
Content-Type: application/x-www-form-urlencoded

%24filter=LastName+eq+%27P%26G%27&%24select=FirstName%2CLastName
```
This POST request would result from submitting the HTML form
```html
<form method="post" action="http://host/service/People/$query"
      enctype="application/x-www-form-urlencoded">
  <input name="$filter" value="LastName eq 'P&G'">
  <input name="$select" value="FirstName,LastName">
</form>
```
which encodes spaces and ampersands (and more characters for which encoding is
optional).
:::

With `Content-Type: application/json` query options and function parameters are
encoded in a request body that represents a JSON object. Its members include the
individual query options. The name of a system query option MUST have the `$` prefix.
The value MUST be
* a JSON number for `$top` and `$skip`, and
* a JSON string without percent-encoding for all other query options.

::: example
Example ##ex: The same request as in [example ##postquery] can be sent with
`application/json` encoding using the following payload:
```json
POST http://host/service/People/$query
Content-Type: application/json

{
  "$filter": "LastName eq 'P&G'",
  "$select": "FirstName,LastName"
}
```
:::

Members of the JSON object also include parameters
if the resource path is a function invocation or function import. In this case
parameters MUST be represented like parameters in an action invocation [#OData-JSON#ActionInvocation],
and in the resource path parentheses after the function name MUST be omitted.

::: example
Example ##ex: An employee's top ten leave requests from now to the end of the year
pending their manager's approval.
```json
POST http://host/service/Employees(23)/self.PendingLeaveRequests/$query
Content-Type: application/json

{
  "StartDate@expression": "now()",
  "EndDate": "2024-12-31",
  "Approver@expression": "Manager",
  "$top": 10
}
```

The previous request looks analogous to a bound function invocation with expressions (like in [example ##funcexpr])
if it is written using implicit parameter aliases (see [#OData-Protocol#InlineParameterSyntax]).
```
GET http://host/service/Employees(23)/self.PendingLeaveRequests
  ?StartDate=now()
  &EndDate=2024-12-31
  &Approver=Manager
  &$top=10
```
:::
