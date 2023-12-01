import puppeteer from "puppeteer";
import iterator from "./iterator.js";

var docs = [];
iterator(function (srcname, name, variant) {
  docs.push(name);
});
var browser = await puppeteer.launch({ headless: "new" });
for (var name of docs) {
  console.group(name);
  var page = await browser.newPage();
  await page.goto(`${import.meta.dirname}/../docs/${name}/${name}.html`, {
    waitUntil: "networkidle2",
  });
  var elements = await page.$$(process.argv[2]);
  for (var elem of elements) {
    var elems = process.argv[3]
      ? await elem.$$("xpath/" + process.argv[3])
      : [elem];
    for (elem of elems)
      console.log(
        await elem.evaluate((e) =>
          e.nodeType === Node.ELEMENT_NODE ? e.outerHTML : e.nodeValue,
        ),
      );
  }
  console.groupEnd();
}
