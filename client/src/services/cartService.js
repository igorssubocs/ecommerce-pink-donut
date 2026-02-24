import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const getAuthHeader = () => {
	const token = localStorage.getItem('token')
	return token ? { Authorization: `Bearer ${token}` } : {}
}

export const cartService = {
	getCart: async () => {
		const response = await axios.get(`${API_URL}/cart`, {
			headers: getAuthHeader()
		})
		return response.data
	},

	addToCart: async (productId, quantity = 1) => {
		const response = await axios.post(
			`${API_URL}/cart/add`,
			{ productId, quantity },
			{ headers: getAuthHeader() }
		)
		return response.data
	},

	updateCartItem: async (productId, quantity) => {
		const response = await axios.put(
			`${API_URL}/cart/update/${productId}`,
			{ quantity },
			{ headers: getAuthHeader() }
		)
		return response.data
	},

	removeFromCart: async (productId) => {
		const response = await axios.delete(
			`${API_URL}/cart/remove/${productId}`,
			{ headers: getAuthHeader() }
		)
		return response.data
	},

	clearCart: async () => {
		const response = await axios.delete(
			`${API_URL}/cart/clear`,
			{ headers: getAuthHeader() }
		)
		return response.data
	}
}