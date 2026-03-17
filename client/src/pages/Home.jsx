import { motion } from "framer-motion"
import Hero from "../components/features/home/Hero"
import { AD } from "../assets/assets"
import { Faq } from "../components/features/home/Faq"
import Products from "../components/features/home/Products"
import About from "../components/features/home/About"
import Delivery from "../components/features/home/Delivery"
import { pageTransition } from "../utils/animations"

const Home = () => {
	return (
		<motion.section
			className="space-y-20"
			variants={pageTransition}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<Hero />
			<div className="w-full rounded-full" id="ad">
				<video src={AD} autoPlay loop muted playsInline className="w-full h-auto object-cover rounded-3xl"/>
			</div>
			<About />
			<Products />
			<Delivery />
			<Faq />
		</motion.section>
	)
}

export default Home