const nav = document.querySelector('.nav')
const shop = document.querySelector('.shop')
const burger = document.querySelector('.burger')
const navCloseBtn = document.querySelector('.nav__close-btn')

burger.addEventListener('click', () => toggleMenu())
navCloseBtn.addEventListener('click', () => toggleMenu())
nav.addEventListener('click', evt => {
	if (
		evt.target.classList.contains('nav__item') ||
		evt.target.classList.contains('nav__link')
	) {
		toggleMenu()
	}
})

function toggleMenu() {
	nav.classList.toggle('nav--visible')
	shop.classList.toggle('shop--visible')
	document.body.style.overflow = 'scroll'
}
