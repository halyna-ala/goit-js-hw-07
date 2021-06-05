const categoriesEl = document.querySelectorAll('li.item');
// console.log(categoriesEl);
const categoEl = document.querySelectorAll('#categories>li')
// console.log(categoEl);
categoEl.forEach(el => 
    console.log(`Категория: ${el.firstElementChild.textContent}
    Количество элементов: ${el.lastElementChild.children.length}`));

    

