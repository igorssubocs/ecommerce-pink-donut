import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCart } from '../hooks/useCart'
import CartList from '../components/features/cart/CartList'
import CartSummary from '../components/features/cart/CartSummary'
import CartEmpty from '../components/features/cart/CartEmpty'
import Button from '../components/ui/button/Button'
import Modal from '../components/ui/modal/Modal'
import { Trash2 } from 'lucide-react'

const Cart = () => {
	const navigate = useNavigate()
	const { user } = useSelector(state => state.auth)
	const { items, total, updateQuantity, removeItem, clearCart, itemCount } = useCart()
	const [isModalOpen, setIsModalOpen] = useState(false)

	if (!user) {
		return (
			<div className="h-full flex flex-col space-y-5 items-center justify-center">
				<h2 className="text-3xl font-bold">Please login to view cart</h2>
				<Button 
					to="/login" 
					className="bg-pink-400 text-white rounded-full hover:bg-pink-500"
				>
					Login
				</Button>
			</div>
		)
	}

	const handleClearCart = async () => {
		await clearCart()
		setIsModalOpen(false)
	}

	const handleIncrease = (productId, currentQuantity) => {
		updateQuantity(productId, currentQuantity + 1)
	}

	const handleDecrease = (productId, currentQuantity) => {
		if (currentQuantity > 1) {
			updateQuantity(productId, currentQuantity - 1)
		}
	}

	const handleRemove = (productId) => {
		removeItem(productId)
	}

	if (items.length === 0) {
		return <CartEmpty />
	}

	return (
		<section className="space-y-5">
			<div className="flex items-center justify-between">
				<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-5">Shopping Cart</h2>
				<button
					onClick={() => setIsModalOpen(true)}
					className="flex items-center gap-2 text-pink-400 hover:text-pink-500 transition-all"
				>
					<Trash2 className="w-5 h-5" />
					<span className="font-medium hidden sm:block">Clear Cart</span>
				</button>
			</div>

			<div className="grid lg:grid-cols-3 gap-5">
				<div className="lg:col-span-2">
					<CartList
						items={items}
						onIncrease={handleIncrease}
						onDecrease={handleDecrease}
						onRemove={handleRemove}
					/>
				</div>

				<div className="lg:col-span-1">
					<CartSummary subtotal={total} itemCount={itemCount} />
				</div>
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onConfirm={handleClearCart}
				title="Delete Products"
				message="Are you sure you want to delete the selected products? It will not be possible to cancel this action."
			/>
		</section>
	)
}

export default Cart