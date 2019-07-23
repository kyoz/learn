const d3 = require('d3');

const data = [
  { id: 1, price: 20 },
  { id: 2, price: 10 },
  { id: 3, price: 40 },
  { id: 4, price: 80 },
  { id: 5, price: 90 },
  { id: 6, price: 120 },
  { id: 7, price: 220 },
  { id: 8, price: 210 },
  { id: 9, price: 120 },
  { id: 10, price: 180 }
];

const xAxis = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 1000]);

const histogram = d3.histogram()
  .value(d => d.price)
  .domain(xAxis.domain())
  .thresholds(xAxis.ticks(10));

const bins = histogram(data);

console.log(bins);


// [
//   [ x0: 0, x1: 10 ],
//   [ { id: 2, price: 10 }, x0: 10, x1: 20 ],
//   [ { id: 1, price: 20 }, x0: 20, x1: 30 ],
//   [ x0: 30, x1: 40 ],
//   [ { id: 3, price: 40 }, x0: 40, x1: 50 ],
//   [ x0: 50, x1: 60 ],
//   [ x0: 60, x1: 70 ],
//   [ x0: 70, x1: 80 ],
//   [ { id: 4, price: 80 }, x0: 80, x1: 90 ],
//   [ { id: 5, price: 90 }, x0: 90, x1: 100 ],
//   [ x0: 100, x1: 100 ]
// ]
