const iterator = require("./iterator");
const fs = require("fs");
const Number = require("./number");
const pandoc = require("./pandoc");
const { PassThrough } = require("stream");

const docs = [];
const builders = [];
iterator(function (srcname, name, variant, meta) {
  docs.push(`* [${meta.pagetitle} - ${meta.subtitle}](${name}/${name}.html)`);
  if (meta.repo && !process.argv.includes("repo:" + meta.repo)) return;
  for (const dir of ["images", "styles"]) {
    const src = `${__dirname}/../${srcname}/${dir}`;
    if (fs.existsSync(src)) {
      const trg = `${__dirname}/../docs/${name}/${dir}`;
      if (fs.existsSync(trg)) fs.rmSync(trg, { recursive: true });
      fs.cpSync(src, trg, { recursive: true });
    }
  }
  fs.cpSync(`${__dirname}/../styles`, `${__dirname}/../docs/${name}/styles`, {
    recursive: true,
  });
  let md = fs.createWriteStream(`${__dirname}/../docs/${name}/${name}.md`);
  if (meta.pandocOptions?.["-F"]) {
    const mdpost = pandoc(meta.pandocOptions, [
      "-f",
      "gfm+tex_math_dollars+fenced_divs+smart+bracketed_spans",
      "-t",
      "gfm-tex_math_gfm",
    ]);
    mdpost.stdout.pipe(md);
    md = mdpost.stdin;
  }
  const html = pandoc({
    "--metadata-file": `${__dirname}/../${srcname}/${variant}.yaml`,
    ...meta.pandocOptions, // use single-hyphen options here
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

Promise.all(builders.map((build) => build.number.read())).then(function () {
  builders.forEach(function (build) {
    build.number.write(build.out).then(build.then, build.catch);
  });
});

fs.writeFileSync(
  `${__dirname}/../docs/index.md`,
  `# OData Specification Drafts

This repository contains working drafts for OData specifications:

${docs.sort().join("\n")}
`,
);
