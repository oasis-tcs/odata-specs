const fs = require("fs");
const Number = require("../lib/number");
const pandoc = require("../lib/pandoc");
const puppeteer = require("puppeteer");
const assert = require("assert");
const { PassThrough } = require("stream");

describe("OASIS doc build", function () {
  it("Markdown assembly", async function () {
    var md = new PassThrough();
    new Number(__dirname + "/test-data").build(md);
    var markdown = "";
    for await (var chunk of md) markdown += chunk.toString();
    assert.deepStrictEqual(
      markdown.split(/\r\n|\r|\n/),
      fs
        .readFileSync(__dirname + "/test-data/test.md.txt")
        .toString()
        .split(/\r\n|\r|\n/),
      "Markdown"
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
      "HTML"
    );
  });
  it("Puppeteer", async function () {
    var browser = await puppeteer.launch({ headless: "new" });
    var page = await browser.newPage();
    await page.goto(__dirname + "/test-data/test.html", { waitUntil: "networkidle2" });
    var box = await (await page.$(".mjx-c1D6FC.TEX-I")).boxModel();
    assert.equal(box.width, 10);
    assert.equal(box.height, 7);
    await browser.close();
  });
});
