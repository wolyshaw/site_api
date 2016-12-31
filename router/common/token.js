const qiniu = require('qiniu')
const express = require('express')
const config = require('../../config/config')

qiniu.conf.ACCESS_KEY = config.qiniu.AccessKey
qiniu.conf.SECRET_KEY = config.qiniu.SecretKey

let router = express.Router()

router.post('/token', function(req, res, next){
  if (req.session.user) {
    res.send({
      msg: '请先登录',
      code: 100
    })
    return
  }
  let data = {}
  let uptoken = function(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
    return putPolicy.token();
  }

  let bucket = req.body.bucket || config.qiniu.bucket, key,
    date = new Date(), year = date.getFullYear(), month = (date.getMonth() + 1),
    path = req.body.path

  if (!req.body.fileName) {
    res.send({
      msg: '请填写图片名称',
      code: 101
    })
    return
  }

  key = path ? path + '/' + req.body.fileName : year + '/' + month + '/' + req.body.fileName
  data = {
    msg: 'token获取成功',
    code: 200,
    data: {
      token: uptoken(bucket, key)
    }
  }

  res.json(data)
})

module.exports = router
