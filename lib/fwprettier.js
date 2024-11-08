const { format } = require("prettier");
const { createInterface } = require("readline");
const fs = require("fs");

let promise = Promise.resolve();
let out = "";
let code, prettierrc;

function appendCode(code) {
  out += code.replace(/\/\*|\*\//g, "");
}

createInterface({
  input: fs.createReadStream(process.argv[2]),
  crlfDelay: Infinity,
})
  .on("line", function (line) {
    const m = line.match(/^@[$o]@<.*?@>.*?@\{(@!(.*)$)?/);
    if (m) {
      code = [];
      prettierrc = m[2] ? JSON.parse(m[2]) : {};
    } else if (line.startsWith("@}")) {
      const unformatted = code.join("");
      if (!prettierrc) promise = promise.then(() => appendCode(unformatted));
      else {
        const prettierOptions = {
          filepath: ".js",
          trailingComma: "none",
          ...prettierrc,
        };
        promise = promise
          .then(() => format(unformatted, prettierOptions))
          .then(appendCode, function (err) {
            console.error(err.message, unformatted);
            appendCode(unformatted);
          });
      }
      code = undefined;
    } else if (code) {
      code.push(line.replace(/@<.*?@>(@\(.*?@\))?/g, "/*$&*/") + "\n");
      return;
    }
    promise = promise.then(function () {
      out += line + "\n";
    });
  })
  .on("close", async function () {
    await promise;
    fs.writeFileSync(process.argv[2], out);
  });
