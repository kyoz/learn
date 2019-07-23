const d3 = require('d3');

console.log(d3.pairs([1]));      // []
console.log(d3.pairs([1,2]));    // [ [1, 2] ]

console.log(
  d3.pairs([1,2,3,4,5])
  // [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ] ]
);

console.log(
  d3.pairs([1,2,3,4], (a, b) => b + '-' + a)
  // [ '2-1', '3-2', '4-3' ]
);

