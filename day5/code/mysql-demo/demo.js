var mysql = require("mysql");

//创建链接
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "199612",
  database: "test",
  port: '3306'
});

//链接数据库（打开冰箱门）
connection.connect();

//执行数据库操作（把大象放进冰箱）
connection.query('SELECT * from `test`', function (error, results, fields) {
  if (error) throw error;
  console.log('the solution is', results);
});

//插入数据
// connection.query("INSERT into test values (null ,'admin','123456')", function (error, results, fields) {
//   if (error) throw error;
//   console.log('the solution is：', results);
// });

//关闭链接，关闭冰箱门
connection.end();