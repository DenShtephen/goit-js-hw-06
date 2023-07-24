const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulIngredientsEl = document.querySelector("#ingredients");

let newArr = []

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  newArr.push(liEl);
});

ulIngredientsEl.append(...newArr);