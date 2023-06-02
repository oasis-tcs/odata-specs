const puppeteer = require('puppeteer');
const fs = require("fs");
const yaml = require("js-yaml");

module.exports = async function(name) {
  const meta = yaml.load(fs.readFileSync(__dirname + "/../" + name + "/meta.yaml"));

  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();
  await page.goto(`${__dirname}/../docs/${name}/${name}.html`, {
    waitUntil: "networkidle2",
  });
  await page.pdf({
    path: `${__dirname}/../docs/${name}/${name}.pdf`,
    format: "letter",
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center;">Standards Track Work Product</div>',
    footerTemplate: `<div style="font-size: 8px; width: 90%; margin: auto; display:flex; flex-flow:row wrap;">
      <span style="text-align: left; width: 30%;">${meta.filename}</span>
      <span style="text-align: center; width: 40%;">Copyright ${meta.copyright}. All Rights Reserved.</span>
      <span style="text-align: right; width: 30%;">${meta.pubdate} - Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </span></div>`,
    margin: { top: 50, bottom: 50 }
  });

  await browser.close();
}
