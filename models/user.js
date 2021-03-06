const mongoose  = require('mongoose')
const Schema  = mongoose.Schema
const ObjectId  = Schema.ObjectId
const config    = require('../config/config')

var userSchema = new Schema({
    author_id: {
      type: ObjectId
    },
    avatar: {
      type: String,
      default: '//dn-abcdea.qbox.me/1/1.png'
    },
    url: {
      type: String
    },
    email: {
      type: String
    },
    paone: {
      type: String
    },
    name: {
      type: String
    },
    picture: {
      type: String
    },
    nice_name: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    bio: {
      type: String
    },
    status: {
      type: Number,
      default: 21
    },
    create_at: {
      type: Date,
      default: Date.now
    },
    update_at: {
      type: Date,
      default: Date.now
    }
})

userSchema.index({nice_name: 1,cellPhone:1,sender:1,tag:1,behaviour:1}, {unique: true})

mongoose.model('user', userSchema)
