const mongoose = require('mongoose')
const config   = require('../config/config')

mongoose.connect(config.db, {
  server: {poolSize: 20}
}, function (err) {
  if (err) {
    logger.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

require('./user')
require('./post')
// require('./reply');
// require('./topic_collect');
// require('./message');
//
exports.user = mongoose.model('user')
exports.post = mongoose.model('post')
// exports.Reply        = mongoose.model('Reply');
// exports.TopicCollect = mongoose.model('TopicCollect');
// exports.Message      = mongoose.model('Message');
