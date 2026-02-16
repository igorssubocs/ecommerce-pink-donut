export default function FilterFlavor({ flavors, watch, setValue }) {
	const selected = watch("flavors") || []

	const toggle = (flavor) => {
		setValue("flavors", selected.includes(flavor) 
			? selected.filter(f => f !== flavor)
			: [...selected, flavor]
		)
	}

	return (
		<div>
			<h2 className="font-medium text-lg mb-5">Flavors</h2>
			<ul className="space-y-2">
				{flavors.map(flavor => (
					<li key={flavor}>
						<label className="flex items-center gap-2 cursor-pointer hover:text-pink-500">
							<input
								type="checkbox"
								checked={selected.includes(flavor)}
								onChange={() => toggle(flavor)}
								className="w-5 h-5 accent-pink-500"
							/>
							<span>{flavor}</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}