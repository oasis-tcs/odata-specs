const basename = "odata-v4.01-os-part1-protocol"

const fs = require("fs");

const old = fs.readFileSync(`./${basename}.html`, "latin1");

const clean = old
  // remove preamble and TOC
  .replace(/<style>[\s\S]*?<\/style>/g, "")
  .replace(/<body[\s\S]*?<h1/, "<body>\n<h1")

  // remove _Toc anchors
  .replace(/<span[ \n]style='font:7.0pt "Times New Roman"'>(&nbsp;|\n|\s)+<\/span>/g," ")
  .replace(/<a[ \n]name="_[^"]+">[\d\. \n]*<\/a>/g, "")
  .replace(/<h1[^>]*>/g, "<h1>")

  // clean up formatting
  .replace(/<span[ \n]style='color:black'>([^<]*)<\/span>/g,"$1")

  // clean up "keyword" formatting
  .replace(/<span[ \n]style='font-family:\n?"Courier[ \n]New"'>([^<]*)<\/span>/g, "<code>$1</code>")
  .replace(/<span[ \n]+class=Datatype>([^<]*)<\/span>/g, "<code>$1</code>")
  .replace(/<span[ \n]+class=VerbatimChar>([^<]*)<\/span>/g, "<code>$1</code>")

  // clean up headings
  .replace(/<a[ \n]href="#sec[^"]+">((<code>|<\/code>|[^<])*)<\/a><\/h/g, "$1</h")
  .replace(/<a[ \n]name="sec[^"]+">[\d\. \n]*<\/a>/g, "")

  // clean up references
  .replace(/<b>\[(OData[^<]*)\]<\/b>/g, "$1")
  .replace(/#ABNF/g, "#ODataABNF")
  .replace(/#ODataCSDLJSONRef/g, "#ODataCSDL")
  .replace(/#ODataCSDLXMLRef/g, "#ODataCSDL")
  .replace(/#ODataJSONRef/g, "#ODataJSON")
  .replace(/#ODataURLRef/g, "#ODataURL")
  .replace(/#VocCapabilities/g, "#ODataVocCap")
  .replace(/#VocCore/g, "#ODataVocCore");

fs.writeFileSync(`./${basename}-clean.html`, clean, {encoding:"latin1"})
