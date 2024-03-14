const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const esbuild = require('rollup-plugin-esbuild').default;
const alias = require('@rollup/plugin-alias');
const path = require('path');
const fs = require('fs');
const replace = require('@rollup/plugin-replace');
const packageJson = require('./package.json');

const projectRootDir = path.resolve(__dirname);

const pathCache = {};

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: 'src/index.ts',
  watch: true,
  /**
   * @type {import('rollup').OutputOptions[]}
   */
  output: [
    {
      dir: 'dist/es',
      format: 'es',
      sourcemap: true,
      esModule: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named'
    }
  ],
  external: [...Object.keys(packageJson.peerDependencies)],
  plugins: [
    external(),
    replace({
      'import.meta.env': 'process.env',
      'import.meta.env.MODE': 'process.env.NODE_ENV',
      preventAssignment: false
    }),
    resolve(),
    commonjs(),
    alias({
      entries: [
        {
          find: '@src',
          replacement: path.resolve(projectRootDir, 'src'),
          customResolver: (p) => {
            if (pathCache[p]) {
              return pathCache[p];
            }

            if (fs.lstatSync(p).isDirectory()) {
              if (fs.existsSync(path.resolve(p, 'index.ts'))) {
                pathCache[p] = path.resolve(p, 'index.ts');
                return path.resolve(p, 'index.ts');
              }
              if (fs.existsSync(path.resolve(p, 'index.tsx'))) {
                pathCache[p] = path.resolve(p, 'index.tsx');
                return path.resolve(p, 'index.tsx');
              }
            }

            return p;
          }
        }
      ]
    }),
    esbuild({
      include: /\.[jt]sx?$/,
      exclude: /node_modules/,
      sourceMap: true,
      target: 'es2017',
      jsx: 'transform',
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      tsconfig: 'tsconfig.prod.json',
      loaders: {
        '.json': 'json',
        '.js': 'jsx'
      }
    }),
    postcss()
  ]
};
