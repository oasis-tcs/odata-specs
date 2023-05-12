const express = require("express");
const Number = require("./number");
const { spawn } = require("child_process");
const fs = require("fs");
const http = require("http");

function pandoc(req, res) {
	var opts = [
		"-f", "gfm+tex_math_dollars+fenced_divs",
		"-t", "html",
		"-c", "https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3a.css",
		"-c", "./odata.css",
		"--mathjax",
		"--metadata-file", __dirname + "/.." + req.path + "/meta.yaml",
		"-s"
	];
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
	try {
		var source = fs.createReadStream(__dirname + "/.." + req.path);
		res.type("html");
		source.pipe(pandoc(req, res).stdin);
	} catch (err) {
		next();
	}
})
.get("/*", function(req, res, next) {
	try {
		var number = new Number(__dirname + "/.." + req.path);
		res.type("html");
		number.build(pandoc(req, res).stdin);
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