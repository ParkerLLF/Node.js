/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * !!! 模块职责要单一，不要乱写 !!!
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */
var fs = require('fs')
var Student = require('./student')

//express 提供了一种更好的方式
//专门用来包装路由的
var express = require('express') //加载express，为了使用Router方法

//  1.创建一个路由容器
var router = express.Router()

//  2.把路由都挂载到容器中
router.get('/students', function (req, res) {
  Student.find(function (err, students) {
    if (err) {
      return res.status(500).send('Server Error.')
    }
    res.render('index.html', {
      fruits: [
        '苹果', '香蕉', '橘子', '草莓'
      ],
      students: students
    })
  })

  // //添加第二个参数，指定编码格式utf8，把读取到的文件直接按照utf8 编码
  // fs.readFile('./db.json', 'utf8', function (err, data) {
  //   if (err) {
  //     return res.status(500).send('Server Error.')
  //   }
  //   //文件中读取到的一定是字符串，必须要手动转换成对象
  //   var students = JSON.parse(data).students
  //   //render() 向前端页面渲染数据
  //   res.render('index.html', {
  //     fruits: [
  //       '苹果', '香蕉', '橘子', '草莓'
  //     ],
  //     //文件中读取到的一定是字符串，必须要转换
  //     // students: JSON.parse(data).students
  //     students: students
  //   })
  // })
})

router.get('/students/new', function (req, res) {
  res.render('new.html')
});

router.post('/students/new', function (req, res) {
  //1.获取表单数据
  //2.处理-->将数据存储到db.json中
  //3.发送响应
  //-->先把文件的内容读取出来，转成对象-->然后往对象中 push 数据 -->然后把对象转换成字符串-->最后把字符串再次写入文件
  console.log(req.body)
  Student.save(req.body, function (err) {
    if (err) {
      return res.status(500).send('Server Error')
    }
    //重定向
    res.redirect('/students')
  })
})

router.get('/students/edit', function (req, res) {
  // console.log(req.query.id)
  //1.在客户端的列表页中处理链接问题（需要有id参数）
  //2.
  Student.findById(parseInt(req.query.id), function (err, student) {
    if (err) {
      return res.status(500).send("Server Error")
    }
    // console.log(student)
    res.render("edit.html", {
      student: student
    })

  })

})

router.post('/students/edit', function (req, res) {
  // console.log(req.body)
  Student.updateById(req.body, function (err) {
    if (err) {
      return res.status(500).send("Server Error")
    }
    res.redirect('/students')
  })

})

router.get('/students/delete', function (req, res) {
  // 1. 获取要删除的 id
  // 2. 根据 id 执行删除操作
  // 3. 根据操作结果发送响应数据
  // console.log(req.query)
  Student.deleteById(req.query.id, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})


//  3.把 router 导出
module.exports = router
























//这样也不方便
// module.exports = function (app) {
//   app.get('/students', function (req, res) {
//     //添加第二个参数，指定编码格式utf8，把读取到的文件直接按照utf8 编码
//     fs.readFile('./db.json', 'utf8', function (err, data) {
//       if (err) {
//         return res.status(500).send('Server Error.')
//       }
//       //文件中读取到的一定是字符串，必须要手动转换成对象
//       var students = JSON.parse(data).students
//       //render() 向前端页面渲染数据
//       res.render('index.html', {
//         fruits: [
//           '苹果', '香蕉', '橘子', '草莓'
//         ],
//         //文件中读取到的一定是字符串，必须要转换
//         // students: JSON.parse(data).students
//         students: students
//       })
//     })
//   })

//   app.get('/students/new', function (req, res) {

//   })
//   app.get('/students/new', function (req, res) {

//   })
//   app.get('/students/new', function (req, res) {

//   })

// }