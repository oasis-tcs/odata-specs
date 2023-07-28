const iterator = require("./iterator");
const pdf = require("./pdf.js");

iterator(function (srcname, name, variant, meta) {
  pdf(name, variant, meta)
    .then((refreshed) => {
      console.log(refreshed ? "✓" : "=", srcname, variant);
    })
    .catch((error) => {
      console.log("❌", srcname, variant);
      console.error(error);
      process.exitCode = 1;
    });
});
