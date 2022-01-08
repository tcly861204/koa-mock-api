const Mock = require('mockjs')
const Random = Mock.Random
Mock.Random.extend({
  phone: function () {
    var phonePrefixs = ['132', '135', '189']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  }
})
module.exports = (num = 100, fn) => {
  const pageNum = 1
  const pageSize = num
  const data = {
    msg: "OK",
    status: "110000",
    data: {
      total: `${num}`,
      pageNum,
      pageSize,
      list: []
    }
  }
  for (let i = 0; i < pageSize; i++) {
    const content = Random.cparagraph(0, 10)
    const image = Random.image('100x100', Random.color(), Random.word(2, 6))
    data.data.list.push(
      Mock.mock(fn({
        content,
        image,
        index: i
      }))
    )
  }
  return data
}
