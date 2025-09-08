module.exports = function (p) {
  return "[`" + p + "`](" + this.meta["OData-ABNF"] + "#" + p + ")";
};
