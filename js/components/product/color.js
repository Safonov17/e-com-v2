const color = document.querySelector('#color')
const circles = document.querySelectorAll('.info__color-circle')

circles.forEach(circle => {
	circle.addEventListener('click', evt => {
		circles.forEach(circle => {
			circle.classList.remove('info__color-circle--current')
		})
		circle.classList.add('info__color-circle--current')
		const currentColor = evt.target.style.backgroundColor
		color.textContent = currentColor
	})
})
