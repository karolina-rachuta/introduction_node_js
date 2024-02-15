Promise.resolve(5)
  .then((num) => num + 5)
  .then((num) => num * 5)
  .then((num) => num * 5)
  .then((num) => num - 5)
  .then((num) => console.log(num));


//
// import { EventEmitter } from "events";
//
// const emitter = new EventEmitter();
//
// emitter.on("five", (num) => {
//     const result = num + 5;
//
//     emitter.emit("step1", result);
// });
//
// emitter.on("step4", (num) => {
//     console.log(`1. ${num}`);
// });
//
// function console2(num) {
//     console.log(`2. ${num}`);
// }
//
// emitter.on("step4", console2);
//
// emitter.on("step1", (num) => {
//     const result = num * 5;
//     emitter.emit("step2", result);
// });
//
// emitter.on("step3", (num) => {
//     const result = num - 5;
//     emitter.emit("step4", result);
// });
//
// emitter.on("step2", (num) => {
//     const result = num * 5;
//     emitter.emit("step3", result);
// });
//
// emitter.off("step4", console2);
//
// emitter.emit("five", 5);







