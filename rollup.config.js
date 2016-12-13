import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

// Rollup plugins
export default {
  entry: 'src/index.js',
  dest: 'dist/index.min.js',
  format: 'umd',
  moduleName: 'mockSchema',
  plugins: [
    commonjs(),
    uglify(),
    babel({
      presets: ["es2015-rollup"],
      exclude: 'node_modules/**',
    }),
  ],
};