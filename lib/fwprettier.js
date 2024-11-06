const { format } = require("prettier");
const { createInterface } = require("readline");
const fs = require("fs");

let promise = Promise.resolve();
let out = "";
let code;
createInterface({
  input: fs.createReadStream(process.argv[2]),
  crlfDelay: Infinity,
})
  .on("line", function (line) {
    if (/^@[$o]/.test(line)) code = [];
    else if (line.startsWith("@}")) {
      const unformatted = code.join("");
      if (code.length < 2)
        promise = promise.then(function () {
          out += unformatted;
        });
      else
        promise = promise
          .then(() => format(unformatted, { filepath: ".js" }))
          .then(
            function (formatted) {
              out += formatted.replace(/\/\*|\*\//g, "");
            },
            function () {
              out += unformatted.replace(/\/\*|\*\//g, "");
            },
          );
      code = undefined;
    } else if (code) {
      code.push(line.replace(/@<.*?@>(@\(.*@\))/g, "/*$&*/") + "\n");
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
