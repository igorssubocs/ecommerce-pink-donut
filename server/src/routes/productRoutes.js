import express from 'express'
import { getProducts, getProductById,getProductByPath,getFlavors } from '../controllers/productController.js'
const router = express.Router()

router.get('/', getProducts)
router.get('/flavors', getFlavors)
router.get('/slug/:path', getProductByPath)
router.get('/:id', getProductById)

export default router