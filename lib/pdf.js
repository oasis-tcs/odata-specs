const puppeteer = require("puppeteer");
const { exec } = require("child_process");
const fs = require("fs");
const url = require("url");

module.exports = async function (name, _variant, meta, force) {
  if (!force) {
    const stylesDir = `${__dirname}/../docs/${name}/styles`;
    const htmlFile = `${__dirname}/../docs/${name}/${name}.html`;
    const pdfFile = `${__dirname}/../docs/${name}/${name}.pdf`;
    const sources = `${htmlFile} ${stylesDir}`;

    let sourcesChanged = await commitTime(sources);
    let pdfChanged = await commitTime(pdfFile);

    const sourceDiffs = await hasDiffs(sources);
    if (sourceDiffs) {
      const htmlStat = fs.statSync(htmlFile, { throwIfNoEntry: false });
      if (htmlStat?.mtime > sourcesChanged) sourcesChanged = htmlStat?.mtime;
      // get maximum modified timestamp of html and styles
      fs.readdirSync(stylesDir, { withFileTypes: true }).forEach((doc) => {
        const stat = fs.statSync(`${stylesDir}/${doc.name}`);
        if (stat.mtime > sourcesChanged) sourcesChanged = stat.mtime;
      });
    }

    const pdfDiffs = await hasDiffs(pdfFile);
    if (pdfDiffs) {
      const pdfStat = fs.statSync(pdfFile, { throwIfNoEntry: false });
      if (pdfStat?.mtime > pdfChanged) pdfChanged = pdfStat?.mtime;
    }

    if (pdfChanged === undefined || sourcesChanged > pdfChanged) force = true;
  }

  if (force) {
    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();
    const htmlUrl = url.pathToFileURL(
      `${__dirname}/../docs/${name}/${name}.html`,
    ).href;
    await page.goto(htmlUrl, {
      waitUntil: "networkidle2",
    });
    await page.pdf({
      path: `${__dirname}/../docs/${name}/${name}.pdf`,
      format: "letter",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate:
        '<div style="font-size: 10px; width: 100%; text-align: center;">Standards Track Work Product</div>',
      footerTemplate: `<div style="font-size: 8px; width: 90%; margin: auto; margin-top: 40px; display:flex; flex-flow:row wrap;">
      <span style="text-align: left; width: 30%;">${meta.filename}</span>
      <span style="text-align: center; width: 40%;">Copyright ${meta.copyright}. All Rights Reserved.</span>
      <span style="text-align: right; width: 30%;">${meta.pubdate} - Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </span></div>`,
      margin: { top: 50, bottom: 60 },
    });

    await browser.close();
    return true;
  }
};

async function commitTime(filenames) {
  const res = await git(["log -1 --format=%cI --", filenames]);
  const len = res.stdout.length;
  return len === 0 ? undefined : new Date(res.stdout.substring(0, len - 1));
}

async function hasDiffs(filenames) {
  const res = await git(["diff --quiet HEAD --", filenames]);
  return res.code !== 0;
}

function git(args, cwd) {
  return new Promise((resolve) => {
    exec(`git ${args.join(" ")}`, { cwd }, (error, stdout, stderr) => {
      resolve({
        code: error && error.code ? error.code : 0,
        error,
        stdout,
        stderr,
      });
    });
  });
}
