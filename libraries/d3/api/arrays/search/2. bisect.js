const d3 = require('d3');

console.log(d3.bisect([1,2,3,4,5]))      // 5
console.log(d3.bisectLeft([1,2,3,4,5]))  // 0
console.log(d3.bisectRight([1,2,3,4,5])) // 5

console.log(d3.bisect([1,2,3,4,5], 2))      // 2
console.log(d3.bisectLeft([1,2,3,4,5], 2))  // 1
console.log(d3.bisectRight([1,2,3,4,5], 2)) // 2
