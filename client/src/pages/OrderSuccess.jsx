import { useSearchParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CheckCircle } from 'lucide-react'
import Button from '../components/ui/button/Button'
import Loading from '../components/ui/loading/Loading'
import { useOrderSuccess } from '../hooks/useOrderSuccess'
import Error from "../components/ui/error/Error"

const OrderSuccess = () => {
	const [searchParams] = useSearchParams()
	const { user } = useSelector(state => state.auth)
	const sessionId = searchParams.get('session_id')

	const { order, loading, error } = useOrderSuccess(sessionId, user)

	if (loading) {
		return (
			<Loading 
				title="Processing Your Order" 
				subtitle="Please wait while we confirm your payment..."
			/>
		)
	}

	if (error) {
		return (
			<Error 
				title="Something went wrong"
				subtitle={error}
			/>
		)
	}

	return (
		<section className="max-w-2xl mx-auto space-y-5" id="ordersuccess">
			<div className="text-center">
				<CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-5" />
				<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
					Order Confirmed!
				</h2>
				<p className="text-gray-500">Thank you for your purchase</p>
			</div>

			<div className="bg-white rounded-3xl p-7">
				<h3 className="text-xl font-semibold mb-5">Order Summary</h3>
				<div className="flex justify-between">
					<span className="font-semibold">{order.orderNumber}</span>
					<span className="font-semibold text-green-500 uppercase">{order.paymentStatus}</span>
				</div>
				<div className="space-y-1 my-5 botder border-t border-b py-4">
					{order.items.map((item, index) => (
						<div key={index} className="flex justify-between">
							<p className="text-gray-500">{item.name}</p>
							<span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
						</div>
					))}
				</div>
				<div className="flex justify-between font-semibold">
					<p>Total</p>
					<span>${order.total.toFixed(2)}</span>
				</div>
			</div>

			{order.shippingAddress && (
				<div className="bg-white rounded-3xl p-7 flex flex-col">
					<h3 className="text-xl font-semibold mb-5">Shipping Address</h3>

					<span>{order.shippingAddress.firstName} {order.shippingAddress.lastName}</span>
					<span>{order.shippingAddress.street}</span>
					<span>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</span>
					<span>{order.shippingAddress.country}</span>
				</div>
			)}

			<div className="flex justify-center space-x-5">
				<Button
					to={`/profile/${user?._id}`}
					className="bg-pink-400 text-white rounded-full hover:bg-pink-500"
				>
					View Order History
				</Button>
				<Button
					to="/"
					className="bg-gray-100 rounded-full hover:bg-gray-200"
				>
					Continue Shopping
				</Button>
			</div>
		</section>
	)
}

export default OrderSuccess
