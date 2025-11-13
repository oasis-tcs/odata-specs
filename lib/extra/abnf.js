const meta = require("../metameta.js");

module.exports = function (filter, p) {
  return [
    filter.Link(
      ["", [], []],
      [filter.Code(["", [], []], p)],
      [meta["OData-ABNF"] + "#" + p, ""],
    ),
  ];
};
