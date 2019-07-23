const d3 = require('d3');

console.log(d3.median([1,2,3]));                       // 2
console.log(d3.median([]));                            // undefined
console.log(d3.median([1,2,3,null,undefined]));        // 2
// Add one for each value before computing the median
// The median will computing for [2,3,4]
console.log(d3.median([1,2,3], d => d + 1));           // 3
