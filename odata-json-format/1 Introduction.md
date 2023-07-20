-------

# ##sec Introduction

<!-- All text is normative unless otherwise labeled -->
*The content in this section is non-normative, except where it is marked
normative.*

Here is a customized command line which will generate HTML from this markdown file (named odata-json-format-v4.02-csd01.md):

pandoc -f gfm -t html odata-json-format-v4.02-csd01.md -c styles/markdown-styles-v1.7.3b.css --toc --toc-depth=5 -s -o odata-json-format-v4.02-csd01.html --metadata title="OData JSON Format Version 4.02"

OASIS staff are currently using pandoc 3.0 from https://github.com/jgm/pandoc/releases/tag/3.0.

Generating HTML in OASIS style requires a reference to a .css file containing the HTML styles. The .css file may be either included with the markdown file (like styles/markdown-styles-v1.7.3b.css) or a reference to one of the online stylesheets:
- https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3.css
- https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3a.css (this one produces HTML that resembles the github display more closely, especially for blocks of code)

Note this command generates a Table of Contents (TOC) in HTML which is located at the top of the HTML document, and which requires additional editing in order to be published in the expected OASIS style. This editing can be handled by OASIS staff during publication.
A TC may use other ways to generate HTML from markdown, which may generate a TOC in a different way.

## ##subsec Changes from earlier Versions

<!-- Optional section -->
<!-- Describe significant changes from previous differently-numbered Versions, not changes between stages of the current Version -->

## ##subsec Glossary

<!-- Optional section with suggested subsections -->

### ##subsubsec Definitions of terms

### ##subsubsec Acronyms and abbreviations

### ##subsubsec Document conventions

- Naming conventions
- Font colors and styles
- Typographic conventions

-------

# ##sec Section Heading
text.

## ##subsec Level 2 Heading
text.

### ##subsubsec Level 3 Heading
text.

#### ##subsubsubsec Level 4 Heading
text.

##### ##subsubsubsubsec Level 5 Heading
This is the deepest level, because six # gets transformed into a Reference tag.


## ##subsec Next Heading
text.

-------

# ##sec Conformance
<!-- Required section -->

`(Note: The [OASIS TC Process](https://www.oasis-open.org/policies-guidelines/tc-process-2017-05-26/#wpComponentsConfClause) requires that a specification approved by the TC at the Committee Specification Public Review Draft, Committee Specification or OASIS Standard level must include a separate section, listing a set of numbered conformance clauses, to which any implementation of the specification must adhere in order to claim conformance to the specification (or any optional portion thereof). This is done by listing the conformance clauses here.`
`For the definition of "conformance clause," see [OASIS Defined Terms](https://www.oasis-open.org/policies-guidelines/oasis-defined-terms-2018-05-22/#dConformanceClause).`

`See "Guidelines to Writing Conformance Clauses":  
https://docs.oasis-open.org/templates/TCHandbook/ConformanceGuidelines.html.`

`Remove this note before submitting for publication.)`
