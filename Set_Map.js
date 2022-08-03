// const alpha = new Set(['a', 'b', 'b', 'b', 'c']);

// console.log(alpha); // Set { 'a', 'b', 'c' }

// const test = new Set([{a: 2, b: 3, c: 3, d: 4}]);
// console.log(test)

// const numbers = new Set([1, 2, 3])
// console.log(numbers);


let obj = { a: 1}

const items = new Set([[2], [2]]);

console.log(items.has([2]));

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
console.log(map);

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3

// object as key
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log( visitsCountMap.get(john) );