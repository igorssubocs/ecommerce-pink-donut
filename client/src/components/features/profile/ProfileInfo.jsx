import { User, Mail, AtSign } from 'lucide-react'

const ProfileInfo = ({ user }) => {
	return (
		<div className="bg-white rounded-3xl p-7">
			<h2 className="font-bold text-xl mb-4">Personal Information</h2>
			<div className="space-y-3">
				<div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
					<User className="w-5 h-5 text-pink-400" />
					<div>
						<p className="text-sm text-gray-500">First Name</p>
						<span className="font-semibold">{user.firstName}</span>
					</div>
				</div>
				<div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
					<User className="w-5 h-5 text-pink-400" />
					<div>
						<p className="text-sm text-gray-500">Last Name</p>
						<span className="font-semibold">{user.lastName}</span>
					</div>
				</div>
				<div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
					<AtSign className="w-5 h-5 text-pink-400" />
					<div>
						<p className="text-sm text-gray-500">Username</p>
						<span className="font-semibold">@{user.userName}</span>
					</div>
				</div>
				<div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
					<Mail className="w-5 h-5 text-pink-400" />
					<div>
						<p className="text-sm text-gray-500">Email</p>
						<span className="font-semibold">{user.email}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo