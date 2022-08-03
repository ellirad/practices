// let p = new Promise((resolve, rejects) => {
//   let a = 1 + 1;
//   if (a === 4) {
//     resolve("CORRECT");
//   } else {
//     rejects("WRONG");
//   }
// });

// p.then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })

// let num = 0;

// async function increment() {
//   num += await 2; //Promise.resolve(2);
//   console.log(num);
// }

// increment();
// num += 1;
// console.log(num);

// let num = 0;
// async function delay() {
//   console.log(num, 'num')
//   setTimeout(() => {
//      Promise.resolve(2);
//   }, 1000)
// }

// num += 1;
// delay().then().then(result => console.log(result))
// console.log(num);

// 1, 1, 3

// const basicPromise = new Promise((resolve, reject) => {
//   let name = "true";
//   if (name === "true") {
//     Promise.resolve().then(() => {
//       console.log("1");
//       setTimeout(() => {
//         console.log("3");
//       }, 0);
//       Promise.resolve().then(() => console.log('6'))
//       Promise.resolve().then(() => console.log('7'))
//     });
//     resolve();
//   }
// });

// basicPromise.then(() => {
//   console.log("5");
// }).catch(() => console.log('2'));



// new Promise(resolve => {
//   console.log(1);
//   Promise.resolve(2).then(() => {
//     console.log(5);
//   Promise.resolve(2).then(() => console.log(4))
//   })
//   resolve(3)
// }).then(res => console.log(res, 'res'))

// 1, 5, 3, 4

// Promise chaining

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve(10);
//   }, 3 * 100);
// });

// p.then((result) => {
//   console.log(result); // 10
//   return result * 2;
// }).then((result) => {
//   console.log(result); // 20
//   return result * 3;
// })
// .finally(res => {
//   console.log(res, 'fina')
// }).then((result) => {
//   console.log(result); // 60
//   return result * 4;
// }).catch(err => {
//   console.log(err, 'err')
// })

// Multiple handlers for a promise

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve(10);
//   }, 3 * 100);
// });

// p.then((result) => {
//   console.log(result); // 10
//   return result * 2;
// })

// p.then((result) => {
//   console.log(result); // 10
//   return result * 3;
// })

// p.then((result) => {
//   console.log(result); // 10
//   return result * 4;
// });

// const promise = new Promise((resolve, reject) => {
//   reject(Error('Some Error Occurred'));
// })
// .catch(error =>{
//   console.log(error);
//   return error;
// }) // Catch is return a new promise so we can use then after that, since nothings return from catch block, we get undefind in then
// .then(error => console.log(error));

// const promise = new Promise((res) => res(2));
// promise
//   .then((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//     setTimeout(() => {
//         console.log('test')
//     }, 200)
//     return v * 2;
//   })
//   .finally((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//   });

// output: 
// 2
// 4
// undefined
// 8

// const promise = new Promise((res) => {
//   res(3)
//   setTimeout(() => {
//     res(2)
//   }, 1000)
// });

// promise
//   .then((v) => {
//     console.log(v, '1');
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v, '2');
//     return v * 2;
//   })
//   .finally((v) => {
//     console.log(v, '3');
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v, '4');
//   })

// 3, 1, 4, 2
// // 2, un, un, 4

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise.then(function (data) {
//     console.log(data);

//     return job(false);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return "Error caught";
//   })

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })

//   .catch(function (error) {
//     console.log(error);
//   });

// success, error, Error caught

// Write a function that impelement promises
// function promiseUnderHood(successCallback, errorCallback) {
//   let name = 'ellie';
//   let completeName = "elham";
//   if(name === completeName) {
//     successCallback(`name is complete: ${name}`)
//   } else if(name !== completeName) {
//     errorCallback(`name is not complete! The complete name is: ${completeName}`)
//   } else  {
//     console.log("none of above")
//   }
// };

// // This is consumer function
// promiseUnderHood((name) => {
//   console.log(name, 'success')
// }, (error) => {
//   console.log(error, 'error')
// })

// // ? chera throw new error run  nmishe?
// new Promise((resolve, reject) => {
//   resolve('Success!')
// })
// .then(() => {
//   throw Error('Oh noes!')
// })
// .catch(error => {
//   return "actually, that worked"
// })
// .catch(error => console.log(error.message))

// Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data, 'e')
//     return data
//   })
//   .then(console.log)

let obj = {
  a: null
}

console.log(obj?.a)