const getRandomDelay = (maxDelay) => {
  return Math.floor(Math.random() * maxDelay) * 1000;
};

const getAsyncNumbers = () => {
  var successDelay = getRandomDelay(10);
  var errorDelay = getRandomDelay(10);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([1, 3, 5, 6, 4, 2]), successDelay);

    setTimeout(() => reject(new Error("No numbers found :(")), errorDelay);
  });
};

// for (var i = 0; i < 30; i++) {
//   Promise.all([getAsyncNumbers(), getAsyncNumbers(), getAsyncNumbers()])
//     .then((results) => {
//       console.log("success", results);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// }

// Promise.allSettled([getAsyncNumbers(), getAsyncNumbers(), getAsyncNumbers()])
//   .then((results) => {
//     console.log("success", results);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

Promise.all([Promise.resolve(1), Promise.reject(new Error("Cośtam")), Promise.resolve(3)])
    .then((results) => {
      console.log("success", results);
    })
    .catch((error) => {
      console.log("error", error);
    });

// async function main() {
//     const data = await Promise.resolve("string");
//     console.log(data);
// }
//
// main();