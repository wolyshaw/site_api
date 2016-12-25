const models = require('../../models')
const userModel = models.user

var config = require('../../config/config')

module.exports = function(req, res, netx){
  const user = new userModel()
  let userData = {
    nice_name: req.body.nice_name,
    avatar: req.body.avatar,
    url: req.body.url,
    email: req.body.email,
    paone: req.body.paone,
    name: req.body.name,
    bio: req.body.bio
  }
  req.session.user = userData
  res.send(userData)
  // user = userData
  // user.save(res.send('user'))
}
