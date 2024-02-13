// function promiseNone() {
//
// }
//
// promiseNone([
//   Promise.reject(),
//   Promise.reject(),
//   // Promise.resolve
// ])
//   .then(() => {
//     console.log('All failed :)')
//   })
//   .catch(() => {
//     console.log('Something succeeded :(');
//   });


async function promiseNone(promises) {
  return await Promise.allSettled(promises)
      .then((results) => {
        const hasFulfilled = results.some((result) => result.status === 'fulfilled');

        if (hasFulfilled) {
          throw new Error('Przynajmniej jedno zapytanie zakończyło się sukcesem.');
        }

        return results;
      });
}

promiseNone([
  Promise.reject(),
  Promise.reject(),
  Promise.resolve
])
    .then(() => {
      console.log('All failed :)')
    })
    .catch(() => {
      console.log('Something succeeded :(');
    });











//async function promiseNone(promises) {
//   const results = await Promise.allSettled(promises);
//
//   const result = results.some((item) => item.status === "fulfilled");
//
//   if (result) {
//     throw new Error("error");
//   }
// }
//
// promiseNone([Promise.reject(), Promise.reject(), Promise.resolve()])
//   .then(() => {
//     console.log("All failed :)");
//   })
//   .catch(() => {
//     console.log("Something succeeded :(");
//   });