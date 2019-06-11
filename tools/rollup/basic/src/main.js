import foo from './foo.js';
import { version } from '../package.json';

export default function() {
  console.log('version ' + version);
}

export function bar() {
  import('./bar.js').then(({ default: foo }) => console.log(foo));
}
