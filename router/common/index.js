const express = require('express')
const token = require('./token')
const login = require('./login')
const logout = require('./logout')
const userinfo = require('./userinfo')

let router = express.Router()

router.post('/token', token)
router.post('/login', login)
router.post('/logout', logout)
router.post('/userinfo', userinfo)

module.exports = router
