import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI)
		console.log('MongoDB Connected')
		console.log(`Host: ${conn.connection.host}`)
		console.log(`Database: ${conn.connection.name}`)

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