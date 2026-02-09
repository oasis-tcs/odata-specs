
-------

# ##sec Query Options

The query options part of an OData URL specifies three types of
information: [system query options](#SystemQueryOptions), [custom query
options](#CustomQueryOptions), and [parameter
aliases](#ParameterAliases). All OData services MUST follow the query
string parsing and construction rules defined in this section and its
subsections.

## ##subsec System Query Options

System query options are query string parameters that control the amount
and order of the data returned for the resource identified by the URL.
The names of all system query options are optionally prefixed with a
dollar (`$`) character. 4.01 Services MUST support case-insensitive
system query option names specified with or without the `$` prefix.
Clients that want to work with 4.0 services MUST use lower case names
and specify the `$` prefix.

For `GET`, `PATCH`, and `PUT` requests the following rules apply:
- Resource paths identifying a single
entity, a complex type instance, a collection of entities, or a
collection of complex type instances allow
[`$compute`](#SystemQueryOptioncompute),
[`$expand`](#SystemQueryOptionexpand) and
[`$select`](#SystemQueryOptionselect).
- Resource paths identifying a collection
allow [`$filter`](#SystemQueryOptionfilter),
[`$search`](#SystemQueryOptionsearch),
[`$count`](#SystemQueryOptioncount),
[`$orderby`](#SystemQueryOptionorderby),
[`$skip`](#SystemQueryOptionstopandskip), and
[`$top`](#SystemQueryOptionstopandskip).
- Resource paths ending in `/$count` allow
[`$filter`](#SystemQueryOptionfilter) and
[`$search`](#SystemQueryOptionsearch).
- Resource paths not ending in `/$count`
or `/$batch` allow [`$format`](#SystemQueryOptionformat).

For `POST` requests to an action URL the return type of the action
determines the applicable system query options that a service MAY
support, following the same rules as `GET` requests.

`POST` requests to an entity set follow the same rules as `GET` requests
that return a single entity.

System query options SHOULD NOT be applied to a `DELETE` request.

An OData service may support some or all of the system query options
defined. If a data service does not support a system query option, it
MUST reject any request that contains the unsupported option.

The same system query option, irrespective of casing or whether or not
it is prefixed with a `$`, MUST NOT be specified more than once for any
resource.

The semantics of all system query options are defined in
[#OData-Protocol#SystemQueryOptions].

The grammar and syntax rules for system query options are defined in
[OData-ABNF](#ODataABNF) rule [queryOptions]{.abnf}.

Dynamic properties can be used in the same way as declared properties.
If they are not defined on an instance, they evaluate to `null`.

### ##subsubsec Common Expression Syntax

The following operators, functions, and literals can be used in
`$filter`, `$orderby`, and `$compute` expressions.

The [OData-ABNF](#ODataABNF) [commonExpr]{.abnf} syntax rule defines the formal
grammar of common expressions.

The following subsections specify situations in which expressions evaluate to `null`
if operands or parameters do not have the types expected by an operator or function.
Notwithstanding these rules, if a service can determine such a type discrepancy for an expression
that appears in a request independently of the underlying data,
it MUST reject the request with an error message
explaining the discrepancy. The determination can be based on, for example, the
declared type of a property or the type of a literal value that occurs in the
expression.

::: example
Example ##ex: In a search for people above a certain age
```
http://host/service/People?$filter=Age gt '50'
```
the expression would always evaluate to `null` because the age 50 is erroneously
given as a string and the [`$filter`](#SystemQueryOptionfilter) would return an empty result, although this is
really the result of a typing error. That's why a "type mismatch" error must
instead be returned in such a case.
:::

#### ##subsubsubsec Logical Operators

OData defines a set of logical operators that evaluate to `true` or `false`
(i.e. a [boolCommonExpr]{.abnf} as defined in [OData-ABNF](#ODataABNF)).
Logical operators are typically used to filter a collection of
resources.

The syntax rules for the logical operators are defined in
[OData-ABNF](#ODataABNF) rule [commonExpr]{.abnf}. 4.01 Services MUST support case-insensitive
operator names. Clients that want to work with 4.0 services MUST use
lower case operator names.

The six comparison operators can be used with all primitive values
except `Edm.Binary`, `Edm.Stream`, and the `Edm.Geo` types.
`Edm.Binary`, `Edm.Stream`, and the `Edm.Geo` types can only be compared
to the `null` value using the [`eq`](#Equals) and [`ne`](#NotEquals)
operators.

When applied to operands of numeric types, [numeric
promotion](#NumericPromotion) rules are applied.

The `eq`, `ne`, and `in` operators can be used with collection-valued
operands, and the `eq` and `ne` operators can be used with operands of a
structured type.

If at least one operand of an `eq`, `ne`, `lt`, `le`, `gt`, or `ge` operator
is non-numeric and the operands have different types, the operator returns `null`.

The rules for the Boolean operators `and`, `or`, and `not` assume Boolean operands.
If an operand of a Boolean operator is not Boolean, the operator returns `null`.

##### ##subsubsubsubsec Equals

The `eq` operator returns `true` if the left operand is equal to the right
operand, otherwise it returns `false`.

When applied to operands of entity types, the `eq` operator returns `true`
if both operands represent the same entity, or both operands represent
`null`.

When applied to operands of complex types, the `eq` operator returns
`true` if both operands have the same structure and same values, or both
operands represent `null`.

When applied to ordered collections, the `eq` operator returns `true` if
both operands have the same cardinality and each member of the left
operand is equal to the member of the right operand at the same index.

For services that support comparing unordered collections, the `eq`
operator returns `true` if both operands are equal after applying the same
ordering on both collections.

Each of the special values `null`, `-INF`, and `INF` is equal to itself,
and only to itself.

The special value `NaN` is not equal to anything, even to itself.

##### ##subsubsubsubsec Not Equals

The `ne` operator returns `true` if the left operand is not equal to the
right operand, otherwise it returns `false`.

When applied to operands of entity types, the `ne` operator returns `true`
if the two operands do not represent the same entity.

When applied to operands of complex types, the `ne` operator returns
`true` if the operands do not have the same structure and same values.

When applied to ordered collections, the `ne` operator returns `true` if
both operands do not have the same cardinality or any member of the left
operand is not equal to the corresponding member of the right operand.

For services that support comparing unordered collections, the `ne`
operator returns `true` if both operands do not have the same cardinality
or do not contain the same members, in any order.

Each of the special values `null`, `-INF`, and `INF` is not equal to any
value but itself.

The special value `NaN` is not equal to anything, even to itself.

The `null` value is not equal to any value but itself.

##### ##subsubsubsubsec Greater Than

The `gt` operator returns `true` if the left operand is greater than the
right operand, otherwise it returns `false`.

The special value `INF` is greater than any number, and any number is
greater than `-INF`.

The Boolean value `true` is greater than `false`.

Services SHOULD order language-dependent strings according to the
`Content-Language` of the response, and SHOULD annotate string properties
with language-dependent order with the term
[Core.IsLanguageDependent]{.term},
see [OData-VocCore](#ODataVocCore).

If any operand is `null`, the operator returns `false`.

##### ##subsubsubsubsec Greater Than or Equal

The `ge` operator returns `true` if the left operand is greater than or
equal to the right operand, otherwise it returns `false`.

See rules for [`gt`](#GreaterThan) and [`eq`](#Equals) for details.

##### ##subsubsubsubsec Less Than

The `lt` operator returns `true` if the left operand is less than the
right operand, otherwise it returns `false`.

The special value `-INF` is less than any number, and any number is less
than `INF`.

The Boolean value `false` is less than `true`.

Services SHOULD order language-dependent strings according to the
`Content-Language` of the response, and SHOULD annotate string properties
with language-dependent order with the term
[Core.IsLanguageDependent]{.term},
see [OData-VocCore](#ODataVocCore).

If any operand is `null`, the operator returns `false`.

##### ##subsubsubsubsec Less Than or Equal

The `le` operator returns `true` if the left operand is less than or equal
to the right operand, otherwise it returns `false`.

See rules for [`lt`](#LessThan) and [`eq`](#Equals) for details.

##### ##subsubsubsubsec And

The `and` operator returns `true` if both the left and right operands
evaluate to `true`, otherwise it returns `false`.

The `null` value is treated as unknown, so if one operand evaluates to
`null` and the other operand to `false`, the `and` operator returns `false`.
All other combinations with `null` return `null`.

##### ##subsubsubsubsec Or

The `or` operator returns `false` if both the left and right operands both
evaluate to `false`, otherwise it returns `true`.

The `null` value is treated as unknown, so if one operand evaluates to
`null` and the other operand to `true`, the `or` operator returns `true`.
All other combinations with `null` return `null`.

##### ##subsubsubsubsec Not

The `not` operator returns `true` if the operand returns `false`, otherwise
it returns `false`.

The `null` value is treated as unknown, so `not null` returns `null`.

##### ##subsubsubsubsec Has

The `has` operator returns `true` if the right operand is an enumeration
value whose flag(s) are set on the left operand.

The `null` value is treated as unknown, so if one operand evaluates to
`null`, the `has` operator returns `null`.

##### ##subsubsubsubsec In

The `in` operator returns `true` if the [equality](#Equals) comparison of the left
operand with at least one member of the right operand returns `true`.
The right operand MUST be either a comma-separated list
of zero or more primitive values, enclosed in parentheses, or a single expression
that resolves to a collection. If the right operand is an empty collection
or list of values, the `in` operator returns `false`.

##### ##subsubsubsubsec Logical Operator Examples

The following examples illustrate the use and semantics of each of the
logical operators.

::: example
Example ##ex: all products with a `Name` equal to `Milk`
```
http://host/service/Products?$filter=Name eq 'Milk'
```
:::

::: example
Example ##ex: all products with a `Name` not equal to `Milk`
```
http://host/service/Products?$filter=Name ne 'Milk'
```
:::

::: example
Example ##ex: all products with a `Name` greater than `Milk`:
```
http://host/service/Products?$filter=Name gt 'Milk'
```
:::

::: example
Example ##ex: all products with a `Name` greater than or equal to `Milk`:
```
http://host/service/Products?$filter=Name ge 'Milk'
```
:::

::: example
Example ##ex: all products with a `Name` less than `Milk`:
```
http://host/service/Products?$filter=Name lt 'Milk'
```
:::

::: example
Example ##ex: all products with a `Name` less than or equal to `Milk`:
```
http://host/service/Products?$filter=Name le 'Milk'
```
:::

::: example
Example ##ex: all products with a `Name` equal to `Milk` that also have a `Price`
less than 2.55:
```
http://host/service/Products?$filter=Name eq 'Milk' and Price lt 2.55
```
:::

::: example
Example ##ex: all products that either have a `Name` equal to `Milk` or have a
`Price` less than 2.55:
```
http://host/service/Products?$filter=Name eq 'Milk' or Price lt 2.55
```
:::

::: example
Example ##ex: all products that do not have a `Name` that ends with `ilk`:
```
http://host/service/Products?$filter=not endswith(Name,'ilk')
```
:::

::: example
Example ##ex: all products whose `style` value includes `Yellow`:
```
http://host/service/Products?$filter=style has Sales.Pattern'Yellow'
```
:::

::: example
Example ##ex: all products whose `Name` is `Milk` or `Cheese`:
```
http://host/service/Products?$filter=Name in ('Milk', 'Cheese')
```
:::

#### ##subsubsubsec Arithmetic Operators

OData defines a set of arithmetic operators that require operands that
evaluate to numeric types. Arithmetic operators are typically used to
filter a collection of resources. However, services MAY allow using
arithmetic operators with the [`$orderby`](#SystemQueryOptionorderby)
system query option.

If an operand of an arithmetic operator is `null` or has a non-allowed type,
the result is `null`.

The syntax rules for the arithmetic operators are defined in
[OData-ABNF](#ODataABNF) rule [commonExpr]{.abnf}. 4.01 Services MUST support case-insensitive
operator names. Clients that want to work with 4.0 services MUST use
lower case operator names.

##### ##subsubsubsubsec Addition

The `add` operator adds the left and right numeric operands.

For operands of type `Edm.Decimal` the scale of the result is
${\rm scaleof}(A {\ \tt add\ } B) = \max({\rm scaleof}(A), {\rm scaleof}(B))$,
or `variable` if any operand has variable scale.

The `add` operator is also valid for the following time-related
operands:
- `DateTimeOffset add Duration` results in
a `DateTimeOffset`
- `Duration add Duration` results in a
`Duration`
- `Date add Duration` results in a `Date`

The rules for time-related operands are defined in
[XML-Schema-2](#XML-Schema2), [section E.3.3](https://www.w3.org/TR/xmlschema11-2/#sec-dt-arith).
Specifically, for adding a duration to a date:
- Convert date to datetime (in any timezone) with a zero time component
- Add/subtract duration
- Convert to date by removing the time and timezone components

Thus, today plus a positive duration smaller than one day is today;
today minus a positive duration smaller than one day is yesterday.

##### ##subsubsubsubsec Subtraction

The `sub` operator subtracts the right numeric operand from the left
numeric operand.

For operands of type `Edm.Decimal` the scale of the result is
${\rm scaleof}(A {\ \tt sub\ } B) = \max({\rm scaleof}(A), {\rm scaleof}(B))$,
or `variable` if any operand has variable scale.

The `sub` operator is also valid for the following time-related
operands:
- `DateTimeOffset sub Duration`
results in a `DateTimeOffset`
- `Duration sub Duration` results in a
`Duration`
- `DateTimeOffset sub DateTimeOffset`
results in a `Duration`
- `Date sub Duration` results in a `Date`
- `Date sub Date` results in a `Duration`

The rules for time-related operands are defined in
[XML-Schema-2](#XML-Schema2), [section E.3.3](https://www.w3.org/TR/xmlschema11-2/#sec-dt-arith).
Specifically for subtracting a duration from a date see the preceding
[section](#Addition).

##### ##subsubsubsubsec Negation

The negation operator, represented by a minus (`-`) sign, changes the
sign of its numeric or `Duration` operand.

##### ##subsubsubsubsec Multiplication

The `mul` operator multiplies the left and right numeric operands. The
`mul` operator is also valid for multiplying a `Duration` value with a
numeric value.

For operands of type `Edm.Decimal` the scale of the result is
${\rm scaleof}(A {\ \tt mul\ } B) = {\rm scaleof}(A) + {\rm scaleof}(B)$,
`floating` if any operand has floating
scale, or else `variable` if any operand has variable scale.

##### ##subsubsubsubsec Division

The `div` and` divby` operators divide the left numeric operand by the
right numeric operand. They are also valid for dividing a `Duration`
value by a numeric value.

If the left operand is of type `Edm.Decimal` with floating scale,
`Edm.Double`, or `Edm.Single`, then positive `div` zero returns `INF`,
negative `div` zero returns `-INF`, and zero `div` zero returns `NaN`.
For all other types the request fails.

For operands of type `Edm.Decimal` the result is
computed with maximal decimal scale. If any operand has floating scale,
the result has floating scale, else if any operand has variable scale,
the result has variable scale. Otherwise the resulting scale is
service-specific, and clients can use `cast` to force the result to a
specific scale.

The `div` and` divby` operators differ in their handling of integers. If
both operands to `div` are of an integer type, the result is an integer
representing the whole number of times the right operator fits into the
left operator. The `divby` operator, on the other hand, promotes both
operands to decimal before computing the result, may yield a fractional
result, and does not fail for `divby` zero, returning `-INF`, `INF`, or
`NaN` depending on the sign of the left operand.

##### ##subsubsubsubsec Modulo

The `mod` operator returns the remainder when the left numeric operand
is divided by the right numeric operand.  The sign of the result is the
same as the sign of the left operand. If the right operand is zero, the
request fails.

For operands of type `Edm.Decimal` the scale of the result is
${\rm scaleof}(A {\ \tt mod\ } B) = \max({\rm scaleof}(A), {\rm scaleof}(B))$,
or `variable` if any operand has variable scale.

##### ##subsubsubsubsec Arithmetic Operator Examples

The following examples illustrate the use and semantics of each of the
Arithmetic operators.

::: example
Example ##ex: all products with a Price of 2.55:
```
http://host/service/Products?$filter=Price add 2.45 eq 5.00
```
:::

::: example
Example ##ex: all products with a Price of 2.55:
```
http://host/service/Products?$filter=Price sub 0.55 eq 2.00
```
:::

::: example
Example ##ex: all products with a Price of 2.55:
```
http://host/service/Products?$filter=Price mul 2.0 eq 5.10
```
:::

::: example
Example ##ex: all products with a Price of 2.55:
```
http://host/service/Products?$filter=Price div 2.55 eq 1
```
:::

::: example
Example ##ex: all products with an integer Rating value of 4 or 5:
```
http://host/service/Products?$filter=Rating div 2 eq 2
```
:::

::: example
Example ##ex: all products with an integer Rating value of 5:
```
http://host/service/Products?$filter=Rating divby 2 eq 2.5
```
:::

::: example
Example ##ex: all products with a Rating exactly divisible by 5:
```
http://host/service/Products?$filter=Rating mod 5 eq 0
```
:::

#### ##subsubsubsec Grouping

The Grouping operator (open and close parenthesis "`( )`") controls the
evaluation order of an expression. The Grouping operator returns the
expression grouped inside the parenthesis.

::: example
Example ##ex: all products because 9 mod 3 is 0
```
http://host/service/Products?$filter=(4 add 5) mod (4 sub 1) eq 0
```
:::

#### ##subsubsubsec Canonical Functions

In addition to operators, a set of functions is also defined for use
with the [`$compute`](#SystemQueryOptioncompute), `$filter` or
[`$orderby`](#SystemQueryOptionorderby) system query options, or in
[parameter alias](#ParameterAliases) values. The following [sections ##concat]
to [##geolength] describe the available functions. The [`case`](#case)
and [lambda operators](#LambdaOperators) have a slightly different
syntax.

Note: ISNULL or COALESCE operators are
not defined. Instead, OData defines a [`null`](#null) literal that can
be used in comparisons.

If a parameter of a canonical function is `null`, the function returns
`null`. If the types of parameters do not match the function signature,
the function also returns `null`.

The syntax rules for all functions are defined in
[OData-ABNF](#ODataABNF) rule [methodCallExpr]{.abnf}. 4.01 Services MUST support case-insensitive
canonical function names. Clients that want to work with 4.0 services
MUST use lower case canonical function names.

#### ##subsubsubsec String and Collection Functions

##### ##subsubsubsubsec `concat`

The `concat` function has three overloads, with the following
signatures:

```
Edm.String concat(Edm.String,Edm.String)
Collection concat(Collection,Collection)
OrderedCollection concat(OrderedCollection,OrderedCollection)
```

The `concat` function with string parameter values returns a string that
appends the second parameter string value to the first.

The concat function with collection parameter values returns a
collection that appends all items of the second collection to the first.
If both collections are ordered, the result is also ordered.

The [concatMethodCallExpr]{.abnf} syntax rule defines how the `concat` function
is invoked.

::: example
Example ##ex: all customers from Berlin, Germany
```
http://host/service/Customers?$filter=concat(concat(City,', '),Country) eq 'Berlin, Germany'
```
:::

##### ##subsubsubsubsec `contains`

The `contains` function has two overloads, with the following
signatures:

```
Edm.Boolean contains(Edm.String,Edm.String)
Edm.Boolean contains(OrderedCollection,OrderedCollection)
```

The `contains` function with string parameter values returns `true` if the
second string is a substring of the first string, otherwise it returns
`false`. String comparison is case-sensitive, case-insensitive comparison
can be achieved in combination with [`tolower`](#tolower) or
[`toupper`](#toupper).

The `contains` function with ordered collection parameter values returns
`true` if the first collection can be transformed into the second
collection by removing zero or more items from the beginning or the end
of the first collection.

The [containsMethodCallExpr]{.abnf} syntax rule defines how the `contains`
function is invoked.

::: example
Example ##ex: all customers with a `CompanyName` that contains `Alfreds`
```
http://host/service/Customers?$filter=contains(CompanyName,'Alfreds')
```
:::

##### ##subsubsubsubsec `endswith`

The `endswith` function has two overloads, with the following
signatures:

```
Edm.Boolean endswith(Edm.String,Edm.String)
Edm.Boolean endswith(OrderedCollection,OrderedCollection)
```

The `endswith` function with string parameter values returns `true` if the
first string ends with the second string, otherwise it returns `false`.
String comparison is case-sensitive, case-insensitive comparison can be
achieved in combination with [`tolower`](#tolower) or
[`toupper`](#toupper).

The `endswith` function with ordered collection parameter values returns
`true` if the first collection can be transformed into the second
collection by removing zero or more items from the beginning of the
first collection.

The [endsWithMethodCallExpr]{.abnf} syntax rule defines how the `endswith`
function is invoked.

::: example
Example ##ex: all customers with a `CompanyName` that ends with
`Futterkiste`
```
http://host/service/Customers?$filter=endswith(CompanyName,'Futterkiste')
```
:::

##### ##subsubsubsubsec `indexof`

The `indexof` function has two overloads, with the following signatures:

```
Edm.Int32 indexof(Edm.String,Edm.String)
Edm.Int32 indexof(OrderedCollection,OrderedCollection)
```

The `indexof` function with string parameter values returns the
zero-based character position of the first occurrence of the second
string in the first string, or -1 if the first string does not contain
the second string. String comparison is case-sensitive, case-insensitive
comparison can be achieved in combination with [`tolower`](#tolower) or
[`toupper`](#toupper).

The `indexof` function with ordered collection parameter values returns
the zero-based index of the first occurrence of the second collection in
the first collection, or -1 if the first collection does not contain the
second collection.

The [indexOfMethodCallExpr]{.abnf} syntax rule defines how the `indexof`
function is invoked.

::: example
Example ##ex: all customers with a `CompanyName` containing `lfreds`
starting at the second character
```
http://host/service/Customers?$filter=indexof(CompanyName,'lfreds') eq 1
```
:::

##### ##subsubsubsubsec `length`

The `length` function has two overloads, with the following signatures:

```
Edm.Int32 length(Edm.String)
Edm.Int32 length(Collection)
```

The `length` function with a string parameter value returns the number
of characters in the string.

The `length` function with a collection parameter value returns the
number of itens in the collection.

The [lengthMethodCallExpr]{.abnf} syntax rule defines how the `length` function
is invoked.

::: example
Example ##ex: all customers with a `CompanyName` that is 19 characters
long
```
http://host/service/Customers?$filter=length(CompanyName) eq 19
```
:::

##### ##subsubsubsubsec `startswith`

The `startswith` function has two overloads, with the following
signatures:

```
Edm.Boolean startswith(Edm.String,Edm.String)
Edm.Boolean startswith(Collection,Collection)
```

The `startswith` function with string parameter values returns `true` if
the first string starts with the second string, otherwise it returns
`false`. String comparison is case-sensitive, case-insensitive comparison
can be achieved in combination with [`tolower`](#tolower) or
[`toupper`](#toupper).

The `startswith` function with ordered collection parameter values
returns `true` if the first collection can be transformed into the second
collection by removing zero or more items from the end of the first
collection.

The [startsWithMethodCallExpr]{.abnf} syntax rule defines how the `startswith`
function is invoked.

::: example
Example ##ex: all customers with a `CompanyName` that starts with `Alfr`
```
http://host/service/Customers?$filter=startswith(CompanyName,'Alfr')
```
:::

##### ##subsubsubsubsec `substring`

The `substring` function has four overloads, with the following
signatures:

```
Edm.String substring(Edm.String,Edm.Int32)
Edm.String substring(Edm.String,Edm.Int32,Edm.Int32)
OrderedCollection substring(OrderedCollection,Edm.Int32)
OrderedCollection substring(OrderedCollection,Edm.Int32,Edm.Int32)
```

The two-parameter `substring` function with string parameter values
returns a substring of the first parameter string value, starting at the
Nth character and finishing at the last character (where N is the second
parameter integer value). The three-parameter `substring` function with
string parameter values returns a substring of the first parameter
string value identified by selecting up to M characters starting at the
Nth character (where N is the second parameter integer value and M is
the third parameter integer value).

The two-parameter `substring` function with ordered collection parameter
values returns an ordered collection consisting of all items of the
first collection starting at the Nth item and finishing at the last
item. The three-parameter `substring` function with ordered collection
parameter values returns an ordered collection consisting of up to M
items of the first collection starting at the Nth item (where N is the
second parameter integer value and M is the third parameter integer
value).

The start index N is zero-based.

If the start index N is larger than the length of the string/collection,
an empty string/collection is returned.

If the length M is larger than the length of the remaining
string/collection starting at the Nth character/item, as many
characters/items as are available are returned.

A negative length M is a bad request.

A negative start index N, if supported, returns a string/collection
starting N characters/items before the end of the string/collection.

The [substringMethodCallExpr]{.abnf} syntax rule defines how the `substring`
function is invoked.

::: example
Example ##ex: all customers with a `CompanyName` of `lfreds Futterkiste`
once the first character has been removed
```
http://host/service/Customers?$filter=substring(CompanyName,1) eq 'lfreds Futterkiste'
```
:::

::: example
Example ##ex: all customers with a `CompanyName` that has `lf` as the
second and third characters, e.g, `Alfreds Futterkiste`
```
http://host/service/Customers?$filter=substring(CompanyName,1,2) eq 'lf'
```
:::

#### ##subsubsubsec Collection Functions

##### ##subsubsubsubsec `hassubset`

The `hassubset` function has the following signature:

```
Edm.Boolean hassubset(Collection, Collection)
```

The `hassubset` function returns `true` if the first collection can be
transformed into the second collection by reordering and/or removing
zero or more items. The [hasSubsetMethodCallExpr]{.abnf} syntax rule defines
how the `hassubset` function is invoked.

::: example
Example ##ex: `hassubset` expressions that return `true`
```
hassubset([4,1,3],[4,1,3])
```

```
hassubset([4,1,3],[1,3,4])
```

```
hassubset([4,1,3],[3,1])
```

```
hassubset([4,1,3],[4,3])
```

```
hassubset([4,1,3,1],[1,1])
```
:::

::: example
Example ##ex: `hassubset` expression that returns `false`: `1` appears only
once in the left operand
```
hassubset([1,2],[1,1,2])
```
:::

##### ##subsubsubsubsec `hassubsequence`

The `hassubsequence` function has the following signature:

```
Edm.Boolean hassubsequence(OrderedCollection,OrderedCollection)
```

The `hassubsequence` function returns `true` if the first collection can
be transformed into the second collection by removing zero or more
items. The [hasSubsequenceMethodCallExpr]{.abnf} syntax rule defines how the
`hassubsequence` function is invoked.

::: example
Example ##ex: `hassubsequence` expressions that return `true`
```
hassubsequence([4,1,3],[4,1,3])
```

```
hassubsequence([4,1,3],[4,1])
```

```
hassubsequence([4,1,3],[4,3])
```

```
hassubsequence([4,1,3,1],[1,1])
```
:::

::: example
Example ##ex: `hassubsequence` expressions that return `false`
```
hassubsequence([4,1,3],[1,3,4])
```

```
hassubsequence([4,1,3],[3,1])
```

```
hassubsequence([1,2],[1,1,2])
```
:::

#### ##subsubsubsec String Functions

##### ##subsubsubsubsec `matchespattern`

The `matchespattern` function has the following signatures:

```
Edm.Boolean matchespattern(Edm.String,Edm.String)
Edm.Boolean matchespattern(Edm.String,Edm.String,Edm.String)
```

The second parameter MUST evaluate to a string containing an
[ECMAScript](#_ECMAScript) (JavaScript) regular expression, otherwise the function
returns `null`. The
`matchespattern` function returns `true` if the first parameter evaluates
to a string matching that regular expression, using syntax and semantics
of ECMAScript regular expressions, otherwise it
returns `false`.
If the optional third parameter is provided, it MUST evaluate to a string
consisting of ECMAScript regular expression flags to modify the match, otherwise
the function returns `null`.
The [matchesPatternMethodCallExpr]{.abnf} syntax rule defines how the `matchespattern`
function is invoked.

::: example
Example ##ex: all customers with a `CompanyName` that match the
(percent-encoded) regular expression `^A.*e$`
```
http://host/service/Customers?$filter=matchespattern(CompanyName,'%5EA.*e$')
```
:::

::: example
Example ##ex: all customers with a `FormattedAddress` that contains a line ending with `berg` or ends with `berg`
```
http://host/service/Customers?$filter=matchespattern(FormattedAddress,'berg$','m')
```
:::

##### ##subsubsubsubsec `tolower`

The `tolower` function has the following signature:

```
Edm.String tolower(Edm.String)
```

The `tolower` function returns the input parameter string value with all
uppercase characters converted to lowercase according to Unicode rules.
The [toLowerMethodCallExpr]{.abnf} syntax rule defines how the `tolower`
function is invoked.

::: example
Example ##ex: all customers with a `CompanyName` that equals
`alfreds futterkiste` once any uppercase characters have been
converted to lowercase
```
http://host/service/Customers?$filter=tolower(CompanyName) eq 'alfreds futterkiste'
```
:::

##### ##subsubsubsubsec `toupper`

The `toupper` function has the following signature:

```
Edm.String toupper(Edm.String)
```

The `toupper` function returns the input parameter string value with all
lowercase characters converted to uppercase according to Unicode rules.
The [toUpperMethodCallExpr]{.abnf} syntax rule defines how the `toupper`
function is invoked.

::: example
Example ##ex: all customers with a `CompanyName` that equals
`ALFREDS FUTTERKISTE` once any lowercase characters have been
converted to uppercase
```
http://host/service/Customers?$filter=toupper(CompanyName) eq 'ALFREDS FUTTERKISTE'
```
:::

##### ##subsubsubsubsec `trim`

The `trim` function has the following signature:

```
Edm.String trim(Edm.String)
```

The `trim` function returns the input parameter string value with all
leading and trailing whitespace characters, according to Unicode rules,
removed. The [trimMethodCallExpr]{.abnf} syntax rule defines how the `trim`
function is invoked.

::: example
Example ##ex: all customers with a `CompanyName` without leading or
trailing whitespace characters
```
http://host/service/Customers?$filter=trim(CompanyName) eq CompanyName
```
:::

#### ##subsubsubsec Date and Time Functions

##### ##subsubsubsubsec `date`

The `date` function has the following signature:

```
Edm.Date date(Edm.DateTimeOffset)
```

The `date` function returns the date part of the `DateTimeOffset`
parameter value, evaluated in the time zone of the `DateTimeOffset`
parameter value. The [dateMethodCallExpr]{.abnf} syntax rule defines how the `date`
function is invoked.

##### ##subsubsubsubsec `day`

The `day` function has the following signatures:

```
Edm.Int32 day(Edm.Date)
Edm.Int32 day(Edm.DateTimeOffset)
```

The `day` function returns the day component `Date` or `DateTimeOffset`
parameter value, evaluated in the time zone of the `DateTimeOffset`
parameter value. The [dayMethodCallExpr]{.abnf} syntax rule defines how the
`day` function is invoked.

Services that are unable to preserve the offset of `Edm.DateTimeOffset`
values and instead normalize the values to some common time zone (for example
UTC) MUST fail evaluation of the `day` function for literal
`Edm.DateTimeOffset` values that are not stated in the time zone of the
normalized values.

::: example
Example ##ex: all employees born on the 8th day of a month
```
http://host/service/Employees?$filter=day(BirthDate) eq 8
```
:::

##### ##subsubsubsubsec `fractionalseconds`

The `fractionalseconds` function has the following signatures:

```
Edm.Decimal fractionalseconds[(Edm.DateTimeOffset)
Edm.Decimal fractionalseconds(Edm.TimeOfDay)
```

The `fractionalseconds` function returns the fractional seconds
component of the `DateTimeOffset` or `TimeOfDay` parameter value as a
non-negative decimal value less than 1. The
[fractionalsecondsMethodCallExpr]{.abnf} syntax rule defines how the
`fractionalseconds` function is invoked.

::: example
Example ##ex: all employees born less than 100 milliseconds after a full
second of any minute of any hour on any day
```
http://host/service/Employees?$filter=[fractionalseconds(BirthDate) lt 0.1
```
:::

##### ##subsubsubsubsec `hour`

The `hour` function has the following signatures:

```
Edm.Int32 hour(Edm.DateTimeOffset)
Edm.Int32 hour(Edm.TimeOfDay)
```

The `hour` function returns the hour component (`0` to `23`) of the
`DateTimeOffset` or `TimeOfDay` parameter value, evaluated in the time
zone of the `DateTimeOffset` parameter value. The [hourMethodCallExpr]{.abnf}
syntax rule defines how the `hour` function is invoked.

Services that are unable to preserve the offset of `Edm.DateTimeOffset`
values and instead normalize the values to some common time zone (for example
UTC) MUST fail evaluation of the `hour` function for literal
`Edm.DateTimeOffset` values that are not stated in the time zone of the
normalized values.

::: example
Example ##ex: all employees born in hour 4, between 04:00 (inclusive) and
05:00 (exclusive)
```
http://host/service/Employees?$filter=hour(BirthDate) eq 4
```
:::

##### ##subsubsubsubsec `maxdatetime`

The `maxdatetime` function has the following signature:

```
Edm.DateTimeOffset maxdatetime()
```

The `maxdatetime` function returns the latest possible point in time as
a `DateTimeOffset` value. The [maxDateTimeMethodCallExpr]{.abnf}
syntax rule defines how the `maxdatetime` function is invoked.

##### ##subsubsubsubsec `mindatetime`

The `mindatetime` function has the following signature:

```
Edm.DateTimeOffset mindatetime()
```

The `mindatetime` function returns the earliest possible point in time
as a `DateTimeOffset` value. The [minDateTimeMethodCallExpr]{.abnf}
syntax rule defines how the `mindatetime` function is invoked.

##### ##subsubsubsubsec `minute`

The `minute` function has the following signatures:

```
Edm.Int32 minute(Edm.DateTimeOffset)
Edm.Int32 minute(Edm.TimeOfDay)
```

The `minute` function returns the minute component (`0` to `59`) of the
`DateTimeOffset` or `TimeOfDay` parameter value, evaluated in the time
zone of the `DateTimeOffset` parameter value. The [minuteMethodCallExpr]{.abnf}
syntax rule defines how the `minute` function is invoked.

::: example
Example ##ex: all employees born in minute 40 of any hour on any day
```
http://host/service/Employees?$filter=minute(BirthDate) eq 40
```
:::

##### ##subsubsubsubsec `month`

The `month` function has the following signatures:

```
Edm.Int32 month(Edm.Date)
Edm.Int32 month(Edm.DateTimeOffset)
```

The `month` function returns the month component of the `Date` or
`DateTimeOffset` parameter value, evaluated in the time zone of the
`DateTimeOffset` parameter value. The [monthMethodCallExpr]{.abnf} syntax rule
defines how the `month` function is invoked.

Services that are unable to preserve the offset of `Edm.DateTimeOffset`
values and instead normalize the values to some common time zone (for example
UTC) MUST fail evaluation of the `month` function for literal
`Edm.DateTimeOffset` values that are not stated in the time zone of the
normalized values.

::: example
Example ##ex: all employees born in May
```
http://host/service/Employees?$filter=month(BirthDate) eq 5
```
:::

##### ##subsubsubsubsec `now`

The `now` function has the following signature:

```
Edm.DateTimeOffset now()
```

The `now` function returns the current point in time (date and time with
time zone) as a `DateTimeOffset` value. The [nowMethodCallExpr]{.abnf}
syntax rule defines how the `now` function is invoked.

Services are free to choose the time zone for the current point, for example
UTC. Services that are unable to preserve the offset of
`Edm.DateTimeOffset` values and instead normalize the values to some
common time zone SHOULD return a value in the normalized time zone
(for example UTC).

##### ##subsubsubsubsec `second`

The `second` function has the following signatures:

```
Edm.Int32 second(Edm.DateTimeOffset)
Edm.Int32 second(Edm.TimeOfDay)
```

The `second` function returns the second component (`0` to `59` for
regular seconds, and `60` for leap seconds, without the fractional part)
of the `DateTimeOffset` or `TimeOfDay` parameter value. The
[secondMethodCallExpr]{.abnf} syntax rule defines how the `second` function is
invoked.

::: example
Example ##ex: all employees born in second 40 of any minute of any hour on
any day
```
http://host/service/Employees?$filter=second(BirthDate) eq 40
```
:::

##### ##subsubsubsubsec `time`

The `time` function has the following signature:

```
Edm.TimeOfDay time(Edm.DateTimeOffset)
```

The `time` function returns the time part of the `DateTimeOffset`
parameter value, evaluated in the time zone of the `DateTimeOffset`
parameter value. The [timeMethodCallExpr]{.abnf}
syntax rule defines how the `time` function is invoked.

Services that are unable to preserve the offset of `Edm.DateTimeOffset`
values and instead normalize the values to some common time zone (for example
UTC) MUST fail evaluation of the `time` function for literal
`Edm.DateTimeOffset` values that are not stated in the time zone of the
normalized values.

##### ##subsubsubsubsec `totaloffsetminutes`

The `totaloffsetminutes` function has the following signature:

```
Edm.Int32 totaloffsetminutes(Edm.DateTimeOffset)
```

The `totaloffsetminutes` function returns the signed number of minutes
in the time zone offset part of the `DateTimeOffset` parameter value,
evaluated in the time zone of the `DateTimeOffset` parameter value.
The [totalOffsetMinutesMethodCallExpr]{.abnf}
syntax rule defines how the `totaloffsetminutes` function is invoked.

##### ##subsubsubsubsec `totalseconds`

The `totalseconds` function has the following signature:

```
Edm.Decimal totalseconds(Edm.Duration)
```

The `totalseconds` function returns the duration of the value in total
seconds, including fractional seconds. The [totalSecondsMethodCallExpr]{.abnf}
syntax rule defines how the `totalseconds` function is invoked.

##### ##subsubsubsubsec `year`

The `year` function has the following signatures:

```
Edm.Int32 year(Edm.Date)
Edm.Int32 year(Edm.DateTimeOffset)
```

The `year` function returns the year component of the `Date` or
`DateTimeOffset` parameter value, evaluated in the time zone of the
`DateTimeOffset` parameter value. The [yearMethodCallExpr]{.abnf} syntax rule
defines how the `year` function is invoked.

Services that are unable to preserve the offset of `Edm.DateTimeOffset`
values and instead normalize the values to some common time zone (for example
UTC) MUST fail evaluation of the `year` function for literal
`Edm.DateTimeOffset` values that are not stated in the time zone of the
normalized values.

::: example
Example ##ex: all employees born in 1971
```
http://host/service/Employees?$filter=year(BirthDate) eq 1971
```
:::

#### ##subsubsubsec Arithmetic Functions

##### ##subsubsubsubsec `ceiling`

The `ceiling` function has the following signatures

```
Edm.Double ceiling(Edm.Double)
Edm.Decimal ceiling(Edm.Decimal)
```

The `ceiling` function rounds the input numeric parameter up to the
nearest numeric value with no decimal component. The
[ceilingMethodCallExpr]{.abnf} syntax rule defines how the `ceiling` function
is invoked.

::: example
Example ##ex: all orders with freight costs that round up to 32
```
http://host/service/Orders?$filter=ceiling(Freight) eq 32
```
:::

##### ##subsubsubsubsec `floor`

The `floor` function has the following signatures

```
Edm.Double floor(Edm.Double)
Edm.Decimal floor(Edm.Decimal)
```

The `floor` function rounds the input numeric parameter down to the
nearest numeric value with no decimal component. The
[floorMethodCallExpr]{.abnf} syntax rule defines how the `floor` function is
invoked.

::: example
Example ##ex: all orders with freight costs that round down to 32
```
http://host/service/Orders?$filter=floor(Freight) eq 32
```
:::

##### ##subsubsubsubsec `round`

The `round` function has the following signatures

```
Edm.Double round(Edm.Double)
Edm.Decimal round(Edm.Decimal)
```

The `round` function rounds the input numeric parameter to the nearest
numeric value with no decimal component. The mid-point between two
integers is rounded away from zero, i.e. 0.5 is rounded to 1 and -0.5 is
rounded to -1. The [roundMethodCallExpr]{.abnf} syntax rule defines how the
`round` function is invoked.

::: example
Example ##ex: all orders with freight costs that round to 32
```
http://host/service/Orders?$filter=round(Freight) eq 32
```
:::

#### ##subsubsubsec Type Functions

##### ##subsubsubsubsec `cast`

The `cast` function has the following signatures:

```
type cast(type)
type cast(expression,type)
```

The single parameter `cast` function returns the current instance cast
to the type specified. The two-parameter `cast` function returns the
object referred to by the expression cast to the type specified.
The [castMethodCallExpr]{.abnf}
syntax rule defines how the `cast` function is invoked.

The `cast` function follows these assignment rules:

1.  The `null` value can be cast to any type.
2.  Primitive types are cast to `Edm.String` or a type definition based on it by using the literal representation used in payloads, and WKT (well-known
    text) format for `Geo` types, see rules
    [fullCollectionLiteral]{.abnf}, [fullLineStringLiteral]{.abnf},
    [fullMultiPointLiteral]{.abnf}, [fullMultiLineStringLiteral]{.abnf},
    [fullMultiPolygonLiteral]{.abnf}, [fullPointLiteral]{.abnf}, and
    [fullPolygonLiteral]{.abnf} in
    [OData-ABNF](#ODataABNF). The cast fails if the target type specifies an insufficient `MaxLength`.
3.  `Edm.String`, or a type definition based on `Edm.String`, can be cast to a primitive type if the string contains a literal representation for the target type.
4.  Numeric primitive types are cast to each other with appropriate rounding. The cast fails if the integer part doesn't fit into the target type.
5.  `Edm.DateTimeOffset`, `Edm.Duration`, and `Edm.TimeOfDay` values can be cast to the same type with a different precision with appropriate rounding.
6.  Non-Unicode string values can be cast to a Unicode string type definition. Unicode string values can be cast to a non-Unicode string type definition if the Unicode string only contains ASCII characters.
7.  Structured types are assignable to their type or a direct or indirect base type.
8.  Collections are cast item by item.
9.  Enumeration types are cast to integer types based on the numeric value of the enumeration member. The cast fails if the numeric value is not in the value range of the target type.
10. Integer types are cast to enumeration types based on the numeric value of the enumeration members of the target type. For non-flag enumeration types the cast fails if there is no enumeration member with the same numeric value as the integer value. For flag enumeration types the cast fails if the integer value is not in the value range of the underlying integer type of the enumeration type.
11. String values containing a representation of a date-time value according to [XML-Schema-2](#XML-Schema2),
    [section 3.3.7 dateTime](https://www.w3.org/TR/xmlschema11-2/#dateTime), can be cast to `Edm.DateTimeOffset`.
    If the string value does not contain a time-zone offset, it is treated as UTC.

If the cast fails, the `cast` function returns `null`.

##### ##subsubsubsubsec `isof`

The `isof` function has the following signatures

```
Edm.Boolean isof(type)
Edm.Boolean isof(expression,type)
```

The single parameter `isof` function returns `true` if the current
instance is assignable to the type specified, according to the
assignment rules for the [`cast`](#cast) function, otherwise it returns
`false`.

The two parameter `isof` function returns `true` if the object referred to
by the expression is assignable to the type specified, according to the
same rules, otherwise it returns `false`.

The [isofExpr]{.abnf} syntax rule defines how the `isof` function is invoked.

::: example
Example ##ex: orders that are also `BigOrders`
```
http://host/service/Orders?$filter=isof(NorthwindModel.BigOrder)
```

```
http://host/service/Orders?$filter=isof($it,NorthwindModel.BigOrder)
```
:::

::: example
Example ##ex: orders of a customer that is a `VIPCustomer`
```
http://host/service/Orders?$filter=isof(Customer,NorthwindModel.VIPCustomer)
```
:::

#### ##subsubsubsec Geo Functions

##### ##subsubsubsubsec `geo.distance`

The `geo.distance` function has the following signatures:

```
Edm.Double geo.distance(Edm.GeographyPoint,Edm.GeographyPoint)
Edm.Double geo.distance(Edm.GeometryPoint,Edm.GeometryPoint)
```

The `geo.distance` function returns the shortest distance between the
two points in the coordinate reference system signified by the two
points' SRIDs. The [distanceMethodCallExpr]{.abnf}
syntax rule defines how the `geo.distance` function is invoked.

##### ##subsubsubsubsec `geo.intersects`

The `geo.intersects` function has the following signatures:

```
Edm.Boolean geo.intersects(Edm.GeographyPoint,Edm.GeographyPolygon)
Edm.Boolean geo.intersects(Edm.GeometryPoint,Edm.GeometryPolygon)
```

The `geo.intersects` function returns `true` if the specified point lies
within the interior or on the boundary of the specified polygon,
otherwise it returns `false`. The [intersectsMethodCallExpr]{.abnf}
syntax rule defines how the `geo.intersects` function is invoked.

##### ##subsubsubsubsec `geo.length`

The `geo.length` function has the following signatures:

```
Edm.Double geo.length(Edm.GeographyLineString)
Edm.Double geo.length(Edm.GeometryLineString)
```

The `geo.length` function returns the total length of its line string
parameter in the coordinate reference system signified by its SRID.
The [geoLengthMethodCallExpr]{.abnf}
syntax rule defines how the `geo.length` function is invoked.

#### ##subsubsubsec Conditional Operators

##### ##subsubsubsubsec `case`

The `case` operator has a comma-separated lists of arguments:

```
expression case(Edm.Boolean:expression, …, Edm.Boolean:expression)
```

Each argument is a pair of expressions separated by a colon (`:`),
where the first expression --- the condition --- MUST be a Boolean
expression, and the second expression --- the result --- may evaluate to
any type. The [caseMethodCallExpr]{.abnf}
syntax rule defines how the `case` operator is invoked.

The `case` operator evaluates the condition in each pair, starting with
the leftmost pair, and stops as soon as a condition evaluates to `true`.
It then returns the value of the result of this pair. It returns `null`
if none of the conditions in any pair evaluates to `true`. Clients can
specify a last pair whose condition is `true` to get a non-`null`
"default/else/otherwise" result.

Boolean expressions containing `DateTimeOffset` or `TimeOfDay` literals without
the optional seconds part will introduce ambiguity for parsers.
Clients SHOULD use whitespace or parentheses to avoid ambiguity.

Clients SHOULD ensure that the results in all pairs are compatible. If
all results are of the same type, the type of the `case` expression is
of that type. If all results are of numeric type, then the type of the
`case` expression is a numeric type capable of representing any of these
expressions according to standard type promotion rules.

Services MAY support `case` expressions containing parameters of
incompatible types, in which case the case expression is treated as
`Edm.Untyped` and its value has the type of the parameter expression
selected by the case statement.

::: example
Example ##ex: compute signum(X)
```
$compute=case(X gt 0:1,X lt 0:-1,true:0) as SignumX
```
:::

#### ##subsubsubsec Lambda Operators

OData defines two operators that evaluate a Boolean expression on a
collection. Both must be prepended with a path expression that
identifies a collection.

4.01 Services MUST support case-insensitive lambda operator names.
Clients that want to work with 4.0 services MUST use lower case lambda
operator names.

The argument of a lambda operator is a case-sensitive lambda variable
name followed by a colon (`:`) and a Boolean expression that uses the
lambda variable name to refer to properties of the instance or of members of the collection
identified by the path expression.

If the name chosen for the lambda variable matches a property name of
the current resource referenced by the resource path, the lambda
variable takes precedence. Clients can prefix properties of the current
resource referenced by the resource path with [`$it`](#it).

Other path expressions in the Boolean expression neither prefixed with
the lambda variable nor `$it` are evaluated in the scope of the
instance or of members of the collection at the origin of the path expression prepended to
the lambda operator.

##### ##subsubsubsubsec `any`

The `any` operator applies a Boolean expression to each member of a
collection and returns `true` if and only if the expression is `true` for
any member of the collection, otherwise it returns `false`. This implies
that the `any` operator always returns `false` for an empty collection.

The `any` operator can be used without an argument expression. This
short form returns `false` if and only if the collection is empty.

::: example
Example ##ex: all `Orders` that have any `Items` with a `Quantity` greater
than `100`
```
http://host/service/Orders?$filter=Items/any(d:d/Quantity gt 100)
```
:::

::: example
Example ##ex: all customers having an order with a deviating shipping
address. The `Address` in the argument expression is evaluated in the
scope of the `Customers` collection.
```
http://host/service/Customers?$filter=Orders/any(o:o/ShippingAddress ne Address)
```
:::

::: example
Example ##ex: all categories along with their products used in some order
with a deviating unit price. The unprefixed `UnitPrice` in the argument
expression is evaluated in the scope of the expanded `Products`.
```
http://host/service/Categories?$expand=Products(
  $filter=OrderItems/any(oi:oi/UnitPrice ne UnitPrice))
```
:::

##### ##subsubsubsubsec `all`

The `all` operator applies a Boolean expression to each member of a
collection and returns `true` if the expression is `true` for all members of
the collection, otherwise it returns `false`. This implies that the `all`
operator always returns `true` for an empty collection.

The `all` operator cannot be used without an argument expression.

::: example
Example ##ex: all `Orders` that have only `Items` with a `Quantity`
greater than `100`
```
http://host/service/Orders?$filter=Items/all(d:d/Quantity gt 100)
```
:::

#### ##subsubsubsec Literals

##### ##subsubsubsubsec Primitive Literals

Primitive literals can appear in the resource path as key property
values, and in the query part, for example, as operands in
[`$filter`](#SystemQueryOptionfilter) expressions. They are represented
according to the [primitiveLiteral]{.abnf} rule in [OData-ABNF](#ODataABNF).
The interpretation of a [timeOfDayLiteral]{.abnf} in which the `second` is omitted
is not defined by this specification. For maximum interoperability, senders
SHOULD always include the `second`.

::: example
Example ##ex: expressions using primitive literals
```
NullValue eq null
```

```
TrueValue eq true
```

```
FalseValue eq false
```

```
Custom.Base64UrlDecode(binary'T0RhdGE') eq 'OData'
```

```
IntegerValue lt -128
```

```
DoubleValue ge 0.31415926535897931e1
```

```
SingleValue eq INF
```

```
DecimalValue eq 34.95
```

```
StringValue eq 'Say Hello,then go'
```

```
DateValue eq 2012-12-03
```

```
DateTimeOffsetValue eq 2012-12-03T07:16:23Z
```

```
DurationValue eq duration'P12DT23H59M59.999999999999S'
```

```
DurationValue eq 'P12DT23H59M59.999999999999S'
```

```
TimeOfDayValue eq 07:59:59.999
```

```
GuidValue eq 01234567-89ab-cdef-0123-456789abcdef
```

```
Int64Value eq 0
```

```
ColorEnumValue eq Sales.Pattern'Yellow'
```

```
ColorEnumValue eq 'Yellow'
```

```
geo.distance(Location,geography'SRID=0;Point(142.1 64.1)')
```
:::

Duration literals in OData 4.0 required prefixing with "`duration`".
Enumeration literals in OData 4.0 required prefixing with the qualified
type name of the enumeration.

In OData 4.01, services MUST support duration and enumeration literals
with or without the type prefix. OData clients that want to operate
across OData 4.0 and OData 4.01 services should always include the
prefix for duration and enumeration types.

##### ##subsubsubsubsec Structured and Collection Literals

Complex literals and collection literals in URLs are represented as JSON
objects and arrays according to the [arrayOrObject]{.abnf} rule in
[OData-ABNF](#ODataABNF). Such literals MUST NOT appear in the path
portion of the URL but can be passed to bound
[functions](#AddressingFunctions) and function imports in path segments
by using [parameter aliases](#ParameterAliases).

Object member values and array items can be expressions, including other
objects and arrays, arithmetic expressions, property names, and of
course primitive values.

Note that the special characters `{`, `}`, `[`, `]`, and `"` MUST be
percent-encoded in URLs although some browsers will accept and pass them
on unencoded.

::: example
Example ##ex: collection of string literals
```
http://host/service/ProductsByColors(colors=@c)?@c=["red","green"]
```
:::

::: example
Example ##ex: check whether a pair of properties has one of several
possible pair values
```
$filter=[FirstName,LastName] in [["John","Doe"],["Jane","Smith"]]
```
:::

Entities are represented as structured literals as described in [#OData-JSON#Entity].
Non-transient entities can alternatively be represented through their [resource path](#ResourcePath).

::: example
Example ##ex: determine the price of an adhoc-defined product
```
http://host/service/Price(Product=@p)?@p={"Color":"red"}
```
:::

##### ##subsubsubsubsec `null`

The `null` literal can be used to compare a value to null, or to pass a
null value to a function.

##### ##subsubsubsubsec `$it`

The `$it` literal can be used in expressions to refer to the current
instance of the resource identified by the resource path. For a
collection-valued resource the current instance is the instance
currently being evaluated by the system query option. For a
single-valued resource it is the resource itself.

It allows comparing properties of related entities to properties of the
current instance in expressions within lambda operators or in
[`$filter`](#SystemQueryOptionfilter) expressions nested within
[`$expand`](#SystemQueryOptionexpand) or
[`$select`](#SystemQueryOptionselect).

It also can be used in [`$filter`](#SystemQueryOptionfilter) and
[`$orderby`](#SystemQueryOptionorderby) expressions on collections of
primitive types to refer to the current primitive instance, but using
the [`$this`](#this) literal is preferred as [`$this`](#this) can also
be used in [`$filter`](#SystemQueryOptionfilter) and
[`$orderby`](#SystemQueryOptionorderby) expressions nested within
[`$select`](#SystemQueryOptionselect).

Note: property names and property paths in
[`$filter`](#SystemQueryOptionfilter) expressions nested within
[`$expand`](#SystemQueryOptionexpand) are evaluated in the context of
the declared type of the expanded navigation property, so property names
and property paths for the current instance of the collection identified
by the resource path MUST be prefixed with `$it/`.

The `$it` literal can also be used as a path prefix to invoke a bound
function overload on the current instance within an expression. Function
names without a path prefix refer to an unbound function overload.

::: example
Example ##ex: email addresses ending with `.com` assuming
`EmailAddresses` is a collection of strings
```
http://host/service/Customers(1)/EmailAddresses?$filter=endswith($it,'.com')
```
:::

::: example
Example ##ex: customers along with their orders that shipped to the same
city as the customer's address. The nested filter expression is
evaluated in the context of Orders; `$it` allows referring to values in
the outer context of Customers.
Note: the nested filter condition could equivalently be expressed as `$it/Address/City eq `[`$this`](#this)`/ShipTo/City`.
```
http://host/service/Customers?$expand=Orders($filter=$it/Address/City eq ShipTo/City)
```
:::

::: example
Example ##ex: products with at least 10 positive reviews.
`Model.PositiveReviews` is a function bound to `Model.Product` returning
a collection of reviews.
```
http://host/service/Products?$filter=$it/Model.PositiveReviews()/$count ge 10
```
:::

##### ##subsubsubsubsec `$root`

The `$root` literal can be used in expressions to refer to resources of
the same service.

::: example
Example ##ex: all employees with the same last name as employee `A1235`
```
http://host/service/Employees?$filter=LastName eq $root/Employees('A1245')/LastName
```
:::

::: example
Example ##ex: products ordered by a set of customers, where the set of
customers is passed as a JSON array containing the resource paths from
`$root` to each customer
```
http://host/service/ProductsOrderedBy(Customers=@c)
  ?@c=[$root/Customers('ALFKI'),$root/Customers('BLAUS')]
```
:::

::: example
Example ##ex: function call returning the average rating of a given employee by their peers (employees in department D1)
```
http://host/service/Employees('A1245')/self.AvgRating(RatedBy=@peers)
  ?@peers=$root/Employees/$filter(Department eq 'D1')
```
:::

##### ##subsubsubsubsec `$this`

The `$this` literal can be used in [`$filter`](#SystemQueryOptionfilter)
and [`$orderby`](#SystemQueryOptionorderby) expressions nested within
[`$expand`](#SystemQueryOptionexpand) and
[`$select`](#SystemQueryOptionselect) for collection-valued properties
and navigation properties. It refers to the current instance of the
collection.

::: example
Example ##ex: select only email addresses ending with `.com`
```
http://host/service/Customers?$select=EmailAddresses($filter=endswith($this,'.com'))
```
:::

#### ##subsubsubsec Path Expressions

Properties and navigation properties of the structured type on which
a common expression is evaluated can be used as operands
or function parameters, as shown in the preceding examples.

Properties of complex properties can be used via the same syntax as in
resource paths, i.e. by specifying the name of a complex property,
followed by a forward slash (`/`) and the name of a property of the
complex property, and so on,

Properties and navigation properties of entities related with a target
cardinality 0..1 or 1 can be used by specifying the navigation property,
followed by a forward slash (`/`) and the name of a property of the
related entity, and so on.

If a complex property is `null`, or no entity is related (in case of
target cardinality 0..1), its value, and the values of its components,
are treated as `null`.

::: example
Example ##ex: similar behavior whether `HeadquarterAddress` is a nullable
complex type or a nullable navigation property
```
Companies(1)/HeadquarterAddress/Street
```
:::

To access properties of derived types, the property name MUST be
prefixed with the qualified name of the derived type on which the
property is defined, followed by a forward slash (`/`), see [addressing
derived types](#AddressingDerivedTypes). If the current instance is not
of the specified derived type, the path expression returns `null`.

If the property or navigation property is not defined for the type of
the resource and that type supports dynamic properties or navigation
properties, then the property or navigation property is treated as `null`
for all instances on which it has no value.

If the property or navigation property is not defined for the type of
the resource and that type does not support dynamic properties or
navigation properties, then the request may be considered malformed.

#### ##subsubsubsec Annotation Values in Expressions

Services MAY support the use of annotation values as operands or
function parameters, and they MAY advertise this by annotating the
entity container with term
[Capabilities.AnnotationValuesInQuerySupported]{.term},
see [OData-VocCap](#ODataVocCap).

Annotation values are referenced by the annotation name which consists
of an at sign (`@`) followed by the qualified term name, optionally
followed by a percent-encoded hash (`%23`) and an annotation qualifier.
The annotation name can be prefixed with a [path
expression](#PathExpressions) leading to the annotated resource or
property.

If an annotation is not applied to the resource or property, then its
value, and the values of its components, are treated as `null`.

::: example
Example ##ex: Return Products that have prices in Euro
```
http://host/service/Products?$filter=Price/@Measures.Currency eq 'EUR'
```
:::

::: example
Example ##ex: Return Employees that have any error messages in the
[Core.Messages]{.term}
annotation
```
http://host/service/Employees?$filter=@Core.Messages/any(m:m/severity eq 'error')
```
:::

Services MAY additionally support the use of the unqualified term name
by defining one or more default namespaces through the
[Core.DefaultNamespace]{.term} annotation
term defined in [OData-VocCore](#ODataVocCore). For more information on
default namespaces, see [#OData-Protocol#DefaultNamespaces].
This short notation however uses the same name pattern as parameter
aliases. If a query option is specified as a [parameter
alias](#ParameterAliases), then any occurrence of the parameter alias
name in an expression MUST evaluate to the parameter alias value and
MUST NOT evaluate to the annotation value of an identical unqualified
term name.

#### ##subsubsubsec Operator Precedence

OData services MUST use the following operator precedence for supported
operators when evaluating [`$filter`](#SystemQueryOptionfilter) and
[`$orderby`](#SystemQueryOptionorderby) expressions. Operators are
listed by category in order of precedence from highest to lowest.
Operators in the same category have equal precedence:

Group|Operator|Description|ABNF Expression
-----|--------|-----------|---------------
Grouping        | `( )`           | Precedence grouping      | [parenExpr]{.abnf}<br>[boolParenExpr]{.abnf}
Primary         | `/`             | Navigation      | [firstMemberExpr]{.abnf}<br>[memberExpr]{.abnf}
                | `has`           | Enumeration Flags     | [hasExpr]{.abnf}
                | `in`            | Is a member of  | [inExpr]{.abnf}
                | `xxx( )`        | Method Call     | [methodCallExpr]{.abnf}<br>[boolMethodCallExpr]{.abnf}<br>[functionExpr]{.abnf}
Unary           | `-`             | Negation        | [negateExpr]{.abnf}
                | `not`           | Logical Negation| [notExpr]{.abnf}
                | `cast( )`       | Type Casting    | [castExpr]{.abnf}
Multiplicative  | `mul`           | Multiplication  | [mulExpr]{.abnf}
                | `div`           | Division        | [divExpr]{.abnf}
                | `divby`         | Decimal Division| [divbyExpr]{.abnf}
                | `mod`           | Modulo          | [modExpr]{.abnf}
Additive        | `add`           | Addition        | [addExpr]{.abnf}
                | `sub`           | Subtraction     | [subExpr]{.abnf}
Relational      | `gt`            | Greater Than    | [gtExpr]{.abnf}
                | `ge`            | Greater than or Equal| [geExpr]{.abnf}
                | `lt`            | Less Than       | [ltExpr]{.abnf}
                | `le`            | Less than or Equal   | [leExpr]{.abnf}
                | `isof`          | Type Testing    | [isofExpr]{.abnf}
Equality        | `eq`            | Equal           | [eqExpr]{.abnf}
                | `ne`            | Not Equal       | [neExpr]{.abnf}
Conditional AND | `and`           | Logical And     | [andExpr]{.abnf}
Conditional OR  | `or`            | Logical Or      | [orExpr]{.abnf}

#### ##subsubsubsec Numeric Promotion

Services SHOULD NOT require explicit cast operations between numeric
types used in comparison expressions. Wherever possible, such
comparisons should be performed using underlying types of sufficient
size.

Services MAY support numeric promotion for arithmetic operations or when
comparing two operands of comparable types by applying the following
rules, in order:
- If either operand is `Edm.Double`, the other operand is converted to type `Edm.Double`.
- Otherwise, if either operand is `Edm.Single`, the other operand is converted to type `Edm.Single`.
- Otherwise, if either operand is of type `Edm.Decimal`, the other operand is converted to `Edm.Decimal`.
- Otherwise, if either operand is `Edm.Int64`, the other operand is converted to type `Edm.Int64`.
- Otherwise, if either operand is `Edm.Int32`, the other operand is converted to type `Edm.Int32`.
- Otherwise, if either operand is `Edm.Int16`, the other operand is converted to type `Edm.Int16`.

Each of these promotions uses the same semantics as a `castExpression`
to promote an operand to the target type.

OData does not define an implicit conversion between string and numeric
types.

### ##subsubsec System Query Option `$filter`

The `$filter` system query option allows clients to filter a collection
of resources that are addressed by a request URL. The expression
specified with `$filter` is evaluated for each resource in the
collection, and only items where the expression evaluates to `true` are
included in the response. Resources for which the expression evaluates
to `false` or to `null`, or which reference properties that are unavailable
due to permissions, are omitted from the response.

The [OData-ABNF](#ODataABNF) [filter]{.abnf} syntax rule defines the formal
grammar of the `$filter` query option.

### ##subsubsec System Query Option `$expand`

The `$expand` system query option specifies the related resources or
media streams to be included in line with retrieved resources.

The [OData-ABNF](#ODataABNF) [expand]{.abnf} syntax rule defines the formal
grammar of the `$expand` query option.

The value of `$expand` is a comma-separated list of expand items. Each
expand item is evaluated relative to the retrieved resource being
expanded. An expand item is either a path or one of the symbols `*` or
`$value`.

A path consists of segments separated by a forward slash (`/`). Segments
are either names of single- or collection-valued complex properties,
[instance annotations](#AnnotationValuesinExpressions), or [type-cast segments](#AddressingDerivedTypes)
consisting of the qualified name of a structured type that is
derived from the type identified by the preceding path segment to reach
properties defined on the derived type.

A path can end with
- the name of a stream property to include
that stream property,
- a star (`*`) to expand all navigation
properties of the identified instances of a structured type, optionally followed by
`/$ref` to expand only entity references, or
- a navigation property to expand the
related entity or entities, optionally followed by a [type-cast segment](#AddressingDerivedTypes)
to expand only related entities of that derived type or one of its
sub-types, optionally followed by `/$ref` to expand only entity
references, or `/$count`, optionally with [`$filter`](#SystemQueryOptionfilter) and/or [`$search`](#SystemQueryOptionsearch) [expand options](#ExpandOptions), to return only the count of matching entities.
- an entity-valued instance annotation to
expand the related entity or entities, optionally followed by a
[type-cast segment](#AddressingDerivedTypes) to expand only related entities of that derived type
or one of its sub-types.

A path MUST NOT appear in more than one expand item.

If a structured type traversed by the path supports neither dynamic
properties nor instance annotations, then a corresponding property
segment MUST specify a declared property of that structured type.
Otherwise, if a traversed type does support dynamic navigation
properties or instance annotations and the corresponding property
segment does not specify a declared property, then the expanded property
appears only for those instances on which it has a value.

::: example
Example ##ex: expand a navigation property of an entity type
```
http://host/service/Products?$expand=Category
```
:::

::: example
Example ##ex: expand a navigation property of a complex type
```
http://host/service/Customers?$expand=Addresses/Country
```
:::

::: example
Example ##ex: all categories and for each category the number of all
related products
```
http://host/service/Categories?$expand=Products/$count
```
:::

::: example
Example ##ex: all categories and for each category the number of all
related blue products
```
http://host/service/Categories?$expand=Products/$count($search=blue)
```
:::

To retrieve entity references instead of the related entities, append
`/$ref` to the navigation property name or [type-cast segment](#AddressingDerivedTypes) following a navigation property name.
The [Expand Options](#ExpandOptions) [`$filter`](#SystemQueryOptionfilter),
[`$search`](#SystemQueryOptionsearch),
[`$skip`](#SystemQueryOptionstopandskip), and
[`$top`](#SystemQueryOptionstopandskip) can be used to limit the collection of expanded entity references, and
[`$count`](#SystemQueryOptioncount) can be used to include the count of
expanded entity references.

::: example
Example ##ex: all categories and for each category the references of all
related products
```
http://host/service/Categories?$expand=Products/$ref
```
:::

::: example
Example ##ex: all categories and for each category the references of all
related products of the derived type `Sales.PremierProduct`
```
http://host/service/Categories?$expand=Products/Sales.PremierProduct/$ref
```
:::

::: example
Example ##ex: all categories and for each category the references of all
related premier products with a current promotion equal to `null`
```
http://host/service/Categories
  ?$expand=Products/Sales.PremierProduct/$ref($filter=CurrentPromotion eq null)
```
:::

It is also possible to expand all declared and dynamic navigation
properties using a star (`*`). To retrieve references to all related
entities use `*/$ref`, and to expand all related entities with a certain
distance use the star operator with the `$levels` [Expand Option](#ExpandOptionlevels). 
The star operator can be combined with explicitly named navigation properties,
which take precedence over the star operator.

The star operator does not implicitly include stream properties.

::: example
Example ##ex: expand `Supplier` and include references for all other
related entities
```
http://host/service/Categories?$expand=*/$ref,Supplier
```
:::

Specifying a stream property includes the media stream inline according
to the specified format.

::: example
Example ##ex: include Employee's `Photo` stream property along with other
properties of the customer
```
http://host/service/Employees?$expand=Photo
```
:::

Specifying `$value` for a media entity includes the media entity's
stream value inline according to the specified format.

::: example
Example ##ex: Include the Product's media stream along with other
properties of the product
```
http://host/service/Products?$expand=$value
```
:::

#### ##subsubsubsec Expand Options

Query options can be applied to an expanded navigation property by
appending a semicolon-separated list of query options, enclosed in
parentheses, to the navigation property name.
The system query option, irrespective of casing or whether or not it is prefixed with a `$`,
MUST NOT be specified more than once in the list.
Allowed system query options are
[`$compute`](#SystemQueryOptioncompute),
[`$select`](#SystemQueryOptionselect),
`$expand`, and
[`$levels`](#ExpandOptionlevels) for all navigation properties, plus
[`$filter`](#SystemQueryOptionfilter),
[`$orderby`](#SystemQueryOptionorderby),
[`$skip`](#SystemQueryOptionstopandskip), [`$top`](#SystemQueryOptionstopandskip),
[`$count`](#SystemQueryOptioncount), and
[`$search`](#SystemQueryOptionsearch)
for collection-valued navigation properties.

::: example
Example ##ex: all categories and for each category all related products
with a discontinued date equal to `null`
```
http://host/service/Categories?$expand=Products($filter=DiscontinuedDate eq null)
```
:::

[Cyclic navigation properties]{id=ExpandOptionlevels} (whose target type is identical or can be
cast to its source type) can be recursively expanded using the special
`$levels` expand option. The value of the `$levels` expand option is either a positive
integer to specify the number of levels to expand, or the literal string
`max` to specify the maximum expansion level supported by that service.
A `$levels` option with a value of 1 specifies a single expand with no
recursion.

::: example
Example ##ex: all employees with their manager, manager's manager, and
manager's manager's manager
```
http://host/service/Employees?$expand=ReportsTo($levels=3)
```
:::

::: example
Example ##ex: expand all related entities and their related entities
```
http://host/service/Categories?$expand=*($levels=2)
```
:::

### ##subsubsec System Query Option `$select`

The `$select` system query option allows clients to request a specific
set of properties for each entity or complex type.

The `$select` query option is often used in conjunction with the
[`$expand`](#SystemQueryOptionexpand) system query option, to define the
extent of the resource graph to return (`$expand`) and then specify a
subset of properties for each resource in the graph (`$select`).
Expanded navigation properties MUST be returned, even if they are not
specified in `$select`.

The [OData-ABNF](#ODataABNF) [select]{.abnf} syntax rule defines the formal
grammar of the `$select` query option.

The value of `$select` is a comma-separated list of select items. Each
select item is one of the following:
- a path, optionally followed by a [count segment](#AddressingtheCountofaCollection) or [select options](#SelectOptions)
- a star (`*`), to include all declared or
dynamic properties of the type, or
- a qualified schema name followed by a
dot (`.`) followed by a star (`*`) to request all applicable actions or
functions from that schema

A path consists of segments separated by a forward slash (`/`). Segments
are either names of single- or collection-valued complex properties,
[instance annotations](#AnnotationValuesinExpressions), or
[type-cast segments](#AddressingDerivedTypes) consisting of the qualified name of a structured type that is
derived from the type identified by the preceding path segment to reach
properties defined on the derived type.

A path can end with
- the name of a property or
non-entity-valued instance annotation of the identified
instance of a structured type,
- the qualified name of a bound action,
- the qualified name of a bound function
to include all matching overloads, or
- the qualified name of a bound function
followed by parentheses containing the comma-separated lists of
non-binding parameters identifying a single overload.

The `$select` system query option is interpreted relative to the entity
type or complex type of the resources identified by the resource path
section of the URL. Each select item in the `$select` clause indicates
that the response MUST include the declared or dynamic properties,
actions and functions identified by that select item.
If a select item is a path expression traversing an entity or complex property that is `null` on an instance, then
the null-valued entity or complex property is included and represented as `null`.
The simplest form of a select item explicitly requests a property defined on the entity
type of the resources identified by the resource path section of the URL.

::: example
Example ##ex: rating and release date of all products
```
http://host/service/Products?$select=Rating,ReleaseDate
```
:::

It is also possible to request all declared and dynamic structural
properties using a star (`*`).

::: example
Example ##ex: all structural properties of all products
```
http://host/service/Products?$select=*
```
:::

If the select item is not defined for the type of the resource, and that
type supports dynamic properties or instance annotations, then the
property is treated as `null` for all instances on which it is not
defined.

If the select item is not defined for the type of the resource, and that
type does not support dynamic properties or instance annotations, then
the request is considered malformed.

If the select item is an instance annotation of type entity or
collection of entities, then the request is considered malformed.
Entity-valued annotations can be included using
[`$expand`](#SystemQueryOptionexpand).

If the select item is a navigation property, then the corresponding
navigation link is represented in the response. If the navigation
property also appears in an [`$expand`](#SystemQueryOptionexpand) query
option, then it is additionally represented as inline content. This
inline content can itself be restricted with a nested `$select` query
option, see [section ##SystemQueryOptionfilter].

::: example
Example ##ex: name and description of all products, plus name of expanded
category
```
http://host/service/Products?$select=Name,Description
  &$expand=Category($select=Name)
```
:::

The select item MUST be prefixed with a qualified structured type name
in order to select a property defined on a type derived from the type of
the resource segment.

A select item that is a complex type or collection of complex type can
be followed by a forward slash, an optional [type-cast segment](#AddressingDerivedTypes),
and the name of a property of the complex type (and so on for nested complex types).

::: example
Example ##ex: the `AccountRepresentative` property of any supplier that
is of the derived type `Namespace.PreferredSupplier`, together with the
`Street` property of the complex property
`Address`, and the Location property of the derived complex type `Namespace.AddressWithLocation`
```
http://host/service/Suppliers
  ?$select=Namespace.PreferredSupplier/AccountRepresentative,
           Address/Street,Address/Namespace.AddressWithLocation/Location
```
:::

If the path ends in a collection of primitive or complex values, 
then the [count segment](#AddressingtheCountofaCollection) (`/$count`),
optionally followed by the 
[Select Options](#SelectOptions) [`$filter`](#SystemQueryOptionfilter)
and/or [`$search`](#SystemQueryOptionsearch), can be 
appended to the path in order to return only the count of the matching items.

::: example
Example ##ex: for each `Customer`, return the `ID` and the count of `Addresses`
```
http://host/service/Customers?$select=ID,Addresses/$count
```
:::

::: example
Example ##ex: for each `Customer`, return the `ID` and the count of `Addresses` whose `City` starts with 'H'
```
http://host/service/Customers?$select=ID,Addresses/$count($filter=startswith(City,'H'))
```
:::

Any structural property, non-expanded navigation property, or operation
not requested as a select item (explicitly or via a star) SHOULD be
omitted from the response.

Annotations requested in `$select` MUST be included in the response;
`$select` overrules the `include-annotations` preference (see
[#OData-Protocol#Preferenceincludeannotationsodataincludeannotations]) for the explicitly requested annotations.
Additional annotations matching the preference can be included even if
not requested via `$select`. The `Preference-Applied` response header
only reflects the set of annotations included due to the
`include-annotations` preference and not those only included due to
`$select`.

If any select item (including a star) is specified, actions and
functions SHOULD be omitted unless explicitly requested.

If an action or function is requested as a select item, either
explicitly by using its qualified name, or implicitly by requesting all
operations in a schema, then the service includes information about how
to invoke that operation for each entity identified by the last path
segment in the request URL for which the operation can be bound.

If an action or function is requested in a select item using its
qualified name and that operation cannot be bound to the entities
requested, the service MUST ignore the select item.

::: example
Example ##ex: the `ID` property, the `ActionName` action defined in
`Model` and all actions and functions defined in the `Model2` for each
product if those actions and functions can be bound to that product
```
http://host/service/Products?$select=ID,Model.ActionName,Model2.*
```
:::

When multiple select item exist in a `$select` clause, then the total set
of properties, open properties, navigation properties, actions and
functions to be returned is equal to the union of the set of those
identified by each select item.

#### ##subsubsubsec Select Options

Query options can be applied to a select item that is a path to a single
complex value or a collection of primitive or complex values by
appending a semicolon-separated list of query options, enclosed in
parentheses, to the select item. The allowed sytem query options are
[`$compute`](#SystemQueryOptioncompute) and
[`$select`](#SystemQueryOptionselect) for all complex-typed properties, plus
[`$filter`](#SystemQueryOptionfilter),
[`$orderby`](#SystemQueryOptionorderby),
[`$skip`](#SystemQueryOptionstopandskip), [`$top`](#SystemQueryOptionstopandskip),
[`$count`](#SystemQueryOptioncount), and
[`$search`](#SystemQueryOptionsearch)
for collection-valued properties. The same property MUST NOT have
select options specified in more than one place in a request.

If the select item is a complex type, or collection of complex types, then
it can include a nested select.

::: example
Example ##ex: return the City from the Address complex type
```
http://host/service/Customers?$select=Address($select=City)
```
:::

::: example
Example ##ex: select up to five addresses whose `City` starts with an
`H`, sorted, and with the `Country` expanded
```
http://host/service/Customers
  ?$select=Addresses($filter=startswith(City,'H');$top=5;
                     $orderby=Country/Name,City,Street)
  &$expand=Addresses/Country
```
:::

### ##subsubsec System Query Option `$orderby`

The `$orderby` system query option allows clients to request resources
in a particular order.

The semantics of `$orderby` are covered in [#OData-Protocol#SystemQueryOptionorderby].

The [OData-ABNF](#ODataABNF) [orderby]{.abnf} syntax rule defines the formal
grammar of the `$orderby` query option.

### ##subsubsec System Query Options `$top` and `$skip`

The `$top` system query option requests the number of items in the
queried collection to be included in the result. The `$skip` query
option requests the number of items in the queried collection that are
to be skipped and not included in the result. A client can request a
particular page of items by combining `$top` and `$skip`.

The semantics of `$top` and `$skip` are covered in
[#OData-Protocol#SystemQueryOptiontop] and [#OData-Protocol#SystemQueryOptionskip].
The [OData-ABNF](#ODataABNF) [top]{.abnf}
and [skip]{.abnf} syntax rules define the formal grammar of the `$top` and
`$skip` query options respectively.

### ##subsubsec System Query Option `$count`

The `$count` system query option allows clients to request a count of
the matching resources included with the resources in the response. The
`$count` query option has a Boolean value of `true` or `false`.

The semantics of `$count` is covered in [#OData-Protocol#SystemQueryOptioncount].

### ##subsubsec System Query Option `$search`

The `$search` system query option allows clients to request items within
a collection matching a free-text [search
expression](#SearchExpressions).

The `$search` query option can be applied to a URL representing a
collection of entity, complex, or primitive typed instances, to return
all matching items within the collection. Applying the `$search` query
option to the [`$all`](#AddressingAllEntitiesinaService) resource
requests all matching entities in the service.

If both `$search` and [`$filter`](#SystemQueryOptionfilter) are applied
to the same request, the results include only those items that match
both criteria.

The [OData-ABNF](#ODataABNF) [search]{.abnf} syntax rule defines the formal
grammar of the `$search` query option.

::: example
Example ##ex: all products that are blue or green. It is up to the
service to decide what makes a product blue or green.
```
http://host/service/Products?$search=blue OR green
```
:::

Clients should be aware that services MAY implement search based on a different
syntax provided they advertise this with the annotation `SearchRestrictions/SearchSyntax` defined in
[OData-VocCap](#ODataVocCap). Services MAY treat keywords defined in the standard
[OData-ABNF](#ODataABNF) `$search` syntax as terms to be matched if they are
listed in `SearchRestrictions/UnsupportedExpressions`.

#### ##subsubsubsec Search Expressions

Search expressions are used within the
[`$search`](#SystemQueryOptionsearch) system query option to request
entities matching the specified expression.
Leading and trailing spaces are not considered part of the search expression.

*Terms* can be any single word to be matched within the expression.

Terms enclosed in double-quotes comprise a *phrase*.

Each individual term or phrase comprises a Boolean expression that
returns `true` if the term or phrase is matched, otherwise `false`. The
semantics of what is considered a match is dependent upon the service.

Expressions enclosed in parenthesis comprise a *group expression*.

The search expression can contain any number of terms, phrases, or group
expressions, along with the case-sensitive keywords `NOT`, `AND`, and
`OR`, evaluated in that order.

Expressions prefaced with `NOT` evaluate to `true` if the expression is
not matched, otherwise `false`.

Two expressions not enclosed in quotes and separated by a space are
equivalent to the same two expressions separated by the `AND` keyword.
Such expressions evaluate to `true` if both expressions evaluate to
`true`, otherwise `false`.

Expressions separated by an `OR` evaluate to `true` if either of the
expressions evaluate to `true`, otherwise `false`.

To support type-ahead use cases, incomplete search expressions can be
sent as OData string literals enclosed in single-quotes, and
single-quotes within the search expression doubled.
Such an expression can also be used to search for double quotes: `?$search='"'`.

The [OData-ABNF](#ODataABNF) [searchExpr]{.abnf} syntax rule defines the formal
grammar of the search expression.

### ##subsubsec System Query Option `$format`

The `$format` system query option allows clients to request a response
in a particular format and is useful for clients without access to
request headers for standard content-type negotiation. Where present
`$format` takes precedence over standard content-type negotiation.

The semantics of `$format` is covered in [#OData-Protocol#SystemQueryOptionformat].

The [OData-ABNF](#ODataABNF) [format]{.abnf} syntax rule defines the formal
grammar of the `$format` query option.

### ##subsubsec System Query Option `$compute`

The `$compute` system query option allows clients to define computed
properties that can be used in a [`$select`](#SystemQueryOptionselect)
or within a [`$filter`](#SystemQueryOptionfilter) or
[`$orderby`](#SystemQueryOptionorderby) expression.

The `$compute` system query option is interpreted relative to the entity
type or complex type of the resources identified by the resource path
section of the URL.

The value of `$compute` is a comma-separated list of compute
instructions, each consisting of a [common
expression](#CommonExpressionSyntax) followed by the keyword `as`,
followed by the name for the computed dynamic property. This name MUST
differ from the names of declared or dynamic properties of the
identified resources.
Services MAY support compute instructions that address
dynamic properties added by other compute instructions within the same
`$compute` system query option, provided that the service can determine an evaluation sequence.

The [OData-ABNF](#ODataABNF) [compute]{.abnf} syntax rule defines the formal
grammar of the `$compute` query option.

Computed properties SHOULD be included as dynamic properties in the
result and MUST be included if `$select` is specified with the computed
property name, or star (`*`).

::: example
Example ##ex: compute total price for order items
```
http://host/service/Orders(10)/Items
  ?$select=Product/Description,Total
  &$filter=Total gt 100
  &$orderby=Total
  &$compute=Product/Price mul Quantity as Total
```
:::

### ##subsubsec System Query Option `$index`

The `$index` system query option allows clients to do a positional
insert into a collection annotated with the
[Core.PositionalInsert]{.term}
term (see [OData-VocCore](#ODataVocCore)). The value of the `$index`
system query option is the zero-based ordinal position where the item is
to be inserted. The ordinal of items within the collection greater than
or equal to the inserted position are increased by one. A negative
ordinal indexes from the end of the collection, with -1 representing an
insert at the end of the collection.

The [OData-ABNF](#ODataABNF) [index]{.abnf} syntax rule defines the formal
grammar of the `$index` query option.

### ##subsubsec System Query Option `$schemaversion`

The `$schemaversion` system query option allows clients to specify the
version of the schema against which the request is made. The semantics
of `$schemaversion` is covered in [#OData-Protocol#SystemQueryOptionschemaversion].

The [OData-ABNF](#ODataABNF) [schemaversion]{.abnf} syntax rule defines the
formal grammar of the `$schemaversion` query option

## ##subsec Custom Query Options

Custom query options provide an extensible mechanism for
service-specific information to be placed in a URL query string. A
custom query option is any query option of the form shown by the rule
[customQueryOption]{.abnf} in [OData-ABNF](#ODataABNF).

Custom query options MUST NOT begin with a `$` or `@` character.

::: example
Example ##ex: service-specific custom query option `debug-mode`
```
http://host/service/Products?debug-mode=true
```
:::

## ##subsec Parameter Aliases

Parameter aliases can be used in place of literal values in entity keys,
[function](#AddressingFunctions) parameters, or within a
[`$filter`](#SystemQueryOptionfilter) or
[`$orderby`](#SystemQueryOptionorderby) expression.

Parameter aliases MUST start with an `@` character, see rule
[parameterAlias]{.abnf} in [OData-ABNF](#ODataABNF).

The semantics of parameter aliases are covered in
[#OData-Protocol#ParameterAliases]. The [OData-ABNF](#ODataABNF) rule
[aliasAndValue]{.abnf} defines the formal grammar for passing parameter alias
values as query options.

::: example
Example ##ex:
```
http://host/service/Movies?$filter=contains(@word,Title)&@word='Black'
```
:::

::: example
Example ##ex:
```
http://host/service/Movies?$filter=Title eq @title&@title='Wizard of Oz'
```
:::

::: example
Example ##ex: JSON array of strings as parameter alias value --- note that
`[`, `]`, and `"` need to be percent-encoded in real URLs, the
clear-text representation used here is just for readability
```
http://host/service/Products/Model.WithIngredients(Ingredients=@i)
  ?@i=["Carrots","Ginger","Oranges"]
```
:::

-------

# ##sec Conformance

The conformance requirements for OData clients and services are
described in [#OData-Protocol#Conformance].
