// document.addEventListener('DOMContentLoaded',function(){

// });

// function test() {
//   return "test";
// }

// async function testAsync() {
//   return "test";
// }

// const res = testAsync();
//promise chain
// res
//   .then((x) => {
//     console.log(x); //test
//     return "hello " + x;
//   })
//   .then((y) => {
//     console.log("y: ", y);
//   })
//   .catch((err) => {
//     console.log("error: ", err);
//   })
//   .finally(() => {
//     console.log("promise ended!");
//   });

// try {
//   const resA = await testAsync();
//   console.log(resA);
// } catch (error) {
//   console.log("error: ", error);
// }

// try {
//   const response = await fetch("https://northwind.vercel.app/api/categories", {
//     method: "GET",
//     //   body: JSON.stringify({ name: "x", description: "y" }), //POST, PUT, PATCH - PAYLOAD
//     //     headers: {
//     //       "Content-Type":"application/json"
//     //     }
//   });
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// fetch("https://northwind.vercel.app/api/categories", {
//   method: "GET",
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// http REQUESTS- GET, GET BY ID, PUT, POST, DELETE, PATCH
// http status - (5)=> 100-200, 200-300, 300-400, 400-500, 500-600
