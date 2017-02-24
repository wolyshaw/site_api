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
require('./class')

exports.user = mongoose.model('user')
exports.post = mongoose.model('post')
exports.class = mongoose.model('class')
