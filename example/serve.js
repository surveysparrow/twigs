/* eslint-disable import/no-extraneous-dependencies */
const esbuild = require('esbuild');
const chokidar = require('chokidar');
const liveServer = require('live-server');

(async () => {
  const builder = await esbuild.build({
    bundle: true,
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    },
    entryPoints: ['index.tsx'],
    incremental: true,
    minify: process.env.NODE_ENV === 'production',
    outfile: 'public/script.js',
    sourcemap: true,
  });
  chokidar
    .watch(['src/**/*.{ts,tsx}', 'example/'], {
      interval: 0,
    })
    .on('all', () => {
      builder.rebuild();
    });
  liveServer.start({
    open: true,
    port: +process.env.PORT || 8080,
    root: 'public',
  });
})();
