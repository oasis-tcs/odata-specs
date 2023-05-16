const Number = require("./number");
const pandoc = require("./pandoc");
const fs = require("fs");

for (var doc of fs.readdirSync(__dirname + "/..", {withFileTypes: true}))
	if (doc.isDirectory() && doc.name.startsWith("odata-")) {
		console.log(doc.name);
		new Number(doc.name).build(pandoc({
			"--metadata-file": __dirname + "/../" + doc.name + "/meta.yaml"
		}, fs.createWriteStream(__dirname + "/../docs/" + doc.name + "/index.html")).stdin);
	}
