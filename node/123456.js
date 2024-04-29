// const fs = require('fs')
// fs.readFile('./../files/01.txt', function (err, data) {
//   console.log(err);
//   console.log(data.toString());
// });
// const fs = require('fs')
// fs.readFile('../files/01.txt',function(err,data){
//     if(err){
//         return console.log('读取失败'+err.message);
//     }
//     console.log(data.toString());
// })
const fs = require('fs')
fs.readFile('./files/02.txt','utf8',function(err,data){
    if(err){
        return console.log('读取失败'+err.message);
    }
    console.log(data);
})
// 读取失败ENOENT: no such file or directory, open 'D:\web\files\02.txt'