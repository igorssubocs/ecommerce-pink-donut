import { Link } from 'react-router-dom'
import Button from '../components/ui/button/Button'
import { motion } from 'framer-motion'
import { pageTransition } from '../utils/animations'

const NotFound = () => {
	return (
		<motion.div 
			className="h-full flex items-center justify-center" id="notfound"
			variants={pageTransition}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<div className="text-center space-y-5">
				<div className="space-y-3">
					<h1 className="text-9xl font-bold text-pink-400">404</h1>
					<h2 className="text-3xl md:text-4xl font-bold">
						Oops! Page Not Found
					</h2>
					<p className="text-gray-500 max-w-md mx-auto">
						The page you are looking for might have been removed, 
						had its name changed, or is temporarily unavailable.
					</p>
				</div>
				<Button
					to="/"
					className="bg-pink-400 text-white rounded-full hover:bg-pink-500"
				>
					Back to Home
				</Button>
			</div>
		</motion.div>
	)
}

export default NotFound