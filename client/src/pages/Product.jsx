import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useProduct } from '../hooks/useProduct'
import { useProducts } from '../hooks/useProducts'
import { useCart } from '../hooks/useCart'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils/formatPrice'
import ProductImages from '../components/features/product/ProductImages'
import ProductTabs from '../components/features/product/ProductTabs'
import Advantages from '../components/features/product/Advantages'
import ProductCard from '../components/ui/card/ProductCard'
import Button from '../components/ui/button/Button'
import Loading from '../components/ui/loading/Loading'
import Error from '../components/ui/error/Error'

export default function Product() {
	const navigate = useNavigate()
	const { path } = useParams()
	const { product, loading, error } = useProduct(path)
	const { user } = useSelector(state => state.auth)
	const { addToCart } = useCart()
	const { products: relatedProducts } = useProducts(4)

	const handleAddToCart = async () => {
		if (!user) {
			navigate('/login')
			return
		}

		await addToCart(product._id, 1)
	}

	if (loading) {
		return (
			<Loading
				title="Loading product"
				subtitle="Please wait 30-50 seconds... The server may be waking up."
			/>
		)
	}

	if (error) {
		return <Error title="Error" subtitle={error} />
	}

	if (!product) {
		return <Error title="Product not found" subtitle="The product you're looking for doesn't exist" />
	}

	return (
		<section className="space-y-5" id="product">
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
							<p>{formatPrice(product.price)}</p>
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
