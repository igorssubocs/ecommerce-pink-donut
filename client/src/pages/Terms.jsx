import { termsSections } from "../constants/termsContent"

const Terms = () => {
	return (
		<section className="max-w-5xl mx-auto">
			<h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-5">
				Terms of Service
			</h1>

			<p className="text-gray-500 mb-5">
				<strong>Last updated:</strong> February 25, 2026
			</p>

			<div className="bg-white rounded-3xl p-7 space-y-5">
				{termsSections.map((section) => (
					<article key={section.id} id={section.id}>
						<h3 className="font-bold text-2xl mb-3">
							{section.title}
						</h3>

						{section.paragraphs && section.paragraphs.map((text, index) => (
							<p key={index}>
								{text}
							</p>
						))}

						{section.list && (
							<ul className="list-disc list-inside ml-5">
								{section.list.map((item, index) => (
									<li key={index}>
										{item.description}
									</li>
								))}
							</ul>
						)}

						{section.note && (
							<p className="text-gray-500 font-medium mt-5">
								{section.note}
							</p>
						)}

						{section.contact && (
							<div className="bg-gray-50 rounded-2xl p-4 mt-3">
								<strong>Email:</strong> info@donut-shop.com
							</div>
						)}
					</article>
				))}
			</div>
		</section>
	)
}

export default Terms