const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();
  await page.goto(__dirname + '/../docs/odata-data-aggregation-ext/odata-data-aggregation-ext.html', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({
    path: __dirname + '/../docs/odata-data-aggregation-ext/odata-data-aggregation-ext.pdf',
    format: 'letter',
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size: 8px; width: 100%; text-align: center;">Standards Track Work Product</div>',
    footerTemplate: '<div style="font-size: 8px; width: 100%; display:flex; flex-flow:row wrap;"><span style="text-align: left; width: 33%;">odata-data-aggregation-ext-v4.0-csd04-wd</span> <span style="text-align: center; width: 34%;">Copyright © OASIS Open 2023. All Rights Reserved.</span> <span style="text-align: right; width: 33%;">01 June 2023 - Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>',
    margin: { top: 50, bottom: 50 }
  });

  await browser.close();
})();
