import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice'
import { authService } from '../services/authService'
import Input from '../components/ui/input/Input'
import Button from '../components/ui/button/Button'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { loading } = useSelector(state => state.auth)
	
	const { register, handleSubmit, formState: { errors } } = useForm()

	const onSubmit = async (data) => {
		try {
			dispatch(loginStart())
			const response = await authService.login(data)
			dispatch(loginSuccess({
				user: response.data,
				token: response.token
			}))
			navigate('/')
		} catch (err) {
			dispatch(loginFailure(err.response?.data?.message || 'Login failed'))
		}
	}

	return (
		<section className="max-w-md mx-auto px-4 py-10">
			<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center mb-8">
				Login
			</h2>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
				<div className="p-7 bg-white rounded-3xl space-y-3">
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
							label="Password" 
							type="password"
							{...register('password', { required: 'Password is required' })}
						/>
						{errors.password && <p className='text-pink-400 text-sm mt-1'>{errors.password.message}</p>}
					</div>
				</div>

				<div className="space-y-3">
					<Button
						type="submit"
						disabled={loading}
						className="w-full bg-pink-400 text-white rounded-2xl hover:bg-pink-500 transition-all duration-200 disabled:opacity-50"
					>
						{loading ? 'Logging in...' : 'Login'}
					</Button>

					<div className="flex gap-1 justify-center text-sm">
						<p className='text-gray-500'>You do not have an account?</p>
						<Link to="/register" className="text-pink-400 hover:text-pink-500 transition-colors">
							Registration
						</Link>
					</div>
				</div>
			</form>
		</section>
	)
}

export default Login