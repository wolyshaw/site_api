const models = require('../../models')
const userModel = models.user
const config = require('../../config/config')
let user = new userModel()
let postUser = {
  findByName: function(name, next){
    userModel.findOne({nice_name: name}, (err, data) => {
      if (err) {
        throw err
        return
      }
      console.log(name, data)
      return data
    })
  },
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
    console.log(postUser.findByName(req.body.nice_name), 'postUser')
    if (postUser.findByName(req.body.nice_name)) {
      res.json({
        code: 103,
        msg: '该名称已存在'
      })
      return
    }
    user.nice_name = req.body.nice_name
    user.password = req.body.password
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
