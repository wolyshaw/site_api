const models = require('../../models')
const userModel = models.user

let logout = function(req, res, next){
  req.session.user = undefined
  res.json({
    msg: '您已安全退出登录',
    code: 200
  })
}

module.exports = logout
