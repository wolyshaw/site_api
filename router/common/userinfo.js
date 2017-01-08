let userinfo = function(req, res, next){
  if (!req.session.user) {
    res.json({
      msg: '暂未登录',
      code: 100
    })
    return
  }
  res.json({
    msg: '',
    code: 200,
    data: req.session.user
  })
}

module.exports = userinfo
