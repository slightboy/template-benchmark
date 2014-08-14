# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.2 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v2.4.0 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v1.0.0
- [Fest](https://github.com/mailru/fest) v0.8.2
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.2
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v2.0.0-alpha.4 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v3.0.2 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v1.5.0 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v1.4.2
- [Underscore](https://github.com/documentcloud/underscore) v1.6.0 ([website](http://underscorejs.org/))
- [artTemplate](https://github.com/aui/artTemplate) v3.0.2-rc2 ([website](http://aui.github.io/artTemplate/))

## Test environment

- CPU: Intel Xeon CPU E3-1230 v3 3.3Ghz
- OS: Windows Server 2008 R2 Enterprise
- Node.JS x64 version: 0.11.13

## Results

	Rendering 100000 templates:

	artTemplate
	  Escaped   : 1187ms
	  Unescaped : 488ms
	  Total     : 1675ms

	ECT
	  Escaped   : 2228ms
	  Unescaped : 72ms
	  Total     : 2300ms

	Dust
	  Escaped   : 3264ms
	  Unescaped : 657ms
	  Total     : 3921ms

	Hogan.js
	  Escaped   : 2823ms
	  Unescaped : 261ms
	  Total     : 3084ms

	Gaikan
	  Escaped   : 1019ms
	  Unescaped : 46ms
	  Total     : 1065ms

	Fest
	  Escaped   : 1313ms
	  Unescaped : 305ms
	  Total     : 1618ms

	EJS without `with`
	  Escaped   : 3604ms
	  Unescaped : 251ms
	  Total     : 3855ms

	doT
	  Escaped   : 1553ms
	  Unescaped : 46ms
	  Total     : 1599ms

	Swig
	  Escaped   : 4285ms
	  Unescaped : 531ms
	  Total     : 4816ms

	Underscore
	  Escaped   : 2710ms
	  Unescaped : 1584ms
	  Total     : 4294ms

	EJS
	  Escaped   : 5365ms
	  Unescaped : 1213ms
	  Total     : 6578ms

	Eco
	  Escaped   : 4504ms
	  Unescaped : 476ms
	  Total     : 4980ms

	Handlebars.js
	  Escaped   : 1272ms
	  Unescaped : 235ms
	  Total     : 1507ms

	Jade without `with`
	  Escaped   : 3179ms
	  Unescaped : 468ms
	  Total     : 3647ms

	CoffeeKup
	  Escaped   : 2725ms
	  Unescaped : 6650ms
	  Total     : 9375ms

	Jade
	  Escaped   : 7763ms
	  Unescaped : 3874ms
	  Total     : 11637ms

	Performance report for 100000 templates (win32):

	Gaikan               ( 1065ms) - fastest
	Handlebars.js        ( 1507ms) - 42% slower
	doT                  ( 1599ms) - 50% slower
	Fest                 ( 1618ms) - 52% slower
	artTemplate          ( 1675ms) - 57% slower
	ECT                  ( 2300ms) - 116% slower
	Hogan.js             ( 3084ms) - 190% slower
	Jade without `with`  ( 3647ms) - 242% slower
	EJS without `with`   ( 3855ms) - 262% slower
	Dust                 ( 3921ms) - 268% slower
	Underscore           ( 4294ms) - 303% slower
	Swig                 ( 4816ms) - 352% slower
	Eco                  ( 4980ms) - 368% slower
	EJS                  ( 6578ms) - 518% slower
	CoffeeKup            ( 9375ms) - 780% slower
	Jade                 (11637ms) - 993% slower


## Usage

	git clone git://github.com/slightboy/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
