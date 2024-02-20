const fs = require("fs");

const read = fs.createReadStream("./input.txt");

const writeStream = fs.createWriteStream("./output.txt");
const write2Stream = fs.createWriteStream("./output2.txt");

read.pipe(write2Stream);

writeStream.write(read);

// pipeline(read, writeStream, (err) => {
//     if (err) {
//         console.error('An error occurred:', err)
//     } else {
//         console.log('\nFinished transforming data')
//     }
// })