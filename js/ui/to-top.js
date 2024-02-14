document.addEventListener('DOMContentLoaded', () => {
	const backToTop = document.getElementById('back-to-top')

	// Показать/скрыть кнопку при прокрутке страницы
	window.addEventListener('scroll', () => {
		if (window.scrollY > 500) {
			backToTop.style.display = 'inline-flex'
		} else {
			backToTop.style.display = 'none'
		}
	})

	// Плавная прокрутка при клике на кнопку
	backToTop.addEventListener('click', evt => {
		evt.preventDefault()
		window.scrollTo({ top: 0, behavior: 'smooth' })
	})
})
