const fs = require("fs");
const Number = require("../lib/number");
const pandoc = require("../lib/pandoc");
const pdf = require("../lib/pdf");
const assert = require("assert");
const {PassThrough} = require("stream");

describe("OASIS doc build", function() {
	it("Markdown assembly", async function() {
		var md = new PassThrough();
		new Number(__dirname).build(md);
		var markdown = "";
		for await (var chunk of md) markdown += chunk.toString();
		assert.deepStrictEqual(markdown.split(/\r\n|\r|\n/),
			fs.readFileSync(__dirname + "/../docs/test/test.md").toString().split(/\r\n|\r|\n/),
			"Markdown");
	});
	it("Pandoc", async function() {
		var proc = pandoc({
			"--metadata-file": __dirname + "/meta.yaml"
		});
		fs.createReadStream(__dirname + "/../docs/test/test.md").pipe(proc.stdin);
		var html = "";
		for await (var chunk of proc.stdout) html += chunk.toString();
		assert.deepStrictEqual(html.split(/\r\n|\r|\n/),
			fs.readFileSync(__dirname + "/../docs/test/test.html").toString().split(/\r\n|\r|\n/),
			"HTML");
	});
	it("Puppeteer", async function() {
		await pdf("test");
	});
});
