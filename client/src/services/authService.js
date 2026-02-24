import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const authService = {
	register: async (userData) => {
		const response = await axios.post(`${API_URL}/auth/register`, userData)
		return response.data
	},

	login: async (credentials) => {
		const response = await axios.post(`${API_URL}/auth/login`, credentials)
		return response.data
	},

	logout: async () => {
		const response = await axios.post(`${API_URL}/auth/logout`)
		return response.data
	}
}