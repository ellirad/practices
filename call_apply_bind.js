// JAVASCRIPT INFO

// losing this
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

const person = {
  firstName: "ellie",
};

// let foo = "test";

// //The method setTimeout in-browser is a little special:
// // it sets this=window for the function call, so we access foo, but not firstName
// // setTimeout(user.sayHi, 1000);

// // 1. first solution: a wrapper

setTimeout(function () {
  user.sayHi();
}, 500);

let settimeoutEx = function () {
    function () {
    user.sayHi();
  }
}

setTimeout(settimeoutEx(), 500)

// // but this method has problem beacuse if we change user before setTimeout triggers
// // it gave wrong value!

// user.firstName = "ehsan";

// // bind can fix this problem
// setTimeout(user.sayHi.bind(person), 500);

// //A function cannot be re-bound.
// // remembers the context (and arguments if provided) only at creation time.
// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Pete" });

// f(); // John

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

const login = user.login;
login.bind(user)

askPassword(user.login.bind(user, true), user.login.bind(user, false));

// UNDERSTANDING JS
let person = {
    firstName: 'ellie',
    lastName: 'kiyani',
    fullname: function(arg1, arg2) {
        return arg1 + " " + arg2
    }
};

let person1 = function (arg1, arg2) {
    console.log(this.fullname(arg1, arg2))
}

const log = person1.bind(person);
log(1, 2);

// // call execute function but bind create a copy of it
person1.call(person, 'ellie', 'kiyani');
person1.apply(person, [2, 3]);

// // function currying
function multiple(a, b) {
    return a * b
};

// // first argument is what this is, and other arguments are the permenet argumnet
var multiple2 = multiple.bind(this, 2, 3);
console.log(multiple2())
