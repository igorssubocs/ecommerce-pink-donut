import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const useFlavors = () => {
	const [flavors, setFlavors] = useState([])

	useEffect(() => {
		axios.get(`${API_URL}/products/flavors`)
			.then(res => setFlavors(res.data.data))
			.catch(() => setFlavors([
				"Strawberry", "Vanilla", "Chocolate", "Caramel", 
				"Blueberry", "Lemon Zest", "Peanut Butter", 
				"Cookies and Cream", "Coconut Dream", "Birthday Sprinkle"
			]))
	}, [])

	return flavors
}