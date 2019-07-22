const d3 = require('d3');

const histogram = d3.histogram()
  .domain(x.domain())
  .thresholds(x.ticks(20));

const bins = histogram([1,2,3]);

console.log(bins);
