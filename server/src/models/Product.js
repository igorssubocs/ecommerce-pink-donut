import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	id: { 
		type: Number, 
		required: true, 
		unique: true 
	},
	name: { 
		type: String, 
		required: true 
	},
	category: { 
		type: String, 
		required: true 
	},
	flavor: { 
		type: String, 
		required: true 
	},
	description: String,
	price: { 
		type: Number, 
		required: true 
	},
	currency: { 
		type: String, 
		default: 'PL' 
	},
	countInBox: { 
		type: Number, 
		required: true 
	},
	inStock: { 
		type: Boolean, 
		default: true 
	},
	images: [String],
	path: { 
		type: String, 
		required: true, 
		unique: true 
	},
	nutritionalInfo: {
		perDonut: {
			calories: Number,
			fat: String,
			carbs: String,
			protein: String
		},
		perBox: {
			calories: Number,
			fat: String,
			carbs: String,
			protein: String
		}
	},
	ingredients: [{
		name: String,
		isAllergen: Boolean
	}],
	storageAndCare: {
		temperature: String,
		shelfLife: String,
		instructions: [String]
	}
}, { 
	timestamps: true
})

export default mongoose.model('Product', productSchema)