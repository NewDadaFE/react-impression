import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/components/index.js',
  external: Object.keys(require('./package.json').peerDependencies),
  output: {
    file: 'dist/index.system.js',
    format: 'system',
    name: null,
  },
  plugins: [
    resolve(),
    babel({
      ...require('../../babel.config.js'),
      exclude: /node_modules/,
      babelHelpers: 'runtime',
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    terser(),
  ],
}
