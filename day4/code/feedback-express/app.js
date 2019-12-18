var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use('/public', express.static('./public'))

// 配置使用art-template模板引擎
// 第一个参数，表示，当渲染以 .art or .html 结尾的文件时，使用art-template模板引擎
// express-art-template 是专门用来在 Express中把 art-template整合到Express中
// 虽然这里不需要加载 art-template ，但是也需要安装，因为 express-art-template依赖了art-template
app.engine('html', require('express-art-template'));

// express 为Response 响应对象提供了一个方法：render
// render 方法默认是不可以使用的，但是配置了模板引擎就可以使用了
// 第一个参数不能写路径，默认会去项目中的 views 目录查找模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中

//配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())


var comments = [{
  name: '林良富',
  message: '今天天气不错！',
  dateTime: '2019-11-24'
}, {
  name: '林良富',
  message: '今天天气不错！',
  dateTime: '2019-11-24'
}]

app.get('/', function (req, res) {
  res.render('index.html', {
    comments_html: comments,
  })

  //===== test code =====
  // res.render('404.art') 
  //必须要把文件名改为.art
  // res.render('404.html')
  //=====  也可以在 app.engine('html',require()) 中将art改成html  =======
})

//======= test code ======
// app.get('/admin', (req, res) => {
//   // res.render('路径', {模板数据})
//   res.render('admin/index.html', {
//     title: '管理系统',
//     name: 'parkerllf'
//   })
// })

app.get('/post', function (req, res) {
  res.render('post.html')
})

//当以POST请求/post的时候，执行指定的函数
app.post('/post', (req, res) => {
  console.log('收到表单 post 请求了')
  //1.  获取表单POST 请求的数据
  //2.  处理
  //3.  发送响应 

  //req.query 只能拿 get 请求参数
  // console.log(req.query) //---> 空 {}
  var comment = req.body
  console.log(req.body)
  comment.dateTime = '2019-11-29'
  //入栈
  comments.unshift(comment)
  //重定向
  res.redirect('/')

})

// app.get('/pinglun', function (req, res) {
//   var comment = req.query
//   console.log(req.query)
//   comment.dateTime = '2019-11-29'
//   //入栈
//   comments.unshift(comment)
//   //重定向
//   res.redirect('/')
// })

app.listen(3000, function () {
  console.log('express is running at http://localhost:3000')
})