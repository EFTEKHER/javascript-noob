const obj = {
  name: "Efte",
  age: 24,
  height: 5.6,
  religion: "islam",
  nationality: "bangladesh",
  subject:{
    'bangla':100,
    'english':89
  }
};

// const name=obj.name;
// console.log(name);

const { name, religion, nationality } = obj;
console.log(name);
console.log(nationality);
const {subject}=obj?.efte
console.log(subject);