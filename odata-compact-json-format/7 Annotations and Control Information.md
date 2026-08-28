
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
  "$": [
    "ALFKI",
    {
      "@Core.ValueException": { "$": "1234567890123456789" },
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
