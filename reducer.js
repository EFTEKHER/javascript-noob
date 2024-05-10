const arr=[1,2,3,4,5,6];

const reduce=arr.reduce((prev,current)=>{
    return prev+current;
},0);

console.log(reduce);
let result=["javascript ", " is"," programming"]
const reduceString=result.reduce((prev,current)=>{
    return prev+current;
});
console.log(reduceString);