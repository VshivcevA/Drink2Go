import catalog from "./mocks.js";

const templateSlider = document.querySelector('.template-slider').content.querySelector('.swiper-slide')
const sliderList = document.querySelector('.swiper-wrapper')

sliderList.innerHTML='';
catalog.forEach(data=> {
  if (data.promo) {
    const item = templateSlider.cloneNode(true);
    item.style.backgroundColor = data.promoBackground;
    item.querySelector('.slider-card__img').src ='../../img/catalog/promo/'+data.promoImg+'.png';
    item.querySelector('.slider-card__img').alt = 'Изображение напитка '+data.title;
    item.querySelector('.slider-card__title').textContent = data.title;
    item.querySelector('.slider-card__promo').textContent = data.promo;
    item.querySelector('.slider-card__description').textContent = data.description;
    item.querySelector('.slider-card__old-price').textContent = data.oldPrice + '₽';
    item.querySelector('.slider-card__price').textContent = data.price + '₽';
    sliderList.appendChild(item)
  }
})
