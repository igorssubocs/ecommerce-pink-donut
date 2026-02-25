import { privacySections } from "../constants/privacyContant"

const Privacy = () => {
  	return (
		<section className="max-w-5xl mx-auto">
			<h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-5">
				Privacy Policy
			</h1>

			<div className="bg-white rounded-3xl p-7 space-y-5">
				{privacySections.map((section) => (
					<article key={section.id} id={section.id}>
						<h3 className="font-bold text-2xl mb-3">{section.title}</h3>

						{section.paragraphs && section.paragraphs.map((text, index) => (
							<p key={index}>
								{text}
							</p>
						))}

						{section.list && (
							<ul className="list-disc list-inside ml-5">
								{section.list.map((item, index) => (
									<li key={index}>
										{item.label && <strong>{item.label}: </strong>}
										{item.description}
									</li>
								))}
							</ul>
						)}

						{section.contact && (
							<div className="bg-gray-50 rounded-2xl p-4 mt-3">
								<strong>Email:</strong> info@donut-shop.com
							</div>
						)}
					</article>
				))}
			</div>`
		</section>
  	)
}

export default Privacy