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
    "-V",
    `header-includes=<script type="text/javascript">
  MathJax = {startup: {
    ready() {
      MathJax.startup.defaultReady();
      MathJax.startup.document.outputJax.font.variant.monospace.chars
        [0x2019] = [.611, -.287, .525, {f: "T", c: "′"}];
    }
  }};
</script>`,
    "-H",
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
