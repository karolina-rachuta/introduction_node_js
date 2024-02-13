import * as events from 'events';

const eventEmitter = new events.EventEmitter();

eventEmitter.on('eventOne', () => {
    console.log('wyswietli ON 1')
})

eventEmitter.addListener('eventOne', () => {
    console.log('wyswietli addListener 1')
})

eventEmitter.once('eventOne', () => {
    console.log('wyswietli ONCE 1')
})

eventEmitter.on('eventTwo', () => {
    console.log('wyswietli ON 2')
})

eventEmitter.addListener('eventTwo', () => {
    console.log('wyswietli addListener 2')
})

eventEmitter.once('eventTwo', () => {
    console.log('wyswietli ONCE 2')
})


console.log(eventEmitter.eventNames());
eventEmitter.emit('eventOne');

console.log(eventEmitter.eventNames());
eventEmitter.emit('eventTwo');

console.log(eventEmitter.eventNames());
eventEmitter.emit('eventOne');

console.log(eventEmitter.eventNames());
eventEmitter.emit('eventTwo');

console.log(eventEmitter.eventNames());
eventEmitter.emit('eventOne');

console.log(eventEmitter.eventNames());
eventEmitter.emit('eventTwo');

eventEmitter.removeAllListeners();
console.log(eventEmitter.eventNames());



