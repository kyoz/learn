const d3 = require('d3');

console.log(d3.tickIncrement(1, 10, 5));  // 2
console.log(d3.tickIncrement(10, 1, 5));  // NaN
console.log(d3.tickIncrement(1, 10, 2));  // 5
console.log(d3.tickIncrement(1, 100, 1)); // 100
console.log(d3.tickIncrement(1, 100, 2)); // 50
