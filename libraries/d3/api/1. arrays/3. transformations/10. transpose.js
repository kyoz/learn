
const d3 = require('d3');

console.log(d3.transpose([ ['a','b'], ['c','d'] ])); // [ ['a','c'], ['b','d'] ]
console.log(d3.transpose(d3.zip([1,2], [3,4])));     // [ [1,2], [3,4] ]
