const models = require('../../models')
const postModel = models.post
var config = require('../../config/config')

module.exports = function(req, res, netx){
  postModel.find({}).sort({'_id':-1}).limit(10).exec((err, data)=>{
    res.json({
      msg: '获取成功',
      code: 200,
      data: data
    })
  })
}
