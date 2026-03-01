import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { paymentService } from '../services/paymentService'
import { useCart } from './useCart'

export const useOrderSuccess = (sessionId, user) => {
	const navigate = useNavigate()
	const { fetchCart } = useCart()
	
	const [order, setOrder] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (!user) {
			navigate('/login')
			return
		}

		if (!sessionId) {
			navigate('/')
			return
		}

		let attempts = 0
		const maxAttempts = 10
		const pollInterval = 2000

		const fetchOrder = async () => {
			try {
				const response = await paymentService.getSessionDetails(sessionId)
				if (response.success && response.data) {
					setOrder(response.data)
					setLoading(false)
					fetchCart()
					return true
				}
				return false
			} catch (err) {
				if (err.response?.status === 404 && attempts < maxAttempts) {
					return false
				}
				throw err
			}
		}

		const pollForOrder = async () => {
			const found = await fetchOrder()
			if (!found && attempts < maxAttempts) {
				attempts++
				setTimeout(pollForOrder, pollInterval)
			} else if (!found) {
				setError('Order is being processed. Please check your order history shortly.')
				setLoading(false)
				fetchCart()
			}
		}

		pollForOrder().catch(err => {
			console.error('Failed to fetch order:', err)
			setError('Unable to load order details. Please check your order history.')
			setLoading(false)
			fetchCart()
		})
	}, [sessionId, user, navigate, fetchCart])

	return { order, loading, error }
}