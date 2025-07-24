
-------

: varjson
# ##sec CSDL JSON Document
:
: varxml
# ##sec CSDL XML Document
:

<!-- Lines from here to the closing ::: belong to the JSON variant only. -->
::: {.varjson .rep}
### ##isec Document Object

A CSDL JSON document consists of a single JSON object. This document object MUST contain the member `$Version`.

The document object MAY contain the member [`$Reference`](#Reference) to reference other CSDL documents.

It also MAY contain members for schemas.

If the CSDL JSON document is the metadata document of an OData service, the document object MUST contain the member `$EntityContainer`.

### ##subisec `$Version`

The value of `$Version` is a string specifying the OData protocol version of the
document, either `4.0`, `4.01`, or `4.02`.

Services MUST return an OData 4.0 response if the request was
made with an `OData-MaxVersion` header with a value of `4.0`.

### ##subisec `$EntityContainer`

The value of `$EntityContainer` is the namespace-qualified name of the entity container of that service. This is the only place where a model element MUST be referenced with its namespace-qualified name and use of the alias-qualified name is not allowed.
:::

@o@</git/oasis-tcs/odata-csdl-schemas/lib/metamodel.yaml@>@{
@<Metamodel.yaml@>
@}

@$@<Metamodel.yaml@>@{
Annotation: &Annotation
  @<Annotation.yaml@>
CSDLDocument:
  $Version:
    enum:
      - "4.0"
      - "4.01"
      - "4.02"
  $EntityContainer:
    path: &EntityContainer
      @<EntityContainer.yaml@>
  $Reference:
    map: &Reference
      @<Reference.yaml@>
  children:
    - kind: Schema
      cardinality: 0..*
      type: &Schema
        @<Schema.yaml@>
@}

@$@<Javascript CSDL metamodel@>@{
class CSDLDocument extends ModelElement {
  @<CSDLDocument@>
  toString() {
    return "";
  }
}
@}

::: funnelweb
The following reviver function can be passed to `JSON.parse` in order to parse a
CSDL JSON document into an instance of `CSDLDocument`.
:::

@$@<Javascript CSDL metamodel@>@{
function CSDLReviver(key, value) {
  if (key === "") {
    const csdlDocument = new CSDLDocument();
    csdlDocument.fromJSON(value);
    return csdlDocument;
  } else return value;
}
@}

::: funnelweb
Some classes defined in this document are only needed by other classes. Classes
that are needed by an external consumer of the Javascript CSDL metamodel are "exported"
and can then be used, for example, to create a `CSDLDocument` while parsing a CSDL XML
document.
:::

@$@<Exports@>@{
CSDLDocument,
CSDLReviver,
@}

::: funnelweb
The CSDL document is the root of a hierarchy of model elements, and every
model element has a `csdlDocument` property. Its getter delegates to
the parent until the root is reached, which returns itself.

Model elements can be created without a `csdlDocument`, in which case the code below
returns undefined.
:::

@$@<ModelElement@>@{
get csdlDocument() {
  return this.parent?.csdlDocument;
}
@}

@$@<CSDLDocument@>@{
get csdlDocument() {
  return this;
}
@}

::: funnelweb
Collecting all model elements in one array is useful for producing diagrams that
visualize them.

But the `modelElements` getter in the `CSDLDocument` class can access the private member
only after the constructor has run its course. Therefore, the following code does
nothing if it runs in the `CSDLDocument` constructor.
:::

@$@<Collect all ModelElements@>@{
if (!(this instanceof CSDLDocument)) {
  @<Collect all ModelElements in modelElements@>
}
@}

@$@<Collect all ModelElements in modelElements@>@{
this.csdlDocument?.modelElements.push(this);
@}

@$@<CSDLDocument@>@{
@<Internal property@>@(modelElements@,= []@)
@}

::: {.varjson .example}
Example ##ex:
```json
{
  "$Version": "4.01",
  "$EntityContainer": "org.example.DemoService",
  …
}
```
:::

::: funnelweb
Values like `$Version` that have a string, numeric or Boolean value
have the same representation in the Javascript object model as in JSON.
But paths or qualified names (like `$EntityContainer`) are represented
by separate classes. ([`QualifiedNamePath`](#Schema) also handles aliases and does not enforce
the restriction of `$EntityContainer` to _namespace_-qualified names.)
:::

@$@<String, number or Boolean values in fromJSON@>@{
if (typeof json[member] !== "object") this[member] = json[member];
@}

@$@<Deserialize qualified name@>@(@1@)@{
this.@1 = new QualifiedNamePath(this, json.@1, "@1");
@}

@$@<Deserialize optional qualified name@>@(@1@)@{
if (json.@1) @<Deserialize qualified name@>@(@1@)
@}

@$@<CSDLDocument@>@{
fromJSON(json) {
  @<Deserialize optional qualified name@>@($EntityContainer@)
  @<Deserialize members of CSDLDocument@>
  super.fromJSON(json, "Schema");
}
@}

<!-- Lines from here to the closing ::: belong to the XML variant only. -->
::: {.varxml .rep}
### ##isec Element `edmx:Edmx`

The `edmx:Edmx` element is the root element of a CSDL XML document. It
MUST contain the `Version` attribute and it MUST contain exactly one
`edmx:DataServices` element.

It MAY contain [`edmx:Reference`](#Reference) elements to reference
other CSDL documents.

### ##subisec Attribute `Version`

The `Version` attribute specifies the OData protocol version of the
document, either `4.0`, `4.01`, or `4.02`.

Services MUST return an OData 4.0 response if the request was
made with an `OData-MaxVersion` header with a value of `4.0`.

### ##isec Element `edmx:DataServices`

The `edmx:DataServices` element MUST contain one or more
[`edm:Schema`](#Schema) elements which define the schemas exposed by the
OData service.
:::

::: {.varxml .example}
Example ##ex:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.01">
  <edmx:DataServices>
    …
  </edmx:DataServices>
</edmx:Edmx>
```
:::

## ##subsec Reference

A reference to an external CSDL document allows to bring part of the
referenced document's content into the scope of the referencing
document.

A reference MUST specify a URI that uniquely identifies the referenced
document, so two references MUST NOT specify the same URI. The URI
SHOULD be a URL that locates the referenced document. If the URI is not
dereferencable it SHOULD identify a well-known schema. The URI MAY be
absolute or relative URI; relative URLs are relative to the URL of the
document containing the reference, or relative to a base URL specified
in a format-specific way.

A reference MAY be annotated.

The
[`Core.SchemaVersion`]($$$OData-VocCore$$$#SchemaVersion)
annotation, defined in [OData-VocCore](#ODataVocCore), MAY be used to
indicate a particular version of the referenced document. If the
[`Core.SchemaVersion`]($$$OData-VocCore$$$#SchemaVersion)
annotation is present, the `$schemaversion` system query option, defined in
[#OData-Protocol#SystemQueryOptionschemaversion], SHOULD be used when retrieving the
referenced schema document.

::: {.varjson .rep}
### ##subisec `$Reference`

The value of `$Reference` is an object that contains one member per
referenced CSDL document. The name of the pair is a URI for the
referenced document. The URI MAY be relative to the document containing
the `$Reference`. The value of each member is a reference object.

### ##isec Reference Object

The reference object MAY contain the members
[`$Include`](#IncludedSchema) and
[`$IncludeAnnotations`](#IncludedAnnotations) as well as
[annotations](#Annotation).
:::

@$@<Metamodel.yaml@>@{
Reference: *Reference
@}

@$@<Reference.yaml@>@{
$Include:
  array: &Include
    @<Include.yaml@>
children:
  @<may include annotations@>
@}

@$@<may include annotations@>@{
- kind: Annotation
  cardinality: 0..*
  type: *Annotation
@}

@$@<Deserialize members of CSDLDocument@>@{
for (const uri in json.$Reference)
  new Reference(this, uri).fromJSON(json.$Reference[uri]);
@}

@$@<Javascript CSDL metamodel@>@{
class Reference extends ModelElement {
  @<Reference@>
}
@}

@$@<Exports@>@{
Reference,
@}


@$@<Reference@>@{
@<Internal property@>@(uri@,@)
constructor(csdlDocument, uri) {
  super(csdlDocument);
  this.#uri = uri;
  csdlDocument.$Reference ||= {};
  csdlDocument.$Reference[uri] = this;
}
toString() {
  return "$Reference<" + this.uri + ">";
}
fromJSON(json) {
  @<Deserialize members of Reference@>
  super.fromJSON(json);
}
@}

::: {.varjson .example}
Example ##ex: references to other CSDL documents
```json
{
  …
  "$Reference": {
    "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.json": {
      …
    },
    "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.json": {
      …
    },
    "http://example.org/display/v1": {
      …
    }
  },
  …
}
```
:::

::: {.varxml .rep}
### ##isec Element `edmx:Reference`

The `edmx:Reference` element specifies external CSDL documents
referenced by the referencing document. The child elements
[`edmx:Include`](#IncludedSchema) and
[`edmx:IncludeAnnotations`](#IncludedAnnotations) specify which parts of
the referenced document are available for use in the referencing
document.

The `edmx:Reference` element MUST contain the `Uri` attribute, and it
MUST contain at least one [`edmx:Include`](#IncludedSchema) or
[`edmx:IncludeAnnotations`](#IncludedAnnotations) child element.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Uri`

The value of `Uri` is an absolute or relative URI; relative URIs are
relative to the `xml:base` attribute, see
[XML-Base](#XML-Base).
:::

::: {.varxml .example}
Example ##ex: references to other CSDL documents
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.0">
  <edmx:Reference
   Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.xml">
   …
  </edmx:Reference>
  <edmx:Reference
   Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml">
    …
  </edmx:Reference>
  <edmx:Reference Uri="http://example.org/display/v1">
    …
  </edmx:Reference>
  <edmx:DataServices>…</edmx:DataServices>
</edmx:Edmx>
```
:::

## ##subsec Included Schema

A [reference](#Reference) MAY include zero or more schemas from the referenced
document.

The included schemas are identified via their [namespace](#Namespace).
The same namespace MUST NOT be included more than once, even if it is
declared in more than one referenced document.

@$@<Deserialize members of Reference@>@{
if (json.$Include)
  for (const include of json.$Include) new Include(this).fromJSON(include);
@}

When including a schema, a [simple identifier](#SimpleIdentifier) value
MAY be specified as an alias for the schema that is used in qualified
names instead of the namespace. For example, an alias of `display` might
be assigned to the namespace `org.example.vocabularies.display`. An
alias-qualified name is resolved to a fully qualified name by examining
aliases for included schemas and schemas defined within the document.

::: {.varjson .rep}
If an included schema specifies an alias, the alias MUST be used in
qualified names throughout the document to identify model elements of
the included schema. A mixed use of namespace-qualified names and
alias-qualified names is not allowed.
:::

::: {.varxml .rep}
If an included schema specifies an alias, the alias MAY be used instead
of the namespace within qualified names to identify model elements of
the included schema. An alias only provides a more convenient notation,
allowing a short string to be substituted for a long namespace. Every
model element that can be identified via an alias-qualified name can
alternatively be identified via its full namespace-qualified name.
:::

Aliases are document-global, so all schemas defined within or included
into a document MUST have different aliases, and aliases MUST differ
from the namespaces of all schemas defined within or included into a
document.

::: funnelweb
Because of this globality condition, we can implement the namespace resolution
as follows:
:::

@$@<CSDLDocument@>@{
#findSchema(namespace, callback) {
  let result;
  for (const schema in this.children)
    if ([this.children[schema].$Alias, schema].includes(namespace))
      result = callback(this.children[schema]);
  if (!result) {
    @<Look up included schema by namespace@>
    if (schema) result = callback(schema);
  }
  return result;
}
byQualifiedName(namespace, name) {
  return this.#findSchema(namespace, (schema) => schema.children[name]);
}
@}

The alias MUST NOT be one of the reserved values `Edm`, `odata`,
`System`, or `Transient`.

@$@<namespace is reserved@>@{@+@!false
["Edm", "odata", "System", "Transient"].includes(this.#namespace)
@}

An alias is only valid within the document in which it is declared; a
referencing document may define its own aliases for included schemas.

::: {.varjson .rep}
### ##subisec `$Include`

The value of `$Include` is an array. Array items are objects that MUST
contain the member `$Namespace` and MAY contain the member `$Alias`.

The item objects MAY contain [annotations](#Annotation).

### ##subisec `$Namespace`

The value of `$Namespace` is a string containing the namespace of the
included schema.

### ##subisec `$Alias`

The value of `$Alias` is a string containing the alias for the included
schema.
:::

@$@<Metamodel.yaml@>@{
Include: *Include
@}

@$@<Include.yaml@>@{
$Alias: string
$Namespace: string
children:
  @<may include annotations@>
@}

::: funnelweb
Array-valued properties like `$Include` are represented by an array of instances of a
model element class. The constructor of such a `ListedModelElement` takes care to add the instance to
the array in the parent. Note the analogy to the [`Reference`](#Reference) constructor.
:::

@$@<Javascript CSDL metamodel@>@{
class ListedModelElement extends ModelElement {
  #list;
  #index;
  constructor(parent, list) {
    super(parent);
    parent[list] ||= [];
    parent[list].push(this);
    this.#list = list;
    this.#index = parent[list].length - 1;
  }
  toString() {
    return this.#list + "/" + this.#index;
  }
}
class Include extends ListedModelElement {
  @<Include@>
}
@}

@$@<Exports@>@{
Include,
@}

@$@<Include@>@{
@<Internal property with setter@>@(schema@)
constructor(reference) {
  super(reference, "$Include");
}
@}

@$@<Internal property with setter@>@(@1@)@{
@<Internal property@>@(@1@,@)
set @1(@1) {
  this.#@1 = @1;
}
@}

::: funnelweb
A CSDL document maintains a map from namespaces and aliases to the `Include`s that
include them.
:::

@$@<CSDLDocument@>@{
@<Internal property@>@(includes@,= new Map()@)
@}

@$@<Include@>@{
fromJSON(json) {
  super.fromJSON(json);
  this.csdlDocument.includes.set(this.$Namespace, this);
  this.csdlDocument.includes.set(this.$Alias, this);
}
@}

@$@<Look up included schema by namespace@>@{
const schema = this.includes.get(namespace)?.schema;
@}

::: {.varjson .example}
Example ##ex: references to entity models containing definitions of
vocabulary terms
```json
{
  …
  "$Reference": {
    "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.json": {
      "$Include": [
        {
          "$Namespace": "Org.OData.Capabilities.V1",
          "$Alias": "Capabilities"
        }
      ]
    },
    "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.json": {
      "$Include": [
        {
          "$Namespace": "Org.OData.Core.V1",
          "$Alias": "Core",
          "@Core.DefaultNamespace": true
        }
      ]
    },
    "http://example.org/display/v1": {
      "$Include": [
        {
          "$Namespace": "org.example.display",
          "$Alias": "UI"
        }
      ]
    }
  },
  …
}
```
:::

::: {.varxml .rep}
### ##isec Element `edmx:Include`

The `edmx:Include` element specifies a schema to include from the
referenced CSDL document. It MUST provide the `Namespace` attribute and
it MAY provide the `Alias` attribute.

It MAY contain [`edm:Annotation`](#Annotation) elements.

### ##subisec Attribute `Namespace`

The value of `Namespace` is the namespace of a schema defined in the
referenced CSDL document.

### ##subisec Attribute `Alias`

The value of `Alias` is a [simple identifier](#SimpleIdentifier) that
can be used in qualified names instead of the namespace.
:::

::: {.varxml .example}
Example ##ex: references to entity models containing definitions of
vocabulary terms
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.0">
  <edmx:Reference
   Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.xml">
    <edmx:Include Namespace="Org.OData.Capabilities.V1" />
  </edmx:Reference>
  <edmx:Reference
   Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml">
    <edmx:Include Namespace="Org.OData.Core.V1" Alias="Core">
      <Annotation Term="Core.DefaultNamespace" />
    </edmx:Include>
  </edmx:Reference>
  <edmx:Reference Uri="http://example.org/display/v1">
    <edmx:Include Alias="UI" Namespace="org.example.display" />
  </edmx:Reference>
  <edmx:DataServices>…</edmx:DataServices>
</edmx:Edmx>
```
:::

## ##subsec Included Annotations

In addition to including whole schemas with all model constructs defined
within that schema, a [reference](#Reference) may include annotations.

Annotations are selectively included by specifying the
[namespace](#Namespace) of the annotations' term. Consumers can opt not
to inspect the referenced document if none of the term namespaces is of
interest for the consumer.

@$@<Deserialize members of Reference@>@{
if (json.$IncludeAnnotations)
  for (const include of json.$IncludeAnnotations)
    new IncludeAnnotations(this).fromJSON(include);
@}

In addition, the [qualifier](#Qualifier) of annotations to be included
MAY be specified. For instance, a service author might want to supply a
different set of annotations for various device form factors. If a
qualifier is specified, only those annotations from the specified term
namespace with the specified qualifier (applied to a model element of
the target namespace, if present) SHOULD be included. If no qualifier is
specified, all annotations within the referenced document from the
specified term namespace (taking into account the target namespace, if
present) SHOULD be included.

The qualifier also provides consumers insight about what qualifiers are
present in the referenced document. If the consumer is not interested in
that particular qualifier, the consumer can opt not to inspect the
referenced document.

In addition, the namespace of the annotations' [target](#Target) MAY be
specified. If a target namespace is specified, only those annotations
which apply a term form the specified term namespace to a model element
of the target namespace (with the specified qualifier, if present)
SHOULD be included. If no target namespace is specified, all annotations
within the referenced document from the specified term namespace (taking
into account the qualifier, if present) SHOULD be included.

The target namespace also provides consumers insight about what
namespaces are present in the referenced document. If the consumer is
not interested in that particular target namespace, the consumer can opt
not to inspect the referenced document.

::: {.varjson .rep}
### ##subisec `$IncludeAnnotations`

The value of `$IncludeAnnotations` is an array. Array items are objects
that MUST contain the member `$TermNamespace` and MAY contain the
members `$Qualifier` and `$TargetNamespace`.

### ##subisec `$TermNamespace`

The value of `$TermNamespace` is a namespace.

### ##subisec `$Qualifier`

The value of `$Qualifier` is a simple identifier.

### ##subisec `$TargetNamespace`

The value of `$TargetNamespace` is a namespace.
:::

@$@<Javascript CSDL metamodel@>@{
class IncludeAnnotations extends ListedModelElement {
  constructor(reference) {
    super(reference, "$IncludeAnnotations");
  }
}
@}

@$@<Exports@>@{
IncludeAnnotations,
@}

::: {.varjson .example}
Example ##ex: reference documents that contain annotations
```json
{
  …
  "$Reference": {
    "http://odata.org/ann/b": {
      "$IncludeAnnotations": [
        {
          "$TermNamespace": "org.example.validation"
        },
        {
          "$TermNamespace": "org.example.display",
          "$Qualifier": "Tablet"
        },
        {
          "$TermNamespace": "org.example.hcm",
          "$TargetNamespace": "com.example.Sales"
        },
        {
          "$TermNamespace": "org.example.hcm",
          "$Qualifier": "Tablet",
          "$TargetNamespace": "com.example.Person"
        }
      ]
    }
  },
  …
}
```
:::

::: {.varxml .rep}
### ##isec Element `edmx:IncludeAnnotations`

The `edmx:IncludeAnnotations` element specifies the annotations to
include from the referenced CSDL document. If no
`edmx:IncludeAnnotations` element is specified, a client MAY ignore all
annotations in the referenced document that are not explicitly used in
an [`edm:Path`](#ValuePath) expression of the referencing document.

The `edmx:IncludeAnnotations` element MUST provide the `TermNamespace`
attribute, and it MAY provide the `Qualifier` and `TargetNamespace`
attribute.

### ##subisec Attribute `TermNamespace`

The value of `TermNamespace` is a namespace.

### ##subisec Attribute `Qualifier`

The value of `Qualifier` is a [simple identifier](#SimpleIdentifier).

### ##subisec Attribute `TargetNamespace`

The value of `TargetNamespace` is a namespace.
:::

::: {.varxml .example}
Example ##ex: reference documents that contain annotations
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.0">
  <edmx:Reference Uri="http://odata.org/ann/b">
    <edmx:IncludeAnnotations TermNamespace="org.example.validation" />
    <edmx:IncludeAnnotations TermNamespace="org.example.display"
                             Qualifier="Tablet" />
    <edmx:IncludeAnnotations TermNamespace="org.example.hcm"
                             TargetNamespace="com.example.Sales" />
    <edmx:IncludeAnnotations TermNamespace="org.example.hcm"
                             Qualifier="Tablet"
                             TargetNamespace="com.example.Person" />
  </edmx:Reference>
  <edmx:DataServices>…</edmx:DataServices>
</edmx:Edmx>
```
:::

::: example
The following annotations from `http://odata.org/ann/b` are included:
- Annotations that use a
term from the `org.example.validation` namespace, and
- Annotations that use a
term from the `org.example.display` namespace and specify a `Tablet`
qualifier and
- Annotations that apply
a term from the `org.example.hcm` namespace to an element of the
`com.example.Sales` namespace and
- Annotations that apply
a term from the `org.example.hcm` namespace to an element of the
`com.example.Person` namespace and specify a `Tablet` qualifier.
:::
