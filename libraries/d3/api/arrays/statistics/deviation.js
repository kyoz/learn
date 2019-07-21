const d3 = require('d3');

console.log(d3.deviation([1,2,3]));                   // 1
console.log(d3.deviation([1,2,3,1,1,2]));             // 0.81
console.log(d3.deviation([]));                        // undefined
console.log(d3.deviation([1,2,3,null,undefined]));    // 1
// Add one for each value before computing the deviation
// The deviation will computing for [2,3,4]
console.log(d3.deviation([1,2,3], d => d + 1));       // 1
