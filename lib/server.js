const express = require("express");
const Number = require("./number");
const pandoc = require("./pandoc");
const { execSync } = require("child_process");
const fs = require("fs");
const yaml = require("js-yaml");
const iterator = require("./iterator");
const puppeteer = require("puppeteer");

const livereload = require("livereload");
const liveReloadServer = livereload.createServer({ extraExts: ["md"] });

const connectLivereload = require("connect-livereload");
const statics = { images: {}, styles: {} };

const numbers = new Promise(async function (resolve, reject) {
  const n = {};
  const N = [];
  iterator(function (srcname, name, variant, meta) {
    liveReloadServer.watch(`${__dirname}/../${srcname}`);
    n[srcname + "_" + variant] = new Number(
      `${__dirname}/../${srcname}`,
      variant,
      meta,
    );
    N.push(n[srcname + "_" + variant].read());
  });
  await Promise.all(N);
  resolve(n);
});

const app = express()
  .enable("strict routing")
  .use(connectLivereload())
  .get("/", function (_req, res, _next) {
    var docs = [];
    iterator(function (srcname, name, variant) {
      docs.push(
        `<li><a href="${srcname}/?variant=${variant}">${name}</a></li>`,
      );
    });
    res.send(`<h1>Documents</h1><ul>${docs.join("")}</ul>`);
  })
  .get("/:doc", function (req, res, _next) {
    var url = new URL("s://" + req.originalUrl);
    url.pathname += "/";
    res.redirect(url.href.substring(4));
  })
  .get("/:doc/", function (req, res, next) {
    const queryOptions = { ...req.query };
    try {
      var branch = execSync("git branch --show-current", {
        cwd: __dirname,
      }).toString();
      if (branch) queryOptions["-T"] = branch;
    } catch (e) {}
    try {
      var metaname = `${__dirname}/../${req.params.doc}/${
        queryOptions.variant || "meta"
      }.yaml`;
      var meta = yaml.load(fs.readFileSync(metaname));
      var number = new Number(
        `${__dirname}/../${req.params.doc}`,
        queryOptions.variant,
        meta,
      );
      delete queryOptions.variant;
      res.type("html");
      var proc = pandoc({
        "--metadata-file": metaname,
        "-H": "scripts/folding.html",
        ...meta.pandocOptions,
        ...queryOptions,
      });
      proc.stdin.on("error", next);
      proc.stdout.pipe(res);
      number.build(proc.stdin).catch((err) => {
        console.error();
        console.error(err.join("\n"));
      });
    } catch (err) {
      next();
    }
  })
  .get("/:doc/pdf", async function (req, res, next) {
    const number = (await numbers)[req.params.doc];
    const metavar = [];
    for (const p in number.meta)
      if (typeof number.meta[p] === "string")
        metavar.push(`--meta-${p}: "${number.meta[p]}";`);
    res.type("html");
    var proc = pandoc({
      "--metadata-file": `${__dirname}/../${req.params.doc.replace("_", "/")}.yaml`,
      "-V": `include-before=<style type="text/css">:root {
${metavar.join("\n")}
}</style>`,
      "-c": "stylespdf/paged.css",
      "-H": "scripts/paged.html",
      "--metadata": "paged:true",
    });
    proc.stdout.pipe(res);
    number.write(proc.stdin);
  })
  .use("/:doc/styles", express.static(`${__dirname}/../styles`))
  .use("/:doc/stylespdf", express.static(`${__dirname}/../stylespdf`))
  .use("/:doc/:dir", function (req, res, next) {
    if (statics[req.params.dir])
      (statics[req.params.dir][req.params.doc] ||= express.static(
        `${__dirname}/../${req.params.doc}/${req.params.dir}`,
      ))(req, res, next);
    else next();
  });

if (module.parent) module.exports = app;
else
  app.listen(8080, async function () {
    const pdf = process.argv.find((_) => _.startsWith("pdf"));
    if (pdf) {
      const builders = [];
      iterator(function (srcname, name, variant, meta) {
        if (
          (pdf.startsWith("pdf:") && pdf.substring(4) !== name) ||
          (meta.repo && !process.argv.includes("repo:" + meta.repo))
        )
          return;
        builders.push({
          url: `${srcname}_${variant}/pdf`,
          name,
        });
      });
      const browser = await puppeteer.launch({ headless: "new" });
      for (const builder of builders) {
        const page = await browser.newPage();
        await page.goto(`http://localhost:8080/${builder.url}`, {
          waitUntil: "networkidle2",
        });
        await page.evaluate(() => window.PagedPolyfill.preview());
        await page.pdf({
          path: `${__dirname}/../docs/${builder.name}/${builder.name}.pdf`,
          printBackground: true,
          outline: true,
        });
        console.log(builder.name);
      }
      await browser.close();
      process.exit(0);
    }
    console.log("Server running on http://localhost:8080");
  });
