//0.安装
//1.引包
var express = require('express')

//2.创建你服务器应用程序
//  也就是原来的http.createSever
var app = express()


//公开指定的目录
//只要这样子做了，你就可以直接通过/public/xx 的方式访问 public 目录中的所有资源
app.use('/public/', express.static('./public/'))
// 就可以在浏览器访问到：http://localhost:3000/public/js/main.js
// 就可以在浏览器访问到：http://localhost:3000/public/img/ab2.jpg
app.use('/static/', express.static('./static/'))
// 就可以在浏览器访问到：http://localhost:3000/static/main.css
app.use('/node_modules/', express.static('./node_modules/'))



//得到路径：比之前一个一个的判断好得多，更加优雅直观
//当服务器收到get请求 / 的时候，执行回调处理函数
app.get('/', function (req, res) {
  res.send('hello express!!!')
})
//当浏览器请求 /about 时 
app.get('/about', function (req, res) {
  res.send('about express')
})
//当浏览器请求 /pro 时 
app.get('/pro', function (req, res) {
  res.send('propro')
})


//相当于 server.listen
app.listen(3000, function () {
  console.log('app is running at port 3000, http://localhost:3000')
})