// const getRandomDelay = (maxDelay) => {
//   return (Math.floor(Math.random() * maxDelay)) * 1000;
// };
//
// const getAsyncNumbers = () => {
//   var successDelay = getRandomDelay(10);
//   var errorDelay = getRandomDelay(10);
//
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => resolve([1, 3, 5, 6, 4, 2]),
//       successDelay
//     );
//
//     setTimeout(
//       () => reject(new Error('No numbers found :(')),
//       errorDelay
//     );
//   });
// };

// getAsyncNumbers()
//     .finally(() => console.log("Proces zakończony"))
//     .then((data) => console.log(data.sort()))
//     .catch((err) => console.log(err.message));

// async function main() {
//   try {
//     const numbers = await getAsyncNumbers();
//     const sortedNumbers = numbers.sort();
//     console.log(sortedNumbers);
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("Proces zakończony");
//   }
// }

// main();


