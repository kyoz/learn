import json from 'rollup-plugin-json';
import cleaner from 'rollup-plugin-cleaner';
import myExample from './src/rollup-example-plugin.js';

export default {
  input: ['src/main.js', 'src/main2.js'],
  output: {
    dir: 'dist/dev/',
    format: 'cjs'
  },
  plugins: [
    json(),
    myExample(),
    cleaner({
      targets: [
        './dist/dev/'
      ]
    })
  ]
}
