const mobileFilterBtn = document.querySelector('.catalog__header-filter--btn')
const filterItem = document.querySelector('.filter')
const closeFilterBtn = document.querySelector('.filter__header-btn--close')

mobileFilterBtn.addEventListener('click', () => {
	filterItem.classList.toggle('filter--visible')
})
closeFilterBtn.addEventListener('click', () => {
	filterItem.classList.toggle('filter--visible')
})
