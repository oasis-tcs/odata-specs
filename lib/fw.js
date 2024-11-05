const fs = require("fs");
const { compareSectionNumbers } = require("./utilities");
const { createInterface } = require("readline");

let $d = {};
let $m = {};

function phase1(file) {
  return new Promise(function (resolve, reject) {
    createInterface({
      input: fs.createReadStream(file),
      crlfDelay: Infinity,
    })
      .on("line", function (line) {
        if (/@\$@(<(.*?)@>|#(.))/.test(line)) {
          $d[RegExp.$2 + RegExp.$3] = $d[RegExp.$2 + RegExp.$3] || 0;
          $d[RegExp.$2 + RegExp.$3]++;
        }
        for (
          let m, regex = /(?<!@\$)@(<(.*?)@>|#(.))/g;
          (m = regex.exec(line));

        ) {
          m[2] = m[2] || "";
          m[3] = m[3] || "";
          $m[m[2] + m[3]] = $m[m[2] + m[3]] || 0;
          $m[m[2] + m[3]]++;
        }
      })
      .on("close", resolve);
  });
}

function phase2(file, out) {
  return new Promise(function (resolve, reject) {
    let $a, $n, active;
    createInterface({
      input: fs.createReadStream(file),
      crlfDelay: Infinity,
    })
      .on("line", function (line) {
        if (/^@(\$|o|!\{)/.test(line)) active = true;
        if (active) {
          if (/@\$@(<(.*?)@>|#(.))/.test(line)) {
            if ($d[RegExp.$2 + RegExp.$3] > 1) $a = "+=";
            else $a = "";
            if (!$m[RegExp.$2 + RegExp.$3]) {
              $n = "@Z";
              $m[RegExp.$2 + RegExp.$3] = 1;
            } else if ($m[RegExp.$2 + RegExp.$3] > 1) {
              $n = "@M";
              $m[RegExp.$2 + RegExp.$3] = 1;
            } else $n = "";
            line = line.replace(/@\$@(<.*?@>|#.)(@\(.*?@\))?/, "$&" + $n + $a);
          }
          out.write(line + "\n");
        }
        if (/^@(\}|!\})/.test(line)) active = false;
      })
      .on("close", resolve);
  });
}

async function tangle(outfile) {
  const out = fs.createWriteStream(outfile);
  out.write("@p maximum_input_line_length = 256\n");
  const chapters = [];
  fs.readdirSync(`${__dirname}/..`, {
    withFileTypes: true,
  }).forEach(function (doc) {
    if (doc.isDirectory() && doc.name.startsWith("odata-"))
      for (const c of fs
        .readdirSync(doc.name)
        .filter((fn) => fn.endsWith(".md"))
        .sort(compareSectionNumbers))
        chapters.push(doc.name + "/" + c);
  });
  for (const c of chapters) await phase1(c);
  for (const c of chapters) await phase2(c, out);
  out.end();
}

tangle(process.argv[2]);
