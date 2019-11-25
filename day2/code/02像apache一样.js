var http = require('http');

var fs = require('fs');

server = http.createServer();

var wwwDir = 'F:/www';

server.on('request', function (req, res) {
  var urls = req.url;

  var filePath = '/index.html';
  if (urls !== '/') {
    filePath = urls;
  }

  //为了不让浏览器访问/favicon.ico
  if (req.url === '/favicon.ico') return;

  console.log(filePath, wwwDir + filePath);

  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      return res.end('404 Not Found');
    }
    res.end(data);
    console.log();
  });
});

server.listen(8888, function () {
  console.log('成功启动服务器...' + '请访问:http://localhost:8888');
});