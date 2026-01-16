const metameta = require("../metameta.js");
const vocs = { Core: "Core", Capabilities: "Cap", Aggregation: "Aggr" };

module.exports = function (filter, p, meta) {
  const [voc, term] = p.split(".", 2);
  return [
    filter.Link(
      ["", [], []],
      [filter.Code(["", [], []], p)],
      [metameta["OData-Voc" + vocs[voc]] + "#" + term, ""],
    ),
  ];
};
