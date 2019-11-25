//1.加载http核心模块
var http = require('http');

var server = http.createServer();

// request 请求事件处理函数，需要接收两个参数：
//    Request 请求对象
//        请求对象可以用来获取客户端的一些请求信息，例如请求路径
//    Response 响应对象
//        响应对象可以用来给客户端发送响应消息

server.on('request', function (request, response) {
  console.log('收到客户端的请求,请求路径是：' + request.url);
  // console.log('收到客户端的请求,请求路径是：' + request.method + request.url);

  //request.method ---> GET or POST
  // 浏览器地址栏输入以下
  // http: //localhost:8888/ ----> 收到客户端的请求,请求路径是: / (默认是/)
  // http: //localhost:8888/a ----> 收到客户端的请求,请求路径是：/a
  // http: //localhost:8888/b ----> 收到客户端的请求,请求路径是: /b
  // http: //localhost:8888/a/bbb ----> 收到客户端的请求,请求路径是: /a/bbb

  response.write("<h1>hello</h1>");
  response.write("<h1>Node.js</h1>");

  response.end();

});

server.listen(8888, function () {

  console.log("服务器已经启动：http://localhost:8888/");
  //ctrl+c 关闭服务器
});