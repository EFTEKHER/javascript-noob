console.log("1");
console.log("2");
console.log("3");
setTimeout(()=>{
    console.log('liza 36');   
   },1000)
console.log("4");
console.log("5");

console.log("6");


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))