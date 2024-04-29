const fs = require('fs')
fs.writeFile('../files/02.txt','hello json',function(err){
   if(err){
    console.log("文件写入失败"+err.message);
   }
   console.log('文件写入成功');
})
// 写入成功 null