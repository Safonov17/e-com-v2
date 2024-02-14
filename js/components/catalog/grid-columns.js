const catalogColumns = document.querySelector('.catalog__columns')
const catalogGrid = document.querySelector('.catalog__grid')
const catalogColumnsButtons = document.querySelectorAll('.catalog__columns-btn')

/* 
Если пользователь кликнул по кнопке с номером или по ее родителю, мы меняем значение data атрибута в элементе catalog__grid на этот номер. Затем мы сбрасываем current с кнопок с номерами и применяем его только к элементу, на котором был произведен клик
*/

catalogColumns.addEventListener('click', evt => {
	if (
		evt.target.classList.contains('catalog__columns-btn') ||
		evt.target.closest('catalog__columns-item')
	) {
		let columnsNum = evt.target.dataset.columns
		catalogGrid.dataset.gridColumns = columnsNum

		catalogColumnsButtons.forEach(btn => {
			btn.classList.remove('catalog__columns-btn--current')
		})

		evt.target.classList.add('catalog__columns-btn--current')
	}
})
