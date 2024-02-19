const fs = require('fs')

const message = 'Ik5pZSBkb3R5a2HEhyEiIC0gbXVzaSBiecSHIGplZG7EhSB6ZSBzdHJhc3puaWVqc3p5Y2ggcnplY3p5IGRvIHByemVjenl0YW5pYSB3IGrEmXp5a3UgQnJhaWxsYS4uLg=='


const decode = Buffer.from(message, 'base64')

const writeStreamUtf8 = fs.createWriteStream('./output.utf8.txt')
const writeStreamASCI = fs.createWriteStream('./output.ascii.txt')

writeStreamUtf8.write(decode.toString('utf8'))
writeStreamASCI.write(decode.toString('ascii'))