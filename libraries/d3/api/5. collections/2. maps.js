const d3 = require('d3');

const map = d3.map(
  [
    { name: 'foo' },
    { name: 'bar' },
  ],
  d => d.name
);

console.log(map.keys());      // [ 'foo', 'bar' ]
console.log(map.values());    // [ { name: 'foo' }, { name: 'bar' } ]
console.log(map.entries());
// [
//   { key: 'foo', value: { name: 'foo' }},
//   { key: 'bar', value: { name: 'bar' }}
// ]
map.each(item => {
  console.log('item', item);
});
// item { name: 'foo' }
// item { name: 'bar' }

console.log('is empty: ', map.empty());
console.log('size: ', map.size());

console.log(map.get('foo'));  // { name: 'foo' }
console.log(map.get('bar'));  // { name: 'bar' }
console.log(map.get('baz'));  // undefined
console.log(map.has('foo'));  // true
console.log(map.has('baz'));  // false

map.set('foo', 100);

console.log(map.get('foo'));  // 100

map.remove('foo');

console.log(map.get('foo'));  // undefined

map.clear();
console.log('is empty: ', map.empty());

console.log(map.keys());      // []
