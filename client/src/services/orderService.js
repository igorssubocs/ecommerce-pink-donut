import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const getAuthHeader = () => {
	const token = localStorage.getItem('token')
	if (!token) {
		throw new Error('No authentication token found')
	}
	return { Authorization: `Bearer ${token}` }
}

export const orderService = {
	getUserOrders: async () => {
		const response = await axios.get(`${API_URL}/orders`, {
			headers: getAuthHeader()
		})
		return response.data
	},

	getOrderById: async (orderId) => {
		const response = await axios.get(`${API_URL}/orders/${orderId}`, {
			headers: getAuthHeader()
		})
		return response.data
	}
}