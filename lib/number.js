const { createInterface } = require("readline");
const fs = require("fs");
const yaml = require("js-yaml");

class Number {
  constructor(dir) {
    this.dir = dir;
    this.chapters = fs
      .readdirSync(dir)
      .filter((fn) => fn.endsWith(".md"))
      .sort();
    this.meta = yaml.load(fs.readFileSync(dir + "/meta.yaml"));
  }

  secno(type) {
    return type === "asec"
      ? String.fromCharCode(64 + this.counter[type])
      : String(this.counter[type]);
  }

  phase1(file) {
    return new Promise(
      function (resolve, reject) {
        createInterface({
          input: fs.createReadStream(this.dir + "/" + file),
          crlfDelay: Infinity,
        })
          .on(
            "line",
            function (line) {
              for (var m, regex = /<a name="(.*?)">/g; (m = regex.exec(line)); )
                this.refs[m[1]] = true;
              m = line.match(/ ##([A-Za-z]+)(_([A-Za-z]+))?/);
              if (m && line[m.index + m[0].length] !== "]") {
                if (m[1].endsWith("sec")) {
                  m = line.match(/ ##([a-z]+)\s+(.+)$/);
                  m[3] = m[2].replace(/[^A-Za-z]/g, "");
                }
                this.counter[m[1]] = (this.counter[m[1]] || 0) + 1;
                for (var subc in this.counter)
                  if (subc.endsWith("sub" + m[1])) this.counter[subc] = 0;
                this.number[this.match] = this.secno(m[1]);
                for (var supc = m[1]; supc.startsWith("sub"); )
                  this.number[this.match] =
                    this.secno((supc = supc.substring(3))) +
                    "." +
                    this.number[this.match];
                if (m[1].endsWith("sec")) {
                  var s = this.number[this.match];
                  this.toc[s] = {
                    number: s,
                    name: m[2],
                    href: m[3],
                    sub: [],
                  };
                  this.toc[s.substring(0, s.lastIndexOf("."))]?.sub.push(
                    this.toc[s]
                  );
                }
                if (m[2]) {
                  this.refs[m[3]] = this.number[this.match];
                  this.number[this.match] = `<a name="${m[3]}" href="#${
                    m[3]
                  }">${this.number[this.match]}${
                    m[1] === "asec" ? "." : ""
                  }</a>`;
                }
                this.match++;
              }
            }.bind(this)
          )
          .on("close", resolve);
      }.bind(this)
    );
  }

  phase2(file, out) {
    return new Promise(
      function (resolve, reject) {
        var lineno = 0;
        createInterface({
          input: fs.createReadStream(this.dir + "/" + file),
          crlfDelay: Infinity,
        })
          .on(
            "line",
            function (line) {
              lineno++;
              line = line.replace(
                /\$\$\$(.*?)\$\$\$/g,
                function (m, p) {
                  return this.meta[p] || m;
                }.bind(this)
              );
              for (var m, regex = /\]\(#(.*?)\)/g; (m = regex.exec(line)); )
                if (!this.refs[m[1]])
                  this.errors.push(
                    `Undefined link #${m[1]} in file ${
                      this.dir + "/" + file
                    }, line ${lineno}`
                  );
              m = line.match(/ ##([A-Za-z]+)(_([A-Za-z]+))?/);
              if (m && line[m.index + m[0].length] !== "]") {
                var prefix = line.substring(0, m.index) + " ";
                var suffix = line.substring(m.index + m[0].length);
                if (m[1].endsWith("sec"))
                  line = (
                    prefix +
                    this.number[this.match].replace(/<\/a>$/, suffix + "</a>")
                  ).replace(/(Appendix )(<a.*?>)/, "$2$1");
                else line = prefix + this.number[this.match] + suffix;
                this.match++;
              }
              out.write(
                line.replace(
                  /##([A-Za-z]+)\]/g,
                  function (m, p) {
                    var r = this.refs[p];
                    if (r) return `${r}](#${p})`;
                    else {
                      this.errors.push(
                        `Undefined link ##${p} in file ${
                          this.dir + "/" + file
                        }, line ${lineno}`
                      );
                      return `~~${p}~~]`;
                    }
                  }.bind(this)
                )
              );
              if (!/\S\s$/.test(line)) out.write("\n");
            }.bind(this)
          )
          .on("close", resolve);
      }.bind(this)
    );
  }

  tableofcontents(t, out, indent) {
    for (var s of t) {
      out.write(`${indent}- [${s.number} ${s.name}](#${s.href})\n`);
      this.tableofcontents(s.sub, out, indent + "  ");
    }
  }

  async build(out) {
    this.errors = [];
    this.counter = {};
    this.refs = {};
    this.number = {};
    this.toc = { "": { sub: [] } };
    this.match = 0;
    for (var c of this.chapters) await this.phase1(c);
    this.match = 0;
    for (c of this.chapters) {
      await this.phase2(c, out);
      out.write("\n");
      if (c[0] === "0") {
        out.write("# Table of Contents\n\n::: toc\n");
        this.tableofcontents(this.toc[""].sub, out, "");
        out.write(":::\n\n");
      }
    }
    out.end();
    if (this.errors.length > 0) throw this.errors;
  }
}

module.exports = Number;
