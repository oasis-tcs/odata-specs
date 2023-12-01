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
  for (var r of await Promise.all(
    (
      await Promise.all(
        (await page.$$(process.argv[2])).map(async function (elem) {
          var elems = process.argv[3]
            ? await elem.$$("xpath/" + process.argv[3])
            : [elem];
          return elems.map((elem) =>
            elem.evaluate((e) =>
              e.nodeType === Node.ELEMENT_NODE ? e.outerHTML : e.nodeValue,
            ),
          );
        }),
      )
    ).flat(),
  ))
    console.log(r);
  console.groupEnd();
}
process.exit(0);
