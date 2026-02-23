import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCart } from '../../../hooks/useCart'
import Button from '../button/Button'

const ProductCard = ({ product }) => {
	const navigate = useNavigate()
	const { user } = useSelector(state => state.auth)
	const { addToCart } = useCart()

	const handleAddToCart = async () => {
		if (!user) {
			navigate('/login')
			return
		}

		const productId = product._id || product.id
		await addToCart(productId, 1)
	}

	return (
		<div className="h-full flex flex-col p-2 space-y-6 rounded-3xl bg-white">
			<div className="space-y-3">
				<Link to={`/product/${product.path}`}>
					<img
						src={product.images[0]}
						alt={product.name}
						className="w-full h-48 object-cover rounded-2xl"
					/>
				</Link>
				<div className="flex justify-between items-start font-semibold text-lg">
					<Link to={`/product/${product.path}`}>
						<h3>{product.name}</h3>
					</Link>
					<p>$ {product.price.toFixed(2)}</p>
				</div>
			</div>

			<div className="flex-1 flex flex-col space-y-6">
				<p className="text-sm text-gray-600 flex-1 line-clamp-2">{product.description}</p>
				<Button
					onClick={handleAddToCart}
					className="w-full bg-pink-400 text-white hover:bg-pink-500 rounded-2xl"
				>
					Add to Cart
				</Button>
			</div>
		</div>
	)
}

export default ProductCard