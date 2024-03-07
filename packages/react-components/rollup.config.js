const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const { PluginPure } = require('rollup-plugin-pure');
const { dts } = require('rollup-plugin-dts');
const esbuild = require('rollup-plugin-esbuild').default;
const alias = require('@rollup/plugin-alias');
const path = require('path');
const packageJson = require('./package.json');
const fs = require('fs');
const baseConfig = require('./rollup.config.base');

const projectRootDir = path.resolve(__dirname);

const pathCache = {};

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = [
  {
    ...baseConfig,
    watch: false,
    output: [
      ...baseConfig.output,
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named'
      }
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];
