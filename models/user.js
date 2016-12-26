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
      default: '//tucdn.abcdea.com/1/1.png'
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
    nice_name: {
      type: String
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

mongoose.model('user', userSchema)
