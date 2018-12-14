const path = require('path')
//向外暴露一个配置对象
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'//指定输出文件名称
    }
}

