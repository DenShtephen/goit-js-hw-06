const ulCategoriesEl = document.querySelector('ul#categories');
const liEl = ulCategoriesEl.querySelectorAll('li.item');

console.log(`Number of categories: ${liEl.length}`);

liEl.forEach((item) => {
  const h2El = item.querySelector('h2');
  const subLiEl = item.querySelectorAll('li');

  console.log(`Category : ${h2El.textContent} \n Elements: ${subLiEl.length}`);
});

// console.log(ulCategoriesEl);
// console.log(liEl);
