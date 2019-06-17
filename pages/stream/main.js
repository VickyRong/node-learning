var fs = require("fs");
var data = "很想去听一场钢琴音乐会";

var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');
writeStream.end();
writeStream.on('finish',function(){
    console.log('写入完成！')
})
writeStream.on('error',function(err){
    console.log('err:',err.stack)
})

console.log('执行完毕')