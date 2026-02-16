export default function FilterPrice({ register }) {
	return (
		<div>
			<h2 className="font-medium text-lg mb-5">Price Range</h2>
			<div className="flex gap-4">
				<div className="flex-1">
					<label className="text-sm text-gray-600 mb-1 block">From</label>
					<input
						type="number"
						{...register("minPrice", { valueAsNumber: true })}
						className="w-full p-4 border rounded-2xl outline-gray-600"
						placeholder="0"
						min="0"
						step="0.5"
					/>
				</div>
				<div className="flex-1">
					<label className="text-sm text-gray-600 mb-1 block">To</label>
					<input
						type="number"
						{...register("maxPrice", { valueAsNumber: true })}
						className="w-full p-4 border rounded-2xl outline-gray-600"
						placeholder="20"
						min="0"
						step="0.5"
					/>
				</div>
			</div>
		</div>
	)
}