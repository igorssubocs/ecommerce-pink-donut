import { Truck, Thermometer, Leaf, Gift } from 'lucide-react'

const advantages = [
	{
		icon: Truck,
		title: 'Free Next-Day Delivery',
		desc: 'on all orders over $50'
	},
	{
		icon: Thermometer,
		title: 'Temperature-Safe Shipping',
		desc: 'arrives fresh and intact'
	},
	{
		icon: Leaf,
		title: 'Natural Ingredients',
		desc: 'no preservatives'
	},
	{
		icon: Gift,
		title: 'Perfect Gift',
		desc: 'elegant, ready-to-gift packaging'
	}
]

export default function Advantages() {
	return (
		<div className="grid grid-cols-2 gap-5">
			{advantages.map(({ icon: Icon, title, desc }) => (
				<div key={title} className="flex items-center space-x-2">
					<Icon className="w-5 h-5 text-pink-400" />
					<div>
						<h3 className="font-semibold text-sm">{title}</h3>
						<p className="text-gray-500 text-sm">{desc}</p>
					</div>
				</div>
			))}
		</div>
	)
}