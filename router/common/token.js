const qiniu = require('qiniu')
const express = require('express')
const config = require('../../config/config')

qiniu.conf.ACCESS_KEY = config.qiniu.AccessKey
qiniu.conf.SECRET_KEY = config.qiniu.SecretKey

let router = express.Router()

router.post('/token', function(req, res, next){
  let data = {}
  let uptoken = function(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
    return putPolicy.token();
  }
  if (!req.body.name) {
    data.msg = '请填写图片名称字段为name2'
    data.code = 101
    res.json(data)
  }
  if (!req.body.path) {
    data.msg = '请选择路径'
    res.json(data)
  }

  let bucket = config.qiniu.bucket

  let key = req.body.path + '/' + req.body.name

  data = {
    msg: 'token获取成功',
    code: 200,
    data: {
      token: uptoken(bucket, key)
    }
  }
  res.json(data)
  res.header('Access-Control-Allow-Origin', '*')
})

module.exports = router
