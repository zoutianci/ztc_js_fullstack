const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
// stream 一边读,一边写入另一个文件
const inFile = fs.createReadStream('./a.txt');
const outFile = fs.createWriteStream('./a.txt.gz');
//pipe  从源头分配到管道中
inFile.pipe(gzip).pipe(outFile); 