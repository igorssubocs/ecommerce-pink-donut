import { createSlice } from '@reduxjs/toolkit'

const loadUserFromStorage = () => {
	try {
		const user = localStorage.getItem('user')
		const token = localStorage.getItem('token')
		return user && token ? { user: JSON.parse(user), token } : { user: null, token: null }
	} catch {
		return { user: null, token: null }
	}
}

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		...loadUserFromStorage(),
		loading: false,
		error: null
	},
	reducers: {
		loginStart: (state) => {
			state.loading = true
			state.error = null
		},
		loginSuccess: (state, action) => {
			state.loading = false
			state.user = action.payload.user
			state.token = action.payload.token
			state.error = null
			
			localStorage.setItem('user', JSON.stringify(action.payload.user))
			localStorage.setItem('token', action.payload.token)
		},
		loginFailure: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		logout: (state) => {
			state.user = null
			state.token = null
			state.error = null
			
			localStorage.removeItem('user')
			localStorage.removeItem('token')
		}
	}
})

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions
export default authSlice.reducer