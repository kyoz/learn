const d3 = require('d3');

const data = [
  {date: new Date(2011, 1, 1), value: 0.5},
  {date: new Date(2011, 2, 1), value: 0.6},
  {date: new Date(2011, 3, 1), value: 0.7},
  {date: new Date(2011, 4, 1), value: 0.8}
];

const bisectDateLeft = d3.bisector(d => d.date).left;
const bisectDateRight = d3.bisector(d => d.date).right;
// This is equivalent to above code too
const bisectDateRight2 = d3.bisector((d, x) => d.date - x).right;

console.log(bisectDateLeft(data,                        // 0
  { date: new Date(2011, 2, 2), value: 0.65 },
));
console.log(bisectDateRight(data,                       // 4
  { date: new Date(2011, 2, 2), value: 0.65 },
));
