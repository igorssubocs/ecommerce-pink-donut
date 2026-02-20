import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, 'First name is required'],
		trim: true,
		minlength: [2, 'First name must be at least 2 characters']
	},
	lastName: {
		type: String,
		required: [true, 'Last name is required'],
		trim: true,
		minlength: [2, 'Last name must be at least 2 characters']
	},
	userName: {
		type: String,
		required: [true, 'Username is required'],
		unique: true,
		trim: true,
		minlength: [2, 'Username must be at least 2 characters']
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
		lowercase: true,
		trim: true,
		match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		minlength: [6, 'Password must be at least 6 characters'],
		select: false
	},
	role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user'
	}
}, {
	timestamps: true
})

userSchema.pre('save', async function () {
	if (!this.isModified('password')) return

	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function (candidatePassword) {
	return await bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.model('User', userSchema)