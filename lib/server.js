const express = require("express");
const Number = require("./number");
const { spawn } = require("child_process");
const fs = require("fs");
const http = require("http");

function pandoc(req, res, meta) {
	var opts = [
		"-f", "gfm+tex_math_dollars+fenced_divs",
		"-t", "html",
		"-c", "https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3a.css",
		"-c", "/odata.css",
		"--mathjax",
		"-s"
	];
	if (meta) opts.push("--metadata-file", meta);
	for (var param in req.query) {
		var value = req.query[param];
		if (value && param.startsWith("--")) opts.push(param + "=" + value);
		else if (value && param.startsWith("-")) opts.push(param, value);
		else opts.push(param);
	}
	var proc = spawn("pandoc", opts);
	proc.stdout.pipe(res);
	proc.stderr.on("data", function(err) {
		console.error(err.toString());
	});
	return proc;
}

var app = express()
.get("/*.md", function(req, res, next) {
	var source = fs.createReadStream(__dirname + "/.." + decodeURIComponent(req.path))
	.on("error", function() {
		next();
	});
	res.type("html");
	source.pipe(pandoc(req, res, __dirname + "/.." + req.path + "/../meta.yaml").stdin);
})
.get("/*", function(req, res, next) {
	try {
		var number = new Number(__dirname + "/.." + req.path);
		res.type("html");
		number.build(pandoc(req, res, __dirname + "/.." + req.path + "/meta.yaml").stdin);
	} catch (err) {
		next();
	}
})
.use(express.static(__dirname + "/.."));

if (module.parent)
	module.exports = app;
else
	http.createServer(app).listen(80, function() {
		console.log("Server running on http://localhost");
	});