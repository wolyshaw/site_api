const models = require('../../models')
const postModel = models.post
var config = require('../../config/config')

module.exports = {
  create: (req, res, netx) => {
    if (!req.session.user) {
      res.json({
        msg: '未登录请重新登录或者注册',
        code: 100
      })
      return
    }
    if (!req.body.title) {
      res.json({
        msg: '文章标题必填',
        code: 100
      })
      return
    }
    if (!req.body.content) {
      res.json({
        msg: '文章内容必填',
        code: 100
      })
      return
    }
    let post = new postModel({
      title: req.body.title,
      content: req.body.content,
      summary: req.body.summary,
      picture: req.body.picture,
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
  update: (req, res, next) => {
    res.json({code: 100, mas: 'err123'})
  }
}
