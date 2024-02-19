const fs = require('fs');

// Tworzymy strumień odczytu z pliku input
const readStream = fs.createReadStream('input');
let text2;
const countMap = {};
readStream.on('data', (chunk) => {
    const text = chunk.toString();
    text2 = Buffer.from(text, "base64").toString('utf8');
    // console.log(text2)
    let placeholders = text2.match(/{([^}]*)}/g)

    placeholders.forEach((placeholder) => {
        countMap[placeholder] = (countMap[placeholder] || 0) + 1;

    })

})


readStream.on('close', () =>
    console.log('koniec:', countMap));


readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});
