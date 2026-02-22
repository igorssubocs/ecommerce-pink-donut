import express from 'express'
import { getCart, addToCart, updateCartItem, removeFromCart, clearCart } from '../controllers/cartController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.use(protect)

router.get('/', getCart)
router.post('/add', addToCart)
router.put('/update/:productId', updateCartItem)
router.delete('/remove/:productId', removeFromCart)
router.delete('/clear', clearCart)

export default router