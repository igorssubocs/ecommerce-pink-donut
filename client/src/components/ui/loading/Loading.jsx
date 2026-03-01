import { Loader2 } from 'lucide-react'

const Loading = ({ title, subtitle }) => {
	return (
		<section className="flex flex-col items-center justify-center h-full">
			<div className="flex items-center justify-center mb-5">
				<Loader2 className="w-20 h-20 text-pink-400 animate-spin" />
			</div>
			{title && <h3 className="font-bold text-xl mb-2">{title}</h3>}
			{subtitle && <p className="text-gray-500">{subtitle}</p>}
		</section>
	)
}

export default Loading