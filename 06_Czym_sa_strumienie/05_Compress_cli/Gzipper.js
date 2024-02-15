const fs = require("fs");
const zlib = require("zlib");


function gzipper(source, action, target) {
    const sizeOfFile = fs.statSync(source).size;
    console.log(`Size of source: ${sizeOfFile}`)
    const gzipAction = action === 'compress' ? zlib.createGzip() : zlib.createGunzip();
    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(target === 'compress' ? `${target}.gz` : target);


//     stwórz strumień odczytu
    if (readStream) {
        readStream.on("open", () => {
            console.log('ReadStream: Compressing action has started')
        })
        readStream.on("close", () => {
            console.log('ReadStream: Decompressing action has finished')
        })

        readStream.on("data", (chunk) => {
            console.log(`Postęp operacji Read: ${(chunk)}`)
            console.log(`Postęp operacji Read: ${(chunk.length / sizeOfFile) * 100}%`)
        })
    }


    readStream.pipe(gzipAction).pipe(writeStream);

    if (writeStream) {
        writeStream.on("open", () => {
            console.log('WriteStream: Compressing action has started')
        })


        writeStream.on("close", () => {
            console.log('WriteStream: Decompressing action has finished')
            // const sizeOfTarget = fs.statSync(target).size;
            // console.log(`Size of source: ${sizeOfTarget}`)
        })

        writeStream.on("data", (chunk) => {
            console.log(`Postęp operacji Write: ${(chunk)}`)
            console.log(`Postęp operacji Write: ${(chunk.length / sizeOfFile) * 100}%`)
        })
    }
}

module.exports = gzipper;