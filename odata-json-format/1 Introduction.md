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

## ##subsec Some markdown usage examples

**Text.**

Note that text paragraphs in markdown should be separated by a blank line between them -

Otherwise the separate paragraphs will be joined together when the HTML is generated.
Even if the text appears to be separate lines in the markdown source.

To avoid having the usual vertical space between paragraphs,  
append two or more space characters (or space-backslash) to the end of the lines  
which will generate an HTML break tag instead of a new paragraph tag \
(as demonstrated here).

### ##subsubsec Figures and Captions

FIGURE EXAMPLE:
<note caption is best placed ABOVE figure, so a hyperlink to it will actually display the figure, instead of rendering the figure off the screen above the caption. The same placement should be used for table captions>

###### Figure 1 -- Title of Figure
![image-label should be meaningful](images/image_0.png) (this image is missing)

###### Figure 2 -- OpenC2 Message Exchange
![message exchange](images/image_1.png)


### ##subsubsec Tables

#### ##subsubsubsec Basic Table
**Table 1-1. Table Label**

| Item | Description |
| :--- | :--- |
| Item 1 | Something<br>(second line) |
| Item 2 | Something |
| Item 3 | Something<br>(second line) |
| Item 4 | text |

#### ##subsubsubsec Table with Three Columns and Some Bold Text
text.

| Title 1 | Title 2 | title 3 |
| :--- | :--- | :--- |
| something | something | something else that is a long string of text that **might** need to wrap around inside the table box and will just continue until the column divider is reached |
| something | something | something |

#### ##subsubsubsec Table with a caption which can be referenced

###### Table 1-5. See reference label construction

<table caption uses six ####### to become a linkable element; positioned above table so table is readable after jumping to it> 

| Name | Description |
| :--- | :--- |
| **content** | Message body as specified by content_type and msg_type. |

Here is a reference to the table caption:
Please see [Table 1-5 or other meaningful label](#table-1-5-see-reference-label-construction) 


### ##subsubsec Lists

Bulleted list:
* bullet item 1.
* **Bold** bullet item 2.
* bullet item 3.
* bullet item 4.

Indented or multi-level bullet list - add two spaces per level before bullet character (* or -):
* main bullet type
  * Example second bullet
    * See third level
      * fourth level

Numbered list:
1. item 1
2. item 2
3. item 3

Left-justified list without bullets or numbers:
To list multiple items without full paragraph breaks between items, add space-backslash after each item except the last.

### ##subsubsec Reference Label Construction

REFERENCES and ANCHORS
- in markdown source, format the Reference tags as level 6 headings like: `###### [RFC2119]`
###### [RFC2119]
Bradner, S., "Key words ..."

- reference text has to be on a separate line below the tag

- format cross-references (citations of the references) like: `see [[RFC2119](#rfc2119)]`  
"see [[RFC2119](#rfc2119)]"  
(note the outer square brackets in markdown will appear in the visible HTML text)

- The text in the Reference tag (following ###### ) will become an HTML anchor using the following conversion rules:  
  - punctuation marks will be dropped (including "[" )  
  - leading white spaces will be dropped  
  - upper case will be converted to lower  
  - spaces between letters will be converted to a single hyphen

- The same HTML anchor construction rules apply to cross-references and to section headings.  
  - Thus, a section heading like "## 1.2 Glossary"  
  - becomes an anchor in HTML like `<a href="#12-glossary">`  
  - referenced in the markdown like: see [Section 1.2](#12-glossary)  
  - in markdown: `"see [Section 1.2](#12-glossary)"`  
  - similar HTML anchors are also used in constructing the TOC

### ##subsubsec Code Blocks

Text to appear as an indented code block with grey background and monospace font - use three back-ticks before and after the code block.

Note the actual backticks will not appear in the HTML format. If it's necessary to display visible backticks, place a back-slash before them like: \``` .

```
{   
    "target": {
        "x_kmip_2.0": {
            {"kmip_type": "json"},
            {"operation": "RekeyKeyPair"},
            {"name": "publicWebKey11DEC2017"}
        }
    }
}
```

Text to be highlighted as code can also be surrounded by a single "backtick" character: 
`code text`

### ##subsubsec Blockquotes

To create a blockquote, start a line with greater than (>) followed by an optional space.

Blockquotes can be nested, and can also contain other formatting.

The stylesheet https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3a.css results in an indented block with a left-side bar.

## ##subsec Page Breaks
Add horizontal rule lines where page breaks are desired in the PDF - before each major section
- insert the line rules in markdown by inserting 3 or more hyphens on a line by themselves:  ---
- place these before each main section in markdown (usually "#" - which generates the HTML `<h1>` tag)

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
