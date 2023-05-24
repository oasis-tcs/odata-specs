const Number = require("./number");
const pandoc = require("./pandoc");
const fs = require("fs");
const {PassThrough} = require("stream");

fs.readdirSync(__dirname + "/..", {withFileTypes: true}).forEach(function(doc) {
	if (doc.isDirectory() && doc.name.startsWith("odata-")) {
		console.log(doc.name);
		var md = fs.createWriteStream(__dirname + "/../docs/" + doc.name + "/" + doc.name + ".md");
		var html = pandoc({
			"--metadata-file": __dirname + "/../" + doc.name + "/meta.yaml"
		});
		html.stdout.pipe(fs.createWriteStream(__dirname + "/../docs/" + doc.name + "/" + doc.name + ".html"));
		new Number(doc.name).build(new PassThrough()
			.on("data", function(chunk) {
				md.write(chunk);
				html.stdin.write(chunk);
			})
			.on("end", function() {
				md.end();
				html.stdin.end();
			})
		);
	}
});
