-------

# ##sec Schema

One or more schemas describe the entity model exposed by an OData
service. The schema acts as a namespace for elements of the entity model
such as entity types, complex types, enumerations and terms.

A schema is identified by a [namespace](#Namespace). Schema namespaces
MUST be unique within the scope of a document and SHOULD be globally
unique. A schema cannot span more than one document.

The schema's namespace is combined with the name of elements in the
schema to create unique [qualified names](#QualifiedName), so
identifiers that are used to name types MUST be unique within a
namespace to prevent ambiguity.

Names are case-sensitive, but service authors SHOULD NOT choose names
that differ only in case.

The namespace MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.

::: {.varjson .rep}
### ##isec Schema Object

A schema is represented as a member of the document object whose name is
the schema namespace. Its value is an object that MAY contain the
members [`$Alias`](#Alias) and
[`$Annotations`](#AnnotationswithExternalTargeting).

The schema object MAY contain members representing [entity
types](#EntityType), [complex types](#ComplexType), [enumeration
types](#EnumerationType), [type definitions](#TypeDefinition),
[actions](#Action), [functions](#Function), [terms](#Term), and an
[entity container](#EntityContainer).

The schema object MAY also contain [annotations](#Annotation) that apply
to the schema itself.
:::

::: {.varxml .rep}
### ##isec Element `edm:Schema`

The `edm:Schema` element defines a
schema. It MUST contain the `Namespace` attribute and it MAY
contain the `Alias` attribute.

It MAY contain elements [`edm:Action`](#Action),
[`edm:Annotations`](#AnnotationswithExternalTargeting),
[`edm:Annotation`](#Annotation), [`edm:ComplexType`](#ComplexType),
[`edm:EntityContainer`](#EntityContainer),
[`edm:EntityType`](#EntityType), [`edm:EnumType`](#EnumerationType),
[`edm:Function`](#Function), [`edm:Term`](#Term), or
[`edm:TypeDefinition`](#TypeDefinition).

### ##subisec Attribute `Namespace`

The value of `Namespace` is the namespace of the schema
:::

## ##subsec Alias

A schema MAY specify an alias which MUST be a [simple
identifier](#SimpleIdentifier).

::: varjson
If a schema specifies an alias, the alias MUST be used instead of the
namespace within qualified names throughout the document to identify
model elements of that schema. A mixed use of namespace-qualified names
and alias-qualified names is not allowed.
:::

::: varxml
If a schema specifies an alias, the alias MAY be used instead of the
namespace within qualified names to identify model elements of that
schema. An alias only provides a more convenient notation, allowing a
short string to be substituted for a long namespace. Every model element
that can be identified via an alias-qualified name can alternatively be
identified via its full namespace-qualified name.
:::

Aliases are document-global, so all schemas defined within or included
into a document MUST have different aliases, and aliases MUST differ
from the namespaces of all schemas defined within or included into a
document. Aliases defined by a schema can be used throughout the
containing document and are not restricted to the schema that defines
them.

The alias MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.

::: {.varjson .rep}
### ##subisec `$Alias`

The value of `$Alias` is a string containing the alias for the schema.
:::

::: {.varjson .example}
Example ##ex: document defining a schema `org.example` with an alias and a
description for the schema
```json
{
  ...
  "org.example": {
    "$Alias": "self",
    "@Core.Description": "Example schema",
    ...
  },
  ...
}
```
:::

::: {.varxml .rep}
### ##subisec Attribute `Alias`

The value of `Alias` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example ##ex: schema `org.example` with an alias and a description for the
schema
```xml
<Schema Namespace="org.example" Alias="self">
  <Annotation Term="Core.Description" String="Example schema" />
  ...
</Schema>
```
:::

## ##subsec Annotations with External Targeting

::: {.varjson .rep}
### ##subisec `$Annotations`

The value of `$Annotations` is an object with one member per [annotation
target](#Target). The member name is a path identifying the [annotation
target](#Target), the member value is an object containing
[annotations](#Annotation) for that target.
:::

::: {.varjson .example}
Example ##ex: annotations targeting the `Person` type with qualifier
`Tablet`
```json
"org.example": {
  "$Alias": "self",
  "$Annotations": {
    "self.Person": {
      "@Core.Description#Tablet": "Dummy",
      ...
    }
  }
},
```
:::

::: {.varxml .rep}
### ##isec Element `edm:Annotations`

The `edm:Annotations` element is used to apply a group of annotations to
a single model element. It MUST contain the `Target` attribute and it
MAY contain the `Qualifier` attribute.

It MUST contain at least one [`edm:Annotation`](#Annotation) element.

### ##subisec Attribute `Target`

The value of `Target` is a path expression identifying the [annotation
target](#Target). It MUST resolve to a model element in scope.

### ##subisec Attribute `Qualifier`

The value of `Qualifier` is a [simple identifier](#SimpleIdentifier).
:::

::: {.varxml .example}
Example ##ex: annotations should only be applied to tablet devices
```xml
<Annotations Target="org.example.Person" Qualifier="Tablet">
  <Annotation Term="Core.Description" String="Dummy" />
  ...
</Annotations>
```
:::
