// const itemEl = (document.querySelectorAll('.item')).length;
// console.log('Number of categories:', itemEl);



// const categoryFirstEl = document.querySelectorAll('.item h2');
// console.log('Category:', categoryFirstEl[0].textContent);

// const qtyFirstEl = document.querySelectorAll('.item ul')[0].children.length;
// console.log('Elements:', qtyFirstEl);



// const categorySecondEl = document.querySelectorAll('.item h2');
// console.log('Category:', categorySecondEl[1].textContent);

// const qtySecondEl = document.querySelectorAll('.item ul')[1].children.length;
// console.log('Elements:', qtySecondEl);



// const categoryThirdEl = document.querySelectorAll('.item h2');
// console.log('Category:', categoryThirdEl[2].textContent);

// const qtyThirdEl = document.querySelectorAll('.item ul')[2].children.length;
// console.log('Elements:', qtyThirdEl);

const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

const result = itemsEl.forEach(elem => {
  let category = elem.firstElementChild.textContent;
  let elemCount = elem.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elemCount}`);
});