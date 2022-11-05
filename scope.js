// scope means area where they can find the value within its range
//Bonus variable is out the function so it is global
let bonus = 20;
//Function result can be called from inside but not from outside
function sum(first, second) {
    let result = first + second +bonus;
    console.log(bonus);
    return result;
}
const output = sum(3,7)
console.log(output);

//Wasting means var is accessible everywhere but have to be console below the var whereas let and const have a limited range or scope