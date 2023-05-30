function renderCartItem(item) {
    
	const product = item;
	let itemCountText = $ {
		product.count
	}×
	$ {
		product.price.toFixed(2)
	}₽ = $ {
		(product.count * product.price).toFixed(2)
	}₽;
	return < div class = "cart-item" > < div > $ {
		product.title
	} < /div><div>${itemCountText}</div > < /div>; 

    }