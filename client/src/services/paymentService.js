import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const getAuthHeader = () => {
	const token = localStorage.getItem('token')
	if (!token) {
		throw new Error('No authentication token found')
	}
	return { Authorization: `Bearer ${token}` }
}

export const paymentService = {
	createCheckoutSession: async (shippingAddress) => {
		const response = await axios.post(
			`${API_URL}/payment/create-checkout-session`,
			{ shippingAddress },
			{ headers: getAuthHeader() }
		)
		return response.data
	},

	getSessionDetails: async (sessionId) => {
		const response = await axios.get(
			`${API_URL}/payment/session/${sessionId}`,
			{ headers: getAuthHeader() }
		)
		return response.data
	}
}