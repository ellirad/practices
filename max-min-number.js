const input = [2, -5, 9];

let maximumNumber;
let minimumNumber;
let middleNumber;

function sortThem(input) {
  maximumNumber = input[0];
  minimumNumber = input[input.length - 1]

  for (let i = 0; i < input.length; i++) {
    if (maximumNumber > input[i]) {
      minimumNumber = input[i];
    } else if (minimumNumber < input[i] && maximumNumber > input[i]) {
      middleNumber = input[i];
      console.log('migifi')
    } else if(input[i] >= maximumNumber){
      maximumNumber = input[i];
    }
  }

  console.log(maximumNumber, minimumNumber, middleNumber);
}

sortThem(input);
