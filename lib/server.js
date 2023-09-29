const express = require("express");
const Number = require("./number");
const pandoc = require("./pandoc");
const { execSync } = require("child_process");
const path = require("path");
const iterator = require("./iterator");

const livereload = require("livereload");
const liveReloadServer = livereload.createServer({ extraExts: ["md"] });
liveReloadServer.watch(path.join(__dirname, ".."));

const connectLivereload = require("connect-livereload");

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
    try {
      var branch = execSync("git branch --show-current", {
        cwd: __dirname,
      }).toString();
      if (branch) req.query["-T"] = branch;
    } catch (e) {}
    try {
      var number = new Number(
        __dirname + "/../" + req.params.doc,
        req.query.variant,
      );
      var meta = `${__dirname}/../${req.params.doc}/${
        req.query.variant || "meta"
      }.yaml`;
      delete req.query.variant;
      res.type("html");
      var proc = pandoc({
        "--metadata-file": meta,
        ...req.query,
      });
      proc.stdout.pipe(res);
      number.build(proc.stdin).catch((err) => {
        console.error();
        console.error(err.join("\n"));
      });
    } catch (err) {
      next();
    }
  })
  .use("/:doc/styles", express.static(`${__dirname}/../styles`))
  .use("/:doc/images", function (req, res, next) {
    express.static(`${__dirname}/../${req.params.doc}/images`)(req, res, next);
  });

if (module.parent) module.exports = app;
else
  app.listen(8080, function () {
    console.log("Server running on http://localhost:8080");
  });
