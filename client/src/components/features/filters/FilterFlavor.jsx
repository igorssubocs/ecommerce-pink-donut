import { motion } from 'framer-motion'
import { staggerItem } from '../../../utils/animations'

const FilterFlavor = ({ flavors, watch, setValue }) => {
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
					<motion.li key={flavor} variants={staggerItem}>
						<label className="flex items-center gap-2 cursor-pointer hover:text-pink-500">
							<input
								type="checkbox"
								checked={selected.includes(flavor)}
								onChange={() => toggle(flavor)}
								className="w-5 h-5 accent-pink-400"
							/>
							<span>{flavor}</span>
						</label>
					</motion.li>
				))}
			</ul>
		</div>
	)
}

export default FilterFlavor