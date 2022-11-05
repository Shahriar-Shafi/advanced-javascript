const numbers = [2, 3, 4, 5, 7, 8]
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// We can write as below 
// function square(element) {
//     return element * element;
// }
// numbers.map(square);

//Other ways to do a function
// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function (element) {
//     return element * element;
// })

// const result = numbers.map(x => x * x)

const bigger = numbers.filter(x => x > 5);
const isThere = numbers.find(x => x > 5);
console.log(isThere);