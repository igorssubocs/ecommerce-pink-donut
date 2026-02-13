import { CUSTOMERS } from '../../../assets/assets'

const Customers = () => {
	return (
		<div className="flex justify-center gap-2">
			<div className="flex -space-x-6">
				{CUSTOMERS.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`customer${index + 1}`}
						className="w-12 h-12 rounded-full border-2 border-white"
					/>
				))}
			</div>
			<p className="text-left">
				Trusted by 5.000+ happy <br /> customers worldwide
			</p>
		</div>
	)
}

export default Customers