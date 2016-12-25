const express = require('express')
const posts = require('./posts')
const post = require('./post')
const user = require('./user')

let router = express.Router()

router.get('/posts', posts)
router.get('/post', post)
router.get('/user:id', user)

module.exports = router
