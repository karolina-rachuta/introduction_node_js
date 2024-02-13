// Useful imports
import inquirer from 'inquirer';
import {EventEmitter} from 'events';

const emitter = new EventEmitter();
const {prompt} = inquirer;

const activity = [
    'Give me date and time',
    'Tell me a joke',
    'Say a compliment',
    'That is all, thanks!',
];

const listOfCompliments = [
    "You're an awesome friend",
    "You're a smart cookie",
    'You are awesome!',
    'You are the most perfect you there is.',
    'You light up the room.',
    'You deserve a hug right now.',
    "On a scale from 1 to 10, you're an 11.",
    'That color is perfect on you.',
];

const listOfJokes = [
    'Why do birds fly to warmer climates in the winter? - It’s much easier than walking!',
    'How does the ocean say hello? - It waves.',
    'What do you call a fake noodle? - An im-pasta.',
    'Why can’t you trust atoms? - They make up everything.',
    'What did one plate whisper to the other plate? - Dinner is on me.',
    'What kind of tree fits in your hand? - A palm tree!',
];

async function flow() {

    emitter.on('joke', (data) => {
        console.log(data)
    });

    emitter.on('complement', (data) => {
        console.log(data)
    });

    emitter.on('data', (data) => {
        console.log(`Date: ${data}`)
    })

    emitter.on('bye', () => {
        console.log('bye!');
        process.exit();
    });

    while (true) {
        const userChoice = await prompt(
            {
                type: 'list',
                name: 'activity',
                message: 'What do you want me to do?',
                choices: activity,
            });
        if (userChoice.activity === 'Give me date and time') {
            const date = new Date();
            // console.log(`Current time and date: ${date}`)
            emitter.emit('data', date)
        }

        if (userChoice.activity === 'Tell me a joke') {
            const numberOfJokes = listOfJokes.length;
            let randomNumber = Math.floor(Math.random() * numberOfJokes + 1);
            let chosenJoke = listOfJokes[randomNumber];
            // console.log(chosenJoke);
            emitter.emit('joke', chosenJoke)
        }

        if (userChoice.activity === 'Say a compliment') {
            let randomComplement = Math.floor(Math.random() * listOfCompliments.length + 1);
            let choseComplement = listOfCompliments[randomComplement];
            // console.log(choseComplement);
            emitter.emit('complement', choseComplement);
        }

        if (userChoice.activity === 'That is all, thanks!') {
            // console.log('Goodbye!');
            emitter.emit('bye');
        }
    }
}

flow();
