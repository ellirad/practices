let test = 'this is for test';
test = 'this is just test';
console.log(test.length);

console.log(test);
/*
let and const only control whether or not a variable can be
 reassigned and have nothing to do with mutability
*/
const food = ['sandwich', 'fries', 'rice', 'potato'];
food.length = 2;
console.log(food);

const numbers = [1, 2];
console.log(numbers.push(3)); 