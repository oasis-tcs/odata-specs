
-------

# ##sec Annotations and Control Information

[OData-JSON](#ODataJSON) attaches annotations and control information to
a value by adding name/value pairs to the JSON object that represents the
value, or to the object that contains it:

- an annotation on an instance is a name/value pair `@ns.term` on the
  object representing the instance;
- an annotation on a property is a name/value pair `Property@ns.term` on
  the object *containing* the property;
- control information follows the same two patterns, with a reserved term
  name, for example `@id` and `Orders@count`.

Neither pattern is available in a positional representation: an array has
no name/value pairs, and the containing instance may itself be an array.
This format therefore introduces a single construct, the *wrapper
object*, which is used uniformly wherever a value would otherwise appear.

## ##subsec The Wrapper Object

A *wrapper object* is a JSON object whose name/value pairs are

- annotations and control information that apply to a value, and
- optionally, that value itself, under the reserved name `_`.

A wrapper object MUST NOT contain any other name/value pairs. In
particular it never carries the properties of a structured instance by
name; an instance whose properties are carried by name is not a wrapper
object but the representation defined by [OData-JSON](#ODataJSON).

A wrapper object MAY appear wherever a value may appear:

- as the message body, in which case it carries the payload's
  [`context`](#ControlInformationcontext) and the payload's content;
- at a position in a positional representation, in which case it carries
  the annotations of the property at that position and the property's
  value;
- as an item of a collection, in which case it carries the annotations of
  that member of the collection and the member itself.

A wrapper object that carries no value denotes a property or instance
that has no value, as distinct from one whose value is null. The empty
wrapper object `{}` therefore denotes "no value and no annotations"; see
[section ##DerivedTypes].

The name of the value in a wrapper object is `_`.

At the root of the message body the name `value` is also recognized, with
the same meaning, for compatibility with [OData-JSON](#ODataJSON) as
required by the [superset principle](#supersetprinciple). Producers of
compact payloads SHOULD use `_` in all positions, including the root.

The name `value` is NOT RECOMMENDED anywhere other than the root of the
message body, because a JSON object containing a name/value pair named
`value` is indistinguishable from the representation, as defined by
[OData-JSON](#ODataJSON), of a structured instance having a property
named `value`.

::: example
Example ##ex_wrapper: the same information three times --- as defined by
[OData-JSON](#ODataJSON), compact with `_` at every level, and compact
using the recognized root name `value`
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
  "_": [
    ["Alfreds Futterkiste", { "@count": 2, "_": [[10643], [10692]] }]
  ]
}
```
```json
{
  "@context": "$metadata#Customers(Name,Orders(ID))",
  "value": [
    ["Alfreds Futterkiste", { "@count": 2, "_": [[10643], [10692]] }]
  ]
}
```
:::

## ##subsec Instance Annotations

An annotation that applies to a structured instance is represented as a
name/value pair `@ns.term` in the wrapper object around that instance's
positional representation.

The name of an instance annotation is unchanged from
[OData-JSON](#ODataJSON).

::: example
Example ##ex: an instance annotation on one entity of a collection
```json
{
  "@context": "$metadata#Customers(ID,Name)",
  "_": [
    ["ALFKI", "Alfreds Futterkiste"],
    {
      "@Core.Messages": [{ "code": "1", "message": "Stale", "severity": "info" }],
      "_": ["ANATR", "Ana Trujillo"]
    }
  ]
}
```
:::

## ##subsec Property Annotations

An annotation that applies to a property is represented as a name/value
pair in the wrapper object at that property's position.

The name of a property annotation in a compact payload is `@ns.term`. The
property name prefix that [OData-JSON](#ODataJSON) requires -- as in
`Property@ns.term` -- is omitted, because the position already identifies
the property.

::: example
Example ##ex_propannotation: the `Core.ValueException` annotation of a
property, in both formats
```json
{
  "@context": "$metadata#Customers(ID,Revenue)/$entity",
  "ID": "ALFKI",
  "Revenue@Core.ValueException": { "value": "1234567890123456789" },
  "Revenue": 1234567890123456800
}
```
```json
{
  "@context": "$metadata#Customers(ID,Revenue)/$entity",
  "_": [
    "ALFKI",
    {
      "@Core.ValueException": { "_": "1234567890123456789" },
      "_": 1234567890123456800
    }
  ]
}
```
:::

::: example
Example ##ex_countonly: a collection-valued property for which only the
count was requested; the position holds a wrapper object with an
annotation and no value
```
GET ~/Customers?$select=Name,Addresses/$count
{
  "@context": "$metadata#Customers(Name,Addresses/$count)",
  "_": [
    ["Alfreds Futterkiste", { "@count": 2 }],
    ["Ana Trujillo", { "@count": 0 }]
  ]
}
```
Note that under [section ##GroupingofSelectItems] the select-item
`Addresses/$count` forms a group whose first segment is `Addresses`, so
`Addresses` occupies a single position, and the count segment is what
that position conveys. See also open issue 13.
:::

## ##subsec Selected Annotations

An instance annotation that is explicitly selected appears in the
select-list of the context URL and therefore occupies a position in the
positional property list, like any other select-item. The value at that
position is the value of the annotation.

This is the case where an annotation is requested as data. It is distinct
from an annotation that merely accompanies a value, which is carried in a
wrapper object as described in the preceding sections.

::: example
Example ##ex: the annotation `@Model.Rating` is selected and occupies the
second position
```
GET ~/Customers?$select=Name,@Model.Rating
{
  "@context": "$metadata#Customers(Name,@Model.Rating)",
  "_": [
    ["Alfreds Futterkiste", 5],
    ["Ana Trujillo", 3]
  ]
}
```
:::

Annotations requested through the `include-annotations` preference do not
appear in the context URL, do not affect the positional property list,
and are therefore carried in wrapper objects.

## ##subsec Control Information

Control information is represented in a compact payload in the same way
as annotations, following the rules of the preceding sections. The
following subsections describe the control information whose treatment in
a compact payload warrants specific mention.

### ##subsubsec Control Information: `context`

The `context` control information is defined in
[OData-JSON](#ODataJSON) and its value is the context URL of the payload,
as defined in [#OData-Protocol#ContextURL].

In a compact payload the context URL additionally determines the
[positional property list](#positionalpropertylist) of the instances in
the payload, as described in [section
##DeterminingthePositionalPropertyList]. It is therefore required for a
compact payload to be interpretable.

A compact payload MUST include the `context` control information in the
message body, and MUST include it in any nested wrapper object for which
[OData-JSON](#ODataJSON) requires a context URL, irrespective of the
value of the `metadata` format parameter. In particular, a payload
labeled `metadata=none` MUST still include the `context` control
information.

### ##subsubsec Control Information: `count` and `nextLink`

The `count` and `nextLink` control information of the collection in the
message body is carried in the message body object, as in
[OData-JSON](#ODataJSON).

For a nested collection, both are carried in the wrapper object at the
collection's position.

::: example
Example ##ex: `count` and `nextLink` for the collection in the message
body and for a nested collection
```json
{
  "@context": "$metadata#Customers(Name,Orders(ID))",
  "@count": 137,
  "_": [
    [
      "Alfreds Futterkiste",
      {
        "@count": 42,
        "@nextLink": "Customers('ALFKI')/Orders?$skiptoken=10",
        "_": [[10643], [10692]]
      }
    ]
  ],
  "@nextLink": "Customers?$skiptoken=10"
}
```
:::

### ##subsubsec Control Information: `type`

The `type` control information is carried in the wrapper object around
the instance it applies to, as described in [section ##DerivedTypes].

A receiver MUST NOT infer the type of an instance from the number of
items in its positional representation. The number of items is determined
by the positional property list, which is the same for every instance in
a collection regardless of type.
