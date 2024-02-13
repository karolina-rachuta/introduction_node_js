// Useful imports
import inquirer from 'inquirer';
import { EventEmitter } from 'events';

import { quiz } from './questions.js';
const { prompt } = inquirer;

const emitter = new EventEmitter();
let correct = 0;
let wrong = 0;
emitter.on("correct", () => { console.log("correct"); correct++})
emitter.on("wrong", () => { console.log("wrong"); wrong++})
emitter.on("result", (data) => {
    if(data >= 75){
        console.log(`gratulacje zdałeś! + ${data}`)
    }else{
        console.log(`buuu! + ${data}`)
    }
})
async function questions(){
    for(let i = 0; i < quiz.length; i++){
        const { selected: answer } = await prompt([
            {
                type: 'list',
                name: 'selected',
                ...quiz[i].question,
            },
        ]);
        console.log(answer);
        console.log("correct answer", quiz[i].answer);
        console.log("user answer", quiz[i].question.choices.indexOf(answer));
        if(quiz[i].answer === quiz[i].question.choices.indexOf(answer)) {
            emitter.emit("correct")
        }else{
            emitter.emit("wrong")
        }
    }

    let result = correct / quiz.length * 100;

    emitter.emit("result", result)
}

questions();
//
//
// import inquirer from 'inquirer';
// import { EventEmitter } from 'events';
//
// import { quiz } from './questions.js';
// const { prompt } = inquirer;
//
// const emitter = new EventEmitter();
// let correct = 0;
// let wrong = 0;
// emitter.on("correct", () => { console.log("correct"); correct++})
// emitter.on("wrong", () => { console.log("wrong"); wrong++})
// emitter.on("result", (data) => {
//     if(data >= 75){
//         console.log(`gratulacje zdałeś! + ${data}`)
//     }else{
//         console.log(`buuu! + ${data}`)
//     }
// })
// async function questions(){
//     for(let i = 0; i < quiz.length; i++){
//         const { selected: answer } = await prompt([
//             {
//                 type: 'list',
//                 name: 'selected',
//                 ...quiz[i].question,
//             },
//         ]);
//         console.log(answer);
//         console.log("correct answer", quiz[i].answer);
//         console.log("user answer", quiz[i].question.choices.indexOf(answer));
//         if(quiz[i].answer === quiz[i].question.choices.indexOf(answer)) {
//             emitter.emit("correct")
//         }else{
//             emitter.emit("wrong")
//         }
//     }
//
//     let result = correct / quiz.length * 100;
//
//     emitter.emit("result", result)
// }
//
// questions();//