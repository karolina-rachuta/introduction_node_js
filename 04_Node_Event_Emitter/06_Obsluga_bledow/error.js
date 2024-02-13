import * as events from "events";
import fs from 'fs';

const eventEmitter = new events.EventEmitter();
//A:
fs.readFile("notExisting.txt", (err, data) => {
    console.log("error", err);
    eventEmitter.emit("error", new Error("Nie ma tego pliku"))
    console.log(data);
})

process.on("uncaughtException", (err) => {
    console.error(`niezlapany blad ${err.message}`);
    process.exit();
})

//wynik:
// error [Error: ENOENT: no such file or directory, open 'notExisting.txt'] {
//     errno: -2,
//         code: 'ENOENT',
//         syscall: 'open',
//         path: 'notExisting.txt'
// }
// niezlapany blad Nie ma tego pliku



//B:
// fs.readFile("notExisting.txt", (err) => {
//     console.log("error", err); //1
//     eventEmitter.emit("error", new Error("Nie ma tego pliku"))
// })
//
// eventEmitter.on("error", (err) => {
//     console.error(`obsluzony blad: ${err.message}`) //2
// })


//error [Error: ENOENT: no such file or directory, open 'notExisting.txt'] {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'notExisting.txt'
// }
// obsluzony blad: Nie ma tego pliku