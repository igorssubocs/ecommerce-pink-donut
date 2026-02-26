import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import axios from 'axios'
import { useProduct } from '../hooks/useProduct'
import { useCart } from '../hooks/useCart'
import { useSelector } from 'react-redux'
import ProductImages from '../components/features/product/ProductImages'
import ProductTabs from '../components/features/product/ProductTabs'
import Advantages from '../components/features/product/Advantages'
import ProductCard from '../components/ui/card/ProductCard'
import Button from '../components/ui/button/Button'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export default function Product() {
	const navigate = useNavigate()
	const { path } = useParams()
	const { product } = useProduct(path)
	const { user } = useSelector(state => state.auth)
	const { addToCart } = useCart()
	const [relatedProducts, setRelatedProducts] = useState([])

	useEffect(() => {
		axios.get(`${API_URL}/products?limit=4`)
			.then(res => setRelatedProducts(res.data.data.slice(0, 4)))
			.catch(err => console.error('Error:', err))
	}, [])

	const handleAddToCart = async () => {
		if (!user) {
			navigate('/login')
			return
		}

		await addToCart(product._id, 1)
	}

	if (!product) return (
		<div className="flex flex-col items-center justify-center h-full">
			<Button to="/catalog" className="bg-pink-400 text-white rounded-full hover:bg-pink-500">
				Back to Catalog
			</Button>
		</div>
	)

	return (
		<section className="space-y-5">
			<Link to="/catalog" className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-400">
				<ChevronLeft className="w-5 h-5" /> Back to Catalog
			</Link>

			<div className="grid lg:grid-cols-2 gap-10">
				<ProductImages images={product.images} name={product.name} />

				<div className="space-y-10 mb-20">
					<div className="space-y-3">
						<h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">{product.flavor}</h1>
						<p className="text-gray-600">{product.description}</p>
						<div className="flex justify-between items-start font-semibold text-xl">
							<p>Box of {product.countInBox}</p>
							<p>${product.price.toFixed(2)}</p>
						</div>
					</div>

					<Button
						onClick={handleAddToCart}
						disabled={!product.inStock}
						className="w-full bg-pink-400 text-white rounded-2xl hover:bg-pink-500"
					>
						{product.inStock ? 'Add to Cart' : 'Out of Stock'}
					</Button>

					<Advantages />

					<ProductTabs product={product} />
				</div>
			</div>

			{relatedProducts.length > 0 && (
				<div>
					<h2 className="font-bold text-3xl sm:text-4xl mb-10">You may also like</h2>
					<div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
						{relatedProducts.map(prod => (
							<ProductCard key={prod._id} product={prod} />
						))}
					</div>
				</div>
			)}
		</section>
	)
}