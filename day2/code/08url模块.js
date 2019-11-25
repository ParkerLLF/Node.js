var url = require('url')
// var obj = url.parse('/pinglun?name=林良富&message=今天天气真是好')

//转化成对象
var obj = url.parse('/pinglun?name=林良富&message=今天天气真是好', true)


console.log(obj)