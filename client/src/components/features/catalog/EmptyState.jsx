import Button from "../../ui/button/Button"

const EmptyState = ({ onReset }) => {
	return (
		<article className="flex flex-col items-center gap-5 min-h-[60vh] justify-center text-center">
			<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
				No products found
			</h2>
			<p className="text-sm sm:text-base md:text-lg max-w-md">
				Try adjusting your filters or search term
			</p>
			<Button
				onClick={onReset}
				className="bg-pink-400 text-white rounded-full hover:bg-pink-500"
			>
				Reset Filters
			</Button>
		</article>
	)
}

export default EmptyState