<h2>README</h2>

<p>Members of the <a href="https://www.oasis-open.org/committees/odata/">OASIS Open Data Protocol (OData) Technical Committee</a> create and manage technical content in this TC GitHub repository ( <a href="https://github.com/oasis-tcs/odata-specs">https://github.com/oasis-tcs/odata-specs</a> ) as part of the TC's chartered work (<i>i.e.</i>, the program of work and deliverables described in its <a href="https://www.oasis-open.org/committees/odata/charter.php">charter</a>).</p>

<p>OASIS TC GitHub repositories, as described in <a href="https://www.oasis-open.org/resources/tcadmin/github-repositories-for-oasis-tc-members-chartered-work">GitHub Repositories for OASIS TC Members' Chartered Work</a>, are governed by the OASIS <a href="https://www.oasis-open.org/policies-guidelines/tc-process">TC Process</a>, <a href="https://www.oasis-open.org/policies-guidelines/ipr">IPR Policy</a>, and other policies, similar to TC Wikis, TC JIRA issues tracking instances, TC SVN/Subversion repositories, etc.  While they make use of public GitHub repositories, these TC GitHub repositories are distinct from <a href="https://www.oasis-open.org/resources/open-repositories">OASIS Open Repositories</a>, which are used for development of open source <a href="https://www.oasis-open.org/resources/open-repositories/licenses">licensed</a> content.</p>

<h3>Description</h3>

<p>The purpose of this repository is to maintain Markdown sources for draft revisions of the OData core and extension specifications.</p>

<h3>Contributions</h3>
<p>As stated in this repository's <a href="https://github.com/oasis-tcs/odata-specs/blob/main/CONTRIBUTING.md">CONTRIBUTING file</a>, contributors to this repository are expected to be Members of the OASIS OData TC, for any substantive change requests.  Anyone wishing to contribute to this GitHub project and <a href="https://www.oasis-open.org/join/participation-instructions">participate</a> in the TC's technical activity is invited to join as an OASIS TC Member. Public feedback is also accepted, subject to the terms of the <a href="https://www.oasis-open.org/policies-guidelines/ipr#appendixa">OASIS Feedback License</a>.</p>

<h3>Licensing</h3>
<p>Please see the <a href="https://github.com/oasis-tcs/odata-specs/blob/main/LICENSE.md">LICENSE</a> file for description of the license terms and OASIS policies applicable to the TC's work in this GitHub project. Content in this repository is intended to be part of the OData TC's permanent record of activity, visible and freely available for all to use, subject to applicable OASIS policies, as presented in the repository <a href="https://github.com/oasis-tcs/odata-specs/blob/main/LICENSE.md">LICENSE</a> file.</p>

<h3>Contact</h3>
<p>Please send questions or comments about <a href="https://www.oasis-open.org/resources/tcadmin/github-repositories-for-oasis-tc-members-chartered-work">OASIS TC GitHub repositories</a> to <a href="mailto:tc-administration@oasis-open.org">Project Administration</a>.  For questions about content in this repository, please contact the TC Chair or Co-Chairs as listed on the the OData TC's <a href="https://www.oasis-open.org/committees/odata/">home page</a>.</p>

# PoC for Markdown as Authoritative specification source

Section and example numbers and references to them are expressed in the Markdown source as follows:
```
# ##sec Section Heading
## ##subsec Subsection Heading
### ##subsubsec Subsubsection Heading
Example ##ex: Example
Example ##ex_aggregation: Referenceable example
See [here](#SubsectionHeading). Reference to a subsection.
See [subsection #SubsectionHeading]. Reference to a subsection showing its number.
See [this example](##aggregation). Reference to an example.
See [example ##aggregation]. Reference to an example showing its number.
```

Long mathematical formulas, especially multi-row ones such as `$$\matrix(...)$$`, can be typed on multiple lines, if each line except the last ends with a single space.

This additional syntax is resolved with the Node.js module [`lib/number.js`](lib/number.js).

## How to view the documents

To view mathematical formulas, install pandoc as explained in the section on [Document Conventions](odata-data-aggregation-ext/1%20Introduction.md).

Clone this repository, run `npm install` and `npm start` to start a Node.js server and access the HTML pages at, for example, `http://localhost:8080/odata-data-aggregation-ext`.

Run `npm run build` to build HTML and Markdown files for publication on github.io.

## To Do

- [x] Auto-generate table of content with links to sections
- [x] Make section headlines self-links as in the [Core specifications](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_ServiceModel)
- [ ] Use same anchor naming convention `sec_CondensedHeadlineText` as in Core specifications?
- [x] Fixed scaling of pictures instead of auto-scaling to page width?
- [x] Align structure of `/docs` subfolders with OASIS publication folder structure, see https://docs.oasis-open.org/openc2/oc2ls/v1.0/cs02/
  - [x] OASIS filenames for `.md` and `.html` instead of constant `README.md` and `index.html`
  - [x] include OASIS CSS file in `styles` subfolder to have snapshot of styles at point of document production
- [x] Use OASIS work product abbreviation for folder names: `odata-data-aggregation-ext` instead of `odata-aggr`
- [x] Cross-check compliance with [OASIS Editor's Manual](https://www.oasis-open.org/member-resources/)
  - [x] [Part 3: Work Product Structure](https://docs.google.com/document/d/1yA-wt2wB4NOpgoQ81VBfuJ1WPA1GK_BuddiVP_L6BnU/edit#heading=h.bi4fdsq13pue): How are specifications structured and named at OASIS? What is the crucial metadata?
  - [x] [Part 4: Work Product Preparation](https://docs.google.com/document/d/10lt8f2pn_ebZTsWJiGYiWYzyo6NbjuTskvDcS2tSyPw/edit#heading=h.bi4fdsq13pue): How do you actually craft the work product? What steps do you need to take to move it forward?
- [ ] Check MD/HTML for broken and inconsistent links (similar to what we currently do with the `ExtractHyperlinksToExcel` Word macro)
  - [x] Check for use of undefined anchors
  - [ ] Check for hyperlinks with the same link target and different texts
  - [ ] Check for hyperlinks with the same text and different link targets
- [x] Request starter Markdown document and align our MD files with it
- [x] Check diagram sources (Visio) into repository
- [x] Describe export process for diagrams to SVG
- [x] Table of contents: full line as link text, not just the section number, same as in https://docs.oasis-open.org/openc2/oc2ls/v1.0/oc2ls-v1.0.html#table-of-contents
- [x] Section headers: full line as self-link text, same as in https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_Introduction
