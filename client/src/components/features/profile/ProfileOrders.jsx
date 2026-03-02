import { Package, Loader2 } from 'lucide-react'
import { useOrders } from '../../../hooks/useOrders'
import { formatPrice } from '../../../utils/formatPrice'
import Button from '../../ui/button/Button'

const ProfileOrders = () => {
	const { orders, loading, error } = useOrders()

	return (
		<div className="bg-white rounded-3xl p-7">
			<h2 className="font-bold text-2xl mb-4">Order History</h2>

			{loading ? (
				<div className="flex items-center justify-center py-10">
					<Loader2 className="w-8 h-8 text-pink-400 animate-spin" />
				</div>
			) : error ? (
				<div className="text-center py-7">
					<p className="text-pink-400">{error}</p>
				</div>
			) : orders.length > 0 ? (
				<div className="space-y-3">
					{orders.map((order) => (
						<div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
							<div>
								<p className="font-semibold">{order.orderNumber}</p>
								<p className="text-sm text-gray-500">
									{new Date(order.createdAt).toLocaleDateString()}
								</p>
							</div>
							<div className="text-right">
								<p className="font-semibold">{formatPrice(order.total)}</p>
								<p className="text-sm text-pink-400">{order.status}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="text-center py-7">
					<Package className="w-12 h-12 text-gray-400 mx-auto mb-3" />
					<p className="text-gray-500 mb-4">No orders yet</p>
					<Button
						to="/catalog"
						className="bg-pink-400 text-white rounded-full hover:bg-pink-500"
					>
						Start Shopping
					</Button>
				</div>
			)}
		</div>
	)
}

export default ProfileOrders
