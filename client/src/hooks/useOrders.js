import { useState, useEffect } from 'react'
import { orderService } from '../services/orderService'

export const useOrders = () => {
	const [orders, setOrders] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				setError(null)
				const response = await orderService.getUserOrders()
				setOrders(response.data || [])
			} catch (err) {
				console.error('Failed to fetch orders:', err)
				setError('Failed to load orders')
			} finally {
				setLoading(false)
			}
		}

		fetchOrders()
	}, [])

	const stats = {
		totalOrders: orders.length,
		totalSpent: orders.reduce((sum, order) => sum + order.total, 0)
	}

	return { orders, stats, loading, error }
}
