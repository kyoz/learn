const d3 = require('d3');

console.log(d3.min([1,2,3]));                      // 1
console.log(d3.min([]));                           // undefined
console.log(d3.min([4,3,undefined,null,1]));       // 1
console.log(d3.min([1,2,3], d => 'Mapped ' + d));  // Mapped 1

