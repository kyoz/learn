const d3 = require('d3');

console.log(d3.scan([1,2,3]));                                  // 0
console.log(d3.scan([3,2,1]));                                  // 2
console.log(d3.scan([1,2,3], function(a,b) { return a - b }));  // 0
console.log(d3.scan([1,2,3], function(a,b) { return b - a }));  // 2
console.log(d3.scan([1,2,3], (a,b) => { return a - b - 'a'}));  // undefined
console.log(d3.scan([
  { values: [5,6,7] },
  { values: [5,6,7] },
  { values: [1,2,3] },
  { values: [7,8,9] }
], (a,b) => { return d3.sum(a.values) - d3.sum(b.values) }));   // 2
