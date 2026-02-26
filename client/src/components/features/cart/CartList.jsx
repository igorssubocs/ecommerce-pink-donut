import CartItem from './CartItem'

const CartList = ({ items, onIncrease, onDecrease, onRemove }) => {
	return (
		<div className="space-y-3">
			{items.map(item => (
				<CartItem
					key={item.product._id}
					item={item}
					onIncrease={() => onIncrease(item.product._id, item.quantity)}
					onDecrease={() => onDecrease(item.product._id, item.quantity)}
					onRemove={() => onRemove(item.product._id)}
				/>
			))}
		</div>
	)
}

export default CartList