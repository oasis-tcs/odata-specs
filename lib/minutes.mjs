import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: "new",
});
const page = await browser.newPage();
await page.goto(
  `https://github.com/oasis-tcs/odata-specs/discussions/${process.argv[2]}`,
  {
    waitUntil: "networkidle2",
  },
);
const title = (await page.title()).split(" · ", 1)[0];
await (
  await page.$("task-lists")
).evaluate(function (text, title) {
  text.ownerDocument.body.innerHTML = `<h1 class="gh-header-title flex-auto wb-break-word f1 mr-0">${title}</h1>${text.innerHTML}`;
}, title);
await page.pdf({
  path: `${import.meta.dirname}/../minutes/${decodeURIComponent(title)}.pdf`,
  format: "letter",
  printBackground: true,
  margin: { top: 50, bottom: 50, left: 50, right: 50 },
});
await browser.close();
