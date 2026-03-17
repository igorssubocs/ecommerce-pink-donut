import { motion } from "framer-motion"
import { fadeInUp } from "../../../utils/animations"
import { PHONE } from "../../../assets/assets"
import Button from "../../ui/button/Button"

const Delivery = () => {
	return (
		<motion.section
			className="mx-auto bg-white rounded-[64px] overflow-hidden"
			id="delivery"
			variants={fadeInUp}
			initial="initial"
			animate="animate"
		>
			<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
				<div className="flex flex-col space-y-5 lg:space-y-10 max-w-xl p-20">
					<div className="space-y-3 lg:space-y-5">
						<h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
							Order your favorite donuts on Wolt
						</h2>
						<p className="text-gray-500">
							Scan the QR code to open our store on Wolt and get fresh, 
							delicious donuts delivered straight to your door in minutes.
						</p>
					</div>
					<Button
						to="/catalog"
						className="bg-pink-400 text-white hover:bg-pink-500 rounded-full w-fit"
					>
						Order Now
					</Button>
				</div>
				<div className="flex justify-center lg:justify-end">
					<img 
						src={PHONE} 
						alt="QR code for Wolt app with a phone in hand" 
						className="w-full max-w-3xl h-auto object-contain object-bottom"
					/>
				</div>
			</div>
		</motion.section>
	)
}

export default Delivery