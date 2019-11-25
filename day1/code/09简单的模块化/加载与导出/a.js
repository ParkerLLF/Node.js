// require("./b");
// console.log(foo); //ReferenceError: foo is not defined
var fs = require("fs");
//=========================
var bExports = require("./b");

console.log(bExports.foo); //----> hello

console.log(bExports.add(50, 90)); //---->140

console.log(bExports.age);



fs.readFile("./a.js", function (error, data) {
  if (error) {
    console.log("文件读取失败了");
  } else {
    console.log(data); //二进制--><Buffer.....>
    console.log(data.toString()); //字符串-->a.js的所有代码
  }
});

// bExports.readFile("./a.js");