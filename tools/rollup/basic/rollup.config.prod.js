import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  output: {
    dir: 'dist/production',
    format: 'cjs'
  },
  plugins: [ json() ]
}
