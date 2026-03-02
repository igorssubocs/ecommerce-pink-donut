import { Loader2 } from 'lucide-react'
import { useOrders } from '../../../hooks/useOrders'
import { formatPrice } from '../../../utils/formatPrice'

const ProfileStats = () => {
	const { stats, loading } = useOrders()

	return (
		<div className="bg-white rounded-3xl p-6">
			<h2 className="font-bold text-xl mb-4">Account Stats</h2>

			{loading ? (
				<div className="flex items-center justify-center py-5">
					<Loader2 className="w-6 h-6 text-pink-400 animate-spin" />
				</div>
			) : (
				<div className="space-y-3">
					<div className="flex justify-between items-center">
						<p className="text-gray-500">Total Orders</p>
						<span className="font-semibold">{stats.totalOrders}</span>
					</div>
					<div className="flex justify-between items-center">
						<p className="text-gray-500">Total Spent</p>
						<span className="font-semibold">{formatPrice(stats.totalSpent)}</span>
					</div>
					<div className="flex justify-between items-center">
						<p className="text-gray-500">Account Status</p>
						<span className="font-semibold text-green-500">Active</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProfileStats
