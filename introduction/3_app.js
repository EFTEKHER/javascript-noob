let sum=0;

function addition(a,b){
    // let arg=arguments;
    // console.log(arg);
    const result=a+b;
    sum+=result;
}



addition(20,34,89,90)
console.log(sum);


function add()
{
    let arg=arguments;
    for(let num of arg){
        sum+=Number(num);
    }
}


add(56,89,568,89,12);
console.log(sum);