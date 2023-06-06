const fs = require("fs");
const Number = require("../lib/number");
const pandoc = require("../lib/pandoc");
const assert = require("assert");
const {PassThrough} = require("stream");

describe("OASIS doc build", function() {
	it("Markdown assembly", async function() {
		var md = new PassThrough();
		new Number(__dirname).build(md);
		var markdown = "";
		for await (var chunk of md) markdown += chunk.toString();
		assert.deepStrictEqual(markdown.split(/\r\n|\r|\n/),
			fs.readFileSync(__dirname + "/target.md.txt").toString().split(/\r\n|\r|\n/),
			"Markdown");
	});
	it("Pandoc", async function() {
		var proc = pandoc({
			"--metadata-file": __dirname + "/meta.yaml"
		});
		fs.createReadStream(__dirname + "/target.md.txt").pipe(proc.stdin);
		var html = "";
		for await (var chunk of proc.stdout) html += chunk.toString();
		assert.deepStrictEqual(html.split(/\r\n|\r|\n/),
			fs.readFileSync(__dirname + "/target.html").toString().split(/\r\n|\r|\n/),
			"HTML");
	});
});
