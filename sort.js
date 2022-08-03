let array = Array.from({
    length: 10
}, () => Math.floor(Math.random() * 1000));

console.log(array);

let a0 = Infinity;
let a1 = Infinity;
let a2 = Infinity;

for (let i = 0; i < array.length; i++) {
  if (array[i] < a0) {
    a2 = a1;
    a1 = a0;
    a0 = array[i];
  } else if (array[i] < a1) {
    a2 = a1;
    a1 = array[i];
  } else if (array[i] < a2) {
    a2 = array[i];
  }
}

console.log(a0, a1, a2);

// second solution

let N = 3;
let ary = array.slice(0, N);
ary.sort(function(a, b){return a - b});

for (let i = N; i < array.length; i++) {
if (array[i] < ary[N - 1]){
  ary[N - 1] = array[i];
  ary.sort(function(a, b){return a - b});
}
}

console.log(ary);