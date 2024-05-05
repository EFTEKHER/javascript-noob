const mealdb = () => {
  document.getElementById("food-btn").addEventListener("click", () => {
    let foodID = document.getElementById("food_id");
    let foodName = foodID.value;
    foodID.value="";
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => getFoods(data.meals));
  });

 toggle("flex");
};
const toggle=spinnerDisplay=>{
  let spinner=document.getElementById('spinner');
  spinner.style.display=spinnerDisplay;
}
const getFoods = (foods) => {
  console.log(foods);
  let row=  document.getElementById('row');
  row.textContent='';


for(let food of foods) {
   
  
let colDiv=document.createElement('div');
colDiv.classList.add('col');
let length=food.strInstructions.length;

colDiv.innerHTML=`
<div class="card shadow m-4" style="width: 26rem;">
  <img src="${food.strMealThumb}" class="card-img-top  h-25 w-30" alt="..."/>
  <div class="card-body  overflow-y" style="height:400px">
    <p class="card-text fw-bolder ">Name: <span class="text-primary ">${food.strMeal}  </p>
    <p class="card-text text-text-truncate ">${food.strInstructions}</p>
    <p></p>
  </div>
</div>

` 
toggle("none");
row.appendChild(colDiv)

}
};

mealdb();
