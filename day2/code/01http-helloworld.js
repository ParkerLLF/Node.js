var http = require('http');

var fs = require('fs');

server = http.createServer();

var wwwDir = 'F:/www';

server.on('request', function (req, res) {
  var urls = req.url

  if (urls === '/') {
    fs.readFile(wwwDir + '/index.html', function (err, data) {
      if (err) {
        //return 结束执行
        return res.end('404 Not Found');
      }
      res.end(data);
    });

  } else if (urls === '/a.txt') {
    fs.readFile(wwwDir + '/a.txt', function (err, data) {
      //读取失败处理
      if (err) {
        return res.end('Sorry! something is break!');
      }
      res.end(data);
    });

  } else if (urls === '/index.html') {
    fs.readFile(wwwDir + '/index.html', function (err, data) {
      //读取失败处理
      if (err) {
        return res.end('Sorry! something is break!');
      }
      res.end(data);
    });

  } else if (urls === '/apple/login.html') {
    fs.readFile(wwwDir + '/apple/login.html', function (err, data) {
      //读取失败处理
      if (err) {
        return res.end('Sorry! something is break!');
      }
      res.end(data);
    });

  }

});

server.listen(8888, function () {
  console.log('成功启动服务器...' + '请访问:http://localhost:8888');
});