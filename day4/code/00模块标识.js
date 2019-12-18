var fs = require('fs')

fs.readFile('data/a.txt', (err, data) => {
  if (err) {
    return console.log('读取失败')
  }
  console.log(data.toString()) //hello node.js
})

// 在模块加载中， 相对路径中的. / 不能省略
// require('data/foo.js')
// 报错： Error: Cannot find module 'data/foo.js'

require('./data/foo')('hello') //输出：hello

//输出结果：
// hello
// hello node.js
//输出顺序的原因：异步api




// 在文件操作的相对路径中
//    ./data/a.txt  相对于当前目录
//    data/a.txt    相对于当前目录
//    /data/a.txt   绝对路径，当前文件模块所处磁盘根目录
//    F:/xxx/xxx/.  绝对路径
// fs.readFile('/data/a.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//     console.log('读取失败')
//   }
//   console.log(data.toString())
// })
// 如果文件路径忘记了加'.',那么就会去文件的根目录寻找 ---输出---> [Error: ENOENT: no such file or directory, open 'F:\data\a.txt']




//也不能省略 "."
// require('./data/foo.js')