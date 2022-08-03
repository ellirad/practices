// const readline = require('readline')
// const readlineInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readlineInterface.question("What is your name? ", name => {
//   readlineInterface.question("What is your job? ", job => {
//     readlineInterface.question("How old are you? ", age => {
//       console.log("Hello " + name + ". You are a " + age + " year old " + job + ".")
//       readlineInterface.close()
//     })
//   })
// })

// import askQuestion from './readlineInterface'

// async function main() {
//     const name = await askQuestion("What is your name? ")
//     const job = await askQuestion("What is your job? ")
//     const age = await askQuestion("How old are you? ")
//     console.log(`Hello ${name}. You are a ${age} year old ${job}.`)
// }
// main()

// function askQuestion(readlineInterface, question) {
//     return new Promise(resolve => {
//       readlineInterface.question(question, answer => {
//         resolve(answer)
//       })
//     })
//   }

// I wanna to write a callback hell

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3)
//     }, 1000)
//   }, 1000)
// }, 1000)

// This are the same. async keyword before function makes function
// return a promise

// function myFunc() {
//   Promise.resolve('hello')
// };

async function myFunc2() {
  return new Error('eroooooooor')
}

myFunc2().then((result) => console.log('then', result))
.catch((error) => console.log('catch', error))