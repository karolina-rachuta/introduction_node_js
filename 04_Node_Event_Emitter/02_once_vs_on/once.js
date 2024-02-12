import * as events from "events";

const eventEmitter = new events.EventEmitter;

eventEmitter.on('On', (value) => {
    console.log(`testON ${value}`)
})

eventEmitter.once('Once', () => {
    console.log('testOnce')
})

eventEmitter.emit('On', 'test');
eventEmitter.emit('Once');
eventEmitter.emit('On', 'test');
eventEmitter.emit('On', 'test');
eventEmitter.emit('Once');
