const models = require('../../models')
const postModel = models.post

var config = require('../../config/config')

module.exports = function(req, res, netx){

  let sendData
  if (req.session.user) {
    const post = new postModel()
    post.title = req.body.title
    post.content = req.body.content
    post.author = req.session.user.author
    post.save(() => {
      sendData = {
        msg: '提交成功',
        code: 201,
        data: post
      }
    })
  }else{
    sendData = {
      msg: '未登录请重新登录或者注册',
      code: 204
    }
  }
  res.send(sendData)
}
