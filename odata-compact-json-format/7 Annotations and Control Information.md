
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

In a compact payload both patterns are carried by the [wrapper
object](#wrapperobject) defined in [section ##TheWrapperObject]. This
section describes where each annotation and each piece of control
information appears, and how its name differs from the name
[OData-JSON](#ODataJSON) gives it.

The *value* of an annotation, or of control information, is represented
exactly as defined in [OData-JSON](#ODataJSON). It is never conveyed
positionally: a positional representation requires a select-list, as
[section ##DeterminingthePositionalPropertyList] requires, and no
select-list applies to the value of an annotation. A complex-valued
annotation is therefore a JSON object whose names are the properties
declared by the term's type --- including where one of those properties
happens to be named `value`, which is a property name like any other and is
not the reserved name of a wrapper object's value.

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
  "$": [
    ["ALFKI", "Alfreds Futterkiste"],
    {
      "@Core.Messages": [{ "code": "1", "message": "Stale", "severity": "info" }],
      "$": ["ANATR", "Ana Trujillo"]
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
property, in both formats. Note that the annotation's own value is
unchanged between them: `value` there is a property declared by the term's
type, not the name of a wrapper object's value, and it is not renamed to
`$`. Note also that the `$` of the wrapper holds a number here, because the
property it annotates is a primitive one.
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
  "$": [
    "ALFKI",
    {
      "@Core.ValueException": { "value": "1234567890123456789" },
      "$": 1234567890123456800
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
```
```json
{
  "@context": "$metadata#Customers(Name,Addresses/$count)",
  "$": [
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
```
```json
{
  "@context": "$metadata#Customers(Name,@Model.Rating)",
  "$": [
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
  "$": [
    [
      "Alfreds Futterkiste",
      {
        "@count": 42,
        "@nextLink": "Customers('ALFKI')/Orders?$skiptoken=10",
        "$": [[10643], [10692]]
      }
    ]
  ],
  "@nextLink": "Customers?$skiptoken=10"
}
```
:::

### ##subsubsec Control Information: `type`

The `type` control information is carried in the [wrapper
object](#wrapperobject) around the instance it applies to and MUST precede
that instance's positional representation.

In a compact payload `type` is not merely informative. The positional
property list of an instance depends on the instance's type, so a receiver
cannot decode a positional representation without it. A service MUST
include `type` for any instance whose positional property list differs from
that of the type declared by the context URL, irrespective of the value of
the `metadata` format parameter. See [section ##DerivedTypes].

A receiver MUST NOT infer the type of an instance from the number of items
in its positional representation.
