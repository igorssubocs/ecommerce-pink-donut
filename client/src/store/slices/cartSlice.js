import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		total: 0,
		loading: false,
		error: null
	},
	reducers: {
		setCart: (state, action) => {
			state.items = action.payload.items
			state.total = action.payload.total
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		},
		setError: (state, action) => {
			state.error = action.payload
			state.loading = false
		},
		clearError: (state) => {
			state.error = null
		},
		clearCart: (state) => {
			state.items = []
			state.total = 0
		}
	}
})

export const { setCart, setLoading, setError, clearError, clearCart } = cartSlice.actions
export default cartSlice.reducer