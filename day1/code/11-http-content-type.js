var http = require('http');
var server = http.createServer();
server.on('request', function (req, res) {
  // 在服务端默认发送的数据，其实是 utf8 编码的内容
  // 但是浏览器不知道你是 utf8 编码的内容
  // 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
  // 中文操作系统默认是 gbk
  // 解决方法就是正确的告诉浏览器我给你发送的内容是什么编码的
  // 在 http 协议中，Content-Type 就是用来告知对方我给你发送的数据内容是什么类型

  // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  // text/plain 就是普通文本
  // res.end('hello 世界')

  // 如果你发送的是 html 格式的字符串，则也要告诉浏览器我给你发送是 text/html格式的内容
  var urls = req.url;

  if (urls === "/plain") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end('hello 世界');
  } else if (urls === "/html") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1 style='color:red;text-align: center;font-size: 60px;'><a href='http://www.baidu.com'>你好 world</a></h2>");
  } else {
    res.end("welcome to index page");
  }

});

server.listen(3000, function () {
  console.log("启动成功" + "请访问：http://localhost:3000");
});