import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const useProduct = (path) => {
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!path) return

		axios.get(`${API_URL}/products/slug/${path}`)
			.then(res => setProduct(res.data.data))
			.catch(err => console.error('Error:', err))
			.finally(() => setLoading(false))
	}, [path])

	return { product, loading }
}