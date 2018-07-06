import del from 'rollup-plugin-delete'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
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
    del({
      targets: 'dist/*',
    }),
    resolve(),
    postcss({
      extract: 'dist/react-impression.css',
    }),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
