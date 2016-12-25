const mongoose  = require('mongoose')
const Schema  = mongoose.Schema
const ObjectId  = Schema.ObjectId
const config    = require('../config/config')

var postSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  author: {
    author_id: {
      type: ObjectId
    },
    url: {
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
    reg_date: {
      type: Date,
      default: Date.now
    }
  },
  reply_count: {
    type: Number,
    default: 0
  },
  visit_count: {
    type: Number,
    default: 0
  },
  collect_count: {
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
  last_reply: {
    type: ObjectId
  },
  last_reply_at: {
    type: Date,
    default: Date.now
  },
  content_is_html: {
    type: Boolean
  },
  ctegory: {
    type: String
  },
  tags: {
    type: String
  },
  status: {
    type: Number,
    default: 21
  },
})

mongoose.model('post', postSchema)