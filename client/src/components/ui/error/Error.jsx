import { Ban } from 'lucide-react'

const Error = ({ title, subtitle }) => {
	return (
		<section className="flex flex-col items-center justify-center h-full">
			<div className="flex items-center justify-center mb-5">
				<Ban className="w-20 h-20 text-pink-400" />
			</div>
			{title && <h3 className="font-bold text-xl mb-2">{title}</h3>}
			{subtitle && <p className="text-gray-500">{subtitle}</p>}
		</section>
	)
}

export default Error