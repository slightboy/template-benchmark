var gaikan = require('gaikan');
var compiled;
var tplData;

// Ensure that caching is enabled.
gaikan.options.enableCache = true;
// Ensure thet compression is enabled.
gaikan.options.enableCompression = true;


module.exports.prepare = function (data, done) {
	tplData = data;
	compiled = gaikan.compileFromFile(__dirname +'\\tpl_escaped.html');
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = gaikan.compileFromFile(__dirname +'\\tpl_unescaped.html');
	done();
};

module.exports.step = function (done) {
	var html = compiled(gaikan, tplData);
	done(undefined, html);
};