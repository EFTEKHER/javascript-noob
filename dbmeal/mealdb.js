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

 
};

const getFoods = (foods) => {
  console.log(foods);
for(let food of foods) {
    let row=  document.getElementById('row');

let colDiv=document.createElement('div');
colDiv.classList.add('col');
let length=food.strInstructions.length;

colDiv.innerHTML=`
<div class="card shadow " style="width: 26rem;">
  <img src="${food.strMealThumb}" class="card-img-top  h-25 w-30" alt="..."/>
  <div class="card-body h-50">
    <p class="card-text fw-bolder ">Name: <span class="text-primary ">${food.strMeal}  </p>
    <p class="card-text ">${food.strInstructions}</p>
    <p></p>
  </div>
</div>

` 
row.appendChild(colDiv)
}
};

mealdb();
