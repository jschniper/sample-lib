const esbuild = require('esbuild');

const PUBLIC_DIR = './dist';
const PORT = parseInt(process.env.PORT);
const ESBUILD_CONFIG = {
  bundle: true,
  entryPoints: ['./index.js'],
  outdir: `${PUBLIC_DIR}`,
  sourcemap: true
};

esbuild
  .build({
    ...ESBUILD_CONFIG
  })
  .catch(() => {
    process.exit(1);
  });
