import { User, Mail, AtSign } from 'lucide-react'

const ProfileInfo = ({ user }) => {
	const fields = [
		{
			label: 'First Name',
			value: user.firstName,
			Icon: User
		},
		{
			label: 'Last Name',
			value: user.lastName,
			Icon: User
		},
		{
			label: 'Username',
			value: `@${user.userName}`,
			Icon: AtSign
		},
		{
			label: 'Email',
			value: user.email,
			Icon: Mail
		}
	]

	return (
		<div className="bg-white rounded-3xl p-7">
			<h2 className="font-bold text-xl mb-4">Personal Information</h2>
			<div className="space-y-3">
				{fields.map(({ label, value, Icon }) => (
					<div key={label} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
						<Icon className="w-5 h-5 text-pink-400" />

						<div>
							<p className="text-sm text-gray-500">{label}</p>
							<span className="font-semibold">{value}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProfileInfo