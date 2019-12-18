/**
 * app.js 入门模块
 * 职责：
 *   创建服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单 post 请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */
var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var router = require("./router")
var bodyParser = require('body-parser')

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

//配置模板引擎
app.engine('html', require('express-art-template'))

//配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体），
// 一定要在app.use(router)挂载路由之前
app.use(bodyParser.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())

//接--->router.js 
//  4.把路由容器挂载到 app 服务中
app.use(router)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})