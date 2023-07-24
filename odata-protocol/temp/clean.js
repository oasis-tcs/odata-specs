const fs = require("fs");

const old = fs.readFileSync("./odata-v4.01-os-part1-protocol.html", "latin1");

const clean = old.replace(/<span[ \n]style='font-family:(\r\n)?"Courier[ \n]New"'>([^<]*)<\/span>/sg,"<code>$2</code>");

fs.writeFileSync("./odata-v4.01-os-part1-protocol-clean.html", clean, {encoding:"latin1"})
