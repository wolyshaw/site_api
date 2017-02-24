const express = require('express')
const posts = require('./posts')
const post = require('./post')
const user = require('./user')
const getClass = require('./class')

let router = express.Router()

router.post('/posts', posts)
router.post('/post', post)
router.post('/user', user)
router.post('/classlist', getClass.list)
router.post('/class', getClass.item)

module.exports = router
