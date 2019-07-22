const d3 = require('d3');

console.log(d3.ticks(1, 10, 2));  // [ 5, 10 ]
console.log(d3.ticks(1, 10, 5));  // [ 2, 4, 6, 8, 10 ]
console.log(d3.ticks(1, 10, 10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(d3.ticks(1, 5, 10));  // [ 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 ]
console.log(d3.ticks(1, 1, 20));  // [ 1 ]
console.log(d3.ticks(10, 1, 4));  // [ 10, 8, 6, 4, 2 ]


