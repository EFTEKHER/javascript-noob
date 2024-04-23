const listgroup=document.getElementById("list-group");
const listItems=document.getElementById("list-items");
const list=document.getElementById("list");

listgroup.addEventListener("click", function(){
    console.log("List Group clicked");
    event.stopPropagation(); 
})
listItems.addEventListener("click", function(){
    console.log("List Item Clicked");
    event.stopPropagation();
})

list.addEventListener("click", function(){
    console.log("List clicked");
    event.stopPropagation()
});