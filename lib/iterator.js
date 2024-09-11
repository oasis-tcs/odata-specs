const fs = require("fs");
const yaml = require("js-yaml");
const metameta = require("./metameta");

module.exports = function (callback) {
  fs.readdirSync(`${__dirname}/..`, {
    withFileTypes: true,
  }).forEach(function (doc) {
    if (doc.isDirectory() && doc.name.startsWith("odata-")) {
      fs.readdirSync(`${__dirname}/../${doc.name}`)
        .filter((fn) => fn.endsWith(".yaml"))
        .forEach(function (metaname) {
          const meta = yaml.load(
            fs.readFileSync(`${__dirname}/../${doc.name}/${metaname}`),
          );
          const name =
            metaname === "meta.yaml" || !meta.dirname ? doc.name : meta.dirname;
          callback(doc.name, name, metaname.substring(0, metaname.length - 5), {
            ...metameta,
            ...meta,
          });
        });
    }
  });
};
