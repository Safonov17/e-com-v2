const relatedSlider = new Swiper('.related__slider', {
	loop: true,
	slidesPerView: 2,
	spaceBetween: 30,
	pagination: {
		el: '.related__pagination',
		type: 'bullets',
		clickable: true
	},
	breakpoints: {
		576: {
			slidesPerView: 3
		},
		768: {
			slidesPerView: 4
		}
	}
})
