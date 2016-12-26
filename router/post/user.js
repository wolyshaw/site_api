const models = require('../../models')
const userModel = models.user

var config = require('../../config/config')

module.exports = function(req, res, netx){
  let sendData
  if (!req.body.nice_name) {
    sendData = {
      code: 101,
      msg: '用户昵称有误'
    }
    res.send(sendData)
    return
  }
  console.log(546798089)
  const user = new userModel()
  user.nice_name = req.body.nice_name
  user.password = req.body.password
  user.email = req.body.email
  req.session.user = userData
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
      sendData.data.password = '*'
    }
  })
  res.send(sendData)
}
