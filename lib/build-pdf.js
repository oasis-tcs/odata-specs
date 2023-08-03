const iterator = require("./iterator");
const pdf = require("./pdf.js");

const doc = process.argv[2];

iterator(function (srcname, name, variant, meta) {
  if (doc && doc !== name) return;
  pdf(name, variant, meta, doc === name)
    .then((refreshed) => {
      console.log(
        refreshed ? "✓" : "=",
        srcname,
        variant === "meta" ? "" : variant
      );
    })
    .catch((error) => {
      console.log("❌", srcname, variant === "meta" ? "" : variant);
      console.error(error);
      process.exitCode = 1;
    });
});
