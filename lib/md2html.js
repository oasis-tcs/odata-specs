#!/usr/bin/env node

const filter = require("pandoc-filter");

var level = 0;

filter.stdio(function ({ t, c }, format, meta) {
  if (
    t === "Header" &&
    /^(table-of-contents|appendix-[a-z]-|[a-z]?\d+-)/.test(c[1])
  ) {
    var content = [
      filter.RawBlock("html", `<details open><summary>`),
      filter.Header(...c),
      filter.RawBlock("html", `</summary>`),
    ];
    for (var i = c[0]; i <= level; i++)
      content.unshift(filter.RawBlock("html", `</details>`));
    level = c[0];
    return content;
  }
});
