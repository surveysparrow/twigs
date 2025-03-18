const { dts } = require('rollup-plugin-dts');
const baseConfig = require('./rollup.config.base');

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = [
  {
    ...baseConfig,
    watch: false,
    output: [
      ...baseConfig.output,
      // {
      //   dir: 'dist/cjs',
      //   format: 'cjs',
      //   sourcemap: true,
      //   preserveModules: true,
      //   preserveModulesRoot: 'src',
      //   exports: 'named'
      // }
    ]
  },
  // {
  //   input: 'src/index.ts',
  //   output: {
  //     file: 'dist/index.d.ts',
  //     format: 'es'
  //   },
  //   plugins: [
      
  //     dts({
  //     tsconfig: 'tsconfig.prod.json'
  //   })]
  // }
];
