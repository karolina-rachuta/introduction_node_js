const fs = require('fs');
const { pipeline } = require('stream');

const input = __dirname + '/input.txt'
const readStream = fs.createReadStream(input)

const output = __dirname + '/output.txt'
const writeStream = fs.createWriteStream(output)

// readStream
//     .pipe(writeStream)

pipeline(readStream, writeStream, (err) => {
    if (err) {
        console.error("there is an error:", err)
    } else {
        console.log("finished")
    }
})
