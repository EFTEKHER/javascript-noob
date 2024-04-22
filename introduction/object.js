let mobile={
    price:1200,
    size:6.12,
    name:"Nokia",
    weight:300,

}


console.log(typeof mobile);


console.log(mobile.weight);
mobile.price=8900;
console.log(mobile);


let fullName="Eftekher Ali Efte";

let search="Efte";


if(fullName.includes("Eftea")) {
    console.log('Found');
}
else{
    console.log('Not Found');
}
if(fullName.indexOf("Efte")!=-1) {
    console.log('Found');
}
else{
    console.log('Not Found');
}

const a=fullName.split(" ");
console.log(a);
const b=1111034444067890
const d=a.join("?");
console.log(d);
const s= fullName.slice(5,11);
console.log(s);
const x=fullName.substring(0,4);
console.log(x);

const arr=[12,34,45,54,32,67];
const g=arr.slice(2,6);
console.log(g);
const numbers=[12,34,45,54,32,67]
const z=numbers.sort();
console.log(z);

const z1=numbers.reverse();
console.log(z1);

const k1=numbers.sort((a,b)=>{
    return b-a;
})
console.log(k1);