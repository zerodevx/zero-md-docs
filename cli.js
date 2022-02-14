#!/usr/bin/env node
import { cosmiconfig } from 'cosmiconfig'
import { promises as fs } from 'node:fs'
import { build } from './index.js'

const { version } = JSON.parse(
  await fs.readFile(new URL('./package.json', import.meta.url), 'utf8')
)
if (process.argv.includes('--version')) {
  console.warn(version)
  process.exit()
}
const result = await cosmiconfig('zmdocs').search()
if (!result) {
  console.error('Error: no config found')
  process.exit(1)
}
await build(result.config)
