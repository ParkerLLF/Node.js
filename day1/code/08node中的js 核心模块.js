// 用来获取机器信息的
var os = require('os');

// 用来操作路径的
var path = require('path');

// 获取当前机器的 CPU 信息
console.log(os.cpus());

// memory 内存;
console.log("总的内存大小为：" + os.totalmem() + " 字节");
var mem = os.totalmem / 1024 / 1024 / 1024;
console.log("总的内存大小为：" + mem + " GB");
mem = mem.toFixed(2); //保留两位小数
console.log("总的内存大小为：" + mem + " GB");

// 获取一个路径中的扩展名部分
// extname extension name
console.log("文件拓展名为：" + path.extname('c:/a/b/c/d/hello.txt'));