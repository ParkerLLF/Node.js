//数据操作模块
//操作文件中的数据，只处理数据，不关心业务

var fs = require('fs')
var dbpath = './db.json'

//
/*获取所有的学生
  callback 中的参数
    第一个参数是 err
      成功是 null
      错误是 错误对象
    第二个参数是 结果
      成功是 数组
      错误是 undefined
return[]
*/
exports.find = function (callback) {
  fs.readFile(dbpath, 'utf8', function (err, data) {
    // JSON.parse(data).students
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}

/**
 * 根据 id 获取学生信息对象
 * @param  {Number}   id       学生 id
 * @param  {Function} callback 回调函数
 */
exports.findById = function (id, callback) {
  fs.readFile(dbpath, 'utf8', function (err, data) {
    // JSON.parse(data).students
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    var ret = students.find(function (item) {
      return item.id === parseInt(id)

    })
    callback(null, ret)
  })
}

/**
 * 添加保存学生
 * @param  {Object}   student  学生对象
 * @param  {Function} callback 回调函数
 */
exports.save = function (student, callback) {
  fs.readFile(dbpath, function (err, data) {
    // JSON.parse(data).students
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    //处理id 唯一的，不重复
    student.id = students[students.length - 1].id + 1

    students.push(student)
    //把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students
    })
    //把字符集保存到文件中
    fs.writeFile(dbpath, fileData, function (err) {
      if (err) {
        //如果 错误就把错误对象传递给他
        return callback(err)
      }
      //成功就是 没有错误, 所以错误对象就是 null
      callback(null)
    })
  })
}

//更新学生
exports.updateById = function (student, callback) {
  fs.readFile(dbpath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students

    // 注意：这里记得把 id 统一转换为数字类型
    student.id = parseInt(student.id)

    // 你要修改谁，就需要把谁找出来
    // EcmaScript 6 中的一个数组方法：find
    // 需要接收一个函数作为参数
    // 当某个遍历项符合 item.id === student.id 条件的时候，find 会终止遍历，同时返回遍历项
    var stu = students.find(function (item) {
      return item.id === student.id
    })

    // 这种方式你就写死了，有 100 个难道就写 100 次吗？
    // stu.name = student.name
    // stu.age = student.age

    // 遍历拷贝对象
    for (var key in student) {
      stu[key] = student[key]
    }

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students
    })

    // 把字符串保存到文件中
    fs.writeFile(dbpath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没错，所以错误对象是 null
      callback(null)
    })
  })
}


//删除学生
exports.deleteById = function (id, callback) {
  fs.readFile(dbpath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students

    var deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id)
    })
    // 根据下标从数组中删除对应的学生对象
    students.splice(deleteId, 1)

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students
    })

    // 把字符串保存到文件中
    fs.writeFile(dbpath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没错，所以错误对象是 null
      callback(null)
    })
  })

}