const models = require('../../models')
const postModel = models.post
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
    let post = new postModel({
      title: req.body.title,
      content: req.body.content,
      summary: req.body.summary,
      author: req.session.user
    })
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
    res.json({code: 100, mas: 'err123'})
  }
}
