import Hero from "../components/features/home/Hero"
import { AD } from "../assets/assets"
import { Faq } from "../components/features/home/Faq"
import Products from "../components/features/home/Products"

const Home = () => {
	return (
		<div className="space-y-20">
			<Hero />
			<section className="w-full rounded-full" id="ad">
				<video src={AD} autoPlay loop muted playsInline className="w-full h-auto object-cover rounded-3xl"/>
			</section>
			<Products />
			<div className="" id="#faq">
				<Faq />
			</div>
		</div>
	)
}

export default Home