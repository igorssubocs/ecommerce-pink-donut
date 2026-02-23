const ProfileStats = () => {
	return (
		<div className="bg-white rounded-3xl p-6">
			<h2 className="font-bold text-xl mb-4">Account Stats</h2>

			<div className="space-y-3">
				<div className="flex justify-between items-center">
					<p className="text-gray-500">Total Orders</p>
					<span className="font-semibold">0</span>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-gray-500">Total Spent</p>
					<span className="font-semibold">$0.00</span>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-gray-500">Account Status</p>
					<span className="font-semibold text-green-500">Active</span>
				</div>
			</div>
		</div>
	)
}

export default ProfileStats