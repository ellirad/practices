/*
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/
var arr = [10, 20, 30, 40, 50, 60];

function sumofArray(sum, num, index, arr) {
    console.log(sum, num, index, arr)
  return sum + num;
}

function myGeeks(item) {
  const _temp = arr.reduce(sumofArray);
  console.log(_temp);
}

myGeeks(arr);

let totalArr = arr.reduce(function(total, current) {
  console.log(total, current);
  return total + current
})

console.log(totalArr);

array.reduce(function(total, currentValue) {

})
