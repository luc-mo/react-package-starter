import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/bundler/index.ts'],
  injectStyle: false,
  clean: true,
  dts: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  treeshake: true,
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom', 'tailwindcss'],
  tsconfig: './tsconfig.build.json',
})