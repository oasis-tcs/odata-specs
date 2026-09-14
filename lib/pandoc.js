const { spawn } = require("child_process");

module.exports = function (options) {
  var opts = [
    "-f",
    "gfm+tex_math_dollars+fenced_divs+smart+bracketed_spans",
    "-t",
    "html",
    "-c",
    "styles/markdown-styles-v1.7.3b.css",
    "-c",
    "styles/odata.css",
    "--syntax-highlighting",
    "scripts/odata.theme",
    "--mathjax",
    "-s",
    "--eol=lf",
    "--wrap=none",
    "-V",
    "lang=en-US",
    "-V",
    `include-before=<aside id="darkmode">
  <select aria-label="Switch light/dark mode">
    <option value="off" title="Light mode">&#x263C;</option>
    <option value="on" title="Dark mode">&#x263D;</option>
    <option value="auto" title="Follow device mode">&#x25D1;</option>
  </select>
</aside>`,
    "-H",
    "scripts/mathjax.html",
    "-A",
    "scripts/darkmode.html",
    "-F",
    "lib/md2html.js",
  ];
  for (var param in options) {
    var value = options[param];
    if (value && param.startsWith("--")) opts.push(param + "=" + value);
    else if (value && param.startsWith("-")) opts.push(param, value);
    else opts.push(param);
  }
  var proc = spawn("pandoc", opts, { cwd: __dirname + "/.." });
  proc.stderr.on("data", function (err) {
    console.error(err.toString());
  });
  return proc;
};
