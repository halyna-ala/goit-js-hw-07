const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  
  
  const liEl = ({url, alt}) => {
    return `
    <li>
    <img class='image' src='${url} alt='${alt}' width=240>
    </li>
    `;
  }
  // console.log(liEl);

  const galleryLi = images 
  .map(liEl)
  .join("");
  // console.log(galleryLi);

  const imgEl = document.querySelector('ul#gallery');
  imgEl.insertAdjacentHTML('afterbegin', galleryLi);
  console.log(imgEl);
  


  // for(let el of images)
  // document.querySelector('ul#gallery')
  // .imgEl.insertAdjacentHTML('afterbegin', `<li><img src="${el.url}" alt="${el.alt}"></li>`);

  // console.log(el);
  
//     const el= document.createElement('li');
//     el.textContent = vegatables;
//     return el;
// });
// console.log(elements);
// document.body.append(...elements);



// const imgesEl = gallery.map(foto => { 
  //   const imgEl = document.createElement('img');
  //   imgEl.textContent = foto;
  //   return imgEl;
  // });
  // console.log(imgesEl);
  // document.body.append(...imgesEl)