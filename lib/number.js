const {createInterface} = require("readline");
const fs = require("fs");

class Number {
	constructor(dir) {
		this.dir = dir;
		this.chapters = fs.readdirSync(dir).filter(fn => fn.endsWith(".md")).sort();
	}

	phase1(file) {
		var counter = {};
		return new Promise(function(resolve, reject) {
			createInterface({input: fs.createReadStream(this.dir + "/" + file), crlfDelay: Infinity})
				.on("line", function(line) {
					var m = line.match(/\s##([a-z]+)(_([a-z]*))?/);
					if (m) {
						if (m[1].endsWith("sec") && !m[2]) {
							m = line.match(/\s##([a-z]+)\s+(.*)$/);
							m[3] = m[2].replace(/[^A-Za-z]/g, "");
						}
						counter[m[1]] = (counter[m[1]] || 0) + 1;
						for (var subc in counter)
							if (subc.endsWith("sub" + m[1]))
								counter[subc] = 0;
						this.number[this.match] = counter[m[1]];
						for (var supc = m[1]; supc.startsWith("sub");)
							this.number[this.match] = counter[supc = supc.substring(3)] + "." + this.number[this.match];
						if (m[2]) {
							this.refs[m[3]] = { number: this.number[this.match], href: `#${m[3]}` };
							this.number[this.match] += `<a name="${m[3]}"></a>`;
						}
						this.match++;
					}
				}.bind(this))
				.on("close", resolve);
		}.bind(this));
	}

	phase2(file, out) {
		return new Promise(function(resolve, reject) {
			createInterface({input: fs.createReadStream(this.dir + "/" + file), crlfDelay: Infinity})
				.on("line", function(line) {
					out.write(line.replace(/(\s)##[a-z]+(_[a-z]*)?/, function(m, p) {
						return p + this.number[this.match++];
					}.bind(this)).replace(/(\s)##_([a-z]*)\]/g, function(m, p, q) {
						var r = this.refs[q];
						if (r) return p + `${r.number}](${r.href})`;
						else return p + `UNRESOLVED ${q}]`;
					}.bind(this)));
					if (!(/\S\s$/.test(line))) out.write("\n");
				}.bind(this))
				.on("close", resolve);
		}.bind(this));
	}

	async build(out) {
		this.refs = {};
		this.number = {};
		this.match = 0;
		for (var c of this.chapters) await this.phase1(c);
		this.match = 0;
		for (c of this.chapters) await this.phase2(c, out);
		out.end();
	}
}

if (module.parent)
	module.exports = Number;
else
	for (var doc of fs.readdirSync(__dirname + "/..")) if (doc.startsWith("odata-")) {
		console.log(doc);
		new Number(doc).build(fs.createWriteStream(__dirname + "/../" + doc + ".md"));
	}
