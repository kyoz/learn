const d3 = require('d3');

console.log(d3.permute([1,2,3,4], [2,3]));                 // [ 3, 4 ]
console.log(d3.permute(['one', 'two', 'three'], [0, 2]));  // [ 'one', 'three' ]
console.log(d3.permute({ id: 1, name: 'Kyoz', age: 25}, ['name', 'age']));
// ['Kyoz', '25']

const object = {
  yield: 27,
  variety: "Manchuria",
  year: 1931,
  site: "University Farm"
};

const fields = ["site", "variety", "yield"];

console.log(d3.permute(object, fields));
// [ 'University Farm', 'Manchuria', 27 ]
