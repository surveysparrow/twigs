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
    input: 'src/index.tsx',
    /**
     * @type {import('rollup').OutputOptions[]}
     */
    output: [
      {
        dir: 'dist',
        format: 'es',
        sourcemap: true,
        esModule: true,
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ],
    external: [...Object.keys(packageJson.peerDependencies), ...Object.keys(packageJson.dependencies)],
    plugins: [
      external(),
      PluginPure({
        functions: ['forwardRef', 'React.forwardRef', 'styled']
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.prod.json' }),
      postcss()
    ]
  }
];
