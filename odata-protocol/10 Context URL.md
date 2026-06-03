
-------

# ##sec Context URL

The *context URL* describes the content of the payload. It consists of
the canonical [metadata document URL](#MetadataDocumentRequest) and a
fragment identifying the relevant portion of the metadata document. The
context URL makes response payloads "self-contained", allowing a
recipient to retrieve metadata, resolve references, and construct
canonical links omitted from response payloads in certain optimized
formats.

Request payloads generally do not require context URLs as the type of
the payload can generally be determined from the request URL.

For details on how the context URL is used to describe a payload, see
the relevant sections in the particular format.

The following subsections describe how the context URL is constructed
for each category of payload by providing a *context URL template*. The
context URL template uses the following terms:
- `{context-url}` is the canonical
resource path to the `$metadata` document.
- A _canonical collection_ is an entity set [#OData-CSDL#EntitySet]
or a collection addressed by a containment navigation property
[#OData-CSDL#ContainmentNavigationProperty].
We denote by `{canonical-collection}` the canonical URL [#OData-URL#CanonicalURL]
that addresses a canonical collection relative to the service root.
- A _canonical singleton_ is a singleton [#OData-CSDL#Singleton]
or an entity addressed by a single-valued containment
navigation property.
We denote by `{canonical-singleton}` the canonical URL
that addresses a canonical singleton relative to the service root.
- A _canonical member_ is an entity within a canonical collection.
We denote by `{canonical-member}` the canonical URL
that addresses a canonical member relative to the service root.
- `{select-list}` is an optional
parenthesized comma-separated list of selected properties, instance
annotations, functions, and actions.
- `{property-path}` is the
path to a structural property of the entity.
- `{type-name}` is a qualified type name.
- `{/type-name}` is an optional type-cast
segment containing the qualified name of a derived or implemented type
prefixed with a forward slash.

Key values in `{canonical-collection}`, `{canonical-singleton}`, and `{canonical-member}` are represented in canonical form
(parentheses-style) without percent-encoding.

The full grammar for the context URL is defined in the
[OData-ABNF](#ODataABNF) rule [context]{.abnf}. Note that the syntax of the context URL is
independent of whatever URL conventions the service uses for addressing
individual entities.

If the context URL in a response payload contains a canonical URL,
the client knows the canonical collection or canonical singleton
after it has received the response,
even in cases where this cannot be determined in advance from the service metadata.
Examples of such cases are entities from a function or action with no entity set path, a function
import or action import with no specified entity set, or a navigation
property with no navigation property binding.

## ##subsec Service Document

Context URL template:

    {context-url}

The context URL of the service document is the metadata document URL of
the service.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/
http://host/service/$metadata
```
:::

## ##subsec Collection of Entities

Context URL template:

    {context-url}#{canonical-collection}
    {context-url}#Collection({type-name})

If all entities in the response or a response part are members of a single
canonical collection,
the context URL fragment is the `{canonical-collection}`.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/Customers
http://host/service/$metadata#Customers
```
:::

::: example
Example ##ex: resource URL and corresponding context URL for contained
entities
```
http://host/service/Orders(4711)/Items
http://host/service/$metadata#Orders(4711)/Items
```
:::

If the entities are not members of a single
canonical collection, the context URL fragment specifies
the type of the returned entity collection. In this case
each entity for which a canonical collection can be determined
SHOULD have its own context URL with the template `{context-url}#{canonical-collection}/$entity`.

## ##subsec Entity

Context URL template:

    {context-url}#{canonical-collection}/$entity
    {context-url}#{type-name}

If a response or response part is an entity within in a canonical collection,
the context URL fragment is the
`{canonical-collection}` with `/$entity` appended.

::: example
Example ##ex: resource URL and corresponding context URL for named entity set.
Note the absence of the key predicate `(1)` in the context URL.
```
http://host/service/Customers(1)
http://host/service/$metadata#Customers/$entity
```
:::

::: example
Example ##ex: resource URL and corresponding context URL for contained
entity
```
http://host/service/Orders(4711)/Items(1)
http://host/service/$metadata#Orders(4711)/Items/$entity
```
:::

If the entity is within a collection, but a canonical collection
cannot be determined, the context URL fragment specifies
the `{type-name}` of the returned entity.

## ##subsec Singleton

Context URL template:

    {context-url}#{canonical-singleton}

If a response or response part is a canonical singleton, the context
URL fragment is the `{canonical-singleton}` without `/$entity` appended.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/MainSupplier
http://host/service/$metadata#MainSupplier
```
:::

::: example
Example ##ex: resource URL and corresponding context URL for
entity targeted by a single-valued containment navigation property
```
http://host/service/Orders(4711)/DeliveryAddress
http://host/service/$metadata#Orders(4711)/DeliveryAddress
```
:::

## ##subsec Collection of Derived Entities

Context URL template:

    {context-url}#{canonical-collection}{/type-name}

If a response or response part is a collection filtered by a type cast segment
in the resource URL [#OData-URL#AddressingDerivedTypes],
the type-cast segment is added to the context URL.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/Customers/Model.VipCustomer
http://host/service/$metadata#Customers/Model.VipCustomer
```
:::

## ##subsec Derived Entity

Context URL template:

    {context-url}#{canonical-collection}{/type-name}/$entity
    {context-url}#{canonical-singleton}{/type-name}

If a response or response part is an entity filtered by a type cast segment
in the resource URL [#OData-URL#AddressingDerivedTypes],
the type-cast segment is appended to the `{canonical-collection}` or `{canonical-singleton}`
and prior to appending `/$entity`, if any.

::: example
Example ##ex: resource URL with key predicate and corresponding context URL
```
http://host/service/Customers(2)/Model.VipCustomer
http://host/service/$metadata#Customers/Model.VipCustomer/$entity
```
:::

::: example
Example ##ex: resource URL for singleton and corresponding context URL
```
http://host/service/MainSupplier/Model.PreferredVendor
http://host/service/$metadata#MainSupplier/Model.PreferredVendor
```
:::

## ##subsec Collection of Projected Entities

Context URL templates:

    {context-url}#{canonical-collection}{/type-name}{select-list}
    {context-url}#Collection({type-name}){select-list}

If a response or response part contains only a subset of properties, the parenthesized
comma-separated list of the selected defined or dynamic properties,
instance annotations, navigation properties, functions, and actions is
appended to the context URL representing the [collection of
entities](#CollectionofEntities).

Regardless of how contained structural properties are represented in the
request URL (as paths or as select options) they are represented in the
context URL using path syntax, as defined in OData 4.0.

The shortcut `*` represents the list of all structural properties.
Properties defined on types derived from the declared type of the entity
set (or type specified in the type-cast segment if specified) are
prefixed with the qualified name of the derived type as defined in
[OData-ABNF](#ODataABNF) rule [selectItem]{.abnf}.

The list also contains explicitly selected or expanded instance
annotations. It is possible to select or expand only instance
annotations, in which case only those selected or expanded annotations
appear in the result. Note that annotations specified only in the
[`include-annotations`](#Preferenceincludeannotationsodataincludeannotations)
preference do not appear in the context URL and do not affect the
selected/expanded properties.

Operations in the context URL are represented using the namespace- or
alias-qualified name. Function names suffixed with parentheses represent
a specific overload, while function names without parentheses represent
all overloads of the function.

OData 4.01 responses MAY use the shortcut pattern `{namespace}.*` to
represent the list of all bound actions or functions available for
entities in the collection, see system query option
[`$select`](#SystemQueryOptionselect).

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/Customers?$select=Address,Orders,Model.VipCustomer/PreferredContact
http://host/service/$metadata#Customers(Address,Orders,Model.VipCustomer/PreferredContact)
```
:::

## ##subsec Projected Entity

Context URL templates:

    {context-url}#{canonical-collection}{/type-name}{select-list}/$entity
    {context-url}#{canonical-singleton}{/type-name}{select-list}
    {context-url}#{type-name}{select-list}

If a response or response part is an entity that
contains a subset of properties, the parenthesized
comma-separated list of the selected defined or dynamic properties,
instance annotations, navigation properties, functions, and actions is
appended to the `{canonical-collection}` or `{canonical-singleton}`
after an optional type-cast segment and prior to appending `/$entity`, if any.

Regardless of how contained structural properties are represented in the
request URL (as paths or as select options) they are represented in the
context URL using path syntax, as defined in OData 4.0.

The shortcut `*` represents the list of all structural properties.
Properties defined on types derived from the type of the entity set (or
type specified in the type-cast segment if specified) are prefixed with
the qualified name of the derived type as defined in
[OData-ABNF](#ODataABNF) rule [selectItem]{.abnf}. Note that expanded properties are
automatically included in the response.

The list also contains explicitly selected or expanded instance
annotations. It is possible to select or expand only instance
annotations, in which case only those selected or expanded annotations
appear in the result. Note that annotations specified only in the
[`include-annotations`](#Preferenceincludeannotationsodataincludeannotations)
preference do not appear in the context URL and do not affect the
selected/expanded properties.

Operations in the context URL are represented using the namespace- or
alias-qualified name. Function names suffixed with parentheses represent
a specific overload, while function names without parentheses represent
all overloads of the function.

OData 4.01 responses MAY use the shortcut pattern `{namespace}.*` to
represent the list of all bound actions or functions available for the
returned entity, see system query option
[`$select`](#SystemQueryOptionselect).

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/Customers(1)?$select=Name,Rating
http://host/service/$metadata#Customers(Name,Rating)/$entity
```
:::

## ##subsec Collection of Expanded Entities

Context URL template:

    {context-url}#{canonical-collection}{/type-name}{select-list}
    {context-url}#Collection({type-name}){select-list}

For a 4.01 response, if a navigation property is explicitly expanded,
then in addition to any non-suffixed names of any selected properties,
navigation properties, functions or actions, the comma-separated list of
properties MUST include the name of the expanded property, suffixed with
the parenthesized comma-separated list of any properties of the expanded
navigation property that are selected or expanded. If the expanded
navigation property does not contain a nested `$select` or `$expand`,
then the expanded property is suffixed with empty parentheses. If the
expansion is recursive for nested children, a plus sign (`+`) is infixed
between the navigation property name and the opening parenthesis.

For a 4.0 response, the expanded navigation property suffixed with
parentheses is omitted from the select-list if it does not contain a
nested `$select` or `$expand`, but MUST still be present, without a
suffix, if it is explicitly selected.

The context URL has no shortcut for representing the list of all navigation properties;
`$expand=*` is treated as if all navigation properties were explicitly expanded.

If the context URL includes only expanded navigation properties (i.e.,
only navigation properties suffixed with parentheses), then all
structural properties are implicitly selected (same as if there were no
properties listed in the select-list).

Navigation properties with expanded references are not represented in
the context URL.

::: example
Example ##ex: resource URL and corresponding context URL --- select and
expand
```
http://host/service/Customers?$select=Name&$expand=Address/Country
http://host/service/$metadata#Customers(Name,Address/Country())
```
:::

::: example
Example ##ex: resource URL and corresponding context URL --- expand `$ref`
```
http://host/service/Customers?$expand=Orders/$ref
http://host/service/$metadata#Customers
```
:::

::: example
Example ##ex: resource URL and corresponding context URL --- expand with
`$levels`
```
http://host/service/Employees/Sales.Manager?$select=DirectReports
        &$expand=DirectReports($select=FirstName,LastName;$levels=4)
http://host/service/$metadata
        #Employees/Sales.Manager(DirectReports,DirectReports+(FirstName,LastName))
```
:::

## ##subsec Expanded Entity

Context URL template:

    {context-url}#{canonical-collection}{/type-name}{select-list}/$entity
    {context-url}#{canonical-singleton}{/type-name}{select-list}
    {context-url}#{type-name}{select-list}

For a 4.01 response, if a navigation property is explicitly expanded,
then in addition to the non-suffixed names of any selected properties,
navigation properties, functions or actions, the comma-separated list of
properties MUST include the name of the expanded property, suffixed with
the parenthesized comma-separated list of any properties of the expanded
navigation property that are selected or expanded. If the expanded
navigation property does not contain a nested `$select` or `$expand`,
then the expanded property is suffixed with empty parentheses. If the
expansion is recursive for nested children, a plus sign (`+`) is infixed
between the navigation property name and the opening parenthesis.

For a 4.0 response, the expanded navigation property suffixed with
parentheses is omitted from the select-list if it does not contain a
nested `$select` or `$expand`, but MUST still be present, without a
suffix, if it is explicitly selected.

If the context URL includes only expanded navigation properties (i.e.,
only navigation properties suffixed with parentheses), then all
structural properties are implicitly selected (same as if there were no
properties listed in the select-list).

Navigation properties with expanded references are not represented in
the context URL.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/Employees(1)/Sales.Manager?
        $expand=DirectReports($select=FirstName,LastName;$levels=4)
http://host/service/$metadata
        #Employees/Sales.Manager(DirectReports+(FirstName,LastName))/$entity
```
:::

## ##subsec Collection of Entity References

Context URL template:

    {context-url}#Collection($ref)

If a response is a collection of entity references, the context URL does
not contain the type of the referenced entities.

::: example
Example ##ex: resource URL and corresponding context URL for a collection
of entity references
```
http://host/service/Customers('ALFKI')/Orders/$ref
http://host/service/$metadata#Collection($ref)
```
:::

## ##subsec Entity Reference

Context URL template:

    {context-url}#$ref

If a response is a single entity reference, `$ref` is the context URL
fragment.

::: example
Example ##ex: resource URL and corresponding context URL for a single
entity reference
```
http://host/service/Orders(10643)/Customer/$ref
http://host/service/$metadata#$ref
```
:::

## ##subsec Property Value

Context URL templates:

    {context-url}#{canonical-member}/{property-path}{select-list}
    {context-url}#{type-name}{select-list}

If a response represents an [individual
property](#RequestingIndividualProperties) of a canonical member,
the context URL specifies the `{canonical-member}` and the
path to the structural property. The path MUST include
cast segments for properties defined on types derived from the expected
type of the previous segment.

If the property value does not contain explicitly or implicitly selected
navigation properties or operations, OData 4.01 responses MAY use the
less specific second template.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/Customers(1)/Addresses
http://host/service/$metadata#Customers(1)/Addresses
```
:::

## ##subsec Collection of Complex or Primitive Types

Context URL template:

    {context-url}#Collection({type-name}){select-list}

If a response is a collection of complex types or primitive types that
do not represent an individual property of a canonical member,
the context URL specifies the fully qualified type of the
collection.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/TopFiveHobbies()
http://host/service/$metadata#Collection(Edm.String)
```
:::

## ##subsec Complex or Primitive Type

Context URL template:

    {context-url}#{type-name}{select-list}

If a response is a complex type or primitive type that does not
represent an individual property of a canonical member, the
context URL specifies the fully qualified type of the result.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/MostPopularName()
http://host/service/$metadata#Edm.String
```
:::

## ##subsec Operation Result

The context URL in a response from an action or function has one of the formats
described so far (except the [service document](#ServiceDocument) format).
It does not mention the name of the invoked action or function.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/TopFiveCustomers()
http://host/service/$metadata#Customers
```
:::

## ##subsec Delta Payload

Context URL template:

    {context-url}#{canonical-collection}{/type-name}{select-list}/$delta
    {context-url}#{canonical-member}{select-list}/$delta
    {context-url}#{canonical-member}/{property-path}{select-list}/$delta
    #$delta

The context URL of a [delta response](#RequestingChanges) is the context
URL of the response to the defining query, followed by `/$delta`. This
includes singletons, single-valued navigation properties, and
collection-valued navigation properties.

If the entities are contained, then `{canonical-collection}` is the top-level
entity set followed by the path to the containment navigation property
of the containing entity.

::: example
Example ##ex: resource URL and corresponding context URL
```
http://host/service/Customers?$deltatoken=1234
http://host/service/$metadata#Customers/$delta
```
:::

The context URL of an [update request body for a collection of entities](#UpdateaCollectionofEntities)
is simply the fragment `#$delta`.

## ##subsec Item in a Delta Payload

Context URL templates:

    {context-url}#{canonical-collection}/$deletedEntity
    {context-url}#{canonical-collection}/$link
    {context-url}#{canonical-collection}/$deletedLink

In addition to new or changed entities which have the canonical context
URL for an entity, a delta response can contain deleted entities, new
links, and deleted links. They are identified by the corresponding
context URL fragment. `{canonical-collection}` corresponds to the set of the
deleted entity, or source entity for an added or deleted link.

## ##subsec `$all` Response

Context URL template:

    {context-url}#Collection(Edm.EntityType)

Responses to requests to the virtual collection `$all` (see
[#OData-URL#AddressingAllEntitiesinaService]) use the built-in abstract entity type. Each
single entity in such a response has its individual context URL that
identifies the entity set or singleton.

## ##subsec `$crossjoin` Response

Context URL template:

    {context-url}#Collection(Edm.ComplexType)

Responses to requests to the virtual collections `$crossjoin(…)` (see
[#OData-URL#AddressingtheCrossJoinofEntitySets]) use the built-in abstract complex type. Single
instances in these responses do not have a context URL.
