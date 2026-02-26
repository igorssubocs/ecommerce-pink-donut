import Order from '../models/Order.js'

export const getUserOrders = async (req, res) => {
	try {
		const orders = await Order.find({ user: req.user._id })
			.populate('items.product')
			.sort({ createdAt: -1 })

		res.json({
			success: true,
			data: orders
		})
	} catch (error) {
		console.error('Get orders error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

export const getOrderById = async (req, res) => {
	try {
		const order = await Order.findById(req.params.id)
			.populate('items.product')
			.populate('user', 'firstName lastName email')

		if (!order) {
			return res.status(404).json({
				success: false,
				message: 'Order not found'
			})
		}

		if (order.user._id.toString() !== req.user._id.toString()) {
			return res.status(403).json({
				success: false,
				message: 'Not authorized'
			})
		}

		res.json({
			success: true,
			data: order
		})
	} catch (error) {
		console.error('Get order error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}