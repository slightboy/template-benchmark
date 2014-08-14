var swig = require('swig');
var compiled;
var tplData;


module.exports.prepare = function (data, done) {
	tplData = data;
	compiled = swig.compileFile(__dirname +'/tpl_escaped.swig');
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = swig.compileFile(__dirname +'/tpl_unescaped.swig');
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};