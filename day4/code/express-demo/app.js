var express = require('express')

var app = express()

//当以/public/ 开头的时候，去./public/目录中找对应的文件
// --> http://localhost:3000/public/login.html
// app.use('/public/', express.static('./public/'))

//必须是/a/public目录中的资源具体路径
//  --> http://localhost:3000/a/js/a.js
app.use('/a/', express.static('./public/'))

//当省略第一个参数的时候，则可以通过省略 /public的方式来访问
// http://localhost:3000/login.html
// app.use(express.static('./public'))

app.get('/', function (req, res) {
  // res.write('hello')
  // res.write('world')

  res.send('hello world')
})

app.listen(3000, () => {
  console.log("express is running... http://localhost:3000")
})