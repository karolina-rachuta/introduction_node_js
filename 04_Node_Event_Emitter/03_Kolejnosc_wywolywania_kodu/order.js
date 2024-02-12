import * as events from 'events';

const eventEmitter = new events.EventEmitter;

eventEmitter.on('eventOne', () => {
    console.log('EventOne') //6
})


eventEmitter.on('eventTwo', () => {
    console.log('EventTwo') //4
})

eventEmitter.on('eventThree', () => {
    console.log('EventThree') //3
})


setTimeout( ()=> {
    console.log("Emitting eventOne"); //5
    eventEmitter.emit('eventOne');
}, 1000);

new Promise((resolve) => {
    console.log('Emitting eventTwo'); //1
    resolve();
}).then (() => {
    eventEmitter.emit('eventTwo');
});

console.log('Emitting event three') //2
eventEmitter.emit('eventThree')

//Emitting eventTwo
// Emitting event three
// EventThree
// EventTwo
// Emitting eventOne
// EventOne