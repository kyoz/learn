const d3 = require('d3');

const yields = [
  {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
  {yield: 48.87, variety: "Manchuria", year: 1931, site: "Waseca"},
  {yield: 27.43, variety: "Manchuria", year: 1931, site: "Morris"},
  {yield: 37.43, variety: "Manchuria", year: 1932, site: "Morris 2"}
];

const entries = d3.nest()
  .key(d => d.year).sortKeys(d3.ascending)
  .key(d => d.variety).sortKeys(d3.descending)
  .entries(yields);

console.log(entries);
// [{key: "1931", values: [
//    {key: "Manchuria", values: [
//      {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
//      {yield: 48.87, variety: "Manchuria", year: 1931, site: "Waseca"},
//      {yield: 27.43, variety: "Manchuria", year: 1931, site: "Morris"}, ...]},
//    {key: "Glabron", values: [
//      {yield: 43.07, variety: "Glabron", year: 1931, site: "University Farm"},
//      {yield: 55.20, variety: "Glabron", year: 1931, site: "Waseca"}, ...]}, ...]},
//  {key: "1932", values: ...}]

