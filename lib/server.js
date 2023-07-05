const express = require("express");
const Number = require("./number");
const pandoc = require("./pandoc");
const http = require("http");
const { execSync } = require("child_process");

var app = express()
  .use(express.static(__dirname + "/../docs"))
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
        var number = new Number(__dirname + "/../" + dir);
        res.type("html");
        var proc = pandoc({
          "--metadata-file": __dirname + "/../" + dir + "/meta.yaml",
          ...req.query,
        });
        proc.stdout.pipe(res);
        number.build(proc.stdin).catch(next);
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
