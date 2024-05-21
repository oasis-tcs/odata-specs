const archiver = require("archiver");
const { spawnSync } = require("child_process");
const fs = require("fs");
const iterator = require("./iterator");

const pubDate = process.argv[2];

if (!pubDate) {
  console.log("Usage: node lib/zip.js <pubdateISO>");
  process.exit(1);
}

var archives = {};

iterator(function (srcname, name, variant, meta) {
  if (meta.pubdateISO === pubDate) {
    const archivename = meta.archivename || meta.filename;
    archives[archivename] =
      archives[archivename] || archiver("zip", { zlib: { level: 9 } });
    archives[archivename].pipe(
      fs.createWriteStream(`${__dirname}/../zip/${archivename}.zip`),
    );
    fs.readdirSync(`${__dirname}/../docs/${name}`, {
      withFileTypes: true,
    }).forEach(function (doc) {
      if (doc.isDirectory()) {
        archives[archivename].directory(
          `${__dirname}/../docs/${name}/${doc.name}/`,
          (meta.partname ? meta.partname + "/" : "") + doc.name,
        );
      } else if (doc.name !== ".DS_Store") {
        archives[archivename].append(
          fs.createReadStream(`${__dirname}/../docs/${name}/${doc.name}`),
          {
            name:
              (meta.partname ? meta.partname + "/" : "") +
              meta.filename +
              doc.name.match(/\.[^.]+$/)[0],
          },
        );
      }
    });
    if (meta.additionalArtifacts)
      for (const additional of meta.additionalArtifacts) {
        const repoDir = `${__dirname}/../../${additional.repo}`;
        if (additional.branch) gitSwitch(repoDir, additional);
        archives[archivename].append(
          fs.createReadStream(`${repoDir}/${additional.path}`),
          { name: additional.path },
        );
      }
  }
});

for (var archivename in archives) {
  console.log(archivename);
  archives[archivename].finalize();
}

function gitSwitch(repoDir, artifact) {
  try {
    const switchResult = spawnSync("git", ["switch", artifact.branch], {
      cwd: repoDir,
    });
    if (switchResult.status !== 0) {
      console.error(
        `❌ Could not switch repo ${artifact.repo} to branch ${artifact.branch}`,
      );
      return false;
    }
    const pullResult = spawnSync("git", ["pull"], {
      cwd: repoDir,
    });
    if (pullResult.status !== 0) {
      console.error(`❌ Could not pull ${artifact.repo}`);
      return false;
    }
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
