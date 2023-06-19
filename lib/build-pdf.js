const pdf = require("./pdf.js");

pdf("odata-data-aggregation-ext")
  .then(() => {
    console.log("PDF generated");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(3);
  });
