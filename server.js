const Koa = require('koa')
const app = new Koa()
const KoaStatic = require('koa-static')
app.use(KoaStatic('./apidoc'))
app.listen(3002, () => {
  console.log('server runing localhost:3002')
})