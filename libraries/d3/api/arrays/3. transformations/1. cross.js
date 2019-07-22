const d3 = require('d3');

const data_1 = [1,2];
const data_2 = ['a', 'b'];

console.log(d3.cross([], [])); // []

console.log(
  d3.cross(data_1, data_2)
  // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
);

console.log(
  d3.cross(data_1, data_2, (a,b) => a + '-' + b)
  // ['1-a', '1-b', '2-a', '2-b']
);
