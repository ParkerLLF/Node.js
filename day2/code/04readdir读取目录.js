var fs = require('fs');

fs.readdir('F:/www', function (err, files) {
  if (err) {
    console.log("something is break");
  }
  console.log(files);
  //输出数组--->[ 'a.txt', 'apple', 'img', 'index.html' ]
  console.log(files[3]); //输出---> index.html
});