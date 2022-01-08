const Router = require('koa-router')
const router = new Router()
/**
 * 
 */
router.get('/login', async (ctx, next) => {
  ctx.body = {
    msg: "OK",
    status: "200"
  }
})
module.exports =  router.routes()