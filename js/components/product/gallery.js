const gallerySliderList = document.querySelector('.gallery__slider-list')
const gallerySliderMain = document.querySelector('.gallery__slider-main img')
const gallerySliderItem = document.querySelectorAll('.gallery__slider-item')

gallerySliderList.addEventListener('click', evt => {
	if (evt.target.classList.contains('gallery__slider-item')) {
		gallerySliderItem.forEach(item => {
			item.classList.remove('current')
		})
		evt.target.classList.add('current')

		let src = evt.target.querySelector('img').getAttribute('src')
		gallerySliderMain.setAttribute('src', src)
	}
})
