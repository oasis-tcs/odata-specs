module.exports = function (filter, p) {
  return filter.Link(
    ["", [], []],
    [filter.Code(["", [], []], p)],
    [
      "https://oasis-tcs.github.io/odata-abnf/abnf/odata-abnf-construction-rules.html#" +
        p,
      "",
    ],
  );
};
