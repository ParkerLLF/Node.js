var mysql = require('mysql')

//==============mysql数据库操作===================
//创建一个connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '199612',
  port: '3306',
  database: 'test',
});

//2,连接
connection.connect();
//3.编写sql语句，进行增删查改操作
var sql = 'select * from comments'

connection.query(sql, (err, result) => {
  if (err) {
    onsole.log('[INSERT ERROR] - ', err.message);
    return;
  }
  //输出原始数据
  var data1 = result
  console.log(data1)

  //设置导出，将获取到的数据转化成json格式，存入data变量，
  exports.data = JSON.stringify(result);
  console.log(exports.data)
})

//5,连接结束
connection.end();