const d3 = require('d3');

const set = d3.set([1,2,3]);
console.log(set.has(1));     // true
console.log(set.has(4));     // false
set.add(4);
console.log(set.has(4));     // true
set.remove(4);
console.log(set.values());   // [ '1', '2', '3' ]
console.log('is empty: ', set.empty());
console.log('size: ', set.size());
