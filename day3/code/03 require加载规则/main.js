require('./a')
// require('./b
//结果：
//     a.js被加载了
//     b.js被加载了
//===================

// require('./b')
// require('./a')
// 结果：
//      b.js被加载了
//      a.js被加载了

var fn = require('./b')

console.log(fn)