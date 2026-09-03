
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
  "$": ["ALFKI", "Alfreds Futterkiste"]
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
  "$": [
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
  "$": [
    ["ALFKI", [[10643, 29.46], [10692, 61.02]]],
    ["ANATR", []]
  ]
}
```
:::

## ##subsec Derived Types

A collection may contain entities or complex values of types derived from
the type of the collection.

The positional property list of an instance is determined from the
select-list *and from the type of that instance*, as described in [section
##DeterminingthePositionalPropertyList]. Instances of different types
within one collection therefore have different positional property lists: a
select-item qualified with a type cast contributes a position to instances
of that type, and to instances of types derived from it, and contributes
nothing to any other instance.

An instance of a derived type conveys the properties selected for its own
type in addition to those selected for the type of the collection. It
carries neither a position nor a placeholder for a property selected for a
peer type.

Because the positional property list depends on the instance's type, a
receiver cannot decode a positional representation without knowing that
type. Therefore:

- A service MUST include the `type` control information for any instance
  whose positional property list differs from the positional property list
  of the type declared by the context URL. This applies irrespective of the
  value of the `metadata` format parameter, for the same reason that the
  `context` control information is always required; see [section
  ##ControlInformationcontext].
- The `type` control information is carried in the [wrapper
  object](#wrapperobject) around the positional representation and MUST
  precede it, as required by [section ##PayloadOrderingConstraints].

A receiver MUST NOT infer the type of an instance from the number of items
in its positional representation: two types may yield positional property
lists of equal length.

::: example
Example ##ex_derived: a heterogeneous collection in which no property of a
derived type is selected. The `type` control information distinguishes the
instances, but both positional property lists are (`ID`, `Name`).
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "$": [
    ["ALFKI", "Alfreds Futterkiste"],
    { "@type": "#Model.VipCustomer", "$": ["ANATR", "Ana Trujillo"] }
  ]
}
```
:::

::: example
Example ##ex_derivedselect: `PreferredContact` and `Since` are declared by
`Model.VipCustomer` only. The positional property list of a `Customer` is
(`ID`); that of a `Model.VipCustomer` is (`ID`, `PreferredContact`,
`Since`).
```
GET ~/Customers?$select=ID,Model.VipCustomer/PreferredContact,Model.VipCustomer/Since
```
```json
{
  "@context": "$metadata#Customers(ID,Model.VipCustomer/PreferredContact,Model.VipCustomer/Since)",
  "$": [
    ["ALFKI"],
    { "@type": "#Model.VipCustomer", "$": ["ANATR", "email", 2019] }
  ]
}
```
:::

::: example
Example ##ex_peertypes: with two peer derived types selected, each instance
carries only the properties of its own type, and nothing for the other
```
GET ~/Customers?$select=ID,Model.VipCustomer/PreferredContact,Model.WholesaleCustomer/Terms
```
```json
{
  "@context": "$metadata#Customers(ID,Model.VipCustomer/PreferredContact,Model.WholesaleCustomer/Terms)",
  "$": [
    ["ALFKI"],
    { "@type": "#Model.VipCustomer",       "$": ["ANATR", "email"] },
    { "@type": "#Model.WholesaleCustomer", "$": ["ANTON", "NET30"] }
  ]
}
```
:::

## ##subsec Open Types and Dynamic Properties

A dynamic property of an open type occupies a position in the positional
property list if, and only if, it is explicitly selected and therefore
appears in the select-list of the context URL.

If a dynamic property is selected, the service MUST include a value at its
position for every instance, using the empty JSON object `{}` for an
instance that does not have that dynamic property.

This differs from the treatment of a property of a derived type, and the
difference is deliberate. A type cast in the select-list says which
instances a property applies to, so an instance to which it does not apply
simply has a shorter positional property list. A selected dynamic property
says nothing about which instances have it, so it is part of the positional
property list of every instance, and `{}` conveys that this instance has no
such property --- as distinct from `null`, which conveys that it has one
whose value is null.

An instance MAY in addition carry dynamic properties that are *not* in its
positional property list, by name, in the [wrapper object](#wrapperobject)
holding its positional representation, as described in [section
##TheWrapperObject]. A property that occupies a position MUST NOT also be
carried by name.

::: example
Example ##ex_openselected: `Nickname` is selected and therefore occupies a
position; the first customer does not have it
```
GET ~/Customers?$select=ID,Nickname
```
```json
{
  "@context": "$metadata#Customers(ID,Nickname)",
  "$": [
    ["ALFKI", {}],
    ["ANATR", "Ana"]
  ]
}
```
:::

::: example
Example ##ex_openunselected: `Nickname` and `Score` were not selected. The
instance keeps its positional representation and carries them by name, so
only the instance that has them pays for them.
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "$": [
    ["ALFKI", "Alfreds Futterkiste"],
    { "$": ["ANATR", "Ana Trujillo"], "Nickname": "Ana", "Score": 42 }
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
