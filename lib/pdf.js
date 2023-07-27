const puppeteer = require("puppeteer");
const fs = require("fs");
const url = require("url");
const yaml = require("js-yaml");

module.exports = async function (name, variant) {
  var dirname, filename;
  const meta = yaml.load(
    fs.readFileSync(__dirname + "/../" + name + "/" + variant + ".yaml")
  );
  if (variant === "meta") {
    dirname = name;
    filename = name;
  } else {
    dirname = meta.dirname;
    filename = meta.filename;
  }

  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  const htmlUrl = url.pathToFileURL(
    `${__dirname}/../docs/${dirname}/${filename}.html`
  ).href;
  await page.goto(htmlUrl, {
    waitUntil: "networkidle2",
  });
  await page.pdf({
    path: `${__dirname}/../docs/${dirname}/${filename}.pdf`,
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
};
