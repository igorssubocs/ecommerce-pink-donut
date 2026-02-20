import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice'
import { authService } from '../services/authService'
import Input from '../components/ui/input/Input'
import Button from '../components/ui/button/Button'

const Register = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { loading } = useSelector(state => state.auth)
	
	const { register, handleSubmit, watch, formState: { errors } } = useForm()
	const password = watch('password')

	const onSubmit = async (data) => {
		try {
			dispatch(loginStart())
			const response = await authService.register(data)
			dispatch(loginSuccess({
				user: response.data,
				token: response.token
			}))
			navigate('/')
		} catch (err) {
			dispatch(loginFailure(err.response?.data?.message || 'Registration failed'))
		}
	}

	return (
		<section className="max-w-5xl mx-auto px-4 py-10">
			<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center mb-8">
				Registration
			</h2>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
				<div className="p-7 bg-white rounded-3xl">
					<h3 className="text-xl font-semibold mb-5">Personal Information</h3>

					<div className="grid md:grid-cols-2 gap-3">
						<div>
							<Input 
								label="Username" 
								{...register('userName', { 
									required: 'Username is required',
									minLength: { value: 2, message: 'Min 2 characters' },
									pattern: { value: /^[a-zA-Z0-9_]+$/, message: 'Only letters, numbers, underscore' }
								})}
							/>
							{errors.userName && <p className='text-pink-400 text-sm mt-1'>{errors.userName.message}</p>}
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
								label="Phone Number" 
								{...register('phone')}
							/>
						</div>
						<div>
							<Input 
								label="Password" 
								type="password"
								{...register('password', { 
									required: 'Password is required',
									minLength: { value: 6, message: 'Min 6 characters' }
								})}
							/>
							{errors.password && <p className='text-pink-400 text-sm mt-1'>{errors.password.message}</p>}
						</div>
						<div>
							<Input 
								label="Confirm Password" 
								type="password"
								{...register('confirmPassword', {
									required: 'Please confirm password',
									validate: value => value === password || 'Passwords do not match'
								})}
							/>
							{errors.confirmPassword && <p className='text-pink-400 text-sm mt-1'>{errors.confirmPassword.message}</p>}
						</div>
					</div>
				</div>

				<div className="p-7 bg-white rounded-3xl">
					<h3 className="text-xl font-semibold mb-5">Address Information</h3>

					<div className="grid md:grid-cols-2 gap-5">
						<Input label="Country" {...register('country')} />
						<Input label="City" {...register('city')} />
						<Input label="Street" {...register('street')} />
						<Input label="Zip Code" {...register('zip')} />
					</div>
				</div>

				<div className="space-y-3">
					<Button
						type="submit"
						disabled={loading}
						className="w-full bg-pink-400 text-white rounded-2xl hover:bg-pink-500 transition-all duration-200 disabled:opacity-50"
					>
						{loading ? 'Creating account...' : 'Create an Account'}
					</Button>

					<div className="flex gap-1 justify-center text-sm">
						<p className='text-gray-500'>Do you have an account?</p>
						<Link to="/login" className="text-pink-400 hover:text-pink-500 transition-colors">
							Login
						</Link>
					</div>
				</div>
			</form>
		</section>
	)
}

export default Register