const { spawn } = require("child_process");

module.exports = function (options) {
  var opts = [
    "-f",
    "gfm+tex_math_dollars+fenced_divs+smart",
    "-t",
    "html",
    "-c",
    "styles/markdown-styles-v1.7.3b.css",
    "-c",
    "styles/odata.css",
    "--mathjax",
    "-s",
    "--eol=lf",
    "--wrap=none",
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
