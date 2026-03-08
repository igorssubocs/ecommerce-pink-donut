export const formatPrice = (price) => {
	if (price == null || Number.isNaN(Number(price))) return '$0.00'
	return `$${Number(price).toFixed(2)}`
}
