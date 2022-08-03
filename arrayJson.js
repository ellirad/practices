let fruits = ["banana", "apple", "orange", "dragon fruit"];

let jsonFruit = JSON.stringify(fruits);

console.log(jsonFruit);
//string ["banana","apple","orange","dragon fruit"]

/***********Object**************/

// var obj = {
//   name: "Lynda",
//   date: new Date(),
// };

// var data = JSON.stringify(obj);

// console.log(data.name);
// undefined

// function formDataConvertor(obj, arr) {
//   const formData = new FormData();
//   for (let key in obj) {
//     let selectedObj = arr.find((props) => props === key);
//     if (selectedObj) {
//       formData.append(key, JSON.stringify(obj[key]));
//     } else formData.append(key, obj[key]);
//   }
//   return formData;
// }

// formDataConvertor()

function replacer(key, value) {
    // Filtering out properties
    if (typeof value === 'array') {
      return JSON.stringify(value);
    }
    return value;
  }
  
  var foo = {foundation: 'Mozilla', model: 'box', week: ['pp', 'ea', 121], transport: 'car', month: 7};
;
  // '{"week":45,"month":7}'

  console.log(JSON.stringify(foo))
  console.log( JSON.stringify(foo, replacer))
