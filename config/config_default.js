module.exports = {
  // 服务运行端口，如不填默认8000
  port: 8000,
  // api运行目录名称，默认根目录
  path: '',
  // 是否在测试环境
  debug: true,
  // mongodb数据库地址
  db: '',
  // 管理员
  admin: [],
  // 网站地址
  url: '',
  // sessionSecret 文字
  sessionSecret: ''
  // 七牛云存储token，与上传空间名称
  qiniu: {
    AccessKey: '',
    SecretKey: '',
    bucket: ''
  }
}
