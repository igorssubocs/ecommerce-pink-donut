import React from 'react'
import { ABOUT_IMAGES } from '../../../assets/assets'

const About = () => {
	return (
		<section className="mx-auto" id="about">
			<h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-10">
				Resource is <span className="text-pink-400 italic">the perfect and cozy place</span> where you can enjoy a variety of hot beverages,
				relax, catch up with friends, or get some work done.
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				<div className="flex flex-col gap-5">
					<img
						src={ABOUT_IMAGES[0]}
						alt="Image with donuts and drinks on the table"
						className="rounded-3xl object-cover w-full aspect-[4/2] opacity-80 hover:opacity-100 transition-all duration-200"
					/>
					<img
						src={ABOUT_IMAGES[1]}
						alt="Freiends eating donuts"
						className="rounded-3xl object-cover w-full aspect-square opacity-80 hover:opacity-100 transition-all duration-200"
					/>
				</div>
				<div className="flex flex-col gap-5">
					<img
						src={ABOUT_IMAGES[2]}
						alt="Frients talking, drinking and eating donuts"
						className="rounded-3xl object-cover w-full aspect-square opacity-80 hover:opacity-100 transition-all duration-200"
					/>
					<img 
						src={ABOUT_IMAGES[3]} alt="Image with donut and coffee" 
						className="rounded-3xl object-cover w-full aspect-[4/2] opacity-80 hover:opacity-100 transition-all duration-200"
					/>
				</div>

			</div>
		</section>
	)
}

export default About