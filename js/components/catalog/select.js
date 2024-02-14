const customSelect = document.querySelectorAll('.custom-select')

customSelect.forEach(select => {
	select.addEventListener('click', evt => {
		evt.currentTarget.classList.toggle('custom-select--open')

		if (evt.target.classList.contains('custom-select__item')) {
			let text = evt.target.textContent
			evt.currentTarget.querySelector(
				'.custom-select__top'
			).textContent = text
		}
	})
})
