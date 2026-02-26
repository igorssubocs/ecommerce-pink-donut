import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		required: true
	},
	name: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true,
		min: 1
	},
	price: {
		type: Number,
		required: true
	}
})

const orderSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	orderNumber: {
		type: String,
		required: true,
		unique: true
	},
	items: [orderItemSchema],
	shippingAddress: {
		firstName: { 
			type: String, 
			required: true 
		},
		lastName: { 
			type: String, 
			required: true 
		},
		email: { 
			type: String, 
			required: true 
		},
		phone: { 
			type: String, 
			required: true 
		},
		street: { 
			type: String, 
			required: true 
		},
		city: { 
			type: String, 
			required: true 
		},
		state: { 
			type: String, 
			required: true 
		},
		zip: { 
			type: String, 
			required: true 
		},
		country: { 
			type: String, 
			required: true 
		}
	},
	subtotal: {
		type: Number,
		required: true
	},
	total: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled'],
		default: 'Processing'
	},
	paymentStatus: {
		type: String,
		enum: ['Pending', 'Paid', 'Failed'],
		default: 'Pending'
	},
	stripeSessionId: {
		type: String
	}
}, {
	timestamps: true
})

export default mongoose.model('Order', orderSchema)