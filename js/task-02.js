const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const elements =
ingredients.map(vegatables => {
    const el= document.createElement('li');
    el.textContent = vegatables;
    return el;
});
console.log(elements);
document.body.append(...elements);















//   const el= document.createElement('li');
//   console.log(el); 
 
//   el.textContent = (`ul.ingredients`);
//   console.log(el.textContent);
//   const ulEl = document.createElement('ul');
//   frormContainer.append(el, ulEl);
//   console.log(frormContainer);