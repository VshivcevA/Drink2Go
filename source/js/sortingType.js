const sortingButton = document.querySelector('.sorting__type')
const sortingText = sortingButton.querySelector('.sorting__type--text')
const sortingList = document.querySelector('.sorting__list')
const sortingItemArray = sortingList.querySelectorAll('.sorting__item')
const sortingArrow = sortingButton.querySelector('.sorting__type--arrow')

sortingList.classList.add('hidden')
sortingButton.onclick = () => {
  sortingList.classList.toggle('hidden');
  sortingArrow.classList.toggle('sorting__type--arrow-rotate180');
}
sortingItemArray.forEach(item =>
  item.onclick = (evt) => {
    sortingText.textContent = evt.target.textContent;
    sortingItemArray.forEach(item =>
      item.classList.remove('sorting__item--active'));
    evt.target.classList.add('sorting__item--active');
    sortingArrow.classList.toggle('sorting__type--arrow-rotate180');
    sortingList.classList.add('hidden');
  })
