import EventEmitter from 'events';

class Timer extends EventEmitter {
    constructor() {
        super();
        this.counter = 0;
        this.isrunning = false
    }


    start() {
        if (!this.isrunning) {
            this.isrunning = true;
            this.emit('start')
            this.intervalId = setInterval(() => {
                this.counter++;
                if (this.counter % 2 === 0) {
                    this.emit('Tick', this.counter)
                } else {
                    this.emit("Tock", this.counter)
                }
            }, 1000)
        }


    }

    stop() {
        if (this.isrunning) {
            this.isrunning = false;
            clearInterval(this.intervalId);
            this.emit('stop', this.counter);
            this.counter = 0;
        }
    }

    pause() {
        if (this.isrunning) {
            this.isrunning = false
            clearInterval(this.intervalId);
        }
    }

    resume() {
        if (!this.isrunning) {
            this.isrunning = true;
            this.intervalId = setInterval(() => {
                this.counter++;
                if (this.counter % 2 === 0) {
                    this.emit('Tick', this.counter)
                } else {
                    this.emit("Tock", this.counter)
                }
            }, 1000)
        }
    }


}


const timer = new Timer()
setTimeout(() => {
    timer.pause()
}, 5500)

setTimeout(() => {
    timer.resume()
}, 10500)

setTimeout(() => {
    timer.stop()
}, 15500)
timer.on('start', () => {
    console.log('start')
})
timer.on('Tick', (data) => {
    console.log(data)
})
timer.on('Tock', (data) => {
    console.log(data)
})

timer.on('stop', (data) => {
    console.log(`stop po ${data}s`)
})

timer.start()


//z coderslab rozwiazanie
// import { EventEmitter } from 'events';
//
// class Timer extends EventEmitter {
//     elapsed = 0;
//     started = false;
//     paused = false;
//     _setupInterval() {
//         return setInterval(() => {
//             if (this.elapsed % 2 === 0) {
//                 this.emit('tick', ++this.elapsed);
//             } else {
//                 this.emit('tock', ++this.elapsed);
//             }
//         }, 1 * 1000);
//     }
//     start() {
//         if (!this.started) {
//             this.emit('start');
//             this.started = true;
//             this.interval = this._setupInterval();
//         }
//     }
//
//     pause() {
//         if (this.started && !this.paused) {
//             clearInterval(this.interval);
//             this.paused = true;
//         }
//     }
//
//     resume() {
//         if (this.started && this.paused) {
//             this.interval = this.interval = this._setupInterval();
//         }
//         this.paused = false;
//     }
//
//     stop() {
//         if (this.started) {
//             clearInterval(this.interval);
//             this.started = false;
//             this.elapsed = 0;
//             this.emit('stop');
//         }
//     }
// }
//
// const timer = new Timer();
//
// timer.on('tick', (num) => {
//     console.log('I say TICK', num);
// });
//
// timer.on('tock', (num) => {
//     console.log('I say TOCK', num);
// });
// timer.on('start', () => {
//     console.log('*********************STARTED*********************');
// });
// timer.on('stop', () => {
//     console.log('*********************STOPPED*********************');
// });
//
// timer.start();
// timer.start(); // A
//
// setTimeout(() => {
//     timer.pause();
// }, 4 * 1000);
//
// setTimeout(() => {
//     timer.resume();
// }, 10 * 1000);
//
// setTimeout(() => {
//     timer.stop();
// }, 12 * 1000);