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
  .replace(/<span[ \n]style='color:windowtext'>([^<]*)<\/span>/g,"$1")

  // clean up "keyword" formatting
  .replace(/<span[ \n]style='font-family:\n?"Courier[ \n]New"'>([^<]*)<\/span>/g, "<code>$1</code>")
  .replace(/<span[ \n]+class=Datatype>([^<]*)<\/span>/g, "<code>$1</code>")
  .replace(/<span[ \n]+class=Keyword>([^<]*)<\/span>/g, "<code>$1</code>")
  .replace(/<span[ \n]+class=VerbatimChar>([^<]*)<\/span>/g, "<code>$1</code>")

  // clean up headings
  .replace(/<a[ \n]href="#sec[^"]+">((<code>|<\/code>|[^<])*)<\/a><\/h/g, "$1</h")
  .replace(/<a[ \n]name="sec[^"]+">[\d\. \n]*<\/a>/g, "")
  .replace(/<a[ \n]name="_Toc[^"]+">([^<]*)<\/a><\/h/g, "$1</h")
  .replace(/<h1>[\d\.\s]*/g, "<h1>##sec ")
  .replace(/<h2>[\d\.\s]*/g, "<h2>##subsec ")
  .replace(/<h3>[\d\.\s]*/g, "<h3>##subsubsec ")
  .replace(/<h4>[\d\.\s]*/g, "<h4>##subsubsubsec ")
  .replace(/<h5>[\d\.\s]*/g, "<h5>##subsubsubsubsec ")
  .replace(/<h6>[\d\.\s]*/g, "<h6>##subsubsubsubsubsec ")

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

//TODO: call pandoc to generate raw markdown

//TODO: post-process raw markdown
