const {createInterface} = require("readline");
const fs = require("fs");

class Number {
	constructor(dir) {
		this.dir = dir;
		this.chapters = fs.readdirSync(dir).filter(fn => fn.endsWith(".md")).sort();
	}

	phase1(file) {
		return new Promise(function(resolve, reject) {
			createInterface({input: fs.createReadStream(this.dir + "/" + file), crlfDelay: Infinity})
				.on("line", function(line) {
					var m = line.match(/ ##([A-Za-z]+)(_([A-Za-z]+))?/);
					if (m && line[m.index + m[0].length] !== "]") {
						if (m[1].endsWith("sec") && !m[2]) {
							m = line.match(/ ##([a-z]+)\s+(.+)$/);
							m[3] = m[2].replace(/[^A-Za-z]/g, "");
						}
						this.counter[m[1]] = (this.counter[m[1]] || 0) + 1;
						for (var subc in this.counter)
							if (subc.endsWith("sub" + m[1]))
								this.counter[subc] = 0;
						this.number[this.match] = this.counter[m[1]];
						for (var supc = m[1]; supc.startsWith("sub");)
							this.number[this.match] = this.counter[supc = supc.substring(3)] + "." + this.number[this.match];
						if (m[2]) {
							this.refs[m[3]] = this.number[this.match];
							this.number[this.match] = `<a name="${m[3]}">${this.number[this.match]}</a>`;
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
					var m = line.match(/ ##([A-Za-z]+)(_([A-Za-z]+))?/);
					if (m && line[m.index + m[0].length] !== "]")
						line = line.substring(0, m.index) + " " + this.number[this.match++] + line.substring(m.index + m[0].length);
					out.write(line.replace(/ ##([A-Za-z]+)\]/g, function(m, p) {
						var r = this.refs[p];
						if (r) return ` ${r}](#${p})`;
						else return ` ~~${p}~~]`;
					}.bind(this)));
					if (!(/\S\s$/.test(line))) out.write("\n");
				}.bind(this))
				.on("close", resolve);
		}.bind(this));
	}

	async build(out) {
		this.counter = {};
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
	for (var doc of fs.readdirSync(__dirname + "/..", {withFileTypes: true}))
		if (doc.isDirectory() && doc.name.startsWith("odata-")) {
			console.log(doc.name);
			new Number(doc.name).build(fs.createWriteStream(__dirname + "/../" + doc.name + ".md"));
		}
