var models       = require('../../models');
var userModel   = models.user
var config       = require('../../config/config')

module.exports = function(req, res, netx){
  userModel.findOne({_id: req.body.id}).exec((err, data)=>{
    if (err) {
      res.json({
        msg: '数据库出错',
        code: 101,
        data: err
      })
      return
    }
    data.password = true
    res.json({
      msg: '获取成功',
      code: 200,
      data: data
    })
  })
}
