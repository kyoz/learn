const d3 = require('d3');

console.log(
  d3.merge( [
    [1],
    [2, 3]
  ])
  // [1,2,3]
);
console.log(
  d3.merge([
    [1],
    ['a', 'b', 4]
  ])
  // [1,'a','b',4]
);

