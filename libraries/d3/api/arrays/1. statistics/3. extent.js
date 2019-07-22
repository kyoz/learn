const d3 = require('d3');

console.log(d3.extent([1,2,3]));                       // [1,3]
console.log(d3.extent([]));                            // [undefined,undefined]
console.log(d3.extent([1,2,3,null,undefined]));        // [1,3]
console.log(d3.extent([1,2,3], d => 'Mapped ' + d));   // ['Mapped 1', 'Mapped 3']
