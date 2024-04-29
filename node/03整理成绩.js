const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname+'/files/成绩-ok.txt'), function (err, data) {
  if (err) {
    return console.log(err.message)
  }
  let oldArr = data.toString().split(' ')
  let newArr = []
  oldArr.forEach(element => {
    newArr.push(element.replace('=',":"))
  });
  const newStr = newArr.join('\r\n')
  fs.writeFile(path.join(__dirname+'/files/成绩.txt'),newStr,function(err){
    if(err){
      return console.log('成绩写入失败'+err.message);
    }
    console.log('成绩写入成功');
  })
});