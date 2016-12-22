const express = require('express')
const config = require('./config/config')
const bodyParser = require('body-parser')
const commonRoute = require('./router/common/token')
const getRoute = require('./router/get')
const app = express()
let port = config.port || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', commonRoute)
app.use('/get', getRoute)

app.listen(port, function(){
  console.log(`online in ${port}`)
})
