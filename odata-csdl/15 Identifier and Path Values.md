
-------

# ##sec Identifier and Path Values

## ##subsec Namespace

A namespace is a dot-separated sequence of [simple
identifier](#SimpleIdentifier)s with a maximum length of 511 Unicode
characters (code points).

## ##subsec Simple Identifier

A simple identifier is a Unicode character sequence with the following
restrictions:

-   It consists of at least one and at most 128 Unicode characters (code
    points).
-   The first character MUST be the underscore character (U+005F) or any
    character in the Unicode category "Letter (L)" or "Letter number
    (Nl)".
-   The remaining characters MUST be the underscore character (U+005F)
    or any character in the Unicode category "Letter (L)", "Letter
    number (Nl)", "Decimal number (Nd)", "Non-spacing mark (Mn)",
    "Combining spacing mark (Mc)", "Connector punctuation (Pc)", and
    "Other, format (Cf)".

Non-normatively speaking it starts with a letter or underscore, followed
by at most 127 letters, underscores or digits.

For maximum interoperability services SHOULD use simple identifiers
that additionally only consist of characters from the Basic Latin code block
and match the pattern `^[_A-Za-z][_A-Za-z0-9]*$`.

## ##subsec Qualified Name

For model elements that are direct children of a schema: the namespace
or alias of the schema that defines the model element, followed by a dot
and the name of the model element, see rule [qualifiedTypeName]{.abnf} in
[OData‑ABNF](#ODataABNF).

For built-in [primitive types](#PrimitiveTypes): the name of the type,
prefixed with `Edm` followed by a dot.

## ##subsec Target Path

Target paths are used to refer to other model elements.

The allowed path expressions are:
- The [qualified
name](#QualifiedName) of an entity container, followed by a forward
slash and the name of a container child element
- The target
path of a container child followed by a forward slash and one or more
forward-slash separated property, navigation property, or type-cast
segments

::: example
Example ##ex: Target paths
```
MySchema.MyEntityContainer/MyEntitySet
```

```
MySchema.MyEntityContainer/MySingleton
```

```
MySchema.MyEntityContainer/MySingleton/MyContainmentNavigationProperty
```

```
MySchema.MyEntityContainer/MySingleton/My.EntityType/MyContainmentNavProperty
```

```
MySchema.MyEntityContainer/MySingleton/MyComplexProperty/MyContainmentNavProp
```
:::

-------

# ##sec CSDL Examples

: varjson
Following are two basic examples of valid EDM models as represented in
CSDL JSON. These examples demonstrate many of the topics covered above.
:

: varxml
Following are two basic examples of valid EDM models as represented in
CSDL. These examples demonstrate many of the topics covered above.
:

## ##subsec Products and Categories Example

::: {.varjson .example}
Example ##ex:
```json
{
  "$Version": "4.0",
  "$EntityContainer": "ODataDemo.DemoService",
  "$Reference": {
    "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.json": {
      "$Include": [
        {
          "$Namespace": "Org.OData.Core.V1",
          "$Alias": "Core",
          "@Core.DefaultNamespace": true
        }
      ]
    },
    "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Measures.V1.json": {
      "$Include": [
        {
          "$Namespace": "Org.OData.Measures.V1",
          "$Alias": "Measures"
        }
      ]
    }
  },
  "ODataDemo": {
    "$Alias": "self",
    "@Core.DefaultNamespace": true,
    "Product": {
      "$Kind": "EntityType",
      "$Key": [
        "ID"
      ],
      "ID": {},
      "Description": {
        "$Nullable": true,
        "@Core.IsLanguageDependent": true
      },
      "ReleaseDate": {
        "$Nullable": true,
        "$Type": "Edm.Date"
      },
      "DiscontinuedDate": {
        "$Nullable": true,
        "$Type": "Edm.Date"
      },
      "Rating": {
        "$Nullable": true,
        "$Type": "Edm.Int32"
      },
      "Price": {
        "$Nullable": true,
        "$Type": "Edm.Decimal",
        "@Measures.ISOCurrency": {
          "$Path": "Currency"
        }
      },
      "Currency": {
        "$Nullable": true,
        "$MaxLength": 3
      },
      "Category": {
        "$Kind": "NavigationProperty",
        "$Type": "self.Category",
        "$Partner": "Products"
      },
      "Supplier": {
        "$Kind": "NavigationProperty",
        "$Nullable": true,
        "$Type": "self.Supplier",
        "$Partner": "Products"
      }
    },
    "Category": {
      "$Kind": "EntityType",
      "$Key": [
        "ID"
      ],
      "ID": {
        "$Type": "Edm.Int32"
      },
      "Name": {
        "@Core.IsLanguageDependent": true
      },
      "Products": {
        "$Kind": "NavigationProperty",
        "$Partner": "Category",
        "$Collection": true,
        "$Type": "self.Product",
        "$OnDelete": "Cascade"
      }
    },
    "Supplier": {
      "$Kind": "EntityType",
      "$Key": [
        "ID"
      ],
      "ID": {},
      "Name": {
        "$Nullable": true
      },
      "Address": {
        "$Type": "self.Address"
      },
      "Concurrency": {
        "$Type": "Edm.Int32"
      },
      "Products": {
        "$Kind": "NavigationProperty",
        "$Partner": "Supplier",
        "$Collection": true,
        "$Type": "self.Product"
      }
    },
    "Country": {
      "$Kind": "EntityType",
      "$Key": [
        "Code"
      ],
      "Code": {
        "$MaxLength": 2
      },
      "Name": {
        "$Nullable": true
      }
    },
    "Address": {
      "$Kind": "ComplexType",
      "Street": {
        "$Nullable": true
      },
      "City": {
        "$Nullable": true
      },
      "State": {
        "$Nullable": true
      },
      "ZipCode": {
        "$Nullable": true
      },
      "CountryName": {
        "$Nullable": true
      },
      "Country": {
        "$Kind": "NavigationProperty",
        "$Nullable": true,
        "$Type": "self.Country",
        "$ReferentialConstraint": {
          "CountryName": "Name"
        }
      }
    },
    "ProductsByRating": [
      {
        "$Kind": "Function",
        "$Parameter": [
          {
            "$Name": "Rating",
            "$Nullable": true,
            "$Type": "Edm.Int32"
          }
        ],
        "$ReturnType": {
          "$Collection": true,
          "$Type": "self.Product"
        }
      }
    ],
    "DemoService": {
      "$Kind": "EntityContainer",
      "Products": {
        "$Collection": true,
        "$Type": "self.Product",
        "$NavigationPropertyBinding": {
          "Category": "Categories"
        }
      },
      "Categories": {
        "$Collection": true,
        "$Type": "self.Category",
        "$NavigationPropertyBinding": {
          "Products": "Products"
        },
        "@Core.Description": "Product Categories"
      },
      "Suppliers": {
        "$Collection": true,
        "$Type": "self.Supplier",
        "$NavigationPropertyBinding": {
          "Products": "Products",
          "Address/Country": "Countries"
        },
        "@Core.OptimisticConcurrency": [
          "Concurrency"
        ]
      },
      "Countries": {
        "$Collection": true,
        "$Type": "self.Country"
      },
      "MainSupplier": {
        "$Type": "self.Supplier",
        "$NavigationPropertyBinding": {
          "Products": "Products"
        },
        "@Core.Description": "Primary Supplier"
      },
      "ProductsByRating": {
        "$EntitySet": "Products",
        "$Function": "self.ProductsByRating"
      }
    }
  }
}
```
:::

::: {.varxml .example}
Example ##ex:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           xmlns="http://docs.oasis-open.org/odata/ns/edm" Version="4.0">
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml">
    <edmx:Include Namespace="Org.OData.Core.V1" Alias="Core">
      <Annotation Term="Core.DefaultNamespace" />
    </edmx:Include>
  </edmx:Reference>
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Measures.V1.xml">
    <edmx:Include Alias="Measures" Namespace="Org.OData.Measures.V1" />
  </edmx:Reference>
  <edmx:DataServices>
    <Schema Namespace="ODataDemo">
      <EntityType Name="Product">
        <Key>
          <PropertyRef Name="ID" />
        </Key>
        <Property Name="ID" Type="Edm.Int32" Nullable="false" />
        <Property Name="Description" Type="Edm.String" >
          <Annotation Term="Core.IsLanguageDependent" />
        </Property>
        <Property Name="ReleaseDate" Type="Edm.Date" />
        <Property Name="DiscontinuedDate" Type="Edm.Date" />
        <Property Name="Rating" Type="Edm.Int32" />
        <Property Name="Price" Type="Edm.Decimal" Scale="variable">
          <Annotation Term="Measures.ISOCurrency" Path="Currency" />
        </Property>
        <Property Name="Currency" Type="Edm.String" MaxLength="3" />
        <NavigationProperty Name="Category" Type="ODataDemo.Category"
                            Nullable="false" Partner="Products" />
        <NavigationProperty Name="Supplier" Type="ODataDemo.Supplier"
                            Partner="Products" />
      </EntityType>
      <EntityType Name="Category">
        <Key>
         <PropertyRef Name="ID" />
        </Key>
        <Property Name="ID" Type="Edm.Int32" Nullable="false" />
        <Property Name="Name" Type="Edm.String" Nullable="false">
          <Annotation Term="Core.IsLanguageDependent" />
        </Property>
        <NavigationProperty Name="Products" Partner="Category"
                            Type="Collection(ODataDemo.Product)">
          <OnDelete Action="Cascade" />
        </NavigationProperty>
      </EntityType>
      <EntityType Name="Supplier">
        <Key>
          <PropertyRef Name="ID" />
        </Key>
        <Property Name="ID" Type="Edm.String" Nullable="false" />
        <Property Name="Name" Type="Edm.String" />
        <Property Name="Address" Type="ODataDemo.Address" Nullable="false" />
        <Property Name="Concurrency" Type="Edm.Int32" Nullable="false" />
        <NavigationProperty Name="Products" Partner="Supplier"
                            Type="Collection(ODataDemo.Product)" />
      </EntityType>
      <EntityType Name="Country">
        <Key>
          <PropertyRef Name="Code" />
        </Key>
        <Property Name="Code" Type="Edm.String" MaxLength="2"
                              Nullable="false" />
        <Property Name="Name" Type="Edm.String" />
      </EntityType>
      <ComplexType Name="Address">
        <Property Name="Street" Type="Edm.String" />
        <Property Name="City" Type="Edm.String" />
        <Property Name="State" Type="Edm.String" />
        <Property Name="ZipCode" Type="Edm.String" />
        <Property Name="CountryName" Type="Edm.String" />
        <NavigationProperty Name="Country" Type="ODataDemo.Country">
          <ReferentialConstraint Property="CountryName"  
                                 ReferencedProperty="Name" />
        </NavigationProperty>
      </ComplexType>
      <Function Name="ProductsByRating">
        <Parameter Name="Rating" Type="Edm.Int32" />
        <ReturnType Type="Collection(ODataDemo.Product)" />
      </Function>
      <EntityContainer Name="DemoService">
        <EntitySet Name="Products" EntityType="ODataDemo.Product">
          <NavigationPropertyBinding Path="Category" Target="Categories" />
        </EntitySet>
        <EntitySet Name="Categories" EntityType="ODataDemo.Category">
          <NavigationPropertyBinding Path="Products" Target="Products" />
          <Annotation Term="Core.Description" String="Product Categories" />
        </EntitySet>
        <EntitySet Name="Suppliers" EntityType="ODataDemo.Supplier">
          <NavigationPropertyBinding Path="Products" Target="Products" />
          <NavigationPropertyBinding Path="Address/Country"
                                     Target="Countries" />
          <Annotation Term="Core.OptimisticConcurrency">
            <Collection>
              <PropertyPath>Concurrency</PropertyPath>
            </Collection>
          </Annotation>
        </EntitySet>
        <Singleton Name="MainSupplier" Type="ODataDemo.Supplier">
          <NavigationPropertyBinding Path="Products" Target="Products" />
          <Annotation Term="Core.Description" String="Primary Supplier" />
        </Singleton>
        <EntitySet Name="Countries" EntityType="ODataDemo.Country" />
        <FunctionImport Name="ProductsByRating" EntitySet="Products"
                        Function="ODataDemo.ProductsByRating" />
      </EntityContainer>
    </Schema>
  </edmx:DataServices>
</edmx:Edmx>
```
:::


## ##subsec Annotations for Products and Categories Example

::: {.varjson .example}
Example ##ex:
```json
{
  "$Version": "4.01",
  "$Reference": {
    "http://host/service/$metadata": {
      "$Include": [
        {
          "$Namespace": "ODataDemo",
          "$Alias": "target"
        }
      ]
    },
    "http://somewhere/Vocabulary/V1": {
      "$Include": [
        {
          "$Namespace": "Some.Vocabulary.V1",
          "$Alias": "Vocabulary1"
        }
      ]
    }
  },
  "External.Annotations": {
    "$Annotations": {
      "target.Supplier": {
        "@Vocabulary1.EMail": null,
        "@Vocabulary1.AccountID": {
          "$Path": "ID"
        },
        "@Vocabulary1.Title": "Supplier Info",
        "@Vocabulary1.DisplayName": {
          "$Apply": [
            {
              "$Path": "Name"
            },
            {
              "$Apply": [
                " in ",
                {
                  "$Path": "Address/CountryName"
                }
              ],
              "$Function": "odata.concat"
            }
          ],
          "$Function": "odata.concat"
        }
      },
      "target.Product": {
        "@Vocabulary1.Tags": [
          "MasterData"
        ]
      }
    }
  }
}
```
:::

::: {.varxml .example}
Example ##ex:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx"
           Version="4.01">
  <edmx:Reference Uri="http://host/service/$metadata">
    <edmx:Include Namespace="ODataDemo" Alias="target" />
  </edmx:Reference>
  <edmx:Reference Uri="http://somewhere/Vocabulary/V1">
    <edmx:Include Alias="Vocabulary1" Namespace="Some.Vocabulary.V1" />
  </edmx:Reference>
  <edmx:DataServices>
    <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm"
            Namespace="External.Annotations">
      <Annotations Target="ODataDemo.Supplier">
        <Annotation Term="Vocabulary1.EMail">
          <Null />
        </Annotation>
        <Annotation Term="Vocabulary1.AccountID" Path="ID" />
        <Annotation Term="Vocabulary1.Title" String="Supplier Info" />
        <Annotation Term="Vocabulary1.DisplayName">
        <Apply Function="odata.concat">
          <Path>Name</Path>
          <Apply Function="odata.concat">
            <String> in </String>
            <Path>Address/CountryName</Path>
          </Apply>
        </Apply>
        </Annotation>
      </Annotations>
      <Annotations Target="ODataDemo.Product">
        <Annotation Term="Vocabulary1.Tags">
          <Collection>
            <String>MasterData</String>
          </Collection>
        </Annotation>
      </Annotations>
  </Schema>
  </edmx:DataServices>
</edmx:Edmx>
```
:::

-------

# ##sec Conformance

Conforming services MUST follow all rules of this specification document
for the types, sets, functions, actions, containers and annotations they
expose.

In addition, conforming services MUST NOT return CSDL constructs defined in OData 4.01 or greater 
for requests made with `OData-MaxVersion: 4.0`.

Specifically, they
1. MUST NOT include properties in derived types that overwrite a
property defined in the base type
2. MUST NOT include `Edm.Untyped`
3. MUST NOT use [path syntax](#PathSyntax) added with 4.01
4. MUST NOT use `Edm.ModelElementPath` and `Edm.AnyPropertyPath`
5. MUST NOT specify [referential constraints](#ReferentialConstraint)
to complex types and navigation properties
6. MUST NOT include a non-abstract entity type with no inherited or
defined [entity key](#Key)
7. MUST NOT include the
[Core.DefaultNamespace]{.term}
annotation on [included schemas](#IncludedSchema)
8. MUST NOT return the Unicode facet for terms, parameters, and return
types
9. MUST NOT include collections of `Edm.ComplexType` or `Edm.Untyped`
10. MUST NOT specify a key as a property of a related entity
: varjson
11. SHOULD NOT include new/unknown values for
[`$AppliesTo`](#Applicability)
:
: varxml
11. SHOULD NOT include new/unknown values for the
[`AppliesTo`](#Applicability) attribute
:
12. SHOULD NOT include constant [Geo](#GeoValues) or [Stream values](#StreamValues) in annotations
13. MAY include new CSDL annotations

In addition, OData 4.01 or greater services:

14. SHOULD NOT have identifiers within a uniqueness scope (e.g. a
schema, a structural type, or an entity container) that differ only by
case

In addition, OData 4.02 or greater services:

15. SHOULD NOT include constant [Geo](#GeoValues) or [Stream values](#StreamValues) in annotations
16. SHOULD use [simple identifiers](#SimpleIdentifier) matching the pattern `^[_A-Za-z][_A-Za-z0-9]*$`

Conforming clients MUST be prepared to consume a model that uses any or
all constructs defined in this specification, including custom
annotations, and MUST ignore constructs not defined in this version of
the specification.
