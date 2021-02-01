import typescript from '@rollup/plugin-typescript'
import {readdirSync} from 'fs'
import {join} from 'path'

const themes = join(__dirname, 'theme')

const config = readdirSync(themes).map((f) => ({
  input: join(themes, f),
  output: [{
    format: 'esm',
    dir: './dist/theme',
    externalLiveBindings: false,
  }],
  plugins: [typescript()],
  external: id => id != 'tslib' && !/^(\.?\/|\w:)/.test(id),
}))

export default [{
  input: './index.ts',
  output: [{
    format: 'esm',
    dir: "./dist",
    externalLiveBindings: false,
  }],
  plugins: [typescript()],
  external: id => id != 'tslib' && !/^(\.?\/|\w:)/.test(id),
}, ...config]
