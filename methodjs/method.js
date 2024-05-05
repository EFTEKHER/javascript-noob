const info = {
  id: "1",
  name: "Arif",
  Job: "Web dev",
  salary: 500,
Job:["freelancer","Roche","Flyte Solutions"],
deposit:function(expense){
    this.salary=this.salary-expense;
    console.log("DEPOSITE");
    return this.salary;
}
};

//getting object keys
const keys = Object.keys(info);

console.log(keys);

const values = Object.values(info);

console.log(values);

console.log(values.length);

const entries = Object.entries(info);

console.log("entries");
console.log(entries);
Object.seal(info);


//freezing object
// Object.freeze(info);
info.name='Efte' 

delete info.name;
console.log(info);

console.log(info.deposit(100));
console.log('\n');
for (let x in info)
    {
        console.log(x,info[x]);
    }