import Customers from "./Customers"

const Hero = () => {
	return (
		<section className="grid justify-center items-center gap-10 text-center">
			<h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-7xl font-bold">
				<span className="text-pink-400">Freshly Baked</span> <br /> 
				Donuts & Happiness
			</h1>
			<p className="max-w-[720px] text-lg">
				Soft, fluffy, and glazed to perfection — our handcrafted donuts are made 
				fresh daily using the finest ingredients. Treat yourself to pure sweetness 
				and discover your new favorite flavor today!
			</p>
			<div className="flex gap-5 justify-center">
				{/* <OrderButton className="bg-pink-400 text-white hover:bg-pink-500" />
				<ContactButton /> */}
			</div>
			<Customers />
		</section>
	)
}

export default Hero