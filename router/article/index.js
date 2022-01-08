const Router = require('koa-router')
const router = new Router()
const Mock = require('mockjs')
const Random = Mock.Random
const randomData = require('../../libs/util')
/**
 * 
 */
router.get('/list', async (ctx, next) => {
  const data = randomData(100000, ({ content, image, index }) => {
    return {
      'index': index + 1,
      'id|+1': Random.id(), // 数字从当前数开始后续依次加一
      'title': Random.cword(8, 20),
      'desc': content,
      'name': '@cname', // 名字为随机中文名字
      'sex|1': ['男', '女'], // 性别是数组中的一个，随机的
      'job|1': ['web', 'UI', 'python', 'php'], // 工作是数组中的一个
      'region': Random.region(),
      'createTime': Random.datetime(),
      'updateTime': Random.datetime(),
      'time': Random.time(),
      'image': image
    }
  })
  ctx.body = data
})

module.exports =  router.routes()