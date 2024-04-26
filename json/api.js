let obj={
    id:1,
    name:"Eftekher Ali Efte",
    pro:"Web Dev",
    skill:["js","React","wordpress"]

};

console.log(obj);
const stringified = JSON.stringify(obj);

console.log(stringified);

//javascript object notation (json)

const parsed=JSON.parse(stringified);
console.log(parsed.name);

console.log(parsed);


const fruits={
    id:3,
    name:["banana", "orange","mango"],
    region:{
        "color":"yellow",
        "Price":"30"
    }
}

const fruitsStringify=JSON.stringify(fruits);
console.log(fruitsStringify);
console.log(JSON.parse(fruitsStringify));
let x=JSON.parse(fruitsStringify);
console.log(x.region.color);