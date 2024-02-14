const descrLinks = document.querySelectorAll('.descr__link')
const descrText = document.querySelector('.descr__text')
const descrTextContent = document.querySelectorAll('.descr__text-content')

descrLinks.forEach(link => {
	link.addEventListener('click', evt => {
		evt.preventDefault()
		let href = evt.target.getAttribute('href')

		descrLinks.forEach(item => {
			if (item.classList.contains('active')) {
				item.classList.remove('active')
			}
		})

		descrTextContent.forEach(text => {
			if (text.classList.contains('active')) {
				text.classList.remove('active')
			}
		})

		evt.currentTarget.classList.add('active')
		descrText.querySelector(`[data-target='${href}']`).classList.add('active')
	})
})
