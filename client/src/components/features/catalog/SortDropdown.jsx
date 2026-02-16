export default function SortDropdown({ register }) {
	return (
		<select
			{...register("sort")}
			className="border rounded-2xl px-6 py-4 outline-gray-600"
		>
			<option value="recommended">Recommended</option>
			<option value="flavor-asc">Flavor [A–Z]</option>
			<option value="flavor-desc">Flavor [Z–A]</option>
			<option value="price-min">Price min–max</option>
			<option value="price-max">Price max–min</option>
		</select>
	)
}