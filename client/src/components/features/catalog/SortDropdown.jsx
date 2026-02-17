import { ChevronDown } from 'lucide-react'

const SortDropdown = ({ register }) => {
	return (
		<div className="relative">
			<select
				{...register("sort")}
				className="appearance-none cursor-pointer border rounded-2xl px-6 py-4 pr-12 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all bg-white hover:border-gray-300"
			>
				<option value="recommended">Recommended</option>
				<option value="flavor-asc">Flavor [A–Z]</option>
				<option value="flavor-desc">Flavor [Z–A]</option>
				<option value="price-min">Price min–max</option>
				<option value="price-max">Price max–min</option>
			</select>
			<ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
		</div>
	)
}

export default SortDropdown