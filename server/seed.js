import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './src/models/Product.js'
import fs from 'fs'

dotenv.config()

const seedDatabase = async () => {
	try {
		console.log('Connecting to MongoDB...')
		await mongoose.connect(process.env.MONGODB_URI)
		console.log('Connected')

		const data = JSON.parse(fs.readFileSync('./src/data/products.json', 'utf-8'))

		console.log('Clearing existing products...')
		await Product.deleteMany({})
		console.log('Cleared')

		console.log('Inserting products...')
		const result = await Product.insertMany(data.products)
		console.log(`Inserted ${result.length} products`)

		console.log(`Total: ${result.length} products`)
		const flavors = [...new Set(result.map(p => p.flavor))]
		console.log(`Flavors (${flavors.length}): ${flavors.join(', ')}`)

		await mongoose.connection.close()
		console.log('\n Database seeded successfully!')
		process.exit(0)
	} catch (error) {
		console.error('Error:', error)
		process.exit(1)
	}
}

seedDatabase()