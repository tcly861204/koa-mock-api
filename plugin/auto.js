const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const router = new Router()
const autoRoutes = function (dir, childRouter = null) {
  if (!fs.statSync(dir)) {
    return console.log('目录不存在')
  }
  const files = fs.readdirSync(dir)
  files.forEach((_path, index) => {
    const itemPath = path.resolve(dir, _path)
    const state = fs.statSync(itemPath)
    if (state.isFile()) {
      const prefix = path.parse(dir).name
      childRouter.use(`/${prefix}`, require(itemPath))
      if (files.length === index + 1) {
        router.use('/mock', childRouter.routes())
      }
    } else if (state.isDirectory()) {
      const childRouter = new Router()
      autoRoutes(itemPath, childRouter)
    }
  })
}
module.exports = function (app) {
  autoRoutes(path.resolve(__dirname, '../router'))
  app.use(router.routes()).use(router.allowedMethods())
  return router
}