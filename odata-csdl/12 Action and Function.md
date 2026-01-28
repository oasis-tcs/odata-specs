
-------

# ##sec Action and Function

## ##subsec Action

Actions are service-defined operations that MAY have observable side
effects and MAY return a single instance or a collection of instances of
any type.

The action's name is a [simple identifier](#SimpleIdentifier) that MUST
be unique within its schema.

Actions cannot be composed with additional path segments.

An action MAY specify a [return type](#ReturnType) that MUST be a
primitive, entity or complex type, or a collection of primitive, entity
or complex types in scope.

An action MAY define [parameters](#Parameter) used during the execution
of the action.

## ##subsec Action Overloads

[Bound](#BoundorUnboundActionorFunctionOverloads) actions support
overloading (multiple actions having the same name within the same
schema) by binding parameter type. The combination of action name and
the binding parameter type MUST be unique within a schema.

[Unbound](#BoundorUnboundActionorFunctionOverloads) actions do not support
overloads. The names of all unbound actions MUST be unique within a
schema.

An unbound action MAY have the same name as a bound action.

::: {.varjson .rep}
### ##isec Action Overload Object

An action is represented as a member of the schema object whose name is
the unqualified name of the action and whose value is an array. The
array contains one object per action overload.

The action overload object MUST contain the member `$Kind` with a string
value of `Action`.

It MAY contain the members
[`$IsBound`](#BoundorUnboundActionorFunctionOverloads),
[`$EntitySetPath`](#EntitySetPath), [`$Parameter`](#Parameter), and
[`$ReturnType`](#ReturnType), and it MAY contain
[annotations](#Annotation).
:::

::: {.varxml .rep}
### ##isec Element `edm:Action`

The `edm:Action` element MUST contain the `Name` attribute and it MAY
contain the [`IsBound`](#BoundorUnboundActionorFunctionOverloads) and
[`EntitySetPath`](#EntitySetPath) attributes.

It MAY contain at most one [`edm:ReturnType`](#ReturnType) element and
MAY contain [`edm:Parameter`](#Parameter) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the action's name.
:::

## ##subsec Function

Functions are service-defined operations that MUST NOT have observable
side effects and MUST return a single instance or a collection of
instances of any type.

The function's name is a [simple identifier](#SimpleIdentifier) that
MUST be unique within its schema.

Functions MAY be [composable](#ComposableFunction).

The function MUST specify a [return type](#ReturnType) which MUST be a
primitive, entity or complex type, or a collection of primitive, entity
or complex types in scope.

A function MAY define [parameters](#Parameter) used during the execution
of the function.

## ##subsec Function Overloads

[Bound](#BoundorUnboundActionorFunctionOverloads) functions support
overloading (multiple functions having the same name within the same
schema) subject to the following rules:
- The combination of function name,
binding parameter type, and unordered set of non-binding parameter names
MUST be unique within a schema.
- The combination of function name,
binding parameter type, and ordered set of parameter types MUST be
unique within a schema.
- All bound functions with the same
function name and binding parameter type within a schema MUST specify
the same return type.

[Unbound](#BoundorUnboundActionorFunctionOverloads) functions support
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

::: {.varjson .rep}
### ##isec Function Overload Object

A function is represented as a member of the schema object whose name is
the unqualified name of the function and whose value is an array. The
array contains one object per function overload.

The function overload object MUST contain the member `$Kind` with a
string value of `Function`.

It MUST contain the member [`$ReturnType`](#ReturnType), and it MAY
contain the members [`$IsBound`](#BoundorUnboundActionorFunctionOverloads),
[`$EntitySetPath`](#EntitySetPath), and [`$Parameter`](#Parameter),
and it MAY contain [annotations](#Annotation).
:::

::: {.varxml .rep}
### ##isec Element `edm:Function`

The `edm:Function` element MUST contain the `Name` attribute and it MAY
contain the [`IsBound`](#BoundorUnboundActionorFunctionOverloads) and
[`EntitySetPath`](#EntitySetPath) attributes.

It MUST contain one [`edm:ReturnType`](#ReturnType) element, and it MAY
contain [`edm:Parameter`](#Parameter) elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the action's name.
:::

## ##subsec Bound or Unbound Action or Function Overloads

An action or function overload MAY indicate that it is bound. If not
explicitly indicated, it is unbound.

Bound actions or functions are invoked on resources matching the type of
the binding parameter. The binding parameter can be of any type, and it
MAY be nullable.

Unbound actions are invoked from the entity container through an [action
import](#ActionImport).

Unbound functions are invoked as static functions within a common expression
(see [#OData-URL#CommonExpressionSyntax]),
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

## ##subsec Entity Set Path

Bound actions and functions that return an entity or a collection of
entities MAY specify an entity set path. The entity set path specifies the canonical collection
(as defined in [#OData-Protocol#ContextURL]) of the
returned entities in terms of the binding parameter value.

The entity set path consists of a series of segments joined together
with forward slashes.
The first segment of the entity set path MUST be the name of the binding
parameter.
If the entity set path consists only of the name of the binding parameter,
the binding parameter MUST be an entity or a collection of entities. In this case
the returned entities MUST belong to the same canonical collection
as the binding parameter.

Otherwise the entity set path has the form $p/s_1/…/s_k$ with $k>0$, and
the binding parameter MUST be single-valued.
The additional segments $s_1,…,s_k$ MUST be paths that could occur in an expand item [#OData-URL#SystemQueryOptionexpand],
and they MUST end with the name of a [navigation property](#NavigationProperty),
optionally followed by the [qualified name](#QualifiedName) of a type cast.
Furthermore, $s_1,…,s_{k-1}$ MUST be single-valued, and
$s_k$ MUST name a collection-valued navigation property.
In this case all returned entities MUST belong to the canonical collection $C$ of the final navigation
property, if this can be determined by the following algorithm:
1. Let $v$ be the binding parameter value, and let $α/β$ be the canonical URL of $v$
   where $α$ is either an entity set followed by a key predicate or a singleton, and $β$
   is a possibly empty concatenation of containment navigation properties, type casts and key predicates.
   Remove any key predicates from $α$ and $β$.
2. Let $i=1$.
3. If $i=k$, go to step 8.
4. Update $v$ to the result of evaluating the [instance path](#PathExpressions) $s_i$ on the instance $v$.
5. If $s_i$ names a containment navigation property, update $β=β/s_i$.
6. Otherwise $s_i$ names a non-containment navigation property. Determine
   the [navigation property binding](#NavigationPropertyBinding) defined by the service
   on the entity set or singleton $α$ whose path matches $β/s_i$;
   if it does not exist, then $C$ cannot be determined.
   The binding target of that navigation property binding is either an entity set $α'$ or has the form $α'/β'$ where $α'$ is a singleton.
   Update $α=α'$ and $β=β'$.
7. Update $i=i+1$ and go back to step 3.
8. If $s_k$ names a containment navigation property, let $C$ be the implicit
   entity set defined by $s_k$ for $v$ (as explained in [section ##ContainmentNavigationProperty]).
9. Otherwise $s_k$ names a non-containment navigation property. Determine
   the navigation property binding defined by the service on the entity set or singleton $α$
   whose path matches $β/s_k$; if it does not exist, then $C$ cannot be determined.
   Let $C$ be the binding target of that navigation property binding.

::: {.varjson .rep}
### ##subisec `$EntitySetPath`

The value of `$EntitySetPath` is a string containing the entity set
path.
:::

::: {.varxml .rep}
### ##subisec Attribute `EntitySetPath`

The value of `EntitySetPath` is the entity set path.
:::

## ##subsec Composable Function

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

## ##subsec Return Type

The return type of an action or function overload MAY be any type in
scope, or a collection of any type in scope.

The facets [`MaxLength`](#MaxLength),
[`Precision`](#Precision), [`Scale`](#Scale), and [`SRID`](#SRID) can be
used as appropriate to specify value restrictions of the return type, as
well as the [`Unicode`](#Unicode) facet for 4.01 or greater payloads.

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

For collection-valued return types the result will always be a
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

For collection-valued return types the result will always be a
collection that MAY be empty. In this case the `Nullable` attribute
applies to items of the collection and specifies whether the collection
MAY contain `null` values.

For single-valued return types the value `true` means that the action or
function MAY return a single `null` value. The value `false` means that
the action or function will never return a `null` value and instead will
fail with an error response if it cannot compute a result.
:::

### ##subisec Annotation `Core.IsDelta`

An action or function that returns a single entity or a collection of entities MAY return results as a delta payload.
This is indicated by annotating the return type with the term [Core.IsDelta]{.term}.

Delta payloads represent changes between two versions of data and, in addition
to current values, MAY include deleted entities as well as changes to related 
entities and relationships, according to the format-specific delta representation.

## ##subsec Parameter

An action or function overload MAY specify parameters.

A bound action or function overload MUST specify at least one parameter;
the first parameter is its binding parameter. The order of parameters
MUST NOT change unless the schema version changes.

Each parameter MUST have a name that is a [simple
identifier](#SimpleIdentifier). The parameter name MUST be unique within
the action or function overload.

The parameter MUST specify a type. It MAY be any type in scope, or a
collection of any type in scope.

The facets [`MaxLength`](#MaxLength), [`Precision`](#Precision),
[`Scale`](#Scale), or [`SRID`](#SRID) can be used as appropriate to
specify value restrictions of the parameter, as well as the
[`Unicode`](#Unicode) facet for 4.01 or greater payloads.

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

For single-valued parameters the value `true` means that the parameter
accepts a `null` value.

For collection-valued parameters the parameter value will always be a
collection that MAY be empty. In this case `Nullable` applies to items
of the collection and specifies whether the collection MAY contain
`null` values.
:::

### ##subisec Annotation `Core.OptionalParameter`

A parameter that is annotated with the term 
[Core.OptionalParameter]{.term} MAY be 
omitted when invoking the function or action.

All parameters marked as optional MUST come after any parameters not marked as optional. 

The binding parameter MUST NOT be marked as optional.

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

### ##subisec Annotation `Core.IsDelta`

A parameter that accepts a single entity or a collection of entities MAY accept a delta representation.
This is indicated by annotating the parameter with the term [Core.IsDelta]{.term}.

Deltas represent changes between two versions of data and, in addition
to current values, MAY include deleted entities as well as changes to related 
entities and relationships, according to the format-specific delta representation.
