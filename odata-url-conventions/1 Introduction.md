
-------

# ##sec Introduction

The Open Data Protocol (OData) enables the creation of REST-based data
services, which allow resources, identified using Uniform Resource
Locators (URLs) and defined in a data model, to be published and edited
by Web clients using simple HTTP messages. This specification defines a
set of recommended (but not required) rules for constructing URLs to
identify the data and metadata exposed by an OData service as well as a
set of reserved URL query string operators, which if accepted by an
OData service, MUST be implemented as required by this document.

The [OData-JSON](#ODataJSON) document specifies the format of the
resource representations that are exchanged using OData and the
[OData-Protocol](#ODataProtocol) document describes the actions that can be
performed on the URLs (optionally constructed following the conventions
defined in this document) embedded in those representations.

Services are encouraged to follow the URL construction conventions
defined in this specification when possible as consistency promotes an
ecosystem of reusable client components and libraries.

## ##subsec Changes from Earlier Versions

Section | Feature / Change | Issue
--------|------------------|------
[Section ##PassingQueryOptionsintheRequestBody]| 
`POST ~/$query` with `Content-Type: application/x-www-form-urlencoded` or `application/json`| 
[320](https://github.com/oasis-tcs/odata-specs/issues/320), [371](https://github.com/oasis-tcs/odata-specs/issues/371)
[Section ##matchespattern]| 
New overload for function `matchespattern` with flags| 
[441](https://github.com/oasis-tcs/odata-specs/issues/441)
[Section ##SystemQueryOptionexpand]| 
Nested query options can only appear once per expand item| 
[2004](https://github.com/oasis-tcs/odata-specs/issues/2004)
[Section ##SystemQueryOptionsearch]| 
Allow alternative `$search` syntax| 
[293](https://github.com/oasis-tcs/odata-specs/issues/293)

## ##subsec Glossary

### ##subsubsec Definitions of Terms

### ##subsubsec Acronyms and Abbreviations

<!-- TODO -->

### ##subsubsec Document Conventions

Keywords defined by this specification use `this monospaced font`.

Function signatures in this specification use the following paragraph style:
```
Type FunctionName(Type Param1, Type Param2)
```

Some sections of this specification are illustrated with non-normative examples.

::: example
Example ##ex: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only.

All other text is normative unless otherwise labeled.

<!--
Here is a customized command line which will generate HTML from the markdown file (named `$$$filename$$$.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs+smart
       -t html
       -o $$$filename$$$.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --wrap=none
       --metadata pagetitle="$$$pagetitle$$$"
       $$$filename$$$.md
```

This uses pandoc $$$pandoc-version$$$ from https://github.com/jgm/pandoc/releases/tag/$$$pandoc-version$$$.
-->

-------

# ##sec URL Components

A URL used by an OData service has at most three significant parts: the
*service root URL*, the *resource path*, and *query options*. Additional
URL constructs (such as a fragment) can be present in a URL used by an
OData service; however, this specification applies no further meaning to
such additional constructs.

::: example
Example ##ex: OData URL broken down into its component parts:
```
http://host:port/path/SampleService.svc/Categories(1)/Products?$top=2&$orderby=Name
\______________________________________/\____________________/ \__________________/
                  |                               |                       |
          service root URL                  resource path           query options
```
:::

Mandated and suggested content of these three significant URL components
used by an OData service are covered in sequence in the three following
chapters.

## ##subsec URL Parsing

OData follows the URI syntax rules defined in [RFC3986](#rfc3986) and in
addition assigns special meaning to several of the sub-delimiters
defined by [RFC3986](#rfc3986), so special care has to be taken
regarding parsing and percent-decoding.

[RFC3986](#rfc3986) defines three steps for URL processing that MUST be
performed before percent-decoding:
- Split undecoded URL into components
scheme, hier-part, query, and fragment
- Split undecoded hier-part into authority
and path
- Split undecoded path into path segments

After applying these steps defined by RFC3986 the following steps MUST
be performed:
- Split undecoded query at "`&`" (octet `0x26`) into
query options, and each query option at the first "`=`" (octet `0x3D`) into query
option name and query option value
- Percent-decode path segments, query
option names, and query option values exactly once
- Interpret path segments, query option
names, and query option values according to OData rules

Note: neither [RFC3986](#rfc3986) nor this specification assign special meaning to "`+`" (octet `0x2B`).
Some implementations decode "`+`" (octet `0x2B`) as space (octet `0x20`), others take it literally.

Clients SHOULD percent-encode space (octet `0x20`) as `%20` and "`+`" (octet `0x2B`) as `%2B` and avoid the ambiguous "`+`" (octet `0x2B`) in URLs.

## ##subsec URL Syntax

The OData syntax rules for URLs are defined in this document and the
[OData-ABNF](#ODataABNF). Note that the ABNF is not expressive enough to
define what a correct OData URL is in every imaginable use case. This
specification document defines additional rules that a correct OData URL
MUST fulfill. In case of doubt on what makes an OData URL correct the
rules defined in this specification document take precedence. Note also
that the rules in [OData-ABNF](#ODataABNF) assume that URLs and URL
parts have been percent-encoding normalized as described in
[section 6.2.2.2](https://datatracker.ietf.org/doc/html/rfc3986#section-6.2.2.2)
of [RFC3986](#rfc3986) before applying the grammar to them, i.e.
all characters in the unreserved set (see rule `unreserved` in
[OData-ABNF](#ODataABNF)) are plain literals and not percent-encoded.
For characters outside of the unreserved set that are significant to
OData the ABNF rules explicitly state whether the percent-encoded
representation is treated identical to the plain literal representation.
This is done to make the input strings in the ABNF test cases more
readable.

For example, one of these rules is that single quotes within string
literals are represented as two consecutive single quotes.

::: example
Example ##ex: valid OData URLs:
```
http://host/service/People('O''Neil')
```

```
http://host/service/People(%27O%27%27Neil%27)
```

```
http://host/service/People%28%27O%27%27Neil%27%29
```

```
http://host/service/Categories('Smartphone%2FTablet')
```
:::

::: example
Example ##ex: invalid OData URLs:
```
http://host/service/People('O'Neil')
```

```
http://host/service/People('O%27Neil')
```

```
http://host/service/Categories('Smartphone/Tablet')
```
:::

The first and second examples are invalid because a single quote in a
string literal must be represented as two consecutive single quotes. The
third example is invalid because forward slashes are interpreted as path
segment separators and `Categories('Smartphone` is not a valid OData
path segment, nor is `Tablet')`.

-------

# ##sec Service Root URL

The service root URL identifies the root of an OData service. A `GET`
request to this URL returns the format-specific service document, see
[OData-JSON](#ODataJSON).

The service root URL MUST terminate in a forward slash.

The service document enables simple hypermedia-driven clients to
enumerate and explore the resources published by the OData service.
