'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-736d4d8d.js');

var version = "1.0.0";

function main() {
  console.log('version ' + version);
}

function bar() {
  Promise.resolve(require('./bar-af5e384f.js')).then(({ default: foo }) => console.log(foo));
}

exports.bar = bar;
exports.default = main;
