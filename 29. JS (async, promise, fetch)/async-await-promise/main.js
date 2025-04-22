//sync version
function syncA() {
  return "hey sync function...";
}

const resultSync = syncA();
console.log(resultSync);

//async version
async function asyncA() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 5);
    //ok
    if (randomNumber === 3) {
      resolve(3);
    } else {
      reject(`not 3! number is ${randomNumber}`);
    }
  });
}

const resultAsync = asyncA();
//then, catch, finally blocks (Promise CHAIN)
// resultAsync
//   .then((response) => {
//     // resolve (full-filled) OK
//     console.log("OK: ", response);
//     return 56;
//   })
//   .then((x) => {
//     console.log(x); //56
//     return "ok";
//   })
//   .then((y) => {
//     console.log(y); //undefined
//   })
//   .catch((error) => {
//     // reject (rejected) NOT OK
//     console.log("ERROR: ", error);
//   })
//   .finally(() => {
//     console.log("PROMISE ENDED!");
//   });

//await - only inside async functions
// async function test(x){
//     const y = await x;
//     console.log(y);
// }

// try {
//   const result = await resultAsync; //PROMISE
//   console.log(result);
// } catch (error) {
//   console.log(error);
// }
