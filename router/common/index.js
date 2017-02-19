const express = require('express')
const token = require('./token')
const login = require('./login')
const logout = require('./logout')
const userinfo = require('./userinfo')
const multer  = require('multer')

const fileFilter = function(req, file, cb) {
  cb(null, /\image/.test(file.mimetype))
}

const upload = multer({
  dest: 'uploads/',
  fileFilter: fileFilter
})

let router = express.Router()

router.post('/token', upload.single('file'), token)
router.post('/login', login)
router.post('/logout', logout)
router.post('/userinfo', userinfo)

module.exports = router
