const models = require('../../models')
const userModel = models.user
const config = require('../../config/config')

let login = function(req, res, next){
  console.log(req.cookies)
  if (req.session.user) {
    res.json({
      msg: '您已登录',
      code: 101
    })
    return
  }
  if (!req.body.nice_name) {
    res.json({
      msg: '请输入用户名',
      code: 101
    })
    return
  }
  if (!req.body.password) {
    res.json({
      msg: '请输入密码',
      code: 101
    })
    return
  }
  userModel.findOne({nice_name: req.body.nice_name}, (err, data) => {
    if (err) {
      res.json({
        msg: '数据库出错',
        code: 102
      })
      return
    }
    if (!data || data.password !== req.body.password) {
      res.json({
        msg: '账号或密码错误',
        code: 102
      })
      return
    }
    data.password = true
    req.session.user = data
    res.json({
      msg: '登录成功',
      code: 200,
      data: data
    })
  })
}

module.exports = login
