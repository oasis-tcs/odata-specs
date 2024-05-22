const iterator = require("./iterator");
const fs = require("fs");
const Number = require("./number");
const pandoc = require("./pandoc");
const { PassThrough } = require("stream");

var docs = [];
iterator(function (srcname, name, variant, meta) {
  docs.push(`* [${meta.pagetitle} - ${meta.subtitle}](${name}/${name}.html)`);
  if (meta.repo && !fs.existsSync(`${__dirname}/../../${meta.repo}`)) {
    console.log("Build of %s from repo %s skipped", srcname, meta.repo);
    return;
  }
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
  new Number(`${__dirname}/../${srcname}`, variant, meta)
    .build(
      new PassThrough()
        .on("data", function (chunk) {
          md.write(chunk);
          html.stdin.write(chunk);
        })
        .on("end", function () {
          md.end();
          html.stdin.end();
        }),
    )
    .then(() => {
      console.log("✓", srcname, variant === "meta" ? "" : variant);
    })
    .catch((err) => {
      console.log("❌", srcname, variant === "meta" ? "" : variant);
      console.error(err.join("\n"));
      console.error();
      process.exitCode = 1;
    });
});
fs.writeFileSync(
  `${__dirname}/../docs/index.md`,
  `# OData Specification Drafts

This repository contains working drafts for OData specifications:

${docs.sort().join("\n")}
`,
);
