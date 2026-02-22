import Cart from '../models/Cart.js'
import Product from '../models/Product.js'

export const getCart = async (req, res) => {
	try {
		let cart = await Cart.findOne({ user: req.user._id }).populate('items.product')

		if (!cart) {
			cart = await Cart.create({
				user: req.user._id,
				items: [],
				total: 0
			})
		}

		res.json({
			success: true,
			data: cart
		})
	} catch (error) {
		console.error('Get cart error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

export const addToCart = async (req, res) => {
	try {
		const { productId, quantity = 1 } = req.body

		if (!productId) {
			return res.status(400).json({
				success: false,
				message: 'Product ID is required'
			})
		}

		const product = await Product.findById(productId)
		if (!product) {
			return res.status(404).json({
				success: false,
				message: 'Product not found'
			})
		}

		if (!product.inStock) {
			return res.status(400).json({
				success: false,
				message: 'Product out of stock'
			})
		}

		let cart = await Cart.findOne({ user: req.user._id })

		if (!cart) {
			cart = await Cart.create({
				user: req.user._id,
				items: [],
				total: 0
			})
		}

		const existingItemIndex = cart.items.findIndex(
			item => item.product.toString() === productId
		)

		if (existingItemIndex > -1) {
			cart.items[existingItemIndex].quantity += quantity
		} else {
			cart.items.push({
				product: productId,
				quantity,
				price: product.price
			})
		}

		await cart.save()
		await cart.populate('items.product')

		res.json({
			success: true,
			data: cart
		})
	} catch (error) {
		console.error('Add to cart error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

export const updateCartItem = async (req, res) => {
	try {
		const { productId } = req.params
		const { quantity } = req.body

		if (quantity < 1) {
			return res.status(400).json({
				success: false,
				message: 'Quantity must be at least 1'
			})
		}

		const cart = await Cart.findOne({ user: req.user._id })

		if (!cart) {
			return res.status(404).json({
				success: false,
				message: 'Cart not found'
			})
		}

		const itemIndex = cart.items.findIndex(
			item => item.product.toString() === productId
		)

		if (itemIndex === -1) {
			return res.status(404).json({
				success: false,
				message: 'Item not found in cart'
			})
		}

		cart.items[itemIndex].quantity = quantity
		await cart.save()
		await cart.populate('items.product')

		res.json({
			success: true,
			data: cart
		})
	} catch (error) {
		console.error('Update cart error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

export const removeFromCart = async (req, res) => {
	try {
		const { productId } = req.params

		const cart = await Cart.findOne({ user: req.user._id })

		if (!cart) {
			return res.status(404).json({
				success: false,
				message: 'Cart not found'
			})
		}

		cart.items = cart.items.filter(
			item => item.product.toString() !== productId
		)

		await cart.save()
		await cart.populate('items.product')

		res.json({
			success: true,
			data: cart
		})
	} catch (error) {
		console.error('Remove from cart error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

export const clearCart = async (req, res) => {
	try {
		const cart = await Cart.findOne({ user: req.user._id })

		if (!cart) {
			return res.status(404).json({
				success: false,
				message: 'Cart not found'
			})
		}

		cart.items = []
		cart.total = 0
		await cart.save()

		res.json({
			success: true,
			data: cart
		})
	} catch (error) {
		console.error('Clear cart error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}