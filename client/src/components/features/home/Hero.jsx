import Customers from "./Customers"
import Button from '../../ui/button/Button'

const Hero = () => {
	return (
		<section className="grid justify-center items-center gap-10 text-center" id="hero">
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
				<Button to="/catalog" className="bg-pink-400 text-white hover:bg-pink-500 rounded-full">
					Order Now
				</Button>
				<Button href="mailto:info@donut-shop.com" className="border-2 border-pink-400 text-pink-400 hover:bg-pink-50 rounded-full">
					Contact Us
				</Button>
			</div>
			<Customers />
		</section>
	)
}

export default Hero