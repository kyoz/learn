const d3 = require('d3');

console.log(d3.sum([1,2,3]));                       // 6
console.log(d3.sum([]));                            // 0
console.log(d3.sum([1,2,3,null,undefined]));        // 6
// Add one for each value before computing the sum
// The sum will computing for [2,3,4]
console.log(d3.sum([1,2,3], d => d + 1));           // 9
