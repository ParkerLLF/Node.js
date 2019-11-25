//art-template
//art-template不仅可以在浏览器使用，也可以在node中使用

//安装 ：npm install art-template 
//该命令在那儿执行就会把包下载到哪儿。默认会下载到node_modules目录下

//在node中使用art-template模板引擎
// 模板引擎最早诞生于服务器领域，后来才发展到了前端

//1.安装 npm install art-template
//2. 在需要的使用的文件模块中加载art-template
//  只需要使用require方法加载就可以了：require('art-template')
//3. 查文档，使用模板引擎的API

var template = require('art-template');

var fs = require('fs');

fs.readFile('./tpl.html', function (err, data) {
  if (err) {
    console.log('sorry');
  }
  //data是二进制数据，toString()转成字符串
  data = data.toString();
  //render方法需要接受的是字符串
  //
  var ret = template.render(data.toString(), {
    name: 'Jack',
    age: 20,
    province: '四川',
    hobbies: [
      'code',
      'play overwatch',
      'play basketboll'
    ],
    title: '个人信息'
  })
  console.log(ret);

  // fs.writeFile('./tpl.html', ret, function (err, data) {
  //   if (err) {
  //     console.log('write failed')
  //   }
  //   console.log(data);
  // });

})