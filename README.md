#### site_api

* 本框架根据请求不同路径与不同参数返回数据
 * 返回数据示范
`
  {
    code: 200,
    msg: '消息',
    data: {}
  }
`
* 返回错误范例
`
  {
    code: 100,
    msg: '消息'
  }
`
* code,
 - 1xx为错误
  - 101 参数错误
  - 111 未找到数据
 - 2xx为正常
  - 200 为正常
