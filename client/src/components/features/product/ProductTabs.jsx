import { useState } from 'react'

const tabs = [
	{ id: 'nutrition',   label: 'Nutritional Info' },
	{ id: 'ingredients', label: 'Ingredients'      },
	{ id: 'storage',     label: 'Storage & Care'   }
]

export default function ProductTabs({ product }) {
	const [active, setActive] = useState('nutrition')

	return (
		<div className="space-y-3">
			<div className="flex p-1 gap-2 overflow-hidden bg-white rounded-full">
				{tabs.map(tab => (
					<button
						key={tab.id}
						onClick={() => setActive(tab.id)}
						className={`flex-1 py-4 rounded-full text-sm font-medium transition-all ${
							active === tab.id
								? 'bg-gray-50 font-semibold'
								: 'hover:text-pink-400'
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className="bg-white rounded-3xl p-7">
				{active === 'nutrition'   && <NutritionTab   product={product} />}
				{active === 'ingredients' && <IngredientsTab product={product} />}
				{active === 'storage'     && <StorageTab     product={product} />}
			</div>
		</div>
	)
}

const NutritionTab = ({ product: { nutritionalInfo, countInBox } }) => {
	if (!nutritionalInfo) return <p className='text-gray-500'>No data available</p>

	const rows = [
		{
			label: 'Calories',
			donut: nutritionalInfo.perDonut.calories, 
			box: nutritionalInfo.perBox.calories
		},
		{
			label: 'Protein',
			donut: nutritionalInfo.perDonut.protein,
			box: nutritionalInfo.perBox.protein
		},
		{
			label: 'Fat',
			donut: nutritionalInfo.perDonut.fat,
			box: nutritionalInfo.perBox.fat
		},
		{
			label: 'Carbs',
			donut: nutritionalInfo.perDonut.carbs,
			box: nutritionalInfo.perBox.carbs
		}
	]

	return (
		<table className="w-full text-sm">
			<thead>
				<tr className='font-semibold text-left'>
					<th className="pb-3">Serving Size</th>
					<th className="pb-3">Per Donut</th>
					<th className="pb-3">Per Box ({countInBox})</th>
				</tr>
			</thead>
			<tbody>
				{rows.map(({ label, donut, box }) => (
					<tr key={label}>
						<td className="pb-3 text-gray-500">{label}</td>
						<td className="pb-3">{donut}</td>
						<td className="pb-3">{box}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

const IngredientsTab = ({ product: { ingredients, flavor } }) => {
	if (!ingredients?.length) return <p className="text-gray-500">No data available</p>

	const regular   = ingredients.filter(i => !i.isAllergen)
	const allergens = ingredients.filter(i =>  i.isAllergen)

	return (
		<div className="space-y-3">
			<ul className="flex flex-col">
				<h3 className="font-semibold">Our {flavor} are crafted with the ingridients:</h3>
				<li className="">
					{regular.map((i, idx) => (
						<span key={idx} className="flex items-center gap-2">
							<span className='text-pink-400 text-2xl'>•</span> {i.name}
						</span>
					))}
				</li>
			</ul>

			{allergens.length > 0 && (
				<ul>
					<h3 className="font-semibold">Allergens:</h3>
					<li>
						{allergens.map((i, idx) => (
							<span key={idx} className="flex items-center gap-2">
								<span className='text-pink-400 text-2xl'>•</span>{i.name}
							</span>
						))}
					</li>
				</ul>
			)}
		</div>
	)
}

const StorageTab = ({ product: { storageAndCare } }) => {
	if (!storageAndCare) return <p className="text-gray-500">No data available</p>

	const { temperature, instructions, shelfLife } = storageAndCare

	return (
		<div className="space-y-3">
			<ul>
				<h3 className="font-semibold">Storage Instructions</h3>
				{[temperature, ...instructions].map((item, i) => (
					<li key={i} className="flex items-center gap-2">
						<span className='text-pink-400 text-2xl'>•</span>
						{item}
					</li>
				))}
			</ul>
			<ul>
				<h3 className="font-semibold">Shelf Life</h3>
				<li className="flex items-center gap-2">
					<span className="text-pink-400 text-2xl">•</span>
					{shelfLife}
				</li>
			</ul>
		</div>
	)
}