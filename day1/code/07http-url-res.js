var http = require('http');

// 1.创建Server
var server = http.createServer();

server.on('request', function (req, res) {
  console.log('收到请求，路径是：' + req.url);
  // res.write("6666"); //--->6666
  //告诉浏览器已经结束了---结束的同时传入数据
  //一个请求对应一个响应
  // res.end('hello node');

  var urls = req.url;

  // console.log(urls);
  // if (urls === '/') {
  //   res.end('index pages');
  // } else if (urls === "/login") {
  //   res.end('login page');
  // } else {
  //   res.end('404 Not Found');
  // }

  //---------------------------------------------
  var products = [{
    name: "Apple",
    price: 8999,
  }, {
    name: "OPPO",
    price: 4999,
  }, {
    name: "Mi",
    price: 2999,
  }]

  // JSON.stringify(); 将请求到的数据转换成json格式
  if (urls === '/products') {
    res.end(JSON.stringify(products));
  } else {
    res.end();
  }
  //----------------------------------------------
});
server.listen(3000, function () {
  console.log('服务器启动成功，http://localhost:3000');
});