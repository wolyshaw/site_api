const express = require('express')
// const posts = require('./posts')
const post = require('./post')
const user = require('./user')
const postClass = require('./class')

let router = express.Router()

router.post('/post', post.create)
router.post('/post/:id', post.update)
router.post('/user', user.create)
router.post('/user/:id', user.update)
router.post('/class', postClass.create)
router.post('/class/:id', postClass.update)

module.exports = router
