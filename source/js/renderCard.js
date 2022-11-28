import catalog from "./mocks.js";

const cardList = document.querySelector('.card-list')
const template = document.querySelector('.template').content.querySelector('.card-list__item')

cardList.innerHTML='';
catalog.forEach(data => {
  const item = template.cloneNode(true);
  item.querySelector('.card__img').src =
    '../../img/catalog/coffee-can-'+data.img+'.png';
  item.querySelector('.card__img').alt = 'Изображение напитка '+data.title;

  item.querySelectorAll('.card__link').forEach(link => link.href = data.link);
  item.querySelector('.card__title').textContent = data.title;
  item.querySelector('.card__description').textContent = data.description;
  item.querySelector('.card__price').textContent = data.price + '₽';
  cardList.appendChild(item)
})
