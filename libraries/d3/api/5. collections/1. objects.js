const d3 = require('d3');

const object = {
  id: 10,
  name: 'Kyoz',
  location: 'SaiGon'
};

console.log(d3.keys(object));    // [ 'id', 'name', 'location' ]
console.log(d3.values(object));  // [ 10, 'Kyoz', 'SaiGon' ]
console.log(d3.entries(object));
// [
//   { key: 'id', value: 10 },
//   { key: 'name', value: 'Kyoz' },
//   { key: 'location', value: 'SaiGon' }
// ];
