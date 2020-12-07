import * as path from 'path';
import * as fs from 'fs';
import { rollup } from 'rollup';
import rollupCommonJs from '@rollup/plugin-commonjs';
import rollupNodeResolve from '@rollup/plugin-node-resolve';

console.clear();

const bundle = await rollup({
  input: 'src/index.js',
  plugins: [rollupNodeResolve(), rollupCommonJs()],
});
const { output } = await bundle.generate({});

fs.writeFileSync('output.js', output[0].code, 'utf-8');
