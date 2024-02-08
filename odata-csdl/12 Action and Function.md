
-------

# ##sec Action and Function

## ##subsec Action

Actions are service-defined operations that MAY have observable side
effects and MAY return a single instance or a collection of instances of
any type.

The action's name is a [simple identifier](#SimpleIdentifier). If two or more
actions within one [schema](#Schema) have the same name, they are called 
[overloads](#ActionOverloads) of the same action. The name of an action MUST NOT
be used by any other direct children of its schema. (An action with a unique name
can also be viewed as an action with a single overload.)

Actions cannot be composed with additional path segments.

An action MAY specify a [return type](#ReturnType) that MUST be a
primitive, entity or complex type, or a collection of primitive, entity
or complex types in scope.

An action MAY define [parameters](#Parameter) used during the execution
of the action.

::: {.varjson .rep}
### ##isec Action Object

An action or action overloads with a common name are represented as a
member of the schema object whose name is the unqualified name of the action
and whose value is an array. The array contains one object per action
overload.

The action object MUST contain the member `$Kind` with a string
value of `Action`.

It MAY contain the members
[`$IsBound`](#BoundorUnboundActionsorFunctions),
[`$EntitySetPath`](#EntitySetPath), [`$Parameter`](#Parameter), and
[`$ReturnType`](#ReturnType), and it MAY contain
[annotations](#Annotation).
:::

::: {.varxml .rep}
### ##isec Element `edm:Action`

The `edm:Action` element represents an action with unique name or one overload of
an action. It MUST contain the `Name` attribute and it MAY
contain the [`IsBound`](#BoundorUnboundActionsorFunctions) and
[`EntitySetPath`](#EntitySetPath) attributes.

It MAY contain at most one [`edm:ReturnType`](#ReturnType) element and
MAY contain [`edm:Parameter`](#Parameter) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the action's name.
:::

### ##subsubsec Action Overloads

[Bound](#BoundorUnboundActionsorFunctions) actions support
overloading by binding parameter type. The combination of action name and
the binding parameter type MUST be unique within a schema.

[Unbound](#BoundorUnboundActionsorFunctions) actions do not support
overloading by parameter types. The names of all unbound actions MUST be unique
among all direct children of its schema.

An unbound action MAY have the same name as a bound action.

## ##subsec Function

Functions are service-defined operations that MUST NOT have observable
side effects and MUST return a single instance or a collection of
instances of any type.

The function's name is a [simple identifier](#SimpleIdentifier). If two or more
functions within one [schema](#Schema) have the same name, they are called 
[overloads](#FunctionOverloads) of the same function. The name of a function
MUST NOT be used by any other direct children of its schema. (A function with a
unique name can also be viewed as a function with a single overload.)

Functions MAY be [composable](#ComposableFunction).

The function MUST specify a [return type](#ReturnType) which MUST be a
primitive, entity or complex type, or a collection of primitive, entity
or complex types in scope.

A function MAY define [parameters](#Parameter) used during the execution
of the function.

::: {.varjson .rep}
### ##isec Function Object

A function or function overloads with a common name are represented as a
member of the schema object whose name is the unqualified name of the function
and whose value is an array. The array contains one object per function
overload.

The function object MUST contain the member `$Kind` with a
string value of `Function`.

It MUST contain the member [`$ReturnType`](#ReturnType), and it MAY
contain the members [`$IsBound`](#BoundorUnboundActionsorFunctions),
[`$EntitySetPath`](#EntitySetPath), and [`$Parameter`](#Parameter),
and it MAY contain [annotations](#Annotation).
:::

::: {.varxml .rep}
### ##isec Element `edm:Function`

The `edm:Function` element represents a function with unique name or one overload of
a function. It MUST contain the `Name` attribute and it MAY
contain the [`IsBound`](#BoundorUnboundActionsorFunctions) and
[`EntitySetPath`](#EntitySetPath) attributes.

It MUST contain one [`edm:ReturnType`](#ReturnType) element, and it MAY
contain [`edm:Parameter`](#Parameter) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the action's name.
:::

### ##subsubsec Function Overloads

[Bound](#BoundorUnboundActionsorFunctions) functions support
overloading subject to the following rules:
- The combination of function name,
binding parameter type, and unordered set of non-binding parameter names
MUST be unique within a schema.
- The combination of function name,
binding parameter type, and ordered set of parameter types MUST be
unique within a schema.
- All bound functions with the same
function name and binding parameter type within a schema MUST specify
the same return type.

[Unbound](#BoundorUnboundActionsorFunctions) functions support
overloading subject to the following rules:
- The combination of function name and
unordered set of parameter names MUST be unique within a schema.
- The combination of function name and
ordered set of parameter types MUST be unique within a schema.
- All unbound functions with the same
function name within a schema MUST specify the same return type.

An unbound function MAY have the same name as a bound function.

Note that [type definitions](#TypeDefinition) can be used to
disambiguate overloads for both bound and unbound functions, even if
they specify the same underlying type.

### ##subsubsec Composable Function

A function MAY indicate that it is composable. If not explicitly
indicated, it is not composable.

A composable function can be invoked with additional path segments or
key predicates appended to the resource path that identifies the
composable function, and with system query options as appropriate for
the type returned by the composable function.

::: {.varjson .rep}
### ##subisec `$IsComposable`

The value of `$IsComposable` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.
:::

::: {.varxml .rep}
### ##subisec Attribute `IsComposable`

The value of `IsComposable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `false`.
:::

## ##subsec Bound or Unbound Actions or Functions

An action or function MAY indicate that it is bound. If not
explicitly indicated, it is unbound.

Bound actions or functions are invoked on resources matching the type of
the binding parameter. The binding parameter can be of any type, and it
MAY be nullable.

Unbound actions are invoked from the entity container through an [action
import](#ActionImport).

Unbound functions are invoked as static functions within a common expression
(see [OData-URL](#ODataURL), section 5.1.1),
or from the entity container through a [function import](#FunctionImport).

::: {.varjson .rep}
### ##subisec `$IsBound`

The value of `$IsBound` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.
:::

::: {.varxml .rep}
### ##subisec Attribute `IsBound`

The value of `IsBound` is one of the Boolean literals `true` or `false`.
Absence of the attribute means `false`.
:::

### ##subsubsec Entity Set Path

Bound actions and functions that return an entity or a collection of
entities MAY specify an entity set path if the entity set of the
returned entities depends on the entity set of the binding parameter
value.

The entity set path consists of a series of segments joined together
with forward slashes.

The first segment of the entity set path MUST be the name of the binding
parameter. The remaining segments of the entity set path MUST represent
complex typed properties, navigation properties, or type casts.

::: {.varjson .rep}
### ##subisec `$EntitySetPath`

The value of `$EntitySetPath` is a string containing the entity set
path.
:::

::: {.varxml .rep}
### ##subisec Attribute `EntitySetPath`

The value of `EntitySetPath` is the entity set path.
:::

## ##subsec Return Type

The return type of an action or function may be any type in
scope, or a collection of any type in scope.

The facets [`MaxLength`](#MaxLength),
[`Precision`](#Precision), [`Scale`](#Scale), and [`SRID`](#SRID) can be
used as appropriate to specify value restrictions of the return type, as
well as the [`Unicode`](#Unicode) facet for 4.01 and greater payloads.

For a single-valued return type the facets apply to the returned value.
For a collection-valued return type the facets apply to the items in the
returned collection.

::: {.varjson .rep}
### ##subisec `$ReturnType`

The value of `$ReturnType` is an object. It MAY contain the members
`$Type`, `$Collection`, `$Nullable`, [`$MaxLength`](#MaxLength),
[`$Unicode`](#Unicode), [`$Precision`](#Precision), [`$Scale`](#Scale),
and [`$SRID`](#SRID).

It also MAY contain [annotations](#Annotation).

### ##subisec `$Type` 
and ##subisec `$Collection`

For single-valued return types the value of `$Type` is the qualified
name of the returned type.

For collection-valued return types the value of `$Type` is the qualified
name of the returned item type, and the member `$Collection` MUST be
present with the literal value `true`.

Absence of the `$Type` member means the type is `Edm.String`.

### ##subisec `$Nullable`

The value of `$Nullable` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.

If the return type is a collection of entity types, the `$Nullable`
member has no meaning and MUST NOT be specified.

For other collection-valued return types the result will always be a
collection that MAY be empty. In this case `$Nullable` applies to items
of the collection and specifies whether the collection MAY contain
`null` values.

For single-valued return types the value `true` means that the action or
function MAY return a single `null` value. The value `false` means that
the action or function will never return a `null` value and instead will
fail with an error response if it cannot compute a result.
:::

::: {.varxml .rep}
### ##isec Element `edm:ReturnType`

The `edm:ReturnType` element MUST contain the `Type` attribute, and it
MAY contain the attributes `Nullable`, [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale), and
[`SRID`](#SRID).

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Type`

For single-valued return types the value of `Type` is the qualified name
of the return type.

For collection-valued return types the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the return item
type, followed by a closing parenthesis `)`.

### ##subisec Attribute `Nullable`

The value of `Nullable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `true`.

If the return type is a collection of entity types, the `Nullable`
attribute has no meaning and MUST NOT be specified.

For other collection-valued return types the result will always be a
collection that MAY be empty. In this case the `Nullable` attribute
applies to items of the collection and specifies whether the collection
MAY contain `null` values.

For single-valued return types the value `true` means that the action or
function MAY return a single `null` value. The value `false` means that
the action or function will never return a `null` value and instead will
fail with an error response if it cannot compute a result.
:::

## ##subsec Parameter

An action or function MAY specify parameters.

A bound action or function MUST specify at least one parameter;
the first parameter is its binding parameter. 

The order of parameters MUST NOT change unless the schema version changes.

Each parameter MUST have a name that is a [simple
identifier](#SimpleIdentifier). The parameter name MUST be unique within
the action or function declaration.

The parameter MUST specify a type. It MAY be any type in scope, or a
collection of any type in scope.

The facets [`MaxLength`](#MaxLength), [`Precision`](#Precision),
[`Scale`](#Scale), or [`SRID`](#SRID) can be used as appropriate to
specify value restrictions of the parameter, as well as the
[`Unicode`](#Unicode) facet for 4.01 and greater payloads.

For single-valued parameters the facets apply to the parameter value. If
the parameter value is a collection, the facets apply to the items in
the collection.

::: {.varjson .rep}
### ##subisec `$Parameter`

The value of `$Parameter` is an array. The array contains one object per
parameter.

### ##isec Parameter Object

A parameter object MUST contain the member `$Name`, and it MAY contain
the members `$Type`, `$Collection`, `$Nullable`,
[`$MaxLength`](#MaxLength), [`$Unicode`](#Unicode),
[`$Precision`](#Precision), [`$Scale`](#Scale), and [`$SRID`](#SRID).

Parameter objects MAY also contain [annotations](#Annotation).

### ##subisec `$Name`

The value of `$Name` is a string containing the parameter name.

### ##subisec `$Type` 
and ##subisec `$Collection`

For single-valued parameters the value of `$Type` is the qualified name
of the accepted type.

For collection-valued parameters the value of `$Type` is the qualified
name of the accepted item type, and the member `$Collection` MUST be
present with the literal value `true`.

Absence of the `$Type` member means the type is `Edm.String`.

### ##subisec `$Nullable`

The value of `$Nullable` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.

For single-valued parameters the value `true` means that the parameter
accepts a `null` value.

For collection-valued parameters the parameter value will always be a
collection that MAY be empty. In this case `$Nullable` applies to items
of the collection and specifies whether the collection MAY contain
`null` values.
:::

::: {.varjson .example}
Example ##ex: a function returning the top-selling products for a given
year. In this case the year must be specified as a parameter of the
function with the `$Parameter` member.
```json
"TopSellingProducts": [
  {
    "$Kind": "Function",
    "$Parameter": [
      {
        "$Name": "Year",
        "$Nullable": true,
        "$Type": "Edm.Decimal",
        "$Precision": 4,
        "$Scale": 0
      }
    ],
    "$ReturnType": {
      "$Collection": true,
      "$Type": "self.Product"
    }
  }
]
```
:::

::: {.varxml .rep}
### ##isec Element `edm:Parameter`

The `edm:Parameter` element MUST contain the `Name` and the `Type`
attribute, and it MAY contain the attributes `Nullable`,
[`MaxLength`](#MaxLength), [`Unicode`](#Unicode),
[`Precision`](#Precision), [`Scale`](#Scale), and [`SRID`](#SRID).

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the parameter's name.

### ##subisec Attribute `Type`

For single-valued parameters the value of `Type` is the qualified name
of the parameter.

For collection-valued parameters the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the parameter's
type, followed by a closing parenthesis `)`.

### ##subisec Attribute `Nullable`

The value of `Nullable` is one of the Boolean literals `true` or
`false`. Absence of the attribute means `true`.

The value `true` means that the parameter accepts a `null` value.
:::

::: {.varxml .example}
Example ##ex: a function returning the top-selling products for a given
year. In this case the year must be specified as a parameter of the
function with the `edm:Parameter` element.
```xml
<Function Name="TopSellingProducts">
  <Parameter Name="Year" Type="Edm.Decimal" Precision="4" Scale="0" />
  <ReturnType Type="Collection(self.Product)" />
</Function>
```
:::
