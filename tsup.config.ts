import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    compilerOptions: {
      moduleResolution: 'bundler',
      jsx: 'react-jsx',
      paths: {
        '@/*': ['./src/*'],
      },
    },
  },
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  minify: true,
  treeshake: true,
});

