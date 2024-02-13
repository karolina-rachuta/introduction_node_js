import fs from 'fs';
import {EventEmitter} from 'events'

const emitter = new EventEmitter();

const text = 'lubie node js'

emitter.on('write', () => {
    fs.readFile('myTxt.txt', 'utf8', (err, data) => {
        if (err) {
            emitter.emit('error', new Error('blad w readFile'));
        } else {
            emitter.emit('read', `Odczytany tekst to: "${data}"`);
        }
    })
})

emitter.on('error', (err) => {
    console.error(err.message);
})

emitter.on('read', (data) => {
    console.log(data);
})
fs.writeFile('myTxt.txt', text, (err) => {
    if (err) {
        emitter.emit('error', new Error('sth happened'));
    } else {
        console.log('Zapisano tekst')
        emitter.emit('write');
    }
});

