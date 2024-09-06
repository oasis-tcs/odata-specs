#!/usr/bin/env node

const filter = require("pandoc-filter");

let level = 0;

function enddetails(l, content) {
  for (let i = l; i <= level; i++)
    content.unshift(filter.RawBlock("html", `</details>`));
}

filter.stdio(function ({ t, c }, format, meta) {
  if (
    t === "Header" &&
    /^(table-of-contents|appendix-[a-z]-|[a-z]?\d+-)/.test(c[1])
  ) {
    const content = [
      filter.RawBlock("html", `<details open><summary>`),
      filter.Header(...c),
      filter.RawBlock("html", `</summary>`),
    ];
    enddetails(c[0], content);
    level = c[0];
    return content;
  } else if (t === "HorizontalRule") {
    const content = [filter.HorizontalRule()];
    enddetails(1, content);
    level = 0;
    return content;
  } else if (t === "Link" && c[2][0].match(/^[:=]/)) {
    const id = c[2][0].substring(1);
    return [
      filter.RawInline(
        "html",
        `<a id="${id}"${c[2][0][0] === "=" ? ` href="#${id}"` : ""}>`,
      ),
      ...c[1],
      filter.RawInline("html", `</a>`),
    ];
  }
});
