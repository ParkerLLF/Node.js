// 在 Node 中专门提供了一个核心模块：http
// http 这个模块的职责就是帮你创建编写服务器的

//1.加载http核心模块
var http = require('http');

//2.使用 http.createServer() 方法创建一个Web服务器，并传入回调函数:
//   返回一个Server 实例
var server = http.createServer();

// 3. 服务器要干嘛？
//    提供服务：对 数据的服务
//    发请求node
//    接收请求
//    处理请求
//    给个反馈（发送响应）
//    注册 request 请求事件
//    当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数：回调处理函数
server.on('request', function () {
  console.log('收到客户端的请求');
});

// 4. 绑定端口号，启动服务器,并监听端口号
server.listen(8888, function () {
  console.log("服务器已经启动：http://localhost:8888/");
  //ctrl+c 关闭服务器
});

// console.log("服务器已经启动：http://loaclhost:8888/");