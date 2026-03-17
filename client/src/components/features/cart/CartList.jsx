import CartItem from './CartItem'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../../utils/animations'

const CartList = ({ items, onIncrease, onDecrease, onRemove }) => {
	return (
		<motion.div
			className="space-y-3"
			variants={staggerContainer}
			initial="initial"
			animate="animate"
		>
			{items.map(item => (
				<CartItem
					key={item.product._id}
					item={item}
					onIncrease={() => onIncrease(item.product._id, item.quantity)}
					onDecrease={() => onDecrease(item.product._id, item.quantity)}
					onRemove={() => onRemove(item.product._id)}
				/>
			))}
		</motion.div>
	)
}

export default CartList