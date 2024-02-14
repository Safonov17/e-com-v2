const promoData = [
	{
		title: "Women's <br > Mid-Season",
		imgPath: './img/promo/midseason.jpg'
	},
	{
		title: 'Summer <br > Romance',
		imgPath: './img/promo/summer.jpg'
	},
	{
		title: '20% Off <br > All  Accessories',
		imgPath: './img/promo/accs.jpg'
	}
]

const promoList = document.querySelector('.promo__list')

promoData.map(item => {
	const newItem = `
		<li class="promo__item">
			<article class="promo__card" style='background-image: url(${item.imgPath})'>
				<h3 class="promo__card-title">${item.title}</h3>
				<a href="#" class="main-link promo__card-link">Shop now</a>
			</article>
		</li>
	`
	promoList.insertAdjacentHTML('beforeend', newItem)
})
