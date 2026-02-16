import ProductCard from '../../ui/card/ProductCard'

export default function ProductGrid({ products }) {
	return (
		<div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}