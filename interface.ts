interface IUser {
    readonly id: number;
    name: string;
    lastName: string;
}

let user: IUser = {
    name: 'John',
    id: 2,
    lastName: 'kia'
};

// can't change after creation
//user.id = 9;

// Read only array:
let numbers: number[] = [1, 2, 3];
let test: ReadonlyArray<number> = numbers;

// test[0] = 3; error!

//Excess Property Checks

interface Circle {
    radius: number;
    color: string;
    [propName: string]: any;
}

function createCircle(config: Circle): string {
    const area: number = config.radius * 2;
    return `the circle area is ${area} and the color is ${config.color}.`;
}

createCircle({radius:3, color: 'purple'});

// Function type

interface SearchFunc {
    (string: string, subString: string): boolean;
}
let mySearch: SearchFunc = function searchString(string: string, subString: string): boolean {
    let result = string.search(subString);
    return result > -1;
}

mySearch('test', 't');

// Class type

interface IPerson {
    name: string;
    age: number;
    getName(prefix: string): string
}

class Person implements IPerson{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(prefix: string) : string {
        return `${this.name}${prefix}`;
    }
};

const person1 = new Person('ellie', 33);
console.log(person1.getName('me'));

// Extending Interfaces
interface Animal {
    name: string;
    isMammal: boolean;
}

interface Whale extends Animal {
    type: string,
}

const killerWhale: Whale = {
    name: 'tako',
    isMammal: true,
    type: 'killer'
};

console.log(killerWhale)

