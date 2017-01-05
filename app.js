const express = require('express')
const config = require('./config/config')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const commonRoute = require('./router/common')
const getRoute = require('./router/get')
const postRoute = require('./router/post')
const app = express()
let port = config.port || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  name: 'site_api',
  secret: config.sessionSecret,
  cookie: { maxAge: 60 * 1000 }
}))

if(config.debug){
  app.post('*', function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
  })
}

app.use(config.path + '/', commonRoute)
app.use(config.path + '/get', getRoute)
app.use(config.path + '/post', postRoute)

app.listen(port, function(){
  console.log(`online in ${port}, api_site root path is ${config.path}`)
})
