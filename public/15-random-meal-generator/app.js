const getMealBtn = document.getElementById('get_meal');
const mealConatiner = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      createMeale(res.meals[0]);
    });
});

function createMeale(meal) {
  mealConatiner.innerHTML = `
      <div class="col-span-12">
        <img src="${meal.strMealThumb}" class="w-96 h-96 object-cover rounded" alt="Meal" />
        <div class="my-3">
          <span class="font-bold">Category:</span>
          <span>${meal.strCategory}</span>
        </div>
        <div class="mb-3">
          <span class="font-bold">Area:</span>
          <span>${meal.strArea}</span>
        </div>
        <div class="mb-3">
          <span class="font-bold">Tags:</span>
          <span>${meal.strTags.split(',').join(', ')}</span>
        </div>
        <h1 class="my-5 text-2xl font-bold">Ingredients:</h1>
        <ul>
          <li>${meal.strIngredient1} - ${meal.strMeasure1}</li>
          <li>${meal.strIngredient2} - ${meal.strMeasure2}</li>
          <li>${meal.strIngredient3} - ${meal.strMeasure3}</li>
          <li>${meal.strIngredient4} - ${meal.strMeasure4}</li>
          <li>${meal.strIngredient5} - ${meal.strMeasure5}</li>
          <li>${meal.strIngredient6} - ${meal.strMeasure6}</li>
          <li>${meal.strIngredient7} - ${meal.strMeasure7}</li>
          <li>${meal.strIngredient8} - ${meal.strMeasure8}</li>
          <li>${meal.strIngredient9} - ${meal.strMeasure9}</li>
          <li>${meal.strIngredient10} - ${meal.strMeasure10}</li>
          <li>${meal.strIngredient11} - ${meal.strMeasure11}</li>
          <li>${meal.strIngredient12} - ${meal.strMeasure12}</li>
        </ul>
      </div>
      <div class="col-span-6 w-6/12">
        <div class="text-2xl mb-3 font-bold text-center">${meal.strMeal}</div>
        <div class="text-gray-800">
          ${meal.strInstructions}
        </div>
      </div>
  `;
}