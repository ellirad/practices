// // // https://javascript.info/closure#lexical-environment

// // //A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.
// // let phrase = "hello"; //lexical enviroment => phrase: 'hello'

// // // execution starts  ........ phrase: 'uninitialized'
// // // let phrase;       ........ phrase: 'undefined'
// // // phrase = 'hello'  ........ phrase: 'hello'
// // // phrase = 'bye'    ........ phrase: 'bye' changed

// // /*
// // When the script starts, the Lexical Environment is pre-populated with all declared variables.
// // Initially, they are in the “Uninitialized” state. That’s a special internal state, it means that the engine knows about the variable, but it cannot be referenced until it has been declared with let. It’s almost the same as if the variable didn’t exist.
// // Then let phrase definition appears. There’s no assignment yet, so its value is undefined. We can use the variable from this point forward.
// // phrase is assigned a value.
// // phrase changes the value.
// // */

// every function create it's own execution object


// // // Function experssion
// // const getRectArea = function (width, height) {
// //   return width * height;
// // };

// // // Function declaration
// // function sayHi() {
// //   alert("Hello");
// // }

// // function sequenceEquals(arr1, arr2) {
// //   if (arr1.length !== arr2.length) return false;

// //   for (let i = 0; i < arr1.length; i++) {
// //     if (arr1[i] !== arr2[i]) return false;
// //   }
// //   return true;
// // }
// var timeout1 = setTimeout(function(){
//   console.log('b');
// });
// console.log('a');
// var timeout2 = setTimeout(function(){
//   console.log('c');
// },0);
// var timeout3= setTimeout(function(){
//   console.log('f');
// },2000);
// console.log('d');

let a = 5
console.log(++a)