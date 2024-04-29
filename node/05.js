const fs = require('fs')
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regjs = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname,'./clock/index.html'),function(err,data){
    if(err){
        return console.log('读取错误'+err.message);
    }
    console.log('读取成功');
    // 截取css
    resolveCSS(data)
    // 截取js
    resolveJS(data)
    // 修改js 和 css 路径
    resolveHTML(data)
})
function resolveCSS(data){
    let arr = regStyle.exec(data)
    let newArr = arr[0].toString().replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newArr,function(err){
        if(err){
            return console.log('写入失败'+err.message);
        }
        console.log('写入样式文件成功！');
    })
}
function resolveJS(data){
    let arr = regjs.exec(data)
    let newArr = arr[0].toString().replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./clock/123.js'),newArr,function(err){
        if(err){
            return console.log('写入失败'+err.message);
        }
        console.log('写入脚本文件成功！');
    })
}
function resolveHTML(data){
    const newHTML = data.toString().replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regjs,'<script src="./123.js"></script>')
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err){
            return console.log('写入失败'+err.message);
        }
        console.log('写入成功');
    })
}

