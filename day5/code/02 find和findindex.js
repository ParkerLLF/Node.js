// EcmaScript 6 对数组新增了很多方法
//  find
//  findIndex

//find 接收到一个方法作为参数，方法内部返回一个条件
//find 会遍历所有的元素，执行你给定的带有条件返回值的函数
//符合该条件的元素会作为 find 方法的返回值
//如果遍历结束还没有符合该条件的元素，则返回 undefined

var users = [{
  id: 1,
  name: 'zhangsan'
}, {
  id: 2,
  name: 'zhangsan'
}, {
  id: 3,
  name: 'zhangsan'
}, {
  id: 4,
  name: 'zhangsan'
}]

Array.prototype.myfind = function (conditionFunc) {
  // var conditionFunc = function (item, index) {
  //   return item.id === 4
  // }
  for (var i = 0; i < this.length; i++) {
    if (conditionFunc(this[i], i)) {
      return this[i]
      // return i
    }
  }
}

var ret = users.myfind(function (item, index) {
  return item.id === 2
})

console.log(ret)