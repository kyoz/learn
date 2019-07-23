const d3 = require('d3');

console.log(d3.max([1,2,3]));                       // 3
console.log(d3.max([]));                            // undefined
console.log(d3.max([1,2,3,null,undefined]));        // 3
console.log(d3.max([1,2,3], d => 'Mapped ' + d));   // Mapped 3
