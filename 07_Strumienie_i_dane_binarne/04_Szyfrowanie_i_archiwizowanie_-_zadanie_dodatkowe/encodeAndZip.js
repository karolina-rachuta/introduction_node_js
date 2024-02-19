const fs = require('fs');
const crypto = require('crypto')
const zlib = require('zlib');

const zip = zlib.createGzip();
const encrypt = crypto.createCipher('aes-256-ctr', 'd6F3Efeq');

const { pipeline } = require('stream');

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.gz");



pipeline (readStream, encrypt, zip, writeStream, (err) => {
    if (err) {
        console.error("Błąd", err);
    } else {
        console.log("finished")
    }
})


