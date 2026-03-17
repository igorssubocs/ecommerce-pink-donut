const springSnappy = { type: 'spring', stiffness: 400, damping: 17 }
const springPulse = { type: 'spring', stiffness: 400, damping: 10 }
const tweenBounce = {
	type: 'tween',
	duration: 0.4,
	repeat: Infinity,
	repeatType: 'reverse',
	ease: 'easeInOut'
}

export const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 }
}

export const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const fadeInDown = {
	initial: { opacity: 0, y: -30 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const scaleIn = {
	initial: { opacity: 0, scale: 0.8 },
	animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
}

export const slideInLeft = {
	initial: { opacity: 0, x: -50 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

export const slideInRight = {
	initial: { opacity: 0, x: 50 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

export const rotateIn = {
	initial: { opacity: 0, rotate: -10 },
	animate: { opacity: 1, rotate: 0, transition: { duration: 0.5 } }
}

export const pageTransition = {
	initial: { opacity: 0, x: -20 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
	exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
}

export const staggerContainer = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
}

export const staggerItem = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 }
}

export const modalBackdrop = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 }
}

export const modalContent = {
	initial: { opacity: 0, scale: 0.8, y: 50 },
	animate: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { type: 'spring', damping: 25, stiffness: 300 }
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		y: 50,
		transition: { duration: 0.15 }
	}
}

export const scaleOnHover = {
	rest: { scale: 1 },
	hover: { scale: 1.05, transition: springSnappy },
	tap: { scale: 0.95, transition: springSnappy }
}

export const buttonHover = {
	rest: { scale: 1 },
	hover: { scale: 1.05 },
	tap: { scale: 0.95 }
}

export const buttonPulse = {
	rest: { scale: 1 },
	hover: { scale: 1.05, transition: springPulse },
	tap: { scale: 0.95, transition: springPulse }
}

export const cardHover = {
	rest: { y: 0 },
	hover: { y: -8, transition: { duration: 0.3 } }
}

export const cardTap = {
	rest: { scale: 1 },
	tap: { scale: 0.98 }
}

export const cardInteractive = {
	rest: { y: 0, scale: 1 },
	hover: { y: -8, scale: 1.01, transition: { duration: 0.3 } },
	tap: { scale: 0.98, transition: { duration: 0.08 } }
}

export const bounce = {
	rest: { y: 0 },
	hover: { y: -5, transition: tweenBounce }
}