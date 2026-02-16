export const filterProducts = (products, { search, flavors, minPrice, maxPrice }) => {
	return products.filter(p => {
		const flavorMatch = !flavors.length || flavors.includes(p.flavor)
		const priceMatch = p.price >= (minPrice || 0) && p.price <= (maxPrice || Infinity)
		const searchMatch = !search || 
			p.name.toLowerCase().includes(search.toLowerCase()) ||
			p.flavor.toLowerCase().includes(search.toLowerCase())
		
		return flavorMatch && priceMatch && searchMatch
	})
}

export const sortProducts = (products, sort) => {
	const sorted = [...products]
	
	if (sort === "flavor-asc") return sorted.sort((a, b) => a.flavor.localeCompare(b.flavor))
	if (sort === "flavor-desc") return sorted.sort((a, b) => b.flavor.localeCompare(a.flavor))
	if (sort === "price-min") return sorted.sort((a, b) => a.price - b.price)
	if (sort === "price-max") return sorted.sort((a, b) => b.price - a.price)
	
	return sorted
}