const filter = document.querySelector('.filter')
const filterTabs = document.querySelectorAll('.filter__tab')
const filterTabHeaders = document.querySelectorAll('.filter__tab-header')
const btnHideFilters = document.querySelector('.filter__header-btn')
const filterTabList = document.querySelectorAll('.filter__tab-list')
const catalogFilters = document.querySelector('.catalog__filters')
const catalogFilterList = document.querySelector('.catalog__filters-list')
const catalogFilterClear = document.querySelector('.catalog__filters-clear')

// Open or close the tab
filterTabHeaders.forEach(tab => {
	tab.addEventListener('click', evt => {
		evt.currentTarget
			.closest('.filter__tab')
			.classList.toggle('filter__tab--open')
	})
})

// Close all tabs
btnHideFilters.addEventListener('click', () => {
	filterTabs.forEach(tab => {
		if (tab.classList.contains('filter__tab--open')) {
			tab.classList.remove('filter__tab--open')
		}
	})
})

function catalogFiltersCheck() {
	if (catalogFilters.children.length === 2) {
		catalogFilters.style.display = 'none'
	}
}

function createNewFilterBtn(text, dataset) {
	return `
		<button class="catalog__filters-btn" data-tab="${dataset}" data-filter-text="${text}">${text}</button>
	`
}

filterTabList.forEach(item => {
	item.querySelectorAll('input').forEach(input => {
		input.addEventListener('change', () => {
			if (input.checked) {
				input
					.closest('.custom-checkbox')
					.classList.add('custom-checkbox--active')

				let text = input
					.closest('.custom-checkbox')
					.querySelector('.custom-checkbox__text').textContent

				let dataset = input
					.closest('.filter__tab')
					.querySelector('.filter__tab-title').dataset.tab

				catalogFilters.insertAdjacentHTML(
					'afterbegin',
					createNewFilterBtn(text, dataset)
				)
			} else {
				let text = input.closest('.custom-checkbox').dataset.text
				document.querySelector(`[data-filter-text="${text}"]`).remove()

				input
					.closest('.custom-checkbox')
					.classList.remove('custom-checkbox--active')
			}

			let activeCheckboxes = document.querySelectorAll(
				'.custom-checkbox--active'
			)
			let counter = 0
			activeCheckboxes.forEach(() => counter++)
			if (counter > 0) {
				catalogFilters.style.display = 'flex'
			} else {
				catalogFilters.style.display = 'none'
			}

			input
				.closest('.filter__tab')
				.querySelector('.filter__tab-counter').textContent = input
				.closest('.filter__tab-list')
				.querySelectorAll('.custom-checkbox--active').length
		})
	})
})

catalogFilters.addEventListener('click', evt => {
	catalogFiltersCheck()

	if (evt.target.classList.contains('catalog__filters-btn')) {
		let text = evt.target.textContent.trimLeft().trimRight()
		const dataset = evt.target.dataset.tab

		filter
			.querySelector(`[data-tab="${dataset}"]`)
			.closest('.filter__tab')
			.querySelector(`[data-text="${text}"]`)
			.querySelector('input').checked = false
		filter
			.querySelector(`[data-tab="${dataset}"]`)
			.closest('.filter__tab')
			.querySelector(`[data-text="${text}"]`)
			.classList.remove('custom-checkbox--active')

		evt.target.remove()

		filter
			.querySelector(`[data-tab="${dataset}"]`)
			.closest('.filter__tab')
			.querySelector('.filter__tab-counter').textContent =
			catalogFilters.querySelectorAll(`[data-tab="${dataset}"]`).length
	}

	if (evt.target.classList.contains('catalog__filters-clear')) {
		Array.from(evt.currentTarget.children).forEach(item => {
			if (!item.classList.contains('catalog__filters-clear')) {
				item.remove()
			}

			filterTabList.forEach(el => {
				el.querySelectorAll('input').forEach(input => {
					input.checked = false
				})
				el.querySelectorAll('custom-checkbox').forEach(checkbox => {
					checkbox.classList.remove('custom-checkbox--active')
				})
			})
		})
		evt.currentTarget.style.display = 'none'
		if (evt.currentTarget.children === 1) {
			evt.currentTarget.style.display = 'none'
		}
		// Очистка счетчиков на табах
		filter.querySelectorAll('.filter__tab-counter').forEach(counter => {
			counter.textContent = 0
		})
	}
})
