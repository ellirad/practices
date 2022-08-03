/*
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
*/

function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);

// With callback:

function myCalculator(num1, num2, myCallback) {
    let num = num1 + num2;
    myCallback(num)
}

myCalculator(2, 3, myDisplayer)