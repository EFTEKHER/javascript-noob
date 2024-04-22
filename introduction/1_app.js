//introduction js 2 types of Data type primtive ->Number,String,Boolean,Null,undefined,symble; non-primtive->array ,object,functions   

let num= 30;

console.log(typeof  num);
console.log(num);

let num1="30"

console.log(typeof num1);
console.log(num1);

//type conversions


let x=String(num);
console.log(`x: ${x} ${typeof x}`);


let y=Number(num1);
console.log(`y: ${y} ${typeof y}`);

let fullName="Eftekher Ali Efte";

console.log(fullName);


let fullNameToNumber=Number(fullName);
console.log(`fullNameToNumber: ${fullNameToNumber} ${typeof fullNameToNumber}`);

let a=num.toString();
console.log(a);

let date=new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getFullYear());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());