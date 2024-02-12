const getRandomDelay = (maxDelay) => {
  return (Math.floor(Math.random() * maxDelay)) * 1000;
};

const getAsyncNumbers = () => {
  var successDelay = getRandomDelay(10);

  return new Promise((resolve) => {
    setTimeout(
      () => resolve([1, 3, 5, 6, 4, 2]), 
      successDelay
    );
  });
};














// function failAfter3sec() {
//   return new Promise((_, reject) => {
//     setTimeout(() => reject(new Error("minelo 3 sec")), 3000);
//   });
// }
//
// async function main() {
//   const data = await Promise.race([failAfter3sec(), getAsyncNumbers()]);
//   console.log(data);
// }
//
// main();