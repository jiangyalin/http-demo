const path = require('path')
const express = require('express')
const app = express()
const pkg = require('./package')
const routes = require('./routes/')
const bodyParser = require('body-parser')

// 路由重定向不能与接口同时使用
// app.use(history());

// 跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  // res.header('Access-Control-Allow-Headers', '')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH')

  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

app.use(express.static(path.join(__dirname, 'static')))

app.locals.blog = {
  title: pkg.name,
  description: pkg.description
}

app.use(bodyParser.json({limit: '50mb'})) // 设置最大提交值
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
// app.use(formidable({ multiples: true }))

routes(app)

const port = 8080
app.listen(port, function () {
  console.log('服务启动' + port)
})

