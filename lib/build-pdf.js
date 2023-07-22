const pdf = require("./pdf.js");
const fs = require("fs");

fs.readdirSync(__dirname + "/..", { withFileTypes: true }).forEach(function (
  doc
) {
  if (doc.isDirectory() && doc.name.startsWith("odata-")) {
    const htmlFile = `${__dirname}/../docs/${doc.name}/${doc.name}.html`;
    const pdfFile = `${__dirname}/../docs/${doc.name}/${doc.name}.pdf`;

    const htmlStat = fs.statSync(htmlFile, { throwIfNoEntry: false });
    const pdfStat = fs.statSync(pdfFile, { throwIfNoEntry: false });

    if (pdfStat === undefined || htmlStat?.mtime > pdfStat?.mtime) {
      pdf(doc.name)
        .then(() => {
          console.log("✓ " + doc.name);
        })
        .catch((error) => {
          console.log("❌ " + doc.name);
          console.error(error);
          process.exitCode = 1;
        });
    }
  }
});
