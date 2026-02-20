import User from '../models/User.js'
import { generateToken } from '../utils/generateToken.js'

export const register = async (req, res) => {
	try {
		const { firstName, lastName, userName, email, password } = req.body

		if (!firstName || !lastName || !userName || !email || !password) {
			return res.status(400).json({
				success: false,
				message: 'All fields are required'
			})
		}

		const existingEmail = await User.findOne({ email })
		if (existingEmail) {
			return res.status(400).json({
				success: false,
				message: 'Email already exists'
			})
		}

		const existingUsername = await User.findOne({ userName })
		if (existingUsername) {
			return res.status(400).json({
				success: false,
				message: 'Username already taken'
			})
		}

		const user = await User.create({
			firstName,
			lastName,
			userName,
			email,
			password
		})

		const token = generateToken(user._id)

		res.status(201).json({
			success: true,
			data: {
				_id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				userName: user.userName,
				email: user.email,
				role: user.role
			},
			token
		})
	} catch (error) {
		console.error('Register error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

export const login = async (req, res) => {
	try {
		const { email, password } = req.body

		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: 'Email and password are required'
			})
		}

		const user = await User.findOne({ email }).select('+password')

		if (!user) {
			return res.status(401).json({
				success: false,
				message: 'Invalid email or password'
			})
		}

		const isMatch = await user.comparePassword(password)

		if (!isMatch) {
			return res.status(401).json({
				success: false,
				message: 'Invalid email or password'
			})
		}

		const token = generateToken(user._id)

		res.json({
			success: true,
			data: {
				_id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				userName: user.userName,
				email: user.email,
				role: user.role
			},
			token
		})
	} catch (error) {
		console.error('Login error:', error)
		res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

export const logout = (req, res) => {
	res.json({
		success: true,
		message: 'Logged out successfully'
	})
}