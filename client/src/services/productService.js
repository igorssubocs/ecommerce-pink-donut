import api from '../utils/api'

export const productService = {
	getProducts: async (params = {}) => {
		const response = await api.get('/products', { params })
		return response.data
	},

	getProductByPath: async (path) => {
		const response = await api.get(`/products/slug/${path}`)
		return response.data
	},

	getProductById: async (id) => {
		const response = await api.get(`/products/${id}`)
		return response.data
	},

	getFlavors: async () => {
		const response = await api.get('/products/flavors')
		return response.data
	}
}
