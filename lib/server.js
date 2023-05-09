const express = require("express");
const Number = require("./number");
const {spawn} = require("child_process");

module.exports = express()
.get("/*", function(req, res, next) {
	try {
		var number = new Number(__dirname + "/.." + req.path);
		res.type("html");
		var opts = [
			"-f", "gfm+fenced_divs",
			"-t", "html",
			"-c", "https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3a.css",
			"-c", "odata.css",
			"--mathjax",
			"-s"];
		for (var param in req.query) {
			var value = req.query[param];
			if (value && param.startsWith("--")) opts.push(param + "=" + value);
			else if (value && param.startsWith("-")) opts.push(param, value);
			else opts.push(param);
		}
		var proc = spawn("pandoc", opts);
		proc.stdout.pipe(res);
		number.build(proc.stdin);
	} catch(err) {
		if (err.code === "ENOTDIR") next();
		else next(err);
	}
})
.use(express.static(__dirname + "/.."));
