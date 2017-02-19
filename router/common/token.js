const qiniu = require('qiniu')
const express = require('express')
const config = require('../../config/config')

qiniu.conf.ACCESS_KEY = config.qiniu.AccessKey
qiniu.conf.SECRET_KEY = config.qiniu.SecretKey

let token = function(req, res, next){
  if (!req.session.user) {
    res.send({
      msg: '请先登录',
      code: 100
    })
    return
  }
  let data = {}
  let uptoken = function(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key)
    return putPolicy.token()
  }

  let bucket = req.body.bucket || config.qiniu.bucket, key, qntoken, filePath,
    date = new Date(), year = date.getFullYear(), month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)

  key = year + '/' + month + '/' + req.file.originalname

  if (!req.file) {
    res.send({
      msg: '请选择图片, 并且只支持图片',
      code: 101
    })
    return
  }

  qntoken = uptoken(bucket, key)
  filePath = req.file.path


  let uploadFile = function (uptoken, key, localFile) {

    var extra = new qiniu.io.PutExtra()
      qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if(err) {
          data = {
            msg: '上传失败',
            code: 200
          }
        } else {
          data = {
            msg: '上传成功',
            code: 200,
            data: ret
          }
        }
      res.json(data)
    })
  }
  uploadFile(qntoken, key, filePath)
}

module.exports = token
