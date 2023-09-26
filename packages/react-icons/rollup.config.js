const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const { PluginPure } = require('rollup-plugin-pure');

const packageJson = require('./package.json');

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = [
  {
    input: 'src/index.ts',
    /**
     * @type {import('rollup').OutputOptions[]}
     */
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true,
        esModule: true
      }
    ],
    external: [Object.keys(packageJson.peerDependencies)],
    plugins: [
      external(),
      PluginPure({
        functions: ['React.forwardRef']
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.prod.json' }),
      postcss()
    ]
  }
];
