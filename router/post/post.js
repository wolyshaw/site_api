const models = require('../../models')
const postModel = models.post

var config = require('../../config/config')

module.exports = function(req, res, netx){

const post = new postModel()
  post.title = '123'
  post.content = '123'
  post.save(res.send('post'))
}
