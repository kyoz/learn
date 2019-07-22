const d3 = require('d3');

console.log(d3.mean([1,2,3]));                       // 2
console.log(d3.mean([]));                            // undefined
console.log(d3.mean([1,2,3,null,undefined]));        // 2
// Add one for each value before computing the mean
// The mean will computing for [2,3,4]
console.log(d3.mean([1,2,3], d => d + 1));           // 3
