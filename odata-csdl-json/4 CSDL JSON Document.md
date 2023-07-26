-------

# ##sec CSDL JSON Document

::: dl
### ##isec Document Object

:::: dt
A CSDL JSON document consists of a single JSON object. This document object MUST contain the member `$Version`.

The document object MAY contain the member [`$Reference`](#Reference) to reference other CSDL documents.

It also MAY contain members for schemas.

If the CSDL JSON document is the metadata document of an OData service, the document object MUST contain the member `$EntityContainer`.
::::

### ##subisec `$Version`

:::: dt
The value of `$Version` is a string containing either 4.0 or 4.01.
::::

### ##subisec `$EntityContainer`

:::: dt
The value of `$EntityContainer` is value is the namespace-qualified name of the entity container of that service. This is the only place where a model element MUST be referenced with its namespace-qualified name and use of the alias-qualified name is not allowed.
::::
:::

::: example
Example ##ex:
```json
{
  "$Version": "4.01",
  "$EntityContainer": "org.example.DemoService",
  …
}
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
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation, defined in [OData-VocCore](ODataVocCore), MAY be used to
indicate a particular version of the referenced document. If the
[`Core.SchemaVersion`](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Core.V1.md#SchemaVersion)
annotation is present, the `$schemaversion` system query option, defined
[OData‑Protocol](ODataProtocol), SHOULD be used when retrieving the
referenced schema document.

::: dl
### ##subisec `$Reference`

:::: dt
The value of `$Reference` is an object that contains one member per
referenced CSDL document. The name of the pair is a URI for the
referenced document. The URI MAY be relative to the document containing
the `$Reference`. The value of each member is a reference object.
::::

### ##isec Reference Object

:::: dt
The reference object MAY contain the members
[`$Include`](IncludedSchema) and
[`$IncludeAnnotations`](IncludedAnnotations) as well as
[annotations](Annotation).
::::
:::

::: example
Example ##ex: references to other CSDL documents
```json
{
  …
  "$Reference": {
    "http://vocabs.odata.org/capabilities/v1": {
      …
    },
    "http://vocabs.odata.org/core/v1": {
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
