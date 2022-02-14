import bs from "browser-sync"
import { cosmiconfig } from "cosmiconfig"
import { build } from './index.js'

const tplPath = `template/${process.argv[2] || 'default'}`
const getConf = async () => (await cosmiconfig('zmdocs').search(tplPath)).config
const rebuild = async () => await build(await getConf())
const server = bs.create()

await rebuild()

server.init({
  server: {
    baseDir: tplPath,
    routes: {
      '/docs': 'test/fixtures'
    }
  },
  startPath: '/docs/'
})

server.watch(`${tplPath}/**`).on('change', async () => {
  await rebuild()
  server.reload()
})
