/**************
Technically any function that uses a variable from outside is a closure 
Function looks for variable in its scope, if it can't find it goes to upper scope,
its goes untill find it if it cant't then return undefined.

"whenever you declare a function inside another function, the inside function(s) 
is/are recreated again each time the outside function is called"

"Closures are functions that refer to independent (free) variables. In other words,
 the function defined in the closure 'remembers' the environment in which it was created."
***************/
// This is
// function addTo(inner) {
//     return inner + passed
// }
// var passed = 2
// console.log(addTo(2))

// Like this
// var passed = 2

// function addTo() {
//     var inner = 2;
//     return inner + passed
// }
// console.log(addTo(2)) //4

/**** variable changed *******/
// var passed = 2

// function addTo(inner) {
//     return inner + passed
// }
// console.log(addTo(2))

// passed = 3
// console.log(addTo(2))


//Complex example of closure
// var addTo = function(passed) {
//     var add = function(inner) {
//         return passed + inner
//     }
//     return add
// }
// var test = new addTo(9)
// console.log(test(3))

// let counter = 0;

// // Function to increment counter
// function add() {
//   let counter = 0;
//   counter += 1;
//   console.log(counter)
// }

// add();
// add();
// add();

// console.log(counter, 'counter')

// const add = function (c) {
//     let counter = c;
//     return function (i) {counter += i; return counter}
//   };
  
//   const counter = add(2);
//   console.log(counter(2))
//   console.log(counter(2))
//   console.log(counter(2))

// Usage

function init(counter) {
    var counter = 0;
 
    function jump_counter() {
        counter++;
        
        return counter;
    }
 
    return jump_counter;
}
 
var jump = init(3);
 
console.log(jump());
console.log(jump());
console.log(jump());

// var test = init(9)
// console.log(test())
// console.log(test())
// console.log(test())
// class Init {
//     private counter: number = 0;
 
//     public jump() {
//         this.counter += 1;
//     }
 
//     public getCounter() {
//         return this.counter;
//     }
// }
 
// var obj = new Init;
// obj.jump();
// obj.jump();
// obj.jump();
 
// console.log(obj.getCounter());


// Throttle and debounce functions using closure
// تابع Throttle مشخص میکنه که کدهای ما توی یک بازه زمانی مشخص فقط یک بار اجرا بشه.
// مثلاً می‌خوایم یک قطعه کد توی بازه زمانی ۱۰ ثانیه، حداکثر یک‌بار اجرا بشه. اینجا از تابع Throttle استفاده می‌کنیم.

function throttle (fn, delay) {
    let count =null;
    return function () {
        if(count + delay < Date.now()) {
            fn();
            count = Date.now();
        }
    }
};

const test1 = throttle(console.log('this is test'), 5000);