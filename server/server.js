import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './src/config/db.js'
import authRoutes from './src/routes/authRoutes.js'

dotenv.config()

const app = express()
connectDB()

app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}))

app.use(express.json())

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Donut Shop API',
		version: '1.0.0'
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
	console.log(`🚀 Server running on http://localhost:${PORT}`)
})