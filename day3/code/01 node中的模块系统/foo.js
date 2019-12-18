var foo = 'bar'

function add(x, y) {
  return x + y;
}

//空对象 不行
// exports = add 

// 如果一个模块需要直接导出某个成员，而非挂载的方式
// 那这个时候必须使用下面这种方式
module.exports = 'hello'

module.exports = function (x, y) {
  return x + y
}

module.exports = {
  add: function () {
    return x + y
  },
  str: 'hello'
}

// exports.add = add

// exports.str = 'hello'