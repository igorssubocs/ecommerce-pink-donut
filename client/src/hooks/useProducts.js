import { useState, useEffect } from 'react'
import { productService } from '../services/productService'

export const useProducts = (limit = null) => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setError(null)
				const response = await productService.getProducts()
				setProducts(limit ? response.data.slice(0, limit) : response.data)
			} catch (err) {
				console.error('Failed to fetch products:', err)
				setError('Failed to load products')
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [limit])

	return { products, loading, error }
}
