const Number = require("./number");
const pandoc = require("./pandoc");
const fs = require("fs");
const {PassThrough} = require("stream");

for (var doc of fs.readdirSync(__dirname + "/..", {withFileTypes: true}))
	if (doc.isDirectory() && doc.name.startsWith("odata-")) {
		console.log(doc.name);
		var md = fs.createWriteStream(__dirname + "/../docs/" + doc.name + "/README.md");
		var html = pandoc({
			"--metadata-file": __dirname + "/../" + doc.name + "/meta.yaml"
		}, fs.createWriteStream(__dirname + "/../docs/" + doc.name + "/index.html")).stdin;
		new Number(doc.name).build(new PassThrough()
			.on("data", function(chunk) {
				md.write(chunk);
				html.write(chunk);
			})
			.on("end", function() {
				md.end();
				html.end();
			})
		);
	}
