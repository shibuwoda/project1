const path = require('path')
const tail =path.basename('/a/b/c/index.html')
console.log(tail);
const name = path.basename(tail,'.html')
console.log(name);
const name2 = path.extname(tail)
console.log(name2);