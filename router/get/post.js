var models       = require('../../models');
var postModel   = models.post
var config       = require('../../config/config')

module.exports = function(req, res, netx){
  console.log(req.session)
  postModel.find().exec((err, data)=>{
    res.send(data)
  })
}
