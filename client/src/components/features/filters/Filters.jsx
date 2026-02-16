import { useFlavors } from "../../../hooks/useFlavors"
import FilterFlavor from "./FilterFlavor"
import FilterPrice from "./FilterPrice"

export default function Filters({ register, watch, setValue, onReset }) {
	const flavors = useFlavors()

	return (
		<div className="grid gap-4 bg-white rounded-3xl p-7">
			<div className="flex justify-between items-center">
				<h2 className="font-medium text-2xl">Filters</h2>
				<button 
					onClick={onReset} 
					type="button"
					className="text-lg text-pink-400 hover:text-pink-500"
				>
					Reset All
				</button>
			</div>

			<div className="pb-6 border-b border-gray-200">
				<FilterPrice register={register} />
			</div>

			<FilterFlavor 
				flavors={flavors}
				watch={watch}
				setValue={setValue}
			/>
		</div>
	)
}