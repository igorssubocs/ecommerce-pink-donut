import Button from '../../ui/button/Button'
import { LogOut } from 'lucide-react'

const ProfileActions = ({ onLogout }) => {
	return (
		<div className="bg-white rounded-3xl p-7">
			<h2 className="font-bold text-xl mb-4">Quick Actions</h2>
			<div className="space-y-2">
				<Button
					to="/settings"
					className="w-full bg-gray-100 rounded-2xl hover:bg-gray-200"
				>
					Settings
				</Button>
				<Button
					to="/cart"
					className="w-full bg-gray-100 rounded-2xl hover:bg-gray-200"
				>
					View Cart
				</Button>
				<Button
					to="/catalog"
					className="w-full bg-gray-100 rounded-2xl hover:bg-gray-200"
				>
					Continue Shopping
				</Button>
				<Button
					onClick={onLogout}
					className="w-full flex items-center justify-center gap-3 bg-red-50 text-red-600 rounded-2xl hover:bg-red-100"
				>
					<LogOut className="w-4 h-4" />
					Logout
				</Button>
			</div>
		</div>
	)
}

export default ProfileActions