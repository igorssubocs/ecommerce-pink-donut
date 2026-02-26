import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './src/config/db.js'
import authRoutes from './src/routes/authRoutes.js'
import productRoutes from './src/routes/productRoutes.js'
import cartRoutes from './src/routes/cartRoutes.js'
import orderRoutes from './src/routes/orderRoutes.js'
import paymentRoutes from './src/routes/paymentRoutes.js'

const app = express()
connectDB()

app.use(cors({
	origin: process.env.CLIENT_URL,
	credentials: true
}))

app.use('/api/payment/webhook', express.raw({ type: 'application/json' }))

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/payment', paymentRoutes)

app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Donut Shop API',
	})
})

app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: 'Route not found'
	})
})

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).json({
		success: false,
		message: err.message || 'Server Error'
	})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})