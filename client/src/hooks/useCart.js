import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart, setLoading, setError, clearCart as clearCartAction } from '../store/slices/cartSlice'
import { cartService } from '../services/cartService'

export const useCart = () => {
	const dispatch = useDispatch()
	const { items, total, loading, error } = useSelector(state => state.cart)
	const { user } = useSelector(state => state.auth)

	useEffect(() => {
		if (user) {
			fetchCart()
		}
	}, [user])

	const fetchCart = async () => {
		try {
			dispatch(setLoading(true))
			const response = await cartService.getCart()
			dispatch(setCart(response.data))
		} catch (err) {
			console.error('Fetch cart error:', err)
			dispatch(setError(err.response?.data?.message || 'Failed to load cart'))
		} finally {
			dispatch(setLoading(false))
		}
	}

	const addToCart = async (productId, quantity = 1) => {
		if (!productId) {
			console.error('No product ID provided')
			return { success: false, error: 'No product ID' }
		}

		try {
			dispatch(setLoading(true))
			
			const response = await cartService.addToCart(productId, quantity)
			
			if (response.success) {
				dispatch(setCart(response.data))
				return { success: true }
			} else {
				dispatch(setError(response.message || 'Failed to add to cart'))
				return { success: false, error: response.message }
			}
		} catch (err) {
			console.error('Add to cart error:', err)
			const errorMessage = err.response?.data?.message || err.message || 'Failed to add to cart'
			dispatch(setError(errorMessage))
			return { success: false, error: errorMessage }
		} finally {
			dispatch(setLoading(false))
		}
	}

	const updateQuantity = async (productId, quantity) => {
		try {
			dispatch(setLoading(true))
			const response = await cartService.updateCartItem(productId, quantity)
			dispatch(setCart(response.data))
		} catch (err) {
			console.error('Update quantity error:', err)
			dispatch(setError(err.response?.data?.message || 'Failed to update quantity'))
		} finally {
			dispatch(setLoading(false))
		}
	}

	const removeItem = async (productId) => {
		try {
			dispatch(setLoading(true))
			const response = await cartService.removeFromCart(productId)
			dispatch(setCart(response.data))
		} catch (err) {
			console.error('Remove item error:', err)
			dispatch(setError(err.response?.data?.message || 'Failed to remove item'))
		} finally {
			dispatch(setLoading(false))
		}
	}

	const clearCart = async () => {
		try {
			dispatch(setLoading(true))
			await cartService.clearCart()
			dispatch(clearCartAction())
		} catch (err) {
			console.error('Clear cart error:', err)
			dispatch(setError(err.response?.data?.message || 'Failed to clear cart'))
		} finally {
			dispatch(setLoading(false))
		}
	}

	const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

	return {
		items,
		total,
		loading,
		error,
		itemCount,
		addToCart,
		updateQuantity,
		removeItem,
		clearCart,
		fetchCart
	}
}