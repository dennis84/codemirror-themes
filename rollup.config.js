import typescript from '@rollup/plugin-typescript'

export default {
  input: './index.ts',
  output: [{
    format: 'esm',
    dir: "./dist",
    externalLiveBindings: false,
  }, {
    format: 'cjs',
    file: './dist/index.cjs',
  }],
  plugins: [typescript()],
  external: id => id != "tslib" && !/^(\.?\/|\w:)/.test(id),
}
