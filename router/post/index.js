const express = require('express')
// const posts = require('./posts')
const post = require('./post')
const user = require('./user')

let router = express.Router()

// router.get('/posts', posts)
router.post('/post', post)
router.post('/user', user.create)
router.post('/user/:id', user.update)

module.exports = router
