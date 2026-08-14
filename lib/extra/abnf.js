module.exports = function (filter, p, meta) {
  return [
    filter.Link(
      ["", [], []],
      [filter.Code(["", [], []], p)],
      [meta["OData-ABNF"].c[0].c + "#" + p, ""],
    ),
  ];
};
