import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useCart } from '../hooks/useCart'
import { paymentService } from '../services/paymentService'
import Input from '../components/ui/input/Input'
import Button from '../components/ui/button/Button'
import OrderSummary from '../components/features/checkout/OrderSummary'

const Checkout = () => {
	const navigate = useNavigate()
	const { user } = useSelector(state => state.auth)
	const { items, total, itemCount } = useCart()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm({
		defaultValues: {
			firstName: user?.firstName || '',
			lastName: user?.lastName || '',
			email: user?.email || '',
			phone: '',
			street: '',
			city: '',
			state: '',
			zip: '',
			country: 'USA'
		}
	})

	if (!user) {
		navigate('/login')
		return null
	}

	if (!items.length) {
		navigate('/catalog')
		return null
	}

	const onSubmit = async (data) => {
		try {
			const response = await paymentService.createCheckoutSession(data)
			window.location.href = response.url
		} catch (error) {
			console.error('Checkout failed:', error)
		}
	}

	return (
		<section className="max-w-5xl mx-auto">
			<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-5">
				Checkout
			</h2>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
				<div className="bg-white rounded-3xl p-7">
					<h3 className="text-xl font-semibold mb-5">Shipping Information</h3>

					<div className="grid md:grid-cols-2 gap-3">
						<div>
							<Input
								label="First Name"
								{...register('firstName', { 
									required: 'First name is required',
									minLength: { value: 2, message: 'Min 2 characters' } 
								})}
							/>
							{errors.firstName && <p className='text-pink-400 text-sm mt-1'>{errors.firstName.message}</p>}
						</div>
						<div>
							<Input
								label="Last Name"
								{...register('lastName', { 
									required: 'Last name is required',
										minLength: { value: 2, message: 'Min 2 characters' }
								})}
							/>
							{errors.lastName && <p className='text-pink-400 text-sm mt-1'>{errors.lastName.message}</p>}
						</div>
						<div>
							<Input
								label="Email"
								type="email"
								{...register('email', {
									required: 'Email is required',
									pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' }								
								})}
							/>
							{errors.email && <p className='text-pink-400 text-sm mt-1'>{errors.email.message}</p>}
						</div>
						<div>
							<Input
								label="Phone"
								{...register('phone', { required: 'Phone is required' })}
							/>
							{errors.phone && <p className='text-pink-400 text-sm mt-1'>{errors.phone.message}</p>}
						</div>
						<div>
							<Input
								label="Street"
								{...register('street', { required: 'Street is required' })}
							/>
							{errors.street && <p className='text-pink-400 text-sm mt-1'>{errors.street.message}</p>}
						</div>
						<div>
							<Input
								label="City"
								{...register('city', { required: 'City is required' })}
							/>
							{errors.city && <p className='text-pink-400 text-sm mt-1'>{errors.city.message}</p>}
						</div>
						<div>
							<Input
								label="State"
								{...register('state', { required: 'State is required' })}
							/>
							{errors.state && <p className='text-pink-400 text-sm mt-1'>{errors.state.message}</p>}
						</div>
						<div>
							<Input
								label="Zip Code"
								{...register('zip', { required: 'Zip-code is required' })}
							/>
							{errors.zip && <p className='text-pink-400 text-sm mt-1'>{errors.zip.message}</p>}
						</div>
						<div>
							<Input
								label="Country"
								{...register('country', { required: 'Country is required' })}
							/>
							{errors.country && <p className='text-pink-400 text-sm mt-1'>{errors.country.message}</p>}
						</div>
					</div>
				</div>

				<OrderSummary 
					items={items} 
					total={total} 
					itemCount={itemCount} 
				/>

				<Button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-pink-400 text-white rounded-2xl hover:bg-pink-500"
				>
					Proceed to Payment
				</Button>
			</form>
		</section>
	)
}

export default Checkout