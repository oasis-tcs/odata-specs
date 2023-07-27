const pdf = require("./pdf.js");
const fs = require("fs");

fs.readdirSync(__dirname + "/..", { withFileTypes: true }).forEach(function (
  doc
) {
  if (doc.isDirectory() && doc.name.startsWith("odata-")) {
    fs.readdirSync(__dirname + "/../" + doc.name)
      .filter((fn) => fn.endsWith(".yaml"))
      .forEach(function (metaname) {
        pdf(doc.name, metaname.substring(0, metaname.length - 5))
          .then(() => {
            console.log("✓ " + doc.name, metaname);
          })
          .catch((error) => {
            console.log("❌ " + doc.name, metaname);
            console.error(error);
            process.exitCode = 1;
          });
      });
  }
});
