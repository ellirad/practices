// let array =[1, 2];
// console.log(array.__proto__) // object
// console.log(array.__proto__.__proto__)

// let foo = function () {
//   console.log('test')
// }

// console.log(foo.__proto__)
// console.log(foo.__proto__.__proto__)

// const num = new Number(3);
// console.log(3 === num)
// console.log(num)


function User(username, email) {
  this.email = email;
  this.username = username;
  this.online = false;
  logout = function() {
    console.log('user loged out')
  }
}

User.prototype.login = function () {
  console.log(`${this.email} user has log in.`);
};

// const person1 = new User('eli', 'gmial');
// person1.login();

// // Functions can use as constructor when use "use" keyword. new keyword says execute this function as a constructor
// // function, meaning make a new object and assign that object to the keyword this.
// const user_one = new User("ellie", "elham.kiyani@gmail.com");
// user_one.login();

// const person = {
//   firstName: 'Default',
//   lastName: 'Default',
//   fullname: function() {
//     console.log(this.firstName + " " + this.lastName)
//   }
// };

// // Don't evet do this, becuase it's slow down performance
// let jane = {
//   firstName: 'Jane',
//   lastName: 'doe',
// }

// jane.__proto__ = person;

// // jane inherits methods from person object
// jane.fullname();

// let kyle = {
//   firstName: 'kyle',
// }

// kyle.__proto__ = person;

// kyle.fullname();

// // it's inherit last name from it's prototype object
// console.log(kyle.lastName);

// // the meaning of everything is object in javascript
// let a = {};
// let b = function() {};
// let c = [];

// console.log(a.__proto__) // is an object
// console.log(b.__proto__) // is a function
// console.log(c.__proto__) // is an array

// console.log(b.__proto__.__proto__) // is an object
// console.log(c.__proto__.__proto__) // is an object

// object.create

// Polyfill
// Create an object.create in old browser that doen't support object.create
// if(!Object.create) {
//   Object.create = function(obj) {
//     if(arguments.length > 1) {
//       throw new Error('object.create only accept one argument');
//     }

//     function F() {};
//     F.prototype = obj;
//     return new F()
//   }
// }

// var animal = {
//   name: 'cock',
//   type: 'tame',
//   info: function() {
//     return this.name + this.type
//   }
// }

// let chiken = Object.create(animal);
// chiken.name = 'chiken'
// chiken.type = 'tame'
// console.log(chiken)