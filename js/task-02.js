const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const createMarkup = text => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = text;
//   itemEl.classList.add('item');
//   return itemEl;
// };

// const ingredientsListEl = ingredients.map(ingredient =>
//   createMarkup(ingredient)
// );

// const placeToAppend = document.querySelector(
//   '#ingredients'
// );

// placeToAppend.append(...ingredientsListEl);


const ingredientsListEl = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl;
  });

const placeToAppend = document.querySelector('#ingredients');

placeToAppend.append(...ingredientsListEl)