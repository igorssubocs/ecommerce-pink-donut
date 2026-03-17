import ProductCard from '../../ui/card/ProductCard'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../../utils/animations'

const ProductGrid = ({ products }) => {
	return (
		<motion.div
			className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
			variants={staggerContainer}
			initial="initial"
			animate="animate"
		>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</motion.div>
	)
}

export default ProductGrid