import * as events from 'events';

// class Task {
//   start() {
//     console.log('Started');
//   }
//   stop() {
//     console.log('Stopped');
//   }
//   pause() {
//     console.log('Paused');
//   }
//   resume() {
//     console.log('Resumed');
//   }
// }


class Task extends events.EventEmitter() {
    constructor() {
        super();
    }

    start() {
        console.log('Started');
        this.emit('start', "Data was started")
    };

    stop() {
        console.log('Stopped');
        this.emit('stop', "Data was stopped")
    };

    pause() {
        console.log('Paused');
        this.emit('pause', "Data was started")
    };

    resume() {
        console.log('Resumed');
        this.emit('resume', "Data was resumed")
    }
}


const task = new Task();

task.once('start', () => {
    console.log('once- start')
});

task.on('pause', () => {
    console.log('on- pause')
});

task.on('resume', () => {
    console.log('on- resume')
});
task.once('stop', () => {
    console.log('once- stop')
});

task.start();
task.pause();
task.resume();
task.pause();
task.resume();
task.stop();