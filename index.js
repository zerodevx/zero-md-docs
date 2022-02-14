import ejs from 'ejs'
import { promises as fs } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function build(config) {
  await Promise.all(config.links.map(async i => {
    const tpl = path.join(__dirname, 'template', config._template, 'index.ejs')
    const data = { ...config, _title: i.title }
    const out = await ejs.renderFile(tpl, data)
    await fs.writeFile(path.join(i.dir, 'index.html'), out, 'utf-8')
  }))
}
