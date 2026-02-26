import stripe from '../config/stripe.js'
import Order from '../models/Order.js'
import Cart from '../models/Cart.js'

export const createCheckoutSession = async (req, res) => {
	try {
		const { shippingAddress } = req.body
		const cart = await Cart.findOne({ user: req.user._id }).populate('items.product')

		if (!cart || cart.items.length === 0) {
			return res.status(400).json({
				success: false,
				message: 'Cart is empty'
			})
		}

		const lineItems = cart.items.map(item => ({
			price_data: {
				currency: 'usd',
				product_data: {
					name: item.product.name,
					description: item.product.description,
					images: item.product.images ? [item.product.images[0]] : []
				},
				unit_amount: Math.round(item.price * 100)
			},
			quantity: item.quantity
		}))

		const orderNumber = `ORD-${Date.now()}`

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: lineItems,
			mode: 'payment',
			success_url: `${process.env.CLIENT_URL}/order-success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.CLIENT_URL}/checkout`,
			customer_email: req.user.email,
			client_reference_id: req.user._id.toString(),
			metadata: {
				userId: req.user._id.toString(),
				orderNumber,
				shippingAddress: JSON.stringify(shippingAddress)
			}
		})

		res.json({
			success: true,
			sessionId: session.id,
			url: session.url
		})
	} catch (error) {
		console.error('Stripe error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

export const stripeWebhook = async (req, res) => {
	const sig = req.headers['stripe-signature']
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

	let event

	try {
		event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret)
	} catch (err) {
		console.error('Webhook signature verification failed:', err.message)
		return res.status(400).send(`Webhook Error: ${err.message}`)
	}

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object

		try {
			const { userId, orderNumber, shippingAddress } = session.metadata
			const cart = await Cart.findOne({ user: userId }).populate('items.product')

			if (!cart) {
				console.error('Cart not found for user:', userId)
				return res.json({ received: true })
			}

			const orderItems = cart.items.map(item => ({
				product: item.product._id,
				name: item.product.name,
				quantity: item.quantity,
				price: item.price
			}))

			const order = await Order.create({
				user: userId,
				orderNumber,
				items: orderItems,
				shippingAddress: JSON.parse(shippingAddress),
				subtotal: cart.total,
				total: cart.total,
				paymentStatus: 'Paid',
				stripeSessionId: session.id
			})

			cart.items = []
			cart.total = 0
			await cart.save()

			console.log('Order created:', orderNumber)
		} catch (error) {
			console.error('Error creating order:', error)
		}
	}
	res.json({ received: true })
}

export const getSessionDetails = async (req, res) => {
	try {
		const { sessionId } = req.params
		const session = await stripe.checkout.sessions.retrieve(sessionId)

		if (!session) {
			return res.status(404).json({
				success: false,
				message: 'Session not found'
			})
		}

		const order = await Order.findOne({ stripeSessionId: session.id })
			.populate('items.product')

		if (!order) {
			return res.status(404).json({
				success: false,
				message: 'Order not found'
			})
		}

		if (order.user.toString() !== req.user._id.toString()) {
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
		console.error('Get session error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}