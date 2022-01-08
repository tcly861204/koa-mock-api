const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./plugin/auto')(app)
const port = 3001
app.use(bodyParser())
app.use(router.routes())
  .use(router.allowedMethods())
app.listen(port, () => {
  console.log('server runing 3001')
})
