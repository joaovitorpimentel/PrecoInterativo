const range = document.getElementById('range');
const pageviewsCount = document.getElementById('card-header-pageview-counter');
const toggleDiscount = document.getElementById('toggle_discount');
const preco = document.getElementById('card-header-price-value');

function handleChangePrice(value) {
	let priceValue = 8;

	if ((value > 0) & (value <= 20)) {
		pageviewsCount.textContent = '10K PAGEVIEWS';
		priceValue = 8;
	} else if (value > 20 && value <= 40) {
		pageviewsCount.textContent = '50K PAGEVIEWS';
		priceValue = 12;
	} else if (value > 40 && value <= 60) {
		pageviewsCount.textContent = '100K PAGEVIEWS';
		priceValue = 16;
	} else if (value > 60 && value <= 80) {
		pageviewsCount.textContent = '500K PAGEVIEWS';
		priceValue = 24;
	} else if (value > 80 && value <= 100) {
		pageviewsCount.textContent = '1M PAGEVIEWS';
		priceValue = 36;
	}

	if (toggleDiscount.checked) {
		const totalValue = priceValue - priceValue * 0.25;
		preco.textContent = `$${totalValue}.00`;
	} else {
		preco.textContent = `$${priceValue}.00`;
	}

	range.style.background = `linear-gradient(
		to right,
		hsl(174, 77%, 80%) 0%,
		hsl(174, 77%, 80%) ${value}%,
		 hsl(224, 65%, 95%) 50%,
		 hsl(224, 65%, 95%) 100%
	)`;

}

range.addEventListener('input', function (event) {
	console.log('range value :>> ', event.target.value);
	const value = range.value;
	handleChangePrice(value);
});

toggleDiscount.addEventListener('input', function (event) {
	console.log('range value :>> ', event.target.value);
	const value = range.value;
	handleChangePrice(value);
});