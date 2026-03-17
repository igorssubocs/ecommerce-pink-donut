import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion'
import { buttonPulse } from '../../../utils/animations'

const Button = ({ children, to, href, className = "", ...props }) => {
	const baseStyle = "inline-flex items-center justify-center px-10 py-4 transition-all duration-300"
	const motionProps = {
		variants: buttonPulse,
		initial: 'rest',
		whileHover: 'hover',
		whileTap: 'tap'
	}

	if (to) {
		const MotionNavLink = motion(NavLink)
		return (
			<MotionNavLink to={to} className={`${baseStyle} ${className}`} {...motionProps} {...props}>
				{children}
			</MotionNavLink>
		)
	}
	if (href) {
		return (
			<motion.a href={href} className={`${baseStyle} ${className}`} {...motionProps} {...props}>
				{children}
			</motion.a>
		)
	}

	return (
		<motion.button className={`${baseStyle} ${className}`} {...motionProps} {...props}>
			{children}
		</motion.button>
	)
}

export default Button