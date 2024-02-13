import { EventEmitter} from 'events'

const emitter = new EventEmitter();

emitter.on('number', (number) => {
    if (number % 3 === 0 && number % 5 !== 0) {
        console.log(`${number} fiz`)
    }
});
emitter.on('number', (number) => {
    if (number % 5 === 0 && number % 3 !== 0) {
        console.log(`${number}: baz`)
    }
})

emitter.on('number', (number) => {
    if (number % 3 === 0  && number % 5 === 0) {
        console.log(`${number} fizbaz`);
    }
})


for (let i = 0; i <= 100; i++) {
    emitter.emit('number', i);
}