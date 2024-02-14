const popup = document.querySelector('.hero__popup')

setTimeout(() => {
	popup.classList.add('hero__popup-visible')
}, 2000)

setTimeout(() => {
	if (popup.classList.contains('hero__popup-visible')) {
		popup.classList.remove('hero__popup-visible')
	}
}, 10000)

popup.addEventListener('click', evt => {
	if (evt.target.classList.contains('hero__popup-close')) {
		popup.classList.remove('hero__popup-visible')
	}
})
