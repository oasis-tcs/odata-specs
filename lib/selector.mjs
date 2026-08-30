import puppeteer from "puppeteer";
import iterator from "./iterator.js";

const links = {};
function validateLink(href) {
  links[href] ??= browser.newPage().then(async function (page) {
    const resp = await page.goto(href, {
      waitUntil: "networkidle2",
    });
    if (resp && !resp.ok()) throw "broken_link";
    return page;
  });
  return links[href];
}

var docs = [];
iterator(function (srcname, name, variant) {
  docs.push(name);
});
var browser = await puppeteer.launch({ headless: "new" });
var exit_code = 0;
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

          /* Links are checked for staleness */
          if (process.argv[4] === "link" && elems.length > 0) {
            const href = (await elems[0].evaluate((e) => e.nodeValue)).split(
              "#",
              2,
            );
            if (href[0].startsWith("mailto:")) elems = [];
            else {
              try {
                const link = href[0] ? await validateLink(href[0]) : page;
                if (
                  !href[1] ||
                  href[0].startsWith("https://github.com/") ||
                  (await link.$(`[id="${href[1]}"], [name="${href[1]}"]`))
                )
                  elems = [];
              } catch (ex) {}
            }
          }

          if (elems.length > 0) exit_code = 1;
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
process.exit(exit_code);
