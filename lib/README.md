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
  See [#OData-Protocol#SectionHeading]. Cross-document section reference.
  See [OData-Protocol, example #OData-Protocol#aggregation]. Other cross-document reference.
  [This important sentence]{id=important} is referenced [elsewhere](#important).
  ```
- Lines ending with single space are joined with the next line.
- This mechanism can be used to spread table lines over several source lines, see the "Revision History" table at the end of [this source file](../odata-data-aggregation-ext/8%20Conformance.md).

The [`number.js`](number.js) module generates a single Markdown document by preprocessing all `.md` files in a given folder:

- Generate section and example numbers
- Generate a table of contents
- Resolve references
- Include files like `$$$include images/drawing.svg$$$`
- Replace placeholders like `$$$pagetitle$$$` with values from a [`meta.yaml`](../odata-data-aggregation-ext/meta.yaml) file
- Join multiple lines that end with a single space into one line
- Sections of the file between `: varXXX` and `:` or between `::: {.varXXX ...}` and `:::` belong to a variant. One source file can contain several variants.

The single Markdown document is output into a writable stream:

```js
import * as Number from './lib/number.js';
new Number("odata-data-aggregation-ext", "meta", {...}).build(«writable stream»);
```

The [`pandoc.js`](pandoc.js) module converts this single Markdown document to HTML with [MathJax](https://www.mathjax.org/). It expects a certain [pandoc release](https://github.com/jgm/pandoc/releases) to be set up, according to the GitHub Action [`nodejs.yml`](../.github/workflows/nodejs.yml) with the step

```yaml
- name: Setup pandoc
  uses: nikeee/setup-pandoc@v1
  with:
    pandoc-version: 3.x.y
```

and effectively executes

```
pandoc --metadata pagetitle="..."
       <other options>
       odata-data-aggregation-ext.md
```

where the other options are listed in the [`pandoc.js`](pandoc.js) module.

The Markdown-to-HTML conversion happens in a child process into which the Markdown is written and from which the HTML is read:

```js
import * as Number from './lib/number.js';
import * as pandoc from './lib/pandoc.js';
var proc = pandoc({"--metadata-file": "./odata-data-aggregation-ext/meta.yaml"});
proc.stdout.pipe(«HTML file»);
var meta = yaml.load(fs.readFileSync("./odata-data-aggregation-ext/meta.yaml"));
new Number("odata-data-aggregation-ext", "meta", meta).build(proc.stdin);
```

A monospaced font (Courier New) is used for keywords, OData requests and their JSON or XML responses.

[`npm start`](server.js) starts a web server that serves such HTML files and the static `.css` files without writing intermediate files. This allows authors to see the effects of every change to the source folder in the working tree after saving the source files which triggers a browser auto-refresh.

The [`pdf.js`](pdf.js) module uses a headless browser ([`puppeteer`](https://github.com/puppeteer/puppeteer#puppeteer)) to convert the HTML file into a PDF file with OASIS headers and footers.

The following scripts can be executed manually or as part of a GitHub Action:

- [`npm run build`](build.js) runs the conversion and writes the following into the [`docs/*`](../docs) folder:
  - the Markdown output
  - the HTML output
  - a copy of the common [`styles`](../styles) folder
  - a copy of the document-specific `*/images` folder, if this exists.
- `npm run build repo:odata-vocabularies` additionally produces [`docs/odata-vocabularies`](../docs/odata-vocabularies) based on the contents of the `oasis-tcs/odata-vocabularies` repository.
- [`npm run pdf`](build-pdf.mjs) runs the PDF conversion and writes the PDF document into the [`docs/*`](../docs) folder.
- [`npm run zip <yyyy-MM-dd>`](zip.js) creates ZIP files for OASIS public review of documents with the given publication date. The ZIP files are written into the [`zip`](../zip) folder.
- [`npm run select <CSS selector> [<XPath expression>]`](selector.mjs) selects parts of the generated HTML documents by executing a CSS selector and optionally an XPath expression relative to each match. For example, syntax errors in JSON code snippets can be detected with
  ```sh
  npm run select ".json .er" "self::*[.!='…']/text()"
  ```
- [`npm test`](../test) runs a test suite.

## A note on diagrams

Mermaid has not been used, instead the diagrams in section 2 of [`odata-data-aggregation-ext`](../odata-data-aggregation-ext) have been produced

- in section 2.1 with Visio and exported as SVG (as described [here](../odata-data-aggregation-ext/diagrams))
- in sections 2.2 and 2.3 with Markdown tables and CSS-positioned SVG.

See the source Markdown [here](../odata-data-aggregation-ext/1%20Introduction.md).

# OData TC meeting minutes

Minutes of OData TC meetings are created as [discussions](https://github.com/oasis-tcs/odata-specs/discussions/categories/minutes). A PDF version can be created in the `minutes` folder with the command [`npm run minutes <number of discussion>`](minutes.mjs).
