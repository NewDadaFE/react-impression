import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: [
    'react',
    'react-dom',
    'react-addons-css-transition-group',
    'prop-types',
    'moment',
    'highlight.js',
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
