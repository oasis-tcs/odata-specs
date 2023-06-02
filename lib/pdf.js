const puppeteer = require('puppeteer');
const fs = require("fs");
const yaml = require("js-yaml");

module.exports = async function(dir) {
  const meta = yaml.load(fs.readFileSync(__dirname + "/../" + dir + "/meta.yaml"));

  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();
  await page.goto(__dirname + "/../docs/" + dir + "/odata-data-aggregation-ext.html", {
    waitUntil: 'networkidle2',
  });
  await page.pdf({
    path: __dirname + '/../docs/odata-data-aggregation-ext/odata-data-aggregation-ext.pdf',
    format: 'letter',
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center;">Standards Track Work Product</div>',
    footerTemplate: '<div style="font-size: 8px; width: 90%; margin: auto; display:flex; flex-flow:row wrap;"><span style="text-align: left; width: 30%;">odata-data-aggregation-ext-v4.0-csd04-wd</span> <span style="text-align: center; width: 40%;">Copyright © OASIS Open 2023. All Rights Reserved.</span> <span style="text-align: right; width: 30%;">01 June 2023 - Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>',
    margin: { top: 50, bottom: 50 }
  });

  await browser.close();
}
