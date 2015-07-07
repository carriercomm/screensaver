'use strict';
var meow = require('meow');
var screensaver = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ screensaver'
	]
});

screensaver(function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});