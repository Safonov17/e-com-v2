const catalogGrid = document.querySelector('.catalog__grid')
const dataCatalog = [
	{
		title: 'Eye Mesh Boat Shoes',
		price: 220,
		oldPrice: false,
		maxPrice: false,
		badge: 'new',
		sale: false,
		imgPath: './img/product/prod-1.jpg'
	},
	{
		title: 'Azure Tote',
		price: 290,
		oldPrice: false,
		maxPrice: false,
		badge: '',
		sale: false,
		imgPath: './img/product/prod-2.jpg'
	},
	{
		title: 'Blue Raincoat',
		price: 430,
		oldPrice: false,
		maxPrice: false,
		badge: '',
		sale: false,
		imgPath: './img/product/prod-3.jpg'
	},
	{
		title: 'Backpack with contrasting buckle',
		price: 80,
		oldPrice: false,
		maxPrice: 125,
		badge: 'best seller',
		sale: false,
		imgPath: './img/product/prod-4.jpg'
	},
	{
		title: 'Shirt in organic cotton classic ging',
		price: 59.5,
		oldPrice: false,
		maxPrice: false,
		badge: 'best seller',
		sale: false,
		imgPath: './img/product/prod-5.jpg'
	},
	{
		title: 'Tailored indigo jumpsuit',
		price: 128,
		oldPrice: 165,
		maxPrice: false,
		badge: 'hot',
		sale: true,
		imgPath: './img/product/prod-6.jpg'
	},
	{
		title: 'Triple stone drop earrings',
		price: 49.5,
		oldPrice: false,
		maxPrice: false,
		badge: 'top rate',
		sale: false,
		imgPath: './img/product/prod-7.jpg'
	},
	{
		title: 'Backpack with contrasting buckle',
		price: 158,
		oldPrice: false,
		maxPrice: false,
		badge: 'only a few left',
		sale: false,
		imgPath: './img/product/prod-8.jpg'
	},
	{
		title: 'High-rise Peyton wide-leg pant',
		price: 59.5,
		oldPrice: false,
		maxPrice: false,
		badge: 'hot',
		sale: false,
		imgPath: './img/product/prod-9.jpg'
	},
	{
		title: 'Long-sleeve everyday cashmere creative',
		price: 98,
		oldPrice: false,
		maxPrice: false,
		badge: 'hot',
		sale: false,
		imgPath: './img/product/prod-10.jpg'
	},
	{
		title: 'Silk button-up shirt in botanical chemistry',
		price: 120,
		oldPrice: false,
		maxPrice: false,
		badge: 'top rate',
		sale: false,
		imgPath: './img/product/prod-1.jpg'
	},
	{
		title: 'Parke blazer in English herringborger',
		price: 138,
		oldPrice: false,
		maxPrice: false,
		badge: '',
		sale: false,
		imgPath: './img/product/prod-2.jpg'
	}
]

const options = { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }
const formatter = new Intl.NumberFormat('en-US', options)

dataCatalog.map(product => {
	const newProduct = `
		<li class="catalog__grid-item">
			<article class="product ${product.sale ? 'product__sale' : ''}">
				<div class="product__image">
					<img src="${product.imgPath}" alt="${product.title}" />
				</div>
				<span class="${product.badge ? 'product__badge' : ''} ${connectWords(
		product.badge
	)}">${product.badge ? product.badge : ''}</span>
				<h3 class="product__title">
					<a href="#">${product.title}</a>
				</h3>
				<span class="product__price">${formatter.format(product.price)}</span>
				<span class="product__old-price">${
					product.oldPrice ? formatter.format(product.oldPrice) : ''
				}</span>
				<span class="${product.maxPrice ? 'product__max-price' : ''}">${
		product.maxPrice ? formatter.format(product.maxPrice) : ''
	}</span>
			</article>
		</li>
	`

	catalogGrid.insertAdjacentHTML('beforeend', newProduct)
})

function connectWords(text) {
	if (text.split(' ').length > 1) {
		return text.replace(/ +/g, '-')
	} else return text
}
