const express = require('express')
const config = require('./config/config')
const getRoute = require('./router/get')
const app = express()
let port = config.port || 3000

app.use('/get', getRoute)

app.listen(port, function(){
  console.log(`online in ${port}`)
})
