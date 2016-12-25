var models       = require('../../models');
var userModel   = models.user
var config       = require('../../config/config')

module.exports = function(req, res, netx){
  userModel.find().exec((err, data)=>{
    res.send(data)
  })
}
