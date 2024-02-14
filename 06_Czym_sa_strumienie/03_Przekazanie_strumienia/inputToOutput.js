const fs = require('fs')
const path = require('path')



// const outputStream = fs.createWriteStream('output.txt', 'utf8');

const targetFile = path.join(__dirname, '../02_Strumien_zapisu/target.txt')
/*const inputStream = fs.createReadStream(targetFile, 'utf8');*/

// inputStream.on('data', (chunk) => {
//     console.log(chunk); //Initial text kr.
// })


//inputStream.on('data', (chunk) => {
//     outputStream.write(chunk)
// })

// or


// inputStream.pipe(outputStream);
//
// outputStream.on('finish', () => {
//     console.log(`You have successfully created a ${targetFile} copy.`);
// })

//or
let readableStream;
function read(targetFile) {
    readableStream = fs.createReadStream(targetFile, "utf-8");

    readableStream.on('error', function (error) {
        console.log(`errorKR1: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        console.log(chunk);
    })
}


function write(filePath) {
    const writableStream = fs.createWriteStream(filePath, 'utf8');

    writableStream.on('errorKR2',  (error) => {
        console.log(`An error occured while writing to the file. Error: ${error.message}`);
    });

    readableStream.pipe(writableStream)
}

read(targetFile);
write('output.txt');