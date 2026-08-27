
-------

# ##sec Structured Instances

This section describes how each kind of OData value is represented in a
compact payload. Only the deviations from [OData-JSON](#ODataJSON) are
described; everything else is unchanged.

## ##subsec Entity

An entity MAY be represented as a JSON array, as described in [section
##PositionalRepresentation]. Its positional property list is determined
from the select-list applying to it, as described in [section
##DeterminingthePositionalPropertyList].

Control information that applies to the entity -- `id`, `etag`, `type`,
`editLink`, `readLink` and others -- cannot appear inside the array. An
entity to which control information applies is represented either as a
[wrapper object](#wrapperobject) carrying that control information
together with the positional representation, or as a JSON object as
defined in [OData-JSON](#ODataJSON).

::: example
Example ##ex: a single entity with an ETag
```json
{
  "@context": "$metadata#Customers(ID,Name)/$entity",
  "@etag": "W/\"MjAyNC0wMi0yOA==\"",
  "_": ["ALFKI", "Alfreds Futterkiste"]
}
```
:::

## ##subsec Complex Value

A complex value MAY be represented as a JSON array, as described in
[section ##PositionalRepresentation]. Its positional property list is
determined from the nested select-list applying to it, as described in
[section ##GroupingofSelectItems].

A null complex value is represented as `null`, not as an empty array.

## ##subsec Collection of Entities

A collection of entities is represented as a JSON array whose items are
the representations of the entities in the collection, each of which MAY
be a positional representation.

All entities in a collection share the same positional property list,
which is determined once from the select-list applying to the collection.

::: example
Example ##ex_collection: a collection of entities, showing the format
defined by [OData-JSON](#ODataJSON) and the compact format side by side
```
GET ~/Customers?$select=ID,Name
```
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "value": [
    { "ID": "ALFKI", "Name": "Alfreds Futterkiste" },
    { "ID": "ANATR", "Name": "Ana Trujillo" },
    { "ID": "ANTON", "Name": "Antonio Moreno" }
  ]
}
```
```
GET ~/Customers?$select=ID,Name
```
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "_": [
    ["ALFKI", "Alfreds Futterkiste"],
    ["ANATR", "Ana Trujillo"],
    ["ANTON", "Antonio Moreno"]
  ]
}
```
:::

## ##subsec Collection of Complex Values

A collection of complex values is represented as a JSON array whose items
are the representations of the complex values in the collection, each of
which MAY be a positional representation.

All complex values in a collection share the same positional property
list.

## ##subsec Primitive Values

A primitive value is represented exactly as defined in
[OData-JSON](#ODataJSON). A collection of primitive values is represented
as a JSON array of such values.

Primitive values are already represented without a repeated property name
and this format does not change them.

## ##subsec Navigation Properties

A navigation property that is expanded occupies a position in the
positional property list of the containing entity, and the value at that
position is the representation of the related entity or collection of
related entities.

A navigation property that is not expanded and not selected does not
occupy a position.

The `navigationLink` and `associationLink` control information for a
navigation property, when present, is carried in a [wrapper
object](#wrapperobject) at the navigation property's position, as
described in [section ##PropertyAnnotations].

::: example
Example ##ex: an expanded collection-valued navigation property; the
position of `Orders` holds the collection, whose items are the positional
representations of the individual orders
```
GET ~/Customers?$select=ID&$expand=Orders($select=ID,Amount)
```
```json
{
  "@context": "$metadata#Customers(ID,Orders(ID,Amount))",
  "_": [
    ["ALFKI", [[10643, 29.46], [10692, 61.02]]],
    ["ANATR", []]
  ]
}
```
:::

## ##subsec Derived Types

A collection may contain entities or complex values of types derived from
the type of the collection.

The positional property list of every instance in a collection is the
same, and is determined from the select-list applying to the collection.
An instance of a derived type therefore conveys, positionally, exactly
the properties in that list -- no more and no fewer -- regardless of which
additional properties its own type declares.

Where the actual type of an instance must be conveyed, the `type` control
information is carried in a [wrapper object](#wrapperobject) around the
positional representation.

::: example
Example ##ex_derived: a heterogeneous collection; the type of the second
entity differs from the type of the entity set
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "_": [
    ["ALFKI", "Alfreds Futterkiste"],
    { "@type": "#Model.VipCustomer", "_": ["ANATR", "Ana Trujillo"] }
  ]
}
```
:::

Properties declared by a derived type can be conveyed positionally by
selecting them explicitly, in which case
[OData-Protocol](#ODataProtocol) prefixes them with the qualified name of
the derived type in the select-list and they occupy a position in the
positional property list of *every* instance in the collection.

For an instance whose type does not declare such a property, the property
is not applicable rather than null. The value at its position MUST be the
empty JSON object `{}`, which is the [wrapper
object](#wrapperobject) carrying neither annotations nor a value, and
which is therefore distinct both from `null` and from the positional
representation of a value.

::: example
Example ##ex: `PreferredContact` is declared by `Model.VipCustomer` only;
the first entity is not a `VipCustomer` and its position for
`PreferredContact` conveys "not applicable"
```
GET ~/Customers?$select=ID,Model.VipCustomer/PreferredContact
```
```json
{
  "@context": "$metadata#Customers(ID,Model.VipCustomer/PreferredContact)",
  "_": [
    ["ALFKI", {}],
    { "@type": "#Model.VipCustomer", "_": ["ANATR", "email"] }
  ]
}
```
:::

## ##subsec Open Types and Dynamic Properties

A dynamic property of an open type occupies a position in the positional
property list if, and only if, it is explicitly selected and therefore
appears in the select-list of the context URL.

If a dynamic property is selected, the service MUST include a value at
its position for every instance in the collection, using the empty JSON
object `{}` for instances that do not have that dynamic property, as
described in [section ##DerivedTypes].

An instance carrying dynamic properties that are not selected MUST NOT be
represented positionally; it is represented as a JSON object as defined
in [OData-JSON](#ODataJSON). This is a direct consequence of the
[superset principle](#supersetprinciple) and requires no additional
mechanism.

::: example
Example ##ex: a payload in which one instance carries an unselected
dynamic property and therefore falls back to the representation defined
by [OData-JSON](#ODataJSON)
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "_": [
    ["ALFKI", "Alfreds Futterkiste"],
    { "ID": "ANATR", "Name": "Ana Trujillo", "Nickname": "Ana" }
  ]
}
```
:::

## ##subsec Entity References

An entity reference is represented as defined in
[OData-JSON](#ODataJSON): a JSON object containing the `id` control
information. It has no positional representation, because it has no
positional property list -- the context URL `#$ref` and
`#Collection($ref)` carry no select-list.

A collection of entity references is a JSON array of such objects.

## ##subsec Media Entities and Stream Properties

The `mediaReadLink`, `mediaEditLink`, `mediaEtag` and `mediaContentType`
control information of a media entity is carried in the [wrapper
object](#wrapperobject) around the entity's positional representation.

A stream property occupies a position in the positional property list if
it is selected. The value at that position is a [wrapper
object](#wrapperobject) carrying the stream's control information, or the
value of the stream as defined in [OData-JSON](#ODataJSON).
