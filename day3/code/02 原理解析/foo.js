//在Node中，每个模块内都有一个自己的module对象
//该module对象中，有一个成员叫：exports 也是一个对象
//也就是

// var module = {
//   exports: {

//   }
// }


// module.exports.foo = 'bar'
// module.exports.add = function (x, y) {
//   return x + y
// }

//=========================================================
//也就是说在模块中还有这么一句代码
// var exports = module.exports
//两者是一致的，可以使用任意一种来到出接口成员
// console.log(module.exports === exports) //-----> true

//=========================================================
// exports.foo = 'bar'
// module.exports = 'bar'
// module.exports.add = function (x, y) {
//   return x + y
// }
//运行main.js ----> { foo: 'bar', add: [Function] }


//当一个模块需要到处单个成员的时候
//直接给exports 赋值是不管用的
exports.a = 123

exports = {}

exports.foo = 'bar'

// 谁来 require 我，谁就得到 module.exports
//默认在代码的最后一句加上：
//  return module.exports