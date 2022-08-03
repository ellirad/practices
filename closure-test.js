function counter(init) {
    var count = init

    function runner() {
        count++
        return count;
    }

    return runner;
}
var test = counter(2);

console.log(test())
console.log(test())
console.log(test())
console.log(test())

var test2 = counter(9)
console.log(test2())
console.log(test2())
console.log(test2())