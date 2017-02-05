const express = require('express')
const posts = require('./posts')
const post = require('./post')
const user = require('./user')

let router = express.Router()

router.post('/posts', posts)
router.post('/post', post)
router.post('/user/:id', user)

module.exports = router
