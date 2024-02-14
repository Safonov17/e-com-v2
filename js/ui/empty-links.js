// Удалить, после завершения проекта

document.addEventListener('click', evt => {
	if (evt.target.tagName === 'A' && evt.target.getAttribute('href') === '#') {
		evt.preventDefault()
	}
})
