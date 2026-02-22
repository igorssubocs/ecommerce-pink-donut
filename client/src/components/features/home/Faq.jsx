import { useState } from "react"
import { X } from "lucide-react"
import { FAQ } from "../../../constants/faq"

export const Faq = () => {
const [openIndex, setOpenIndex] = useState(null)
	const toggleIndex = (index) => setOpenIndex(openIndex === index ? null : index)

	return (
		<section className="w-full" id="faq">
			<div className="grid gap-10 md:grid-cols-2">

				<div className="flex flex-col gap-4 text-start md:justify-start md:items-start">
					<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
						Your Questions, <br /> Answered
					</h2>
					<p className="sm:text-lg text-gray-600">
						Have questions? We've got answers. <br />
						For everything else, email us at{" "}
						<a
							href="mailto:info@donut-shop.com"
							className="text-pink-400 underline hover:text-pink-500"
						>
							info@donut-shop.com
						</a>
					</p>
				</div>

				<div className="space-y-5">
					{FAQ.map((item, index) => (
						<div key={index}>
							<button
								onClick={() => toggleIndex(index)}
								className={`w-full text-left p-7 font-medium sm:text-lg text-gray-800 flex justify-between items-center bg-white transition-all
									${
										openIndex === index
										? "rounded-t-2xl text-pink-400"
										: "rounded-2xl hover:text-pink-500"
									}`}
								>
									{item.q}
								<span
									className={`rotate-45 transition-transform duration-300 ${
										openIndex === index ? "rotate-90 text-pink-600" : ""
									}`}
								>
									<X className="w-5 h-5" />
								</span>
							</button>

							<div
								className={`overflow-hidden bg-white transition-all duration-300 ${
									openIndex === index
									? "max-h-96 px-7 pb-7 rounded-b-2xl"
									: "max-h-0"
								}`}
							>
								<p className="text-gray-600 text-sm sm:text-base">{item.a}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
