const basename = "odata-v4.01-os-part1-protocol"

const fs = require("fs");

const old = fs.readFileSync(`./${basename}.html`, "latin1");

const clean = old
  // remove preamble and TOC
  .replace(/<style>[\s\S]*?<\/style>/g, "")
  .replace(/<body[\s\S]*?<h1/, "<body>\n<h1")

  // remove _Toc anchors
  .replace(/<span style='font:7.0pt "Times New Roman"'>(&nbsp;|\n)+<\/span>/g,"")
  .replace(/<a[ \n]name="_Toc\d+">[\d\. ]*<\/a>/g, "")
  .replace(/<h1[^>]*>/g, "<h1>")

  // clean up headings


  // clean up "keyword" formatting
  .replace(/<span[ \n]style='font-family:\n?"Courier[ \n]New"'>([^<]*)<\/span>/g, "<code>$1</code>")
  .replace(/<span[ \n]+class=Datatype>([^<]*)<\/span>/g, "<code>$1</code>")

  // clean up references
  .replace(/<span[ \n]+class=Datatype>([^<]*)<\/span>/g, "<code>$1</code>");

fs.writeFileSync(`./${basename}-clean.html`, clean, {encoding:"latin1"})
