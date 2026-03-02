import { useForm } from 'react-hook-form'
import Input from '../components/ui/input/Input'
import Button from '../components/ui/button/Button'
import { Link } from 'react-router-dom'

const Settings = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm()
	const newPassword = watch('newPassword')
	const onSubmit = (data) => {
		console.log('Form data:', data)
	}

	return (
		<section className="max-w-5xl mx-auto">
			<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center mb-8">
				Settings
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
					</div>
				</div>

				<div className="p-7 bg-white rounded-3xl">
					<h3 className="text-xl font-semibold mb-5">Change Password</h3>

					<div className="grid md:grid-cols-2 gap-3">
						<div>
							<Input
								label="Current Password"
								type="password"
								{...register('currentPassword', {
									required: 'Current password is required'
								})}
							/>
							{errors.currentPassword && <p className='text-pink-400 text-sm mt-1'>{errors.currentPassword.message}</p>}
						</div>
						<div>
							<Input
								label="New Password"
								type="password"
								{...register('currentPassword', {
									required: 'New password is required'
								})}
							/>
							{errors.newPassword && <p className='text-pink-400 text-sm mt-1'>{errors.newPassword.message}</p>}
						</div>

						<div>
							<Input
								label="Confirm New Password"
								type="password"
								{...register('confirmPassword', {
									validate: value => !newPassword || value === newPassword || 'Passwords do not match',
									required: 'Confirm password is required'
								})}
							/>
							{errors.confirmPassword && <p className='text-pink-400 text-sm mt-1'>{errors.confirmPassword.message}</p>}
						</div>
					</div>
				</div>

				<div className="space-y-3">
					<Button
						type="submit"
						className="w-full bg-pink-400 text-white rounded-2xl hover:bg-pink-500"
					>
						Save Changes
					</Button>

					<div className="flex gap-1 justify-center text-sm">
						<p className="text-gray-500">Back to profile?</p>
						<Link
							to="/profile/:id"
							className="text-pink-400 hover:text-pink-500 transition-colors"
						>
							Profile
						</Link>
					</div>
				</div>
			</form>
		</section>
	)
}

export default Settings