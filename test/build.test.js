const fs = require("fs");
const Number = require("../lib/number");
const pandoc = require("../lib/pandoc");
const { compareSectionNumbers } = require("../lib/utilities");
const puppeteer = require("puppeteer");
const url = require("url");
const assert = require("assert");
const { PassThrough } = require("stream");

describe("OASIS doc build", function () {
  this.timeout(10000);

  it("Markdown assembly", async function () {
    var md = new PassThrough();
    new Number("test/test-data").build(md);
    var markdown = "";
    for await (var chunk of md) markdown += chunk.toString();
    assert.deepStrictEqual(
      markdown.split(/\r\n|\r|\n/),
      fs
        .readFileSync(__dirname + "/test-data/test.md.txt")
        .toString()
        .split(/\r\n|\r|\n/),
      "Markdown",
    );
  });

  it("Pandoc", async function () {
    var proc = pandoc({
      "--metadata-file": __dirname + "/test-data/meta.yaml",
    });
    fs.createReadStream(__dirname + "/test-data/test.md.txt").pipe(proc.stdin);
    var html = "";
    for await (var chunk of proc.stdout) html += chunk.toString();
    assert.deepStrictEqual(
      html.split(/\r\n|\r|\n/),
      fs
        .readFileSync(__dirname + "/test-data/test.html")
        .toString()
        .split(/\r\n|\r|\n/),
      "HTML",
    );
  });

  it("Puppeteer", async function () {
    var browser = await puppeteer.launch({ headless: "new" });
    var page = await browser.newPage();
    const htmlUrl = url.pathToFileURL(`${__dirname}/test-data/test.html`).href;
    await page.goto(htmlUrl, {
      waitUntil: "networkidle2",
    });
    var box = await (await page.$("mjx-c.mjx-c1D6FC.TEX-I")).boxModel();
    await browser.close();
    assert.equal(Math.round(box.width), 10);
    assert.equal(Math.round(box.height), 7);
  });

  it("Compare section numbers", function () {
    assert.equal(compareSectionNumbers("0 foo", "1 bar"), -1, "simple");
    assert.equal(compareSectionNumbers("1 foo", "0 bar"), 1, "simple, reverse");
    assert.equal(compareSectionNumbers("9 foo", "23 bar"), -1, "numeric");
    assert.equal(compareSectionNumbers("3 foo", "3.4 bar"), -1, "prefix");
    assert.equal(compareSectionNumbers("3.14 foo", "3.4 bar"), 1, "prefix");
    assert.equal(compareSectionNumbers("9 foo", "Appendix"), -1, "numeric");
  });
});
