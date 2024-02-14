const sizes = document.querySelectorAll('.info__size-item')
const sizeTitle = document.querySelector('.info__size-title')
const clearBtn = document.querySelector('.info__size-clear')
let selectedSizes = ''

sizes.forEach(sizeItem => {
	sizeItem.addEventListener('click', evt => {
		evt.target.classList.toggle('info__size-item--current')

		if (evt.target.classList.contains('info__size-item--current')) {
			let currentSize = evt.target.textContent + ', '
			selectedSizes += currentSize
		} else {
			let currentSize = evt.target.textContent + ', '
			selectedSizes = selectedSizes.replace(currentSize, '')
		}

		if (selectedSizes) {
			sizeTitle.textContent = selectedSizes.substring(
				0,
				selectedSizes.length - 2
			)
		} else {
			sizeTitle.textContent = 'Select a size'
		}
	})
})

clearBtn.addEventListener('click', () => {
	selectedSizes = ''
	sizeTitle.textContent = 'Select a size'
	sizes.forEach(size => {
		size.classList.remove('info__size-item--current')
	})
})
