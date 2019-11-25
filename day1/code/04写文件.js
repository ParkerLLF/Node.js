var fs = require('fs'); //引入fs模块

//写入文件，路径是./data/xxx.xx, 第二个参数是文件的内容，第三个参数是回调函数
fs.writeFile('./data/hi.md', '你好，我是node.js',
  function (error, data) {
    //如果写入失败了，那么error的值为true
    if (error) {
      console.log('写入失败！');
    } else {
      console.log('写入成功！');
    }
  });

//读取上面写入的文件
fs.readFile('./data/hi.md', function (error, data) {
  //如果读取失败了，那么error的值为true
  if (error) {
    console.log('读取失败！');
  } else {
    // toString()将二进制或者十六进制转换为字符串；
    console.log('读取出来的数据是：' + data.toString());
  }
});