const nums = [1,2,3,4,5,6,7,8]
// const part = nums.slice(2,5);

//splice deletes number of things inside an array by given position and can insert any given number there
const removed = nums.splice(2,3,88)
// console.log(removed);
// console.log(nums);

const together = nums.join(",");
console.log(together);