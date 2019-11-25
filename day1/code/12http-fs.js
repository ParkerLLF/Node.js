// 1. 结合 fs 发送文件中的数据
// 2. Content-Type
//    http://tool.oschina.net/commons
//    不同的资源对应的 Content-Type 是不一样的
//    图片不需要指定编码
//    一般只为字符数据才指定编码
var http = require("http");

var fs = require("fs");

var server = http.createServer();

server.on('request', function (req, res) {

  var urls = req.url;
  //1.if(urls==="/")------> index.html
  //2.if(urls==="/baby")----> ab2.jpg
  if (urls === "/baby") {
    // 动态的读取数据，index.html文件中的改变不影响服务器，不需要重启服务器
    //fs.readFile("./resource/index.html")
    fs.readFile("./resource/ab2.jpg", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("读取文件失败，请稍后重试！");
      } else {
        //data ---> <Buffer  >
        // res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Content-Type", "image/jpeg; ");

        // res.end(toString(data));
        res.end(data);
      }
    });
  } else {
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end("welcome to index page" + "请访问：http://localhost:3000/baby");
  }
});

server.listen(3000, function () {
  console.log("启动成功" + "请访问：http://localhost:3000");
});