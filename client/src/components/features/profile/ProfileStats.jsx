import { useOrders } from '../../../hooks/useOrders'
import { formatPrice } from '../../../utils/formatPrice'
import Loading from '../../ui/loading/Loading'

const ProfileStats = () => {
	const { stats, loading } = useOrders()

	return (
		<div className="bg-white rounded-3xl p-6">
			<h2 className="font-bold text-xl mb-4">Account Stats</h2>

			{loading ? (
				<Loading
					title="Loading account stats"
					subtitle="Please wait 30-50 seconds... The server may be waking up."
				/>
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
