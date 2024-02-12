function promiseAny() {

}

promiseAny([
  Promise.reject(),
  Promise.reject(),
  // Promise.resolve
])
  .then(() => {
    console.log('Something succeeded :)')
  })
  .catch(() => {
    console.log('All failed :(');
  });


















// async function promiseAny(promises) {
//   const results = await Promise.allSettled(promises);
//   const result = results.every((item) => item.status === "rejected");
//
//   if (result) {
//     throw new Error("error");
//   }
// }
//
// promiseAny([Promise.resolve(), Promise.reject(), Promise.reject()])
//     .then(() => {
//       console.log("Something succeeded :)");
//     })
//     .catch(() => {
//       console.log("All failed :(");
//     });