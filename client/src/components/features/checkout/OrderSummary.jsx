import { formatPrice } from '../../../utils/formatPrice'

const OrderSummary = ({ items, total, itemCount }) => {
	return (
		<div className="bg-white rounded-3xl p-7">
			<h3 className="text-xl font-semibold mb-5">Order Summary</h3>
			<div className="space-y-3">
				{items.map(item => (
					<div key={item.product._id} className="flex justify-between">
						<span className="text-gray-500">
							{item.product.name} × {item.quantity}
						</span>
						<span className="font-semibold">
							{formatPrice(item.price * item.quantity)}
						</span>
					</div>
				))}
			</div>

			<div className="flex justify-between mt-5">
				<span className="font-bold text-lg">
					Total ({itemCount} items)
				</span>
				<span className="font-bold text-xl text-pink-400">
					{formatPrice(total)}
				</span>
			</div>
		</div>
	)
}

export default OrderSummary