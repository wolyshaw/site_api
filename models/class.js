const mongoose  = require('mongoose')
const Schema  = mongoose.Schema
const ObjectId  = Schema.ObjectId
const config    = require('../config/config')

var classSchema = new Schema({
  class_name: {
    type: String
  },
  describe: {
    type: String
  },
  picture: {
    type: String
  },
  alias: {
    type: String
  },
  create_by: {
    _id: {
      type: ObjectId
    },
    url: {
      type: String
    },
    avatar: {
      type: String
    },
    email: {
      type: String
    },
    name: {
      type: String
    },
    nice_name: {
      type: String
    },
    bio: {
      type: String
    },
    create_at: {
      type: Date,
      default: Date.now
    }
  },
  post_num: {
    type: Number,
    default: 0
  },
  create_at: {
    type: Date,
    default: Date.now
  },
  update_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    default: 21
  },
})

mongoose.model('class', classSchema)
