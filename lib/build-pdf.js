const pdf = require("./pdf.js");
const fs = require("fs");

let errors = false;

fs.readdirSync(__dirname + "/..", { withFileTypes: true }).forEach(function (
  doc
) {
  if (doc.isDirectory() && doc.name.startsWith("odata-")) {
    const htmlFile = `${__dirname}/../docs/${doc.name}/${doc.name}.html`;
    const pdfFile = `${__dirname}/../docs/${doc.name}/${doc.name}.pdf`;

    const htmlStat = fs.statSync(htmlFile, { throwIfNoEntry: false });
    const pdfStat = fs.statSync(pdfFile, { throwIfNoEntry: false });

    if (pdfStat === undefined || htmlStat?.mtime > pdfStat?.mtime) {
      console.log(doc.name);

      pdf(doc.name).catch((error) => {
        console.error(error);
        errors = true;
      });
    }
  }
});

//TODO: needs to await all threads
// if (errors) {
//   process.exit(1);
// }
