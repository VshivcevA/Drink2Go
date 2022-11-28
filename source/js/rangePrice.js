import './nouislider/nouislider.js'

const priceMin = document.querySelector('.range__input--min')
const priceMax = document.querySelector('.range__input--max')

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  step: 1,
  range: {
    'min': 0,
    'max': 1000
  }
});

slider.noUiSlider.on('update', function (values){
  priceMin.value = Math.trunc(values[0])
  priceMax.value = Math.trunc(values[1])
});
