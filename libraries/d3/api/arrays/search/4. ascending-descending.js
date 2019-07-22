const d3 = require('d3');

const data = [1,2,3,10,101,102,1001];
const data_2 = ['a1', 'a33','a24','a3'];
console.log(data.sort((x, y) => d3.ascending(x,y) ));     // [1,2,3,10,101,102,1001]
console.log(data.sort((x, y) => d3.descending(x,y) ));    // [1001,102,101,10,3,2,1]

console.log(data_2.sort((x, y) => d3.ascending(x,y) ));   // ['a1', 'a24', 'a3', 'a33']
console.log(data_2.sort((x, y) => d3.descending(x,y) ));  // ['a33', 'a3', 'a24', 'a1']
