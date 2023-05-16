const {spawn} = require("child_process");

module.exports = function(options, out) {
	var opts = [
		"-f", "gfm+tex_math_dollars+fenced_divs",
		"-t", "html",
		"-c", "https://docs.oasis-open.org/templates/css/markdown-styles-v1.7.3a.css",
		"-c", "styles/odata.css",
		"--mathjax",
		"-s"
	];
	for (var param in options) {
		var value = options[param];
		if (value && param.startsWith("--")) opts.push(param + "=" + value);
		else if (value && param.startsWith("-")) opts.push(param, value);
		else opts.push(param);
	}
	var proc = spawn("pandoc", opts);
	proc.stdout.pipe(out);
	proc.stderr.on("data", function(err) {
		console.error(err.toString());
	});
	return proc;
};
