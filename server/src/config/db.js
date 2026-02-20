import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI)
		mongoose.connection.on('error', (err) => {
			console.error('MongoDB error:', err)
		})
		mongoose.connection.on('disconnected', () => {
			console.log('MongoDB disconnected')
		})
	} catch (error) {
		console.error('MongoDB connection error:', error.message)
		process.exit(1)
	}
}

export default connectDB