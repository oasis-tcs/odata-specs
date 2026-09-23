
-------

# ##sec Compact Representations

This section defines the two representations that this format adds to
[OData-JSON](#ODataJSON): the *positional representation*, which conveys
the values of an instance's properties as the items of a JSON array, and
the *wrapper object*, which conveys whatever needs a name in a place where
a positional representation has no room for one. Everything else in this
document is expressed in terms of these two.

## ##subsec Positional Representation

A structured instance -- an entity or a complex value -- is represented as
one of the following:

- a JSON object, as defined in [OData-JSON](#ODataJSON), whose name/value
  pairs are the instance's properties together with the annotations and
  control information that apply to the instance and to those properties;
- a JSON array, the *positional representation*, whose items are the
  values at the positions of the instance's [positional property
  list](#positionalpropertylist); or
- a [wrapper object](#wrapperobject), which carries the positional
  representation under the reserved name `$`, together with the
  annotations and control information that apply to the instance and any
  of its properties that are not in the positional property list, by name.

The first is defined by [OData-JSON](#ODataJSON) and is unchanged; the
second and the third are what this format adds.

In a positional representation a property name is not transmitted with the
value; the property a value belongs to is identified by the position of
the value within the array.

::: example
Example ##ex_first: the same entity in the format defined by
[OData-JSON](#ODataJSON) and in its positional representation
```json
{
  "@context": "$metadata#Customers(ID,Name,City)/$entity",
  "ID": "ALFKI",
  "Name": "Alfreds Futterkiste",
  "City": "Berlin"
}
```
```json
{
  "@context": "$metadata#Customers(ID,Name,City)/$entity",
  "$": ["ALFKI", "Alfreds Futterkiste", "Berlin"]
}
```
:::

A producer MAY choose one of these representations for one instance in a
payload and another for the next; see the [superset
principle](#supersetprinciple). A consumer distinguishes them by the JSON
type of the instance: a JSON array is a positional representation, and a
JSON object is either a wrapper object or the representation defined by
[OData-JSON](#ODataJSON), told apart as described in [section
##TheWrapperObject].

A positional representation is not self-describing. A consumer needs the
context URL to know which property each position holds, and the metadata
document that context URL references to know what the value at a position
means --- in particular whether a property is collection-valued, since a
JSON array at a position is the positional representation of a single
structured value where the property is single-valued, and the collection
of its values where it is not. This is a stronger dependency on the
metadata document than [OData-JSON](#ODataJSON) creates, where the name of
a property accompanies its value.

::: example
Example ##ex_cardinality: two payloads whose positional representations
are identical in shape and differ only in what the metadata says. In the
first, `Address` is single-valued, so the array at its position is one
complex value; in the second, `Addresses` is collection-valued, so the
array at its position is a collection with one member, which is itself a
positional representation
```json
{
  "@context": "$metadata#Customers(Name,Address(City,PostalCode))",
  "$": [
    ["Alfreds Futterkiste", ["Berlin", "12209"]]
  ]
}
```
```json
{
  "@context": "$metadata#Customers(Name,Addresses(City,PostalCode))",
  "$": [
    ["Alfreds Futterkiste", [["Berlin", "12209"]]]
  ]
}
```
:::

## ##subsec Positional Property List

The *positional property list* of a structured instance is the ordered
list of what its positional representation conveys: the instance's
properties, and --- where the select-list names them --- explicitly selected
instance annotations, as described in [section ##SelectedAnnotations], and
bound operations, as described in [section ##BoundOperations]. Properties
are the ordinary case, and the list is named for them.

If an instance is represented positionally:

- the number of items in the array MUST equal the number of items in the
  positional property list, and
- item *n* of the array MUST be the value of item *n* of the positional
  property list, formatted as described in [section ##PositionValues].

A producer MUST NOT omit an item, MUST NOT add an item, and MUST NOT
reorder items. A property whose value is null is represented by the JSON
value `null` in its position; a property that has no value is represented
as described in [section ##PositionValues].

Note that this is a stricter requirement than the one
[OData-JSON](#ODataJSON) places on a JSON object representation, where a
producer may omit a property whose value it does not wish to transmit. In a
positional representation there is no way to omit a value without
shifting every subsequent value, so the positional property list must be
transmitted in full. If a producer wishes to transmit fewer properties, it
narrows the select-list in the context URL.

## ##subsec Determining the Positional Property List

The positional property list of an instance is determined by the
select-list, as defined in [#OData-Protocol#ContextURL], that applies to
that instance.

The context URL of a compact payload MUST contain a select-list, and that
select-list MUST enumerate every property conveyed positionally, at every
level of nesting. In particular:

- the select-list MUST NOT be omitted, and MUST NOT be empty;
- the select-list MUST enumerate every structural property and every
  expanded navigation property conveyed positionally, by name, including
  where [OData-Protocol](#ODataProtocol) would allow a select-list
  containing only expanded navigation properties to select the structural
  properties implicitly;
- the select-list MUST NOT contain the shortcut `*`, nor the shortcut
  `{namespace}.*` for the bound operations of a schema;
- a select-item for a structural or navigation property of a structured
  type whose value is conveyed positionally MUST carry a nested
  select-list, rather than the empty parentheses that
  [OData-Protocol](#ODataProtocol) permits.

This is a requirement on the *context URL*, not on the request. A client
may use `$select=*`, or omit `$select` altogether, or use `$expand=*`; the
service resolves the request as it normally would and then enumerates, in
the context URL, the properties it has actually placed in the positional
representation. A service may still convey further properties, such as
dynamic properties of an open type, by name in a [wrapper
object](#wrapperobject); see [section ##OpenTypesandDynamicProperties].

The reason for this requirement is that no other route to the positional
property list is well defined. Deriving it from the CSDL document would
require the consumer to know which version of that document the producer
used, and to rely on the order in which properties are declared there,
which [OData-CSDL](#ODataCSDL) does not make significant. A service always
knows which metadata it used; a client composing a request payload may not,
and cannot determine it from the payload alone. Enumerating the
select-list places the information with the party that reliably has it.

The same reasoning excludes both shortcuts. `*` and `{namespace}.*` name a
rule for finding a set rather than the set itself, so the producer and the
consumer would each have to resolve it, from a metadata document whose
version they need not agree on and whose declaration order
[OData-CSDL](#ODataCSDL) does not make significant. Neither shortcut says
how many positions it occupies or in what order. The party writing the
select-list is the service, which by then knows exactly what it has placed
at each position, so it enumerates.

Let *T* be the type of the instance and *S* the sequence of select-list
items, in the order in which they appear in the context URL, that applies
to the instance. The positional property list is determined as follows:

1. Each item of *S* that begins with a type-cast segment --- a qualified
   type name followed by a forward slash --- is removed from *S* unless *T*
   is that type or is derived from it. From each such item that remains,
   the leading type-cast segment is removed.

2. The items of *S* are grouped as described in [section
   ##GroupingofSelectItems]. Each group occupies exactly one position,
   at the position of the first of its items.

3. The positional property list is the resulting sequence of groups, in
   order.

Step 1 is what makes the positional property list depend on the instance
and not only on the context URL: two instances of different types in one
collection have different positional property lists. See [section
##DerivedTypes].

::: example
Example ##ex: a select-list determines both the membership and the order
of the positional property list; the two requests differ only in the
order of the `$select` items and produce different positional
representations of the same entity
```
GET ~/Customers('ALFKI')?$select=Name,ID
```
```json
{
  "@context": "$metadata#Customers(Name,ID)/$entity",
  "$": ["Alfreds Futterkiste", "ALFKI"]
}
```
```
GET ~/Customers('ALFKI')?$select=ID,Name
```
```json
{
  "@context": "$metadata#Customers(ID,Name)/$entity",
  "$": ["ALFKI", "Alfreds Futterkiste"]
}
```
:::

::: example
Example ##ex_noselect: the request specifies no `$select`, so the service
resolves it to the properties it chooses to return and enumerates those in
the context URL. The client need not have asked for them by name; the
context URL still says exactly what each position holds.
```
GET ~/Customers
```
```json
{
  "@context": "$metadata#Customers(ID,Name,Address(Street,City,PostalCode))",
  "$": [
    ["ALFKI", "Alfreds Futterkiste", ["Obere Str. 57", "Berlin", "12209"]],
    ["ANATR", "Ana Trujillo", ["Avda. de la Constitución 2222", "México D.F.", "05021"]]
  ]
}
```
:::

::: example
Example ##ex_expandonly: a request that expands a navigation property
without selecting anything. In the format defined by
[OData-JSON](#ODataJSON) the context URL would be
`$metadata#Customers(Orders(ID))`, leaving the structural properties
implicit; a compact payload enumerates them.
```
GET ~/Customers?$expand=Orders($select=ID)
```
```json
{
  "@context": "$metadata#Customers(ID,Name,Address(Street,City,PostalCode),Orders(ID))",
  "$": [
    [
      "ALFKI", "Alfreds Futterkiste", ["Obere Str. 57", "Berlin", "12209"],
      [[10643], [10692]]
    ]
  ]
}
```
:::

## ##subsec Grouping of Select Items

A select-list may contain several items that address the same property of
*T*: [OData-Protocol](#ODataProtocol) represents a selected sub-property
of a complex property using path syntax, so selecting two sub-properties
of the same complex property yields two items sharing a first path
segment. The positional representation gives such a property a single
position.

The *first segment* of a select-item is the item with any `(...)` or
`+(...)` suffix removed, truncated before the first forward slash (`/`).
Leading type-cast segments have already been removed by step 3 of [section
##DeterminingthePositionalPropertyList] and so do not occur here.

Two items of *S* belong to the same group if and only if their first
segments are equal. The group occupies the position of the first of its
items.

If the property addressed by the first segment of a group is of a
structured type, the *nested select-list* of that group is formed by
concatenating, for each item of the group in order:

- for an item of the form `P/rest`, the item `rest`;
- for an item of the form `P(nested)` or `P+(nested)`, the items of
  `nested`;
- for an item of the form `P`, nothing.

The nested select-list MUST NOT be empty, for the reason given in [section
##DeterminingthePositionalPropertyList]: there is no well-defined default
to fall back on.

The nested select-list determines the positional property list of the
instances of that property, applying this section recursively.

::: example
Example ##ex_grouping: two selected sub-properties of the complex
property `Address` share one position, which holds the positional
representation of the complex value
```
GET ~/Customers?$select=Name,Address/City,Address/PostalCode
```
```json
{
  "@context": "$metadata#Customers(Name,Address/City,Address/PostalCode)",
  "$": [
    ["Alfreds Futterkiste", ["Berlin", "12209"]],
    ["Ana Trujillo", ["México D.F.", "05021"]]
  ]
}
```
The positional property list of each `Customer` is (`Name`, `Address`),
and the positional property list of each `Address` is (`City`,
`PostalCode`).
:::

::: example
Example ##ex: a bare item and a suffixed item addressing the same
navigation property form one group and therefore one position
```
$metadata#Employees/Sales.Manager(DirectReports,DirectReports+(FirstName,LastName))
```
The positional property list of each `Manager` is (`DirectReports`).
:::

## ##subsec Nested Context URLs

A [wrapper object](#wrapperobject) MAY carry its own
[`context`](#ControlInformationcontext) control information, and
[OData-JSON](#ODataJSON) requires one where the entity set of a nested
collection cannot be determined from the containing context URL.

Where a nested context URL is present, its select-list determines the
positional property list of the instances it describes, in place of the
nested select-list that [section ##GroupingofSelectItems] would otherwise
derive from the containing context URL. A nested context URL in a compact
payload MUST carry a select-list meeting the requirements of [section
##DeterminingthePositionalPropertyList].

This allows a service to convey positionally a property that the
containing select-list does not describe --- a property carried by name in
a wrapper object, for instance, which occupies no position and therefore
has no nested select-list of its own.

::: example
Example ##ex_nestedcontext: `Addresses` occupies no position, being absent
from the containing select-list, and is carried by name in the wrapper
object. Its own context URL supplies the positional property list of the
addresses
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "$": [
    {
      "$": ["ALFKI", "Alfreds Futterkiste"],
      "Addresses@context": "#Addresses(Street,City)",
      "Addresses": [
        ["Obere Str. 57", "Berlin"],
        ["Bahnhofstraße 8", "Walldorf"]
      ]
    }
  ]
}
```
:::

## ##subsec The Wrapper Object

A positional representation is a JSON array, and a JSON array has no
name/value pairs. Anything that has to be conveyed *by name* alongside a
value therefore has nowhere to go: the annotations and control information
that [OData-JSON](#ODataJSON) attaches to the object representing an
instance, or to the object containing a property; and any property that
cannot be placed in the positional property list at all. The containing
instance is no help, since it may itself be an array.

A *wrapper object* is a JSON object that appears where a value may appear.
Its name/value pairs are

- annotations and control information that apply to that value,
- optionally, the value itself, under the reserved name `$`, and
- optionally, properties of the instance that are not in its positional
  property list, by name.

Where the value is a structured instance, a wrapper object is the JSON
object representation of that instance as defined by
[OData-JSON](#ODataJSON), with the properties in the instance's positional
property list replaced by the single name/value pair `$`. An instance may
thus convey some of its properties by name and the rest by position, and
the wrapper object is what holds the two together.

The name `$` is not a simple identifier ([OData-CSDL](#ODataCSDL)) --- a
simple identifier is at least one character long and begins with an
underscore or a Unicode letter --- so it can never be the name of a declared
or dynamic property, and [OData-JSON](#ODataJSON) never uses it. A consumer
therefore distinguishes a wrapper object from the representation defined by
[OData-JSON](#ODataJSON) as follows:

- a JSON object containing a name/value pair named `$` is a wrapper object;
- a JSON object all of whose name/value pairs are annotations or control
  information is a wrapper object that carries no value;
- any other JSON object is the representation defined by
  [OData-JSON](#ODataJSON).

The value under `$` is whatever representation applies to that value: the
positional representation of a structured instance, a JSON object as
defined in [OData-JSON](#ODataJSON), a JSON array for a collection, or a
JSON primitive where the wrapper stands at the position of a primitive
property. It is not restricted to arrays --- a wrapper carrying an
annotation on a primitive property holds that primitive under `$`.

A property is *carried by name* when it appears as an ordinary name/value
pair of the wrapper object, as [OData-JSON](#ODataJSON) represents it,
instead of occupying a position. This is what allows an instance of an
open type to keep its positional representation while conveying dynamic
properties that could not be placed in the select-list; see [section
##OpenTypesandDynamicProperties].

A property that occupies a position in the instance's positional property
list MUST NOT also be carried by name. Neither MUST anything that applies
to it: the annotations and control information of such a property are
carried in the [wrapper object](#wrapperobject) at its position, as
[section ##PropertyAnnotations] describes, and MUST NOT appear under a
prefixed name in the wrapper object around the instance. A property
carried by name takes its annotations and control information with it,
under the prefixed names that [OData-JSON](#ODataJSON) gives them.

Everything that concerns one property is therefore in one place. A
consumer that has read the value at a position never has to look elsewhere
for something that qualifies it, and one that reads a name/value pair
never has to check whether that property also occupies a position. This is
what [OData-JSON](#ODataJSON) does too, where the annotations of a
property immediately precede that property's value.

Properties carried by name MUST appear after the wrapper object's value
--- the `$` name/value pair --- as required by [section
##PayloadOrderingConstraints]. A consumer reading the payload as a stream
therefore has the whole positional representation in hand before it meets
any property that is not part of it.

A wrapper object MAY appear in each of the places in which a value may
appear:

- as the message body, in which case it carries the payload's
  [`context`](#ControlInformationcontext) and the payload's content;
- at a position in a positional representation, in which case it carries
  the annotations and control information of the property at that
  position, and that property's value;
- as an item of a collection, in which case it carries the annotations and
  control information of that member of the collection, the member itself,
  and any of the member's properties conveyed by name.

A wrapper object that carries no value denotes a property or instance that
has no value, as distinct from one whose value is null. The empty JSON
object `{}` is such a wrapper object: it carries neither annotations nor a
value, and is used at the position of a selected dynamic property that an
instance does not have, see [section ##OpenTypesandDynamicProperties].

The name of the value in a wrapper object is `$`, in every position in
which a wrapper object may appear.

Wherever [OData-JSON](#ODataJSON) specifies that the message body contains
a name/value pair whose name is `value`, that name is also recognized as
the name of the wrapper object's value and denotes the same thing. This
follows from the [superset principle](#supersetprinciple) and grants
nothing beyond what [OData-JSON](#ODataJSON) already requires: the message
bodies in which it applies are exactly those enumerated there, and this
document does not add to them.

Everywhere else, `value` is not the name of a wrapper object's value. In
particular, where [OData-JSON](#ODataJSON) represents the message body as
the instance itself -- for a single entity, a single complex value, or a
single entity reference -- a name/value pair named `value` in that message
body is a *property* named `value`, and a consumer MUST NOT read it as the
value of a wrapper object. A single entity or complex value represented
positionally at the root of the message body therefore uses `$`.

Producers of compact payloads SHOULD use `$` wherever this document
permits a choice. Nothing is saved by `value`, which is the longer of the
two names. What it offers is that a client written for
[OData-JSON](#ODataJSON), which looks for `value` in the message body of a
collection, finds the collection where it expects it --- the [superset
principle](#supersetprinciple) at work, and the only reason to prefer
it.

This restriction is what keeps the two representations distinguishable.
Were `value` also the wrapper's value name at the root of a message body
representing a single entity, a consumer meeting `value` there would have
to consult the metadata to decide which of two readings applies, and for
an entity type declaring a collection-valued property named `value` the
metadata need not settle it either:

```json
{
  "@context": "$metadata#Customers(ID,value)/$entity",
  "value": ["ALFKI", ["red", "green"]]
}
```

Read as a wrapper object, this is the positional representation of a
customer whose `ID` is `ALFKI` and whose `value` property is the
collection `["red", "green"]`. Read as defined by
[OData-JSON](#ODataJSON), it is a customer whose `value` property is the
collection `["ALFKI", ["red", "green"]]`, with `ID` not transmitted. Where
`value` is of type `Collection(Edm.Untyped)` both readings are valid and
nothing in the payload tells them apart.

::: example
Example ##ex_wrapper: the same information three times --- as defined by
[OData-JSON](#ODataJSON), compact with `$` at every level, and compact
with `value` at the root. The third form is permitted only because the
message body is a collection, which is one of the cases in which
[OData-JSON](#ODataJSON) itself uses `value`
```json
{
  "@context": "$metadata#Customers(Name,Orders(ID))",
  "value": [
    {
      "Name": "Alfreds Futterkiste",
      "Orders@count": 2,
      "Orders": [{ "ID": 10643 }, { "ID": 10692 }]
    }
  ]
}
```
```json
{
  "@context": "$metadata#Customers(Name,Orders(ID))",
  "$": [
    ["Alfreds Futterkiste", { "@count": 2, "$": [[10643], [10692]] }]
  ]
}
```
```json
{
  "@context": "$metadata#Customers(Name,Orders(ID))",
  "value": [
    ["Alfreds Futterkiste", { "@count": 2, "$": [[10643], [10692]] }]
  ]
}
```
:::

## ##subsec Position Values

The value at a position is one of the following:

- the representation, as defined in [OData-JSON](#ODataJSON) or in this
  document, of the value of the property at that position in the
  positional property list;
- a [wrapper object](#wrapperobject), if annotations or control
  information apply to that value, or if the property has no value; or
- `null`, if the property is null.

The representation of a primitive value is unchanged from
[OData-JSON](#ODataJSON).

A single-valued structured property holds either the positional
representation of its value, a JSON object as defined in
[OData-JSON](#ODataJSON), or `null`.

A collection-valued property holds a JSON array whose items are the
representations of the members of the collection. An empty collection is
represented as an empty JSON array.

::: example
Example ##ex: a collection-valued complex property; the outer array is
the collection, each inner array the positional representation of one
`Address`
```json
{
  "@context": "$metadata#Customers(Name,Addresses/City)/$entity",
  "$": [
    "Alfreds Futterkiste",
    [["Berlin"], ["Hamburg"]]
  ]
}
```
:::

Note the consequence of the two preceding rules: for a
collection-valued structured property, the value at the position is an
array of arrays --- the outer array the collection, each inner array one
member. A consumer distinguishes the two nestings from the metadata, as
[section ##PositionalRepresentation] describes; nothing in the payload
itself does so.

A property that has no value at all -- as opposed to a property whose value
is null -- occurs when only annotations or control information were
requested for it, for example when a navigation property was expanded with
`$count` only. Such a position holds a [wrapper object](#wrapperobject)
carrying them and no value. See [section ##PropertyAnnotations].
