var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

// var mysql = require('mysql')


var comments = [{
  name: '林良富',
  message: '今天天气不错！',
  dateTime: '2019-11-24'
}]

// /pinglun?name=的撒的撒&message=的撒的撒的撒
// 对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
// 所以你不可能通过去判断完整的 url 路径来处理这个请求
// 
// 结论：对于我们来讲，其实只需要判定，如果你的请求路径是 /pinglun 的时候，那我就认为你提交表单的请求过来了


//================ 服务器操作 ====================
http
  //创建服务器
  .createServer(function (req, res) {
    //使用url.parse 方法 将路径解析为
    var parseObj = url.parse(req.url, true)

    var pathname = parseObj.pathname

    if (pathname === '/') {
      //如果直接请求的是http://localhost:3000，就读取index.html
      fs.readFile('./views/index.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found!----> 1')
        }
        //使用模板引擎 var template = art-template
        //.render方法：就是渲染的意思
        var htmlStr = template.render(data.toString(), {
          //comments 就是上面定义的数组
          comments_html: comments
        })

        res.end(htmlStr)
      })

    } else if (pathname === '/post') {
      //index.html中的<a>标签中的href是'/post',当点击<a>标签时,请求的req.url就是/post
      //读取文件post.html
      fs.readFile('./views/post.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found!----> 3')
        }
        res.end(data)
      })

    } else if (pathname.indexOf('/public/') === 0) {
      //  /public/css/main.css
      //  /public/js/main.js
      //  /public/lib/jquery.js
      fs.readFile('.' + pathname, (err, data) => {
        //拼接字符串，并读取拼接后的字符串所指向的文件
        if (err) {
          return res.end('404 Not Found!----> 2')
        }
        res.end(data)
      })

    } else if (pathname === '/pinglun') {
      //我们已经使用url模块的parse方法把请求路径中的查询字符串给解析成了一个对象
      // 注意：这个时候无论 /pinglun?xxx 之后是什么，我都不用担心了，因为我的 pathname 是不包含 ? 之后的那个路径
      // 一次请求对应一次响应，响应结束这次请求也就结束了
      // console.log('收到表单请求', parseObj.query)
      // res.end(JSON.stringify(parseObj.query))

      // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
      // 所以接下来要做的就是：
      //    1. 获取表单提交的数据 parseObj.query
      //    2. 将当前时间日期添加到数据对象中，然后存储到数组中
      //    3. 让用户重定向跳转到首页 /
      //       当用户重新请求 / 的时候，我数组中的数据已经发生变化了，所以用户看到的页面也就变了
      var comment = parseObj.query
      comment.dateTime = '2019-11-25 00:16:23'
      // comments.push(comment)//尾部追加
      comments.unshift(comment)

      res.statusCode = 302
      res.setHeader('location', '/')
      res.end()

    } else {
      //如果请求的是文件目录中没有的，就返回错误信息
      fs.readFile('./views/404.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found!----> 3')
        }
        res.end(data)
      })
    }
  })


  //监听3000端口，并在终端输出 server is running...
  .listen(3000, () => {
    console.log('server is running... on ' + 'http://localhost:3000')
  })










//============ 测试代码:数据库传输到服务器---->失败！！！===============
//导入sql.js 并获取它的出口数据
// var sqlExports = require('./sql')

// var comments = sqlExports.data
// console.log('0000000' + sqlExports.data)
// console.log('=====================' + comments)

// //==============mysql数据库操作===================
// //创建一个connection
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '199612',
//   port: '3306',
//   database: 'test',
// });

// //2,连接
// connection.connect();
// //3.编写sql语句，进行增删查改操作
// var sql = 'select * from comments'

// connection.query(sql, (err, result) => {
//   if (err) {
//     onsole.log('[INSERT ERROR] - ', err.message);
//     return;
//   }
//   //设置导出，将获取到的数据转化成json格式，存入data变量，
//   var sql_data = JSON.stringify(result);
//   console.log('SQL查询输出：' + sql_data)

// })


// //5,连接结束
// connection.end();
// // console.log('查询结果：' + sqlinfo)