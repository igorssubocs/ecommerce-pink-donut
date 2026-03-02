import api from '../utils/api'

export const orderService = {
	getUserOrders: async () => {
		const response = await api.get('/orders')
		return response.data
	},

	getOrderById: async (orderId) => {
		const response = await api.get(`/orders/${orderId}`)
		return response.data
	}
}
