
/*
Memoization: a performance optimization technique which eliminates the need to recompute 
a value for a given input by storing the original computation and returning that stored 
value when the same input is provided. Caching is a form of memoization. Here's a simple 
implementation of memoization:

One other aspect of memoization is value referential equality. For example:

const dog1 = new Dog('sam')
const dog2 = new Dog('sam')
console.log(dog1 === dog2) // false

Even though those two dogs have the same name, they are not the same. However, we can use 
memoization to get the same dog:
*/

const dogs = {}
function getDog(name) {
  if (dogs[name] === undefined) {
    dogs[name] = new Dog(name)
  }
  return dogs[name]
}

const dog1 = getDog('sam')
const dog2 = getDog('sam')
console.log(dog1 === dog2) // true