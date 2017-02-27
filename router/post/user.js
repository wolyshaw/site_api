const models = require('../../models')
const userModel = models.user
const config = require('../../config/config')
let user = new userModel()
let postUser = {
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
    if (!req.body.password) {
      sendData = {
        code: 101,
        msg: '用户密码有误'
      }
      res.send(sendData)
      return
    }
    if (!req.body.email) {
      sendData = {
        code: 101,
        msg: 'email有误'
      }
      res.send(sendData)
      return
    }
    // if (userModel.find({$or: [{nice_name: req.body.nice_name}, {email: req.body.email}]})) {
    //   res.json({
    //     code: 103,
    //     msg: '该名称已存在'
    //   })
    //   return
    // }
    user.nice_name = req.body.nice_name
    user.password = req.body.password
    user.picture = req.body.picture
    user.email = req.body.email
    user.save((err, data)=>{
      if (err) {
        res.json({
          code: 102,
          msg: '数据保存错误'
        })
        return
      }
      req.session.user = data
      data.password = true
      res.json({
        code: 200,
        msg: '注册成功',
        data: data
      })
    })
  },
  update: function(req, res, next){
    userModel.findOne({nice_name: req.params.id}, (err, data) => {
      if (err) {
        res.json({
          code: 102,
          msg: '数据库出错',
          data: err
        })
        return
      }
      if (data) {
        data.password = true
        res.json({
          code: 200,
          msg: '获取成功',
          data: data
        })
        return
      }else{
        res.json({
          code: 101,
          msg: '无数据'
        })
        return
      }
    })
  }
}

module.exports = postUser
