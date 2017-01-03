const express = require('express')
// const posts = require('./posts')
const post = require('./post')
const user = require('./user')

let router = express.Router()

router.post('/post', post.create)
router.post('/post/:id', post.update)
router.post('/user', user.create)
router.post('/user/:id', user.update)

module.exports = router
