import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();


eventEmitter.on('eventOne', () => {
    console.log('OneA');
})

eventEmitter.addListener('eventTwo', (value) => {
    console.log(`TwoA ${value}`);
})

eventEmitter.addListener('eventTwo', (value) => {
    console.log(`TwoB ${value}`);
})


eventEmitter.on('eventOne', () => {
    console.log('OneB');
})

eventEmitter.emit('eventOne');
eventEmitter.emit('eventTwo', 'test');
eventEmitter.emit('eventTwo', 'test2');