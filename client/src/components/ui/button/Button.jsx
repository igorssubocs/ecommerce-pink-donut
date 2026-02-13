import { NavLink } from "react-router-dom"

const Button = ({ children, to, href, className = "", ...props }) => {
	const baseStyle = "inline-flex items-center px-10 py-4 rounded-full transition-all duration-300"

	if (to) {
		return <NavLink to={to} className={`${baseStyle} ${className}`} {...props}>{children}</NavLink>
	}
	if (href) {
		return <a href={href} className={`${baseStyle} ${className}`} {...props}>{children}</a>
	}

	return (
		<button 
			className={`${baseStyle} ${className}`} {...props}
		>
			{children}
		</button>
	)
}

export default Button