const iterator = require("./iterator");
const fs = require("fs");
const Number = require("./number");
const pandoc = require("./pandoc");
const { PassThrough } = require("stream");

var docs = [];
var builders = [];
iterator(function (srcname, name, variant, meta) {
  docs.push(`* [${meta.pagetitle} - ${meta.subtitle}](${name}/${name}.html)`);
  if (meta.repo && !process.argv.includes("repo:" + meta.repo)) return;
  fs.cpSync(`${__dirname}/../styles`, `${__dirname}/../docs/${name}/styles`, {
    recursive: true,
  });
  const srcImages = `${__dirname}/../${srcname}/images`;
  if (fs.existsSync(srcImages)) {
    const targetImages = `${__dirname}/../docs/${name}/images`;
    if (fs.existsSync(targetImages))
      fs.rmSync(targetImages, { recursive: true });
    fs.cpSync(srcImages, targetImages, { recursive: true });
  }
  var md = fs.createWriteStream(`${__dirname}/../docs/${name}/${name}.md`);
  var html = pandoc({
    "--metadata-file": `${__dirname}/../${srcname}/${variant}.yaml`,
    ...meta.pandocOptions,
  });
  html.stdout.pipe(
    fs.createWriteStream(`${__dirname}/../docs/${name}/${name}.html`),
  );
  builders.push({
    number: new Number(`${__dirname}/../${srcname}`, variant, meta),
    out: new PassThrough()
      .on("data", function (chunk) {
        md.write(chunk);
        html.stdin.write(chunk);
      })
      .on("end", function () {
        md.end();
        html.stdin.end();
      }),
    then() {
      console.log("✓", srcname, variant === "meta" ? "" : variant);
    },
    catch(err) {
      console.log("❌", srcname, variant === "meta" ? "" : variant);
      console.error(err.join("\n"));
      console.error();
      process.exitCode = 1;
    },
  });
});

(async function () {
  for (var build of builders) await build.number.read();
  builders.forEach(function (build) {
    build.number.build(build.out).then(build.then, build.catch);
  });
})();

fs.writeFileSync(
  `${__dirname}/../docs/index.md`,
  `# OData Specification Drafts

This repository contains working drafts for OData specifications:

${docs.sort().join("\n")}
`,
);
