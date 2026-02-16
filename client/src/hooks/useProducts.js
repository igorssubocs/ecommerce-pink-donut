import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const useProducts = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios.get(`${API_URL}/products`)
			.then(res => setProducts(res.data.data))
			.catch(err => console.error('Error:', err))
			.finally(() => setLoading(false))
	}, [])

	return { products, loading }
}