#!/usr/bin/env node

const filter = require("pandoc-filter");

let vocab = "";

function link(href) {
  let m;
  if (href.startsWith("#")) return "#" + vocab + href.substring(1);
  if ((m = href.match(/^Org\.OData\.(.*?)\.V1\.md#/)))
    return `#${m[1]}-${href.substring(m[0].length)}`;
  if (/^Org\.OData\..*?\.xml#L/.test(href))
    return (
      "https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/" +
      href
    );
  return "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/" + href;
}

filter.stdio(function ({ t, c }, format, meta) {
  let m;
  if (
    t === "RawInline" &&
    (m = c[1].match(/^<a id="(.*?)Vocabulary" href="#\1Vocabulary">$/))
  )
    vocab = m[1] + "-";
  else if (t === "RawInline" && c[1].match(/^<a name="(.*?)" href="#\1">$/))
    vocab = "";
  else if (t === "RawInline" && (m = c[1].match(/^<a name="(.*?)">$/))) {
    c[1] = `<a name="${vocab}${m[1]}">`;
    return filter.RawInline(...c);
  } else if (
    t === "RawInline" &&
    (m = c[1].match(/^<a href="(.*?)">$/)) &&
    !/^(https?:\/\/|mailto:)/.test(m[1])
  ) {
    c[1] = `<a href="${link(m[1])}">`;
    return filter.RawInline(...c);
  } else if (t === "Link" && !/^(https?:\/\/|mailto:)/.test(c[2][0])) {
    c[2][0] = link(c[2][0]);
    return filter.Link(...c);
  }
});
