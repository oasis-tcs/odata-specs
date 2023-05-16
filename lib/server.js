const express = require("express");
const Number = require("./number");
const pandoc = require("./pandoc");
const fs = require("fs");
const http = require("http");

var app = express()
.get("/*", function(req, res, next) {
	try {
		var number = new Number(__dirname + "/.." + req.path);
		res.type("html");
		number.build(pandoc({
			"--metadata-file": __dirname + "/.." + req.path + "/meta.yaml",
			...req.query
		}, res).stdin);
	} catch (err) {
		next();
	}
})
.use(express.static(__dirname + "/../docs"));

if (module.parent)
	module.exports = app;
else
	http.createServer(app).listen(80, function() {
		console.log("Server running on http://localhost");
	});
