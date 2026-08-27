
-------

# ##sec Positional Representation

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
  "_": ["ALFKI", "Alfreds Futterkiste", "Berlin"]
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

3. The items of *S* are grouped as described in [section
   ##GroupingofSelectItems]. Each group occupies exactly one position,
   at the position of the first of its items.

4. The positional property list is the resulting sequence of groups, in
   order.

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
  "_": ["Alfreds Futterkiste", "ALFKI"]
}
```
```
GET ~/Customers('ALFKI')?$select=ID,Name
```
```json
{
  "@context": "$metadata#Customers(ID,Name)/$entity",
  "_": ["ALFKI", "Alfreds Futterkiste"]
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
  "_": [
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
  "_": [
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
A leading type-cast prefix, that is a qualified type name followed by a
forward slash, is part of the first segment.

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
  "_": [
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
  "_": [
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
