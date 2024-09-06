const { createInterface } = require("readline");
const { spawnSync } = require("child_process");
const fs = require("fs");
const yaml = require("js-yaml");

const { compareSectionNumbers } = require("./utilities");
const pandoc = yaml
  .load(fs.readFileSync(__dirname + "/../.github/workflows/nodejs.yml"))
  .jobs.build.steps.find((step) => step.uses === "nikeee/setup-pandoc@v1").with[
  "pandoc-version"
];
if (
  spawnSync("pandoc", ["-v"])
    .stdout.toString()
    .match(/^pandoc (.*?)\r?\n/)?.[1] !== pandoc
) {
  console.error("pandoc version %s required", pandoc);
  process.exit(1);
}

class Number {
  constructor(dir, variant, meta) {
    this.dir = dir;
    this.variant = variant;
    this.chapters = fs
      .readdirSync(this.dir)
      .filter((fn) => fn.endsWith(".md"))
      .sort(compareSectionNumbers);
    this.meta = meta;
    this.meta["pandoc-version"] = pandoc;
  }

  secno(type) {
    return type === "asec"
      ? String.fromCharCode(64 + this.counter[type])
      : String(this.counter[type]);
  }

  skip(line) {
    if (this.fence) {
      if (line.trimEnd() === this.fence) {
        var skip = this.skipping || this.fence.length < 3;
        this.fence = undefined;
        this.skipping = false;
        return skip;
      }
      return this.skipping;
    }
    var m = line.match(/^(:+)\s+(?:\{\.)?var(\S+)/);
    if (m) {
      this.fence = m[1];
      if (this.variant && this.variant !== m[2]) {
        return (this.skipping = true);
      }
      return this.fence.length < 3;
    }
    return this.skipping;
  }

  phase1(file) {
    return new Promise(
      function (resolve, reject) {
        this.fence = undefined;
        this.skipping = undefined;
        var lineno = 0;
        createInterface({
          input: fs.createReadStream(`${this.dir}/${file}`),
          crlfDelay: Infinity,
        })
          .on(
            "line",
            function (line) {
              lineno++;
              if (this.skip(line)) return;
              try {
                for (
                  var m, regex = /\[.*?\]\(:(.*?)\)/g;
                  (m = regex.exec(line));

                )
                  this.refs[m[1]] = true;
                m = line.match(/ ##([A-Za-z0-9.]+)(_([A-Za-z0-9]+))?/);
                if (m && line[m.index + m[0].length] !== "]") {
                  if (
                    !m[1].startsWith("sub") &&
                    m[1].endsWith("isec") &&
                    !this.toc[m[1]]
                  )
                    this.toc[m[1]] = { sub: [] };
                  if (m[1].endsWith("sec")) {
                    m = line.match(
                      / ##([A-Za-z0-9.]+)(?:_[A-Za-z0-9]+)?\s+(.+)$/,
                    );
                    m[3] = m[2].replace(/[^A-Za-z0-9]/g, "");
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
                  if (m[1].endsWith("isec")) {
                    m[3] += "." + this.number[this.match];
                    this.number[this.match] = "i" + this.number[this.match];
                  }
                  if (m[1].endsWith("sec")) {
                    var s = this.number[this.match];
                    this.toc[s] = {
                      number: s,
                      name: m[2],
                      href: m[3],
                      sub: [],
                    };
                    var p = s.substring(0, s.lastIndexOf("."));
                    if (p === "" && m[1].endsWith("isec")) p = m[1];
                    this.toc[p]?.sub.push(this.toc[s]);
                  }
                  if (m[2]) {
                    this.refs[m[3]] = this.number[this.match];
                    this.number[this.match] = `[${
                      this.number[this.match].startsWith("i")
                        ? ""
                        : this.number[this.match]
                    }${m[1] === "asec" ? "." : ""}](:${m[3]})`;
                  }
                  this.match++;
                }
              } catch (e) {
                this.errors.push(`${file}#${lineno}: ${e.toString()}`);
              }
            }.bind(this),
          )
          .on("close", resolve);
      }.bind(this),
    );
  }

  phase2(file, out) {
    return new Promise(
      function (resolve, reject) {
        this.fence = undefined;
        this.skipping = undefined;
        var lineno = 0;
        createInterface({
          input: fs.createReadStream(`${this.dir}/${file}`),
          crlfDelay: Infinity,
        })
          .on(
            "line",
            function (line) {
              lineno++;
              if (this.skip(line)) return;
              try {
                var m1 = line.match(/^\$\$\$include\s+(.*?)\$\$\$\s*$/);
                if (m1) {
                  out.write(fs.readFileSync(`${this.dir}/${m1[1]}`));
                  return;
                }
                m1 = line.match(/^\$\$\$include-repo\s+(.*?)\$\$\$\s*$/);
                if (m1) {
                  out.write(
                    fs
                      .readFileSync(
                        `${__dirname}/../../${this.meta.repo}/${m1[1]}`,
                      )
                      .toString()
                      .replace(/^.*?\r?\n/, ""),
                  );
                  return;
                }
                m1 = line.match(/^\$\$\$(.*?isec)\$\$\$$/);
                if (m1)
                  this.tableofcontents(this.toc[m1[1]]?.sub || [], out, "");
                else {
                  line = line.replace(
                    /\$\$\$(.*?)\$\$\$/g,
                    function (m, p) {
                      return this.meta[p] || m;
                    }.bind(this),
                  );
                  for (var m, regex = /\]\(#(.*?)\)/g; (m = regex.exec(line)); )
                    if (!this.refs[m[1]])
                      this.errors.push(
                        `${this.dir}/${file}(${lineno}): Undefined link #${m[1]}`,
                      );
                  m = line.match(/ ##([A-Za-z0-9.]+)(_([A-Za-z0-9]+))?/);
                  var outline = line;
                  if (m && line[m.index + m[0].length] !== "]") {
                    var prefix = line.substring(0, m.index) + " ";
                    var suffix = line.substring(m.index + m[0].length);
                    if (m[1].endsWith("sec"))
                      outline = (
                        prefix +
                        this.number[this.match].replace(
                          /\]\(/,
                          suffix + "](",
                        )
                      )
                        .replace(/(Appendix )?\[/, "[$1")
                        .replace(/(,? )\]\(/, "]$1");
                    else outline = prefix + this.number[this.match] + suffix;
                    this.match++;
                  }
                  out.write(
                    outline.replace(
                      /##([A-Za-z0-9.]+)\]/g,
                      function (m, p) {
                        var r = this.refs[p];
                        if (r) return `${r}](#${p})`;
                        else {
                          this.errors.push(
                            `${this.dir}/${file}(${lineno}): Undefined link ##${p}`,
                          );
                          return `~~${p}~~]`;
                        }
                      }.bind(this),
                    ),
                  );
                  if (!/\S\s$/.test(line)) out.write("\n");
                }
              } catch (e) {
                this.errors.push(`${file}#${lineno}: ${e.toString()}`);
              }
            }.bind(this),
          )
          .on("close", resolve);
      }.bind(this),
    );
  }

  tableofcontents(t, out, indent) {
    for (var s of t) {
      out.write(
        `${indent}- [${
          s.number.startsWith("i") ? "" : s.number + " "
        }${s.name.replace(/,? $/, "")}](#${s.href})\n`,
      );
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
