const arr = [10, 20, 79, 12, 67];

// for (let i=0;i<arr.length;i++)
// {
//     console.log(...arr);
// }
console.log(...arr);

const arr3 = [12, 13, 45, 78, 90, 97];

const arr2 = [20, 56, 67, 90, 17];
console.log(Math.max(...arr2));
const arr5 = [...arr, ...arr2, ...arr3, 100, 200];
console.log(...arr5);
