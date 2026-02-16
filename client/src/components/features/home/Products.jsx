import { useState, useEffect } from "react"
import ProductCard from "../../ui/card/ProductCard"
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export default function Products() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios.get(`${API_URL}/products?sort=-id&limit=4`)
			.then(res => setProducts(res.data.data.slice(0, 4)))
			.catch(err => console.error('Error:', err))
			.finally(() => setLoading(false))
	}, [])

	return (
		<section>
			<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-10">
				Our Products
			</h2>
			<div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}