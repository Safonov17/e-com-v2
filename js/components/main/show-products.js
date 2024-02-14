const productsList = document.querySelector('.products__list')
const loadMore = document.querySelector('.products__more')
const url = 'https://634d09bcf5d2cc648e9a9b4f.mockapi.io/products'
let counter = 5

async function fetchData() {
	try {
		const response = await fetch(url)
		const data = await response.json()
		useData(data)
	} catch (err) {
		handleErrors(err)
	}
}
fetchData()

function handleErrors(err) {
	console.error(err)
}

function connectWords(text) {
	if (text.split(' ').length > 1) {
		return text.replace(/ +/g, '-')
	} else return text
}

function useData(data) {
	const options = {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	}
	const formatter = new Intl.NumberFormat('en-US', options)

	productsList.innerHTML = ''

	for (let i = 0; i < data.length; i++) {
		if (i < counter) {
			productsList.innerHTML += `
		<li class="catalog__grid-item">
			<article class="product ${data[i].sale ? 'product__sale' : ''}">
				<div class="product__image">
					<img src="${data[i].imgPath}" alt="${data[i].title}" />
				</div>
				<span class="${data[i].badge ? 'product__badge' : ''} ${connectWords(
				data[i].badge
			)}">${data[i].badge ? data[i].badge : ''}</span>
				<h3 class="product__title">
					<a href="#">${data[i].title}</a>
				</h3>
				<div class="product__price">
					<div class="product__price-box">
					<span class="product__new-price">${formatter.format(data[i].price)}</span>
					<span class="product__old-price">${
						data[i].oldPrice ? formatter.format(data[i].oldPrice) : ''
					}</span>
					<span class="${data[i].maxPrice ? 'product__max-price' : ''}">${
				data[i].maxPrice ? formatter.format(data[i].maxPrice) : ''
			}</span>
					</div>
			<div class="product__price-add">Add to cart</div>
				</div>
			</article>
		</li>
	`
		}
	}

	loadMore.addEventListener('click', () => {
		counter += 5
		fetchData()
	})

	if (productsList.getElementsByTagName('li').length === data.length) {
		loadMore.style.display = 'none'
	}
}
