const meta = require("../metameta.js");
const vocs = { Core: "Core", Capabilities: "Cap", Aggregation: "Aggr" };

module.exports = function (filter, p) {
  const [voc, term] = p.split(".", 2);
  return [
    filter.Link(
      ["", [], []],
      [filter.Code(["", [], []], p)],
      [meta["OData-Voc" + vocs[voc]] + "#" + term, ""],
    ),
  ];
};
