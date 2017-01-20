const models = require('../../models')
const postModel = models.post
const post = new postModel()
var config = require('../../config/config')

module.exports = {
  create: function(req, res, netx){
    if (!req.session.user) {
      res.json({
        msg: '未登录请重新登录或者注册',
        code: 100
      })
      return
    }
    console.log(req.body)
    post.title = req.body.title
    post.content = req.body.content
    post.author = req.session.user
    post.save((err, data) => {
      if (err) {
        res.json({
          msg: '数据库出错',
          code: 101,
          data: err
        })
        return
      }
      res.json({
        msg: '提交成功',
        code: 200,
        data: data
      })
    })
  },
  update: function(req, res, next){
    console.log(req.session.user)
    console.log(post.update)
    res.json({code: 100, mas: 'err123'})
  }
}
