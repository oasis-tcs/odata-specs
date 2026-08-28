
-------

# ##sec Compact Representations

This section defines the two representations that this format adds to
[OData-JSON](#ODataJSON): the *positional representation*, which conveys a
structured instance as a JSON array, and the *wrapper object*, which
conveys whatever needs a name in a place where a positional representation
has no room for one. Everything else in this document is expressed in
terms of these two.

## ##subsec Positional Representation

A structured instance -- an entity or a complex value -- MAY be represented
as a JSON array instead of a JSON object. Such an array is called the
*positional representation* of the instance.

The items of the array are the values of the instance's properties. A
property name is not transmitted with the value; the property a value
belongs to is identified by the position of the value within the array.

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

A sender MAY choose the positional representation for some instances in a
payload and the representation defined in [OData-JSON](#ODataJSON) for
others; see the [superset principle](#supersetprinciple). A receiver
distinguishes the two by the JSON type of the instance: a JSON array is a
positional representation, a JSON object is not.

## ##subsec Positional Property List

The *positional property list* of a structured instance is the ordered
list of properties that its positional representation conveys.

If an instance is represented positionally:

- the number of items in the array MUST equal the number of items in the
  positional property list, and
- item *n* of the array MUST be the value of item *n* of the positional
  property list, formatted as described in [section ##PositionValues].

A sender MUST NOT omit an item, MUST NOT add an item, and MUST NOT
reorder items. A property whose value is null is represented by the JSON
value `null` in its position; a property that has no value is represented
as described in [section ##PositionValues].

Note that this is a stricter requirement than the one
[OData-JSON](#ODataJSON) places on a JSON object representation, where a
sender may omit a property whose value it does not wish to transmit. In a
positional representation there is no way to omit a value without
shifting every subsequent value, so the positional property list must be
transmitted in full. If a sender wishes to transmit fewer properties, it
narrows the positional property list -- by narrowing the select-list in the
context URL -- rather than shortening the array.

## ##subsec Determining the Positional Property List

The positional property list of an instance is determined by the
select-list, as defined in [#OData-Protocol#ContextURL], that applies to
that instance, and by the metadata for the instance's type.

Let *T* be the type of the instance and *S* the sequence of select-list
items, in the order in which they appear in the context URL, that applies
to the instance. The positional property list is determined as follows:

1. If [OData-Protocol](#ODataProtocol) specifies that all structural
   properties are implicitly selected -- because there is no select-list,
   or because the select-list contains only expanded navigation
   properties -- then the structural properties of *T*, in the order
   described below, are prepended to *S*.

2. Each item `*` in *S* is replaced, in place, by the structural
   properties of *T* in the order described below.

3. Each item of *S* that begins with a type-cast segment --- a qualified
   type name followed by a forward slash --- is removed from *S* unless *T*
   is that type or is derived from it. From each such item that remains,
   the leading type-cast segment is removed.

4. The items of *S* are grouped as described in [section
   ##GroupingofSelectItems]. Each group occupies exactly one position,
   at the position of the first of its items.

5. The positional property list is the resulting sequence of groups, in
   order.

Step 3 is what makes the positional property list depend on the instance
and not only on the context URL: two instances of different types in one
collection have different positional property lists. See [section
##DerivedTypes].

The *order described below*, wherever referred to above, is the order in
which the structural properties are declared in the CSDL document
defining *T*, with the properties declared by a base type of *T*
preceding those declared by *T* itself, applied recursively along the
inheritance chain.

A service MUST NOT reorder the properties of a type in its metadata
document between versions of that document without also changing the
metadata document URL, since the positional property list, and therefore
the meaning of every compact payload referencing that metadata, depends
on the declaration order. Services SHOULD reference a versioned metadata
document from the context URL when producing compact payloads. See
[#OData-Protocol#MetadataDocumentRequest].

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
Example ##ex: with no `$select`, the positional property list is the
structural properties of the entity type in declaration order; the
navigation property `Orders` is not part of it because it is not selected
```
GET ~/Customers
```
```json
{
  "@context": "$metadata#Customers",
  "$": [
    ["ALFKI", "Alfreds Futterkiste", ["Obere Str. 57", "Berlin", "12209"]],
    ["ANATR", "Ana Trujillo", ["Avda. de la Constitución 2222", "México D.F.", "05021"]]
  ]
}
```
:::

::: example
Example ##ex: a context URL containing only an expanded navigation
property implicitly selects all structural properties, which are placed
before the expanded navigation property
```
GET ~/Customers?$expand=Orders($select=ID)
```
```json
{
  "@context": "$metadata#Customers(Orders(ID))",
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

If the resulting nested select-list is empty, all structural properties
of the property's type are implicitly selected, as in step 1 of [section
##DeterminingthePositionalPropertyList].

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

## ##subsec The Wrapper Object

A positional representation is a JSON array, and a JSON array has no
name/value pairs. Anything that has to be conveyed *by name* alongside a
value therefore has nowhere to go: the annotations and control information
that [OData-JSON](#ODataJSON) attaches to the object representing an
instance, or to the object containing a property; and any property that
cannot be placed in the positional property list at all. The containing
instance is no help, since it may itself be an array.

This format introduces a single construct for all of them, used uniformly
wherever a value would otherwise appear.

A *wrapper object* is a JSON object whose name/value pairs are

- annotations and control information that apply to a value,
- optionally, that value itself, under the reserved name `$`, and
- optionally, properties of the instance that are not in its positional
  property list, by name.

The name `$` is not a simple identifier ([OData-CSDL](#ODataCSDL)) --- a
simple identifier is at least one character long and begins with an
underscore or a Unicode letter --- so it can never be the name of a declared
or dynamic property, and [OData-JSON](#ODataJSON) never uses it. A receiver
therefore distinguishes a wrapper object from the representation defined by
[OData-JSON](#ODataJSON) as follows:

- a JSON object containing a name/value pair named `$` is a wrapper object;
- a JSON object all of whose name/value pairs are annotations or control
  information is a wrapper object that carries no value;
- any other JSON object is the representation defined by
  [OData-JSON](#ODataJSON).

Properties carried by name in a wrapper object MUST NOT include a property
that occupies a position in the instance's positional property list, and
MUST follow the value, as required by [section
##PayloadOrderingConstraints]. Carrying properties by name is what allows
an instance of an open type to keep its positional representation while
conveying dynamic properties that could not be placed in the select-list;
see [section ##OpenTypesandDynamicProperties].

A wrapper object MAY appear wherever a value may appear:

- as the message body, in which case it carries the payload's
  [`context`](#ControlInformationcontext) and the payload's content;
- at a position in a positional representation, in which case it carries
  the annotations of the property at that position and the property's
  value;
- as an item of a collection, in which case it carries the annotations of
  that member of the collection and the member itself.

A wrapper object that carries no value denotes a property or instance that
has no value, as distinct from one whose value is null. The empty JSON
object `{}` carries neither annotations nor a value and therefore denotes
"no value"; it is used at the position of a selected dynamic property that
an instance does not have, see [section ##OpenTypesandDynamicProperties].
Note that `{}` satisfies the second bullet above vacuously rather than by
construction: it is treated as a wrapper carrying no value by convention,
being the only reading that is useful.

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
body is a *property* named `value`, and a receiver MUST NOT read it as the
value of a wrapper object. A single entity or complex value represented
positionally at the root of the message body therefore uses `$`.

Producers of compact payloads SHOULD use `$` wherever this document
permits a choice.

This restriction is what keeps the two representations distinguishable.
Were `value` also the wrapper's value name at the root of a message body
representing a single entity, then
`{"@context": "…#Customers/$entity", "value": […]}` would be at once the
positional representation of an entity and the
[OData-JSON](#ODataJSON) representation of an entity having a
collection-valued property named `value`, with nothing to tell the two
apart.

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
array of arrays. A receiver that knows the positional property list also
knows, from the metadata, whether a property is collection-valued, and can
therefore distinguish the two nestings without ambiguity.

A property that has no value at all -- as opposed to a property whose value
is null -- occurs when only annotations were requested for it, for example
when a navigation property was expanded with `$count` only. Such a
position holds a [wrapper object](#wrapperobject) carrying the
annotations and no value. See [section ##PropertyAnnotations].
