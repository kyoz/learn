const d3 = require('d3');

console.log(d3.tickStep(1, 10, 1));  // 10
console.log(d3.tickStep(10, 1, 1));  // -10
console.log(d3.tickStep(1, 10, 2));  // 5
console.log(d3.tickStep(1, 100, 2)); // 50
