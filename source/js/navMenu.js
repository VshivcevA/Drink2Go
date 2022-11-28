const burger = document.querySelector('.js-burger')
const nav = document.querySelector('.nav')

if (document.documentElement.scrollWidth < 768) {
  burger.classList.remove('hidden')
  nav.classList.add('hidden')
}
burger.onclick = () => {
  nav.classList.toggle('hidden');
  burger.classList.toggle('js-burger--active');
}
