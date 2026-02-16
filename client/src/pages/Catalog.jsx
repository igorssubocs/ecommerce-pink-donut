import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useProducts } from "../hooks/useProducts"
import { filterProducts, sortProducts } from "../utils/productHelpers"

import SearchBar from "../components/features/catalog/SearchBar"
import SortDropdown from "../components/features/catalog/SortDropdown"
import ProductGrid from "../components/features/catalog/ProductGrid"
import EmptyState from "../components/features/catalog/EmptyState"
import Filters from "../components/features/filters/Filters"
import Button from "../components/ui/button/Button"

const Catalog = () => {
	const { products, loading } = useProducts()
	const [visible, setVisible] = useState(9)

	const { register, watch, setValue, reset } = useForm({
		defaultValues: {
			search: "",
			sort: "recommended",
			flavors: [],
			minPrice: "",
			maxPrice: ""
		}
	})

	const filters = {
		search: watch("search"),
		sort: watch("sort"),
		flavors: watch("flavors"),
		minPrice: watch("minPrice"),
		maxPrice: watch("maxPrice")
	}

	useEffect(() => {
		const updateVisible = () => setVisible(window.innerWidth < 1280 ? 6 : 9)
		updateVisible()
		window.addEventListener("resize", updateVisible)
		return () => window.removeEventListener("resize", updateVisible)
	}, [])

	const handleReset = () => {
		reset()
		setVisible(window.innerWidth < 1280 ? 6 : 9)
	}

	const filtered = filterProducts(products, filters)
	const sorted = sortProducts(filtered, filters.sort)
	const displayed = sorted.slice(0, visible)

	return (
		<section className="grid space-y-5 mb-10">
			<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-5">
				Product Catalog
			</h2>

			<div className="flex gap-10 justify-between items-center">
				<SearchBar register={register} />
				<SortDropdown register={register} />
			</div>

			<div className="flex flex-col lg:flex-row gap-5">
				<aside className="w-full lg:w-1/3 xl:w-1/4">
					<Filters
						register={register}
						watch={watch}
						setValue={setValue}
						onReset={handleReset}
					/>
				</aside>

				<div className="flex-1">
					{sorted.length === 0 ? (
						<EmptyState onReset={handleReset} />
					) : (
						<>
							<ProductGrid products={displayed} />
							
							{visible < sorted.length && (
								<div className="flex justify-center mt-6">
									<Button
										onClick={() => setVisible(v => v + 9)}
										className="bg-pink-400 text-white rounded-full hover:bg-pink-500"
									>
										Show More
									</Button>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</section>
	)
}

export default Catalog