import api from '../utils/api'

export const cartService = {
	getCart: async () => {
		const response = await api.get('/cart')
		return response.data
	},

	addToCart: async (productId, quantity = 1) => {
		const response = await api.post('/cart/add', { productId, quantity })
		return response.data
	},

	updateCartItem: async (productId, quantity) => {
		const response = await api.put(`/cart/update/${productId}`, { quantity })
		return response.data
	},

	removeFromCart: async (productId) => {
		const response = await api.delete(`/cart/remove/${productId}`)
		return response.data
	},

	clearCart: async () => {
		const response = await api.delete('/cart/clear')
		return response.data
	}
}
