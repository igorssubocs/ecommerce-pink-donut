import { Search } from 'lucide-react'

const SearchBar = ({ register }) => {
	return (
		<div className="relative w-full lg:w-1/3 xl:w-1/4">
			<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
			<input
				type="text"
				placeholder="Search products..."
				{...register("search")}
				className="w-full pl-12 h-14 pr-4 rounded-2xl border outline-gray-600"
			/>
		</div>
	)
}

export default SearchBar