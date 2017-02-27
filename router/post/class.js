const models = require('../../models')
const classModel = models.class
const util = require('../../util')
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
    if (!req.body.class_name) {
      res.json({
        msg: '分类名称必填',
        code: 100
      })
      return
    }
console.log(util.onlyClass(req, classModel))
    // if (onlyClass) {
    //   res.json({
    //     code: 103,
    //     msg: '该名称已存在'
    //   })
    //   return
    // }
    if (!req.body.alias) {
      res.json({
        msg: '分类别名必填',
        code: 100
      })
      return
    }
    let cla = new classModel({
      class_name: req.body.class_name,
      alias: req.body.alias,
      picture: req.body.picture,
      author: req.session.user
    })
    cla.save((err, data) => {
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
