const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulIngredientsEl = document.querySelector("#ingredients");

const liEl = document.createElement('li');
liEl.textContent = ingredients.join(', ');
liEl.classList.add('item');

ulIngredientsEl.appendChild(liEl);

console.log(ulIngredientsEl);