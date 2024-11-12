import { c as polyfill } from 'react-compiler-runtime';
import { c as real } from 'react/compiler-runtime';

console.log('polyfill:\n', polyfill.toString(), '\n\n\n');
console.log('real:\n', real.toString(), '\n\n\n');
