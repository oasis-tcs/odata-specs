# PoC for Markdown as Authoritative specification source

Section and example numbers and references to them are expressed in the Markdown source as follows:
```
# ##sec Section Heading
## ##subsec Subsection Heading
### ##subsubsec Subsubsection Heading
Example ##ex: Example
Example ##ex_aggregation: Referenceable example
See [here](##_SubsectionHeading). Reference to a subsection.
See [subsection ##_SubsectionHeading]. Reference to a subsection showing its number.
See [this example](##_aggregation). Reference to an example.
See [example ##_aggregation]. Reference to an example showing its number.
```

Long mathematical formulas, especially multi-row ones such as `$$\matrix(...)$$`, can be typed on multiple lines, if each line except the last ends with a single space.

This additional syntax is resolved with the Node.js module [`lib/number.js`](lib/number.js).

Run `npm start` to start a Node.js server and access the HTML pages at, for example, `http://localhost/odata-data-aggregation-ext`.

## To Do

- [X] Auto-generate table of content with links to sections
- [X] Make section headlines self-links as in the [Core specifications](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_ServiceModel)
- [ ] Use same anchor naming convention `sec_CondensedHeadlineText` as in Core specifications?
- [ ] Fixed scaling of pictures instead of auto-scaling to page width?
- [ ] Align structure of `/docs` subfolders with OASIS publication folder structure, see https://docs.oasis-open.org/openc2/oc2ls/v1.0/cs02/
  - [X] OASIS filenames for `.md` and `.html` instead of constant `README.md` and `index.html`
  - [ ] include OASIS CSS file in `styles` subfolder to have snapshot of styles at point of document production
- [X] Use OASIS work product abbreviation for folder names: `odata-data-aggregation-ext` instead of `odata-aggr`
- [x] Cross-check compliance with [OASIS Editor's Manual](https://www.oasis-open.org/member-resources/)
  - [x] [Part 3: Work Product Structure](https://docs.google.com/document/d/1yA-wt2wB4NOpgoQ81VBfuJ1WPA1GK_BuddiVP_L6BnU/edit#heading=h.bi4fdsq13pue): How are specifications structured and named at OASIS? What is the crucial metadata?
  - [x] [Part 4: Work Product Preparation](https://docs.google.com/document/d/10lt8f2pn_ebZTsWJiGYiWYzyo6NbjuTskvDcS2tSyPw/edit#heading=h.bi4fdsq13pue): How do you actually craft the work product? What steps do you need to take to move it forward?
- [ ] Check MD/HTML for broken and inconsistent links (similar to what we currently do with the `ExtractHyperlinksToExcel` Word macro)
- [ ] Request starter Markdown document and align our MD files with it
- [ ] Check diagram sources (Visio, PowerPoint) into repository
- [ ] Describe export process for diagrams to SVG
