const func = <T extends { name: string, age: number }>(obj: T) => {
    return obj
}

let test = func({ name: 'eli', age: 2 })

console.log(test)

function identity<T>(obj: T): T {
    return obj
}

let hey = identity({ name: '2', age: 10 });

console.log(hey.name);

// Generic function
function identify<T>(arg: T): T {
    return arg;
};

identify('hello');
identify(124);

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

getFirstElement<number>([0,3,2,3,2,5]);
getFirstElement<string>(['apple', 'banana', 'orange']);

// Using generic with interface
interface MetaData {
    nationality: string
}

interface Person<T> {
    name: string;
    age: number;
    id: number;
    metaData: T
};

const person1: Person<MetaData> = {
    name: 'ellie',
    age: 33,
    id: 1,
    metaData: {
        nationality: 'Persian',
    }
}

const person2: Person<string[] | number[]> = {
    name: 'Ehsan',
    age: 34,
    id: 2,
    metaData: [1, 2]
}

// Generic with classes
class Box<T> {
    private box: T;

    constructor(value: T) {
        this.box = value;
    };

    getBox(): T {
        return this.box;
    }
}

const box1 = new Box('present');
console.log(box1.getBox());

// Generic with interfaces
interface LengthWise {
    isBoolean: boolean;
}

function loggingIdentity<T extends LengthWise>(arg: T) : T {
    console.log(arg.isBoolean);
    return arg
};

const log = loggingIdentity({isBoolean: false, isNumber: false});