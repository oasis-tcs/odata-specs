const archiver = require("archiver");
const fs = require("fs");
const iterator = require("./iterator");

const pubDate = process.argv[2];
var archives = {};

iterator(function (srcname, name, variant, meta) {
  if (meta.pubdateISO === pubDate) {
    var archivename = meta.archivename || meta.filename;
    archives[archivename] =
      archives[archivename] || archiver("zip", { zlib: { level: 9 } });
    archives[archivename].pipe(
      fs.createWriteStream(
        `${__dirname}/../zip/${archivename}-${meta.pubdateISO}.zip`,
      ),
    );
    archives[archivename].directory(
      `${__dirname}/../docs/${name}/`,
      meta.partname || false,
    );
    if (meta.additionalArtifacts)
      for (var additional of meta.additionalArtifacts)
        archives[archivename].append(
          fs.createReadStream(
            `${__dirname}/../../${additional.repo}/${additional.path}`,
          ),
          { name: additional.path },
        );
  }
});
for (var archivename in archives) archives[archivename].finalize();
