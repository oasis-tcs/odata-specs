#!/usr/bin/env node

const filter = require("pandoc-filter");

var level = 0;

function enddetails(l, content) {
  for (var i = l; i <= level; i++)
    content.unshift(filter.RawBlock("html", `</details>`));
  level = l;
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
    return content;
  } else if (t === "HorizontalRule") {
    var content = [{ t, c }];
    enddetails(1, content);
    return content;
  }
});
