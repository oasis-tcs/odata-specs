#!/usr/bin/env node

const filter = require("pandoc-filter");

var level = 0;

function enddetails(l, content) {
  for (var i = l; i <= level; i++)
    content.unshift(filter.RawBlock("html", `</details>`));
}

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
    enddetails(c[0], content);
    level = c[0];
    return content;
  } else if (t === "HorizontalRule") {
    content = [filter.HorizontalRule()];
    enddetails(1, content);
    level = 0;
    return content;
  }
});
