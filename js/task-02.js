const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

const listOfIngredient = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.textContent += ingredient;
  return list;
});

listOfIngredients.append(...listOfIngredient);





// const innerHTMLList = ingredients
//   .map((ingredient) => `<li>${ingredient}</li>`)
//   .join("");
// console.log(innerHTMLList);

// listOfIngredients.innerHTML = innerHTMLList;