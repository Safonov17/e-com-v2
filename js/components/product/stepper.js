const stepper = document.querySelector('.info__stepper'),
	stepperInput = document.querySelector('.info__stepper-input'),
	stepperMinus = document.querySelector('.info__stepper-btn--minus'),
	stepperPlus = document.querySelector('.info__stepper-btn--plus')

stepper.querySelector('input').addEventListener('keydown', evt => {
	// Поведение для кнопки "минус"
	if (evt.currentTarget.value <= 1) {
		stepperMinus.classList.add('info__stepper-btn--disabled')
		stepperPlus.classList.remove('info__stepper-btn--disabled')
	} else {
		stepperMinus.classList.remove('info__stepper-btn--disabled')
	}

	// Поведение для кнопки "плюс"
	if (evt.currentTarget.value >= 99999) {
		stepperPlus.classList.add('info__stepper-btn--disabled')
		stepperMinus.classList.remove('info__stepper-btn--disabled')
	} else {
		stepperPlus.classList.remove('info__stepper-btn--disabled')
	}
})

stepperPlus.addEventListener('click', () => {
	let currentValue = parseInt(stepperInput.value)
	currentValue++
	stepperInput.value = currentValue
	stepperMinus.classList.remove('info__stepper-btn--disabled')

	if (stepperInput.value > 99998) {
		stepperInput.value = 99999
		stepperPlus.classList.add('info__stepper-btn--disabled')
	} else {
		stepperPlus.classList.remove('info__stepper-btn--disabled')
	}
})

stepperMinus.addEventListener('click', () => {
	let currentValue = parseInt(stepperInput.value)
	currentValue--
	stepperInput.value = currentValue
	stepperPlus.classList.remove('info__stepper-btn--disabled')

	if (stepperInput.value <= 1) {
		stepperInput.value = 1
		stepperMinus.classList.add('info__stepper-btn--disabled')
	} else {
		stepperMinus.classList.remove('info__stepper-btn--disabled')
	}
})
