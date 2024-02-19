const fs = require('fs');
const crypto = require('crypto')
const zlib = require('zlib');
const { pipeline } = require('stream')

const unzip = zlib.createUnzip()
const decrypt = crypto.createDecipher('aes-256-ctr', 'd6F3Efeq');


const read2Stream = fs.createReadStream("output.gz");
const write2Stream = fs.createWriteStream("input2.txt");





pipeline (read2Stream, unzip, decrypt, write2Stream, (err) => {
    if (err) {
        console.error("Błąd", err);
    } else {
        console.log("finished")
    }
})