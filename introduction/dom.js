console.log("Arif");

console.log('DOM');

const arr=[12,34,45,67,89,90];
console.log(arr);


// document.getElementById('para').innerText='Eftekher Ali Efte'
const h1=document.getElementsByTagName('h1');

for (let heading of h1)
{
    console.log(heading.innerHTML);
}
const button= document.getElementById('click')
button.setAttribute('title','i am dom button')
console.log(button);
console.log(button.getAttribute('id'));
button.style.backgroundColor="red";

const unorderedList=document.getElementById('ul_id');
const li=document.createElement('li');
li.innerHTML='list-item-4';
unorderedList.appendChild(li);