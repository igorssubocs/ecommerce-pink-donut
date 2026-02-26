import { useEffect, useState } from 'react'
import { Package } from 'lucide-react'
import { orderService } from '../../../services/orderService'
import Button from '../../ui/button/Button'

const ProfileOrders = () => {
	const [orders, setOrders] = useState([])

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await orderService.getUserOrders()
				setOrders(response.data)
			} catch (error) {
				console.error('Failed to fetch orders:', error)
			}
		}

		fetchOrders()
	}, [])

	return (
		<div className="bg-white rounded-3xl p-7">
			<h2 className="font-bold text-2xl mb-4">Order History</h2>

			{orders.length > 0 ? (
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
								<p className="font-semibold">${order.total.toFixed(2)}</p>
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