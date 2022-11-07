const fs = require('fs');
const read = fs.createReadStream('01-read-file/text.txt');
read.on('data', (chunk) => {
    console.log(chunk.toString());
})