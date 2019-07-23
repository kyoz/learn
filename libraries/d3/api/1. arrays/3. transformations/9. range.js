const d3 = require('d3');

// Default of step is 1
console.log(d3.range(1, 10));       // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(d3.range(1, 10, 2));    // [ 1, 3, 5, 7, 9 ]
console.log(d3.range(1, 10, 3));    // [ 1, 4, 7 ]
// By default start is 0 if ommited
console.log(d3.range(null, 10, 3)); // [ 0, 3, 6, 9 ]
console.log(d3.range(10, 1, -3));   // [ 10, 7, 4 ]

console.log(d3.range(0, 1, 0.2));   // [ 0, 0.2, 0.4, 0.6000000000000001, 0.8 ]

