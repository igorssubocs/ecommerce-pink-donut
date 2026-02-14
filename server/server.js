import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import productRoutes from './src/routes/productRoutes.js'
import connectDB from './src/config/db.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Donut Shop API',
		version: '1.0.0',
		endpoints: {
			products: '/api/products',
			productById: '/api/products/:id',
			productBySlug: '/api/products/slug/:path'
		}
	})
})

app.use('/api/products', productRoutes)

app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: 'Route not found'
	})
})

app.use((err, req, res, next) => {
	console.error('Error:', err)
	res.status(err.status || 500).json({
		success: false,
		message: err.message || 'Server Error'
	})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`)
	console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`)
})