const express = require('express')
const posts = require('./posts')
const post = require('./post')

let router = express.Router()

router.get('/posts', function(req, res, next){
  res.send('posts')
})
router.get('/posts', posts)
router.get('/post', post)

module.exports = router
