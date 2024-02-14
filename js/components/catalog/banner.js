const banner = document.querySelector('.banner')

banner.addEventListener('click', evt => {
	if (evt.target.classList.contains('banner__close-img')) {
		banner.style.display = 'none'
	}
})
