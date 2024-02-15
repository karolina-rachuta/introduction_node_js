const fs = require('fs')

const input = __dirname + '/input.txt'
const readStream = fs.createReadStream(input)

const output = __dirname + '/output.txt'
const writeStream = fs.createWriteStream(output)

// your code goes here ...
readStream.on("data", () => {
    console.log('Otrzymano dane R')
})

readStream.on("open", () => {
    console.log("Strumień został otwarty R")
})

readStream.on('pipe', () => {
    console.log('Połączenie dwóch strumieni R')
})

readStream.on('close', () => {
    console.log("Zamknięto readStream R")
})

writeStream.on("data", () => {
    console.log('Otrzymano dane W')
})

writeStream.on("open", () => {
    console.log("Strumień został otwarty W")
})

writeStream.on('pipe', () => {
    console.log('Połączenie dwóch strumieni W')
})

writeStream.on('close', () => {
    console.log("Zamknięto writeStream W")
})

readStream
    .pipe(writeStream)

// Połączenie dwóch strumieni W
// Strumień został otwarty R
// Strumień został otwarty W
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Otrzymano dane R
// Zamknięto readStream R
// Zamknięto writeStream W
