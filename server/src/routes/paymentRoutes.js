import express from 'express'
import { createCheckoutSession, stripeWebhook, getSessionDetails } from '../controllers/paymentController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.post('/create-checkout-session', protect, createCheckoutSession)
router.post('/webhook', stripeWebhook)
router.get('/session/:sessionId', protect, getSessionDetails)

export default router