// Write map in pure javascirpt:
function map(arr, mapCallback) {
    if (! Array.isArray(arr) || ! arr.length || typeof mapCallback !== 'function') { 
        return [];
    } else {
        let result = [];

        for (let i = 0, len = arr.length; i < len; i++) {
            result.push(mapCallback(arr[i], i, arr)); 
        }

        return result;
    }
}

let arr = [1, 2, 3, 4];

function multiple (i) {
    return i * 2
}

let result = map(arr, multiple);

console.log(result);

// in map we have to return item, if didn't do that it's return undefind instead.

// let test = arr.map(function(item, index) {
//     if(index > 1) return item
// });

let test = arr.map((item, index) => {
    if(index > 1) return item
});

console.log(test);

/**********************************
 ------------Filter----------------
 **********************************/

 function filter(arr, filterCallback) {
    if (! Array.isArray(arr) || ! arr.length || typeof filterCallback !== 'function') { 
        return [];
    } else {
        let result = [];

        for (let i = 0, len = arr.length; i < len; i++) {
            if(filterCallback(arr[i])) {
                result.push(arr[i])
            }
        }

        return result;
    }
}

function isGraterThan2(element) {
    if(element > 2) return element
}

let filteredArr = filter(arr, isGraterThan2);

console.log(filteredArr);