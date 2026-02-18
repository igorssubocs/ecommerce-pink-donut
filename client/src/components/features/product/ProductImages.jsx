import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductImages({ images, name }) {
	const [current, setCurrent] = useState(0)

	return (
		<div className="space-y-5">
			<div className="relative rounded-3xl overflow-hidden aspect-square">
				<img src={images[current]} alt={name} className="w-full h-full object-cover" />

				{images.length > 1 && (
					<>
						<button
							onClick={() => setCurrent(i => (i - 1 + images.length) % images.length)}
							className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center"
						>
							<ChevronLeft className="w-5 h-5" />
						</button>
						<button
							onClick={() => setCurrent(i => (i + 1) % images.length)}
							className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center"
						>
							<ChevronRight className="w-5 h-5" />
						</button>
					</>
				)}
			</div>

			{images.length > 1 && (
				<div className="flex gap-5">
					{images.map((img, i) => (
						<button
							key={i}
							onClick={() => setCurrent(i)}
							className={`flex-1 rounded-2xl overflow-hidden border-2 transition-all ${
								current === i ? 'border-pink-400' : 'border-transparent hover:border-gray-200'
							}`}
						>
							<img src={img} alt={`${name} ${i + 1}`} className="w-full h-24 object-cover" />
						</button>
					))}
				</div>
			)}
		</div>
	)
}