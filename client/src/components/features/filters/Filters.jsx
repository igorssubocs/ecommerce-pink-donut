import { useFlavors } from "../../../hooks/useFlavors"
import FilterFlavor from "./FilterFlavor"
import FilterPrice from "./FilterPrice"
import { motion } from 'framer-motion'
import { staggerContainer } from '../../../utils/animations'

const Filters = ({ register, watch, setValue, onReset }) => {
	const flavors = useFlavors()

	return (
		<motion.div 
			className="grid gap-4 bg-white rounded-3xl p-7" 
			variants={staggerContainer} 
			initial="initial" 
			animate="animate"
		>
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
		</motion.div>
	)
}

export default Filters