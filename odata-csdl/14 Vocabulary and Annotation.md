
-------

# ##sec Vocabulary and Annotation

Vocabularies and annotations provide the ability to annotate metadata as
well as instance data, and define a powerful extensibility point for
OData. An [*annotation*](#Annotation) applies a [*term*](#Term) to a
model element and defines how to calculate a value for the applied term.

*Metadata annotations* are terms applied to model elements. Behaviors or
constraints described by a metadata annotation must be consistent with
the annotated model element. Such annotations define additional
behaviors or constraints on the model element, such as a service, entity
type, property, function, action, or parameter. For example, a metadata
annotation may define ranges of valid values for a particular property.
Metadata annotations are applied in CSDL documents describing or
referencing an entity model.

*Instance annotations* are terms applied to a particular instance within
an OData payload, such as described in [#OData-JSON#InstanceAnnotations]. An
instance annotation can be used to define additional information
associated with a particular result, entity, property, or error. For
example, whether a property is read-only for a particular instance.
Where the same annotation is defined at both the metadata and instance
level, the instance-level annotation overrides the annotation specified
at the metadata level. Annotations that apply across instances should be
specified as metadata annotations.

A *vocabulary* is a schema containing a set of terms where each
[term](#Term) is a named metadata extension. Anyone can define a
vocabulary (a set of terms) that is scenario-specific or
company-specific; more commonly used terms can be published as shared
vocabularies such as the OData Core vocabulary
[OData-VocCore](#ODataVocCore).

A [term](#Term) can be used to:
- Extend model elements and type instances
with additional information. Type instances are instances of a [primitive type](#PrimitiveTypes),
including [type definitions](#TypeDefinition) and [enumeration types](#EnumerationType),
of an [entity type](#EntityType), or of a [complex type](#ComplexType).
- Map instances of annotated structured
types to an interface defined by the term type; i.e. annotations allow
viewing instances of a structured type as instances of a differently
structured type specified by the applied term.

A service SHOULD NOT require a client to interpret annotations. Clients
SHOULD ignore invalid or unknown terms and silently treat unexpected or
invalid values (including invalid type, invalid literal expression,
invalid targets, etc.) as an unknown value for the term. Unknown or
invalid annotations should never result in an error, as long as the
payload remains well-formed.

::: {.varjson .example}
Example ##ex: the `Product` entity type is extended with a `DisplayName`
by a metadata annotation that binds the term `DisplayName` to the value
of the property `Name`. The `Product` entity type also includes an
annotation that allows its instances to be viewed as instances of the
type specified by the term `SearchResult`
```json
"Product": {
  "$Kind": "EntityType",
  "$Key": [
    "ID"
  ],
  "ID": {
    "$Type": "Edm.Int32"
  },
  "Name": {
    "$Nullable": true
  },
  "Description": {
    "$Nullable": true
  },
  "@UI.DisplayName": {
    "$Path": "Name"
  },
  "@SearchVocabulary.SearchResult": {
    "Title": {
      "$Path": "Name"
    },
    "Abstract": {
      "$Path": "Description"
    },
    "Url": {
      "$Apply": [
        "Products(",
        {
          "$Apply": [
            {
              "$Path": "ID"
            },
            ")"
          ],
          "$Function": "odata.concat"
        }
      ],
      "$Function": "odata.concat"
    }
  }
}
```
:::

::: {.varxml .example}
Example ##ex: the `Product` entity type is extended with a `DisplayName`
by a metadata annotation that binds the term `DisplayName` to the value
of the property `Name`. The `Product` entity type also includes an
annotation that allows its instances to be viewed as instances of the
type specified by the term `SearchResult`
```xml
<EntityType Name="Product">
  <Key>
    <PropertyRef Name="ID" />
  </Key>
  <Property Name="ID" Nullable="false" Type="Edm.Int32" />
  <Property Name="Name" Type="Edm.String" />
  <Property Name="Description" Type="Edm.String" />
  …
  <Annotation Term="UI.DisplayName" Path="Name" />
  <Annotation Term="SearchVocabulary.SearchResult">
    <Record>
      <PropertyValue Property="Title" Path="Name" />
      <PropertyValue Property="Abstract" Path="Description" />
      <PropertyValue Property="Url">
        <Apply Function="odata.concat">
          <String>Products(</String>
          <Apply Function="odata.concat">
            <Path>ID</Path>
            <String>)</String>
          </Apply>
        </Apply>
      </PropertyValue>
    </Record>
  </Annotation>
</EntityType>
```
:::

## ##subsec Term

A term allows annotating a model element or OData resource
representation with additional data.

The term's name is a [simple identifier](#SimpleIdentifier) that MUST be
unique within its schema.

The term's type MUST be a type in scope, or a collection of a type in
scope.

::: {.varjson .rep}
### ##isec Term Object

A term is represented as a member of the schema object whose name is the
unqualified name of the term and whose value is an object.

The term object MUST contain the member `$Kind` with a string value of
`Term`.

It MAY contain the members `$Type`, `$Collection`, `$Nullable`, `$DefaultValue`,
[`$BaseTerm`](#SpecializedTerm),
[`$AppliesTo`](#Applicability),
[`$MaxLength`](#MaxLength), [`$Precision`](#Precision),
[`$Scale`](#Scale), and [`$SRID`](#SRID), as well as
[`$Unicode`](#Unicode) for 4.01 or greater payloads.

It MAY contain [annotations](#Annotation).

### ##subisec `$Type` 
and ##subisec `$Collection`

For single-valued terms the value of `$Type` is the qualified name of
the term's type.

For collection-valued terms the value of `$Type` is the qualified name
of the term's item type, and the member `$Collection` MUST be present
with the literal value `true`.

Absence of the `$Type` member means the type is `Edm.String`.

### ##subisec `$Nullable`

The value of `$Nullable` is one of the Boolean literals `true` or
`false`. Absence of the member means `false`.

For single-valued terms  the value `true` means that annotations may have
the `null` value.

For collection-valued terms the annotation value will always be a
collection that MAY be empty. In this case `$Nullable` applies to items
of the collection and specifies whether the collection MAY contain
`null` values.

### ##subisec `$DefaultValue`

The value of `$DefaultValue` is the type-specific JSON representation of
the default value of the term, see
[#OData-JSON#PrimitiveValue].

Note: the `$DefaultValue` member is purely for documentation and
isomorphy to [#OData-CSDLXML#Term]. Annotations in
CSDL JSON documents MUST always specify an explicit value.
:::

::: {.varxml .rep}
### ##isec Element `edm:Term`

The `edm:Term` element MUST contain the attributes `Name` and `Type`. It
MAY contain the attributes `Nullable`, `DefaultValue`, [`BaseTerm`](#SpecializedTerm) and [`AppliesTo`](#Applicability).

The facets [`MaxLength`](#MaxLength),
[`Precision`](#Precision), [`Scale`](#Scale), and [`SRID`](#SRID) can be
used as appropriate, as well as the [`Unicode`](#Unicode) facet attribute for
4.01 or greater payloads.

A `edm:Term` element whose `Type` attribute specifies a primitive or
enumeration type MAY define a value for the `DefaultValue` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the term's name.

### ##subisec Attribute `Type`

For single-valued terms the value of `Type` is the qualified name
of the term's type.

For collection-valued properties the value of `Type` is the character
sequence `Collection(` followed by the qualified name of the property's
item type, followed by a closing parenthesis `)`.

### ##subisec Attribute `Nullable`

The value of `Nullable` is one of the Boolean literals `true` or
`false`.

For single-valued terms the value `true` means that annotations may have the `null` value.

For collection-valued terms the annotation value will always be a
collection that MAY be empty. In this case the `Nullable` attribute
applies to items of the collection and specifies whether the collection
MAY contain `null` values.

If no value is specified for a single-valued term, the `Nullable`
attribute defaults to `true`.

In OData 4.01 responses a collection-valued term MUST specify a
value for the `Nullable` attribute.

If no value is specified for a collection-valued term, the client
cannot assume any default value. Clients SHOULD be prepared for this
situation even in OData 4.01 responses.

### ##subisec Attribute `DefaultValue`

The value of this attribute determines the value of the term when
applied in an [`edm:Annotation`](#Annotation) without providing an
expression.

Default values of type `Edm.String` MUST be represented according to the
XML escaping rules for character data in attribute values. Values of
other primitive types MUST be represented according to the appropriate
alternative in the `primitiveValue` rule defined in
[OData-ABNF](#ODataABNF), i.e. `Edm.Binary` as `binaryValue`,
`Edm.Boolean` as `booleanValue` etc.

If no value is specified, the `DefaultValue` attribute defaults to
`null`.
:::

### ##subsubsec Specialized Term

A term MAY specialize another term in scope by specifying it as its base
term.

When applying a specialized term, the base term MUST also be applied
with the same qualifier, and so on until a term without a base term is
reached.

::: {.varjson .rep}
### ##subisec `$BaseTerm`

The value of `$BaseTerm` is the qualified name of the base term.
:::

::: {.varxml .rep}
### ##subisec Attribute `BaseTerm`

The value of `BaseTerm` is the qualified name of the base term.
:::

### ##subsubsec Applicability

Applicability specifies a list of model elements to which the term MAY be applied.
If no list is supplied, the term MAY be applied to any model element.
The list of model elements MAY be extended in future versions of the vocabulary. As the intended usage may
evolve over time, clients SHOULD be prepared for any term to be applied
to any model element and SHOULD be prepared to handle unknown values
within the list of model constructs. Applicability is expressed using
the following symbolic values:

Symbolic Value|Model Element
--------------|-------------
`Action`                  |Action
`ActionImport`            |Action Import
`Annotation`              |Annotation
`Apply`                   |Application of a client-side function in an annotation
`Cast`                    |Type Cast annotation expression
`Collection`              |Entity Set or collection-valued Property or Navigation Property
`ComplexType`             |Complex Type
`EntityContainer`         |Entity Container
`EntitySet`               |Entity Set
`EntityType`              |Entity Type
`EnumType`                |Enumeration Type
`Function`                |Function
`FunctionImport`          |Function Import
`If`                      |Conditional annotation expression
`Include`                 |Reference to an Included Schema
`IsOf`                    |Type Check annotation expression
`LabeledElement`          |Labeled Element expression
`Member`                  |Enumeration Member
`NavigationProperty`      |Navigation Property
`Null`                    |Null annotation expression
`OnDelete`                |On-Delete Action of a navigation property
`Parameter`               |Action or Function Parameter
`Property`                |Structural Property
`PropertyValue`           |Property value of a Record annotation expression
`Record`                  |Record annotation expression
`Reference`               |Reference to another CSDL document
`ReferentialConstraint`   |Referential Constraint of a navigation property
`ReturnType`              |Return Type of an Action or Function
`Schema`                  |Schema
`Singleton`               |Singleton or single-valued Property or Navigation Property
`Term`                    |Term
`TypeDefinition`          |Type Definition
`UrlRef`                  |UrlRef annotation expression

::: {.varjson .rep}
### ##subisec `$AppliesTo`

The value of `$AppliesTo` is an array whose items are strings containing
symbolic values from the table above that identify model elements the
term is intended to be applied to.
:::

::: {.varjson .example}
Example ##ex: the `IsURL` term can be applied to properties and terms that
are of type `Edm.String` (the `Core.Tag` type and the two `Core` terms
are defined in [OData-VocCore](#ODataVocCore))
```json
"IsURL": {
  "$Kind": "Term",
  "$Type": "Core.Tag",
  "$DefaultValue": true,
  "$AppliesTo": [
    "Property",
    "Term"
  ],
  "@Core.Description": "Properties and terms annotated with this term MUST contain a valid URL",
  "@Core.RequiresType": "Edm.String"
}
```
:::

::: {.varxml .rep}
### ##subisec Attribute `AppliesTo`

The value of `AppliesTo` is a whitespace-separated list of symbolic
values from the table above that identify model elements the term is
intended to be applied to.
:::

::: {.varxml .example}
Example ##ex: the `IsURL` term can be applied to properties and terms that
are of type `Edm.String` (the `Core.Tag` type and the two `Core` terms
are defined in [OData-VocCore](#ODataVocCore))
```xml
<Term Name="IsURL" Type="Core.Tag" Nullable="false" DefaultValue="true"
      AppliesTo="Property Term">
  <Annotation Term="Core.Description">
    <String>
      Properties and terms annotated with this term MUST contain a valid URL
    </String>
  </Annotation>
  <Annotation Term="Core.RequiresType" String="Edm.String" />
</Term>
```
:::

## ##subsec Annotation

An annotation applies a [term](#Term) to a model element and defines how
to calculate a value for the term application. Both term and model
element MUST be in scope. Section 14.1.2 specifies which model elements
MAY be annotated with a term.

The value of an annotation is specified as an *annotation expression*,
which is either a [constant expression](#ConstantExpression)
representing a constant value, or a [dynamic
expression](#DynamicExpression). The most common construct for assigning
an annotation value is a [path expression](#ValuePath) that refers to a
property of the same or a related structured type.

::: {.varjson .rep}
### ##isec Annotation Member

An annotation is represented as a member whose name consists of an at
(`@`) character, followed by the qualified name of a term, optionally
followed by a hash (`#`) and a [qualifier](#Qualifier).

The value of the annotation MUST be a [constant
expression](#ConstantExpression) or [dynamic
expression](#DynamicExpression).

The annotation can be a member of the object representing the model
element it annotates, or a second-level member of the
[`$Annotations`](#AnnotationswithExternalTargeting) member of a schema
object.

An annotation can itself be annotated. Annotations on annotations are
represented as a member whose name consists of the annotation name
(including the optional qualifier), followed by an at (`@`) character,
followed by the qualified name of a term, optionally followed by a hash
(`#`) and a [qualifier](#Qualifier).
:::

::: {.varjson .example}
Example ##ex: term `Measures.ISOCurrency`, once applied with a constant
value, once with a path value
```json
"AmountInReportingCurrency": {
  "$Nullable": true,
  "$Type": "Edm.Decimal",
  "$Scale": 0,
  "@Measures.ISOCurrency": "USD",
  "@Measures.ISOCurrency@Core.Description": "The parent company's currency"
},
"AmountInTransactionCurrency": {
  "$Nullable": true,
  "$Type": "Edm.Decimal",
  "$Scale": 0,
  "@Measures.ISOCurrency": {
    "$Path": "Currency"
  }
},
"Currency": {
  "$Nullable": true,
  "$MaxLength": 3
}
```
:::

::: {.varxml .rep}
### ##isec Element `edm:Annotation`

The `edm:Annotation` element MUST contain the attribute `Term`, and it
MAY contain the attribute [`Qualifier`](#Qualifier).

The value of the annotation MAY be a [constant
expression](#ConstantExpression) or [dynamic
expression](#DynamicExpression).

If no expression is specified for a term with a primitive type, the
annotation evaluates to the [default value](#DefaultValue) of the term
definition. If no expression is specified for a term with a complex
type, the annotation evaluates to a complex instance with default values
for its properties. If no expression is specified for a
collection-valued term, the annotation evaluates to an empty collection.

An `edm:Annotation` element can be used as a child of the model element
it annotates, or as the child of an
[`edm:Annotations`](#AnnotationswithExternalTargeting) element that
targets the model element to be annotated.

An `edm:Annotation` element MAY contain [`edm:Annotation`](#Annotation)
elements that annotate the annotation.

### ##subisec Attribute `Term`

The value of `Term` is the qualified name of a [term](#Term) in scope.
:::

::: {.varxml .example}
Example ##ex: term `Measures.ISOCurrency`, once applied with a constant
value, once with a path value
```xml
<Property Name="AmountInReportingCurrency" Type="Edm.Decimal">
  <Annotation Term="Measures.ISOCurrency" String="USD">
    <Annotation Term="Core.Description"
                String="The parent company's currency" />
  </Annotation>
</Property>
<Property Name="AmountInTransactionCurrency" Type="Edm.Decimal">
  <Annotation Term="Measures.ISOCurrency" Path="Currency" />
</Property>
<Property Name="Currency" Type="Edm.String" MaxLength="3" />
```
:::

If an entity type or complex type is annotated with a term that itself
has a structured type, an instance of the annotated type may be viewed
as an "instance" of the term, and the qualified term name may be used as
a [term-cast segment](#TermCast) in path expressions.

Structured types "inherit" annotations from their direct or indirect
base types. If both the type and one of its base types is annotated with
the same term and qualifier, the annotation on the type completely
replaces the annotation on the base type; structured or
collection-valued annotation values are not merged. Similarly,
properties of a structured type inherit annotations from identically
named properties of a base type.

It is up to the definition of a term to specify whether and how
annotations with this term propagate to places where the annotated model
element is used, and whether they can be overridden. E.g. a "Label"
annotation for a UI can propagate from a type definition to all
properties using that type definition and may be overridden at each
property with a more specific label, whereas an annotation marking a
type definition as containing a phone number will propagate to all using
properties but may not be overridden.

### ##subsubsec Qualifier

A term can be applied multiple times to the same model element by
providing a qualifier to distinguish the annotations. The qualifier is a
[simple identifier](#SimpleIdentifier).

The combination of target model element, term, and qualifier uniquely
identifies an annotation.

::: {.varjson .example}
Example ##ex: annotation should only be applied to tablet devices
```json
"@UI.DisplayName#Tablet": {
  "$Path": "FirstName"
}
```
:::

::: {.varxml .rep}
### ##subisec Attribute `Qualifier`

Annotation elements that are children of an
[`edm:Annotations`](#AnnotationswithExternalTargeting) element MUST NOT
provide a value for the qualifier attribute if the parent
[`edm:Annotations`](#AnnotationswithExternalTargeting) element provides
a value for the qualifier attribute.
:::

::: {.varxml .example}
Example ##ex: annotation should only be applied to tablet devices
```xml
<Annotation Term="org.example.display.DisplayName" Path="FirstName"
            Qualifier="Tablet" />
```
:::

### ##subsubsec Target

The target of an annotation is the model element the term is applied to.

The target of an annotation MAY be specified indirectly by "nesting" the
annotation within the model element. Whether and how this is possible is
described per model element in this specification.

The target of an annotation MAY also be specified directly; this allows
defining an annotation in a different schema than the targeted model
element.

This external targeting is only possible for model elements that are
uniquely identified within their parent, and all their ancestor elements
are uniquely identified within their parent.

These are the direct children of a schema with a unique name (i.e.
except actions and functions whose overloads to not possess a natural
identifier), and all direct children of an entity container.

Model element| 
External targeting syntax| 
<div class="example"><p>Example ##ex: Target expressions</p></div>
-----|-----|-----
[Action](#Action) overload| 
qualified name of action followed by parentheses containing the binding parameter type of a bound action overload to identify that bound overload, or by empty parentheses to identify the unbound overload| 
<pre>`MySchema.MyAction(MySchema.MyBindingType)` 
<br>`MySchema.MyAction(Collection(MySchema.BindingType))` 
<br>`MySchema.MyAction()`</pre>
all overloads of an [Action](#Action)| 
qualified name of action| 
<pre>`MySchema.MyAction`</pre>
[Action Import](#ActionImport)| 
qualified name of entity container followed by a segment containing the action import name| 
<pre>`MySchema.MyEntityContainer/MyActionImport`</pre>
[Annotation](#Annotation) on a model element| 
path expression identifying the model element followed by a segment containing an at (`@`) prepended to the qualified name of a term, optionally suffixed with a hash (`#`) and the qualifier of an annotation| 
<pre>`MySchema.MyEntityType/@MyVocabulary.MyTerm` 
<br>`MySchema.MyEntityType/@MyVocabulary.MyTerm#MyQualifier`</pre>
[Complex Type](#ComplexType)| 
qualified name of complex type| 
<pre>`MySchema.MyComplexType`</pre>
[Entity Container](#EntityContainer)| 
qualified name of entity container| 
<pre>`MySchema.MyEntityContainer`</pre>
[Entity Set](#EntitySet)| 
qualified name of entity container followed by a segment containing the entity set name| 
<pre>`MySchema.MyEntityContainer/MyEntitySet`</pre>
[Entity Type](#EntityType)| 
qualified name of entity type| 
<pre>`MySchema.MyEntityType`</pre>
[Enumeration Type](#EnumerationType)| 
qualified name of enumeration type| 
<pre>`MySchema.MyEnumType`</pre>
[Enumeration Type Member](#EnumerationTypeMember)| 
qualified name of enumeration type followed by a segment containing the name of a child element| 
<pre>`MySchema.MyEnumType/MyMember`</pre>
[Function](#Function) overload| 
qualified name of function followed by parentheses containing the comma-separated list of the parameter types of a bound or unbound function overload in the order of their definition in the function overload| 
<pre>`MySchema.MyFunction(MySchema.MyBindingParamType,` 
<br>`  First.NonBinding.ParamType)` 
<br>`MySchema.MyFunction(First.NonBinding.ParamType,` 
<br>`  Second.NonBinding.ParamType)`</pre>
all overloads of a [Function](#Function)| 
qualified name of function| 
<pre>`MySchema.MyFunction`</pre>
[Function Import](#FunctionImport)| 
qualified name of entity container followed by a segment containing the function import name| 
<pre>`MySchema.MyEntityContainer/MyFunctionImport`</pre>
[Navigation Property](#NavigationProperty) via container| 
qualified name of entity container followed by a segment containing a singleton or entity set name and zero or more segments containing the name of a structural or navigation property, or a type-cast or term-cast| 
<pre>`MySchema.MyEntityContainer/MyEntitySet` 
<br>`  /MyNavigationProperty` 
<br>`MySchema.MyEntityContainer/MyEntitySet` 
<br>`  /MySchema.MyEntityType/MyNavProperty` 
<br>`MySchema.MyEntityContainer/MyEntitySet` 
<br>`  /MyComplexProperty/MyNavProperty` 
<br>`MySchema.MyEntityContainer/MySingleton` 
<br>`  /MyComplexProperty/MyNavProperty`</pre>
[Navigation Property](#NavigationProperty) via structured type| 
qualified name of structured type followed by zero or more segments containing the name of a structural or navigation property, or a type-cast or term-cast| 
<pre>`MySchema.MyEntityType/MyNavigationProperty` 
<br>`MySchema.MyComplexType/MyNavigationProperty`</pre>
[Parameter](#Parameter)| 
qualified name of entity container followed by a segment containing an action or function import name followed by a segment containing a parameter name| 
<pre>`MySchema.MyEntityContainer/MyFunctionImport/MyParameter`</pre>
[Parameter](#Parameter)| 
qualified name of action or function optionally followed by a parenthesized expression as in the first row followed by a segment containing the name of a child element| 
<pre>`MySchema.MyFunction/MyParameter`</pre>
[Property](#StructuralProperty) via container| 
qualified name of entity container followed by a segment containing a singleton or entity set name and zero or more segments containing the name of a structural or navigation property, or a type-cast or term-cast| 
<pre>`MySchema.MyEntityContainer/MyEntitySet` 
<br>` /MyProperty` 
<br>`MySchema.MyEntityContainer/MyEntitySet` 
<br>` /MySchema.MyEntityType/MyProperty` 
<br>`MySchema.MyEntityContainer/MyEntitySet` 
<br>`  /MyComplexProperty/MyProperty`</pre>
[Property](#StructuralProperty) via structured type| 
qualified name of structured type followed by zero or more segments containing the name of a structural or navigation property, or a type-cast or term-cast| 
<pre>`MySchema.MyEntityType/MyProperty` 
<br>`MySchema.MyComplexType/MyProperty`</pre>
[Return Type](#ReturnType)| 
qualified name of entity container followed by a segment containing an action or function import name followed by a segment containing `$ReturnType`| 
<pre>`MySchema.MyEntityContainer/MyFunctionImport/$ReturnType`</pre>
[Return Type](#ReturnType)| 
qualified name of action or function optionally followed by a parenthesized expression as in the first row followed by a segment containing `$ReturnType`| 
<pre>`MySchema.MyFunction/$ReturnType` 
<br>`MySchema.MyFunction(MySchema.MyBindingParamType,` 
<br>`  First.NonBinding.ParamType)/$ReturnType`</pre>
[Singleton](#Singleton)| 
qualified name of entity container followed by a segment containing a singleton name| 
<pre>`MySchema.MyEntityContainer/MySingleton`</pre>
[Term](#Term)| 
qualified name of term| 
<pre>`MySchema.MyTerm`</pre>
[Type Definition](#TypeDefinition)| 
qualified name of type definition| 
<pre>`MySchema.MyTypeDefinition`</pre>

All [qualified names](#QualifiedName) used in a target expression MUST be in scope.

External targeting is possible for properties and navigation
properties of singletons or entities in a particular entity set. These
annotations override annotations on the properties or navigation
properties targeted via the declaring structured type.

## ##subsec Constant Expression

Constant expressions allow assigning a constant value to an applied
term.

: varjson
Primitive values of various types are represented as strings, therefore their type
cannot be inferred from the constant expression alone. If such
an ambiguous constant expression is an operand of a larger expression, clients MUST assume
that the operand has the type demanded by the larger expression, for example, in a
client-side function or in a comparison with another operand of known type.
(In the `$Le` comparison in [example ##disambiguate] `Duration` is of type
`Edm.Duration`, therefore the constant expression `"PT1H"` is a duration, not a string.)
:

### ##subsubsec Binary

::: {.varjson .rep}
Binary expressions are represented as a string containing the
base64url-encoded binary value.
:::

::: {.varjson .example}
Example ##ex: base64url-encoded binary value (OData)
```json
"@UI.Thumbnail": "T0RhdGE"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Binary`

The `edm:Binary` expression evaluates to a primitive binary value. A
binary expression MUST be assigned a value conforming to the rule
`binaryValue` in [OData-ABNF](#ODataABNF).

The binary expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example ##ex: base64url-encoded binary value (OData)
```xml
<Annotation Term="org.example.display.Thumbnail" Binary="T0RhdGE" />

<Annotation Term="org.example.display.Thumbnail">
  <Binary>T0RhdGE</Binary>
</Annotation>
```
:::

### ##subsubsec Boolean

::: {.varjson .rep}
Boolean expressions are represented as the literals `true` or `false`.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.ReadOnly": true
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Bool`

The `edm:Bool` expression evaluates to a primitive Boolean value. A
Boolean expression MUST be assigned a Boolean value.

The Boolean expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.ReadOnly" Bool="true" />

<Annotation Term="org.example.display.ReadOnly">
  <Bool>true</Bool>
</Annotation>
```
:::

### ##subsubsec Date

::: {.varjson .rep}
Date expressions are represented as a string containing the date value.
The value MUST conform to type `xs:date`, see
[XML-Schema-2](#XML-Schema2), [section
3.3.9](http://www.w3.org/TR/xmlschema11-2/#date). The value MUST also
conform to rule `dateValue` in [OData-ABNF](#ODataABNF), i.e. it MUST
NOT contain a time-zone offset.
:::

::: {.varjson .example}
Example ##ex:
```json
"@vCard.birthDay": "2000-01-01"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Date`

The `edm:Date` expression evaluates to a primitive date value. A date
expression MUST be assigned a value of type `xs:date`, see
[XML-Schema-2](#XML-Schema2), [section
3.3.9](http://www.w3.org/TR/xmlschema11-2/#date). The value MUST also
conform to rule `dateValue` in [OData-ABNF](#ODataABNF), i.e. it MUST
NOT contain a time-zone offset.

The date expression MAY be provided using element notation or attribute
notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.vCard.birthDay" Date="2000-01-01" />

<Annotation Term="org.example.vCard.birthDay">
  <Date>2000-01-01</Date>
</Annotation>
```
:::

### ##subsubsec DateTimeOffset

::: {.varjson .rep}
Datetimestamp expressions are represented as a string containing the
timestamp value. The value MUST conform to type `xs:dateTimeStamp`, see
[XML-Schema-2](#XML-Schema2), [section
3.4.28](http://www.w3.org/TR/xmlschema11-2/#dateTimeStamp). The value
MUST also conform to rule `dateTimeOffsetValue` in
[OData-ABNF](#ODataABNF), i.e. it MUST NOT contain an end-of-day
fragment (24:00:00).
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.LastUpdated": "2000-01-01T16:00:00.000Z"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:DateTimeOffset`

The `edm:DateTimeOffset` expression evaluates to a primitive
datetimestamp value with a time-zone offset. A datetimestamp expression
MUST be assigned a value of type `xs:dateTimeStamp`, see
[XML-Schema-2](#XML-Schema2), [section
3.4.28](http://www.w3.org/TR/xmlschema11-2/#dateTimeStamp). The value
MUST also conform to rule `dateTimeOffsetValue` in
[OData-ABNF](#ODataABNF), i.e. it MUST NOT contain an end-of-day
fragment (24:00:00).

The datetimestamp expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.LastUpdated"

            DateTimeOffset="2000-01-01T16:00:00.000Z" />

<Annotation Term="org.example.display.LastUpdated">
  <DateTimeOffset>2000-01-01T16:00:00.000-09:00</DateTimeOffset>
</Annotation>
```
:::

### ##subsubsec Decimal

::: {.varjson .rep}
Decimal expressions are represented as either a number or a string. The
special values `INF`, `-INF`, or `NaN` are represented as strings.
Numeric values are represented as numbers or strings depending on the
media type parameter
[`IEEE754Compatible`](#ControllingtheRepresentationofNumbers).
:::

::: {.varjson .example}
Example ##ex: default representation as a number
```json
"@UI.Width": 3.14
```
:::

::: {.varjson .example}
Example ##ex: "safe" representation as a string
```json
"@UI.Width": "3.14"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Decimal`

The `edm:Decimal` expression evaluates to a primitive decimal value. A
decimal expression MUST be assigned a value conforming to the rule
`decimalValue` in [OData-ABNF](#ODataABNF).

The decimal expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .rep}
Example ##ex: attribute notation
```xml
<Annotation Term="org.example.display.Width" Decimal="3.14" />
```
:::

::: {.varxml .example}
Example ##ex: element notation
```xml
<Annotation Term="org.example.display.Width">
  <Decimal>3.14</Decimal>
</Annotation>
```
:::

### ##subsubsec Duration

::: {.varjson .rep}
Duration expressions are represented as a string containing the duration
value. The value MUST conform to type `xs:dayTimeDuration`, see
[XML-Schema-2](#XML-Schema2), [section
3.4.27](http://www.w3.org/TR/xmlschema11-2/#dayTimeDuration).
:::

::: {.varjson .example}
Example ##ex:
```json
"@task.duration": "P7D"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Duration`

The `edm:Duration` expression evaluates to a primitive duration value. A
duration expression MUST be assigned a value of type
`xs:dayTimeDuration`, see [XML-Schema-2](#XML-Schema2),
[section 3.4.27](http://www.w3.org/TR/xmlschema11-2/#dayTimeDuration).

The duration expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.task.duration" Duration="P7D" />

<Annotation Term="org.example.task.duration">
  <Duration>P11DT23H59M59.999999999999S</Duration>
</Annotation>
```
:::

### ##subsubsec Enumeration Member

::: {.varjson .rep}
Enumeration member expressions are represented as a string containing
the numeric or symbolic enumeration value.
:::

::: {.varjson .example}
Example ##ex: single value `Red` with numeric value and symbolic value
```json
"@self.HasPattern": "1"
```

```json
"@self.HasPattern": "Red"
```
:::

::: {.varjson .example}
Example ##ex: combined value `Red,Striped` with numeric value 1 + 16 and
symbolic value
```json
"@self.HasPattern": "17"
```

```json
"@self.HasPattern": "Red,Striped"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:EnumMember`

The `edm:EnumMember` expression references a
[member](#EnumerationTypeMember) of an [enumeration
type](#EnumerationType). An enumeration member expression MUST be
assigned a value that consists of the qualified name of the enumeration
type, followed by a forward slash and the name of the enumeration
member. If the enumeration type specifies an `IsFlags` attribute with
value `true`, the expression MAY also be assigned a whitespace-separated
list of values. Each of these values MUST resolve to the name of a
member of the enumeration type of the specified term.

The enumeration member expression MAY be provided using element notation
or attribute notation.
:::

::: {.varxml .example}
Example ##ex: single value
```xml
<Annotation Term="org.example.HasPattern"
             EnumMember="org.example.Pattern/Red" />

<Annotation Term="org.example.HasPattern">
  <EnumMember>org.example.Pattern/Red</EnumMember>
</Annotation>
```
:::

::: {.varxml .example}
Example ##ex: combined value for `IsFlags` enumeration type
```xml
<Annotation Term="org.example.HasPattern"
           EnumMember="org.example.Pattern/Red org.example.Pattern/Striped" />

<Annotation Term="org.example.HasPattern">
  <EnumMember>org.example.Pattern/Red org.example.Pattern/Striped</EnumMember>
</Annotation>
```
:::

### ##subsubsec Floating-Point Number

::: {.varjson .rep}
Floating-point expressions are represented as a number or as a string
containing one of the special values `INF`, `-INF`, or `NaN`.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.FloatWidth": 3.14
```

```json
"@UI.FloatWidth": "INF"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Float`

The `edm:Float` expression evaluates to a primitive floating point (or
double) value. A float expression MUST be assigned a value conforming to
the rule `doubleValue` in [OData-ABNF](#ODataABNF).

The float expression MAY be provided using element notation or attribute
notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.Width" Float="3.14" />

<Annotation Term="org.example.display.Width">
  <Float>3.14</Float>
</Annotation>
```
:::

### ##subsubsec Guid

::: {.varjson .rep}
Guid expressions are represented as a string containing the uuid value.
The value MUST conform to the rule `guidValue` in
[OData-ABNF](#ODataABNF).
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.Id": "21EC2020-3AEA-1069-A2DD-08002B30309D"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Guid`

The `edm:Guid` expression evaluates to a primitive guid value. A guid
expression MUST be assigned a value conforming to the rule `guidValue`
in [OData-ABNF](#ODataABNF).

The guid expression MAY be provided using element notation or attribute
notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.Id"
            Guid="21EC2020-3AEA-1069-A2DD-08002B30309D" />

<Annotation Term="org.example.display.Id">
  <Guid>21EC2020-3AEA-1069-A2DD-08002B30309D</Guid>
</Annotation>
```
:::

### ##subsubsec Integer

::: {.varjson .rep}
Integer expressions are represented as either a number or a string,
depending on the media type parameter
[`IEEE754Compatible`](#ControllingtheRepresentationofNumbers).
:::

::: {.varjson .example}
Example ##ex: default representation as a number
```json
"@An.Int": 42
```
:::

::: {.varjson .example}
Example ##ex: "safe" representation as a string
```json
"@A.Very.Long.Int": "9007199254740992"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Int`

The `edm:Int` expression evaluates to a primitive integer value. An
integer MUST be assigned a value conforming to the rule `int64Value` in
[OData-ABNF](#ODataABNF).

The integer expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example ##ex: attribute notation
```xml
<Annotation Term="org.example.display.Width" Int="42" />
```
:::

::: {.varxml .example}
Example ##ex: element notation
```xml
<Annotation Term="org.example.display.Width">
  <Int>42</Int>
</Annotation>
```
:::

### ##subsubsec String

::: {.varjson .rep}
String expressions are represented as a JSON string.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.DisplayName": "Product Catalog"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:String`

The `edm:String` expression evaluates to a primitive string value. A
string expression MUST be assigned a value of the type `xs:string`, see
[XML-Schema-2](#XML-Schema2), [section
3.3.1](http://www.w3.org/TR/xmlschema11-2/#string).

The string expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.DisplayName" String="Product Catalog" />

<Annotation Term="org.example.display.DisplayName">
  <String>Product Catalog</String>
</Annotation>
```
:::

### ##subsubsec Time of Day

::: {.varjson .rep}
Time-of-day expressions are represented as a string containing the
time-of-day value. The value MUST conform to the rule `timeOfDayValue`
in [OData-ABNF](#ODataABNF).
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.EndTime": "21:45:00"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:TimeOfDay`

The `edm:TimeOfDay` expression evaluates to a primitive time value. A
time-of-day expression MUST be assigned a value conforming to the rule
`timeOfDayValue` in [OData-ABNF](#ODataABNF).

The time-of-day expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.EndTime" TimeOfDay="21:45:00" />

<Annotation Term="org.example.display.EndTime">
  <TimeOfDay>21:45:00</TimeOfDay>
</Annotation>
```
:::

### ##subsubsec Geo Values

::: {.varjson .rep}
Values are represented as GeoJSON, see [RFC7946](#rfc7946).
:::

::: {.varjson .example}
Example ##ex:
```json
"Location": { "type": "Point", "coordinates": [142.1,64.1] }
```
:::

::: {.varxml .rep}
Values are represented as [string expressions](#String) using the WKT (well-known text) format for `Geo` types, see rules
`fullCollectionLiteral`, `fullLineStringLiteral`,
`fullMultiPointLiteral`, `fullMultiLineStringLiteral`,
`fullMultiPolygonLiteral`, `fullPointLiteral`, and
`fullPolygonLiteral` in
[OData-ABNF](#ODataABNF).
:::

::: {.varxml .example}
Example ##ex:
```xml
<PropertyValue Property="Location" String="geography'SRID=0;Point(142.1 64.1)'" />
```
:::

### ##subsubsec Stream Values

::: {.varjson .rep}
Constant values of type `Edm.Stream` are represented according to [#OData-JSON#StreamProperty] and MUST be accompanied by 
the `mediaContentType` control information to indicate how the stream value is to be interpreted.
:::

::: {.varxml .rep}
Constant values of type `Edm.Stream` with media type `application/json` or one of its subtypes,
optionally with format parameters, are represented as [string expressions](#String) containing the stringified JSON.

Constant values of type `Edm.Stream` with top-level type `text`, for example `text/plain`,
are represented as [string expressions](#String) containing the raw text.

Constant values of type `Edm.Stream` with other media types are represented as [binary expressions](#Binary) containing the base64url-encoded binary value.
:::

The annotation (property) being assigned a stream value MUST be annotated with term
[`Core.MediaType`]($$$OData-VocCore$$$#MediaType)
and the media type of the stream as its value.

::: {.varjson .example}
Example ##ex:
```json
"JsonStream": { "foo":true,"bar":42 },
"JsonStream@Core.MediaType": "application/json",

"TextStream": "Hello World!",
"TextStream@Core.MediaType": "text/plain",

"OtherStream": "T0RhdGE",
"OtherStream@Core.MediaType": "application/octet-stream"
```
:::

::: {.varxml .example}
Example ##ex:
```xml
<PropertyValue Property="JsonStream">
  <String>{"foo":true,"bar":42}</String>
  <Annotation Term="Core.MediaType" String="application/json" />
</PropertyValue>

<PropertyValue Property="TextStream">
  <String>Hello World!</String>
  <Annotation Term="Core.MediaType" String="text/plain" />
</PropertyValue>

<PropertyValue Property="OtherStream">
  <Binary>T0RhdGE</Binary>
  <Annotation Term="Core.MediaType" String="application/octet-stream" />
</PropertyValue>
```
:::

## ##subsec Dynamic Expression

Dynamic expressions allow assigning a calculated value to an applied
term.

If a calculated value is not acceptable for the type of the term or
its [facets](#TypeFacets), does not meet the constraints imposed by its
: varjson
`$Nullable` member
:
: varxml
`Nullable` attribute
:
or by its
annotations from the Validation vocabulary [OData-VocValidation](#ODataVocValidation),
the client SHOULD NOT make any assumptions about the application of the term
(see [example ##termdefault]).

### ##subsubsec Path Expressions

Path expressions allow assigning a value to an applied term or term
component. There are two kinds of path expressions:
- A *model path* is evaluated on the entity model of a service and resolves to a model element.
Model paths are used within
[Annotation Path](#AnnotationPath), [Model Element Path](#ModelElementPath),
[Navigation Property Path](#NavigationPropertyPath), and [Property Path](#PropertyPath) expressions.
They allow assigning values to terms or term properties of the 
[built-in types](#BuiltInTypesfordefiningVocabularyTerms) `Edm.AnnotationPath`,
`Edm.ModelElementPath`, `Edm.NavigationPropertyPath`, `Edm.PropertyPath`, and
`Edm.AnyPropertyPath`.
- An *instance path* is evaluated on a type instance and its nested or related type instances
and resolves to the instance or collection of instances identified by the path.
Instance paths are used within [Value Path](#ValuePath) expressions.
They allow assigning values to terms or term properties of model-defined types or of built-in types other
than the `Edm.*Path` types.

#### ##subsubsubsec Path Syntax

Model paths and instance paths share a common syntax which is derived
from the path expression syntax of URLs, see [#OData-URL#PathExpressions].

A path MUST be composed of zero or more path segments joined together by
forward slashes (`/`).

Paths starting with a forward slash (`/`) are absolute paths, and the
first path segment MUST be the qualified name of a model element, e.g.
an entity container. The remaining path after the second forward slash
is interpreted relative to that model element.

::: example
Example ##ex: absolute path to an entity set
```
/My.Schema.MyEntityContainer/MyEntitySet
```
:::

Paths not starting with a forward slash are interpreted relative to the
annotation target, following the rules specified in [section ##PathEvaluation].

::: example
Example ##ex: relative path to a property
```
Address/City
```
:::

If a path segment is a [qualified name](#QualifiedName), it represents a
[*type cast*]{id=TypeCast}, and the segment MUST be the name of a type
in scope. If the type or instance identified by the preceding path part
cannot be cast to the specified type, the path expression evaluates to
the null value.

::: example
Example ##ex: type-cast segment
```
…/self.Manager/…
```
:::

If a path segment starts with an at (`@`) character, it represents a
[*term cast*]{id=TermCast}. The at (`@`) character MUST be followed by
a [qualified name](#QualifiedName) that MAY be followed by a hash (`#`)
character and a [simple identifier](#SimpleIdentifier). The [qualified
name](#QualifiedName) preceding the hash character MUST resolve to a
term that is in scope, the [simple identifier](#SimpleIdentifier)
following the hash sign is interpreted as a [qualifier](#Qualifier) for
the term. If the model element or instance identified by the preceding
path part has not been annotated with that term (and if present, with
that qualifier), the term cast evaluates to the null value. Four special
terms are implicitly "annotated" for media entities and stream
properties:

-   `odata.mediaEditLink`
-   `odata.mediaReadLink`
-   `odata.mediaContentType`
-   `odata.mediaEtag`

::: example
Example ##ex: term-cast segments
```
…/@Capabilities.SortRestrictions/…
```
:::

If a path segment is a [simple identifier](#SimpleIdentifier), it MUST
be the name of a child model element of the model element identified by
the preceding path part, or a structural or navigation property of the
instance identified by the preceding path part. A sequence of navigation
segments can traverse multiple CSDL documents. The document containing
the path expression only needs to reference the next traversed document
to bring the navigation target type into scope, and each traversed
document in turn needs to reference only its next document.

A model path MAY contain any number of segments representing
collection-valued structural or navigation properties. The result of the
expression is the model element reached via this path.

::: example
Example ##ex: property segments in model path
```
…/Orders/Items/Product/…
```
:::

An instance path MUST NOT contain more than one segment representing a
collection-valued construct, e.g. an entity set or a collection-valued
navigation property that is not followed by a key predicate, or a
collection-valued structural property that is not followed by an index
segment. The result of the expression is the collection of instances
resulting from applying any remaining path segments that operate on a
single-valued expression to each instance in the collection-valued
segment.

An instance path MAY terminate in a `$count` segment if the previous
segment is collection-valued, in which case the path evaluates to the
number of items in the collection identified by the preceding segment.

::: example
Example ##ex: property segments in instance path
```
…/Addresses/Street
```

```
…/Addresses/$count
```
:::

A model path MAY contain path segments starting with a navigation
property, then followed by an at (`@`) character, then followed by the
[qualified name](#QualifiedName) of a term in scope, and optionally
followed by a hash (`#`) character and a [simple
identifier](#SimpleIdentifier) which is interpreted as a
[qualifier](#Qualifier) for the term. If the navigation property has not
been annotated with that term (and if present, with that qualifier), the
path segment evaluates to the null value. This allows addressing
annotations on the navigation property itself; annotations on the entity
type specified by the navigation property are addressed via a [term-cast
segment](#TermCast).

::: example
Example ##ex: model path segment addressing an annotation on a navigation property
vs. term cast addressing an annotation on the resource addressed by the navigation property
```
…/Items@Core.Description
```

```
…/Items/@Core.Description
```
:::

An instance path MAY contain path segments starting with an entity set
or a collection-valued navigation property, then followed by a key
predicate using parentheses-style convention, see
[#OData-URL#CanonicalURL]. The key values are either primitive literals or
instance paths. If the key value is a relative instance path, it is
interpreted according to the same rule below as the instance path it is
part of, *not* relative to the instance identified by the preceding path
part.

::: example
Example ##ex: instance path with entity set and key predicate
```
/self.container/SettingsCollection('FeatureXxx')/IsAvailable
```

```
/self.container/Products(ID=ProductID)/Name
```
:::

An instance path MAY contain an index segment immediately following a
path segment representing an ordered collection-valued structural
property. The index is zero-based and MUST be an integer literal.
Negative integers count from the end of the collection, with -1
representing the last item in the collection. Remaining path segments
are evaluated relative to the identified item of the collection.

::: example
Example ##ex: instance path with collection-valued structural property and
index segment
```
Addresses/1
```

```
Addresses/-1/Street
```
:::

#### ##subsubsubsec Path Evaluation

Annotations MAY be embedded within their target, or specified separately,
e.g. as part of a different schema, and specify a path to their target model
element. The latter situation is referred to as *targeting* in the remainder of
this section.

The *host* of an annotation is the model element targeted by the annotation,
unless that target is another annotation or a model element (collection,
record or property value) directly or indirectly embedded within another
annotation, in which case the host is the host of that other annotation.

If the value of an annotation is expressed dynamically with a path
expression, the path evaluation rules for this expression depend upon the
model element by which the annotation is hosted.

For annotations hosted by an entity container, the path is evaluated starting
at the entity container, i.e. an empty path resolves to the entity container,
and non-empty paths MUST start with a segment identifying a container child
(entity set, function import, action import, or singleton). The subsequent
segments follow the rules for path expressions targeting the corresponding
child element.

For annotations hosted by an entity set or a singleton, the path is evaluated
starting at the entity set or singleton, i.e. an empty path resolves to the
entity set or singleton, and non-empty paths MUST follow the rules for
annotations targeting the declared entity type of the entity set or singleton.

For annotations hosted by an entity type or complex type, the path is
evaluated starting at the type, i.e. an empty path resolves to the type, and
the first segment of a non-empty path MUST be a structural or navigation
property of the type, a [type cast](#TypeCast), or a [term cast](#TermCast).

For annotations hosted by an action, action import, function, function
import, parameter, or return type, the first segment of the path MUST be the
name of a parameter of the action or function or `$ReturnType`.

For annotations hosted by a structural or navigation property, the path
evaluation rules additionally depend upon how the annotation target is
specified, as follows:

1. If the annotation is directly or indirectly embedded within the hosting
   property, the path is evaluated starting at the directly enclosing type of
   the hosting property. This allows e.g. specifying the value of an
   annotation on one property to be calculated from values of other properties
   of the same enclosing type. An empty path resolves to the enclosing type,
   and non-empty paths MUST follow the rules for annotations targeting the
   directly enclosing type.

2. If the annotation uses targeting and the target expression starts with an entity
   container, or the annotation is directly or indirectly embedded within such an
   annotation, the path is evaluated starting at the declared type of the
   hosting property. An empty path resolves to the declared type of the
   property, and non-empty paths MUST follow the rules for annotations
   targeting the declared type of the property. If the type is primitive, the
   first segment of a non-empty path MUST be a [type cast](#TypeCast) or a
   [term cast](#TermCast).

3. If the annotation uses targeting and the target expression does not start with
   an entity container, or the annotation is directly or indirectly embedded
   within such an annotation, the path is evaluated starting at the *outermost*
   entity type or complex type named in the target expression. This allows e.g.
   specifying the value of an annotation on one property to be calculated from
   values of other properties of the outermost type. An empty path resolves to
   the outermost type, and the first segment of a non-empty path MUST be a
   structural or navigation property of the outermost type, a [type cast](#TypeCast),
   or a [term cast](#TermCast).

::: example
Example ##ex: Annotations hosted by property `A2` in various modes

Path evaluation for the annotations in the first block starts at the directly
enclosing type `self.A` of the hosting property `A2`.
:::: varjson
```json
"self": {
  "A": {
    "$Kind": "EntityType",
    "A1": {
      "$Type": "Edm.Boolean"
    },
    "A2": {
      "$Type": "self.B"
      "@Core.Description@Core.IsLanguageDependent": {
        "$Path": "A1"
      },
      "@Core.Description": "…"
    }
  },
  "B": {
    "$Kind": "ComplexType",
    "B1": {
      "$Type": "Edm.Boolean"
    }
  },
```
::::

:::: varxml
```xml
<Schema Namespace="self">
  <EntityType Name="A">
    <Property Name="A1" Type="Edm.Boolean" Nullable="false" />
    <Property Name="A2" Type="self.B" Nullable="false">
      <Annotation Term="Core.Description" String="…">
        <Annotation Term="Core.IsLanguageDependent" Path="A1" />
      </Annotation>
    </Property>
  </EntityType>
  <ComplexType Name="B">
    <Property Name="B1" Type="Edm.Boolean" Nullable="false" />
  </ComplexType>
```
::::

Path evaluation for the annotations in the next block starts at the declared
type `self.B` of the hosting property `A2`.
:::: varjson
```json
  "Container": {
    "$Kind": "EntityContainer",
    "SetA": {
      "$Collection": true,
      "$Type": "self.A"
    }
  },
  "$Annotations": {
    "self.Container/SetA/A2": {
      "@Core.Description#viaSet@Core.IsLanguageDependent": {
        "$Path": "B1"
      },
      "@Core.Description#viaSet": "…"
    },
    "self.Container/SetA/A2/@Core.Description#viaSet": {
      "@Core.IsLanguageDependent": {
        "$Path": "B1"
      }
    },
```
::::

:::: varxml
```xml
  <EntityContainer Name="Container">
    <EntitySet Name="SetA" EntityType="self.A" />
  </EntityContainer>
  <Annotations Target="self.Container/SetA/A2">
    <Annotation Term="Core.Description" Qualifier="viaSet" String="…">
      <Annotation Term="Core.IsLanguageDependent" Path="B1" />
    </Annotation>
  </Annotations>
  <Annotations Target="self.Container/SetA/A2/@Core.Description#viaSet">
    <Annotation Term="Core.IsLanguageDependent" Path="B1" />
  </Annotations>
```
::::

Path evaluation for the annotations in the final block starts at the outermost
type `self.A` named in the target expression.
:::: varjson
```json
    "self.A/A2": {
      "@Core.Description#external@Core.IsLanguageDependent": {
        "$Path": "A1"
      },
      "@Core.Description#external": "…"
    },
    "self.A/A2/@Core.Description": {
      "@Core.IsLanguageDependent": {
        "$Path": "A1"
      }
    }
  }
}
```
::::

:::: varxml
```xml
  <Annotations Target="self.A/A2">
    <Annotation Term="Core.Description" Qualifier="external" String="…">
      <Annotation Term="Core.IsLanguageDependent" Path="A1" />
    </Annotation>
  </Annotations>
  <Annotations Target="self.A/A2/@Core.Description">
    <Annotation Term="Core.IsLanguageDependent" Path="A1" />
  </Annotations>
</Schema>
```
::::

:::

#### ##subsubsubsec Annotation Path

The annotation path expression provides a non-null value for terms or term
properties that specify the [built-in
types](#BuiltInTypesfordefiningVocabularyTerms)
`Edm.AnnotationPath` or `Edm.ModelElementPath`. Its argument is a [model
path](#PathExpressions) that resolves to an [annotation](#Annotation).

The value of the annotation path expression is the _path_ to the annotation, not its instance value.
This is useful for terms that reuse or refer to other terms.

A term or term property of type `Edm.AnnotationPath` can be annotated
with the term `Validation.AllowedTerms` (see
[OData-VocValidation](#ODataVocValidation)) if its intended value is an
annotation path that ends in a term cast with one of the listed terms.

::: {.varjson .rep}
Annotation path expressions are represented as a string containing a
path.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.ReferenceFacet": "Product/Supplier/@UI.LineItem",
"@UI.CollectionFacet#Contacts": [
  "Supplier/@Communication.Contact",
  "Customer/@Communication.Contact"
]
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:AnnotationPath`

The `edm:AnnotationPath` expression MAY be provided using element
notation or attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="UI.ReferenceFacet"
            AnnotationPath="Product/Supplier/@UI.LineItem" />

<Annotation Term="UI.CollectionFacet" Qualifier="Contacts">
  <Collection>
    <AnnotationPath>Supplier/@Communication.Contact</AnnotationPath>
    <AnnotationPath>Customer/@Communication.Contact</AnnotationPath>
  </Collection>
</Annotation>
```
:::

#### ##subsubsubsec Model Element Path

The model element path expression provides a non-null value for terms or term
properties that specify the [built-in
type](#BuiltInTypesfordefiningVocabularyTerms) `Edm.ModelElementPath`. Its
argument is a [model path](#PathExpressions).

The value of the model element path expression is the path itself, not
the instance(s) identified by the path.

::: {.varjson .rep}
Model element path expressions are represented as a string containing a
path.
:::

::: {.varjson .example}
Example ##ex:
```json
"@org.example.MyFavoriteModelElement": "/self.someAction"
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:ModelElementPath`

The `edm:ModelElementPath` expression MAY be provided using element
notation or attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.MyFavoriteModelElement"
            ModelElementPath="/org.example.someAction" />

<Annotation Term="org.example.MyFavoriteModelElement">
  <ModelElementPath>/org.example.someAction</ModelElementPath>
</Annotation>
```
:::

#### ##subsubsubsec Navigation Property Path

The navigation property path expression provides a non-null value for terms or
term properties that specify the [built-in
types](#BuiltInTypesfordefiningVocabularyTerms)
`Edm.NavigationPropertyPath`, `Edm.AnyPropertyPath`, or `Edm.ModelElementPath`.
Its argument is a [model path](#PathExpressions) that ends with a [navigation property](#NavigationProperty)
or a term cast to a term whose type is an entity type or a collection of entity types.

The value of the navigation property path expression is the path itself,
not the entity or collection of entities identified by the path.

::: {.varjson .rep}
Navigation property path expressions are represented as a string
containing a path.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.HyperLink": "Supplier",
"@Capabilities.UpdateRestrictions": {
  "NonUpdatableNavigationProperties": [
    "Supplier",
    "Category"
  ]
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:NavigationPropertyPath`

The `edm:NavigationPropertyPath` expression MAY be provided using
element notation or attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="UI.HyperLink" NavigationPropertyPath="Supplier" />

<Annotation Term="Capabilities.UpdateRestrictions">
  <Record>
    <PropertyValue Property="NonUpdatableNavigationProperties">
      <Collection>
        <NavigationPropertyPath>Supplier</NavigationPropertyPath>
        <NavigationPropertyPath>Category</NavigationPropertyPath>
      </Collection>
    </PropertyValue>
  </Record>
</Annotation>
```
:::

#### ##subsubsubsec Property Path

The property path expression provides a non-null value for terms or term
properties that specify one of the [built-in
types](#BuiltInTypesfordefiningVocabularyTerms)
`Edm.PropertyPath`, `Edm.AnyPropertyPath`, or `Edm.ModelElementPath`. Its
argument is a [model path](#PathExpressions) that ends with a [structural property](#StructuralProperty)
or a term cast to a term whose type is a primitive or complex type, an enumeration type,
a type definition, or a collection of one of these types.

The value of the property path expression is the path itself, not the
value of the structural property or annotation
identified by the path.

::: {.varjson .rep}
Property path expressions are represented as a string containing a path.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.RefreshOnChangeOf": "ChangedAt",
"@Capabilities.UpdateRestrictions": {
  "NonUpdatableProperties": [
    "CreatedAt",
    "ChangedAt"
  ]
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:PropertyPath`

The `edm:PropertyPath` MAY be provided using either element notation or
attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="UI.RefreshOnChangeOf" PropertyPath="ChangedAt" />

<Annotation Term="Capabilities.UpdateRestrictions">
  <Record>
    <PropertyValue Property="NonUpdatableProperties">
      <Collection>
        <PropertyPath>CreatedAt</PropertyPath>
        <PropertyPath>ChangedAt</PropertyPath>
      </Collection>
    </PropertyValue>
  </Record>
</Annotation>
```
:::

#### ##subsubsubsec Value Path

The value path expression allows assigning a value by traversing an
object graph. It can be used in annotations that target entity
containers, entity sets, entity types, complex types, navigation
properties of structured types, and structural properties of structured
types. Its argument is an [instance path](#PathExpressions).

The value of the path expression is the instance or collection of
instances identified by the path.

::: {.varjson .rep}
### ##subisec `$Path`

Path expressions are represented as an object with a single member
`$Path` whose value is a string containing a path.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.DisplayName": {
  "$Path": "FirstName"
},
"@UI.DisplayName#second": {
  "$Path": "@vCard.Address#work/FullName"
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Path`

The `edm:Path` expression MAY be provided using element notation or
attribute notation.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.DisplayName" Path="FirstName" />

<Annotation Term="org.example.display.DisplayName">
  <Path>@vCard.Address#work/FullName</Path>
</Annotation>
```
:::

::: example
Example ##ex_termdefault: The first name of a bot cannot be changed after creation.
:::: varxml
```xml
<Property Name="IsBot" Type="Edm.Boolean" Nullable="true" />
<Property Name="FirstName" Type="Edm.String" Nullable="false">
  <Annotation Term="Core.Immutable" Path="IsBot" />
</Property>
```
::::
:::: varjson
```json
"IsBot": {
  "$Type": "Edm.Boolean",
  "$Nullable": true
},
"FirstName": {
  "@Core.Immutable": {
    "$Path": "IsBot"
  }
}
```
::::
If `IsBot` is `null` the client makes no assumption about the immutability of
the `FirstName`. It can try to change it after creation while being prepared for an
error response.
:::

### ##subsubsec Comparison and Logical Operators

Annotations MAY use the following logical and comparison expressions
which evaluate to a Boolean value. These expressions MAY be combined and
they MAY be used anywhere instead of a Boolean expression.

<table>
<tr><th>Operator</th><th>Description</th></tr>
<tr><td colspan="2"><strong>Logical Operators</strong></td></tr>
<tr><td><code>And</code></td><td>Logical and     </td></tr>
<tr><td><code>Or</code></td><td>Logical or      </td></tr>
<tr><td><code>Not</code></td><td>Logical negation</td></tr>
<tr><td colspan="2"><strong>Comparison Operators</strong></td></tr>
<tr><td><code>Eq</code></td><td>Equal                      </td></tr>
<tr><td><code>Ne</code></td><td>Not equal                  </td></tr>
<tr><td><code>Gt</code></td><td>Greater than               </td></tr>
<tr><td><code>Ge</code></td><td>Greater than or equal      </td></tr>
<tr><td><code>Lt</code></td><td>Less than                  </td></tr>
<tr><td><code>Le</code></td><td>Less than or equal         </td></tr>
<tr><td><code>Has</code></td><td>Has enumeration flag(s) set</td></tr>
<tr><td><code>In</code></td><td>Is in collection           </td></tr>
</table>

The `And` and `Or` operators require two operand expressions that
evaluate to Boolean values. The `Not` operator requires a single operand
expression that evaluates to a Boolean value. For details on null
handling for comparison operators see [#OData-URL#LogicalOperators].

The other comparison operators require two operand expressions that
evaluate to comparable values.

::: {.varjson .rep}
### ##subisec `$And` 
and ##subisec `$Or`

The `And` and `Or` logical expressions are represented as an object with
a single member whose value is an array with two annotation expressions.
The member name is one of `$And`, or `$Or`.

It MAY contain [annotations](#Annotation).

### ##subisec `$Not`

Negation expressions are represented as an object with a single member
`$Not` whose value is an annotation expression.

It MAY contain [annotations](#Annotation).

### ##subisec `$Eq`, 
    ##subisec `$Ne`, 
    ##subisec `$Gt`, 
    ##subisec `$Ge`, 
    ##subisec `$Lt`, 
    ##subisec `$Le`, 
    ##subisec `$Has`, 
and ##subisec `$In`

All comparison expressions are represented as an object with a single
member whose value is an array with two annotation expressions. The
member name is one of `$Eq`, `$Ne`, `$Gt`, `$Ge`, `$Lt`, `$Le`, `$Has`,
or `$In`.

They MAY contain [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex_disambiguate:
```json
{
  "$And": [
    {
      "$Path": "IsMale"
    },
    {
      "$Path": "IsMarried"
    }
  ]
},
{
  "$Or": [
    {
      "$Path": "IsMale"
    },
    {
      "$Path": "IsMarried"
    }
  ]
},
{
  "$Not": {
    "$Path": "IsMale"
  }
},
{
  "$Eq": [
    null,
    {
      "$Path": "IsMale"
    }
  ]
},
{
  "$Ne": [
    null,
    {
      "$Path": "IsMale"
    }
  ]
},
{
  "$Gt": [
    {
      "$Path": "Price"
    },
    20
  ]
},
{
  "$Ge": [
    {
      "$Path": "Price"
    },
    10
  ]
},
{
  "$Lt": [
    {
      "$Path": "Price"
    },
    20
  ]
},
{
  "$Le": [
    {
      "$Path": "Duration"
    },
    "PT1H"
  ]
},
{
  "$Has": [
    {
      "$Path": "Fabric"
    },
    "Red"
  ]
},
{
  "$In": [
    {
      "$Path": "Size"
    },
    [
      "XS",
      "S"
    ]
  ]
}
```
:::

::: {.varxml .rep}
### ##isec Expressions `edm:And` 
and ##subisec `edm:Or`

The `And` and `Or` logical expressions are represented as elements
`edm:And` and `edm:Or` that MUST contain two annotation expressions.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##isec Expression `edm:Not`

Negation expressions are represented as an element `edm:Not` that MUST
contain a single annotation expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##isec Expressions `edm:Eq`, 
    ##subisec `edm:Ne`, 
    ##subisec `edm:Gt`, 
    ##subisec `edm:Ge`, 
    ##subisec `edm:Lt`, 
    ##subisec `edm:Le`, 
    ##subisec `edm:Has`, 
and ##subisec `edm:In`

All comparison expressions are represented as an element that MUST
contain two annotation expressions.

They MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: {.varxml .example}
Example ##ex:
```xml
<And>
  <Path>IsMale</Path>
  <Path>IsMarried</Path>
</And>
<Or>
  <Path>IsMale</Path>
  <Path>IsMarried</Path>
</Or>
<Not>
  <Path>IsMale</Path>
</Not>
<Eq>
  <Null />
  <Path>IsMale</Path>
</Eq>
<Ne>
  <Null />
  <Path>IsMale</Path>
</Ne>
<Gt>
  <Path>Price</Path>
  <Int>20</Int>
</Gt>
<Ge>
  <Path>Price</Path>
  <Int>10</Int>
</Ge>
<Lt>
  <Path>Price</Path>
  <Int>20</Int>
</Lt>
<Le>
  <Path>Duration</Path>
  <Duration>PT1H</Duration>
</Le>
<Has>
  <Path>Fabric</Path>
  <EnumMember>org.example.Pattern/Red</EnumMember>
</Has>
<In>
  <Path>Size</Path>
  <Collection>
    <String>XS</String>
    <String>S</String>
  </Collection>
</In>
```
:::

### ##subsubsec Arithmetic Operators

Annotations MAY use the following arithmetic expressions which evaluate
to a numeric value. These expressions MAY be combined, and they MAY be
used anywhere instead of a numeric expression of the appropriate type.
The semantics and evaluation rules for each arithmetic expression is
identical to the corresponding arithmetic operator defined in
[#OData-URL#ArithmeticOperators].

Operator|Description
--------|-----------
`Add`          |Addition
`Sub`          |Subtraction
`Neg`          |Negation
`Mul`          |Multiplication
`Div`          |Division (with integer result for integer operands)
`DivBy`        |Division (with fractional result also for integer operands)
`Mod`          |Modulo

The `Neg` operator requires a single operand expression that evaluates
to a numeric value. The other arithmetic operators require two operand
expressions that evaluate to numeric values.

::: {.varjson .rep}
### ##subisec `$Neg`

Negation expressions are represented as an object with a single member
`$Neg` whose value is an annotation expression.

It MAY contain [annotations](#Annotation).

### ##subisec `$Add`, 
    ##subisec `$Sub`, 
    ##subisec `$Mul`, 
    ##subisec `$Div`, 
    ##subisec `$DivBy`, 
and ##subisec `$Mod`

These arithmetic expressions are represented as an object with as single
member whose value is an array with two annotation expressions. The
member name is one of `$Add`, `$Sub`, `$Neg`, `$Mul`, `$Div`, `$DivBy`,
or `$Mod`.

They MAY contain [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex:
```json
{
  "$Add": [
    {
      "$Path": "StartDate"
    },
    {
      "$Path": "Duration"
    }
  ]
},
{
  "$Sub": [
    {
      "$Path": "Revenue"
    },
    {
      "$Path": "Cost"
    }
  ]
},
{
  "$Neg": {
    "$Path": "Height"
  }
},
{
  "$Mul": [
    {
      "$Path": "NetPrice"
    },
    {
      "$Path": "TaxRate"
    }
  ]
},
{
  "$Div": [
    {
      "$Path": "Quantity"
    },
    {
      "$Path": "QuantityPerParcel"
    }
  ]
},
{
  "$DivBy": [
    {
      "$Path": "Quantity"
    },
    {
      "$Path": "QuantityPerParcel"
    }
  ]
},
{
  "$Mod": [
    {
      "$Path": "Quantity"
    },
    {
      "$Path": "QuantityPerParcel"
    }
  ]
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Neg`

Negation expressions are represented as an element `edm:Neg` that MUST
contain a single annotation expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##isec Expressions `edm:Add`, 
    ##subisec `edm:Sub`, 
    ##subisec `edm:Mul`, 
    ##subisec `edm:Div`, 
    ##subisec `edm:DivBy`, 
and ##subisec `edm:Mod`

These arithmetic expressions are represented as an element that MUST
contain two annotation expressions.

They MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Add>
  <Path>StartDate</Path>
  <Path>Duration</Path>
</Add>
<Sub>
  <Path>Revenue</Path>
  <Path>Cost</Path>
</Sub>
<Neg>
  <Path>Height</Path>
</Neg>
<Mul>
  <Path>NetPrice</Path>
  <Path>TaxRate</Path>
</Mul>
<Div>
  <Path>Quantity</Path>
  <Path>QuantityPerParcel</Path>
</Div>
<DivBy>
  <Path>Quantity</Path>
  <Path>QuantityPerParcel</Path>
</DivBy>
<Mod>
  <Path>Quantity</Path>
  <Path>QuantityPerParcel</Path>
</Mod>
```
:::

### ##subsubsec Apply Client-Side Functions

The apply expression enables a value to be obtained by applying a
client-side function. The apply expression MAY have operand expressions.
The operand expressions are used as parameters to the client-side
function.

If the value of an operand expression is not acceptable for the function,
the client SHOULD NOT make any assumptions about the application of the term
that rely on the operand.

::: {.varjson .rep}
### ##subisec `$Apply` 
and ##subisec `$Function`

Apply expressions are represented as an object with a member `$Apply`
whose value is an array of annotation expressions, and a member
`$Function` whose value is a string containing the [qualified
name](#QualifiedName) of the client-side function to be applied.

It MAY contain [annotations](#Annotation).
:::

::: {.varxml .rep}
### ##isec Expression `edm:Apply`

The `edm:Apply` element MUST contain the `Function` attribute and MAY
contain annotation expressions as operands for the applied function.

It MAY contain more [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Function`

The value of `Function` is the [qualified name](#QualifiedName) of the
client-side function to apply.
:::

OData defines the following functions. Services MAY support additional
functions that MUST be qualified with a namespace other than `odata`.
Function names qualified with `odata` are reserved for this
specification and its future versions.

#### ##subsubsubsec Canonical Functions

All canonical functions defined in [#OData-URL#CanonicalFunctions] can be used as
client-side functions, qualified with the namespace `odata`. The
semantics of these client-side functions is identical to their
counterpart function defined in [#OData-URL#CanonicalFunctions].

For example, the `odata.concat` client-side function takes two
expressions as arguments. Each argument MUST evaluate to a primitive or
enumeration type. It returns a value of type `Edm.String` that is the
concatenation of the literal representations of the results of the
argument expressions. Values of primitive types other than `Edm.String`
are represented according to the appropriate alternative in the
`primitiveValue` rule of [OData-ABNF](#ODataABNF), i.e. `Edm.Binary` as
`binaryValue`, `Edm.Boolean` as `booleanValue` etc.

::: {.varjson .example}
Example ##ex:
```json
"@UI.DisplayName": {
  "$Apply": [
    "Product: ",
    {
      "$Apply": [
        {
          "$Path": "ProductName"
        },
        {
          "$Apply": [
            " (",
            {
              "$Apply": [
                {
                  "$Path": "Available/Quantity"
                },
                {
                  "$Apply": [
                    " ",
                    {
                      "$Apply": [
                        {
                          "$Path": "Available/Unit"
                        },
                        " available)"
                      ],
                      "$Function": "odata.concat"
                    }
                  ],
                  "$Function": "odata.concat"
                }
              ],
              "$Function": "odata.concat"
            }
          ],
          "$Function": "odata.concat"
        }
      ],
      "$Function": "odata.concat"
    }
  ],
  "$Function": "odata.concat"
}
```
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.DisplayName">
  <Apply Function="odata.concat">
    <String>Product: </String>
    <Apply Function="odata.concat">
      <Path>ProductName</Path>
      <Apply Function="odata.concat">
        <String> (</String>
        <Apply Function="odata.concat">
          <Path>Available/Quantity</Path>
          <Apply Function="odata.concat">
            <String> </String>
            <Apply Function="odata.concat">
              <Path>Available/Unit</Path>
              <String> available)</String>
            </Apply>
          </Apply>
        </Apply>
      </Apply>
    </Apply>
  </Apply>
</Annotation>
```
:::

`ProductName` is of type `String`, `Quantity` in complex type
`Available` is of type `Decimal`, and `Unit` in `Available` is of type
enumeration, so the result of the `Path` expression is represented as
the member name of the enumeration value.

#### ##subsubsubsec Function `odata.fillUriTemplate`

The `odata.fillUriTemplate` client-side function takes two or more
expressions as arguments and returns a value of type `Edm.String`.

The first argument MUST be of type `Edm.String` and specifies a URI
template according to [RFC6570](#rfc6570), the other arguments MUST be
[labeled element expressions](#LabeledElement). Each [labeled element
expression](#LabeledElement) specifies the template parameter name as
its name and evaluates to the template parameter value.

[RFC6570](#rfc6570) defines three kinds of template parameters: simple
values, lists of values, and key-value maps.

Simple values are represented as [labeled element
expressions](#LabeledElement) that evaluate to a single primitive value.
The literal representation of this value according to
[OData-ABNF](#ODataABNF) is used to fill the corresponding template
parameter.

Lists of values are represented as [labeled element
expressions](#LabeledElement) that evaluate to a collection of primitive
values.

Key-value maps are represented as [labeled element
expressions](#LabeledElement) that evaluate to a collection of complex
types with two properties that are used in lexicographic order. The
first property is used as key, the second property as value.

::: {.varjson .example}
Example ##ex: assuming there are no special characters in values of the
Name property of the Actor entity
```json
{
  "$Apply": [
    "http://host/someAPI/Actors/{actorName}/CV",
    {
      "$LabeledElement": {
        "$Path": "Actor/Name"
      },
      "$Name": "self.actorName"
    }
  ],
  "$Function": "odata.fillUriTemplate"
}
```
:::

::: {.varxml .example}
Example ##ex: assuming there are no special characters in values of the
Name property of the Actor entity
```xml
<Apply Function="odata.fillUriTemplate">
  <String>http://host/someAPI/Actors/{actorName}/CV</String>
  <LabeledElement Name="actorName" Path="Actor/Name" />
</Apply>
```
:::

#### ##subsubsubsec Function `odata.matchesPattern`

The `odata.matchesPattern` client-side function takes two string
expressions as arguments and returns a Boolean value.
It is the counterpart of the identically named URL function [#OData-URL#matchespattern].

The function returns true if the second expression evaluates to an
[ECMAScript](#_ECMAScript) (JavaScript) regular expression and
the result of the first argument expression matches that regular
expression, using syntax and semantics of
[ECMAScript](#_ECMAScript) regular expressions.

::: {.varjson .example}
Example ##ex: all non-empty `FirstName` values not containing the letters
`b`, `c`, or `d` evaluate to `true`
```json
{
  "$Apply": [
    {
      "$Path": "FirstName"
    },
    "^[^b-d]+$"
  ],
  "$Function": "odata.matchesPattern"
}
```
:::

::: {.varxml .example}
Example ##ex: all non-empty `FirstName` values not containing the letters
`b`, `c`, or `d` evaluate to `true`
```xml
<Apply Function="odata.matchesPattern">
  <Path>FirstName</Path>
  <String>^[^b-d]+$</String>
</Apply>
```
:::

#### ##subsubsubsec Function `odata.uriEncode`

The `odata.uriEncode` client-side function takes one argument of
primitive type and returns the URL-encoded OData literal that can be
used as a key value in OData URLs or in the query part of OData URLs.

Note: string literals are surrounded by single quotes as required by the
parentheses-style key syntax.

::: {.varjson .example}
Example ##ex:
```json
{
  "$Apply": [
    "http://host/service/Genres({genreName})",
    {
      "$LabeledElement": {
        "$Apply": [
          {
            "$Path": "NameOfMovieGenre"
          }
        ],
        "$Function": "odata.uriEncode"
      },
      "$Name": "self.genreName"
    }
  ],
  "$Function": "odata.fillUriTemplate"
}
```
:::

::: {.varxml .example}
Example ##ex:
```xml
<Apply Function="odata.fillUriTemplate">
  <String>http://host/service/Genres({genreName})</String>
  <LabeledElement Name="genreName">
    <Apply Function="odata.uriEncode" >
      <Path>NameOfMovieGenre</Path>
    </Apply>
  </LabeledElement>
</Apply>
```
:::

### ##subsubsec Cast

The cast expression casts the value obtained from its single child
expression to the specified type. The cast expression follows the same
rules as the `cast` canonical function defined in
[#OData-URL#cast].

::: {.varjson .rep}
### ##subisec `$Cast`

Cast expressions are represented as an object with a member `$Cast`
whose value is an annotation expression, a member `$Type` whose value is
a string containing the qualified type name, and optionally a member
`$Collection` with a value of `true`.

It MAY contain [annotations](#Annotation).

If the specified type is a primitive type or a collection of primitive
types, the facet members [`$MaxLength`](#MaxLength),
[`$Unicode`](#Unicode), [`$Precision`](#Precision), [`$Scale`](#Scale),
and [`$SRID`](#SRID) MAY be specified if applicable to the specified
primitive type. If the facet members are not specified, their values are
considered unspecified.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.Threshold": {
  "$Cast": {
    "$Path": "Average"
  },
  "$Type": "Edm.Decimal"
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Cast`

The `edm:Cast` element MUST contain the `Type` attribute and MUST
contain exactly one expression.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Type`

The value of `Type` is a qualified type name in scope, or the character
sequence `Collection(` followed by the qualified name of a type in
scope, followed by a closing parenthesis `)`.

If the specified type is a primitive type or a collection of a primitive
type, the facet attributes [`MaxLength`](#MaxLength),
[`Unicode`](#Unicode), [`Precision`](#Precision), [`Scale`](#Scale), and
[`SRID`](#SRID) MAY be specified if applicable to the specified
primitive type. If the facet attributes are not specified, their values
are considered unspecified.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.Threshold">
  <Cast Type="Edm.Decimal">
    <Path>Average</Path>
  </Cast>
</Annotation>
```
:::

### ##subsubsec Collection

The collection expression enables a value to be obtained from zero or
more item expressions. The value calculated by the collection expression
is the collection of the values calculated by each of the item
expressions. The values of the child expressions MUST all be type
compatible.

If the value of a dynamic child expression is not acceptable for the type of the collection or
its [facets](#TypeFacets), is null for a non-[nullable](#Nullable) collection
or does not meet the constraints imposed by
its annotations from the Validation vocabulary [OData-VocValidation](#ODataVocValidation),
the client SHOULD NOT make any assumptions about the application of the term
that rely on the value.

::: {.varjson .rep}
Collection expressions are represented as arrays with one array item per
item expression within the collection expression.
:::

::: {.varjson .example}
Example ##ex:
```json
"@seo.SeoTerms": [
  "Product",
  "Supplier",
  "Customer"
]
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Collection`

The `edm:Collection` element contains zero or more child expressions.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.seo.SeoTerms">
  <Collection>
    <String>Product</String>
    <String>Supplier</String>
    <String>Customer</String>
  </Collection>
</Annotation>
```
:::

### ##subsubsec If-Then-Else

The if-then-else expression enables a value to be obtained by evaluating
a *condition expression*.
The if-then-else expression is called a collection-if-then-else expression if
- it is a direct child of a collection expression or
- it is the second or third child of a collection-if-then-else expression.

An if-then-else expression MUST contain exactly three child
expressions. There is one exception to this rule: if and only if the
if-then-else expression is a collection-if-then-else expression, the third
child expression MAY be omitted, reducing it to an if-then expression.
This can be used to conditionally add an element to a collection.

The first child expression is the condition and MUST evaluate to a
Boolean result or `null`, e.g. the [comparison and logical
operators](#ComparisonandLogicalOperators) can be used.

The second and third child expressions are evaluated conditionally. The
result MUST be type compatible with the type expected by the surrounding
expression.

If the value of a child expression does not meet these conditions,
the client SHOULD NOT make any assumptions about the application of the term
that rely on the condition expression.

If the first expression evaluates to `true`, the second expression MUST
be evaluated and its value MUST be returned as the result of the
if-then-else expression. If the first expression evaluates to `false` or `null`
and a third child element is present, it MUST be evaluated and its value
MUST be returned as the result of the if-then-else expression. If no
third expression is present, nothing is added to the surrounding
collection.

::: {.varjson .rep}
### ##subisec `$If`

Conditional expressions are represented as an object with a member `$If`
whose value is an array of two or three annotation expressions.

It MAY contain [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex: the condition is a [value path expression](#ValuePath)
referencing the Boolean property `IsFemale`, whose value then determines
the value of the `$If` expression
```json
"@org.example.person.Gender": {
  "$If": [
    {
      "$Path": "IsFemale"
    },
    "Female",
    "Male"
  ]
}
```
:::

::: {.varjson .example}
Example ##ex: pronouns based on a person's `IdentifiesAsFemale` and `IdentifiesAsMale` attributes
```json
"@org.example.person.Pronouns": [
  {
    "$If": [
      {
        "$Path": "IdentifiesAsFemale"
      },
      "she",
      {
        "$If": [
          {
            "$Path": "IdentifiesAsMale"
          },
          "he"
        ]
      }
    ]
  },
  {
    "$If": [
      {
        "$Path": "IdentifiesAsFemale"
      },
      "her",
      {
        "$If": [
          {
            "$Path": "IdentifiesAsMale"
          },
          "him"
        ]
      }
    ]
  }
]
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:If`

The `edm:If` element MUST contain two or three child expressions that
MUST use element notation.

It MAY contain [`edm:Annotation`](#Annotation) elements.
:::

::: {.varxml .example}
Example ##ex: the condition is a [value path expression](#ValuePath)
referencing the Boolean property `IsFemale`, whose value then determines
the value of the `edm:If` expression
```xml
<Annotation Term="org.example.person.Gender">
  <If>
    <Path>IsFemale</Path>
    <String>Female</String>
    <String>Male</String>
  </If>
</Annotation>
```
:::

::: {.varxml .example}
Example ##ex: pronouns based on a person's `IdentifiesAsFemale` and `IdentifiesAsMale` attributes
```xml
<Annotation Term="org.example.person.Pronouns">
  <Collection>
    <If>
      <Path>IdentifiesAsFemale</Path>
      <String>she</String>
      <If>
        <Path>IdentifiesAsMale</Path>
        <String>he</String>
      </If>
    </If>
    <If>
      <Path>IdentifiesAsFemale</Path>
      <String>her</String>
      <If>
        <Path>IdentifiesAsMale</Path>
        <String>him</String>
      </If>
    </If>
  </Collection>
</Annotation>
```
:::

### ##subsubsec Is-Of

The `is-of` expression checks whether the value obtained from its single
child expression is compatible with the specified type. It returns
`true` if the child expression returns a type that is compatible with
the specified type, and `false` otherwise.

::: {.varjson .rep}
### ##subisec `$IsOf`

Is-of expressions are represented as an object with a member `$IsOf`
whose value is an annotation expression, a member `$Type` whose value is
a string containing an qualified type name, and optionally a member
`$Collection` with a value of `true`.

It MAY contain [annotations](#Annotation).

If the specified type is a primitive type or a collection of primitive
types, the facet members [`$MaxLength`](#MaxLength),
[`$Unicode`](#Unicode), [`$Precision`](#Precision), [`$Scale`](#Scale),
and [`$SRID`](#SRID) MAY be specified if applicable to the specified
primitive type. If the facet members are not specified, their values are
considered unspecified.
:::

::: {.varjson .example}
Example ##ex:
```json
"@Self.IsPreferredCustomer": {
  "$IsOf": {
    "$Path": "Customer"
  },
  "$Type": "self.PreferredCustomer"
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:UrlRef`

The `edm:UrlRef` expression MAY be provided using element notation or
attribute notation.

Relative URLs are relative to the `xml:base` attribute, see
[XML-Base](#XML-Base).

In element notation it MAY contain [`edm:Annotation`](#Annotation)
elements.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="self.IsPreferredCustomer">
  <IsOf Type="self.PreferredCustomer">
    <Path>Customer</Path>
  </IsOf>
</Annotation>
```
:::

### ##subsubsec Labeled Element

The labeled element expression assigns a name to its single child
expression. The value of the child expression can then be reused
elsewhere with a [labeled element reference
expression](#LabeledElementReference).

A labeled element expression MUST contain exactly one child expression.
The value of the child expression is also the value of the labeled
element expression.

A labeled element expression MUST provide a [simple
identifier](#SimpleIdentifier) value as its name that MUST be unique
within the schema containing the expression.

::: {.varjson .rep}
### ##subisec `$LabeledElement`

Labeled element expressions are represented as an object with a member
`$LabeledElement` whose value is an annotation expression, and a member
`$Name` whose value is a string containing the labeled element's name.

It MAY contain [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.DisplayName": {
  "$LabeledElement": {
    "$Path": "FirstName"
  },
  "$Name": "CustomerFirstName"
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:LabeledElement`

The `edm:LabeledElement` element MUST contain the Name attribute.

It MUST contain a child expression written either in attribute notation
or element notation.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Name`

The value of `Name` is the labeled element's name.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.DisplayName">
  <LabeledElement Name="CustomerFirstName" Path="FirstName" />
</Annotation>

<Annotation Term="org.example.display.DisplayName">
  <LabeledElement Name="CustomerFirstName">
    <Path>FirstName</Path>
  </LabeledElement>
</Annotation>
```
:::

### ##subsubsec Labeled Element Reference

The labeled element reference expression MUST specify the [qualified
name](#QualifiedName) of a [labeled element expression](#LabeledElement)
in scope and returns the value of the identified labeled element
expression as its value.

::: {.varjson .rep}
### ##subisec `$LabeledElementReference`

Labeled element reference expressions are represented as an object with
a member `$LabeledElementReference` whose value is a string containing
an qualified name.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.DisplayName": {
  "$LabeledElementReference": "self.CustomerFirstName"
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:LabeledElementReference`

The `edm:LabeledElementReference` element MUST contain the qualified name
of a labeled element expression in its body.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.DisplayName">
  <LabeledElementReference>Model.CustomerFirstName</LabeledElementReference>
</Annotation>
```
:::

### ##subsubsec Null

The null expression indicates the absence of a value. The null
expression MAY be annotated.

::: {.varjson .rep}
Null expressions that do not contain annotations are represented as the
literal `null`.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.DisplayName": null,
```
:::

::: {.varjson .rep}
### ##subisec `$Null`

Null expression containing [annotations](#Annotations) are represented
as an object with a member `$Null` whose value is the literal `null`.
:::

::: {.varjson .example}
Example ##ex:
```json
"@UI.Address": {
  "$Null": null,
  "@self.Reason": "Private"
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Null`

The `edm:Null` element MAY contain [`edm:Annotation`](#Annotation)
elements.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.display.DisplayName">
  <Null/>
</Annotation>
```
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="@UI.Address">
  <Null>
    <Annotation Term="self.Reason" String="Private" />
  </Null>
</Annotation>
```
:::

### ##subsubsec Record

The record expression enables a new entity type or complex type instance
to be constructed.

A record expression MAY specify the structured type of its result, which
MUST be an entity type or complex type in scope. If not explicitly
specified, the type is derived from the expression's context.

A record expression contains zero or more property value expressions.
For each single-valued structural or navigation property of the record
expression's type that is neither nullable nor specifies a default value
a property value expression MUST be provided. The only exception is if
the record expression is the value of an annotation for a term that has
a [base term](#SpecializedTerm) whose type is structured and directly or
indirectly inherits from the type of its base term. In this case,
property values that already have been specified in the annotation for
the base term or its base term etc. need not be specified again.

For collection-valued properties the absence of a property value
expression is equivalent to specifying an empty collection as its value.

If a dynamically provided property value is not acceptable for the type of the property or
its [facets](#TypeFacets), does not meet the constraints imposed by
its [nullability](#Nullable) or by
its annotations from the Validation vocabulary [OData-VocValidation](#ODataVocValidation),
the client SHOULD NOT make any assumptions about the application of the term that rely on the
property value.

::: {.varjson .rep}
Record expressions are represented as objects with one member per
property value expression. The member name is the property name, and the
member value is the property value expression.

The type of a record expression is represented as the `type` control
information, see [#OData-JSON#ControlInformationtypeodatatype].

It MAY contain [annotations](#Annotation) for itself and its members.
Annotations for record members are prefixed with the member name.
:::

::: {.varjson .example}
Example ##ex: this annotation "morphs" the entity type from [example ##entitytype] into
a structured type with two structural properties `GivenName` and
`Surname` and two navigation properties `DirectSupervisor` and
`CostCenter`. The first three properties simply rename properties of the
annotated entity type, the fourth adds a calculated navigation property
that is pointing to a different service
```json
"$Annotations": {
  "org.example.Person": {
    "@org.example.hcm.Employee": {
      "@type": "https://example.org/vocabs/person#org.example.person.Manager",
      "@Core.Description": "Annotation on record",
      "GivenName": {
        "$Path": "FirstName"
      },
      "GivenName@Core.Description": "Annotation on record member",
      "Surname": {
        "$Path": "LastName"
      },
      "DirectSupervisor": {
        "$Path": "Manager"
      },
      "CostCenter": {
        "$UrlRef": {
          "$Apply": [
            "http://host/anotherservice/CostCenters('{ccid}')",
            {
              "$LabeledElement": {
                "$Path": "CostCenterID"
              },
              "$Name": "ccid"
            }
          ],
          "$Function": "odata.fillUriTemplate"
        }
      }
    }
  }
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:Record`

The `edm:Record` element MAY contain the `Type` attribute and MAY
contain `edm:PropertyValue` elements.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Type`

The value of `Type` is the qualified name of a structured type in scope.

### ##isec Element `edm:PropertyValue`

The `edm:PropertyValue` element MUST contain the `Property` attribute,
and it MUST contain exactly one expression that MAY be provided using
either element notation or attribute notation.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Property`

The value of `Property` is the name of a property of the type of the
enclosing `edm:Record` expression.
:::

::: {.varxml .example}
Example ##ex: this annotation "morphs" the entity type from [example ##entitytype] into
a structured type with two structural properties `GivenName` and
`Surname` and two navigation properties `DirectSupervisor` and
`CostCenter`. The first three properties simply rename properties of the
annotated entity type, the fourth adds a calculated navigation property
that is pointing to a different service
```xml
<Annotations Target="org.example.Person">
  <Annotation Term="org.example.hcm.Employee">
    <Record Type="org.example.hcm.Manager">
      <Annotation Term="Core.Description" String="Annotation on record" />
      <PropertyValue Property="GivenName" Path="FirstName">
        <Annotation Term="Core.Description"
                    String="Annotation on record member" />
      </PropertyValue>
      <PropertyValue Property="Surname" Path="LastName" />
      <PropertyValue Property="DirectSupervisor" Path="Manager" />
      <PropertyValue Property="CostCenter">
        <UrlRef>
          <Apply Function="odata.fillUriTemplate">
            <String>http://host/anotherservice/CostCenters('{ccid}')</String>
            <LabeledElement Name="ccid" Path="CostCenterID" />
          </Apply>
        </UrlRef>
      </PropertyValue>
    </Record>
  </Annotation>
</Annotations>
```
:::

### ##subsubsec URL Reference

The URL reference expression enables a value to be obtained by sending a
`GET` request.

The URL reference expression MUST contain exactly one expression of type
`Edm.String`. Its value is treated as a URL that MAY be relative or
absolute; relative URLs are relative to the URL of the document
containing the URL reference expression, or relative to a base URL
specified in a format-specific way.

The response body of the `GET` request MUST be returned as the result of
the URL reference expression. The result of the URL reference
expression MUST be type compatible with the type expected by the
surrounding expression.

::: {.varjson .rep}
### ##subisec `$UrlRef`

URL reference expressions are represented as an object with a single
member `$UrlRef` whose value is an annotation expression.

It MAY contain [annotations](#Annotation).
:::

::: {.varjson .example}
Example ##ex:
```json
"@org.example.person.Supplier": {
  "$UrlRef": {
    "$Apply": [
      "http://host/service/Suppliers({suppID})",
      {
        "$LabeledElement": {
          "$Apply": [
            {
              "$Path": "SupplierId"
            }
          ],
          "$Function": "odata.uriEncode"
        },
        "$Name": "suppID"
      }
    ],
    "$Function": "odata.fillUriTemplate"
  }
},

"@Core.LongDescription#element": {
  "$UrlRef": "http://host/wiki/HowToUse"
}
```
:::

::: {.varxml .rep}
### ##isec Expression `edm:UrlRef`

The `edm:UrlRef` expression MAY be provided using element notation or
attribute notation.

Relative URLs are relative to the `xml:base` attribute, see
[XML-Base](#XML-Base).

In element notation it MAY contain [`edm:Annotation`](#Annotation)
elements.
:::

::: {.varxml .example}
Example ##ex:
```xml
<Annotation Term="org.example.person.Supplier">
  <UrlRef>
    <Apply Function="odata.fillUriTemplate">
      <String>http://host/service/Suppliers({suppID})</String>
      <LabeledElement Name="suppID">
      <Apply Function="odata.uriEncode">
        <Path>SupplierId</Path>
      </Apply>
      </LabeledElement>
     </Apply>
  </UrlRef>
</Annotation>

<Annotation Term="Core.LongDescription">
  <UrlRef><String>http://host/wiki/HowToUse</String></UrlRef>
</Annotation>

<Annotation Term="Core.LongDescription" UrlRef="http://host/wiki/HowToUse" />
```
:::
