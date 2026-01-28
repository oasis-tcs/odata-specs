#!/usr/bin/env node

const filter = require("pandoc-filter");

let level = 0;

function enddetails(l, content) {
  for (let i = l; i <= level; i++)
    content.unshift(filter.RawBlock("html", `</details>`));
}

filter.stdio(function ({ t, c }, format, meta) {
  if (t === "Header") {
    if (c[0] === 1 || /^([a-z]?\d+-)/.test(c[1][0])) {
      const content = [
        filter.RawBlock("html", `<details open><summary>`),
        filter.Header(...c),
        filter.RawBlock("html", `</summary>`),
      ];
      enddetails(c[0], content);
      level = c[0];
      return content;
    } else {
      c[1][0] = "";
      return filter.Header(...c);
    }
  } else if (t === "HorizontalRule") {
    const content = [filter.HorizontalRule()];
    enddetails(1, content);
    level = 0;
    return content;
  } else if (t === "Span" && c[0][1][0] && c[1][0]?.t === "Str") {
    try {
      const extra = require(__dirname + "/extra/" + c[0][1][0]);
      c[1] = extra(filter, c[1][0].c, meta);
      return filter.Span(...c);
    } catch (e) {
      if (e.code !== "MODULE_NOT_FOUND") throw e;
    }
  }
});
