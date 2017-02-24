#### site_api
```
*
├── config                  // 配置文件目录
│   └── config_default.js   // 默认配置文件
├── models                  // mongodb模型目录
│   ├── class.js
│   ├── index.js
│   ├── post.js
│   └── user.js
├── package.json
├── router                 // 路由文件目录
│   ├── common             // 公共路由
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── logout.js
│   │   ├── token.js
│   │   └── userinfo.js
│   ├── get                // 获取数据路由
│   │   ├── class.js
│   │   ├── index.js
│   │   ├── post.js
│   │   ├── posts.js
│   │   └── user.js
│   └── post               // 提交或修改数据路由
│       ├── class.js
│       ├── index.js
│       ├── post.js
│       └── user.js
├── uploads               // 上传文件存放目录
│   └── README.md
├── util                  // 工具文件
│   └── index.js
├── README.md
└── app.js
```

* 本框架根据请求不同路径与不同参数返回数据
* 返回数据示范
```
  {
    code: 200,
    msg: '消息',
    data: {}
  }
```
* 返回错误范例
```
  {
    code: 100,
    msg: '消息'
  }
```
* code
 - 1xx为错误
  - 101 参数错误
  - 111 未找到数据
 - 2xx为正常
  - 200 为正常
