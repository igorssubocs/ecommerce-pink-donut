import api from '../utils/api'

export const paymentService = {
	createCheckoutSession: async (shippingAddress) => {
		const response = await api.post('/payment/create-checkout-session', { shippingAddress })
		return response.data
	},

	getSessionDetails: async (sessionId) => {
		const response = await api.get(`/payment/session/${sessionId}`)
		return response.data
	}
}
