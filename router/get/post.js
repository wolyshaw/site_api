var models = require('../../models')
var config = require('../../config/config')
var postModel = models.post

module.exports = (req, res, netx) => {
  postModel.findOne({_id: req.body.id}).exec((err, data) => {
    if (err) {
      res.json({
        msg: '数据库出错',
        code: 101,
        data: err
      })
      return
    }
    res.json({
      msg: '获取成功',
      code: 200,
      data: data
    })
  })
}
