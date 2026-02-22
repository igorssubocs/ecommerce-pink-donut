import { Minus, Plus, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
	return (
		<div className="flex p-2 justify-between items-center bg-white rounded-3xl">
			<div className="flex gap-4 items-center">
				<Link to={`/product/${item.product.path}`}>
					<img 
						src={item.product.images[0]} 
						alt={item.product.name} 
						className="w-24 h-24 object-cover rounded-2xl" 
					/>
				</Link>
				<div>
					<Link 
						to={`/product/${item.product.path}`}
						className="font-semibold text-lg hover:text-pink-400 transition-colors"
					>
						{item.product.flavor}
					</Link>
					<p className="text-gray-500">${item.price.toFixed(2)}</p>
				</div>
			</div>

			<div className="flex items-center gap-5">
				<div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2">
					<button
						onClick={onDecrease}
						className="w-5 h-5 flex items-center justify-center hover:text-pink-400 transition-all"
					>
						<Minus className="w-5 h-5" />
					</button>
					<span className="font-semibold w-5 text-center">{item.quantity}</span>
					<button
						onClick={onIncrease}
						className="w-5 h-5 flex items-center justify-center hover:text-pink-400 transition-all"
					>
						<Plus className="w-5 h-5" />
					</button>
				</div>

				<button
					onClick={onRemove}
					className="w-10 h-10 flex items-center justify-center rounded-full hover:text-pink-400 transition-all"
				>
					<X className="w-5 h-5" />
				</button>
			</div>
		</div>
	)
}

export default CartItem