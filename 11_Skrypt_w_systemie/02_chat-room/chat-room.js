#!/usr/bin/node
const fs = require('fs');


const filename = "messages.txt"
const userProvidedName = process.argv[2] || "anonymous"

process.stdin.on("data", async (chunk) => {


    const string = chunk.toString();

    await fs.promises.appendFile(filename, `${userProvidedName} : ${string}`, 'utf-8');
    await fs.watchFile(filename, () => {
        console.log("Odpisano!", string)
    })
});