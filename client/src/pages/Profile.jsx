import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/authSlice'
import Button from '../components/ui/button/Button'
import ProfileInfo from '../components/features/profile/ProfileInfo'
import ProfileOrders from '../components/features/profile/ProfileOrders'
import ProfileActions from '../components/features/profile/ProfileActions'
import ProfileStats from '../components/features/profile/ProfileStats'

const Profile = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector(state => state.auth)
	const { orders = [] } = useSelector(state => state.orders ?? {})

	if (!user) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen gap-5">
				<h2 className="text-3xl font-bold">Please login to view cart</h2>
				<Button 
					to="/login" 
					className="bg-pink-400 text-white rounded-full hover:bg-pink-500 px-8 py-3"
				>
					Login
				</Button>
			</div>
		)
	}

	const handleLogout = () => {
		dispatch(logout())
		navigate('/')
	}

	return (
		<section className="space-y-5">
			<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-5">
				Account Details
			</h2>
			<div className="grid md:grid-cols-3 gap-5">
				<div className="md:col-span-2 space-y-5">
					<ProfileInfo user={user} />
					<ProfileOrders orders={orders} />
				</div>
				<div className="space-y-5">
					<ProfileActions onLogout={handleLogout} />
					<ProfileStats />
				</div>
			</div>
		</section>
	)
}

export default Profile