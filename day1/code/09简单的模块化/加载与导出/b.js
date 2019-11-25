var foo = "bbbbb";

exports.foo = "hello";

exports.add = function (x, y) {
  return x + y;
};

function add(x, y) {
  return x - y;
}

var age = 18;
exports.age = age;

// exports.readFile = function (path, callback) {
//   console.log("文件路径", path);
// };