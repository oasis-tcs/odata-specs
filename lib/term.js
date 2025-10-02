module.exports = function (filter, p) {
  const [voc, term] = p.split(".", 2);
  return filter.Link(
    ["", [], []],
    [filter.Code(["", [], []], p)],
    [
      `https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.${voc}.V1.md#${term}`,
      "",
    ],
  );
};
