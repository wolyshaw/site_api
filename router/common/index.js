const express = require('express')
const token = require('./token')
const login = require('./login')
const logout = require('./logout')

let router = express.Router()

router.post('/token', token)
router.post('/login', login)
router.post('/logout', logout)

module.exports = router
