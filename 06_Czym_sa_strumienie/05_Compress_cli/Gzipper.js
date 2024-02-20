const fs = require("fs");
const zlib = require("zlib");


function gzipper(source, action, target) {

    // const gzipAction = action === 'compress' ? zlib.createGzip() : zlib.createGunzip();
    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(target === 'compress' ? `${target}.gz` : target);

    if (action === "compress") {
        readStream.pipe(zlib.createGzip()).pipe(writeStream)
    } else if (action === "decompress") {
        readStream.pipe(zlib.createGunzip()).pipe(writeStream)
    }


//     stwórz strumień odczytu
    readStream.on("open", () => {

        console.log('ReadStream: Compressing action has started')

    })
    readStream.on("close", () => {
        console.log('ReadStream: Decompressing action has finished')
    })

    readStream.on("data", (chunk) => {
        console.log(`Postęp operacji Read: ${(chunk)}`)
        const sizeOfFile = fs.statSync(source).size;
        console.log(`Size of source: ${sizeOfFile}`)
        console.log(`Postęp operacji Read: ${(chunk.length / sizeOfFile) * 100}%`)
    })


    writeStream.on("open", () => {
        console.log('WriteStream: Compressing action has started')
    })

    // writeStream.on("data", (chunk) => {
    //     console.log(`Postęp operacji Write: ${(chunk)}`)
    //     const sizeOfFile = fs.statSync(source).size;
    //     console.log(`Size of source: ${sizeOfFile}`)
    //     console.log(`Postęp operacji Write: ${(chunk.length / sizeOfFile) * 100}%`)
    // })

    writeStream.on("close", () => {
        console.log('WriteStream: Decompressing action has finished')
        // const sizeOfTarget2 = fs.statSync(target).size;
        // console.log(`Size of target: ${sizeOfTarget2}`)
    })



}

module.exports = gzipper;