
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import wasm from 'rollup-plugin-wasm';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const dev = process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
file: `build/main.js`,
    format: 'esm',
    sourcemap: dev
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: 'global.css',
      minimize: !dev
    }),
    wasm(),
    dev && serve({ contentBase: 'dist', open: true, port: 3000 }),
    dev && livereload('dist'),
    !dev && terser()
  ]
};
