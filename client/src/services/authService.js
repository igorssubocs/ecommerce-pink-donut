import api from '../utils/api'

export const authService = {
	register: async (userData) => {
		const response = await api.post('/auth/register', userData)
		return response.data
	},

	login: async (credentials) => {
		const response = await api.post('/auth/login', credentials)
		return response.data
	},

	logout: async () => {
		const response = await api.post('/auth/logout')
		return response.data
	}
}