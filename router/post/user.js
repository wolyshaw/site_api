const models = require('../../models')
const userModel = models.user
const config = require('../../config/config')
const user = new userModel()
module.exports = {
  create: function(req, res, netx){
    let sendData
    if (!req.body.nice_name) {
      sendData = {
        code: 101,
        msg: '用户昵称有误'
      }
      res.send(sendData)
      return
    }
    user.nice_name = req.body.nice_name
    user.password = req.body.password
    user.email = req.body.email
    user.session.user = user
    user.save((err, data)=>{
      if (err) {
        sendData = {
          code: 102,
          msg: '数据保存错误'
        }
      }else{
        sendData = {
          code: 200,
          msg: '数据保存成功',
          data: data
        }
      }
    })
    res.send(sendData)
  },
  update: function(req, res, next){
    userModel.findOne({nice_name: req.params.id}, (err, data) => {
      if (err) {
        res.send({
          code: 101,
          msg: '数据库出错',
          data: err
        })
        return
      }else{
        if (data) {
          data.password = true
          res.send({
            code: 200,
            msg: '获取成功',
            data: data
          })
          return
        }else{
          res.send({
            code: 101,
            msg: '无数据'
          })
          return
        }
      }
    })
  }
}
