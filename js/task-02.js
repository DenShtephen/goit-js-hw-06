const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulIngredientsEl = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  ulIngredientsEl.appendChild(liEl);
});

console.log(ulIngredientsEl);