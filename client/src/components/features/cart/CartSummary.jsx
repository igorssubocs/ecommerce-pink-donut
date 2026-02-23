import { useState } from 'react'
import Button from '../../ui/button/Button'

const CartSummary = ({ subtotal, itemCount }) => {
	const [promoCode, setPromoCode] = useState('')
	const [discount, setDiscount] = useState(0)

	const total = subtotal - discount

	const handleApplyPromo = () => {
		if (promoCode.toLowerCase() === 'discount10') {
			setDiscount(subtotal * 0.1)
		}
	}

	return (
		<div className="bg-white rounded-3xl p-7 space-y-5">
			<h2 className="font-bold text-xl mb-4">Order Summary</h2>

			<div className='space-y-1'>
				<label className="text-sm">Promo Code</label>
				<div className="flex gap-2">
					<input 
						type="text" 
						value={promoCode}
						onChange={(e) => setPromoCode(e.target.value)}
						placeholder="Enter promo code"
						className="flex-1 px-4 py-3 border rounded-xl outline-none focus:border-pink-400 transition-colors"
					/>
					<Button
						onClick={handleApplyPromo}
						className="bg-pink-400 text-white rounded-2xl hover:bg-pink-500 px-5"
					>
						Apply
					</Button>
				</div>
			</div>

			<div className="space-y-1">
				<div className="flex justify-between">
					<h4 className='text-gray-500'>Subtotal ({itemCount} items)</h4>
					<p className="font-semibold">${subtotal.toFixed(2)}</p>
				</div>

				<div className="flex justify-between">
					<h4 className='text-gray-500'>Shipping</h4>
					<p className="font-semibold text-green-500">FREE</p>
				</div>

				{discount > 0 && (
					<div className="flex justify-between text-pink-400">
						<h4>Discount</h4>
						<p className="font-semibold">-${discount.toFixed(2)}</p>
					</div>
				)}

				<div className="flex justify-between">
					<h4 className="font-bold">Total</h4>
					<p className="font-semibold">${total.toFixed(2)}</p>
				</div>
			</div>

			<div className="space-y-2">
				<Button
					to="/checkout"
					className="w-full bg-pink-400 text-white rounded-2xl hover:bg-pink-500"
				>
					Proceed to Checkout
				</Button>
				<Button
					to="/catalog"
					className="w-full bg-gray-100 rounded-2xl hover:bg-gray-200"
				>
					Continue Shopping
				</Button>
			</div>
		</div>
	)
}

export default CartSummary