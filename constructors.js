function User(name) {
    // this = {};  (implicitly)
  
    // add properties to this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implicitly)
  }

const user1 = new User('ellie');
const user2 = new User('ellie');

user1.name = 'atefe';
console.log(user1)

// Refrence type: object, array
// Primitve type: string, number

console.log(user1 === user2)