import { useState, useEffect } from 'react'
import { productService } from '../services/productService'

export const useProduct = (path) => {
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (!path) return

		const fetchProduct = async () => {
			try {
				setError(null)
				const response = await productService.getProductByPath(path)
				setProduct(response.data)
			} catch (err) {
				console.error('Failed to fetch product:', err)
				setError('Failed to load product')
			} finally {
				setLoading(false)
			}
		}

		fetchProduct()
	}, [path])

	return { product, loading, error }
}
