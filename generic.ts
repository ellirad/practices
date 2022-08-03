const func = <T extends { name: string, age: number }>(obj: T) => {
    return obj
}

let test = func({ name: 'eli', age: 2 })

console.log(test)

function identity<T>(obj: T): T {
    return obj
}

let hey = identity({ name: '2', age: 10 });

console.log(hey.name)