//this file isnt transpiled, so must use CommonJS and ES5

//register babel to transpile before the tests run
require('babel-register')();

//disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
