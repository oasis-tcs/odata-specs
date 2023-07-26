-------

# ##sec CSDL JSON Document

::: index
## ##isec Document Object

:::: dt
A CSDL JSON document consists of a single JSON object. This document object MUST contain the member $Version.

The document object MAY contain the member $Reference to reference other CSDL documents.

It also MAY contain members for schemas.

If the CSDL JSON document is the metadata document of an OData service, the document object MUST contain the member `$EntityContainer`.
::::

## ##subisec `$Version`

:::: dt
The value of $Version is a string containing either 4.0 or 4.01.
::::

## ##subisec `$EntityContainer`

:::: dt
The value of $EntityContainer is value is the namespace-qualified name of the entity container of that service. This is the only place where a model element MUST be referenced with its namespace-qualified name and use of the alias-qualified name is not allowed.
::::
:::
