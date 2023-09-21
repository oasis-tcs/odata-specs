# Node.js modules for generation of OASIS documents

This folder contains several Node.js modules that generate OASIS specification documents (in Markdown, HTML and PDF) from a plain-text source. The source documents are Markdown files with MathJax formulas (in TeX-like notation like `$p_1,…,p_n$`) and additional preprocessing (see [this folder](../odata-data-aggregation-ext) for an example):

- Section and example numbers and references to them are expressed in the Markdown source as follows:
  ```
  # ##sec Section Heading
  ## ##subsec Subsection Heading
  ### ##subsubsec Subsubsection Heading
  Example ##ex: Example
  Example ##ex_aggregation: Referenceable example
  See [here](#SubsectionHeading). Reference to a subsection.
  See [subsection ##SubsectionHeading]. Reference to a subsection showing its number.
  See [this example](#aggregation). Reference to an example.
  See [example ##aggregation]. Reference to an example showing its number.
  ```
- Long MathJax formulas, especially multi-row ones such as `$$\matrix(...)$$`, can be typed on multiple lines, if each line except the last ends with a single space.
- The same mechanism can be used to spread table lines over several source lines, see the "Revision History" table at the end of [this source file](../odata-data-aggregation-ext/8%20Conformance.md).

The [`number.js`](number.js) module generates a single Markdown document by preprocessing all `.md` files in a given folder:

- Generate section and example numbers
- Generate a table of contents
- Resolve references
- Replace placeholders like `$$$pagetitle$$$` with values from a [`meta.yaml`](../odata-data-aggregation-ext/meta.yaml) file
- Join multiple lines that end with a single space into one line
- Sections of the file between `: varXXX` and `:` or between `::: {.varXXX ...}` and `:::` belong to a variant. One source file can contain several variants.

The single Markdown document is output into a writable stream:

```js
import * as Number from './lib/number.js';
new Number("odata-data-aggregation-ext").build(«writable stream»);
```

or, if variant `XXX` shall be produced:

```js
import * as Number from './lib/number.js';
new Number("odata-data-aggregation-ext", "XXX").build(«writable stream»);
```

The [`pandoc.js`](pandoc.js) module converts this single Markdown document to HTML with [MathJax](https://www.mathjax.org/). It expects [pandoc 3.1.2](https://github.com/jgm/pandoc/releases/tag/3.1.2) to be set up, for example in a GitHub Action with the step

```yaml
- name: Setup pandoc
  uses: nikeee/setup-pandoc@v1
  with:
    pandoc-version: 3.1.2
```

and effectively executes

```
pandoc -f gfm+tex_math_dollars+fenced_divs
       -t html
       -o odata-data-aggregation-ext.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --metadata pagetitle="..."
       odata-data-aggregation-ext.md
```

The Markdown-to-HTML conversion happens in a child process into which the Markdown is written and from which the HTML is read:

```js
import * as Number from './lib/number.js';
import * as pandoc from './lib/pandoc.js';
var proc = pandoc({"--metadata-file": "./odata-data-aggregation-ext/meta.yaml"});
proc.stdout.pipe(«HTML file»);
new Number("odata-data-aggregation-ext").build(proc.stdin);
```

The HTML file uses CSS stylesheets contained in the [`docs/*/styles`](../docs/odata-data-aggregation-ext/styles) subfolder in order to render keywords in the same font (MathJax Typewriter) whether they occur standalone or in a formula:

| Keyword occurs     | Markdown source                      | Rendered result                      |
| ------------------ | ------------------------------------ | ------------------------------------ |
| standalone         | `` The `aggregate` transformation `` | The ${\tt aggregate}$ transformation |
| in MathJax formula | `${\tt aggregate}(α{\tt\ as\ }D)$`   | ${\tt aggregate}(α{\tt\ as\ }D)$     |

A monospaced font (Courier New) is used for OData requests and their JSON or XML responses.

[`npm start`](server.js) starts a web server that serves such HTML files and the static `.css` files without writing intermediate files. This allows authors to see the effects of every change to the source folder in the working tree after saving the source files which triggers a browser auto-refresh.

The [`pdf.js`](pdf.js) module uses a headless browser ([`puppeteer`](https://github.com/puppeteer/puppeteer#puppeteer)) to convert the HTML file into a PDF file with OASIS headers and footers.

The following scripts can be executed manually or as part of a GitHub Action:

- [`npm run build`](build.js) runs the conversion and writes the Markdown output as well as the HTML output into the [`docs/*`](../docs) folder.
- [`npm run pdf`](build-pdf.mjs) runs the PDF conversion and writes the PDF document into the [`docs/*`](../docs) folder.
- [`npm test`](../test) runs a test suite.

## A note on diagrams

Mermaid has not been used, instead the diagrams in section 2 of [`odata-data-aggregation-ext`](../odata-data-aggregation-ext) have been produced

- in section 2.1 with Visio and exported as SVG (as described [here](../odata-data-aggregation-ext/diagrams))
- in sections 2.2 and 2.3 with Markdown tables and CSS-positioned SVG.

See the source Markdown [here](../odata-data-aggregation-ext/1%20Introduction.md).
