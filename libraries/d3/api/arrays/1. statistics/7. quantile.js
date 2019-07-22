const d3 = require('d3');

console.log(d3.quantile([1,2,3], .25));                   // 1.5
console.log(d3.quantile([1,2,3], .75));                   // 2.5
console.log(d3.quantile([], .25));                        // undefined
console.log(d3.quantile([1,2,3,null,undefined], .25));    // 2
// Add one for each value before computing the quantile
// The quantile will computing for [2,3,4]
console.log(d3.quantile([1,2,3], .25, d => d + 1));       // 2.5
