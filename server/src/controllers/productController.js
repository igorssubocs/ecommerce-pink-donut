import Product from '../models/Product.js'

export const getProducts = async (req, res) => {
	try {
		const { flavor, minPrice, maxPrice, inStock, sort = 'id' } = req.query
		
		let filter = {}
		
		if (flavor) filter.flavor = flavor
		
		if (minPrice || maxPrice) {
			filter.price = {}
			if (minPrice) filter.price.$gte = Number(minPrice)
			if (maxPrice) filter.price.$lte = Number(maxPrice)
		}
		
		if (inStock !== undefined) filter.inStock = inStock === 'true'

		const products = await Product.find(filter).sort(sort)
		
		res.json({
			success: true,
			count: products.length,
			data: products
		})
	} catch (error) {
		console.error('Error in getProducts:', error)
		res.status(500).json({ 
			success: false,
			message: 'Server Error' 
		})
	}
}

export const getProductById = async (req, res) => {
	try {
		const product = await Product.findOne({ id: req.params.id })
		
		if (!product) {
			return res.status(404).json({ 
				success: false,
				message: 'Product not found' 
			})
		}
		
		res.json({
			success: true,
			data: product
		})
	} catch (error) {
		console.error('Error in getProductById:', error)
		res.status(500).json({ 
			success: false,
			message: 'Server Error' 
		})
	}
}

export const getProductByPath = async (req, res) => {
	try {
		const product = await Product.findOne({ path: req.params.path })
		
		if (!product) {
			return res.status(404).json({ 
				success: false,
				message: 'Product not found' 
			})
		}
		
		res.json({
			success: true,
			data: product
		})
	} catch (error) {
		console.error('Error in getProductByPath:', error)
		res.status(500).json({ 
			success: false,
			message: 'Server Error' 
		})
	}
}

export const getFlavors = async (req, res) => {
	try {
		const flavors = await Product.distinct('flavor')
		
		res.json({
			success: true,
			data: flavors.sort()
		})
	} catch (error) {
		console.error('Error in getFlavors:', error)
		res.status(500).json({ 
			success: false,
			message: 'Server Error' 
		})
	}
}