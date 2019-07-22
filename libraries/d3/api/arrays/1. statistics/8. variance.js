const d3 = require('d3');

console.log(d3.variance([1,2,3]));                   // 1
console.log(d3.variance([1,2,3,1,1,2]));             // 0.67
console.log(d3.variance([]));                        // undefined
console.log(d3.variance([1,2,3,null,undefined]));    // 1
// Add one for each value before computing the variance
// The variance will computing for [2,3,4]
console.log(d3.variance([1,2,3], d => d + 1));       // 1
