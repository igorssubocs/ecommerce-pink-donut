import express from 'express'
import { getUserOrders, getOrderById } from '../controllers/orderController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.use(protect)

router.get('/', getUserOrders)
router.get('/:id', getOrderById)

export default router