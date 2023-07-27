const fs = require("fs");
const Number = require("./number");
const pandoc = require("./pandoc");
const { PassThrough } = require("stream");
const yaml = require("js-yaml");

fs.readdirSync(__dirname + "/..", { withFileTypes: true }).forEach(function (
  doc
) {
  if (doc.isDirectory() && doc.name.startsWith("odata-")) {
    fs.readdirSync(__dirname + "/../" + doc.name)
      .filter((fn) => fn.endsWith(".yaml"))
      .forEach(function (metaname) {
        var dirname, filename;
        var meta = yaml.load(
          fs.readFileSync(__dirname + "/../" + doc.name + "/" + metaname)
        );
        if (metaname === "meta.yaml") {
          dirname = doc.name;
          filename = doc.name;
        } else {
          dirname = meta.dirname;
          filename = meta.filename;
        }
        fs.cpSync(
          __dirname + "/../styles",
          __dirname + "/../docs/" + dirname + "/styles",
          { recursive: true }
        );
        var md = fs.createWriteStream(
          __dirname + "/../docs/" + dirname + "/" + filename + ".md"
        );
        var html = pandoc({
          "--metadata-file": __dirname + "/../" + doc.name + "/" + metaname,
        });
        html.stdout.pipe(
          fs.createWriteStream(
            __dirname + "/../docs/" + dirname + "/" + filename + ".html"
          )
        );
        md.write(Buffer.of(0xef, 0xbb, 0xbf));
        new Number(doc.name, metaname.substring(0, metaname.length - 5))
          .build(
            new PassThrough()
              .on("data", function (chunk) {
                md.write(chunk);
                html.stdin.write(chunk);
              })
              .on("end", function () {
                md.end();
                html.stdin.end();
              })
          )
          .then(() => {
            console.log("✓ " + doc.name, metaname);
          })
          .catch((err) => {
            console.log("❌ " + doc.name, metaname);
            console.error(err.join("\n"));
            console.error();
            process.exitCode = 1;
          });
      });
  }
});
