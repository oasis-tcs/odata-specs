import puppeteer from "puppeteer";
import iterator from "./iterator.js";

var docs = [];
iterator(function (srcname, name, variant) {
  docs.push(name);
});
var browser = await puppeteer.launch({ headless: "new" });
for (var name of docs) {
  var heading = undefined;
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
            elem.evaluate(function (e) {
              return {
                heading: document.evaluate(
                  "preceding::*[self::h1|self::h2|self::h3|self::h4|self::h5|self::h6][1]",
                  e,
                  () => {},
                  XPathResult.FIRST_ORDERED_NODE_TYPE,
                ).singleNodeValue.textContent,
                match:
                  e.nodeType === Node.ELEMENT_NODE ? e.outerHTML : e.nodeValue,
              };
            }),
          );
        }),
      )
    ).flat(),
  )) {
    if (r.heading !== heading) {
      if (heading) console.groupEnd();
      console.group(r.heading);
      heading = r.heading;
    }
    console.log(r.match);
  }
  if (heading) console.groupEnd();
  console.groupEnd();
}
process.exit(0);
