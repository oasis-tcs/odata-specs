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

Documents are generated from a Markdown source using Node.js modules described [here](lib).

To view mathematical formulas, install pandoc as explained in the section on [Document Conventions](odata-data-aggregation-ext/1%20Introduction.md). This is invoked by the Node.js module [`lib/pandoc.js`](lib/pandoc.js).

Clone this repository, run `npm install` and `npm start` to start a Node.js server and access the HTML pages at, for example, `http://localhost:8080` (see [`lib/server.js`](lib/server.js)).

Run `npm run html` to build HTML and Markdown files for publication on github.io (see [`lib/build.js`](lib/build.js)).

Run `npm run pdf` to convert the HTML files into PDF files (using puppeteer, see [`lib/pdf.js`](lib/build-pdf.js)).
