import fs from "fs";
import { exec } from "child_process";

const basename = "odata-v4.01-os-part1-protocol"

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
  .replace(/<span[ \n]+style='font-family:\n?"Arial",sans-serif'>([^<]*)<\/span>/g,"$1")
  .replace(/<span[ \n]style='(font-size:\n?[\d\.]+pt;[ \n]*)?color:\n?black(;\n?background:white)?'>([^<]*)<\/span>/g,"$3")
  .replace(/<span[ \n]style='font-family:"Calibri",sans-serif'>([^<]*)<\/span>/g,"$1")
  .replace(/<span[ \n]style='color:windowtext'>([^<]*)<\/span>/g,"$1")
  .replace(/<span[ \n]style='background:white'>([^<]*)<\/span>/g,"$1")
  .replace(/<span[ \n]style='color:#333333'>([^<]*)<\/span>/g,"$1")
  .replace(/<span[ \n]style='color:#333333;\n?background:white'>([^<]*)<\/span>/g,"$1")
  .replace(/<span[ \n]class=MsoHyperlink>([^<]*)<\/span>/g,"$1")
  .replace(/<span[ \n]class=MsoHyperlink>([^<]*)<b>([^<]*)<\/b><\/span>/g,"$1$2")
  .replace(/<span lang=EN>([^<]*)<\/span>/g,"$1")
  // TODO: clean up more <span> tags

  // clean up code formatting
  .replace(/<span[ \n]+style='(font-size:[\d\.]+pt;[ \n]*)?font-family:[ \n]*"Courier[ \n]New"(;\n?color:black)?(;\n?background:\n?white)?'>([^<]*)<\/span>/g, "<code>$4</code>")
  .replace(/<span[ \n]+class=Datatype>([^<]*)<\/span>/g, "<code>$1</code>")
  .replace(/<span[ \n]+class=Keyword>([^<]*)<\/span>/g, "<code>$1</code>")
  .replace(/<span[ \n]+class=VerbatimChar>([^<]*)<\/span>/g, "<code>$1</code>")
  .replaceAll("</code><code>","")
  .replace(/<p[ \n]+class=SourceCode>([^<]*)<\/p>/g, "<p class=SourceCode><code>$1</code></p>")
  .replace(/<span[ \n]+class=MsoHyperlink><code> <\/code><\/span>/g,"")
  .replace(/<span[ \n]+class=MsoHyperlink><i> <\/i><\/span>/g,"")

  // clean up headings
  .replace(/<a[ \n]href="#sec[^"]+">((<code>|<\/code>|[^<])*)<\/a><\/h/g, "$1</h")
  .replace(/<a[ \n]name="sec[^"]+">[\d\. \n]*<\/a>/g, "")
  .replace(/<a[ \n]name="_Toc[^"]+">([^<]*)<\/a><\/h/g, "$1</h")
  .replace(/<a[ \n]name="_Ref[^"]+">([^<]*)<\/a>/g, "$1")
  .replace(/<h1>[\d\.\s]*/g, "<h1>##sec ")
  .replace(/<h2>[\d\.\s]*/g, "<h2>##subsec ")
  .replace(/<h3>[\d\.\s]*/g, "<h3>##subsubsec ")
  .replace(/<h4>[\d\.\s]*/g, "<h4>##subsubsubsec ")
  .replace(/<h5>[\d\.\s]*/g, "<h5>##subsubsubsubsec ")
  .replace(/<h6>[\d\.\s]*/g, "<h6>##subsubsubsubsubsec ")

  // TODO: clean up more <div> tags
  .replace(/<div style='border:none;border-top:solid gray 1.0pt;padding:6.0pt 0in 0in 0in'>([\s\S]*?)<\/div>/g,"$1")

  // clean up references
  .replace(/<b>\[(OData[^<]*)\]<\/b>/g, "$1")
  .replace(/<b>\[(RFC[^<]*)\]<\/b>/g, "$1")
  .replace(/#ABNF/g, "#ODataABNF")
  .replace(/#ODataCSDLJSONRef/g, "#ODataCSDL")
  .replace(/#ODataCSDLXMLRef/g, "#ODataCSDL")
  .replace(/#ODataJSONRef/g, "#ODataJSON")
  .replace(/#ODataURLRef/g, "#ODataURL")
  .replace(/#VocCapabilities/g, "#ODataVocCap")
  .replace(/#VocCore/g, "#ODataVocCore")
  ;

fs.writeFileSync(`./${basename}-clean.html`, clean, {encoding:"latin1"})

const result = await pandoc(["--eol=lf", `./${basename}-clean.html`, `-o ${basename}-raw.md`]);

const raw = fs.readFileSync(`./${basename}-raw.md`, "utf8");

const final = raw
  // bullet points
  .replace(/\n\[· \]\{style="font-family:Symbol(;font-style:normal)?"\}/g,"- ")
  .replace(/\n\[\[· \]\{style="font-family:Symbol"\}\]\{\.Datatype\}/g,"- ")
  // code blocks
  .replace(/\n::: {style="border-top:solid windowtext 1.0pt;border-left:none;border-bottom:\nsolid windowtext 1.0pt;border-right:none;padding:3.0pt 0in 3.0pt 0in;\nbackground:#D9D9D9;margin-left:.3in;margin-right:.3in"}\n([\s\S]*?)\n:::\n/g, "```\n$1\n```\n")
  // examples: twice for consecutive examples without empty lines between them
  .replace(/\nExample \d+:([\s\S]*?)\n\n/g, "\n::: example\nExample ##ex:$1\n:::\n\n")
  .replace(/\n ?Example \d+:([\s\S]*?)\n\n/g, "\n::: example\nExample ##ex:$1\n:::\n\n")
  ;

fs.writeFileSync(`./${basename}.md`, final, {encoding:"utf8"})

function pandoc(args, cwd) {
  return new Promise((resolve) => {
    exec(
      `pandoc ${args.join(" ")}`,
      { cwd },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr,
        });
      }
    );
  });
}