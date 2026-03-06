import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { useProducts } from '../../../hooks/useProducts'
import ProductCard from '../../ui/card/ProductCard'

export default function Products() {
	const { products } = useProducts(4)

	return (
		<section className='mx-auto' id="products">
			<div className="flex justify-between items-center">
				<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-10">
					Our Products
				</h2>
				<Link to="/catalog" className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-400">
					See all products <ChevronRight className="w-5 h-5" />
				</Link>
			</div>
			<div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}
