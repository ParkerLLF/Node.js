var http = require('http');

var fs = require('fs');

server = http.createServer();

var wwwDir = 'F:/www';

server.on('request', function (req, res) {
  var urls = req.url;
  //为了不让浏览器访问/favicon.ico
  if (req.url === '/favicon.ico') return;
  console.log(urls);

  fs.readFile('./template.html', function (err, data) {
    if (err) {
      return res.end('404 Not Found!');
    }
    // fs.readdir(wwwDir, function (err, files) {
    //   if (err) {
    //     console.log('can not find www dir');
    //   }
    //   console.log(files); //输出数组--->[ 'a.txt', 'apple', 'img', 'index.html' ]
    // });
    data = data.toString();
    res.end(data);
  });
});

server.listen(8888, function () {
  console.log('成功启动服务器...' + '请访问:http://localhost:8888');
});