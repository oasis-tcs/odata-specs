const fs = require("fs");

const old = fs.readFileSync("./odata-v4.01-os-part1-protocol.html", "latin1");

const clean = old
  .replace(/<a[ \n]name="_Toc\d+"><\/a>/g, "")
  .replace(/<span[ \n]style='font-family:\n?"Courier[ \n]New"'>([^<]*)<\/span>/g, "<code>$1</code>")
  .replace(/<span[ \n]+class=Datatype>([^<]*)<\/span>/g, "<code>$1</code>");

fs.writeFileSync("./odata-v4.01-os-part1-protocol-clean.html", clean, {encoding:"latin1"})
