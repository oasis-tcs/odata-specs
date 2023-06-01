const express = require("express");
const Number = require("./number");
const pandoc = require("./pandoc");
const http = require("http");
const {execSync} = require("child_process");

var app = express()
.get("/:doc", function(req, res, next) {
	if (req.path.endsWith("/")) {
		try {
			req.query["-T"] = execSync("git branch --show-current", {cwd: __dirname}).toString();
		} catch(e) {}
		try {
			var number = new Number(__dirname + "/../" + req.params.doc);
			res.type("html");
			var proc = pandoc({
				"--metadata-file": __dirname + "/../" + req.params.doc + "/meta.yaml",
				...req.query
			});
			proc.stdout.pipe(res);
			number.build(proc.stdin).catch(next);
		} catch (err) {
			next();
		}
	} else {
		var url = new URL("s://" + req.url);
		url.pathname += "/";
		res.redirect(url.href.substring(5));
	}
})
.use(express.static(__dirname + "/../docs"));

if (module.parent)
	module.exports = app;
else
	http.createServer(app).listen(8080, function() {
		console.log("Server running on http://localhost:8080");
	});
