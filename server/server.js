require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})