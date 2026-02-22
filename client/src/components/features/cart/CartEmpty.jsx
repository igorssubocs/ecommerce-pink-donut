import { ShoppingBag } from 'lucide-react'
import Button from '../../ui/button/Button'

const CartEmpty = () => {
	return (
		<div className="flex flex-col items-center justify-center h-full text-center">
			<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
				<ShoppingBag className="w-12 h-12 text-gray-400" />
			</div>
			<h2 className="text-3xl font-bold mb-3">Your cart is empty</h2>
			<p className="text-gray-500 mb-5 max-w-md">
				Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
			</p>
			<Button
				to="/catalog"
				className="bg-pink-400 text-white rounded-full hover:bg-pink-500"
			>
				Start Shopping
			</Button>
		</div>
	)
}

export default CartEmpty