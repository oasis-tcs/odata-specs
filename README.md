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

## How to view the documents

Documents are generated from Markdown sources using Node.js modules described [here](lib) and Pandoc.

### Installation

1. Download and install [Node.js](https://nodejs.org/), verify via `node -v`
2. Download and install [Pandoc](https://pandoc.org/), verify via `pandoc -v`
3. Download and install [git](https://git-scm.com/), verify via `git -v`
4. Optionally download and install [GitHub Desktop](https://desktop.github.com/)
5. Clone this repository
6. In the local repository folder run `npm install`, verify via `npm test`

### Document preparation

- `npm start` starts a [local web server](lib/server.js) to serve the HTML pages at <http://localhost:8080>

  - The HTML pages are rebuilt and the browser is auto-refreshed whenever one of the source files changes

- `npm run build` builds HTML and Markdown files for publication on <https://oasis-tcs.github.io/odata-specs/>

  - Do this before pushing to GitHub to avoid build errors

- `npm run pdf` converts the HTML files to PDF
  - This is only necessary for publication to the [OASIS Library](https://www.oasis-open.org/standards/)

## Published documents

Title|Stage|Files|Published at
-----|-----|-----|------------
OData Extension for Data Aggregation Version 4.0|Committee Specification 03|[Specification](https://github.com/oasis-tcs/odata-specs/tree/odata-data-aggregation-ext/V4.0_CS03/docs/odata-data-aggregation-ext) [Vocabulary](https://github.com/oasis-tcs/odata-vocabularies/tree/odata-data-aggregation-ext/V4.0_CS03/vocabularies) [ABNF](https://github.com/oasis-tcs/odata-abnf/tree/odata-data-aggregation-ext/V4.0_CS03/abnf)|[OASIS](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs03/)
OData Version 4.02. Part 1: Protocol|Committee Specification Draft 01|[Specification](https://github.com/oasis-tcs/odata-specs/tree/core/V4.02_CSD01/docs/odata-protocol) [ABNF](https://github.com/oasis-tcs/odata-abnf/tree/core/V4.02_CSD01/abnf)|[OASIS](https://docs.oasis-open.org/odata/odata/v4.02/csd01/part1-protocol/)
OData Version 4.02. Part 2: URL Conventions|Committee Specification Draft 01|[Specification](https://github.com/oasis-tcs/odata-specs/tree/core/V4.02_CSD01/docs/odata-url-conventions) [ABNF](https://github.com/oasis-tcs/odata-abnf/tree/core/V4.02_CSD01/abnf)|[OASIS](https://docs.oasis-open.org/odata/odata/v4.02/csd01/part2-url-conventions/)
OData JSON Format Version 4.02|Committee Specification Draft 01|[Specification](https://github.com/oasis-tcs/odata-specs/tree/core/V4.02_CSD01/docs/odata-json-format)|[OASIS](https://docs.oasis-open.org/odata/odata-json-format/v4.02/csd01/)
OData Common Schema Definition Language (CSDL) JSON Representation Version 4.02|Committee Specification Draft 01|[Specification](https://github.com/oasis-tcs/odata-specs/tree/core/V4.02_CSD01/docs/odata-csdl-json) [Schemas](https://github.com/oasis-tcs/odata-csdl-schemas/tree/core/V4.02_CSD01/schemas)|[OASIS](https://docs.oasis-open.org/odata/odata-csdl-json/v4.02/csd01/)
OData Common Schema Definition Language (CSDL) XML Representation Version 4.02|Committee Specification Draft 01|[Specification](https://github.com/oasis-tcs/odata-specs/tree/core/V4.02_CSD01/docs/odata-csdl-xml) [Schemas](https://github.com/oasis-tcs/odata-csdl-schemas/tree/core/V4.02_CSD01/schemas)|[OASIS](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.02/csd01/)
OData Vocabularies Version 4.0|Committee Specification Draft 02|[Specification](https://github.com/oasis-tcs/odata-specs/tree/vocabularies/V4.0_CSD02/docs/odata-vocabularies) [Vocabularies](https://github.com/oasis-tcs/odata-vocabularies/tree/vocabularies/V4.0_CSD02/vocabularies)|[OASIS](https://docs.oasis-open.org/odata/odata-vocabularies/v4.0/csd02/)
OData Extension for Data Aggregation Version 4.0|Committee Specification 04|[Specification](https://github.com/oasis-tcs/odata-specs/tree/odata-data-aggregation-ext/V4.0_CS04/docs/odata-data-aggregation-ext) [Vocabulary](https://github.com/oasis-tcs/odata-vocabularies/tree/odata-data-aggregation-ext/V4.0_CS04/vocabularies) [ABNF](https://github.com/oasis-tcs/odata-abnf/tree/odata-data-aggregation-ext/V4.0_CS04/abnf)|[OASIS](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs04/)
