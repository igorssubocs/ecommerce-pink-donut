import { useState, useEffect } from 'react'
import { productService } from '../services/productService'

const DEFAULT_FLAVORS = [
	"Strawberry", "Vanilla", "Chocolate", "Caramel", 
	"Blueberry", "Lemon Zest", "Peanut Butter", 
	"Cookies and Cream", "Coconut Dream", "Birthday Sprinkle"
]

export const useFlavors = () => {
	const [flavors, setFlavors] = useState([])

	useEffect(() => {
		const fetchFlavors = async () => {
			try {
				const response = await productService.getFlavors()
				setFlavors(response.data)
			} catch (error) {
				setFlavors(DEFAULT_FLAVORS)
			}
		}

		fetchFlavors()
	}, [])

	return flavors
}
