const express = require("express");
const Number = require("./number");
const pandoc = require("./pandoc");
const http = require("http");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const livereload = require("livereload");
const liveReloadServer = livereload.createServer({ extraExts: ["md"] });
liveReloadServer.watch(path.join(__dirname, ".."));

const connectLivereload = require("connect-livereload");

var app = express()
  .use(connectLivereload())
  .use(express.static(__dirname + "/../docs"))
  .get("/", function (req, res, next) {
    const docs = fs
      .readdirSync(__dirname + "/..", { withFileTypes: true })
      .filter((doc) => doc.isDirectory() && doc.name.startsWith("odata-"))
      .map((doc) => `<li><a href="${doc.name}">${doc.name}</a></li>`);
    res.send(`<h1>Documents</h1><ul>${docs.join("")}</ul>`);
  })
  .get("/*", function (req, res, next) {
    if (req.path.endsWith("/")) {
      try {
        var branch = execSync("git branch --show-current", {
          cwd: __dirname,
        }).toString();
        if (branch) req.query["-T"] = branch;
      } catch (e) {}
      var dir = req.params[0].substring(0, req.params[0].length - 1);
      try {
        var number = new Number(__dirname + "/../" + dir, req.query.variant);
        var meta =
          __dirname +
          "/../" +
          dir +
          "/" +
          (req.query.variant || "meta") +
          ".yaml";
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
    } else {
      var url = new URL("s://" + req.originalUrl);
      url.pathname += "/";
      res.redirect(url.href.substring(4));
    }
  });

if (module.parent) module.exports = app;
else
  http.createServer(app).listen(8080, function () {
    console.log("Server running on http://localhost:8080");
  });
