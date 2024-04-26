const arr=[10,3,2,5,6,50,60,56]
const x=arr.map((x=>{
    return x*3;
}))
console.log(...x);
const res=arr.filter(x=>x<20);
console.log(res);
const rest1=arr.filter(x=>x!=10);
console.log(rest1);

const arr3=arr.filter(x=>x%2==0);
console.log(arr3);

const xfind=arr3.find(x=>x>20); //first value will return 
console.log(`array3 is ${arr3}`)

console.log(xfind);


const findIndex=arr3.findIndex(x=>x>10);
console.log(findIndex);

